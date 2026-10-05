<template>
      <div class="page-root"
        data-pencil-name="05 · Document Detail"
        style="align-items: flex-start; background-image: url('/assets/bg-0.webp'); background-repeat: no-repeat; background-size: 100% 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 0px; height: 900px; justify-content: flex-start; overflow: hidden; position: relative; width: 1440px"
      >
        <div data-pencil-name="TopNavSpacer" style="height: 64px; flex-shrink: 0; width: 100%"></div>
        <div
          data-pencil-name="DetailBar"
          style="align-items: center; background-color: #FFFFFF; border-color: #E3E5EA; border-style: solid; border-width: 0px 0px 1px 0px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 56px; justify-content: space-between; padding: 0px 24px; width: 100%"
        >
          <div
            data-pencil-name="DetailBarLeft"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
          >
            <div
              data-pencil-name="Btn/Ghost" data-clickable @click="goBack"
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
                Library
              </div>
            </div>
            <div
              data-pencil-name="CrumbSep"
              style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              /
            </div>
            <div
              data-pencil-name="CrumbFolder"
              style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Research
            </div>
            <div
              data-pencil-name="CrumbSep2"
              style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              /
            </div>
            <div
              data-pencil-name="CrumbDoc"
              style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              {{ docTitle }}
            </div>
            <div
              data-pencil-name="DetailStatus"
              style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 5px; height: fit-content; justify-content: flex-start; padding: 3px 9px; width: fit-content"
            >
              <svg
                data-pencil-name="DetailStatusIcon"
                data-icon-name="check"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
              >
                <path
                  d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                  fill="#177245"
                ></path>
              </svg>
              <div
                data-pencil-name="DetailStatusText"
                style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Ready
              </div>
            </div>
          </div>
          <div
            data-pencil-name="DetailBarRight"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: fit-content"
          >
            <svg
              data-pencil-name="FavIcon"
              class="sv-focus"
              :class="{ 'is-fav': isFav }"
              data-icon-name="star"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              role="button"
              tabindex="0"
              :aria-pressed="isFav"
              :aria-label="isFav ? '取消收藏' : '收藏'"
              data-clickable
              style="box-sizing: border-box; flex-shrink: 0; height: 17px; width: 17px"
              @click="toggleFav"
              @keydown.enter.prevent="toggleFav"
              @keydown.space.prevent="toggleFav"
            >
              <path
                d="M6.87354 0.60156q-0.28027 0.02734-0.50245 0.25293-0.08545 0.08203-0.13672 0.16748-0.04785 0.08545-0.21533 0.43408-0.86816 1.75-1.05615 2.11573-0.18799 0.3623-0.27344 0.44092-0.08203 0.0752-0.17431 0.11279-0.09229 0.03418-1.62012 0.25976-1.52441 0.22217-1.63379 0.24952-0.22559 0.05469-0.40674 0.23584-0.11279 0.11279-0.1709 0.21191-0.05469 0.09912-0.08886 0.25293-0.03418 0.15381 0.00683 0.32812 0.04102 0.17432 0.14014 0.32813 0.04102 0.08545 1.20312 1.20312l0.1128 0.09913q0.62891 0.62891 0.81347 0.79638 0.23584 0.25293 0.29395 0.35205 0.04102 0.08203 0.05469 0.2085l0 0.01367q0 0.09912-0.04102 0.39307-0.04102 0.29395-0.22559 1.28857-0.24951 1.55518-0.24951 1.63721 0 0.35205 0.26319 0.6289 0.19824 0.18457 0.44775 0.23926 0.18457 0.04102 0.36572 0 0.09912-0.02734 0.28028-0.11279l1.66455-0.86817q0.81348-0.43408 0.96728-0.50244 0.15381-0.07178 0.23926-0.07177l0.04102-0.01368q0.14014 0 0.24951 0.04444 0.11279 0.04102 1.37402 0.71435l1.34326 0.69727q0.18115 0.08545 0.28028 0.11279 0.18115 0.04102 0.36572 0 0.26318-0.05469 0.44775-0.23926 0.26318-0.27686 0.26319-0.6289 0-0.0957-0.24952-1.62354-0.18457-0.99463-0.22558-1.28857-0.04102-0.29395-0.04102-0.38965l0-0.03076q0.01367-0.12646 0.05469-0.19483 0.0581-0.11279 0.29395-0.34863 0.16748-0.1709 0.7998-0.78613l0.12647-0.12647q1.14844-1.11768 1.21679-1.21679 0.14014-0.22559 0.14014-0.48194 0-0.25977-0.14014-0.48535-0.08545-0.14014-0.23926-0.24267-0.15381-0.10596-0.32128-0.14698-0.08203-0.01367-1.60987-0.23584-1.52441-0.22559-1.6167-0.25976-0.09229-0.0376-0.17773-0.11279-0.08203-0.07861-0.26318-0.42725-0.18115-0.35205-1.04932-2.11572-0.18115-0.34863-0.23242-0.44092-0.04785-0.09229-0.1333-0.17432-0.22217-0.22559-0.4751-0.25293l-0.12647-0.01367q-0.04102 0-0.1538 0.01367z m0.70068 2.65918q0.57422 1.14844 0.64258 1.26123 0.07178 0.11279 0.25293 0.28711 0.18115 0.17432 0.29394 0.25977 0.25293 0.14014 0.5332 0.20849 0.14014 0.04102 1.35694 0.21875 1.2168 0.17432 1.24756 0.18799 0.01367 0-0.03077 0.04102l-0.29394 0.30761-0.8374 0.81348q-0.70068 0.68701-0.77246 0.78272-0.2085 0.29395-0.32129 0.68701-0.02734 0.11279-0.02735 0.40674l0 0.28027 0.2085 1.23047q0.22559 1.23389 0.21875 1.24072-0.00684 0.00684-0.79297-0.41357l-0.05469-0.02735q-0.96729-0.50586-1.23046-0.64599-0.37939-0.18115-0.56055-0.22217-0.14014-0.04443-0.39307-0.04444l-0.02734 0q-0.25293 0-0.39307 0.04444-0.18115 0.04102-0.56055 0.22217-0.26318 0.14014-1.23046 0.64599l-0.05469 0.02735q-0.78613 0.42041-0.79297 0.41357-0.00684-0.00684 0.21875-1.24072l0.2085-1.23047 0-0.29395q0-0.28027-0.02735-0.39306-0.11279-0.39307-0.32129-0.68701-0.07178-0.0957-0.75879-0.76905l-1.02197-0.99463q-0.16748-0.16748-0.15381-0.18115 0.01367-0.01367 1.24414-0.18799 1.23389-0.17773 1.36035-0.21875 0.36572-0.08203 0.65967-0.3042 0.29395-0.22559 0.48877-0.55029 0.05811-0.10938 0.59473-1.20654 0.54004-1.10059 0.55371-1.10059 0.01367 0 0.57422 1.14502z"
                fill="#8A5A00"
              ></path>
            </svg>
            <div
              data-pencil-name="Btn/Outline"
              style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 9px 16px; width: fit-content"
            >
              <svg
                data-pencil-name="BtnOutlineIcon"
                data-icon-name="pencil-ruler"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M3.89307 0.60156q-0.58789 0.04102-1.06641 0.43408-0.12305 0.09912-0.96387 0.94678-0.84082 0.84424-0.93994 0.99805-0.3623 0.5332-0.3418 1.16553 0.02051 0.62891 0.41358 1.14502 0.08203 0.11279 1.17578 1.20654l1.09033 1.104-0.78271 0.78614q-0.48877 0.48877-0.64258 0.65625-0.21191 0.22559-0.29395 0.34863-0.05811 0.11279-0.12646 0.29394-0.09912 0.28027-0.45801 1.48682-0.35547 1.20313-0.36914 1.28516-0.01367 0.12646 0.02051 0.27343 0.03418 0.14697 0.08887 0.2461 0.05811 0.09912 0.17089 0.20507 0.11279 0.10254 0.2085 0.14698 0.09912 0.04102 0.22559 0.06836 0.12646 0.02734 0.20849 0.01367 0.08545-0.01367 1.31592-0.37598 1.23389-0.36572 1.48682-0.45117 0.19482-0.06836 0.30761-0.14014 0.14014-0.08203 0.36231-0.29394 0.18115-0.16748 0.65967-0.64258l0.76904-0.75537 1.09033 1.07666q1.09375 1.09375 1.23389 1.20312 0.54688 0.39307 1.22363 0.3794 0.68018-0.01367 1.19971-0.43408 0.12305-0.11279 0.95703-0.93653 0.83399-0.82715 0.90234-0.93994 0.39307-0.51611 0.39307-1.17236 0-0.65967-0.3794-1.19287-0.10938-0.14014-1.18945-1.23389l-1.09033-1.09033 1.04932-1.06299q0.65625-0.65967 0.88183-0.89551 0.28027-0.29395 0.39307-0.46484 0.0957-0.14014 0.18115-0.36231 0.23926-0.60156 0.11963-1.23046-0.11963-0.63232-0.56738-1.10743-0.50586-0.5332-1.24756-0.67334-0.10938-0.01367-0.3418-0.0205-0.23242-0.00684-0.32812 0.00683-0.44775 0.07178-0.78614 0.2666-0.19482 0.09912-0.43408 0.32471-0.23584 0.22217-1.03564 1.00488l-1.04932 1.04932-1.09033-1.07666q-1.09375-1.09375-1.22022-1.18945-0.29395-0.21191-0.65283-0.31446-0.35547-0.10596-0.73144-0.06494z m0.38964 1.17578q0.12646 0.02734 0.21534 0.09229 0.09229 0.06152 0.29052 0.24609l0.22217 0.22217-0.42041 0.40674q-0.34863 0.3623-0.42724 0.4751-0.0752 0.11279-0.0752 0.28027 0 0.23926 0.18115 0.42041 0.11279 0.11279 0.28028 0.14697 0.16748 0.03418 0.32129-0.0205 0.07178-0.02734 0.1538-0.10254 0.08545-0.07861 0.3794-0.35889l0.42041-0.42041 0.93652 0.92285-2.65918 2.67285-1.97217-1.97217q-0.22559-0.23926-0.29394-0.35205-0.04443-0.06836-0.07178-0.19482l0-0.01367q-0.04102-0.2666 0.07178-0.51953 0.04102-0.06836 0.18799-0.22217 0.14697-0.15381 0.72119-0.73487 0.57422-0.58105 0.73486-0.72802 0.16064-0.14697 0.22901-0.18799 0.28027-0.12646 0.57421-0.05811z m7.14014 0q0.28027 0.05811 0.50928 0.29053 0.23242 0.229 0.29053 0.50928 0.08203 0.37598-0.08545 0.71435-0.04102 0.08203-0.1333 0.18116-0.08887 0.0957-0.42725 0.44775l-0.50244 0.50244-1.49707-1.49707 0.50244-0.50244q0.35205-0.33838 0.44775-0.42725 0.09912-0.09229 0.18116-0.1333 0.33838-0.16748 0.71435-0.08545z m-4.2417 6.53858q-3.07959 3.07959-3.14453 3.11719-0.06152 0.03418-1.08349 0.34863-1.02197 0.31445-1.03565 0.30762-0.01367-0.00683 0.29395-1.02881 0.30762-1.02197 0.33496-1.06983 0.03076-0.05127 3.12402-3.1582l3.09326-3.09326 1.4834 1.49707-3.06592 3.07959z m3.2334 0.28027q-0.28027 0.29395-0.35889 0.3794-0.0752 0.08203-0.10253 0.1538-0.05469 0.15381-0.02051 0.32129 0.03418 0.16748 0.14697 0.28028 0.18115 0.18115 0.42041 0.18115 0.16748 0 0.28027-0.0752 0.11279-0.07861 0.4751-0.42724l0.40674-0.42041 0.22217 0.22217q0.22559 0.22559 0.2666 0.30761 0.09912 0.16748 0.09912 0.38623 0 0.21533-0.09912 0.41358-0.04102 0.08203-0.85449 0.90234-0.81006 0.82031-0.92285 0.88867-0.18115 0.12646-0.41358 0.14014-0.229 0.01367-0.42725-0.08545-0.06836-0.04102-1.17578-1.14502l-1.104-1.10742 2.65918-2.67285 0.92285 0.93652-0.42041 0.42041z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="BtnOutlineLabel"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Edit corrections
              </div>
            </div>
            <div
              data-pencil-name="ExportBtn"
              style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 9px 14px; width: fit-content"
            >
              <svg
                data-pencil-name="ExportIcon"
                data-icon-name="download"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M6.84619 1.18945q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 5.75244-0.99463-0.99463q-0.62891-0.62891-0.83398-0.81689-0.20166-0.18799-0.25635-0.21875-0.19824-0.08203-0.3999-0.02393-0.20166 0.05469-0.32813 0.21533-0.12646 0.16064-0.11279 0.36914l0 0.02735q0.01367 0.11279 0.06836 0.19824 0.07178 0.11279 0.36572 0.42041l1.20313 1.20313q1.52783 1.52441 1.59619 1.56884 0.05811 0.02734 0.10596 0.03418 0.04785 0.00684 0.16064 0.00684 0.11279 0 0.16064-0.00684 0.04785-0.00684 0.10596-0.03418 0.06836-0.04443 1.59619-1.56884 1.03564-1.03564 1.28516-1.30225 0.25293-0.2666 0.29736-0.33496 0.0957-0.22559 0.01026-0.44776-0.08203-0.22559-0.32129-0.33837-0.08203-0.02734-0.22217-0.02735l-0.02734 0q-0.12646 0-0.19825 0.02735-0.0957 0.05811-0.30761 0.25293-0.15381 0.15381-0.69727 0.70068l-1.10742 1.09033 0-5.75244-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m-5.25 7q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0.01367 2.60449q0 0.23584 0.02735 0.30762 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.71436 0.02735l3.78027 0.01367 3.78027-0.01367q0.62891 0 0.71436-0.02735 0.48877-0.14014 0.81689-0.46826 0.33154-0.33154 0.47168-0.82031 0.02734-0.07178 0.02735-0.30762l0.01367-2.60449-0.04102-0.08545q-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666l-0.04102 0.08545-0.01367 2.63183-0.04102 0.09913q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-4.18701 0.02734-4.08789 0-4.18701-0.02734-0.29395-0.05811-0.43408-0.33496l-0.04102-0.09913-0.01367-2.63183-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z"
                  fill="#59606E"
                ></path>
              </svg>
              <div
                data-pencil-name="ExportLabel"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Export
              </div>
              <svg
                data-pencil-name="ExportChevron"
                data-icon-name="chevron-down"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
              >
                <path
                  d="M3.34619 4.68945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25977 0.05127 0.08887 1.8628 1.9038 1.81494 1.81152 1.9038 1.8628 0.09229 0.04785 0.25977 0.04785 0.16748 0 0.25635-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                  fill="#8A909C"
                ></path>
              </svg>
            </div>
            <div ref="moreWrap" class="more-wrap" @keydown="onMoreKeydown">
              <div
                ref="moreBtn"
                data-pencil-name="MoreBtn"
                class="more-btn sv-focus"
                :class="{ 'is-open': moreOpen }"
                role="button"
                tabindex="0"
                aria-haspopup="menu"
                :aria-expanded="moreOpen"
                aria-label="More actions"
                data-clickable
                style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 34px; justify-content: center; width: 34px"
                @click="toggleMore"
              >
              <svg
                data-pencil-name="MoreIcon"
                data-icon-name="ellipsis"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
              >
                <path
                  d="M2.77197 5.85156q-0.2666 0.01367-0.50244 0.18115-0.33838 0.22559-0.45801 0.59815-0.11621 0.36914 0.00684 0.7417 0.12646 0.36914 0.46484 0.6084 0.26318 0.18115 0.62891 0.18115 0.25293 0 0.44092-0.0752 0.18799-0.07861 0.37597-0.2666 0.19141-0.19141 0.26661-0.37939 0.07861-0.18799 0.07861-0.44092 0-0.25293-0.07861-0.44092-0.0752-0.18799-0.25635-0.37256-0.15381-0.15381-0.29395-0.22216-0.30762-0.15381-0.67334-0.1128z m4.10157 0q-0.2085 0.01367-0.37598 0.09912-0.23926 0.11279-0.3999 0.31446-0.16064 0.20166-0.23243 0.44091-0.02734 0.11279-0.02734 0.29395 0 0.18115 0.02734 0.29395 0.08545 0.30762 0.30762 0.5332 0.22559 0.22217 0.5332 0.30762 0.11279 0.02734 0.29395 0.02734 0.18115 0 0.29395-0.02734 0.30762-0.08545 0.52978-0.30762 0.22559-0.22559 0.31104-0.5332 0.02734-0.11279 0.02734-0.29395 0-0.18115-0.02734-0.29395-0.07178-0.23926-0.23243-0.44091-0.16064-0.20166-0.3999-0.31446-0.26318-0.14014-0.6289-0.09912z m4.07421 0q-0.39307 0.02734-0.70068 0.33496-0.16748 0.18457-0.24609 0.37256-0.0752 0.18799-0.0752 0.44092 0 0.25293 0.0752 0.44775 0.07861 0.19482 0.2666 0.3794 0.19141 0.18115 0.37939 0.25976 0.18799 0.0752 0.44092 0.0752 0.36572 0 0.62891-0.18115 0.33838-0.23926 0.46142-0.6084 0.12647-0.37256 0.00684-0.7417-0.11621-0.37256-0.46143-0.60156-0.3418-0.23242-0.77588-0.17774z"
                  fill="#59606E"
                ></path>
              </svg>
              </div>

              <!-- 更多菜单：导出 PDF / 分享 / 移动… + 删除（未接入项统一提示） -->
              <div
                ref="morePanel"
                class="more-panel sv-panel"
                :class="{ 'is-open': moreOpen }"
                data-pencil-name="MorePanel"
                role="menu"
                tabindex="-1"
                aria-label="More actions"
              >
                <template v-for="(item, i) in MORE_ITEMS" :key="item.key">
                  <div v-if="item.danger" class="more-divider" aria-hidden="true"></div>
                  <div
                    class="more-item sv-option"
                    :class="{ 'is-active': i === moreIndex, 'is-danger': item.danger }"
                    data-pencil-name="MoreItem"
                    role="menuitem"
                    tabindex="-1"
                    @click.stop="runMore(item)"
                  >
                    <span>{{ item.label }}</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div
          data-pencil-name="DetailBody"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 100%"
        >
          <div
            data-pencil-name="DetailRail"
            style="align-items: center; background-color: #FFFFFF; border-color: #E3E5EA; border-style: solid; border-width: 0px 1px 0px 0px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 11px; height: 100%; justify-content: flex-start; padding: 16px 0px; width: 112px"
          >
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 88px; justify-content: center; width: 70px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 64px; justify-content: flex-start; padding: 10px 8px; width: 48px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 25px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 15px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                1
              </div>
            </div>
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 2px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 88px; justify-content: center; width: 70px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 64px; justify-content: flex-start; padding: 10px 8px; width: 48px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 25px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 15px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #2B5BD7; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                2
              </div>
            </div>
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 88px; justify-content: center; width: 70px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 64px; justify-content: flex-start; padding: 10px 8px; width: 48px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 25px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 15px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                3
              </div>
            </div>
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 88px; justify-content: center; width: 70px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 64px; justify-content: flex-start; padding: 10px 8px; width: 48px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 25px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 15px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                4
              </div>
            </div>
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 88px; justify-content: center; width: 70px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 64px; justify-content: flex-start; padding: 10px 8px; width: 48px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 25px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 15px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                5
              </div>
            </div>
            <div
              data-pencil-name="RailItem"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 5px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="RailThumbBox"
                style="align-items: center; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 88px; justify-content: center; width: 70px"
              >
                <div
                  data-pencil-name="Thumb"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 2px; height: 64px; justify-content: flex-start; padding: 10px 8px; width: 48px"
                >
                  <div
                    data-pencil-name="ThumbHead"
                    style="align-items: flex-start; background-color: #B7C0CE; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 3px; justify-content: flex-start; width: 25px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 32px"
                  ></div>
                  <div
                    data-pencil-name="ThumbLine"
                    style="align-items: flex-start; background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 2px; justify-content: flex-start; width: 15px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="RailPageNum"
                style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                6
              </div>
            </div>
          </div>
          <div
            data-pencil-name="DetailPreview"
            style="align-items: center; background-color: #f5f6f778; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 0px; height: 100%; justify-content: flex-start; padding: 14px 0px"
          >
            <div
              data-pencil-name="DetailPreviewToolbar"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 42px; justify-content: space-between; padding: 0px 28px; width: 100%"
            >
              <div
                data-pencil-name="PreviewToolbarLeft"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="DetailPageNum"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Page 2 of 18
                </div>
                <div
                  data-pencil-name="CompareToggle"
                  style="align-items: center; background-color: #FFFFFF; border-radius: 9px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 2px; height: fit-content; justify-content: flex-start; padding: 3px; width: fit-content"
                >
                  <div
                    data-pencil-name="CompareBtn"
                    style="align-items: center; background-color: #FFFFFF00; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 4px 10px; width: fit-content"
                  >
                    <div
                      data-pencil-name="CompareBtnText"
                      style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Original
                    </div>
                  </div>
                  <div
                    data-pencil-name="CompareBtn"
                    style="align-items: center; background-color: #EEEFF2; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 4px 10px; width: fit-content"
                  >
                    <div
                      data-pencil-name="CompareBtnText"
                      style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                    >
                      Processed
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="PreviewToolbarRight"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="Btn/Ghost" data-clickable @click="$router.push('/library')"
                  style="align-items: center; background-color: #FFFFFF00; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
                >
                  <svg
                    data-pencil-name="BtnGhostIcon"
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
                    data-pencil-name="BtnGhostLabel"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Reveal in Explorer
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
              data-pencil-name="DetailStage"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: center; width: 100%"
            >
              <div
                data-pencil-name="DetailPage"
                style="align-items: flex-start; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #00000012; box-shadow: 0px 16px 40px #1A2B4A1F; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 12px; height: 552px; justify-content: flex-start; padding: 36px; width: 420px"
              >
                <div
                  data-pencil-name="PageHeading"
                  style="box-sizing: border-box; color: #1A1A1A; font-family: Manrope, system-ui, sans-serif; font-size: 19px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: 23px; text-align: left; white-space: nowrap"
                >
                  2. Planar homography
                </div>
                <div
                  data-pencil-name="HighlightLine"
                  style="align-items: center; background-color: #FBF3D6; border-radius: 3px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 3px 6px; width: fit-content"
                >
                  <div
                    data-pencil-name="HighlightText"
                    style='box-sizing: border-box; color: #7A5200; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    homography
                  </div>
                  <div
                    data-pencil-name="HighlightAfter"
                    style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    relates two images of the same plane.
                  </div>
                </div>
                <div
                  data-pencil-name="TextBlock"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: 100%"
                >
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 348px"
                  ></div>
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 348px"
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
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 348px"
                  ></div>
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 250px"
                  ></div>
                </div>
                <div
                  data-pencil-name="FigureBox"
                  style="align-items: center; background-color: #EEF1F6; border-radius: 4px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 8px; height: 126px; justify-content: center; width: 100%"
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
                    Figure 2 - four point correspondences
                  </div>
                </div>
                <div
                  data-pencil-name="TextBlock"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: 100%"
                >
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 348px"
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
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 348px"
                  ></div>
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 348px"
                  ></div>
                  <div
                    data-pencil-name="TextLine"
                    style="align-items: flex-start; background-color: #CBD2DC; border-radius: 2px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 5px; justify-content: flex-start; width: 300px"
                  ></div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="DetailPageNav"
              style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: 42px; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="DetailPageNavBtn"
                style="align-items: center; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 28px; justify-content: center; width: 28px"
              >
                <svg
                  data-pencil-name="DetailPageNavIcon"
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
                data-pencil-name="DetailPageNavText"
                style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                2 / 18
              </div>
              <div
                data-pencil-name="DetailPageNavBtn"
                style="align-items: center; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 28px; justify-content: center; width: 28px"
              >
                <svg
                  data-pencil-name="DetailPageNavIcon"
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
            data-pencil-name="MetaSidebar"
            style="align-items: flex-start; background-color: #FFFFFF; border-color: #E3E5EA; border-style: solid; border-width: 0px 0px 0px 1px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 13px; height: 100%; justify-content: flex-start; padding: 16px 20px; width: 356px"
          >
            <div
              data-pencil-name="SideTitleLabel"
              style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Title
            </div>
            <div
              data-pencil-name="SideTitleField"
              style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: space-between; padding: 10px 12px; width: 100%"
            >
              <input
                v-if="renaming"
                ref="renameInput"
                v-model="draftTitle"
                class="side-title-input"
                data-pencil-name="SideTitleInput"
                type="text"
                aria-label="Document title"
                @keydown.enter.prevent="confirmRename"
                @keydown.esc.prevent="cancelRename"
                @blur="cancelRename"
              />
              <div
                v-else
                data-pencil-name="SideTitleValue"
                style='box-sizing: border-box; color: #16181D; flex-shrink: 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; width: 270px'
              >
                {{ docTitle }}
              </div>
              <svg
                data-pencil-name="SideTitleEdit"
                class="sv-focus"
                data-icon-name="pencil"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                role="button"
                tabindex="0"
                aria-label="重命名文档"
                data-clickable
                style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                @click="startRename"
                @keydown.enter.prevent="startRename"
                @keydown.space.prevent="startRename"
              >
                <path
                  d="M11.00244 0.60156q-0.61523 0.04102-1.14502 0.43408-0.15381 0.09912-4.13232 4.0879-3.9751 3.98877-4.08789 4.1289-0.14014 0.19824-0.23242 0.45801-0.08887 0.25635-0.44776 1.46289-0.35547 1.20313-0.36914 1.28516-0.01367 0.12646 0.02051 0.27343 0.03418 0.14697 0.08887 0.2461 0.05811 0.09912 0.17089 0.20507 0.11279 0.10254 0.2085 0.14698 0.09912 0.04102 0.22559 0.06836 0.12646 0.02734 0.229 0.01367 0.10596-0.01367 1.38086-0.39307l1.24756-0.38964q0.26318-0.08545 0.3623-0.12647l0.01367-0.01367q0.14014-0.07178 0.32129-0.22559 0.25293-0.23926 1.08008-1.04932l2.92578-2.92578q3.98877-3.99219 4.10156-4.14599 0.18115-0.24951 0.29395-0.51612 0.23926-0.60156 0.11963-1.23046-0.11963-0.63232-0.56738-1.10743-0.35205-0.36572-0.81348-0.54687-0.46143-0.18115-0.99463-0.14014z m0.42041 1.17578q0.28027 0.05811 0.50928 0.29053 0.23242 0.229 0.29053 0.50928 0.08203 0.37598-0.08545 0.71435-0.04102 0.08203-0.1333 0.18116-0.08887 0.0957-0.42725 0.44775l-0.50244 0.50244-1.49707-1.49707 0.50244-0.50244q0.35205-0.33838 0.44775-0.42725 0.09912-0.09229 0.18116-0.1333 0.33838-0.16748 0.71435-0.08545z m-4.2417 6.53858q-3.07959 3.07959-3.14453 3.11719-0.06152 0.03418-1.0835 0.34863-1.02197 0.31445-1.03564 0.30762-0.01367-0.00683 0.29395-1.02881 0.30762-1.02197 0.33496-1.06983 0.03076-0.05127 3.12402-3.1582l3.09326-3.09326 1.4834 1.49707-3.06592 3.07959z"
                  fill="#8A909C"
                ></path>
              </svg>
            </div>
            <div
              data-pencil-name="SideFacts"
              style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              18 pages · PDF · 6.2 MB
            </div>
            <div
              data-pencil-name="SideFolderRow"
              style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; padding: 9px 12px; width: 100%"
            >
              <svg
                data-pencil-name="SideFolderIcon"
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
                data-pencil-name="SideFolderValue"
                style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                Research
              </div>
              <svg
                data-pencil-name="SideFolderChevron"
                data-icon-name="chevron-down"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
              >
                <path
                  d="M3.34619 4.68945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25977 0.05127 0.08887 1.8628 1.9038 1.81494 1.81152 1.9038 1.8628 0.09229 0.04785 0.25977 0.04785 0.16748 0 0.25635-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                  fill="#8A909C"
                ></path>
              </svg>
            </div>
            <div
              data-pencil-name="SideTagsBox"
              style="align-items: flex-start; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 9px 11px; width: 100%"
            >
              <div
                data-pencil-name="SideTagsRow1"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; width: fit-content"
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
                    style="align-items: flex-start; background-color: #B3261E; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 7px; justify-content: flex-start; width: 7px"
                  ></div>
                  <div
                    data-pencil-name="ChipTagText"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    to-read
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="SideTagsRow2"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; width: fit-content"
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
                    research
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
              </div>
              <div
                data-pencil-name="SideAddTag"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <svg
                  data-pencil-name="SideAddTagIcon"
                  data-icon-name="plus"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 12px; width: 12px"
                >
                  <path
                    d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                    fill="#2B5BD7"
                  ></path>
                </svg>
                <div
                  data-pencil-name="SideAddTagText"
                  style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Add tag
                </div>
              </div>
            </div>
            <div
              data-pencil-name="SideQualityCard"
              style="align-items: flex-start; background-color: #EEEFF2; border-radius: 12px; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; padding: 13px 14px; width: 100%"
            >
              <div
                data-pencil-name="SideQualityHeader"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: space-between; width: 100%"
              >
                <div
                  data-pencil-name="SideQualityTitle"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Quality &amp; text
                </div>
                <div
                  data-pencil-name="SideQualityPill"
                  style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 5px; height: fit-content; justify-content: flex-start; padding: 3px 9px; width: fit-content"
                >
                  <svg
                    data-pencil-name="SideQualityPillIcon"
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
                    data-pencil-name="SideQualityPillText"
                    style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Good
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="SideQualityRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: 100%"
              >
                <div
                  data-pencil-name="SideQualityRowLabel"
                  style='box-sizing: border-box; color: #59606E; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  OCR confidence
                </div>
                <div
                  data-pencil-name="SideQualityRowValue"
                  style='box-sizing: border-box; color: #16181D; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  96%
                </div>
              </div>
              <div
                data-pencil-name="SideQualityRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: 100%"
              >
                <div
                  data-pencil-name="SideQualityRowLabel"
                  style='box-sizing: border-box; color: #59606E; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  Searchable text
                </div>
                <div
                  data-pencil-name="SideQualityRowValue"
                  style='box-sizing: border-box; color: #16181D; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  12,480 words
                </div>
              </div>
              <div
                data-pencil-name="SideQualityRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: 100%"
              >
                <div
                  data-pencil-name="SideQualityRowLabel"
                  style='box-sizing: border-box; color: #59606E; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  Language
                </div>
                <div
                  data-pencil-name="SideQualityRowValue"
                  style='box-sizing: border-box; color: #16181D; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  English
                </div>
              </div>
            </div>
            <div
              data-pencil-name="OcrSearchField"
              style="align-items: center; background-color: #E7EDFC; border-radius: 10px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; padding: 10px 12px; width: 100%"
            >
              <svg
                data-pencil-name="OcrSearchIcon"
                data-icon-name="text-search"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
              >
                <path
                  d="M1.65088 2.35156q-0.18115 0.02734-0.32129 0.16748-0.2085 0.21191-0.15381 0.50586 0.05469 0.29395 0.32129 0.42041l0.09912 0.04102 10.80762 0 0.09912-0.04102q0.2666-0.12646 0.32129-0.42041 0.05469-0.29395-0.15381-0.50586-0.14014-0.14014-0.33496-0.16748-0.09912-0.02734-5.34229-0.02734-5.24316 0-5.34228 0.02734z m-0.05469 4.08789q-0.11279 0.02734-0.21875 0.11963-0.10254 0.09229-0.15381 0.18457-0.04785 0.08887-0.04785 0.25635 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.15381 0.12646l0.08545 0.04102 4.10156 0q0.29395 0 0.37598-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-2.17041 0q-2.18408 0-2.2251 0.01367z m7.93652 0.01368q-0.24951 0.04443-0.51611 0.15722-0.2666 0.10938-0.47851 0.26319-0.2085 0.15381-0.40674 0.38623-0.19482 0.229-0.3042 0.46826-0.19824 0.40674-0.23242 0.86816-0.03418 0.46143 0.11279 0.88867 0.14697 0.42725 0.44775 0.78614 0.30078 0.35547 0.70752 0.55029 0.52979 0.2666 1.13477 0.25293 0.27686-0.01367 0.48535-0.06152 0.21191-0.05127 0.46484-0.17774l0.15381-0.06836 0.40674 0.40674q0.34863 0.33496 0.46143 0.41357 0.11279 0.07519 0.28027 0.0752 0.23926 0 0.42041-0.18115 0.11279-0.11279 0.14697-0.28028 0.03418-0.16748-0.0205-0.32128-0.02734-0.07178-0.09913-0.15381-0.06836-0.08545-0.3623-0.36573l-0.40674-0.42041 0.08203-0.16748q0.11279-0.25293 0.15381-0.43408 0.14014-0.51953 0.03418-1.04932-0.10254-0.5332-0.43408-0.96044-0.32813-0.42725-0.80322-0.66309-0.33496-0.15381-0.68702-0.21191-0.14014-0.02734-0.37255-0.02735-0.229 0-0.36915 0.02735z m0.67334 1.1621q0.28027 0.07178 0.53321 0.32129 0.15381 0.15381 0.22217 0.29395 0.11279 0.23926 0.11279 0.50586 0 0.2666-0.07862 0.45459-0.07519 0.18799-0.2666 0.37939-0.18799 0.18799-0.37597 0.2666-0.18799 0.0752-0.45459 0.0752-0.35205 0-0.61524-0.18115-0.33838-0.23926-0.46484-0.6084-0.12305-0.37256-0.00684-0.7417 0.11963-0.37256 0.45801-0.59815 0.19482-0.14014 0.44434-0.18115 0.25293-0.04102 0.49218 0.01367z m-8.59619 2.89844q-0.12646 0.02734-0.23925 0.1333-0.10938 0.10596-0.16748 0.23243-0.06836 0.2085 0.01367 0.42724 0.08545 0.21533 0.29394 0.31445l0.1128 0.04102 2.10205 0q2.09863 0.01367 2.21142 0 0.23584-0.05469 0.36914-0.24951 0.1333-0.19824 0.09229-0.42383-0.01367-0.10938-0.05127-0.17773-0.03418-0.07178-0.11279-0.14014-0.0752-0.07178-0.15723-0.11621l-0.09912-0.04102-2.14307-0.01367q-2.13965 0-2.2251 0.01367z"
                  fill="#2B5BD7"
                ></path>
              </svg>
              <div
                data-pencil-name="OcrSearchText"
                style='box-sizing: border-box; color: #2B5BD7; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left'
              >
                Search inside this document
              </div>
            </div>
            <div
              data-pencil-name="SideSpacer"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 0px; justify-content: flex-start; width: 1px"
            ></div>
            <div
              data-pencil-name="LocationsCard"
              style="align-items: flex-start; border-radius: 10px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; padding: 12px 13px; width: 100%"
            >
              <div
                data-pencil-name="PathRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: 100%"
              >
                <div
                  data-pencil-name="PathTextCol"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                >
                  <div
                    data-pencil-name="PathLabel"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Source file
                  </div>
                  <div
                    data-pencil-name="PathValue"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    inbox\homography_09.jpg
                  </div>
                </div>
                <svg
                  data-pencil-name="PathAction"
                  data-icon-name="external-link"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                >
                  <path
                    d="M8.59619 1.18945q-0.11279 0.02734-0.21875 0.11963-0.10254 0.09229-0.15381 0.18457-0.04785 0.08887-0.04785 0.25635 0 0.16748 0.04102 0.24609 0.04443 0.0752 0.12646 0.16065 0.08545 0.08203 0.15381 0.12646l0.08545 0.04102 2.25244 0-2.74463 2.7583q-1.85938 1.86279-2.30713 2.32422-0.44775 0.46143-0.47851 0.51611-0.10938 0.23926-0.01367 0.46485 0.09912 0.22217 0.32128 0.32128 0.22559 0.0957 0.46485-0.01367 0.05469-0.03076 0.51611-0.47851 0.46143-0.44775 2.32422-2.30713l2.7583-2.74463 0 2.25244 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-3.84863-0.04102-0.08545q-0.04443-0.06836-0.12304-0.14356-0.0752-0.07861-0.14356-0.12304l-0.08545-0.04102-1.90381 0q-1.89014 0-1.93115 0.01367z m-5.9917 1.76368q-0.50586 0.08545-0.87842 0.4375-0.36914 0.34863-0.50927 0.86474-0.02734 0.08545-0.02735 0.58789l-0.01367 3.03858 0.01367 3.0249q0 0.50244 0.02735 0.58789 0.14014 0.48877 0.46826 0.82031 0.33154 0.32813 0.82031 0.46826 0.08545 0.02734 0.58789 0.02735l3.0249 0.01367 3.03858-0.01367q0.50244 0 0.58789-0.02735 0.98096-0.2666 1.28857-1.26123 0.02734-0.08545 0.02735-0.34863l0.01367-3.69824-0.02735-0.09571q-0.08545-0.21191-0.29394-0.3247-0.07178-0.02734-0.11279-0.03418-0.04102-0.00684-0.14014-0.00684-0.15381 0-0.23926 0.0376-0.08203 0.03418-0.16748 0.11963-0.08203 0.08203-0.12646 0.16406l-0.04102 0.09912-0.01367 3.78027-0.04102 0.09913q-0.14014 0.27685-0.43408 0.33496-0.09912 0.02734-3.31201 0.02734-3.21289 0-3.31201-0.02734-0.29395-0.05811-0.43408-0.33496l-0.04102-0.09913 0-6.67871 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 3.78028-0.01367 0.09912-0.04102q0.08203-0.04443 0.16406-0.12646 0.08545-0.08545 0.12647-0.17432 0.04443-0.09229 0.03759-0.23926-0.00684-0.14697-0.05127-0.23584-0.04102-0.09229-0.1333-0.17431-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.34864-0.0376l-1.66455 0q-1.90381 0-2.0166 0.02735z"
                    fill="#8A909C"
                  ></path>
                </svg>
              </div>
              <div
                data-pencil-name="PathRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: 100%"
              >
                <div
                  data-pencil-name="PathTextCol"
                  style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex: 1 1 0; gap: 2px; height: fit-content; justify-content: flex-start"
                >
                  <div
                    data-pencil-name="PathLabel"
                    style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Saved file
                  </div>
                  <div
                    data-pencil-name="PathValue"
                    style='box-sizing: border-box; color: #59606E; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; width: 100%'
                  >
                    library\Introduction-to-Homography.pdf
                  </div>
                </div>
                <svg
                  data-pencil-name="PathAction"
                  data-icon-name="copy"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 14px; width: 14px"
                >
                  <path
                    d="M2.15674 0.60156q-0.29395 0.02734-0.58789 0.16748-0.29395 0.14014-0.50586 0.36573-0.30762 0.32129-0.43408 0.78271l-0.04102 0.16748 0 6.33008 0.04102 0.16748q0.22559 0.78271 0.91259 1.13477 0.2085 0.10938 0.46827 0.16748 0.25977 0.05469 0.41357 0.02734 0.24951-0.05469 0.38965-0.24268 0.14014-0.19141 0.08545-0.44433-0.02734-0.16748-0.16065-0.30762-0.1333-0.14014-0.3999-0.16748-0.39307-0.04102-0.5332-0.34863l-0.04102-0.09912 0-6.1045 0.04102-0.09912q0.09912-0.19482 0.29394-0.29394l0.09912-0.04102 6.1045 0 0.09912 0.04102q0.30762 0.14014 0.34863 0.51953 0.02734 0.2666 0.18115 0.42041 0.12646 0.12646 0.30762 0.15381 0.29395 0.05469 0.50586-0.15381 0.11279-0.11279 0.14697-0.24609 0.03418-0.1333 0.02051-0.32813-0.08545-0.646-0.52637-1.07666-0.44092-0.43408-1.08349-0.49219-0.16748-0.02734-3.06592-0.02734-2.89844 0-3.07959 0.02734z m3.5 3.5q-0.29395 0.02734-0.58789 0.16748-0.29395 0.14014-0.50586 0.3794-0.30762 0.32129-0.43408 0.79638l-0.04102 0.1709 0 6.29932 0.04102 0.16748q0.07178 0.25293 0.18115 0.44092 0.11279 0.18799 0.29394 0.37256 0.18457 0.18115 0.37256 0.29394 0.18799 0.10938 0.44092 0.18115l0.16748 0.04102 6.33008 0 0.16748-0.04102q0.25293-0.07178 0.44092-0.18115 0.18799-0.11279 0.36914-0.29394 0.18457-0.18457 0.29394-0.37256 0.11279-0.18799 0.18457-0.44092l0.04102-0.16748 0-6.33008-0.04102-0.16748q-0.12646-0.46143-0.43408-0.78271-0.44775-0.4751-1.13476-0.54688-0.16748-0.01367-3.06592-0.01367-2.89844 0-3.07959 0.02734z m6.24463 1.20313q0.19482 0.09912 0.29394 0.29394l0.04102 0.09912 0 6.1045-0.02735 0.08545q-0.12646 0.26318-0.37939 0.33496-0.08203 0.02734-3.07959 0.02734-2.99756 0-3.07959-0.02734-0.25293-0.07178-0.37939-0.33496l-0.02735-0.08545 0-6.1045 0.04102-0.09912q0.11279-0.24951 0.37939-0.32129 0.08545-0.02734 3.10694-0.02734l3.01123 0.01367 0.09912 0.04102z"
                    fill="#8A909C"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              data-pencil-name="LastOpened"
              style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Opened today at 08:12
            </div>
            <div
              data-pencil-name="SideActions"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; width: 100%"
            >
              <div
                data-pencil-name="Btn/Outline"
                style="align-items: center; background-color: #FFFFFF; border-radius: 10px; border: 1px solid #D0D4DB; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 8px; height: fit-content; justify-content: flex-start; padding: 9px 16px; width: fit-content"
              >
                <svg
                  data-pencil-name="BtnOutlineIcon"
                  data-icon-name="folder-input"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 15px; width: 15px"
                >
                  <path
                    d="M1.97559 1.20313q-0.39307 0.08545-0.71778 0.33837-0.32129 0.24951-0.50244 0.61524-0.0957 0.2085-0.12646 0.34863-0.04102 0.16748-0.04102 0.5332-0.01367 0.28027 0 1.10401l0 1.23388 0.04102 0.1128q0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445l0.04102-0.09912 0.02734-2.63184 0.04102-0.09912q0.14014-0.28027 0.44775-0.33496 0.12646-0.01367 1.30225 0l1.19287 0 0.0957 0.04102q0.11279 0.05811 0.18115 0.12988 0.07178 0.06836 0.22559 0.3042 0.43408 0.65967 0.58789 0.7998 0.39307 0.34863 0.88184 0.43408 0.12646 0.02734 2.52588 0.02735 2.40283 0 2.51562 0.02734 0.30762 0.04102 0.43408 0.32129l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.11279 0.2085-0.32471 0.29394l-0.0957 0.02735-9.5498 0-0.09571-0.02735q-0.21191-0.08545-0.3247-0.29394-0.02734-0.08545-0.04102-0.14697-0.01367-0.06494-0.01367-0.39307 0-0.32813-0.01367-0.39648-0.01367-0.07178-0.04102-0.14356-0.05811-0.12646-0.17773-0.21533-0.11621-0.09229-0.24268-0.10596-0.25293-0.04102-0.44433 0.09229-0.18799 0.1333-0.24268 0.38281-0.01367 0.11279-0.00684 0.51269 0.00684 0.3999 0.03418 0.52295 0.12646 0.5332 0.50928 0.89893 0.38623 0.36231 0.91944 0.46143 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.91602-0.45459 0.38623-0.35889 0.5127-0.90577 0.01367-0.08203 0.02734-0.5708l0.01367-4.84668q-0.01367-0.68359-0.02734-0.92285-0.01367-0.18115-0.04102-0.32129-0.14014-0.4751-0.50586-0.81006-0.3623-0.33838-0.84082-0.4375-0.10938-0.02734-0.48877-0.02734l-4.21435-0.01367q-0.34863 0-0.43408-0.02734-0.16748-0.04443-0.26661-0.16748-0.02734-0.03076-0.20849-0.29395-0.42041-0.61865-0.58789-0.78613-0.25293-0.23584-0.57422-0.34864l-0.01367 0q-0.15381-0.07178-0.25293-0.08545-0.14014-0.02734-0.44776-0.02734l-1.03564 0-1.17578 0q-0.23926 0.01367-0.33496 0.02734z m3.1206 4.07421q-0.25293 0.07178-0.36572 0.3042-0.10938 0.229-0.02735 0.46485 0.02734 0.07178 0.10596 0.15722 0.07861 0.08203 0.35547 0.37598l0.42041 0.42041-4.56299 0.01367-0.09912 0.04102q-0.08203 0.04443-0.16064 0.11621-0.0752 0.06836-0.11963 0.13672-0.12305 0.2666 0 0.5332 0.12646 0.2666 0.42041 0.30762 0.09912 0.02734 2.31055 0.02734l2.21142 0-0.42041 0.42041q-0.27686 0.29395-0.35547 0.3794-0.07861 0.08203-0.10595 0.1538-0.05469 0.15381-0.02051 0.32129 0.03418 0.16748 0.14697 0.28028 0.18115 0.18115 0.42041 0.18115l0.01367 0q0.12646 0 0.19483-0.04102 0.09912-0.04443 0.31103-0.23925 0.15381-0.14014 0.6836-0.67334l0.07177-0.08204q0.9502-0.93994 0.99463-1.02197 0.02734-0.07178 0.04102-0.11279 0.01367-0.04102 0.01367-0.15381 0-0.18115-0.05127-0.26318-0.04785-0.08545-0.98779-1.02198-0.93652-0.93994-1.02881-0.98779-0.08887-0.05127-0.2085-0.0581-0.11621-0.00684-0.20166 0.0205z"
                    fill="#59606E"
                  ></path>
                </svg>
                <div
                  data-pencil-name="BtnOutlineLabel"
                  style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Move
                </div>
              </div>
              <div
                data-pencil-name="Btn/Ghost" data-clickable @click="$router.push('/library')"
                style="align-items: center; background-color: #FFFFFF00; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; padding: 8px 12px; width: fit-content"
              >
                <svg
                  data-pencil-name="BtnGhostIcon"
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
                  data-pencil-name="BtnGhostLabel"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Retry processing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from '../composables/useToast'
