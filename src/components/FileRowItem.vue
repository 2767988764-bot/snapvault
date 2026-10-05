<template>
  <!-- 库文件列表行：缩略图 + 名称 + meta + 状态标签；与网格卡共用选中角标 -->
  <div
    data-pencil-name="FileRow"
    class="fr-row"
    data-clickable
    @click="router.push({ path: '/document-detail', query: { id: doc.id } })"
  >
    <SelectBadge
      :selected="selected"
      style="top: 50%; left: 14px; transform: translateY(-50%)"
      @toggle="emit('toggle', doc.id)"
    />
    <div class="fr-thumb" data-pencil-name="FileRowThumb">
      <div class="fr-thumb-page">
        <div class="fr-thumb-accent" :style="`background-color: ${doc.accent}`"></div>
        <div class="fr-thumb-line"></div>
        <div class="fr-thumb-line short"></div>
      </div>
    </div>
    <div class="fr-main">
      <div class="fr-name" data-pencil-name="FileName">{{ doc.name }}</div>
      <div class="fr-meta" data-pencil-name="FileMeta">{{ doc.meta }}</div>
    </div>
    <div class="fr-pill" data-pencil-name="StatusPill" :style="`background-color: ${doc.pillBg}`">
      <svg
        data-pencil-name="StatusIcon"
        data-icon-name="check"
        data-icon-set="lucide"
        viewBox="0 0 13.99993896484375 14"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style="box-sizing: border-box; flex-shrink: 0; height: 10px; width: 10px"
      >
        <path :d="CHECK_PATH" :fill="doc.statusColor"></path>
      </svg>
      <div class="fr-status" data-pencil-name="StatusText" :style="`color: ${doc.statusColor}`">
        {{ doc.status }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SelectBadge from './SelectBadge.vue'

defineProps({
  doc: { type: Object, required: true },
  selected: { type: Boolean, default: false },
})
const emit = defineEmits(['toggle'])

const router = useRouter()

// lucide check 图标路径（与网格卡共用）
const CHECK_PATH =
  'M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z'
</script>

<style scoped>
.fr-row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 9px 18px 9px 48px;
  background-color: var(--sv-surface);
  border-bottom: 1px solid var(--sv-line);
  transition: background-color var(--sv-dur-fast) var(--sv-ease-out);
  animation: sv-rise-in var(--sv-dur-move) var(--sv-ease-out) both;
}
.fr-row:last-child {
  border-bottom: 0;
}
.fr-row:hover {
  background-color: var(--sv-surface-2);
}

.fr-thumb {
  flex-shrink: 0;
  display: flex;
  width: 44px;
  height: 44px;
  padding: 4px;
  border-radius: 8px;
  background-color: var(--sv-surface-2);
}
.fr-thumb-page {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 3px;
  padding: 6px 5px;
  border-radius: 4px;
  background-color: var(--sv-surface);
  box-shadow: 0 2px 6px #16181d1f;
  overflow: hidden;
}
.fr-thumb-accent {
  flex-shrink: 0;
  width: 12px;
  height: 4px;
  border-radius: 2px;
}
.fr-thumb-line {
  flex-shrink: 0;
  width: 100%;
  height: 3px;
  border-radius: 1.5px;
  background-color: #e3e7ee;
}
.fr-thumb-line.short {
  width: 60%;
}

.fr-main {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.fr-name {
  color: var(--sv-ink);
  font-family: var(--sv-font-body);
  font-size: 13.5px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fr-meta {
  color: var(--sv-ink-3);
  font-family: var(--sv-font-mono);
  font-size: 11px;
  white-space: nowrap;
}

.fr-pill {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 5px;
  padding: 4px 9px;
  border-radius: var(--sv-radius-pill);
}
.fr-status {
  font-family: var(--sv-font-body);
  font-size: 10.5px;
  font-weight: 500;
  white-space: nowrap;
}
</style>
