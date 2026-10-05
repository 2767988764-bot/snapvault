<template>
      <div class="page-root"
        data-pencil-name="04 · Library"
        style="align-items: flex-start; background-image: url('/assets/bg-0.webp'); background-repeat: no-repeat; background-size: 100% 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 0px; height: 900px; justify-content: flex-start; overflow: hidden; position: relative; width: 1440px"
      >
        <div data-pencil-name="TopNavSpacer" style="height: 64px; flex-shrink: 0; width: 100%"></div>
        <div
          data-pencil-name="FocusStage"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 0px; justify-content: flex-start; overflow: hidden; position: relative; width: 100%"
        >
          <div v-if="focused" class="sf-dim" aria-hidden="true"></div>
          <div
            data-pencil-name="SearchHero"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 18px; height: 536px; justify-content: flex-start; padding: 64px 120px 0px 120px; position: relative; width: 100%; z-index: 0"
          >
            <div
              data-pencil-name="HeroSpacer"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 125px; justify-content: flex-start; width: 1px"
            ></div>
            <div
              data-pencil-name="HeroEyebrow"
              style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 2.2px; line-height: normal; text-align: left; white-space: nowrap'
            >
              SNAPVAULT · LIBRARY
            </div>
            <div
              data-pencil-name="HeroTitle"
              style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 42px; font-style: normal; font-weight: 700; letter-spacing: -1.2px; line-height: 47px; text-align: center; width: 820px"
            >
              Find any document, instantly
            </div>
            <div
              data-pencil-name="RecentRow"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RecentLabel"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 1.5px; line-height: normal; text-align: left; white-space: nowrap'
              >
                RECENT
              </div>
              <div
                data-pencil-name="RecentPill"
                style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 6px 12px; width: fit-content"
              >
                <svg
                  data-pencil-name="RecentIcon"
                  data-icon-name="history"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
                >
                  <path
                    d="M1.59619 1.18945q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 3.26074 0.04102 0.07178q0.09912 0.19482 0.29394 0.28027l0.08545 0.04102 2.81299 0.01367q0.32129-0.01367 0.43408-0.02734 0.07178-0.01367 0.15381-0.07178l0.01367-0.01367q0.1709-0.12646 0.21875-0.31446 0.04785-0.18799-0.03076-0.37597-0.0752-0.19141-0.25635-0.28711-0.08545-0.05811-0.2666-0.07178-0.18115-0.01367-0.76904-0.01367l-0.7417 0 0.23584-0.22559q0.7417-0.72803 1.58252-1.09033 0.96729-0.42041 2.03027-0.42041 0.93994 0 1.76367 0.34863 1.17578 0.49219 1.93799 1.49366 0.76563 1.00146 0.91944 2.2456 0.02734 0.22559 0.02734 0.56738 0 0.3418-0.02734 0.56739-0.15381 1.2749-0.93995 2.29004-0.78271 1.01172-1.97216 1.49023-0.81348 0.32129-1.72266 0.32129-0.28027 0-0.46143-0.01367-0.18115-0.01367-0.46142-0.07178-0.88184-0.18115-1.64746-0.68359-0.76221-0.50586-1.28174-1.2544-0.51611-0.74854-0.71094-1.64404-0.08545-0.44775-0.09228-0.77588-0.00684-0.33154-0.0752-0.47168-0.08545-0.16748-0.2666-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.06836 0.15381-0.03418 0.65283 0.03418 0.49561 0.14697 0.9878 0.29395 1.18945 1.03564 2.15673 0.7417 0.96387 1.80469 1.5586 1.06641 0.59473 2.29688 0.70752 0.18457 0.01367 0.5332 0.01367 0.34863 0 0.5332-0.01367 1.38428-0.12646 2.54639-0.86817 1.14844-0.71436 1.86279-1.86279 0.7417-1.16211 0.86817-2.54639 0.01367-0.18457 0.01367-0.5332 0-0.34863-0.01367-0.5332-0.14014-1.52441-1.01514-2.78223-0.875-1.26123-2.2627-1.93457-0.58789-0.28027-1.14843-0.42041-0.55713-0.14014-1.2168-0.15381-1.09033-0.02734-2.1123 0.30762-0.71436 0.23926-1.30225 0.60498-0.58789 0.3623-1.14844 0.90918l-0.28027 0.26318 0-1.67822-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m5.26367 2.32422q-0.12646 0.02734-0.23925 0.1333-0.10938 0.10596-0.16749 0.23242l-0.02734 0.09571 0 3.19238 0.04102 0.08545q0.05811 0.0957 0.12646 0.15381 0.08545 0.06836 0.36572 0.22217l0.90918 0.46142q1.20312 0.60498 1.30225 0.63233 0.23926 0.06836 0.45459-0.05469 0.21533-0.12646 0.27344-0.3794 0.04102-0.18115-0.04102-0.37939-0.04443-0.0957-0.11621-0.15039-0.06836-0.05811-0.31787-0.18457l-1.83545-0.93652-0.01367-2.70362-0.04102-0.09912q-0.04443-0.08203-0.12304-0.15723-0.0752-0.07861-0.15381-0.11279-0.0752-0.0376-0.19483-0.05127-0.11621-0.01367-0.20166 0z"
                    fill="#8A909C"
                  ></path>
                </svg>
                <div
                  data-pencil-name="RecentText"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  homography
                </div>
              </div>
              <div
                data-pencil-name="RecentPill"
                style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 6px 12px; width: fit-content"
              >
                <svg
                  data-pencil-name="RecentIcon"
                  data-icon-name="history"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
                >
                  <path
                    d="M1.59619 1.18945q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 3.26074 0.04102 0.07178q0.09912 0.19482 0.29394 0.28027l0.08545 0.04102 2.81299 0.01367q0.32129-0.01367 0.43408-0.02734 0.07178-0.01367 0.15381-0.07178l0.01367-0.01367q0.1709-0.12646 0.21875-0.31446 0.04785-0.18799-0.03076-0.37597-0.0752-0.19141-0.25635-0.28711-0.08545-0.05811-0.2666-0.07178-0.18115-0.01367-0.76904-0.01367l-0.7417 0 0.23584-0.22559q0.7417-0.72803 1.58252-1.09033 0.96729-0.42041 2.03027-0.42041 0.93994 0 1.76367 0.34863 1.17578 0.49219 1.93799 1.49366 0.76563 1.00146 0.91944 2.2456 0.02734 0.22559 0.02734 0.56738 0 0.3418-0.02734 0.56739-0.15381 1.2749-0.93995 2.29004-0.78271 1.01172-1.97216 1.49023-0.81348 0.32129-1.72266 0.32129-0.28027 0-0.46143-0.01367-0.18115-0.01367-0.46142-0.07178-0.88184-0.18115-1.64746-0.68359-0.76221-0.50586-1.28174-1.2544-0.51611-0.74854-0.71094-1.64404-0.08545-0.44775-0.09228-0.77588-0.00684-0.33154-0.0752-0.47168-0.08545-0.16748-0.2666-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.06836 0.15381-0.03418 0.65283 0.03418 0.49561 0.14697 0.9878 0.29395 1.18945 1.03564 2.15673 0.7417 0.96387 1.80469 1.5586 1.06641 0.59473 2.29688 0.70752 0.18457 0.01367 0.5332 0.01367 0.34863 0 0.5332-0.01367 1.38428-0.12646 2.54639-0.86817 1.14844-0.71436 1.86279-1.86279 0.7417-1.16211 0.86817-2.54639 0.01367-0.18457 0.01367-0.5332 0-0.34863-0.01367-0.5332-0.14014-1.52441-1.01514-2.78223-0.875-1.26123-2.2627-1.93457-0.58789-0.28027-1.14843-0.42041-0.55713-0.14014-1.2168-0.15381-1.09033-0.02734-2.1123 0.30762-0.71436 0.23926-1.30225 0.60498-0.58789 0.3623-1.14844 0.90918l-0.28027 0.26318 0-1.67822-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m5.26367 2.32422q-0.12646 0.02734-0.23925 0.1333-0.10938 0.10596-0.16749 0.23242l-0.02734 0.09571 0 3.19238 0.04102 0.08545q0.05811 0.0957 0.12646 0.15381 0.08545 0.06836 0.36572 0.22217l0.90918 0.46142q1.20312 0.60498 1.30225 0.63233 0.23926 0.06836 0.45459-0.05469 0.21533-0.12646 0.27344-0.3794 0.04102-0.18115-0.04102-0.37939-0.04443-0.0957-0.11621-0.15039-0.06836-0.05811-0.31787-0.18457l-1.83545-0.93652-0.01367-2.70362-0.04102-0.09912q-0.04443-0.08203-0.12304-0.15723-0.0752-0.07861-0.15381-0.11279-0.0752-0.0376-0.19483-0.05127-0.11621-0.01367-0.20166 0z"
                    fill="#8A909C"
                  ></path>
                </svg>
                <div
                  data-pencil-name="RecentText"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  receipt 2025
                </div>
              </div>
              <div
                data-pencil-name="RecentPill"
                style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 6px 12px; width: fit-content"
              >
                <svg
                  data-pencil-name="RecentIcon"
                  data-icon-name="history"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
                >
                  <path
                    d="M1.59619 1.18945q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 3.26074 0.04102 0.07178q0.09912 0.19482 0.29394 0.28027l0.08545 0.04102 2.81299 0.01367q0.32129-0.01367 0.43408-0.02734 0.07178-0.01367 0.15381-0.07178l0.01367-0.01367q0.1709-0.12646 0.21875-0.31446 0.04785-0.18799-0.03076-0.37597-0.0752-0.19141-0.25635-0.28711-0.08545-0.05811-0.2666-0.07178-0.18115-0.01367-0.76904-0.01367l-0.7417 0 0.23584-0.22559q0.7417-0.72803 1.58252-1.09033 0.96729-0.42041 2.03027-0.42041 0.93994 0 1.76367 0.34863 1.17578 0.49219 1.93799 1.49366 0.76563 1.00146 0.91944 2.2456 0.02734 0.22559 0.02734 0.56738 0 0.3418-0.02734 0.56739-0.15381 1.2749-0.93995 2.29004-0.78271 1.01172-1.97216 1.49023-0.81348 0.32129-1.72266 0.32129-0.28027 0-0.46143-0.01367-0.18115-0.01367-0.46142-0.07178-0.88184-0.18115-1.64746-0.68359-0.76221-0.50586-1.28174-1.2544-0.51611-0.74854-0.71094-1.64404-0.08545-0.44775-0.09228-0.77588-0.00684-0.33154-0.0752-0.47168-0.08545-0.16748-0.2666-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.06836 0.15381-0.03418 0.65283 0.03418 0.49561 0.14697 0.9878 0.29395 1.18945 1.03564 2.15673 0.7417 0.96387 1.80469 1.5586 1.06641 0.59473 2.29688 0.70752 0.18457 0.01367 0.5332 0.01367 0.34863 0 0.5332-0.01367 1.38428-0.12646 2.54639-0.86817 1.14844-0.71436 1.86279-1.86279 0.7417-1.16211 0.86817-2.54639 0.01367-0.18457 0.01367-0.5332 0-0.34863-0.01367-0.5332-0.14014-1.52441-1.01514-2.78223-0.875-1.26123-2.2627-1.93457-0.58789-0.28027-1.14843-0.42041-0.55713-0.14014-1.2168-0.15381-1.09033-0.02734-2.1123 0.30762-0.71436 0.23926-1.30225 0.60498-0.58789 0.3623-1.14844 0.90918l-0.28027 0.26318 0-1.67822-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m5.26367 2.32422q-0.12646 0.02734-0.23925 0.1333-0.10938 0.10596-0.16749 0.23242l-0.02734 0.09571 0 3.19238 0.04102 0.08545q0.05811 0.0957 0.12646 0.15381 0.08545 0.06836 0.36572 0.22217l0.90918 0.46142q1.20312 0.60498 1.30225 0.63233 0.23926 0.06836 0.45459-0.05469 0.21533-0.12646 0.27344-0.3794 0.04102-0.18115-0.04102-0.37939-0.04443-0.0957-0.11621-0.15039-0.06836-0.05811-0.31787-0.18457l-1.83545-0.93652-0.01367-2.70362-0.04102-0.09912q-0.04443-0.08203-0.12304-0.15723-0.0752-0.07861-0.15381-0.11279-0.0752-0.0376-0.19483-0.05127-0.11621-0.01367-0.20166 0z"
                    fill="#8A909C"
                  ></path>
                </svg>
                <div
                  data-pencil-name="RecentText"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  lecture notes
                </div>
              </div>
            </div>
            <div
              data-pencil-name="SearchField"
              class="sf-bar"
              :class="{ 'sf-raised': focused }"
              style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-shadow: 0px 12px 34px #16181D1F; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 14px; height: 66px; justify-content: flex-start; padding: 0px 24px; position: relative; width: 880px"
            >
              <svg
                data-pencil-name="SearchIcon"
                data-icon-name="search"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 22px; width: 22px"
              >
                <path
                  d="M6.00537 1.17578q-0.04102 0.01367-0.23584 0.02734-0.57422 0.07178-1.16211 0.29053-0.58789 0.21533-1.09375 0.5503-0.39307 0.2666-0.74853 0.61181-0.35547 0.3418-0.62207 0.7041-0.646 0.92285-0.86817 2.03028-0.05811 0.28027-0.07861 0.46142-0.02051 0.18115-0.02051 0.57422 0 0.43408 0.02734 0.68018 0.02734 0.24268 0.12647 0.59472 0.19482 0.75537 0.60156 1.43555 0.40674 0.67676 0.96729 1.18262 0.40674 0.3623 0.81689 0.60156 0.41357 0.23926 0.91944 0.43408 1.06299 0.39307 2.21826 0.29395 1.15527-0.09912 2.1499-0.65967 0.12646-0.06836 0.33496-0.2085 0.2085-0.14014 0.29395-0.21191l0.05468-0.05469 1.10743 1.10742q1.12109 1.104 1.20312 1.15528 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-1.15186-1.20654l-1.10742-1.10743 0.05469-0.06836q0.05811-0.05469 0.19824-0.25293 0.82373-1.23047 0.89209-2.70703 0.07178-1.47656-0.63916-2.76513-0.5332-0.96729-1.42187-1.64405-0.88867-0.68018-1.95508-0.9331-0.29395-0.06836-0.54004-0.09571-0.24268-0.03076-0.60498-0.04443-0.43408 0-0.49219 0z m0.7417 1.17578q0.37939 0.01367 0.79297 0.14014 0.41357 0.12646 0.78955 0.32129 0.7417 0.39307 1.28857 1.08008 0.54687 0.68359 0.75538 1.49707 0.07178 0.28027 0.09228 0.49902 0.02051 0.21533 0.02051 0.50928 0 0.70068-0.19483 1.30224-0.39307 1.16211-1.33984 1.91065-0.94336 0.74853-2.16016 0.875-0.19824 0.01367-0.49218 0.00683-0.29395-0.00684-0.48877-0.03418-0.5332-0.08545-1.03907-0.30761-0.50244-0.22559-0.93652-0.56055-0.14014-0.12646-0.35205-0.3418-0.2085-0.21875-0.33154-0.37256-0.57422-0.76904-0.7417-1.69531-0.08545-0.43408-0.06494-0.90918 0.02051-0.4751 0.11963-0.89551 0.29395-1.14844 1.18945-1.95849 0.89551-0.81348 2.05762-1.02539 0.18115-0.02734 0.42041-0.04102 0.23926-0.01367 0.34863-0.01367l0.2666 0.01367z"
                  fill="#8A909C"
                ></path>
              </svg>
              <input
                ref="inputRef"
                data-pencil-name="SearchPlaceholder"
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
              <div
                data-pencil-name="Kbd"
                style="align-items: center; background-color: #EEEFF2; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 5px 9px; width: fit-content"
              >
                <div
                  data-pencil-name="KbdText"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  ⌘ K
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
              data-pencil-name="ScopeRow"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="ScopeChip"
                style="align-items: center; background-color: #2B5BD7; border-radius: 9999px; border: 1px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 32px; justify-content: flex-start; padding: 8px 16px; width: fit-content"
              >
                <div
                  data-pencil-name="ScopeChipText"
                  style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  All
                </div>
              </div>
              <div
                data-pencil-name="ScopeChip"
                style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 32px; justify-content: flex-start; padding: 8px 16px; width: fit-content"
              >
                <div
                  data-pencil-name="ScopeChipText"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Titles
                </div>
              </div>
              <div
                data-pencil-name="ScopeChip"
                style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 32px; justify-content: flex-start; padding: 8px 16px; width: fit-content"
              >
                <div
                  data-pencil-name="ScopeChipText"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Full text
                </div>
              </div>
              <div
                data-pencil-name="ScopeChip"
                style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 32px; justify-content: flex-start; padding: 8px 16px; width: fit-content"
              >
                <div
                  data-pencil-name="ScopeChipText"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Tags
                </div>
              </div>
              <div
                data-pencil-name="ScopeChip"
                style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 32px; justify-content: flex-start; padding: 8px 16px; width: fit-content"
              >
                <div
                  data-pencil-name="ScopeChipText"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Folders
                </div>
              </div>
            </div>
          </div>
          <div
            data-pencil-name="BlurLayer"
            style="align-items: flex-start; box-sizing: border-box; display: flex; filter: blur(7px); flex-direction: column; flex: 1 1 0; gap: 0px; justify-content: flex-start; overflow: hidden; position: relative; width: 100%; z-index: 1"
          >
            <div
              data-pencil-name="PreviewRow"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; padding: 16px 0px 0px 70px; width: 100%"
            >
                <div
                  data-pencil-name="FilePreview"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; width: 208px"
                >
                  <div
                    data-pencil-name="PreviewMat"
                    style="align-items: flex-start; background-color: #EEEFF2; border-radius: 14px; border: 1px solid #EDEFF3; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 268px; justify-content: flex-start; overflow: hidden; padding: 4px; position: relative; width: 100%"
                  >
                    <div
                      data-pencil-name="Page"
                      style="align-items: flex-start; background-color: #FFFFFF; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 8px; height: 100%; justify-content: flex-start; padding: 18px 14px; position: relative; z-index: 0"
                    >
                      <div
                        data-pencil-name="PageAccent"
                        style="background-color: #2B5BD7; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 30px"
                      ></div>
                      <div
                        data-pencil-name="PageTitle"
                        style="background-color: #C2C9D5; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 8px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 70px"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 52px"
                      ></div>
                      <div
                        data-pencil-name="PageBlock"
                        style="background-color: #F1F3F7; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 36px; width: 100%"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="StatusPill"
                      style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; gap: 4px; height: fit-content; justify-content: flex-start; left: 10px; padding: 3px 7px; position: absolute; top: 10px; width: fit-content; z-index: 1"
                    >
                      <div
                        data-pencil-name="StatusText"
                        style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        Read
                      </div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    Introduction to Homography
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    18 pages · 3 Sep
                  </div>
                </div>
                <div
                  data-pencil-name="FilePreview"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; width: 208px"
                >
                  <div
                    data-pencil-name="PreviewMat"
                    style="align-items: flex-start; background-color: #EEEFF2; border-radius: 14px; border: 1px solid #EDEFF3; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 268px; justify-content: flex-start; overflow: hidden; padding: 4px; position: relative; width: 100%"
                  >
                    <div
                      data-pencil-name="Page"
                      style="align-items: flex-start; background-color: #FFFFFF; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 8px; height: 100%; justify-content: flex-start; padding: 18px 14px; position: relative; z-index: 0"
                    >
                      <div
                        data-pencil-name="PageAccent"
                        style="background-color: #177245; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 30px"
                      ></div>
                      <div
                        data-pencil-name="PageTitle"
                        style="background-color: #C2C9D5; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 8px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 70px"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 52px"
                      ></div>
                      <div
                        data-pencil-name="PageBlock"
                        style="background-color: #F1F3F7; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 36px; width: 100%"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="StatusPill"
                      style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; gap: 4px; height: fit-content; justify-content: flex-start; left: 10px; padding: 3px 7px; position: absolute; top: 10px; width: fit-content; z-index: 1"
                    >
                      <div
                        data-pencil-name="StatusText"
                        style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        Read
                      </div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    Computer Vision Lecture 03
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    42 pages · 1 Sep
                  </div>
                </div>
                <div
                  data-pencil-name="FilePreview"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; width: 208px"
                >
                  <div
                    data-pencil-name="PreviewMat"
                    style="align-items: flex-start; background-color: #EEEFF2; border-radius: 14px; border: 1px solid #EDEFF3; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 268px; justify-content: flex-start; overflow: hidden; padding: 4px; position: relative; width: 100%"
                  >
                    <div
                      data-pencil-name="Page"
                      style="align-items: flex-start; background-color: #FFFFFF; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 8px; height: 100%; justify-content: flex-start; padding: 18px 14px; position: relative; z-index: 0"
                    >
                      <div
                        data-pencil-name="PageAccent"
                        style="background-color: #0E6E8C; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 30px"
                      ></div>
                      <div
                        data-pencil-name="PageTitle"
                        style="background-color: #C2C9D5; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 8px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 70px"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 52px"
                      ></div>
                      <div
                        data-pencil-name="PageBlock"
                        style="background-color: #F1F3F7; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 36px; width: 100%"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="StatusPill"
                      style="align-items: center; background-color: #F8EFDD; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; gap: 4px; height: fit-content; justify-content: flex-start; left: 10px; padding: 3px 7px; position: absolute; top: 10px; width: fit-content; z-index: 1"
                    >
                      <div
                        data-pencil-name="StatusText"
                        style='box-sizing: border-box; color: #8A5A00; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        To tag
                      </div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    Research Meeting Notes
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    7 pages · 28 Aug
                  </div>
                </div>
                <div
                  data-pencil-name="FilePreview"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; width: 208px"
                >
                  <div
                    data-pencil-name="PreviewMat"
                    style="align-items: flex-start; background-color: #EEEFF2; border-radius: 14px; border: 1px solid #EDEFF3; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 268px; justify-content: flex-start; overflow: hidden; padding: 4px; position: relative; width: 100%"
                  >
                    <div
                      data-pencil-name="Page"
                      style="align-items: flex-start; background-color: #FFFFFF; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 8px; height: 100%; justify-content: flex-start; padding: 18px 14px; position: relative; z-index: 0"
                    >
                      <div
                        data-pencil-name="PageAccent"
                        style="background-color: #8A5A00; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 30px"
                      ></div>
                      <div
                        data-pencil-name="PageTitle"
                        style="background-color: #C2C9D5; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 8px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 70px"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 52px"
                      ></div>
                      <div
                        data-pencil-name="PageBlock"
                        style="background-color: #F1F3F7; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 36px; width: 100%"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="StatusPill"
                      style="align-items: center; background-color: #F8EFDD; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; gap: 4px; height: fit-content; justify-content: flex-start; left: 10px; padding: 3px 7px; position: absolute; top: 10px; width: fit-content; z-index: 1"
                    >
                      <div
                        data-pencil-name="StatusText"
                        style='box-sizing: border-box; color: #8A5A00; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        Needs review
                      </div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    OCR Experiment Results
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    12 pages · 21 Sep
                  </div>
                </div>
                <div
                  data-pencil-name="FilePreview"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; width: 208px"
                >
                  <div
                    data-pencil-name="PreviewMat"
                    style="align-items: flex-start; background-color: #EEEFF2; border-radius: 14px; border: 1px solid #EDEFF3; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 268px; justify-content: flex-start; overflow: hidden; padding: 4px; position: relative; width: 100%"
                  >
                    <div
                      data-pencil-name="Page"
                      style="align-items: flex-start; background-color: #FFFFFF; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 8px; height: 100%; justify-content: flex-start; padding: 18px 14px; position: relative; z-index: 0"
                    >
                      <div
                        data-pencil-name="PageAccent"
                        style="background-color: #6B4FBB; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 30px"
                      ></div>
                      <div
                        data-pencil-name="PageTitle"
                        style="background-color: #C2C9D5; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 8px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 70px"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 52px"
                      ></div>
                      <div
                        data-pencil-name="PageBlock"
                        style="background-color: #F1F3F7; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 36px; width: 100%"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="StatusPill"
                      style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; gap: 4px; height: fit-content; justify-content: flex-start; left: 10px; padding: 3px 7px; position: absolute; top: 10px; width: fit-content; z-index: 1"
                    >
                      <div
                        data-pencil-name="StatusText"
                        style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        Read
                      </div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    Software Engineering Req.
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    28 pages · 17 Aug
                  </div>
                </div>
                <div
                  data-pencil-name="FilePreview"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; width: 208px"
                >
                  <div
                    data-pencil-name="PreviewMat"
                    style="align-items: flex-start; background-color: #EEEFF2; border-radius: 14px; border: 1px solid #EDEFF3; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 268px; justify-content: flex-start; overflow: hidden; padding: 4px; position: relative; width: 100%"
                  >
                    <div
                      data-pencil-name="Page"
                      style="align-items: flex-start; background-color: #FFFFFF; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 8px; height: 100%; justify-content: flex-start; padding: 18px 14px; position: relative; z-index: 0"
                    >
                      <div
                        data-pencil-name="PageAccent"
                        style="background-color: #0E6E8C; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 30px"
                      ></div>
                      <div
                        data-pencil-name="PageTitle"
                        style="background-color: #C2C9D5; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 8px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 70px"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 100%"
                      ></div>
                      <div
                        data-pencil-name="PageLine"
                        style="background-color: #E3E7EE; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 4px; width: 52px"
                      ></div>
                      <div
                        data-pencil-name="PageBlock"
                        style="background-color: #F1F3F7; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; height: 36px; width: 100%"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="StatusPill"
                      style="align-items: center; background-color: #E7EDFC; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; gap: 4px; height: fit-content; justify-content: flex-start; left: 10px; padding: 3px 7px; position: absolute; top: 10px; width: fit-content; z-index: 1"
                    >
                      <div
                        data-pencil-name="StatusText"
                        style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                      >
                        Signed
                      </div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    Q3 Expense Receipts
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    32 pages · 12 Aug
                  </div>
                </div>
            </div>
            <!-- ViewSwitch 幽灵（设计稿 hero 态 BlurLayer 内的装饰按钮，无交互；功能按钮为 .view-switch 随行元素） -->
            <div
              data-pencil-name="ViewSwitchGhost"
              aria-hidden="true"
              style="align-items: center; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; gap: 7px; height: 92px; justify-content: center; left: 8px; pointer-events: none; position: absolute; top: 104px; width: 46px"
            >
              <svg
                data-pencil-name="ViewSwitchIcon"
                data-icon-name="panel-left"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 18px; width: 18px"
              >
                <path
                  d="M2.60449 1.20313q-0.50586 0.08545-0.87842 0.43749-0.36914 0.34863-0.50927 0.86475-0.02734 0.08545-0.02735 0.71436l-0.01367 3.78027 0.01367 3.78027q0 0.62891 0.02735 0.71436 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.71436 0.02735l3.78027 0.01367 3.78027-0.01367q0.62891 0 0.71436-0.02735 0.48877-0.14014 0.81689-0.46826 0.33154-0.33154 0.47168-0.82031 0.02734-0.08545 0.02735-0.71436l0.01367-3.78027-0.01367-3.78027q0-0.62891-0.02735-0.71436-0.12646-0.48877-0.458-0.81689-0.32813-0.33154-0.80323-0.47168l-0.14013-0.04102-4.32715 0q-4.3374 0-4.4502 0.02734z m2.07129 5.79687l0 4.67578-0.88183 0q-0.88184 0-0.98096-0.02734-0.29395-0.05811-0.43408-0.33496l-0.04102-0.09913 0-8.42871 0.04102-0.09912q0.07178-0.14014 0.18798-0.229 0.11963-0.09229 0.25977-0.11963 0.08545 0 0.96729-0.01367l0.88183 0 0 4.67578z m6.6377-4.62109q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0 8.42871-0.04102 0.09913q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-2.73096 0.02734l-2.63183 0 0-9.35156 5.39013 0.01367 0.09913 0.04102z"
                  fill="#2B5BD7"
                ></path>
              </svg>
              <div
                data-pencil-name="ViewSwitchLabel"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Library
              </div>
            </div>
          </div>
          <div
            data-pencil-name="BlurScrim"
            style="align-items: flex-start; background-color: #F5F6F873; box-sizing: border-box; display: flex; flex-direction: column; gap: 0px; height: 311px; justify-content: flex-start; left: 0px; position: absolute; top: 641px; width: 1440px; z-index: 2"
          ></div>
          <div
            data-pencil-name="GlassDivider"
            style="align-items: center; backdrop-filter: blur(16px); background-image: linear-gradient(180deg, #FFFFFFF7 0%, #FFFFFFB8 100%); background-repeat: no-repeat; background-size: 100% 100%; border-radius: 22px 22px 0px 0px; border: 1px solid #FFFFFF; box-shadow: 0px -14px 30px #16181D2E; box-sizing: border-box; display: flex; flex-direction: column; gap: 9px; height: 64px; justify-content: center; left: 0px; position: absolute; top: 577px; width: 1440px; z-index: 3"
          >
            <div
              data-pencil-name="Grabber" data-clickable @click="emit('pull')"
              style="background-color: #8A909C80; border-radius: 9999px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 42px; z-index: 0"
            ></div>
            <div
              data-pencil-name="PullHint" data-clickable @click="emit('pull')"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; position: relative; width: fit-content; z-index: 1"
            >
              <svg
                data-pencil-name="PullHintIcon"
                data-icon-name="chevron-up"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
              >
                <path
                  d="M6.84619 4.68945q-0.08545 0.02734-0.19482 0.1128-0.14014 0.12646-0.53321 0.51611l-1.28857 1.2749q-1.81836 1.82178-1.86279 1.90723-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="PullHintText"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Pull up to browse all 128 documents
              </div>
            </div>
            <div
              data-pencil-name="GlassShine"
              style="background-image: linear-gradient(-90deg, #7EA6FF00 0%, #7EA6FFCC 50%, #FF9EC400 100%); background-repeat: no-repeat; background-size: 100% 100%; box-sizing: border-box; height: 3px; left: 0px; position: absolute; top: 0px; width: 1440px; z-index: 2"
            ></div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSearchFocus } from '../composables/useSearchFocus'
