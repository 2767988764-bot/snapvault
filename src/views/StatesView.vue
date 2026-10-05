<template>
      <div class="page-root"
        data-pencil-name="10 · States &amp; Components"
        style="align-items: flex-start; background-image: url('/assets/bg-2.webp'); background-repeat: no-repeat; background-size: 100% 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 24px; height: fit-content; justify-content: flex-start; overflow: hidden; padding: 32px 40px; position: relative; width: 1440px"
      >
        <div
          data-pencil-name="StatesHeading"
          style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 24px; font-style: normal; font-weight: 700; letter-spacing: -0.4px; line-height: normal; text-align: left; white-space: nowrap"
        >
          States &amp; components
        </div>
        <div
          data-pencil-name="StatesSub"
          style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
        >
          Every data surface has empty, loading, error, success and no-results states. Status is
          always shown with text and an icon, never colour alone.
        </div>
        <div
          data-pencil-name="StateCards"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: 100%"
        >
          <div
            data-pencil-name="StateRow"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="StateCard/No documents yet"
              style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 10px; height: 196px; justify-content: flex-start; padding: 20px"
            >
              <div
                data-pencil-name="StateIconBox"
                style="align-items: center; background-color: #EEEFF2; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 42px; justify-content: center; width: 42px"
              >
                <svg
                  data-pencil-name="StateIcon"
                  data-icon-name="file-plus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 20px; width: 20px"
                >
                  <path
                    d="M3.33252 0.60156q-0.58789 0.04102-1.02197 0.44776-0.43408 0.40674-0.53321 0.99463-0.02734 0.16748-0.02734 4.95605 0 4.78857 0.02734 4.95605 0.09912 0.5332 0.46827 0.92627 0.37256 0.38965 0.90576 0.50245 0.10938 0.01367 0.66992 0.02734l3.17871 0 3.17871 0q0.56055-0.01367 0.66992-0.02734 0.5332-0.11279 0.90235-0.50245 0.37256-0.39307 0.47168-0.92627 0.02734-0.16748 0.02734-3.80078 0-3.6333-0.02734-3.80078-0.08545-0.51953-0.40674-0.92285-0.11279-0.14014-1.24756-1.2749-0.89551-0.88184-1.10742-1.06983-0.2085-0.19141-0.41699-0.29052-0.30762-0.15381-0.67334-0.19483-0.14014-0.02734-2.4917-0.02734-2.35156 0-2.54639 0.02734z m4.25537 2.42334l0 1.27149 0.04102 0.14013q0.08545 0.22559 0.24609 0.40674 0.16064 0.18115 0.35547 0.28028 0.14014 0.07178 0.22558 0.08544 0.12646 0.02734 0.40674 0.04102l2.21143 0 0 6.11816q0 0.43408-0.0376 0.51954-0.03418 0.08203-0.11963 0.17431-0.08203 0.08887-0.16406 0.1333l-0.09912 0.04102-7.30762 0-0.09912-0.04102q-0.08203-0.04443-0.16748-0.1333-0.08203-0.09228-0.11963-0.17431-0.03418-0.08545-0.03418-0.70069l0-4.18701 0-4.18701q0-0.61523 0.02734-0.6836 0.05811-0.12646 0.16749-0.23242 0.11279-0.10596 0.23925-0.1333 0.08545-0.01367 2.14307-0.01367l2.07129 0 0.01367 1.2749z m2.21143 0.01367l1.03564 1.03565-2.08496 0 0-1.03565q0-1.03564 0-1.04931l1.04932 1.04931z m-2.95313 3.40088q-0.25293 0.08545-0.37939 0.30762-0.02734 0.07178-0.03418 0.16406-0.00684 0.08887-0.00684 0.59131l0 0.67334-1.34326 0-0.08545 0.05469q-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.15381 0.11963 0.07178 0.03418 0.16064 0.04101 0.09229 0.00684 0.59473 0.00684l0.67334 0 0 0.67334q0 0.50244 0.00684 0.59473 0.00684 0.08887 0.04101 0.16064 0.0376 0.06836 0.11963 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.11963-0.15381 0.0376-0.07178 0.04443-0.16064 0.00684-0.09229 0.00684-0.59473l0-0.67334 0.67334 0q0.50244 0 0.59131-0.00684 0.09229-0.00684 0.16064-0.04101 0.07178-0.0376 0.15381-0.11963 0.08545-0.08545 0.12647-0.16065 0.04443-0.07861 0.04443-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-1.34326 0 0-0.67334q0-0.50244-0.00684-0.59131-0.00684-0.09229-0.03418-0.16406-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z"
                    fill="#59606E"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="StateTitle"
                style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
              >
                No documents yet
              </div>
              <div
                data-pencil-name="StateHint"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 18px; text-align: left; width: 100%'
              >
                Scan a photo or import an image PDF and it will show up here.
              </div>
              <div
                data-pencil-name="StateSpacer"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 1px"
              ></div>
              <div
                data-pencil-name="StateAction"
                style="align-items: center; background-color: #2B5BD7; border-radius: 9px; border: 1px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 13px; width: fit-content"
              >
                <svg
                  data-pencil-name="StateActionIcon"
                  data-icon-name="plus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                >
                  <path
                    d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
                <div
                  data-pencil-name="StateActionText"
                  style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Scan / Import
                </div>
              </div>
            </div>
            <div
              data-pencil-name="StateCard/Loading your library"
              style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 10px; height: 196px; justify-content: flex-start; padding: 20px"
            >
              <div
                data-pencil-name="StateIconBox"
                style="align-items: center; background-color: #E7EDFC; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 42px; justify-content: center; width: 42px"
              >
                <svg
                  data-pencil-name="StateIcon"
                  data-icon-name="loader-circle"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 20px; width: 20px"
                >
                  <path
                    d="M6.4668 1.18945q-1.49707 0.14014-2.75147 0.99463-1.25098 0.85449-1.92431 2.19776-0.44775 0.89551-0.5879 1.93115-0.02734 0.16748-0.02734 0.68701 0 0.51953 0.02734 0.68701 0.16748 1.2168 0.75538 2.23877 0.58789 1.02197 1.55517 1.75 0.60156 0.46143 1.3501 0.74854 0.74854 0.28711 1.521 0.37255 0.23584 0.02734 0.61523 0.02735 0.37939 0 0.61523-0.02735 1.12109-0.12646 2.10547-0.64257 0.98779-0.51953 1.71582-1.36719 0.72803-0.84766 1.09375-1.92432 0.14014-0.44775 0.22217-0.91601 0.08545-0.47168 0.07178-0.86133 0-0.1709-0.00684-0.22559-0.00684-0.05469-0.03418-0.11279-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.09912 0.04102-0.18115 0.09912-0.25977 0.25293-0.0752 0.15381-0.08203 0.47168-0.00683 0.31445-0.09228 0.73144-0.28027 1.3877-1.30225 2.396-1.11768 1.104-2.7583 1.30225-0.18115 0.02734-0.5332 0.02734-0.34863 0-0.54346-0.02734-0.78271-0.11279-1.47656-0.44776-0.69385-0.33838-1.24072-0.88183-0.65625-0.65967-1.01514-1.51416-0.35547-0.85449-0.35547-1.79102 0-0.56055 0.11963-1.05615 0.11963-0.49902 0.35547-1.00147 0.33838-0.67334 0.88183-1.22363 0.54688-0.55371 1.24756-0.90576 0.50244-0.23584 0.99805-0.35547 0.49902-0.11963 1.05957-0.11963 0.3623 0 0.66309 0.04443 0.3042 0.04102 0.6665 0.15039 0.23926 0.05811 0.33496 0.05811 0.21191-0.02734 0.36572-0.17432 0.15381-0.14697 0.16748-0.35888 0.01367-0.15381-0.05127-0.29395-0.06152-0.14014-0.17089-0.22217-0.15723-0.09912-0.59131-0.20507-0.43066-0.10596-0.88184-0.14698-0.16748-0.01367-0.51611-0.01367-0.34863 0-0.51953 0.01367z"
                    fill="#2B5BD7"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="StateTitle"
                style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
              >
                Loading your library
              </div>
              <div
                data-pencil-name="StateHint"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 18px; text-align: left; width: 100%'
              >
                Reading the local index...
              </div>
              <div
                data-pencil-name="StateSpacer"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 1px"
              ></div>
            </div>
            <div
              data-pencil-name="StateCard/Couldn't open the document"
              style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 10px; height: 196px; justify-content: flex-start; padding: 20px"
            >
              <div
                data-pencil-name="StateIconBox"
                style="align-items: center; background-color: #FBE9E8; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 42px; justify-content: center; width: 42px"
              >
                <svg
                  data-pencil-name="StateIcon"
                  data-icon-name="circle-x"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 20px; width: 20px"
                >
                  <path
                    d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-2.56348 2.89843q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25293 0.05127 0.08203 0.75196 0.79639l0.69726 0.70068-0.69726 0.70068q-0.70068 0.71436-0.75196 0.79981-0.04785 0.08203-0.04785 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04785 0.08545-0.05127 0.79981-0.75196l0.70068-0.69726 0.70068 0.69726q0.71436 0.70068 0.79639 0.75196 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-0.74854-0.79981l-0.68359-0.70068 0.68359-0.70068q0.70068-0.71436 0.74854-0.79639 0.05127-0.08545 0.05127-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367l-0.01367 0q-0.14014 0-0.21875 0.0376-0.0752 0.03418-0.24268 0.18799-0.12646 0.10938-0.54687 0.52978l-0.72803 0.7417-0.70068-0.69726q-0.43408-0.43408-0.56055-0.54688-0.18115-0.16748-0.25977-0.20166-0.0752-0.0376-0.20849-0.04443-0.1333-0.00684-0.17432 0.00683z"
                    fill="#B3261E"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="StateTitle"
                style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
              >
                Couldn't open the document
              </div>
              <div
                data-pencil-name="StateHint"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 18px; text-align: left; width: 100%'
              >
                The saved PDF may have moved or been renamed.
              </div>
              <div
                data-pencil-name="StateSpacer"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 1px"
              ></div>
              <div
                data-pencil-name="StateAction"
                style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 13px; width: fit-content"
              >
                <svg
                  data-pencil-name="StateActionIcon"
                  data-icon-name="refresh-cw"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                >
                  <path
                    d="M6.56592 1.18945q-1.12109 0.08545-2.1294 0.57422-0.9502 0.46143-1.66455 1.22022-0.71436 0.75537-1.13476 1.71924-0.22217 0.54688-0.34864 1.13476-0.12646 0.58789-0.11279 1.10742 0 0.19482 0.03418 0.28028 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.22559 0.03418 0.14014 0 0.22217-0.03418 0.08545-0.0376 0.1914-0.1333 0.10596-0.09912 0.14014-0.23926 0.03418-0.14014 0.03418-0.39307 0.01367-0.30762 0.0957-0.71777 0.08545-0.41357 0.22559-0.75195 0.42041-1.09033 1.31592-1.85254 0.89551-0.76563 2.04394-1.01514 0.30762-0.07178 0.72803-0.09228 0.42041-0.02051 0.75537 0.0205 1.76709 0.18115 3.11035 1.4834l0.22217 0.22559-0.7417 0q-0.7417 0-0.85449 0.02734-0.24951 0.02734-0.38281 0.23242-0.1333 0.20166-0.09912 0.43409 0.03418 0.229 0.24609 0.36914l0.01367 0.01367q0.08203 0.05811 0.15381 0.07178 0.11279 0.01367 0.43408 0.02734l2.79932-0.01367 0.09912-0.04102q0.18115-0.08545 0.28027-0.28027l0.04102-0.07178 0-3.26074-0.04102-0.08545q-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666l-0.04102 0.08545 0 1.67822-0.28027-0.26318q-0.3623-0.36572-0.72119-0.62207-0.35547-0.25977-0.78955-0.48535-1.10742-0.58789-2.38233-0.70069-0.15381-0.01367-0.4751-0.01367-0.32129 0-0.46142 0.01367z m5.53027 5.25q-0.11279 0.04102-0.21875 0.12647-0.10254 0.08545-0.14697 0.18115-0.04102 0.05811-0.04102 0.15381l-0.05468 0.54687q-0.04443 0.65967-0.30762 1.28858-0.47851 1.18945-1.47998 1.96191-0.99805 0.76904-2.24561 0.93653-0.7417 0.08203-1.5039-0.05811-0.76221-0.14014-1.43555-0.48877-0.72803-0.39307-1.3877-1.03564l-0.10937-0.12647 0.75537 0q0.50244 0 0.66992-0.01367 0.22559-0.01367 0.30762-0.04102 0.08545-0.03076 0.1709-0.12646 0.22217-0.22559 0.16748-0.51953-0.05469-0.29395-0.34863-0.43408l-0.08545-0.02735-3.20606 0-0.08545 0.04102q-0.19482 0.08545-0.29394 0.28027l-0.04102 0.07178 0 3.26074 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-1.67822 0.25293 0.24951q0.24951 0.23926 0.43408 0.39307 1.37061 1.14844 3.20606 1.40136 0.2085 0.02734 0.63574 0.03418 0.42725 0.00684 0.64941-0.00683 1.3877-0.12646 2.57715-0.8545 1.14844-0.72803 1.87646-1.87646 0.72803-1.17578 0.8545-2.57715 0.02734-0.22217 0.01367-0.44775 0-0.19482-0.0376-0.27686-0.03418-0.08545-0.11621-0.18457-0.16748-0.15381-0.39307-0.16748-0.14014 0-0.18115 0.01367z"
                    fill="#59606E"
                  ></path>
                </svg>
                <div
                  data-pencil-name="StateActionText"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Try again
                </div>
              </div>
            </div>
          </div>
          <div
            data-pencil-name="StateRow"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="StateCard/Saved to Library"
              style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 10px; height: 196px; justify-content: flex-start; padding: 20px"
            >
              <div
                data-pencil-name="StateIconBox"
                style="align-items: center; background-color: #E4F2EA; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 42px; justify-content: center; width: 42px"
              >
                <svg
                  data-pencil-name="StateIcon"
                  data-icon-name="check"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 20px; width: 20px"
                >
                  <path
                    d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                    fill="#177245"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="StateTitle"
                style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
              >
                Saved to Library
              </div>
              <div
                data-pencil-name="StateHint"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 18px; text-align: left; width: 100%'
              >
                Computer Vision Lecture 03 · 5 pages
              </div>
              <div
                data-pencil-name="StateSpacer"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 1px"
              ></div>
              <div
                data-pencil-name="StateAction"
                style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #00000000; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 13px; width: fit-content"
              >
                <svg
                  data-pencil-name="StateActionIcon"
                  data-icon-name="arrow-right"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                >
                  <path
                    d="M6.90088 2.35156q-0.18115 0.02734-0.32129 0.16748-0.11279 0.11279-0.14697 0.28028-0.03418 0.16748 0.02051 0.32129 0.02734 0.08545 0.25976 0.3247 0.23242 0.23584 1.36377 1.37061 1.58252 1.58252 1.58252 1.59619 0 0.01367-3.45557 0.01367l-3.44531 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.53321 0.03418l3.01123 0q3.42822 0 3.42822 0.01367 0 0.01367-1.58252 1.59619-1.13135 1.13477-1.36377 1.37402-0.23242 0.23584-0.25976 0.3213-0.05469 0.15381-0.02051 0.32128 0.03418 0.16748 0.14697 0.28028 0.18115 0.18115 0.42041 0.18115l0.04102 0q0.11279 0 0.19824-0.05469 0.14014-0.09912 0.51611-0.46484l1.68164-1.67822q2.1123-2.10205 2.15332-2.18409 0.07178-0.12646 0.07178-0.28027 0-0.15381-0.07178-0.28027-0.04102-0.08203-2.1499-2.18067-2.10547-2.10205-2.17725-2.13623-0.06836-0.0376-0.23584-0.06494-0.04102 0-0.12646 0.01367z"
                    fill="#2B5BD7"
                  ></path>
                </svg>
                <div
                  data-pencil-name="StateActionText"
                  style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Open document
                </div>
              </div>
            </div>
            <div
              data-pencil-name='StateCard/No results for "quantum"'
              style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 10px; height: 196px; justify-content: flex-start; padding: 20px"
            >
              <div
                data-pencil-name="StateIconBox"
                style="align-items: center; background-color: #EEEFF2; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 42px; justify-content: center; width: 42px"
              >
                <svg
                  data-pencil-name="StateIcon"
                  data-icon-name="search-x"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 20px; width: 20px"
                >
                  <path
                    d="M6.00537 1.17578q-0.04102 0.01367-0.23584 0.02734-0.57422 0.07178-1.16211 0.29053-0.58789 0.21533-1.09375 0.5503-0.39307 0.2666-0.74853 0.61181-0.35547 0.3418-0.62207 0.7041-0.646 0.92285-0.86817 2.03028-0.05811 0.28027-0.07861 0.46142-0.02051 0.18115-0.02051 0.57422 0 0.43408 0.02734 0.68018 0.02734 0.24268 0.12647 0.59472 0.19482 0.75537 0.60156 1.43555 0.40674 0.67676 0.96729 1.18262 0.40674 0.3623 0.81689 0.60156 0.41357 0.23926 0.91944 0.43408 1.06299 0.39307 2.21826 0.29395 1.15527-0.09912 2.1499-0.65967 0.12646-0.06836 0.33496-0.2085 0.2085-0.14014 0.29395-0.21191l0.05468-0.05469 1.10743 1.10742q1.12109 1.104 1.20312 1.15528 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-1.15186-1.20654l-1.10742-1.10743 0.05469-0.06836q0.05811-0.05469 0.19824-0.25293 0.82373-1.23047 0.89209-2.70703 0.07178-1.47656-0.63916-2.76513-0.5332-0.96729-1.42187-1.64405-0.88867-0.68018-1.95508-0.9331-0.29395-0.06836-0.54004-0.09571-0.24268-0.03076-0.60498-0.04443-0.43408 0-0.49219 0z m0.7417 1.17578q0.37939 0.01367 0.79297 0.14014 0.41357 0.12646 0.78955 0.32129 0.7417 0.39307 1.28857 1.08008 0.54687 0.68359 0.75538 1.49707 0.07178 0.28027 0.09228 0.49902 0.02051 0.21533 0.02051 0.50928 0 0.70068-0.19483 1.30224-0.39307 1.16211-1.33984 1.91065-0.94336 0.74853-2.16016 0.875-0.19824 0.01367-0.49218 0.00683-0.29395-0.00684-0.48877-0.03418-0.5332-0.08545-1.03907-0.30761-0.50244-0.22559-0.93652-0.56055-0.14014-0.12646-0.35205-0.3418-0.2085-0.21875-0.33154-0.37256-0.57422-0.76904-0.7417-1.69531-0.08545-0.43408-0.06494-0.90918 0.02051-0.4751 0.11963-0.89551 0.29395-1.14844 1.18945-1.95849 0.89551-0.81348 2.05762-1.02539 0.18115-0.02734 0.42041-0.04102 0.23926-0.01367 0.34863-0.01367l0.2666 0.01367z m-1.93115 2.04395q-0.19482 0.04102-0.32129 0.21875-0.12646 0.17432-0.11279 0.38281 0 0.11279 0.04101 0.19141 0.04443 0.0752 0.16748 0.229 0.11279 0.11279 0.45117 0.44775l0.54346 0.56055-0.58789 0.60156q-0.34863 0.33496-0.43408 0.43409-0.12646 0.14014-0.15381 0.21191-0.02734 0.06836-0.02734 0.19482l0 0.01368q0 0.14014 0.05468 0.23925 0.09912 0.2085 0.30762 0.29395 0.21191 0.08203 0.4375 0 0.06836-0.02734 0.16406-0.11963 0.09912-0.09229 0.50586-0.48193l0.56055-0.56055 0.57422 0.56055q0.34863 0.34863 0.46142 0.44775 0.14014 0.12646 0.2085 0.15381 0.07178 0.02734 0.21191 0.02734 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.17432-0.12646 0.09229-0.09229 0.12647-0.17432 0.0376-0.08545 0.03759-0.23926 0-0.14014-0.03076-0.20849-0.02734-0.07178-0.15039-0.21192-0.09912-0.11279-0.44775-0.46142l-0.56055-0.57422 0.56055-0.57422q0.38965-0.39307 0.47851-0.48877 0.09229-0.09912 0.12305-0.16748 0.08203-0.22559-0.00342-0.43408-0.08203-0.21191-0.29053-0.31104-0.09912-0.05469-0.23925-0.05468l-0.01368 0q-0.12646 0-0.19824 0.02734-0.06836 0.02734-0.20849 0.15381-0.09912 0.09912-0.44776 0.43408l-0.58789 0.58789-0.56055-0.54346q-0.34863-0.35205-0.46826-0.46142-0.11963-0.11279-0.19824-0.14697-0.0752-0.0376-0.18799-0.05127-0.10938-0.01367-0.19482 0.01367z"
                    fill="#59606E"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="StateTitle"
                style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
              >
                No results for "quantum"
              </div>
              <div
                data-pencil-name="StateHint"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 18px; text-align: left; width: 100%'
              >
                Try another word, or remove a filter to widen the search.
              </div>
              <div
                data-pencil-name="StateSpacer"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 1px"
              ></div>
              <div
                data-pencil-name="StateAction"
                style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #00000000; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 13px; width: fit-content"
              >
                <svg
                  data-pencil-name="StateActionIcon"
                  data-icon-name="x"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                >
                  <path
                    d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                    fill="#2B5BD7"
                  ></path>
                </svg>
                <div
                  data-pencil-name="StateActionText"
                  style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Clear filters
                </div>
              </div>
            </div>
            <div
              data-pencil-name="StateCard/Import failed"
              style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 10px; height: 196px; justify-content: flex-start; padding: 20px"
            >
              <div
                data-pencil-name="StateIconBox"
                style="align-items: center; background-color: #FBE9E8; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 42px; justify-content: center; width: 42px"
              >
                <svg
                  data-pencil-name="StateIcon"
                  data-icon-name="file-x"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 20px; width: 20px"
                >
                  <path
                    d="M3.33252 0.60156q-0.58789 0.04102-1.02197 0.44776-0.43408 0.40674-0.53321 0.99463-0.02734 0.16748-0.02734 4.95605 0 4.78857 0.02734 4.95605 0.09912 0.5332 0.46827 0.92627 0.37256 0.38965 0.90576 0.50245 0.10938 0.01367 0.66992 0.02734l3.17871 0 3.17871 0q0.56055-0.01367 0.66992-0.02734 0.5332-0.11279 0.90235-0.50245 0.37256-0.39307 0.47168-0.92627 0.02734-0.16748 0.02734-3.80078 0-3.6333-0.02734-3.80078-0.08545-0.51953-0.40674-0.92285-0.11279-0.14014-1.24756-1.2749-0.89551-0.88184-1.10742-1.06983-0.2085-0.19141-0.41699-0.29052-0.30762-0.15381-0.67334-0.19483-0.14014-0.02734-2.4917-0.02734-2.35156 0-2.54639 0.02734z m4.25537 2.42334l0 1.27149 0.04102 0.14013q0.08545 0.22559 0.24609 0.40674 0.16064 0.18115 0.35547 0.28028 0.14014 0.07178 0.22558 0.08544 0.12646 0.02734 0.40674 0.04102l2.21143 0 0 6.11816q0 0.43408-0.0376 0.51954-0.03418 0.08203-0.11963 0.17431-0.08203 0.08887-0.16406 0.1333l-0.09912 0.04102-7.30762 0-0.09912-0.04102q-0.08203-0.04443-0.16748-0.1333-0.08203-0.09228-0.11963-0.17431-0.03418-0.08545-0.03418-0.70069l0-4.18701 0-4.18701q0-0.61523 0.02734-0.6836 0.05811-0.12646 0.16749-0.23242 0.11279-0.10596 0.23925-0.1333 0.08545-0.01367 2.14307-0.01367l2.07129 0 0.01367 1.2749z m2.21143 0.01367l1.03564 1.03565-2.08496 0 0-1.03565q0-1.03564 0-1.04931l1.04932 1.04931z m-4.3545 3.68116q-0.28027 0.04102-0.42041 0.30761-0.13672 0.2666 0 0.54688 0.04443 0.06836 0.58789 0.61523l0.56055 0.56055-0.56055 0.56055q-0.54346 0.54688-0.58789 0.61523-0.13672 0.28027-0.00683 0.54004 0.1333 0.25977 0.42724 0.31445 0.19824 0.04102 0.3794-0.05468 0.06836-0.04443 0.61523-0.58789l0.56055-0.56055 0.56055 0.56055q0.54688 0.54346 0.61523 0.58789 0.2666 0.13672 0.5332 0.00683 0.2666-0.1333 0.32129-0.42724 0.04102-0.19824-0.05468-0.3794-0.04443-0.06836-0.59131-0.61523l-0.54346-0.56055 0.54346-0.56055q0.54688-0.54688 0.59131-0.61523 0.10938-0.22559 0.03076-0.45459-0.0752-0.23242-0.28369-0.34522-0.12646-0.05469-0.28028-0.05468-0.15381 0-0.2666 0.07177-0.08545 0.04102-0.62891 0.58789l-0.54687 0.52979-0.54688-0.52979q-0.54346-0.54688-0.6289-0.59472-0.08545-0.05127-0.25293-0.07862-0.02734 0-0.12647 0.01368z"
                    fill="#B3261E"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="StateTitle"
                style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
              >
                Import failed
              </div>
              <div
                data-pencil-name="StateHint"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 18px; text-align: left; width: 100%'
              >
                lecture-scan.heic could not be read. The file may be damaged.
              </div>
              <div
                data-pencil-name="StateSpacer"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 1px"
              ></div>
              <div
                data-pencil-name="StateAction"
                style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 13px; width: fit-content"
              >
                <svg
                  data-pencil-name="StateActionIcon"
                  data-icon-name="folder-open"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                >
                  <path
                    d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 5.96436q0 0.68701 0.02734 0.89551 0.01367 0.14014 0.05811 0.25293l0.02734 0.05468q0.15381 0.44775 0.53662 0.75537 0.38623 0.30762 0.84766 0.3794 0.14014 0.01367 4.55274 0.01367l4.40917-0.01367 0.15381-0.04102q0.29394-0.07178 0.54688-0.23926 0.19482-0.14014 0.37598-0.3623 0.18115-0.22559 0.2666-0.43408 0.02734-0.08545 0.48877-1.84229 0.46143-1.75684 0.50586-1.98242 0.05469-0.2666 0.01367-0.56738-0.04102-0.30078-0.16748-0.55713-0.12646-0.25977-0.35889-0.4751-0.229-0.21875-0.49561-0.33154l-0.12646-0.05469 0-0.47851q-0.01367-0.34863-0.02051-0.4375-0.00684-0.09229-0.03418-0.20508-0.14014-0.48877-0.47851-0.81348-0.16748-0.16748-0.34864-0.26318-0.18115-0.09912-0.43408-0.18457-0.09912-0.02734-0.36572-0.02735l-3.2334-0.02734q-0.34863 0-0.46142-0.02734-0.08203-0.01367-0.14014-0.05811l-0.02735-0.02734q-0.06836-0.04102-0.11279-0.09571-0.04102-0.05811-0.19482-0.28027-0.42041-0.61865-0.58789-0.78613-0.25293-0.23584-0.57422-0.34864l-0.01367 0q-0.15381-0.07178-0.25293-0.08544-0.14014-0.02734-0.44776-0.02735l-1.03564 0-1.17578 0q-0.23926 0.01367-0.33496 0.02735z m2.86767 1.17578q0.11279 0.05811 0.18115 0.12988 0.07178 0.06836 0.22559 0.3042 0.43408 0.65967 0.58789 0.7998 0.39307 0.34863 0.88184 0.43408 0.12646 0.02734 1.93798 0.02735 1.81494 0 1.92432 0.02051 0.11279 0.02051 0.18115 0.0581 0.07178 0.03418 0.14698 0.11279 0.07861 0.0752 0.11279 0.14698 0.0376 0.06836 0.04443 0.1333 0.00684 0.06152 0.00684 0.32471l0 0.37939-5.93701 0.01367-0.14014 0.02735q-0.34863 0.09912-0.63574 0.31787-0.28711 0.21533-0.44092 0.4956-0.08545 0.15381-0.51953 0.9878-0.43408 0.83057-0.45459 0.90234-0.02051 0.06836-0.02051 0.18115 0 0.11279 0.03418 0.20508 0.0376 0.08887 0.11963 0.18115 0.08545 0.08887 0.16748 0.1333 0.07178 0.02734 0.11279 0.03418 0.04102 0.00684 0.14014 0.00684 0.15381 0 0.24951-0.04102 0.09912-0.04443 0.16065-0.11963 0.06494-0.07861 0.17773-0.30078 0.09912-0.16748 0.3794-0.70752 0.28027-0.54004 0.37597-0.70752 0.12646-0.22217 0.18799-0.29052 0.06494-0.07178 0.17773-0.11621l0.09571-0.02735 6.53857 0 0.08545 0.04102q0.08203 0.05811 0.16748 0.15039 0.08545 0.08887 0.11963 0.18799 0.03418 0.0957 0.02734 0.21533-0.00684 0.11963-0.46142 1.89697-0.45459 1.77734-0.5127 1.86279-0.0957 0.19482-0.29394 0.2666-0.06836 0.02734-0.62891 0.02735l-8.12109 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.0957 0.04102z"
                    fill="#59606E"
                  ></path>
                </svg>
                <div
                  data-pencil-name="StateActionText"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Choose another file
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-pencil-name="StatusSection"
          style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 14px; height: fit-content; justify-content: flex-start; padding: 18px 20px; width: 100%"
        >
          <div
            data-pencil-name="StatusTitle"
            style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
          >
            Status labels
          </div>
          <div
            data-pencil-name="StatusSub"
            style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
          >
            Text and icon carry the meaning; colour reinforces it.
          </div>
          <div
            data-pencil-name="StatusRow"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; width: fit-content"
          >
            <div
              data-pencil-name="StatusPill"
              style="align-items: center; background-color: #E7EDFC; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 5px 11px; width: fit-content"
            >
              <svg
                data-pencil-name="StatusPillIcon"
                data-icon-name="loader-circle"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M6.4668 1.18945q-1.49707 0.14014-2.75147 0.99463-1.25098 0.85449-1.92431 2.19776-0.44775 0.89551-0.5879 1.93115-0.02734 0.16748-0.02734 0.68701 0 0.51953 0.02734 0.68701 0.16748 1.2168 0.75538 2.23877 0.58789 1.02197 1.55517 1.75 0.60156 0.46143 1.3501 0.74854 0.74854 0.28711 1.521 0.37255 0.23584 0.02734 0.61523 0.02735 0.37939 0 0.61523-0.02735 1.12109-0.12646 2.10547-0.64257 0.98779-0.51953 1.71582-1.36719 0.72803-0.84766 1.09375-1.92432 0.14014-0.44775 0.22217-0.91601 0.08545-0.47168 0.07178-0.86133 0-0.1709-0.00684-0.22559-0.00684-0.05469-0.03418-0.11279-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.09912 0.04102-0.18115 0.09912-0.25977 0.25293-0.0752 0.15381-0.08203 0.47168-0.00683 0.31445-0.09228 0.73144-0.28027 1.3877-1.30225 2.396-1.11768 1.104-2.7583 1.30225-0.18115 0.02734-0.5332 0.02734-0.34863 0-0.54346-0.02734-0.78271-0.11279-1.47656-0.44776-0.69385-0.33838-1.24072-0.88183-0.65625-0.65967-1.01514-1.51416-0.35547-0.85449-0.35547-1.79102 0-0.56055 0.11963-1.05615 0.11963-0.49902 0.35547-1.00147 0.33838-0.67334 0.88183-1.22363 0.54688-0.55371 1.24756-0.90576 0.50244-0.23584 0.99805-0.35547 0.49902-0.11963 1.05957-0.11963 0.3623 0 0.66309 0.04443 0.3042 0.04102 0.6665 0.15039 0.23926 0.05811 0.33496 0.05811 0.21191-0.02734 0.36572-0.17432 0.15381-0.14697 0.16748-0.35888 0.01367-0.15381-0.05127-0.29395-0.06152-0.14014-0.17089-0.22217-0.15723-0.09912-0.59131-0.20507-0.43066-0.10596-0.88184-0.14698-0.16748-0.01367-0.51611-0.01367-0.34863 0-0.51953 0.01367z"
                  fill="#2B5BD7"
                ></path>
              </svg>
              <div
                data-pencil-name="StatusPillText"
                style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Processing
              </div>
            </div>
            <div
              data-pencil-name="StatusPill"
              style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 5px 11px; width: fit-content"
            >
              <svg
                data-pencil-name="StatusPillIcon"
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
                data-pencil-name="StatusPillText"
                style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Ready
              </div>
            </div>
            <div
              data-pencil-name="StatusPill"
              style="align-items: center; background-color: #F8EFDD; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 5px 11px; width: fit-content"
            >
              <svg
                data-pencil-name="StatusPillIcon"
                data-icon-name="triangle-alert"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M6.87354 1.16211q-0.46143 0.02734-0.88184 0.30762-0.11279 0.08545-0.24609 0.22558-0.1333 0.14014-0.20166 0.23584-0.11279 0.16748-2.45069 4.26563-2.33789 4.09473-2.3789 4.19043-0.12646 0.29395-0.12647 0.64599-0.01367 0.19482 0.00684 0.32813 0.02051 0.1333 0.07861 0.30078 0.15381 0.43408 0.50244 0.73486 0.34863 0.30078 0.81348 0.39991 0.08203 0.02734 0.89551 0.02734l4.11523 0 4.22803 0q0.68701 0 0.79638-0.02734 0.50586-0.11279 0.86817-0.47852 0.51953-0.51611 0.51953-1.23047 0-0.42041-0.18115-0.78271-0.0581-0.09912-2.36866-4.14258-2.30713-4.04688-2.39257-4.18701-0.18115-0.29395-0.49561-0.50245-0.31445-0.21191-0.65283-0.28369-0.23584-0.04102-0.44775-0.02734z m0.37939 1.2168q0.0957 0.05811 0.15723 0.13671 0.06494 0.0752 2.42334 4.20411 2.36182 4.12891 2.38916 4.21435 0.06836 0.22559-0.05127 0.43408-0.11621 0.2085-0.35547 0.28028-0.06836 0.01367-0.85449 0.01367l-8.76368 0-0.11279-0.05469q-0.19482-0.08545-0.29394-0.29394-0.04102-0.09912-0.04102-0.23243 0-0.1333 0.04785-0.229 0.05127-0.09912 2.3584-4.15283 2.31055-4.05371 2.36865-4.13574 0.11279-0.15381 0.32813-0.2085 0.21533-0.05811 0.3999 0.0376l0-0.01367z m-0.40674 2.31054q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 2.46435q0 0.18115 0.03418 0.26661 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.26661l0-2.46435-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m0.05469 4.66211q-0.18115 0.02734-0.32129 0.16748-0.2085 0.21191-0.15381 0.50586 0.05469 0.29395 0.32129 0.42041 0.09912 0.04102 0.25293 0.04102 0.25293 0 0.42041-0.16748 0.12646-0.12646 0.15381-0.30762 0.05469-0.29394-0.15723-0.50244-0.2085-0.21191-0.51611-0.15723z"
                  fill="#8A5A00"
                ></path>
              </svg>
              <div
                data-pencil-name="StatusPillText"
                style='box-sizing: border-box; color: #8A5A00; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Needs review
              </div>
            </div>
            <div
              data-pencil-name="StatusPill"
              style="align-items: center; background-color: #FBE9E8; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 5px 11px; width: fit-content"
            >
              <svg
                data-pencil-name="StatusPillIcon"
                data-icon-name="circle-x"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-2.56348 2.89843q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25293 0.05127 0.08203 0.75196 0.79639l0.69726 0.70068-0.69726 0.70068q-0.70068 0.71436-0.75196 0.79981-0.04785 0.08203-0.04785 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04785 0.08545-0.05127 0.79981-0.75196l0.70068-0.69726 0.70068 0.69726q0.71436 0.70068 0.79639 0.75196 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-0.74854-0.79981l-0.68359-0.70068 0.68359-0.70068q0.70068-0.71436 0.74854-0.79639 0.05127-0.08545 0.05127-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367l-0.01367 0q-0.14014 0-0.21875 0.0376-0.0752 0.03418-0.24268 0.18799-0.12646 0.10938-0.54687 0.52978l-0.72803 0.7417-0.70068-0.69726q-0.43408-0.43408-0.56055-0.54688-0.18115-0.16748-0.25977-0.20166-0.0752-0.0376-0.20849-0.04443-0.1333-0.00684-0.17432 0.00683z"
                  fill="#B3261E"
                ></path>
              </svg>
              <div
                data-pencil-name="StatusPillText"
                style='box-sizing: border-box; color: #B3261E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                OCR failed
              </div>
            </div>
            <div
              data-pencil-name="StatusPill"
              style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 5px 11px; width: fit-content"
            >
              <svg
                data-pencil-name="StatusPillIcon"
                data-icon-name="unlink"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M4.57666 0.60156q-0.18115 0.01367-0.31445 0.14698-0.1333 0.1333-0.16065 0.31445-0.02734 0.09912-0.02734 0.98779 0 0.88867 0.02734 0.97412 0.02734 0.18115 0.15381 0.29395 0.19824 0.19482 0.46143 0.17431 0.2666-0.02051 0.42041-0.24609 0.07178-0.08203 0.08545-0.15723 0.01367-0.07861 0.02734-0.3042l0-1.72265-0.04102-0.0957q-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z m4.80225 0.05811q-0.92285 0.15381-1.63721 0.69726-0.16748 0.12646-0.76904 0.72803-0.60156 0.60156-0.63233 0.67334-0.0957 0.18115-0.06152 0.36572 0.03418 0.18115 0.16748 0.31446 0.1333 0.12988 0.32812 0.16064 0.19824 0.02734 0.36573-0.07178 0.05469-0.02734 0.64941-0.61523 0.59473-0.58789 0.7793-0.71436 0.30762-0.2085 0.62207-0.30078 0.31445-0.09229 0.69385-0.09228 0.56055 0 1.02197 0.22558 0.33496 0.16748 0.61523 0.44776 0.64258 0.62891 0.68701 1.55517 0.01367 0.37598-0.08545 0.75537-0.05469 0.15381-0.16064 0.37256-0.10596 0.21533-0.21875 0.36231-0.10938 0.14697-0.68359 0.73486-0.39307 0.39307-0.49219 0.49902-0.0957 0.10254-0.12305 0.17432-0.0581 0.16748-0.02392 0.32813 0.0376 0.16064 0.14697 0.28711 0.18457 0.18115 0.42041 0.18115 0.14014 0 0.21533-0.03418 0.07861-0.03418 0.23242-0.17432 0.11279-0.11279 0.47852-0.47851 0.58789-0.58789 0.71436-0.7417 0.55713-0.71436 0.71093-1.65088 0.04443-0.18115 0.04444-0.52295 0-0.34521-0.04444-0.52637-0.19482-1.16211-0.97754-1.94824-0.84082-0.8374-2.03027-0.99121-0.19824-0.03076-0.47852-0.03076-0.27686 0-0.47509 0.03076z m-8.30225 3.42822q-0.23584 0.04102-0.38281 0.24609-0.14697 0.20166-0.09229 0.44092 0.01367 0.0957 0.04785 0.16748 0.0376 0.06836 0.1128 0.14014 0.07861 0.06836 0.16064 0.11279l0.09912 0.04102 1.76367 0.01367q0.22559-0.01367 0.30079-0.02734 0.07861-0.01367 0.16064-0.08545 0.21191-0.14014 0.24609-0.36914 0.03418-0.23242-0.09912-0.43409-0.1333-0.20508-0.38281-0.23242-0.09912-0.02734-0.96728-0.02734-0.86816 0-0.96729 0.01367z m1.83545 2.19775q-0.09912 0.01367-0.1709 0.05811-0.06836 0.04102-0.51611 0.48193-0.44775 0.44092-0.65625 0.66309-0.36572 0.39307-0.58789 0.84082-0.32129 0.65967-0.35889 1.3877-0.03418 0.72803 0.22559 1.41503 0.25977 0.68359 0.77588 1.20313 0.82715 0.82373 2.0166 1.00488 0.18115 0.03076 0.47509 0.03076 0.29395 0 0.4751-0.03076 1.0083-0.13672 1.79444-0.79638 0.11279-0.09912 0.68359-0.67335 0.39307-0.38965 0.49219-0.4956 0.09912-0.10596 0.12646-0.17432 0.06836-0.22559-0.01025-0.43408-0.0752-0.21191-0.28369-0.30762-0.09912-0.0581-0.23926-0.0581l-0.01367 0q-0.14014 0-0.21192 0.03076-0.06836 0.02734-0.20849 0.15381-0.09912 0.0957-0.44776 0.44775l-0.02734 0.02735q-0.60156 0.58789-0.72803 0.68701-0.62891 0.46142-1.40137 0.46142-0.76904 0-1.39794-0.46142-0.19824-0.15723-0.38624-0.3794-0.18799-0.22559-0.30078-0.44775-0.23926-0.46143-0.24609-1.0083-0.00684-0.54688 0.21875-1.02197 0.10938-0.23926 0.24951-0.40674 0.14014-0.16748 0.63233-0.66992 0.61523-0.61865 0.64257-0.68702 0.09912-0.18115 0.05811-0.37939-0.04443-0.23584-0.23926-0.36914-0.19482-0.1333-0.43408-0.09229z m8.03564 2.47803q-0.08545 0.02734-0.18457 0.09229-0.0957 0.06152-0.15039 0.1333-0.12646 0.16748-0.11279 0.38623 0.01367 0.21533 0.18115 0.36914 0.12646 0.12646 0.29395 0.15381 0.09912 0.02734 0.98095 0.02734 0.88184 0 0.98096-0.02734 0.23584-0.04102 0.36914-0.23584 0.1333-0.19824 0.09229-0.4375-0.01367-0.0957-0.05127-0.16406-0.03418-0.07178-0.1128-0.14014-0.0752-0.07178-0.15722-0.11621l-0.09912-0.04102-0.98096-0.01367q-0.97754 0-1.04932 0.01367z m-1.75 1.75q-0.08545 0.02734-0.18457 0.09229-0.0957 0.06152-0.15039 0.1333-0.05811 0.08203-0.07861 0.16064-0.02051 0.0752-0.03418 0.31445l0.01367 1.76368 0.04102 0.09912q0.04443 0.08203 0.11279 0.16064 0.07178 0.0752 0.14014 0.1128 0.07178 0.03418 0.16748 0.04785 0.23926 0.04101 0.43408-0.09229 0.19824-0.1333 0.25293-0.36914 0.01367-0.09912 0.01367-0.98096 0-0.88184-0.02734-0.98095-0.02734-0.16748-0.15381-0.29395-0.09912-0.11279-0.25293-0.15381-0.15381-0.04102-0.29395-0.01367z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="StatusPillText"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                File missing
              </div>
            </div>
            <div
              data-pencil-name="StatusPill"
              style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 5px 11px; width: fit-content"
            >
              <svg
                data-pencil-name="StatusPillIcon"
                data-icon-name="search-x"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M6.00537 1.17578q-0.04102 0.01367-0.23584 0.02734-0.57422 0.07178-1.16211 0.29053-0.58789 0.21533-1.09375 0.5503-0.39307 0.2666-0.74853 0.61181-0.35547 0.3418-0.62207 0.7041-0.646 0.92285-0.86817 2.03028-0.05811 0.28027-0.07861 0.46142-0.02051 0.18115-0.02051 0.57422 0 0.43408 0.02734 0.68018 0.02734 0.24268 0.12647 0.59472 0.19482 0.75537 0.60156 1.43555 0.40674 0.67676 0.96729 1.18262 0.40674 0.3623 0.81689 0.60156 0.41357 0.23926 0.91944 0.43408 1.06299 0.39307 2.21826 0.29395 1.15527-0.09912 2.1499-0.65967 0.12646-0.06836 0.33496-0.2085 0.2085-0.14014 0.29395-0.21191l0.05468-0.05469 1.10743 1.10742q1.12109 1.104 1.20312 1.15528 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-1.15186-1.20654l-1.10742-1.10743 0.05469-0.06836q0.05811-0.05469 0.19824-0.25293 0.82373-1.23047 0.89209-2.70703 0.07178-1.47656-0.63916-2.76513-0.5332-0.96729-1.42187-1.64405-0.88867-0.68018-1.95508-0.9331-0.29395-0.06836-0.54004-0.09571-0.24268-0.03076-0.60498-0.04443-0.43408 0-0.49219 0z m0.7417 1.17578q0.37939 0.01367 0.79297 0.14014 0.41357 0.12646 0.78955 0.32129 0.7417 0.39307 1.28857 1.08008 0.54687 0.68359 0.75538 1.49707 0.07178 0.28027 0.09228 0.49902 0.02051 0.21533 0.02051 0.50928 0 0.70068-0.19483 1.30224-0.39307 1.16211-1.33984 1.91065-0.94336 0.74853-2.16016 0.875-0.19824 0.01367-0.49218 0.00683-0.29395-0.00684-0.48877-0.03418-0.5332-0.08545-1.03907-0.30761-0.50244-0.22559-0.93652-0.56055-0.14014-0.12646-0.35205-0.3418-0.2085-0.21875-0.33154-0.37256-0.57422-0.76904-0.7417-1.69531-0.08545-0.43408-0.06494-0.90918 0.02051-0.4751 0.11963-0.89551 0.29395-1.14844 1.18945-1.95849 0.89551-0.81348 2.05762-1.02539 0.18115-0.02734 0.42041-0.04102 0.23926-0.01367 0.34863-0.01367l0.2666 0.01367z m-1.93115 2.04395q-0.19482 0.04102-0.32129 0.21875-0.12646 0.17432-0.11279 0.38281 0 0.11279 0.04101 0.19141 0.04443 0.0752 0.16748 0.229 0.11279 0.11279 0.45117 0.44775l0.54346 0.56055-0.58789 0.60156q-0.34863 0.33496-0.43408 0.43409-0.12646 0.14014-0.15381 0.21191-0.02734 0.06836-0.02734 0.19482l0 0.01368q0 0.14014 0.05468 0.23925 0.09912 0.2085 0.30762 0.29395 0.21191 0.08203 0.4375 0 0.06836-0.02734 0.16406-0.11963 0.09912-0.09229 0.50586-0.48193l0.56055-0.56055 0.57422 0.56055q0.34863 0.34863 0.46142 0.44775 0.14014 0.12646 0.2085 0.15381 0.07178 0.02734 0.21191 0.02734 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.17432-0.12646 0.09229-0.09229 0.12647-0.17432 0.0376-0.08545 0.03759-0.23926 0-0.14014-0.03076-0.20849-0.02734-0.07178-0.15039-0.21192-0.09912-0.11279-0.44775-0.46142l-0.56055-0.57422 0.56055-0.57422q0.38965-0.39307 0.47851-0.48877 0.09229-0.09912 0.12305-0.16748 0.08203-0.22559-0.00342-0.43408-0.08203-0.21191-0.29053-0.31104-0.09912-0.05469-0.23925-0.05468l-0.01368 0q-0.12646 0-0.19824 0.02734-0.06836 0.02734-0.20849 0.15381-0.09912 0.09912-0.44776 0.43408l-0.58789 0.58789-0.56055-0.54346q-0.34863-0.35205-0.46826-0.46142-0.11963-0.11279-0.19824-0.14697-0.0752-0.0376-0.18799-0.05127-0.10938-0.01367-0.19482 0.01367z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="StatusPillText"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                No results
              </div>
            </div>
            <div
              data-pencil-name="StatusPill"
              style="align-items: center; background-color: #FBE9E8; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 5px 11px; width: fit-content"
            >
              <svg
                data-pencil-name="StatusPillIcon"
                data-icon-name="file-x"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M3.33252 0.60156q-0.58789 0.04102-1.02197 0.44776-0.43408 0.40674-0.53321 0.99463-0.02734 0.16748-0.02734 4.95605 0 4.78857 0.02734 4.95605 0.09912 0.5332 0.46827 0.92627 0.37256 0.38965 0.90576 0.50245 0.10938 0.01367 0.66992 0.02734l3.17871 0 3.17871 0q0.56055-0.01367 0.66992-0.02734 0.5332-0.11279 0.90235-0.50245 0.37256-0.39307 0.47168-0.92627 0.02734-0.16748 0.02734-3.80078 0-3.6333-0.02734-3.80078-0.08545-0.51953-0.40674-0.92285-0.11279-0.14014-1.24756-1.2749-0.89551-0.88184-1.10742-1.06983-0.2085-0.19141-0.41699-0.29052-0.30762-0.15381-0.67334-0.19483-0.14014-0.02734-2.4917-0.02734-2.35156 0-2.54639 0.02734z m4.25537 2.42334l0 1.27149 0.04102 0.14013q0.08545 0.22559 0.24609 0.40674 0.16064 0.18115 0.35547 0.28028 0.14014 0.07178 0.22558 0.08544 0.12646 0.02734 0.40674 0.04102l2.21143 0 0 6.11816q0 0.43408-0.0376 0.51954-0.03418 0.08203-0.11963 0.17431-0.08203 0.08887-0.16406 0.1333l-0.09912 0.04102-7.30762 0-0.09912-0.04102q-0.08203-0.04443-0.16748-0.1333-0.08203-0.09228-0.11963-0.17431-0.03418-0.08545-0.03418-0.70069l0-4.18701 0-4.18701q0-0.61523 0.02734-0.6836 0.05811-0.12646 0.16749-0.23242 0.11279-0.10596 0.23925-0.1333 0.08545-0.01367 2.14307-0.01367l2.07129 0 0.01367 1.2749z m2.21143 0.01367l1.03564 1.03565-2.08496 0 0-1.03565q0-1.03564 0-1.04931l1.04932 1.04931z m-4.3545 3.68116q-0.28027 0.04102-0.42041 0.30761-0.13672 0.2666 0 0.54688 0.04443 0.06836 0.58789 0.61523l0.56055 0.56055-0.56055 0.56055q-0.54346 0.54688-0.58789 0.61523-0.13672 0.28027-0.00683 0.54004 0.1333 0.25977 0.42724 0.31445 0.19824 0.04102 0.3794-0.05468 0.06836-0.04443 0.61523-0.58789l0.56055-0.56055 0.56055 0.56055q0.54688 0.54346 0.61523 0.58789 0.2666 0.13672 0.5332 0.00683 0.2666-0.1333 0.32129-0.42724 0.04102-0.19824-0.05468-0.3794-0.04443-0.06836-0.59131-0.61523l-0.54346-0.56055 0.54346-0.56055q0.54688-0.54688 0.59131-0.61523 0.10938-0.22559 0.03076-0.45459-0.0752-0.23242-0.28369-0.34522-0.12646-0.05469-0.28028-0.05468-0.15381 0-0.2666 0.07177-0.08545 0.04102-0.62891 0.58789l-0.54687 0.52979-0.54688-0.52979q-0.54346-0.54688-0.6289-0.59472-0.08545-0.05127-0.25293-0.07862-0.02734 0-0.12647 0.01368z"
                  fill="#B3261E"
                ></path>
              </svg>
              <div
                data-pencil-name="StatusPillText"
                style='box-sizing: border-box; color: #B3261E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Import failed
              </div>
            </div>
            <div
              data-pencil-name="StatusPill"
              style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 5px 11px; width: fit-content"
            >
              <svg
                data-pencil-name="StatusPillIcon"
                data-icon-name="circle-dashed"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 13px; width: 13px"
              >
                <path
                  d="M6.66504 0.60156q-0.33838 0.01367-0.63916 0.05811-0.30078 0.04102-0.39649 0.0957-0.1709 0.08545-0.26318 0.25977-0.08887 0.17432-0.04785 0.35547 0.05811 0.29395 0.32471 0.42041 0.08203 0.05811 0.19482 0.0581 0.11279 0 0.32813-0.02734 0.21875-0.03076 0.42724-0.05811 0.58789-0.04102 1.26123 0.05469 0.19482 0.03076 0.30762 0.03076 0.11279 0 0.19482-0.0581 0.32471-0.15381 0.32471-0.51612 0.01367-0.16748-0.07178-0.30761-0.08545-0.14014-0.22558-0.2085-0.13672-0.07178-0.61524-0.12988-0.0957-0.01367-0.44775-0.03418-0.34863-0.02051-0.37598-0.02051l-0.28027 0.02734z m-3.09668 1.0083q-0.19482 0.07178-0.64941 0.45118-0.45459 0.37598-0.77588 0.75195-0.12646 0.14014-0.28711 0.36572-0.16064 0.22217-0.20508 0.30078-0.04102 0.0752-0.05469 0.18799-0.01367 0.11279 0.01367 0.21191 0.04102 0.18115 0.20166 0.30762 0.16406 0.12646 0.34522 0.12647 0.30762 0 0.51611-0.28028 0.33838-0.46484 0.61524-0.74853 0.28027-0.28711 0.74511-0.61182 0.15381-0.10938 0.22217-0.229 0.07178-0.11963 0.07178-0.28711 0-0.29395-0.2461-0.46826-0.24609-0.17773-0.51269-0.07862z m6.51123 0.01368q-0.19482 0.07178-0.28027 0.22558-0.06836 0.08203-0.08203 0.14697-0.01367 0.06152-0.01368 0.16065 0 0.30762 0.23584 0.48877l0.22559 0.16748q0.62891 0.46143 1.13135 1.17578 0.09912 0.14014 0.16748 0.20508 0.07178 0.06152 0.1709 0.08886 0.33496 0.12646 0.61523-0.12304 0.12646-0.12646 0.16064-0.31446 0.03418-0.19141-0.04785-0.35888-0.04443-0.07178-0.21191-0.30078-0.16748-0.23242-0.29395-0.37256-0.44775-0.51611-1.02197-0.9502-0.22217-0.16748-0.31445-0.20849-0.08887-0.04443-0.22901-0.05127-0.14014-0.00684-0.21191 0.02051z m-8.90381 3.69482q-0.12646 0.03076-0.24609 0.11621-0.11621 0.08203-0.17432 0.18115-0.08203 0.18115-0.14014 0.72119-0.05469 0.53662-0.02734 0.98438 0.04102 0.57422 0.11279 0.89551 0.08203 0.35205 0.43409 0.44775 0.18115 0.05811 0.37597-0.03076 0.19824-0.09229 0.28028-0.27686 0.05811-0.10938 0.0581-0.20849 0-0.09912-0.03076-0.29395-0.12305-0.85449 0-1.70898 0.03076-0.19482 0.03076-0.29395 0-0.09912-0.0581-0.19482-0.06836-0.18115-0.25293-0.27344-0.18115-0.09229-0.36231-0.06494z m11.45362 0q-0.31104 0.05811-0.43409 0.33838-0.04443 0.0957-0.04443 0.19482 0 0.09912 0.02734 0.31787 0.03076 0.21533 0.05811 0.42383 0.04102 0.58789-0.05469 1.26123-0.03076 0.19482-0.03076 0.29395 0 0.09912 0.0581 0.20849 0.08203 0.18457 0.27686 0.27686 0.19824 0.08887 0.37939 0.03076 0.35205-0.0957 0.43409-0.44775 0.07178-0.32129 0.11279-0.89551 0.02734-0.44775-0.03076-0.98438-0.05469-0.54004-0.14014-0.70752-0.08203-0.1709-0.26318-0.25293-0.18115-0.08545-0.34863-0.0581z m-10.62647 4.36816q-0.09912 0.04443-0.21191 0.12989-0.10938 0.08203-0.14014 0.15039-0.14014 0.28027-0.01367 0.54687 0.04443 0.08545 0.22558 0.32129 0.56055 0.7417 1.30225 1.30225 0.23584 0.18115 0.31787 0.22558 0.08545 0.04102 0.24609 0.04102 0.16406 0 0.2461-0.05469 0.14014-0.07178 0.229-0.19824 0.09229-0.12646 0.09229-0.28028 0.01709-0.19482-0.06153-0.31445-0.0752-0.11963-0.32812-0.31445-0.37939-0.29395-0.65283-0.57422-0.27344-0.28027-0.58106-0.70068-0.08203-0.10938-0.14697-0.16407-0.06152-0.05811-0.14697-0.08544-0.08203-0.03076-0.20166-0.0376-0.11963-0.00684-0.17432 0.00683z m9.67285 0.03077q-0.12647 0.02734-0.21191 0.10595-0.08203 0.0752-0.18116 0.21533-0.48877 0.66992-1.11767 1.14844-0.25293 0.18115-0.32471 0.24609-0.06836 0.06152-0.10937 0.14356-0.07178 0.1709-0.04444 0.35205 0.03076 0.18115 0.15381 0.31445 0.12646 0.1333 0.30762 0.16749 0.18457 0.03418 0.35205-0.04786 0.08545-0.02734 0.31445-0.20166 0.23242-0.17774 0.37256-0.3042 0.51611-0.44775 0.9502-1.02197 0.18115-0.23584 0.22216-0.31787 0.04443-0.08545 0.04444-0.24609 0-0.16406-0.04102-0.2461-0.09912-0.18457-0.28027-0.2666-0.08545-0.05469-0.22559-0.05469-0.14014 0-0.18115 0.01368z m-5.93701 2.44726q-0.10938 0.03076-0.21533 0.11621-0.10596 0.08203-0.14698 0.17774-0.14014 0.25293-0.01367 0.51269 0.12646 0.25977 0.42041 0.33154 0.29395 0.06836 0.7417 0.09571 0.44775 0.02734 0.79639 0.01367 0.57422-0.04101 0.89551-0.11279 0.21191-0.05469 0.34521-0.2085 0.1333-0.15381 0.11963-0.36572 0-0.3623-0.32471-0.51612-0.08203-0.0581-0.21533-0.0581-0.1333 0-0.41357 0.04443-0.16748 0.02734-0.29395 0.03418-0.12646 0.00684-0.44775 0.00684-0.46143 0-0.71436-0.04102-0.43408-0.07178-0.5332-0.03076z"
                  fill="#8A909C"
                ></path>
              </svg>
              <div
                data-pencil-name="StatusPillText"
                style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Empty
              </div>
            </div>
          </div>
        </div>
        <div
          data-pencil-name="ButtonSection"
          style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 14px; height: fit-content; justify-content: flex-start; padding: 18px 20px; width: 100%"
        >
          <div
            data-pencil-name="ButtonTitle"
            style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
          >
            Buttons
          </div>
          <div
            data-pencil-name="ButtonSub"
            style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
          >
            One filled action per screen. Hover darkens; disabled drops to a neutral surface.
          </div>
          <div
            data-pencil-name="ButtonHeaderRow"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="ButtonHeaderSpacer"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 1px; justify-content: flex-start; width: 120px"
            ></div>
            <div
              data-pencil-name="ButtonHeaderCell"
              style='box-sizing: border-box; color: #8A909C; flex-shrink: 0; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; width: 180px'
            >
              Default
            </div>
            <div
              data-pencil-name="ButtonHeaderCell"
              style='box-sizing: border-box; color: #8A909C; flex-shrink: 0; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; width: 180px'
            >
              Hover
            </div>
            <div
              data-pencil-name="ButtonHeaderCell"
              style='box-sizing: border-box; color: #8A909C; flex-shrink: 0; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; width: 180px'
            >
              Disabled
            </div>
          </div>
          <div
            data-pencil-name="ButtonRow"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="ButtonRowLabel"
              style='box-sizing: border-box; color: #59606E; flex-shrink: 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 120px'
            >
              Primary
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #2B5BD7; border-radius: 10px; border: 1px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="folder"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Save to Library
              </div>
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #1F49B8; border-radius: 10px; border: 1px solid #1F49B8; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="folder"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Save to Library
              </div>
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #E4E7EC; border-radius: 10px; border: 1px solid #E4E7EC; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="folder"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                  fill="#8A909C"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Save to Library
              </div>
            </div>
          </div>
          <div
            data-pencil-name="ButtonRow"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="ButtonRowLabel"
              style='box-sizing: border-box; color: #59606E; flex-shrink: 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 120px'
            >
              Outline
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="folder"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                  fill="#16181D"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Move to Folder
              </div>
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #EEEFF2; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="folder"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                  fill="#16181D"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Move to Folder
              </div>
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #EEEFF2; border-radius: 10px; border: 1px solid #EEEFF2; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="folder"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.97559 1.20313q-0.47852 0.09912-0.83741 0.44433-0.35547 0.3418-0.4956 0.80322-0.04102 0.14014-0.04102 0.34864-0.01367 0.2666-0.02734 1.13476l0.01367 6.23096q0.01367 0.61523 0.02734 0.69726 0.14014 0.54688 0.51612 0.90577 0.37939 0.35547 0.9126 0.45459 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0-2.59082q0.01367-3.03857 0-3.20605-0.07178-0.50586-0.34863-0.88184-0.36572-0.4751-0.96729-0.64599l-0.14014-0.04102-5.0415-0.01367-0.0957-0.04102q-0.11279-0.05811-0.1709-0.11279-0.05469-0.05469-0.33496-0.4751-0.22217-0.32471-0.34863-0.47851-0.12646-0.15381-0.25293-0.24951-0.11279-0.08545-0.26661-0.17432-0.15381-0.09229-0.26318-0.11963-0.21191-0.07178-0.43066-0.07861-0.21533-0.00684-1.27832-0.00684l-1.16211 0q-0.23926 0.01367-0.33496 0.02735z m2.88134 1.17578q0.11279 0.05811 0.17432 0.12988 0.06494 0.06836 0.33838 0.4751 0.27344 0.40332 0.44092 0.5708 0.33496 0.33838 0.79638 0.47851l0.14014 0.04102 2.52246 0q2.51904 0.01367 2.57373 0.03418 0.05811 0.02051 0.14014 0.07861 0.08545 0.05469 0.12646 0.09912 0.04102 0.04102 0.08545 0.13672l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394l-0.04102-0.09912 0-7.88184 0.04102-0.09912q0.05811-0.12646 0.16748-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.01367 1.30224-0.01367l1.22022 0 0.10937 0.04102z"
                  fill="#8A909C"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Move to Folder
              </div>
            </div>
          </div>
          <div
            data-pencil-name="ButtonRow"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="ButtonRowLabel"
              style='box-sizing: border-box; color: #59606E; flex-shrink: 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 120px'
            >
              Ghost
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #FFFFFF00; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="external-link"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M8.59619 1.18945q-0.11279 0.02734-0.21875 0.11963-0.10254 0.09229-0.15381 0.18457-0.04785 0.08887-0.04785 0.25635 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.15381 0.12646l0.08545 0.04102 2.25244 0-2.74463 2.7583q-1.85938 1.86279-2.30713 2.32422-0.44775 0.46143-0.47851 0.51611-0.10938 0.23926-0.01367 0.46485 0.09912 0.22217 0.32128 0.32128 0.22559 0.0957 0.46485-0.01367 0.05469-0.03076 0.51611-0.47851 0.46143-0.44775 2.32422-2.30713l2.7583-2.74463 0 2.25244 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-3.84863-0.04102-0.08545q-0.04443-0.06836-0.12304-0.14356-0.0752-0.07861-0.14356-0.12304l-0.08545-0.04102-1.90381 0q-1.89014 0-1.93115 0.01367z m-5.9917 1.76368q-0.50586 0.08545-0.87842 0.4375-0.36914 0.34863-0.50927 0.86474-0.02734 0.08545-0.02735 0.58789l-0.01367 3.03858 0.01367 3.0249q0 0.50244 0.02735 0.58789 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.58789 0.02735l3.0249 0.01367 3.03858-0.01367q0.50244 0 0.58789-0.02735 0.98096-0.2666 1.28857-1.26123 0.02734-0.08545 0.02735-0.34863l0.01367-3.69824-0.02735-0.09571q-0.08545-0.21191-0.29394-0.3247-0.07178-0.02734-0.11279-0.03418-0.04102-0.00684-0.14014-0.00684-0.15381 0-0.23926 0.0376-0.08203 0.03418-0.16748 0.11963-0.08203 0.08203-0.12646 0.16406l-0.04102 0.09912-0.01367 3.78027-0.04102 0.09913q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-3.31201 0.02734-3.21289 0-3.31201-0.02734-0.29395-0.05811-0.43408-0.33496l-0.04102-0.09913 0-6.67871 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 3.78028-0.01367 0.09912-0.04102q0.08203-0.04443 0.16406-0.12646 0.08545-0.08545 0.12647-0.17432 0.04443-0.09229 0.03759-0.23926-0.00684-0.14697-0.05127-0.23584-0.04102-0.09229-0.1333-0.17431-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.34864-0.0376l-1.66455 0q-1.90381 0-2.0166 0.02735z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Reveal in Explorer
              </div>
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #EEEFF2; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="external-link"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M8.59619 1.18945q-0.11279 0.02734-0.21875 0.11963-0.10254 0.09229-0.15381 0.18457-0.04785 0.08887-0.04785 0.25635 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.15381 0.12646l0.08545 0.04102 2.25244 0-2.74463 2.7583q-1.85938 1.86279-2.30713 2.32422-0.44775 0.46143-0.47851 0.51611-0.10938 0.23926-0.01367 0.46485 0.09912 0.22217 0.32128 0.32128 0.22559 0.0957 0.46485-0.01367 0.05469-0.03076 0.51611-0.47851 0.46143-0.44775 2.32422-2.30713l2.7583-2.74463 0 2.25244 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-3.84863-0.04102-0.08545q-0.04443-0.06836-0.12304-0.14356-0.0752-0.07861-0.14356-0.12304l-0.08545-0.04102-1.90381 0q-1.89014 0-1.93115 0.01367z m-5.9917 1.76368q-0.50586 0.08545-0.87842 0.4375-0.36914 0.34863-0.50927 0.86474-0.02734 0.08545-0.02735 0.58789l-0.01367 3.03858 0.01367 3.0249q0 0.50244 0.02735 0.58789 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.58789 0.02735l3.0249 0.01367 3.03858-0.01367q0.50244 0 0.58789-0.02735 0.98096-0.2666 1.28857-1.26123 0.02734-0.08545 0.02735-0.34863l0.01367-3.69824-0.02735-0.09571q-0.08545-0.21191-0.29394-0.3247-0.07178-0.02734-0.11279-0.03418-0.04102-0.00684-0.14014-0.00684-0.15381 0-0.23926 0.0376-0.08203 0.03418-0.16748 0.11963-0.08203 0.08203-0.12646 0.16406l-0.04102 0.09912-0.01367 3.78027-0.04102 0.09913q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-3.31201 0.02734-3.21289 0-3.31201-0.02734-0.29395-0.05811-0.43408-0.33496l-0.04102-0.09913 0-6.67871 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 3.78028-0.01367 0.09912-0.04102q0.08203-0.04443 0.16406-0.12646 0.08545-0.08545 0.12647-0.17432 0.04443-0.09229 0.03759-0.23926-0.00684-0.14697-0.05127-0.23584-0.04102-0.09229-0.1333-0.17431-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.34864-0.0376l-1.66455 0q-1.90381 0-2.0166 0.02735z"
                  fill="#16181D"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Reveal in Explorer
              </div>
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #FFFFFF00; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="external-link"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M8.59619 1.18945q-0.11279 0.02734-0.21875 0.11963-0.10254 0.09229-0.15381 0.18457-0.04785 0.08887-0.04785 0.25635 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.15381 0.12646l0.08545 0.04102 2.25244 0-2.74463 2.7583q-1.85938 1.86279-2.30713 2.32422-0.44775 0.46143-0.47851 0.51611-0.10938 0.23926-0.01367 0.46485 0.09912 0.22217 0.32128 0.32128 0.22559 0.0957 0.46485-0.01367 0.05469-0.03076 0.51611-0.47851 0.46143-0.44775 2.32422-2.30713l2.7583-2.74463 0 2.25244 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-3.84863-0.04102-0.08545q-0.04443-0.06836-0.12304-0.14356-0.0752-0.07861-0.14356-0.12304l-0.08545-0.04102-1.90381 0q-1.89014 0-1.93115 0.01367z m-5.9917 1.76368q-0.50586 0.08545-0.87842 0.4375-0.36914 0.34863-0.50927 0.86474-0.02734 0.08545-0.02735 0.58789l-0.01367 3.03858 0.01367 3.0249q0 0.50244 0.02735 0.58789 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.58789 0.02735l3.0249 0.01367 3.03858-0.01367q0.50244 0 0.58789-0.02735 0.98096-0.2666 1.28857-1.26123 0.02734-0.08545 0.02735-0.34863l0.01367-3.69824-0.02735-0.09571q-0.08545-0.21191-0.29394-0.3247-0.07178-0.02734-0.11279-0.03418-0.04102-0.00684-0.14014-0.00684-0.15381 0-0.23926 0.0376-0.08203 0.03418-0.16748 0.11963-0.08203 0.08203-0.12646 0.16406l-0.04102 0.09912-0.01367 3.78027-0.04102 0.09913q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-3.31201 0.02734-3.21289 0-3.31201-0.02734-0.29395-0.05811-0.43408-0.33496l-0.04102-0.09913 0-6.67871 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 3.78028-0.01367 0.09912-0.04102q0.08203-0.04443 0.16406-0.12646 0.08545-0.08545 0.12647-0.17432 0.04443-0.09229 0.03759-0.23926-0.00684-0.14697-0.05127-0.23584-0.04102-0.09229-0.1333-0.17431-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.34864-0.0376l-1.66455 0q-1.90381 0-2.0166 0.02735z"
                  fill="#8A909C"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Reveal in Explorer
              </div>
            </div>
          </div>
          <div
            data-pencil-name="ButtonRow"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="ButtonRowLabel"
              style='box-sizing: border-box; color: #59606E; flex-shrink: 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 120px'
            >
              Danger
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #FBE9E8; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="trash-2"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M5.65674 0.60156q-0.44775 0.04102-0.84766 0.32129-0.3999 0.28027-0.58105 0.70069-0.08545 0.21191-0.1128 0.37939-0.02734 0.16748-0.02734 0.50244l-0.01367 0.42041-2.4917 0-0.08545 0.05469q-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.14697 0.11963 0.06494 0.03418 0.13331 0.04101 0.07178 0.00684 0.33496 0.00684l0.36572 0 0.01367 7.84082 0.04102 0.16748q0.07178 0.25293 0.18115 0.44092 0.11279 0.18799 0.29394 0.37256 0.18457 0.18115 0.37256 0.29394 0.18799 0.10938 0.44092 0.18115l0.16748 0.04102 6.33008 0 0.16748-0.04102q0.25293-0.07178 0.44092-0.18115 0.18799-0.11279 0.36914-0.29394 0.18457-0.18457 0.29394-0.37256 0.11279-0.18799 0.18457-0.44092l0.04102-0.16748 0.01367-7.84082 0.36572 0q0.26318 0 0.33155-0.00684 0.07178-0.00684 0.1333-0.04101 0.06494-0.0376 0.14697-0.11963 0.08545-0.08545 0.12647-0.16065 0.04443-0.07861 0.04443-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-2.4917 0-0.01367-0.42041q0-0.28027-0.00684-0.37598-0.00684-0.09912-0.03418-0.21191-0.15381-0.56055-0.57422-0.91602-0.42041-0.35889-0.99462-0.41357-0.16748-0.01367-1.31592-0.00684-1.14844 0.00684-1.32959 0.02051z m2.74463 1.20313q0.19482 0.09912 0.29394 0.29394 0.02734 0.07178 0.03418 0.13672 0.00684 0.06152 0.02051 0.32813l0 0.3623-3.5 0 0-0.3623q0.01367-0.2666 0.02051-0.32813 0.00684-0.06494 0.03418-0.13672 0.08545-0.18115 0.22558-0.24951l0-0.01367q0.08203-0.04443 0.16748-0.05811 0.08545-0.01367 0.36573-0.02734l2.23877 0.01367 0.09912 0.04102z m2.09863 6.13183l-0.01367 3.86573-0.02735 0.08545q-0.12646 0.26318-0.37939 0.33496-0.08203 0.02734-3.07959 0.02734-2.99756 0-3.07959-0.02734-0.25293-0.07178-0.37939-0.33496l-0.02735-0.08545-0.01367-7.72803 7 0 0 3.8623z m-4.7749-2.08496q-0.12646 0.01367-0.2461 0.10596-0.11621 0.08887-0.17431 0.21533l-0.04102 0.09912-0.01367 3.33252q0.01367 0.3623 0.02734 0.4751 0.01367 0.08545 0.07178 0.15381l0.01367 0.02734q0.15381 0.21191 0.417 0.23242 0.2666 0.02051 0.46484-0.17431 0.12646-0.12646 0.15381-0.29395 0.02734-0.11279 0.02734-1.86279 0-1.75-0.02734-1.84912-0.04102-0.23584-0.23242-0.36914-0.18799-0.1333-0.44092-0.09229z m2.35156 0q-0.18115 0.01367-0.31445 0.14698-0.1333 0.1333-0.16065 0.31445-0.02734 0.09912-0.02734 1.86279 0 1.76367 0.02734 1.86279 0.02734 0.16748 0.15381 0.28028 0.19824 0.19482 0.46143 0.17431 0.2666-0.02051 0.42041-0.24609l0.01367-0.01367q0.05811-0.08203 0.07178-0.15381 0.01367-0.12646 0.02734-0.4751l0-3.2915-0.04102-0.0957q-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z"
                  fill="#B3261E"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #B3261E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Delete
              </div>
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #F6DAD7; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="trash-2"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M5.65674 0.60156q-0.44775 0.04102-0.84766 0.32129-0.3999 0.28027-0.58105 0.70069-0.08545 0.21191-0.1128 0.37939-0.02734 0.16748-0.02734 0.50244l-0.01367 0.42041-2.4917 0-0.08545 0.05469q-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.14697 0.11963 0.06494 0.03418 0.13331 0.04101 0.07178 0.00684 0.33496 0.00684l0.36572 0 0.01367 7.84082 0.04102 0.16748q0.07178 0.25293 0.18115 0.44092 0.11279 0.18799 0.29394 0.37256 0.18457 0.18115 0.37256 0.29394 0.18799 0.10938 0.44092 0.18115l0.16748 0.04102 6.33008 0 0.16748-0.04102q0.25293-0.07178 0.44092-0.18115 0.18799-0.11279 0.36914-0.29394 0.18457-0.18457 0.29394-0.37256 0.11279-0.18799 0.18457-0.44092l0.04102-0.16748 0.01367-7.84082 0.36572 0q0.26318 0 0.33155-0.00684 0.07178-0.00684 0.1333-0.04101 0.06494-0.0376 0.14697-0.11963 0.08545-0.08545 0.12647-0.16065 0.04443-0.07861 0.04443-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-2.4917 0-0.01367-0.42041q0-0.28027-0.00684-0.37598-0.00684-0.09912-0.03418-0.21191-0.15381-0.56055-0.57422-0.91602-0.42041-0.35889-0.99462-0.41357-0.16748-0.01367-1.31592-0.00684-1.14844 0.00684-1.32959 0.02051z m2.74463 1.20313q0.19482 0.09912 0.29394 0.29394 0.02734 0.07178 0.03418 0.13672 0.00684 0.06152 0.02051 0.32813l0 0.3623-3.5 0 0-0.3623q0.01367-0.2666 0.02051-0.32813 0.00684-0.06494 0.03418-0.13672 0.08545-0.18115 0.22558-0.24951l0-0.01367q0.08203-0.04443 0.16748-0.05811 0.08545-0.01367 0.36573-0.02734l2.23877 0.01367 0.09912 0.04102z m2.09863 6.13183l-0.01367 3.86573-0.02735 0.08545q-0.12646 0.26318-0.37939 0.33496-0.08203 0.02734-3.07959 0.02734-2.99756 0-3.07959-0.02734-0.25293-0.07178-0.37939-0.33496l-0.02735-0.08545-0.01367-7.72803 7 0 0 3.8623z m-4.7749-2.08496q-0.12646 0.01367-0.2461 0.10596-0.11621 0.08887-0.17431 0.21533l-0.04102 0.09912-0.01367 3.33252q0.01367 0.3623 0.02734 0.4751 0.01367 0.08545 0.07178 0.15381l0.01367 0.02734q0.15381 0.21191 0.417 0.23242 0.2666 0.02051 0.46484-0.17431 0.12646-0.12646 0.15381-0.29395 0.02734-0.11279 0.02734-1.86279 0-1.75-0.02734-1.84912-0.04102-0.23584-0.23242-0.36914-0.18799-0.1333-0.44092-0.09229z m2.35156 0q-0.18115 0.01367-0.31445 0.14698-0.1333 0.1333-0.16065 0.31445-0.02734 0.09912-0.02734 1.86279 0 1.76367 0.02734 1.86279 0.02734 0.16748 0.15381 0.28028 0.19824 0.19482 0.46143 0.17431 0.2666-0.02051 0.42041-0.24609l0.01367-0.01367q0.05811-0.08203 0.07178-0.15381 0.01367-0.12646 0.02734-0.4751l0-3.2915-0.04102-0.0957q-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z"
                  fill="#B3261E"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #B3261E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Delete
              </div>
            </div>
            <div
              data-pencil-name="BtnSample"
              style="align-items: center; background-color: #EEEFF2; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 10px 18px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnSampleIcon"
                data-icon-name="trash-2"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M5.65674 0.60156q-0.44775 0.04102-0.84766 0.32129-0.3999 0.28027-0.58105 0.70069-0.08545 0.21191-0.1128 0.37939-0.02734 0.16748-0.02734 0.50244l-0.01367 0.42041-2.4917 0-0.08545 0.05469q-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.14697 0.11963 0.06494 0.03418 0.13331 0.04101 0.07178 0.00684 0.33496 0.00684l0.36572 0 0.01367 7.84082 0.04102 0.16748q0.07178 0.25293 0.18115 0.44092 0.11279 0.18799 0.29394 0.37256 0.18457 0.18115 0.37256 0.29394 0.18799 0.10938 0.44092 0.18115l0.16748 0.04102 6.33008 0 0.16748-0.04102q0.25293-0.07178 0.44092-0.18115 0.18799-0.11279 0.36914-0.29394 0.18457-0.18457 0.29394-0.37256 0.11279-0.18799 0.18457-0.44092l0.04102-0.16748 0.01367-7.84082 0.36572 0q0.26318 0 0.33155-0.00684 0.07178-0.00684 0.1333-0.04101 0.06494-0.0376 0.14697-0.11963 0.08545-0.08545 0.12647-0.16065 0.04443-0.07861 0.04443-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-2.4917 0-0.01367-0.42041q0-0.28027-0.00684-0.37598-0.00684-0.09912-0.03418-0.21191-0.15381-0.56055-0.57422-0.91602-0.42041-0.35889-0.99462-0.41357-0.16748-0.01367-1.31592-0.00684-1.14844 0.00684-1.32959 0.02051z m2.74463 1.20313q0.19482 0.09912 0.29394 0.29394 0.02734 0.07178 0.03418 0.13672 0.00684 0.06152 0.02051 0.32813l0 0.3623-3.5 0 0-0.3623q0.01367-0.2666 0.02051-0.32813 0.00684-0.06494 0.03418-0.13672 0.08545-0.18115 0.22558-0.24951l0-0.01367q0.08203-0.04443 0.16748-0.05811 0.08545-0.01367 0.36573-0.02734l2.23877 0.01367 0.09912 0.04102z m2.09863 6.13183l-0.01367 3.86573-0.02735 0.08545q-0.12646 0.26318-0.37939 0.33496-0.08203 0.02734-3.07959 0.02734-2.99756 0-3.07959-0.02734-0.25293-0.07178-0.37939-0.33496l-0.02735-0.08545-0.01367-7.72803 7 0 0 3.8623z m-4.7749-2.08496q-0.12646 0.01367-0.2461 0.10596-0.11621 0.08887-0.17431 0.21533l-0.04102 0.09912-0.01367 3.33252q0.01367 0.3623 0.02734 0.4751 0.01367 0.08545 0.07178 0.15381l0.01367 0.02734q0.15381 0.21191 0.417 0.23242 0.2666 0.02051 0.46484-0.17431 0.12646-0.12646 0.15381-0.29395 0.02734-0.11279 0.02734-1.86279 0-1.75-0.02734-1.84912-0.04102-0.23584-0.23242-0.36914-0.18799-0.1333-0.44092-0.09229z m2.35156 0q-0.18115 0.01367-0.31445 0.14698-0.1333 0.1333-0.16065 0.31445-0.02734 0.09912-0.02734 1.86279 0 1.76367 0.02734 1.86279 0.02734 0.16748 0.15381 0.28028 0.19824 0.19482 0.46143 0.17431 0.2666-0.02051 0.42041-0.24609l0.01367-0.01367q0.05811-0.08203 0.07178-0.15381 0.01367-0.12646 0.02734-0.4751l0-3.2915-0.04102-0.0957q-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z"
                  fill="#8A909C"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnSampleText"
                style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Delete
              </div>
            </div>
          </div>
        </div>
        <div
          data-pencil-name="InputSection"
          style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 14px; height: fit-content; justify-content: flex-start; padding: 18px 20px; width: 100%"
        >
          <div
            data-pencil-name="InputTitle"
            style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
          >
            Search field states
          </div>
          <div
            data-pencil-name="InputSub"
            style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
          >
            Focus uses the action colour; errors name the fix, not just the problem.
          </div>
          <div
            data-pencil-name="InputRow"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="FieldCol"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 7px; height: fit-content; justify-content: flex-start"
            >
              <div
                data-pencil-name="FieldLabel"
                style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Default
              </div>
              <div
                data-pencil-name="Field"
                style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: 46px; justify-content: flex-start; padding: 0px 13px; width: 100%"
              >
                <svg
                  data-pencil-name="FieldIcon"
                  data-icon-name="search"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M6.00537 1.17578q-0.04102 0.01367-0.23584 0.02734-0.57422 0.07178-1.16211 0.29053-0.58789 0.21533-1.09375 0.5503-0.39307 0.2666-0.74853 0.61181-0.35547 0.3418-0.62207 0.7041-0.646 0.92285-0.86817 2.03028-0.05811 0.28027-0.07861 0.46142-0.02051 0.18115-0.02051 0.57422 0 0.43408 0.02734 0.68018 0.02734 0.24268 0.12647 0.59472 0.19482 0.75537 0.60156 1.43555 0.40674 0.67676 0.96729 1.18262 0.40674 0.3623 0.81689 0.60156 0.41357 0.23926 0.91944 0.43408 1.06299 0.39307 2.21826 0.29395 1.15527-0.09912 2.1499-0.65967 0.12646-0.06836 0.33496-0.2085 0.2085-0.14014 0.29395-0.21191l0.05468-0.05469 1.10743 1.10742q1.12109 1.104 1.20312 1.15528 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-1.15186-1.20654l-1.10742-1.10743 0.05469-0.06836q0.05811-0.05469 0.19824-0.25293 0.82373-1.23047 0.89209-2.70703 0.07178-1.47656-0.63916-2.76513-0.5332-0.96729-1.42187-1.64405-0.88867-0.68018-1.95508-0.9331-0.29395-0.06836-0.54004-0.09571-0.24268-0.03076-0.60498-0.04443-0.43408 0-0.49219 0z m0.7417 1.17578q0.37939 0.01367 0.79297 0.14014 0.41357 0.12646 0.78955 0.32129 0.7417 0.39307 1.28857 1.08008 0.54687 0.68359 0.75538 1.49707 0.07178 0.28027 0.09228 0.49902 0.02051 0.21533 0.02051 0.50928 0 0.70068-0.19483 1.30224-0.39307 1.16211-1.33984 1.91065-0.94336 0.74853-2.16016 0.875-0.19824 0.01367-0.49218 0.00683-0.29395-0.00684-0.48877-0.03418-0.5332-0.08545-1.03907-0.30761-0.50244-0.22559-0.93652-0.56055-0.14014-0.12646-0.35205-0.3418-0.2085-0.21875-0.33154-0.37256-0.57422-0.76904-0.7417-1.69531-0.08545-0.43408-0.06494-0.90918 0.02051-0.4751 0.11963-0.89551 0.29395-1.14844 1.18945-1.95849 0.89551-0.81348 2.05762-1.02539 0.18115-0.02734 0.42041-0.04102 0.23926-0.01367 0.34863-0.01367l0.2666 0.01367z"
                    fill="#8A909C"
                  ></path>
                </svg>
                <div
                  data-pencil-name="FieldText"
                  style='box-sizing: border-box; color: #8A909C; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  Search title, text or tags
                </div>
              </div>
            </div>
            <div
              data-pencil-name="FieldCol"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 7px; height: fit-content; justify-content: flex-start"
            >
              <div
                data-pencil-name="FieldLabel"
                style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Focused
              </div>
              <div
                data-pencil-name="Field"
                style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 2px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: 46px; justify-content: flex-start; padding: 0px 13px; width: 100%"
              >
                <svg
                  data-pencil-name="FieldIcon"
                  data-icon-name="search"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M6.00537 1.17578q-0.04102 0.01367-0.23584 0.02734-0.57422 0.07178-1.16211 0.29053-0.58789 0.21533-1.09375 0.5503-0.39307 0.2666-0.74853 0.61181-0.35547 0.3418-0.62207 0.7041-0.646 0.92285-0.86817 2.03028-0.05811 0.28027-0.07861 0.46142-0.02051 0.18115-0.02051 0.57422 0 0.43408 0.02734 0.68018 0.02734 0.24268 0.12647 0.59472 0.19482 0.75537 0.60156 1.43555 0.40674 0.67676 0.96729 1.18262 0.40674 0.3623 0.81689 0.60156 0.41357 0.23926 0.91944 0.43408 1.06299 0.39307 2.21826 0.29395 1.15527-0.09912 2.1499-0.65967 0.12646-0.06836 0.33496-0.2085 0.2085-0.14014 0.29395-0.21191l0.05468-0.05469 1.10743 1.10742q1.12109 1.104 1.20312 1.15528 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-1.15186-1.20654l-1.10742-1.10743 0.05469-0.06836q0.05811-0.05469 0.19824-0.25293 0.82373-1.23047 0.89209-2.70703 0.07178-1.47656-0.63916-2.76513-0.5332-0.96729-1.42187-1.64405-0.88867-0.68018-1.95508-0.9331-0.29395-0.06836-0.54004-0.09571-0.24268-0.03076-0.60498-0.04443-0.43408 0-0.49219 0z m0.7417 1.17578q0.37939 0.01367 0.79297 0.14014 0.41357 0.12646 0.78955 0.32129 0.7417 0.39307 1.28857 1.08008 0.54687 0.68359 0.75538 1.49707 0.07178 0.28027 0.09228 0.49902 0.02051 0.21533 0.02051 0.50928 0 0.70068-0.19483 1.30224-0.39307 1.16211-1.33984 1.91065-0.94336 0.74853-2.16016 0.875-0.19824 0.01367-0.49218 0.00683-0.29395-0.00684-0.48877-0.03418-0.5332-0.08545-1.03907-0.30761-0.50244-0.22559-0.93652-0.56055-0.14014-0.12646-0.35205-0.3418-0.2085-0.21875-0.33154-0.37256-0.57422-0.76904-0.7417-1.69531-0.08545-0.43408-0.06494-0.90918 0.02051-0.4751 0.11963-0.89551 0.29395-1.14844 1.18945-1.95849 0.89551-0.81348 2.05762-1.02539 0.18115-0.02734 0.42041-0.04102 0.23926-0.01367 0.34863-0.01367l0.2666 0.01367z"
                    fill="#2B5BD7"
                  ></path>
                </svg>
                <div
                  data-pencil-name="FieldText"
                  style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  homography
                </div>
                <svg
                  data-pencil-name="FieldTrailing"
                  data-icon-name="x"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                >
                  <path
                    d="M3.34619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04102 0.08545-0.04443 1.66797-1.62353l1.58252-1.58252 1.58252 1.58252q1.58252 1.5791 1.66455 1.62353 0.08545 0.04102 0.23926 0.04102 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04101-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                    fill="#8A909C"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              data-pencil-name="FieldCol"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 7px; height: fit-content; justify-content: flex-start"
            >
              <div
                data-pencil-name="FieldLabel"
                style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Filled
              </div>
              <div
                data-pencil-name="Field"
                style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: 46px; justify-content: flex-start; padding: 0px 13px; width: 100%"
              >
                <svg
                  data-pencil-name="FieldIcon"
                  data-icon-name="tag"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M2.15674 0.60156q-0.29395 0.02734-0.58789 0.16748-0.29395 0.14014-0.50586 0.36573-0.30762 0.32129-0.43408 0.78271l-0.04102 0.16748 0 2.21143q-0.01367 1.73633 0 2.11572 0.01367 0.37939 0.05469 0.57422 0.08545 0.28027 0.2666 0.5332 0.05811 0.0957 2.65234 2.7002 2.59766 2.60449 2.75147 2.74462 0.51953 0.42041 1.18945 0.44092 0.67334 0.02051 1.24756-0.37256 0.12646-0.08203 2.15674-2.1123 2.03027-2.03027 2.1123-2.1499 0.08545-0.11963 0.15381-0.22901 0.28027-0.5332 0.22217-1.1416-0.05469-0.6084-0.43067-1.08691-0.09912-0.10938-2.72412-2.72754-2.625-2.61816-2.75146-2.70361-0.37598-0.23926-0.82373-0.28028-0.18457-0.02734-2.25586-0.02734-2.07129 0-2.25244 0.02734z m4.604 1.20313q0.07178 0.04443 0.5127 0.47168 0.44092 0.42725 2.21826 2.20459 1.82178 1.81836 2.2251 2.23193 0.40674 0.41357 0.43408 0.49561 0.18457 0.35205 0.01367 0.71435-0.02734 0.08545-0.32812 0.39307-0.30078 0.30762-1.71583 1.73633-2.01318 2.0166-2.08496 2.05761-0.16748 0.12646-0.42041 0.1333-0.25293 0.00684-0.44775-0.10595-0.08203-0.05469-2.70019-2.65918-1.78076-1.77734-2.20118-2.21143-0.41699-0.43408-0.46142-0.50586l-0.04102-0.0957 0-4.46729 0.04102-0.09912q0.08545-0.18115 0.22558-0.24951l0.01368-0.01367q0.06836-0.04443 0.16748-0.05811 0.14014-0.01367 0.57421-0.02734l3.8794 0.01367 0.0957 0.04102z m-2.61816 1.72265q-0.22217 0.05811-0.38965 0.23243-0.16748 0.17432-0.22559 0.3999-0.08203 0.32129 0.07178 0.6289 0.04102 0.08203 0.16065 0.20166 0.11963 0.11963 0.20166 0.16065 0.19824 0.09912 0.41357 0.09912 0.21533 0 0.41357-0.09912 0.08203-0.04102 0.20166-0.16065 0.11963-0.11963 0.16065-0.20166 0.12646-0.25293 0.09228-0.52636-0.03418-0.27344-0.23242-0.46826-0.26318-0.29395-0.6289-0.29395-0.11279 0-0.23926 0.02734z"
                    fill="#59606E"
                  ></path>
                </svg>
                <div
                  data-pencil-name="FieldText"
                  style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  computer-vision
                </div>
                <svg
                  data-pencil-name="FieldTrailing"
                  data-icon-name="circle-x"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                >
                  <path
                    d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-2.56348 2.89843q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25293 0.05127 0.08203 0.75196 0.79639l0.69726 0.70068-0.69726 0.70068q-0.70068 0.71436-0.75196 0.79981-0.04785 0.08203-0.04785 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04785 0.08545-0.05127 0.79981-0.75196l0.70068-0.69726 0.70068 0.69726q0.71436 0.70068 0.79639 0.75196 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-0.74854-0.79981l-0.68359-0.70068 0.68359-0.70068q0.70068-0.71436 0.74854-0.79639 0.05127-0.08545 0.05127-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367l-0.01367 0q-0.14014 0-0.21875 0.0376-0.0752 0.03418-0.24268 0.18799-0.12646 0.10938-0.54687 0.52978l-0.72803 0.7417-0.70068-0.69726q-0.43408-0.43408-0.56055-0.54688-0.18115-0.16748-0.25977-0.20166-0.0752-0.0376-0.20849-0.04443-0.1333-0.00684-0.17432 0.00683z"
                    fill="#8A909C"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              data-pencil-name="FieldCol"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 7px; height: fit-content; justify-content: flex-start"
            >
              <div
                data-pencil-name="FieldLabel"
                style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Error
              </div>
              <div
                data-pencil-name="Field"
                style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 2px solid #B3261E; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: 46px; justify-content: flex-start; padding: 0px 13px; width: 100%"
              >
                <svg
                  data-pencil-name="FieldIcon"
                  data-icon-name="calendar"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M4.57666 0.60156q-0.12305 0.01367-0.24268 0.09912-0.11963 0.08203-0.1914 0.19483-0.04102 0.08545-0.05469 0.20508-0.01367 0.11621-0.01367 0.35546l0 0.29395-1.32959 0.01367q-0.14014 0.01367-0.23926 0.02735-0.50244 0.14014-0.85449 0.50586-0.34863 0.3623-0.44776 0.88183-0.02734 0.0957-0.02734 0.81006l0 7.99463 0.05469 0.15381q0.15723 0.51953 0.56055 0.86133 0.40674 0.3418 0.93994 0.3999 0.15381 0.02734 4.26904 0.02734 4.11523 0 4.26904-0.02734 0.30762-0.02734 0.58789-0.16748 0.32471-0.15381 0.56055-0.44092 0.23926-0.28711 0.35205-0.65283l0.05469-0.15381 0-7.99463q0-0.71436-0.02735-0.81006-0.09912-0.51953-0.45117-0.88183-0.34863-0.36572-0.85107-0.50586-0.09912-0.01367-0.23926-0.02735l-1.32959-0.01367 0-0.29395q0-0.32129-0.03418-0.45459-0.03418-0.1333-0.14697-0.24609-0.14014-0.14014-0.35889-0.16064-0.21533-0.02051-0.37597 0.09228-0.16064 0.10938-0.21875 0.29395-0.02734 0.05469-0.03418 0.1333-0.00684 0.0752-0.00684 0.30078l0 0.33496-3.5 0 0-0.34863q0-0.23926-0.00684-0.30762-0.00684-0.07178-0.03418-0.12646-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z m-0.50244 2.67285q0.01367 0.25293 0.02051 0.31788 0.00684 0.06152 0.03418 0.14697 0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445 0.02734-0.08545 0.03418-0.14014 0.00684-0.05811 0.02051-0.32129l0-0.36572 3.5 0 0 0.36572q0.01367 0.26318 0.02051 0.32129 0.00684 0.05469 0.03418 0.14014 0.12646 0.2666 0.42041 0.31445 0.29395 0.04785 0.50586-0.14697 0.08203-0.08545 0.14013-0.18115 0.02734-0.08545 0.03418-0.14697 0.00684-0.06494 0.02051-0.31788l0-0.34863 1.31592 0 0.08545 0.04102q0.08203 0.04443 0.15722 0.12304 0.07861 0.0752 0.11963 0.16065 0.04443 0.08203 0.05811 0.28027 0.01367 0.19482 0.01367 0.85108l0 0.86816-9.35156 0 0.01367-1.72266q0.01367-0.16748 0.02734-0.20849 0.09912-0.2666 0.35206-0.36572 0.05469-0.01367 0.16748-0.02735l1.18945 0 0 0.34863z m7.58789 5.82422q0 1.89014-0.00684 2.30371-0.00683 0.41357-0.0205 0.45459-0.09912 0.25293-0.35206 0.35205l-0.0957 0.04102-8.37402 0-0.0957-0.04102q-0.15381-0.0581-0.26661-0.19824l-0.02734-0.02734q-0.04443-0.05469-0.05811-0.15381-0.02734-0.14014-0.02734-0.60156l-0.01367-4.80225 9.35156 0-0.01367 2.67285z"
                    fill="#B3261E"
                  ></path>
                </svg>
                <div
                  data-pencil-name="FieldText"
                  style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  year: 2024-
                </div>
                <svg
                  data-pencil-name="FieldTrailing"
                  data-icon-name="circle-x"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                >
                  <path
                    d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-2.56348 2.89843q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25293 0.05127 0.08203 0.75196 0.79639l0.69726 0.70068-0.69726 0.70068q-0.70068 0.71436-0.75196 0.79981-0.04785 0.08203-0.04785 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.23584-0.04785 0.08545-0.05127 0.79981-0.75196l0.70068-0.69726 0.70068 0.69726q0.71436 0.70068 0.79639 0.75196 0.08545 0.04785 0.23926 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.05127-0.23584-0.04785-0.08545-0.74854-0.79981l-0.68359-0.70068 0.68359-0.70068q0.70068-0.71436 0.74854-0.79639 0.05127-0.08545 0.05127-0.25293 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367l-0.01367 0q-0.14014 0-0.21875 0.0376-0.0752 0.03418-0.24268 0.18799-0.12646 0.10938-0.54687 0.52978l-0.72803 0.7417-0.70068-0.69726q-0.43408-0.43408-0.56055-0.54688-0.18115-0.16748-0.25977-0.20166-0.0752-0.0376-0.20849-0.04443-0.1333-0.00684-0.17432 0.00683z"
                    fill="#8A909C"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="FieldHint"
                style='box-sizing: border-box; color: #B3261E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 16px; text-align: left; width: 100%'
              >
                Use a year like 2025, or clear the filter.
              </div>
            </div>
          </div>
        </div>
        <div
          data-pencil-name="SelectionSection"
          style="align-items: flex-start; background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 14px; height: fit-content; justify-content: flex-start; padding: 18px 20px; width: 100%"
        >
          <div
            data-pencil-name="SelectionTitle"
            style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
          >
            Tags &amp; selection
          </div>
          <div
            data-pencil-name="SelectionRow"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 40px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="ChipGroup"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="ChipGroupLabel"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 1.2px; line-height: normal; text-align: left; white-space: nowrap'
              >
                TAG CHIPS
              </div>
              <div
                data-pencil-name="ChipRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="Chip/Tag"
                  style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 4px 10px; width: fit-content"
                >
                  <div
                    data-pencil-name="ChipTagDot"
                    style="align-items: flex-start; background-color: #2B5BD7; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 7px; justify-content: flex-start; width: 7px"
                  ></div>
                  <div
                    data-pencil-name="ChipTagText"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    computer-vision
                  </div>
                </div>
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
                  data-pencil-name="ChipSelected"
                  style="align-items: center; background-color: #2B5BD7; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 4px 10px; width: fit-content"
                >
                  <div
                    data-pencil-name="ChipSelectedDot"
                    style="align-items: flex-start; background-color: #FFFFFF; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 7px; justify-content: flex-start; width: 7px"
                  ></div>
                  <div
                    data-pencil-name="ChipSelectedText"
                    style='box-sizing: border-box; color: #FFFFFF; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    lecture
                  </div>
                </div>
                <div
                  data-pencil-name="ChipRemovable"
                  style="align-items: center; background-color: #EEEFF2; border-radius: 9999px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; padding: 4px 8px 4px 10px; width: fit-content"
                >
                  <div
                    data-pencil-name="ChipRemovableDot"
                    style="align-items: flex-start; background-color: #8A5A00; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 7px; justify-content: flex-start; width: 7px"
                  ></div>
                  <div
                    data-pencil-name="ChipRemovableText"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    2026
                  </div>
                  <svg
                    data-pencil-name="ChipRemovableX"
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
              </div>
            </div>
            <div
              data-pencil-name="CheckGroup"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="CheckGroupLabel"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 1.2px; line-height: normal; text-align: left; white-space: nowrap'
              >
                CHECKBOX
              </div>
              <div
                data-pencil-name="CheckRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="CheckItem"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="CheckBox"
                    style="align-items: center; background-color: #2B5BD7; border-radius: 5px; border: 1px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 19px; justify-content: center; width: 19px"
                  >
                    <svg
                      data-pencil-name="CheckBoxIcon"
                      data-icon-name="check"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
                    >
                      <path
                        d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                  <div
                    data-pencil-name="CheckLabel"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Checked
                  </div>
                </div>
                <div
                  data-pencil-name="CheckItem"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="CheckBox"
                    style="align-items: center; background-color: #FFFFFF; border-radius: 5px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 19px; justify-content: center; width: 19px"
                  ></div>
                  <div
                    data-pencil-name="CheckLabel"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Unchecked
                  </div>
                </div>
                <div
                  data-pencil-name="CheckItem"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="CheckBox"
                    style="align-items: center; background-color: #2B5BD7; border-radius: 5px; border: 1px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 19px; justify-content: center; width: 19px"
                  >
                    <svg
                      data-pencil-name="CheckBoxIcon"
                      data-icon-name="minus"
                      data-icon-set="lucide"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
                    >
                      <path
                        d="M2.73096 6.45313q-0.23926 0.08545-0.34522 0.3247-0.10254 0.23584-0.00683 0.46143 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.18457 0.12647l0.09571 0.02734 8.40136 0 0.09571-0.02734q0.09912-0.04443 0.18115-0.12647 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-4.22803 0q-4.22803 0-4.28271 0.02735z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                  <div
                    data-pencil-name="CheckLabel"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Mixed
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="SwitchGroup"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="SwitchGroupLabel"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 1.2px; line-height: normal; text-align: left; white-space: nowrap'
              >
                SWITCH
              </div>
              <div
                data-pencil-name="SwitchRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="SwitchItem"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="SwitchTrack"
                    style="align-items: center; background-color: #2B5BD7; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 24px; justify-content: flex-end; padding: 3px; width: 42px"
                  >
                    <div
                      data-pencil-name="SwitchKnob"
                      style="align-items: flex-start; background-color: #FFFFFF; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 18px; justify-content: flex-start; width: 18px"
                    ></div>
                  </div>
                  <div
                    data-pencil-name="SwitchLabel"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    On
                  </div>
                </div>
                <div
                  data-pencil-name="SwitchItem"
                  style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
                >
                  <div
                    data-pencil-name="SwitchTrack"
                    style="align-items: center; background-color: #E4E7EC; border-radius: 9999px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 24px; justify-content: flex-start; padding: 3px; width: 42px"
                  >
                    <div
                      data-pencil-name="SwitchKnob"
                      style="align-items: flex-start; background-color: #FFFFFF; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 18px; justify-content: flex-start; width: 18px"
                    ></div>
                  </div>
                  <div
                    data-pencil-name="SwitchLabel"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Off
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
