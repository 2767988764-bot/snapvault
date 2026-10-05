<template>
      <div class="page-root"
        data-pencil-name="04 · Library · Pulled Up"
        style="align-items: flex-start; background-image: url('/assets/bg-0.webp'); background-repeat: no-repeat; background-size: 100% 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 0px; height: 900px; justify-content: flex-start; overflow: hidden; position: relative; width: 1440px"
      >
        <div
          data-pencil-name="PanelWrap"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 0px; justify-content: flex-start; position: relative; width: 100%; z-index: 1"
        >
          <div
            data-pencil-name="LibraryPanel"
            style="align-items: flex-start; background-color: #ffffff00; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 0px; justify-content: flex-start; overflow: hidden; position: relative; width: 100%"
          >
            <div v-if="focused" class="sf-dim" aria-hidden="true"></div>
            <div
              ref="resultsEl"
              data-pencil-name="Results"
              style="align-items: flex-start; bottom: 0px; box-sizing: border-box; display: flex; flex-direction: column; gap: 16px; justify-content: flex-start; left: 0px; overflow-y: auto; padding: 18px 40px 36px 40px; position: absolute; right: 0px; top: 246px; z-index: 0"
              @mousemove="onCardMove" @mouseleave="onCardsLeave"
            >
              <!-- 加载态：6 张骨架卡（与真实网格同尺寸、同弹性布局） -->
              <div
                v-if="listLoading"
                class="rs-grid"
                data-pencil-name="ResultsSkeleton"
                aria-hidden="true"
              >
                <SkeletonCard v-for="i in 6" :key="i" variant="card" />
              </div>

              <!-- 空态：还没有文档 → 引导去扫描 / 导入 -->
              <div v-else-if="isEmpty" class="rs-empty" data-pencil-name="ResultsEmpty">
                <EmptyState
                  icon="file-text"
                  title="还没有文件，扫描或导入第一份文档"
                  description="扫描纸质材料或导入已有文件，SnapVault 会自动建立可搜索层与标签。"
                  action-text="扫描 / 导入"
                  @action="router.push('/scan-import')"
                />
              </div>
              <!-- 真实网格：分批追加（每批 24 条，每行 6 张） -->
              <template v-if="!listLoading && !isEmpty">
                <!-- 网格视图：每行 6 张卡片 -->
                <template v-if="viewMode === 'grid'">
                  <div
                    v-for="(row, ri) in visibleRows"
                    :key="'row-' + ri"
                    data-pencil-name="PreviewRow"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; flex-wrap: wrap; gap: 14px; height: fit-content; justify-content: flex-start; width: 100%"
                  >
                    <FilePreviewCard
                      v-for="doc in row"
                      :key="doc.id"
                      :doc="doc"
                      :selected="isSelected(doc.id)"
                      @toggle="toggleSelect"
                    />
                  </div>
                </template>

                <!-- 列表视图：单行缩略图 + 名称 + meta + 标签 -->
                <div v-else class="rs-list" data-pencil-name="ResultsList">
                  <FileRowItem
                    v-for="doc in visibleCards"
                    :key="doc.id"
                    :doc="doc"
                    :selected="isSelected(doc.id)"
                    @toggle="toggleSelect"
                  />
                </div>

                <!-- 底栏三态：加载中 spinner / 手动加载更多 / 已加载全部 -->
                <div
                  data-pencil-name="LoadMore"
                  :data-state="loadingMore ? 'loading' : hasMore ? 'more' : 'done'"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: 42px; justify-content: center; width: 100%"
                  @click="loadMore()"
                >
                  <span v-if="loadingMore" class="rs-spinner" aria-hidden="true"></span>
                  <svg
                    v-else-if="hasMore"
                    data-pencil-name="LoadMoreIcon"
                    data-icon-name="plus"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                  >
                    <path
                      d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                      fill="#59606E"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="LoadMoreText"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    {{ loadingMore ? 'Loading…' : hasMore ? 'Load more documents' : '已加载全部 ' + docs.length + ' 条' }}
                  </div>
                </div>
              </template>

              <!-- 底部哨兵：距底 200px 时触发追加下一批 -->
              <div ref="sentinel" class="rs-sentinel" aria-hidden="true"></div>
            </div>
            <!-- 设计稿搜索式头部：四个绝对定位块直接浮于 LibraryPanel（无底板），与 search 页头部一致 -->
            <div
              data-pencil-name="SearchHeader"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; height: fit-content; justify-content: space-between; left: 40px; position: absolute; right: 40px; top: 80px; z-index: 1"
            >
              <div
                data-pencil-name="SearchHeaderLeft"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 12px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="SearchCount"
                  style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 3px 10px; width: fit-content"
                >
                  <div
                    data-pencil-name="SearchCountText"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    4 of 11 documents
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="SearchHeaderRight"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="ViewToggle"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 2px; height: 32px; justify-content: flex-start; padding: 3px; width: fit-content"
                >
                  <div
                    data-pencil-name="GridBtn"
                    class="vt-btn sv-focus"
                    :class="{ 'is-active': viewMode === 'grid' }"
                    role="button"
                    tabindex="0"
                    :aria-pressed="viewMode === 'grid'"
                    aria-label="Grid view"
                    data-clickable
                    style="align-items: center; background-color: #FFFFFF00; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 26px; justify-content: center; width: 30px"
                    @click="setViewMode('grid')"
                    @keydown.enter.prevent="setViewMode('grid')"
                    @keydown.space.prevent="setViewMode('grid')"
                  >
                    <svg
                      data-pencil-name="GridIcon"
                      data-icon-name="layout-grid"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M2.03027 1.20313q-0.22559 0.07178-0.42724 0.23242-0.20166 0.16064-0.30078 0.36914l-0.02735 0.03076q-0.05811 0.12305-0.07177 0.2085-0.02734 0.12646-0.02735 0.44775l0 1.04932 0 1.66796q0 0.24951 0.02735 0.34864 0.07178 0.28027 0.32128 0.51953 0.11279 0.10938 0.22559 0.18115 0.11279 0.06836 0.2666 0.11279l0.12647 0.04102 3.06591 0q0.24951-0.01367 0.33497-0.02734 0.30762-0.08545 0.52978-0.30762 0.22559-0.22559 0.31104-0.5332 0.01367-0.08545 0.02734-0.33497l0-3.06591-0.04102-0.12647q-0.04443-0.16748-0.11621-0.27344-0.06836-0.10596-0.1914-0.23242-0.15381-0.15381-0.29395-0.22217l-0.01709-0.01367q-0.12305-0.05811-0.22217-0.07178-0.12646-0.02734-0.47509-0.02734l-1.14844 0-1.52783 0q-0.24951 0.01367-0.34864 0.02734z m6.43946-0.00001q-0.28027 0.05811-0.53321 0.30762-0.12305 0.12646-0.19482 0.23242-0.06836 0.10596-0.11279 0.27344l-0.04102 0.12647 0 3.06591q0.01367 0.2666 0.02734 0.33497 0.08545 0.30762 0.30762 0.5332 0.22559 0.22217 0.5332 0.30762 0.06836 0.01367 0.33497 0.02734l3.06591 0 0.12647-0.04102q0.16748-0.04443 0.27344-0.11279 0.10596-0.07178 0.23242-0.19482 0.23584-0.23926 0.30761-0.53321 0.02734-0.12646 0.03418-1.74316 0.00684-1.6167-0.03418-1.72949-0.07178-0.30762-0.30419-0.53662-0.229-0.23242-0.53663-0.31788-0.09912-0.02734-0.33496-0.02734l-1.41504 0q-1.62354 0-1.73632 0.02734z m-3.21973 2.59083l0 1.45605-2.92578 0 0-2.92578 2.92578 0 0 1.46973z m6.42578 0l0 1.45605-2.92578 0 0-2.92578 2.92578 0 0 1.46973z m-9.47803 3.79394q-0.39307 0.04102-0.68701 0.34863-0.23584 0.22559-0.30761 0.50586-0.02734 0.09912-0.02735 0.34864l0 1.41503 0 1.30225q0 0.32129 0.02735 0.44775 0.01367 0.08545 0.07177 0.2085l0.02735 0.03076q0.09912 0.22217 0.30761 0.38281 0.2085 0.16065 0.44776 0.21875 0.11279 0.04102 1.72949 0.03418 1.6167-0.00684 1.74316-0.03418 0.29395-0.07178 0.53321-0.30761 0.12305-0.12646 0.1914-0.23242 0.07178-0.10596 0.11621-0.27344l0.04102-0.12647 0-3.06591q-0.01367-0.24951-0.02734-0.33497-0.08545-0.30762-0.31788-0.52978-0.229-0.22559-0.52294-0.31104-0.06836-0.01367-0.34864-0.02734l-1.31592 0q-1.55518-0.01367-1.68164 0z m6.42579 0q-0.22217 0.02734-0.37598 0.11279-0.23926 0.11279-0.3999 0.30762-0.16064 0.19482-0.23243 0.44775-0.01367 0.06836-0.02734 0.33497l0 3.06591 0.04102 0.12647q0.04443 0.16748 0.11279 0.27344 0.07178 0.10596 0.19482 0.23242 0.23926 0.23584 0.53321 0.30761 0.12646 0.02734 1.74316 0.03418 1.6167 0.00684 1.72949-0.03418 0.23926-0.0581 0.44776-0.21875 0.2085-0.16065 0.30761-0.38281l0.02735-0.03076q0.05811-0.12305 0.07178-0.2085 0.02734-0.12646 0.02734-0.44775l0-2.59082q0-0.33496-0.02734-0.46143-0.01367-0.08545-0.07178-0.20849l-0.01367-0.03076q-0.06836-0.12646-0.22217-0.28028-0.15381-0.15381-0.29395-0.22216l-0.03076-0.01368q-0.12305-0.07178-0.2085-0.08545-0.11279-0.01367-0.4204-0.02734l-1.23047 0q-1.56885 0-1.68164 0.01367l0-0.01367z m-3.37354 2.61816l0 1.46973-2.92578 0 0-2.92578 2.92578 0 0 1.45605z m6.42578 0l0 1.46973-2.92578 0 0-2.92578 2.92578 0 0 1.45605z"
                        fill="#16181D"
                      ></path>
                    </svg>
                  </div>
                  <div
                    data-pencil-name="ListBtn"
                    class="vt-btn sv-focus"
                    :class="{ 'is-active': viewMode === 'list' }"
                    role="button"
                    tabindex="0"
                    :aria-pressed="viewMode === 'list'"
                    aria-label="List view"
                    data-clickable
                    style="align-items: center; background-color: #FFFFFF00; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 26px; justify-content: center; width: 30px"
                    @click="setViewMode('list')"
                    @keydown.enter.prevent="setViewMode('list')"
                    @keydown.space.prevent="setViewMode('list')"
                  >
                    <svg
                      data-pencil-name="ListIcon"
                      data-icon-name="list"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M1.65088 2.35156q-0.18115 0.02734-0.32129 0.16748-0.2085 0.21191-0.15381 0.50586 0.05469 0.29395 0.32129 0.42041 0.09912 0.04102 0.25293 0.04102 0.25293 0 0.42041-0.16748 0.12646-0.12646 0.15381-0.29395 0.05469-0.30762-0.15723-0.51611-0.2085-0.21191-0.51611-0.15723z m2.92578-0.01367q-0.23584 0.04102-0.38281 0.24609-0.14697 0.20166-0.09229 0.44092 0.01367 0.0957 0.04785 0.16748 0.0376 0.06836 0.1128 0.14014 0.07861 0.06836 0.16064 0.11279l0.09912 0.04102 7.88184 0 0.09912-0.04102q0.2666-0.12646 0.32129-0.42041 0.05469-0.29395-0.15381-0.50586-0.14014-0.14014-0.33496-0.16748-0.09912-0.02734-3.8794-0.02734-3.78027 0-3.87939 0.01367z m-2.98047 4.10156q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.23926 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.15381 0.15381 0.3999 0.16748 0.24609 0.01367 0.42041-0.16065 0.17432-0.17432 0.17432-0.41357 0-0.23926-0.16748-0.3999-0.16748-0.16064-0.39307-0.17432-0.14014 0-0.18115 0.01367z m2.88477 0.01368q-0.23926 0.08545-0.34522 0.3247-0.10254 0.23584-0.00683 0.46143 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.18457 0.12647l0.09571 0.02734 7.86816 0 0.08545-0.04102q0.06836-0.04443 0.15039-0.12646 0.08545-0.08545 0.12647-0.16065 0.04443-0.07861 0.04443-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-3.93408 0q-3.94775 0-4.00244 0.02735z m-2.8711 4.06054q-0.12646 0.02734-0.23925 0.1333-0.10938 0.10596-0.16748 0.23243-0.0957 0.24951 0.04443 0.48876 0.14014 0.23926 0.41699 0.28711 0.28027 0.04785 0.49561-0.16064 0.21875-0.21191 0.16406-0.50586-0.02734-0.18115-0.15381-0.30762-0.11279-0.11279-0.25977-0.15381-0.14697-0.04102-0.30078-0.01367z m2.91211 0q-0.14014 0.04102-0.2666 0.16748-0.16748 0.15381-0.17432 0.37256-0.00684 0.21533 0.12647 0.39307 0.1333 0.17432 0.35547 0.21533 0.09912 0.01367 3.96142 0l3.85205 0 0.1128-0.04102q0.2085-0.11279 0.29053-0.32129 0.08545-0.21191 0.00683-0.4204-0.0752-0.21192-0.28369-0.32471l-0.09912-0.04102-3.90674-0.01367q-3.90674 0-3.9751 0.01367z"
                        fill="#8A909C"
                      ></path>
                    </svg>
                  </div>
                </div>
                <SortMenu
                  ref="sortMenuRef"
                  :label="sortLabel"
                  :options="SORT_OPTIONS"
                  :active-index="sortIndex"
                  :selected-key="sortKey"
                  :open="sortOpen"
                  @toggle="toggleSort"
                  @choose="chooseSort"
                  @keydown="onSortKeydown"
                />
              </div>
            </div>
            <div
              data-pencil-name="SearchBar"
              class="sf-bar"
              :class="{ 'sf-raised': focused }"
              style="align-items: center; background-color: #FFFFFF; border-radius: 12px; border: 2px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; gap: 11px; height: 52px; justify-content: flex-start; left: 40px; padding: 0px 16px; position: absolute; right: 40px; top: 126px; z-index: 1"
            >
              <svg
                      data-pencil-name="SearchBarIcon"
                      data-icon-name="search"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 18px; width: 18px"
                    >
                      <path
                        d="M6.00537 1.17578q-0.04102 0.01367-0.23584 0.02734-0.57422 0.07178-1.16211 0.29053-0.58789 0.21533-1.09375 0.5503-0.39307 0.2666-0.74853 0.61181-0.35547 0.3418-0.62207 0.7041-0.646 0.92285-0.86817 2.03028-0.05811 0.28027-0.07861 0.46142-0.02051 0.18115-0.02051 0.57422 0 0.43408 0.02734 0.68018 0.02734 0.24268 0.12647 0.59472 0.19482 0.75537 0.60156 1.43555 0.40674 0.67676 0.96729 1.18262 0.40674 0.3623 0.81689 0.60156 0.41357 0.23926 0.91944 0.43408 1.06299 0.39307 2.21826 0.29395 1.15527-0.09912 2.1499-0.65967 0.12646-0.06836 0.33496-0.2085 0.2085-0.14014 0.29395-0.21191l0.05468-0.05469 1.10743 1.10742q1.12109 1.104 1.20312 1.15528 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-1.15186-1.20654l-1.10742-1.10743 0.05469-0.06836q0.05811-0.05469 0.19824-0.25293 0.82373-1.23047 0.89209-2.70703 0.07178-1.47656-0.63916-2.76513-0.5332-0.96729-1.42187-1.64405-0.88867-0.68018-1.95508-0.9331-0.29395-0.06836-0.54004-0.09571-0.24268-0.03076-0.60498-0.04443-0.43408 0-0.49219 0z m0.7417 1.17578q0.37939 0.01367 0.79297 0.14014 0.41357 0.12646 0.78955 0.32129 0.7417 0.39307 1.28857 1.08008 0.54687 0.68359 0.75538 1.49707 0.07178 0.28027 0.09228 0.49902 0.02051 0.21533 0.02051 0.50928 0 0.70068-0.19483 1.30224-0.39307 1.16211-1.33984 1.91065-0.94336 0.74853-2.16016 0.875-0.19824 0.01367-0.49218 0.00683-0.29395-0.00684-0.48877-0.03418-0.5332-0.08545-1.03907-0.30761-0.50244-0.22559-0.93652-0.56055-0.14014-0.12646-0.35205-0.3418-0.2085-0.21875-0.33154-0.37256-0.57422-0.76904-0.7417-1.69531-0.08545-0.43408-0.06494-0.90918 0.02051-0.4751 0.11963-0.89551 0.29395-1.14844 1.18945-1.95849 0.89551-0.81348 2.05762-1.02539 0.18115-0.02734 0.42041-0.04102 0.23926-0.01367 0.34863-0.01367l0.2666 0.01367z"
                        fill="#2B5BD7"
                      ></path>
                    </svg>
              <input
                ref="inputRef"
                data-pencil-name="SearchQuery"
                class="sf-input"
                type="text"
                :value="query"
                placeholder="Search by title, full text, or tag"
                autocomplete="off"
                spellcheck="false"
                @input="onInput"
                @focus="open"
                @click="open"
                @blur="onBlur"
                @keydown="onKey"
              />
              <svg
                      data-pencil-name="SearchClear"
                      class="sf-clear"
                      :class="{ hidden: !query }"
                      @mousedown.prevent
                      @click="clear"
                      data-icon-name="circle-x"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 17px; width: 17px"
                    >
                      <path
                        d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-2.56348 2.89843q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25293 0.05127 0.08203 0.75196 0.79639l0.69726 0.70068-0.69726 0.70068q-0.70068 0.71436-0.75196 0.79981-0.04785 0.08203-0.04785 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04785 0.08545-0.05127 0.79981-0.75196l0.70068-0.69726 0.70068 0.69726q0.71436 0.70068 0.79639 0.75196 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-0.74854-0.79981l-0.68359-0.70068 0.68359-0.70068q0.70068-0.71436 0.74854-0.79639 0.05127-0.08545 0.05127-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367l-0.01367 0q-0.14014 0-0.21875 0.0376-0.0752 0.03418-0.24268 0.18799-0.12646 0.10938-0.54687 0.52978l-0.72803 0.7417-0.70068-0.69726q-0.43408-0.43408-0.56055-0.54688-0.18115-0.16748-0.25977-0.20166-0.0752-0.0376-0.20849-0.04443-0.1333-0.00684-0.17432 0.00683z"
                        fill="#8A909C"
                      ></path>
                    </svg>
              <div
                data-pencil-name="SearchScope"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                    <div
                      data-pencil-name="ScopeChip"
                      style="align-items: center; background-color: #E7EDFC; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 3px 8px; width: fit-content"
                    >
                      <div
                        data-pencil-name="ScopeChipText"
                        style='box-sizing: border-box; color: #2B5BD7; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        title
                      </div>
                    </div>
                    <div
                      data-pencil-name="ScopeChip"
                      style="align-items: center; background-color: #E7EDFC; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 3px 8px; width: fit-content"
                    >
                      <div
                        data-pencil-name="ScopeChipText"
                        style='box-sizing: border-box; color: #2B5BD7; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        text
                      </div>
                    </div>
                    <div
                      data-pencil-name="ScopeChip"
                      style="align-items: center; background-color: #E7EDFC; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 3px 8px; width: fit-content"
                    >
                      <div
                        data-pencil-name="ScopeChipText"
                        style='box-sizing: border-box; color: #2B5BD7; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        tags
                      </div>
                    </div>
              </div>
              <SearchSuggestPanel
                :open="focused"
                :query="query"
                :recent="recent"
                :results="results"
                :loading="loading"
                :active-index="activeIndex"
                @pick="onPick"
                @close="close"
                @move="moveActive"
                @activate="setActive"
              />
            </div>
            <div
              data-pencil-name="SearchCaption"
              style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; left: 40px; letter-spacing: 0px; line-height: normal; position: absolute; text-align: left; top: 192px; white-space: nowrap; z-index: 1'
            >
              Text matches come from the searchable layer SnapVault created while scanning.
            </div>
            <div
              data-pencil-name="FilterBar"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; gap: 10px; height: fit-content; justify-content: flex-start; left: 40px; position: absolute; right: 40px; top: 221px; z-index: 1"
            >
              <div
                data-pencil-name="FilterLabel"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Filters
              </div>
              <div
                data-pencil-name="FilterChip"
                style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: 25px; justify-content: flex-start; padding: 5px 10px; width: fit-content"
              >
                <svg
                      data-pencil-name="FilterChipIcon"
                      data-icon-name="tag"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
                    >
                      <path
                        d="M2.15674 0.60156q-0.29395 0.02734-0.58789 0.16748-0.29395 0.14014-0.50586 0.36573-0.30762 0.32129-0.43408 0.78271l-0.04102 0.16748 0 2.21143q-0.01367 1.73633 0 2.11572 0.01367 0.37939 0.05469 0.57422 0.08545 0.28027 0.2666 0.5332 0.05811 0.0957 2.65234 2.7002 2.59766 2.60449 2.75147 2.74462 0.51953 0.42041 1.18945 0.44092 0.67334 0.02051 1.24756-0.37256 0.12646-0.08203 2.15674-2.1123 2.03027-2.03027 2.1123-2.1499 0.08545-0.11963 0.15381-0.22901 0.28027-0.5332 0.22217-1.1416-0.05469-0.6084-0.43067-1.08691-0.09912-0.10938-2.72412-2.72754-2.625-2.61816-2.75146-2.70361-0.37598-0.23926-0.82373-0.28028-0.18457-0.02734-2.25586-0.02734-2.07129 0-2.25244 0.02734z m4.604 1.20313q0.07178 0.04443 0.5127 0.47168 0.44092 0.42725 2.21826 2.20459 1.82178 1.81836 2.2251 2.23193 0.40674 0.41357 0.43408 0.49561 0.18457 0.35205 0.01367 0.71435-0.02734 0.08545-0.32812 0.39307-0.30078 0.30762-1.71583 1.73633-2.01318 2.0166-2.08496 2.05761-0.16748 0.12646-0.42041 0.1333-0.25293 0.00684-0.44775-0.10595-0.08203-0.05469-2.70019-2.65918-1.78076-1.77734-2.20118-2.21143-0.41699-0.43408-0.46142-0.50586l-0.04102-0.0957 0-4.46729 0.04102-0.09912q0.08545-0.18115 0.22558-0.24951l0.01368-0.01367q0.06836-0.04443 0.16748-0.05811 0.14014-0.01367 0.57421-0.02734l3.8794 0.01367 0.0957 0.04102z m-2.61816 1.72265q-0.22217 0.05811-0.38965 0.23243-0.16748 0.17432-0.22559 0.3999-0.08203 0.32129 0.07178 0.6289 0.04102 0.08203 0.16065 0.20166 0.11963 0.11963 0.20166 0.16065 0.19824 0.09912 0.41357 0.09912 0.21533 0 0.41357-0.09912 0.08203-0.04102 0.20166-0.16065 0.11963-0.11963 0.16065-0.20166 0.12646-0.25293 0.09228-0.52636-0.03418-0.27344-0.23242-0.46826-0.26318-0.29395-0.6289-0.29395-0.11279 0-0.23926 0.02734z"
                        fill="#8A909C"
                      ></path>
                    </svg>
                <div
                  data-pencil-name="FilterChipText"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Folder: Research
                </div>
                <svg
                      data-pencil-name="FilterChipX"
                      data-icon-name="x"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
                    >
                      <path
                        d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                        fill="#8A909C"
                      ></path>
                    </svg>
              </div>
              <div
                data-pencil-name="FilterChip"
                style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: 25px; justify-content: flex-start; padding: 5px 10px; width: fit-content"
              >
                <svg
                      data-pencil-name="FilterChipIcon"
                      data-icon-name="tag"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
                    >
                      <path
                        d="M2.15674 0.60156q-0.29395 0.02734-0.58789 0.16748-0.29395 0.14014-0.50586 0.36573-0.30762 0.32129-0.43408 0.78271l-0.04102 0.16748 0 2.21143q-0.01367 1.73633 0 2.11572 0.01367 0.37939 0.05469 0.57422 0.08545 0.28027 0.2666 0.5332 0.05811 0.0957 2.65234 2.7002 2.59766 2.60449 2.75147 2.74462 0.51953 0.42041 1.18945 0.44092 0.67334 0.02051 1.24756-0.37256 0.12646-0.08203 2.15674-2.1123 2.03027-2.03027 2.1123-2.1499 0.08545-0.11963 0.15381-0.22901 0.28027-0.5332 0.22217-1.1416-0.05469-0.6084-0.43067-1.08691-0.09912-0.10938-2.72412-2.72754-2.625-2.61816-2.75146-2.70361-0.37598-0.23926-0.82373-0.28028-0.18457-0.02734-2.25586-0.02734-2.07129 0-2.25244 0.02734z m4.604 1.20313q0.07178 0.04443 0.5127 0.47168 0.44092 0.42725 2.21826 2.20459 1.82178 1.81836 2.2251 2.23193 0.40674 0.41357 0.43408 0.49561 0.18457 0.35205 0.01367 0.71435-0.02734 0.08545-0.32812 0.39307-0.30078 0.30762-1.71583 1.73633-2.01318 2.0166-2.08496 2.05761-0.16748 0.12646-0.42041 0.1333-0.25293 0.00684-0.44775-0.10595-0.08203-0.05469-2.70019-2.65918-1.78076-1.77734-2.20118-2.21143-0.41699-0.43408-0.46142-0.50586l-0.04102-0.0957 0-4.46729 0.04102-0.09912q0.08545-0.18115 0.22558-0.24951l0.01368-0.01367q0.06836-0.04443 0.16748-0.05811 0.14014-0.01367 0.57421-0.02734l3.8794 0.01367 0.0957 0.04102z m-2.61816 1.72265q-0.22217 0.05811-0.38965 0.23243-0.16748 0.17432-0.22559 0.3999-0.08203 0.32129 0.07178 0.6289 0.04102 0.08203 0.16065 0.20166 0.11963 0.11963 0.20166 0.16065 0.19824 0.09912 0.41357 0.09912 0.21533 0 0.41357-0.09912 0.08203-0.04102 0.20166-0.16065 0.11963-0.11963 0.16065-0.20166 0.12646-0.25293 0.09228-0.52636-0.03418-0.27344-0.23242-0.46826-0.26318-0.29395-0.6289-0.29395-0.11279 0-0.23926 0.02734z"
                        fill="#8A909C"
                      ></path>
                    </svg>
                <div
                  data-pencil-name="FilterChipText"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Tag: computer-vision
                </div>
                <svg
                      data-pencil-name="FilterChipX"
                      data-icon-name="x"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
                    >
                      <path
                        d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                        fill="#8A909C"
                      ></path>
                    </svg>
              </div>
              <div
                data-pencil-name="FilterClear"
                style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Clear all
              </div>
            </div>
            <div
              v-if="isBatchActive"
              data-pencil-name="BatchBar"
              style="align-items: center; backdrop-filter: blur(30px); background-image: linear-gradient(180deg, #FFFFFFF7 0%, #FFFFFFD6 100%); background-repeat: no-repeat; background-size: 100% 100%; border-radius: 9999px; border: 1px solid #FFFFFFCC; box-shadow: 0px 14px 34px #16181D26; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 58px; justify-content: space-between; left: 440px; padding: 0px 20px; position: absolute; top: 756px; width: 560px; z-index: 2"
            >
              <div
                data-pencil-name="BatchLeft"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 12px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="BatchCheckbox"
                  class="batch-checkbox sv-focus"
                  :class="{ 'is-all': allSelected }"
                  role="checkbox"
                  :aria-checked="allSelected"
                  aria-label="全选 / 取消全选"
                  tabindex="0"
                  @click="toggleSelectAll"
                  @keydown.enter.stop.prevent="toggleSelectAll"
                  @keydown.space.stop.prevent="toggleSelectAll"
                >
                  <svg
                    v-if="allSelected"
                    data-pencil-name="BatchCheckIcon"
                    data-icon-name="check"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
                  >
                    <path
                      d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
                <div
                  data-pencil-name="BatchCount"
                  style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  {{ selectedCount }} selected
                </div>
              </div>
              <div
                data-pencil-name="BatchActions"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="BatchAction"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 6px 12px; width: fit-content"
                  @click="notifyBatchStub('Move')"
                >
                  <svg
                    data-pencil-name="BatchActionIcon"
                    data-icon-name="folder-input"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
                  >
                    <path
                      d="M1.97559 1.20313q-0.39307 0.08545-0.71778 0.33837-0.32129 0.24951-0.50244 0.61524-0.0957 0.2085-0.12646 0.34863-0.04102 0.16748-0.04102 0.5332-0.01367 0.28027 0 1.10401l0 1.23388 0.04102 0.1128q0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445l0.04102-0.09912 0.02734-2.63184 0.04102-0.09912q0.14014-0.28027 0.44775-0.33496 0.12646-0.01367 1.30225 0l1.19287 0 0.0957 0.04102q0.11279 0.05811 0.18115 0.12988 0.07178 0.06836 0.22559 0.3042 0.43408 0.65967 0.58789 0.7998 0.39307 0.34863 0.88184 0.43408 0.12646 0.02734 2.52588 0.02735 2.40283 0 2.51562 0.02734 0.30762 0.04102 0.43408 0.32129l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394-0.02734-0.08545-0.04102-0.14697-0.01367-0.06494-0.01367-0.39307 0-0.32813-0.01367-0.39648-0.01367-0.07178-0.04102-0.14356-0.05811-0.12646-0.17773-0.21533-0.11621-0.09229-0.24268-0.10596-0.25293-0.04102-0.44433 0.09229-0.18799 0.1333-0.24268 0.38281-0.01367 0.11279-0.00684 0.51269 0.00684 0.3999 0.03418 0.52295 0.12646 0.5332 0.50928 0.89893 0.38623 0.36231 0.91944 0.46143 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0.01367-4.84668q-0.01367-0.68359-0.02734-0.92285-0.01367-0.18115-0.04102-0.32129-0.14014-0.4751-0.50586-0.81006-0.3623-0.33838-0.84082-0.4375-0.10938-0.02734-0.48877-0.02734l-4.21435-0.01367q-0.34863 0-0.43408-0.02734-0.16748-0.04443-0.26661-0.16748-0.02734-0.03076-0.20849-0.29395-0.42041-0.61865-0.58789-0.78613-0.25293-0.23584-0.57422-0.34864l-0.01367 0q-0.15381-0.07178-0.25293-0.08545-0.14014-0.02734-0.44776-0.02734l-1.03564 0-1.17578 0q-0.23926 0.01367-0.33496 0.02734z m3.1206 4.07421q-0.25293 0.07178-0.36572 0.3042-0.10938 0.229-0.02735 0.46485 0.02734 0.07178 0.10596 0.15722 0.07861 0.08203 0.35547 0.37598l0.42041 0.42041-4.56299 0.01367-0.09912 0.04102q-0.08203 0.04443-0.16064 0.11621-0.0752 0.06836-0.11963 0.13672-0.12305 0.2666 0 0.5332 0.12646 0.2666 0.42041 0.30762 0.09912 0.02734 2.31055 0.02734l2.21142 0-0.42041 0.42041q-0.27686 0.29395-0.35547 0.3794-0.07861 0.08203-0.10595 0.1538-0.05469 0.15381-0.02051 0.32129 0.03418 0.16748 0.14697 0.28028 0.18115 0.18115 0.42041 0.18115l0.01367 0q0.12646 0 0.19483-0.04102 0.09912-0.04443 0.31103-0.23925 0.15381-0.14014 0.6836-0.67334l0.07177-0.08204q0.9502-0.93994 0.99463-1.02197 0.02734-0.07178 0.04102-0.11279 0.01367-0.04102 0.01367-0.15381 0-0.18115-0.05127-0.26318-0.04785-0.08545-0.98779-1.02198-0.93652-0.93994-1.02881-0.98779-0.08887-0.05127-0.2085-0.0581-0.11621-0.00684-0.20166 0.0205z"
                      fill="#59606E"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="BatchActionText"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Move
                  </div>
                </div>
                <div
                  data-pencil-name="BatchAction"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 6px 12px; width: fit-content"
                  @click="notifyBatchStub('Tag')"
                >
                  <svg
                    data-pencil-name="BatchActionIcon"
                    data-icon-name="tag"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
                  >
                    <path
                      d="M2.15674 0.60156q-0.29395 0.02734-0.58789 0.16748-0.29395 0.14014-0.50586 0.36573-0.30762 0.32129-0.43408 0.78271l-0.04102 0.16748 0 2.21143q-0.01367 1.73633 0 2.11572 0.01367 0.37939 0.05469 0.57422 0.08545 0.28027 0.2666 0.5332 0.05811 0.0957 2.65234 2.7002 2.59766 2.60449 2.75147 2.74462 0.51953 0.42041 1.18945 0.44092 0.67334 0.02051 1.24756-0.37256 0.12646-0.08203 2.15674-2.1123 2.03027-2.03027 2.1123-2.1499 0.08545-0.11963 0.15381-0.22901 0.28027-0.5332 0.22217-1.1416-0.05469-0.6084-0.43067-1.08691-0.09912-0.10938-2.72412-2.72754-2.625-2.61816-2.75146-2.70361-0.37598-0.23926-0.82373-0.28028-0.18457-0.02734-2.25586-0.02734-2.07129 0-2.25244 0.02734z m4.604 1.20313q0.07178 0.04443 0.5127 0.47168 0.44092 0.42725 2.21826 2.20459 1.82178 1.81836 2.2251 2.23193 0.40674 0.41357 0.43408 0.49561 0.18457 0.35205 0.01367 0.71435-0.02734 0.08545-0.32812 0.39307-0.30078 0.30762-1.71583 1.73633-2.01318 2.0166-2.08496 2.05761-0.16748 0.12646-0.42041 0.1333-0.25293 0.00684-0.44775-0.10595-0.08203-0.05469-2.70019-2.65918-1.78076-1.77734-2.20118-2.21143-0.41699-0.43408-0.46142-0.50586l-0.04102-0.0957 0-4.46729 0.04102-0.09912q0.08545-0.18115 0.22558-0.24951l0.01368-0.01367q0.06836-0.04443 0.16748-0.05811 0.14014-0.01367 0.57421-0.02734l3.8794 0.01367 0.0957 0.04102z m-2.61816 1.72265q-0.22217 0.05811-0.38965 0.23243-0.16748 0.17432-0.22559 0.3999-0.08203 0.32129 0.07178 0.6289 0.04102 0.08203 0.16065 0.20166 0.11963 0.11963 0.20166 0.16065 0.19824 0.09912 0.41357 0.09912 0.21533 0 0.41357-0.09912 0.08203-0.04102 0.20166-0.16065 0.11963-0.11963 0.16065-0.20166 0.12646-0.25293 0.09228-0.52636-0.03418-0.27344-0.23242-0.46826-0.26318-0.29395-0.6289-0.29395-0.11279 0-0.23926 0.02734z"
                      fill="#59606E"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="BatchActionText"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Tag
                  </div>
                </div>
                <div
                  data-pencil-name="BatchAction"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 6px 12px; width: fit-content"
                  @click="deleteSelected"
                >
                  <svg
                    data-pencil-name="BatchActionIcon"
                    data-icon-name="trash-2"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
                  >
                    <path
                      d="M5.65674 0.60156q-0.44775 0.04102-0.84766 0.32129-0.3999 0.28027-0.58105 0.70069-0.08545 0.21191-0.1128 0.37939-0.02734 0.16748-0.02734 0.50244l-0.01367 0.42041-2.4917 0-0.08545 0.05469q-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.14697 0.11963 0.06494 0.03418 0.13331 0.04101 0.07178 0.00684 0.33496 0.00684l0.36572 0 0.01367 7.84082 0.04102 0.16748q0.07178 0.25293 0.18115 0.44092 0.11279 0.18799 0.29394 0.37256 0.18457 0.18115 0.37256 0.29394 0.18799 0.10938 0.44092 0.18115l0.16748 0.04102 6.33008 0 0.16748-0.04102q0.25293-0.07178 0.44092-0.18115 0.18799-0.11279 0.36914-0.29394 0.18457-0.18457 0.29394-0.37256 0.11279-0.18799 0.18457-0.44092l0.04102-0.16748 0.01367-7.84082 0.36572 0q0.26318 0 0.33155-0.00684 0.07178-0.00684 0.1333-0.04101 0.06494-0.0376 0.14697-0.11963 0.08545-0.08545 0.12647-0.16065 0.04443-0.07861 0.04443-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-2.4917 0-0.01367-0.42041q0-0.28027-0.00684-0.37598-0.00684-0.09912-0.03418-0.21191-0.15381-0.56055-0.57422-0.91602-0.42041-0.35889-0.99462-0.41357-0.16748-0.01367-1.31592-0.00684-1.14844 0.00684-1.32959 0.02051z m2.74463 1.20313q0.19482 0.09912 0.29394 0.29394 0.02734 0.07178 0.03418 0.13672 0.00684 0.06152 0.02051 0.32813l0 0.3623-3.5 0 0-0.3623q0.01367-0.2666 0.02051-0.32813 0.00684-0.06494 0.03418-0.13672 0.08545-0.18115 0.22558-0.24951l0-0.01367q0.08203-0.04443 0.16748-0.05811 0.08545-0.01367 0.36573-0.02734l2.23877 0.01367 0.09912 0.04102z m2.09863 6.13183l-0.01367 3.86573-0.02735 0.08545q-0.12646 0.26318-0.37939 0.33496-0.08203 0.02734-3.07959 0.02734-2.99756 0-3.07959-0.02734-0.25293-0.07178-0.37939-0.33496l-0.02735-0.08545-0.01367-7.72803 7 0 0 3.8623z m-4.7749-2.08496q-0.12646 0.01367-0.2461 0.10596-0.11621 0.08887-0.17431 0.21533l-0.04102 0.09912-0.01367 3.33252q0.01367 0.3623 0.02734 0.4751 0.01367 0.08545 0.07178 0.15381l0.01367 0.02734q0.15381 0.21191 0.417 0.23242 0.2666 0.02051 0.46484-0.17431 0.12646-0.12646 0.15381-0.29395 0.02734-0.11279 0.02734-1.86279 0-1.75-0.02734-1.84912-0.04102-0.23584-0.23242-0.36914-0.18799-0.1333-0.44092-0.09229z m2.35156 0q-0.18115 0.01367-0.31445 0.14698-0.1333 0.1333-0.16065 0.31445-0.02734 0.09912-0.02734 1.86279 0 1.76367 0.02734 1.86279 0.02734 0.16748 0.15381 0.28028 0.19824 0.19482 0.46143 0.17431 0.2666-0.02051 0.42041-0.24609l0.01367-0.01367q0.05811-0.08203 0.07178-0.15381 0.01367-0.12646 0.02734-0.4751l0-3.2915-0.04102-0.0957q-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z"
                      fill="#B3261E"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="BatchActionText"
                    style='box-sizing: border-box; color: #B3261E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSearchFocus } from '../composables/useSearchFocus'
