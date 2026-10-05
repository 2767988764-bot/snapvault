const { chromium } = require('playwright-core');

// Settings 微交互回归：
//   导航激活块滑移/高亮 · Toggle 开关 · 按钮 hover · 滑块拖拽 · 下拉 · 异步按钮 + toast
//   卡片 hover 上浮 · 折叠区展开 · 破坏性按钮红系 hover
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

// 解析 computed transform 的 translateY（matrix 第 6 个分量）
function ty(t) {
  if (!t || t === 'none') return 0;
  const m = t.match(/-?\d+(\.\d+)?/g);
  return m && m.length >= 6 ? parseFloat(m[5]) : 0;
}

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  try {
    await page.goto(BASE + '/settings', { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);

    // —— N1 激活背景块存在 ——
    check('N1 导航激活块存在', (await page.locator('[data-pencil-name="SettingsNavPill"]').count()) === 1);

    // —— N2 点击第 3 项后激活块 translateY 与目标行 offsetTop 一致 ——
    await page.locator('[data-pencil-name="SettingsNavRow"]').nth(2).click();
    await page.waitForTimeout(320);
    const nav = await page.evaluate(() => {
      const wrap = document.querySelector('[data-pencil-name="SettingsNav"]');
      const rows = wrap.querySelectorAll('[data-pencil-name="SettingsNavRow"]');
      const pill = document.querySelector('[data-pencil-name="SettingsNavPill"]');
      const label = rows[2].querySelector('[data-pencil-name="SettingsNavLabel"]');
      return {
        offsetTop: rows[2].offsetTop,
        transform: getComputedStyle(pill).transform,
        pillH: parseFloat(getComputedStyle(pill).height),
        rowH: rows[2].offsetHeight,
        active: rows[2].classList.contains('is-active'),
        labelColor: getComputedStyle(label).color,
        fontWeight: getComputedStyle(label).fontWeight,
      };
    });
    check(
      'N2 激活块 translateY 滑到第 3 项（= offsetTop）',
      Math.abs(ty(nav.transform) - nav.offsetTop) < 1 && Math.abs(nav.pillH - nav.rowH) < 1,
      { translateY: ty(nav.transform), offsetTop: nav.offsetTop, pillH: nav.pillH, rowH: nav.rowH }
    );
    check(
      'N3 第 3 项高亮为 #2B5BD7/600',
      nav.active && nav.labelColor === 'rgb(43, 91, 215)' && nav.fontWeight === '600',
      { active: nav.active, color: nav.labelColor, weight: nav.fontWeight }
    );

    // —— S1/S2 开关 ——
    const SW = '[data-pencil-name="Switch"]';
    const initial = await page.locator(SW).first().getAttribute('aria-checked');
    const swInfo = async () =>
      page.evaluate(() => {
        const el = document.querySelector('[data-pencil-name="Switch"]');
        const knob = el.querySelector('[data-pencil-name="SwitchKnob"]');
        const t = getComputedStyle(knob).transform;
        const m = t.match(/-?\d+(\.\d+)?/g);
        return {
          aria: el.getAttribute('aria-checked'),
          bg: getComputedStyle(el).backgroundColor,
          knobX: m && m.length >= 6 ? parseFloat(m[4]) : 0,
        };
      });
    await page.locator(SW).first().click();
    await page.waitForTimeout(260);
    const off = await swInfo();
    await page.locator(SW).first().click();
    await page.waitForTimeout(260);
    const on = await swInfo();
    check(
      'S1 开关点击后 aria-checked 翻转',
      initial === 'true' && off.aria === 'false' && on.aria === 'true',
      { initial, off: off.aria, on: on.aria }
    );
    check(
      'S2 打开态轨道为 #2B5BD7 且圆点位移为正',
      on.bg === 'rgb(43, 91, 215)' && on.knobX > 0 && off.knobX === 0,
      { onBg: on.bg, onKnobX: on.knobX, offKnobX: off.knobX }
    );

    // —— B1 常规按钮 hover 上移 2px ——
    await page.locator('[data-pencil-name="Btn/Outline"]').hover();
    await page.waitForTimeout(300);
    const btnTy = ty(
      await page.evaluate(() => getComputedStyle(document.querySelector('[data-pencil-name="Btn/Outline"]')).transform)
    );
    check('B1 按钮 hover translateY(-2px)', Math.abs(btnTy + 2) < 0.6, { translateY: btnTy });

    // —— D1 破坏性按钮 hover 偏红 ——
    await page.locator('[data-pencil-name="BtnDanger"]').hover();
    await page.waitForTimeout(300);
    const danger = await page.evaluate(() => {
      const el = document.querySelector('[data-pencil-name="BtnDanger"]');
      const cs = getComputedStyle(el);
      return { bg: cs.backgroundColor, border: cs.borderTopColor, color: cs.color };
    });
    const red = /179, 38, 30|251, 233, 232/;
    check(
      'D1 破坏性按钮 hover 红系（#B3261E / #FBE9E8）',
      red.test(danger.bg) || red.test(danger.border),
      danger
    );

    // —— SL1 滑块拖到中点 ——
    const track = page.locator('[data-pencil-name="Slider"] .sv-slider-track').first();
    const tb = await track.boundingBox();
    const cy = tb.y + tb.height / 2;
    await page.mouse.move(tb.x + 4, cy);
    await page.mouse.down();
    await page.mouse.move(tb.x + tb.width / 2, cy, { steps: 6 });
    await page.mouse.up();
    await page.waitForTimeout(220);
    const slider = await page.evaluate(() => {
      const track = document.querySelector('[data-pencil-name="Slider"] .sv-slider-track');
      const fill = document.querySelector('[data-pencil-name="Slider"] .sv-slider-fill');
      return {
        ratio: fill.getBoundingClientRect().width / track.getBoundingClientRect().width,
        value: document.querySelector('[data-pencil-name="SliderValue"]').textContent.trim(),
      };
    });
    check(
      'SL1 拖到中点填充约轨道一半且数值变化',
      Math.abs(slider.ratio - 0.5) < 0.12 && slider.value !== '82',
      slider
    );

    // —— DD1 下拉展开 ——
    await page.locator('[data-pencil-name="Select"]').click();
    await page.waitForTimeout(280);
    const panel = await page.evaluate(() => {
      const p = document.querySelector('[data-pencil-name="SelectPanel"]');
      return { opacity: getComputedStyle(p).opacity, options: p.querySelectorAll('[data-pencil-name="SelectOption"]').length };
    });
    check('DD1 下拉展开后 panel opacity = 1', panel.opacity === '1' && panel.options === 3, panel);

    // —— DD2 选项 hover 背景变化 ——
    const optBgBefore = await page.evaluate(
      () => getComputedStyle(document.querySelectorAll('[data-pencil-name="SelectOption"]')[2]).backgroundColor
    );
    await page.locator('[data-pencil-name="SelectOption"]').nth(2).hover();
    await page.waitForTimeout(200);
    const optBgAfter = await page.evaluate(
      () => getComputedStyle(document.querySelectorAll('[data-pencil-name="SelectOption"]')[2]).backgroundColor
    );
    check('DD2 选项 hover 背景高亮', optBgBefore !== optBgAfter && optBgAfter === 'rgb(238, 239, 242)', {
      before: optBgBefore,
      after: optBgAfter,
    });

    // —— DD3 选中项出现勾选标记 ——
    const checkCount = await page.evaluate(() => {
      const sel = document.querySelector('.sv-select-option.is-selected');
      return sel ? sel.querySelectorAll('[data-pencil-name="SelectCheck"]').length : 0;
    });
    check('DD3 选中项带勾选标记', checkCount === 1, { checkCount });

    // Escape 关闭
    await page.keyboard.press('Escape');
    await page.waitForTimeout(260);
    const panelClosed = await page.evaluate(
      () => getComputedStyle(document.querySelector('[data-pencil-name="SelectPanel"]')).opacity
    );
    check('DD4 Escape 关闭下拉', panelClosed === '0', { opacity: panelClosed });

    // —— A1 异步按钮：点击后立即 disabled + spinner ——
    const firstAsync = page.locator('[data-pencil-name="AsyncBtn"]').first();
    await firstAsync.click();
    const busyState = await page.evaluate(() => {
      const btn = document.querySelector('[data-pencil-name="AsyncBtn"]');
      return {
        disabled: btn.getAttribute('aria-disabled'),
        spinner: btn.querySelectorAll('.sv-spinner').length,
      };
    });
    check('A1 点击后按钮禁用且出现 spinner', busyState.disabled === 'true' && busyState.spinner === 1, busyState);

    // —— A2 完成后 toast 可见、按钮恢复 ——
    await page.waitForTimeout(1100);
    const after = await page.evaluate(() => {
      const btn = document.querySelector('[data-pencil-name="AsyncBtn"]');
      const toast = document.querySelector('[data-pencil-name="SettingsToast"]');
      return {
        disabled: btn.getAttribute('aria-disabled'),
        spinner: btn.querySelectorAll('.sv-spinner').length,
        toast: toast ? getComputedStyle(toast).opacity : null,
        text: toast ? toast.textContent.trim() : null,
      };
    });
    check(
      'A2 完成后 toast 可见且按钮恢复',
      after.disabled === 'false' && after.spinner === 0 && after.toast === '1',
      after
    );

    // —— C1 卡片 hover 上浮 ——
    await page.locator('[data-pencil-name="SettingsCard"]').first().hover();
    await page.waitForTimeout(300);
    const cardTy = ty(
      await page.evaluate(() => getComputedStyle(document.querySelector('[data-pencil-name="SettingsCard"]')).transform)
    );
    check('C1 卡片 hover translateY 为负', cardTy < -1, { translateY: cardTy });

    // —— F0 收起态：内容完整落在画框内 ——
    const collapsedBox = await page.evaluate(() => {
      const root = document.querySelector('.page-root').getBoundingClientRect();
      const content = document.querySelector('[data-pencil-name="SettingsContent"]').getBoundingClientRect();
      return { rootBottom: root.bottom, contentBottom: content.bottom };
    });
    check('F0 收起态 SettingsContent 底部不超出画框', collapsedBox.contentBottom <= collapsedBox.rootBottom + 0.5, collapsedBox);

    // —— F1 折叠区展开 ——
    await page.locator('[data-pencil-name="CollapseHead"]').click();
    await page.waitForTimeout(400);
    const adv = await page.evaluate(() => {
      const body = document.querySelector('[data-pencil-name="CollapseBody"]');
      const item = document.querySelector('[data-pencil-name="CollapseItem"]');
      return {
        bodyH: body.getBoundingClientRect().height,
        itemOpacity: getComputedStyle(item).opacity,
        chevron: getComputedStyle(document.querySelector('[data-pencil-name="CollapseChevron"]')).transform,
      };
    });
    check('F1 折叠区展开后高度 > 0 且内容 opacity = 1', adv.bodyH > 0 && adv.itemOpacity === '1', adv);
    check('F2 chevron 展开时旋转', ty(adv.chevron) === 0 && adv.chevron !== 'none', { chevron: adv.chevron });

    // —— F3 展开态：最后一项完整可见（不超出画框） ——
    const fit = await page.evaluate(() => {
      const root = document.querySelector('.page-root').getBoundingClientRect();
      const items = [...document.querySelectorAll('[data-pencil-name="CollapseItem"]')];
      const last = items[items.length - 1].getBoundingClientRect();
      return { count: items.length, rootBottom: root.bottom, lastBottom: last.bottom, lastH: last.height };
    });
    check(
      'F3 展开态最后一项不超出画框且可见',
      fit.lastH > 0 && fit.lastBottom <= fit.rootBottom,
      fit
    );
    // —— SG1 分段控件：点击 English 后选中项变白底，原选中项透明 ——
    const langSeg = page.locator('[data-pencil-name="LanguageSeg"] [data-pencil-name="SegBtn"]');
    const fmtSeg = page.locator('[data-pencil-name="FormatSeg"] [data-pencil-name="SegBtn"]');
    const segState = async () =>
      page.evaluate(() => {
        const pick = (b) => ({
          active: b.classList.contains('is-active'),
          bg: getComputedStyle(b).backgroundColor,
          color: getComputedStyle(b.querySelector('[data-pencil-name="SegBtnText"]')).color,
        });
        const l = document.querySelectorAll('[data-pencil-name="LanguageSeg"] [data-pencil-name="SegBtn"]');
        const f = document.querySelectorAll('[data-pencil-name="FormatSeg"] [data-pencil-name="SegBtn"]');
        return { l0: pick(l[0]), l1: pick(l[1]), l2: pick(l[2]), f0: pick(f[0]), f1: pick(f[1]) };
      });

    await langSeg.nth(2).click();
    await page.waitForTimeout(300);
    let sg = await segState();
    check(
      'SG1 点击 English 后变白底、原选中项转透明',
      sg.l2.active && sg.l2.bg === 'rgb(255, 255, 255)' && sg.l2.color === 'rgb(22, 24, 29)' &&
        !sg.l0.active && sg.l0.bg === 'rgba(0, 0, 0, 0)',
      { en: sg.l2, mixed: sg.l0 }
    );

    // —— SG2 未选中项 hover 变灰 ——
    await langSeg.nth(1).hover();
    await page.waitForTimeout(260);
    sg = await segState();
    check('SG2 未选中项 hover 变灰', sg.l1.bg === 'rgb(228, 231, 236)', { bg: sg.l1.bg });

    // —— SG3 默认导出格式：点击 Markdown 后切换白底 ——
    await fmtSeg.nth(1).click();
    await page.waitForTimeout(300);
    sg = await segState();
    check(
      'SG3 导出格式可切换（Markdown 白底 / PDF 透明）',
      sg.f1.active && sg.f1.bg === 'rgb(255, 255, 255)' && !sg.f0.active && sg.f0.bg === 'rgba(0, 0, 0, 0)',
      { markdown: sg.f1, pdf: sg.f0 }
    );

    // —— SG4 点击 Change 打开文件夹选择器并回填目录名 ——
    const fs = require('fs');
    const os = require('os');
    const nodePath = require('path');
    const tmpRoot = fs.mkdtempSync(nodePath.join(os.tmpdir(), 'sv-settings-dir-'));
    const chosenDir = nodePath.join(tmpRoot, 'SnapVaultLibrary');
    fs.mkdirSync(chosenDir);
    fs.writeFileSync(nodePath.join(chosenDir, 'a.pdf'), 'x');
    try {
      const [chooser] = await Promise.all([
        page.waitForEvent('filechooser', { timeout: 5000 }),
        page.locator('[data-pencil-name="PathFieldChange"]').click(),
      ]);
      await chooser.setFiles(chosenDir);
      await page.waitForTimeout(200);
      const shown = (await page.locator('[data-pencil-name="PathFieldText"]').innerText()).trim();
      check('SG4 选择文件夹后回填为所选目录名', shown === 'SnapVaultLibrary', { shown });
    } finally {
      fs.rmSync(tmpRoot, { recursive: true, force: true });
    }
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exitCode = failed ? 1 : 0;
})();
