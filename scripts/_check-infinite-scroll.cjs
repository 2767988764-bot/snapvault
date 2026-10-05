const { chromium } = require('playwright-core');

// 无限滚动 / 分批渲染回归：
//   首屏只渲染 24 条（4 行）→ 滚动到底逐批追加（+24）→ 128 条全部可见 →
//   底栏三态文案（Load more / 已加载全部 128 条）→ 卡片点击仍跳 document-detail →
//   滚动过程无长阻塞（fps 探针）→ 空态不触发追加。
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

async function pullUp(page) {
  const bar = await page.$('[data-pencil-name="TravelBar"]');
  const r = await bar.boundingBox();
  const cx = r.x + r.width / 2;
  await page.mouse.move(cx, r.y + 10);
  await page.mouse.down();
  for (let i = 1; i <= 20; i++) await page.mouse.move(cx, r.y + 10 - i * 30, { steps: 3 });
  await page.mouse.up();
}

const cardCount = (page) =>
  page.evaluate(
    () => document.querySelectorAll('[data-pencil-name="Results"] [data-pencil-name="FilePreview"]').length
  );

const rowCount = (page) =>
  page.evaluate(
    () =>
      [...document.querySelectorAll('[data-pencil-name="Results"] [data-pencil-name="PreviewRow"]')].filter(
        (el) => getComputedStyle(el).display !== 'none'
      ).length
  );

const loadMore = (page) =>
  page.evaluate(() => {
    const bar = document.querySelector('[data-pencil-name="LoadMore"]');
    return {
      has: !!bar,
      state: bar?.getAttribute('data-state') ?? null,
      text: bar?.querySelector('[data-pencil-name="LoadMoreText"]')?.textContent.trim() ?? '',
      spinner: !!bar?.querySelector('.rs-spinner'),
    };
  });

const scrollToBottom = (page) =>
  page.evaluate(() => {
    const el = document.querySelector('[data-pencil-name="Results"]');
    el.scrollTop = el.scrollHeight;
  });

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e.message)));

  try {
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await pullUp(page);
    await page.waitForTimeout(900); // 等骨架 → 真实网格

    // ---- 首屏 ----
    const first = await cardCount(page);
    const firstRows = await rowCount(page);
    const lm0 = await loadMore(page);
    check('I1 首屏只渲染前 24 条（4 行 × 6 张）', first === 24 && firstRows === 4, { first, firstRows });
    check(
      'I2 底栏初始为 more 态（plus 图标 + Load more documents）',
      lm0.has && lm0.state === 'more' && /Load more/.test(lm0.text) && !lm0.spinner,
      lm0
    );

    // ---- 滚动到底逐批追加 ----
    const seq = [first];
    let sawLoading = false;
    for (let i = 0; i < 15; i++) {
      await scrollToBottom(page);
      await page.waitForTimeout(60);
      const mid = await loadMore(page);
      if (mid.state === 'loading' && mid.spinner) sawLoading = true;
      await page.waitForTimeout(420);
      const c = await cardCount(page);
      if (seq[seq.length - 1] !== c) seq.push(c);
      if (c >= 128) break;
    }
    check('I3 批次加载期间底栏出现 spinner（loading 态）', sawLoading, { sawLoading });
    check(
      'I4 滚动到底逐批 +24，直到 128 条全部可见',
      seq.includes(48) && seq[seq.length - 1] === 128 && seq.every((v, i) => i === 0 || v > seq[i - 1]),
      { seq }
    );

    const finalRows = await rowCount(page);
    const lmDone = await loadMore(page);
    check(
      'I5 底栏终态：done + 「已加载全部 128 条」（无 spinner / 无 plus）',
      lmDone.state === 'done' && /已加载全部 128 条/.test(lmDone.text) && !lmDone.spinner,
      { finalRows, ...lmDone }
    );
    check('I6 128 条渲染为 22 行（最后一行为 2 张）', finalRows === 22, { finalRows });

    // ---- 快速滚动无卡顿（rAF 探针：滚动全过程帧循环未被阻塞）----
    const probe = await page.evaluate(async () => {
      const el = document.querySelector('[data-pencil-name="Results"]');
      let frames = 0;
      let maxGap = 0;
      let last = performance.now();
      let stop = false;
      const loop = (ts) => {
        const gap = ts - last;
        last = ts;
        if (gap > maxGap) maxGap = gap;
        frames++;
        if (!stop) requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
      for (let i = 0; i < 40; i++) {
        el.scrollTop = i % 2 ? 0 : el.scrollHeight;
        await new Promise((r) => setTimeout(r, 8));
      }
      stop = true;
      return { frames, maxGap: Math.round(maxGap) };
    });
    check('I7 快速来回滚动帧循环未被阻塞（frames ≥ 10 且最大帧间隔 < 200ms）', probe.frames >= 10 && probe.maxGap < 200, probe);

    // ---- 卡片点击仍跳 document-detail ----
    await page.locator('[data-pencil-name="Results"] [data-pencil-name="FilePreview"]').first().click();
    await page.waitForTimeout(600);
    check('I8 点击卡片跳转 /document-detail 行为不变', page.url().includes('/document-detail'), { url: page.url() });

    // ---- 空态：不渲染卡片、不触发追加 ----
    await page.goto(BASE + '/library?empty=1', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await pullUp(page);
    await page.waitForTimeout(900);
    await scrollToBottom(page);
    await page.waitForTimeout(600);
    const empty = await page.evaluate(() => ({
      cards: document.querySelectorAll('[data-pencil-name="Results"] [data-pencil-name="FilePreview"]').length,
      lm: document.querySelectorAll('[data-pencil-name="LoadMore"]').length,
    }));
    check('I9 空态不渲染卡片与底栏，滚动不触发追加', empty.cards === 0 && empty.lm === 0, empty);

    // ---- 路由离开后重进：状态回到首屏 24 条（观察器未泄漏、无报错）----
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await pullUp(page);
    await page.waitForTimeout(900);
    const again = await cardCount(page);
    check('I10 重新进入 library 恢复首屏 24 条（可见观察器状态被重置）', again === 24, { again });
    check('I11 全流程无未捕获页面错误（含卸载/重挂）', errors.length === 0, { errors });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
