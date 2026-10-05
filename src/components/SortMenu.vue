<script setup>
import { ref } from 'vue'

defineProps({
  label: { type: String, default: '' },
  options: { type: Array, default: () => [] },
  activeIndex: { type: Number, default: 0 },
  selectedKey: { type: String, default: '' },
  open: { type: Boolean, default: false },
  // pulled：可交互下拉；search：静态展示（无面板 / 无焦点 / 无交互）
  interactive: { type: Boolean, default: true },
})

const emit = defineEmits(['toggle', 'choose', 'keydown'])

const el = ref(null)
defineExpose({ el, focus: () => el.value && el.value.focus() })
</script>

<template>
  <div
    ref="el"
    data-pencil-name="SortMenu"
    :class="interactive ? { 'sort-menu': true, 'is-open': open, 'sv-focus': true } : null"
    style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: 32px; justify-content: flex-start; padding: 8px 12px; width: fit-content"
    :role="interactive ? 'button' : null"
    :tabindex="interactive ? 0 : null"
    :aria-haspopup="interactive ? 'listbox' : null"
    :aria-expanded="interactive ? open : null"
    :aria-label="interactive ? 'Sort documents' : null"
    :data-clickable="interactive ? '' : null"
    @click="interactive && emit('toggle')"
    @keydown="interactive && emit('keydown', $event)"
  >
    <svg
      data-pencil-name="SortIcon"
      data-icon-name="arrow-up-down"
      data-icon-set="lucide"
      viewBox="0 0 13.99993896484375 14"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
    >
      <path
        d="M3.8623 1.79102q-0.05469 0.01367-0.27343 0.21875-0.21533 0.20166-1.0835 1.06982-0.89551 0.89551-1.08691 1.10059-0.18799 0.20166-0.21533 0.27343-0.06836 0.2085 0.01367 0.42725 0.08545 0.21533 0.28027 0.31445 0.09912 0.04102 0.23926 0.04102l0.02734 0q0.12646 0 0.19483-0.02735 0.07178-0.02734 0.23925-0.18457 0.11279-0.0957 0.50586-0.50244l0.79639-0.78271 0 7.14014q0.01367 0.69726 0.02734 0.8955 0.01367 0.14014 0.05811 0.19483l0.02734 0.02734q0.15381 0.22559 0.417 0.24609 0.2666 0.02051 0.46484-0.17431 0.12646-0.12646 0.15381-0.29395 0.02734-0.11279 0.02734-4.06054l0-3.96143 0.68701 0.70068q0.46143 0.44775 0.60157 0.58106 0.14014 0.12988 0.20849 0.16064 0.23926 0.10938 0.46143 0.01367 0.22559-0.09912 0.32129-0.32128 0.09912-0.22559-0.01026-0.46485-0.03076-0.06836-0.23926-0.29053-0.2085-0.22559-1.04931-1.05273-1.23389-1.23047-1.32617-1.27148-0.08887-0.04443-0.22901-0.05127-0.14014-0.00684-0.23926 0.03418z m5.90967-0.02735q-0.14014 0.04102-0.2666 0.16065-0.12646 0.11963-0.15381 0.30078-0.02734 0.08545-0.02734 4.04687l0 3.9751-0.68701-0.70068q-0.43408-0.43408-0.58789-0.5708-0.15381-0.14014-0.2085-0.15723-0.19824-0.0957-0.3999-0.0376-0.20166 0.05469-0.32813 0.21533-0.12646 0.16064-0.11279 0.36914l0 0.02735q0.01367 0.11279 0.05469 0.18457 0.07178 0.10938 0.3247 0.37597l0.96387 0.96729q1.23389 1.23047 1.32276 1.2749 0.09229 0.04102 0.24609 0.04102l0.04102 0q0.11279 0.01367 0.19824-0.02735 0.0957-0.07178 0.34863-0.30761 0.18115-0.1709 0.81348-0.81348l0.19482-0.19482q0.88184-0.88184 1.06983-1.07666 0.19141-0.19824 0.21875-0.27002 0.06836-0.2085-0.01026-0.417-0.0752-0.21191-0.28369-0.3247-0.09912-0.04102-0.23926-0.04102l-0.02734 0q-0.12646 0-0.19824 0.02735-0.06836 0.02734-0.23584 0.18457-0.11279 0.0957-0.50586 0.50244l-0.79639 0.78271 0-7.14013q-0.01367-0.69727-0.02734-0.89551-0.01367-0.14014-0.05811-0.19483l-0.01367-0.02734q-0.0957-0.14014-0.28028-0.2085-0.18115-0.07178-0.34863-0.03076z"
        fill="#59606E"
      ></path>
    </svg>
    <div
      data-pencil-name="SortLabel"
      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
    >
      {{ label }}
    </div>
    <svg
      :class="interactive ? 'sort-chevron' : null"
      data-pencil-name="SortChevron"
      data-icon-name="chevron-down"
      data-icon-set="lucide"
      viewBox="0 0 13.99993896484375 14"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
    >
      <path
        d="M3.34619 4.68945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25977 0.05127 0.08887 1.8628 1.9038 1.81494 1.81152 1.9038 1.8628 0.09229 0.04785 0.25977 0.04785 0.16748 0 0.25635-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
        fill="#8A909C"
      ></path>
    </svg>
    <div
      v-if="interactive"
      class="sort-panel sv-panel"
      data-pencil-name="SortPanel"
      role="listbox"
      aria-label="Sort by"
    >
      <div
        v-for="(opt, i) in options"
        :key="opt.key"
        class="sort-option sv-option"
        :class="{ 'is-active': i === activeIndex, 'is-selected': opt.key === selectedKey }"
        data-pencil-name="SortOption"
        role="option"
        :aria-selected="opt.key === selectedKey"
        @click.stop="emit('choose', opt.key)"
      >
        <span>{{ opt.label }}</span>
        <svg
          v-if="opt.key === selectedKey"
          class="sort-check"
          data-pencil-name="SortCheck"
          viewBox="0 0 14 14"
          width="13"
          height="13"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          style="box-sizing: border-box; flex-shrink: 0"
        >
          <path d="M2.5 7.5 5.5 10.5 11.5 3.5" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 排序控件：下拉面板层级高于结果区，浮于头部下方
   外框/选项行的通用外观来自 shared.css（.sv-panel / .sv-option），此处仅保留私有定位 */
.sort-menu {
  position: relative;
  transition:
    border-color var(--sv-dur-fast) var(--sv-ease-out),
    background-color var(--sv-dur-fast) var(--sv-ease-out);
}
.sort-menu:hover {
  border-color: var(--sv-line-2) !important;
}
.sort-menu.is-open {
  border-color: var(--sv-accent) !important;
}
.sort-chevron {
  transition: transform var(--sv-dur-fast) var(--sv-ease-out);
}
.sort-menu.is-open .sort-chevron {
  transform: rotate(180deg);
}
.sort-panel {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 50;
  display: none;
  min-width: 168px;
  padding: 5px;
}
.sort-menu.is-open .sort-panel {
  display: flex;
}
.sort-check {
  color: var(--sv-accent);
}
</style>
