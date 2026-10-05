const { chromium } = require('playwright-core');

// 全局 Toast 验收：
//   宿主 Teleport 到 body / z-index / 位置 · 四类配色走 token · 多条不重叠
//   超时自动消失 · 手动关闭 · action 回调后自动关闭 · hover 暂停倒计时
//   任意页面可弹出 · 跨路由保留 · reduced-motion 退化为瞬时
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

const HOST = '[data-pencil-name="ToastHost"]';

// 在页面上下文里调用 useToast()（与 app 共享同一模块实例）
const push = (page, opts) =>
  page.evaluate(async (o) => {
    const mod = await import('/src/composables/useToast.js');
    return mod.useToast().toast(o);
  }, opts);

const clearAll = (page) =>
  page.evaluate(async () => {
    const mod = await import('/src/composables/useToast.js');
    const { toasts, dismiss } = mod.useToast();
    [...toasts.value].forEach((t) => dismiss(t.id));
  });

const titles = (page) =>
  page.evaluate(
    (sel) => [...document.querySelectorAll(sel + ' .toast')].map((el) => el.querySelector('.toast-title').textContent),
    HOST
  );

// 取某个 token 的解析后颜色（用探针元素读出，避免手写十六进制）
const tokenColor = (page, token) =>
  page.evaluate((t) => {
    const probe = document.createElement('span');
    probe.style.color = `var(${t})`;
    document.body.appendChild(probe);
    const c = getComputedStyle(probe).color;
    probe.remove();
    return c;
  }, token);

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  try {
    await page.goto(BASE + '/home', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    // —— T1 宿主：Teleport 到 body、z-index ≥ 200 ——
    const host = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        parent: el.parentElement.tagName,
        z: parseInt(cs.zIndex, 10),
        position: cs.position,
        top: Math.round(r.top),
        rightGap: Math.round(window.innerWidth - r.right),
      };
    }, HOST);
    check('T1 宿主 Teleport 到 body 且 z-index ≥ 200', !!host && host.parent === 'BODY' && host.position === 'fixed' && host.z >= 200, host);
    check('T2 宿主在导航(64px)之下、右上角对齐', !!host && host.top >= 64 && host.rightGap === 24, host);

    // —— T3 四类配色分别走 --sv-success/-danger/-ink/-accent ——
    const expected = {
      success: await tokenColor(page, '--sv-success'),
      error: await tokenColor(page, '--sv-danger'),
      info: await tokenColor(page, '--sv-ink'),
      undo: await tokenColor(page, '--sv-accent'),
    };
    for (const type of ['success', 'error', 'info', 'undo']) {
      await clearAll(page);
      await page.waitForTimeout(240);
      await push(page, { type, title: `T-${type}`, duration: 0 });
      await page.waitForTimeout(240);
      const got = await page.evaluate((sel) => {
        const item = document.querySelector(sel + ' .toast');
        return {
          attr: item.getAttribute('data-toast-type'),
          iconColor: getComputedStyle(item.querySelector('.toast-icon')).color,
          radius: parseFloat(getComputedStyle(item).borderRadius),
        };
      }, HOST);
      const radiusToken = parseFloat(
        await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--sv-radius-lg'))
      );
      check(
        `T3[${type}] 图标色=--sv-${type} 且圆角=--sv-radius-lg`,
        got.attr === type && got.iconColor === expected[type] && Math.abs(got.radius - radiusToken) < 0.6,
        { ...got, expected: expected[type], radiusToken }
      );
    }

    // —— T4 多条同时存在且不重叠 ——
    await clearAll(page);
    await page.waitForTimeout(240);
    await push(page, { type: 'info', title: 'One', duration: 0 });
    await push(page, { type: 'success', title: 'Two', duration: 0 });
    await push(page, { type: 'undo', title: 'Three', duration: 0 });
    await page.waitForTimeout(320);
    const stack = await page.evaluate(
      (sel) =>
        [...document.querySelectorAll(sel + ' .toast')]
          .map((el) => {
            const r = el.getBoundingClientRect();
            return { top: r.top, bottom: r.bottom, left: Math.round(r.left), right: Math.round(r.right) };
          })
          .sort((a, b) => a.top - b.top),
      HOST
    );
    const overlap = stack.some((r, i) => i > 0 && r.top < stack[i - 1].bottom - 0.5);
    check(
      'T4 三条同屏堆叠且互不重叠',
      stack.length === 3 && !overlap && stack.every((r) => r.left === stack[0].left && r.right === stack[0].right),
      stack
    );

    // —— T5 超时自动消失 ——
    await clearAll(page);
    await page.waitForTimeout(240);
    await push(page, { type: 'info', title: 'Auto', duration: 600 });
    await page.waitForTimeout(300);
    const beforeTimeout = (await titles(page)).includes('Auto');
    await page.waitForTimeout(1000);
    const afterTimeout = (await titles(page)).includes('Auto');
    check('T5 超时后自动消失', beforeTimeout && !afterTimeout, { beforeTimeout, afterTimeout });

    // —— T6 手动关闭 ——
    await clearAll(page);
    await page.waitForTimeout(240);
    await push(page, { type: 'error', title: 'Manual', duration: 0 });
    await page.waitForTimeout(240);
    await page.locator(HOST + ' .toast-close').first().click();
    await page.waitForTimeout(300);
    check('T6 点关闭按钮后消失', !(await titles(page)).includes('Manual'));

    // —— T7 action 回调执行 + 该条自动关闭 ——
    await clearAll(page);
    await page.waitForTimeout(240);
    await page.evaluate(async () => {
      window.__undone = 0;
      const mod = await import('/src/composables/useToast.js');
      mod.useToast().toast({
        type: 'undo',
        title: 'Deleted 3 files',
        duration: 0,
        action: { label: 'Undo', onClick: () => { window.__undone += 1 } },
      });
    });
    await page.waitForTimeout(260);
    const actionLabel = await page.locator(HOST + ' .toast-action').first().textContent();
    await page.locator(HOST + ' .toast-action').first().click();
    await page.waitForTimeout(320);
    const undone = await page.evaluate(() => window.__undone);
    check(
      'T7 action 点击执行回调并自动关闭该条',
      actionLabel.trim() === 'Undo' && undone === 1 && !(await titles(page)).includes('Deleted 3 files'),
      { actionLabel: actionLabel.trim(), undone }
    );

    // —— T8 hover 暂停倒计时，移开后继续 ——
    await clearAll(page);
    await page.waitForTimeout(240);
    await push(page, { type: 'info', title: 'Hover', duration: 500 });
    await page.waitForTimeout(150);
    await page.locator(HOST + ' .toast').first().hover();
    await page.waitForTimeout(1400); // 远超 500ms：若未暂停，早已消失
    const heldWhileHover = (await titles(page)).includes('Hover');
    await page.mouse.move(700, 120, { steps: 5 }); // hover 结束后剩余时长继续跑
    await page.waitForTimeout(1000);
    const goneAfterHover = !(await titles(page)).includes('Hover');
    check('T8 hover 暂停倒计时、移开后继续并消失', heldWhileHover && goneAfterHover, { heldWhileHover, goneAfterHover });

    // —— T9 跨路由保留（在 /home 创建，切到 /library 仍在）——
    await clearAll(page);
    await page.waitForTimeout(240);
    await push(page, { type: 'info', title: 'Global', duration: 0 });
    await page.waitForTimeout(240);
    await page.locator('[data-pencil-name^="NavItem/"]').nth(1).click();
    await page.waitForTimeout(500);
    const survivedRoute = (await titles(page)).includes('Global');
    check('T9 跨路由保留（宿主在 App 层，非页面层）', survivedRoute && !page.url().endsWith('/home'), {
      survivedRoute,
      url: page.url(),
    });

    // —— T10 任意页面均可弹出 ——
    const perPage = [];
    for (const path of ['/settings', '/scan-import', '/review-queue']) {
      await page.goto(BASE + path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      await push(page, { type: 'info', title: 'P-' + path, duration: 0 });
      await page.waitForTimeout(260);
      perPage.push({ path, ok: (await titles(page)).includes('P-' + path) });
    }
    check('T10 任意页面调用均可弹出', perPage.every((p) => p.ok), perPage);

    // —— T11 reduced-motion 下过渡退化为瞬时 ——
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const rm = await page.evaluate((sel) => {
      const item = document.querySelector(sel + ' .toast');
      const cs = getComputedStyle(item);
      const dur = cs.transitionDuration.split(',').map((s) => parseFloat(s));
      return { durations: cs.transitionDuration, max: Math.max(...dur) };
    }, HOST);
    check('T11 reduced-motion 下 transition-duration ≈ 0', rm.max <= 0.001, rm);
    await page.emulateMedia({ reducedMotion: null });

    // —— T12 Settings 失败分支 → error toast ——
    // UI 上没有失败触发点，用 route 改写模块源码把 `if (fail) throw` 变成必然抛错，
    // 从而端到端验证 SettingsView 的 catch → error toast 接线。
    await page.route('**/useSettingsActions.js*', async (route) => {
      const res = await route.fetch();
      const body = (await res.text()).replace(/if \(fail\) throw/g, 'if (true) throw');
      await route.fulfill({ response: res, body });
    });
    await page.goto(BASE + '/settings', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await clearAll(page);
    await page.locator('[data-pencil-name="AsyncBtn"]').first().click();
    await page.waitForTimeout(150);
    // 清缓存现在先二次确认；失败分支在确认后才触发
    await page.click('[data-pencil-name="ConfirmAccept"]');
    await page.waitForTimeout(1400);
    const errToast = await page.evaluate((sel) => {
      const item = document.querySelector(sel + ' .toast');
      return item
        ? {
            type: item.getAttribute('data-toast-type'),
            title: item.querySelector('.toast-title').textContent,
            message: item.querySelector('.toast-message')?.textContent ?? '',
            iconColor: getComputedStyle(item.querySelector('.toast-icon')).color,
          }
        : null;
    }, HOST);
    check(
      'T12 Settings 失败分支 → error toast（红系）',
      !!errToast && errToast.type === 'error' && errToast.iconColor === expected.error && /failed/i.test(errToast.title),
      errToast
    );
    await page.unroute('**/useSettingsActions.js*');
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
