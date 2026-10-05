const { chromium } = require('playwright-core');

// 页面切换过渡回归：
//   1) 切换时新旧页各自挂上 page-leave-*/page-enter-* 类（进入淡入+上移、离开淡出，out-in）
//   2) TopNav 处于过渡层之外，跨路由为同一个 DOM 节点（不重挂、不闪烁）
//   3) 时长走 --sv-dur-move（正常 0.18s）；reduced-motion 下由全局规则降级为 ~0
//   4) 无 Vue/控制台告警（含 Transition 多根节点告警）
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const NAV = '[data-pencil-name="TopNav"]';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

// 临时挂一个 .page-enter-active 元素，读全局过渡时长
const probeDuration = (page) =>
  page.evaluate(() => {
    const d = document.createElement('div');
    d.className = 'page-enter-active';
    document.body.appendChild(d);
    const v = getComputedStyle(d).transitionDuration;
    d.remove();
    return v;
  });

// 用 rAF 采样真实视觉值（类名是瞬时的，观察器读到的可能是最终 classList）
async function armSampler(page) {
  await page.evaluate(() => {
    window.__vis = { leave: [], enter: [] };
    const t0 = performance.now();
    (function tick() {
      const oldEl = document.querySelector('.page-root'); // HomeView（离开中）
      if (oldEl) window.__vis.leave.push(parseFloat(getComputedStyle(oldEl).opacity));
      const newEl = document.querySelector('.library-flow'); // Library（进入中）
      if (newEl) {
        const cs = getComputedStyle(newEl);
        const m = cs.transform.match(/matrix\(([^)]+)\)/);
        window.__vis.enter.push({
          o: parseFloat(cs.opacity),
          ty: m ? parseFloat(m[1].split(',')[5]) : 0,
        });
      }
      if (performance.now() - t0 < 700) requestAnimationFrame(tick);
    })();
  });
}

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });

  // ---------- 正常模式 ----------
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const problems = [];
  page.on('pageerror', (e) => problems.push('pageerror: ' + e.message));
  page.on('console', (m) => {
    // 过滤与本次改动无关的静态资源 404（favicon 等），只关心 Vue 告警与脚本错误
    if ((m.type() === 'error' || m.type() === 'warning') && !/Failed to load resource/.test(m.text())) {
      problems.push(`${m.type()}: ${m.text()}`);
    }
  });

  try {
    await page.goto(BASE + '/home', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    check('T1 首页渲染出常驻 TopNav 与页面主体', (await page.$(NAV)) !== null && (await page.$('.page-root')) !== null);

    const durNormal = await probeDuration(page);
    check('T2 过渡时长取 --sv-dur-move（0.18s）', /0\.18s/.test(durNormal), { durNormal });

    // 记录 TopNav 节点引用 + 开视觉采样器，然后切到 /library
    await page.evaluate((sel) => {
      window.__navRef = document.querySelector(sel);
    }, NAV);
    await armSampler(page);
    await page.locator('[data-pencil-name="NavItem/Library"]').click();
    await page.waitForTimeout(900);

    const vis = await page.evaluate(() => window.__vis);
    const minLeave = vis.leave.length ? Math.min(...vis.leave) : 1;
    const enterMove = vis.enter.some((s) => s.o < 0.95 && s.ty > 1);
    check('T3 离开旧页有淡出（采样到 opacity < 1）', minLeave < 0.95, { samples: vis.leave.length, minLeave });
    check('T4 进入新页淡入 + 上移（opacity<1 且 translateY>0）', enterMove, {
      samples: vis.enter.length,
      first: vis.enter[0] ?? null,
      maxTy: vis.enter.length ? Math.max(...vis.enter.map((s) => s.ty)) : null,
    });

    const same = await page.evaluate((sel) => {
      const now = document.querySelector(sel);
      return { identity: now === window.__navRef, present: !!now };
    }, NAV);
    check('T5 TopNav 为同一 DOM 节点：跨路由不重挂、不闪烁', same.present && same.identity, same);

    check('T6 已切到 /library 且过渡层外的主体仍在', page.url().includes('/library') && (await page.$('.library-flow')) !== null, {
      url: page.url(),
    });

    // 过渡结束后不应残留 transform / 内联过渡类（避免影响 Library 内部绝对定位层）
    const residual = await page.evaluate(() => {
      const el = document.querySelector('.library-flow');
      const cs = getComputedStyle(el);
      return { transform: cs.transform, opacity: cs.opacity, cls: el.className };
    });
    check(
      'T7 过渡结束后无残留 transform / 过渡类（transform≈none、opacity=1）',
      (residual.transform === 'none' || residual.transform === 'matrix(1, 0, 0, 1, 0, 0)') &&
        residual.opacity === '1' &&
        !/page-(enter|leave)/.test(residual.cls),
      residual
    );

    check('T8 无 Vue/控制台告警或错误（含 Transition 多根节点告警）', problems.length === 0, { problems });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }
  await page.close();

  // ---------- reduced-motion 模式 ----------
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  const rp = await ctx.newPage();
  try {
    await rp.goto(BASE + '/home', { waitUntil: 'networkidle' });
    await rp.waitForTimeout(500);
    const r = await rp.evaluate(() => ({
      mql: matchMedia('(prefers-reduced-motion: reduce)').matches,
      dur: (() => {
        const d = document.createElement('div');
        d.className = 'page-enter-active';
        document.body.appendChild(d);
        const v = getComputedStyle(d).transitionDuration;
        d.remove();
        return v;
      })(),
    }));
    check('T9 reduced-motion 生效且过渡时长降级为 ~0（瞬时切换）',
      r.mql === true && /0\.00001s|1e-05/.test(r.dur) && !/0\.18s/.test(r.dur), r);

    await rp.locator('[data-pencil-name="NavItem/Library"]').click();
    await rp.waitForTimeout(400);
    const okPath = rp.url().includes('/library');
    check('T10 reduced-motion 下仍可正常切换路由', okPath, { url: rp.url() });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }
  await ctx.close();

  await browser.close();
  const failed = results.filter((x) => !x).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
