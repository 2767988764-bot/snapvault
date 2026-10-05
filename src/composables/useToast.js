import { ref } from 'vue'

// 全局 Toast 通知：模块级单例。
// 任何页面 `import { useToast } from '@/composables/useToast'` 后共享同一份队列，
// 渲染由 App.vue 里常驻的 <ToastHost /> 统一承担。

const DEFAULT_DURATION = 4000 // 毫秒；传 0 表示常驻，只能手动关闭或点 action

// 队列顺序即渲染顺序：新 toast 排在最前（最靠上），多条自动向下堆叠
const toasts = ref([])

let seq = 0

// 计时句柄 / 剩余时长按 id 存在响应式数据之外，避免污染渲染数据
const timers = new Map()

export function toast({ type = 'info', title = '', message = '', duration = DEFAULT_DURATION, action = null } = {}) {
  const id = ++seq
  toasts.value.unshift({ id, type, title: String(title), message, action })
  if (duration > 0) {
    timers.set(id, { handle: setTimeout(() => dismiss(id), duration), remaining: duration, startedAt: Date.now() })
  }
  return id
}

export function dismiss(id) {
  const entry = timers.get(id)
  if (entry) {
    clearTimeout(entry.handle)
    timers.delete(id)
  }
  toasts.value = toasts.value.filter((t) => t.id !== id)
}

// 悬停暂停倒计时：扣掉已经走过的时间，收起后从剩余时长继续
export function pause(id) {
  const entry = timers.get(id)
  if (!entry || !entry.handle) return
  clearTimeout(entry.handle)
  entry.handle = null
  entry.remaining = Math.max(0, entry.remaining - (Date.now() - entry.startedAt))
}

export function resume(id) {
  const entry = timers.get(id)
  if (!entry || entry.handle) return
  if (entry.remaining <= 0) {
    dismiss(id)
    return
  }
  entry.startedAt = Date.now()
  entry.handle = setTimeout(() => dismiss(id), entry.remaining)
}

// 破坏性操作统一用「可撤销」通知：undo 型 + 单个 action 按钮。
// 撤销回调由调用方提供（真正恢复被删/被清的状态），点击后 ToastHost 会自动关闭该条。
export function toastUndo({ title = '', message = '', label = '撤销', onUndo, duration = 6000 } = {}) {
  return toast({
    type: 'undo',
    title,
    message,
    duration,
    action: onUndo ? { label, onClick: onUndo } : null,
  })
}

export function useToast() {
  return { toasts, toast, toastUndo, dismiss, pause, resume }
}
