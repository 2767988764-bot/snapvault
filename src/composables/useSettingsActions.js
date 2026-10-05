import { settingsApi } from '../api'

// Settings「维护」区异步操作的对接点。
// 事件流：点击按钮 → runAction(kind) → clearCache / exportAll / backup({ signal })
// 三处均为后端写操作（POST /api/settings/...），失败抛错、由 SettingsView 统一提示，
// 故接口层 silent（不重复弹 toast）。signal 透传支持取消。
//
// 返回结构（供 SettingsView 的成功文案使用）：
//   clearCache → { clearedFiles, freedBytes }
//   exportAll  → { documents, format }
//   backup     → { snapshot, sizeMB }

/** 清理缓存：POST /api/settings/clear-cache */
export function clearCache({ signal } = {}) {
  return settingsApi.clearCache({ signal })
}

/** 导出全部文档：POST /api/settings/export */
export function exportAll({ signal } = {}) {
  return settingsApi.exportAll({ signal })
}

/** 备份：POST /api/settings/backup */
export function backup({ signal } = {}) {
  return settingsApi.backup({ signal })
}