import SearchSuggestPanel from '../components/SearchSuggestPanel.vue'
import SortMenu from '../components/SortMenu.vue'
import SkeletonCard from '../components/SkeletonCard.vue'
import EmptyState from '../components/EmptyState.vue'
import FilePreviewCard from '../components/FilePreviewCard.vue'
import FileRowItem from '../components/FileRowItem.vue'
import { useToast } from '../composables/useToast'
import { useBatchSelect } from '../composables/useBatchSelect'
import { useLibraryStore } from '../stores/library'
import { documentsApi } from '../api'
import { confirmDestroy } from '../composables/useConfirmDestroy'

const emit = defineEmits(['search'])
const router = useRouter()
const route = useRoute()
const { toast } = useToast()

// ---- 结果区三态：loading（6 张骨架卡）→ empty（EmptyState）→ ready（真实卡片）----
// active 由 LibraryView 传入（拉条吸附到 pulled 位），此时列表才真正可见。
// 数据由 library store 分页拉取（GET /api/documents）：首屏 24 条、触底追加下一批。
// ?empty=1 为演示 / 联调空态的钩子。
const props = defineProps({
  active: { type: Boolean, default: true },
})
const listLoading = ref(false) // 首屏 / 重载时展示骨架
const loadingMore = ref(false) // 追加下一批时底部 loading
const isEmpty = computed(
  () => route.query.empty === '1' || (!listLoading.value && library.loaded && docs.value.length === 0)
)

