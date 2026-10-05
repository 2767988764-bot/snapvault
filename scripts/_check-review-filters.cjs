const { chromium } = require('playwright-core');

// Review 标签行（ReviewFilters）交互验证：
//   默认白底黑字 / All 选中黑底白字 / hover 灰底 / 按下 250ms 内变黑底白字 / 切换选中态迁移
const BASE = process.env.BASE_URL || 'http://localhost:5199';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  try {
    await page.goto(BASE + '/review-queue', { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);

    const chips = () => page.locator('[data-pencil-name="ReviewFilter"]');
    check('R0 渲染 5 个标签', (await chips().count()) === 5, { count: await chips().count() });

    const info = (i) =>
      page.evaluate((idx) => {
        const el = document.querySelectorAll('[data-pencil-name="ReviewFilter"]')[idx];
        const text = el.querySelector('[data-pencil-name="ReviewFilterText"]');
        return {
          active: el.classList.contains('is-active'),
          bg: getComputedStyle(el).backgroundColor,
          border: getComputedStyle(el).borderTopColor,
          text: getComputedStyle(text).color,
          td: getComputedStyle(el).transitionDuration,
          label: text.textContent.trim(),
        };
      }, i);

    const a = await info(0);
    check(
      'R1 All 默认选中：黑底白字 + 250ms 过渡',
      a.active && a.bg === 'rgb(22, 24, 29)' && a.text === 'rgb(255, 255, 255)' && a.td.includes('0.25s'),
      a
    );

    const b = await info(1);
    check(
      'R2 未选中：白底黑字',
      !b.active && b.bg === 'rgb(255, 255, 255)' && b.text === 'rgb(22, 24, 29)' && b.border === 'rgb(227, 229, 234)',
      b
    );

    // hover → 灰色
    await chips().nth(1).hover();
    await page.waitForTimeout(360);
    const h = await info(1);
    check('R3 hover 变灰底', h.bg === 'rgb(243, 244, 246)', { bg: h.bg });

    // 按下 → 250ms 内黑底白字
    const box = await chips().nth(1).boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.waitForTimeout(320);
    const p = await info(1);
    check(
      'R4 按下 250ms 内变黑底白字',
      p.bg === 'rgb(22, 24, 29)' && p.text === 'rgb(255, 255, 255)',
      { bg: p.bg, text: p.text }
    );
    await page.mouse.up();

    // 点击后选中态迁移到第 2 个，All 回到白底黑字（等过渡走完再断言终值）
    await page.waitForTimeout(320);
    const a2 = await info(0);
    const b2 = await info(1);
    check(
      'R5 点击后选中态迁移（第 2 个黑底白字，All 回白底黑字）',
      b2.active && b2.bg === 'rgb(22, 24, 29)' && b2.text === 'rgb(255, 255, 255)' && !a2.active && a2.bg === 'rgb(255, 255, 255)' && a2.text === 'rgb(22, 24, 29)',
      { all: a2, second: b2 }
    );

    // 预留接口可独立调用
    const api = await page.evaluate(async () => {
      const mod = await import('/src/composables/useReviewFilters.js');
      const files = await mod.selectReviewFilter('text-recognition');
      return Array.isArray(files) ? files.length : -1;
    });
    check('R6 预留接口 selectReviewFilter 返回对应文件', api === 2, { files: api });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
