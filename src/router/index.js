import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: () => import('@/views/HomeView.vue') },
  { path: '/scan-import', name: 'scan-import', component: () => import('@/views/ScanImportView.vue') },
  { path: '/scan-result', name: 'scan-result', component: () => import('@/views/ScanResultView.vue') },
  { path: '/library', name: 'library', component: () => import('@/views/LibraryView.vue') },
  { path: '/library-search', name: 'library-search', component: () => import('@/views/LibrarySearchView.vue') },
  { path: '/document-detail', name: 'document-detail', component: () => import('@/views/DocumentDetailView.vue') },
  { path: '/review-queue', name: 'review-queue', component: () => import('@/views/ReviewQueueView.vue') },
  { path: '/settings', name: 'settings', component: () => import('@/views/SettingsView.vue') },
  { path: '/states', name: 'states', component: () => import('@/views/StatesView.vue') },
  { path: '/overview', name: 'overview', component: () => import('@/views/OverviewView.vue') },
  { path: '/login', name: 'login', component: () => import('@/views/LoginView.vue') },
]

// 登录页保留在路由与文件中，但当前处于「暂不接入」状态：
// 不做鉴权拦截，访问站点（/ → /home）及各页面均无需登录。
// 后续需要强制登录时，在此处恢复 beforeEach 守卫（读 auth.js 的 getToken）。
const router = createRouter({
  // base 取构建时注入的 BASE_URL（开发为 /，GitHub Pages 子路径部署为 /snapvault/）
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
