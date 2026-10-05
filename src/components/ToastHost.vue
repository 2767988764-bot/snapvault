<script setup>
import { useToast } from '@/composables/useToast'

const { toasts, dismiss, pause, resume } = useToast()

// 点 action：先执行回调，无论成败都关掉该条
function runAction(t) {
  try {
    t.action?.onClick?.(t)
  } finally {
    dismiss(t.id)
  }
}
</script>

<template>
  <Teleport to="body">
    <div class="toast-host" data-pencil-name="ToastHost" aria-live="polite" aria-label="Notifications">
      <TransitionGroup name="toast" tag="div" class="toast-stack">
        <div
          v-for="t in toasts"
          :key="t.id"
          class="toast"
          :class="`is-${t.type}`"
          :data-toast-type="t.type"
          @mouseenter="pause(t.id)"
          @mouseleave="resume(t.id)"
        >
          <span class="toast-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <template v-if="t.type === 'success'"><path d="M20 6 9 17l-5-5" /></template>
              <template v-else-if="t.type === 'error'">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </template>
              <template v-else-if="t.type === 'undo'">
                <path d="M3 3v5h5" />
                <path d="M3.5 8a9 9 0 1 1-1.1 6" />
              </template>
              <template v-else>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </template>
            </svg>
          </span>

          <div class="toast-body">
            <div class="toast-title">{{ t.title }}</div>
            <div v-if="t.message" class="toast-message">{{ t.message }}</div>
          </div>

          <button v-if="t.action" class="toast-action" type="button" @click="runAction(t)">
            {{ t.action.label }}
          </button>

          <button class="toast-close" type="button" aria-label="Dismiss" @click="dismiss(t.id)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.toast-host {
  position: fixed;
  top: 80px; /* 常驻导航 64px 之下，不遮挡导航操作 */
  right: 24px;
  z-index: 300; /* 高于所有页面层级 */
  width: 360px;
  pointer-events: none; /* 空白区域不拦截页面点击 */
}

.toast-stack {
  position: relative;
}

.toast {
  --tc: var(--sv-ink);
  --tc-soft: var(--sv-surface-2);

  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  padding: 12px 12px 12px 14px;
  background-color: var(--sv-surface);
  border-radius: var(--sv-radius-lg);
  box-shadow:
    inset 0 0 0 1px var(--sv-line),
    inset 3px 0 0 var(--tc),
    0 14px 34px rgba(22, 24, 29, 0.18);
  font-family: var(--sv-font-body);
}

/* 类型化配色：全部落到 tokens.css 的 --sv-* 体系 */
.toast.is-success {
  --tc: var(--sv-success);
  --tc-soft: var(--sv-success-soft);
}
.toast.is-error {
  --tc: var(--sv-danger);
  --tc-soft: var(--sv-danger-soft);
}
.toast.is-info {
  --tc: var(--sv-ink);
  --tc-soft: var(--sv-surface-2);
}
.toast.is-undo {
  --tc: var(--sv-accent);
  --tc-soft: var(--sv-accent-soft);
}

.toast-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: var(--tc-soft);
  color: var(--tc);
}
.toast-icon svg {
  width: 15px;
  height: 15px;
}

.toast-body {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 3px;
}
.toast-title {
  color: var(--sv-ink);
  font-size: 13.5px;
  font-weight: 600;
}
.toast-message {
  color: var(--sv-ink-2);
  font-size: 12.5px;
  overflow-wrap: anywhere;
}

.toast-action {
  flex-shrink: 0;
  align-self: center;
  padding: 6px 10px;
  border: 0;
  border-radius: var(--sv-radius-sm);
  background-color: var(--tc-soft);
  color: var(--tc);
  font-family: var(--sv-font-body);
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: filter var(--sv-dur-fast) var(--sv-ease-out);
}
.toast-action:hover {
  filter: brightness(0.95);
}

.toast-close {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 0;
  border-radius: var(--sv-radius-sm);
  background-color: transparent;
  color: var(--sv-ink-3);
  cursor: pointer;
  transition:
    background-color var(--sv-dur-fast) var(--sv-ease-out),
    color var(--sv-dur-fast) var(--sv-ease-out);
}
.toast-close:hover {
  background-color: var(--sv-surface-2);
  color: var(--sv-ink);
}
.toast-close svg {
  width: 14px;
  height: 14px;
}

/* 进入 / 离场：transform + opacity，时长走 --sv-dur-move；
   全局 prefers-reduced-motion 会把 transition-duration 压到 0.01ms，动画即退化为瞬时 */
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(18px) scale(0.98);
}
.toast-enter-active,
.toast-leave-active {
  transition:
    opacity var(--sv-dur-move) var(--sv-ease-out),
    transform var(--sv-dur-move) var(--sv-ease-out);
}
/* 离场时脱离文档流，让下方 toast 平滑上移（而非等它消失后跳变） */
.toast-leave-active {
  position: absolute;
  left: 0;
  right: 0;
}
.toast-move {
  transition: transform var(--sv-dur-move) var(--sv-ease-out);
}
</style>
