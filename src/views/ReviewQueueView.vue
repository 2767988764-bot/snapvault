<template>
      <div class="page-root"
        data-pencil-name="08 · Review Queue"
        style="align-items: flex-start; background-image: url('/assets/bg-0.webp'); background-repeat: no-repeat; background-size: 100% 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 0px; height: 900px; justify-content: flex-start; overflow: hidden; position: relative; width: 1440px"
      >
        <div data-pencil-name="TopNavSpacer" style="height: 64px; flex-shrink: 0; width: 100%"></div>
        <div
          data-pencil-name="ReviewContent"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 16px; justify-content: flex-start; padding: 24px 40px; width: 100%"
        >
          <div
            data-pencil-name="ReviewHeader"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: space-between; width: 100%"
          >
            <div
              data-pencil-name="ReviewHeaderLeft"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 12px; height: 16px; justify-content: flex-start; width: 230px"
            ></div>
            <div
              data-pencil-name="Btn/Ghost" data-clickable @click="$router.push('/library')"
              style="align-items: center; background-color: #FFFFFF00; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnGhostIcon"
                data-icon-name="circle-help"
                data-icon-set="lucide"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M23 12c0-6.08-4.92-11-11-11-6.08 0-11 4.92-11 11 0 6.08 4.92 11 11 11 6.08 0 11-4.92 11-11z m-13.11-5.45c-0.81 0.48-1.43 1.23-1.74 2.12-0.19 0.52 0.09 1.09 0.61 1.27 0.52 0.19 1.09-0.09 1.27-0.61 0.16-0.44 0.47-0.82 0.88-1.06 0.4-0.24 0.88-0.33 1.35-0.25 0.46 0.08 0.89 0.33 1.19 0.69 0.3 0.36 0.47 0.82 0.47 1.29 0 0.47-0.37 0.96-1.05 1.42-0.32 0.21-0.64 0.37-0.89 0.48-0.12 0.05-0.22 0.09-0.29 0.12-0.03 0.01-0.06 0.02-0.07 0.03l-0.02 0c-0.52 0.18-0.8 0.74-0.63 1.27 0.18 0.52 0.74 0.8 1.27 0.63 0 0 0 0 0 0 0.01 0 0.01-0.01 0.01-0.01 0.01 0 0.02 0 0.04-0.01 0.03-0.01 0.07-0.02 0.12-0.04 0.09-0.04 0.23-0.09 0.38-0.16 0.32-0.14 0.75-0.36 1.18-0.65 0.82-0.54 1.95-1.55 1.95-3.08 0-0.94-0.33-1.86-0.94-2.58-0.61-0.72-1.45-1.21-2.38-1.37-0.93-0.16-1.89 0.02-2.71 0.5z m2.12 9.45l-0.01 0c-0.55 0-1 0.45-1 1 0 0.55 0.45 1 1 1l0.01 0c0.55 0 1-0.45 1-1 0-0.55-0.45-1-1-1z m8.99-4c0 4.97-4.03 9-9 9-4.97 0-9-4.03-9-9 0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnGhostLabel"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                How this works
              </div>
            </div>
          </div>
          <div
            data-pencil-name="ReviewFilters"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              class="rf-chip"
              :class="{ 'is-active': activeFilter === 'all' }"
              data-pencil-name="ReviewFilter"
              data-clickable
              @click="selectFilter('all')"
              style="align-items: center; background-color: #16181D; border-radius: 9999px; border: 1px solid #16181D; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 7px 13px; width: fit-content"
            >
              <div
                data-pencil-name="ReviewFilterText"
                style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                All
              </div>
              <div
                data-pencil-name="ReviewFilterBadge"
                style="align-items: center; background-color: #FFFFFF33; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 1px 6px; width: fit-content"
              >
                <div
                  data-pencil-name="ReviewFilterBadgeText"
                  style='box-sizing: border-box; color: #FFFFFF; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  5
                </div>
              </div>
            </div>
            <div
              class="rf-chip"
              :class="{ 'is-active': activeFilter === 'paper-edges' }"
              data-pencil-name="ReviewFilter"
              data-clickable
              @click="selectFilter('paper-edges')"
              style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 7px 13px; width: fit-content"
            >
              <div
                data-pencil-name="ReviewFilterText"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Paper edges
              </div>
              <div
                data-pencil-name="ReviewFilterBadge"
                style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 1px 6px; width: fit-content"
              >
                <div
                  data-pencil-name="ReviewFilterBadgeText"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  1
                </div>
              </div>
            </div>
            <div
              class="rf-chip"
              :class="{ 'is-active': activeFilter === 'text-recognition' }"
              data-pencil-name="ReviewFilter"
              data-clickable
              @click="selectFilter('text-recognition')"
              style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 7px 13px; width: fit-content"
            >
              <div
                data-pencil-name="ReviewFilterText"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Text recognition
              </div>
              <div
                data-pencil-name="ReviewFilterBadge"
                style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 1px 6px; width: fit-content"
              >
                <div
                  data-pencil-name="ReviewFilterBadgeText"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  2
                </div>
              </div>
            </div>
            <div
              class="rf-chip"
              :class="{ 'is-active': activeFilter === 'file-location' }"
              data-pencil-name="ReviewFilter"
              data-clickable
              @click="selectFilter('file-location')"
              style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 7px 13px; width: fit-content"
            >
              <div
                data-pencil-name="ReviewFilterText"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                File location
              </div>
              <div
                data-pencil-name="ReviewFilterBadge"
                style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 1px 6px; width: fit-content"
              >
                <div
                  data-pencil-name="ReviewFilterBadgeText"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  1
                </div>
              </div>
            </div>
            <div
              class="rf-chip"
              :class="{ 'is-active': activeFilter === 'processing' }"
              data-pencil-name="ReviewFilter"
              data-clickable
              @click="selectFilter('processing')"
              style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 7px 13px; width: fit-content"
            >
              <div
                data-pencil-name="ReviewFilterText"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Processing
              </div>
              <div
                data-pencil-name="ReviewFilterBadge"
                style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 1px 6px; width: fit-content"
              >
                <div
                  data-pencil-name="ReviewFilterBadgeText"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  1
                </div>
              </div>
            </div>
          </div>
          <div
            data-pencil-name="ReviewList"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 12px; justify-content: flex-start; width: 100%"
          >
            <!-- 加载态：3 条骨架行（与 ReviewItem 同构） -->
            <template v-if="loading">
              <SkeletonCard v-for="i in 3" :key="i" variant="row" />
            </template>

            <!-- 空态：当前标签下无匹配文件 -->
            <EmptyState
              v-else-if="isEmpty"
              icon="inbox"
              title="这个筛选下没有待审文件"
              description="换一个标签，或先去扫描 / 导入更多文档。"
              action-text="去扫描 / 导入"
              @action="router.push('/scan-import')"
            />
            <div
              v-if="!loading && !isEmpty"
              data-pencil-name="ReviewItem" data-clickable @click="$router.push('/document-detail')"
              style="align-items: center; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; padding: 15px 18px; width: 100%"
            >
              <div
                data-pencil-name="ReviewIconBox"
                style="align-items: center; background-color: #FBE9E8; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 44px; justify-content: center; width: 44px"
              >
                <svg
                  data-pencil-name="ReviewIcon"
                  data-icon-name="circle-x"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 21px; width: 21px"
                >
                  <path
                    d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-2.56348 2.89843q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25293 0.05127 0.08203 0.75196 0.79639l0.69726 0.70068-0.69726 0.70068q-0.70068 0.71436-0.75196 0.79981-0.04785 0.08203-0.04785 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04785 0.08545-0.05127 0.79981-0.75196l0.70068-0.69726 0.70068 0.69726q0.71436 0.70068 0.79639 0.75196 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-0.74854-0.79981l-0.68359-0.70068 0.68359-0.70068q0.70068-0.71436 0.74854-0.79639 0.05127-0.08545 0.05127-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367l-0.01367 0q-0.14014 0-0.21875 0.0376-0.0752 0.03418-0.24268 0.18799-0.12646 0.10938-0.54687 0.52978l-0.72803 0.7417-0.70068-0.69726q-0.43408-0.43408-0.56055-0.54688-0.18115-0.16748-0.25977-0.20166-0.0752-0.0376-0.20849-0.04443-0.1333-0.00684-0.17432 0.00683z"
                    fill="#B3261E"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="ReviewInfo"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 5px; height: fit-content; justify-content: flex-start"
              >
                <div
                  data-pencil-name="ReviewTitleRow"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="ReviewItemTitle"
                    style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                  >
                    OCR Experiment Results
                  </div>
                </div>
                <div
                  data-pencil-name="ReviewReason"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 19px; text-align: left; width: 100%'
                >
                  Text recognition failed on 3 of 7 pages. The images are still saved and readable.
                </div>
                <div
                  data-pencil-name="ReviewMeta"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Projects · 7 pages · detected 2 Sep, 14:08
                </div>
              </div>
              <div
                data-pencil-name="ReviewActions"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="ReviewAction"
                  style="align-items: center; background-color: #2B5BD7; border-radius: 9px; border: 1px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 9px 14px; width: fit-content"
                >
                  <svg
                    data-pencil-name="ReviewActionIcon"
                    data-icon-name="refresh-cw"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                  >
                    <path
                      d="M6.56592 1.18945q-1.12109 0.08545-2.1294 0.57422-0.9502 0.46143-1.66455 1.22022-0.71436 0.75537-1.13476 1.71924-0.22217 0.54688-0.34864 1.13476-0.12646 0.58789-0.11279 1.10742 0 0.19482 0.03418 0.28028 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.22559 0.03418 0.14014 0 0.22217-0.03418 0.08545-0.0376 0.1914-0.1333 0.10596-0.09912 0.14014-0.23926 0.03418-0.14014 0.03418-0.39307 0.01367-0.30762 0.0957-0.71777 0.08545-0.41357 0.22559-0.75195 0.42041-1.09033 1.31592-1.85254 0.89551-0.76563 2.04394-1.01514 0.30762-0.07178 0.72803-0.09228 0.42041-0.02051 0.75537 0.0205 1.76709 0.18115 3.11035 1.4834l0.22217 0.22559-0.7417 0q-0.7417 0-0.85449 0.02734-0.24951 0.02734-0.38281 0.23242-0.1333 0.20166-0.09912 0.43409 0.03418 0.229 0.24609 0.36914l0.01367 0.01367q0.08203 0.05811 0.15381 0.07178 0.11279 0.01367 0.43408 0.02734l2.79932-0.01367 0.09912-0.04102q0.18115-0.08545 0.28027-0.28027l0.04102-0.07178 0-3.26074-0.04102-0.08545q-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666l-0.04102 0.08545 0 1.67822-0.28027-0.26318q-0.3623-0.36572-0.72119-0.62207-0.35547-0.25977-0.78955-0.48535-1.10742-0.58789-2.38233-0.70069-0.15381-0.01367-0.4751-0.01367-0.32129 0-0.46142 0.01367z m5.53027 5.25q-0.11279 0.04102-0.21875 0.12647-0.10254 0.08545-0.14697 0.18115-0.04102 0.05811-0.04102 0.15381l-0.05468 0.54687q-0.04443 0.65967-0.30762 1.28858-0.47851 1.18945-1.47998 1.96191-0.99805 0.76904-2.24561 0.93653-0.7417 0.08203-1.5039-0.05811-0.76221-0.14014-1.43555-0.48877-0.72803-0.39307-1.3877-1.03564l-0.10937-0.12647 0.75537 0q0.50244 0 0.66992-0.01367 0.22559-0.01367 0.30762-0.04102 0.08545-0.03076 0.1709-0.12646 0.22217-0.22559 0.16748-0.51953-0.05469-0.29395-0.34863-0.43408l-0.08545-0.02735-3.20606 0-0.08545 0.04102q-0.19482 0.08545-0.29394 0.28027l-0.04102 0.07178 0 3.26074 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-1.67822 0.25293 0.24951q0.24951 0.23926 0.43408 0.39307 1.37061 1.14844 3.20606 1.40136 0.2085 0.02734 0.63574 0.03418 0.42725 0.00684 0.64941-0.00683 1.3877-0.12646 2.57715-0.8545 1.14844-0.72803 1.87646-1.87646 0.72803-1.17578 0.8545-2.57715 0.02734-0.22217 0.01367-0.44775 0-0.19482-0.0376-0.27686-0.03418-0.08545-0.11621-0.18457-0.16748-0.15381-0.39307-0.16748-0.14014 0-0.18115 0.01367z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="ReviewActionText"
                    style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Retry processing
                  </div>
                </div>
                <div
                  data-pencil-name="ReviewAction"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
                >
                  <svg
                    data-pencil-name="ReviewActionIcon"
                    data-icon-name="file-text"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                  >
                    <path
                      d="M3.33252 0.60156q-0.58789 0.04102-1.02197 0.44776-0.43408 0.40674-0.53321 0.99463-0.02734 0.16748-0.02734 4.95605 0 4.78857 0.02734 4.95605 0.09912 0.5332 0.46827 0.92627 0.37256 0.38965 0.90576 0.50245 0.10938 0.01367 0.66992 0.02734l3.17871 0 3.17871 0q0.56055-0.01367 0.66992-0.02734 0.5332-0.11279 0.90235-0.50245 0.37256-0.39307 0.47168-0.92627 0.02734-0.16748 0.02734-3.80078 0-3.6333-0.02734-3.80078-0.08545-0.51953-0.40674-0.92285-0.11279-0.14014-1.24756-1.2749-0.89551-0.88184-1.10742-1.06983-0.2085-0.19141-0.41699-0.29052-0.30762-0.15381-0.67334-0.19483-0.14014-0.02734-2.4917-0.02734-2.35156 0-2.54639 0.02734z m4.25537 2.42334l0 1.27149 0.04102 0.14013q0.08545 0.22559 0.24609 0.40674 0.16064 0.18115 0.35547 0.28028 0.14014 0.07178 0.22558 0.08544 0.12646 0.02734 0.40674 0.04102l2.21143 0 0 6.11816q0 0.43408-0.0376 0.51954-0.03418 0.08203-0.11963 0.17431-0.08203 0.08887-0.16406 0.1333l-0.09912 0.04102-7.30762 0-0.09912-0.04102q-0.08203-0.04443-0.16748-0.1333-0.08203-0.09228-0.11963-0.17431-0.03418-0.08545-0.03418-0.70069l0-4.18701 0-4.18701q0-0.61523 0.02734-0.6836 0.05811-0.12646 0.16749-0.23242 0.11279-0.10596 0.23925-0.1333 0.08545-0.01367 2.14307-0.01367l2.07129 0 0.01367 1.2749z m2.21143 0.01367l1.03564 1.03565-2.08496 0 0-1.03565q0-1.03564 0-1.04931l1.04932 1.04931z m-5.31836 1.66455q-0.18457 0.05811-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.18115 0.42041 0.08545 0.08203 0.15381 0.11279 0.07178 0.02734 0.25293 0.04102 0.12646 0 0.57422 0 0.44775 0 0.57422 0 0.18115-0.01367 0.24951-0.04102 0.07178-0.03076 0.15723-0.11279 0.18115-0.18115 0.18115-0.42041 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.16748-0.12646l-0.08545-0.04102-0.72803 0q-0.72803 0-0.78271 0.02734z m0.04101 2.31055q-0.14014 0.04102-0.2666 0.16748-0.16748 0.15381-0.17432 0.37256-0.00684 0.21533 0.12647 0.38623 0.1333 0.16748 0.35547 0.2085 0.09912 0.02734 2.43701 0.02734 2.33789 0 2.43701-0.02734 0.23584-0.04102 0.36914-0.23584 0.1333-0.19824 0.09229-0.4375-0.01367-0.0957-0.05127-0.16406-0.03418-0.07178-0.1128-0.14014-0.0752-0.07178-0.15722-0.11621l-0.09912-0.04102-2.43701-0.01367q-2.45068 0-2.51905 0.01367z m0.05469 2.32422q-0.29395 0.05469-0.42725 0.32129-0.12988 0.2666-0.00683 0.5332 0.04443 0.06836 0.11963 0.14014 0.07861 0.06836 0.16064 0.11279l0.09912 0.04102 4.95606 0 0.09912-0.04102q0.08203-0.04443 0.15722-0.11279 0.07861-0.07178 0.1128-0.14014 0.0376-0.07178 0.05127-0.18115 0.04102-0.19824-0.05127-0.36572-0.08887-0.16748-0.28369-0.2666l-0.09912-0.04102-2.40967 0q-2.39258 0-2.47803 0z"
                      fill="#59606E"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="ReviewActionText"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Open document
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="!loading && !isEmpty"
              data-pencil-name="ReviewItem" data-clickable @click="$router.push('/document-detail')"
              style="align-items: center; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; padding: 15px 18px; width: 100%"
            >
              <div
                data-pencil-name="ReviewIconBox"
                style="align-items: center; background-color: #F8EFDD; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 44px; justify-content: center; width: 44px"
              >
                <svg
                  data-pencil-name="ReviewIcon"
                  data-icon-name="triangle-alert"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 21px; width: 21px"
                >
                  <path
                    d="M6.87354 1.16211q-0.46143 0.02734-0.88184 0.30762-0.11279 0.08545-0.24609 0.22558-0.1333 0.14014-0.20166 0.23584-0.11279 0.16748-2.45069 4.26563-2.33789 4.09473-2.3789 4.19043-0.12646 0.29395-0.12647 0.64599-0.01367 0.19482 0.00684 0.32813 0.02051 0.1333 0.07861 0.30078 0.15381 0.43408 0.50244 0.73486 0.34863 0.30078 0.81348 0.39991 0.08203 0.02734 0.89551 0.02734l4.11523 0 4.22803 0q0.68701 0 0.79638-0.02734 0.50586-0.11279 0.86817-0.47852 0.51953-0.51611 0.51953-1.23047 0-0.42041-0.18115-0.78271-0.0581-0.09912-2.36866-4.14258-2.30713-4.04688-2.39257-4.18701-0.18115-0.29395-0.49561-0.50245-0.31445-0.21191-0.65283-0.28369-0.23584-0.04102-0.44775-0.02734z m0.37939 1.2168q0.0957 0.05811 0.15723 0.13671 0.06494 0.0752 2.42334 4.20411 2.36182 4.12891 2.38916 4.21435 0.06836 0.22559-0.05127 0.43408-0.11621 0.2085-0.35547 0.28028-0.06836 0.01367-0.85449 0.01367l-8.76368 0-0.11279-0.05469q-0.19482-0.08545-0.29394-0.29394-0.04102-0.09912-0.04102-0.23243 0-0.1333 0.04785-0.229 0.05127-0.09912 2.3584-4.15283 2.31055-4.05371 2.36865-4.13574 0.11279-0.15381 0.32813-0.2085 0.21533-0.05811 0.3999 0.0376l0-0.01367z m-0.40674 2.31054q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 2.46435q0 0.18115 0.03418 0.26661 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.26661l0-2.46435-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m0.05469 4.66211q-0.18115 0.02734-0.32129 0.16748-0.2085 0.21191-0.15381 0.50586 0.05469 0.29395 0.32129 0.42041 0.09912 0.04102 0.25293 0.04102 0.25293 0 0.42041-0.16748 0.12646-0.12646 0.15381-0.30762 0.05469-0.29394-0.15723-0.50244-0.2085-0.21191-0.51611-0.15723z"
                    fill="#8A5A00"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="ReviewInfo"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 5px; height: fit-content; justify-content: flex-start"
              >
                <div
                  data-pencil-name="ReviewTitleRow"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="ReviewItemTitle"
                    style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                  >
                    OS Lab Notebook - Week 4
                  </div>
                </div>
                <div
                  data-pencil-name="ReviewReason"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 19px; text-align: left; width: 100%'
                >
                  Text confidence is low on pages 2 and 5, so search may miss some words.
                </div>
                <div
                  data-pencil-name="ReviewMeta"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Research · 11 pages · detected 31 Aug, 19:22
                </div>
              </div>
              <div
                data-pencil-name="ReviewActions"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="ReviewAction"
                  style="align-items: center; background-color: #2B5BD7; border-radius: 9px; border: 1px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 9px 14px; width: fit-content"
                >
                  <svg
                    data-pencil-name="ReviewActionIcon"
                    data-icon-name="pencil"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                  >
                    <path
                      d="M11.00244 0.60156q-0.61523 0.04102-1.14502 0.43408-0.15381 0.09912-4.13232 4.0879-3.9751 3.98877-4.08789 4.1289-0.14014 0.19824-0.23242 0.45801-0.08887 0.25635-0.44776 1.46289-0.35547 1.20313-0.36914 1.28516-0.01367 0.12646 0.02051 0.27343 0.03418 0.14697 0.08887 0.2461 0.05811 0.09912 0.17089 0.20507 0.11279 0.10254 0.2085 0.14698 0.09912 0.04102 0.22559 0.06836 0.12646 0.02734 0.229 0.01367 0.10596-0.01367 1.38086-0.39307l1.24756-0.38964q0.26318-0.08545 0.3623-0.12647l0.01367-0.01367q0.14014-0.07178 0.32129-0.22559 0.25293-0.23926 1.08008-1.04932l2.92578-2.92578q3.98877-3.99219 4.10156-4.14599 0.18115-0.24951 0.29395-0.51612 0.23926-0.60156 0.11963-1.23046-0.11963-0.63232-0.56738-1.10743-0.35205-0.36572-0.81348-0.54687-0.46143-0.18115-0.99463-0.14014z m0.42041 1.17578q0.28027 0.05811 0.50928 0.29053 0.23242 0.229 0.29053 0.50928 0.08203 0.37598-0.08545 0.71435-0.04102 0.08203-0.1333 0.18116-0.08887 0.0957-0.42725 0.44775l-0.50244 0.50244-1.49707-1.49707 0.50244-0.50244q0.35205-0.33838 0.44775-0.42725 0.09912-0.09229 0.18116-0.1333 0.33838-0.16748 0.71435-0.08545z m-4.2417 6.53858q-3.07959 3.07959-3.14453 3.11719-0.06152 0.03418-1.0835 0.34863-1.02197 0.31445-1.03564 0.30762-0.01367-0.00683 0.29395-1.02881 0.30762-1.02197 0.33496-1.06983 0.03076-0.05127 3.12402-3.1582l3.09326-3.09326 1.4834 1.49707-3.06592 3.07959z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="ReviewActionText"
                    style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Review text
                  </div>
                </div>
                <div
                  data-pencil-name="ReviewAction"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
                >
                  <svg
                    data-pencil-name="ReviewActionIcon"
                    data-icon-name="check"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                  >
                    <path
                      d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                      fill="#59606E"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="ReviewActionText"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Confirm as is
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="!loading && !isEmpty"
              data-pencil-name="ReviewItem" data-clickable @click="$router.push('/document-detail')"
              style="align-items: center; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; padding: 15px 18px; width: 100%"
            >
              <div
                data-pencil-name="ReviewIconBox"
                style="align-items: center; background-color: #EEEFF2; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 44px; justify-content: center; width: 44px"
              >
                <svg
                  data-pencil-name="ReviewIcon"
                  data-icon-name="unlink"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 21px; width: 21px"
                >
                  <path
                    d="M4.57666 0.60156q-0.18115 0.01367-0.31445 0.14698-0.1333 0.1333-0.16065 0.31445-0.02734 0.09912-0.02734 0.98779 0 0.88867 0.02734 0.97412 0.02734 0.18115 0.15381 0.29395 0.19824 0.19482 0.46143 0.17431 0.2666-0.02051 0.42041-0.24609 0.07178-0.08203 0.08545-0.15723 0.01367-0.07861 0.02734-0.3042l0-1.72265-0.04102-0.0957q-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z m4.80225 0.05811q-0.92285 0.15381-1.63721 0.69726-0.16748 0.12646-0.76904 0.72803-0.60156 0.60156-0.63233 0.67334-0.0957 0.18115-0.06152 0.36572 0.03418 0.18115 0.16748 0.31446 0.1333 0.12988 0.32812 0.16064 0.19824 0.02734 0.36573-0.07178 0.05469-0.02734 0.64941-0.61523 0.59473-0.58789 0.7793-0.71436 0.30762-0.2085 0.62207-0.30078 0.31445-0.09229 0.69385-0.09228 0.56055 0 1.02197 0.22558 0.33496 0.16748 0.61523 0.44776 0.64258 0.62891 0.68701 1.55517 0.01367 0.37598-0.08545 0.75537-0.05469 0.15381-0.16064 0.37256-0.10596 0.21533-0.21875 0.36231-0.10938 0.14697-0.68359 0.73486-0.39307 0.39307-0.49219 0.49902-0.0957 0.10254-0.12305 0.17432-0.0581 0.16748-0.02392 0.32813 0.0376 0.16064 0.14697 0.28711 0.18457 0.18115 0.42041 0.18115 0.14014 0 0.21533-0.03418 0.07861-0.03418 0.23242-0.17432 0.11279-0.11279 0.47852-0.47851 0.58789-0.58789 0.71436-0.7417 0.55713-0.71436 0.71093-1.65088 0.04443-0.18115 0.04444-0.52295 0-0.34521-0.04444-0.52637-0.19482-1.16211-0.97754-1.94824-0.84082-0.8374-2.03027-0.99121-0.19824-0.03076-0.47852-0.03076-0.27686 0-0.47509 0.03076z m-8.30225 3.42822q-0.23584 0.04102-0.38281 0.24609-0.14697 0.20166-0.09229 0.44092 0.01367 0.0957 0.04785 0.16748 0.0376 0.06836 0.1128 0.14014 0.07861 0.06836 0.16064 0.11279l0.09912 0.04102 1.76367 0.01367q0.22559-0.01367 0.30079-0.02734 0.07861-0.01367 0.16064-0.08545 0.21191-0.14014 0.24609-0.36914 0.03418-0.23242-0.09912-0.43409-0.1333-0.20508-0.38281-0.23242-0.09912-0.02734-0.96728-0.02734-0.86816 0-0.96729 0.01367z m1.83545 2.19775q-0.09912 0.01367-0.1709 0.05811-0.06836 0.04102-0.51611 0.48193-0.44775 0.44092-0.65625 0.66309-0.36572 0.39307-0.58789 0.84082-0.32129 0.65967-0.35889 1.3877-0.03418 0.72803 0.22559 1.41503 0.25977 0.68359 0.77588 1.20313 0.82715 0.82373 2.0166 1.00488 0.18115 0.03076 0.47509 0.03076 0.29395 0 0.4751-0.03076 1.0083-0.13672 1.79444-0.79638 0.11279-0.09912 0.68359-0.67335 0.39307-0.38965 0.49219-0.4956 0.09912-0.10596 0.12646-0.17432 0.06836-0.22559-0.01025-0.43408-0.0752-0.21191-0.28369-0.30762-0.09912-0.0581-0.23926-0.0581l-0.01367 0q-0.14014 0-0.21192 0.03076-0.06836 0.02734-0.20849 0.15381-0.09912 0.0957-0.44776 0.44775l-0.02734 0.02735q-0.60156 0.58789-0.72803 0.68701-0.62891 0.46142-1.40137 0.46142-0.76904 0-1.39794-0.46142-0.19824-0.15723-0.38624-0.3794-0.18799-0.22559-0.30078-0.44775-0.23926-0.46143-0.24609-1.0083-0.00684-0.54688 0.21875-1.02197 0.10938-0.23926 0.24951-0.40674 0.14014-0.16748 0.63233-0.66992 0.61523-0.61865 0.64257-0.68702 0.09912-0.18115 0.05811-0.37939-0.04443-0.23584-0.23926-0.36914-0.19482-0.1333-0.43408-0.09229z m8.03564 2.47803q-0.08545 0.02734-0.18457 0.09229-0.0957 0.06152-0.15039 0.1333-0.12646 0.16748-0.11279 0.38623 0.01367 0.21533 0.18115 0.36914 0.12646 0.12646 0.29395 0.15381 0.09912 0.02734 0.98095 0.02734 0.88184 0 0.98096-0.02734 0.23584-0.04102 0.36914-0.23584 0.1333-0.19824 0.09229-0.4375-0.01367-0.0957-0.05127-0.16406-0.03418-0.07178-0.1128-0.14014-0.0752-0.07178-0.15722-0.11621l-0.09912-0.04102-0.98096-0.01367q-0.97754 0-1.04932 0.01367z m-1.75 1.75q-0.08545 0.02734-0.18457 0.09229-0.0957 0.06152-0.15039 0.1333-0.05811 0.08203-0.07861 0.16064-0.02051 0.0752-0.03418 0.31445l0.01367 1.76368 0.04102 0.09912q0.04443 0.08203 0.11279 0.16064 0.07178 0.0752 0.14014 0.1128 0.07178 0.03418 0.16748 0.04785 0.23926 0.04101 0.43408-0.09229 0.19824-0.1333 0.25293-0.36914 0.01367-0.09912 0.01367-0.98096 0-0.88184-0.02734-0.98095-0.02734-0.16748-0.15381-0.29395-0.09912-0.11279-0.25293-0.15381-0.15381-0.04102-0.29395-0.01367z"
                    fill="#59606E"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="ReviewInfo"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 5px; height: fit-content; justify-content: flex-start"
              >
                <div
                  data-pencil-name="ReviewTitleRow"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="ReviewItemTitle"
                    style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                  >
                    Physics Lecture 07
                  </div>
                </div>
                <div
                  data-pencil-name="ReviewReason"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 19px; text-align: left; width: 100%'
                >
                  The original photo moved or was deleted. The scanned PDF is safe and still
                  searchable.
                </div>
                <div
                  data-pencil-name="ReviewMeta"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Courses · 22 pages · detected 28 Aug, 08:10
                </div>
              </div>
              <div
                data-pencil-name="ReviewActions"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="ReviewAction"
                  style="align-items: center; background-color: #2B5BD7; border-radius: 9px; border: 1px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 9px 14px; width: fit-content"
                >
                  <svg
                    data-pencil-name="ReviewActionIcon"
                    data-icon-name="folder-input"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                  >
                    <path
                      d="M1.97559 1.20313q-0.39307 0.08545-0.71778 0.33837-0.32129 0.24951-0.50244 0.61524-0.0957 0.2085-0.12646 0.34863-0.04102 0.16748-0.04102 0.5332-0.01367 0.28027 0 1.10401l0 1.23388 0.04102 0.1128q0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445l0.04102-0.09912 0.02734-2.63184 0.04102-0.09912q0.14014-0.28027 0.44775-0.33496 0.12646-0.01367 1.30225 0l1.19287 0 0.0957 0.04102q0.11279 0.05811 0.18115 0.12988 0.07178 0.06836 0.22559 0.3042 0.43408 0.65967 0.58789 0.7998 0.39307 0.34863 0.88184 0.43408 0.12646 0.02734 2.52588 0.02735 2.40283 0 2.51562 0.02734 0.30762 0.04102 0.43408 0.32129l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394-0.02734-0.08545-0.04102-0.14697-0.01367-0.06494-0.01367-0.39307 0-0.32813-0.01367-0.39648-0.01367-0.07178-0.04102-0.14356-0.05811-0.12646-0.17773-0.21533-0.11621-0.09229-0.24268-0.10596-0.25293-0.04102-0.44433 0.09229-0.18799 0.1333-0.24268 0.38281-0.01367 0.11279-0.00684 0.51269 0.00684 0.3999 0.03418 0.52295 0.12646 0.5332 0.50928 0.89893 0.38623 0.36231 0.91944 0.46143 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0.01367-4.84668q-0.01367-0.68359-0.02734-0.92285-0.01367-0.18115-0.04102-0.32129-0.14014-0.4751-0.50586-0.81006-0.3623-0.33838-0.84082-0.4375-0.10938-0.02734-0.48877-0.02734l-4.21435-0.01367q-0.34863 0-0.43408-0.02734-0.16748-0.04443-0.26661-0.16748-0.02734-0.03076-0.20849-0.29395-0.42041-0.61865-0.58789-0.78613-0.25293-0.23584-0.57422-0.34864l-0.01367 0q-0.15381-0.07178-0.25293-0.08545-0.14014-0.02734-0.44776-0.02734l-1.03564 0-1.17578 0q-0.23926 0.01367-0.33496 0.02734z m3.1206 4.07421q-0.25293 0.07178-0.36572 0.3042-0.10938 0.229-0.02735 0.46485 0.02734 0.07178 0.10596 0.15722 0.07861 0.08203 0.35547 0.37598l0.42041 0.42041-4.56299 0.01367-0.09912 0.04102q-0.08203 0.04443-0.16064 0.11621-0.0752 0.06836-0.11963 0.13672-0.12305 0.2666 0 0.5332 0.12646 0.2666 0.42041 0.30762 0.09912 0.02734 2.31055 0.02734l2.21142 0-0.42041 0.42041q-0.27686 0.29395-0.35547 0.3794-0.07861 0.08203-0.10595 0.1538-0.05469 0.15381-0.02051 0.32129 0.03418 0.16748 0.14697 0.28028 0.18115 0.18115 0.42041 0.18115l0.01367 0q0.12646 0 0.19483-0.04102 0.09912-0.04443 0.31103-0.23925 0.15381-0.14014 0.6836-0.67334l0.07177-0.08204q0.9502-0.93994 0.99463-1.02197 0.02734-0.07178 0.04102-0.11279 0.01367-0.04102 0.01367-0.15381 0-0.18115-0.05127-0.26318-0.04785-0.08545-0.98779-1.02198-0.93652-0.93994-1.02881-0.98779-0.08887-0.05127-0.2085-0.0581-0.11621-0.00684-0.20166 0.0205z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="ReviewActionText"
                    style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Relocate file
                  </div>
                </div>
                <div
                  data-pencil-name="ReviewAction"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
                >
                  <svg
                    data-pencil-name="ReviewActionIcon"
                    data-icon-name="file-text"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                  >
                    <path
                      d="M3.33252 0.60156q-0.58789 0.04102-1.02197 0.44776-0.43408 0.40674-0.53321 0.99463-0.02734 0.16748-0.02734 4.95605 0 4.78857 0.02734 4.95605 0.09912 0.5332 0.46827 0.92627 0.37256 0.38965 0.90576 0.50245 0.10938 0.01367 0.66992 0.02734l3.17871 0 3.17871 0q0.56055-0.01367 0.66992-0.02734 0.5332-0.11279 0.90235-0.50245 0.37256-0.39307 0.47168-0.92627 0.02734-0.16748 0.02734-3.80078 0-3.6333-0.02734-3.80078-0.08545-0.51953-0.40674-0.92285-0.11279-0.14014-1.24756-1.2749-0.89551-0.88184-1.10742-1.06983-0.2085-0.19141-0.41699-0.29052-0.30762-0.15381-0.67334-0.19483-0.14014-0.02734-2.4917-0.02734-2.35156 0-2.54639 0.02734z m4.25537 2.42334l0 1.27149 0.04102 0.14013q0.08545 0.22559 0.24609 0.40674 0.16064 0.18115 0.35547 0.28028 0.14014 0.07178 0.22558 0.08544 0.12646 0.02734 0.40674 0.04102l2.21143 0 0 6.11816q0 0.43408-0.0376 0.51954-0.03418 0.08203-0.11963 0.17431-0.08203 0.08887-0.16406 0.1333l-0.09912 0.04102-7.30762 0-0.09912-0.04102q-0.08203-0.04443-0.16748-0.1333-0.08203-0.09228-0.11963-0.17431-0.03418-0.08545-0.03418-0.70069l0-4.18701 0-4.18701q0-0.61523 0.02734-0.6836 0.05811-0.12646 0.16749-0.23242 0.11279-0.10596 0.23925-0.1333 0.08545-0.01367 2.14307-0.01367l2.07129 0 0.01367 1.2749z m2.21143 0.01367l1.03564 1.03565-2.08496 0 0-1.03565q0-1.03564 0-1.04931l1.04932 1.04931z m-5.31836 1.66455q-0.18457 0.05811-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.18115 0.42041 0.08545 0.08203 0.15381 0.11279 0.07178 0.02734 0.25293 0.04102 0.12646 0 0.57422 0 0.44775 0 0.57422 0 0.18115-0.01367 0.24951-0.04102 0.07178-0.03076 0.15723-0.11279 0.18115-0.18115 0.18115-0.42041 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.16748-0.12646l-0.08545-0.04102-0.72803 0q-0.72803 0-0.78271 0.02734z m0.04101 2.31055q-0.14014 0.04102-0.2666 0.16748-0.16748 0.15381-0.17432 0.37256-0.00684 0.21533 0.12647 0.38623 0.1333 0.16748 0.35547 0.2085 0.09912 0.02734 2.43701 0.02734 2.33789 0 2.43701-0.02734 0.23584-0.04102 0.36914-0.23584 0.1333-0.19824 0.09229-0.4375-0.01367-0.0957-0.05127-0.16406-0.03418-0.07178-0.1128-0.14014-0.0752-0.07178-0.15722-0.11621l-0.09912-0.04102-2.43701-0.01367q-2.45068 0-2.51905 0.01367z m0.05469 2.32422q-0.29395 0.05469-0.42725 0.32129-0.12988 0.2666-0.00683 0.5332 0.04443 0.06836 0.11963 0.14014 0.07861 0.06836 0.16064 0.11279l0.09912 0.04102 4.95606 0 0.09912-0.04102q0.08203-0.04443 0.15722-0.11279 0.07861-0.07178 0.1128-0.14014 0.0376-0.07178 0.05127-0.18115 0.04102-0.19824-0.05127-0.36572-0.08887-0.16748-0.28369-0.2666l-0.09912-0.04102-2.40967 0q-2.39258 0-2.47803 0z"
                      fill="#59606E"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="ReviewActionText"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Open saved PDF
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="!loading && !isEmpty"
              data-pencil-name="ReviewItem" data-clickable @click="$router.push('/document-detail')"
              style="align-items: center; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; padding: 15px 18px; width: 100%"
            >
              <div
                data-pencil-name="ReviewIconBox"
                style="align-items: center; background-color: #E7EDFC; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 44px; justify-content: center; width: 44px"
              >
                <svg
                  data-pencil-name="ReviewIcon"
                  data-icon-name="loader-circle"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 21px; width: 21px"
                >
                  <path
                    d="M6.4668 1.18945q-1.49707 0.14014-2.75147 0.99463-1.25098 0.85449-1.92431 2.19776-0.44775 0.89551-0.5879 1.93115-0.02734 0.16748-0.02734 0.68701 0 0.51953 0.02734 0.68701 0.16748 1.2168 0.75538 2.23877 0.58789 1.02197 1.55517 1.75 0.60156 0.46143 1.3501 0.74854 0.74854 0.28711 1.521 0.37255 0.23584 0.02734 0.61523 0.02735 0.37939 0 0.61523-0.02735 1.12109-0.12646 2.10547-0.64257 0.98779-0.51953 1.71582-1.36719 0.72803-0.84766 1.09375-1.92432 0.14014-0.44775 0.22217-0.91601 0.08545-0.47168 0.07178-0.86133 0-0.1709-0.00684-0.22559-0.00684-0.05469-0.03418-0.11279-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.09912 0.04102-0.18115 0.09912-0.25977 0.25293-0.0752 0.15381-0.08203 0.47168-0.00683 0.31445-0.09228 0.73144-0.28027 1.3877-1.30225 2.396-1.11768 1.104-2.7583 1.30225-0.18115 0.02734-0.5332 0.02734-0.34863 0-0.54346-0.02734-0.78271-0.11279-1.47656-0.44776-0.69385-0.33838-1.24072-0.88183-0.65625-0.65967-1.01514-1.51416-0.35547-0.85449-0.35547-1.79102 0-0.56055 0.11963-1.05615 0.11963-0.49902 0.35547-1.00147 0.33838-0.67334 0.88183-1.22363 0.54688-0.55371 1.24756-0.90576 0.50244-0.23584 0.99805-0.35547 0.49902-0.11963 1.05957-0.11963 0.3623 0 0.66309 0.04443 0.3042 0.04102 0.6665 0.15039 0.23926 0.05811 0.33496 0.05811 0.21191-0.02734 0.36572-0.17432 0.15381-0.14697 0.16748-0.35888 0.01367-0.15381-0.05127-0.29395-0.06152-0.14014-0.17089-0.22217-0.15723-0.09912-0.59131-0.20507-0.43066-0.10596-0.88184-0.14698-0.16748-0.01367-0.51611-0.01367-0.34863 0-0.51953 0.01367z"
                    fill="#2B5BD7"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="ReviewInfo"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 5px; height: fit-content; justify-content: flex-start"
              >
                <div
                  data-pencil-name="ReviewTitleRow"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="ReviewItemTitle"
                    style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                  >
                    Dataset Notes
                  </div>
                </div>
                <div
                  data-pencil-name="ReviewReason"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 19px; text-align: left; width: 100%'
                >
                  Still processing: 4 of 6 pages.
                </div>
                <div
                  data-pencil-name="ReviewProgressTrack"
                  style="align-items: center; background-color: #E4E7EC; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 260px"
                >
                  <div
                    data-pencil-name="ReviewProgressFill"
                    style="align-items: flex-start; background-color: #2B5BD7; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 172px"
                  ></div>
                </div>
                <div
                  data-pencil-name="ReviewMeta"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Research · 6 pages · started 28 Aug, 07:55
                </div>
              </div>
              <div
                data-pencil-name="ReviewActions"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="ReviewAction"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
                >
                  <svg
                    data-pencil-name="ReviewActionIcon"
                    data-icon-name="forward"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                  >
                    <path
                      d="M8.60986 3.51367q-0.12646 0.02734-0.23925 0.1333-0.10938 0.10596-0.16748 0.23242-0.06836 0.2085 0 0.417 0.02734 0.07178 0.18115 0.23242 0.15723 0.16064 0.86816 0.88867l1.0083 1.0083-5.15088 0q-0.61523 0-0.82715 0.02735-0.15381 0.01367-0.34863 0.0581l-0.01367 0.01367q-0.51953 0.12646-0.96045 0.44092-0.44092 0.31445-0.73486 0.77588-0.16748 0.2666-0.28028 0.56055-0.12646 0.33496-0.16064 0.62207-0.03418 0.28711-0.03418 0.98779l0.01367 0.7417 0.04102 0.09912q0.12646 0.2666 0.42041 0.31445 0.29395 0.04785 0.50586-0.14697 0.08203-0.08545 0.14013-0.18115l0.04102-0.1128 0.01367-0.7998q0-0.64258 0.02051-0.79639 0.02051-0.15381 0.10596-0.36572 0.11279-0.29395 0.34179-0.52978 0.23242-0.23926 0.5127-0.37256 0.28027-0.1333 0.61523-0.16065 0.19482-0.02734 2.9668-0.02734l2.77197 0-1.0083 1.0083q-0.71094 0.72803-0.86816 0.88867-0.15381 0.16064-0.18115 0.23242-0.06836 0.2085 0.01367 0.42725 0.08545 0.21533 0.28027 0.31445 0.09912 0.04102 0.25293 0.04102l0.04102 0q0.11279 0.01367 0.19824-0.04102 0.10938-0.07178 0.40332-0.36572 0.22559-0.2085 0.99463-0.98096l0.23925-0.23584q0.9502-0.95361 1.25098-1.26123 0.3042-0.30762 0.33154-0.3623 0.02734-0.08545 0.02735-0.23926 0-0.15381-0.02735-0.23926-0.02734-0.05469-0.33154-0.35547-0.30078-0.30078-1.25098-1.26806-1.52783-1.52441-1.61328-1.56543-0.08203-0.04443-0.19482-0.05811-0.10938-0.01367-0.2085 0z"
                      fill="#59606E"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="ReviewActionText"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Open progress
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="!loading && !isEmpty"
              data-pencil-name="ReviewItem" data-clickable @click="$router.push('/document-detail')"
              style="align-items: center; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; padding: 15px 18px; width: 100%"
            >
              <div
                data-pencil-name="ReviewIconBox"
                style="align-items: center; background-color: #F8EFDD; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 44px; justify-content: center; width: 44px"
              >
                <svg
                  data-pencil-name="ReviewIcon"
                  data-icon-name="scan-line"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 21px; width: 21px"
                >
                  <path
                    d="M2.60449 1.20313q-0.43408 0.07178-0.77929 0.35205-0.3418 0.28027-0.50928 0.66992l-0.01367 0.01367q-0.08545 0.21191-0.10596 0.35205-0.02051 0.14014-0.02051 0.75537l0 0.05469q0 0.57422 0 0.69385 0 0.11963 0.03418 0.21191 0.0376 0.08887 0.11963 0.17432 0.18115 0.18115 0.42041 0.18115 0.23926 0 0.40674-0.16748l0.01367-0.01367q0.08203-0.08545 0.10938-0.14014 0.03076-0.05811 0.03076-0.23926 0.01367-0.11279 0.01367-0.54687l0.01367-0.76905 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 0.76905-0.01367q0.43408 0 0.54687-0.01367 0.18115 0 0.23584-0.02735 0.05811-0.03076 0.14356-0.11279l0.01367-0.01367q0.16748-0.16748 0.16748-0.40674 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.16748-0.12646l-0.08545-0.04102-0.75537 0q-0.76904 0-0.88184 0.02735z m7.12647-0.00001q-0.18457 0.05811-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.16748 0.40674l0.01367 0.01367q0.08545 0.08203 0.14014 0.11279 0.05811 0.02734 0.23926 0.02735 0.11279 0.01367 0.54687 0.01367l0.76904 0.01367 0.09913 0.04102q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 0.76905q0 0.43408 0.01367 0.54687 0 0.18115 0.02735 0.23926 0.03076 0.05469 0.11279 0.14014l0.01367 0.01367q0.12647 0.12646 0.30078 0.16064 0.17432 0.03418 0.34522-0.03418 0.0957-0.05811 0.17773-0.14013 0.08545-0.08545 0.11963-0.17432 0.0376-0.09229 0.0376-0.21191 0-0.11963 0-0.69385 0-0.57422-0.00684-0.7041-0.00684-0.1333-0.03418-0.21875-0.25293-0.81348-0.98095-1.14844-0.14014-0.06836-0.28028-0.11279-0.09912-0.02734-0.23242-0.03418-0.12988-0.00684-0.7041-0.00684-0.7998 0-0.85449 0.02734z m-5.85157 5.25q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14014 0 0.15381 0.04102 0.25293 0.11279 0.2085 0.3247 0.29394l0.09571 0.02735 6.0498 0 0.0957-0.02735q0.21192-0.08545 0.32471-0.29394 0.04102-0.09912 0.04102-0.25293 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.4751-0.0376l-2.65918 0-2.64551 0q-0.42041 0.01367-0.4751 0.02734z m-2.22851 2.89844q-0.15381 0.01367-0.27344 0.11963-0.11621 0.10596-0.17432 0.23242-0.02734 0.08203-0.02734 0.20166 0 0.11963 0 0.69385 0 0.57422 0.00684 0.70752 0.00684 0.12988 0.03418 0.21533 0.29395 0.96729 1.26123 1.26123 0.08545 0.02734 0.21533 0.03418 0.1333 0.00684 0.70752 0.00684 0.57422 0 0.69385 0 0.11963 0 0.20849-0.03418 0.09229-0.0376 0.17432-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394-0.05811-0.02734-0.16406-0.03418-0.10254-0.00684-0.66309-0.01367-0.56055-0.00684-0.68018-0.02051-0.11621-0.01367-0.21533-0.07178-0.14014-0.0957-0.22558-0.26318l-0.04102-0.09913-0.02734-1.34326q0-0.14014-0.02735-0.18457-0.08545-0.18115-0.25976-0.27685-0.17432-0.09912-0.37256-0.05811z m10.5 0q-0.18115 0.02734-0.32129 0.16748-0.08203 0.08545-0.11279 0.15039-0.02734 0.06152-0.02735 0.22901-0.01367 0.12646-0.01367 0.56054l-0.01367 0.75537-0.04102 0.09913q-0.08545 0.16748-0.22558 0.26318-0.09912 0.05811-0.21875 0.07178-0.11621 0.01367-0.67676 0.02051-0.56055 0.00684-0.6665 0.01367-0.10254 0.00684-0.16065 0.03418-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.17432 0.11963 0.09229 0.03418 0.21191 0.03418 0.11963 0 0.69385 0 0.57422 0 0.7041-0.00684 0.1333-0.00684 0.21875-0.03418 0.96729-0.29395 1.26123-1.26123 0.02734-0.08545 0.03418-0.21533 0.00684-0.1333 0.00684-0.69385l0-0.63232q0-0.19482-0.02051-0.26318-0.02051-0.07178-0.09228-0.15381-0.09912-0.12646-0.2461-0.18116-0.14697-0.05811-0.31445-0.03076z"
                    fill="#8A5A00"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="ReviewInfo"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 5px; height: fit-content; justify-content: flex-start"
              >
                <div
                  data-pencil-name="ReviewTitleRow"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="ReviewItemTitle"
                    style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                  >
                    Introduction to Homography (draft)
                  </div>
                </div>
                <div
                  data-pencil-name="ReviewReason"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 19px; text-align: left; width: 100%'
                >
                  No page boundary found on page 12, so the crop may be uneven.
                </div>
                <div
                  data-pencil-name="ReviewMeta"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Research · 12 pages · detected 21 Aug, 11:30
                </div>
              </div>
              <div
                data-pencil-name="ReviewActions"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="ReviewAction"
                  style="align-items: center; background-color: #2B5BD7; border-radius: 9px; border: 1px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 9px 14px; width: fit-content"
                >
                  <svg
                    data-pencil-name="ReviewActionIcon"
                    data-icon-name="crop"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                  >
                    <path
                      d="M3.40088 0.60156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.21533l0 1.76367-1.91748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.22559 0.03418l1.76367 0 0 5.57129 0.04102 0.12646q0.15381 0.4751 0.46826 0.79297 0.31787 0.31445 0.79297 0.46826l0.12646 0.04102 5.57129 0 0 1.76367q0 0.14014 0.03418 0.22559 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.22559l0-1.76367 1.76367 0q0.14014 0 0.22217-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-1.91748 0 0-5.57129-0.04102-0.12646q-0.15381-0.4751-0.47168-0.79639-0.31445-0.32471-0.78955-0.46484l-0.14013-0.04102-5.55762 0 0-1.75q0-0.15381-0.02734-0.20849-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z m6.1626 3.52735q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 5.39014-2.63183 0q-2.63184 0-2.73096-0.02734-0.29395-0.05811-0.43408-0.33496l-0.04102-0.09912-0.01367-5.39014 5.39014 0.01367 0.09912 0.04102z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="ReviewActionText"
                    style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Adjust page
                  </div>
                </div>
                <div
                  data-pencil-name="ReviewAction"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
                >
                  <svg
                    data-pencil-name="ReviewActionIcon"
                    data-icon-name="check"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                  >
                    <path
                      d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                      fill="#59606E"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="ReviewActionText"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Confirm as is
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { selectReviewFilter } from '@/composables/useReviewFilters'
import { usePreferencesStore } from '@/stores/preferences'
import SkeletonCard from '@/components/SkeletonCard.vue'
import EmptyState from '@/components/EmptyState.vue'

