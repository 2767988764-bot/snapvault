import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { reviewApi } from '@/api'

// 待审（Needs Review）计数：导航徽标与 Library 侧栏共享。
// 初始用本地持久化值 / 默认值，随后从 GET /api/review/count 拉取刷新
// （静默失败：后端未就绪时不影响页面，也不刷屏）。bumpReviewCount 用于本地乐观更新。
const KEY = 'snapvault:review-count'
const DEFAULT_COUNT = 3

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw === null) return DEFAULT_COUNT
    const n = Number(raw)
    return Number.isFinite(n) && n >= 0 ? Math.floor(n) : DEFAULT_COUNT
  } catch (e) {
    // 隐私模式 / 存储被禁用：回退默认值
    return DEFAULT_COUNT
  }
}

export const useReviewStore = defineStore('review', () => {
  const count = ref(load())

  // 增减计数，且不低于 0
  function bumpReviewCount(delta = 1) {
    const d = Number(delta)
    if (!Number.isFinite(d)) return
    count.value = Math.max(0, count.value + d)
  }

  function setReviewCount(value) {
    const n = Number(value)
    count.value = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0
  }

  // 启动即向接口拉取真实计数（静默失败）；返回数字或 { count } 均兼容
  reviewApi
    .count()
    .then((data) => {
      const n = typeof data === 'number' ? data : data && data.count
      if (Number.isFinite(Number(n))) setReviewCount(n)
    })
    .catch(() => {
      /* 后端未就绪 / 网络异常：保留本地初值 */
    })

  // 手写持久化（不引入 pinia-plugin-persistedstate）：计数变化即写回
  watch(count, (v) => {
    try {
      localStorage.setItem(KEY, String(v))
    } catch (e) {
      /* 隐私模式 / 配额满：静默忽略 */
    }
  })

  return { count, bumpReviewCount, setReviewCount }
})
