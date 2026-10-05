<template>
      <div class="page-root"
        data-pencil-name="02 · Scan Import"
        style="align-items: flex-start; background-image: url('/assets/bg-0.webp'); background-repeat: no-repeat; background-size: 100% 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 0px; height: 900px; justify-content: flex-start; overflow: hidden; position: relative; width: 1440px"
      >
        <div data-pencil-name="TopNavSpacer" style="height: 64px; flex-shrink: 0; width: 100%"></div>
        <div
          data-pencil-name="ScanContent"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 20px; justify-content: flex-start; padding: 30px 40px; position: relative; width: 100%"
        >
          <div
            data-pencil-name="AmbientGlow"
            style="background-color: #8186911c; border-radius: 50%; box-sizing: border-box; filter: blur(45px); height: 571px; left: -113.766px; position: absolute; top: 376.501px; transform-origin: top left; transform: rotate(8.28deg); width: 631px; z-index: 0"
          ></div>
          <div
            data-pencil-name="ScanHeader"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: space-between; position: relative; width: 100%; z-index: 1"
          >
            <div
              data-pencil-name="ScanHeaderText"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 4px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="Eyebrow"
                style='box-sizing: border-box; color: #2B5BD7; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 600; letter-spacing: 1.6px; line-height: normal; text-align: left; white-space: nowrap'
              >
                IMPORT QUEUE
              </div>
              <div
                data-pencil-name="ScanTitle"
                style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 30px; font-style: normal; font-weight: 700; letter-spacing: -0.6px; line-height: normal; text-align: left; white-space: nowrap"
              >
                Scan / Import
              </div>
              <div
                data-pencil-name="ScanSubtitle"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Add photos or image PDFs. Processing runs entirely on this device.
              </div>
            </div>
            <div
              data-pencil-name="BackButton" data-clickable @click="$router.push('/home')"
              style="align-items: center; background-color: #FFFFFF00; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnGhostIcon"
                data-icon-name="arrow-left"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M6.90088 2.35156q-0.0957 0.01367-0.16748 0.05127-0.06836 0.03418-2.17725 2.13623-2.10547 2.09863-2.14648 2.16699-0.11279 0.18115-0.07178 0.40674 0.02734 0.0957 0.06836 0.17432 0.04443 0.0752 2.15674 2.17725l1.68164 1.67822q0.37598 0.36572 0.51611 0.46484 0.08545 0.05469 0.19824 0.05469l0.04102 0q0.23926 0 0.42041-0.18115 0.11279-0.11279 0.14697-0.28028 0.03418-0.16748-0.02051-0.32128-0.02734-0.08545-0.25976-0.3213-0.23242-0.23926-1.36377-1.37402-1.58252-1.58252-1.58252-1.59619 0-0.01367 3.42822-0.01367l3.01123 0q0.44775 0 0.52979-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.44531 0q-3.45557 0-3.45557-0.01367 0-0.01367 1.58252-1.59619 1.13135-1.13477 1.36377-1.37061 0.23242-0.23926 0.25976-0.3247 0.06836-0.2085-0.00341-0.40332-0.06836-0.19824-0.24268-0.30079-0.17432-0.10596-0.3999-0.06494z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnGhostLabel"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Back to Home
              </div>
            </div>
          </div>
          <div
            ref="laneRef" class="drop-lane" :class="{ 'is-dragging': dragActive, 'is-tapping': tapping }"
            data-pencil-name="DropLane"
            style="align-items: center; background-image: linear-gradient(-93.453deg, #E7EDFCD9 4.872%, #F5F6F800 95.128%); background-repeat: no-repeat; background-size: 100% 100%; border-radius: 24px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 26px; height: 176px; justify-content: flex-start; overflow: hidden; padding: 0px 36px; position: relative; width: 100%; z-index: 2"
            @dragenter.prevent="onDragEnter"
            @dragover.prevent
            @dragleave.prevent="onDragLeave"
            @drop.prevent="onDrop"
          >
            <div class="dz-tint" aria-hidden="true"></div>
            <div class="dz-border" aria-hidden="true"></div>
            <div class="dz-ripples" aria-hidden="true">
              <span
                v-for="r in ripples"
                :key="r.id"
                class="dz-ripple"
                :style="{ left: r.x + 'px', top: r.y + 'px' }"
              ></span>
            </div>
            <div class="dz-pulses" aria-hidden="true">
              <span
                v-for="p in pulses"
                :key="p.id"
                class="dz-pulse"
                :style="{ left: p.x + 'px', top: p.y + 'px' }"
              ></span>
            </div>
            <div
              data-pencil-name="CornerTLh"
              style="background-color: #2B5BD759; border-radius: 2px; box-sizing: border-box; height: 2px; left: 26px; position: absolute; top: 26px; width: 26px; z-index: 0"
            ></div>
            <div
              data-pencil-name="CornerTLv"
              style="background-color: #2B5BD759; border-radius: 2px; box-sizing: border-box; height: 26px; left: 26px; position: absolute; top: 26px; width: 2px; z-index: 1"
            ></div>
            <div
              data-pencil-name="CornerBLh"
              style="background-color: #2B5BD759; border-radius: 2px; box-sizing: border-box; height: 2px; left: 26px; position: absolute; top: 148px; width: 26px; z-index: 2"
            ></div>
            <div
              data-pencil-name="CornerBLv"
              style="background-color: #2B5BD759; border-radius: 2px; box-sizing: border-box; height: 26px; left: 26px; position: absolute; top: 124px; width: 2px; z-index: 3"
            ></div>
            <div
              data-pencil-name="CornerTRh"
              style="background-color: #2B5BD759; border-radius: 2px; box-sizing: border-box; height: 2px; left: 1308px; position: absolute; top: 26px; width: 26px; z-index: 4"
            ></div>
            <div
              data-pencil-name="CornerTRv"
              style="background-color: #2B5BD759; border-radius: 2px; box-sizing: border-box; height: 26px; left: 1332px; position: absolute; top: 26px; width: 2px; z-index: 5"
            ></div>
            <div
              data-pencil-name="CornerBRh"
              style="background-color: #2B5BD759; border-radius: 2px; box-sizing: border-box; height: 2px; left: 1308px; position: absolute; top: 148px; width: 26px; z-index: 6"
            ></div>
            <div
              data-pencil-name="CornerBRv"
              style="background-color: #2B5BD759; border-radius: 2px; box-sizing: border-box; height: 26px; left: 1332px; position: absolute; top: 124px; width: 2px; z-index: 7"
            ></div>
            <div
              data-pencil-name="DropIcon"
              style="align-items: center; background-color: #FFFFFF; border-radius: 9999px; box-shadow: 0px 6px 16px #16181D1A; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 64px; justify-content: center; position: relative; width: 64px; z-index: 8"
            >
              <svg
                data-pencil-name="DropIconGlyph"
                data-icon-name="cloud-upload"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 28px; width: 28px"
              >
                <path
                  d="M4.80225 1.18945q-1.0083 0.09912-1.86963 0.59815-0.86133 0.49561-1.46289 1.30566-0.79639 1.09375-0.86817 2.4917-0.05469 0.92627 0.25977 1.81494 0.31445 0.88867 0.95703 1.58936 0.14014 0.16748 0.25293 0.22558 0.11279 0.05469 0.25976 0.05469 0.14697 0 0.2461-0.04443 0.22217-0.11279 0.3042-0.3418 0.08545-0.23242-0.02393-0.45459-0.04443-0.08545-0.1709-0.21191-0.86816-0.96387-0.93652-2.26612-0.02734-0.63232 0.19482-1.26123 0.22559-0.62891 0.646-1.13476 0.33496-0.38965 0.81006-0.69043 0.47852-0.30078 0.98096-0.41358 0.25293-0.07178 0.39306-0.08545 0.14014-0.01367 0.48194-0.01367 0.3418 0 0.52978 0.03076 0.19141 0.02734 0.45801 0.09571 0.51611 0.15381 0.98437 0.4751 0.47168 0.32129 0.79981 0.75537 0.32813 0.43408 0.52637 0.99463 0.08203 0.22559 0.15722 0.3247 0.07861 0.0957 0.21875 0.16748l0.08545 0.04102 1.39795 0.02734q0.14014 0.01367 0.23926 0.04102 0.48877 0.11279 0.86816 0.42724 0.37939 0.31445 0.56055 0.76563 0.28027 0.65625 0.08887 1.33642-0.18799 0.67676-0.74854 1.09717-0.14014 0.09912-0.20166 0.1709-0.06152 0.06836-0.09228 0.15039-0.06836 0.19824-0.02735 0.36572 0.08545 0.32129 0.40674 0.40674 0.15381 0.05469 0.28711 0.02051 0.1333-0.03418 0.3418-0.18799 0.61523-0.46484 0.94336-1.14844 0.33154-0.68701 0.33838-1.4082 0.00684-0.72119-0.32813-1.42187-0.29395-0.60156-0.84766-1.05616-0.55371-0.45459-1.20996-0.63574-0.36572-0.08545-1.0083-0.11279l-0.44775 0-0.08545-0.18115q-0.33496-0.72803-0.93652-1.34668-0.29395-0.29395-0.58789-0.50244-0.29395-0.2085-0.67334-0.39649-0.37939-0.19141-0.75196-0.29394-0.36914-0.10596-0.80322-0.15039-0.18115-0.02734-0.46826-0.02735-0.28711 0-0.46826 0.01367z m1.97216 5.85157q-0.04102 0.02734-0.0957 0.04443l-1.24756 1.24414q-1.24414 1.24756-1.27148 1.31592-0.09912 0.18115-0.06494 0.37256 0.03418 0.18799 0.16064 0.30078 0.15381 0.15381 0.36231 0.17431 0.21191 0.02051 0.37939-0.09228 0.07178-0.05469 0.7417-0.72803l0.67334-0.68359 0.01367 3.42822 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0.01367-3.42822 0.67334 0.68359q0.66992 0.67334 0.7417 0.72803 0.16748 0.11279 0.37598 0.09228 0.21191-0.02051 0.36572-0.17431 0.12646-0.12646 0.16064-0.30762 0.03418-0.18457-0.06494-0.36572-0.02734-0.06836-1.27148-1.31592l-0.98096-0.98096q-0.25293-0.23584-0.34863-0.29394-0.08545-0.04102-0.19824-0.05469l-0.02735 0q-0.12646 0-0.23926 0.04102z"
                  fill="#2B5BD7"
                ></path>
              </svg>
            </div>
            <div
              data-pencil-name="DropText"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: fit-content; justify-content: flex-start; position: relative; width: fit-content; z-index: 9"
            >
              <div
                data-pencil-name="DropTitle"
                style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 22px; font-style: normal; font-weight: 700; letter-spacing: -0.4px; line-height: normal; text-align: left; white-space: nowrap"
              >
                Drag photos or image PDFs here
              </div>
              <div
                data-pencil-name="DropHint"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0.6px; line-height: normal; text-align: left; white-space: nowrap'
              >
                JPG · PNG · HEIC · image PDF
              </div>
            </div>
            <div
              data-pencil-name="DropButtons"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 12px; height: fit-content; justify-content: flex-start; position: relative; width: fit-content; z-index: 10"
            >
              <div
                data-pencil-name="ChooseFiles" data-clickable @click="openFilePicker"
                style="align-items: center; background-color: #2B5BD7; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
              >
                <svg
                  data-pencil-name="BtnPrimaryIcon"
                  data-icon-name="image-plus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                >
                  <path
                    d="M10.9751 0.60156q-0.12646 0.01367-0.2461 0.10596-0.11621 0.08887-0.17431 0.21533l-0.04102 0.09912-0.01367 1.30225-0.57422 0q-0.57422 0-0.68701 0.02734-0.24951 0.02734-0.38281 0.23242-0.1333 0.20166-0.09912 0.43409 0.03418 0.229 0.24609 0.36914 0.10938 0.08545 0.229 0.09912 0.11963 0.01367 0.63916 0.01367l0.62891 0 0 0.62891q0 0.51953 0.01367 0.63916 0.01367 0.11963 0.09912 0.229 0.15381 0.22559 0.417 0.24609 0.2666 0.02051 0.46484-0.17431 0.12646-0.11279 0.15381-0.2666 0.02734-0.15381 0.02734-0.71436l0-0.58789 1.30225-0.01367 0.09912-0.04102q0.08203-0.04443 0.15723-0.11279 0.07861-0.07178 0.11279-0.14014 0.0376-0.07178 0.05127-0.18115 0.04101-0.19824-0.05127-0.36572-0.08887-0.16748-0.28369-0.2666l-0.09912-0.04102-1.28858-0.01367 0-0.58789q0-0.57422-0.02734-0.67334-0.04102-0.23584-0.23242-0.36914-0.18799-0.1333-0.44092-0.09229z m-8.37061 0.60157q-0.50586 0.08545-0.87842 0.43749-0.36914 0.34863-0.50927 0.86475-0.02734 0.08545-0.02735 0.71436l-0.01367 3.78027 0.01367 3.78027q0 0.62891 0.02735 0.71436 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.71436 0.02735l3.78027 0.01367 3.78027-0.01367q0.62891 0 0.71436-0.02735 0.98096-0.2666 1.28857-1.26123l0.04102-0.12646 0-4.80225-0.02734-0.0957q-0.08545-0.19824-0.29395-0.31104-0.07178-0.04102-0.11279-0.04785-0.04102-0.00684-0.14014-0.00683-0.15381 0-0.25293 0.05127-0.0957 0.04785-0.17432 0.1333-0.07519 0.08203-0.10595 0.16748-0.02734 0.08203-0.03418 0.16064-0.00684 0.0752-0.00684 0.32813l0 0.3623-0.46143-0.44775q-0.46143-0.46143-0.61523-0.56055-0.2666-0.18115-0.5332-0.24951-0.16748-0.04443-0.42041-0.04444-0.25293 0-0.43408 0.04444-0.33496 0.06836-0.64258 0.30762-0.11279 0.08203-2.71729 2.68652l-2.60449 2.60449-0.16748 0q-0.22217 0-0.3418-0.04101-0.11963-0.04443-0.23242-0.14014-0.06836-0.07178-0.12646-0.18115l-0.04102-0.09913 0-8.42871 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 4.66211-0.01367 0.08545-0.04102q0.08203-0.04443 0.16407-0.12646 0.08545-0.08545 0.12646-0.17432 0.04443-0.09229 0.04443-0.23926 0-0.14697-0.05127-0.23584-0.04785-0.09229-0.14013-0.17431-0.08887-0.08545-0.17432-0.11963-0.08203-0.0376-0.38965-0.0376l-2.04394 0q-2.35156 0-2.46436 0.02735z m2.36524 2.32421q-0.3623 0.05811-0.69385 0.2837-0.32813 0.22217-0.52295 0.52978-0.2666 0.46143-0.24609 0.97412 0.02051 0.50928 0.31445 0.93652 0.29395 0.42725 0.78613 0.62208 0.43408 0.16748 0.89551 0.10595 0.46143-0.06494 0.82373-0.35205 0.36572-0.28711 0.54688-0.71777 0.12646-0.32471 0.12646-0.65967 0-0.33496-0.12646-0.64258-0.18115-0.43408-0.54004-0.72119-0.35547-0.28711-0.8169-0.35889-0.28027-0.04102-0.54687 0z m0.5332 1.20313q0.18115 0.08545 0.2666 0.2666 0.02734 0.05811 0.04102 0.09912 0.01367 0.04102 0.01367 0.15381 0 0.11279-0.01367 0.15381-0.01367 0.04102-0.04102 0.09912-0.09912 0.18115-0.2666 0.28027-0.08545 0.04102-0.25293 0.04102-0.16748 0-0.25293-0.04102-0.16748-0.09912-0.2666-0.28027-0.02734-0.05811-0.04102-0.09912-0.01367-0.04102-0.01367-0.15381 0-0.11279 0.01367-0.15381 0.01367-0.04102 0.04102-0.09912 0.11279-0.22217 0.36572-0.30762 0.04102-0.01367 0.18115-0.00683 0.14014 0.00684 0.22559 0.04785z m4.36816 2.50879q0.08203 0.04102 0.93653 0.90918l0.86816 0.85449-0.01367 2.21142-0.04102 0.09913q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-3.19238 0.02734l-3.07959 0 2.17041-2.18408q2.18408-2.18408 2.23877-2.21143 0.11279-0.07178 0.2666-0.07861 0.15381-0.00684 0.28027 0.0376z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
                <div
                  data-pencil-name="BtnPrimaryLabel"
                  style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Choose files
                </div>
              </div>
              <div
                data-pencil-name="ChooseFolder" data-clickable @click="openFolderPicker"
                style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 9px 16px; width: fit-content"
              >
                <svg
                  data-pencil-name="BtnOutlineIcon"
                  data-icon-name="folder-open"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                >
                  <path
                    d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 5.96436q0 0.68701 0.02734 0.89551 0.01367 0.14014 0.05811 0.25293l0.02734 0.05468q0.15381 0.44775 0.53662 0.75537 0.38623 0.30762 0.84766 0.3794 0.14014 0.01367 4.55274 0.01367l4.40917-0.01367 0.15381-0.04102q0.29394-0.07178 0.54688-0.23926 0.19482-0.14014 0.37598-0.3623 0.18115-0.22559 0.2666-0.43408 0.02734-0.08545 0.48877-1.84229 0.46143-1.75684 0.50586-1.98242 0.05469-0.2666 0.01367-0.56738-0.04102-0.30078-0.16748-0.55713-0.12646-0.25977-0.35889-0.4751-0.229-0.21875-0.49561-0.33154l-0.12646-0.05469 0-0.47851q-0.01367-0.34863-0.02051-0.4375-0.00684-0.09229-0.03418-0.20508-0.14014-0.48877-0.47851-0.81348-0.16748-0.16748-0.34864-0.26318-0.18115-0.09912-0.43408-0.18457-0.09912-0.02734-0.36572-0.02735l-3.2334-0.02734q-0.34863 0-0.46142-0.02734-0.08203-0.01367-0.14014-0.05811l-0.02735-0.02734q-0.06836-0.04102-0.11279-0.09571-0.04102-0.05811-0.19482-0.28027-0.42041-0.61865-0.58789-0.78613-0.25293-0.23584-0.57422-0.34864l-0.01367 0q-0.15381-0.07178-0.25293-0.08544-0.14014-0.02734-0.44776-0.02735l-1.03564 0-1.17578 0q-0.23926 0.01367-0.33496 0.02735z m2.86767 1.17578q0.11279 0.05811 0.18115 0.12988 0.07178 0.06836 0.22559 0.3042 0.43408 0.65967 0.58789 0.7998 0.39307 0.34863 0.88184 0.43408 0.12646 0.02734 1.93798 0.02735 1.81494 0 1.92432 0.02051 0.11279 0.02051 0.18115 0.0581 0.07178 0.03418 0.14698 0.11279 0.07861 0.0752 0.11279 0.14698 0.0376 0.06836 0.04443 0.1333 0.00684 0.06152 0.00684 0.32471l0 0.37939-5.93701 0.01367-0.14014 0.02735q-0.34863 0.09912-0.63574 0.31787-0.28711 0.21533-0.44092 0.4956-0.08545 0.15381-0.51953 0.9878-0.43408 0.83057-0.45459 0.90234-0.02051 0.06836-0.02051 0.18115 0 0.11279 0.03418 0.20508 0.0376 0.08887 0.11963 0.18115 0.08545 0.08887 0.16748 0.1333 0.07178 0.02734 0.11279 0.03418 0.04102 0.00684 0.14014 0.00684 0.15381 0 0.24951-0.04102 0.09912-0.04443 0.16065-0.11963 0.06494-0.07861 0.17773-0.30078 0.09912-0.16748 0.3794-0.70752 0.28027-0.54004 0.37597-0.70752 0.12646-0.22217 0.18799-0.29052 0.06494-0.07178 0.17773-0.11621l0.09571-0.02735 6.53857 0 0.08545 0.04102q0.08203 0.05811 0.16748 0.15039 0.08545 0.08887 0.11963 0.18799 0.03418 0.0957 0.02734 0.21533-0.00684 0.11963-0.46142 1.89697-0.45459 1.77734-0.5127 1.86279-0.0957 0.19482-0.29394 0.2666-0.06836 0.02734-0.62891 0.02735l-8.12109 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.0957 0.04102z"
                    fill="#59606E"
                  ></path>
                </svg>
                <div
                  data-pencil-name="BtnOutlineLabel"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Choose a folder
                </div>
              </div>
            </div>
            <!-- 原生选择器：Choose files（多选文件）/ Choose a folder（整目录）→ 交给预留上传接口 -->
            <input
              ref="fileInputRef"
              class="si-file-input"
              type="file"
              accept="image/*,.pdf"
              multiple
              @change="onPickFiles('files', $event)"
            />
            <input
              ref="folderInputRef"
              class="si-file-input"
              type="file"
              webkitdirectory
              directory
              multiple
              @change="onPickFiles('folder', $event)"
            />
            <div
              data-pencil-name="LaneSpacer"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; height: 1px; justify-content: flex-start; position: relative; z-index: 11"
            ></div>
            <div
              data-pencil-name="DropArt"
              style="box-sizing: border-box; height: 230px; left: 1024px; position: absolute; top: 40px; width: 330px; z-index: 12"
            >
              <div
                data-pencil-name="SheetBack"
                style="background-color: #EEF2F8; border-radius: 9px; border: 1px solid #1A2B4A14; box-shadow: 0px 10px 22px #1A2B4A1F; box-sizing: border-box; height: 172px; left: 6px; position: absolute; top: 44px; transform-origin: top left; transform: rotate(14deg); width: 130px; z-index: 0"
              >
                <div
                  data-pencil-name="SheetBar"
                  style="background-color: #C7D0DE; border-radius: 3px; box-sizing: border-box; height: 7px; left: 18px; position: absolute; top: 20px; width: 94px; z-index: 0"
                ></div>
                <div
                  data-pencil-name="SheetLine"
                  style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; height: 5px; left: 18px; position: absolute; top: 38px; width: 78px; z-index: 1"
                ></div>
                <div
                  data-pencil-name="SheetLine"
                  style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; height: 5px; left: 18px; position: absolute; top: 52px; width: 94px; z-index: 2"
                ></div>
                <div
                  data-pencil-name="SheetLine"
                  style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; height: 5px; left: 18px; position: absolute; top: 66px; width: 60px; z-index: 3"
                ></div>
              </div>
              <div
                data-pencil-name="SheetMid"
                style="background-color: #FFFFFF; border-radius: 9px; border: 1px solid #1A2B4A14; box-shadow: 0px 10px 22px #1A2B4A1F; box-sizing: border-box; height: 172px; left: 74px; position: absolute; top: 28px; transform-origin: top left; transform: rotate(2deg); width: 130px; z-index: 1"
              >
                <div
                  data-pencil-name="SheetBar"
                  style="background-color: #C7D0DE; border-radius: 3px; box-sizing: border-box; height: 7px; left: 18px; position: absolute; top: 20px; width: 94px; z-index: 0"
                ></div>
                <div
                  data-pencil-name="SheetLine"
                  style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; height: 5px; left: 18px; position: absolute; top: 38px; width: 78px; z-index: 1"
                ></div>
                <div
                  data-pencil-name="SheetLine"
                  style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; height: 5px; left: 18px; position: absolute; top: 52px; width: 94px; z-index: 2"
                ></div>
                <div
                  data-pencil-name="SheetLine"
                  style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; height: 5px; left: 18px; position: absolute; top: 66px; width: 60px; z-index: 3"
                ></div>
              </div>
              <div
                data-pencil-name="SheetFront"
                style="background-color: #FFFFFF; border-radius: 9px; border: 1px solid #1A2B4A14; box-shadow: 0px 10px 22px #1A2B4A1F; box-sizing: border-box; height: 172px; left: 146px; position: absolute; top: 40px; transform-origin: top left; transform: rotate(-12deg); width: 130px; z-index: 2"
              >
                <div
                  data-pencil-name="SheetBar"
                  style="background-color: #C7D0DE; border-radius: 3px; box-sizing: border-box; height: 7px; left: 18px; position: absolute; top: 20px; width: 94px; z-index: 0"
                ></div>
                <div
                  data-pencil-name="SheetLine"
                  style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; height: 5px; left: 18px; position: absolute; top: 38px; width: 78px; z-index: 1"
                ></div>
                <div
                  data-pencil-name="SheetLine"
                  style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; height: 5px; left: 18px; position: absolute; top: 52px; width: 94px; z-index: 2"
                ></div>
                <div
                  data-pencil-name="SheetLine"
                  style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; height: 5px; left: 18px; position: absolute; top: 66px; width: 60px; z-index: 3"
                ></div>
              </div>
            </div>
          </div>
          <Teleport to="body">
            <div class="dz-flyers" aria-hidden="true">
              <div
                v-for="f in flyers"
                :key="f.id"
                class="dz-flyer"
                :data-flyer-id="f.id"
              >
                <span class="dz-flyer-bar"></span>
                <span class="dz-flyer-line"></span>
                <span class="dz-flyer-line short"></span>
              </div>
            </div>
          </Teleport>
          <div
            data-pencil-name="ResumeStrip"
            style="align-items: center; border-color: #E3E5EA; border-style: solid; border-width: 1px 0px 1px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 14px; height: fit-content; justify-content: flex-start; padding: 13px 2px; position: relative; width: 100%; z-index: 3"
          >
            <svg
              data-pencil-name="ResumeIcon"
              data-icon-name="rotate-ccw"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
            >
              <path
                d="M1.59619 1.18945q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 3.26074 0.04102 0.07178q0.09912 0.19482 0.29394 0.28027l0.08545 0.04102 2.81299 0.01367q0.32129-0.01367 0.43408-0.02734 0.07178-0.01367 0.15381-0.07178l0.01367-0.01367q0.1709-0.12646 0.21875-0.31446 0.04785-0.18799-0.03076-0.37597-0.0752-0.19141-0.25635-0.28711-0.08545-0.05811-0.2666-0.07178-0.18115-0.01367-0.76904-0.01367l-0.7417 0 0.23584-0.22559q0.7417-0.72803 1.58252-1.09033 0.96729-0.42041 2.03027-0.42041 0.93994 0 1.76367 0.34863 1.17578 0.49219 1.93799 1.49366 0.76563 1.00146 0.91944 2.2456 0.02734 0.22559 0.02734 0.56738 0 0.3418-0.02734 0.56739-0.15381 1.2749-0.93995 2.29004-0.78271 1.01172-1.97216 1.49023-0.81348 0.32129-1.72266 0.32129-0.28027 0-0.46143-0.01367-0.18115-0.01367-0.46142-0.07178-0.88184-0.18115-1.64746-0.68359-0.76221-0.50586-1.28174-1.2544-0.51611-0.74854-0.71094-1.64404-0.08545-0.44775-0.09228-0.77588-0.00684-0.33154-0.0752-0.47168-0.08545-0.16748-0.2666-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.06836 0.15381-0.03418 0.65283 0.03418 0.49561 0.14697 0.9878 0.29395 1.18945 1.03564 2.15673 0.7417 0.96387 1.80469 1.5586 1.06641 0.59473 2.29688 0.70752 0.18457 0.01367 0.5332 0.01367 0.34863 0 0.5332-0.01367 1.38428-0.12646 2.54639-0.86817 1.14844-0.71436 1.86279-1.86279 0.7417-1.16211 0.86817-2.54639 0.01367-0.18457 0.01367-0.5332 0-0.34863-0.01367-0.5332-0.14014-1.52441-1.01514-2.78223-0.875-1.26123-2.2627-1.93457-0.58789-0.28027-1.14843-0.42041-0.55713-0.14014-1.2168-0.15381-1.09033-0.02734-2.1123 0.30762-0.71436 0.23926-1.30225 0.60498-0.58789 0.3623-1.14844 0.90918l-0.28027 0.26318 0-1.67822-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z"
                fill="#2B5BD7"
              ></path>
            </svg>
            <div
              data-pencil-name="ResumeText"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="ResumeTitle"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Unfinished scan · Computer Vision Lecture 03
              </div>
              <div
                data-pencil-name="ResumeMeta"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                paused 2 days ago · 4 of 12 pages processed
              </div>
            </div>
            <div
              data-pencil-name="ResumeSpacer"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; height: 1px; justify-content: flex-start"
            ></div>
            <div
              data-pencil-name="ResumeButton"
              style="align-items: center; background-color: #2B5BD7; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnPrimaryIcon"
                data-icon-name="play"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M3.75293 1.20313q-0.5332 0.09912-0.91943 0.49218-0.38281 0.38965-0.46827 0.90918-0.02734 0.15381-0.02734 4.39551 0 4.2417 0.02734 4.39551 0.08545 0.51953 0.4751 0.90918 0.5332 0.54687 1.31934 0.51953 0.19482-0.01367 0.34179-0.04785 0.14697-0.0376 0.31446-0.10596 0.12646-0.05811 3.58887-2.07812 3.46582-2.02344 3.63671-2.13624 0.23584-0.15381 0.417-0.38281 0.18457-0.23242 0.27343-0.50586 0.09228-0.27344 0.09229-0.56738 0-0.29395-0.08545-0.57422-0.19482-0.5332-0.65625-0.85449-0.11279-0.08203-3.59912-2.11231-3.48633-2.03027-3.61279-2.10205-0.24951-0.12646-0.5503-0.16748-0.30078-0.04102-0.56738 0.01368z m0.56055 1.18945q0.12305 0.04443 3.62988 2.09521 3.51025 2.05078 3.5581 2.10205 0.04785 0.04785 0.10596 0.15723 0.02734 0.07178 0.04102 0.11963 0.01367 0.04785 0.01367 0.1333 0 0.08545-0.01367 0.1333-0.01367 0.04785-0.04102 0.11963-0.05811 0.10938-0.11621 0.16748-0.05469 0.05469-3.61621 2.12939-3.56152 2.07129-3.66748 2.09864-0.10596 0.02734-0.20508 0.01367-0.32129-0.07178-0.44775-0.33496l-0.04102-0.09912 0-8.45606 0.04102-0.09912q0.09912-0.2085 0.32129-0.29053 0.22559-0.08545 0.4375 0.01026z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnPrimaryLabel"
                style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Resume
              </div>
            </div>
            <div
              data-pencil-name="DiscardButton"
              style="align-items: center; background-color: #FFFFFF00; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
            >
              <div
                data-pencil-name="BtnGhostLabel"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Discard
              </div>
            </div>
          </div>
          <div
            data-pencil-name="PendingSection"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 16px; justify-content: flex-start; position: relative; width: 100%; z-index: 4"
          >
            <div
              data-pencil-name="PendingHeader"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: space-between; width: 100%"
            >
              <div
                data-pencil-name="PendingHeaderLeft"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="PendingTitle"
                  style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                >
                  Pending files
                </div>
                <div
                  data-pencil-name="PendingCount"
                  style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 3px 10px; width: fit-content"
                >
                  <div
                    data-pencil-name="PendingCountText"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    5 files · 11.0 MB
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="PendingHeaderRight"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="OverallProgress"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 12px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="ProgressTrack"
                    style="align-items: center; background-color: #E4E7EC; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 6px; justify-content: flex-start; width: 180px"
                  >
                    <div
                      data-pencil-name="ProgressFill"
                      style="align-items: flex-start; background-color: #2B5BD7; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 6px; justify-content: flex-start; width: 72px"
                    ></div>
                  </div>
                  <div
                    data-pencil-name="ProgressStage"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Enhancing page 3 of 5…
                  </div>
                  <div
                    data-pencil-name="ProgressPct"
                    style='box-sizing: border-box; color: #16181D; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    40%
                  </div>
                </div>
                <div
                  data-pencil-name="ClearAllButton"
                  style="align-items: center; background-color: #FFFFFF00; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
                >
                  <div
                    data-pencil-name="BtnGhostLabel"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Clear all
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="ContactSheet"
              style="box-sizing: border-box; flex: 1 1 0; position: relative; width: 100%"
              @mousemove="onCardMove"
              @mouseleave="onCardsLeave"
            >
              <div
                class="si-preview"
                data-pencil-name="File CV-Lecture-03_p1.jpg" data-clickable @click="$router.push('/document-detail')"
                style="box-sizing: border-box; height: 312px; left: 40px; position: absolute; top: 16px; transform-origin: top left; transform: rotate(2.2deg); width: 200px; z-index: 0"
              >
                <div
                  data-pencil-name="Page"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #1A2B4A14; box-shadow: 0px 12px 26px #1A2B4A22; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; height: 240px; justify-content: flex-start; left: 0px; padding: 20px; position: absolute; top: 0px; width: 200px; z-index: 0"
                >
                  <div
                    data-pencil-name="DocTitle"
                    style="background-color: #C7D0DE; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 8px; position: relative; width: 118px; z-index: 0"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 150px; z-index: 1"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 128px; z-index: 2"
                  ></div>
                  <div
                    data-pencil-name="DocBlock"
                    style="align-items: flex-start; background-color: #E4F2EA; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: 46px; justify-content: flex-start; padding: 10px 12px; position: relative; width: 100%; z-index: 3"
                  >
                    <div
                      data-pencil-name="DocLine"
                      style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; width: 92px"
                    ></div>
                    <div
                      data-pencil-name="DocLine"
                      style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; width: 58px"
                    ></div>
                  </div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 146px; z-index: 4"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 120px; z-index: 5"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 150px; z-index: 6"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 104px; z-index: 7"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 132px; z-index: 8"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 86px; z-index: 9"
                  ></div>
                  <div
                    data-pencil-name="StatusBadge"
                    style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-shadow: 0px 3px 8px #16181D14; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 28px; justify-content: center; left: 154px; position: absolute; top: 12px; width: 28px; z-index: 10"
                  >
                    <svg
                      data-pencil-name="StatusIcon"
                      data-icon-name="check"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                        fill="#177245"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-pencil-name="Caption"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; gap: 3px; height: fit-content; justify-content: flex-start; left: 0px; position: absolute; top: 248px; width: 200px; z-index: 1"
                >
                  <div
                    data-pencil-name="IndexRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <div
                      data-pencil-name="IndexRule"
                      style="background-color: #2B5BD7; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 16px"
                    ></div>
                    <div
                      data-pencil-name="IndexLabel"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 9.5px; font-style: normal; font-weight: 400; letter-spacing: 1px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      01
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    CV-Lecture-03_p1.jpg
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    1.8 MB · page 1
                  </div>
                  <div
                    data-pencil-name="StatusRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <div
                      data-pencil-name="StatusDot"
                      style="background-color: #177245; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 6px"
                    ></div>
                    <div
                      data-pencil-name="StatusLabel"
                      style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Processed
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="si-preview"
                data-pencil-name="File CV-Lecture-03_p2.jpg" data-clickable @click="$router.push('/document-detail')"
                style="box-sizing: border-box; height: 312px; left: 310px; position: absolute; top: 10px; transform-origin: top left; transform: rotate(-1.6deg); width: 200px; z-index: 1"
              >
                <div
                  data-pencil-name="Page"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #1A2B4A14; box-shadow: 0px 12px 26px #1A2B4A22; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; height: 240px; justify-content: flex-start; left: 0px; padding: 20px; position: absolute; top: 0px; width: 200px; z-index: 0"
                >
                  <div
                    data-pencil-name="DocTitle"
                    style="background-color: #C7D0DE; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 8px; position: relative; width: 118px; z-index: 0"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 150px; z-index: 1"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 128px; z-index: 2"
                  ></div>
                  <div
                    data-pencil-name="DocBlock"
                    style="align-items: flex-start; background-color: #E4F2EA; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: 46px; justify-content: flex-start; padding: 10px 12px; position: relative; width: 100%; z-index: 3"
                  >
                    <div
                      data-pencil-name="DocLine"
                      style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; width: 92px"
                    ></div>
                    <div
                      data-pencil-name="DocLine"
                      style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; width: 58px"
                    ></div>
                  </div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 146px; z-index: 4"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 120px; z-index: 5"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 150px; z-index: 6"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 104px; z-index: 7"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 132px; z-index: 8"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 86px; z-index: 9"
                  ></div>
                  <div
                    data-pencil-name="StatusBadge"
                    style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-shadow: 0px 3px 8px #16181D14; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 28px; justify-content: center; left: 154px; position: absolute; top: 12px; width: 28px; z-index: 10"
                  >
                    <svg
                      data-pencil-name="StatusIcon"
                      data-icon-name="check"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                        fill="#177245"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-pencil-name="Caption"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; gap: 3px; height: fit-content; justify-content: flex-start; left: 0px; position: absolute; top: 248px; width: 200px; z-index: 1"
                >
                  <div
                    data-pencil-name="IndexRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <div
                      data-pencil-name="IndexRule"
                      style="background-color: #2B5BD7; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 16px"
                    ></div>
                    <div
                      data-pencil-name="IndexLabel"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 9.5px; font-style: normal; font-weight: 400; letter-spacing: 1px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      02
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    CV-Lecture-03_p2.jpg
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    1.9 MB · page 2
                  </div>
                  <div
                    data-pencil-name="StatusRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <div
                      data-pencil-name="StatusDot"
                      style="background-color: #177245; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 6px"
                    ></div>
                    <div
                      data-pencil-name="StatusLabel"
                      style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Processed
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="si-preview"
                data-pencil-name="File CV-Lecture-03_p3.jpg" data-clickable @click="$router.push('/document-detail')"
                style="box-sizing: border-box; height: 312px; left: 580px; position: absolute; top: 22px; transform-origin: top left; transform: rotate(1deg); width: 200px; z-index: 2"
              >
                <div
                  data-pencil-name="Page"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #1A2B4A14; box-shadow: 0px 12px 26px #1A2B4A22; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; height: 240px; justify-content: flex-start; left: 0px; padding: 20px; position: absolute; top: 0px; width: 200px; z-index: 0"
                >
                  <div
                    data-pencil-name="DocTitle"
                    style="background-color: #C7D0DE; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 8px; position: relative; width: 118px; z-index: 0"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 150px; z-index: 1"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 128px; z-index: 2"
                  ></div>
                  <div
                    data-pencil-name="DocBlock"
                    style="align-items: flex-start; background-color: #E3EAFB; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: 46px; justify-content: flex-start; padding: 10px 12px; position: relative; width: 100%; z-index: 3"
                  >
                    <div
                      data-pencil-name="DocLine"
                      style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; width: 92px"
                    ></div>
                    <div
                      data-pencil-name="DocLine"
                      style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; width: 58px"
                    ></div>
                  </div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 146px; z-index: 4"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 120px; z-index: 5"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 150px; z-index: 6"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 104px; z-index: 7"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 132px; z-index: 8"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 86px; z-index: 9"
                  ></div>
                  <div
                    data-pencil-name="StatusBadge"
                    style="align-items: center; background-color: #E7EDFC; border-radius: 9999px; box-shadow: 0px 3px 8px #16181D14; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 28px; justify-content: center; left: 154px; position: absolute; top: 12px; width: 28px; z-index: 10"
                  >
                    <svg
                      data-pencil-name="StatusIcon"
                      data-icon-name="loader-circle"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M6.4668 1.18945q-1.49707 0.14014-2.75147 0.99463-1.25098 0.85449-1.92431 2.19776-0.44775 0.89551-0.5879 1.93115-0.02734 0.16748-0.02734 0.68701 0 0.51953 0.02734 0.68701 0.16748 1.2168 0.75538 2.23877 0.58789 1.02197 1.55517 1.75 0.60156 0.46143 1.3501 0.74854 0.74854 0.28711 1.521 0.37255 0.23584 0.02734 0.61523 0.02735 0.37939 0 0.61523-0.02735 1.12109-0.12646 2.10547-0.64257 0.98779-0.51953 1.71582-1.36719 0.72803-0.84766 1.09375-1.92432 0.14014-0.44775 0.22217-0.91601 0.08545-0.47168 0.07178-0.86133 0-0.1709-0.00684-0.22559-0.00684-0.05469-0.03418-0.11279-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.09912 0.04102-0.18115 0.09912-0.25977 0.25293-0.0752 0.15381-0.08203 0.47168-0.00683 0.31445-0.09228 0.73144-0.28027 1.3877-1.30225 2.396-1.11768 1.104-2.7583 1.30225-0.18115 0.02734-0.5332 0.02734-0.34863 0-0.54346-0.02734-0.78271-0.11279-1.47656-0.44776-0.69385-0.33838-1.24072-0.88183-0.65625-0.65967-1.01514-1.51416-0.35547-0.85449-0.35547-1.79102 0-0.56055 0.11963-1.05615 0.11963-0.49902 0.35547-1.00147 0.33838-0.67334 0.88183-1.22363 0.54688-0.55371 1.24756-0.90576 0.50244-0.23584 0.99805-0.35547 0.49902-0.11963 1.05957-0.11963 0.3623 0 0.66309 0.04443 0.3042 0.04102 0.6665 0.15039 0.23926 0.05811 0.33496 0.05811 0.21191-0.02734 0.36572-0.17432 0.15381-0.14697 0.16748-0.35888 0.01367-0.15381-0.05127-0.29395-0.06152-0.14014-0.17089-0.22217-0.15723-0.09912-0.59131-0.20507-0.43066-0.10596-0.88184-0.14698-0.16748-0.01367-0.51611-0.01367-0.34863 0-0.51953 0.01367z"
                        fill="#2B5BD7"
                      ></path>
                    </svg>
                  </div>
                  <div
                    data-pencil-name="PageProgress"
                    style="align-items: center; background-color: #E4E7EC; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 5px; justify-content: flex-start; left: 20px; position: absolute; top: 218px; width: 160px; z-index: 11"
                  >
                    <div
                      data-pencil-name="PageProgressFill"
                      style="align-items: flex-start; background-color: #2B5BD7; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 99px"
                    ></div>
                  </div>
                  <div
                    data-pencil-name="ScanBeam"
                    style="background-color: #2B5BD766; box-sizing: border-box; filter: blur(1px); height: 3px; left: 0px; position: absolute; top: 150px; width: 200px; z-index: 12"
                  ></div>
                </div>
                <div
                  data-pencil-name="Caption"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; gap: 3px; height: fit-content; justify-content: flex-start; left: 0px; position: absolute; top: 248px; width: 200px; z-index: 1"
                >
                  <div
                    data-pencil-name="IndexRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <div
                      data-pencil-name="IndexRule"
                      style="background-color: #2B5BD7; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 16px"
                    ></div>
                    <div
                      data-pencil-name="IndexLabel"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 9.5px; font-style: normal; font-weight: 400; letter-spacing: 1px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      03
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    CV-Lecture-03_p3.jpg
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    2.1 MB · page 3
                  </div>
                  <div
                    data-pencil-name="StatusRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <div
                      data-pencil-name="StatusDot"
                      style="background-color: #2B5BD7; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 6px"
                    ></div>
                    <div
                      data-pencil-name="StatusLabel"
                      style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Processing 62%
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="si-preview"
                data-pencil-name="File lecture-scan.heic" data-clickable @click="$router.push('/document-detail')"
                style="box-sizing: border-box; height: 312px; left: 850px; position: absolute; top: 12px; transform-origin: top left; transform: rotate(-2deg); width: 200px; z-index: 3"
              >
                <div
                  data-pencil-name="Page"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #1A2B4A14; box-shadow: 0px 12px 26px #1A2B4A22; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; height: 240px; justify-content: flex-start; left: 0px; padding: 20px; position: absolute; top: 0px; width: 200px; z-index: 0"
                >
                  <div
                    data-pencil-name="Photo"
                    style="background-image: linear-gradient(-109.107deg, #DCE3EE 9.848%, #EEF1F6 90.152%); background-repeat: no-repeat; background-size: 100% 100%; border-radius: 6px; box-sizing: border-box; flex-shrink: 0; height: 96px; position: relative; width: 160px; z-index: 0"
                  ></div>
                  <div
                    data-pencil-name="DocTitle"
                    style="background-color: #C7D0DE; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 8px; position: relative; width: 104px; z-index: 1"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 150px; z-index: 2"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 128px; z-index: 3"
                  ></div>
                  <div
                    data-pencil-name="DocBlock"
                    style="align-items: flex-start; background-color: #EDEFF3; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: 30px; justify-content: flex-start; padding: 8px 12px; position: relative; width: 100%; z-index: 4"
                  >
                    <div
                      data-pencil-name="DocLine"
                      style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; width: 70px"
                    ></div>
                  </div>
                  <div
                    data-pencil-name="StatusBadge"
                    style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-shadow: 0px 3px 8px #16181D14; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 28px; justify-content: center; left: 154px; position: absolute; top: 12px; width: 28px; z-index: 5"
                  >
                    <svg
                      data-pencil-name="StatusIcon"
                      data-icon-name="hourglass"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M2.82666 0.58789q-0.23584 0.04102-0.38281 0.24609-0.14697 0.20166-0.09229 0.44092 0.01367 0.0957 0.04785 0.16748 0.0376 0.06836 0.1128 0.14014 0.07861 0.06836 0.15381 0.10596 0.07861 0.03418 0.14013 0.04101 0.06494 0.00684 0.33155 0.02051l0.3623 0 0 0.99463q0 0.99463 0.02734 1.14844 0.04102 0.2666 0.15381 0.48877 0.09912 0.18115 0.28711 0.39306 0.19141 0.2085 1.05615 1.07666l1.14844 1.14844-1.14844 1.14844q-0.86475 0.86816-1.05615 1.08008-0.18799 0.2085-0.28711 0.38964-0.11279 0.22217-0.15381 0.48877-0.02734 0.15381-0.02734 1.14844l0 0.99463-0.3623 0q-0.2666 0.01367-0.33155 0.02051-0.06152 0.00684-0.1333 0.03418-0.28027 0.12646-0.32812 0.42041-0.04785 0.29395 0.16064 0.51953 0.12646 0.12646 0.30762 0.15381 0.09912 0.02734 4.18701 0.02734 4.08789 0 4.18701-0.02734 0.23584-0.04102 0.36914-0.23584 0.1333-0.19824 0.09229-0.4375-0.01367-0.0957-0.05127-0.16406-0.03418-0.07178-0.11279-0.14014-0.0752-0.07178-0.15381-0.10596-0.07519-0.0376-0.14014-0.04443-0.06152-0.00684-0.32813-0.02051l-0.3623 0 0-0.99463q0-0.99463-0.02734-1.14844-0.04101-0.2666-0.15381-0.47509-0.09912-0.19482-0.29053-0.40332-0.18799-0.21191-1.05273-1.08008l-1.13477-1.14844 1.13477-1.14844q0.86475-0.86816 1.05273-1.07666 0.19141-0.21191 0.29053-0.40674 0.11279-0.2085 0.15381-0.47509 0.02734-0.15381 0.02734-1.14844l0-0.99463 0.3623 0q0.2666-0.01367 0.32813-0.02051 0.06494-0.00684 0.14014-0.04101 0.07861-0.0376 0.15381-0.10596 0.07861-0.07178 0.11279-0.14014 0.0376-0.07178 0.05127-0.18115 0.04101-0.19824-0.05127-0.36572-0.08887-0.16748-0.28369-0.2666l-0.09913-0.04102-4.15966 0q-4.14258 0-4.22803 0z m6.49756 2.14307q0 0.71436 0 0.86133 0 0.14697-0.02735 0.21875-0.02734 0.06836-0.19824 0.24951-0.16748 0.18115-0.96386 0.98095l-1.13477 1.13135-1.12109-1.13135q-0.81006-0.7998-0.98096-0.98095-0.16748-0.18115-0.19483-0.24951-0.02734-0.07178-0.02734-0.22559l0-1.83545 4.64844 0 0 0.98096z m-1.18945 6.22754q0.79639 0.81348 0.96386 0.98779 0.1709 0.17432 0.19824 0.24609 0.02734 0.06836 0.02735 0.22217l0 1.83545-4.64844 0 0-1.83545q0-0.15381 0.02734-0.22217 0.02734-0.07178 0.19483-0.24609 0.1709-0.17432 0.96728-0.98779 1.12109-1.11768 1.13477-1.11768 0.01367 0 1.13477 1.11768z"
                        fill="#59606E"
                      ></path>
                    </svg>
                  </div>
                  <svg
                    data-pencil-name="PhotoGlyph"
                    data-icon-name="image"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; height: 24px; left: 88px; position: absolute; top: 56px; width: 24px; z-index: 6"
                  >
                    <path
                      d="M2.60449 1.20313q-0.50586 0.08545-0.87842 0.43749-0.36914 0.34863-0.50927 0.86475-0.02734 0.08545-0.02735 0.71436l-0.01367 3.78027 0.01367 3.78027q0 0.62891 0.02735 0.71436 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.71436 0.02735l3.78027 0.01367 3.78027-0.01367q0.62891 0 0.71436-0.02735 0.48877-0.14014 0.81689-0.46826 0.33154-0.33154 0.47168-0.82031 0.02734-0.08545 0.02735-0.71436l0.01367-3.78027-0.01367-3.78027q0-0.62891-0.02735-0.71436-0.12646-0.48877-0.458-0.81689-0.32813-0.33154-0.80323-0.47168l-0.14013-0.04102-4.32715 0q-4.3374 0-4.4502 0.02734z m8.70899 1.17578q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 4.54932-0.46142-0.44775q-0.46143-0.46143-0.61524-0.56055-0.2666-0.18115-0.5332-0.24951-0.16748-0.04443-0.42041-0.04444-0.25293 0-0.43408 0.04444-0.33496 0.06836-0.64258 0.30762-0.11279 0.08203-2.71729 2.68652l-2.60449 2.60449-0.16748 0q-0.22217 0-0.3418-0.04101-0.11963-0.04443-0.23242-0.14014-0.06836-0.07178-0.12646-0.18115l-0.04102-0.09913 0-8.42871 0.04102-0.09912q0.07178-0.14014 0.18798-0.229 0.11963-0.09229 0.25977-0.11963 0.08545 0 4.22803 0l4.15967 0 0.09912 0.04102z m-6.34375 1.14843q-0.3623 0.05811-0.69385 0.2837-0.32813 0.22217-0.52295 0.52978-0.2666 0.46143-0.24609 0.97412 0.02051 0.50928 0.31445 0.93652 0.29395 0.42725 0.78613 0.62208 0.43408 0.16748 0.89551 0.10595 0.46143-0.06494 0.82373-0.35205 0.36572-0.28711 0.54688-0.71777 0.12646-0.32471 0.12646-0.65967 0-0.33496-0.12646-0.64258-0.18115-0.43408-0.54004-0.72119-0.35547-0.28711-0.8169-0.35889-0.28027-0.04102-0.54687 0z m0.5332 1.20313q0.18115 0.08545 0.2666 0.2666 0.02734 0.05811 0.04102 0.09912 0.01367 0.04102 0.01367 0.15381 0 0.11279-0.01367 0.15381-0.01367 0.04102-0.04102 0.09912-0.09912 0.18115-0.2666 0.28027-0.08545 0.04102-0.25293 0.04102-0.16748 0-0.25293-0.04102-0.16748-0.09912-0.2666-0.28027-0.02734-0.05811-0.04102-0.09912-0.01367-0.04102-0.01367-0.15381 0-0.11279 0.01367-0.15381 0.01367-0.04102 0.04102-0.09912 0.11279-0.22217 0.36572-0.30762 0.04102-0.01367 0.18115-0.00683 0.14014 0.00684 0.22559 0.04785z m4.36816 2.50879q0.08203 0.04102 0.93653 0.90918l0.86816 0.85449-0.01367 2.21142-0.04102 0.09913q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-3.19238 0.02734l-3.07959 0 2.17041-2.18408q2.18408-2.18408 2.23877-2.21143 0.11279-0.07178 0.2666-0.07861 0.15381-0.00684 0.28027 0.0376z"
                      fill="#9AA3B2"
                    ></path>
                  </svg>
                </div>
                <div
                  data-pencil-name="Caption"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; gap: 3px; height: fit-content; justify-content: flex-start; left: 0px; position: absolute; top: 248px; width: 200px; z-index: 1"
                >
                  <div
                    data-pencil-name="IndexRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <div
                      data-pencil-name="IndexRule"
                      style="background-color: #2B5BD7; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 16px"
                    ></div>
                    <div
                      data-pencil-name="IndexLabel"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 9.5px; font-style: normal; font-weight: 400; letter-spacing: 1px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      04
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    lecture-scan.heic
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    3.4 MB · page 4
                  </div>
                  <div
                    data-pencil-name="StatusRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <div
                      data-pencil-name="StatusDot"
                      style="background-color: #8A909C; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 6px"
                    ></div>
                    <div
                      data-pencil-name="StatusLabel"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Queued
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="si-preview"
                data-pencil-name="File notes-whiteboard.jpg" data-clickable @click="$router.push('/document-detail')"
                style="box-sizing: border-box; height: 312px; left: 1120px; position: absolute; top: 18px; transform-origin: top left; transform: rotate(1.6deg); width: 200px; z-index: 4"
              >
                <div
                  data-pencil-name="Page"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #B3261E33; box-shadow: 0px 12px 26px #1A2B4A22; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; height: 240px; justify-content: flex-start; left: 0px; padding: 20px; position: absolute; top: 0px; width: 200px; z-index: 0"
                >
                  <div
                    data-pencil-name="Board"
                    style="background-color: #F4F6F9; border-radius: 6px; border: 1px solid #E4E8EF; box-sizing: border-box; flex-shrink: 0; height: 100px; position: relative; width: 160px; z-index: 0"
                  >
                    <div
                      data-pencil-name="Stroke"
                      style="background-color: #C7D0DE; border-radius: 3px; box-sizing: border-box; height: 5px; left: 14px; position: absolute; top: 18px; width: 72px; z-index: 0"
                    ></div>
                    <div
                      data-pencil-name="Stroke"
                      style="background-color: #DCE0E7; border-radius: 3px; box-sizing: border-box; height: 5px; left: 14px; position: absolute; top: 34px; width: 112px; z-index: 1"
                    ></div>
                    <div
                      data-pencil-name="Stroke"
                      style="background-color: #00000000; border-radius: 50%; box-sizing: border-box; height: 34px; left: 110px; outline-offset: -1px; outline: 2px solid #C7D0DE; position: absolute; top: 54px; width: 34px; z-index: 2"
                    ></div>
                    <div
                      data-pencil-name="Stroke"
                      style="background-color: #DCE0E7; border-radius: 3px; box-sizing: border-box; height: 5px; left: 14px; position: absolute; top: 60px; width: 82px; z-index: 3"
                    ></div>
                    <div
                      data-pencil-name="Stroke"
                      style="background-color: #DCE0E7; border-radius: 3px; box-sizing: border-box; height: 5px; left: 14px; position: absolute; top: 76px; width: 56px; z-index: 4"
                    ></div>
                  </div>
                  <div
                    data-pencil-name="DocTitle"
                    style="background-color: #C7D0DE; border-radius: 3px; box-sizing: border-box; flex-shrink: 0; height: 8px; position: relative; width: 96px; z-index: 1"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 150px; z-index: 2"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 128px; z-index: 3"
                  ></div>
                  <div
                    data-pencil-name="DocLine"
                    style="background-color: #E4E8EF; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 5px; position: relative; width: 104px; z-index: 4"
                  ></div>
                  <div
                    data-pencil-name="StatusBadge"
                    style="align-items: center; background-color: #FBE9E8; border-radius: 9999px; box-shadow: 0px 3px 8px #16181D14; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 28px; justify-content: center; left: 154px; position: absolute; top: 12px; width: 28px; z-index: 5"
                  >
                    <svg
                      data-pencil-name="StatusIcon"
                      data-icon-name="circle-x"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                    >
                      <path
                        d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-2.56348 2.89843q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25293 0.05127 0.08203 0.75196 0.79639l0.69726 0.70068-0.69726 0.70068q-0.70068 0.71436-0.75196 0.79981-0.04785 0.08203-0.04785 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04785 0.08545-0.05127 0.79981-0.75196l0.70068-0.69726 0.70068 0.69726q0.71436 0.70068 0.79639 0.75196 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-0.74854-0.79981l-0.68359-0.70068 0.68359-0.70068q0.70068-0.71436 0.74854-0.79639 0.05127-0.08545 0.05127-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367l-0.01367 0q-0.14014 0-0.21875 0.0376-0.0752 0.03418-0.24268 0.18799-0.12646 0.10938-0.54687 0.52978l-0.72803 0.7417-0.70068-0.69726q-0.43408-0.43408-0.56055-0.54688-0.18115-0.16748-0.25977-0.20166-0.0752-0.0376-0.20849-0.04443-0.1333-0.00684-0.17432 0.00683z"
                        fill="#B3261E"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-pencil-name="Caption"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; gap: 3px; height: fit-content; justify-content: flex-start; left: 0px; position: absolute; top: 248px; width: 200px; z-index: 1"
                >
                  <div
                    data-pencil-name="IndexRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <div
                      data-pencil-name="IndexRule"
                      style="background-color: #2B5BD7; border-radius: 2px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 16px"
                    ></div>
                    <div
                      data-pencil-name="IndexLabel"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 9.5px; font-style: normal; font-weight: 400; letter-spacing: 1px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      05
                    </div>
                  </div>
                  <div
                    data-pencil-name="FileName"
                    style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    notes-whiteboard.jpg
                  </div>
                  <div
                    data-pencil-name="FileMeta"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    2.2 MB · page 5
                  </div>
                  <div
                    data-pencil-name="StatusRow"
                    style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
                  >
                    <div
                      data-pencil-name="StatusDot"
                      style="background-color: #B3261E; border-radius: 50%; box-sizing: border-box; flex-shrink: 0; height: 6px; width: 6px"
                    ></div>
                    <div
                      data-pencil-name="StatusLabel"
                      style='box-sizing: border-box; color: #B3261E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Couldn't read file
                    </div>
                    <div
                      data-pencil-name="RetryLabel"
                      style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      · Retry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref } from 'vue'
