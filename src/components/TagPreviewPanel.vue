<script setup>
import { computed } from 'vue'
// Tag/Preview（pendev 组件 wNf2y）：264px 宽卡片，左侧 4px 标签色条 + 头部（图标 / 名称 / 数量 / X）+ 可滚动的文件预览列表。
// theme 跟随被点击的 StickyNote：底色 / 主色（色条、图标、数量）/ 分隔线与副文字色。
const props = defineProps({
  name: { type: String, default: 'tag' },
  count: { type: String, default: '' },
  files: { type: Array, default: () => [] },
  theme: { type: Object, default: () => ({}) },
})
const emit = defineEmits(['close', 'select'])

const themeVars = computed(() => {
  const t = props.theme || {}
  return {
    '--tp-bg': t.bg || 'var(--sv-accent-soft)',
    '--tp-accent': t.accent || 'var(--sv-accent)',
    '--tp-divider': t.divider || 'rgba(43, 91, 215, 0.2)',
    '--tp-meta': t.metaColor || 'rgba(43, 91, 215, 0.6)',
  }
})
</script>

<template>
  <div class="tag-preview" data-pencil-name="TagPreview" :style="themeVars">
    <div class="tp-bar"></div>

    <div class="tp-head">
      <div class="tp-head-left">
        <svg class="tp-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" /></svg>
        <div class="tp-name">{{ name }}</div>
      </div>
      <div class="tp-count">{{ count }}</div>
      <button class="tp-close" data-pencil-name="PickerClose" type="button" aria-label="Close" @click="emit('close')">
        <svg viewBox="0 0 14 14" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 4l6 6M10 4l-6 6" /></svg>
      </button>
    </div>

    <!-- 滚轮可上下移动的文件列表 -->
    <div class="tp-files">
      <div
        v-for="(file, i) in files"
        :key="i"
        class="tp-row"
        :class="{ last: i === files.length - 1 }"
        data-clickable
        @click="emit('select', file)"
      >
        <div class="tp-thumb">
          <div class="tp-page">
            <span class="tp-line l1"></span>
            <span class="tp-line l2"></span>
            <span class="tp-line l3"></span>
          </div>
        </div>
        <div class="tp-info">
          <div class="tp-file-name">{{ file.name }}</div>
          <div class="tp-file-meta">{{ file.meta }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tag-preview {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 264px;
  padding: 15px 17px 15px 19px;
  background-color: var(--tp-bg);
  border-radius: 14px;
  box-shadow: 0 14px 30px rgba(22, 24, 29, 0.15);
  overflow: hidden;
}
/* 左侧标签色条（设计稿 NoteBar：绝对定位 4px 宽） */
.tp-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: var(--tp-accent);
}
.tp-head {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
}
.tp-head-left {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.tp-icon {
  flex-shrink: 0;
  color: var(--tp-accent);
}
.tp-name {
  color: var(--sv-ink);
  font-family: var(--sv-font-display);
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tp-count {
  flex-shrink: 0;
  color: var(--tp-accent);
  font-family: var(--sv-font-mono);
  font-size: 12px;
}
.tp-close {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  background: none;
  color: var(--sv-ink-3);
  cursor: pointer;
}
.tp-files {
  display: flex;
  flex-direction: column;
  /* 内容超出时浮层内部可滚动 */
  max-height: 260px;
  overflow-y: auto;
}
.tp-row {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px 0;
  /* 底部分隔线（设计稿 inner 描边不占布局） */
  box-shadow: inset 0 -1px 0 var(--tp-divider);
}
.tp-row.last {
  box-shadow: none;
}
.tp-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 26px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.62);
  border-radius: 5px;
}
.tp-page {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 16px;
  height: 21px;
  padding: 4px 3px;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
}
.tp-line {
  display: block;
}
.tp-line.l1 {
  width: 8px;
  height: 2px;
  background-color: #c2c9d5;
  border-radius: 1px;
}
.tp-line.l2,
.tp-line.l3 {
  width: 10px;
  height: 1.5px;
  background-color: #dce1e8;
  border-radius: 0.75px;
}
.tp-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1 1 0;
  min-width: 0;
}
.tp-file-name {
  color: var(--sv-ink);
  font-family: var(--sv-font-body);
  font-size: 11.5px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tp-file-meta {
  color: var(--tp-meta);
  font-family: var(--sv-font-mono);
  font-size: 9.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
