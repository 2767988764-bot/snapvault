const { chromium } = require('playwright-core');

// SearchSuggestPanel / PickerPopover 键盘可达性验证：
//   K1  聚焦 + 输入 → 面板展开、第 1 条结果高亮（--sv-accent-soft）
//   K2  ↓ 高亮下移 1 项；K3 ↑ 回到第 1 项
//   K4  Enter 与点击行为一致（同为 /document-detail）
//   K5  Esc 关闭面板且焦点回到触发输入框
//   K6  Tab 焦点陷阱：焦点始终留在搜索框容器内，并能落到结果项（高亮项）之间
//   K7  点击面板内部不关闭；K8 点击面板外部关闭（document pointerdown）
//   L*  pulled up / search 两个页面同样可用（↓ + Esc）
//   P*  Home PickerPopover：↑↓ 高亮、Enter 选中、Esc 关闭、外部点击关闭、Tab 陷阱、footerHint 一致
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

const ACTIVE_SOFT = 'rgb(231, 237, 252)'; // tokens.css --sv-accent-soft (#E7EDFC)

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 当前真实可见（未被上层遮挡）的搜索框下标
  const inputIndex = () =>
    page.evaluate(() => {
      const els = [...document.querySelectorAll('input.sf-input')];
      for (let i = 0; i < els.length; i++) {
        const r = els[i].getBoundingClientRect();
        if (r.width <= 0 || r.height <= 0) continue;
        const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
        if (top && (els[i] === top || els[i].contains(top))) return i;
      }
      return -1;
    });

  const probe = (i) =>
    page.evaluate((idx) => {
      const input = document.querySelectorAll('input.sf-input')[idx];
      if (!input) return { error: 'no-input' };
      const bar =
        input.closest('[data-pencil-name="SearchBar"], [data-pencil-name="SearchField"]') || input.parentElement;
      const panel = bar.querySelector('.sf-panel');
      const rows = panel ? [...panel.querySelectorAll('.sf-result')] : [];
      const act = rows.filter((r) => r.classList.contains('is-active'));
      const a = document.activeElement;
      return {
        open: panel ? panel.classList.contains('open') : null,
        gridRows: panel ? getComputedStyle(panel).gridTemplateRows : null,
        rows: rows.length,
        activeCount: act.length,
        activeIdx: act.length ? rows.indexOf(act[0]) : -1,
        activeBg: act.length ? getComputedStyle(act[0]).backgroundColor : null,
        activeTitle: act.length ? act[0].querySelector('.sf-result-title').textContent.trim() : null,
        chipCount: panel ? panel.querySelectorAll('.sf-chip').length : 0,
        focusIsInput: a === input,
        focusInside: !!(a && bar.contains(a)),
        focusIsActive: !!(a && a.classList && a.classList.contains('is-active')),
        focusClass: a
          ? `${a.tagName}.${String(a.className || '')}[${a.getAttribute('data-pencil-name') || ''}]`
          : null,
      };
    }, i);

  // 通用：聚焦指定搜索框，清空已有内容后输入（避免上一次用例的残留值拼接）
  async function focusAndType(idx, text) {
    const box = await page.locator('input.sf-input').nth(idx).boundingBox();
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForTimeout(420);
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(text, { delay: 20 });
    await page.waitForTimeout(620);
  }

  async function dragBarUp() {
    const b = await page.$('[data-pencil-name="TravelBar"]');
    const r = await b.boundingBox();
    const cx = r.x + r.width / 2;
    const sy = r.y + 10;
    await page.mouse.move(cx, sy);
    await page.mouse.down();
    for (let i = 1; i <= 20; i++) await page.mouse.move(cx, sy - 30 * i, { steps: 3 });
    await page.mouse.up();
    await page.waitForTimeout(1100);
  }

  try {
    // ================= K：Library hero =================
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1100);
    let i = await inputIndex();
    await focusAndType(i, 'homo');

    const tokenBg = await page.evaluate(() => {
      const d = document.createElement('div');
      d.style.backgroundColor = 'var(--sv-accent-soft)';
      document.body.appendChild(d);
      const c = getComputedStyle(d).backgroundColor;
      d.remove();
      return c;
    });

    const p1 = await probe(i);
    check(
      'K1 输入后第 1 条结果默认高亮，用 --sv-accent-soft',
      p1.open && p1.rows > 0 && p1.activeCount === 1 && p1.activeIdx === 0 && p1.activeBg === tokenBg && tokenBg === ACTIVE_SOFT,
      { rows: p1.rows, activeIdx: p1.activeIdx, bg: p1.activeBg, token: tokenBg }
    );

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(120);
    const p2 = await probe(i);
    check('K2 ↓ 高亮下移（activeIdx 0 → 1）', p2.activeIdx === 1 && p2.activeCount === 1 && p2.activeBg === tokenBg, {
      activeIdx: p2.activeIdx,
      title: p2.activeTitle,
    });

    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(120);
    const p3 = await probe(i);
    check('K3 ↑ 高亮回到第 1 项', p3.activeIdx === 0, { activeIdx: p3.activeIdx, title: p3.activeTitle });

    // Enter：与「点击结果」结果一致（都进文档详情）
    const titleAt0 = p3.activeTitle;
    await page.keyboard.press('Enter');
    await page.waitForTimeout(700);
    const enterUrl = page.url();
    check('K4 Enter 选中高亮项并跳转（与点击一致）', /\/document-detail$/.test(enterUrl), {
      url: enterUrl,
      picked: titleAt0,
    });

    // 对照：点击第 1 条结果同样落到 /document-detail
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    i = await inputIndex();
    await focusAndType(i, 'homo');
    await page.locator('.sf-panel.open .sf-result').first().click();
    await page.waitForTimeout(700);
    check('K4b 点击第 1 条结果与 Enter 目标一致', /\/document-detail$/.test(page.url()), { url: page.url() });

    // Esc：关闭 + 焦点回到输入框
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    i = await inputIndex();
    await focusAndType(i, 'homo');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(420);
    const p4 = await probe(i);
    check(
      'K5 Esc 关闭面板且焦点回到输入框',
      !p4.open && /^0px/.test(p4.gridRows) && p4.focusIsInput,
      { open: p4.open, gridRows: p4.gridRows, focusIsInput: p4.focusIsInput }
    );

    // Tab 焦点陷阱
    await focusAndType(i, 'homo');
    const seq = [];
    for (let n = 0; n < 6; n++) {
      await page.keyboard.press('Tab');
      await page.waitForTimeout(90);
      const s = await probe(i);
      seq.push({ cls: s.focusClass, inside: s.focusInside, isActive: s.focusIsActive, activeCount: s.activeCount });
    }
    check(
      'K6 Tab 焦点陷阱：6 次 Tab 焦点均未逃逸到背景，且能落到高亮项',
      seq.every((s) => s.inside) && seq.some((s) => /sf-result/.test(s.cls || '')),
      seq.map((s) => s.cls)
    );
    // Tab 落到结果项时，高亮（is-active）必须跟着焦点走，且同一时刻只有 1 个高亮
    const tabbed = seq.filter((s) => /sf-result/.test(s.cls || ''));
    check(
      'K6c Tab 在高亮项间移动时，高亮跟随焦点且唯一',
      tabbed.length >= 2 && tabbed.every((s) => s.isActive && s.activeCount === 1),
      tabbed
    );
    // Tab 之后仍可 Esc 关闭并回焦输入框（焦点在面板内时）
    await page.keyboard.press('Escape');
    await page.waitForTimeout(420);
    const p5 = await probe(i);
    check('K6b 焦点在面板内时 Esc 仍能关闭并回焦输入框', !p5.open && p5.focusIsInput, {
      open: p5.open,
      focusIsInput: p5.focusIsInput,
    });

    // 点击面板内部不关闭
    await focusAndType(i, 'homo');
    await page.evaluate(() => {
      const r = document.querySelector('.sf-panel.open .sf-result');
      r.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    });
    await page.waitForTimeout(200);
    check('K7 点击面板内部不关闭', (await probe(i)).open === true);

    // 点击面板外部关闭（document pointerdown）
    await page.evaluate(() => {
      document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    });
    await page.waitForTimeout(300);
    const p6 = await probe(i);
    check('K8 点击面板外部关闭（document pointerdown）', p6.open === false, { open: p6.open });

    // ================= L：pulled up / search =================
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await dragBarUp();
    i = await inputIndex();
    await focusAndType(i, 'homo');
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(120);
    const lp = await probe(i);
    check('L1 pulled up：↑↓/高亮可用', lp.open && lp.activeIdx === 1 && lp.activeBg === tokenBg, {
      activeIdx: lp.activeIdx,
      bg: lp.activeBg,
    });
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    const lp2 = await probe(i);
    check('L2 pulled up：Esc 关闭并回焦输入框', !lp2.open && lp2.focusIsInput, { open: lp2.open });

    // 进入 search 视图（原位切换，搜索框内 Enter；GridBtn/ListBtn 已改为网格/列表切换）
    // 先清空 L1 残留的 'homo'，空关键词时 Enter 才进入完整搜索页（有高亮结果时会跳详情）
    await page.click('.pulled-layer [data-pencil-name="SearchQuery"]');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    i = await inputIndex();
    await focusAndType(i, 'homo');
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(120);
    const sp = await probe(i);
    check('L3 search：↑↓/高亮可用', sp.open && sp.activeIdx === 1 && sp.activeBg === tokenBg, {
      activeIdx: sp.activeIdx,
    });
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    const sp2 = await probe(i);
    check('L4 search：Esc 关闭并回焦输入框', !sp2.open && sp2.focusIsInput, { open: sp2.open });

    // ================= P：Home PickerPopover =================
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    await page.locator('[data-pencil-name="RecentScansCard"] [data-pencil-name="CardAction"]').click();
    await page.waitForTimeout(800);
    await page.mouse.move(1400, 870);
    await page.waitForTimeout(200);

    const ppProbe = () =>
      page.evaluate(() => {
        const root = document.querySelector('.picker-popover');
        if (!root) return { missing: true };
        const rows = [...root.querySelectorAll('.pp-row')];
        const act = rows.filter((r) => r.classList.contains('is-active'));
        const a = document.activeElement;
        return {
          rows: rows.length,
          activeIdx: act.length ? rows.indexOf(act[0]) : -1,
          activeCount: act.length,
          activeBg: act.length ? getComputedStyle(act[0]).backgroundColor : null,
          hint: root.querySelector('.pp-hint').textContent.trim(),
          focusClass: a ? String(a.className || a.tagName) : null,
          focusInRoot: !!(a && root.contains(a)),
          focusIsRoot: a === root,
        };
      });

    const q1 = await ppProbe();
    check('P1 浮层打开后焦点落入浮层，且第 1 行默认高亮', q1.focusIsRoot && q1.activeIdx === 0 && q1.activeBg === ACTIVE_SOFT, {
      focusIsRoot: q1.focusIsRoot,
      activeIdx: q1.activeIdx,
      bg: q1.activeBg,
    });
    check('P2 footerHint 文案与实际行为一致（↑ ↓ to select）', q1.hint === '↑ ↓ to select', { hint: q1.hint });

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(150);
    const q2 = await ppProbe();
    check('P3 ↓ 高亮下移到第 2 行且焦点跟随', q2.activeIdx === 1 && /pp-row/.test(q2.focusClass || ''), {
      activeIdx: q2.activeIdx,
      focusClass: q2.focusClass,
    });

    await page.keyboard.press('Tab');
    await page.waitForTimeout(120);
    const q3 = await ppProbe();
    check('P4 Tab 焦点保持在浮层内（陷阱）', q3.focusInRoot, { focusClass: q3.focusClass });

    await page.keyboard.press('Enter');
    await page.waitForTimeout(700);
    check('P5 Enter 选中高亮行并跳转文档详情', /\/document-detail$/.test(page.url()), {
      url: page.url(),
      picked: q2.activeIdx,
    });

    // Esc 关闭
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    await page.locator('[data-pencil-name="RecentlyOpenedCard"] [data-pencil-name="CardAction"]').click();
    await page.waitForTimeout(800);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    check('P6 Esc 关闭浮层', (await page.locator('.picker-popover').count()) === 0);

    // 点击外部关闭
    await page.locator('[data-pencil-name="RecentlyOpenedCard"] [data-pencil-name="CardAction"]').click();
    await page.waitForTimeout(800);
    const openBefore = await page.locator('.picker-popover').count();
    await page.evaluate(() => {
      document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    });
    await page.waitForTimeout(300);
    check('P7 点击浮层外部关闭', openBefore === 1 && (await page.locator('.picker-popover').count()) === 0, {
      openBefore,
      after: await page.locator('.picker-popover').count(),
    });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
