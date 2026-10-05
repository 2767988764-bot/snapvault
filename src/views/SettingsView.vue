<template>
      <div class="page-root"
        data-pencil-name="09 · Settings"
        style="align-items: flex-start; background-image: url('/assets/bg-0.webp'); background-repeat: no-repeat; background-size: 100% 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 0px; height: 900px; justify-content: flex-start; overflow: hidden; position: relative; width: 1440px"
      >
        <div data-pencil-name="TopNavSpacer" style="height: 64px; flex-shrink: 0; width: 100%"></div>
        <div
          data-pencil-name="SettingsContent"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 24px; justify-content: flex-start; padding: 28px 40px; width: 100%"
        >
          <div
            ref="navEl"
            data-pencil-name="SettingsNav"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 4px; height: fit-content; justify-content: flex-start; width: 250px"
          >
            <!-- 激活背景块：绝对定位，切换时按目标行的 offsetTop 滑移 -->
            <div
              class="sv-nav-pill"
              data-pencil-name="SettingsNavPill"
              aria-hidden="true"
              :style="pillStyle"
            ></div>
            <div
              data-pencil-name="SettingsNavGap"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 8px; justify-content: flex-start; width: 1px"
            ></div>
            <div
              data-pencil-name="SettingsNavRow"
              data-clickable
              :class="{ 'is-active': activeNav === 0 }"
              style="align-items: center; background-color: #E7EDFC; border-radius: 9px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; padding: 10px 12px; width: 100%"
              @click="selectNav(0)"
            >
              <svg
                data-pencil-name="SettingsNavIcon"
                data-icon-name="scan-line"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
              >
                <path
                  d="M2.60449 1.20313q-0.43408 0.07178-0.77929 0.35205-0.3418 0.28027-0.50928 0.66992l-0.01367 0.01367q-0.08545 0.21191-0.10596 0.35205-0.02051 0.14014-0.02051 0.75537l0 0.05469q0 0.57422 0 0.69385 0 0.11963 0.03418 0.21191 0.0376 0.08887 0.11963 0.17432 0.18115 0.18115 0.42041 0.18115 0.23926 0 0.40674-0.16748l0.01367-0.01367q0.08203-0.08545 0.10938-0.14014 0.03076-0.05811 0.03076-0.23926 0.01367-0.11279 0.01367-0.54687l0.01367-0.76905 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 0.76905-0.01367q0.43408 0 0.54687-0.01367 0.18115 0 0.23584-0.02735 0.05811-0.03076 0.14356-0.11279l0.01367-0.01367q0.16748-0.16748 0.16748-0.40674 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.16748-0.12646l-0.08545-0.04102-0.75537 0q-0.76904 0-0.88184 0.02735z m7.12647-0.00001q-0.18457 0.05811-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.16748 0.40674l0.01367 0.01367q0.08545 0.08203 0.14014 0.11279 0.05811 0.02734 0.23926 0.02735 0.11279 0.01367 0.54687 0.01367l0.76904 0.01367 0.09913 0.04102q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 0.76905q0 0.43408 0.01367 0.54687 0 0.18115 0.02735 0.23926 0.03076 0.05469 0.11279 0.14014l0.01367 0.01367q0.12647 0.12646 0.30078 0.16064 0.17432 0.03418 0.34522-0.03418 0.0957-0.05811 0.17773-0.14013 0.08545-0.08545 0.11963-0.17432 0.0376-0.09229 0.0376-0.21191 0-0.11963 0-0.69385 0-0.57422-0.00684-0.7041-0.00684-0.1333-0.03418-0.21875-0.25293-0.81348-0.98095-1.14844-0.14014-0.06836-0.28028-0.11279-0.09912-0.02734-0.23242-0.03418-0.12988-0.00684-0.7041-0.00684-0.7998 0-0.85449 0.02734z m-5.85157 5.25q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14014 0 0.15381 0.04102 0.25293 0.11279 0.2085 0.3247 0.29394l0.09571 0.02735 6.0498 0 0.0957-0.02735q0.21192-0.08545 0.32471-0.29394 0.04102-0.09912 0.04102-0.25293 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.4751-0.0376l-2.65918 0-2.64551 0q-0.42041 0.01367-0.4751 0.02734z m-2.22851 2.89844q-0.15381 0.01367-0.27344 0.11963-0.11621 0.10596-0.17432 0.23242-0.02734 0.08203-0.02734 0.20166 0 0.11963 0 0.69385 0 0.57422 0.00684 0.70752 0.00684 0.12988 0.03418 0.21533 0.29395 0.96729 1.26123 1.26123 0.08545 0.02734 0.21533 0.03418 0.1333 0.00684 0.70752 0.00684 0.57422 0 0.69385 0 0.11963 0 0.20849-0.03418 0.09229-0.0376 0.17432-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394-0.05811-0.02734-0.16406-0.03418-0.10254-0.00684-0.66309-0.01367-0.56055-0.00684-0.68018-0.02051-0.11621-0.01367-0.21533-0.07178-0.14014-0.0957-0.22558-0.26318l-0.04102-0.09913-0.02734-1.34326q0-0.14014-0.02735-0.18457-0.08545-0.18115-0.25976-0.27685-0.17432-0.09912-0.37256-0.05811z m10.5 0q-0.18115 0.02734-0.32129 0.16748-0.08203 0.08545-0.11279 0.15039-0.02734 0.06152-0.02735 0.22901-0.01367 0.12646-0.01367 0.56054l-0.01367 0.75537-0.04102 0.09913q-0.08545 0.16748-0.22558 0.26318-0.09912 0.05811-0.21875 0.07178-0.11621 0.01367-0.67676 0.02051-0.56055 0.00684-0.6665 0.01367-0.10254 0.00684-0.16065 0.03418-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.17432 0.11963 0.09229 0.03418 0.21191 0.03418 0.11963 0 0.69385 0 0.57422 0 0.7041-0.00684 0.1333-0.00684 0.21875-0.03418 0.96729-0.29395 1.26123-1.26123 0.02734-0.08545 0.03418-0.21533 0.00684-0.1333 0.00684-0.69385l0-0.63232q0-0.19482-0.02051-0.26318-0.02051-0.07178-0.09228-0.15381-0.09912-0.12646-0.2461-0.18116-0.14697-0.05811-0.31445-0.03076z"
                  fill="#2B5BD7"
                ></path>
              </svg>
              <div
                data-pencil-name="SettingsNavLabel"
                style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Scanning &amp; text
              </div>
            </div>
            <div
              data-pencil-name="SettingsNavRow"
              data-clickable
              :class="{ 'is-active': activeNav === 1 }"
              style="align-items: center; background-color: #FFFFFF00; border-radius: 9px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; padding: 10px 12px; width: 100%"
              @click="selectNav(1)"
            >
              <svg
                data-pencil-name="SettingsNavIcon"
                data-icon-name="hard-drive"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
              >
                <path
                  d="M3.9751 1.76367q-0.34863 0.05469-0.68018 0.25977-0.32813 0.20166-0.50928 0.48193-0.09912 0.14014-1.13476 2.22852-1.03564 2.08496-1.05615 2.16357-0.02051 0.0752-0.00684 1.96533l0 1.59619q0.01367 0.32129 0.02734 0.40332 0.12646 0.5332 0.50928 0.89893 0.38623 0.36231 0.91944 0.46143 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.46143 0.38623-0.36572 0.5127-0.89893 0.01367-0.08203 0.02734-0.40332l0-1.59619q0.01367-1.89014-0.00684-1.96533-0.02051-0.07861-1.05615-2.16357-1.03564-2.08838-1.12109-2.21485-0.19482-0.29395-0.53321-0.50244-0.33496-0.21191-0.68359-0.25293-0.14014-0.01367-3.0249-0.01367-2.88477 0-3.01123 0.01367z m6.00537 1.18945q0.09912 0.04443 0.18457 0.12647 0.06836 0.05811 0.19482 0.3042 0.12646 0.24268 0.71436 1.39111 0.81006 1.62354 0.81006 1.63721 0 0.01367-4.8877 0.01367-4.88428 0-4.88428-0.01367 0-0.01367 0.81348-1.63721 0.58789-1.14844 0.71436-1.39111 0.12646-0.24609 0.19482-0.3042 0.08545-0.08203 0.16065-0.10938 0.07861-0.03076 0.47168-0.04443l2.53271 0 2.53271 0q0.37939 0 0.44776 0.02735z m2.26953 6.15918l-0.01367 1.54151-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912-0.01367-3.07959 10.5 0 0 1.53808z m-8.90381-0.33496q-0.2085 0.05811-0.32129 0.22559-0.11279 0.16748-0.09912 0.37256 0.01367 0.20166 0.15381 0.35547 0.08545 0.08203 0.15381 0.12646 0.21191 0.0957 0.42041 0.03418 0.2085-0.06494 0.33496-0.24609 0.12646-0.18115 0.08545-0.40674-0.01367-0.10938-0.05127-0.17773-0.03418-0.07178-0.11963-0.14014-0.08203-0.07178-0.16064-0.11279-0.0752-0.04443-0.19483-0.05127-0.11621-0.00684-0.20166 0.0205z m2.35156-0.01367q-0.08545 0.02734-0.18457 0.09229-0.0957 0.06152-0.13672 0.1333-0.14014 0.16748-0.12646 0.38623 0.01367 0.21533 0.18115 0.36914 0.12646 0.12646 0.29395 0.15381 0.30762 0.05469 0.52295-0.16065 0.21875-0.21875 0.16406-0.51269-0.05469-0.29395-0.34863-0.42041-0.07178-0.04102-0.18457-0.04785-0.10938-0.00684-0.18116 0.00683z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="SettingsNavLabel"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Storage &amp; export
              </div>
            </div>
            <div
              data-pencil-name="SettingsNavRow"
              data-clickable
              :class="{ 'is-active': activeNav === 2 }"
              style="align-items: center; background-color: #FFFFFF00; border-radius: 9px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; padding: 10px 12px; width: 100%"
              @click="selectNav(2)"
            >
              <svg
                data-pencil-name="SettingsNavIcon"
                data-icon-name="shield-check"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
              >
                <path
                  d="M6.84619 0.60156q-0.34863 0.02734-0.68701 0.30762-0.51611 0.42041-1.00147 0.70068-0.48193 0.28027-1.01513 0.4751-0.30762 0.11279-0.58789 0.1709-0.28027 0.05469-0.66992 0.08203-0.23926 0.01367-0.36573 0.07178-0.19482 0.06836-0.37939 0.22217-0.18115 0.15381-0.26319 0.34863l-0.01367 0.03076q-0.07178 0.12646-0.08545 0.22217-0.01367 0.15381-0.02734 0.60156l0 1.78076q0 2.25244 0.01367 2.46094 0.14014 1.6543 1.10742 2.88477 0.14014 0.16748 0.43409 0.46142 0.29395 0.29394 0.48877 0.44775 0.92285 0.7417 2.2832 1.27491 0.46143 0.18115 0.65625 0.23926 0.23926 0.05469 0.43408 0.01367 0.16748-0.02734 0.5332-0.15381 1.35693-0.51953 2.27979-1.20313 0.37939-0.2666 0.71435-0.60498 1.37402-1.3706 1.54151-3.37353 0.01367-0.23584 0.01367-2.46094 0-2.22852-0.02734-2.35498-0.07178-0.32129-0.31787-0.56396-0.24268-0.24609-0.5503-0.31788-0.09912-0.02734-0.37939-0.04101-0.48877-0.02734-0.96387-0.18115-0.81348-0.2666-1.55518-0.77246-0.2666-0.18115-0.64257-0.48877-0.42041-0.33496-0.96729-0.28028z m0.43408 1.34326q0.64258 0.51953 1.32959 0.86817 1.2168 0.61865 2.25244 0.68701l0.21192 0-0.01367 4.31348q0 0.33496-0.02735 0.50244-0.22559 1.34326-1.1416 2.27637-0.91602 0.92969-2.66601 1.57226l-0.21192 0.08545-0.18115-0.05469q-2.32422-0.85449-3.2334-2.22851-0.47852-0.71436-0.63232-1.63721-0.02734-0.18115-0.02735-0.50244l-0.01367-4.32715 0.19483 0q0.86816-0.05469 1.84912-0.48193 0.98096-0.42725 1.83545-1.12793 0.16748-0.14014 0.19482-0.14014 0.02734 0 0.28027 0.19482z m1.32959 3.31885q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="SettingsNavLabel"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Privacy
              </div>
            </div>
            <div
              data-pencil-name="SettingsNavRow"
              data-clickable
              :class="{ 'is-active': activeNav === 3 }"
              style="align-items: center; background-color: #FFFFFF00; border-radius: 9px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; padding: 10px 12px; width: 100%"
              @click="selectNav(3)"
            >
              <svg
                data-pencil-name="SettingsNavIcon"
                data-icon-name="info"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
              >
                <path
                  d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-0.75879 2.31054q-0.18115 0.02734-0.32129 0.16748-0.2085 0.21191-0.15381 0.50586 0.05469 0.29395 0.32129 0.42041 0.09912 0.04102 0.25293 0.04102 0.25293 0 0.42041-0.16748 0.12646-0.12646 0.15381-0.30762 0.05469-0.29395-0.15723-0.50244-0.2085-0.21191-0.51611-0.15723z m-0.05469 2.33789q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 2.46436q0 0.18115 0.03418 0.2666 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.2666l0-2.46436-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="SettingsNavLabel"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                About
              </div>
            </div>
            <div
              data-pencil-name="PrivacyCallout"
              style="align-items: flex-start; background-color: #E4F2EA; border-radius: 12px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; padding: 14px; width: 100%"
            >
              <div
                data-pencil-name="PrivacyCalloutHead"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <svg
                  data-pencil-name="PrivacyCalloutIcon"
                  data-icon-name="shield-check"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M6.84619 0.60156q-0.34863 0.02734-0.68701 0.30762-0.51611 0.42041-1.00147 0.70068-0.48193 0.28027-1.01513 0.4751-0.30762 0.11279-0.58789 0.1709-0.28027 0.05469-0.66992 0.08203-0.23926 0.01367-0.36573 0.07178-0.19482 0.06836-0.37939 0.22217-0.18115 0.15381-0.26319 0.34863l-0.01367 0.03076q-0.07178 0.12646-0.08545 0.22217-0.01367 0.15381-0.02734 0.60156l0 1.78076q0 2.25244 0.01367 2.46094 0.14014 1.6543 1.10742 2.88477 0.14014 0.16748 0.43409 0.46142 0.29395 0.29394 0.48877 0.44775 0.92285 0.7417 2.2832 1.27491 0.46143 0.18115 0.65625 0.23926 0.23926 0.05469 0.43408 0.01367 0.16748-0.02734 0.5332-0.15381 1.35693-0.51953 2.27979-1.20313 0.37939-0.2666 0.71435-0.60498 1.37402-1.3706 1.54151-3.37353 0.01367-0.23584 0.01367-2.46094 0-2.22852-0.02734-2.35498-0.07178-0.32129-0.31787-0.56396-0.24268-0.24609-0.5503-0.31788-0.09912-0.02734-0.37939-0.04101-0.48877-0.02734-0.96387-0.18115-0.81348-0.2666-1.55518-0.77246-0.2666-0.18115-0.64257-0.48877-0.42041-0.33496-0.96729-0.28028z m0.43408 1.34326q0.64258 0.51953 1.32959 0.86817 1.2168 0.61865 2.25244 0.68701l0.21192 0-0.01367 4.31348q0 0.33496-0.02735 0.50244-0.22559 1.34326-1.1416 2.27637-0.91602 0.92969-2.66601 1.57226l-0.21192 0.08545-0.18115-0.05469q-2.32422-0.85449-3.2334-2.22851-0.47852-0.71436-0.63232-1.63721-0.02734-0.18115-0.02735-0.50244l-0.01367-4.32715 0.19483 0q0.86816-0.05469 1.84912-0.48193 0.98096-0.42725 1.83545-1.12793 0.16748-0.14014 0.19482-0.14014 0.02734 0 0.28027 0.19482z m1.32959 3.31885q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                    fill="#177245"
                  ></path>
                </svg>
                <div
                  data-pencil-name="PrivacyCalloutTitle"
                  style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Zero network requests
                </div>
              </div>
              <div
                data-pencil-name="PrivacyCalloutText"
                style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left; width: 100%'
              >
                SnapVault never connects to the internet. Verified just now.
              </div>
            </div>
          </div>
          <div
            data-pencil-name="SettingsPanes"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 16px; height: 100%; justify-content: flex-start"
          >
            <div
              data-pencil-name="SettingsColA"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 16px; height: fit-content; justify-content: flex-start"
            >
              <div
                data-pencil-name="SettingsCard"
                style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; overflow: hidden; width: 100%"
              >
                <div
                  data-pencil-name="SettingsCardHead"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: fit-content; justify-content: flex-start; padding: 15px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingsCardTitle"
                    style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                  >
                    Scanning &amp; text recognition
                  </div>
                  <div
                    data-pencil-name="SettingsCardSub"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Controls how SnapVault cleans pages and reads text.
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      OCR language
                    </div>
                    <div
                      data-pencil-name="SettingHint"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left; width: 100%'
                    >
                      Chinese + English handles mixed pages but is slower.
                    </div>
                  </div>
                  <div
                    data-pencil-name="LanguageSeg"
                    style="align-items: center; background-color: #EEEFF2; border-radius: 9px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 2px; height: fit-content; justify-content: flex-start; padding: 3px; width: fit-content"
                  >
                    <div
                      data-pencil-name="SegBtn"
                      data-clickable
                      :class="{ 'is-active': lang === 'mixed' }"
                      style="align-items: center; background-color: #FFFFFF; border-radius: 7px; box-shadow: 0px 1px 3px #00000014; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 6px 11px; width: fit-content"
                      @click="lang = 'mixed'"
                    >
                      <div
                        data-pencil-name="SegBtnText"
                        style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        Chinese + English
                      </div>
                    </div>
                    <div
                      data-pencil-name="SegBtn"
                      data-clickable
                      :class="{ 'is-active': lang === 'zh' }"
                      style="align-items: center; background-color: #FFFFFF00; border-radius: 7px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 6px 11px; width: fit-content"
                      @click="lang = 'zh'"
                    >
                      <div
                        data-pencil-name="SegBtnText"
                        style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        Chinese
                      </div>
                    </div>
                    <div
                      data-pencil-name="SegBtn"
                      data-clickable
                      :class="{ 'is-active': lang === 'en' }"
                      style="align-items: center; background-color: #FFFFFF00; border-radius: 7px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 6px 11px; width: fit-content"
                      @click="lang = 'en'"
                    >
                      <div
                        data-pencil-name="SegBtnText"
                        style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        English
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Detect page orientation
                    </div>
                    <div
                      data-pencil-name="SettingHint"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left; width: 100%'
                    >
                      Rotates pages that were scanned sideways.
                    </div>
                  </div>
                  <div
                    data-pencil-name="Switch"
                    class="sv-switch"
                    :class="{ 'is-on': switches[0], 'knob-pop': switchPop[0] }"
                    role="switch"
                    :aria-checked="switches[0] ? 'true' : 'false'"
                    :aria-label="'Detect page orientation'"
                    tabindex="0"
                    data-clickable
                    style="align-items: center; background-color: #2B5BD7; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 24px; justify-content: flex-end; padding: 3px; width: 42px"
                    @click="toggleSwitch(0)"
                    @keydown.space.prevent="toggleSwitch(0)"
                    @keydown.enter.prevent="toggleSwitch(0)"
                  >
                    <div
                      data-pencil-name="SwitchKnob"
                      class="sv-switch-knob"
                      style="align-items: flex-start; background-color: #FFFFFF; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 18px; justify-content: flex-start; width: 18px"
                    ></div>
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Remove shadows and fingers
                    </div>
                    <div
                      data-pencil-name="SettingHint"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left; width: 100%'
                    >
                      Cleans up photos taken with a phone.
                    </div>
                  </div>
                  <div
                    data-pencil-name="Switch"
                    class="sv-switch"
                    :class="{ 'is-on': switches[1], 'knob-pop': switchPop[1] }"
                    role="switch"
                    :aria-checked="switches[1] ? 'true' : 'false'"
                    :aria-label="'Remove shadows and fingers'"
                    tabindex="0"
                    data-clickable
                    style="align-items: center; background-color: #2B5BD7; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 24px; justify-content: flex-end; padding: 3px; width: 42px"
                    @click="toggleSwitch(1)"
                    @keydown.space.prevent="toggleSwitch(1)"
                    @keydown.enter.prevent="toggleSwitch(1)"
                  >
                    <div
                      data-pencil-name="SwitchKnob"
                      class="sv-switch-knob"
                      style="align-items: flex-start; background-color: #FFFFFF; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 18px; justify-content: flex-start; width: 18px"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="SettingsCard"
                class="sv-card-pop"
                style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; overflow: hidden; width: 100%"
              >
                <div
                  data-pencil-name="SettingsCardHead"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: fit-content; justify-content: flex-start; padding: 15px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingsCardTitle"
                    style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                  >
                    Storage &amp; export
                  </div>
                  <div
                    data-pencil-name="SettingsCardSub"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Where saved documents and exports go.
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Default save location
                    </div>
                    <div
                      data-pencil-name="SettingHint"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left; width: 100%'
                    >
                      Used when you press Save to Library.
                    </div>
                  </div>
                  <div
                    data-pencil-name="PathField"
                    style="align-items: center; background-color: #EEEFF2; border-radius: 9px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; padding: 9px 12px; width: 400px"
                  >
                    <svg
                      data-pencil-name="PathFieldIcon"
                      data-icon-name="folder"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                    >
                      <path
                        d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                        fill="#59606E"
                      ></path>
                    </svg>
                    <div
                      data-pencil-name="PathFieldText"
                      style='box-sizing: border-box; color: #59606E; flex: 1 1 0; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                    >
                      {{ savePath }}
                    </div>
                    <div
                      data-pencil-name="PathFieldChange"
                      data-clickable
                      style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      @click="pickSaveLocation"
                    >
                      Change
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Default export format
                    </div>
                    <div
                      data-pencil-name="SettingHint"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left; width: 100%'
                    >
                      Choose what Export produces by default.
                    </div>
                  </div>
                  <div
                    data-pencil-name="FormatSeg"
                    style="align-items: center; background-color: #EEEFF2; border-radius: 9px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 2px; height: fit-content; justify-content: flex-start; padding: 3px; width: fit-content"
                  >
                    <div
                      data-pencil-name="SegBtn"
                      data-clickable
                      :class="{ 'is-active': exportFormat === 'pdf' }"
                      style="align-items: center; background-color: #FFFFFF; border-radius: 7px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 6px 12px; width: fit-content"
                      @click="exportFormat = 'pdf'"
                    >
                      <div
                        data-pencil-name="SegBtnText"
                        style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        PDF
                      </div>
                    </div>
                    <div
                      data-pencil-name="SegBtn"
                      data-clickable
                      :class="{ 'is-active': exportFormat === 'markdown' }"
                      style="align-items: center; background-color: #FFFFFF00; border-radius: 7px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 6px 12px; width: fit-content"
                      @click="exportFormat = 'markdown'"
                    >
                      <div
                        data-pencil-name="SegBtnText"
                        style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        Markdown
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Scan quality
                    </div>
                    <div
                      data-pencil-name="SettingHint"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left; width: 100%'
                    >
                      Higher quality keeps more detail and takes more space.
                    </div>
                  </div>
                  <div
                    data-pencil-name="SliderControl"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 12px; justify-content: flex-end"
                  >
                    <div
                      data-pencil-name="Slider"
                      class="sv-slider"
                      :class="{ 'is-dragging': draggingSlider === 0 }"
                      role="slider"
                      tabindex="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      :aria-valuenow="sliders[0].value"
                      aria-label="Scan quality"
                      @pointerdown="onSliderDown(0, $event)"
                      @pointermove="onSliderMove(0, $event)"
                      @pointerup="onSliderUp(0, $event)"
                      @pointercancel="onSliderUp(0, $event)"
                      @keydown="onSliderKey(0, $event)"
                    >
                      <div class="sv-slider-track">
                        <div class="sv-slider-fill" :style="{ width: sliders[0].value + '%' }"></div>
                      </div>
                      <div class="sv-slider-knob" :style="{ left: sliders[0].value + '%' }"></div>
                    </div>
                    <div
                      data-pencil-name="SliderValue"
                      style='box-sizing: border-box; color: #16181D; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: right; width: 34px'
                    >
                      {{ sliders[0].value }}
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Compression
                    </div>
                    <div
                      data-pencil-name="SettingHint"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left; width: 100%'
                    >
                      How aggressively pages are shrunk before saving.
                    </div>
                  </div>
                  <div
                    data-pencil-name="SliderControl"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 12px; justify-content: flex-end"
                  >
                    <div
                      data-pencil-name="Slider"
                      class="sv-slider"
                      :class="{ 'is-dragging': draggingSlider === 1 }"
                      role="slider"
                      tabindex="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      :aria-valuenow="sliders[1].value"
                      aria-label="Compression"
                      @pointerdown="onSliderDown(1, $event)"
                      @pointermove="onSliderMove(1, $event)"
                      @pointerup="onSliderUp(1, $event)"
                      @pointercancel="onSliderUp(1, $event)"
                      @keydown="onSliderKey(1, $event)"
                    >
                      <div class="sv-slider-track">
                        <div class="sv-slider-fill" :style="{ width: sliders[1].value + '%' }"></div>
                      </div>
                      <div class="sv-slider-knob" :style="{ left: sliders[1].value + '%' }"></div>
                    </div>
                    <div
                      data-pencil-name="SliderValue"
                      style='box-sizing: border-box; color: #16181D; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: right; width: 34px'
                    >
                      {{ sliders[1].value }}
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Auto cleanup
                    </div>
                    <div
                      data-pencil-name="SettingHint"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left; width: 100%'
                    >
                      Removes temporary files left behind by scanning.
                    </div>
                  </div>
                  <div
                    ref="selectEl"
                    data-pencil-name="Select"
                    class="sv-select"
                    :class="{ 'is-open': selectOpen }"
                    style="align-items: center; background-color: #EEEFF2; border-radius: 9px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: space-between; padding: 9px 12px; width: 200px; position: relative"
                    tabindex="0"
                    data-clickable
                    @click="toggleSelect"
                    @keydown.enter.prevent="toggleSelect"
                    @keydown.space.prevent="toggleSelect"
                    @keydown.esc="selectOpen = false"
                  >
                    <div
                      data-pencil-name="SelectValue"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      {{ selectedOption }}
                    </div>
                    <svg
                      class="sv-select-chevron"
                      data-pencil-name="SelectChevron"
                      viewBox="0 0 14 14"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="#59606E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      style="box-sizing: border-box; flex-shrink: 0"
                    >
                      <path d="M3.5 5.25 7 8.75l3.5-3.5" />
                    </svg>
                    <div class="sv-select-panel" data-pencil-name="SelectPanel" role="listbox">
                      <div
                        v-for="opt in SELECT_OPTIONS"
                        :key="opt"
                        class="sv-select-option"
                        :class="{ 'is-selected': opt === selectedOption }"
                        data-pencil-name="SelectOption"
                        role="option"
                        :aria-selected="opt === selectedOption ? 'true' : 'false'"
                        @click.stop="chooseOption(opt)"
                      >
                        <span>{{ opt }}</span>
                        <svg
                          v-if="opt === selectedOption"
                          class="sv-select-check"
                          data-pencil-name="SelectCheck"
                          viewBox="0 0 14 14"
                          width="13"
                          height="13"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          style="box-sizing: border-box; flex-shrink: 0"
                        >
                          <path d="M2.5 7.5 5.5 10.5 11.5 3.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="SettingsColB"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 16px; height: fit-content; justify-content: flex-start"
            >
              <div
                data-pencil-name="SettingsCard"
                style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; overflow: hidden; width: 100%"
              >
                <div
                  data-pencil-name="SettingsCardHead"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: fit-content; justify-content: flex-start; padding: 15px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingsCardTitle"
                    style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                  >
                    Privacy self-check
                  </div>
                  <div
                    data-pencil-name="SettingsCardSub"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    SnapVault is built to run with no internet connection.
                  </div>
                </div>
                <div
                  data-pencil-name="PrivacyChecks"
                  style="align-items: flex-start; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; padding: 14px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="PrivacyCheckRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <svg
                      data-pencil-name="PrivacyCheckIcon"
                      data-icon-name="circle-check"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                        fill="#177245"
                      ></path>
                    </svg>
                    <div
                      data-pencil-name="PrivacyCheckText"
                      style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Documents are processed on this device
                    </div>
                  </div>
                  <div
                    data-pencil-name="PrivacyCheckRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <svg
                      data-pencil-name="PrivacyCheckIcon"
                      data-icon-name="circle-check"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                        fill="#177245"
                      ></path>
                    </svg>
                    <div
                      data-pencil-name="PrivacyCheckText"
                      style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      No analytics, accounts or telemetry
                    </div>
                  </div>
                  <div
                    data-pencil-name="PrivacyCheckRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <svg
                      data-pencil-name="PrivacyCheckIcon"
                      data-icon-name="circle-check"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                        fill="#177245"
                      ></path>
                    </svg>
                    <div
                      data-pencil-name="PrivacyCheckText"
                      style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Everything keeps working offline
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="PrivacyActions"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 12px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="PrivacyCheckedAt"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Last checked just now · 0 requests in 30 days
                  </div>
                  <div
                    data-pencil-name="Btn/Outline"
                    style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 9px 16px; width: fit-content"
                  >
                    <svg
                      data-pencil-name="BtnOutlineIcon"
                      data-icon-name="refresh-cw"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M6.56592 1.18945q-1.12109 0.08545-2.1294 0.57422-0.9502 0.46143-1.66455 1.22022-0.71436 0.75537-1.13476 1.71924-0.22217 0.54688-0.34864 1.13476-0.12646 0.58789-0.11279 1.10742 0 0.19482 0.03418 0.28028 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.22559 0.03418 0.14014 0 0.22217-0.03418 0.08545-0.0376 0.1914-0.1333 0.10596-0.09912 0.14014-0.23926 0.03418-0.14014 0.03418-0.39307 0.01367-0.30762 0.0957-0.71777 0.08545-0.41357 0.22559-0.75195 0.42041-1.09033 1.31592-1.85254 0.89551-0.76563 2.04394-1.01514 0.30762-0.07178 0.72803-0.09228 0.42041-0.02051 0.75537 0.0205 1.76709 0.18115 3.11035 1.4834l0.22217 0.22559-0.7417 0q-0.7417 0-0.85449 0.02734-0.24951 0.02734-0.38281 0.23242-0.1333 0.20166-0.09912 0.43409 0.03418 0.229 0.24609 0.36914l0.01367 0.01367q0.08203 0.05811 0.15381 0.07178 0.11279 0.01367 0.43408 0.02734l2.79932-0.01367 0.09912-0.04102q0.18115-0.08545 0.28027-0.28027l0.04102-0.07178 0-3.26074-0.04102-0.08545q-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666l-0.04102 0.08545 0 1.67822-0.28027-0.26318q-0.3623-0.36572-0.72119-0.62207-0.35547-0.25977-0.78955-0.48535-1.10742-0.58789-2.38233-0.70069-0.15381-0.01367-0.4751-0.01367-0.32129 0-0.46142 0.01367z m5.53027 5.25q-0.11279 0.04102-0.21875 0.12647-0.10254 0.08545-0.14697 0.18115-0.04102 0.05811-0.04102 0.15381l-0.05468 0.54687q-0.04443 0.65967-0.30762 1.28858-0.47851 1.18945-1.47998 1.96191-0.99805 0.76904-2.24561 0.93653-0.7417 0.08203-1.5039-0.05811-0.76221-0.14014-1.43555-0.48877-0.72803-0.39307-1.3877-1.03564l-0.10937-0.12647 0.75537 0q0.50244 0 0.66992-0.01367 0.22559-0.01367 0.30762-0.04102 0.08545-0.03076 0.1709-0.12646 0.22217-0.22559 0.16748-0.51953-0.05469-0.29395-0.34863-0.43408l-0.08545-0.02735-3.20606 0-0.08545 0.04102q-0.19482 0.08545-0.29394 0.28027l-0.04102 0.07178 0 3.26074 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-1.67822 0.25293 0.24951q0.24951 0.23926 0.43408 0.39307 1.37061 1.14844 3.20606 1.40136 0.2085 0.02734 0.63574 0.03418 0.42725 0.00684 0.64941-0.00683 1.3877-0.12646 2.57715-0.8545 1.14844-0.72803 1.87646-1.87646 0.72803-1.17578 0.8545-2.57715 0.02734-0.22217 0.01367-0.44775 0-0.19482-0.0376-0.27686-0.03418-0.08545-0.11621-0.18457-0.16748-0.15381-0.39307-0.16748-0.14014 0-0.18115 0.01367z"
                        fill="#59606E"
                      ></path>
                    </svg>
                    <div
                      data-pencil-name="BtnOutlineLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Run check again
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="SettingsCard"
                style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; overflow: hidden; width: 100%"
              >
                <div
                  data-pencil-name="SettingsCardHead"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: fit-content; justify-content: flex-start; padding: 15px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingsCardTitle"
                    style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                  >
                    About
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Version
                    </div>
                  </div>
                  <div
                    data-pencil-name="AboutValue"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    1.4.0
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Build
                    </div>
                  </div>
                  <div
                    data-pencil-name="AboutValue"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    2026.09.03
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingText"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingLabel"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      License
                    </div>
                  </div>
                  <div
                    data-pencil-name="AboutValue"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    MIT
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="SettingsCard"
                style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; overflow: hidden; width: 100%"
              >
                <div
                  data-pencil-name="SettingsCardHead"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: fit-content; justify-content: flex-start; padding: 15px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="SettingsCardTitle"
                    style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                  >
                    Maintenance
                  </div>
                  <div
                    data-pencil-name="SettingsCardSub"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Long-running jobs run one at a time.
                  </div>
                </div>
                <div
                  data-pencil-name="SettingRow"
                  style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 0px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 13px 20px; width: 100%"
                >
                  <div
                    data-pencil-name="AsyncActions"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; justify-content: flex-start; width: 100%"
                  >
                    <div
                      v-for="(action, i) in ACTIONS"
                      :key="action.key"
                      data-pencil-name="AsyncBtn"
                      :data-action="action.key"
                      class="sv-btn"
                      :class="{ 'is-busy': busy[i] }"
                      :aria-disabled="busy[i] ? 'true' : 'false'"
                      :aria-busy="busy[i] ? 'true' : 'false'"
                      role="button"
                      style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 9px 16px; width: fit-content"
                      @click="runAction(i)"
                    >
                      <span
                        v-if="!busy[i]"
                        style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        {{ action.label }}
                      </span>
                      <span v-else class="sv-spinner" aria-hidden="true"></span>
                    </div>
                    <div
                      data-pencil-name="BtnDanger"
                      class="sv-btn sv-btn-danger"
                      role="button"
                      style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #B3261E; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; margin-left: auto; padding: 9px 16px; width: fit-content"
                    >
                      <span
                        style='box-sizing: border-box; color: #B3261E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        Securely delete…
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="SettingsCard"
                style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; overflow: hidden; width: 100%"
              >
                <div
                  data-pencil-name="CollapseHead"
                  class="sv-collapse-head"
                  data-clickable
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 20px; height: fit-content; justify-content: space-between; padding: 15px 20px; width: 100%"
                  @click="advancedOpen = !advancedOpen"
                >
                  <div
                    data-pencil-name="SettingsCardHead"
                    style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: fit-content; justify-content: flex-start"
                  >
                    <div
                      data-pencil-name="SettingsCardTitle"
                      style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                    >
                      Advanced
                    </div>
                    <div
                      data-pencil-name="SettingsCardSub"
                      style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Power-user options, hidden by default.
                    </div>
                  </div>
                  <svg
                    class="sv-chevron"
                    :class="{ 'is-open': advancedOpen }"
                    data-pencil-name="CollapseChevron"
                    viewBox="0 0 14 14"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="#59606E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    style="box-sizing: border-box; flex-shrink: 0"
                  >
                    <path d="M3.5 5.25 7 8.75l3.5-3.5" />
                  </svg>
                </div>
                <div class="sv-collapse" :class="{ 'is-open': advancedOpen }" data-pencil-name="CollapseBody">
                  <div class="sv-clip">
                    <div
                      v-for="(item, i) in ADVANCED_ITEMS"
                      :key="item.label"
                      class="sv-collapse-item"
                      data-pencil-name="CollapseItem"
                      :style="{ animationDelay: advancedOpen ? i * 40 + 'ms' : '0ms' }"
                    >
                      <div
                        data-pencil-name="SettingLabel"
                        style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        {{ item.label }}
                      </div>
                      <div
                        data-pencil-name="SettingHint"
                        style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left'
                      >
                        {{ item.hint }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 默认保存位置：原生文件夹选择器（隐藏，不提交表单，仅用于取目录名） -->
          <input
            ref="dirInput"
            class="sv-dir-input"
            type="file"
            webkitdirectory
            directory
            multiple
            @change="onPickDir"
          />
          <div
            v-if="toast"
            class="sv-toast"
            :class="{ 'is-error': toast.error }"
            data-pencil-name="SettingsToast"
            role="status"
          >
            {{ toast.message }}
          </div>
        </div>
      </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { clearCache, exportAll, backup } from '@/composables/useSettingsActions'

/* ---------------- 1. 左侧子导航：激活背景块滑移 + 高亮 ---------------- */
const navEl = ref(null)
const activeNav = ref(0)
const pillStyle = ref({ transform: 'translateY(0px)', height: '0px' })

// 用 offsetTop / offsetHeight 量测目标行，避免硬编码坐标
function measureNavPill() {
  const wrap = navEl.value
  if (!wrap) return
  const rows = wrap.querySelectorAll('[data-pencil-name="SettingsNavRow"]')
  const row = rows[activeNav.value]
  if (!row) return
  pillStyle.value = {
    transform: `translateY(${row.offsetTop}px)`,
    height: `${row.offsetHeight}px`,
  }
}

function selectNav(i) {
  activeNav.value = i
  nextTick(measureNavPill)
}

/* ---------------- 2. Toggle 开关 ---------------- */
const switches = ref([true, true])
const switchPop = ref([false, false])

function toggleSwitch(i) {
  switches.value[i] = !switches.value[i]
  if (switches.value[i]) {
    // 开启瞬间圆点轻微回弹（重放 CSS 动画）
    switchPop.value[i] = false
    nextTick(() => {
      switchPop.value[i] = true
    })
    setTimeout(() => {
      switchPop.value[i] = false
    }, 240)
  }
}

/* ---------------- 3. 分段控件（OCR language / Default export format） ---------------- */
const lang = ref('mixed')
const exportFormat = ref('pdf')

/* ---------------- 3b. 默认保存位置：原生文件夹选择器 ---------------- */
const savePath = ref('C:\\Users\\lena\\SnapVault\\Library')
const dirInput = ref(null)

function pickSaveLocation() {
  dirInput.value?.click()
}

function onPickDir(e) {
  const files = e.target.files
  if (files && files.length) {
    // 浏览器只暴露相对路径（如 "Library/xxx.pdf"），取顶层目录名
    const picked = files[0].webkitRelativePath.split('/')[0]
    if (picked) savePath.value = picked
  }
  // 清空 value，保证连续选同一个文件夹也能再次触发 change
  e.target.value = ''
}

/* ---------------- 4. 滑块（Scan quality / Compression） ---------------- */
const sliders = ref([
  { value: 82 },
  { value: 55 },
])
const draggingSlider = ref(-1)

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v))
}

