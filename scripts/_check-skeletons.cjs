const { chromium } = require('playwright-core');

// 骨架屏 / 空态回归：
//   Library：拉条吸附触发加载 → 6 张骨架卡（尺寸与真实卡一致 + shimmer）→ 真实网格
//   Library：?empty=1 → EmptyState（图标/标题/CTA 跳 /scan-import）
//   Review ：切标签触发加载 → 3 条骨架行 → 真实条目；?empty=1 → EmptyState
//   reduced-motion：shimmer 动画关闭
const BASE = process.env.BASE_URL || 'http://localhost:5173';
const results = [];
function check(name, ok, detail) {
  results.push(ok);
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail !== undefined ? '   ' + JSON.stringify(detail) : ''));
}

// 装一个 MutationObserver，记录骨架 / 空态是否出现过（不依赖断言时刻）
const watchStates = (page, names) =>
  page.evaluate((ns) => {
    window.__seen = {};
    ns.forEach((n) => (window.__seen[n] = 0));
    const probe = () => {
      ns.forEach((n) => {
        if (document.querySelector(`[data-pencil-name="${n}"]`)) window.__seen[n] += 1;
      });
    };
    probe();
    new MutationObserver(probe).observe(document.body, { childList: true, subtree: true });
  }, names);

const seen = (page) => page.evaluate(() => window.__seen);

