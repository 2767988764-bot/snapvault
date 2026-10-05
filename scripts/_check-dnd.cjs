const { chromium } = require('playwright-core');

// 拖放导入区交互动效验证：
//   1. dragenter: 边框 1px 灰 -> 3px 靛蓝；四角外扩 8px；蓝色渐变 tint 0 -> 0.2
//   2. drop: 落点 ripple(200px/800ms) + haptic pulse + 容器 tap
//   3. drop(files): 缩略图从光标 spring 飞向队列槽
//   4. dragleave 未 drop: 边框弹性收回 1px 灰、tint 归零、角标回位

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:5173/scan-import', { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);

  const out = {};

  const read = () => page.evaluate(() => {
    const q = s => document.querySelector(s);
    const border = q('.dz-border');
    const tint = q('.dz-tint');
    const tl = q('[data-pencil-name="CornerTLh"]');
    const br = q('[data-pencil-name="CornerBRv"]');
    const lane = q('.drop-lane');
    const cs = el => (el ? getComputedStyle(el) : null);
    return {
      borderW: border ? cs(border).borderTopWidth : 'missing',
      borderColor: border ? cs(border).borderTopColor : 'missing',
      tintOpacity: tint ? Number(cs(tint).opacity).toFixed(2) : 'missing',
      cornerTL: tl ? cs(tl).transform : 'missing',
      cornerBR: br ? cs(br).transform : 'missing',
      laneClass: lane ? lane.className : 'missing',
    };
  });

  out.idle = await read();

  const fire = (type, opts = {}) => page.evaluate(([type, opts]) => {
    const lane = document.querySelector('.drop-lane');
    const r = lane.getBoundingClientRect();
    const dt = new DataTransfer();
    if (opts.file) dt.items.add(new File(['x'], 'drop.jpg', { type: 'image/jpeg' }));
    lane.dispatchEvent(new DragEvent(type, {
      bubbles: true, cancelable: true, dataTransfer: dt,
      clientX: r.left + 200, clientY: r.top + 80,
    }));
    return { x: r.left + 200, y: r.top + 80 };
  }, [type, opts]);

  // ---- dragenter ----
  await fire('dragenter');
  await page.waitForTimeout(90);
  out.enterPulse = await page.evaluate(() => document.querySelectorAll('.dz-pulse').length);
  await page.waitForTimeout(620);
  out.entered = await read();

  // ---- dragleave（未 drop）----
  await fire('dragleave');
  await page.waitForTimeout(700);
  out.afterLeave = await read();

  // ---- dragenter + drop（带文件）----
  await fire('dragenter');
  await page.waitForTimeout(500);
  const dropPt = await fire('drop', { file: true });
  await page.waitForTimeout(60);
  out.dropState = await page.evaluate(() => ({
    ripples: document.querySelectorAll('.dz-ripple').length,
    pulses: document.querySelectorAll('.dz-pulse').length,
    flyers: document.querySelectorAll('.dz-flyer').length,
    tapping: document.querySelector('.drop-lane').classList.contains('is-tapping'),
  }));
  out.rippleBox = await page.evaluate(() => {
    const r = document.querySelector('.dz-ripple');
    if (!r) return 'missing';
    const b = r.getBoundingClientRect();
    return { w: Math.round(b.width), h: Math.round(b.height) };
  });
  out.flyerStart = await page.evaluate(() => {
    const f = document.querySelector('.dz-flyer');
    return f ? getComputedStyle(f).transform : 'missing';
  });
  await page.waitForTimeout(420);
  out.flyerMid = await page.evaluate(() => {
    const f = document.querySelector('.dz-flyer');
    return f ? getComputedStyle(f).transform : 'missing';
  });
  await page.waitForTimeout(600);
  out.afterFlight = await page.evaluate(() => ({
    flyers: document.querySelectorAll('.dz-flyer').length,
    ripples: document.querySelectorAll('.dz-ripple').length,
    borderW: getComputedStyle(document.querySelector('.dz-border')).borderTopWidth,
  }));
  out.dropPt = dropPt;
  out.slot = await page.evaluate(() => {
    const s = document.querySelector('[data-pencil-name="ContactSheet"] [data-pencil-name^="File "]');
    if (!s) return 'missing';
    const b = s.getBoundingClientRect();
    return { x: Math.round(b.left + b.width / 2), y: Math.round(b.top + 120) };
  });

  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch(e => { console.error('ERR', e); process.exit(1); });
