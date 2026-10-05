import { defineStore } from 'pinia'
import { ref } from 'vue'
import { documentsApi } from '@/api'

// 库文档数据：由 GET /api/documents 分页拉取（首屏 24、触底追加），
// docs 为「已加载页」的累积结果，total 为后端总数。
// 之所以放进 store：DocumentDetail 的删除需要真正改变库列表，
// 撤销时再按原索引插回，跨路由（详情 → 返回库）状态才不丢。
export const PAGE_SIZE = 24

export const useLibraryStore = defineStore('library', () => {
  const docs = ref([])
  const total = ref(0)
  const page = ref(0) // 已加载到第几页
  const loaded = ref(false) // 是否成功拉到过首页（用于区分「加载完成但为空」与「尚未加载」）

  function findById(id) {
    return docs.value.find((d) => d.id === id) || null
  }

  // 批量移除：返回 [{ doc, index }]（原索引），供撤销「按原位插回」
  function removeByIds(ids) {
    const set = new Set(ids)
    const removed = []
    docs.value.forEach((d, i) => {
      if (set.has(d.id)) removed.push({ doc: d, index: i })
    })
    if (removed.length) docs.value = docs.value.filter((d) => !set.has(d.id))
    return removed
  }

  // 撤销：把 removeByIds 的结果按原索引还原（多段插入时逐条取当前长度的最小值，避免越界）
  function restore(removed) {
    if (!removed || !removed.length) return
    const next = docs.value.slice()
    removed
      .slice()
      .sort((a, b) => a.index - b.index)
      .forEach(({ doc, index }) => next.splice(Math.min(index, next.length), 0, doc))
    docs.value = next
  }

  /**
   * 拉取并写入某一页（nextPage <= 1 覆盖，其余追加）。
   * @param {number} nextPage
   * @param {{ sort?: string, order?: string, signal?: AbortSignal }} [opts]
   * @returns {Promise<number>} 本页条数
   */
  async function loadPage(nextPage, { sort, order, signal } = {}) {
    const data = await documentsApi.list({ page: nextPage, pageSize: PAGE_SIZE, sort, order, signal })
    const items = Array.isArray(data && data.items) ? data.items : []
    docs.value = nextPage <= 1 ? items : docs.value.concat(items)
    const t = Number(data && data.total)
    total.value = Number.isFinite(t) && t >= 0 ? t : docs.value.length
    page.value = nextPage
    loaded.value = true
    return items.length
  }

  function reset() {
    docs.value = []
    total.value = 0
    page.value = 0
    loaded.value = false
  }

  return { docs, total, page, loaded, findById, removeByIds, restore, loadPage, reset }
})