import { confirmDestroy } from '../composables/useConfirmDestroy'
import { useLibraryStore } from '../stores/library'
import { documentsApi } from '../api'

const route = useRoute()
const router = useRouter()
const library = useLibraryStore()
const { toast } = useToast()
// 当前文档 id（由库列表 / 搜索进入时带 ?id=）
const docId = typeof route.query.id === 'string' ? route.query.id : ''

// 返回打开文档时的上一界面（library 列表/搜索、home、review-queue…）
// 直接进入本页（无应用内上一页）时兜底回 library
function goBack() {
  if (window.history.state && window.history.state.back) router.back()
  else router.push('/library')
}

// 文档标题 / 收藏：来自 GET /api/documents/:id；无 id 或请求失败时保留设计稿默认文案
const docTitle = ref('Introduction to Homography')
const isFav = ref(false)

onMounted(async () => {
  if (!docId) return
  try {
    const doc = await documentsApi.detail(docId)
    if (!doc) return
    const name = doc.name || doc.title
    if (name) {
      docTitle.value = name
      document.title = `${name} · SnapVault`
    }
    if (typeof doc.fav === 'boolean') isFav.value = doc.fav
  } catch (e) {
    /* 失败已由 http 层统一 toast；保留默认文案 */
  }
})

// ---- 1. 收藏切换：PUT /api/documents/:id/fav ----
async function toggleFav() {
  const next = !isFav.value
  try {
    if (docId) await documentsApi.setFav(docId, next)
    isFav.value = next
    toast({
      type: 'info',
      title: next ? '已加入收藏' : '已取消收藏',
      message: docTitle.value,
    })
  } catch (e) {
    /* 失败已由 http 层统一 toast */
  }
}

