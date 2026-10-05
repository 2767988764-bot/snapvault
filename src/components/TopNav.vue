<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useReviewStore } from '@/stores/review'

// 常驻顶部导航：由 App.vue 渲染，跨路由不重挂，激活指示块才能平滑滑移。
const route = useRoute()
const reviewStore = useReviewStore()

// 路由 → 激活项（复刻改造前各页面的高亮结果；scan/settings 页无激活项）
const ACTIVE_BY_PATH = {
  '/home': 'home',
  '/library': 'library',
  '/library-search': 'library',
  '/document-detail': 'library',
  '/review-queue': 'review',
}

const NAV_ITEMS = [
  { key: 'home', pascal: 'Home', label: 'Home', to: '/home' },
  { key: 'library', pascal: 'Library', label: 'Library', to: '/library' },
  { key: 'review', pascal: 'Review', label: 'Review', to: '/review-queue', badge: true },
]

const active = computed(() => ACTIVE_BY_PATH[route.path] ?? null)

const navLinksRef = ref(null)
const navItemRefs = ref([])
const indicator = reactive({ x: 0, y: 0, w: 0, h: 0, visible: false })

function measure() {
  const links = navLinksRef.value
  const index = NAV_ITEMS.findIndex((it) => it.key === active.value)
  const el = index >= 0 ? navItemRefs.value[index] : null
  if (!links || !el) {
    indicator.visible = false
    return
  }
  const linksRect = links.getBoundingClientRect()
  const itemRect = el.getBoundingClientRect()
  if (!itemRect.width) {
    indicator.visible = false
    return
  }
  // 绝对定位包含块是 NavLinks 的 padding box，需扣掉 1px border，避免整体左偏
  indicator.x = itemRect.left - linksRect.left - links.clientLeft
  indicator.y = itemRect.top - linksRect.top - links.clientTop
  indicator.w = itemRect.width
  indicator.h = itemRect.height
  indicator.visible = true
}

const indicatorStyle = computed(() => ({
  transform: `translate(${indicator.x}px, ${indicator.y}px)`,
  width: `${indicator.w}px`,
  height: `${indicator.h}px`,
  opacity: indicator.visible ? 1 : 0,
}))

let ro = null

onMounted(async () => {
  await nextTick()
  measure()
  // 字体异步加载会改变文字宽度，加载完成后重测
  if (document.fonts?.ready) document.fonts.ready.then(() => measure())
  if (window.ResizeObserver && navLinksRef.value) {
    ro = new ResizeObserver(() => measure())
    ro.observe(navLinksRef.value)
  }
})
onBeforeUnmount(() => {
  ro?.disconnect()
})

watch(active, async () => {
  await nextTick()
  measure()
})

// ---- ReviewBadge：数字变化时 400ms 弹性 bounce（一次播放，不残留 transform） ----
const bumpSeq = ref(0)
watch(
  () => reviewStore.count,
  () => {
    bumpSeq.value += 1
  }
)

const isDev = import.meta.env.DEV
</script>

