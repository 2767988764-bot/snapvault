<script setup>
import { nextTick, ref, watch } from 'vue'
import { useConfirmDestroy } from '@/composables/useConfirmDestroy'

// 全局二次确认层的渲染宿主：常驻 App.vue，Teleport 到 body，跨路由不重挂。
// 交互：Esc / 点遮罩 / 取消按钮 = 取消；确认按钮（或对话框上按 Enter）= 执行。
const { pending, resolveConfirm } = useConfirmDestroy()
const dialogEl = ref(null)

watch(pending, (v) => {
  if (v) nextTick(() => dialogEl.value?.focus())
})

function onKeydown(e) {
  if (e.key === 'Escape') {
    e.stopPropagation()
    resolveConfirm(false)
    return
  }
  // 焦点停在对话框容器（非按钮）上时，Enter 等价于点确认
  if (e.key === 'Enter' && e.target === dialogEl.value) {
    e.preventDefault()
    resolveConfirm(true)
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="pending"
      class="cd-mask"
      data-pencil-name="ConfirmDestroy"
      @click.self="resolveConfirm(false)"
      @keydown="onKeydown"
    >
      <div
        ref="dialogEl"
        class="cd-dialog"
        :class="{ 'is-danger': pending.danger }"
        data-pencil-name="ConfirmDialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cd-title"
        tabindex="-1"
      >
        <div id="cd-title" class="cd-title" data-pencil-name="ConfirmTitle">{{ pending.title }}</div>
        <p v-if="pending.message" class="cd-text" data-pencil-name="ConfirmText">{{ pending.message }}</p>
        <div class="cd-actions">
          <button
            type="button"
            class="cd-btn cd-btn-cancel sv-focus"
            data-pencil-name="ConfirmCancel"
            @click="resolveConfirm(false)"
          >
            {{ pending.cancelLabel }}
          </button>
          <button
            type="button"
            class="cd-btn cd-btn-accept sv-focus"
            data-pencil-name="ConfirmAccept"
            @click="resolveConfirm(true)"
          >
            {{ pending.confirmLabel }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.cd-mask {
  position: fixed;
  inset: 0;
  z-index: 300; /* 与 ToastHost 同级；确认层先于 toast 出现 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(12, 12, 14, 0.45);
  animation: cd-mask-in var(--sv-dur-move) var(--sv-ease-out) both;
}
@keyframes cd-mask-in {
  from {
    opacity: 0;
  }
}
.cd-dialog {
  --rise-from: 6px;
  --rise-scale: 0.98;
  width: 380px;
  padding: 22px;
  background-color: var(--sv-surface);
  border-radius: var(--sv-radius-lg);
  box-shadow: 0 24px 60px rgba(22, 24, 29, 0.28);
  outline: none;
  animation: sv-rise-in var(--sv-dur-move) var(--sv-ease-out) both;
}
.cd-title {
  margin-bottom: 8px;
  color: var(--sv-ink);
  font-family: var(--sv-font-body);
  font-size: 16px;
  font-weight: 700;
}
.cd-text {
  margin: 0 0 20px;
  color: var(--sv-ink-2);
  font-family: var(--sv-font-body);
  font-size: 13px;
  line-height: 1.5;
}
.cd-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.cd-btn {
  padding: 9px 16px;
  border-radius: var(--sv-radius-md);
  font-family: var(--sv-font-body);
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color var(--sv-dur-fast) var(--sv-ease-out),
    border-color var(--sv-dur-fast) var(--sv-ease-out);
}
.cd-btn-cancel {
  border: 1px solid var(--sv-line-2);
  background-color: var(--sv-surface);
  color: var(--sv-ink);
}
.cd-btn-cancel:hover {
  background-color: var(--sv-surface-2);
}
.cd-btn-accept {
  border: 1px solid var(--sv-accent);
  background-color: var(--sv-accent);
  color: #ffffff;
}
.cd-btn-accept:hover {
  filter: brightness(0.94);
}
/* 破坏性操作（删除 / 清缓存）按钮走 danger 红；非破坏性仍用主色 */
.cd-dialog.is-danger .cd-btn-accept {
  border-color: var(--sv-danger);
  background-color: var(--sv-danger);
}
</style>