// ---- 文档数据：来自 library store（后端分页结果，已加载页的累积）----
// 放到 store 是为了让 DocumentDetail 的删除也能真正改动库列表，撤销时按原索引插回。
const library = useLibraryStore()
const docs = computed(() => library.docs)

// ---- 分批渲染：store 内已是累积结果，直接整表渲染；触底追加下一批 ----
const visibleCards = computed(() => docs.value)
// 每 6 张一个 PreviewRow，保持设计稿的行结构
const visibleRows = computed(() => {
  const out = []
  for (let i = 0; i < visibleCards.value.length; i += 6) out.push(visibleCards.value.slice(i, i + 6))
  return out
})
const hasMore = computed(() => docs.value.length < library.total)

// ---- 排序：按名称 / 最近修改 / 页数（默认最近修改）----
// 分页数据必须由服务端排序才正确：切换排序时重置到第 1 页重新拉取。
const SORT_OPTIONS = [
  { key: 'updated', label: 'Last modified', sort: 'updated', order: 'desc' },
  { key: 'name', label: 'Name', sort: 'name', order: 'asc' },
  { key: 'pages', label: 'Page count', sort: 'pages', order: 'desc' },
]
const sortKey = ref('updated')
const sortIndex = ref(0) // 下拉内高亮项
const sortOpen = ref(false)
const sortMenuRef = ref(null)
const sortLabel = computed(() => SORT_OPTIONS.find((o) => o.key === sortKey.value)?.label ?? '')
const sortParams = computed(() => {
  const o = SORT_OPTIONS.find((x) => x.key === sortKey.value)
  return { sort: o?.sort, order: o?.order }
})

