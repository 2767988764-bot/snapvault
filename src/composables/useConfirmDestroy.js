import { ref } from 'vue'
import { toast, toastUndo } from './useToast'

// 全局破坏性操作的统一规范：二次确认 → 执行 → 可撤销通知。
//
// 模块级单例（与 useToast 同构）：任何页面 `import { confirmDestroy } from '@/composables/useConfirmDestroy'`
// 共享同一条确认队列，渲染由 App.vue 里常驻的 <ConfirmHost /> 承担。
//
// 用法：
//   await confirmDestroy({
//     title: '删除这份文档？',
//     message: '「X」将被移入回收站。',
//     confirmLabel: '删除',
//     onConfirm: () => store.removeByIds([id]),   // 抛错 = 失败，统一弹 error toast
//     undoTitle: '已删除「X」',
//     undoAction: () => store.restore(removed),   // 真正恢复状态（内存数组层面）
//   })
// 返回 true = 已确认并执行成功；false = 用户取消 / 执行失败。

// 当前待确认内容（null = 不显示）。字段由 ConfirmHost 渲染。
const pending = ref(null)

// 单次确认的 resolve；同时只允许一条
let settle = null

// 只负责「问」：返回用户是否确认（点遮罩 / Esc / 取消按钮 = false）
export function askConfirm({ title = '确认操作', message = '', confirmLabel = '确认', cancelLabel = '取消', danger = true } = {}) {
  // 前一条若还挂着，直接按取消处理，避免 Promise 永久悬空
  if (settle) {
    const prev = settle
    settle = null
    prev(false)
  }
  return new Promise((resolve) => {
    settle = resolve
    pending.value = { title, message, confirmLabel, cancelLabel, danger }
  })
}

// 由 ConfirmHost 调用：关闭弹层并结算
export function resolveConfirm(ok) {
  const fn = settle
  settle = null
  pending.value = null
  if (fn) fn(!!ok)
}

export function useConfirmDestroy() {
  return { pending, askConfirm, resolveConfirm, confirmDestroy }
}

export async function confirmDestroy({
  title,
  message,
  confirmLabel = '删除',
  cancelLabel = '取消',
  danger = true,
  onConfirm,
  // 成功后的常规提示（可选）：对象，或 (result) => 对象 | null
  successToast = null,
  // 失败提示标题；默认 `${confirmLabel} failed`
  failTitle = null,
  // 撤销通知
  undoTitle = '',
  undoMessage = '',
  undoLabel = '撤销',
  undoAction = null,
  undoDuration = 6000,
} = {}) {
  const ok = await askConfirm({ title, message, confirmLabel, cancelLabel, danger })
  if (!ok) return false

  let result
  try {
    result = await onConfirm?.()
  } catch (err) {
    // 主动取消（AbortError）不提示，与 Settings 既有 fail 分支一致
    if (err && err.name === 'AbortError') return false
    toast({ type: 'error', title: failTitle || `${confirmLabel} failed`, message: err?.message || String(err) })
    return false
  }

  if (successToast) {
    const opts = typeof successToast === 'function' ? successToast(result) : successToast
    if (opts) toast({ type: 'info', ...opts })
  }

  // 有撤销回调才提供「撤销」；没有可恢复的状态就不弹无效入口
  if (undoAction) {
    toastUndo({ title: undoTitle || `已${confirmLabel}`, message: undoMessage, label: undoLabel, onUndo: undoAction, duration: undoDuration })
  }
  return true
}