import { uploadScanFiles } from '@/composables/useScanUpload'

const laneRef = ref(null)
const dragActive = ref(false)
const tapping = ref(false)
const ripples = ref([])
const pulses = ref([])
const flyers = ref([])

let dragDepth = 0
let seq = 0
let tapTimer = null

const uid = () => ++seq

function lanePoint(e) {
  const rect = laneRef.value.getBoundingClientRect()
  return { x: e.clientX - rect.left, y: e.clientY - rect.top }
}

function spawnRipple(pt) {
  const id = uid()
  ripples.value.push({ id, x: pt.x, y: pt.y })
  setTimeout(() => { ripples.value = ripples.value.filter(r => r.id !== id) }, 820)
}

function spawnPulse(pt, delay = 0) {
  setTimeout(() => {
    const id = uid()
    pulses.value.push({ id, x: pt.x, y: pt.y })
    setTimeout(() => { pulses.value = pulses.value.filter(p => p.id !== id) }, 480)
  }, delay)
}

// Haptic feedback simulation: a short visual "tap" pulse on the container.
function pulseHaptic() {
  nextTick(() => {
    tapping.value = true
    clearTimeout(tapTimer)
    tapTimer = setTimeout(() => { tapping.value = false }, 300)
  })
}

function onDragEnter(e) {
  dragDepth += 1
  if (dragDepth === 1) {
    dragActive.value = true
    spawnPulse(lanePoint(e))
  }
}

