const fs = require('fs');
const path = require('path');

const SRC_HTML = 'E:/snapvault/design-export/html/screens.html';
const OUT_DIR = 'E:/snapvault/src/views';
const ASSETS_DIR = 'E:/snapvault/public/assets';

const lines = fs.readFileSync(SRC_HTML, 'utf8').split('\n');

// ===== 1. Extract unique WebP data URLs -> public/assets/bg-N.webp =====
const dataUrlRe = /data:image\/webp;base64,([^')"]+)/g;
const urlMap = new Map();
let urlIdx = 0;
for (const line of lines) {
  let m;
  while ((m = dataUrlRe.exec(line)) !== null) {
    const raw = m[1];
    if (!urlMap.has(raw)) {
      const file = `/assets/bg-${urlIdx++}.webp`;
      fs.writeFileSync(path.join(ASSETS_DIR, path.basename(file)), Buffer.from(raw, 'base64'));
      urlMap.set(raw, file);
    }
  }
}
console.log('Unique data URLs:', urlMap.size);

// ===== 2. Page boundaries (0-based line index of each page's opening `<div` line) =====
const pages = [
  { start: 24,    name: '01 Home',             comp: 'HomeView' },
  { start: 1168,  name: '02 Scan Import',      comp: 'ScanImportView' },
  { start: 2360,  name: '03 Scan Result',      comp: 'ScanResultView' },
  { start: 3477,  name: '04 Library',          comp: 'LibraryHeroView' },
  { start: 4730,  name: '04b Library Search',  comp: 'LibrarySearchView' },
  { start: 5746,  name: '05 Document Detail',  comp: 'DocumentDetailView' },
  { start: 7047,  name: '08 Review Queue',     comp: 'ReviewQueueView' },
  { start: 7875,  name: '09 Settings',         comp: 'SettingsView' },
  { start: 8677,  name: '10 States',           comp: 'StatesView' },
  { start: 10152, name: '00 Overview',         comp: 'OverviewView' },
  { start: 10802, name: '04 Pulled Up',        comp: 'LibraryPulledView' },
  { start: 12769, name: '11 Login',            comp: 'LoginView' },
  { start: 13386, name: '04 Main',             comp: 'LibraryMainView' },
];
for (let i = 0; i < pages.length - 1; i++) pages[i].end = pages[i + 1].start;
// last page ends before the container's closing `    </div>` (4 spaces)
pages[pages.length - 1].end = lines.lastIndexOf('    </div>');

// ===== 3. Root style fix: only the FIRST style="..." in the block (the page root) =====
function fixRootStyle(html) {
  const si = html.indexOf('style="');
  if (si === -1) return html;
  const ei = html.indexOf('"', si + 7);
  if (ei === -1) return html;
  let style = html.slice(si + 7, ei);
  style = style
    .replace(/left:\s*-?[\d.]+px;?\s*/g, '')
    .replace(/top:\s*-?[\d.]+px;?\s*/g, '')
    .replace(/position:\s*absolute;?\s*/g, 'position: relative; ')
    .replace(/;\s*;/g, ';')
    .trim();
  return html.slice(0, si + 7) + style + html.slice(ei);
}

// ===== 4. Wiring =====
// rule: { name, action } -> all occurrences
// rule: { name, byText: [[substr, action], ...] } -> per occurrence, first matching substr in following context
function applyWiring(html, rules) {
  let out = html;
  for (const rule of rules) {
    const needle = `data-pencil-name="${rule.name}"`;
    if (!rule.byText) {
      out = out.split(needle).join(`${needle} data-clickable @click="${rule.action}"`);
      continue;
    }
    let result = '';
    let pos = 0;
    while (true) {
      const idx = out.indexOf(needle, pos);
      if (idx === -1) { result += out.slice(pos); break; }
      result += out.slice(pos, idx);
      const ctx = out.slice(idx, idx + 800);
      let action = null;
      for (const [substr, act] of rule.byText) {
        if (ctx.includes(substr)) { action = act; break; }
      }
      result += action ? `${needle} data-clickable @click="${action}"` : needle;
      pos = idx + needle.length;
    }
    out = result;
  }
  return out;
}

const NAV = [
  { name: 'NavItem/Home', action: "$router.push('/home')" },
  { name: 'NavItem/Library', action: "$router.push('/library')" },
  { name: 'NavItem/Review', action: "$router.push('/review-queue')" },
  { name: 'ScanButton', action: "$router.push('/scan-import')" },
  { name: 'SettingsItem', action: "$router.push('/settings')" },
];

const wireRules = {
  '01 Home': [
    ...NAV,
    { name: 'Btn/Primary', action: "$router.push('/scan-import')" },
    { name: 'Btn/Ghost', action: "$router.push('/library')" },
    { name: 'CardAction', byText: [["View all", "$router.push('/review-queue')"]] },
    { name: 'ScanRow', action: "$router.push('/scan-result')" },
    { name: 'OpenedRow', action: "$router.push('/document-detail')" },
  ],
  '02 Scan Import': [
    ...NAV,
    { name: 'BackButton', action: "$router.push('/home')" },
    { name: 'ChooseFiles', action: "$router.push('/scan-result')" },
    { name: 'ChooseFolder', action: "$router.push('/scan-result')" },
  ],
  '03 Scan Result': [
    ...NAV,
    { name: 'Btn/Ghost', action: "$router.push('/scan-import')" },
    { name: 'SaveToLibraryBtn', action: "$router.push('/library')" },
  ],
  '04 Library': [
    ...NAV,
    { name: 'SearchField', action: "$router.push('/library-search')" },
    { name: 'PullHint', action: "emit('pull')" },
    { name: 'Grabber', action: "emit('pull')" },
  ],
  '04b Library Search': [
    ...NAV,
    { name: 'ResultRow', action: "$router.push('/document-detail')" },
  ],
  '05 Document Detail': [
    ...NAV,
    { name: 'Btn/Ghost', action: "$router.push('/library')" },
  ],
  '08 Review Queue': [
    ...NAV,
    { name: 'Btn/Ghost', action: "$router.push('/library')" },
    { name: 'ReviewItem', action: "$router.push('/document-detail')" },
  ],
  '09 Settings': [...NAV],
  '10 States': [],
  '00 Overview': [
    {
      name: 'OvNavItem',
      byText: [
        ['Document Detail', "$router.push('/document-detail')"],
        ['Scan Result', "$router.push('/scan-result')"],
        ['Scan / Import', "$router.push('/scan-import')"],
        ['Review', "$router.push('/review-queue')"],
        ['Settings', "$router.push('/settings')"],
        ['States', "$router.push('/states')"],
        ['Login', "$router.push('/login')"],
        ['Library', "$router.push('/library')"],
        ['Folders', "$router.push('/library')"],
        ['Tags', "$router.push('/library')"],
        ['Home', "$router.push('/home')"],
      ],
    },
  ],
  '04 Pulled Up': [
    ...NAV,
    { name: 'SearchField', action: "$router.push('/library-search')" },
    { name: 'ViewSwitch', action: "emit('main')" },
    { name: 'FilePreview', action: "$router.push('/document-detail')" },
  ],
  '11 Login': [
    { name: 'SignInButton', action: "$router.push('/home')" },
  ],
  '04 Main': [
    ...NAV,
    { name: 'SearchField', action: "$router.push('/library-search')" },
    { name: 'FilePreview', action: "$router.push('/document-detail')" },
    { name: 'FullPreviewBtn', action: "$router.push('/document-detail')" },
  ],
};

// Components that emit local events (Library flow)
const emitPages = {
  LibraryHeroView: ['pull'],
  LibraryPulledView: ['main'],
};

// ===== 5. Generate SFCs =====
for (const pg of pages) {
  const slice = lines.slice(pg.start, pg.end);
  // add page-root class on the root <div line
  slice[0] = slice[0].replace('<div', '<div class="page-root"');
  let html = slice.join('\n');
  html = fixRootStyle(html);
  for (const [raw, file] of urlMap.entries()) {
    html = html.split(`data:image/webp;base64,${raw}`).join(file);
  }
  html = applyWiring(html, wireRules[pg.name] || []);

  let script = '';
  const emits = emitPages[pg.comp];
  if (emits) {
    script = `\n<script setup>\nconst emit = defineEmits([${emits.map(e => `'${e}'`).join(', ')}])\n</script>\n`;
  }

  const vueContent = `<template>\n${html}\n</template>\n${script}`;
  const outPath = path.join(OUT_DIR, `${pg.comp}.vue`);
  fs.writeFileSync(outPath, vueContent);
  console.log('Generated', pg.comp + '.vue', `(${pg.end - pg.start} lines)`);
}
console.log('Done.');