function sliderFromEvent(el, e) {
  const track = el.querySelector('.sv-slider-track')
  if (!track) return 0
  const rect = track.getBoundingClientRect()
  return Math.round(clamp(((e.clientX - rect.left) / rect.width) * 100, 0, 100))
}

function onSliderDown(i, e) {
  draggingSlider.value = i
  if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId)
  sliders.value[i].value = sliderFromEvent(e.currentTarget, e)
}

function onSliderMove(i, e) {
  if (draggingSlider.value !== i) return
  sliders.value[i].value = sliderFromEvent(e.currentTarget, e)
}

function onSliderUp(i, e) {
  if (draggingSlider.value !== i) return
  draggingSlider.value = -1
  if (e.currentTarget.releasePointerCapture) {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch (_) {
      /* 指针已被系统释放，忽略 */
    }
  }
}

// 键盘方向键也可调整（Shift 步进 10）
function onSliderKey(i, e) {
  const step = e.shiftKey ? 10 : 1
  if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
    sliders.value[i].value = clamp(sliders.value[i].value + step, 0, 100)
    e.preventDefault()
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
    sliders.value[i].value = clamp(sliders.value[i].value - step, 0, 100)
    e.preventDefault()
  }
}

/* ---------------- 5. 下拉菜单 ---------------- */
const SELECT_OPTIONS = ['Never', 'Weekly', 'Monthly']
const selectedOption = ref('Weekly')
const selectOpen = ref(false)
const selectEl = ref(null)

