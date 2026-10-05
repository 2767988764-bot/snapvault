// 兼容层：历史模块级 ref 已迁移到 Pinia（见 src/stores/review.js）。
// 保留同名导出，旧 import 不改也能工作；新代码请直接用 useReviewStore()。
import { computed } from 'vue'
import { useReviewStore } from '@/stores/review'

export const reviewCount = computed(() => useReviewStore().count)

export function bumpReviewCount(delta = 1) {
  useReviewStore().bumpReviewCount(delta)
}
