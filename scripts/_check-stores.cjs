const { chromium } = require('playwright-core');

// Pinia store 迁移验证（review count + preferences 持久化）
//   S1  默认：徽标 3
//   S2  +1 → 徽标 4，且写入 snapvault:review-count
//   S3  刷新 → 徽标仍 4（持久化生效）
//   S4  −1 到 0 后不再下降（钳制 ≥ 0）
//   S5  clear localStorage + 刷新 → 回到默认 3，且无未捕获异常
//   S6  点击 Review「Paper edges」→ 写入 snapvault:preferences.reviewFilter
//   S7  刷新 /review-queue → 「Paper edges」仍选中（偏好保留）
//   S8  preferences 存损坏 JSON → 不抛错，筛选回退 all
//   S9  review-count 存非数字 → 徽标回退 3
//   S10 libraryView 偏好 = search → /library 上拉后右侧为 search 内容；切回 grid 后写回偏好 list
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

const BADGE = '[data-pencil-name="ReviewBadgeText"]';
const REVIEW_KEY = 'snapvault:review-count';
const PREFS_KEY = 'snapvault:preferences';

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const pageErrors = [];
  page.on('pageerror', (e) => pageErrors.push(String(e && e.message)));

  const badge = () => page.locator(BADGE).first().innerText();
  const ls = (key) => page.evaluate((k) => localStorage.getItem(k), key);
  const setLs = (key, value) => page.evaluate(([k, v]) => localStorage.setItem(k, v), [key, value]);
  const bump = async (n) => {
    for (let i = 0; i < n; i++) {
      await page.locator('.dev-review-trigger button').first().click(); // +1
      await page.waitForTimeout(120);
    }
  };
  const dec = async (n) => {
    for (let i = 0; i < n; i++) {
      await page.locator('.dev-review-trigger button').nth(1).click(); // −1
      await page.waitForTimeout(120);
    }
  };
  const open = async (path) => {
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(900);
  };
  const flowChild = (i) =>
    page.evaluate((idx) => {
      const c = document.querySelector('.pulled-content');
      const el = c ? c.children[idx] : null;
      if (!el) return 'missing';
      return getComputedStyle(el).display !== 'none' ? 'visible' : 'hidden';
    }, i);

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
    // ================= Review count：Pinia store + 持久化 =================
    await open('/home');
    check('S1 默认 Review 徽标为 3', (await badge()).trim() === '3', { badge: (await badge()).trim() });

    await bump(1);
    const b2 = (await badge()).trim();
    check('S2 +1 后徽标为 4，且写入 localStorage', b2 === '4' && (await ls(REVIEW_KEY)) === '4', {
      badge: b2,
      stored: await ls(REVIEW_KEY),
    });

    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(900);
    check('S3 刷新后徽标仍为 4（持久化生效）', (await badge()).trim() === '4', { badge: (await badge()).trim() });

    await dec(6); // 4 → 0，再多按 2 次仍应为 0
    check('S4 减到 0 后不再下降（钳制 ≥ 0）', (await badge()).trim() === '0' && (await ls(REVIEW_KEY)) === '0', {
      badge: (await badge()).trim(),
      stored: await ls(REVIEW_KEY),
    });

    await page.evaluate(() => localStorage.clear());
    pageErrors.length = 0;
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(900);
    const b5 = (await badge()).trim();
    check('S5 清空 localStorage 后回退默认 3 且无未捕获异常', b5 === '3' && pageErrors.length === 0, {
      badge: b5,
      errors: pageErrors,
    });

    // ================= preferences：Review 当前筛选 =================
    await open('/review-queue');
    await page.locator('.rf-chip', { hasText: 'Paper edges' }).first().click();
    await page.waitForTimeout(700);
    const storedPrefs = await ls(PREFS_KEY);
    check(
      'S6 点击「Paper edges」写入 snapvault:preferences.reviewFilter',
      !!storedPrefs && JSON.parse(storedPrefs).reviewFilter === 'paper-edges',
      { stored: storedPrefs }
    );

    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(900);
    const s7 = await page.evaluate(() => {
      const el = document.querySelector('[data-pencil-name="ReviewFilter"].is-active');
      return el ? el.querySelector('[data-pencil-name="ReviewFilterText"]').textContent.trim() : null;
    });
    check('S7 刷新后仍选中「Paper edges」（偏好保留）', s7 === 'Paper edges', { active: s7 });

    // ================= 容错：损坏数据回退默认 =================
    await setLs(PREFS_KEY, '{ this is not json');
    pageErrors.length = 0;
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(900);
    const s8 = await page.evaluate(() => {
      const el = document.querySelector('[data-pencil-name="ReviewFilter"].is-active');
      return el ? el.querySelector('[data-pencil-name="ReviewFilterText"]').textContent.trim() : null;
    });
    check('S8 preferences 损坏 JSON 不抛错并回退默认（All）', s8 === 'All' && pageErrors.length === 0, {
      active: s8,
      errors: pageErrors,
    });

    await setLs(REVIEW_KEY, 'not-a-number');
    pageErrors.length = 0;
    await open('/home');
    const b9 = (await badge()).trim();
    check('S9 review-count 非数字回退默认 3 且无异常', b9 === '3' && pageErrors.length === 0, {
      badge: b9,
      errors: pageErrors,
    });

    // ================= preferences：Library 默认视图 =================
    await setLs(PREFS_KEY, JSON.stringify({ reviewFilter: 'all', libraryView: 'search' }));
    await open('/library');
    await dragBarUp();
    const searchShown = await flowChild(1);
    check('S10a libraryView=search 时 /library 上拉后右侧为 search 内容', searchShown === 'visible', {
      searchRoot: searchShown,
    });

    await page.click('.search-in-flow [data-pencil-name="ViewBtn"]:has([data-icon-name="layout-grid"])');
    await page.waitForTimeout(900);
    const prefsAfter = JSON.parse((await ls(PREFS_KEY)) || '{}');
    const listShown = await flowChild(0);
    check(
      'S10b 切回 list 后写回偏好 libraryView=list',
      prefsAfter.libraryView === 'list' && listShown === 'visible',
      { libraryView: prefsAfter.libraryView, pulledRoot: listShown }
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