// ---- 2. 重命名：标题行内联编辑（Enter 确认 / Esc 取消）----
const renaming = ref(false)
const draftTitle = ref('')
const renameInput = ref(null)

function startRename() {
  draftTitle.value = docTitle.value
  renaming.value = true
  nextTick(() => {
    const el = renameInput.value
    if (el) {
      el.focus()
      el.select()
    }
  })
}
function cancelRename() {
  renaming.value = false
}
async function confirmRename() {
  if (!renaming.value) return
  renaming.value = false
  const next = draftTitle.value.trim()
  if (!next || next === docTitle.value) return
  try {
    if (docId) await documentsApi.rename(docId, next)
    docTitle.value = next
    document.title = `${next} · SnapVault`
    toast({ type: 'success', title: '已重命名', message: next })
  } catch (e) {
    /* 失败已由 http 层统一 toast */
  }
}

// ---- 3. 删除：统一二次确认（confirmDestroy）→ 返回上一页 → 可撤销恢复 ----
// 删除会真正从 library store 移除该文档（撤销时按原索引插回），
// 因此从库列表打开时（带 ?id=）返回后列表里不再有它。
async function askDelete() {
  moreOpen.value = false
  let removed = []
  const ok = await confirmDestroy({
    title: '删除这份文档？',
    message: `「${docTitle.value}」将被移入回收站，可在通知中撤销。`,
    confirmLabel: '删除',
    onConfirm: async () => {
      if (!docId) return
      // 后端删除成功后同步本地列表；失败抛错由 confirmDestroy 统一提示
      await documentsApi.remove([docId], { silent: true })
      removed = library.removeByIds([docId])
    },
    undoTitle: `已删除「${docTitle.value}」`,
    undoMessage: '文档已移入回收站',
    undoAction: () => {
      library.restore(removed)
      toast({ type: 'success', title: '已撤销删除', message: docTitle.value })
    },
  })
  if (ok) goBack()
}

