<script setup>
// Picker/Popover（pendev 组件 ah9W6）：RecentScansPicker / RecentOpenedPicker 共用外壳。
// 380px 宽浮层，标题 + 可滚动行列表 + 底部操作行；右上角 X 关闭。
// 键盘：↑↓ 移动高亮行（footerHint「↑ ↓ to select」）、Enter 选中、Esc 关闭、Tab 在浮层内循环。
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  rows: { type: Array, default: () => [] },
  footerLabel: { type: String, default: 'Open Library' },
  footerHint: { type: String, default: '↑ ↓ to select' },
})
const emit = defineEmits(['close', 'select', 'open-library'])

const rootRef = ref(null)
const activeIndex = ref(0)

// 行数据更新 → 高亮重置到第 1 行
watch(
  () => props.rows,
  () => {
    activeIndex.value = 0
  }
)

function setActive(i) {
  activeIndex.value = i
}

function focusRow(i) {
  const el = rootRef.value && rootRef.value.querySelectorAll('.pp-row')[i]
  if (el) el.focus()
}

// ↑↓：高亮 + 焦点同步移动（到端点即停）
function move(delta) {
  const n = props.rows.length
  if (!n) return
  const next = Math.max(0, Math.min(n - 1, activeIndex.value + delta))
  activeIndex.value = next
  nextTick(() => focusRow(next))
}

// Tab 焦点陷阱：只在浮层内的 close / 行 / footer 之间循环
function trapTab(e) {
  const items = [...rootRef.value.querySelectorAll('button, [tabindex="0"]')].filter(
    (el) => el.getClientRects().length > 0
  )
  if (items.length < 2) return
  const i = items.indexOf(document.activeElement)
  e.preventDefault()
  items[(i + (e.shiftKey ? -1 : 1) + items.length) % items.length].focus()
}

function onKeydown(e) {
  if (e.key === 'Escape') {
    e.preventDefault()
    emit('close')
    return
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    move(1)
    return
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    move(-1)
    return
  }
  if (e.key === 'Tab') {
    trapTab(e)
    return
  }
  if (e.key === 'Enter' || e.key === ' ') {
    // 关闭按钮 / footer 的按键交给它们自己处理
    if (e.target !== rootRef.value && e.target.closest('.pp-close, .pp-all')) return
    const row = props.rows[activeIndex.value]
    if (row) {
      e.preventDefault()
      emit('select', row)
    }
  }
}

// 点击浮层外部关闭（面板内部点击不关闭）
function onDocPointerDown(e) {
  if (rootRef.value && !rootRef.value.contains(e.target)) emit('close')
}

onMounted(() => {
  if (rootRef.value) rootRef.value.focus({ preventScroll: true })
  document.addEventListener('pointerdown', onDocPointerDown, true)
})
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocPointerDown, true))
</script>

<template>
  <div
    ref="rootRef"
    class="picker-popover"
    data-pencil-name="PickerPopover"
    role="dialog"
    :aria-label="title"
    tabindex="-1"
    @keydown="onKeydown"
  >
    <div class="pp-header">
      <div class="pp-title">{{ title }}</div>
      <button class="pp-close sv-focus" data-pencil-name="PickerClose" type="button" aria-label="Close" @click="emit('close')">
        <svg viewBox="0 0 14 14" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 4l6 6M10 4l-6 6" /></svg>
      </button>
    </div>

    <!-- 滚轮可上下移动的行列表 -->
    <div class="pp-list" data-pencil-name="PickerList">
      <div
        v-for="(row, i) in rows"
        :key="i"
        class="pp-row"
        :class="{ 'is-active': i === activeIndex }"
        data-clickable
        role="option"
        :aria-selected="i === activeIndex"
        tabindex="0"
        @click="emit('select', row)"
        @focus="setActive(i)"
      >
        <div class="pp-thumb">
          <div class="pp-page">
            <span class="pp-line l1"></span>
            <span class="pp-line l2"></span>
            <span class="pp-line l3"></span>
          </div>
        </div>
        <div class="pp-info">
          <div class="pp-name">{{ row.name }}</div>
          <div class="pp-meta">{{ row.meta }}</div>
        </div>
        <svg v-if="row.checked" class="pp-check" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
      </div>
    </div>

    <div class="pp-footer">
      <div
        class="pp-all sv-focus"
        data-clickable
        role="button"
        tabindex="0"
        @click="emit('open-library')"
        @keydown.enter.prevent="emit('open-library')"
        @keydown.space.prevent="emit('open-library')"
      >
        {{ footerLabel }}
      </div>
      <div class="pp-hint">{{ footerHint }}</div>
    </div>
  </div>
</template>

<style scoped>
.picker-popover {
  display: flex;
  flex-direction: column;
  width: 380px;
  background-color: var(--sv-surface);
  border-radius: 16px;
  /* 内描边不占布局（设计稿 strokeAlignment: inner） */
  box-shadow: inset 0 0 0 1px var(--sv-line), 0 18px 44px rgba(22, 24, 29, 0.2);
  overflow: hidden;
}
.pp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 14px 16px;
}
.pp-title {
  color: var(--sv-ink);
  font-family: var(--sv-font-display);
  font-size: 14.5px;
  font-weight: 700;
}
.pp-close {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: none;
  color: var(--sv-ink-3);
  cursor: pointer;
}
.pp-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 10px;
  /* 内容超出时浮层内部可滚动 */
  max-height: 320px;
  overflow-y: auto;
}
.pp-row {
  display: flex;
  align-items: center;
  gap: 11px;
  flex-shrink: 0;
  padding: 8px 10px;
  border-radius: 8px;
  transition: background-color 120ms ease;
}
.pp-row:hover {
  background-color: #f3f4f6;
}
/* 键盘高亮：--sv-accent-soft 背景 + 左侧靛蓝指示条（Tab 聚焦时同样生效） */
.pp-row.is-active,
.pp-row:focus-visible {
  background-color: var(--sv-accent-soft);
  box-shadow: inset 2px 0 0 var(--sv-accent);
  outline: none;
}
.picker-popover:focus {
  outline: none;
}
.pp-close:focus-visible,
.pp-all:focus-visible {
  border-radius: 4px;
}
.pp-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 30px;
  height: 38px;
  background-color: var(--sv-surface-2);
  border-radius: 6px;
}
.pp-page {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 20px;
  height: 26px;
  padding: 5px 4px;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
}
.pp-line {
  display: block;
}
.pp-line.l1 {
  width: 9px;
  height: 2px;
  background-color: #c2c9d5;
  border-radius: 1px;
}
.pp-line.l2,
.pp-line.l3 {
  width: 12px;
  height: 1.5px;
  background-color: #dce1e8;
  border-radius: 0.75px;
}
.pp-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1 1 0;
  min-width: 0;
}
.pp-name {
  color: var(--sv-ink);
  font-family: var(--sv-font-body);
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pp-meta {
  color: var(--sv-ink-3);
  font-family: var(--sv-font-mono);
  font-size: 10.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pp-check {
  flex-shrink: 0;
  color: var(--sv-accent);
}
.pp-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 12px 16px 14px;
}
.pp-all {
  color: var(--sv-accent);
  font-family: var(--sv-font-body);
  font-size: 12.5px;
  font-weight: 600;
}
.pp-hint {
  color: var(--sv-ink-3);
  font-family: var(--sv-font-mono);
  font-size: 10.5px;
}
</style>
