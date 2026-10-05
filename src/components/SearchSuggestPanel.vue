<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { splitMatch, cycleFieldFocus } from '../composables/useSearchFocus'

const props = defineProps({
  open: { type: Boolean, default: false },
  query: { type: String, default: '' },
  recent: { type: Array, default: () => [] },
  results: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false },
  activeIndex: { type: Number, default: 0 },
})

const emit = defineEmits(['pick', 'close', 'move', 'activate'])

const hasQuery = computed(() => props.query.trim().length > 0)

const rootRef = ref(null)

function seg(text) {
  return splitMatch(text, props.query)
}

// 高亮项变化时保持可见（面板超高滚动 / 窗口较小时生效）
watch(
  () => props.activeIndex,
  async () => {
    await nextTick()
    const el = rootRef.value && rootRef.value.querySelector('.sf-result.is-active')
    if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' })
  }
)

function fieldEl() {
  return rootRef.value && rootRef.value.closest('[data-pencil-name="SearchBar"], [data-pencil-name="SearchField"]')
}
function inputEl() {
  const field = fieldEl()
  return field && field.querySelector('input.sf-input')
}

// 键盘焦点落在面板内（Tab 进入）时：
//   Esc     → 回焦输入框并关闭
//   Tab     → 在「输入框 + 面板内元素」之间循环，不逃逸到背景
//   ↑ / ↓   → 回焦输入框，把移动动作交回 useSearchFocus（高亮与 Enter 始终由输入框统一驱动）
function onPanelKeydown(e) {
  if (e.key === 'Escape') {
    e.stopPropagation()
    const el = inputEl()
    if (el) el.focus()
    emit('close')
    return
  }
  if (e.key === 'Tab') {
    cycleFieldFocus(fieldEl(), e)
    return
  }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault()
    const el = inputEl()
    if (el) el.focus()
    emit('move', e.key === 'ArrowDown' ? 1 : -1)
  }
}
</script>

<template>
  <div ref="rootRef" class="sf-panel sv-collapse" :class="{ open }" @mousedown.prevent @keydown="onPanelKeydown">
    <div class="sf-clip sv-clip">
      <div class="sf-card">
        <div v-if="recent.length" class="sf-section">
          <div class="sf-label">Recent searches</div>
          <div class="sf-chips">
            <button
              v-for="t in recent"
              :key="t"
              type="button"
              class="sf-chip sv-focus"
              @click="emit('pick', t, null)"
            >
              <svg class="sf-chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M12 7v5l4 2" />
              </svg>
              <span>{{ t }}</span>
            </button>
          </div>
        </div>

        <div v-if="hasQuery" class="sf-section">
          <div class="sf-label">
            {{ loading ? 'Searching…' : `Results · ${results.length}` }}
          </div>
          <div v-if="!loading && !results.length" class="sf-empty">No matches for “{{ query }}”</div>
          <div v-else :key="query" class="sf-results" role="listbox">
            <button
              v-for="(r, i) in results"
              :key="r.id"
              type="button"
              class="sf-result"
              :class="{ 'is-active': i === activeIndex }"
              role="option"
              :aria-selected="i === activeIndex"
              :data-active="i === activeIndex ? 'true' : 'false'"
              :style="{ animationDelay: `${i * 30}ms` }"
              @focus="emit('activate', i)"
              @click="emit('pick', r.title, r)"
            >
              <span class="sf-result-title">
                <span v-for="(s, si) in seg(r.title)" :key="si" :class="{ 'sf-hit': s.hit }">{{ s.text }}</span>
              </span>
              <span class="sf-result-snippet">
                <span v-for="(s, si) in seg(r.snippet)" :key="si" :class="{ 'sf-hit': s.hit }">{{ s.text }}</span>
              </span>
              <span class="sf-result-tag">{{ r.tag }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 下拉面板：高度走 grid-template-rows 0fr→1fr 收起/展开，卡片走 translateY(-10px)+opacity */
.sf-panel {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  z-index: 60;
  pointer-events: none;
  /* 覆盖 shared 默认时长，保留原作 320ms 展开过渡 */
  transition: grid-template-rows 320ms cubic-bezier(0.16, 1, 0.3, 1);
}
.sf-panel.open {
  grid-template-rows: 1fr;
  pointer-events: auto;
}
.sf-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px;
  background-color: #ffffff;
  border: 1px solid #e3e5ea;
  border-radius: 14px;
  box-shadow: 0 22px 48px rgba(22, 24, 29, 0.18);
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 240ms ease, transform 320ms cubic-bezier(0.16, 1, 0.3, 1);
}
.sf-panel.open .sf-card {
  opacity: 1;
  transform: translateY(0);
}

.sf-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.sf-label {
  font-family: "Fragment Mono", system-ui, sans-serif;
  font-size: 10.5px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #8a909c;
}

.sf-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.sf-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border: none;
  border-radius: 9999px;
  background-color: #eeeff2;
  color: #59606e;
  font-family: "Instrument Sans", system-ui, sans-serif;
  font-size: 12.5px;
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.sf-chip:hover {
  background-color: #e7edfc;
  color: #2b5bd7;
}
.sf-chip-icon {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.sf-results {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.sf-result {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "title tag"
    "snippet tag";
  gap: 3px 12px;
  padding: 9px 10px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  --rise-from: 8px;
  opacity: 0;
  animation: sv-rise-in 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.sf-result:hover {
  background-color: #f5f6f8;
}
/* 键盘高亮：--sv-accent-soft 背景 + 左侧靛蓝指示条（Tab 聚焦时同样生效） */
.sf-result.is-active,
.sf-result:focus-visible {
  background-color: var(--sv-accent-soft);
  box-shadow: inset 2px 0 0 var(--sv-accent);
  outline: none;
}
.sf-result-title {
  grid-area: title;
  font-family: "Instrument Sans", system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #16181d;
}
.sf-result-snippet {
  grid-area: snippet;
  font-family: "Instrument Sans", system-ui, sans-serif;
  font-size: 12.5px;
  color: #59606e;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sf-result-tag {
  grid-area: tag;
  align-self: center;
  padding: 3px 8px;
  border-radius: 9999px;
  background-color: #e7edfc;
  color: #2b5bd7;
  font-family: "Fragment Mono", system-ui, sans-serif;
  font-size: 10.5px;
  white-space: nowrap;
}

/* 命中片段：靛蓝底高亮 */
.sf-hit {
  background-color: #d9e4ff;
  color: #2b5bd7;
  border-radius: 3px;
}
.sf-empty {
  padding: 6px 2px;
  font-family: "Instrument Sans", system-ui, sans-serif;
  font-size: 12.5px;
  color: #8a909c;
}
</style>
