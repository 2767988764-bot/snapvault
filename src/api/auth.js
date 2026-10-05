// 鉴权相关的本地状态与接口定义。
// token 存 localStorage（key 带命名空间 snapvault:），读写一律 try/catch 容错
// （隐私模式 / 存储被禁用等场景静默降级，不抛错）。

const TOKEN_KEY = 'snapvault:token'

/**
 * 读取本地登录 token。
 * @returns {string} 无 token 时返回空串
 */
export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY) || ''
  } catch (e) {
    return ''
  }
}

/**
 * 写入本地登录 token（传空值等价于清除）。
 * @param {string} token
 */
export function setToken(token) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, String(token))
    else localStorage.removeItem(TOKEN_KEY)
  } catch (e) {
    /* 隐私模式 / 配额满：静默忽略 */
  }
  return token
}

/** 清除本地登录 token。 */
export function clearToken() {
  setToken('')
}

/**
 * 登录 —— 前端本地占位实现：任意账号 / 密码均可登录，不请求后端。
 *
 * 之所以不发请求：当前阶段登录功能无需后端实现，且后端未就绪时经 vite proxy
 * 会返回 HTTP 500。这里直接写入一个本地 token 供路由守卫使用。
 *
 * 真实联调时改回下面这行即可（其余不变）：
 *   const data = await request({ url: '/auth/login', method: 'POST', body: { username, password } })
 *   setToken(data && data.token); return data
 *
 * @param {string} username
 * @param {string} [password] 不校验
 * @returns {Promise<{ token: string, user: { name: string, email: string } }>}
 */
export async function login(username, password) {
  const token = `local-${Date.now().toString(36)}`
  setToken(token)
  return {
    token,
    user: { name: username || 'You', email: username || '' },
  }
}

/**
 * 登出：清本地 token。
 * 若后端有服务端登出接口，联调时在此追加 POST /api/auth/logout 请求。
 */
export function logout() {
  clearToken()
}
