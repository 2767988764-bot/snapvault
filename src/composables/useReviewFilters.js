// Review 页标签行（ReviewFilters）的后端对接点（预留）。
// 事件流：点击标签 → selectReviewFilter(key, { signal }) → 返回该标签对应的文件列表。
// 接后端时把函数体换成 fetch(`/api/review/files?filter=${key}`, { signal }) 即可。
const STUB_FILES = {
  all: [
    'receipt-2025-03-14.jpg',
    'lecture-notes-p12.jpg',
    'invoice-0882.pdf',
    'id-card-front.jpg',
    'whiteboard-session.png',
  ],
  'paper-edges': ['receipt-2025-03-14.jpg'],
  'text-recognition': ['lecture-notes-p12.jpg', 'whiteboard-session.png'],
  'file-location': ['invoice-0882.pdf'],
  processing: ['id-card-front.jpg'],
}

export async function selectReviewFilter(key, { signal } = {}) {
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')
  // TODO(backend): 替换为真实请求，返回该标签「对应的文件」
  return STUB_FILES[key] ?? []
}