function toggleSelect() {
  selectOpen.value = !selectOpen.value
}

function chooseOption(opt) {
  selectedOption.value = opt
  selectOpen.value = false
}

function onDocPointerDown(e) {
  if (selectOpen.value && selectEl.value && !selectEl.value.contains(e.target)) selectOpen.value = false
}

function onDocKeydown(e) {
  if (e.key === 'Escape') selectOpen.value = false
}

/* ---------------- 6. 异步操作按钮 ---------------- */
const ACTIONS = [
  { key: 'clear', label: 'Clear cache', run: clearCache, done: 'Cache cleared' },
  { key: 'export', label: 'Export', run: exportAll, done: 'Export ready' },
  { key: 'backup', label: 'Backup', run: backup, done: 'Backup complete' },
]
const busy = ref([false, false, false])
const toast = ref(null)
let toastTimer = null

async function runAction(i) {
  if (busy.value[i]) return
  busy.value[i] = true
  toast.value = null
  try {
    const action = ACTIONS[i]
    await action.run({})
    toast.value = { message: action.done, error: false }
  } catch (err) {
    // 失败分支：保留红系提示（例如接口 reject / 中断之外的错误）
    if (err && err.name === 'AbortError') return
    toast.value = { message: `${ACTIONS[i].label} failed · ${err.message}`, error: true }
  } finally {
    busy.value[i] = false
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => {
      toast.value = null
    }, 2600)
  }
}