<template>
  <div
    class="sv-icon-hover-scope"
    data-pencil-name="TopNav"
    style="align-items: center; backdrop-filter: blur(15px); background-color: #0C0C0EDA; border-color: #FFFFFF1F; border-style: solid; border-width: 0px 0px 1px 0px; box-shadow: 0px 8px 24px #0000003D; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 64px; justify-content: space-between; left: max(0px, calc(50% - 720px)); padding: 0px 24px; position: fixed; top: 0; width: 1440px; z-index: 80"
  >
    <div
      data-pencil-name="NavLeft"
      style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 24px; height: fit-content; justify-content: flex-start; width: fit-content"
    >
      <div
        data-pencil-name="Brand"
        style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
      >
        <div
          data-pencil-name="Logo"
          style="align-items: center; background-color: #2B5BD7; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 30px; justify-content: center; width: 30px"
        >
          <svg
            data-pencil-name="LogoIcon"
            data-icon-name="scan-line"
            data-icon-set="lucide"
            viewBox="0 0 13.99993896484375 14"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            style="box-sizing: border-box; flex-shrink: 0; height: 17px; width: 17px"
          >
            <path
              d="M2.60449 1.20313q-0.43408 0.07178-0.77929 0.35205-0.3418 0.28027-0.50928 0.66992l-0.01367 0.01367q-0.08545 0.21191-0.10596 0.35205-0.02051 0.14014-0.02051 0.75537l0 0.05469q0 0.57422 0 0.69385 0 0.11963 0.03418 0.21191 0.0376 0.08887 0.11963 0.17432 0.18115 0.18115 0.42041 0.18115 0.23926 0 0.40674-0.16748l0.01367-0.01367q0.08203-0.08545 0.10938-0.14014 0.03076-0.05811 0.03076-0.23926 0.01367-0.11279 0.01367-0.54687l0.01367-0.76905 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 0.76905-0.01367q0.43408 0 0.54687-0.01367 0.18115 0 0.23584-0.02735 0.05811-0.03076 0.14356-0.11279l0.01367-0.01367q0.16748-0.16748 0.16748-0.40674 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.16748-0.12646l-0.08545-0.04102-0.75537 0q-0.76904 0-0.88184 0.02735z m7.12647-0.00001q-0.18457 0.05811-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.16748 0.40674l0.01367 0.01367q0.08545 0.08203 0.14014 0.11279 0.05811 0.02734 0.23926 0.02735 0.11279 0.01367 0.54687 0.01367l0.76904 0.01367 0.09913 0.04102q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 0.76905q0 0.43408 0.01367 0.54687 0 0.18115 0.02735 0.23926 0.03076 0.05469 0.11279 0.14014l0.01367 0.01367q0.12647 0.12646 0.30078 0.16064 0.17432 0.03418 0.34522-0.03418 0.0957-0.05811 0.17773-0.14013 0.08545-0.08545 0.11963-0.17432 0.0376-0.09229 0.0376-0.21191 0-0.11963 0-0.69385 0-0.57422-0.00684-0.7041-0.00684-0.1333-0.03418-0.21875-0.25293-0.81348-0.98095-1.14844-0.14014-0.06836-0.28028-0.11279-0.09912-0.02734-0.23242-0.03418-0.12988-0.00684-0.7041-0.00684-0.7998 0-0.85449 0.02734z m-5.85157 5.25q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14014 0 0.15381 0.04102 0.25293 0.11279 0.2085 0.3247 0.29394l0.09571 0.02735 6.0498 0 0.0957-0.02735q0.21192-0.08545 0.32471-0.29394 0.04102-0.09912 0.04102-0.25293 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.4751-0.0376l-2.65918 0-2.64551 0q-0.42041 0.01367-0.4751 0.02734z m-2.22851 2.89844q-0.15381 0.01367-0.27344 0.11963-0.11621 0.10596-0.17432 0.23242-0.02734 0.08203-0.02734 0.20166 0 0.11963 0 0.69385 0 0.57422 0.00684 0.70752 0.00684 0.12988 0.03418 0.21533 0.29395 0.96729 1.26123 1.26123 0.08545 0.02734 0.21533 0.03418 0.1333 0.00684 0.70752 0.00684 0.57422 0 0.69385 0 0.11963 0 0.20849-0.03418 0.09229-0.0376 0.17432-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394-0.05811-0.02734-0.16406-0.03418-0.10254-0.00684-0.66309-0.01367-0.56055-0.00684-0.68018-0.02051-0.11621-0.01367-0.21533-0.07178-0.14014-0.0957-0.22558-0.26318l-0.04102-0.09913-0.02734-1.34326q0-0.14014-0.02735-0.18457-0.08545-0.18115-0.25976-0.27685-0.17432-0.09912-0.37256-0.05811z m10.5 0q-0.18115 0.02734-0.32129 0.16748-0.08203 0.08545-0.11279 0.15039-0.02734 0.06152-0.02735 0.22901-0.01367 0.12646-0.01367 0.56054l-0.01367 0.75537-0.04102 0.09913q-0.08545 0.16748-0.22558 0.26318-0.09912 0.05811-0.21875 0.07178-0.11621 0.01367-0.67676 0.02051-0.56055 0.00684-0.6665 0.01367-0.10254 0.00684-0.16065 0.03418-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.17432 0.11963 0.09229 0.03418 0.21191 0.03418 0.11963 0 0.69385 0 0.57422 0 0.7041-0.00684 0.1333-0.00684 0.21875-0.03418 0.96729-0.29395 1.26123-1.26123 0.02734-0.08545 0.03418-0.21533 0.00684-0.1333 0.00684-0.69385l0-0.63232q0-0.19482-0.02051-0.26318-0.02051-0.07178-0.09228-0.15381-0.09912-0.12646-0.2461-0.18116-0.14697-0.05811-0.31445-0.03076z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>
        <div
          data-pencil-name="BrandName"
          style="box-sizing: border-box; color: #FFFFFF; font-family: Manrope, system-ui, sans-serif; font-size: 17px; font-style: normal; font-weight: 700; letter-spacing: -0.2px; line-height: normal; text-align: left; white-space: nowrap"
        >
          SnapVault
        </div>
      </div>
      <div
        ref="navLinksRef"
        data-pencil-name="NavLinks"
        style="align-items: center; background-color: #FFFFFF12; border-radius: 14px; border: 1px solid #FFFFFF1A; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 2px; height: fit-content; justify-content: flex-start; padding: 4px; position: relative; width: fit-content"
      >
        <div class="nav-indicator sv-slide-pill" :style="indicatorStyle"></div>
        <div
          v-for="(item, i) in NAV_ITEMS"
          :key="item.key"
          :ref="(el) => (navItemRefs[i] = el)"
          class="nav-item"
          :class="{ 'is-active': active === item.key }"
          :data-pencil-name="`NavItem/${item.pascal}`"
          data-clickable
          @click="$router.push(item.to)"
          :style="`align-items: center; background-color: #FFFFFF00; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: ${item.badge ? 6 : 0}px; height: fit-content; justify-content: flex-start; padding: 7px 12px; position: relative; width: fit-content; z-index: 1`"
        >
          <div
            :data-pencil-name="`NavLabel/${item.pascal}`"
            style='box-sizing: border-box; color: #C7CDD8; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
          >
            {{ item.label }}
          </div>
          <div
            v-if="item.badge"
            :key="`badge-${bumpSeq}`"
            class="review-badge"
            :class="{ 'is-bump': bumpSeq > 0 }"
            data-pencil-name="ReviewBadge"
            style="align-items: center; background-color: #F8EFDD; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: center; padding: 1px 7px; width: fit-content"
          >
            <div
              data-pencil-name="ReviewBadgeText"
              style='box-sizing: border-box; color: #8A5A00; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              {{ reviewStore.count }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      data-pencil-name="NavRight"
      style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
    >
      <div
        data-pencil-name="ScanButton"
        data-clickable
        @click="$router.push('/scan-import')"
        style="align-items: center; background-color: #2B5BD7; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 9px 16px; width: fit-content"
      >
        <svg
          data-pencil-name="ScanIcon"
          data-icon-name="plus"
          data-icon-set="lucide"
          viewBox="0 0 13.99993896484375 14"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
        >
          <path
            d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
            fill="#FFFFFF"
          ></path>
        </svg>
        <div
          data-pencil-name="ScanLabel"
          style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
        >
          Scan / Import
        </div>
      </div>
      <div
        data-pencil-name="SettingsItem"
        data-clickable
        @click="$router.push('/settings')"
        style="align-items: center; background-color: #FFFFFF00; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
      >
        <svg
          data-pencil-name="SettingsIcon"
          data-icon-name="settings"
          data-icon-set="lucide"
          viewBox="0 0 13.99993896484375 14"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
        >
          <path
            d="M6.80518 0.60156q-0.03076 0.01367-0.15381 0.02735-0.32471 0.05811-0.63916 0.23925-0.31445 0.18115-0.50928 0.43409-0.19824 0.23926-0.29053 0.46484-0.08887 0.22217-0.15722 0.5708-0.03076 0.18115-0.07178 0.28711-0.04102 0.10596-0.1333 0.19824-0.08887 0.08887-0.2085 0.15381-0.11963 0.06152-0.24609 0.08887-0.19482 0.02734-0.48877-0.08545-0.19824-0.08203-0.33838-0.10938-0.13672-0.03076-0.36231-0.03076-0.28027-0.01367-0.44775 0.03076-0.54688 0.10938-0.93994 0.48194-0.38965 0.37256-0.54346 0.88525-0.15381 0.50928-0.01367 1.03906 0.16748 0.61523 0.72803 1.06299 0.18115 0.15723 0.26318 0.3042 0.08545 0.14697 0.08545 0.35547 0 0.2085-0.08545 0.35547-0.08203 0.14697-0.26318 0.3042-0.40674 0.32129-0.58789 0.69726-0.21191 0.42041-0.21192 0.875 0 0.45459 0.21192 0.875 0.19482 0.37939 0.52978 0.646 0.33838 0.2666 0.7417 0.3623 0.60156 0.15381 1.26123-0.11279 0.25293-0.0957 0.4751-0.06152 0.22559 0.03418 0.41357 0.21191 0.18799 0.17432 0.23243 0.49561 0.05469 0.37598 0.20849 0.68701 0.22559 0.46143 0.67334 0.74853 0.44775 0.28711 0.96387 0.31446 0.61865 0.02734 1.1416-0.30078 0.52637-0.32813 0.76221-0.90235 0.08545-0.22558 0.12646-0.51269 0.04443-0.28711 0.16748-0.44092 0.12646-0.15381 0.29395-0.23926 0.31104-0.14014 0.68701 0 0.22559 0.09912 0.39307 0.13672 0.16748 0.03418 0.37597 0.03418 0.32471 0 0.61865-0.09912 0.43408-0.14014 0.75538-0.46143 0.46143-0.44775 0.55712-1.06299 0.09912-0.61865-0.18115-1.19287-0.18115-0.37598-0.57422-0.68359-0.19482-0.15381-0.28027-0.30762-0.08203-0.15723-0.08203-0.36572 0-0.2085 0.08203-0.35547 0.08545-0.14697 0.2666-0.3042 0.30762-0.23584 0.47852-0.51611 0.29395-0.43408 0.32129-0.94336 0.02734-0.5127-0.20508-0.97412-0.229-0.46143-0.65625-0.74854-0.42725-0.28711-0.91602-0.31787-0.25293-0.02734-0.47851 0.01026-0.22217 0.03418-0.48877 0.14697-0.2085 0.08203-0.35547 0.08203-0.14697 0-0.31787-0.08203-0.16748-0.08545-0.29395-0.23926-0.12305-0.15381-0.16748-0.44092-0.04102-0.28711-0.12646-0.51269-0.18115-0.43408-0.55371-0.74854-0.36914-0.31445-0.84424-0.41357-0.08545-0.02734-0.31787-0.04102-0.229-0.01367-0.28369 0z m0.50244 1.23389q0.15381 0.06836 0.2666 0.18115 0.11279 0.11279 0.15381 0.25293 0.02734 0.06836 0.05468 0.26318 0.11279 0.67334 0.56055 1.1211 0.36572 0.37939 0.88184 0.51953 0.12646 0.04102 0.20166 0.04785 0.07861 0.00684 0.29053 0.00684 0.24951 0 0.39648-0.02735 0.14697-0.02734 0.38623-0.12646 0.2085-0.08545 0.36914-0.08545 0.16406 0 0.34521 0.09912 0.08203 0.04102 0.18799 0.14014 0.10596 0.09912 0.14698 0.18115 0.08545 0.16748 0.08545 0.35889 0 0.18799-0.08545 0.35547-0.04101 0.09912-0.09912 0.16406-0.05469 0.06152-0.18116 0.15722-0.76904 0.61865-0.76904 1.55518 0 0.93652 0.76904 1.55518 0.15381 0.12646 0.22901 0.23242 0.07861 0.10254 0.10937 0.24267 0.06836 0.30762-0.0581 0.56055-0.04101 0.08203-0.14698 0.18799-0.10596 0.10596-0.18799 0.14697-0.19482 0.08545-0.35205 0.08545-0.15381 0-0.38623-0.09228-0.229-0.09229-0.40332-0.12647-0.17432-0.03418-0.41357-0.02051-0.42041 0.01367-0.75537 0.16748-0.46143 0.22559-0.74854 0.61182-0.28711 0.38281-0.37256 0.90234-0.02734 0.2085-0.05468 0.27686-0.04102 0.14014-0.15381 0.25293-0.11279 0.11279-0.25293 0.18115-0.08203 0.04443-0.1333 0.05127-0.04785 0.00684-0.18799 0.00684-0.14014 0-0.19141-0.00684-0.04785-0.00684-0.11621-0.05127-0.30762-0.14014-0.42041-0.41699-0.02734-0.07178-0.05468-0.23926-0.05811-0.36572-0.1709-0.60156-0.18115-0.40674-0.51612-0.68701-0.33496-0.28027-0.75537-0.39307-0.12646-0.04102-0.20508-0.04785-0.0752-0.00684-0.28711-0.00684-0.24951 0-0.39648 0.02735-0.14697 0.02734-0.38623 0.12646-0.2085 0.08545-0.37256 0.08545-0.16064 0-0.3418-0.08545-0.08203-0.04102-0.18798-0.14697-0.10596-0.10596-0.14698-0.18799-0.12646-0.25293-0.0581-0.56055 0.03076-0.14014 0.10596-0.24267 0.07861-0.10596 0.23242-0.23242 0.60156-0.47852 0.7417-1.20655 0.02734-0.12305 0.02734-0.34863 0-0.22559-0.02734-0.34863-0.14014-0.71436-0.72803-1.20655-0.14014-0.0957-0.19824-0.15722-0.05469-0.06494-0.09571-0.16406-0.11279-0.23584-0.07177-0.4751 0.04443-0.23926 0.21191-0.42041 0.16748-0.18115 0.42041-0.22559 0.12646-0.01367 0.23584 0.00342 0.11279 0.01367 0.28027 0.08203 0.22559 0.08545 0.40674 0.11963 0.18115 0.03418 0.41699 0.02051 0.23926-0.01367 0.40674-0.04785 0.1709-0.0376 0.3794-0.14698 0.30762-0.15381 0.54687-0.39306 0.42041-0.43408 0.53321-1.09375 0.02734-0.2085 0.05468-0.29395 0.04102-0.10938 0.14698-0.229 0.10596-0.11963 0.20849-0.16748 0.10596-0.05127 0.18115-0.07178 0.07861-0.02051 0.20508-0.01367 0.12646 0.00684 0.17432 0.01367 0.05127 0.00684 0.1333 0.05127l-0.01367 0z m-0.66992 2.86768q-0.89893 0.15381-1.44239 0.82714-0.18457 0.22217-0.29052 0.44776-0.10254 0.22559-0.18799 0.51953-0.02734 0.10938-0.03418 0.19482-0.00684 0.08203-0.00684 0.30762 0 0.28027 0.02734 0.43408 0.02734 0.15381 0.1128 0.3794 0.16748 0.4751 0.52978 0.84082 0.36572 0.3623 0.84082 0.52978 0.22559 0.08545 0.3794 0.1128 0.15381 0.02734 0.43408 0.02734 0.28027 0 0.43408-0.02734 0.15381-0.02734 0.3794-0.1128 0.4751-0.16748 0.8374-0.52978 0.36572-0.36572 0.5332-0.84082 0.08545-0.22559 0.11279-0.3794 0.02734-0.15381 0.02735-0.43408 0-0.28027-0.02735-0.43408-0.02734-0.15381-0.11279-0.3794-0.2085-0.55713-0.6665-0.95019-0.45459-0.39307-1.04248-0.51953-0.14014-0.02734-0.42725-0.03418-0.28711-0.00684-0.41015 0.02051z m0.65625 1.1621q0.28027 0.07178 0.52294 0.31788 0.24609 0.24268 0.31788 0.52294 0.02734 0.12646 0.02734 0.29395 0 0.16748-0.02734 0.28027-0.07178 0.29395-0.3042 0.53321-0.229 0.23584-0.53662 0.32129-0.11279 0.02734-0.29395 0.02734-0.18115 0-0.29395-0.02734-0.30762-0.08545-0.54003-0.32129-0.229-0.23926-0.30079-0.53321-0.02734-0.11279-0.02734-0.28027 0-0.16748 0.02734-0.29395 0.05811-0.22559 0.22559-0.43408 0.16748-0.2085 0.40674-0.32129 0.34863-0.18115 0.79639-0.08545z"
            fill="#C7CDD8"
          ></path>
        </svg>
        <div
          data-pencil-name="SettingsLabel"
          style='box-sizing: border-box; color: #C7CDD8; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
        >
          Settings
        </div>
      </div>
    </div>

    <!-- 仅开发环境：触发待审计数变化以验证 400ms 徽标弹跳；生产构建不渲染 -->
    <!-- Teleport 到 body：TopNav 的 backdrop-filter 会成为 fixed 子元素的包含块，锚在 64px 导航盒内会遮挡 SettingsIcon -->
    <Teleport v-if="isDev" to="body">
      <div class="dev-review-trigger">
        <span class="drt-label">Review</span>
        <button type="button" @click="reviewStore.bumpReviewCount(1)">+1</button>
        <button type="button" @click="reviewStore.bumpReviewCount(-1)">−1</button>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
