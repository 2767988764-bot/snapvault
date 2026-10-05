import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { documentsApi } from '../api'

// 搜索数据源：对接 GET /api/documents/search?q=（见 src/api/index.js documentsApi.search）。
// 入参 / 返回结构不变（[{ id, title, snippet, tag }]），防抖、竞态取消、加载态、
// 结果渲染、高亮等逻辑都无需改动。
export const RECENT_SEARCHES = ['homography', 'receipt 2025', 'lecture notes']

export async function searchDocuments(query, { signal } = {}) {
  const q = query.trim()
  if (!q) return []
  const items = await documentsApi.search(q, { signal })
  return Array.isArray(items) ? items : []
}

// 把 text 按 query 命中位置切成 [{ text, hit }]，供模板逐段高亮
export function splitMatch(text, query) {
  const q = (query || '').trim()
  if (!q) return [{ text, hit: false }]
  const source = String(text)
  const lower = source.toLowerCase()
  const target = q.toLowerCase()
  const out = []
  let i = 0
  for (;;) {
    const at = lower.indexOf(target, i)
    if (at === -1) {
      out.push({ text: source.slice(i), hit: false })
      break
    }
    if (at > i) out.push({ text: source.slice(i, at), hit: false })
    out.push({ text: source.slice(at, at + target.length), hit: true })
    i = at + target.length
  }
  return out.filter((s) => s.text)
}

// Tab 焦点陷阱：在「搜索输入框 + 面板内可聚焦元素」之间循环，不逃逸到背景
// （输入框的 keydown 与面板内元素的 keydown 都走这里，保证焦点落在面板内时依旧成立）
export function cycleFieldFocus(field, e) {
  if (!field) return
  const input = field.querySelector('input.sf-input')
  const panel = field.querySelector('.sf-panel.open')
  const items = [input, ...(panel ? panel.querySelectorAll('button') : [])].filter(
    (el) => el && el.getClientRects().length > 0
  )
  if (items.length < 2) return
  const i = items.indexOf(document.activeElement)
  e.preventDefault()
  items[(i + (e.shiftKey ? -1 : 1) + items.length) % items.length].focus()
}

// 搜索框聚焦交互的公共状态机：三个页面（hero / pulled / search）共用
export function useSearchFocus({ debounce = 150 } = {}) {
  const query = ref('')
  const focused = ref(false)
  const loading = ref(false)
  const results = ref([])
  const recent = ref(RECENT_SEARCHES.slice())
  // 键盘高亮项下标：只遍历「结果」（空关键词时没有可选项，保持 Enter 原有语义）
  const activeIndex = ref(0)

  let timer = 0
  let ctrl = null
  let fieldEl = null // 搜索框所在容器，用于判断是否「点击面板外部」

  const activeResult = computed(() => results.value[activeIndex.value] || null)

  // 结果更新 / query 变化 → 高亮重置到第 1 项
  watch([query, results], () => {
    activeIndex.value = 0
  })

  async function run(text) {
    if (ctrl) ctrl.abort()
    const q = text.trim()
    if (!q) {
      results.value = []
      loading.value = false
      return
    }
    loading.value = true
    ctrl = new AbortController()
    const { signal } = ctrl
    try {
      const items = await searchDocuments(q, { signal })
      if (signal.aborted) return
      results.value = items
    } catch (e) {
      if (!signal.aborted) results.value = []
    } finally {
      if (!signal.aborted) loading.value = false
    }
  }

  function schedule(text) {
    clearTimeout(timer)
    timer = setTimeout(() => run(text), debounce)
  }

  function onInput(e) {
    query.value = e.target.value
    focused.value = true // 输入即展开下拉（Escape 关闭后继续输入也能重新展开）
    schedule(query.value)
  }

  function open(e) {
    focused.value = true
    const t = e && e.target
    fieldEl =
      t && t.closest
        ? t.closest('[data-pencil-name="SearchBar"], [data-pencil-name="SearchField"]') || t.parentElement
        : null
  }

  function close() {
    focused.value = false
    clearTimeout(timer)
    if (ctrl) ctrl.abort()
    loading.value = false
  }

  // 失焦时若焦点仍落在「搜索框容器内」（如面板里的按钮）则不关闭，供 Tab 焦点陷阱使用
  function onBlur(e) {
    const next = e && e.relatedTarget
    if (fieldEl && next && fieldEl.contains(next)) return
    close()
  }

  // 点击面板外部（搜索框容器之外）关闭；输入框 / 下拉内部的点击不关闭
  function onDocPointerDown(e) {
    if (fieldEl && fieldEl.contains(e.target)) return
    close()
  }
  watch(focused, (on) => {
    if (on) document.addEventListener('pointerdown', onDocPointerDown, true)
    else document.removeEventListener('pointerdown', onDocPointerDown, true)
  })
  onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocPointerDown, true))

  function clear() {
    query.value = ''
    results.value = []
    clearTimeout(timer)
    if (ctrl) ctrl.abort()
    loading.value = false
  }

  // 选中「最近搜索」或某条结果：回填并重新查询
  function pick(text) {
    query.value = text
    schedule(text)
  }

  // 高亮项在结果间移动（到端点即停，不环绕）
  function moveActive(delta) {
    const n = results.value.length
    if (!n) return
    activeIndex.value = Math.max(0, Math.min(n - 1, activeIndex.value + delta))
  }

  // 直接落到某一项（Tab 把焦点移进面板时，由面板回传下标，保证高亮与焦点同一来源）
  function setActive(i) {
    const n = results.value.length
    if (!n) return
    activeIndex.value = Math.max(0, Math.min(n - 1, i))
  }

  // 返回 'submit' / 'moveUp' / 'moveDown' / 'cancel' / 'tab' / ''，由各页面决定提交（跳转）行为
  function onKeydown(e) {
    if (e.key === 'Escape') {
      // 关闭下拉，焦点留在输入框（不 blur），便于继续输入或再次操作
      close()
      return 'cancel'
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      moveActive(1)
      return 'moveDown'
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      moveActive(-1)
      return 'moveUp'
    }
    if (e.key === 'Tab') {
      const t = e.target
      const field =
        fieldEl ||
        (t && t.closest ? t.closest('[data-pencil-name="SearchBar"], [data-pencil-name="SearchField"]') : null)
      cycleFieldFocus(field, e)
      return 'tab'
    }
    if (e.key === 'Enter') return 'submit'
    return ''
  }

  return {
    query,
    focused,
    loading,
    results,
    recent,
    activeIndex,
    activeResult,
    onInput,
    open,
    close,
    onBlur,
    clear,
    pick,
    moveActive,
    setActive,
    onKeydown,
  }
}
