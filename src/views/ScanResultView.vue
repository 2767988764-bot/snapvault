<template>
      <div class="page-root"
        data-pencil-name="03 · Scan Result"
        style="align-items: flex-start; background-image: url('/assets/bg-0.webp'); background-repeat: no-repeat; background-size: 100% 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 0px; height: 900px; justify-content: flex-start; overflow: hidden; position: relative; width: 1440px"
      >
        <div data-pencil-name="TopNavSpacer" style="height: 64px; flex-shrink: 0; width: 100%"></div>
        <div
          data-pencil-name="ResultBar"
          style="align-items: center; background-color: #FFFFFF; border-color: #E3E5EA; border-style: solid; border-width: 0px 0px 1px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 56px; justify-content: space-between; padding: 0px 24px; width: 100%"
        >
          <div
            data-pencil-name="ResultBarLeft"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 14px; height: fit-content; justify-content: flex-start; width: fit-content"
          >
            <div
              data-pencil-name="Btn/Ghost" data-clickable @click="$router.push('/scan-import')"
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
                Back
              </div>
            </div>
            <div
              data-pencil-name="CompletePill"
              style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 5px 11px; width: fit-content"
            >
              <svg
                data-pencil-name="CompleteIcon"
                data-icon-name="check"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                  fill="#177245"
                ></path>
              </svg>
              <div
                data-pencil-name="CompleteText"
                style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Scan complete · 5 pages
              </div>
            </div>
            <div
              data-pencil-name="ResultBarMeta"
              style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Processed in 24s · nothing left this device
            </div>
          </div>
          <div
            data-pencil-name="Btn/Ghost" data-clickable @click="$router.push('/scan-import')"
            style="align-items: center; background-color: #FFFFFF00; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
          >
            <svg
              data-pencil-name="BtnGhostIcon"
              data-icon-name="plus"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
            >
              <path
                d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                fill="#59606E"
              ></path>
            </svg>
            <div
              data-pencil-name="BtnGhostLabel"
              style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Scan another
            </div>
          </div>
        </div>
        <div
          data-pencil-name="ResultBody"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 100%"
        >
          <div
            data-pencil-name="ThumbRail"
            style="align-items: center; background-color: #ffffffff; border-color: #E3E5EA; border-style: solid; border-width: 0px 1px 0px 0px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 12px; height: 100%; justify-content: flex-start; padding: 16px 0px; width: 112px"
          >
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 2px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 92px; justify-content: center; width: 72px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 68px; justify-content: flex-start; padding: 10px 9px; width: 50px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 26px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 33px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 33px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 16px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #2B5BD7; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                1
              </div>
            </div>
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 92px; justify-content: center; width: 72px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 68px; justify-content: flex-start; padding: 10px 9px; width: 50px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 26px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 33px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 33px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 16px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                2
              </div>
            </div>
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 92px; justify-content: center; width: 72px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 68px; justify-content: flex-start; padding: 10px 9px; width: 50px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 26px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 33px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 33px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 16px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                3
              </div>
            </div>
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 92px; justify-content: center; width: 72px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 68px; justify-content: flex-start; padding: 10px 9px; width: 50px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 26px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 33px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 33px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 16px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                4
              </div>
            </div>
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 92px; justify-content: center; width: 72px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 68px; justify-content: flex-start; padding: 10px 9px; width: 50px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 26px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 33px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 33px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 16px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                5
              </div>
            </div>
          </div>
          <div
            data-pencil-name="PreviewPane"
            style="align-items: center; background-color: #f5f6f76b; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 0px; height: 100%; justify-content: flex-start; padding: 16px 0px"
          >
            <div
              data-pencil-name="PreviewToolbar"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 44px; justify-content: space-between; padding: 0px 28px; width: 100%"
            >
              <div
                data-pencil-name="PreviewToolbarLeft"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="PreviewPageNum"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Page 1 of 5
                </div>
                <div
                  data-pencil-name="PreviewMode"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Processed
                </div>
              </div>
              <div
                data-pencil-name="PreviewToolbarRight"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="Btn/Ghost" data-clickable @click="$router.push('/scan-import')"
                  style="align-items: center; background-color: #FFFFFF00; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
                >
                  <svg
                    data-pencil-name="BtnGhostIcon"
                    data-icon-name="copy"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                  >
                    <path
                      d="M2.15674 0.60156q-0.29395 0.02734-0.58789 0.16748-0.29395 0.14014-0.50586 0.36573-0.30762 0.32129-0.43408 0.78271l-0.04102 0.16748 0 6.33008 0.04102 0.16748q0.22559 0.78271 0.91259 1.13477 0.2085 0.10938 0.46827 0.16748 0.25977 0.05469 0.41357 0.02734 0.24951-0.05469 0.38965-0.24268 0.14014-0.19141 0.08545-0.44433-0.02734-0.16748-0.16065-0.30762-0.1333-0.14014-0.3999-0.16748-0.39307-0.04102-0.5332-0.34863l-0.04102-0.09912 0-6.1045 0.04102-0.09912q0.09912-0.19482 0.29394-0.29394l0.09912-0.04102 6.1045 0 0.09912 0.04102q0.30762 0.14014 0.34863 0.51953 0.02734 0.2666 0.18115 0.42041 0.12646 0.12646 0.30762 0.15381 0.29395 0.05469 0.50586-0.15381 0.11279-0.11279 0.14697-0.24609 0.03418-0.1333 0.02051-0.32813-0.08545-0.646-0.52637-1.07666-0.44092-0.43408-1.08349-0.49219-0.16748-0.02734-3.06592-0.02734-2.89844 0-3.07959 0.02734z m3.5 3.5q-0.29395 0.02734-0.58789 0.16748-0.29395 0.14014-0.50586 0.3794-0.30762 0.32129-0.43408 0.79638l-0.04102 0.1709 0 6.29932 0.04102 0.16748q0.07178 0.25293 0.18115 0.44092 0.11279 0.18799 0.29394 0.37256 0.18457 0.18115 0.37256 0.29394 0.18799 0.10938 0.44092 0.18115l0.16748 0.04102 6.33008 0 0.16748-0.04102q0.25293-0.07178 0.44092-0.18115 0.18799-0.11279 0.36914-0.29394 0.18457-0.18457 0.29394-0.37256 0.11279-0.18799 0.18457-0.44092l0.04102-0.16748 0-6.33008-0.04102-0.16748q-0.12646-0.46143-0.43408-0.78271-0.44775-0.4751-1.13476-0.54688-0.16748-0.01367-3.06592-0.01367-2.89844 0-3.07959 0.02734z m6.24463 1.20313q0.19482 0.09912 0.29394 0.29394l0.04102 0.09912 0 6.1045-0.02735 0.08545q-0.12646 0.26318-0.37939 0.33496-0.08203 0.02734-3.07959 0.02734-2.99756 0-3.07959-0.02734-0.25293-0.07178-0.37939-0.33496l-0.02735-0.08545 0-6.1045 0.04102-0.09912q0.11279-0.24951 0.37939-0.32129 0.08545-0.02734 3.10694-0.02734l3.01123 0.01367 0.09912 0.04102z"
                      fill="#59606E"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="BtnGhostLabel"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Compare original
                  </div>
                </div>
                <div
                  data-pencil-name="ZoomControl"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 2px; height: fit-content; justify-content: flex-start; padding: 3px; width: fit-content"
                >
                  <div
                    data-pencil-name="ZoomBtn"
                    style="align-items: center; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 24px; justify-content: center; width: 26px"
                  >
                    <svg
                      data-pencil-name="ZoomIcon"
                      data-icon-name="minus"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
                    >
                      <path
                        d="M2.73096 6.45313q-0.23926 0.08545-0.34522 0.3247-0.10254 0.23584-0.00683 0.46143 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.18457 0.12647l0.09571 0.02734 8.40136 0 0.09571-0.02734q0.09912-0.04443 0.18115-0.12647 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-4.22803 0q-4.22803 0-4.28271 0.02735z"
                        fill="#59606E"
                      ></path>
                    </svg>
                  </div>
                  <div
                    data-pencil-name="ZoomValue"
                    style='box-sizing: border-box; color: #16181D; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    100%
                  </div>
                  <div
                    data-pencil-name="ZoomBtn"
                    style="align-items: center; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 24px; justify-content: center; width: 26px"
                  >
                    <svg
                      data-pencil-name="ZoomIcon"
                      data-icon-name="plus"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
                    >
                      <path
                        d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                        fill="#59606E"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="PreviewStage"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: center; width: 100%"
            >
              <div
                data-pencil-name="PreviewPage"
                style="align-items: flex-start; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #00000012; box-shadow: 0px 16px 40px #1A2B4A1F; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 13px; height: 566px; justify-content: flex-start; padding: 38px; width: 432px"
              >
                <div
                  data-pencil-name="DocHeading"
                  style="box-sizing: border-box; color: #1A1A1A; font-family: Manrope, system-ui, sans-serif; font-size: 20px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: 24px; text-align: left; white-space: nowrap"
                >
                  Computer Vision Lecture 03
                </div>
                <div
                  data-pencil-name="DocSub"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  ITSE · Autumn 2026 · Dr. Meyer
                </div>
                <div
                  data-pencil-name="TextBlock"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: 100%"
                >
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 356px"
                  ></div>
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 250px"
                  ></div>
                </div>
                <div
                  data-pencil-name="TextBlock"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: 100%"
                >
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 356px"
                  ></div>
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 250px"
                  ></div>
                </div>
                <div
                  data-pencil-name="TextBlock"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: 100%"
                >
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 356px"
                  ></div>
                </div>
                <div
                  data-pencil-name="FigureBox"
                  style="align-items: center; background-color: #EEF1F6; border-radius: 4px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 8px; height: 132px; justify-content: center; width: 100%"
                >
                  <svg
                    data-pencil-name="FigureIcon"
                    data-icon-name="image"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 22px; width: 22px"
                  >
                    <path
                      d="M2.60449 1.20313q-0.50586 0.08545-0.87842 0.43749-0.36914 0.34863-0.50927 0.86475-0.02734 0.08545-0.02735 0.71436l-0.01367 3.78027 0.01367 3.78027q0 0.62891 0.02735 0.71436 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.71436 0.02735l3.78027 0.01367 3.78027-0.01367q0.62891 0 0.71436-0.02735 0.48877-0.14014 0.81689-0.46826 0.33154-0.33154 0.47168-0.82031 0.02734-0.08545 0.02735-0.71436l0.01367-3.78027-0.01367-3.78027q0-0.62891-0.02735-0.71436-0.12646-0.48877-0.458-0.81689-0.32813-0.33154-0.80323-0.47168l-0.14013-0.04102-4.32715 0q-4.3374 0-4.4502 0.02734z m8.70899 1.17578q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 4.54932-0.46142-0.44775q-0.46143-0.46143-0.61524-0.56055-0.2666-0.18115-0.5332-0.24951-0.16748-0.04443-0.42041-0.04444-0.25293 0-0.43408 0.04444-0.33496 0.06836-0.64258 0.30762-0.11279 0.08203-2.71729 2.68652l-2.60449 2.60449-0.16748 0q-0.22217 0-0.3418-0.04101-0.11963-0.04443-0.23242-0.14014-0.06836-0.07178-0.12646-0.18115l-0.04102-0.09913 0-8.42871 0.04102-0.09912q0.07178-0.14014 0.18798-0.229 0.11963-0.09229 0.25977-0.11963 0.08545 0 4.22803 0l4.15967 0 0.09912 0.04102z m-6.34375 1.14843q-0.3623 0.05811-0.69385 0.2837-0.32813 0.22217-0.52295 0.52978-0.2666 0.46143-0.24609 0.97412 0.02051 0.50928 0.31445 0.93652 0.29395 0.42725 0.78613 0.62208 0.43408 0.16748 0.89551 0.10595 0.46143-0.06494 0.82373-0.35205 0.36572-0.28711 0.54688-0.71777 0.12646-0.32471 0.12646-0.65967 0-0.33496-0.12646-0.64258-0.18115-0.43408-0.54004-0.72119-0.35547-0.28711-0.8169-0.35889-0.28027-0.04102-0.54687 0z m0.5332 1.20313q0.18115 0.08545 0.2666 0.2666 0.02734 0.05811 0.04102 0.09912 0.01367 0.04102 0.01367 0.15381 0 0.11279-0.01367 0.15381-0.01367 0.04102-0.04102 0.09912-0.09912 0.18115-0.2666 0.28027-0.08545 0.04102-0.25293 0.04102-0.16748 0-0.25293-0.04102-0.16748-0.09912-0.2666-0.28027-0.02734-0.05811-0.04102-0.09912-0.01367-0.04102-0.01367-0.15381 0-0.11279 0.01367-0.15381 0.01367-0.04102 0.04102-0.09912 0.11279-0.22217 0.36572-0.30762 0.04102-0.01367 0.18115-0.00683 0.14014 0.00684 0.22559 0.04785z m4.36816 2.50879q0.08203 0.04102 0.93653 0.90918l0.86816 0.85449-0.01367 2.21142-0.04102 0.09913q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-3.19238 0.02734l-3.07959 0 2.17041-2.18408q2.18408-2.18408 2.23877-2.21143 0.11279-0.07178 0.2666-0.07861 0.15381-0.00684 0.28027 0.0376z"
                      fill="#AEB6C2"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="FigureCaption"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Figure 1 — planar mapping
                  </div>
                </div>
                <div
                  data-pencil-name="TextBlock"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: 100%"
                >
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 356px"
                  ></div>
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 300px"
                  ></div>
                </div>
                <div
                  data-pencil-name="TextBlock"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: 100%"
                >
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 356px"
                  ></div>
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 356px"
                  ></div>
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 300px"
                  ></div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="PageNav"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: 44px; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="PageNavBtn"
                style="align-items: center; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 28px; justify-content: center; width: 28px"
              >
                <svg
                  data-pencil-name="PageNavIcon"
                  data-icon-name="chevron-left"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                >
                  <path
                    d="M8.59619 2.93945q-0.08545 0.02734-0.19482 0.1128-0.14014 0.12646-0.53321 0.51611l-1.28857 1.2749q-1.81836 1.82178-1.86279 1.90723-0.04102 0.08203-0.04102 0.24951 0 0.16748 0.04785 0.25977 0.05127 0.08887 1.8628 1.9038 1.81494 1.81152 1.9038 1.8628 0.09229 0.04785 0.2461 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04102-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.23926 0-0.15381-0.0376-0.23584-0.03418-0.08545-0.11621-0.18457-0.16748-0.15381-0.39307-0.16748-0.14014 0-0.18115 0.01367z"
                    fill="#59606E"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="PageNavText"
                style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                1 / 5
              </div>
              <div
                data-pencil-name="PageNavBtn"
                style="align-items: center; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 28px; justify-content: center; width: 28px"
              >
                <svg
                  data-pencil-name="PageNavIcon"
                  data-icon-name="chevron-right"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                >
                  <path
                    d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                    fill="#59606E"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            data-pencil-name="ArchivePanel"
            style="align-items: flex-start; background-color: #FFFFFF; border-color: #E3E5EA; border-style: solid; border-width: 0px 0px 0px 1px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 13px; height: 100%; justify-content: flex-start; padding: 20px 22px; width: 380px"
          >
            <div
              data-pencil-name="ArchiveEyebrow"
              style='box-sizing: border-box; color: #2B5BD7; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 1.6px; line-height: normal; text-align: left; white-space: nowrap'
            >
              ARCHIVE
            </div>
            <div
              data-pencil-name="TitleLabel"
              style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Document title
            </div>
            <div
              data-pencil-name="TitleField"
              style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: space-between; padding: 11px 13px; width: 100%"
            >
              <div
                data-pencil-name="TitleValue"
                style='box-sizing: border-box; color: #16181D; flex-shrink: 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 280px'
              >
                Computer Vision Lecture 03
              </div>
              <svg
                data-pencil-name="TitleEdit"
                data-icon-name="pencil"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
              >
                <path
                  d="M11.00244 0.60156q-0.61523 0.04102-1.14502 0.43408-0.15381 0.09912-4.13232 4.0879-3.9751 3.98877-4.08789 4.1289-0.14014 0.19824-0.23242 0.45801-0.08887 0.25635-0.44776 1.46289-0.35547 1.20313-0.36914 1.28516-0.01367 0.12646 0.02051 0.27343 0.03418 0.14697 0.08887 0.2461 0.05811 0.09912 0.17089 0.20507 0.11279 0.10254 0.2085 0.14698 0.09912 0.04102 0.22559 0.06836 0.12646 0.02734 0.229 0.01367 0.10596-0.01367 1.38086-0.39307l1.24756-0.38964q0.26318-0.08545 0.3623-0.12647l0.01367-0.01367q0.14014-0.07178 0.32129-0.22559 0.25293-0.23926 1.08008-1.04932l2.92578-2.92578q3.98877-3.99219 4.10156-4.14599 0.18115-0.24951 0.29395-0.51612 0.23926-0.60156 0.11963-1.23046-0.11963-0.63232-0.56738-1.10743-0.35205-0.36572-0.81348-0.54687-0.46143-0.18115-0.99463-0.14014z m0.42041 1.17578q0.28027 0.05811 0.50928 0.29053 0.23242 0.229 0.29053 0.50928 0.08203 0.37598-0.08545 0.71435-0.04102 0.08203-0.1333 0.18116-0.08887 0.0957-0.42725 0.44775l-0.50244 0.50244-1.49707-1.49707 0.50244-0.50244q0.35205-0.33838 0.44775-0.42725 0.09912-0.09229 0.18116-0.1333 0.33838-0.16748 0.71435-0.08545z m-4.2417 6.53858q-3.07959 3.07959-3.14453 3.11719-0.06152 0.03418-1.0835 0.34863-1.02197 0.31445-1.03564 0.30762-0.01367-0.00683 0.29395-1.02881 0.30762-1.02197 0.33496-1.06983 0.03076-0.05127 3.12402-3.1582l3.09326-3.09326 1.4834 1.49707-3.06592 3.07959z"
                  fill="#8A909C"
                ></path>
              </svg>
            </div>
            <div
              data-pencil-name="DocFacts"
              style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              5 pages · 4.2 MB · Processed 09:41
            </div>
            <div
              data-pencil-name="FolderLabel"
              style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Folder
            </div>
            <div
              data-pencil-name="FolderField"
              style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: space-between; padding: 10px 13px; width: 100%"
            >
              <div
                data-pencil-name="FolderFieldLeft"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <svg
                  data-pencil-name="FolderFieldIcon"
                  data-icon-name="folder"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                >
                  <path
                    d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                    fill="#2B5BD7"
                  ></path>
                </svg>
                <div
                  data-pencil-name="FolderValue"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Courses
                </div>
              </div>
              <svg
                data-pencil-name="FolderChevron"
                data-icon-name="chevron-down"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M3.34619 4.68945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25977 0.05127 0.08887 1.8628 1.9038 1.81494 1.81152 1.9038 1.8628 0.09229 0.04785 0.25977 0.04785 0.16748 0 0.25635-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                  fill="#8A909C"
                ></path>
              </svg>
            </div>
            <div
              data-pencil-name="TagsLabel"
              style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Tags
            </div>
            <div
              data-pencil-name="TagsBox"
              style="align-items: flex-start; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 9px 11px; width: 100%"
            >
              <div
                data-pencil-name="TagsRow1"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="Chip/Tag"
                  style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 4px 10px; width: fit-content"
                >
                  <div
                    data-pencil-name="ChipTagDot"
                    style="align-items: flex-start; background-color: #177245; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 7px; justify-content: flex-start; width: 7px"
                  ></div>
                  <div
                    data-pencil-name="ChipTagText"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    ITSE
                  </div>
                </div>
                <div
                  data-pencil-name="Chip/Tag"
                  style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 4px 10px; width: fit-content"
                >
                  <div
                    data-pencil-name="ChipTagDot"
                    style="align-items: flex-start; background-color: #6B4FBB; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 7px; justify-content: flex-start; width: 7px"
                  ></div>
                  <div
                    data-pencil-name="ChipTagText"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    lecture
                  </div>
                </div>
                <div
                  data-pencil-name="Chip/Tag"
                  style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 4px 10px; width: fit-content"
                >
                  <div
                    data-pencil-name="ChipTagDot"
                    style="align-items: flex-start; background-color: #8A5A00; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 7px; justify-content: flex-start; width: 7px"
                  ></div>
                  <div
                    data-pencil-name="ChipTagText"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    2026
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="AddTagRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <svg
                  data-pencil-name="AddTagIcon"
                  data-icon-name="plus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
                >
                  <path
                    d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                    fill="#2B5BD7"
                  ></path>
                </svg>
                <div
                  data-pencil-name="AddTagText"
                  style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Add tag
                </div>
              </div>
            </div>
            <div
              data-pencil-name="QualityCard"
              style="align-items: flex-start; background-color: #EEEFF2; border-radius: 12px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 14px 15px; width: 100%"
            >
              <div
                data-pencil-name="QualityHeader"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: space-between; width: 100%"
              >
                <div
                  data-pencil-name="QualityTitle"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Scan quality
                </div>
                <div
                  data-pencil-name="QualityPill"
                  style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 5px; height: fit-content; justify-content: flex-start; padding: 3px 9px; width: fit-content"
                >
                  <svg
                    data-pencil-name="QualityPillIcon"
                    data-icon-name="check"
                    data-icon-set="lucide"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    style="box-sizing: border-box; flex-shrink: 0; height: 11px; width: 11px"
                  >
                    <path
                      d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                      fill="#177245"
                    ></path>
                  </svg>
                  <div
                    data-pencil-name="QualityPillText"
                    style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Good
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="QualityScoreRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="QualityScore"
                  style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 28px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: 28px; text-align: left; white-space: nowrap"
                >
                  94
                </div>
                <div
                  data-pencil-name="QualityScoreDenom"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  / 100
                </div>
                <div
                  data-pencil-name="QualityScoreNote"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Shadows reduced, edges are straight
                </div>
              </div>
              <div
                data-pencil-name="QualityRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: 100%"
              >
                <svg
                  data-pencil-name="QualityRowIcon"
                  data-icon-name="scan-line"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
                >
                  <path
                    d="M2.60449 1.20313q-0.43408 0.07178-0.77929 0.35205-0.3418 0.28027-0.50928 0.66992l-0.01367 0.01367q-0.08545 0.21191-0.10596 0.35205-0.02051 0.14014-0.02051 0.75537l0 0.05469q0 0.57422 0 0.69385 0 0.11963 0.03418 0.21191 0.0376 0.08887 0.11963 0.17432 0.18115 0.18115 0.42041 0.18115 0.23926 0 0.40674-0.16748l0.01367-0.01367q0.08203-0.08545 0.10938-0.14014 0.03076-0.05811 0.03076-0.23926 0.01367-0.11279 0.01367-0.54687l0.01367-0.76905 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 0.76905-0.01367q0.43408 0 0.54687-0.01367 0.18115 0 0.23584-0.02735 0.05811-0.03076 0.14356-0.11279l0.01367-0.01367q0.16748-0.16748 0.16748-0.40674 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.16748-0.12646l-0.08545-0.04102-0.75537 0q-0.76904 0-0.88184 0.02735z m7.12647-0.00001q-0.18457 0.05811-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.16748 0.40674l0.01367 0.01367q0.08545 0.08203 0.14014 0.11279 0.05811 0.02734 0.23926 0.02735 0.11279 0.01367 0.54687 0.01367l0.76904 0.01367 0.09913 0.04102q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 0.76905q0 0.43408 0.01367 0.54687 0 0.18115 0.02735 0.23926 0.03076 0.05469 0.11279 0.14014l0.01367 0.01367q0.12647 0.12646 0.30078 0.16064 0.17432 0.03418 0.34522-0.03418 0.0957-0.05811 0.17773-0.14013 0.08545-0.08545 0.11963-0.17432 0.0376-0.09229 0.0376-0.21191 0-0.11963 0-0.69385 0-0.57422-0.00684-0.7041-0.00684-0.1333-0.03418-0.21875-0.25293-0.81348-0.98095-1.14844-0.14014-0.06836-0.28028-0.11279-0.09912-0.02734-0.23242-0.03418-0.12988-0.00684-0.7041-0.00684-0.7998 0-0.85449 0.02734z m-5.85157 5.25q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14014 0 0.15381 0.04102 0.25293 0.11279 0.2085 0.3247 0.29394l0.09571 0.02735 6.0498 0 0.0957-0.02735q0.21192-0.08545 0.32471-0.29394 0.04102-0.09912 0.04102-0.25293 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.4751-0.0376l-2.65918 0-2.64551 0q-0.42041 0.01367-0.4751 0.02734z m-2.22851 2.89844q-0.15381 0.01367-0.27344 0.11963-0.11621 0.10596-0.17432 0.23242-0.02734 0.08203-0.02734 0.20166 0 0.11963 0 0.69385 0 0.57422 0.00684 0.70752 0.00684 0.12988 0.03418 0.21533 0.29395 0.96729 1.26123 1.26123 0.08545 0.02734 0.21533 0.03418 0.1333 0.00684 0.70752 0.00684 0.57422 0 0.69385 0 0.11963 0 0.20849-0.03418 0.09229-0.0376 0.17432-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394-0.05811-0.02734-0.16406-0.03418-0.10254-0.00684-0.66309-0.01367-0.56055-0.00684-0.68018-0.02051-0.11621-0.01367-0.21533-0.07178-0.14014-0.0957-0.22558-0.26318l-0.04102-0.09913-0.02734-1.34326q0-0.14014-0.02735-0.18457-0.08545-0.18115-0.25976-0.27685-0.17432-0.09912-0.37256-0.05811z m10.5 0q-0.18115 0.02734-0.32129 0.16748-0.08203 0.08545-0.11279 0.15039-0.02734 0.06152-0.02735 0.22901-0.01367 0.12646-0.01367 0.56054l-0.01367 0.75537-0.04102 0.09913q-0.08545 0.16748-0.22558 0.26318-0.09912 0.05811-0.21875 0.07178-0.11621 0.01367-0.67676 0.02051-0.56055 0.00684-0.6665 0.01367-0.10254 0.00684-0.16065 0.03418-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.17432 0.11963 0.09229 0.03418 0.21191 0.03418 0.11963 0 0.69385 0 0.57422 0 0.7041-0.00684 0.1333-0.00684 0.21875-0.03418 0.96729-0.29395 1.26123-1.26123 0.02734-0.08545 0.03418-0.21533 0.00684-0.1333 0.00684-0.69385l0-0.63232q0-0.19482-0.02051-0.26318-0.02051-0.07178-0.09228-0.15381-0.09912-0.12646-0.2461-0.18116-0.14697-0.05811-0.31445-0.03076z"
                    fill="#177245"
                  ></path>
                </svg>
                <div
                  data-pencil-name="QualityRowLabel"
                  style='box-sizing: border-box; color: #59606E; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  Paper edges detected
                </div>
                <div
                  data-pencil-name="QualityRowValue"
                  style='box-sizing: border-box; color: #16181D; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  5 / 5
                </div>
              </div>
              <div
                data-pencil-name="QualityRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: 100%"
              >
                <svg
                  data-pencil-name="QualityRowIcon"
                  data-icon-name="type"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
                >
                  <path
                    d="M2.70361 1.76367q-0.19824 0.04102-0.40673 0.16748-0.09912 0.05811-0.23243 0.20508-0.1333 0.14697-0.18799 0.24268-0.08545 0.18457-0.09912 0.31787-0.01367 0.12988-0.01367 0.7622l0 0.76905 0.04102 0.09912q0.04443 0.08203 0.11279 0.16064 0.07178 0.0752 0.14014 0.1128 0.07178 0.03418 0.18115 0.04785 0.22559 0.04102 0.42041-0.09229 0.19824-0.1333 0.25293-0.36914 0.01367-0.09912 0.01367-0.68701l0-0.57422 3.5 0 0 8.14844-0.57422 0q-0.57422 0-0.68701 0.02734-0.19482 0.02734-0.33496 0.16748-0.2085 0.21191-0.15381 0.50586 0.05469 0.29395 0.32129 0.42041l0.09912 0.04102 3.80762 0 0.09912-0.04102q0.2666-0.12646 0.32129-0.42041 0.05469-0.29395-0.15381-0.50586-0.14014-0.14014-0.33496-0.16748-0.11279-0.02734-0.68701-0.02734l-0.57422 0 0-8.14844 3.5 0 0 0.57422q0 0.58789 0.02734 0.68701 0.04102 0.23584 0.23584 0.36914 0.19824 0.1333 0.42383 0.09229 0.10938-0.01367 0.17773-0.04785 0.07178-0.0376 0.14014-0.1128 0.07178-0.07861 0.11621-0.16064l0.04102-0.09912 0.01367-0.70069q0-0.56055-0.01367-0.72802-0.01367-0.16748-0.07178-0.30762-0.0957-0.23926-0.30078-0.42725-0.20166-0.18799-0.45459-0.27343-0.06836-0.02734-0.66992-0.02735l-3.68457-0.01367q-4.26904 0-4.35108 0.01367z"
                    fill="#177245"
                  ></path>
                </svg>
                <div
                  data-pencil-name="QualityRowLabel"
                  style='box-sizing: border-box; color: #59606E; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  Text is searchable
                </div>
                <div
                  data-pencil-name="QualityRowValue"
                  style='box-sizing: border-box; color: #16181D; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Yes
                </div>
              </div>
              <div
                data-pencil-name="QualityRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: 100%"
              >
                <svg
                  data-pencil-name="QualityRowIcon"
                  data-icon-name="sun-medium"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
                >
                  <path
                    d="M6.84619 1.18945q-0.25293 0.08545-0.37939 0.30762-0.02734 0.07178-0.03418 0.14356-0.00684 0.06836-0.00684 0.37597 0 0.37598 0.02051 0.48877 0.02051 0.11279 0.1333 0.22559 0.18115 0.18115 0.42041 0.18115 0.23926 0 0.42041-0.18115 0.11279-0.11279 0.1333-0.22559 0.02051-0.11279 0.02051-0.48877 0-0.30762-0.00684-0.37597-0.00684-0.07178-0.03418-0.14356-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m-3.78027 1.55518q-0.09912 0.04102-0.19141 0.1333-0.08887 0.08887-0.12988 0.20166-0.11279 0.29395 0.08203 0.56055 0.07178 0.08545 0.30078 0.31787 0.23242 0.229 0.3042 0.25635 0.18115 0.09912 0.37598 0.05468 0.09912-0.02734 0.15381-0.05468 0.05811-0.02734 0.1333-0.09571 0.07861-0.07178 0.11963-0.14013 0.04102-0.07178 0.05468-0.1709 0.04443-0.19482-0.05468-0.39307-0.04102-0.06836-0.31446-0.3418-0.27344-0.27344-0.35888-0.31445-0.08203-0.04102-0.22901-0.04101-0.14697 0-0.24609 0.02734z m7.46142-0.01367q-0.08203 0.02734-0.17431 0.10595-0.09229 0.0752-0.28028 0.26661-0.18799 0.18799-0.25293 0.28027-0.06152 0.08887-0.08886 0.20166-0.01367 0.0957 0 0.20166 0.01367 0.10596 0.04785 0.17773 0.03418 0.06836 0.11621 0.15381 0.08545 0.08203 0.14355 0.10938 0.16748 0.08545 0.36231 0.04101 0.12646-0.02734 0.20166-0.07519 0.07861-0.05127 0.25976-0.23242 0.2666-0.2666 0.3418-0.38282 0.07861-0.11963 0.07861-0.28711 0-0.23926-0.1538-0.39306-0.08203-0.09912-0.17432-0.14014-0.09229-0.04102-0.23242-0.04101-0.13672 0-0.19483 0.01367z m-3.72216 1.3706q-0.57422 0.02734-1.08008 0.28028-0.65625 0.32129-1.06983 0.88183-0.41357 0.56055-0.54004 1.28858-0.02734 0.15381-0.02734 0.44775 0 0.29395 0.02734 0.44775 0.14014 0.81348 0.64942 1.42188 0.5127 0.6084 1.26806 0.875 0.25293 0.0957 0.46143 0.1333 0.21191 0.03418 0.50586 0.03418 0.29395 0 0.50244-0.03418 0.21191-0.0376 0.46485-0.1333 0.76904-0.2666 1.28515-0.90234 0.51953-0.63916 0.63233-1.44922 0.02734-0.15381 0.02734-0.42041 0-0.2666-0.02734-0.42041-0.12646-0.71436-0.54004-1.28174-0.41357-0.56738-1.07325-0.89551-0.65625-0.32813-1.4663-0.27344z m0.46142 1.17578q0.40674 0.05811 0.74854 0.3042 0.3418 0.24268 0.52636 0.60498 0.14014 0.28027 0.18116 0.54688 0.04102 0.2666 0 0.5332-0.08545 0.54688-0.46485 0.93994-0.37598 0.38965-0.92285 0.50244-0.4751 0.0957-0.92285-0.06494-0.44775-0.16064-0.75537-0.52978-0.30762-0.37256-0.3794-0.84766-0.04102-0.2666 0-0.5332 0.08545-0.56055 0.48194-0.96387 0.3999-0.40674 0.96045-0.49219 0.2666-0.04102 0.54687 0z m-5.67041 1.16211q-0.11279 0.02734-0.21875 0.11963-0.10254 0.09229-0.15381 0.18457-0.04785 0.08887-0.04785 0.25635 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.14697 0.11963 0.06494 0.03418 0.14014 0.04101 0.07861 0.00684 0.38623 0.00684 0.37598 0 0.48877-0.02051 0.11279-0.02051 0.22559-0.1333 0.18115-0.18115 0.18115-0.42041 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.15039-0.10937-0.0752-0.04443-0.14697-0.05127-0.06836-0.00684-0.37598-0.00684-0.43408 0-0.4751 0.01367z m9.88477 0.01368q-0.18457 0.05811-0.29053 0.21191-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.18115 0.42041 0.11279 0.11279 0.22559 0.1333 0.11279 0.02051 0.48877 0.02051 0.30762 0 0.38281-0.00684 0.07861-0.00684 0.14014-0.04101 0.06494-0.0376 0.14697-0.11963 0.08545-0.08545 0.12647-0.16065 0.04443-0.07861 0.04443-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.07178-0.04102-0.13672-0.04785-0.06152-0.00684-0.38281-0.00684-0.44775 0-0.50244 0.02735z m-7.9126 3.27783q-0.0957 0.02734-0.18115 0.08545-0.08203 0.05469-0.28028 0.24951-0.24951 0.23926-0.32129 0.35888-0.06836 0.11621-0.06835 0.2837 0 0.25293 0.16064 0.41357 0.16064 0.16064 0.41357 0.16064 0.16748 0 0.2837-0.06836 0.11963-0.07178 0.37255-0.33495 0.18115-0.18457 0.23584-0.26661 0.05811-0.08545 0.08545-0.21191 0.04443-0.19482-0.05468-0.37598-0.02734-0.05811-0.10596-0.12646-0.0752-0.07178-0.1333-0.1128-0.04102-0.02734-0.15381-0.04785-0.11279-0.02051-0.14014-0.0205l-0.11279 0.01367z m6.62402 0q-0.09912 0.01367-0.15722 0.04785-0.05469 0.03418-0.1333 0.10596-0.0752 0.06836-0.11622 0.14013-0.04102 0.06836-0.05468 0.18115-0.04443 0.18115 0.05468 0.36231 0.02734 0.07178 0.25635 0.3042 0.23242 0.229 0.31787 0.30078 0.18115 0.14014 0.38965 0.11963 0.21191-0.02393 0.36572-0.17774 0.15381-0.15381 0.17432-0.3623 0.02393-0.21191-0.11621-0.39307-0.05811-0.08545-0.29053-0.30761-0.229-0.22559-0.28711-0.25293-0.05469-0.02734-0.16748-0.06153-0.10938-0.03418-0.13672-0.0205l-0.09912 0.01367z m-3.2915 1.3706q-0.15381 0.01367-0.27344 0.11963-0.11621 0.10596-0.17431 0.23242-0.02734 0.06836-0.02735 0.15381 0 0.08203 0 0.38281 0 0.30078 0.00684 0.3794 0.00684 0.0752 0.04101 0.14014 0.0376 0.06152 0.11963 0.14697 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.11963-0.14697 0.0376-0.06494 0.04443-0.14014 0.00684-0.07861 0.00684-0.38623 0-0.34863-0.01367-0.45459-0.01367-0.10596-0.10596-0.22217-0.09229-0.11963-0.23926-0.17432-0.14697-0.05811-0.31445-0.03076z"
                    fill="#177245"
                  ></path>
                </svg>
                <div
                  data-pencil-name="QualityRowLabel"
                  style='box-sizing: border-box; color: #59606E; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  Shadows reduced
                </div>
                <div
                  data-pencil-name="QualityRowValue"
                  style='box-sizing: border-box; color: #16181D; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Yes
                </div>
              </div>
            </div>
            <div
              data-pencil-name="MetaSpacer"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 1px"
            ></div>
            <div
              data-pencil-name="FavoriteRow"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: space-between; padding: 2px 0px; width: 100%"
            >
              <div
                data-pencil-name="FavoriteLeft"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <svg
                  data-pencil-name="FavoriteIcon"
                  data-icon-name="star"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M6.87354 0.60156q-0.28027 0.02734-0.50245 0.25293-0.08545 0.08203-0.13672 0.16748-0.04785 0.08545-0.21533 0.43408-0.86816 1.75-1.05615 2.11573-0.18799 0.3623-0.27344 0.44092-0.08203 0.0752-0.17431 0.11279-0.09229 0.03418-1.62012 0.25976-1.52441 0.22217-1.63379 0.24952-0.22559 0.05469-0.40674 0.23584-0.11279 0.11279-0.1709 0.21191-0.05469 0.09912-0.08886 0.25293-0.03418 0.15381 0.00683 0.32812 0.04102 0.17432 0.14014 0.32813 0.04102 0.08545 1.20312 1.20312l0.1128 0.09913q0.62891 0.62891 0.81347 0.79638 0.23584 0.25293 0.29395 0.35205 0.04102 0.08203 0.05469 0.2085l0 0.01367q0 0.09912-0.04102 0.39307-0.04102 0.29395-0.22559 1.28857-0.24951 1.55518-0.24951 1.63721 0 0.35205 0.26319 0.6289 0.19824 0.18457 0.44775 0.23926 0.18457 0.04102 0.36572 0 0.09912-0.02734 0.28028-0.11279l1.66455-0.86817q0.81348-0.43408 0.96728-0.50244 0.15381-0.07178 0.23926-0.07177l0.04102-0.01368q0.14014 0 0.24951 0.04444 0.11279 0.04102 1.37402 0.71435l1.34326 0.69727q0.18115 0.08545 0.28028 0.11279 0.18115 0.04102 0.36572 0 0.26318-0.05469 0.44775-0.23926 0.26318-0.27686 0.26319-0.6289 0-0.0957-0.24952-1.62354-0.18457-0.99463-0.22558-1.28857-0.04102-0.29395-0.04102-0.38965l0-0.03076q0.01367-0.12646 0.05469-0.19483 0.0581-0.11279 0.29395-0.34863 0.16748-0.1709 0.7998-0.78613l0.12647-0.12647q1.14844-1.11768 1.21679-1.21679 0.14014-0.22559 0.14014-0.48194 0-0.25977-0.14014-0.48535-0.08545-0.14014-0.23926-0.24267-0.15381-0.10596-0.32128-0.14698-0.08203-0.01367-1.60987-0.23584-1.52441-0.22559-1.6167-0.25976-0.09229-0.0376-0.17773-0.11279-0.08203-0.07861-0.26318-0.42725-0.18115-0.35205-1.04932-2.11572-0.18115-0.34863-0.23242-0.44092-0.04785-0.09229-0.1333-0.17432-0.22217-0.22559-0.4751-0.25293l-0.12647-0.01367q-0.04102 0-0.1538 0.01367z m0.70068 2.65918q0.57422 1.14844 0.64258 1.26123 0.07178 0.11279 0.25293 0.28711 0.18115 0.17432 0.29394 0.25977 0.25293 0.14014 0.5332 0.20849 0.14014 0.04102 1.35694 0.21875 1.2168 0.17432 1.24756 0.18799 0.01367 0-0.03077 0.04102l-0.29394 0.30761-0.8374 0.81348q-0.70068 0.68701-0.77246 0.78272-0.2085 0.29395-0.32129 0.68701-0.02734 0.11279-0.02735 0.40674l0 0.28027 0.2085 1.23047q0.22559 1.23389 0.21875 1.24072-0.00684 0.00684-0.79297-0.41357l-0.05469-0.02735q-0.96729-0.50586-1.23046-0.64599-0.37939-0.18115-0.56055-0.22217-0.14014-0.04443-0.39307-0.04444l-0.02734 0q-0.25293 0-0.39307 0.04444-0.18115 0.04102-0.56055 0.22217-0.26318 0.14014-1.23046 0.64599l-0.05469 0.02735q-0.78613 0.42041-0.79297 0.41357-0.00684-0.00684 0.21875-1.24072l0.2085-1.23047 0-0.29395q0-0.28027-0.02735-0.39306-0.11279-0.39307-0.32129-0.68701-0.07178-0.0957-0.75879-0.76905l-1.02197-0.99463q-0.16748-0.16748-0.15381-0.18115 0.01367-0.01367 1.24414-0.18799 1.23389-0.17773 1.36035-0.21875 0.36572-0.08203 0.65967-0.3042 0.29395-0.22559 0.48877-0.55029 0.05811-0.10938 0.59473-1.20654 0.54004-1.10059 0.55371-1.10059 0.01367 0 0.57422 1.14502z"
                    fill="#8A5A00"
                  ></path>
                </svg>
                <div
                  data-pencil-name="FavoriteLabel"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Add to Favorites
                </div>
              </div>
              <div
                data-pencil-name="Switch"
                style="align-items: center; background-color: #2B5BD7; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 24px; justify-content: flex-end; padding: 3px; width: 42px"
              >
                <div
                  data-pencil-name="SwitchKnob"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 18px; justify-content: flex-start; width: 18px"
                ></div>
              </div>
            </div>
            <div
              data-pencil-name="SaveToLibraryBtn" data-clickable @click="$router.push('/library')"
              style="align-items: center; background-color: #2B5BD7; border-radius: 12px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: 50px; justify-content: center; width: 100%"
            >
              <svg
                data-pencil-name="SaveIcon"
                data-icon-name="library"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 18px; width: 18px"
              >
                <path
                  d="M2.19775 1.76367q-0.14014 0.04102-0.25976 0.15381-0.11963 0.11279-0.16065 0.25293-0.02734 0.09912-0.02734 4.82959 0 4.73047 0.02734 4.82959 0.05811 0.21191 0.23243 0.32471 0.17432 0.10938 0.37597 0.08886 0.20508-0.02051 0.35889-0.17431 0.12646-0.12646 0.15381-0.29395 0.02734-0.11279 0.02734-4.7749 0-4.66211-0.02734-4.7749-0.02734-0.16748-0.15381-0.29395-0.09912-0.11279-0.25293-0.15381-0.15381-0.04102-0.29395-0.01367z m4.64844 1.17578q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 8.44238 0.02734 0.0957q0.08545 0.21192 0.29395 0.32471 0.09912 0.04102 0.25293 0.04102 0.15381 0 0.25293-0.04102 0.2085-0.11279 0.29394-0.32471l0.02735-0.0957 0-8.44238-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m2.2832 0.01367q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14698 0 0.10596 0.16748 0.71435 0.16748 0.6084 1.0083 3.52051 1.17578 4.11523 1.20313 4.18701 0.09912 0.18115 0.28711 0.2666 0.19141 0.08203 0.38623 0.02735 0.19482-0.05811 0.30078-0.18799 0.10596-0.1333 0.1333-0.33154 0-0.08203-0.16065-0.65625-0.16064-0.57422-1.01513-3.57178-1.17578-4.11523-1.21338-4.19727-0.03418-0.08545-0.11279-0.16748-0.0752-0.08545-0.16748-0.1333-0.08887-0.05127-0.22217-0.05127-0.1333 0-0.22901 0.02735z m-4.55273 1.14844q-0.18115 0.01367-0.31445 0.14698-0.1333 0.1333-0.16065 0.31445-0.02734 0.11279-0.02734 3.61963 0 3.50684 0.02734 3.59228 0.02734 0.18115 0.15381 0.29395 0.19824 0.19482 0.46143 0.17431 0.2666-0.02051 0.42041-0.24609l0.02734-0.02734q0.04443-0.05469 0.05811-0.19483 0.01367-0.16748 0.02734-0.7998l0-6.41211-0.04102-0.0957q-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              <div
                data-pencil-name="SaveLabel"
                style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Save to Library
              </div>
            </div>
            <div
              data-pencil-name="SaveHint"
              style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              You can change the folder or tags later.
            </div>
          </div>
        </div>
      </div>
</template>
