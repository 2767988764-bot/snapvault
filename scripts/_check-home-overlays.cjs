const { chromium } = require('playwright-core');

// Home 三个浮层验证：
//   容器 hover → 略微放大 + 上移 2px
//   点击       → 0.5s 先快后慢贝塞尔曲线，从容器矩形变形到浮层最终位置
//   View all   → RecentScansPicker 盖在 Recent scans 卡片上
//   History    → RecentOpenedPicker 盖在 Recently opened 卡片上
//   StickyNote → Tag/Preview 居中，头部跟随被点击的便签
//   三者右上角 X 均可关闭；浮层内容可用滚轮上下移动
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}
const SCAN_CARD = '[data-pencil-name="RecentScansCard"]';
const OPEN_CARD = '[data-pencil-name="RecentlyOpenedCard"]';
const STAT_CARD = '[data-pencil-name="StatCard"]';

async function hovStyle(page, sel) {
  return page.evaluate((s) => {
    const cs = getComputedStyle(document.querySelector(s));
    return { scale: cs.scale, translate: cs.translate };
  }, sel);
}

async function animStyle(page, sel) {
  return page.evaluate((s) => {
    const el = document.querySelector(s);
    if (!el) return null;
    const cs = getComputedStyle(el);
    return { name: cs.animationName, dur: cs.animationDuration, ease: cs.animationTimingFunction };
  }, sel);
}

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  try {
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);

    // —— H0 容器 hover：放大 + 上移 2px ——
    await page.locator(SCAN_CARD).hover();
    await page.waitForTimeout(320);
    const hov = await hovStyle(page, SCAN_CARD);
    check('H0 卡片 hover 放大 1.02 且上移 2px', Math.abs(parseFloat(hov.scale) - 1.02) < 0.001 && /-2px/.test(hov.translate), hov);

    // —— H0b 左下角蓝色统计卡 hover：放大 + 上移 2px ——
    await page.locator(STAT_CARD).hover();
    await page.waitForTimeout(320);
    const statHov = await hovStyle(page, STAT_CARD);
    check('H0b 蓝色统计卡 hover 放大 1.02 且上移 2px', Math.abs(parseFloat(statHov.scale) - 1.02) < 0.001 && /-2px/.test(statHov.translate), statHov);

    // —— H1 View all → 0.5s 变形动画 ——
    await page.locator(SCAN_CARD + ' [data-pencil-name="CardAction"]').click();
    const anim = await animStyle(page, '.home-picker');
    check(
      'H1 点击后从容器变形弹出（home-morph / 0.5s / 先快后慢）',
      !!anim && /home-morph/.test(anim.name) && anim.dur === '0.5s' && /cubic-bezier\(0\.16,\s*1,\s*0\.3,\s*1\)/.test(anim.ease),
      anim
    );

    // 等变形结束并把鼠标移开，让卡片回到静止位
    await page.waitForTimeout(700);
    await page.mouse.move(1400, 870);
    await page.waitForTimeout(320);

    const scanBox = await page.locator('.picker-popover').boundingBox();
    const scanCard = await page.locator(SCAN_CARD).boundingBox();
    const scanTitle = await page.locator('.pp-title').innerText();
    check(
      'H2 变形到最终尺寸（380px 宽，标题 Recent scans）',
      !!scanBox && scanTitle.trim() === 'Recent scans' && Math.abs(scanBox.width - 380) < 1,
      { title: scanTitle.trim(), width: scanBox && scanBox.width }
    );
    check(
      'H3 浮层与 Recent scans 卡片左上角对齐',
      Math.abs(scanBox.x - scanCard.x) < 2 && Math.abs(scanBox.y - scanCard.y) < 2,
      { picker: [scanBox.x, scanBox.y], card: [scanCard.x, scanCard.y] }
    );

    // —— H4 行数据 + 勾选态 ——
    const rows = await page.evaluate(() =>
      [...document.querySelectorAll('.pp-row')].map((r) => ({
        name: r.querySelector('.pp-name').textContent.trim(),
        meta: r.querySelector('.pp-meta').textContent.trim(),
        checked: !!r.querySelector('.pp-check'),
      }))
    );
    check(
      'H4 浮层内 5 行数据且首行带勾选态',
      rows.length === 5 &&
        rows[0].name === 'Computer Vision Lecture 03' &&
        rows[0].meta === '42 pages · Today 09:41' &&
        rows[0].checked &&
        !rows[1].checked,
      rows.length
    );

    // —— H5 滚轮可移动浮层内内容 ——
    const overflowY = await page.evaluate(() => getComputedStyle(document.querySelector('.pp-list')).overflowY);
    await page.evaluate(() => {
      const list = document.querySelector('.pp-list');
      for (let i = 0; i < 20; i++) list.appendChild(list.children[0].cloneNode(true));
    });
    await page.locator('.pp-list').hover();
    await page.mouse.wheel(0, 400);
    await page.waitForTimeout(250);
    const scrollTop = await page.evaluate(() => document.querySelector('.pp-list').scrollTop);
    check('H5 浮层列表可用滚轮上下移动', overflowY === 'auto' && scrollTop > 0, { overflowY, scrollTop });

    // —— H6 X 关闭回 home ——
    await page.locator('.picker-popover [data-pencil-name="PickerClose"]').click();
    await page.waitForTimeout(200);
    check('H6 点击 X 关闭 scans 浮层', (await page.locator('.picker-popover').count()) === 0);

    // —— H7 History → Recently opened，同样带变形 ——
    await page.locator(OPEN_CARD + ' [data-pencil-name="CardAction"]').click();
    const anim2 = await animStyle(page, '.home-picker');
    await page.waitForTimeout(700);
    await page.mouse.move(1400, 870);
    await page.waitForTimeout(320);
    const openBox = await page.locator('.picker-popover').boundingBox();
    const openCard = await page.locator(OPEN_CARD).boundingBox();
    const openTitle = await page.locator('.pp-title').innerText();
    check(
      'H7 History 弹出 Recently opened（带变形动画且与卡片左上角对齐）',
      !!anim2 &&
        /home-morph/.test(anim2.name) &&
        openTitle.trim() === 'Recently opened' &&
        Math.abs(openBox.x - openCard.x) < 2 &&
        Math.abs(openBox.y - openCard.y) < 2,
      { title: openTitle.trim(), picker: [openBox.x, openBox.y], card: [openCard.x, openCard.y] }
    );

    // —— H8 点击浮层行 → 关闭并进入文档详情 ——
    await page.locator('.pp-row').first().click();
    await page.waitForTimeout(300);
    check(
      'H8 点击浮层行跳转文档详情且浮层收起',
      page.url().endsWith('/document-detail') && (await page.locator('.picker-popover').count()) === 0,
      { url: page.url() }
    );

    // —— H9 StickyNote hover：放大 + 上移 2px ——
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    const note0 = page.locator('[data-pencil-name="StickyNote"]').nth(0);
    await note0.hover();
    await page.waitForTimeout(320);
    const noteHov = await hovStyle(page, '[data-pencil-name="StickyNote"]');
    check('H9 便签 hover 放大 1.05 且上移 2px', Math.abs(parseFloat(noteHov.scale) - 1.05) < 0.001 && /-2px/.test(noteHov.translate), noteHov);

    // —— H10 点击便签 → Tag/Preview 变形弹出 ——
    await note0.click();
    const anim3 = await animStyle(page, '.mor-box');
    check(
      'H10 点击便签后 Tag/Preview 从便签变形弹出（0.5s）',
      !!anim3 && /home-morph/.test(anim3.name) && anim3.dur === '0.5s',
      anim3
    );

    await page.waitForTimeout(700);
    await page.mouse.move(1400, 870);
    await page.waitForTimeout(320);
    const tagName = await page.locator('.tp-name').innerText();
    const tagCount = await page.locator('.tp-count').innerText();
    check(
      'H11 Tag/Preview 头部跟随被点便签（Research / 38 documents）',
      tagName.trim() === 'Research' && tagCount.trim() === '38 documents',
      { name: tagName.trim(), count: tagCount.trim() }
    );

    const tagBox = await page.locator('.tag-preview').boundingBox();
    const rootBox = await page.locator('.page-root').boundingBox();
    const dcx = tagBox.x + tagBox.width / 2 - (rootBox.x + rootBox.width / 2);
    const dcy = tagBox.y + tagBox.height / 2 - (rootBox.y + rootBox.height / 2);
    check('H12 Tag/Preview 浮于页面中央', Math.abs(dcx) < 2 && Math.abs(dcy) < 2, { dx: dcx, dy: dcy });

    const tagOverflowY = await page.evaluate(() => getComputedStyle(document.querySelector('.tp-files')).overflowY);
    check('H13 Tag/Preview 文件列表可滚动', tagOverflowY === 'auto', { overflowY: tagOverflowY });

    await page.locator('.tag-preview [data-pencil-name="PickerClose"]').click();
    await page.waitForTimeout(200);
    check('H14 点击 X 关闭 Tag/Preview', (await page.locator('.tag-preview').count()) === 0);

    // —— H15 头部跟随另一个便签 ——
    await page.locator('[data-pencil-name="StickyNote"]').nth(3).click();
    await page.waitForTimeout(700);
    const tagName2 = await page.locator('.tp-name').innerText();
    check('H15 再点另一个 StickyNote，头部随之切换（computer-vision）', tagName2.trim() === 'computer-vision', {
      name: tagName2.trim(),
    });

    // —— H16 配色跟随被点击的便签（第 2 个为绿色 tag） ——
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await page.locator('[data-pencil-name="StickyNote"]').nth(1).click();
    await page.waitForTimeout(700);
    const themed = await page.evaluate(() => ({
      bg: getComputedStyle(document.querySelector('.tag-preview')).backgroundColor,
      bar: getComputedStyle(document.querySelector('.tp-bar')).backgroundColor,
      count: getComputedStyle(document.querySelector('.tp-count')).color,
      meta: getComputedStyle(document.querySelector('.tp-file-meta')).color,
    }));
    check(
      'H16 Tag/Preview 配色跟随被点便签（#E4F2EA 底 + #177245 主色）',
      themed.bg === 'rgb(228, 242, 234)' &&
        themed.bar === 'rgb(23, 114, 69)' &&
        themed.count === 'rgb(23, 114, 69)' &&
        /23, 114, 69/.test(themed.meta),
      themed
    );
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
