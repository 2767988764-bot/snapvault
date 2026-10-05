const { chromium } = require('playwright-core');

// 批量选择 + 批量操作回归：
//   卡片 Check 角标单选/多选/再点取消 → BatchBar 显隐与 count 实时同步 →
//   全选/取消全选 → Delete 可撤销（按原索引恢复 + 选择恢复）→ Move/Tag 占位 toast →
//   卡片本体点击仍跳 document-detail（与选中互不冲突）。
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

async function pullUp(page) {
  const bar = await page.$('[data-pencil-name="TravelBar"]');
  const r = await bar.boundingBox();
  const cx = r.x + r.width / 2;
  await page.mouse.move(cx, r.y + 10);
  await page.mouse.down();
  for (let i = 1; i <= 20; i++) await page.mouse.move(cx, r.y + 10 - i * 30, { steps: 3 });
  await page.mouse.up();
}

const CARDS = '[data-pencil-name="Results"] [data-pencil-name="FilePreview"]';
const CHECKS = '[data-pencil-name="Results"] [data-pencil-name="Check"]';

const state = (page) =>
  page.evaluate(() => {
    const bar = document.querySelector('[data-pencil-name="BatchBar"]');
    const cb = document.querySelector('[data-pencil-name="BatchCheckbox"]');
    return {
      cards: document.querySelectorAll('[data-pencil-name="Results"] [data-pencil-name="FilePreview"]').length,
      checks: document.querySelectorAll('[data-pencil-name="Results"] [data-pencil-name="Check"]').length,
      selected: document.querySelectorAll('.fp-check.is-selected').length,
      bar: !!bar,
      count: bar?.querySelector('[data-pencil-name="BatchCount"]')?.textContent.trim() ?? '',
      allChecked: !!cb?.classList.contains('is-all'),
      cbIcon: !!cb?.querySelector('[data-pencil-name="BatchCheckIcon"]'),
      loadMore: document.querySelector('[data-pencil-name="LoadMoreText"]')?.textContent.trim() ?? '',
    };
  });

const badgeStyle = (page, i) =>
  page.evaluate((idx) => {
    const el = document.querySelectorAll('[data-pencil-name="Results"] [data-pencil-name="Check"]')[idx];
    const cs = getComputedStyle(el);
    return {
      bg: cs.backgroundColor,
      border: cs.borderTopColor,
      icon: !!el.querySelector('[data-pencil-name="CheckIcon"]'),
      aria: el.getAttribute('aria-checked'),
    };
  }, i);

const lastToast = (page) =>
  page.evaluate(() => {
    const t = document.querySelector('[data-pencil-name="ToastHost"] .toast');
    return t
      ? {
          type: t.getAttribute('data-toast-type'),
          title: t.querySelector('.toast-title')?.textContent.trim() ?? '',
          action: t.querySelector('.toast-action')?.textContent.trim() ?? '',
        }
      : null;
  });

