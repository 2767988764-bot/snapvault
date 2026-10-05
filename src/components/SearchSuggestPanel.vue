<script setup>
import { computed } from 'vue'
import { splitMatch } from '../composables/useSearchFocus'

const props = defineProps({
  open: { type: Boolean, default: false },
  query: { type: String, default: '' },
  recent: { type: Array, default: () => [] },
  results: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false },
})

const emit = defineEmits(['pick'])

const hasQuery = computed(() => props.query.trim().length > 0)

function seg(text) {
  return splitMatch(text, props.query)
}
</script>

<template>
  <div class="sf-panel" :class="{ open }" @mousedown.prevent>
    <div class="sf-clip">
      <div class="sf-card">
        <div v-if="recent.length" class="sf-section">
          <div class="sf-label">Recent searches</div>
          <div class="sf-chips">
            <button
              v-for="t in recent"
              :key="t"
              type="button"
              class="sf-chip"
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
          <div v-else :key="query" class="sf-results">
            <button
              v-for="(r, i) in results"
              :key="r.id"
              type="button"
              class="sf-result"
              :style="{ animationDelay: `${i * 30}ms` }"
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
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}
.sf-panel.open {
  grid-template-rows: 1fr;
  pointer-events: auto;
}
.sf-clip {
  min-height: 0;
  overflow: hidden;
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
  opacity: 0;
  animation: sf-fade-in-up 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.sf-result:hover {
  background-color: #f5f6f8;
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

@keyframes sf-fade-in-up {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
