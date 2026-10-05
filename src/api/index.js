import { request } from './http'
import { login, logout, getToken, setToken, clearToken } from './auth'

// ---------------------------------------------------------------------------
// 按域聚合导出各后端接口。路径 / 入参 / 返回均按常见 REST 约定预设，
// 与后端接口文档不一致时以文档为准微调这里即可（不动业务层）。
// 所有函数均支持 { signal } 透传以便取消；失败统一由 http.js 抛错。
// ---------------------------------------------------------------------------

/** 文档域接口 */
export const documentsApi = {
  /**
   * 文档分页列表（供 Library 无限滚动）
   * GET /api/documents?page=&pageSize=&sort=&order=
   * @returns {Promise<{ items: Array, page: number, total: number }>}
   */
  list({ page = 1, pageSize = 24, sort, order, signal } = {}) {
    return request({ url: '/documents', method: 'GET', params: { page, pageSize, sort, order }, signal })
  },

  /**
   * 文档搜索
   * GET /api/documents/search?q=
   * @returns {Promise<Array<{ id, title, snippet, tag }>>}
   */
  search(q, { signal } = {}) {
    return request({ url: '/documents/search', method: 'GET', params: { q }, signal })
  },

  /**
   * 文档详情
   * GET /api/documents/:id
   * @returns {Promise<Object>} 文档对象（id/name/pages/date/tag/status/fav …）
   */
  detail(id, { signal } = {}) {
    return request({ url: `/documents/${encodeURIComponent(id)}`, method: 'GET', signal })
  },

  /**
   * 重命名
   * PATCH /api/documents/:id  { name }
   */
  rename(id, name, { signal } = {}) {
    return request({ url: `/documents/${encodeURIComponent(id)}`, method: 'PATCH', body: { name }, signal })
  },

  /**
   * 收藏 / 取消收藏
   * PUT /api/documents/:id/fav  { fav }
   */
  setFav(id, fav, { signal } = {}) {
    return request({ url: `/documents/${encodeURIComponent(id)}/fav`, method: 'PUT', body: { fav }, signal })
  },

  /**
   * 批量删除
   * DELETE /api/documents  { ids: string[] }
   * @param {boolean} [opts.silent] 默认false；由 confirmDestroy 自行提示时传 true
   */
  remove(ids, { signal, silent = false } = {}) {
    return request({ url: '/documents', method: 'DELETE', body: { ids }, signal, silent })
  },
}

/** 扫描 / 上传域接口 */
export const scanApi = {
  /**
   * 上传扫描文件（multipart/form-data）
   * POST /api/scan/upload  fields: kind('files'|'folder') + files[]
   * @returns {Promise<{ kind, files }>} 语义对齐接口（items 等字段按后端契约）
   */
  upload(files, { kind = 'files', signal } = {}) {
    const form = new FormData()
    form.append('kind', kind)
    ;(files || []).forEach((file) => {
      // folder 上传保留相对路径，后端据此还原目录结构
      form.append('files', file, file.webkitRelativePath || file.name)
    })
    return request({ url: '/scan/upload', method: 'POST', body: form, signal })
  },
}

/** 设置 / 维护域接口（失败由 SettingsView 统一提示，故 silent） */
export const settingsApi = {
  /**
   * 清理缓存
   * POST /api/settings/clear-cache
   * @returns {Promise<{ clearedFiles: number, freedBytes: number }>}
   */
  clearCache({ signal, silent = true } = {}) {
    return request({ url: '/settings/clear-cache', method: 'POST', signal, silent })
  },

  /**
   * 导出全部文档
   * POST /api/settings/export
   * @returns {Promise<{ documents: number, format: string }>}
   */
  exportAll({ signal, silent = true } = {}) {
    return request({ url: '/settings/export', method: 'POST', signal, silent })
  },

  /**
   * 备份
   * POST /api/settings/backup
   * @returns {Promise<{ snapshot: string, sizeMB: number }>}
   */
  backup({ signal, silent = true } = {}) {
    return request({ url: '/settings/backup', method: 'POST', signal, silent })
  },
}

/** Review 域接口 */
export const reviewApi = {
  /**
   * 待审数量
   * GET /api/review/count
   * @returns {Promise<number|{ count: number }>}
   */
  count({ signal, silent = true } = {}) {
    return request({ url: '/review/count', method: 'GET', signal, silent })
  },

  /**
   * 某标签对应的文件列表
   * GET /api/review/files?filter=
   * @returns {Promise<Array>}
   */
  files(filter, { signal } = {}) {
    return request({ url: '/review/files', method: 'GET', params: { filter }, signal })
  },
}

/** 鉴权域接口 */
export const authApi = {
  login,
  logout,
  getToken,
  setToken,
  clearToken,
}
