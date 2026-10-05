<template>
  <!-- 库文件卡：由 Results 网格按批渲染，3D 倾斜由父级 Results 的事件委托驱动 -->
  <div
    data-pencil-name="FilePreview"
    data-clickable
    @click="router.push({ path: '/document-detail', query: { id: doc.id } })"
    style="align-items: flex-start; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 200px; gap: 10px; height: fit-content; justify-content: flex-start; max-width: 215px; min-width: 0px"
  >
    <div
      data-pencil-name="PreviewMat"
      style="align-items: flex-start; background-color: #EEEFF2; border-radius: 12px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 268px; justify-content: flex-start; overflow: hidden; padding: 4px; position: relative; width: 100%"
    >
      <div
        data-pencil-name="Page"
        style="align-items: flex-start; background-color: #FFFFFF; border-radius: 6px; box-shadow: 0px 8px 18px #16181D1F; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 8px; height: 100%; justify-content: flex-start; padding: 18px 14px; position: relative; z-index: 0"
      >
        <div
          data-pencil-name="PageAccent"
          :style="`background-color: ${doc.accent}; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 30px`"
        ></div>
        <div
          data-pencil-name="PageTitle"
          style="background-color: #C2C9D5; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 8px; width: 100%"
        ></div>
        <div
          v-for="(w, i) in LINE_WIDTHS"
          :key="i"
          data-pencil-name="PageLine"
          :style="`background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: ${w}`"
        ></div>
        <div
          data-pencil-name="PageBlock"
          style="background-color: #F1F3F7; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 36px; width: 100%"
        ></div>
      </div>
      <SelectBadge :selected="selected" style="top: 10px; left: 177px" @toggle="emit('toggle', doc.id)" />
    </div>
    <div
      data-pencil-name="PreviewMeta"
      style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: space-between; width: 100%"
    >
      <div
        data-pencil-name="NameCol"
        style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
      >
        <div
          data-pencil-name="FileName"
          style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
        >
          {{ doc.name }}
        </div>
        <div
          data-pencil-name="FileMeta"
          style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
        >
          {{ doc.meta }}
        </div>
      </div>
      <div
        data-pencil-name="StatusPill"
        :style="`align-items: center; background-color: ${doc.pillBg}; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 4px; height: fit-content; justify-content: flex-start; padding: 3px 7px; width: fit-content`"
      >
        <svg
          data-pencil-name="StatusIcon"
          data-icon-name="check"
          data-icon-set="lucide"
          viewBox="0 0 13.99993896484375 14"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          style="box-sizing: border-box; flex-shrink: 0; height: 10px; width: 10px"
        >
          <path :d="CHECK_PATH" :fill="doc.statusColor"></path>
        </svg>
        <div
          data-pencil-name="StatusText"
          :style="`box-sizing: border-box; color: ${doc.statusColor}; font-family: &quot;Instrument Sans&quot;, system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap`"
        >
          {{ doc.status }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SelectBadge from './SelectBadge.vue'

// 库文件卡（设计稿 04 · Library · Pulled Up 的 FilePreview 单元）
// 页面骨架块的固定宽度序列（100% 为整行，其余为短行结尾）
defineProps({
  doc: { type: Object, required: true },
  // 批量选择：由列表持有选中集，卡片只负责展示 + 上报切换
  selected: { type: Boolean, default: false },
})

const emit = defineEmits(['toggle'])

const router = useRouter()

const LINE_WIDTHS = ['100%', '100%', '70px', '100%', '100%', '100%', '100%', '52px']

// lucide check 图标路径（Check 徽标与 StatusPill 共用，仅 fill 不同）
const CHECK_PATH =
  'M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z'
</script>

<style scoped>
/* 3D 倾斜：translate 承载 hover 上浮（JS 只写 transform，两者互不覆盖） */
[data-pencil-name="FilePreview"] {
  perspective: 1000px;
  translate: 0 0;
  transition: translate 200ms ease-out;
}
[data-pencil-name="FilePreview"].is-tilted {
  translate: 0 -4px;
  will-change: transform;
}
[data-pencil-name="PreviewMat"] {
  transition: border-color 240ms ease;
}
[data-pencil-name="FilePreview"].is-tilted [data-pencil-name="PreviewMat"] {
  border-color: #2b5bd7 !important;
}
[data-pencil-name="FilePreview"] [data-pencil-name="Page"] {
  transition: transform 200ms ease-out;
}
[data-pencil-name="FilePreview"].is-tilted [data-pencil-name="Page"] {
  will-change: transform;
}

/* 批量选择角标样式见 SelectBadge.vue（网格卡 / 列表行共用） */
</style>