// ---- 4. 更多菜单：导出 PDF / 分享 / 移动… + 删除 ----
const MORE_ITEMS = [
  { key: 'export-pdf', label: '导出 PDF' },
  { key: 'share', label: '分享' },
  { key: 'move', label: '移动…' },
  { key: 'delete', label: '删除', danger: true },
]
const moreOpen = ref(false)
const moreIndex = ref(0)
const moreWrap = ref(null)
const moreBtn = ref(null)
const morePanel = ref(null)

function openMore() {
  moreIndex.value = 0
  moreOpen.value = true
  nextTick(() => morePanel.value?.focus())
}
function closeMore() {
  moreOpen.value = false
  moreBtn.value?.focus()
}
function toggleMore() {
  if (moreOpen.value) closeMore()
  else openMore()
}
function runMore(item) {
  moreOpen.value = false
  if (item.key === 'delete') {
    askDelete()
    return
  }
  toast({ type: 'info', title: '功能待接入后端', message: item.label })
}
// ↑↓ 移动高亮、Enter/Space 展开或选中、Esc 关闭（与 Library 排序菜单同一套键盘模型）
function onMoreKeydown(e) {
  if (e.key === 'Escape') {
    if (moreOpen.value) closeMore()
    return
  }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault()
    const last = MORE_ITEMS.length - 1
    if (!moreOpen.value) openMore()
    moreIndex.value = Math.max(0, Math.min(last, moreIndex.value + (e.key === 'ArrowDown' ? 1 : -1)))
    return
  }
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    if (moreOpen.value) runMore(MORE_ITEMS[moreIndex.value])
    else openMore()
  }
}
function onMoreDocPointerDown(e) {
  if (moreOpen.value && moreWrap.value && !moreWrap.value.contains(e.target)) moreOpen.value = false
}
watch(moreOpen, (on) => {
  if (on) document.addEventListener('pointerdown', onMoreDocPointerDown, true)
  else document.removeEventListener('pointerdown', onMoreDocPointerDown, true)
})
onBeforeUnmount(() => document.removeEventListener('pointerdown', onMoreDocPointerDown, true))
</script>

