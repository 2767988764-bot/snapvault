const { chromium } = require('playwright-core');
const fs = require('fs');
const os = require('os');
const path = require('path');

// Scan-import 选择器验证：
//   Choose files → 原生多选文件选择器；Choose a folder → 原生目录选择器（webkitdirectory）
//   选择后不跳转 /scan-result；选择结果交给预留接口 uploadScanFiles
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
    await page.goto(BASE + '/scan-import', { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);

    // 两个隐藏 input 就位
    const inputs = await page.evaluate(() => {
      const all = [...document.querySelectorAll('input[type="file"]')];
      return all.map((el) => ({
        hidden: getComputedStyle(el).display === 'none',
        multiple: el.multiple,
        dir: el.hasAttribute('webkitdirectory'),
      }));
    });
    check(
      'S1 两个原生选择器已挂载且隐藏（文件多选 + 目录）',
      inputs.length === 2 && inputs[0].hidden && inputs[0].multiple && !inputs[0].dir && inputs[1].hidden && inputs[1].dir,
      inputs
    );

    // 选择结果交给预留接口
    const api = await page.evaluate(async () => {
      const mod = await import('/src/composables/useScanUpload.js');
      const f = [new File(['a'], 'a.jpg', { type: 'image/jpeg' })];
      const r = await mod.uploadScanFiles(f, { kind: 'files' });
      return { kind: r.kind, n: r.files.length };
    });
    check('S2 预留接口 uploadScanFiles 接收 files + kind', api.kind === 'files' && api.n === 1, api);

    // Choose files → 唤起文件选择器（多选），且不跳转
    const [fcFiles] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.click('[data-pencil-name="ChooseFiles"]'),
    ]);
    check('S3 Choose files 唤起原生文件选择器（多选）', fcFiles.isMultiple(), { multiple: fcFiles.isMultiple() });
    await fcFiles.setFiles([
      { name: 'shot-1.jpg', mimeType: 'image/jpeg', buffer: Buffer.from('1') },
      { name: 'shot-2.png', mimeType: 'image/png', buffer: Buffer.from('2') },
    ]);
    await page.waitForTimeout(200);
    check('S4 选择文件后停留在 /scan-import', page.url().endsWith('/scan-import'), { url: page.url() });

    // Choose a folder → 唤起目录选择器（webkitdirectory 需传目录路径）
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sv-scan-'));
    fs.writeFileSync(path.join(tmpDir, 'page-a.jpg'), '3');
    const [fcDir] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.click('[data-pencil-name="ChooseFolder"]'),
    ]);
    check('S5 Choose a folder 唤起原生选择器', !!fcDir, { ok: !!fcDir });
    await fcDir.setFiles(tmpDir);
    await page.waitForTimeout(200);
    check('S6 选择目录后停留在 /scan-import', page.url().endsWith('/scan-import'), { url: page.url() });
    fs.rmSync(tmpDir, { recursive: true, force: true });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
