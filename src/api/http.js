import router from '../router'
import { toast } from '../composables/useToast'
import { getToken, clearToken } from './auth'

// ---------------------------------------------------------------------------
// 统一请求封装（原生 fetch，不引入 axios 等第三方库）
//
// 职责：baseURL / 超时 / 鉴权注入 / 响应包裹解析 / 统一错误提示 / 401 跳登录。
// 约定后端响应包裹：{ code, data, message }，code !== 0 视为业务错误（抛错）。
// ---------------------------------------------------------------------------

const DEFAULT_BASE_URL = '/api'
const DEFAULT_TIMEOUT = 15000 // 15s

/** 统一请求错误；kind 便于调用方区分：timeout / network / http / business / auth / parse / abort */
export class ApiError extends Error {
  constructor(message, { code = null, status = null, kind = 'error' } = {}) {
    super(message)
    this.name = 'ApiError'
    this.code = code
    this.status = status
    this.kind = kind
  }
}

// 把 params 拼成 query string（跳过空值；数组用同名重复参数）
function buildQuery(params) {
  if (!params) return ''
  const sp = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return
    if (Array.isArray(value)) value.forEach((item) => sp.append(key, item))
    else sp.append(key, String(value))
  })
  const qs = sp.toString()
  return qs ? `?${qs}` : ''
}

function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData
}

/**
 * 发起一次后端请求。
 *
 * @param {Object}   opts
 * @param {string}   opts.url           相对路径（不含 baseURL），如 '/documents'
 * @param {string}   [opts.method]      HTTP 方法，默认 GET
 * @param {Object}   [opts.params]      查询参数（自动拼 query）
 * @param {any}      [opts.body]        请求体；普通对象自动 JSON.stringify，FormData 原样上传
 * @param {AbortSignal} [opts.signal]   调用方取消信号（透传，供竞态取消）
 * @param {number}   [opts.timeout]     超时毫秒，默认 15000
 * @param {boolean}  [opts.silent]      true 时不自动弹错误 toast（由调用方自行处理失败）
 * @returns {Promise<any>} 解析后的 data（{ code, data, message } 中的 data）
 */
export async function request({
  url,
  method = 'GET',
  params,
  body,
  signal,
  timeout = DEFAULT_TIMEOUT,
  silent = false,
} = {}) {
  const base = import.meta.env.VITE_API_BASE_URL || DEFAULT_BASE_URL
  const fullUrl = `${base}${url}${buildQuery(params)}`

  const ctrl = new AbortController()
  let timedOut = false
  const onCallerAbort = () => ctrl.abort()
  if (signal) {
    if (signal.aborted) throw new ApiError('请求已取消', { kind: 'abort' })
    signal.addEventListener('abort', onCallerAbort, { once: true })
  }
  const timer = setTimeout(() => {
    timedOut = true
    ctrl.abort()
  }, timeout)

  const headers = { Accept: 'application/json' }
  const token = getToken()
  if (token) headers.Authorization = `Bearer ${token}`

  let payload = body
  if (body !== undefined && body !== null && !isFormData(body)) {
    headers['Content-Type'] = 'application/json'
    payload = JSON.stringify(body)
  }

  // 统一错误提示：主动取消（abort）与 silent 不提示，交由调用方处理
  const notify = (err) => {
    if (silent || err.kind === 'abort') return
    toast({ type: 'error', title: '请求失败', message: err.message })
  }

  try {
    const res = await fetch(fullUrl, { method, headers, body: payload, signal: ctrl.signal })

    // 401：清 token 并引导到登录页（带 redirect 便于登录后回跳）
    if (res.status === 401) {
      clearToken()
      const current = router.currentRoute.value.path
      if (current !== '/login') router.push({ path: '/login', query: { redirect: current } })
      throw new ApiError('登录状态已失效，请重新登录', { status: 401, kind: 'auth' })
    }

    if (!res.ok) {
      throw new ApiError(`请求失败（HTTP ${res.status}）`, { status: res.status, kind: 'http' })
    }

    if (res.status === 204) return null
    const text = await res.text()
    if (!text) return null

    let json
    try {
      json = JSON.parse(text)
    } catch (e) {
      throw new ApiError('响应格式错误', { status: res.status, kind: 'parse' })
    }

    // 统一包裹 { code, data, message }
    if (json && typeof json === 'object' && 'code' in json) {
      if (Number(json.code) !== 0) {
        throw new ApiError(json.message || '业务处理失败', {
          code: json.code,
          status: res.status,
          kind: 'business',
        })
      }
      return json.data
    }
    // 兜底：后端若直接返回裸数据，原样透出
    return json
  } catch (err) {
    if (err instanceof ApiError) {
      notify(err)
      throw err
    }
    if (timedOut) {
      const e = new ApiError('请求超时，请稍后重试', { kind: 'timeout' })
      notify(e)
      throw e
    }
    if (ctrl.signal.aborted) {
      // 调用方主动取消：不提示
      throw new ApiError('请求已取消', { kind: 'abort' })
    }
    const e = new ApiError('网络异常，请检查网络或后端服务', { kind: 'network' })
    notify(e)
    throw e
  } finally {
    clearTimeout(timer)
    if (signal) signal.removeEventListener('abort', onCallerAbort)
  }
}

export default request
