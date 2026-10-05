// Scan-import「Choose files / Choose a folder」选择后的上传对接点（预留，暂不实现业务）。
// 事件流：点击按钮 → 原生选择器 → uploadScanFiles(files, { kind })
//   kind: 'files'（多选文件） | 'folder'（整目录，含 webkitRelativePath）
// 接后端时把函数体换成 FormData + fetch('/api/scan/upload', { method: 'POST', body, signal }) 即可。
export async function uploadScanFiles(files, { kind = 'files', signal } = {}) {
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')
  // TODO(backend): 真实上传逻辑；当前仅把待上传清单原样返回，不做业务处理
  return { kind, files }
}