function openSort() {
  sortIndex.value = Math.max(0, SORT_OPTIONS.findIndex((o) => o.key === sortKey.value))
  sortOpen.value = true
  sortMenuRef.value?.focus()
}

function chooseSort(key) {
  const changed = key !== sortKey.value
  sortKey.value = key
  sortOpen.value = false
  if (changed) reload() // 排序变化 → 回到第 1 页重新拉取
}

function toggleSort() {
  if (sortOpen.value) sortOpen.value = false
  else openSort()
}

// 键盘：↑↓ 移动高亮（关闭时先展开），Enter/Space 展开或选中，Esc 关闭
function onSortKeydown(e) {
  if (e.key === 'Escape') {
    sortOpen.value = false
    return
  }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault()
    const last = SORT_OPTIONS.length - 1
    if (!sortOpen.value) openSort()
    sortIndex.value = Math.max(0, Math.min(last, sortIndex.value + (e.key === 'ArrowDown' ? 1 : -1)))
    return
  }
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    if (sortOpen.value) chooseSort(SORT_OPTIONS[sortIndex.value].key)
    else openSort()
  }
}

function onSortDocPointerDown(e) {
  if (sortOpen.value && sortMenuRef.value?.el && !sortMenuRef.value.el.contains(e.target)) sortOpen.value = false
}
watch(sortOpen, (on) => {
  if (on) document.addEventListener('pointerdown', onSortDocPointerDown, true)
  else document.removeEventListener('pointerdown', onSortDocPointerDown, true)
})
onBeforeUnmount(() => document.removeEventListener('pointerdown', onSortDocPointerDown, true))