// 拉条拖到吸附位（pulled）
async function pullUp(page) {
  const bar = await page.$('[data-pencil-name="TravelBar"]');
  const r = await bar.boundingBox();
  const cx = r.x + r.width / 2;
  await page.mouse.move(cx, r.y + 10);
  await page.mouse.down();
  for (let i = 1; i <= 20; i++) await page.mouse.move(cx, r.y + 10 - i * 30, { steps: 3 });
  await page.mouse.up();
}

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  try {
    // ============ Library：加载态 ============
    await page.goto(BASE + '/library', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await watchStates(page, ['ResultsSkeleton', 'ResultsEmpty']);
    await pullUp(page);

    // 骨架出现的瞬间抓一次尺寸 / 动画信息
    await page.waitForTimeout(150);
    const sk = await page.evaluate(() => {
      const cards = [...document.querySelectorAll('[data-pencil-name="SkeletonCard"]')];
      const bar = document.querySelector('[data-pencil-name="SkeletonCard"] .sk-bar');
      const probe = document.createElement('span');
      probe.style.color = 'var(--sv-surface-2)';
      document.body.appendChild(probe);
      const tokenSurface2 = getComputedStyle(probe).color;
      probe.remove();
      return {
        count: cards.length,
        variant: cards[0]?.getAttribute('data-variant') ?? null,
        tops: cards.map((c) => Math.round(c.getBoundingClientRect().top)),
        widths: cards.map((c) => Math.round(c.getBoundingClientRect().width)),
        matH: cards[0]?.querySelector('.sk-mat')?.getBoundingClientRect().height ?? 0,
        barBg: bar ? getComputedStyle(bar).backgroundColor : null,
        barAnim: bar ? getComputedStyle(bar).animationName : null,
        tokenSurface2,
        loadMore: document.querySelectorAll('[data-pencil-name="LoadMore"]').length,
      };
    });
    check(
      'L1 拉条吸附后出现 6 张骨架卡（card 变体，隐藏真实网格与 LoadMore）',
      sk.count === 6 && sk.variant === 'card' && sk.loadMore === 0,
      { count: sk.count, variant: sk.variant, loadMore: sk.loadMore }
    );
    check(
      'L2 骨架卡与真实卡同尺寸（6 张同排、≤215px、卡面 268px）',
      new Set(sk.tops).size === 1 && sk.widths.every((w) => w <= 216) && Math.round(sk.matH) === 268,
      { tops: sk.tops, widths: sk.widths, matH: sk.matH }
    );
    check(
      'L3 shimmer 动画生效且占位块用 --sv-surface-2 token',
      /sk-shimmer/.test(sk.barAnim || '') && sk.barBg === sk.tokenSurface2,
      { anim: sk.barAnim, barBg: sk.barBg, token: sk.tokenSurface2 }
    );

    // 400ms 后骨架消失 → 真实网格
    await page.waitForTimeout(900);
    const after = await page.evaluate(() => ({
      skeleton: document.querySelectorAll('[data-pencil-name="SkeletonCard"]').length,
      rows: [...document.querySelectorAll('[data-pencil-name="Results"] [data-pencil-name="PreviewRow"]')].filter(
        (el) => getComputedStyle(el).display !== 'none'
      ).length,
      firstCard: !!document.querySelector('[data-pencil-name="Results"] [data-pencil-name="FilePreview"]'),
    }));
    const s1 = await seen(page);
    check(
      'L4 加载结束：骨架消失、首屏 4 行真实网格可见（24 条 / 每行 6 张）',
      s1.ResultsSkeleton > 0 && after.skeleton === 0 && after.rows === 4 && after.firstCard,
      { ...after, seen: s1 }
    );

    // ============ Library：空态 ============
    await page.goto(BASE + '/library?empty=1', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await pullUp(page);
    await page.waitForTimeout(900);
    const empty = await page.evaluate(() => {
      const box = document.querySelector('[data-pencil-name="ResultsEmpty"]');
      const paths = box ? [...box.querySelectorAll('svg path')] : [];
      const cta = box?.querySelector('[data-pencil-name="EmptyStateCta"]');
      return {
        has: !!box,
        title: box?.querySelector('[data-pencil-name="EmptyStateTitle"]')?.textContent.trim() ?? '',
        desc: !!box?.querySelector('[data-pencil-name="EmptyStateDesc"]'),
        pathCount: paths.filter((p) => (p.getAttribute('d') || '').length > 0).length,
        ctaText: cta?.textContent.trim() ?? '',
        rows: [...document.querySelectorAll('[data-pencil-name="Results"] [data-pencil-name="PreviewRow"]')].filter(
          (el) => getComputedStyle(el).display !== 'none'
        ).length,
        loadMore: document.querySelectorAll('[data-pencil-name="LoadMore"]').length,
      };
    });
    check(
      'L5 空态渲染 EmptyState（图标 path / 标题 / 描述 / CTA）且隐藏网格与 LoadMore',
      empty.has &&
        empty.pathCount >= 4 &&
        /还没有文件/.test(empty.title) &&
        empty.desc &&
        empty.ctaText.length > 0 &&
        empty.rows === 0 &&
        empty.loadMore === 0,
      empty
    );
    await page.locator('[data-pencil-name="EmptyStateCta"]').click();
    await page.waitForTimeout(600);
    check('L6 空态 CTA 跳转 /scan-import', page.url().includes('/scan-import'), { url: page.url() });

    // ============ Review：加载态 + 空态 ============
    await page.goto(BASE + '/review-queue', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1400);
    const rReady = await page.evaluate(() => ({
      items: [...document.querySelectorAll('[data-pencil-name="ReviewItem"]')].filter(
        (el) => getComputedStyle(el).display !== 'none'
      ).length,
      skeletons: document.querySelectorAll('[data-pencil-name="SkeletonCard"]').length,
    }));
    check('R1 首屏加载结束后渲染 5 条 ReviewItem', rReady.items === 5 && rReady.skeletons === 0, rReady);

    await watchStates(page, ['SkeletonCard']);
    await page.locator('[data-pencil-name="ReviewFilter"]').nth(1).click();
    await page.waitForTimeout(150);
    const rSk = await page.evaluate(() => {
      const cards = [...document.querySelectorAll('[data-pencil-name="SkeletonCard"]')];
      return {
        count: cards.length,
        variant: cards[0]?.getAttribute('data-variant') ?? null,
        items: [...document.querySelectorAll('[data-pencil-name="ReviewItem"]')].filter(
          (el) => getComputedStyle(el).display !== 'none'
        ).length,
      };
    });
    check(
      'R2 切标签时先出 3 条骨架行（row 变体）并隐藏条目',
      rSk.count === 3 && rSk.variant === 'row' && rSk.items === 0,
      rSk
    );
    await page.waitForTimeout(900);
    const rAfter = await page.evaluate(() => ({
      skeletons: document.querySelectorAll('[data-pencil-name="SkeletonCard"]').length,
      items: [...document.querySelectorAll('[data-pencil-name="ReviewItem"]')].filter(
        (el) => getComputedStyle(el).display !== 'none'
      ).length,
    }));
    const s2 = await seen(page);
    check(
      'R3 加载结束：骨架消失、条目恢复（无闪烁三态切换）',
      s2.SkeletonCard > 0 && rAfter.skeletons === 0 && rAfter.items === 5,
      { ...rAfter, seen: s2 }
    );

    await page.goto(BASE + '/review-queue?empty=1', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1400);
    const rEmpty = await page.evaluate(() => {
      const box = document.querySelector('[data-pencil-name="EmptyState"]');
      return {
        has: !!box,
        title: box?.querySelector('[data-pencil-name="EmptyStateTitle"]')?.textContent.trim() ?? '',
        cta: box?.querySelector('[data-pencil-name="EmptyStateCta"]')?.textContent.trim() ?? '',
        items: [...document.querySelectorAll('[data-pencil-name="ReviewItem"]')].filter(
          (el) => getComputedStyle(el).display !== 'none'
        ).length,
      };
    });
    check(
      'R4 Review 空态显示 EmptyState 且隐藏条目',
      rEmpty.has && /没有待审文件/.test(rEmpty.title) && rEmpty.items === 0,
      rEmpty
    );
    await page.locator('[data-pencil-name="EmptyStateCta"]').click();
    await page.waitForTimeout(600);
    check('R5 Review 空态 CTA 跳转 /scan-import', page.url().includes('/scan-import'), { url: page.url() });

    // ============ reduced-motion：shimmer 关闭 ============
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(BASE + '/review-queue', { waitUntil: 'commit' });
    const rmBar = page.locator('[data-pencil-name="SkeletonCard"] .sk-bar').first();
    await rmBar.waitFor({ state: 'attached', timeout: 4000 });
    const rm = await rmBar.evaluate((el) => ({
      anim: getComputedStyle(el).animationName,
      dur: getComputedStyle(el).animationDuration,
    }));
    check('M1 reduced-motion 下 shimmer 关闭（animation-name: none）', rm.anim === 'none', rm);
    await page.emulateMedia({ reducedMotion: null });
  } catch (e) {
    console.log('ERROR ' + e.message);
    results.push(false);
  }

  await browser.close();
  const failed = results.filter((r) => !r).length;
  console.log('\n' + (results.length - failed) + '/' + results.length + ' passed');
  process.exit(failed ? 1 : 0);
})();
