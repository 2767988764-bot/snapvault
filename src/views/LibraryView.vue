<script setup>
import { ref, computed, nextTick } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import LibraryHeroView from './LibraryHeroView.vue'
import LibraryPulledView from './LibraryPulledView.vue'
import LibrarySidebarPanel from './LibrarySidebarPanel.vue'
import LibrarySearchView from './LibrarySearchView.vue'

// Library flow:
//   hero  --拖 TravelBar 上拉（最高停到导航栏底部 64px）--> pulled
//   pulled/search --点击 ViewSwitch--> SidebarPanel 两段式变形弹入（0.2s 纯白 → 0.7s 放大）；PanelClose 反向收起
// 去文档详情前把当前界面写进 RESTORE_KEY，返回 library 时恢复（其余入口仍是 hero）
const RESTORE_KEY = 'snapvault:library-restore'
const savedUi = (() => {
  try {
    const raw = sessionStorage.getItem(RESTORE_KEY)
    if (raw) sessionStorage.removeItem(RESTORE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
})()
const restoredPulled = !!savedUi && savedUi.state === 'pulled'
const state = ref(restoredPulled ? 'pulled' : 'hero') // hero | pulled
const pullProgress = ref(restoredPulled ? 1 : 0) // 0 = 拉条在 hero 设计位，1 = 吸附（导航栏常驻顶部，拉条停其下 64px）
const isPulling = ref(false)
const sidebarOpen = ref(false) // SidebarPanel 是否挂载
const panelOpen = ref(false)   // SidebarPanel 是否展开位（驱动 scale 过渡与内容压缩）
const morphing = ref(false)    // ViewSwitch 纯白阶段标记
const view = ref(savedUi && savedUi.view === 'search' ? 'search' : 'list') // 右侧内容：'list'（pulled 内容）| 'search'（search 内容，与 pulled 右侧模块同层级）
let dragStartY = null
let startProgress = 0
let moveDist = 0
let snapTimer = null
let morphTimer = null

// 几何：TopNav 高 64px（拉条最高停点）；hero 拉条设计位 y=641（设计稿 GlassDivider 绝对位）
const NAV_H = 64
const BAR_TOP = 641
const MAX_PULL = BAR_TOP - NAV_H // 577
const SEARCH_SNAP = 0.6
const SNAP_MS = 560 // 拉条吸附：与 CSS transition 时长一致
const MORPH_MS = 200 // ViewSwitch 纯白阶段（0.2s）
const PANEL_MS = 700 // SidebarPanel 放大/缩小（0.7s）

// 去文档详情时记住离开前的界面，返回时由上面的 savedUi 一次性恢复
onBeforeRouteLeave((to) => {
  if (to.path !== '/document-detail') return
  try {
    sessionStorage.setItem(RESTORE_KEY, JSON.stringify({ state: state.value, view: view.value }))
  } catch (e) {
    /* 隐私模式等场景忽略 */
  }
})

// ---- snap ----
function snapTo(target) {
  clearTimeout(snapTimer)
  isPulling.value = false
  pullProgress.value = target
  if (target === 1) {
    state.value = 'pulled'
  } else {
    snapTimer = setTimeout(() => { state.value = 'hero' }, SNAP_MS + 40)
  }
}

// ---- drag ----
function onPointerDown(e) {
  if (state.value !== 'hero' && state.value !== 'pulled') return
  if (!e.target.closest('[data-pencil-name="TravelBar"]')) return
  e.preventDefault()
  clearTimeout(snapTimer)
  dragStartY = e.clientY
  startProgress = pullProgress.value
  moveDist = 0
  isPulling.value = true
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}
function onPointerMove(e) {
  if (dragStartY === null) return
  const delta = dragStartY - e.clientY
  moveDist = Math.max(moveDist, Math.abs(e.clientY - dragStartY))
  pullProgress.value = Math.max(0, Math.min(1, startProgress + delta / MAX_PULL))
}
function onPointerUp() {
  window.removeEventListener('pointermove', onPointerMove)
  dragStartY = null
  if (view.value === 'search') {
    // search 态（拉条在 64px）：点击 或 下拉过半 → 退出 search，返回进入前的 list 内容（侧边栏状态保留）；小拖拽 → 留在 search
    if (moveDist < 6 || pullProgress.value < 0.5) {
      exitSearch()
    }
    snapTo(1)
    return
  }
  if (state.value === 'pulled' && moveDist >= 6 && pullProgress.value < 0.5) {
    snapTo(0)
  } else if (moveDist < 6 || pullProgress.value > 0.45) {
    snapTo(1)
  } else {
    snapTo(0)
  }
}
function onBarClick() {
  if (isPulling.value) return
  if (state.value === 'hero') snapTo(1)
}

// ---- SidebarPanel：ViewSwitch 两段式变形弹入/收起 ----
function toggleSidebar() {
  clearTimeout(morphTimer)
  if (!sidebarOpen.value) {
    // 开启：ViewSwitch 先 0.2s 渐变为纯白组件
    morphing.value = true
    morphTimer = setTimeout(async () => {
      sidebarOpen.value = true
      await nextTick()
      // 双 rAF：确保挂载初始态（scale 0.15）先 paint，再切 panelOpen 触发 0.7s 放大过渡
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))
      panelOpen.value = true
    }, MORPH_MS)
  } else {
    // 收起：SidebarPanel 0.7s 缩小回纯白种子，再 0.2s 恢复 ViewSwitch
    panelOpen.value = false
    morphTimer = setTimeout(() => {
      sidebarOpen.value = false
      morphing.value = false
    }, PANEL_MS)
  }
}
// PanelClose 与 toggleSidebar 关闭分支同一路径
function closeSidebar() {
  if (sidebarOpen.value) toggleSidebar()
}