// ---- 网格 / 列表视图切换（记住上次选择）----
const VIEW_MODE_KEY = 'snapvault:library-view-mode'
function readViewMode() {
  try {
    const v = localStorage.getItem(VIEW_MODE_KEY)
    return v === 'list' || v === 'grid' ? v : 'grid'
  } catch (e) {
    return 'grid'
  }
}
const viewMode = ref(readViewMode())
function setViewMode(mode) {
  viewMode.value = mode
}
watch(viewMode, (v) => {
  try {
    localStorage.setItem(VIEW_MODE_KEY, v)
  } catch (e) {
    /* 隐私模式等场景忽略写入失败 */
  }
})

// ---- 批量选择（多选 + 批量操作）----
const { selectedIds, count: selectedCount, isBatchActive, has: isSelected, toggle: toggleSelect, selectAll, clear: clearSelection } =
  useBatchSelect()
const allSelected = computed(() => docs.value.length > 0 && selectedCount.value === docs.value.length)

// 全选 / 取消全选（作用于全部文档，而非仅当前已加载的一批）
function toggleSelectAll() {
  if (allSelected.value) clearSelection()
  else selectAll(docs.value.map((d) => d.id))
}

// 批量删除：二次确认 → 从 store 移除 → 可撤销（按原索引插回 + 恢复选择）
async function deleteSelected() {
  const ids = [...selectedIds.value]
  if (!ids.length) return
  const n = ids.length
  let removed = []
  const ok = await confirmDestroy({
    title: `删除选中的 ${n} 个文件？`,
    message: '文件将被移入回收站，可在通知中撤销。',
    confirmLabel: '删除',
    onConfirm: async () => {
      // 后端删除成功后同步本地列表；失败抛错由 confirmDestroy 统一提示
      await documentsApi.remove(ids, { silent: true })
      removed = library.removeByIds(ids)
    },
    undoTitle: `已删除 ${n} 个文件`,
    undoMessage: '文件已移入回收站',
    undoLabel: '撤销',
    undoAction: () => {
      library.restore(removed)
      selectAll(removed.map(({ doc }) => doc.id))
    },
  })
  // 取消时保留选中，便于用户改主意
  if (ok) clearSelection()
}

