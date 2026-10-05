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

export default createRouter({
  history: createWebHistory(),
  routes,
})