/* ---------------- 7. 折叠区（Advanced） ---------------- */
const advancedOpen = ref(false)
const ADVANCED_ITEMS = [
  { label: 'Rebuild search index', hint: 'Re-indexes every saved document on this device.' },
  { label: 'Reset OCR model cache', hint: 'Frees disk space, next scan is slower.' },
]

onMounted(() => {
  measureNavPill()
  document.addEventListener('pointerdown', onDocPointerDown)
  document.addEventListener('keydown', onDocKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDocPointerDown)
  document.removeEventListener('keydown', onDocKeydown)
  clearTimeout(toastTimer)
})
</script>

<style scoped>
/* ================= 1. 左侧子导航 ================= */
/* SettingsNav 原本没有定位，激活块需要它作为绝对定位参照 */
[data-pencil-name="SettingsNav"] {
  position: relative !important;
}
.sv-nav-pill {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  background-color: var(--sv-accent-soft);
  border-radius: 9px;
  pointer-events: none;
  transition:
    transform var(--sv-dur-move) var(--sv-ease-out),
    height var(--sv-dur-move) var(--sv-ease-out);
}
/* 激活背景改由 .sv-nav-pill 承担，覆盖内联底色 */
[data-pencil-name="SettingsNavRow"] {
  position: relative;
  z-index: 1;
  background-color: transparent !important;
}
[data-pencil-name="SettingsNavRow"] [data-pencil-name="SettingsNavLabel"] {
  color: var(--sv-ink) !important;
  font-weight: 500 !important;
  transition:
    color var(--sv-dur-move) var(--sv-ease-out),
    font-weight var(--sv-dur-move) var(--sv-ease-out);
}
[data-pencil-name="SettingsNavRow"].is-active [data-pencil-name="SettingsNavLabel"] {
  color: var(--sv-accent) !important;
  font-weight: 600 !important;
}
[data-pencil-name="SettingsNavRow"] [data-pencil-name="SettingsNavIcon"] path {
  fill: var(--sv-ink-2);
  transition: fill var(--sv-dur-move) var(--sv-ease-out);
}
[data-pencil-name="SettingsNavRow"].is-active [data-pencil-name="SettingsNavIcon"] path {
  fill: var(--sv-accent);
}