// 占位动作：Move / Tag 尚未接入后端，给出明确反馈而非静默
function notifyBatchStub(name) {
  toast({ type: 'info', title: '功能待接入后端', message: `「${name}」将在后端接口就绪后可用` })
}

const resultsEl = ref(null) // 滚动容器（IntersectionObserver 的 root）
const sentinel = ref(null) // 底部哨兵
let io = 0
let ctrl = null // 首屏 / 重载请求的取消信号

// 追加后内容变高，重新挂载哨兵以强制重新评估（仍在视口内时可继续追加）
function reevaluateSentinel() {
  if (io && sentinel.value) {
    io.unobserve(sentinel.value)
    io.observe(sentinel.value)
  }
}

// 重载首屏：取消在途请求 → 清空列表 → 拉第 1 页；失败时回到空列表
async function reload() {
  ctrl?.abort()
  ctrl = new AbortController()
  const { signal } = ctrl
  listLoading.value = true
  loadingMore.value = false
  clearSelection() // 重新加载时清空选中，避免残留
  try {
    await library.loadPage(1, { ...sortParams.value, signal })
  } catch (e) {
    if (!signal.aborted) library.reset()
  } finally {
    if (!signal.aborted) listLoading.value = false
  }
}

// 触底追加下一批
async function loadMore() {
  if (listLoading.value || isEmpty.value || loadingMore.value || !hasMore.value) return
  loadingMore.value = true
  try {
    await library.loadPage(library.page + 1, { ...sortParams.value, signal: ctrl?.signal })
  } catch (e) {
    /* 失败已由 http 层统一 toast */
  } finally {
    loadingMore.value = false
    reevaluateSentinel()
  }
}

