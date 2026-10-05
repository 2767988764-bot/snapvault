<script setup>
// 通用骨架卡片：variant = card（库文件网格卡）| row（Review 横向条目）| list（Search 细长行）
// 占位块用 --sv-surface-2 / --sv-surface-3 / --sv-line，shimmer 为纯 CSS 动画，
// reduced-motion 下由全局规则 + 下方 @media 双保险退化为静态占位。
defineProps({
  variant: { type: String, default: 'card' },
})
</script>

<template>
  <div
    class="sk"
    :class="`sk--${variant}`"
    data-pencil-name="SkeletonCard"
    :data-variant="variant"
    aria-hidden="true"
  >
    <!-- card：与 FilePreview 同构（268px 卡片 + 文件名 + 元信息） -->
    <template v-if="variant === 'card'">
      <div class="sk-mat">
        <div class="sk-page">
          <span class="sk-bar sk-accent"></span>
          <span class="sk-bar w-100"></span>
          <span class="sk-bar w-100"></span>
          <span class="sk-bar w-70"></span>
          <span class="sk-bar w-100"></span>
        </div>
      </div>
      <span class="sk-bar sk-title w-80"></span>
      <span class="sk-bar sk-meta w-45"></span>
    </template>

    <!-- row：与 ReviewItem 同构（图标方块 + 三行文字） -->
    <template v-else-if="variant === 'row'">
      <span class="sk-box"></span>
      <div class="sk-col">
        <span class="sk-bar sk-title w-45"></span>
        <span class="sk-bar w-70"></span>
        <span class="sk-bar sk-meta w-30"></span>
      </div>
    </template>

    <!-- list：细长单行（Search 结果行） -->
    <template v-else>
      <span class="sk-dot"></span>
      <div class="sk-col">
        <span class="sk-bar sk-title w-60"></span>
        <span class="sk-bar sk-meta w-35"></span>
      </div>
    </template>
  </div>
</template>

<style scoped>
.sk {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 200px;
  min-width: 0;
  max-width: 215px;
}

/* ---- card ---- */
.sk-mat {
  align-items: flex-start;
  background-color: var(--sv-surface-2);
  border: 1px solid var(--sv-line);
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  height: 268px;
  overflow: hidden;
  padding: 4px;
  width: 100%;
}
.sk-page {
  background-color: var(--sv-surface);
  border-radius: var(--sv-radius-sm);
  box-sizing: border-box;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 18px 14px;
}
.sk-accent {
  background-color: var(--sv-accent-soft);
  background-image: none;
  border-radius: 3px;
  height: 6px;
  width: 30px;
}

/* ---- row ---- */
.sk--row {
  align-items: center;
  background-color: var(--sv-surface);
  border: 1px solid var(--sv-line);
  border-radius: var(--sv-radius-lg);
  flex: 0 0 auto;
  flex-direction: row;
  gap: 16px;
  max-width: none;
  padding: 15px 18px;
  width: 100%;
}
.sk-box {
  background-color: var(--sv-surface-2);
  border-radius: 11px;
  flex-shrink: 0;
  height: 44px;
  width: 44px;
}

/* ---- list ---- */
.sk--list {
  align-items: center;
  flex: 0 0 auto;
  flex-direction: row;
  gap: 12px;
  max-width: none;
  padding: 10px 0;
  width: 100%;
}
.sk-dot {
  background-color: var(--sv-surface-2);
  border-radius: var(--sv-radius-sm);
  flex-shrink: 0;
  height: 22px;
  width: 22px;
}

.sk-col {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

/* ---- 占位块 + shimmer ---- */
.sk-bar {
  animation: sk-shimmer 1.4s ease-in-out infinite;
  background-color: var(--sv-surface-2);
  background-image: linear-gradient(
    90deg,
    var(--sv-surface-2) 0%,
    var(--sv-surface-3) 50%,
    var(--sv-surface-2) 100%
  );
  background-size: 220% 100%;
  border-radius: 4px;
  display: block;
  flex-shrink: 0;
  height: 8px;
}
.sk-title {
  height: 10px;
}
.w-30 { width: 30%; }
.w-35 { width: 35%; }
.w-45 { width: 45%; }
.w-60 { width: 60%; }
.w-70 { width: 70%; }
.w-80 { width: 80%; }
.w-100 { width: 100%; }

@keyframes sk-shimmer {
  0% { background-position: 120% 0; }
  100% { background-position: -120% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .sk-bar {
    animation: none;
    background-image: none;
  }
}
</style>
