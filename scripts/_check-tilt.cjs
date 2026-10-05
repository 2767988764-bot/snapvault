const { chromium } = require('playwright-core');

// 文档卡片 3D 倾斜悬浮验证：
//   1. 悬停掠过卡片 -> 卡片 rotateX/rotateY 随光标位置变化（lerp 0.1 平滑逼近，最大 ±5deg）
//   2. 阴影偏移 dx=rotY*2, dy=rotX*2, blur 24px
//   3. 卡片 translate 上移 4px（200ms ease-out）
//   4. PreviewMat 边框灰 -> 靛蓝 #2B5BD7
//   5. 封面 Page scale(1.02) + 反向视差
//   6. mouseleave -> spring(damping 20) 回平并清理内联样式

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:5173/library', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1400);

  // 上拉进入 pulled 状态
  const bar = await page.$('[data-pencil-name="TravelBar"]');
  const br = await bar.boundingBox();
  const bx = br.x + br.width / 2;
  const by = br.y + 10;
  await page.mouse.move(bx, by);
  await page.mouse.down();
  for (let i = 1; i <= 20; i++) await page.mouse.move(bx, by - i * 30, { steps: 3 });
  await page.mouse.up();
  await page.waitForTimeout(1200);

  const out = {};
  const cardSel = '.pulled-content [data-pencil-name="FilePreview"]';
  const box = await (await page.$(cardSel)).boundingBox();
  out.cardBox = { x: Math.round(box.x), y: Math.round(box.y), w: Math.round(box.width), h: Math.round(box.height) };

  const snap = () => page.evaluate(() => {
    const card = document.querySelector('.pulled-content [data-pencil-name="FilePreview"]');
    const mat = card.querySelector('[data-pencil-name="PreviewMat"]');
    const cover = card.querySelector('[data-pencil-name="Page"]');
    return {
      cls: card.className,
      transform: card.style.transform || '(none)',
      boxShadow: card.style.boxShadow || '(none)',
      translate: getComputedStyle(card).translate,
      borderColor: getComputedStyle(mat).borderTopColor,
      cover: cover.style.transform || '(none)',
      perspective: getComputedStyle(card).perspective,
    };
  });

  out.idle = await snap();

  // 悬停到卡片右上角：dx=+0.4, dy=-0.4 -> rotY=+4deg, rotX=+4deg
  const hx = box.x + box.width * 0.9;
  const hy = box.y + box.height * 0.1;
  await page.mouse.move(hx, hy, { steps: 2 });
  await page.waitForTimeout(30);
  out.lerpEarly = await snap(); // 尚未收敛
  await page.waitForTimeout(700);
  out.hoverTopRight = await snap(); // 应逼近 rotateX(4) rotateY(4)

  // 移到左下角：dx=-0.4, dy=+0.4 -> rotY=-4deg, rotX=-4deg
  await page.mouse.move(box.x + box.width * 0.1, box.y + box.height * 0.9, { steps: 4 });
  await page.waitForTimeout(700);
  out.hoverBottomLeft = await snap();

  // 离开 Results 区域 -> spring 回平
  await page.mouse.move(700, 120, { steps: 4 });
  await page.waitForTimeout(120);
  out.leaving = await snap(); // 回弹中（仍有残值）
  await page.waitForTimeout(1200);
  out.afterLeave = await snap();

  // 重新悬停再移出，在页面内用 rAF 精确测量回落时长（期望 ~400ms）
  await page.mouse.move(hx, hy, { steps: 2 });
  await page.waitForTimeout(650);
  const measured = page.evaluate(() => new Promise(resolve => {
    const c = document.querySelector('.pulled-content [data-pencil-name="FilePreview"]');
    let t0 = 0;
    (function loop() {
      if (!t0 && !c.classList.contains('is-tilted')) t0 = performance.now();
      if (t0 && !c.style.transform) return resolve(Math.round(performance.now() - t0));
      requestAnimationFrame(loop);
    })();
  }));
  await page.mouse.move(700, 120, { steps: 1 });
  out.resetMsInPage = await measured;
  out.afterLeave = await snap();
  out.liftAfterLeave = await page.evaluate(() => {
    const c = document.querySelector('.pulled-content [data-pencil-name="FilePreview"]');
    return getComputedStyle(c).translate;
  });

  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch(e => { console.error('ERR', e); process.exit(1); });
