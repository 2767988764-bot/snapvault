<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'

defineProps({ open: { type: Boolean, default: false } })
defineEmits(['close'])

// ---- 分类选中项：active pill 180ms 滑移 ----
const activeNav = ref(0) // 默认 All Documents（与设计稿一致）
const navGroupRef = ref(null)
const navRowRefs = ref([])
const pill = reactive({ y: 0, h: 0 })

// 用 offsetTop/offsetHeight 而非 getBoundingClientRect：侧栏弹入时祖先有 scale(0.15→1) 变换，
// rect 会被缩放，offset* 是布局值，不受 transform 影响，量测随时有效。
function measurePill() {
  const el = navRowRefs.value[activeNav.value]
  if (!el) return
  pill.y = el.offsetTop
  pill.h = el.offsetHeight
}

const pillStyle = computed(() => ({
  transform: `translateY(${pill.y}px)`,
  height: `${pill.h}px`,
}))

let ro = null
onMounted(async () => {
  await nextTick()
  measurePill()
  // 字体异步加载会改变行高，加载完成后重测
  if (document.fonts?.ready) document.fonts.ready.then(() => measurePill())
  if (window.ResizeObserver && navGroupRef.value) {
    ro = new ResizeObserver(() => measurePill())
    ro.observe(navGroupRef.value)
  }
})
onBeforeUnmount(() => ro?.disconnect())

watch(activeNav, async () => {
  await nextTick()
  measurePill()
})

// ---- 文件夹树展开 / 折叠 ----
const FOLDER_CHILDREN = {
  Research: ['Papers', 'Datasets', 'Notes'],
  Courses: ['Computer Vision', 'NLP'],
  Projects: ['SnapVault'],
  Personal: ['Receipts'],
}
const openFolders = ref([])

function isFolderOpen(name) {
  return openFolders.value.includes(name)
}
function toggleFolder(name) {
  openFolders.value = isFolderOpen(name)
    ? openFolders.value.filter((n) => n !== name)
    : [...openFolders.value, name]
}
</script>

