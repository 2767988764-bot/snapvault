import { scanApi } from '../api'

// Scan-import「Choose files / Choose a folder」选择后的上传。
// 事件流：点击按钮 → 原生选择器 → uploadScanFiles(files, { kind, signal })
//   kind: 'files'（多选文件） | 'folder'（整目录，含 webkitRelativePath）
// 对接 POST /api/scan/upload（multipart/form-data），返回 { kind, files } 语义对齐接口；
// 失败由 http 层统一提示，signal 透传支持取消。
export async function uploadScanFiles(files, { kind = 'files', signal } = {}) {
  return scanApi.upload(files, { kind, signal })
}
