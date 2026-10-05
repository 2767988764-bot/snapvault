const { chromium } = require('playwright-core');

// 搜索框聚焦交互验证（hero / pulled up / search 三页）：
//   1. 三个页面均为真实 <input>（可输入、可聚焦）
//   2. 聚焦：背景 .sf-dim（backdrop-filter blur(4px) + rgba(12,12,14,0.7)）；搜索框 .sf-raised 抬升且 z-index 高于遮罩
//   3. 下拉：.sf-panel.open 高度由 0fr 展开；含 "Recent searches" 3 个 chip，入场 translateY(-10px)+opacity
//   4. 输入：实时结果错峰入场（animationDelay = index*30ms）；命中文字靛蓝 #d9e4ff 高亮
//   5. Escape / blur：面板收起（grid-template-rows 回到 0px），遮罩移除
//   6. 命中测试：输入框与结果项在遮罩之上（elementFromPoint 命中自身）

const BASE = process.env.BASE_URL || 'http://localhost:5199';

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: process.env.HEADED ? false : true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${BASE}/library`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  const out = {};

  // 当前真实可见（有尺寸且未被上层遮挡）的搜索框
  const visibleInputBox = () => page.evaluate(() => {
    const els = [...document.querySelectorAll('input.sf-input')];
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) continue;
      const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      if (top && (el === top || el.contains(top))) return { x: r.x + r.width / 2, y: r.y + r.height / 2, w: Math.round(r.width) };
    }
    return null;
  });

  const probe = () => page.evaluate(() => {
    const inputs = [...document.querySelectorAll('input.sf-input')];
    const input = inputs.find((el) => {
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return false;
      const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      return top && (el === top || el.contains(top));
    }) || null;
    const panel = input ? input.closest('[data-pencil-name="SearchBar"], [data-pencil-name="SearchField"]')?.querySelector('.sf-panel') : null;
    const dim = [...document.querySelectorAll('.sf-dim')].find((el) => el.getBoundingClientRect().width > 0) || null;
    const card = panel ? panel.querySelector('.sf-card') : null;
    const chips = panel ? [...panel.querySelectorAll('.sf-chip')] : [];
    const results = panel ? [...panel.querySelectorAll('.sf-result')] : [];
    const hits = panel ? [...panel.querySelectorAll('.sf-hit')] : [];
    const cs = (el) => (el ? getComputedStyle(el) : null);
    return {
      inputTag: input ? input.tagName : 'missing',
      inputValue: input ? input.value : null,
      inputZ: input ? cs(input.closest('.sf-bar') || input).zIndex : null,
      dimExists: !!dim,
      dimBackdrop: dim ? cs(dim).backdropFilter || cs(dim).webkitBackdropFilter : null,
      dimBg: dim ? cs(dim).backgroundColor : null,
      panelOpen: panel ? panel.classList.contains('open') : false,
      panelRows: panel ? cs(panel).gridTemplateRows : null,
      cardOpacity: card ? Number(cs(card).opacity) : null,
      cardTransform: card ? cs(card).transform : null,
      chipCount: chips.length,
      chipTexts: chips.map((c) => c.textContent.trim()),
      label: panel ? (panel.querySelector('.sf-label')?.textContent || '').trim() : null,
      resultCount: results.length,
      resultDelays: results.map((r) => getComputedStyle(r).animationDelay),
      hitCount: hits.length,
      hitBg: hits[0] ? cs(hits[0]).backgroundColor : null,
      hitColor: hits[0] ? cs(hits[0]).color : null,
    };
  });

  // 焦点命中测试（限定在「当前真实可见」的搜索框所在 .sf-bar 子树内）
  const hitTest = (sel) => page.evaluate((s) => {
    const inputs = [...document.querySelectorAll('input.sf-input')];
    const input = inputs.find((el) => {
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return false;
      const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      return top && (el === top || el.contains(top));
    });
    if (!input) return 'no-visible-input';
    const bar = input.closest('.sf-bar') || input.parentElement;
    const el = [...bar.querySelectorAll(s)].find((e) => e.getBoundingClientRect().width > 0);
    if (!el) return 'missing';
    const r = el.getBoundingClientRect();
    const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
    return top ? (el.contains(top) || top.contains(el) ? 'ok' : `blocked:${top.className}`) : 'none';
  }, sel);

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

  async function runPage(tag) {
    const box = await visibleInputBox();
    if (!box) { out[tag] = 'no-visible-input'; return; }
    await page.mouse.click(box.x, box.y);
    await page.waitForTimeout(450); // 展开动画 320ms + 余量

    const p1 = await probe();
    out[`${tag}_inputTag`] = p1.inputTag;             // INPUT
    out[`${tag}_dim`] = p1.dimExists;                  // true
    out[`${tag}_dimBackdrop`] = p1.dimBackdrop;        // blur(4px)
    out[`${tag}_dimBg`] = p1.dimBg;                    // rgba(12, 12, 14, 0.7)
    out[`${tag}_panelOpen`] = p1.panelOpen;            // true
    out[`${tag}_rows`] = p1.panelRows;                 // 非 0px
    out[`${tag}_cardOpacity`] = p1.cardOpacity;        // ~1
    out[`${tag}_cardTransform`] = p1.cardTransform;    // ~none / matrix(1,0,0,1,0,0)
    out[`${tag}_chipCount`] = p1.chipCount;            // 3
    out[`${tag}_chips`] = p1.chipTexts;                // ['homography','receipt 2025','lecture notes']
    out[`${tag}_label`] = p1.label;                    // Recent searches
    out[`${tag}_inputHit`] = await hitTest('input.sf-input');   // ok（抬升在遮罩之上）

    // 输入 → 实时结果
    await page.keyboard.type('homo', { delay: 20 });
    await page.waitForTimeout(600); // debounce 150 + mock 120 + 动画
    const p2 = await probe();
    out[`${tag}_resultCount`] = p2.resultCount;        // >0
    out[`${tag}_resultDelays`] = p2.resultDelays;      // ['0s','0.03s',...]
    out[`${tag}_hitCount`] = p2.hitCount;              // >0
    out[`${tag}_hitBg`] = p2.hitBg;                    // rgb(217, 228, 255)
    out[`${tag}_hitColor`] = p2.hitColor;              // rgb(43, 91, 215)
    out[`${tag}_resultHit`] = await hitTest('.sf-result');      // ok（下拉未被遮罩盖住）

    // Escape → 反向收起
    await page.keyboard.press('Escape');
    await page.waitForTimeout(450);
    const p3 = await probe();
    out[`${tag}_escPanelOpen`] = p3.panelOpen;         // false
    out[`${tag}_escRows`] = p3.panelRows;              // 0px
    out[`${tag}_escDim`] = p3.dimExists;               // false

    // blur 反向收起：重新聚焦并输入后点击别处
    await page.mouse.click(box.x, box.y);
    await page.waitForTimeout(400);
    const p4 = await probe();
    out[`${tag}_blurPanelOpen`] = p4.panelOpen;        // true（重新展开）
    await page.evaluate(() => { if (document.activeElement) document.activeElement.blur(); }); // 失焦
    await page.waitForTimeout(450);
    const p5 = await probe();
    out[`${tag}_blurClosed`] = p5.panelOpen;           // false
    out[`${tag}_blurDim`] = p5.dimExists;              // false
  }

  // ---- hero ----
  await runPage('hero');
  out.hero_url = page.url();
  out.hero_diag = await page.evaluate(() => ({
    bars: document.querySelectorAll('[data-pencil-name="TravelBar"]').length,
    flow: !!document.querySelector('.library-flow'),
    active: document.activeElement ? document.activeElement.tagName + '.' + document.activeElement.className : null,
  }));

  // ---- pulled up ----
  try {
    await dragBarUp();
    out.pulled_url = page.url();
    await runPage('pulled');

    // ---- search ----（搜索框内 Enter 进入完整搜索页；GridBtn/ListBtn 已改为网格/列表切换）
    // 先清空上一步残留的 'homo'：空关键词时 Enter 才进入完整搜索页（有高亮结果时会跳详情）
    await page.click('.pulled-layer [data-pencil-name="SearchQuery"]');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(400);
    out.search_url = page.url();
    await runPage('search');
  } catch (e) {
    out.error = String(e);
  }

  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