function onDragLeave() {
  dragDepth = Math.max(0, dragDepth - 1)
  if (dragDepth === 0) dragActive.value = false
}

// The first queued page in the Pending files contact sheet.
function queueSlotPoint() {
  const slot = document.querySelector('[data-pencil-name="ContactSheet"] [data-pencil-name^="File "]')
  const rect = slot && slot.getBoundingClientRect()
  if (rect && rect.width) return { x: rect.left + rect.width / 2, y: rect.top + 120 }
  return { x: window.innerWidth - 220, y: window.innerHeight - 240 }
}

// Damped-spring keyframes. bounce is the damping ratio: 0.6 ≈ 9.5% overshoot.
function springFrames(from, to, bounce, duration) {
  const steps = 48
  const zeta = Math.min(0.98, Math.max(0.06, bounce))
  const w0 = (2 * Math.PI * 2.6) / (duration / 1000)
  const wd = w0 * Math.sqrt(1 - zeta * zeta)
  const frames = []
  for (let i = 0; i <= steps; i++) {
    const off = i / steps
    const t = off * (duration / 1000)
    const decay = Math.exp(-zeta * w0 * t)
    const p = 1 - decay * (Math.cos(wd * t) + ((zeta * w0) / wd) * Math.sin(wd * t))
    frames.push({
      offset: off,
      transform: `translate3d(${from.x + (to.x - from.x) * p}px, ${from.y + (to.y - from.y) * p}px, 0) scale(${0.34 + 0.66 * p})`,
      opacity: off < 0.8 ? 1 : Math.max(0, 1 - (off - 0.8) / 0.2),
    })
  }
  return frames
}

