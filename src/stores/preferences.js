import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

// 用户偏好：Review 当前筛选、Library 默认视图。
// 手写持久化（不引入 pinia-plugin-persistedstate），key 统一带 `snapvault:` 命名空间。
const KEY = 'snapvault:preferences'

// Review 标签行的合法 key（与 views/ReviewQueueView.vue 的 chips 对应），用于校验持久化数据
export const REVIEW_FILTERS = ['all', 'paper-edges', 'text-recognition', 'file-location', 'processing']
const LIBRARY_VIEWS = ['list', 'search']

const DEFAULTS = { reviewFilter: 'all', libraryView: 'list' }

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...DEFAULTS }
    const saved = JSON.parse(raw)
    if (!saved || typeof saved !== 'object') return { ...DEFAULTS }
    // 逐字段校验：字段缺失或损坏时回退默认值（不整体丢弃）
    return {
      reviewFilter: REVIEW_FILTERS.includes(saved.reviewFilter) ? saved.reviewFilter : DEFAULTS.reviewFilter,
      libraryView: LIBRARY_VIEWS.includes(saved.libraryView) ? saved.libraryView : DEFAULTS.libraryView,
    }
  } catch (e) {
    // JSON 损坏 / 隐私模式下 getItem 抛错：回退默认值，不抛给调用方
    return { ...DEFAULTS }
  }
}

export const usePreferencesStore = defineStore('preferences', () => {
  const saved = load()
  const reviewFilter = ref(saved.reviewFilter)
  const libraryView = ref(saved.libraryView)

  // 任一偏好变化即写回 localStorage
  watch([reviewFilter, libraryView], () => {
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify({ reviewFilter: reviewFilter.value, libraryView: libraryView.value })
      )
    } catch (e) {
      /* 隐私模式 / 配额满：静默忽略 */
    }
  })

  function setReviewFilter(key) {
    if (REVIEW_FILTERS.includes(key)) reviewFilter.value = key
  }

  function setLibraryView(view) {
    if (LIBRARY_VIEWS.includes(view)) libraryView.value = view
  }

  return { reviewFilter, libraryView, setReviewFilter, setLibraryView }
})
