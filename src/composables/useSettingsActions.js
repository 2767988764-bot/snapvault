// Settings「维护」区异步操作的对接点（预留，暂不实现真实业务）。
// 事件流：点击按钮 → runAction(kind) → clearCache / exportAll / backup({ signal })
// 接后端时把各函数体换成 fetch('/api/settings/...', { method: 'POST', signal }) 即可。
// 目前返回结构化假数据；传入 { fail: true } 可让函数 reject，用于演示失败分支。

// 模拟耗时任务，并让调用方的 AbortSignal 可以取消（取消时抛 AbortError）。
function wait(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'))
      return
    }
    const timer = setTimeout(resolve, ms)
    signal?.addEventListener(
      'abort',
      () => {
        clearTimeout(timer)
        reject(new DOMException('Aborted', 'AbortError'))
      },
      { once: true }
    )
  })
}

export async function clearCache({ signal, fail = false } = {}) {
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')
  await wait(760, signal)
  if (fail) throw new Error('cache is locked by another process')
  // TODO(backend): 真实清理逻辑；当前仅返回结构化结果
  return { action: 'clearCache', clearedFiles: 128, freedBytes: 41_943_040 }
}

export async function exportAll({ signal, fail = false } = {}) {
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')
  await wait(900, signal)
  if (fail) throw new Error('no writable export folder')
  // TODO(backend): 真实导出逻辑；当前仅返回结构化结果
  return { action: 'exportAll', documents: 342, format: 'pdf' }
}

export async function backup({ signal, fail = false } = {}) {
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')
  await wait(820, signal)
  if (fail) throw new Error('backup drive not connected')
  // TODO(backend): 真实备份逻辑；当前仅返回结构化结果
  return { action: 'backup', snapshot: 'snapvault-2026-10-04', sizeMB: 218 }
}