async function spawnFlyer(from, to) {
  const id = uid()
  flyers.value.push({ id })
  await nextTick()
  const el = document.querySelector(`[data-flyer-id="${id}"]`)
  if (el) {
    el.animate(springFrames(from, to, 0.6, 760), {
      duration: 760,
      easing: 'linear',
      fill: 'forwards',
    })
  }
  setTimeout(() => { flyers.value = flyers.value.filter(f => f.id !== id) }, 860)
}

function onDrop(e) {
  const pt = lanePoint(e)
  dragDepth = 0
  dragActive.value = false
  spawnRipple(pt)
  spawnPulse(pt, 0)
  spawnPulse(pt, 120)
  pulseHaptic()
  const files = Array.from((e.dataTransfer && e.dataTransfer.files) || [])
  if (files.length) spawnFlyer({ x: e.clientX, y: e.clientY }, queueSlotPoint())
}

// ---- Choose files / Choose a folder：唤起原生选择器 ----
const fileInputRef = ref(null)
const folderInputRef = ref(null)

function openFilePicker() {
  fileInputRef.value?.click()
}
function openFolderPicker() {
  folderInputRef.value?.click()
}

// 选择完成 → 交给预留接口（接后端时只替换 uploadScanFiles 实现）
async function onPickFiles(kind, e) {
  const files = Array.from(e.target.files || [])
  e.target.value = '' // 允许重复选择同一批文件
  if (!files.length) return
  await uploadScanFiles(files, { kind })
}

