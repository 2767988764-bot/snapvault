<script setup>
import { computed } from 'vue'

// 通用空状态：内联 lucide 风格图标 + 标题 + 可选描述 + 可选 CTA
// 用法：<EmptyState icon="file-text" title="…" description="…" action-text="…" @action="…" />
const props = defineProps({
  icon: { type: String, default: 'inbox' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  actionText: { type: String, default: '' },
})
const emit = defineEmits(['action'])

// 只内置几个常用图标（24×24 stroke 风格）；未知 key 回落 inbox
const ICONS = {
  inbox: {
    paths: [
      'M22 12h-6l-2 3h-4l-2-3H2',
      'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
    ],
  },
  'file-text': {
    paths: [
      'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
      'M14 2v4a2 2 0 0 0 2 2h4',
      'M10 9H8',
      'M16 13H8',
      'M16 17H8',
    ],
  },
  search: {
    circle: [11, 11, 8],
    paths: ['m21 21-4.3-4.3'],
  },
  'scan-line': {
    paths: [
      'M3 7V5a2 2 0 0 1 2-2h2',
      'M17 3h2a2 2 0 0 1 2 2v2',
      'M21 17v2a2 2 0 0 1-2 2h-2',
      'M7 21H5a2 2 0 0 1-2-2v-2',
      'M7 12h10',
    ],
  },
}
const shape = computed(() => ICONS[props.icon] || ICONS.inbox)
</script>

<template>
  <div class="es" data-pencil-name="EmptyState">
    <div class="es-icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle v-if="shape.circle" :cx="shape.circle[0]" :cy="shape.circle[1]" :r="shape.circle[2]" />
        <path v-for="(d, i) in shape.paths" :key="i" :d="d" />
      </svg>
    </div>
    <div v-if="title" class="es-title" data-pencil-name="EmptyStateTitle">{{ title }}</div>
    <div v-if="description" class="es-desc" data-pencil-name="EmptyStateDesc">{{ description }}</div>
    <button
      v-if="actionText"
      type="button"
      class="es-cta"
      data-pencil-name="EmptyStateCta"
      @click="emit('action')"
    >
      {{ actionText }}
    </button>
  </div>
</template>

<style scoped>
.es {
  --rise-from: 6px;
  align-items: center;
  animation: sv-rise-in var(--sv-dur-move) var(--sv-ease-out) both;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  padding: 40px 24px;
  text-align: center;
  width: 100%;
}
.es-icon {
  align-items: center;
  background-color: var(--sv-surface-2);
  border-radius: var(--sv-radius-pill);
  color: var(--sv-ink-3);
  display: flex;
  height: 56px;
  justify-content: center;
  margin-bottom: 2px;
  width: 56px;
}
.es-icon svg {
  height: 26px;
  width: 26px;
}
.es-title {
  color: var(--sv-ink);
  font-family: var(--sv-font-body);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
}
.es-desc {
  color: var(--sv-ink-2);
  font-family: var(--sv-font-body);
  font-size: 13px;
  line-height: 1.5;
  max-width: 380px;
}
.es-cta {
  background-color: var(--sv-accent);
  border: none;
  border-radius: var(--sv-radius-md);
  color: var(--sv-surface);
  cursor: pointer;
  font-family: var(--sv-font-body);
  font-size: 13.5px;
  font-weight: 600;
  margin-top: 4px;
  padding: 9px 16px;
  transition: background-color var(--sv-dur-fast) var(--sv-ease-out),
    transform var(--sv-dur-fast) var(--sv-ease-out);
}
.es-cta:hover {
  background-color: var(--sv-accent-hover);
  transform: translateY(-1px);
}
.es-cta:active {
  transform: translateY(0);
}
</style>