// ---- search 视图（与 pulled 右侧模块同层级，原位切换，不跳路由、不影响侧边栏）----
// 切换 list↔search：容器内即时切换（无动画），侧边栏不受影响
function switchView(next) {
  if (view.value === next) return
  view.value = next
}
function enterSearch() {
  if (view.value === 'search') return
  if (state.value === 'hero') snapTo(1) // 兜底：先展开到 pulled 层
  switchView('search')
}
function exitSearch() {
  if (view.value === 'list') return
  switchView('list')
}
// 方格按钮：退出 search 并完整回到 pulled up 页（侧栏状态保留）
function exitToPulled() {
  if (view.value === 'list') return
  switchView('list')
}

// ---- 位移计算 ----
// pulled 内容顶部：hero 态贴合设计拉条位，展开后最高停到导航栏底部 64px（导航栏 = hero 页 TopNav 常驻，不产生新导航栏）
const pulledTop = computed(() => BAR_TOP * (1 - pullProgress.value) + NAV_H * pullProgress.value)
// 拉条顶部：与 pulled 内容同步（hero 态 577 贴合设计拉条位，展开后停到导航栏底部 64px）
const barTop = computed(() => BAR_TOP * (1 - pullProgress.value) + NAV_H * pullProgress.value)

// hero 层静态常驻（不位移/不变暗），其 TopNav 即常驻导航栏；展开时被 pulled 层覆盖