<style scoped>
/* ============ 顶栏操作：收藏 / 重命名 / 更多 ============ */
[data-pencil-name="FavIcon"] {
  cursor: pointer;
  transition: transform var(--sv-dur-fast) var(--sv-ease-out);
}
/* 未收藏：描边灰星；收藏：--sv-warn 实心（CSS 覆盖 path 上的 fill 属性） */
[data-pencil-name="FavIcon"] path {
  fill: none;
  stroke: var(--sv-ink-3);
  stroke-width: 1.4;
  stroke-linejoin: round;
  transition:
    fill var(--sv-dur-fast) var(--sv-ease-out),
    stroke var(--sv-dur-fast) var(--sv-ease-out);
}
[data-pencil-name="FavIcon"].is-fav path {
  fill: var(--sv-warn);
  stroke: var(--sv-warn);
}
[data-pencil-name="FavIcon"]:hover {
  transform: scale(1.08);
}
[data-pencil-name="FavIcon"]:focus-visible,
[data-pencil-name="SideTitleEdit"]:focus-visible,
[data-pencil-name="MoreBtn"]:focus-visible {
  border-radius: 8px;
}

[data-pencil-name="SideTitleEdit"] {
  cursor: pointer;
  transition: fill var(--sv-dur-fast) var(--sv-ease-out);
}
[data-pencil-name="SideTitleEdit"]:hover path {
  fill: var(--sv-accent);
}

