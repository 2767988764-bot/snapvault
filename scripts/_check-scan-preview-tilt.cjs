const { chromium } = require('playwright-core');

// Scan Import「Pending files」预览卡：与 library.pulled up 一致的点击 + 3D 倾斜交互
//   hover → is-tilted + perspective/rotateX/rotateY 内联 transform + Page scale(1.02) + 边框变靛蓝
//   移出 → 400ms 后内联 transform 还原为设计稿 rotate、boxShadow 清空、is-tilted 移除
//   点击 → 跳转 /document-detail
const BASE = process.env.BASE_URL || 'http://localhost:5199';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

const CARD = '.si-preview';

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  try {
    await page.goto(BASE + '/scan-import', { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);

    // —— T1 5 张预览卡挂上 class / data-clickable / pointer ——
    const cards = await page.evaluate((sel) => {
      return [...document.querySelectorAll(sel)].map((el) => ({
        clickable: el.hasAttribute('data-clickable'),
        cursor: getComputedStyle(el).cursor,
        base: el.style.transform,
      }));
    }, CARD);
    check(
      'T1 5 张预览卡可点击且 cursor:pointer',
      cards.length === 5 && cards.every((c) => c.clickable && c.cursor === 'pointer'),
      { n: cards.length, cursors: cards.map((c) => c.cursor) }
    );
    check(
      'T2 卡片保留设计稿基础旋转 rotate()',
      cards.every((c) => /rotate\(/.test(c.base)),
      cards.map((c) => c.base)
    );

    // —— T3 hover 第一张卡：is-tilted + 3D 内联 transform ——
    const first = page.locator(CARD).first();
    const box = await first.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForTimeout(320);
    const hovered = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      const pageEl = el.querySelector('[data-pencil-name="Page"]');
      const cs = getComputedStyle(el);
      return {
        tilted: el.classList.contains('is-tilted'),
        inline: el.style.transform,
        boxShadow: el.style.boxShadow,
        translate: cs.translate,
        cover: pageEl.style.transform,
        border: getComputedStyle(pageEl).borderTopColor,
      };
    }, CARD);
    check(
      'T3 hover 加 is-tilted 且内联 transform 含 perspective/rotateX/rotateY',
      hovered.tilted &&
        /perspective\(1000px\)/.test(hovered.inline) &&
        /rotateX\(/.test(hovered.inline) &&
        /rotateY\(/.test(hovered.inline) &&
        /rotate\(/.test(hovered.inline),
      hovered.inline
    );
    check('T4 hover 卡片 translate 上浮 4px', /-4px/.test(hovered.translate), hovered.translate);
    check('T5 hover Page 放大 scale(1.02)', /scale\(1\.02\)/.test(hovered.cover), hovered.cover);
    check('T6 hover Page 边框转靛蓝 #2B5BD7', hovered.border === 'rgb(43, 91, 215)', hovered.border);
    check('T7 hover 出现随角度偏移的阴影', /rgba\(22, 24, 29, 0\.16\)/.test(hovered.boxShadow), hovered.boxShadow);

    // —— T8 移出后 400ms 内回落：内联 transform 还原、boxShadow 清空、is-tilted 移除 ——
    await page.mouse.move(700, 120);
    await page.waitForTimeout(560);
    const rested = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      const pageEl = el.querySelector('[data-pencil-name="Page"]');
      return {
        tilted: el.classList.contains('is-tilted'),
        inline: el.style.transform,
        boxShadow: el.style.boxShadow,
        cover: pageEl.style.transform,
        translate: getComputedStyle(el).translate,
      };
    }, CARD);
    check(
      'T8 移出后内联 transform 还原为设计稿 rotate 且样式清空',
      !rested.tilted &&
        /rotate\(/.test(rested.inline) &&
        !/perspective/.test(rested.inline) &&
        rested.boxShadow === '' &&
        rested.cover === '',
      rested
    );
    check('T9 移出后 translate 归零', rested.translate === 'none' || rested.translate === '0px', rested.translate);

    // —— T10 点击跳转 /document-detail ——
    await first.click();
    await page.waitForTimeout(400);
    check('T10 点击预览卡跳转 /document-detail', page.url().endsWith('/document-detail'), { url: page.url() });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
