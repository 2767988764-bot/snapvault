const { chromium } = require('playwright-core');

// DocumentDetailView 顶栏操作验证：
//   F*  收藏：点击 FavIcon 切换 is-fav，星形实心填 --sv-warn(#8A5A00)，toast info；再点还原；键盘可切换
//   R*  重命名：点 SideTitleEdit → 标题行变 input 且自动聚焦；Enter 确认同步面包屑末级 + 侧栏 Title + 页面标题 + toast success；Esc 取消不改名
//   M*  更多菜单：打开（4 项 + 分隔线）、未接入项 toast「功能待接入后端」、外部点击关闭、Esc 关闭回焦按钮、↑↓ + Enter 可用
//   D*  删除：菜单「删除」→ 确认层出现；Esc 取消；确认 → 返回上一页 + undo toast；点撤销有效
//   K*  FavIcon / SideTitleEdit / MoreBtn 可键盘聚焦
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

const WARN = 'rgb(138, 90, 0)'; // tokens.css --sv-warn (#8A5A00)

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const path = () => page.evaluate(() => location.pathname);

  // 队列顺序 = 渲染顺序，[0] 恒为最新一条
  const newestToast = () =>
    page.evaluate(() => {
      const el = document.querySelector('.toast-stack .toast');
      if (!el) return null;
      const type = [...el.classList].find((c) => c.startsWith('is-'));
      return {
        type: type ? type.slice(3) : null,
        title: (el.querySelector('.toast-title')?.textContent || '').trim(),
        message: (el.querySelector('.toast-message')?.textContent || '').trim(),
        hasAction: !!el.querySelector('.toast-action'),
        actionLabel: (el.querySelector('.toast-action')?.textContent || '').trim() || null,
      };
    });

  const clearToasts = async () => {
    await page.evaluate(() => {
      document.querySelectorAll('.toast-stack .toast-close').forEach((b) => b.click());
    });
    await page.waitForTimeout(420);
  };

  const focusable = (sel) =>
    page.evaluate((s) => {
      const el = document.querySelector(s);
      if (!el) return 'missing';
      el.focus();
      return document.activeElement === el ? 'ok' : 'fail:' + (document.activeElement?.tagName || 'none');
    }, sel);

  const favState = () =>
    page.evaluate(() => {
      const svg = document.querySelector('[data-pencil-name="FavIcon"]');
      const star = svg.querySelector('path');
      return {
        isFav: svg.classList.contains('is-fav'),
        fill: getComputedStyle(star).fill,
        stroke: getComputedStyle(star).stroke,
        ariaPressed: svg.getAttribute('aria-pressed'),
        tabindex: svg.getAttribute('tabindex'),
      };
    });

  const titles = () =>
    page.evaluate(() => ({
      crumb: (document.querySelector('[data-pencil-name="CrumbDoc"]')?.textContent || '').trim(),
      side: (document.querySelector('[data-pencil-name="SideTitleValue"]')?.textContent || '').trim(),
      doc: document.title,
    }));

  async function openDoc() {
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    const bar = await page.$('[data-pencil-name="TravelBar"]');
    const r = await bar.boundingBox();
    const cx = r.x + r.width / 2;
    await page.mouse.move(cx, r.y + 10);
    await page.mouse.down();
    for (let i = 1; i <= 20; i++) await page.mouse.move(cx, r.y + 10 - i * 30, { steps: 3 });
    await page.mouse.up();
    await page.waitForTimeout(1100);
    await page.click('.pulled-content [data-pencil-name="FilePreview"]');
    await page.waitForTimeout(700);
  }

  try {
    await openDoc();
    check('前置：已进入文档详情', (await path()) === '/document-detail', { path: await path() });
    await clearToasts();

    // ================= F：收藏 =================
    const f0 = await favState();
    check('F1 初始未收藏（无 is-fav、描边星 fill=none、aria-pressed=false）',
      !f0.isFav && f0.fill === 'none' && f0.ariaPressed === 'false', f0);

    await page.click('[data-pencil-name="FavIcon"]');
    await page.waitForTimeout(300);
    const f1 = await favState();
    const ft1 = await newestToast();
    check('F2 点击后收藏态：is-fav + 实心填 --sv-warn + aria-pressed=true',
      f1.isFav && f1.fill === WARN && f1.stroke === WARN && f1.ariaPressed === 'true', f1);
    check('F3 收藏有 toast info 反馈', ft1 && ft1.type === 'info' && ft1.title.includes('已加入收藏'), ft1);

    await clearToasts();
    await page.click('[data-pencil-name="FavIcon"]');
    await page.waitForTimeout(300);
    const f2 = await favState();
    const ft2 = await newestToast();
    check('F4 再次点击还原（fill=none、is-fav 移除）', !f2.isFav && f2.fill === 'none', f2);
    check('F5 取消收藏有 toast info 反馈', ft2 && ft2.type === 'info' && ft2.title.includes('已取消收藏'), ft2);

    // 键盘切换
    await clearToasts();
    await page.evaluate(() => document.querySelector('[data-pencil-name="FavIcon"]').focus());
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    const f3 = await favState();
    check('F6 键盘 Enter 可切换收藏', f3.isFav && f3.fill === WARN, f3);
    await page.evaluate(() => document.querySelector('[data-pencil-name="FavIcon"]').focus());
    await page.keyboard.press('Space');
    await page.waitForTimeout(300);
    check('F7 键盘 Space 可切换收藏（还原）', !(await favState()).isFav);

    // ================= K：可聚焦 =================
    check('K1 FavIcon 可键盘聚焦', (await focusable('[data-pencil-name="FavIcon"]')) === 'ok');
    check('K2 SideTitleEdit 可键盘聚焦', (await focusable('[data-pencil-name="SideTitleEdit"]')) === 'ok');
    check('K3 MoreBtn 可键盘聚焦', (await focusable('[data-pencil-name="MoreBtn"]')) === 'ok');

    // ================= R：重命名 =================
    await page.click('[data-pencil-name="SideTitleEdit"]');
    await page.waitForTimeout(300);
    const r1 = await page.evaluate(() => {
      const input = document.querySelector('[data-pencil-name="SideTitleInput"]');
      return {
        exists: !!input,
        focused: document.activeElement === input,
        value: input ? input.value : null,
        valueDivGone: !document.querySelector('[data-pencil-name="SideTitleValue"]'),
      };
    });
    check('R1 点铅笔 → 标题行变 input、自动聚焦且带原值', r1.exists && r1.focused && r1.value.includes('Homography') && r1.valueDivGone, r1);

    // Esc 取消：输入新值后 Esc，不应改名
    await page.keyboard.press('Control+A');
    await page.keyboard.type('Should Not Persist');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const r2 = await titles();
    check('R2 Esc 取消内联编辑：input 消失、标题未变',
      !(await page.$('[data-pencil-name="SideTitleInput"]')) && r2.side.includes('Homography') && r2.crumb.includes('Homography'), r2);

    // Enter 确认
    await clearToasts();
    await page.click('[data-pencil-name="SideTitleEdit"]');
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+A');
    await page.keyboard.type('Homography Notes');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(400);
    const r3 = await titles();
    const rt = await newestToast();
    check('R3 Enter 确认：面包屑末级与侧栏 Title 同步更新', r3.crumb === 'Homography Notes' && r3.side === 'Homography Notes', r3);
    check('R4 页面标题同步更新', r3.doc === 'Homography Notes · SnapVault', { doc: r3.doc });
    check('R5 重命名有 toast success 反馈', rt && rt.type === 'success' && rt.title.includes('已重命名'), rt);

    // ================= M：更多菜单 =================
    await clearToasts();
    await page.click('[data-pencil-name="MoreBtn"]');
    await page.waitForTimeout(300);
    const m1 = await page.evaluate(() => {
      const panel = document.querySelector('.more-panel');
      const items = [...panel.querySelectorAll('[data-pencil-name="MoreItem"]')];
      return {
        open: panel.classList.contains('is-open'),
        display: getComputedStyle(panel).display,
        labels: items.map((i) => i.textContent.trim()),
        dividers: panel.querySelectorAll('.more-divider').length,
        dangerBg: getComputedStyle(items[items.length - 1]).color,
        ariaExpanded: document.querySelector('[data-pencil-name="MoreBtn"]').getAttribute('aria-expanded'),
        focusedPanel: document.activeElement === panel,
      };
    });
    check('M1 点击 MoreBtn 展开菜单（3 项未接入 + 删除，含分隔线）',
      m1.open && m1.display === 'flex' && m1.labels.length === 4 &&
      m1.labels[0] === '导出 PDF' && m1.labels[1] === '分享' && m1.labels[2] === '移动…' && m1.labels[3] === '删除' &&
      m1.dividers === 1 && m1.ariaExpanded === 'true', m1);
    check('M2 删除项为 danger 配色', m1.dangerBg === 'rgb(179, 38, 30)', { color: m1.dangerBg });

    await page.locator('.more-panel [data-pencil-name="MoreItem"]').nth(0).click();
    await page.waitForTimeout(300);
    const mt = await newestToast();
    check('M3 点击「导出 PDF」→ toast「功能待接入后端」不静默',
      mt && mt.type === 'info' && mt.title.includes('功能待接入后端') && mt.message === '导出 PDF', mt);
    check('M4 选择后菜单自动关闭', await page.evaluate(() => !document.querySelector('.more-panel').classList.contains('is-open')));

    // 外部点击关闭
    await clearToasts();
    await page.click('[data-pencil-name="MoreBtn"]');
    await page.waitForTimeout(250);
    await page.evaluate(() => {
      document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    });
    await page.waitForTimeout(300);
    check('M5 点击菜单外部关闭', await page.evaluate(() => !document.querySelector('.more-panel').classList.contains('is-open')));

    // Esc 关闭并回焦触发按钮
    await page.click('[data-pencil-name="MoreBtn"]');
    await page.waitForTimeout(250);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const m6 = await page.evaluate(() => ({
      open: document.querySelector('.more-panel').classList.contains('is-open'),
      focused: document.activeElement === document.querySelector('[data-pencil-name="MoreBtn"]'),
    }));
    check('M6 Esc 关闭菜单并回焦 MoreBtn', !m6.open && m6.focused, m6);

    // 键盘 ↑↓ + Enter
    await clearToasts();
    await page.evaluate(() => document.querySelector('[data-pencil-name="MoreBtn"]').focus());
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(250);
    const m7 = await page.evaluate(() => {
      const panel = document.querySelector('.more-panel');
      const items = [...panel.querySelectorAll('[data-pencil-name="MoreItem"]')];
      const act = items.filter((i) => i.classList.contains('is-active'));
      return { open: panel.classList.contains('is-open'), activeIdx: act.length ? items.indexOf(act[0]) : -1, activeBg: act.length && getComputedStyle(act[0]).backgroundColor };
    });
    check('M7 ↓ 展开菜单并将高亮移到第 2 项（is-active）',
      m7.open && m7.activeIdx === 1 && /231, 237, 252/.test(m7.activeBg || ''), m7);

    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    const mt2 = await newestToast();
    check('M8 Enter 选中高亮项（分享）→ toast 待接入', mt2 && mt2.title.includes('功能待接入后端') && mt2.message === '分享', mt2);

    // ================= D：删除（统一 confirmDestroy） =================
    await clearToasts();
    await page.click('[data-pencil-name="MoreBtn"]');
    await page.waitForTimeout(250);
    await page.locator('.more-panel [data-pencil-name="MoreItem"]').nth(3).click();
    await page.waitForTimeout(350);
    const d1 = await page.evaluate(() => {
      const mask = document.querySelector('[data-pencil-name="ConfirmDestroy"]');
      const dlg = document.querySelector('[data-pencil-name="ConfirmDialog"]');
      return {
        mask: !!mask,
        role: dlg?.getAttribute('role') || null,
        text: (dlg?.querySelector('[data-pencil-name="ConfirmText"]')?.textContent || '').trim(),
        acceptLabel: (dlg?.querySelector('[data-pencil-name="ConfirmAccept"]')?.textContent || '').trim(),
        menuClosed: !document.querySelector('.more-panel').classList.contains('is-open'),
      };
    });
    check('D1 菜单「删除」→ 统一确认层出现且菜单关闭', d1.mask && d1.role === 'dialog' && d1.text.includes('Homography Notes') && d1.acceptLabel === '删除' && d1.menuClosed, d1);

    // Esc 取消
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    check('D2 Esc 取消删除：仍在详情页、确认层消失',
      !(await page.$('[data-pencil-name="ConfirmDestroy"]')) && (await path()) === '/document-detail', { path: await path() });

    // 确认删除 → 返回上一页 + undo toast
    await page.click('[data-pencil-name="MoreBtn"]');
    await page.waitForTimeout(250);
    await page.locator('.more-panel [data-pencil-name="MoreItem"]').nth(3).click();
    await page.waitForTimeout(350);
    await page.click('[data-pencil-name="ConfirmAccept"]');
    await page.waitForTimeout(900);
    const d3 = await page.evaluate(() => ({
      confirm: !!document.querySelector('[data-pencil-name="ConfirmDestroy"]'),
    }));
    const dt = await newestToast();
    check('D3 确认删除：确认层关闭并返回上一页（/library）', !d3.confirm && (await path()) === '/library', { path: await path() });
    check('D4 删除后 undo toast 带「撤销」动作',
      dt && dt.type === 'undo' && dt.hasAction && dt.actionLabel === '撤销' && dt.title.includes('Homography Notes'), dt);

    // 删除真的落地：文档数 128→127；撤销后回到 128。
    // 不用卡片文本判定——128 条文档每 12 条同名，删一条看不出来。改用「全选」读 store 总数。
    const docTotal = async () => {
      await page.locator('[data-pencil-name="Results"] [data-pencil-name="Check"]').first().click();
      await page.mouse.move(700, 120);
      await page.waitForTimeout(220);
      await page.locator('[data-pencil-name="BatchCheckbox"]').click();
      await page.waitForTimeout(180);
      const t = await page.evaluate(
        () => (document.querySelector('[data-pencil-name="BatchCount"]')?.textContent || '').trim()
      );
      await page.locator('[data-pencil-name="BatchCheckbox"]').click();
      await page.waitForTimeout(180);
      return t;
    };
    const totalAfterDelete = await docTotal();
    await page.click('.toast-stack .toast-action');
    await page.waitForTimeout(400);
    const ut = await newestToast();
    check('D5 点撤销 → 提示已撤销删除', ut && ut.type === 'success' && ut.title.includes('已撤销删除'), ut);
    const totalAfterUndo = await docTotal();
    check(
      'D6 撤销后文档真正回到库列表（文档数 127→128）',
      totalAfterDelete === '127 selected' && totalAfterUndo === '128 selected',
      { totalAfterDelete, totalAfterUndo }
    );

    // ================= 汇总 =================
    const failed = results.filter((r) => !r).length;
    console.log(`\n${results.length - failed}/${results.length} passed`);
    await browser.close();
    process.exit(failed ? 1 : 0);
  } catch (e) {
    console.log(JSON.stringify({ error: String(e) }, null, 2));
    console.log(`\n${results.filter((r) => r).length}/${results.length} passed (aborted)`);
    await browser.close();
    process.exit(1);
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