import SearchSuggestPanel from '../components/SearchSuggestPanel.vue'

const emit = defineEmits(['pull', 'search'])
const router = useRouter()

// ---- 搜索框：真实 input + 聚焦交互（背景模糊变暗、下拉「最近搜索」与实时结果）----
const inputRef = ref(null)
const { query, focused, loading, results, recent, activeIndex, activeResult, onInput, open, close, onBlur, pick, moveActive, setActive, onKeydown } =
  useSearchFocus()

// 选中「最近搜索」回填查询；选中具体结果直接进文档详情
function onPick(text, item) {
  if (item) router.push('/document-detail')
  else pick(text)
}

// 键盘动作：↑↓/Tab/Esc 由 useSearchFocus 处理；Enter 与点击行为一致（有高亮项则选中，否则进入 search 页）
function onKey(e) {
  const action = onKeydown(e)
  if (action !== 'submit') return
  const item = activeResult.value
  if (item) onPick(item.title, item)
  else emit('search')
}
</script>

<style scoped>
/* 搜索框聚焦：共享基座见 src/styles/shared.css */
/* 去掉 SearchHero 的 stacking context，让 .sf-raised 的 z-index 能盖过 .sf-dim；
   hero 输入字号/字重更大，抬升阴影更深（scoped 规则优先于全局 .sf-bar.sf-raised） */
[data-pencil-name="SearchHero"] {
  z-index: auto !important;
  --sf-input-size: 17px;
  --sf-input-weight: 400;
}
.sf-bar.sf-raised {
  border-color: #2b5bd7 !important;
  box-shadow: 0 0 0 4px rgba(43, 91, 215, 0.16), 0 18px 38px rgba(22, 24, 29, 0.22);
}
</style>