/* ================= 2. Toggle 开关 ================= */
.sv-switch {
  /* 圆点位移改由 transform 承担，才能平滑过渡 */
  justify-content: flex-start !important;
  background-color: var(--sv-surface-2) !important;
  transition: background-color var(--sv-dur-icon) var(--sv-ease-out);
  outline: none;
}
.sv-switch.is-on {
  background-color: var(--sv-accent) !important;
}
.sv-switch:focus-visible {
  box-shadow: 0 0 0 3px var(--sv-accent-soft);
}
.sv-switch-knob {
  transform: translateX(0);
  transition: transform 200ms var(--sv-ease-out);
}
.sv-switch.is-on .sv-switch-knob {
  transform: translateX(18px);
}
.sv-switch.knob-pop .sv-switch-knob {
  animation: sv-knob-pop 200ms var(--sv-ease-out);
}
@keyframes sv-knob-pop {
  0% {
    scale: 1;
  }
  45% {
    scale: 1.08;
  }
  100% {
    scale: 1;
  }
}

/* ================= 3. 常规按钮 / 破坏性按钮 ================= */
[data-pencil-name="Btn/Outline"],
.sv-btn {
  transition:
    background-color var(--sv-dur-move) var(--sv-ease-out),
    border-color var(--sv-dur-move) var(--sv-ease-out),
    color var(--sv-dur-move) var(--sv-ease-out),
    box-shadow var(--sv-dur-move) var(--sv-ease-out),
    transform var(--sv-dur-move) var(--sv-ease-out);
  user-select: none;
}
[data-pencil-name="Btn/Outline"]:hover,
.sv-btn:hover {
  background-color: var(--sv-surface-2) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(22, 24, 29, 0.14);
}
[data-pencil-name="Btn/Outline"]:active,
.sv-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(22, 24, 29, 0.1);
}
/* 破坏性按钮：红系描边 → hover 红系底 + 更深阴影 */
.sv-btn-danger {
  border-color: var(--sv-danger) !important;
  color: var(--sv-danger) !important;
}
.sv-btn-danger:hover {
  background-color: var(--sv-danger-soft) !important;
  border-color: var(--sv-danger) !important;
  color: var(--sv-danger) !important;
  box-shadow: 0 8px 20px rgba(179, 38, 30, 0.28);
}
.sv-btn.is-busy {
  pointer-events: none;
  opacity: 0.72;
}
.sv-spinner {
  display: block;
  flex-shrink: 0;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(43, 91, 215, 0.25);
  border-top-color: var(--sv-accent);
  border-radius: var(--sv-radius-pill);
  animation: sv-spin 800ms linear infinite;
}
@keyframes sv-spin {
  to {
    transform: rotate(360deg);
  }
}

