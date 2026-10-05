# 删除 library.main 并改造为设计稿 SidebarPanel（ViewSwitch 变形弹入）

## Context

当前 `LibraryView.vue` 实现了一个 main 变形层：240px 侧边栏滑入 + 右侧内容压缩（0.7s 曲线），内部渲染 `LibraryMainView`。用户对照 pen.dev 设计稿（`E:/文档转化软件/ui设计稿.pen`，SidebarPanel 帧 `Sdu9Z`）确认改造目标：

- **删除 main 变形层**（`showMain`/`open`/`openMain`/`closeMain`/`MAIN_MS`/`switchStyle` 位移逻辑/`.main-layer`/`search-embed`/`LibraryMainView.vue` 全部移除）
- 侧边栏**改为设计稿 SidebarPanel 样式**（PanelHeader "Library" 标题 + PanelClose + SidebarContent），弹入后**宽 240px**（覆盖 0~240，右侧内容 240~1440）
- **弹入动画（两段式）**：点击 ViewSwitch → ViewSwitch 先 **0.2s 渐变为纯白色组件**（图标/文字淡出）→ 再 **0.7s 内从 ViewSwitch 位置放大并渐变出 SidebarPanel**（pulled up 与 search 相同）
- **收起动画（反向）**：点击 PanelClose → SidebarPanel 先 **0.7s 缩小渐变回 ViewSwitch 处的纯白种子** → 再 **0.2s 渐变为真正的 ViewSwitch**（图标/文字淡入）
- **pulled up 压缩**：侧栏弹入后右侧内容收窄（右缘与拉条右缘 1440 同竖线）；文件预览卡片**尺寸不变**，PreviewRow 容器 **flex-wrap 自动换行重排**（第一行 6 → 5 个）
- **search 压缩**：拉条在最上方不被挤压，只挤压拉条下方内容到右侧；**高度不变、宽度变窄**，右缘与拉条右缘同竖线
- **pulled 与 search 容器位置大小相同**；点击 ListBtn / SearchField / ViewToggle 等在**同一容器**内切换 list↔search（**0.7s 动态模糊**过渡），侧栏开启时切换只变右侧容器内容、左侧栏不变
- **滚动**：鼠标滚轮（滚筒）只滚动内容区、不影响拉条；拉条拖动时内容**含左侧栏一起上下移动**；侧栏开启时固定在拉条下方相对位置不变、**不跟随内容滚动**；**拉条任何行为都不改变侧栏开/关状态**

设计稿 SidebarPanel 帧 `Sdu9Z`（300x732）：PanelHeader(14,16,272,34：PanelTitle "Library" 15px/700 + PanelClose) + SidebarContent：NavRow×5（All Documents 128 激活 / Inbox 4 / Recent 12 / Favorites 6 / Needs Review 3）+ "FOLDERS" + FolderRow×4（Research 38 / Courses 24 / Projects 12 / Personal 7）+ "TAGS" + TagRow×6（computer-vision 18 / ITSE 22 / lecture 14 / to-read 9 / 2026 31 / research 12）+ ManageRow "Manage folders & tags"。

## 几何常量（已验证）

- `.page-root`（Pulled/Search 视图根）固定 `width: 1440px; height: 900px` —— 压缩必须改在 page-root 上做**宽度过渡**，不能依赖父容器 padding
- `.pulled-layer` translateY(64) 时视觉：拉条 64~128，内容区从视觉 128 开始（layer 内 y=64）
- 侧栏挂在 `.pulled-layer` 内（随拉条整体移动）：`left:0; top:64px`（layer 局部）→ 视觉 = barTop+64，恒在拉条下方
- ViewSwitch 为 `.library-flow` 直接子元素（非 layer 内）：`left:8px; top:382px+barTop` → layer 局部 (8,382)，与侧栏顶部距离恒为 318px
- 侧栏 scale 动画 transform-origin = ViewSwitch 位置在侧栏局部坐标 = `(8px, 318px)`（随拉条移动仍成立）