<template>
  <div
    class="sidebar-panel"
    data-pencil-name="SidebarPanel"
    :class="{ open }"
  >
    <!-- PanelHeader：对齐设计稿 Sdu9Z（14,16,272,34） -->
    <div class="panel-header" data-pencil-name="PanelHeader">
      <div class="panel-title" data-pencil-name="PanelTitle">Library</div>
      <button class="panel-close" data-pencil-name="PanelClose" aria-label="Close sidebar" @click="$emit('close')">
        <svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l6 6M10 4l-6 6"/></svg>
      </button>
    </div>
    <!-- SidebarContent：原 LibraryMainView Sidebar 子树（NavRow×5 / FOLDERS / FolderRow×4 / TAGS / TagRow×6 / ManageRow） -->
          <div
            data-pencil-name="SidebarContent"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; gap: 2px; flex: 1 1 0; min-height: 0; justify-content: flex-start; width: 240px"
          >
            <div ref="navGroupRef" class="nav-group">
              <div class="nav-pill" :style="pillStyle"></div>
              <div
                class="nav-row"
                :class="{ 'is-active': activeNav === 0 }"
                :ref="(el) => (navRowRefs[0] = el)"
                data-pencil-name="NavRow"
                data-clickable
                @click="activeNav = 0"
                style="align-items: center; background-color: #E7EDFC; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 9px 12px; width: 100%"
              >
                <svg
                  data-pencil-name="NavIcon"
                  data-icon-name="layout-grid"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M2.03027 1.20313q-0.22559 0.07178-0.42724 0.23242-0.20166 0.16064-0.30078 0.36914l-0.02735 0.03076q-0.05811 0.12305-0.07177 0.2085-0.02734 0.12646-0.02735 0.44775l0 1.04932 0 1.66796q0 0.24951 0.02735 0.34864 0.07178 0.28027 0.32128 0.51953 0.11279 0.10938 0.22559 0.18115 0.11279 0.06836 0.2666 0.11279l0.12647 0.04102 3.06591 0q0.24951-0.01367 0.33497-0.02734 0.30762-0.08545 0.52978-0.30762 0.22559-0.22559 0.31104-0.5332 0.01367-0.08545 0.02734-0.33497l0-3.06591-0.04102-0.12647q-0.04443-0.16748-0.11621-0.27344-0.06836-0.10596-0.1914-0.23242-0.15381-0.15381-0.29395-0.22217l-0.01709-0.01367q-0.12305-0.05811-0.22217-0.07178-0.12646-0.02734-0.47509-0.02734l-1.14844 0-1.52783 0q-0.24951 0.01367-0.34864 0.02734z m6.43946-0.00001q-0.28027 0.05811-0.53321 0.30762-0.12305 0.12646-0.19482 0.23242-0.06836 0.10596-0.11279 0.27344l-0.04102 0.12647 0 3.06591q0.01367 0.2666 0.02734 0.33497 0.08545 0.30762 0.30762 0.5332 0.22559 0.22217 0.5332 0.30762 0.06836 0.01367 0.33497 0.02734l3.06591 0 0.12647-0.04102q0.16748-0.04443 0.27344-0.11279 0.10596-0.07178 0.23242-0.19482 0.23584-0.23926 0.30761-0.53321 0.02734-0.12646 0.03418-1.74316 0.00684-1.6167-0.03418-1.72949-0.07178-0.30762-0.30419-0.53662-0.229-0.23242-0.53663-0.31788-0.09912-0.02734-0.33496-0.02734l-1.41504 0q-1.62354 0-1.73632 0.02734z m-3.21973 2.59083l0 1.45605-2.92578 0 0-2.92578 2.92578 0 0 1.46973z m6.42578 0l0 1.45605-2.92578 0 0-2.92578 2.92578 0 0 1.46973z m-9.47803 3.79394q-0.39307 0.04102-0.68701 0.34863-0.23584 0.22559-0.30761 0.50586-0.02734 0.09912-0.02735 0.34864l0 1.41503 0 1.30225q0 0.32129 0.02735 0.44775 0.01367 0.08545 0.07177 0.2085l0.02735 0.03076q0.09912 0.22217 0.30761 0.38281 0.2085 0.16065 0.44776 0.21875 0.11279 0.04102 1.72949 0.03418 1.6167-0.00684 1.74316-0.03418 0.29395-0.07178 0.53321-0.30761 0.12305-0.12646 0.1914-0.23242 0.07178-0.10596 0.11621-0.27344l0.04102-0.12647 0-3.06591q-0.01367-0.24951-0.02734-0.33497-0.08545-0.30762-0.31788-0.52978-0.229-0.22559-0.52294-0.31104-0.06836-0.01367-0.34864-0.02734l-1.31592 0q-1.55518-0.01367-1.68164 0z m6.42579 0q-0.22217 0.02734-0.37598 0.11279-0.23926 0.11279-0.3999 0.30762-0.16064 0.19482-0.23243 0.44775-0.01367 0.06836-0.02734 0.33497l0 3.06591 0.04102 0.12647q0.04443 0.16748 0.11279 0.27344 0.07178 0.10596 0.19482 0.23242 0.23926 0.23584 0.53321 0.30761 0.12646 0.02734 1.74316 0.03418 1.6167 0.00684 1.72949-0.03418 0.23926-0.0581 0.44776-0.21875 0.2085-0.16065 0.30761-0.38281l0.02735-0.03076q0.05811-0.12305 0.07178-0.2085 0.02734-0.12646 0.02734-0.44775l0-2.59082q0-0.33496-0.02734-0.46143-0.01367-0.08545-0.07178-0.20849l-0.01367-0.03076q-0.06836-0.12646-0.22217-0.28028-0.15381-0.15381-0.29395-0.22216l-0.03076-0.01368q-0.12305-0.07178-0.2085-0.08545-0.11279-0.01367-0.4204-0.02734l-1.23047 0q-1.56885 0-1.68164 0.01367l0-0.01367z m-3.37354 2.61816l0 1.46973-2.92578 0 0-2.92578 2.92578 0 0 1.45605z m6.42578 0l0 1.46973-2.92578 0 0-2.92578 2.92578 0 0 1.45605z"
                    fill="#2B5BD7"
                  ></path>
                </svg>
                <div
                  data-pencil-name="NavLabel"
                  style='box-sizing: border-box; color: #2B5BD7; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  All Documents
                </div>
                <div
                  data-pencil-name="NavCount"
                  style='box-sizing: border-box; color: #2B5BD7; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  128
                </div>
              </div>
              <div
                class="nav-row"
                :class="{ 'is-active': activeNav === 1 }"
                :ref="(el) => (navRowRefs[1] = el)"
                data-pencil-name="NavRow"
                data-clickable
                @click="activeNav = 1"
                style="align-items: center; background-color: #FFFFFF00; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 9px 12px; width: 100%"
              >
                <svg
                  data-pencil-name="NavIcon"
                  data-icon-name="inbox"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M3.9751 1.76367q-0.34863 0.05469-0.68018 0.25977-0.32813 0.20166-0.50928 0.48193-0.09912 0.14014-1.13476 2.22852-1.03564 2.08496-1.05615 2.16357-0.02051 0.0752-0.00684 1.96533l0 1.59619q0.01367 0.32129 0.02734 0.40332 0.12646 0.5332 0.50928 0.89893 0.38623 0.36231 0.91944 0.46143 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.46143 0.38623-0.36572 0.5127-0.89893 0.01367-0.08203 0.02734-0.40332l0-1.59619q0.01367-1.89014-0.00684-1.96533-0.02051-0.07861-1.05615-2.16357-1.03564-2.08838-1.12109-2.21485-0.19482-0.29395-0.53321-0.50244-0.33496-0.21191-0.68359-0.25293-0.14014-0.01367-3.0249-0.01367-2.88477 0-3.01123 0.01367z m6.00537 1.18945q0.09912 0.04443 0.18457 0.12647 0.06836 0.05811 0.19482 0.3042 0.12646 0.24268 0.71436 1.39111 0.81006 1.62354 0.81006 1.63721 0 0.01367-1.32959 0.01367l-1.16211 0q-0.19482 0-0.28028 0.0376-0.08203 0.03418-0.16064 0.10596-0.0752 0.06836-0.58105 0.8374l-0.51612 0.76904-1.70898 0-0.51612-0.76904q-0.50586-0.76904-0.58447-0.8374-0.0752-0.07178-0.16064-0.10596-0.08203-0.0376-0.27686-0.0376l-1.16211 0q-1.33301 0-1.33301-0.01367 0-0.01367 0.81348-1.63721 0.58789-1.14844 0.71436-1.39111 0.12646-0.24609 0.19482-0.3042 0.08545-0.08203 0.16065-0.10938 0.07861-0.03076 0.47168-0.04443l2.53271 0 2.53271 0q0.37939 0 0.44776 0.02735z m-5.10986 5.39014q0.50586 0.76904 0.58105 0.84082 0.07861 0.06836 0.16064 0.10596 0.08545 0.03418 0.26661 0.03418l1.12109 0 1.12109 0q0.18115 0 0.26319-0.03418 0.08545-0.0376 0.16064-0.10596 0.07861-0.07178 0.58447-0.84082l0.51612-0.76904 2.60449 0-0.01367 3.07959-0.04102 0.09912q-0.11279 0.2085-0.3247 0.29395l-0.09571 0.02734-9.5498 0-0.09571-0.02734q-0.21191-0.08545-0.3247-0.29395l-0.04102-0.09912-0.01367-3.07959 2.60449 0 0.51612 0.76904z"
                    fill="#59606E"
                  ></path>
                </svg>
                <div
                  data-pencil-name="NavLabel"
                  style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  Inbox
                </div>
                <div
                  data-pencil-name="NavCount"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  4
                </div>
              </div>
              <div
                class="nav-row"
                :class="{ 'is-active': activeNav === 2 }"
                :ref="(el) => (navRowRefs[2] = el)"
                data-pencil-name="NavRow"
                data-clickable
                @click="activeNav = 2"
                style="align-items: center; background-color: #FFFFFF00; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 9px 12px; width: 100%"
              >
                <svg
                  data-pencil-name="NavIcon"
                  data-icon-name="history"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M1.59619 1.18945q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 3.26074 0.04102 0.07178q0.09912 0.19482 0.29394 0.28027l0.08545 0.04102 2.81299 0.01367q0.32129-0.01367 0.43408-0.02734 0.07178-0.01367 0.15381-0.07178l0.01367-0.01367q0.1709-0.12646 0.21875-0.31446 0.04785-0.18799-0.03076-0.37597-0.0752-0.19141-0.25635-0.28711-0.08545-0.05811-0.2666-0.07178-0.18115-0.01367-0.76904-0.01367l-0.7417 0 0.23584-0.22559q0.7417-0.72803 1.58252-1.09033 0.96729-0.42041 2.03027-0.42041 0.93994 0 1.76367 0.34863 1.17578 0.49219 1.93799 1.49366 0.76563 1.00146 0.91944 2.2456 0.02734 0.22559 0.02734 0.56738 0 0.3418-0.02734 0.56739-0.15381 1.2749-0.93995 2.29004-0.78271 1.01172-1.97216 1.49023-0.81348 0.32129-1.72266 0.32129-0.28027 0-0.46143-0.01367-0.18115-0.01367-0.46142-0.07178-0.88184-0.18115-1.64746-0.68359-0.76221-0.50586-1.28174-1.2544-0.51611-0.74854-0.71094-1.64404-0.08545-0.44775-0.09228-0.77588-0.00684-0.33154-0.0752-0.47168-0.08545-0.16748-0.2666-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.06836 0.15381-0.03418 0.65283 0.03418 0.49561 0.14697 0.9878 0.29395 1.18945 1.03564 2.15673 0.7417 0.96387 1.80469 1.5586 1.06641 0.59473 2.29688 0.70752 0.18457 0.01367 0.5332 0.01367 0.34863 0 0.5332-0.01367 1.38428-0.12646 2.54639-0.86817 1.14844-0.71436 1.86279-1.86279 0.7417-1.16211 0.86817-2.54639 0.01367-0.18457 0.01367-0.5332 0-0.34863-0.01367-0.5332-0.14014-1.52441-1.01514-2.78223-0.875-1.26123-2.2627-1.93457-0.58789-0.28027-1.14843-0.42041-0.55713-0.14014-1.2168-0.15381-1.09033-0.02734-2.1123 0.30762-0.71436 0.23926-1.30225 0.60498-0.58789 0.3623-1.14844 0.90918l-0.28027 0.26318 0-1.67822-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m5.26367 2.32422q-0.12646 0.02734-0.23925 0.1333-0.10938 0.10596-0.16749 0.23242l-0.02734 0.09571 0 3.19238 0.04102 0.08545q0.05811 0.0957 0.12646 0.15381 0.08545 0.06836 0.36572 0.22217l0.90918 0.46142q1.20312 0.60498 1.30225 0.63233 0.23926 0.06836 0.45459-0.05469 0.21533-0.12646 0.27344-0.3794 0.04102-0.18115-0.04102-0.37939-0.04443-0.0957-0.11621-0.15039-0.06836-0.05811-0.31787-0.18457l-1.83545-0.93652-0.01367-2.70362-0.04102-0.09912q-0.04443-0.08203-0.12304-0.15723-0.0752-0.07861-0.15381-0.11279-0.0752-0.0376-0.19483-0.05127-0.11621-0.01367-0.20166 0z"
                    fill="#59606E"
                  ></path>
                </svg>
                <div
                  data-pencil-name="NavLabel"
                  style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  Recent
                </div>
                <div
                  data-pencil-name="NavCount"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  12
                </div>
              </div>
              <div
                class="nav-row"
                :class="{ 'is-active': activeNav === 3 }"
                :ref="(el) => (navRowRefs[3] = el)"
                data-pencil-name="NavRow"
                data-clickable
                @click="activeNav = 3"
                style="align-items: center; background-color: #FFFFFF00; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 9px 12px; width: 100%"
              >
                <svg
                  data-pencil-name="NavIcon"
                  data-icon-name="star"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M6.87354 0.60156q-0.28027 0.02734-0.50245 0.25293-0.08545 0.08203-0.13672 0.16748-0.04785 0.08545-0.21533 0.43408-0.86816 1.75-1.05615 2.11573-0.18799 0.3623-0.27344 0.44092-0.08203 0.0752-0.17431 0.11279-0.09229 0.03418-1.62012 0.25976-1.52441 0.22217-1.63379 0.24952-0.22559 0.05469-0.40674 0.23584-0.11279 0.11279-0.1709 0.21191-0.05469 0.09912-0.08886 0.25293-0.03418 0.15381 0.00683 0.32812 0.04102 0.17432 0.14014 0.32813 0.04102 0.08545 1.20312 1.20312l0.1128 0.09913q0.62891 0.62891 0.81347 0.79638 0.23584 0.25293 0.29395 0.35205 0.04102 0.08203 0.05469 0.2085l0 0.01367q0 0.09912-0.04102 0.39307-0.04102 0.29395-0.22559 1.28857-0.24951 1.55518-0.24951 1.63721 0 0.35205 0.26319 0.6289 0.19824 0.18457 0.44775 0.23926 0.18457 0.04102 0.36572 0 0.09912-0.02734 0.28028-0.11279l1.66455-0.86817q0.81348-0.43408 0.96728-0.50244 0.15381-0.07178 0.23926-0.07177l0.04102-0.01368q0.14014 0 0.24951 0.04444 0.11279 0.04102 1.37402 0.71435l1.34326 0.69727q0.18115 0.08545 0.28028 0.11279 0.18115 0.04102 0.36572 0 0.26318-0.05469 0.44775-0.23926 0.26318-0.27686 0.26319-0.6289 0-0.0957-0.24952-1.62354-0.18457-0.99463-0.22558-1.28857-0.04102-0.29395-0.04102-0.38965l0-0.03076q0.01367-0.12646 0.05469-0.19483 0.0581-0.11279 0.29395-0.34863 0.16748-0.1709 0.7998-0.78613l0.12647-0.12647q1.14844-1.11768 1.21679-1.21679 0.14014-0.22559 0.14014-0.48194 0-0.25977-0.14014-0.48535-0.08545-0.14014-0.23926-0.24267-0.15381-0.10596-0.32128-0.14698-0.08203-0.01367-1.60987-0.23584-1.52441-0.22559-1.6167-0.25976-0.09229-0.0376-0.17773-0.11279-0.08203-0.07861-0.26318-0.42725-0.18115-0.35205-1.04932-2.11572-0.18115-0.34863-0.23242-0.44092-0.04785-0.09229-0.1333-0.17432-0.22217-0.22559-0.4751-0.25293l-0.12647-0.01367q-0.04102 0-0.1538 0.01367z m0.70068 2.65918q0.57422 1.14844 0.64258 1.26123 0.07178 0.11279 0.25293 0.28711 0.18115 0.17432 0.29394 0.25977 0.25293 0.14014 0.5332 0.20849 0.14014 0.04102 1.35694 0.21875 1.2168 0.17432 1.24756 0.18799 0.01367 0-0.03077 0.04102l-0.29394 0.30761-0.8374 0.81348q-0.70068 0.68701-0.77246 0.78272-0.2085 0.29395-0.32129 0.68701-0.02734 0.11279-0.02735 0.40674l0 0.28027 0.2085 1.23047q0.22559 1.23389 0.21875 1.24072-0.00684 0.00684-0.79297-0.41357l-0.05469-0.02735q-0.96729-0.50586-1.23046-0.64599-0.37939-0.18115-0.56055-0.22217-0.14014-0.04443-0.39307-0.04444l-0.02734 0q-0.25293 0-0.39307 0.04444-0.18115 0.04102-0.56055 0.22217-0.26318 0.14014-1.23046 0.64599l-0.05469 0.02735q-0.78613 0.42041-0.79297 0.41357-0.00684-0.00684 0.21875-1.24072l0.2085-1.23047 0-0.29395q0-0.28027-0.02735-0.39306-0.11279-0.39307-0.32129-0.68701-0.07178-0.0957-0.75879-0.76905l-1.02197-0.99463q-0.16748-0.16748-0.15381-0.18115 0.01367-0.01367 1.24414-0.18799 1.23389-0.17773 1.36035-0.21875 0.36572-0.08203 0.65967-0.3042 0.29395-0.22559 0.48877-0.55029 0.05811-0.10938 0.59473-1.20654 0.54004-1.10059 0.55371-1.10059 0.01367 0 0.57422 1.14502z"
                    fill="#59606E"
                  ></path>
                </svg>
                <div
                  data-pencil-name="NavLabel"
                  style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  Favorites
                </div>
                <div
                  data-pencil-name="NavCount"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  6
                </div>
              </div>
              <div
                class="nav-row"
                :class="{ 'is-active': activeNav === 4 }"
                :ref="(el) => (navRowRefs[4] = el)"
                data-pencil-name="NavRow"
                data-clickable
                @click="activeNav = 4"
                style="align-items: center; background-color: #FFFFFF00; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 9px 12px; width: 100%"
              >
                <svg
                  data-pencil-name="NavIcon"
                  data-icon-name="circle-alert"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-0.75879 2.31054q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.25635l0 2.46435 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-2.33789q0-0.2666-0.02051-0.3418-0.02051-0.07861-0.07861-0.16064l-0.01367-0.01367q-0.09912-0.12646-0.2461-0.18116-0.14697-0.05811-0.31445-0.03076z m-0.05469 4.67578q-0.2085 0.05811-0.32129 0.22559-0.11279 0.16748-0.09912 0.37256 0.01367 0.20166 0.15381 0.35547 0.08545 0.08203 0.15381 0.12646 0.21191 0.0957 0.42041 0.03418 0.2085-0.06494 0.33496-0.24609 0.12646-0.18115 0.08545-0.40674-0.01367-0.10938-0.05127-0.17773-0.03418-0.07178-0.11963-0.14014-0.08203-0.07178-0.16064-0.11279-0.0752-0.04443-0.19483-0.05127-0.11621-0.00684-0.20166 0.0205z"
                    fill="#59606E"
                  ></path>
                </svg>
                <div
                  data-pencil-name="NavLabel"
                  style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  Needs Review
                </div>
                <div
                  data-pencil-name="NavCount"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  3
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Gap"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 26px; justify-content: flex-start; width: 1px"
            ></div>
            <div
              data-pencil-name="GroupLabel"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 8px 12px 4px 12px; width: 100%"
            >
              <div
                data-pencil-name="GroupLabelText"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 1.4px; line-height: normal; text-align: left; white-space: nowrap'
              >
                FOLDERS
              </div>
            </div>
            <div
              class="folder"
              :class="{ 'is-open': isFolderOpen('Research') }"
              data-pencil-name="FolderRow"
              data-clickable
              @click="toggleFolder('Research')"
              style="align-items: center; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: 100%"
            >
              <svg
                data-pencil-name="Chevron"
                :class="{ 'is-open': isFolderOpen('Research') }"
                data-icon-name="chevron-right"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#8A909C"
                ></path>
              </svg>
              <svg
                data-pencil-name="FolderIcon"
                data-icon-name="folder"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="FolderName"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                Research
              </div>
              <div
                data-pencil-name="FolderCount"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                38
              </div>
            </div>
            <div class="folder-children">
              <div class="fc-clip">
                <div
                  v-for="(child, ci) in FOLDER_CHILDREN['Research']"
                  :key="child"
                  class="fc-item"
                  :style="{ animationDelay: (ci * 40) + 'ms' }"
                >{{ child }}</div>
              </div>
            </div>
            <div
              class="folder"
              :class="{ 'is-open': isFolderOpen('Courses') }"
              data-pencil-name="FolderRow"
              data-clickable
              @click="toggleFolder('Courses')"
              style="align-items: center; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: 100%"
            >
              <svg
                data-pencil-name="Chevron"
                :class="{ 'is-open': isFolderOpen('Courses') }"
                data-icon-name="chevron-right"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#8A909C"
                ></path>
              </svg>
              <svg
                data-pencil-name="FolderIcon"
                data-icon-name="folder"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="FolderName"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                Courses
              </div>
              <div
                data-pencil-name="FolderCount"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                24
              </div>
            </div>
            <div class="folder-children">
              <div class="fc-clip">
                <div
                  v-for="(child, ci) in FOLDER_CHILDREN['Courses']"
                  :key="child"
                  class="fc-item"
                  :style="{ animationDelay: (ci * 40) + 'ms' }"
                >{{ child }}</div>
              </div>
            </div>
            <div
              class="folder"
              :class="{ 'is-open': isFolderOpen('Projects') }"
              data-pencil-name="FolderRow"
              data-clickable
              @click="toggleFolder('Projects')"
              style="align-items: center; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: 100%"
            >
              <svg
                data-pencil-name="Chevron"
                :class="{ 'is-open': isFolderOpen('Projects') }"
                data-icon-name="chevron-right"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#8A909C"
                ></path>
              </svg>
              <svg
                data-pencil-name="FolderIcon"
                data-icon-name="folder"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="FolderName"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                Projects
              </div>
              <div
                data-pencil-name="FolderCount"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                12
              </div>
            </div>
            <div class="folder-children">
              <div class="fc-clip">
                <div
                  v-for="(child, ci) in FOLDER_CHILDREN['Projects']"
                  :key="child"
                  class="fc-item"
                  :style="{ animationDelay: (ci * 40) + 'ms' }"
                >{{ child }}</div>
              </div>
            </div>
            <div
              class="folder"
              :class="{ 'is-open': isFolderOpen('Personal') }"
              data-pencil-name="FolderRow"
              data-clickable
              @click="toggleFolder('Personal')"
              style="align-items: center; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: 100%"
            >
              <svg
                data-pencil-name="Chevron"
                :class="{ 'is-open': isFolderOpen('Personal') }"
                data-icon-name="chevron-right"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#8A909C"
                ></path>
              </svg>
              <svg
                data-pencil-name="FolderIcon"
                data-icon-name="folder"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="FolderName"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                Personal
              </div>
              <div
                data-pencil-name="FolderCount"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                7
              </div>
            </div>
            <div class="folder-children">
              <div class="fc-clip">
                <div
                  v-for="(child, ci) in FOLDER_CHILDREN['Personal']"
                  :key="child"
                  class="fc-item"
                  :style="{ animationDelay: (ci * 40) + 'ms' }"
                >{{ child }}</div>
              </div>
            </div>
            <div
              data-pencil-name="Gap"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 26px; justify-content: flex-start; width: 1px"
            ></div>
            <div
              data-pencil-name="GroupLabel"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 8px 12px 4px 12px; width: 100%"
            >
              <div
                data-pencil-name="GroupLabelText"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 1.4px; line-height: normal; text-align: left; white-space: nowrap'
              >
                TAGS
              </div>
            </div>
            <div
              data-pencil-name="TagRow"
              style="align-items: center; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: 100%"
            >
              <div
                data-pencil-name="TagDot"
                style="background-color: #2B5BD7; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 9px; width: 9px"
              ></div>
              <div
                data-pencil-name="TagName"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                computer-vision
              </div>
              <div
                data-pencil-name="TagCount"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                18
              </div>
            </div>
            <div
              data-pencil-name="TagRow"
              style="align-items: center; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: 100%"
            >
              <div
                data-pencil-name="TagDot"
                style="background-color: #177245; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 9px; width: 9px"
              ></div>
              <div
                data-pencil-name="TagName"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                ITSE
              </div>
              <div
                data-pencil-name="TagCount"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                22
              </div>
            </div>
            <div
              data-pencil-name="TagRow"
              style="align-items: center; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: 100%"
            >
              <div
                data-pencil-name="TagDot"
                style="background-color: #6B4FBB; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 9px; width: 9px"
              ></div>
              <div
                data-pencil-name="TagName"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                lecture
              </div>
              <div
                data-pencil-name="TagCount"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                14
              </div>
            </div>
            <div
              data-pencil-name="TagRow"
              style="align-items: center; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: 100%"
            >
              <div
                data-pencil-name="TagDot"
                style="background-color: #B3261E; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 9px; width: 9px"
              ></div>
              <div
                data-pencil-name="TagName"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                to-read
              </div>
              <div
                data-pencil-name="TagCount"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                9
              </div>
            </div>
            <div
              data-pencil-name="TagRow"
              style="align-items: center; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: 100%"
            >
              <div
                data-pencil-name="TagDot"
                style="background-color: #8A5A00; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 9px; width: 9px"
              ></div>
              <div
                data-pencil-name="TagName"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                2026
              </div>
              <div
                data-pencil-name="TagCount"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                31
              </div>
            </div>
            <div
              data-pencil-name="TagRow"
              style="align-items: center; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: 100%"
            >
              <div
                data-pencil-name="TagDot"
                style="background-color: #0E6E8C; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 9px; width: 9px"
              ></div>
              <div
                data-pencil-name="TagName"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                research
              </div>
              <div
                data-pencil-name="TagCount"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                12
              </div>
            </div>
            <div
              data-pencil-name="Spacer"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 1px"
            ></div>
            <div
              data-pencil-name="ManageRow"
              style="align-items: center; border-radius: 10px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 9px 12px; width: 100%"
            >
              <svg
                data-pencil-name="ManageIcon"
                data-icon-name="settings-2"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M3.80762 1.76367q-0.29395 0.04102-0.60157 0.16748-0.30762 0.12646-0.56054 0.30762-0.18115 0.14014-0.36572 0.36572-0.18115 0.22217-0.27686 0.43408-0.35205 0.70068-0.21191 1.47657 0.14014 0.77588 0.72802 1.29541 0.50586 0.44775 1.14844 0.56738 0.646 0.11963 1.2749-0.1333 0.46143-0.16748 0.82373-0.56055 0.36572-0.39307 0.51953-0.85449l0.05469-0.15381 2.38233 0q2.36523 0 2.46435-0.02734 0.23584-0.04102 0.36914-0.23584 0.1333-0.19824 0.09229-0.4375-0.01367-0.0957-0.05127-0.16406-0.03418-0.07178-0.11279-0.14014-0.0752-0.07178-0.15723-0.11621l-0.09912-0.04102-4.8877-0.01367-0.04101-0.14014q-0.04102-0.14014-0.14014-0.32129-0.32129-0.65967-0.96729-1.00146-0.64258-0.3418-1.38427-0.27344z m0.64599 1.20313q0.23584 0.08545 0.4375 0.29052 0.20508 0.20166 0.3042 0.46827 0.02734 0.08203 0.03418 0.14697 0.00684 0.06152 0.00684 0.20166 0 0.19482-0.02051 0.30078-0.02051 0.10596-0.10596 0.24609-0.05469 0.10938-0.16748 0.23584-0.11279 0.12646-0.21191 0.19825-0.22217 0.15381-0.48877 0.18798-0.2666 0.03418-0.52637-0.04785-0.25635-0.08545-0.46142-0.28711-0.20166-0.20508-0.28711-0.45459-0.02734-0.12646-0.04102-0.30761-0.01367-0.18457 0.02734-0.32471 0.05811-0.30762 0.28711-0.54346 0.23242-0.23926 0.54004-0.32471 0.12646-0.02734 0.32813-0.02734 0.20508 0 0.34521 0.04102z m5.27735 4.63476q-0.70068 0.04102-1.26123 0.49219-0.56055 0.44775-0.76905 1.104l-0.04101 0.12647-4.87403 0.01367-0.09912 0.04102q-0.23584 0.11279-0.32129 0.35205-0.08203 0.23584 0.02735 0.46142 0.04443 0.06836 0.11963 0.14014 0.07861 0.06836 0.16064 0.11279l0.09912 0.04102 4.8877 0.01367 0.04101 0.14014q0.0957 0.29395 0.29395 0.58789 0.32129 0.4751 0.81689 0.7417 0.49902 0.2666 1.06641 0.28027 0.56738 0.01367 1.0835-0.25293 0.30762-0.15381 0.58105-0.41016 0.27344-0.25977 0.44092-0.58447 0.32129-0.61523 0.24951-1.30566-0.06836-0.69385-0.50244-1.24073-0.29395-0.36572-0.72119-0.59472-0.42383-0.23242-0.84424-0.25977l-0.21191-0.01367q-0.05469 0-0.22217 0.01367z m0.56054 1.20313q0.24951 0.09912 0.44776 0.29394 0.16748 0.1709 0.24267 0.34522 0.07861 0.17432 0.09229 0.41357 0.01367 0.32129-0.12647 0.60156-0.06836 0.15381-0.20849 0.28711-0.14014 0.1333-0.29395 0.21192-0.15381 0.0752-0.27344 0.0957-0.11963 0.02051-0.30078 0.02051-0.25293-0.01367-0.42724-0.08887-0.17432-0.07861-0.34522-0.24609-0.19482-0.19824-0.29394-0.46485-0.02734-0.08203-0.03418-0.14355-0.00684-0.06494-0.00684-0.20508 0-0.19482 0.02051-0.30078 0.02051-0.10596 0.10596-0.25977 0.05469-0.11279 0.18115-0.24267 0.12646-0.1333 0.22558-0.19141 0.2085-0.12646 0.40674-0.16748 0.10938-0.01367 0.28369 0 0.17773 0.01367 0.3042 0.04102z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="ManageText"
                style='box-sizing: border-box; color: #59606E; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                Manage folders &amp; tags
              </div>
            </div>
          </div>
  </div>