/* ================= 3b. 分段控件（OCR language / Default export format） ================= */
/* 未选中：透明底（覆盖设计稿内联的白底/阴影） */
[data-pencil-name="SegBtn"]:not(.is-active) {
  background-color: transparent !important;
  box-shadow: none !important;
}
/* hover 变灰（选中态规则在后，覆盖 hover） */
[data-pencil-name="SegBtn"]:not(.is-active):hover {
  background-color: var(--sv-surface-3) !important;
}
/* 选中：白底 */
[data-pencil-name="SegBtn"].is-active {
  background-color: var(--sv-surface) !important;
}
/* 设计稿中 LanguageSeg 的选中项带浅阴影，FormatSeg 不带，保持分组原样 */
[data-pencil-name="LanguageSeg"] [data-pencil-name="SegBtn"].is-active {
  box-shadow: 0 1px 3px #00000014;
}
[data-pencil-name="SegBtn"] {
  transition:
    background-color var(--sv-dur-move) var(--sv-ease-out),
    box-shadow var(--sv-dur-move) var(--sv-ease-out);
}
[data-pencil-name="SegBtn"] [data-pencil-name="SegBtnText"] {
  color: var(--sv-ink-2) !important;
  font-weight: 500 !important;
  transition: color var(--sv-dur-move) var(--sv-ease-out);
}
[data-pencil-name="SegBtn"].is-active [data-pencil-name="SegBtnText"] {
  color: var(--sv-ink) !important;
  font-weight: 600 !important;
}
/* 默认保存位置的原生文件夹选择器：隐藏 */
.sv-dir-input {
  display: none;
}