const pulledStyle = computed(() => ({
  transform: `translateY(${pulledTop.value}px)`,
  transition: isPulling.value ? 'none' : `transform ${SNAP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
}))

const travelBarStyle = computed(() => ({
  transform: `translateY(${barTop.value}px)`,
  transition: isPulling.value ? 'none' : `transform ${SNAP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
}))

const glassOn = computed(() => pullProgress.value > 0 && pullProgress.value < 1)
const showContent = computed(() =>
  isPulling.value || state.value === 'pulled' || pullProgress.value > 0
)

const floatSearchStyle = computed(() => {
  const p = pullProgress.value
  const visible = state.value === 'hero' && p > SEARCH_SNAP && p < 0.985
  const enter = Math.max(0, Math.min(1, (p - SEARCH_SNAP) / 0.12))
  return {
    opacity: visible ? enter : 0,
    transform: `translateX(-50%) translateY(${(1 - enter) * -18}px) scale(${0.96 + enter * 0.04})`,
    pointerEvents: visible ? 'auto' : 'none',
  }
})

// ViewSwitch：pulled/search 左缘（相对居中内容区 8px，宽视口下跟随内容区居中，与侧栏保持对齐）；随 sheet 上下移动（吸附时停设计稿位 8,382）；opacity 过渡用于两段式变形
const switchStyle = computed(() => ({
  left: 'calc((100% - 1440px) / 2 + 8px)',
  top: `${318 + barTop.value}px`,
  transition: isPulling.value ? 'none' : `top ${SNAP_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease`,
}))
</script>

<template>
  <div
    class="library-flow"
    :class="{ pulling: isPulling, 'sidebar-open': panelOpen }"
    @pointerdown="onPointerDown"
  >
    <!-- Hero 层：始终显示，TopNav（0..64）即常驻导航栏；下方内容展开后被 pulled 覆盖 -->
    <div class="layer hero-layer">
      <LibraryHeroView @pull="snapTo(1)" @search="enterSearch" />
    </div>

    <!-- Sheet 内容层（Pulled Up 页；最高停到导航栏底部 64px，其自身 TopNav 隐藏） -->
    <div
      v-show="state === 'hero' || state === 'pulled'"
      class="layer pulled-layer"
      :style="pulledStyle"
    >
      <div
        v-show="showContent"
        class="pulled-content"
        :class="{ 'liquid-glass': glassOn, 'sidebar-open': panelOpen }"
      >
        <LibraryPulledView v-show="view === 'list'" @search="enterSearch" />
        <!-- search 内容：与 pulled 右侧模块同层级原位切换；侧栏弹出时同样作为右侧元素，不影响左侧栏 -->
        <LibrarySearchView
          v-show="view === 'search'"
          class="search-in-flow"
          @back="exitToPulled"
        />
      </div>

      <!-- 磁吸搜索框（仅上拉阶段出现，吸附在拉条下方） -->
      <div class="float-search" :style="floatSearchStyle" @click="enterSearch">
        <svg class="float-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span class="float-search-text">Search by title, full text, or tag</span>
        <span class="float-search-kbd">⌘K</span>
      </div>

      <!-- SidebarPanel：挂在 pulled-layer 内随拉条整体上下移动；与 .pulled-content 同级（切换模糊不波及侧栏） -->
      <LibrarySidebarPanel v-if="sidebarOpen" :open="panelOpen" @close="closeSidebar" />
    </div>

    <!-- 随行拉条：独立层，最高停到导航栏底部；任何状态下可拖 -->
    <div
      class="travel-bar"
      data-pencil-name="TravelBar"
      :class="{ snapped: state === 'pulled' }"
      :style="travelBarStyle"
      @click="onBarClick"
    >
      <div class="tb-shine"></div>
      <div class="tb-grabber"></div>
      <!-- 设计稿双态提示：hero 态 chevron-up「Pull up to browse all 128 documents」；pulled/search 吸附态 chevron-down「Pull down to reveal sidebar」 -->
      <div class="tb-hint">
        <svg
          viewBox="0 0 13.99993896484375 14"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          :class="{ flipped: state === 'pulled' }"
          style="flex-shrink: 0; height: 14px; width: 14px"
        >
          <path
            d="M6.84619 4.68945q-0.08545 0.02734-0.19482 0.1128-0.14014 0.12646-0.53321 0.51611l-1.28857 1.2749q-1.81836 1.82178-1.86279 1.90723-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
            fill="#59606E"
          ></path>
        </svg>
        <span class="tb-text">{{ state === 'pulled' ? 'Pull down to reveal sidebar' : 'Pull up to browse all 128 documents' }}</span>
      </div>
    </div>

    <!-- ViewSwitch：展开/收起按钮，同图标同样式；两段式变形弹入的种子 -->
    <div
      class="view-switch"
      data-pencil-name="ViewSwitch"
      :class="{ 'fade-white': morphing, hidden: panelOpen }"
      :style="switchStyle"
      @click="toggleSidebar"
    >
      <div class="view-switch-content">
        <svg
          data-pencil-name="ViewSwitchIcon"
          viewBox="0 0 13.99993896484375 14"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          style="flex-shrink: 0; height: 18px; width: 18px"
        >
          <path
            d="M2.60449 1.20313q-0.50586 0.08545-0.87842 0.43749-0.36914 0.34863-0.50927 0.86475-0.02734 0.08545-0.02735 0.71436l-0.01367 3.78027 0.01367 3.78027q0 0.62891 0.02735 0.71436 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.71436 0.02735l3.78027 0.01367 3.78027-0.01367q0.62891 0 0.71436-0.02735 0.48877-0.14014 0.81689-0.46826 0.33154-0.33154 0.47168-0.82031 0.02734-0.08545 0.02735-0.71436l0.01367-3.78027-0.01367-3.78027q0-0.62891-0.02735-0.71436-0.12646-0.48877-0.458-0.81689-0.32813-0.33154-0.80323-0.47168l-0.14013-0.04102-4.32715 0q-4.3374 0-4.4502 0.02734z m2.07129 5.79687l0 4.67578-0.88183 0q-0.88184 0-0.98096-0.02734-0.29395-0.05811-0.43408-0.33496l-0.04102-0.09913 0-8.42871 0.04102-0.09912q0.07178-0.14014 0.18798-0.229 0.11963-0.09229 0.25977-0.11963 0.08545 0 0.96729-0.01367l0.88183 0 0 4.67578z m6.6377-4.62109q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0 8.42871-0.04102 0.09913q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-2.73096 0.02734l-2.63183 0 0-9.35156 5.39013 0.01367 0.09913 0.04102z"
            fill="#2B5BD7"
          ></path>
        </svg>
        <div
          data-pencil-name="ViewSwitchLabel"
          style='color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10.5px; font-weight: 600; text-align: left; white-space: nowrap'
        >
          Library
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.library-flow {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #F5F6F8;
}
.library-flow.pulling {
  user-select: none;
  cursor: grabbing;
}

.layer {
  position: absolute;
  inset: 0;
  will-change: transform;
}
.hero-layer {
  z-index: 1;
}
.pulled-layer {
  z-index: 2;
  /* 内容区固定 1440px 并居中，使侧栏左缘 / page-root 右缘与居中的拉条（1440px）对齐（宽视口下也成立） */
  width: 1440px;
  left: 50%;
  margin-left: -720px;
  right: auto;
}

/* ---- 导航栏常驻：唯一 TopNav 由 App.vue 渲染；pulled/search 内联的占位块一律隐藏，不产生新导航栏 ---- */
.pulled-layer :deep([data-pencil-name="TopNav"]),
.pulled-layer :deep([data-pencil-name="TopNavSpacer"]) {
  display: none !important;
}
/* pulled/search page-root 高度约束为拉条下方可视区（设计稿 PanelWrap/SearchContent = 64..900 区域）；内容从拉条顶部开始排布，玻璃拉条覆盖其上 */
.pulled-layer :deep(.page-root) {
  height: calc(100vh - 64px) !important;
}

/* ---- hero 原生拉条隐藏，由 travel-bar 取代 ---- */
.hero-layer :deep([data-pencil-name="GlassDivider"]) {
  display: none !important;
}

/* ---- 随行拉条：独立层，复刻设计稿玻璃拉条（hero 64px 上圆角 / 吸附 56px 下圆角），最高停导航栏底部 ---- */
.travel-bar {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1440px;
  height: 64px;
  z-index: 4; /* 覆盖 pulled 内容层，随时可拖 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
  /* 设计稿：#FFFFFF3D 玻璃底 + 顶部 1px 渐变发线 + backdrop blur 40 + 双侧内阴影 + 外阴影 */
  background-color: #FFFFFF3D;
  background-image: linear-gradient(200deg, #FFFFFFF0 0%, #E3EDFF99 50%, #FFFFFFA6 100%);
  background-repeat: no-repeat;
  background-size: 100% 1px;
  background-position: top left;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 22px 22px 0px 0px;
  border: 1px solid #FFFFFFF7;
  box-shadow: inset 0px 2px 8px #FFFFFFCC, inset 0px -4px 12px #8FB0FF33, 0px -12px 30px #16181D26;
  cursor: grab;
  touch-action: none;
  will-change: transform;
  transition: border-radius 0.3s ease, box-shadow 0.3s ease, height 0.3s ease;
}
.library-flow.pulling .travel-bar {
  cursor: grabbing;
}
/* 吸附态（设计稿 GlassPullBar）：56px 高、下圆角 22、外阴影朝下 */
.travel-bar.snapped {
  height: 56px;
  border-radius: 0px 0px 22px 22px;
  box-shadow: inset 0px 2px 8px #FFFFFFCC, inset 0px -4px 12px #8FB0FF33, 0px 12px 30px #16181D26;
}
.tb-shine {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-image: linear-gradient(-90deg, #7EA6FF00 0%, #B7D0FFE6 35%, #FFC2DBE6 65%, #FF9EC400 100%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tb-grabber {
  background-color: #8A909C80;
  border-radius: 9999px;
  height: 5px;
  width: 42px;
  flex-shrink: 0;
}
.tb-hint {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
}
.tb-hint svg {
  transition: transform 0.3s ease;
}
.tb-hint svg.flipped {
  transform: rotate(180deg);
}
.tb-text {
  font-family: "Instrument Sans", system-ui, sans-serif;
  font-size: 12.5px;
  font-weight: 500;
  color: #59606E;
  white-space: nowrap;
}

/* ---- sheet 内容 ---- */
.pulled-content {
  position: relative;
  will-change: transform;
}
.pulled-content.liquid-glass {
  backdrop-filter: blur(22px) saturate(1.6);
  -webkit-backdrop-filter: blur(22px) saturate(1.6);
  background: rgba(245, 246, 248, 0.55);
}
.pulled-content.liquid-glass :deep(.page-root) {
  background-image: none !important;
  background-color: transparent !important;
}

/* ---- ViewSwitch：展开/收起按钮，同图标同样式 ---- */
.view-switch {
  position: absolute;
  z-index: 5;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 14px;
  border: 1px solid #E3E5EA;
  box-shadow: 0px 8px 22px #16181D26;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 7px;
  height: 92px;
  justify-content: center;
  width: 46px;
  cursor: pointer;
}
.view-switch:hover {
  border-color: #2B5BD7;
}
/* ViewSwitch 两段式变形种子：0.2s 渐变纯白（图标/文字淡出）→ 0.7s 放大出 SidebarPanel */
.view-switch-content {
  transition: opacity 0.2s ease;
}
.view-switch.fade-white .view-switch-content {
  opacity: 0;
}
.view-switch.hidden {
  opacity: 0;
  pointer-events: none;
}

/* ---- 侧栏弹入压缩：pulled/search 的 page-root 固定 1440px，宽度过渡到 1200px 并右移 240px（右缘与拉条右缘同竖线） ---- */
.pulled-layer .pulled-content.sidebar-open :deep(.page-root) {
  width: 1200px !important;
  margin-left: 240px;
  transition: width 0.7s cubic-bezier(0.16, 1, 0.3, 1), margin-left 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
/* 结果列表区可滚动：滚筒只滚动内容，不影响拉条与侧栏 */
.pulled-layer :deep([data-pencil-name="Results"]) {
  overflow-y: auto;
}

/* ---- search 原位内容（与 pulled 右侧模块同层级；复用共享拉条）---- */
/* search 自身拉条隐藏（共享拉条取代）；TopNav 由 pulled 层统一隐藏，page-root padding-top 由 pulled-layer 规则统一处理 */
.pulled-layer :deep(.search-travel-bar) {
  display: none !important;
}
/* search（pulled 原位态）：page-root 设计稿高 900px 会随 64px 下移溢出页面底部（视觉 64..964），
   约束高度为可视区（视觉 64..100vh），与侧栏弹出态（search-embed）高度一致、只变宽度不变高度 */
.pulled-layer .search-in-flow {
  height: calc(100vh - 64px) !important;
}

/* ---- 磁吸搜索框 ---- */
.float-search {
  position: absolute;
  top: 78px;
  left: 50%;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 640px;
  height: 48px;
  padding: 0 18px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border: 1px solid #E3E5EA;
  border-radius: 9999px;
  box-shadow: 0 8px 24px rgba(22, 24, 29, 0.10), 0 1px 2px rgba(22, 24, 29, 0.06);
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}
.float-search:hover {
  box-shadow: 0 10px 28px rgba(43, 91, 215, 0.16), 0 1px 2px rgba(22, 24, 29, 0.06);
}
.float-search-icon {
  width: 17px;
  height: 17px;
  color: #8A909C;
  flex-shrink: 0;
}
.float-search-text {
  flex: 1;
  font-family: 'Instrument Sans', system-ui, sans-serif;
  font-size: 14px;
  color: #8A909C;
  white-space: nowrap;
  overflow: hidden;
}
.float-search-kbd {
  font-family: 'Fragment Mono', monospace;
  font-size: 11px;
  color: #8A909C;
  background: #EEEFF2;
  border: 1px solid #E3E5EA;
  border-radius: 6px;
  padding: 2px 6px;
}
</style>