## 改动文件清单

| 文件 | 操作 |
|---|---|
| [LibraryView.vue](file:///e:/snapvault/src/views/LibraryView.vue) | 主改造：删 main 逻辑、sidebarOpen/morphing 状态、两段式动画、压缩/模糊 CSS |
| 新建 `src/views/LibrarySidebarPanel.vue` | 新组件（240px，PanelHeader + SidebarContent + close emit） |
| [LibraryPulledView.vue](file:///e:/snapvault/src/views/LibraryPulledView.vue) | PreviewRow 加 flex-wrap、FilePreview 固定 215px、Results 左右 padding 36→32、加 overflow-y:auto、清理 emit('main') |
| [LibraryMainView.vue](file:///e:/snapvault/src/views/LibraryMainView.vue) | 删除（Sidebar 子树 L154-672 作新组件素材后整体删除） |
| [LibrarySearchView.vue](file:///e:/snapvault/src/views/LibrarySearchView.vue) | 无 main 残留（已确认 emit 仅 'back'）；容器宽度适配压缩（page-root 规则统一处理，SearchContent 内联 100% 宽度自适应，无需改） |
| [LibraryHeroView.vue](file:///e:/snapvault/src/views/LibraryHeroView.vue) | 无 ViewSwitch（已确认仅 emit pull/search），不改 |
| `scripts/_check-search-swap.cjs`、`scripts/_verify-drag.cjs` | 回归脚本更新 |

## 1. LibraryView.vue 改造

### script 删除
- 删 `import LibraryMainView`(L5)、`showMain`(L15)、`open`(L16)、`closeTimer`(L22)、`MAIN_MS`(L30)
- 删 `openMain`/`closeMain` 整块（L89-101）
- 删 `onSwitchClick`（L119-122）
- `snapTo` 中 `if (showMain.value) closeMain()`（L40）删除；`exitToPulled` 中 `if (showMain.value) closeMain()`（L117）删除（保留 `view='list'`）
- `showContent`（L143-145）去掉 `|| showMain.value`
- `floatSearchStyle`（L149）去掉 `!showMain.value`
- `switchStyle`（L159-163）：去掉 `left: showMain&&open ? '240px' : '8px'` 与 `MAIN_MS` transition，改为只保留 `left: 8px; top: ${382 + barTop.value}px; transition: top 560ms ...`（ViewSwitch 随拉条上下移动，hero 态在 959 处折叠线下不可见，与现状一致）

### script 新增（侧栏状态 + 两段式动画）
```
const sidebarOpen = ref(false) // 侧栏是否挂载
const panelOpen = ref(false)   // 侧栏是否处于展开位（驱动 scale 过渡）
const morphing = ref(false)    // ViewSwitch 纯白阶段标记
let morphTimer = null

// 点击 ViewSwitch：开 0.2s 纯白 → 0.7s 放大；收 0.7s 缩小 → 0.2s 恢复
function toggleSidebar() {
  clearTimeout(morphTimer)
  if (!sidebarOpen.value) {
    // 开启：先 0.2s 纯白
    morphing.value = true
    morphTimer = setTimeout(async () => {
      sidebarOpen.value = true
      await nextTick()
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))) // 双 rAF，确保初始 scale(0.15) 先 paint
      panelOpen.value = true // 触发 0.7s scale→1
    }, 200)
  } else {
    // 关闭：0.7s 缩回纯白种子
    panelOpen.value = false
    morphTimer = setTimeout(() => {
      sidebarOpen.value = false // 卸载
      morphing.value = false    // ViewSwitch 图标/文字 0.2s 淡入
    }, 700)
  }
}
// PanelClose 触发与 toggleSidebar 关闭分支同一路径
const closeSidebar = () => { if (sidebarOpen.value) toggleSidebar() }
```
- 视图切换模糊：`const switching = ref(false)`；`enterSearch`/`exitSearch`/`exitToPulled` 内部统一走 `switchView(next)`：`switching=true; view=next; setTimeout(()=>switching=false, 700)`
- 根 class：`'main-open': open` → `'sidebar-open': sidebarOpen`

### template
- 删 main-layer 整块（L258-263，含 search-embed 与 LibraryMainView）
- L191 search-in-flow `v-show="view === 'search' && !showMain"` → `v-show="view === 'search'"`
- `.pulled-content` 增加 class：`:class="{ 'liquid-glass': glassOn, switching }"`
- ViewSwitch（L232-256）：`@click="toggleSidebar"`；`:style="switchStyle"` 保留（新 switchStyle）；`:class="{ 'fade-white': morphing, hidden: sidebarOpen && !morphing }"`（hidden = opacity 0 + pointer-events none，侧栏展开期间被吸收）
- `.pulled-layer` 内、`.pulled-content` **同级**新增：
  ```
  <LibrarySidebarPanel v-if="sidebarOpen" :open="panelOpen" @close="closeSidebar" />
  ```
  （与 .pulled-content 同级 → 内容切换模糊不会波及侧栏；在 layer 内 → 随拉条整体移动）

### CSS
- 删 `.main-layer` 全部（L412-456）、`.main-layer.is-search`（L470-472）、`.search-embed`（L475-483）、`.main-layer .search-travel-bar` 分支（L461-463 只留 `.pulled-layer`）
- 保留 `.pulled-layer .search-in-flow` 高度规则（L466-468）
- `.view-switch`（L390-410）：保留样式；删 `will-change: left, top`；新增：
  - `.view-switch .view-switch-content { transition: opacity 0.2s ease }`（图标/文字包一层或用 opacity 组合）
  - `.view-switch.fade-white .view-switch-content { opacity: 0 }`
  - `.view-switch.hidden { opacity: 0; pointer-events: none; transition: opacity 0.2s ease }`
- 新增压缩规则（page-root 宽度过渡，Pulled/Search 共用）：
  ```
  .pulled-layer .pulled-content.sidebar-open :deep(.page-root) {
    width: 1200px !important;   /* 1440-240 */
    margin-left: 240px;
    transition: width 0.7s cubic-bezier(0.16,1,0.3,1), margin-left 0.7s cubic-bezier(0.16,1,0.3,1);
  }
  ```
- 新增视图切换模糊：`.pulled-content.switching { filter: blur(6px); transition: filter 0.7s ease }`（只作用于内容，侧栏在 .pulled-content 外不受影响）
- 滚动容器：`.pulled-layer :deep([data-pencil-name="Results"]) { overflow-y: auto }`（滚筒滚内容；侧栏 absolute 在 layer 内不随其滚动）；Search 侧视验证 ResultList 是否需同规则

## 2. 新建 LibrarySidebarPanel.vue

从 [LibraryMainView.vue](file:///e:/snapvault/src/views/LibraryMainView.vue) L154-672 复制 Sidebar 子树为组件主体：

- props：`open: Boolean`；emits：`close`
- 根：`data-pencil-name="SidebarPanel"`，`position:absolute; left:0; top:64px; bottom:0; width:240px; overflow-y:auto; z-index:6; background:#FFFFFF; border-right:1px solid #E3E5EA; box-shadow:4px 0 18px rgba(22,24,29,.06)`
- 动画（挂在 pulled-layer 内，transform-origin 对齐 ViewSwitch）：
  ```
  transform: scale(0.15); opacity: 0; transform-origin: 8px 318px;
  transition: transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.7s ease;
  ```
  `.open` 时 `transform: scale(1); opacity: 1`
- 结构：
  - PanelHeader（对齐设计稿 14,16,272,34）：PanelTitle "Library"（15px/700，#16181D）+ PanelClose 按钮（x 图标，`@click="$emit('close')"`），header 高 34px、padding 适配 240 宽
  - SidebarContent：原 Sidebar 子树搬入（`data-pencil-name="SidebarContent"`），NavRow×5 / GroupLabel "FOLDERS" / FolderRow×4 / GroupLabel "TAGS" / TagRow×6 / ManageRow 全保留，样式从原 Sidebar 子树复制（激活态 `#E7EDFC` 底 + `#2B5BD7` 文字）
- 新样式文字色可用 tokens：`var(--sv-ink)` `var(--sv-ink-2)` `var(--sv-ink-3)` `var(--sv-accent)` `var(--sv-line)` `var(--sv-accent-soft)`（位于 [tokens.css](file:///e:/snapvault/src/styles/tokens.css)，main.js 已全局引入），或直接沿用原子树内联色值

## 3. LibraryPulledView.vue 改造

- **网格换行**：两处 PreviewRow（L164 附近、L861 附近）`flex-direction: row` → 加 `flex-wrap: wrap`；每处 FilePreview（L168 等）`flex: 1 1 0` → `flex: 0 0 215px; width: 215px`（对齐设计稿卡片宽 215px）
- **行数适配**：Results（L160）padding `128px 36px 36px 36px` → `128px 32px 36px 32px`（压缩后内容宽 1200-64=1136 ≥ 5×215+4×14=1131，第一行恰好 6→5；未压缩 1440-64=1376 ≥ 6×215+5×14=1360）
- **滚动**：Results（L160）加 `overflow-y: auto`（滚筒滚内容；卡片换行后行高增长也由滚动承接）
- **清理**：删 L1914-1935 `v-if="false"` 的 ViewSwitch 块；`defineEmits(['main','search'])`(L1943) → `defineEmits(['search'])`；删 L1915 `emit('main')`

## 4. LibrarySearchView.vue / LibraryHeroView.vue

- **Search**：已确认无 main 残留（emit 仅 'back'，ViewToggle 即"对应 ViewIcon"切回 list）。SearchContent 内联 `width:100%` + padding 40px，压缩由 page-root 规则统一处理，无需改动。若压缩后 ResultList 内容超高，补 `overflow-y: auto`
- **Hero**：无 ViewSwitch（仅 emit pull/search），不改

## 5. 回归脚本更新

- `_check-search-swap.cjs`：删 `.main-layer`/`.search-embed`/sidebarX 断言；新增：search 态开侧栏 → `SidebarPanel` 存在且覆盖 x=0..240、search 内容仍在 240..1440、URL 不变；list↔search 切换出现 switching 模糊 class；拉条拖动后 `sidebarOpen` 状态保留
- `_verify-drag.cjs`：侧栏断言改为面板 `transform: scale(0.15)`（关）↔ `scale(1)`（开）、`opacity` 对应；删 `switchXOpen`（开关不再位移）、`libPadding`；保留拉条 64/577 断言；新增"拉条拖下后侧栏仍开启"

## 6. 验证

1. `npm run dev`（已运行，HMR 生效），浏览器 Ctrl+F5 强制刷新访问 `/library`
2. 手动核验：
   - 上拉吸附 → 点 ViewSwitch：0.2s 纯白 → 0.7s 从 ViewSwitch 处放大渐变出 240px 面板（覆盖 0~240，从拉条下方 128 开始）
   - pulled 态：右侧卡片 6→5 自动换行、卡片尺寸不变、右缘 1440 与拉条对齐
   - search 态：内容压缩到 240~1440、高度不变；list/search 切换 0.7s 模糊；侧栏不变
   - 点 PanelClose：0.7s 缩小渐变回纯白种子 → 0.2s 恢复 ViewSwitch
   - 滚轮滚动内容、拉条不动、侧栏不随内容滚动；拉条拖动内容+侧栏一起上下；收到底再拉起侧栏仍开启
3. `node scripts/_check-search-swap.cjs`、`node scripts/_verify-drag.cjs` 全量通过
4. `npm run build` 无报错