/* ---- NavLinks 激活指示块：几何/过渡由全局 .sv-slide-pill 承担，仅覆盖底色 ---- */
.nav-indicator {
  --slide-pill-bg: var(--sv-accent);
}

/* ---- 导航项：hover 背景 120ms 淡入；激活态文字转白加粗 ---- */
.nav-item {
  transition: background-color var(--sv-dur-fast) ease;
}
.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.08) !important;
}
.nav-item [data-pencil-name^="NavLabel"] {
  color: #C7CDD8 !important;
  font-weight: 500 !important;
  transition: color var(--sv-dur-fast) ease;
}
.nav-item.is-active [data-pencil-name^="NavLabel"] {
  color: #FFFFFF !important;
  font-weight: 600 !important;
}

/* ---- ScanButton：hover 180ms 加深 + 上浮 2px；按下回落 1px ---- */
[data-pencil-name="ScanButton"] {
  transition:
    background-color var(--sv-dur-move) ease,
    transform var(--sv-dur-move) ease;
}
[data-pencil-name="ScanButton"]:hover {
  background-color: var(--sv-accent-hover) !important;
  transform: translateY(-2px);
}
[data-pencil-name="ScanButton"]:active {
  transform: translateY(1px);
}

/* ---- 图标 hover 微缩放由全局 .sv-icon-hover-scope 承担；下面保留静色填充过渡 ---- */
[data-pencil-name="SettingsIcon"] path {
  transition: fill var(--sv-dur-fast) ease;
}
[data-pencil-name="SettingsIcon"]:hover path {
  fill: var(--sv-ink);
}

/* ---- ReviewBadge：数字变化时 400ms 弹性 bounce（一次播放，不残留 transform） ---- */
@keyframes badge-bounce {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
.review-badge.is-bump {
  animation: badge-bounce var(--sv-dur-badge) ease;
}

/* ---- 仅 DEV：徽标弹跳演示触发器 ---- */
.dev-review-trigger {
  position: fixed;
  right: 12px;
  bottom: 12px;
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border-radius: 8px;
  background: rgba(12, 12, 14, 0.82);
  color: #C7CDD8;
  font-family: "Instrument Sans", system-ui, sans-serif;
  font-size: 11px;
}
.dev-review-trigger button {
  border: 1px solid #FFFFFF33;
  background: transparent;
  color: #FFFFFF;
  border-radius: 5px;
  padding: 1px 6px;
  font-size: 11px;
  cursor: pointer;
}
</style>
