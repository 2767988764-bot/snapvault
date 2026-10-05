import { computed, ref } from 'vue'

// 库列表批量选择：每次调用创建一份独立状态（随所属组件卸载而释放，
// 避免跨路由/跨列表残留选中）。选择以文档 id 为准。
// selectedIds 用 Set 存储；每次变更整体替换引用，保证依赖它的计算属性/模板会更新。
export function useBatchSelect() {
  const selectedIds = ref(new Set())

  const count = computed(() => selectedIds.value.size)
  const isBatchActive = computed(() => selectedIds.value.size > 0)

  function has(id) {
    return selectedIds.value.has(id)
  }

  function toggle(id) {
    const next = new Set(selectedIds.value)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    selectedIds.value = next
  }

  // ids：显式传入要选中的 id 列表（列表分批加载时，全选由调用方决定范围）
  function selectAll(ids = []) {
    selectedIds.value = new Set(ids)
  }

  function clear() {
    selectedIds.value = new Set()
  }

  return { selectedIds, count, isBatchActive, has, toggle, selectAll, clear }
}
