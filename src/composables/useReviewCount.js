import { ref } from 'vue'

// 待审（Needs Review）计数：导航徽标与 Library 侧栏共享。
// 接后端时把它换成 store/接口返回值即可，bumpReviewCount 用于本地乐观更新。
export const reviewCount = ref(3)

export function bumpReviewCount(delta = 1) {
  reviewCount.value = Math.max(0, reviewCount.value + delta)
}
