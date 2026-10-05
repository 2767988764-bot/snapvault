const { chromium } = require('playwright-core');

// 文档详情「返回」行为验证：
//   1. library.pulled -> 点击文件卡 -> /document-detail
//   2. 返回按钮 -> 回到 /library 且仍是 pulled（拉条 y=64），不是 hero(641)
//   3. library.search -> 点击结果行 -> 详情 -> 返回 -> 仍是 search
//   4. 恢复只消费一次：随后再进 /library 回到 hero(641)

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const out = {};
  const barY = () => page.$eval('[data-pencil-name="TravelBar"]', el => el.getBoundingClientRect().y);
  const path = () => page.evaluate(() => location.pathname);

  // 进入 pulled
  await page.goto('http://localhost:5173/library', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  const bar = await page.$('[data-pencil-name="TravelBar"]');
  const r = await bar.boundingBox();
  const cx = r.x + r.width / 2;
  await page.mouse.move(cx, r.y + 10);
  await page.mouse.down();
  for (let i = 1; i <= 20; i++) await page.mouse.move(cx, r.y + 10 - i * 30, { steps: 3 });
  await page.mouse.up();
  await page.waitForTimeout(1100);
  out.pulledY = await barY(); // 64

  // 1) 打开文档
  await page.click('.pulled-content [data-pencil-name="FilePreview"]');
  await page.waitForTimeout(700);
  out.afterOpenPath = await path(); // /document-detail
  out.historyBack = await page.evaluate(() => window.history.state && window.history.state.back); // /library

  // 2) 返回
  await page.click('[data-pencil-name="DetailBarLeft"] [data-pencil-name="Btn/Ghost"]');
  await page.waitForTimeout(1100);
  out.backPath = await path(); // /library
  out.backBarY = await barY(); // 期望 64（pulled），不是 641（hero）
  out.backPulledContent = await page.evaluate(() =>
    !!document.querySelector('.pulled-layer [data-pencil-name="FilePreview"]') &&
    getComputedStyle(document.querySelector('.pulled-layer [data-pencil-name="FilePreview"]')).display !== 'none');

  // 3) 切到 search 视图（搜索框内 Enter，无高亮结果时进入完整搜索页），再从结果行进详情并返回
  await page.click('.pulled-content [data-pencil-name="SearchQuery"]');
  await page.waitForTimeout(150);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(600);
  out.searchVisible = await page.evaluate(() => {
    const el = document.querySelector('.pulled-content [data-pencil-name="ResultRow"]');
    return !!el && getComputedStyle(el.closest('[data-pencil-name="SearchContent"]') || el).display !== 'none';
  });
  const row = await page.$('.pulled-content [data-pencil-name="ResultRow"]');
  if (row) {
    await row.click();
    await page.waitForTimeout(700);
    out.searchOpenPath = await path();
    await page.click('[data-pencil-name="DetailBarLeft"] [data-pencil-name="Btn/Ghost"]');
    await page.waitForTimeout(1100);
    out.searchBackPath = await path();
    out.searchBackKeptSearch = await page.evaluate(() => {
      const rows = [...document.querySelectorAll('.pulled-content [data-pencil-name="ResultRow"]')];
      return rows.some(el => el.getBoundingClientRect().width > 0);
    });
    out.searchBackBarY = await barY();
  }

  // 4) 恢复只消费一次：直接再进 library -> hero
  await page.goto('http://localhost:5173/library', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  out.freshY = await barY(); // 641（hero）

  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch(e => { console.error('ERR', e); process.exit(1); });