// 点击后等过渡（--sv-dur-fast 120ms）跑完，避免读到中间插值
const clickCheck = async (page, i) => {
  await page.locator(CHECKS).nth(i).click();
  await page.mouse.move(700, 120); // 移开指针，避免读到 :hover 配色
  await page.waitForTimeout(220);
};

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e.message)));

  try {
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await pullUp(page);
    await page.waitForTimeout(900);

    // ---- 初始：无选中 → 批量栏隐藏；每张卡都有 Check，未选为透明底 + 灰描边 ----
    const s0 = await state(page);
    const b0 = await badgeStyle(page, 0);
    check('B1 初始无选中：BatchBar 隐藏、count 为空', !s0.bar && s0.selected === 0, { bar: s0.bar, selected: s0.selected });
    check('B2 每张可见卡片都有 Check 角标（24）', s0.cards === 24 && s0.checks === 24, { cards: s0.cards, checks: s0.checks });
    check(
      'B3 未选态：透明底 + 灰描边（--sv-line-2）、无勾、aria-checked=false',
      b0.bg === 'rgba(0, 0, 0, 0)' && b0.border === 'rgb(208, 212, 219)' && !b0.icon && b0.aria === 'false',
      b0
    );

    // ---- 单选 ----
    await clickCheck(page, 0);
    const s1 = await state(page);
    const b1 = await badgeStyle(page, 0);
    check('B4 点第 1 张 Check → 选中 1，BatchBar 出现且 count=1 selected', s1.selected === 1 && s1.bar && s1.count === '1 selected', {
      selected: s1.selected,
      bar: s1.bar,
      count: s1.count,
    });
    check(
      'B5 选中态：--sv-accent 填底 + 白勾 + aria-checked=true',
      b1.bg === 'rgb(43, 91, 215)' && b1.icon && b1.aria === 'true',
      b1
    );

    // ---- 多选 + 再点取消 ----
    await clickCheck(page, 3);
    const s2 = await state(page);
    check('B6 再点第 4 张 → 2 selected', s2.selected === 2 && s2.count === '2 selected', { selected: s2.selected, count: s2.count });

    await clickCheck(page, 0);
    const s3 = await state(page);
    check('B7 再点第 1 张 → 取消选中，回到 1 selected', s3.selected === 1 && s3.count === '1 selected', {
      selected: s3.selected,
      count: s3.count,
    });

    // ---- Move 占位动作 → info toast，不静默 ----
    await page.locator('[data-pencil-name="BatchAction"]').nth(0).click();
    await page.waitForTimeout(250);
    const tMove = await lastToast(page);
    check('B8 Move 为占位：弹 info toast「功能待接入后端」', tMove?.type === 'info' && /功能待接入后端/.test(tMove.title), tMove);
    await page.evaluate(() => document.querySelector('.toast-close')?.click());

    // ---- Delete（1 选中）→ undo toast → 撤销恢复 ----
    await clickCheck(page, 2); // 选到 2 个
    const sBeforeDel = await state(page);
    await page.locator('[data-pencil-name="BatchAction"]').nth(2).click();
    await page.waitForTimeout(200);
    // 破坏性操作统一二次确认
    check('B8b Delete 弹出统一确认层', (await page.locator('[data-pencil-name="ConfirmDialog"]').count()) === 1);
    await page.click('[data-pencil-name="ConfirmAccept"]');
    await page.waitForTimeout(300);
    const tDel = await lastToast(page);
    const sAfterDel = await state(page);
    check(
      'B9 Delete → undo toast「已删除 2 个文件」+「撤销」，选中清空、批量栏收起',
      tDel?.type === 'undo' && /已删除 2 个文件/.test(tDel.title) && tDel.action === '撤销' && sAfterDel.selected === 0 && !sAfterDel.bar,
      { toast: tDel, after: sAfterDel, before: sBeforeDel }
    );

    await page.locator('.toast-action').click();
    await page.waitForTimeout(250);
    const sUndone = await state(page);
    check('B10 点「撤销」→ 文件恢复且选择恢复为 2 selected', sUndone.selected === 2 && sUndone.count === '2 selected', sUndone);

    // ---- 全选 / 取消全选 ----
    await page.locator('[data-pencil-name="BatchCheckbox"]').click();
    await page.waitForTimeout(200);
    const sAll = await state(page);
    check(
      'B11 点全选框 → 全选 128 且全选框呈勾选态',
      sAll.count === '128 selected' && sAll.allChecked && sAll.cbIcon,
      sAll
    );
    await page.locator('[data-pencil-name="BatchCheckbox"]').click();
    await page.waitForTimeout(200);
    const sNone = await state(page);
    check('B12 再点全选框 → 取消全选，批量栏隐藏', sNone.selected === 0 && !sNone.bar, { selected: sNone.selected, bar: sNone.bar });

    // ---- 全选后删除全部 → 列表清空 → 撤销恢复 128 ----
    await clickCheck(page, 0); // 批量栏已收起，先选中 1 项唤出批量栏
    await page.locator('[data-pencil-name="BatchCheckbox"]').click();
    await page.waitForTimeout(150);
    await page.locator('[data-pencil-name="BatchAction"]').nth(2).click();
    await page.waitForTimeout(200);
    await page.click('[data-pencil-name="ConfirmAccept"]');
    await page.waitForTimeout(300);
    const sEmptied = await state(page);
    const tDelAll = await lastToast(page);
    check(
      'B13 全选后 Delete → 128 条全部移除（底栏「已加载全部 0 条」）',
      sEmptied.cards === 0 && /已加载全部 0 条/.test(sEmptied.loadMore) && /已删除 128 个文件/.test(tDelAll?.title ?? ''),
      { ...sEmptied, toast: tDelAll }
    );
    await page.locator('.toast-action').click();
    await page.waitForTimeout(300);
    const sRestored = await state(page);
    check(
      'B14 撤销后恢复：24 张可见 + 选择恢复 128',
      sRestored.cards === 24 && sRestored.count === '128 selected',
      { cards: sRestored.cards, count: sRestored.count }
    );

    // ---- 清空选择，验证卡片本体点击仍跳详情（选中不拦截跳转）----
    await page.locator('[data-pencil-name="BatchCheckbox"]').click();
    await page.waitForTimeout(150);
    await page.locator(CARDS).first().click({ position: { x: 100, y: 280 } });
    await page.waitForTimeout(600);
    check('B15 点卡片本体（非角标）仍跳转 /document-detail', page.url().includes('/document-detail'), { url: page.url() });

    check('B16 全流程无未捕获页面错误', errors.length === 0, { errors });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