</template>

<style scoped>
.sidebar-panel {
  position: absolute;
  left: 0;
  top: 64px; /* pulled-layer 内局部坐标：视觉 = barTop + 64，恒在拉条下方 */
  bottom: 0;
  width: 240px;
  z-index: 6;
  background: #FFFFFF;
  border-right: 1px solid #E3E5EA;
  box-shadow: 4px 0 18px rgba(22, 24, 29, 0.06);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* 两段式弹入：从 ViewSwitch（layer 局部 8,382）放大渐变；与拉条位移无关 */
  transform: scale(0.15);
  opacity: 0;
  transform-origin: 8px 318px;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease;
}
.sidebar-panel.open {
  transform: scale(1);
  opacity: 1;
}
.panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  height: 34px;
  padding: 0 12px 0 14px;
  border-bottom: 1px solid #E3E5EA;
}
.panel-title {
  font-family: "Instrument Sans", system-ui, sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #16181D;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}
.panel-close {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border: none;
  background: transparent;
  border-radius: 7px;
  cursor: pointer;
  color: #59606E;
}
.panel-close:hover {
  background: #EEEFF2;
  color: #16181D;
}
.sidebar-panel [data-pencil-name="SidebarContent"] {
  overflow-y: auto;
}

/* ---- 分类选中项：active pill 180ms 滑移 ---- */
.nav-group {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 2px;
  width: 100%;
}
.nav-pill {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  background: var(--sv-accent-soft);
  border-radius: var(--sv-radius-md);
  pointer-events: none;
  transition:
    transform var(--sv-dur-move) ease,
    height var(--sv-dur-move) ease;
}
[data-pencil-name="NavRow"] {
  position: relative;
  z-index: 1;
  /* 激活背景改由 .nav-pill 承担（内联背景需 !important 覆盖） */
  background-color: transparent !important;
}
/* 颜色/字重改由状态类驱动，避免内联写死在第一个 NavRow 上 */
[data-pencil-name="NavRow"] [data-pencil-name="NavLabel"],
[data-pencil-name="NavRow"] [data-pencil-name="NavCount"] {
  color: var(--sv-ink-2) !important;
}
[data-pencil-name="NavRow"] [data-pencil-name="NavLabel"] {
  color: var(--sv-ink) !important;
  font-weight: 500 !important;
}
[data-pencil-name="NavRow"] [data-pencil-name="NavCount"] {
  color: var(--sv-ink-3) !important;
}
[data-pencil-name="NavRow"].is-active [data-pencil-name="NavLabel"],
[data-pencil-name="NavRow"].is-active [data-pencil-name="NavCount"] {
  color: var(--sv-accent) !important;
}
[data-pencil-name="NavRow"].is-active [data-pencil-name="NavLabel"] {
  font-weight: 600 !important;
}
[data-pencil-name="NavRow"] [data-pencil-name="NavIcon"] path {
  fill: var(--sv-ink-2);
}
[data-pencil-name="NavRow"].is-active [data-pencil-name="NavIcon"] path {
  fill: var(--sv-accent);
}

/* ---- 文件夹树展开 / 折叠：高度 250ms + chevron 150ms + 子项 200ms 错峰淡入 ---- */
.folder-children {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--sv-dur-tree) var(--sv-ease-out);
}
.folder-children > .fc-clip {
  min-height: 0;
  overflow: hidden;
}
.folder.is-open + .folder-children {
  grid-template-rows: 1fr;
}
.folder-children .fc-item {
  padding: 6px 12px 6px 56px; /* 56 = 12 行内边距 + 13 chevron + 8 间距 + 15 图标 + 8 间距，对齐 FolderName */
  font-family: "Instrument Sans", system-ui, sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: var(--sv-ink-2);
  white-space: nowrap;
}
.folder.is-open + .folder-children .fc-item {
  animation: fc-fade-in 200ms ease both;
}
@keyframes fc-fade-in {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ---- 图标 hover：150ms 微缩放 1.05 + 120ms 变深 ---- */
[data-pencil-name$="Icon"],
[data-pencil-name="Chevron"] {
  transition: transform var(--sv-dur-icon) ease;
}
[data-pencil-name$="Icon"]:hover,
[data-pencil-name="Chevron"]:hover {
  transform: scale(1.05);
}
[data-pencil-name="Chevron"].is-open {
  transform: rotate(90deg);
}
[data-pencil-name="Chevron"].is-open:hover {
  transform: rotate(90deg) scale(1.05);
}
[data-pencil-name$="Icon"] path,
[data-pencil-name="Chevron"] path {
  transition: fill var(--sv-dur-fast) ease;
}
[data-pencil-name$="Icon"]:hover path,
[data-pencil-name="Chevron"]:hover path {
  fill: var(--sv-ink);
}
</style>
