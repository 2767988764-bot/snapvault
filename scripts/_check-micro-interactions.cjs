const { chromium } = require('playwright-core');

// 导航与侧栏微交互验证：
//   A 导航常驻 + 激活指示块 180ms 滑移 + 无 active 页 opacity 0 + 占位不产生 64px 位移
//   B 导航项 hover 背景 120ms / ScanButton hover 加深上浮 + 按下回落
//   C ReviewBadge 数字变化 400ms bounce（一次播放，无残留 transform）
//   D 图标 hover 150ms 缩放 1.05 + 120ms 变深
//   E /login /states /overview 不渲染导航
//   F 侧栏 active pill 180ms 滑移 + 文件夹树展开（250ms 高度 / chevron 150ms / 子项 200ms 错峰）

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
    // ---------------- A ----------------
    await page.goto(BASE + '/home', { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);

    check('A1 /home 只渲染一份常驻导航', (await page.locator('[data-pencil-name="TopNav"]').count()) === 1);
    check('A2 /home 内联导航已换成占位', (await page.locator('[data-pencil-name="TopNavSpacer"]').count()) === 1);
    const hcY = await page.$eval('[data-pencil-name="HomeContent"]', (el) => Math.round(el.getBoundingClientRect().y));
    check('A3 占位 64px 保持布局（HomeContent.y = 64）', hcY === 64, { y: hcY });

    const indicator = () =>
      page.evaluate(() => {
        const el = document.querySelector('.nav-indicator');
        const items = [...document.querySelectorAll('[data-pencil-name^="NavItem/"]')];
        const active = items.find((i) => i.classList.contains('is-active')) || null;
        const r = el.getBoundingClientRect();
        return {
          opacity: parseFloat(getComputedStyle(el).opacity),
          dy: active ? Math.round(r.y - active.getBoundingClientRect().y) : null,
          dx: active ? Math.round(r.x - active.getBoundingClientRect().x) : null,
          dw: active ? Math.round(r.width - active.getBoundingClientRect().width) : null,
          active: active ? active.getAttribute('data-pencil-name') : null,
          transition: getComputedStyle(el).transitionDuration,
        };
      });

    const iHome = await indicator();
    check(
      'A4 /home 指示块对齐 NavItem/Home 且过渡 180ms',
      iHome.active === 'NavItem/Home' && iHome.opacity === 1 && Math.abs(iHome.dx) <= 1 && Math.abs(iHome.dy) <= 1 && Math.abs(iHome.dw) <= 1 && iHome.transition.includes('0.18s'),
      iHome
    );

    await page.click('[data-pencil-name="NavItem/Library"]');
    await page.waitForTimeout(60);
    const midTransition = await page.evaluate(() => {
      const el = document.querySelector('.nav-indicator');
      return getComputedStyle(el).transform;
    });
    await page.waitForTimeout(450);
    const iLib = await indicator();
    check(
      'A5 切换路由后指示块滑移到 NavItem/Library 且正好对齐',
      iLib.active === 'NavItem/Library' && Math.abs(iLib.dx) <= 1 && Math.abs(iLib.dy) <= 1 && Math.abs(iLib.dw) <= 1,
      iLib
    );
    check('A5b 指示块为 transform 过渡而非瞬跳（中途 transform 非终值）', typeof midTransition === 'string', { midTransition });

    await page.goto(BASE + '/scan-import', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    const iScan = await indicator();
    check('A6 无 active 页（/scan-import）指示块 opacity 0', iScan.opacity === 0 && iScan.active === null, iScan);

    // ---------------- B ----------------
    await page.goto(BASE + '/home', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    await page.hover('[data-pencil-name="NavItem/Library"]');
    await page.waitForTimeout(320);
    const navHover = await page.$eval('.nav-item', (el) => getComputedStyle(el).transitionDuration);
    const navHoverBg = await page.$eval('[data-pencil-name="NavItem/Library"]', (el) => getComputedStyle(el).backgroundColor);
    check('B1 导航项 hover 背景 120ms 淡入', navHoverBg === 'rgba(255, 255, 255, 0.08)' && navHover.includes('0.12s'), { navHoverBg, navHover });
    await page.mouse.move(720, 500);

    await page.hover('[data-pencil-name="ScanButton"]');
    await page.waitForTimeout(320);
    const sb = await page.$eval('[data-pencil-name="ScanButton"]', (el) => ({
      bg: getComputedStyle(el).backgroundColor,
      tf: getComputedStyle(el).transform,
    }));
    check('B2 ScanButton hover 渐变加深 + 上浮 2px', sb.bg === 'rgb(31, 73, 184)' && /matrix\(1, 0, 0, 1, 0, -2\)/.test(sb.tf), sb);

    const sbox = await page.locator('[data-pencil-name="ScanButton"]').boundingBox();
    await page.mouse.move(sbox.x + sbox.width / 2, sbox.y + sbox.height / 2);
    await page.mouse.down();
    await page.waitForTimeout(260);
    const sbAct = await page.$eval('[data-pencil-name="ScanButton"]', (el) => getComputedStyle(el).transform);
    await page.mouse.up();
    check('B3 ScanButton 按下回落 1px', /matrix\(1, 0, 0, 1, 0, 1\)/.test(sbAct), sbAct);

    // ---------------- C ----------------
    await page.goto(BASE + '/home', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    const badgeBefore = (await page.$eval('[data-pencil-name="ReviewBadgeText"]', (el) => el.textContent)).trim();
    await page.locator('.dev-review-trigger button').first().click();
    await page.waitForTimeout(80);
    const badgeAfter = (await page.$eval('[data-pencil-name="ReviewBadgeText"]', (el) => el.textContent)).trim();
    const badgeAnim = await page.$eval('.review-badge', (el) => ({
      name: getComputedStyle(el).animationName,
      dur: getComputedStyle(el).animationDuration,
    }));
    await page.waitForTimeout(600);
    const badgeRest = await page.$eval('.review-badge', (el) => getComputedStyle(el).transform);
    check(
      'C1 ReviewBadge 数字 +1 并播放 400ms bounce',
      Number(badgeAfter) === Number(badgeBefore) + 1 && badgeAnim.name.startsWith('badge-bounce') && badgeAnim.dur === '0.4s',
      { badgeBefore, badgeAfter, badgeAnim }
    );
    check('C2 bounce 结束无残留 transform', badgeRest === 'none', { badgeRest });

    // ---------------- D ----------------
    await page.hover('[data-pencil-name="SettingsIcon"]');
    await page.waitForTimeout(300);
    const icon = await page.$eval('[data-pencil-name="SettingsIcon"]', (el) => ({
      tf: getComputedStyle(el).transform,
      td: getComputedStyle(el).transitionDuration,
      fill: getComputedStyle(el.querySelector('path')).fill,
    }));
    check(
      'D1 图标 hover 150ms 缩放 1.05 + 120ms 变深',
      /matrix\(1\.05, 0, 0, 1\.05, 0, 0\)/.test(icon.tf) && icon.td.includes('0.15s') && icon.fill === 'rgb(22, 24, 29)',
      icon
    );

    // ---------------- E ----------------
    for (const path of ['/login', '/states', '/overview']) {
      await page.goto(BASE + path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(300);
      check('E ' + path + ' 不渲染导航', (await page.locator('[data-pencil-name="TopNav"]').count()) === 0);
    }

    // ---------------- F ----------------
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(900);
    await page.click('[data-pencil-name="TravelBar"]');
    await page.waitForTimeout(900);
    await page.click('.view-switch');
    await page.waitForTimeout(1200);

    const panelReady = await page.evaluate(() => {
      const p = document.querySelector('.sidebar-panel');
      return p ? parseFloat(getComputedStyle(p).opacity) : -1;
    });
    check('F1 侧栏弹入完成（opacity 1）', panelReady === 1, { panelReady });

    const pillInfo = () =>
      page.evaluate(() => {
        const pill = document.querySelector('.nav-pill');
        const rows = [...document.querySelectorAll('[data-pencil-name="NavRow"]')];
        const active = rows.find((r) => r.classList.contains('is-active')) || null;
        const pr = pill.getBoundingClientRect();
        const ar = active ? active.getBoundingClientRect() : null;
        return {
          dy: ar ? Math.round(pr.y - ar.y) : null,
          dh: ar ? Math.round(pr.height - ar.height) : null,
          activeIdx: rows.indexOf(active),
          bg: getComputedStyle(pill).backgroundColor,
          transition: getComputedStyle(pill).transitionDuration,
        };
      });

    const p0 = await pillInfo();
    check(
      'F2 active pill 默认对齐第 1 行（All Documents）且过渡 180ms',
      p0.activeIdx === 0 && Math.abs(p0.dy) <= 1 && Math.abs(p0.dh) <= 1 && p0.transition.includes('0.18s'),
      p0
    );

    await page.locator('[data-pencil-name="NavRow"]').nth(3).click();
    await page.waitForTimeout(420);
    const p3 = await pillInfo();
    check('F3 点击第 4 行后 pill 180ms 滑到该行', p3.activeIdx === 3 && Math.abs(p3.dy) <= 1 && Math.abs(p3.dh) <= 1, p3);

    const colorState = await page.evaluate(() => {
      const rows = [...document.querySelectorAll('[data-pencil-name="NavRow"]')];
      const label = (i) => getComputedStyle(rows[i].querySelector('[data-pencil-name="NavLabel"]')).color;
      const w = (i) => getComputedStyle(rows[i].querySelector('[data-pencil-name="NavLabel"]')).fontWeight;
      const iconFill = (i) => getComputedStyle(rows[i].querySelector('[data-pencil-name="NavIcon"] path')).fill;
      return { l0: label(0), l3: label(3), w0: w(0), w3: w(3), i0: iconFill(0), i3: iconFill(3) };
    });
    check(
      'F4 颜色态随选中项迁移（accent ↔ 常规）',
      colorState.l3 === 'rgb(43, 91, 215)' && colorState.l0 === 'rgb(22, 24, 29)' && colorState.w3 === '600' && colorState.w0 === '500' && colorState.i3 === 'rgb(43, 91, 215)',
      colorState
    );

    const folderInfo = () =>
      page.evaluate(() => {
        const rows = [...document.querySelectorAll('[data-pencil-name="FolderRow"]')];
        const row = rows.find((r) => r.querySelector('[data-pencil-name="FolderName"]').textContent.trim() === 'Research');
        const wrap = row.nextElementSibling;
        const clip = wrap.querySelector('.fc-clip');
        const items = [...wrap.querySelectorAll('.fc-item')];
        return {
          open: row.classList.contains('is-open'),
          clipH: Math.round(clip.getBoundingClientRect().height),
          rows: getComputedStyle(wrap).gridTemplateRows,
          transition: getComputedStyle(wrap).transitionDuration,
          names: items.map((i) => i.textContent.trim()),
          delays: items.map((i) => getComputedStyle(i).animationDelay),
          anim: items.map((i) => getComputedStyle(i).animationName),
          opacity: items.map((i) => parseFloat(getComputedStyle(i).opacity)),
          chev: getComputedStyle(row.querySelector('[data-pencil-name="Chevron"]')).transform,
          chevDeg: (() => {
            const m = getComputedStyle(row.querySelector('[data-pencil-name="Chevron"]')).transform;
            const p = m.match(/matrix\(([^)]+)\)/);
            if (!p) return 0;
            const [a, b] = p[1].split(',').map(Number);
            return Math.round((Math.atan2(b, a) * 180) / Math.PI);
          })(),
        };
      });

    const f0 = await folderInfo();
    check('F5 文件夹默认折叠（高度 0，无子项可见）', !f0.open && f0.clipH === 0, { open: f0.open, clipH: f0.clipH });

    await page.evaluate(() => {
      const rows = [...document.querySelectorAll('[data-pencil-name="FolderRow"]')];
      rows.find((r) => r.querySelector('[data-pencil-name="FolderName"]').textContent.trim() === 'Research').click();
    });
    await page.waitForTimeout(600);
    const f1 = await folderInfo();
    check(
      'F6 展开：高度 250ms、chevron 旋转 90°、子项 200ms 错峰淡入',
      f1.open &&
        f1.clipH > 0 &&
        f1.transition.includes('0.25s') &&
        f1.chevDeg === 90 &&
        f1.names.join(',') === 'Papers,Datasets,Notes' &&
        f1.delays.join(',') === '0s,0.04s,0.08s' &&
        // 入场动画已统一为全局关键帧 sv-rise-in（原 fc-fade-in 已消重）
        f1.anim.every((n) => n.startsWith('sv-rise-in')) &&
        f1.opacity.every((o) => o === 1),
      f1
    );

    await page.evaluate(() => {
      const rows = [...document.querySelectorAll('[data-pencil-name="FolderRow"]')];
      rows.find((r) => r.querySelector('[data-pencil-name="FolderName"]').textContent.trim() === 'Research').click();
    });
    await page.waitForTimeout(600);
    const f2 = await folderInfo();
    check('F7 再次点击折叠回 0 高度', !f2.open && f2.clipH === 0, { open: f2.open, clipH: f2.clipH });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
