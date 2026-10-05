<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TopNav from '@/components/TopNav.vue'
import ToastHost from '@/components/ToastHost.vue'
import ConfirmHost from '@/components/ConfirmHost.vue'

// 导航常驻：跨路由不重挂，激活指示块才能平滑滑移。
// 白名单与改造前各页面自带 TopNav 的范围一致（/login /states /overview 不渲染）。
const NAV_PATHS = new Set([
  '/home',
  '/library',
  '/library-search',
  '/document-detail',
  '/review-queue',
  '/scan-import',
  '/scan-result',
  '/settings',
])

const route = useRoute()
const showNav = computed(() => NAV_PATHS.has(route.path))
</script>

<template>
  <TopNav v-if="showNav" />
  <!-- 页面主体过渡：TopNav / ToastHost / ConfirmHost 都在过渡层之外，常驻不重挂 -->
  <router-view v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </router-view>
  <ToastHost />
  <ConfirmHost />
</template>

<style>
/* 页面切换过渡（全局：作用于各页面主体根节点，故不能用 scoped）
   进入 = 淡入 + 轻微上移；离开 = 淡出，out-in 避免新旧页同时在场导致跳变。
   时长走 --sv-dur-move / --sv-dur-fast；reduced-motion 由 tokens.css 的
   全局 `transition-duration: 0.01ms !important` 自动降级为瞬时切换。 */
.page-enter-active {
  transition:
    opacity var(--sv-dur-move) var(--sv-ease-out),
    transform var(--sv-dur-move) var(--sv-ease-out);
}
.page-leave-active {
  transition: opacity var(--sv-dur-fast) var(--sv-ease-out);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
}
</style>
