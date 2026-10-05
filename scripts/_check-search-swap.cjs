const { chromium } = require('playwright-core');

// search 原位切换 + SidebarPanel 两段式变形验证（场景 A-H）：
//   A: hero -> 上拉 -> pulled -> ListBtn -> search-in-flow（URL 不变、拉条共享、pulled 隐藏）
//   B: search 态下拉 300px(>256.5 过半) -> 退出 search 返回 list
//   C: ViewSwitch 两段式弹入 SidebarPanel -> page-root 压缩 1200px/左移 240px -> ListBtn 进 search（侧栏保持、右侧容器切换）
//   D: search+侧栏态点击拉条 -> 返回 list，侧栏仍展开
//   E: hero SearchField / float-search 原位切换
//   F: search 页左侧方格 -> 回 pulled up（侧栏保持展开）
//   G: PanelClose 收起侧栏 -> page-root 恢复 1440px、侧栏卸载
//   H: 侧栏开启时拉条拖动 -> 侧栏跟随移动且开关状态保留

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: process.env.HEADED ? false : true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:5173/library', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const out = {};
  const barY = () => page.$eval('[data-pencil-name="TravelBar"]', el => el.getBoundingClientRect().y);
  // v-show 直接作用在组件根元素上；.pulled-content children: [0]=PulledView 根, [1]=SearchView 根
  const flowChild = (i) => page.evaluate((idx) => {
    const c = document.querySelector('.pulled-content');
    const el = c ? c.children[idx] : null;
    if (!el) return 'missing';
    return getComputedStyle(el).display !== 'none' ? 'visible' : 'hidden';
  }, i);
  const visible = (sel) => page.evaluate((s) => {
    const el = document.querySelector(s);
    if (!el) return 'missing';
    return getComputedStyle(el).display !== 'none' ? 'visible' : 'hidden';
  }, sel);
  const sidebarX = () => page.evaluate(() => {
    const s = document.querySelector('.sidebar-panel');
    return s ? s.getBoundingClientRect().x : 'unmounted';
  });
  const sidebarTop = () => page.evaluate(() => {
    const s = document.querySelector('.sidebar-panel');
    return s ? s.getBoundingClientRect().y : 'unmounted';
  });
  const sidebarScale = () => page.evaluate(() => {
    const s = document.querySelector('.sidebar-panel');
    if (!s) return 'unmounted';
    const t = getComputedStyle(s).transform;
    return t === 'none' ? 1 : parseFloat(t.match(/matrix\(([^,]+)/)[1]);
  });
  // page-root（pulled/search 视图根，取可见者）：宽度与左外边距（压缩 1200/240，恢复 1440/0）
  const pageRootBox = () => page.evaluate(() => {
    const rs = [...document.querySelectorAll('.pulled-content .page-root')]
      .filter(el => el.getBoundingClientRect().width > 0); // 跳过 display:none 的隐藏视图
    const r = rs[0];
    if (!r) return 'missing';
    const b = r.getBoundingClientRect();
    return { w: Math.round(b.width), ml: Math.round(parseFloat(getComputedStyle(r).marginLeft)) };
  });
  const switchingOn = () => page.evaluate(() => {
    const c = document.querySelector('.pulled-content');
    return c ? c.classList.contains('switching') : false;
  });
  const morphOn = () => page.evaluate(() => {
    const v = document.querySelector('[data-pencil-name="ViewSwitch"]');
    return v ? v.classList.contains('fade-white') : false;
  });

  async function dragBar(delta, steps) {
    const b = await page.$('[data-pencil-name="TravelBar"]');
    const r = await b.boundingBox();
    const cx = r.x + r.width / 2;
    const sy = r.y + 10;
    await page.mouse.move(cx, sy);
    await page.mouse.down();
    const inc = delta / steps;
    for (let i = 1; i <= steps; i++) await page.mouse.move(cx, sy + inc * i, { steps: 3 });
    await page.mouse.up();
  }

  // ================= A: hero -> pulled -> ListBtn -> search-in-flow =================
  out.A0_barHero = await barY(); // ~641
  await dragBar(-600, 20);
  await page.waitForTimeout(1100);
  out.A1_barSnapped = await barY(); // ~64
  out.A1_pulledRoot = await flowChild(0); // visible（list 态）
  out.A1_searchRoot = await flowChild(1); // hidden（search-in-flow v-show=false）
  await page.click('.pulled-layer [data-pencil-name="ListBtn"]');
  await page.waitForTimeout(300); // list↔search 为即时切换（无动画）
  out.A2_url = page.url(); // 仍 /library
  out.A2_barStill = await barY(); // ~64（共享拉条吸附）
  out.A2_searchRoot = await flowChild(1); // visible（search-in-flow 显示）
  out.A2_pulledRoot = await flowChild(0); // hidden（pulled 视图 v-show=false）
  out.A2_noBlur = await switchingOn(); // false（已移除切换模糊动画）
  out.A2_searchBarHidden = await visible('.pulled-layer .search-travel-bar'); // hidden（共享拉条取代）
  out.A2_topNavHidden = await visible('.pulled-layer [data-pencil-name="TopNav"]'); // hidden

  // ================= B: search 态下拉 300px(过半) -> 退出 search =================
  await dragBar(300, 20);
  await page.waitForTimeout(1100);
  out.B1_searchRoot = await flowChild(1); // hidden
  out.B1_pulledRoot = await flowChild(0); // visible（回到 list）
  out.B1_bar = await barY(); // ~64

  // ================= C: ViewSwitch 弹入 SidebarPanel（两段式）+ 压缩 + 进 search =================
  // C0: 点击后 0.2s 内 ViewSwitch 处于纯白阶段
  await page.click('[data-pencil-name="ViewSwitch"]');
  await page.waitForTimeout(120);
  out.C0_morphing = await morphOn(); // true（fade-white）
  await page.waitForTimeout(1100);
  out.C1_sidebarX = await sidebarX(); // ~0（展开）
  out.C1_sidebarScale = await sidebarScale(); // ~1（0.7s 放大完成）
  out.C1_sidebarTop = await sidebarTop(); // ~128（barY 64 + 64，恒在拉条下方）
  out.C1_pageRoot = await pageRootBox(); // {w:~1200, ml:~240}（压缩）
  await page.click('.pulled-layer [data-pencil-name="ListBtn"]');
  await page.waitForTimeout(900);
  out.C2_sidebarStill = await sidebarX(); // ~0（不受影响）
  out.C2_sidebarTopStill = await sidebarTop(); // ~128
  out.C2_searchRoot = await flowChild(1); // visible（search-in-flow 切换）
  out.C2_pulledRoot = await flowChild(0); // hidden
  out.C2_pageRoot = await pageRootBox(); // {w:~1200, ml:~240}（search 同样压缩）

  // ================= D: search+侧栏态点击拉条 -> 返回 list，侧栏仍展开 =================
  await page.click('[data-pencil-name="TravelBar"]');
  await page.waitForTimeout(900);
  out.D1_searchRoot = await flowChild(1); // hidden
  out.D1_pulledRoot = await flowChild(0); // visible（list 恢复）
  out.D1_sidebarStill = await sidebarX(); // ~0
  out.D1_sidebarTopStill = await sidebarTop(); // ~128
  out.D1_bar = await barY(); // ~64

  // ================= E: hero SearchField / float-search 原位切换 =================
  // 收起侧栏（PanelClose 反向两段式），并下拉回 hero
  await page.click('.sidebar-panel [data-pencil-name="PanelClose"]');
  await page.waitForTimeout(120);
  out.E0_morphStart = await morphOn(); // true（关闭路径：先 0.7s 缩小，ViewSwitch 保持纯白作缩小种子）
  await page.waitForTimeout(1100);
  out.E0_sidebarUnmounted = await sidebarX(); // unmounted（收起完成）
  out.E0_pageRoot = await pageRootBox(); // {w:~1440, ml:~0}（恢复）
  await dragBar(600, 20);
  await page.waitForTimeout(1300);
  out.E0_barHero = await barY(); // ~641

  // E1: hero SearchField 点击 -> search-in-flow（不跳路由）
  await page.click('.hero-layer [data-pencil-name="SearchField"]');
  await page.waitForTimeout(900);
  out.E1_url = page.url(); // 仍 /library
  out.E1_searchRoot = await flowChild(1); // visible
  out.E1_bar = await barY(); // ~64（enterSearch 兜底 snapTo(1)）

  // E2: 点击拉条退出 search
  await page.click('[data-pencil-name="TravelBar"]');
  await page.waitForTimeout(900);
  out.E2_pulledRoot = await flowChild(0); // visible（回 list）

  // E3: 下拉回 hero，上拉拖到 float-search 可见（p>0.6），验证其点击已改为原位切换（进入 search）
  await dragBar(600, 20);
  await page.waitForTimeout(1300);
  const eb = await page.$('[data-pencil-name="TravelBar"]');
  const er = await eb.boundingBox();
  const ecx = er.x + er.width / 2;
  await page.mouse.move(ecx, er.y + 10);
  await page.mouse.down();
  // 拖到高位（y=150）保证 p>0.6（float-search 显示；不依赖精确坐标，避开 Chrome 长流程 compositor 偏移干扰）
  await page.mouse.move(ecx, 150, { steps: 8 });
  await page.waitForTimeout(120);
  out.E3_floatClickBinds = await page.evaluate(() => {
    const el = document.querySelector('.float-search');
    if (!el) return 'missing';
    el.click(); // 触发 @click -> enterSearch（原位切换，不再跳路由）
    return 'clicked';
  });
  await page.waitForTimeout(900);
  out.E3_searchRoot = await flowChild(1); // visible（进入 search，未跳路由）
  out.E3_url = page.url(); // 仍 /library
  await page.mouse.up(); // 收尾（search 态松手 -> snapTo(1) 留在 search）
  await page.waitForTimeout(600);
  out.E3_bar = await barY(); // 仅记录（受 Chrome compositor 偏移影响时可能非 64）

  // ================= F: search 页左侧方格 -> 回到 pulled up 页 =================
  // F1: search-in-flow 态点击方格（grid 图标 ViewBtn）-> 退出 search 回 list，拉条停 64
  await page.click('.search-in-flow [data-pencil-name="ViewBtn"]:has([data-icon-name="layout-grid"])');
  await page.waitForTimeout(900);
  out.F1_pulledRoot = await flowChild(0); // visible（回 list 内容）
  out.F1_searchRoot = await flowChild(1); // hidden（search 退出）
  out.F1_bar = await barY(); // ~64
  out.F1_sidebar = await sidebarX(); // unmounted（侧栏未弹出）

  // F2: 开侧栏 -> ListBtn 进 search（右侧容器切换，侧栏不变）-> 点方格 -> 回 list 且侧栏仍展开
  await page.click('[data-pencil-name="ViewSwitch"]');
  await page.waitForTimeout(1200);
  out.F2_sidebarOpen = await sidebarX(); // ~0
  await page.click('.pulled-layer [data-pencil-name="ListBtn"]');
  await page.waitForTimeout(900);
  out.F2_searchRoot = await flowChild(1); // visible（search-in-flow 切换）
  out.F2_sidebarStill = await sidebarX(); // ~0（左侧栏不变）
  await page.click('.search-in-flow [data-pencil-name="ViewBtn"]:has([data-icon-name="layout-grid"])');
  await page.waitForTimeout(900);
  out.F2_pulledRoot = await flowChild(0); // visible（回 list）
  out.F2_searchGone = await flowChild(1); // hidden
  out.F2_sidebarKept = await sidebarX(); // ~0（侧栏保持展开，不随容器切换收起）
  out.F2_bar = await barY(); // ~64

  // ================= G: PanelClose 收起侧栏 -> page-root 恢复 1440px、侧栏卸载 =================
  await page.click('.sidebar-panel [data-pencil-name="PanelClose"]');
  await page.waitForTimeout(1200);
  out.G1_sidebarUnmounted = await sidebarX(); // unmounted
  out.G1_pageRoot = await pageRootBox(); // {w:~1440, ml:~0}（恢复未压缩）

  // ================= H: 侧栏开启时拉条拖动 -> 侧栏跟随移动且开关状态保留 =================
  await page.click('[data-pencil-name="ViewSwitch"]');
  await page.waitForTimeout(1200);
  out.H0_sidebarOpen = await sidebarX(); // ~0
  await dragBar(600, 20); // 拉条下拉（pulled -> hero）
  await page.waitForTimeout(1300);
  out.H1_sidebarStill = await sidebarX(); // ~0（跟随 .pulled-layer 移动，状态保留）
  out.H1_sidebarTop = await sidebarTop(); // ~705（barY 641 + 64，仍贴在拉条下方）
  out.H1_bar = await barY(); // ~641（hero）
  await dragBar(-600, 20); // 再拉回 pulled
  await page.waitForTimeout(1100);
  out.H2_sidebarStill = await sidebarX(); // ~0
  out.H2_bar = await barY(); // ~64

  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch(e => { console.error('ERR', e); process.exit(1); });