onMounted(() => {
  if (!sentinel.value || !resultsEl.value) return
  io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) loadMore()
    },
    { root: resultsEl.value, rootMargin: '0px 0px 200px 0px', threshold: 0 }
  )
  io.observe(sentinel.value)
})

watch(
  () => props.active,
  (on) => {
    if (on) reload()
  },
  { immediate: true }
)
onBeforeUnmount(() => {
  ctrl?.abort()
  if (io) {
    io.disconnect()
    io = 0
  }
})

// ---- 搜索框：真实 input + 聚焦交互（背景模糊变暗、下拉「最近搜索」与实时结果）----
const { query, focused, loading, results, recent, activeIndex, activeResult, onInput, open, close, onBlur, clear, pick, moveActive, setActive, onKeydown } =
  useSearchFocus()

// 选中「最近搜索」回填查询；选中具体结果直接进文档详情
function onPick(text, item) {
  if (item) router.push('/document-detail')
  else pick(text)
}

// 键盘动作：↑↓/Tab/Esc 由 useSearchFocus 处理；Enter 与点击一致（选中高亮结果 → 文档详情）。
// 没有高亮结果（空关键词 / 无匹配）时，Enter 进入完整搜索页（LibrarySearchView）。
function onKey(e) {
  const action = onKeydown(e)
  if (action !== 'submit') return
  const item = activeResult.value
  if (item) router.push('/document-detail')
  else emit('search')
}

// ---- 文档卡片 3D 倾斜悬浮 ----
const MAX_TILT = 5 // 最大 ±5deg
const LERP = 0.1 // 跟随插值系数
const SPRING_K = 200 // 回弹刚度
const SPRING_DAMPING = 20 // 回弹阻尼
const RESET_MS = 400 // 移出后回落到位的总时长
const CARD = '[data-pencil-name="FilePreview"]'

const tilts = new Map() // card -> 该卡的倾斜状态
let hovered = null
let rafId = 0
let lastTs = 0

