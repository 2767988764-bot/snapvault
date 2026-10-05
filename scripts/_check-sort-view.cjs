const { chromium } = require('playwright-core');

// Library 结果区：排序控件（按名称 / 最近修改 / 页数）+ 网格/列表视图切换
//   S: 排序默认值、三种维度生效、键盘（↑↓/Enter/Esc）、下拉层级命中、排序不破坏跳转
//   V: 网格↔列表切换、列表行样式、localStorage 持久化（刷新保留）、两视图角标可见

const BASE = process.env.BASE_URL || 'http://localhost:5173';

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: process.env.HEADED ? false : true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  let pass = 0;
  let fail = 0;
  const out = {};
  const check = (name, cond, extra) => {
    if (cond) {
      pass++;
      console.log('  PASS ' + name);
    } else {
      fail++;
      console.log('  FAIL ' + name + (extra ? '  ' + JSON.stringify(extra) : ''));
    }
  };

  const dragBarUp = async () => {
    const bar = await page.$('[data-pencil-name="TravelBar"]');
    const r = await bar.boundingBox();
    const cx = r.x + r.width / 2;
    await page.mouse.move(cx, r.y + 10);
    await page.mouse.down();
    for (let i = 1; i <= 20; i++) await page.mouse.move(cx, r.y + 10 - i * 30, { steps: 3 });
    await page.mouse.up();
    await page.waitForTimeout(1100);
  };
  const dragBarDown = async () => {
    const bar = await page.$('[data-pencil-name="TravelBar"]');
    const r = await bar.boundingBox();
    const cx = r.x + r.width / 2;
    await page.mouse.move(cx, r.y + 10);
    await page.mouse.down();
    for (let i = 1; i <= 20; i++) await page.mouse.move(cx, r.y + 10 + i * 30, { steps: 3 });
    await page.mouse.up();
    await page.waitForTimeout(1300);
  };

  // 注意：search 视图也有 data-pencil-name="SortMenu"（v-show 隐藏），本视图的排序控件带 class="sort-menu"
  const SORT = '.sort-menu';
  const sortLabel = () =>
    page.$eval(SORT + ' [data-pencil-name="SortLabel"]', (el) => el.textContent.trim());
  const sortExpanded = () =>
    page.$eval(SORT, (el) => el.getAttribute('aria-expanded') === 'true');
  const panelDisplay = () =>
    page.$eval(SORT + ' [data-pencil-name="SortPanel"]', (el) => getComputedStyle(el).display);
  // 结果区第一张卡/行的名称（按当前视图取）
  const firstGridName = () =>
    page.$eval('.pulled-content [data-pencil-name="PreviewRow"] [data-pencil-name="FileName"]', (el) =>
      el.textContent.trim()
    );
  const firstListName = () =>
    page.$eval('.rs-list .fr-name', (el) => el.textContent.trim());
  const gridCount = () => page.$$eval('.pulled-content [data-pencil-name="PreviewRow"] [data-pencil-name="FilePreview"]', (els) => els.length);
  const listCount = () => page.$$eval('.rs-list [data-pencil-name="FileRow"]', (els) => els.length);

  const openSort = async () => {
    await page.click(SORT);
    await page.waitForTimeout(160);
  };
  const pickOption = async (label) => {
    await page.click(`${SORT} [data-pencil-name="SortOption"]:has-text("${label}")`);
    await page.waitForTimeout(250);
  };

  try {
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    // 清掉历史视图偏好，保证从网格默认态开始
    await page.evaluate(() => localStorage.removeItem('snapvault:library-view-mode'));
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await dragBarUp();
    await page.waitForTimeout(400);

    // ================= S：排序 =================
    out.S1_defaultLabel = await sortLabel();
    check('S1 默认排序 = Last modified', out.S1_defaultLabel === 'Last modified', out.S1_defaultLabel);
    out.S1_firstGrid = await firstGridName();
    check('S1 默认顺序首项 = Introduction to Homography', out.S1_firstGrid === 'Introduction to Homography', out.S1_firstGrid);
    check('S1 下拉初始关闭', (await sortExpanded()) === false && (await panelDisplay()) === 'none');

    // S2 打开下拉 + 层级命中（面板不被 SearchBar/FilterBar 盖住）
    await openSort();
    out.S2_open = await sortExpanded();
    out.S2_display = await panelDisplay();
    out.S2_options = await page.$$eval(SORT + ' [data-pencil-name="SortOption"]', (els) => els.map((e) => e.textContent.trim()).filter(Boolean));
    check('S2 打开下拉显示 3 项', out.S2_open && out.S2_display === 'flex' && out.S2_options.length === 3, out.S2_options);
    out.S2_chevron = await page.$eval(SORT + ' .sort-chevron', (el) => {
      const t = getComputedStyle(el).transform;
      if (t === 'none') return 0;
      const m = t.match(/matrix\(([^)]+)\)/);
      if (!m) return 0;
      const [a, b] = m[1].split(',').map(Number);
      return Math.round((Math.atan2(b, a) * 180) / Math.PI);
    });
    check('S2 打开时 chevron 旋转 180°', Math.abs(Math.abs(out.S2_chevron) - 180) <= 3, out.S2_chevron);
    // 命中测试：第 2 个选项中心处的最上层元素应属于面板
    out.S2_hit = await page.evaluate(() => {
      const menu = document.querySelector('.sort-menu');
      const opt = menu.querySelectorAll('[data-pencil-name="SortOption"]')[1];
      const b = opt.getBoundingClientRect();
      const el = document.elementFromPoint(b.x + b.width / 2, b.y + b.height / 2);
      return el ? (el.closest('.sort-menu [data-pencil-name="SortPanel"]') ? 'panel' : el.getAttribute('data-pencil-name') || el.tagName) : 'none';
    });
    check('S2 下拉面板不被下方元素遮挡', out.S2_hit === 'panel', out.S2_hit);

    // S3 按名称
    await pickOption('Name');
    out.S3_label = await sortLabel();
    out.S3_first = await firstGridName();
    check('S3 按名称排序生效', out.S3_label === 'Name' && out.S3_first === 'Design System Audit', { label: out.S3_label, first: out.S3_first });
    check('S3 选择后下拉关闭', (await sortExpanded()) === false);

    // S4 按页数
    await openSort();
    await pickOption('Page count');
    out.S4_label = await sortLabel();
    out.S4_first = await firstGridName();
    check('S4 按页数排序生效（最大 32 在前）', out.S4_label === 'Page count' && out.S4_first === 'Q3 Expense Receipts', { label: out.S4_label, first: out.S4_first });

    // S5 键盘：回到 last modified，再全键盘操作
    await openSort();
    await pickOption('Last modified');
    check('S5 复位为 Last modified', (await sortLabel()) === 'Last modified');
    await page.locator(SORT).focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(150);
    check('S5 Enter 展开下拉', await sortExpanded());
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(120);
    out.S5_activeBg = await page.$eval(SORT + ' [data-pencil-name="SortOption"][class*="is-active"]', (el) => getComputedStyle(el).backgroundColor);
    // 231,237,252 = --sv-accent-soft #E7EDFC（Chrome 可能返回 rgb / rgba 两种写法）
    check('S5 ↓ 移动高亮项（accent-soft 底）', /^rgba?\(231, 237, 252/.test(out.S5_activeBg), out.S5_activeBg);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(250);
    out.S5_label = await sortLabel();
    out.S5_first = await firstGridName();
    check('S5 Enter 选中高亮项（Name）', out.S5_label === 'Name' && out.S5_first === 'Design System Audit', { label: out.S5_label, first: out.S5_first });
    check('S5 选中后下拉收起', (await sortExpanded()) === false);

    // S6 键盘：Esc 关闭不改变排序
    await page.locator(SORT).focus();
    await page.keyboard.press('ArrowDown'); // 关闭态 → 展开并定位
    await page.waitForTimeout(150);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(150);
    out.S6_open = await sortExpanded();
    check('S6 Esc 关闭下拉且排序不变', out.S6_open === false && (await sortLabel()) === 'Name', out.S6_open);

    // S7 排序后卡片点击仍跳转详情
    await page.click('.pulled-content [data-pencil-name="PreviewRow"] [data-pencil-name="FilePreview"]');
    await page.waitForTimeout(700);
    out.S7_path = await page.evaluate(() => location.pathname);
    check('S7 排序后卡片点击仍跳转 document-detail', out.S7_path === '/document-detail', out.S7_path);
    await page.goBack();
    await page.waitForTimeout(1200);

    // ================= V：视图切换 =================
    out.V1_gridRows = await gridCount();
    out.V1_listRoot = await page.$eval('.rs-list', (el) => !!el).catch(() => false);
    out.V1_firstGrid = await firstGridName(); // 当前排序下的首项（返回列表页后排序已重置为默认）
    check('V1 默认网格视图（无列表容器）', out.V1_gridRows > 0 && out.V1_listRoot === false, out.V1_gridRows);

    // V2 切列表
    await page.click('[data-pencil-name="ListBtn"]');
    await page.waitForTimeout(400);
    out.V2_listCount = await listCount();
    out.V2_hasThumb = await page.$eval('.rs-list [data-pencil-name="FileRowThumb"]', (el) => !!el);
    out.V2_hasPill = await page.$eval('.rs-list [data-pencil-name="StatusPill"]', (el) => getComputedStyle(el).display !== 'none');
    out.V2_firstName = await firstListName();
    out.V2_meta = await page.$eval('.rs-list .fr-meta', (el) => el.textContent.trim());
    check('V2 列表视图渲染行（含缩略图/meta/标签）', out.V2_listCount === 24 && out.V2_hasThumb && out.V2_hasPill, { rows: out.V2_listCount });
    check('V2 列表沿用网格当前顺序', out.V2_firstName === out.V1_firstGrid, { list: out.V2_firstName, grid: out.V1_firstGrid });
    check('V2 列表行显示 meta 文案', /pages/.test(out.V2_meta), out.V2_meta);

    // V3 列表行样式：分隔线 --sv-line、hover --sv-surface-2
    out.V3_border = await page.$eval('.rs-list [data-pencil-name="FileRow"]', (el) => getComputedStyle(el).borderBottomColor);
    check('V3 行分隔色 = --sv-line (#E3E5EA)', out.V3_border === 'rgb(227, 229, 234)', out.V3_border);
    await page.hover('.rs-list [data-pencil-name="FileRow"]');
    await page.waitForTimeout(220);
    out.V3_hoverBg = await page.$eval('.rs-list [data-pencil-name="FileRow"]', (el) => getComputedStyle(el).backgroundColor);
    check('V3 行 hover 底色 = --sv-surface-2 (#EEEFF2)', out.V3_hoverBg === 'rgb(238, 239, 242)', out.V3_hoverBg);

    // V4 切换按钮激活态 + 持久化
    out.V4_listPressed = await page.$eval('[data-pencil-name="ListBtn"]', (el) => el.getAttribute('aria-pressed'));
    out.V4_gridPressed = await page.$eval('[data-pencil-name="GridBtn"]', (el) => el.getAttribute('aria-pressed'));
    out.V4_listBg = await page.$eval('[data-pencil-name="ListBtn"]', (el) => getComputedStyle(el).backgroundColor);
    check('V4 列表按钮激活态正确', out.V4_listPressed === 'true' && out.V4_gridPressed === 'false', { list: out.V4_listPressed, grid: out.V4_gridPressed });
    check('V4 激活按钮用 surface-2 底', out.V4_listBg === 'rgb(238, 239, 242)', out.V4_listBg);
    out.V4_ls = await page.evaluate(() => localStorage.getItem('snapvault:library-view-mode'));
    check('V4 视图模式写入 localStorage', out.V4_ls === 'list', out.V4_ls);

    // V5 刷新后保留列表视图
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await dragBarUp();
    await page.waitForTimeout(600);
    out.V5_listCount = await listCount();
    out.V5_gridRows = await gridCount();
    check('V5 刷新后仍是列表视图（持久化）', out.V5_listCount > 0 && out.V5_gridRows === 0, { rows: out.V5_listCount });

    // V6 列表视图角标可见 + 选中生效 + 批量栏出现
    out.V6_badge = await page.$eval('.rs-list .fp-check', (el) => getComputedStyle(el).display !== 'none');
    await page.click('.rs-list .fp-check');
    await page.waitForTimeout(250);
    out.V6_selected = await page.$eval('.rs-list .fp-check', (el) => el.classList.contains('is-selected'));
    const batchVisible = await page.evaluate(() => {
      const b = document.querySelector('[data-pencil-name="BatchBar"]');
      return !!b && b.getBoundingClientRect().height > 0;
    });
    check('V6 列表行角标可见且可选中', out.V6_badge && out.V6_selected && batchVisible, { sel: out.V6_selected, batch: batchVisible });

    // V7 列表行点击跳转（batch 选中不影响行跳转——点行主体而非角标）
    await page.click('.rs-list .fr-name');
    await page.waitForTimeout(700);
    out.V7_path = await page.evaluate(() => location.pathname);
    check('V7 列表行点击跳转 document-detail', out.V7_path === '/document-detail', out.V7_path);
    await page.goBack();
    await page.waitForTimeout(1300);

    // V8 切回网格并持久化
    await page.click('[data-pencil-name="GridBtn"]');
    await page.waitForTimeout(400);
    out.V8_gridRows = await gridCount();
    out.V8_listRoot = await page.$eval('.rs-list', (el) => !!el).catch(() => false);
    out.V8_ls = await page.evaluate(() => localStorage.getItem('snapvault:library-view-mode'));
    check('V8 切回网格视图并持久化', out.V8_gridRows > 0 && out.V8_listRoot === false && out.V8_ls === 'grid', { rows: out.V8_gridRows, ls: out.V8_ls });

    // V9 键盘可切换视图
    await page.locator('[data-pencil-name="ListBtn"]').focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    out.V9_rows = await listCount();
    check('V9 键盘 Enter 可切换视图', out.V9_rows > 0, out.V9_rows);
  } catch (e) {
    out.error = String(e && e.stack ? e.stack : e);
    check('脚本无异常', false, out.error);
  }

  console.log('\n' + JSON.stringify(out, null, 2));
  console.log(`\n==== ${pass} passed, ${fail} failed ====`);
  await browser.close();
  process.exit(fail ? 1 : 0);
})();
