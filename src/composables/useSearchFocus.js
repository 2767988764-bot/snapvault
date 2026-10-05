import { ref } from 'vue'

// ---------------------------------------------------------------------------
// 后端对接点（唯一需要改的地方）
// ---------------------------------------------------------------------------
// searchDocuments 是搜索数据源。当前返回本地示例数据；接入真实后端时把实现
// 换成一次 API 调用即可，入参/返回结构保持不变，其余逻辑（防抖、竞态取消、
// 加载态、结果渲染、高亮）都不需要改动。
//
//   export async function searchDocuments(query, { signal } = {}) {
//     const res = await fetch(`/api/documents/search?q=${encodeURIComponent(query)}`, { signal })
//     if (!res.ok) throw new Error(res.statusText)
//     const data = await res.json()
//     return data.items // [{ id, title, snippet, tag }]
//   }
// ---------------------------------------------------------------------------
const MOCK_DOCUMENTS = [
  { id: 'd1', title: 'Homography notes — lecture 07', snippet: 'Homography estimation with RANSAC and DLT, plus a worked example.', tag: 'lecture' },
  { id: 'd2', title: 'Lease contract draft v3', snippet: 'Clause 4 · notice period, with a homography scan of the annex.', tag: 'contract' },
  { id: 'd3', title: 'Homography matrix cheatsheet', snippet: '3×3 matrix, 8 degrees of freedom, normalization steps.', tag: 'notes' },
  { id: 'd4', title: 'Lecture notes — projective geometry', snippet: 'Vanishing points, cross ratio, and the homography between planes.', tag: 'lecture' },
  { id: 'd5', title: 'Receipt 2025-03-14 · Coffee lab', snippet: 'Total 18.40, paid by card. VAT included.', tag: 'receipt' },
  { id: 'd6', title: 'Scan batch 2025-02 · receipts', snippet: '12 receipts imported from the office scanner.', tag: 'receipt' },
  { id: 'd7', title: 'Lecture notes — week 03', snippet: 'Camera models, intrinsics, and the pinhole approximation.', tag: 'lecture' },
]

export const RECENT_SEARCHES = ['homography', 'receipt 2025', 'lecture notes']

export async function searchDocuments(query, { signal } = {}) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  // 模拟网络往返；接后端时整段替换为上面的 fetch 调用
  await new Promise((resolve) => setTimeout(resolve, 120))
  if (signal && signal.aborted) return []
  return MOCK_DOCUMENTS.filter(
    (d) =>
      d.title.toLowerCase().includes(q) ||
      d.snippet.toLowerCase().includes(q) ||
      d.tag.toLowerCase().includes(q)
  )
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

// 搜索框聚焦交互的公共状态机：三个页面（hero / pulled / search）共用
export function useSearchFocus({ debounce = 150 } = {}) {
  const query = ref('')
  const focused = ref(false)
  const loading = ref(false)
  const results = ref([])
  const recent = ref(RECENT_SEARCHES.slice())

  let timer = 0
  let ctrl = null

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
    schedule(query.value)
  }

  function open() {
    focused.value = true
  }

  function close() {
    focused.value = false
    clearTimeout(timer)
    if (ctrl) ctrl.abort()
    loading.value = false
  }

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

  // 返回 'submit' / 'cancel' / ''，由各页面决定提交（跳转）行为
  function onKeydown(e) {
    if (e.key === 'Escape') {
      close()
      if (e.target && typeof e.target.blur === 'function') e.target.blur()
      return 'cancel'
    }
    if (e.key === 'Enter') return 'submit'
    return ''
  }

  return { query, focused, loading, results, recent, onInput, open, close, clear, pick, onKeydown }
}
