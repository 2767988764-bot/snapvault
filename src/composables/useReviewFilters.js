import { reviewApi } from '../api'

// Review 页标签行（ReviewFilters）的数据源。
// 事件流：点击标签 → selectReviewFilter(key, { signal }) → 返回该标签对应的文件列表。
// 对接 GET /api/review/files?filter=<key>；失败由 http 层统一提示。
export async function selectReviewFilter(key, { signal } = {}) {
  const files = await reviewApi.files(key, { signal })
  return Array.isArray(files) ? files : []
}