// ---- 待处理文件卡 3D 倾斜悬浮（与 library 已导入卡的交互一致）----
const MAX_TILT = 5 // 最大 ±5deg
const LERP = 0.1 // 跟随插值系数
const SPRING_K = 200 // 回弹刚度
const SPRING_DAMPING = 20 // 回弹阻尼
const RESET_MS = 400 // 移出后回落到位的总时长
const CARD = '.si-preview'

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
      // 设计稿自带 rotate(...)，倾斜时需叠加、回落后需还原
      base: card.style.transform || '',
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

// 移出卡片：立即取消 hover 态（4px 回落与边框回色走 200/240ms），倾斜走 400ms 弹簧
function release(card) {
  const s = stateOf(card)
  s.lerp = false
  s.resetStart = 0
  card.classList.remove('is-tilted')
}

function paint(s) {
  const tilt = `perspective(1000px) rotateX(${s.rotX.toFixed(3)}deg) rotateY(${s.rotY.toFixed(3)}deg)`
  s.card.style.transform = s.base ? `${tilt} ${s.base}` : tilt
  // 阴影随倾斜角动态偏移：水平随 rotateY、垂直随 rotateX
  s.card.style.boxShadow = `${(s.rotY * 2).toFixed(2)}px ${(s.rotX * 2).toFixed(2)}px 24px rgba(22, 24, 29, 0.16)`
  if (s.cover) {
    // 纸面轻微放大 + 与倾斜反向的视差
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
      card.style.transform = s.base
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
.drop-lane {
  --dz-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --dz-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* corner brackets: elastic retract, springy expansion */
.drop-lane [data-pencil-name^="Corner"] {
  transition: transform 460ms var(--dz-elastic);
  will-change: transform;
}
.drop-lane.is-dragging [data-pencil-name^="Corner"] {
  transition: transform 520ms var(--dz-spring);
}
.drop-lane.is-dragging [data-pencil-name="CornerTLh"],
.drop-lane.is-dragging [data-pencil-name="CornerTLv"] { transform: translate(-8px, -8px); }
.drop-lane.is-dragging [data-pencil-name="CornerTRh"],
.drop-lane.is-dragging [data-pencil-name="CornerTRv"] { transform: translate(8px, -8px); }
.drop-lane.is-dragging [data-pencil-name="CornerBLh"],
.drop-lane.is-dragging [data-pencil-name="CornerBLv"] { transform: translate(-8px, 8px); }
.drop-lane.is-dragging [data-pencil-name="CornerBRh"],
.drop-lane.is-dragging [data-pencil-name="CornerBRv"] { transform: translate(8px, 8px); }

/* blue tint: background gradient fades 0% -> 20% opacity */
.dz-tint {
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: 24px;
  pointer-events: none;
  opacity: 0;
  background: linear-gradient(-93.453deg, #2B5BD7 4.872%, #8FB0FF 95.128%);
  transition: opacity 340ms ease;
}
.drop-lane.is-dragging .dz-tint { opacity: 0.2; }

/* container border: 1px gray -> 3px indigo, elastic retract / spring expand */
.dz-border {
  position: absolute;
  inset: 0;
  z-index: 20;
  border-radius: 24px;
  pointer-events: none;
  border: 1px solid #E3E5EA;
  transition: border-width 460ms var(--dz-elastic), border-color 300ms ease;
}
.drop-lane.is-dragging .dz-border {
  border-width: 3px;
  border-color: #2B5BD7;
  transition: border-width 480ms var(--dz-spring), border-color 220ms ease;
}

.dz-ripples,
.dz-pulses {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.dz-ripples { z-index: 1; }
.dz-pulses { z-index: 2; }

/* drop ripple: scale 0 -> 200px, fade out over 800ms */
.dz-ripple {
  position: absolute;
  width: 200px;
  height: 200px;
  margin: -100px 0 0 -100px;
  border-radius: 50%;
  background: radial-gradient(circle, #2B5BD75C 0%, #2B5BD729 46%, #2B5BD700 70%);
  animation: dz-ripple 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes dz-ripple {
  from { transform: scale(0); opacity: 1; }
  to { transform: scale(1); opacity: 0; }
}

/* haptic pulse */
.dz-pulse {
  position: absolute;
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  border-radius: 50%;
  border: 3px solid #2B5BD7A6;
  animation: dz-pulse 460ms ease-out forwards;
}
@keyframes dz-pulse {
  from { transform: scale(0.25); opacity: 0.9; }
  to { transform: scale(1.6); opacity: 0; }
}

@keyframes dz-tap {
  0% { transform: scale(1); }
  30% { transform: scale(0.992); }
  100% { transform: scale(1); }
}
.drop-lane.is-tapping { animation: dz-tap 280ms ease-out; }

/* thumbnail flying from the cursor to the queue slot */
.dz-flyers {
  position: fixed;
  inset: 0;
  z-index: 90;
  pointer-events: none;
}
.dz-flyer {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 56px;
  height: 72px;
  margin: -36px 0 0 -28px;
  padding: 10px 9px;
  border: 1px solid #1A2B4A22;
  border-radius: 7px;
  background: #FFFFFF;
  box-shadow: 0 12px 26px #1A2B4A22;
  will-change: transform, opacity;
}
.dz-flyer-bar {
  height: 6px;
  width: 70%;
  border-radius: 3px;
  background: #C7D0DE;
}
.dz-flyer-line {
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background: #E4E8EF;
}
.dz-flyer-line.short { width: 62%; }

/* Choose files / Choose a folder 对应的原生选择器：隐藏，仅由按钮触发 */
.si-file-input {
  display: none;
}

/* ---- 待处理文件预览卡：3D 倾斜悬浮（对齐 library 已导入卡）---- */
.si-preview {
  perspective: 1000px;
  translate: 0 0;
  transition: translate 200ms ease-out;
}
.si-preview.is-tilted {
  translate: 0 -4px;
  will-change: transform;
}
.si-preview [data-pencil-name="Page"] {
  transition: transform 200ms ease-out, border-color 240ms ease;
}
.si-preview.is-tilted [data-pencil-name="Page"] {
  border-color: #2b5bd7 !important;
  will-change: transform;
}
</style>