// ReviewFilters 行：All / Paper edges / Text recognition / File location / Processing
// 当前筛选是用户偏好：初始值来自 preferences store（localStorage 持久化），选中即写回
const prefs = usePreferencesStore()
const { reviewFilter: activeFilter } = storeToRefs(prefs)
const filterFiles = ref([]) // 接口返回的「该标签对应文件」，用于渲染列表

// ---- 列表三态：loading（骨架行）→ empty（无匹配 → EmptyState）→ ready（ReviewItem）----
// 数据来自 GET /api/review/files?filter=；?empty=1 为演示 / 联调空态的钩子。
const loading = ref(true)
const route = useRoute()
const router = useRouter()
const isEmpty = computed(
  () => !loading.value && (route.query.empty === '1' || filterFiles.value.length === 0)
)
let ac = null
let seq = 0

// 选中标签 → 请求该标签对应的文件（竞态用 seq + AbortController 取消旧请求）
async function selectFilter(key) {
  prefs.setReviewFilter(key)
  ac?.abort()
  ac = new AbortController()
  const mine = ++seq
  loading.value = true
  try {
    const files = await selectReviewFilter(key, { signal: ac.signal })
    if (mine !== seq) return
    filterFiles.value = files
  } catch (e) {
    if (mine !== seq) return
    if (e?.kind !== 'abort') filterFiles.value = []
  } finally {
    if (mine === seq) loading.value = false
  }
}

