const { chromium } = require('playwright-core');

// 拉条吸附 + SidebarPanel 两段式变形 + 卡片 flex-wrap 重排验证：
//   1. hero 拉条 641（设计稿 GlassDivider 位）；上拉满 MAX_PULL(577) -> 停 64（不超过导航栏底部）
//   2. ViewSwitch 两段式弹入 SidebarPanel：page-root 压缩 1200px、侧栏贴在拉条下方（y=128）
//   3. 文件预览卡片弹性自适应（flex: 1 1 200px，max-width 215px）铺满整行：第一行 6 -> 5 个，无右侧空白
//   4. PanelClose 反向两段式收起：page-root 恢复 1440px、侧栏卸载
//   5. 下拉回 hero -> 拉条 641

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:5173/library', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const out = {};
  const barY = () => page.$eval('[data-pencil-name="TravelBar"]', el => el.getBoundingClientRect().y);
  const cardCount = () => page.evaluate(() => document.querySelectorAll('.pulled-content [data-pencil-name="FilePreview"]').length);
  // 第一行卡片数（y 相同的 FilePreview；跳过 display:none 隐藏卡片）
  const firstRowCount = () => page.evaluate(() => {
    const cards = [...document.querySelectorAll('.pulled-content [data-pencil-name="FilePreview"]')]
      .filter(el => el.getBoundingClientRect().width > 0);
    if (!cards.length) return 0;
    const firstY = cards[0].getBoundingClientRect().y;
    let n = 0;
    for (const c of cards) {
      if (Math.abs(c.getBoundingClientRect().y - firstY) < 2) n++;
      else break;
    }
    return n;
  });
  const cardWidth = () => page.evaluate(() => {
    const c = document.querySelector('.pulled-content [data-pencil-name="FilePreview"]');
    return c ? Math.round(c.getBoundingClientRect().width) : -1;
  });
  const sidebarX = () => page.evaluate(() => {
    const s = document.querySelector('.sidebar-panel');
    return s ? s.getBoundingClientRect().x : 'unmounted';
  });
  const sidebarTop = () => page.evaluate(() => {
    const s = document.querySelector('.sidebar-panel');
    return s ? s.getBoundingClientRect().y : 'unmounted';
  });
  const pageRootBox = () => page.evaluate(() => {
    const rs = [...document.querySelectorAll('.pulled-content .page-root')]
      .filter(el => el.getBoundingClientRect().width > 0); // 跳过 display:none 的隐藏视图
    const r = rs[0];
    if (!r) return 'missing';
    const b = r.getBoundingClientRect();
    return { w: Math.round(b.width), ml: Math.round(parseFloat(getComputedStyle(r).marginLeft)) };
  });

  out.initialY = await barY(); // ~641
  out.cardsInitial = await cardCount(); // 12

  // ---- 上拉展开（拖满 600px > MAX_PULL 577）----
  const b1 = await page.$('[data-pencil-name="TravelBar"]');
  const r1 = await b1.boundingBox();
  const cx = r1.x + r1.width / 2;
  const sy = r1.y + 10;
  await page.mouse.move(cx, sy);
  await page.mouse.down();
  for (let i = 1; i <= 20; i++) await page.mouse.move(cx, sy - i * 30, { steps: 3 });
  await page.mouse.up();
  await page.waitForTimeout(1100);
  out.afterOpenY = await barY(); // 期望 64（导航栏底部，不超过 64）
  out.rowOpen = await firstRowCount(); // 6（未压缩：6 张自适应铺满 1360 内容宽，单张 215px 上限）
  out.openText = await page.evaluate(() => document.body.innerText.includes('4 of 11 documents'));
  // 顶部 0..64 必须是 hero 页常驻 TopNav（不产生新导航栏），pulled 页 TopNav 已隐藏
  out.navProbe = await page.evaluate(() => {
    const probe = (x, y) => {
      const el = document.elementFromPoint(x, y);
      return el ? (el.getAttribute('data-pencil-name') || el.className || el.tagName) : 'none';
    };
    const heroTopNavVisible = document.querySelector('.hero-layer [data-pencil-name="TopNav"]')
      && getComputedStyle(document.querySelector('.hero-layer [data-pencil-name="TopNav"]')).display !== 'none';
    const pulledTopNavHidden = !document.querySelector('.pulled-layer [data-pencil-name="TopNav"]')
      || getComputedStyle(document.querySelector('.pulled-layer [data-pencil-name="TopNav"]')).display === 'none';
    return { topNavEl: probe(700, 32), heroTopNavVisible, pulledTopNavHidden };
  });

  // ---- 点击 ViewSwitch：两段式弹入 SidebarPanel ----
  await page.click('[data-pencil-name="ViewSwitch"]');
  await page.waitForTimeout(120);
  out.morphFadeWhite = await page.evaluate(() => {
    const v = document.querySelector('[data-pencil-name="ViewSwitch"]');
    return v ? v.classList.contains('fade-white') : false; // 期望 true（0.2s 纯白阶段）
  });
  await page.waitForTimeout(1100);
  out.sidebarIn = await sidebarX(); // 期望 ~0（展开）
  out.sidebarTop = await sidebarTop(); // 期望 ~128（barY 64 + 64，贴在拉条下方）
  out.cardsAfterOpen = await cardCount(); // 期望 12（元素不丢失）
  out.rowAfterOpen = await firstRowCount(); // 期望 5（压缩后 1105 内容宽可放 5 张约 210px 卡片，铺满无空白）
  out.cardWidthAfterOpen = await cardWidth(); // 期望 ~210（≤215 上限，随容器自适应）
  out.pageRootOpen = await pageRootBox(); // 期望 {w:1200, ml:240}（压缩：右缘与拉条右缘同竖线）

  // ---- 点击 PanelClose：反向两段式收起 ----
  await page.click('.sidebar-panel [data-pencil-name="PanelClose"]');
  await page.waitForTimeout(1200);
  out.sidebarOut = await sidebarX(); // 期望 unmounted（收起完成）
  out.pageRootClosed = await pageRootBox(); // 期望 {w:1440, ml:0}（恢复）
  out.rowAfterClose = await firstRowCount(); // 期望 6（恢复 6 个）
  out.barYAfterCollapse = await barY(); // 拉条仍 64

  // ---- 下拉回 hero ----
  const b2 = await page.$('[data-pencil-name="TravelBar"]');
  const r2 = await b2.boundingBox();
  const sy2 = r2.y + 10;
  await page.mouse.move(cx, sy2);
  await page.mouse.down();
  for (let i = 1; i <= 20; i++) await page.mouse.move(cx, sy2 + i * 30, { steps: 3 });
  await page.mouse.up();
  await page.waitForTimeout(1300);
  out.finalY = await barY(); // 期望 ~641
  out.heroBack = await page.evaluate(() => document.body.innerText.includes('Find any document, instantly'));

  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch(e => { console.error('ERR', e); process.exit(1); });
