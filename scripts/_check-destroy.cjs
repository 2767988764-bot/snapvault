const { chromium } = require('playwright-core');

// 统一「二次确认 + 可撤销」规范回归：
//   S*  Settings clearCache：确认 → 执行（CacheStat 归零）→ undo toast → 撤销恢复
//   L*  Library 批量 Delete：确认 → 移除 → undo toast → 撤销恢复（按原索引 + 选择恢复）
//   D*  DocumentDetail 删除：确认 → 移除并返回 → undo toast → 撤销恢复
//   每处都覆盖：取消不执行、确认后出现带「撤销」的通知、点撤销状态真恢复
//   ConfirmHost 通用：role/aria-modal/z-index/危险色、Esc / 遮罩 / 取消按钮 = 取消、Enter = 确认
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

const MASK = '[data-pencil-name="ConfirmDestroy"]';
const DIALOG = '[data-pencil-name="ConfirmDialog"]';
const DANGER = 'rgb(179, 38, 30)'; // tokens.css --sv-danger

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e.message)));
  const path = () => page.evaluate(() => location.pathname);

  const dialogInfo = () =>
    page.evaluate(({ selMask, selDlg }) => {
      const mask = document.querySelector(selMask);
      const dlg = document.querySelector(selDlg);
      if (!mask || !dlg) return null;
      const accept = dlg.querySelector('[data-pencil-name="ConfirmAccept"]');
      const cancel = dlg.querySelector('[data-pencil-name="ConfirmCancel"]');
      return {
        role: dlg.getAttribute('role'),
        ariaModal: dlg.getAttribute('aria-modal'),
        z: getComputedStyle(mask).zIndex,
        title: (dlg.querySelector('[data-pencil-name="ConfirmTitle"]')?.textContent || '').trim(),
        text: (dlg.querySelector('[data-pencil-name="ConfirmText"]')?.textContent || '').trim(),
        acceptLabel: (accept?.textContent || '').trim(),
        acceptBg: accept ? getComputedStyle(accept).backgroundColor : null,
        cancelLabel: (cancel?.textContent || '').trim(),
      };
    }, { selMask: MASK, selDlg: DIALOG });

  const toasts = () =>
    page.evaluate(() =>
      [...document.querySelectorAll('.toast-stack .toast')].map((el) => ({
        type: el.getAttribute('data-toast-type'),
        title: (el.querySelector('.toast-title')?.textContent || '').trim(),
        action: (el.querySelector('.toast-action')?.textContent || '').trim() || null,
      }))
    );
  const undoToast = async () => (await toasts()).find((t) => t.type === 'undo') || null;
  const clearToasts = async () => {
    await page.evaluate(() => document.querySelectorAll('.toast-stack .toast-close').forEach((b) => b.click()));
    await page.waitForTimeout(420);
  };
  const clickUndo = async () => {
    await page.locator('.toast-stack .toast[data-toast-type="undo"] .toast-action').first().click();
    await page.waitForTimeout(400);
  };

  const cacheText = () =>
    page.evaluate(() => (document.querySelector('[data-pencil-name="CacheStat"]')?.textContent || '').trim());
  const firstCell = () =>
    page.evaluate(() => {
      const el = document.querySelector('[data-pencil-name="Results"] [data-pencil-name="FileName"]');
      return el ? el.textContent.trim() : null;
    });
  const selText = () =>
    page.evaluate(() => (document.querySelector('[data-pencil-name="BatchCount"]')?.textContent || '').trim());

  // 通过「全选」读 store 里的文档总数（128 条文档每 12 条重名，卡片文本无法区分增删）。
  // 结束时取消全选，恢复空选择。
  async function docTotal() {
    if (!(await page.$('[data-pencil-name="BatchBar"]'))) {
      await page.locator('[data-pencil-name="Results"] [data-pencil-name="Check"]').nth(0).click();
      await page.mouse.move(700, 120);
      await page.waitForTimeout(200);
    }
    await page.locator('[data-pencil-name="BatchCheckbox"]').click();
    await page.waitForTimeout(180);
    const t = await selText();
    await page.locator('[data-pencil-name="BatchCheckbox"]').click();
    await page.waitForTimeout(180);
    return t;
  }

  async function pullUp() {
    const bar = await page.$('[data-pencil-name="TravelBar"]');
    const r = await bar.boundingBox();
    const cx = r.x + r.width / 2;
    await page.mouse.move(cx, r.y + 10);
    await page.mouse.down();
    for (let i = 1; i <= 20; i++) await page.mouse.move(cx, r.y + 10 - i * 30, { steps: 3 });
    await page.mouse.up();
    await page.waitForTimeout(900);
  }

  try {
    // ==================== S：Settings clearCache ====================
    await page.goto(BASE + '/settings', { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);
    const cacheBefore = await cacheText();

    await page.locator('[data-pencil-name="AsyncBtn"]').first().click();
    await page.waitForTimeout(200);
    const s1 = await dialogInfo();
    check(
      'S1 清缓存先弹统一确认层（role=dialog / aria-modal / z=300 / 危险红 / 文案）',
      !!s1 && s1.role === 'dialog' && s1.ariaModal === 'true' && s1.z === '300' &&
        s1.acceptLabel === 'Clear cache' && s1.acceptBg === DANGER && s1.cancelLabel === '取消',
      s1
    );

    // Esc 取消
    await page.keyboard.press('Escape');
    await page.waitForTimeout(250);
    check('S2 Esc 取消：确认层关闭、缓存未清、无可撤销通知（不执行）',
      !(await page.$(MASK)) && (await cacheText()) === cacheBefore && !(await undoToast()),
      { cache: await cacheText(), cacheBefore });

    // 点遮罩取消
    await page.locator('[data-pencil-name="AsyncBtn"]').first().click();
    await page.waitForTimeout(200);
    await page.mouse.click(12, 12);
    await page.waitForTimeout(250);
    check('S3 点遮罩取消：确认层关闭、缓存未清（不执行）',
      !(await page.$(MASK)) && (await cacheText()) === cacheBefore, { cache: await cacheText() });

    // 取消按钮
    await page.locator('[data-pencil-name="AsyncBtn"]').first().click();
    await page.waitForTimeout(200);
    await page.click('[data-pencil-name="ConfirmCancel"]');
    await page.waitForTimeout(250);
    check('S4 点「取消」按钮：确认层关闭、缓存未清（不执行）',
      !(await page.$(MASK)) && (await cacheText()) === cacheBefore, { cache: await cacheText() });

    // Enter（对话框聚焦）= 确认 → 执行 + 可撤销
    await page.locator('[data-pencil-name="AsyncBtn"]').first().click();
    await page.waitForTimeout(250);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1600);
    const s5 = await undoToast();
    check('S5 Enter 确认 → 执行（CacheStat 归零）且给出 undo 通知带「撤销」',
      (await cacheText()).includes('Empty') && !!s5 && s5.action === '撤销',
      { cache: await cacheText(), undo: s5 });

    await clickUndo();
    check('S6 点撤销 → 缓存统计恢复清空前状态', (await cacheText()) === cacheBefore, {
      cache: await cacheText(),
      cacheBefore,
    });
    await clearToasts();

    // ==================== L：Library 批量 Delete ====================
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await pullUp();
    const cellBefore = await firstCell();

    await page.locator('[data-pencil-name="Results"] [data-pencil-name="Check"]').nth(0).click();
    await page.mouse.move(700, 120);
    await page.waitForTimeout(250);

    await page.locator('[data-pencil-name="BatchAction"]').nth(2).click();
    await page.waitForTimeout(250);
    const l1 = await dialogInfo();
    check('L1 批量 Delete 先弹统一确认层（含数量文案）',
      !!l1 && l1.acceptLabel === '删除' && l1.acceptBg === DANGER && /删除选中的 1 个文件/.test(l1.title), l1);

    // 取消不执行：选择保留
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    check('L2 Esc 取消：选择保留、文档数未变（不执行）',
      (await selText()) === '1 selected', { sel: await selText() });

    // 确认 → 移除 + undo
    await page.locator('[data-pencil-name="BatchAction"]').nth(2).click();
    await page.waitForTimeout(250);
    await page.click('[data-pencil-name="ConfirmAccept"]');
    await page.waitForTimeout(400);
    const l3undo = await undoToast();
    const totalAfterDel = await docTotal();
    check('L3 确认后文档数 128→127 + undo 通知「已删除 1 个文件」带「撤销」',
      totalAfterDel === '127 selected' && !!l3undo && /已删除 1 个文件/.test(l3undo.title) && l3undo.action === '撤销',
      { total: totalAfterDel, undo: l3undo });

    await clickUndo();
    const selAfterUndo = await selText();
    const totalAfterUndo = await docTotal();
    check('L4 点撤销 → 文档数回到 128 且选择恢复为 1 selected',
      totalAfterUndo === '128 selected' && selAfterUndo === '1 selected',
      { total: totalAfterUndo, sel: selAfterUndo });
    await clearToasts();

    // ==================== D：DocumentDetail 删除 ====================
    await page.locator('[data-pencil-name="Results"] [data-pencil-name="FilePreview"]').first().click();
    await page.waitForTimeout(800);
    check('D0 已从库列表进入文档详情', (await path()) === '/document-detail', { path: await path() });

    // 菜单「删除」→ 确认层
    await page.click('[data-pencil-name="MoreBtn"]');
    await page.waitForTimeout(250);
    await page.locator('.more-panel [data-pencil-name="MoreItem"]').nth(3).click();
    await page.waitForTimeout(350);
    const d1 = await dialogInfo();
    check('D1 详情「删除」先弹统一确认层（危险红 + 文档标题文案）',
      !!d1 && d1.acceptLabel === '删除' && d1.acceptBg === DANGER && d1.text.includes(cellBefore), d1);

    // Esc 取消 → 仍在详情页
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    check('D2 Esc 取消：确认层关闭、仍在详情页（不执行）',
      !(await page.$(MASK)) && (await path()) === '/document-detail', { path: await path() });

    // 确认 → 返回上一页 + undo
    await page.click('[data-pencil-name="MoreBtn"]');
    await page.waitForTimeout(250);
    await page.locator('.more-panel [data-pencil-name="MoreItem"]').nth(3).click();
    await page.waitForTimeout(350);
    await page.click('[data-pencil-name="ConfirmAccept"]');
    await page.waitForTimeout(1000);
    const d3undo = await undoToast();
    const totalAfterDocDel = await docTotal();
    check('D3 确认删除：返回库列表 + 文档数 128→127 + undo 通知带「撤销」',
      (await path()) === '/library' && totalAfterDocDel === '127 selected' &&
        !!d3undo && d3undo.title.includes(cellBefore) && d3undo.action === '撤销',
      { path: await path(), total: totalAfterDocDel, undo: d3undo });

    await clickUndo();
    const d4 = await toasts();
    const totalAfterDocUndo = await docTotal();
    check('D4 点撤销 → 文档数回到 128 + 成功提示已撤销删除',
      totalAfterDocUndo === '128 selected' && d4.some((t) => t.type === 'success' && /已撤销删除/.test(t.title)),
      { total: totalAfterDocUndo, toasts: d4 });

    check('D5 全流程无未捕获页面错误', errors.length === 0, { errors });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