onMounted(() => selectFilter(prefs.reviewFilter))
onBeforeUnmount(() => ac?.abort())
</script>

<style scoped>
/* Review 标签：默认白底黑字；hover 灰色；按下 / 选中 250ms 内变黑底白字 */
.rf-chip {
  background-color: #FFFFFF !important;
  border-color: #E3E5EA !important;
  transition:
    background-color 250ms ease,
    border-color 250ms ease;
}
.rf-chip [data-pencil-name="ReviewFilterText"],
.rf-chip [data-pencil-name="ReviewFilterBadgeText"] {
  transition: color 250ms ease;
}
.rf-chip [data-pencil-name="ReviewFilterBadge"] {
  transition: background-color 250ms ease;
}

/* 默认：白底黑字 */
.rf-chip [data-pencil-name="ReviewFilterText"] {
  color: #16181D !important;
}
.rf-chip [data-pencil-name="ReviewFilterBadge"] {
  background-color: #EEEFF2 !important;
}
.rf-chip [data-pencil-name="ReviewFilterBadgeText"] {
  color: #8A909C !important;
}

/* hover：灰色（选中项除外，规则顺序保证 .is-active 覆盖 hover） */
.rf-chip:hover {
  background-color: #F3F4F6 !important;
  border-color: #D9DDE3 !important;
}

/* 按下 / 选中：黑底白字 */
.rf-chip:active,
.rf-chip.is-active {
  background-color: #16181D !important;
  border-color: #16181D !important;
}
.rf-chip:active [data-pencil-name="ReviewFilterText"],
.rf-chip.is-active [data-pencil-name="ReviewFilterText"] {
  color: #FFFFFF !important;
}
.rf-chip:active [data-pencil-name="ReviewFilterBadge"],
.rf-chip.is-active [data-pencil-name="ReviewFilterBadge"] {
  background-color: #FFFFFF33 !important;
}
.rf-chip:active [data-pencil-name="ReviewFilterBadgeText"],
.rf-chip.is-active [data-pencil-name="ReviewFilterBadgeText"] {
  color: #FFFFFF !important;
}

/* 三态切换：真实条目统一淡入，避免骨架 → 条目的跳变闪烁 */
[data-pencil-name="ReviewList"] [data-pencil-name="ReviewItem"] {
  animation: sv-rise-in var(--sv-dur-move) var(--sv-ease-out) both;
}
</style>
