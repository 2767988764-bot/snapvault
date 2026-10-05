<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TopNav from '@/components/TopNav.vue'

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
  <router-view />
</template>