function stateOf(card) {
  let s = tilts.get(card)
  if (!s) {
    s = {
      card,
      cover: card.querySelector('[data-pencil-name="Page"]'),
      rotX: 0,
      rotY: 0,
      targetX: 0,
      targetY: 0,
      velX: 0,
      velY: 0,
      lerp: false,
      resetStart: 0,
    }
    tilts.set(card, s)
  }
  return s
}

// 移出卡片：立即取消 hover 态（4px 回落与边框回灰走 200/240ms），倾斜走 400ms 弹簧
function release(card) {
  const s = stateOf(card)
  s.lerp = false
  s.resetStart = 0
  card.classList.remove('is-tilted')
}

function paint(s) {
  s.card.style.transform = `perspective(1000px) rotateX(${s.rotX.toFixed(3)}deg) rotateY(${s.rotY.toFixed(3)}deg)`
  // 阴影随倾斜角动态偏移：水平随 rotateY、垂直随 rotateX
  s.card.style.boxShadow = `${(s.rotY * 2).toFixed(2)}px ${(s.rotX * 2).toFixed(2)}px 24px rgba(22, 24, 29, 0.16)`
  if (s.cover) {
    // 封面轻微放大 + 与倾斜反向的视差
    s.cover.style.transform = `scale(1.02) translate3d(${(-s.rotY * 0.6).toFixed(2)}px, ${(-s.rotX * 0.6).toFixed(2)}px, 0)`
  }
}

function tick(ts) {
  const dt = Math.min(0.05, (ts - lastTs) / 1000) || 1 / 60
  lastTs = ts
  for (const [card, s] of tilts) {
    if (s.lerp) {
      s.rotX += (s.targetX - s.rotX) * LERP
      s.rotY += (s.targetY - s.rotY) * LERP
    } else {
      if (!s.resetStart) s.resetStart = ts
      s.velX += (-SPRING_K * s.rotX - SPRING_DAMPING * s.velX) * dt
      s.velY += (-SPRING_K * s.rotY - SPRING_DAMPING * s.velY) * dt
      s.rotX += s.velX * dt
      s.rotY += s.velY * dt
      // 兜底截断：弹簧尾段已不可见（400ms 时残余 <2%），到点直接归零
      if (ts - s.resetStart >= RESET_MS) {
        s.rotX = 0
        s.rotY = 0
        s.velX = 0
        s.velY = 0
      }
    }
    paint(s)
    const settled =
      !s.lerp &&
      Math.abs(s.rotX) < 0.01 && Math.abs(s.rotY) < 0.01 &&
      Math.abs(s.velX) < 0.01 && Math.abs(s.velY) < 0.01
    if (settled) {
      card.style.transform = ''
      card.style.boxShadow = ''
      if (s.cover) s.cover.style.transform = ''
      card.classList.remove('is-tilted')
      tilts.delete(card)
    }
  }
  if (!tilts.size) {
    rafId = 0
    return
  }
  rafId = requestAnimationFrame(tick)
}

function run() {
  if (!rafId) {
    lastTs = performance.now()
    rafId = requestAnimationFrame(tick)
  }
}

function onCardMove(e) {
  const card = e.target instanceof Element ? e.target.closest(CARD) : null
  if (card !== hovered) {
    if (hovered) release(hovered)
    hovered = card
    if (card) {
      const s = stateOf(card)
      s.lerp = true
      s.resetStart = 0
      card.classList.add('is-tilted')
    }
  }
  if (!card) return
  const rect = card.getBoundingClientRect()
  if (!rect.width || !rect.height) return
  const s = stateOf(card)
  s.targetY = ((e.clientX - rect.left) / rect.width - 0.5) * 2 * MAX_TILT
  s.targetX = -((e.clientY - rect.top) / rect.height - 0.5) * 2 * MAX_TILT
  run()
}

function onCardsLeave() {
  if (hovered) {
    release(hovered)
    hovered = null
  }
  run()
}

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  tilts.clear()
})
</script>

<style scoped>
/* 注：FilePreview 的 3D 倾斜样式已随卡片抽到 FilePreviewCard.vue（scoped 后代选择器无法穿透子组件） */

/* ---- 搜索框聚焦：共享基座见 src/styles/shared.css；pulled 的遮罩/抬升层级更低 ---- */
[data-pencil-name="LibraryPanel"] {
  --sf-dim-z: 30;
  --sf-raised-z: 40;
}

/* ---- 结果区三态：骨架网格 / 空态容器 / 真实网格统一淡入，避免切换闪烁 ---- */
.rs-grid {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  flex-wrap: wrap;
  gap: 14px;
  width: 100%;
}
.rs-empty {
  display: flex;
  flex: 1 1 auto;
  width: 100%;
}
[data-pencil-name="PreviewRow"] {
  animation: sv-rise-in var(--sv-dur-move) var(--sv-ease-out) both;
}

/* ---- 无限滚动：底部哨兵（1px，不占视觉）与批次加载 spinner ---- */
.rs-sentinel {
  flex-shrink: 0;
  height: 1px;
  width: 100%;
}
.rs-spinner {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  border: 2px solid #e3e5ea;
  border-top-color: var(--sv-accent);
  border-radius: 50%;
  animation: sv-spin 700ms linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .rs-spinner {
    animation: none;
  }
}

/* ---- 批量栏：全选框 / 动作按钮的交互态（按底色为内联样式，hover 需 !important 覆盖）---- */
.batch-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  box-sizing: border-box;
  border: 2px solid var(--sv-line-2);
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  transition:
    background-color var(--sv-dur-fast) var(--sv-ease-out),
    border-color var(--sv-dur-fast) var(--sv-ease-out);
}
.batch-checkbox:hover {
  border-color: var(--sv-accent);
}
.batch-checkbox.is-all {
  border-color: var(--sv-accent);
  background-color: var(--sv-accent);
}

[data-pencil-name="BatchAction"] {
  cursor: pointer;
  transition: background-color var(--sv-dur-fast) var(--sv-ease-out);
}
[data-pencil-name="BatchAction"]:hover {
  background-color: var(--sv-surface-2) !important;
}
[data-pencil-name="BatchAction"]:active {
  background-color: var(--sv-surface-3) !important;
}

/* ---- 列表视图：整块白底 + 行分隔线（行内 hover 由 FileRowItem 负责）---- */
.rs-list {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  background-color: var(--sv-surface);
  border: 1px solid var(--sv-line);
  border-radius: 12px;
  overflow: hidden;
}

/* ---- 视图切换按钮：激活态用 token 配色（内联背景需 !important 覆盖）---- */
.vt-btn {
  transition: background-color var(--sv-dur-fast) var(--sv-ease-out);
}
.vt-btn:hover {
  background-color: var(--sv-surface-2) !important;
}
.vt-btn.is-active {
  background-color: var(--sv-surface-2) !important;
}
.vt-btn svg path {
  transition: fill var(--sv-dur-fast) var(--sv-ease-out);
}
.vt-btn.is-active svg path {
  fill: var(--sv-ink) !important;
}
.vt-btn:not(.is-active) svg path {
  fill: var(--sv-ink-3) !important;
}

/* 排序下拉需浮于 SearchBar / SearchCaption / FilterBar 之上：
   它们同为 z-index:1，按 DOM 顺序后出现的会盖住头部内的下拉面板。 */
[data-pencil-name="SearchHeader"] {
  z-index: 5 !important;
}
</style>