/* 标题行内联编辑：input 取代文本，占满可用宽度 */
.side-title-input {
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
  color: var(--sv-ink);
  font-family: var(--sv-font-body);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}
.side-title-input::selection {
  background-color: var(--sv-accent-soft);
}

/* ============ 更多菜单 ============ */
.more-wrap {
  position: relative;
  z-index: 50;
}
.more-btn {
  cursor: pointer;
  transition:
    border-color var(--sv-dur-fast) var(--sv-ease-out),
    background-color var(--sv-dur-fast) var(--sv-ease-out);
}
.more-btn:hover {
  background-color: var(--sv-surface-2) !important;
}
.more-btn.is-open {
  border-color: var(--sv-accent) !important;
}
.more-panel {
  --rise-from: -4px;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 60;
  display: none;
  min-width: 172px;
  padding: 5px;
  outline: none;
}
.more-panel.is-open {
  display: flex;
  animation: sv-rise-in var(--sv-dur-move) var(--sv-ease-out) both;
}
.more-item {
  padding: 8px 10px;
  font-size: 13px;
}
.more-item.is-danger {
  color: var(--sv-danger);
}
.more-item.is-danger:hover,
.more-item.is-danger.is-active {
  background-color: var(--sv-danger-soft);
}
.more-divider {
  height: 1px;
  margin: 4px 2px;
  background-color: var(--sv-line);
}
</style>