/* ================= 4. 滑块 ================= */
.sv-slider {
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;
  height: 20px;
  outline: none;
}
.sv-slider-track {
  position: relative;
  width: 100%;
  height: 4px;
  background-color: var(--sv-surface-2);
  border-radius: var(--sv-radius-pill);
}
.sv-slider-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: var(--sv-accent);
  border-radius: var(--sv-radius-pill);
  transition: width var(--sv-dur-icon) var(--sv-ease-out);
}
.sv-slider-knob {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  /* 以 left:% 定位为圆心 */
  margin: -8px 0 0 -8px;
  background-color: var(--sv-surface);
  border: 2px solid var(--sv-accent);
  border-radius: var(--sv-radius-pill);
  box-shadow: 0 1px 4px rgba(22, 24, 29, 0.2);
  transition: scale var(--sv-dur-icon) var(--sv-ease-out);
}
.sv-slider.is-dragging .sv-slider-knob {
  scale: 1.15;
}
/* 拖拽中填充宽度实时跟手、不加过渡；手柄位置用 left 定位本就没有过渡，仅保留 150ms 缩放 */
.sv-slider.is-dragging .sv-slider-fill {
  transition: none;
}
.sv-slider:focus-visible .sv-slider-knob {
  box-shadow: 0 0 0 4px var(--sv-accent-soft);
}

/* ================= 5. 下拉菜单 ================= */
/* 该卡片需允许面板溢出（原内联 overflow: hidden） */
.sv-card-pop {
  overflow: visible !important;
}
.sv-select {
  transition: background-color var(--sv-dur-fast) ease;
}
.sv-select.is-open {
  background-color: var(--sv-surface) !important;
  box-shadow: 0 0 0 1px var(--sv-line-2);
}
.sv-select-chevron {
  transition: transform var(--sv-dur-icon) var(--sv-ease-out);
}
.sv-select.is-open .sv-select-chevron {
  transform: rotate(180deg);
}
.sv-select-panel {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 30;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 5px;
  background-color: var(--sv-surface);
  border: 1px solid var(--sv-line);
  border-radius: var(--sv-radius-md);
  box-shadow: 0 12px 28px rgba(22, 24, 29, 0.14);
  opacity: 0;
  transform: translateY(6px);
  pointer-events: none;
  transition:
    opacity 200ms var(--sv-ease-out),
    transform 200ms var(--sv-ease-out);
}
.sv-select.is-open .sv-select-panel {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.sv-select-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 7px 9px;
  border-radius: 7px;
  color: var(--sv-ink-2);
  font-family: var(--sv-font-body);
  font-size: 12.5px;
  transition:
    background-color var(--sv-dur-fast) ease,
    color var(--sv-dur-fast) ease;
}
.sv-select-option:hover {
  background-color: var(--sv-surface-2);
  color: var(--sv-ink);
}
.sv-select-option.is-selected {
  color: var(--sv-accent);
}
.sv-select-check {
  color: var(--sv-accent);
}

/* ================= 6. Toast ================= */
.sv-toast {
  position: fixed;
  right: 40px;
  bottom: 32px;
  z-index: 200;
  padding: 11px 16px;
  background-color: var(--sv-ink);
  color: var(--sv-surface);
  font-family: var(--sv-font-body);
  font-size: 13px;
  border-radius: var(--sv-radius-md);
  box-shadow: 0 12px 30px rgba(22, 24, 29, 0.24);
  animation: sv-toast-in 150ms var(--sv-ease-out) both;
}
.sv-toast.is-error {
  background-color: var(--sv-danger);
}
@keyframes sv-toast-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ================= 7. 分区卡片 hover + 折叠区 ================= */
[data-pencil-name="SettingsCard"] {
  transition:
    transform var(--sv-dur-icon) var(--sv-ease-out),
    box-shadow var(--sv-dur-icon) var(--sv-ease-out);
}
[data-pencil-name="SettingsCard"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(22, 24, 29, 0.1);
}
.sv-chevron {
  transition: transform var(--sv-dur-icon) var(--sv-ease-out);
}
.sv-chevron.is-open {
  transform: rotate(180deg);
}
/* 免测高：grid-template-rows 0fr → 1fr */
.sv-collapse {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--sv-dur-tree) var(--sv-ease-out);
}
.sv-collapse > .sv-clip {
  min-height: 0;
  overflow: hidden;
}
.sv-collapse.is-open {
  grid-template-rows: 1fr;
}
.sv-collapse-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 11px 20px;
  border-top: 1px solid var(--sv-line);
}
.sv-collapse.is-open .sv-collapse-item {
  /* 展开时逐项错峰淡入（每项 +40ms，见元素上的 animationDelay） */
  animation: sv-fade-in 200ms var(--sv-ease-out) both;
}
@keyframes sv-fade-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
