<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authApi } from '@/api'

// 登录页为设计稿静态表单（输入框为静态展示）。Sign in 先对接登录接口、
// 拿到 token 写入本地，再进入首页；失败由 http 层统一提示。
// 联调时把下面的演示账号替换为真实表单绑定即可。
const router = useRouter()
const busy = ref(false)

async function signIn() {
  if (busy.value) return
  busy.value = true
  try {
    await authApi.login('you@studio.com', 'snapvault')
    router.push('/home')
  } catch (e) {
    /* 失败已由 http 层统一 toast */
  } finally {
    busy.value = false
  }
}
</script>

<template>
      <div class="page-root"
        data-pencil-name="11 · Login · Split"
        style="background-color: #F6F7F9; box-sizing: border-box; height: 900px; overflow: hidden; position: relative; width: 1440px"
      >
        <div
          data-pencil-name="BrandPanel"
          style="align-items: flex-start; background-image: url('/assets/bg-3.webp'); background-repeat: no-repeat; background-size: 100% 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 0px; height: 900px; justify-content: space-between; left: 0px; overflow: hidden; padding: 52px 44px; position: absolute; top: 0px; width: 613px; z-index: 0"
        >
          <div
            data-pencil-name="Brand"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 11px; height: fit-content; justify-content: flex-start; width: fit-content"
          >
            <div
              data-pencil-name="Logo"
              style="align-items: center; background-color: #2B5BD7; border-radius: 11px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 50px; justify-content: center; width: 53px"
            >
              <svg
                data-pencil-name="LogoIcon"
                data-icon-name="scan-line"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 20px; width: 20px"
              >
                <path
                  d="M2.60449 1.20313q-0.43408 0.07178-0.77929 0.35205-0.3418 0.28027-0.50928 0.66992l-0.01367 0.01367q-0.08545 0.21191-0.10596 0.35205-0.02051 0.14014-0.02051 0.75537l0 0.05469q0 0.57422 0 0.69385 0 0.11963 0.03418 0.21191 0.0376 0.08887 0.11963 0.17432 0.18115 0.18115 0.42041 0.18115 0.23926 0 0.40674-0.16748l0.01367-0.01367q0.08203-0.08545 0.10938-0.14014 0.03076-0.05811 0.03076-0.23926 0.01367-0.11279 0.01367-0.54687l0.01367-0.76905 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 0.76905-0.01367q0.43408 0 0.54687-0.01367 0.18115 0 0.23584-0.02735 0.05811-0.03076 0.14356-0.11279l0.01367-0.01367q0.16748-0.16748 0.16748-0.40674 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.16748-0.12646l-0.08545-0.04102-0.75537 0q-0.76904 0-0.88184 0.02735z m7.12647-0.00001q-0.18457 0.05811-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.16748 0.40674l0.01367 0.01367q0.08545 0.08203 0.14014 0.11279 0.05811 0.02734 0.23926 0.02735 0.11279 0.01367 0.54687 0.01367l0.76904 0.01367 0.09913 0.04102q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 0.76905q0 0.43408 0.01367 0.54687 0 0.18115 0.02735 0.23926 0.03076 0.05469 0.11279 0.14014l0.01367 0.01367q0.12647 0.12646 0.30078 0.16064 0.17432 0.03418 0.34522-0.03418 0.0957-0.05811 0.17773-0.14013 0.08545-0.08545 0.11963-0.17432 0.0376-0.09229 0.0376-0.21191 0-0.11963 0-0.69385 0-0.57422-0.00684-0.7041-0.00684-0.1333-0.03418-0.21875-0.25293-0.81348-0.98095-1.14844-0.14014-0.06836-0.28028-0.11279-0.09912-0.02734-0.23242-0.03418-0.12988-0.00684-0.7041-0.00684-0.7998 0-0.85449 0.02734z m-5.85157 5.25q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14014 0 0.15381 0.04102 0.25293 0.11279 0.2085 0.3247 0.29394l0.09571 0.02735 6.0498 0 0.0957-0.02735q0.21192-0.08545 0.32471-0.29394 0.04102-0.09912 0.04102-0.25293 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.4751-0.0376l-2.65918 0-2.64551 0q-0.42041 0.01367-0.4751 0.02734z m-2.22851 2.89844q-0.15381 0.01367-0.27344 0.11963-0.11621 0.10596-0.17432 0.23242-0.02734 0.08203-0.02734 0.20166 0 0.11963 0 0.69385 0 0.57422 0.00684 0.70752 0.00684 0.12988 0.03418 0.21533 0.29395 0.96729 1.26123 1.26123 0.08545 0.02734 0.21533 0.03418 0.1333 0.00684 0.70752 0.00684 0.57422 0 0.69385 0 0.11963 0 0.20849-0.03418 0.09229-0.0376 0.17432-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394-0.05811-0.02734-0.16406-0.03418-0.10254-0.00684-0.66309-0.01367-0.56055-0.00684-0.68018-0.02051-0.11621-0.01367-0.21533-0.07178-0.14014-0.0957-0.22558-0.26318l-0.04102-0.09913-0.02734-1.34326q0-0.14014-0.02735-0.18457-0.08545-0.18115-0.25976-0.27685-0.17432-0.09912-0.37256-0.05811z m10.5 0q-0.18115 0.02734-0.32129 0.16748-0.08203 0.08545-0.11279 0.15039-0.02734 0.06152-0.02735 0.22901-0.01367 0.12646-0.01367 0.56054l-0.01367 0.75537-0.04102 0.09913q-0.08545 0.16748-0.22558 0.26318-0.09912 0.05811-0.21875 0.07178-0.11621 0.01367-0.67676 0.02051-0.56055 0.00684-0.6665 0.01367-0.10254 0.00684-0.16065 0.03418-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.17432 0.11963 0.09229 0.03418 0.21191 0.03418 0.11963 0 0.69385 0 0.57422 0 0.7041-0.00684 0.1333-0.00684 0.21875-0.03418 0.96729-0.29395 1.26123-1.26123 0.02734-0.08545 0.03418-0.21533 0.00684-0.1333 0.00684-0.69385l0-0.63232q0-0.19482-0.02051-0.26318-0.02051-0.07178-0.09228-0.15381-0.09912-0.12646-0.2461-0.18116-0.14697-0.05811-0.31445-0.03076z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </div>
            <div
              data-pencil-name="BrandName"
              style="box-sizing: border-box; color: #FFFFFF; flex-shrink: 0; font-family: Manrope, system-ui, sans-serif; font-size: 20px; font-style: normal; font-weight: 700; height: 31px; letter-spacing: -0.3px; line-height: normal; text-align: left; width: 120px"
            >
              SnapVault
            </div>
          </div>
          <div
            data-pencil-name="Hero"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 18px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="HeroEyebrow"
              style='box-sizing: border-box; color: #7E8FB5; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 2.4px; line-height: normal; text-align: left; white-space: nowrap'
            >
              DOCUMENT VAULT
            </div>
            <div
              data-pencil-name="HeroTitle"
              style="box-sizing: border-box; color: #FFFFFF; font-family: Manrope, system-ui, sans-serif; font-size: 40px; font-style: normal; font-weight: 700; letter-spacing: -1.2px; line-height: 46px; text-align: left; width: 100%"
            >
              Everything you scan, kept in order.
            </div>
            <div
              data-pencil-name="HeroSub"
              style='box-sizing: border-box; color: #AEBBD6; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 15.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 24px; text-align: left; width: 100%'
            >
              Import, tag and find any document in seconds — right from your desk.
            </div>
            <div
              data-pencil-name="Stats"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 36px; height: fit-content; justify-content: flex-start; width: fit-content"
            >
              <div
                data-pencil-name="Stat"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="StatNum"
                  style="box-sizing: border-box; color: #FFFFFF; font-family: Manrope, system-ui, sans-serif; font-size: 22px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                >
                  12,480
                </div>
                <div
                  data-pencil-name="StatLabel"
                  style='box-sizing: border-box; color: #7E8FB5; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 1.2px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  DOCUMENTS
                </div>
              </div>
              <div
                data-pencil-name="Stat"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: fit-content; justify-content: flex-start; width: fit-content"
              >
                <div
                  data-pencil-name="StatNum"
                  style="box-sizing: border-box; color: #FFFFFF; font-family: Manrope, system-ui, sans-serif; font-size: 22px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap"
                >
                  320
                </div>
                <div
                  data-pencil-name="StatLabel"
                  style='box-sizing: border-box; color: #7E8FB5; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 1.2px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  FOLDERS
                </div>
              </div>
            </div>
          </div>
          <div
            data-pencil-name="CardFan"
            style="box-sizing: border-box; flex-shrink: 0; height: 244px; position: relative; width: 100%"
          >
            <div
              data-pencil-name="MiniDoc"
              style="background-color: #FFFFFF; border-radius: 14px; box-shadow: 0px 18px 40px #05091466; box-sizing: border-box; height: 236px; left: 200px; overflow: hidden; position: absolute; top: -33px; width: 196px; z-index: 0"
            >
              <div
                data-pencil-name="MiniCover"
                style="align-items: center; background-color: #FBEAE7; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 104px; justify-content: center; left: 0px; position: absolute; top: 0px; width: 196px; z-index: 0"
              >
                <div
                  data-pencil-name="MiniPage"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: 60px; justify-content: flex-start; padding: 9px 7px; width: 44px"
                >
                  <div
                    data-pencil-name="MiniHead"
                    style="background-color: #B7C0CE; border-radius: 1.25px; box-sizing: border-box; flex-shrink: 0; height: 2.5px; width: 20px"
                  ></div>
                  <div
                    data-pencil-name="MiniLine"
                    style="background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 30px"
                  ></div>
                  <div
                    data-pencil-name="MiniLine"
                    style="background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 30px"
                  ></div>
                  <div
                    data-pencil-name="MiniLine"
                    style="background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 14px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="MiniBody"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; height: 132px; justify-content: flex-start; left: 0px; padding: 16px; position: absolute; top: 104px; width: 196px; z-index: 1"
              >
                <div
                  data-pencil-name="MiniTitle"
                  style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: 18px; text-align: left; width: 100%"
                >
                  Q3 Expense Receipts
                </div>
                <div
                  data-pencil-name="MiniMeta"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  18 pages · PDF
                </div>
                <div
                  data-pencil-name="MiniPill"
                  style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 3px 8px; width: fit-content"
                >
                  <div
                    data-pencil-name="MiniPillText"
                    style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Ready
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="MiniDoc"
              style="background-color: #FFFFFF; border-radius: 14px; box-shadow: 0px 18px 40px #05091466; box-sizing: border-box; height: 236px; left: 67px; overflow: hidden; position: absolute; top: 67.661px; transform-origin: top left; transform: rotate(-9deg); width: 196px; z-index: 1"
            >
              <div
                data-pencil-name="MiniCover"
                style="align-items: center; background-color: #EDE7FB; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 104px; justify-content: center; left: 0px; position: absolute; top: 0px; width: 196px; z-index: 0"
              >
                <div
                  data-pencil-name="MiniPage"
                  style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: 60px; justify-content: flex-start; padding: 9px 7px; width: 44px"
                >
                  <div
                    data-pencil-name="MiniHead"
                    style="background-color: #B7C0CE; border-radius: 1.25px; box-sizing: border-box; flex-shrink: 0; height: 2.5px; width: 20px"
                  ></div>
                  <div
                    data-pencil-name="MiniLine"
                    style="background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 30px"
                  ></div>
                  <div
                    data-pencil-name="MiniLine"
                    style="background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 30px"
                  ></div>
                  <div
                    data-pencil-name="MiniLine"
                    style="background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 14px"
                  ></div>
                </div>
              </div>
              <div
                data-pencil-name="MiniBody"
                style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; height: 132px; justify-content: flex-start; left: 0px; padding: 16px; position: absolute; top: 104px; width: 196px; z-index: 1"
              >
                <div
                  data-pencil-name="MiniTitle"
                  style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: 18px; text-align: left; width: 100%"
                >
                  Field Notes — Rome
                </div>
                <div
                  data-pencil-name="MiniMeta"
                  style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  18 pages · PDF
                </div>
                <div
                  data-pencil-name="MiniPill"
                  style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 3px 8px; width: fit-content"
                >
                  <div
                    data-pencil-name="MiniPillText"
                    style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                  >
                    Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-pencil-name="RightGlow"
          style="background-image: radial-gradient(ellipse 50% 50% at 50% 50%, #2B5BD726 0%, #2B5BD700 100%); background-repeat: no-repeat; background-size: 100% 100%; border-radius: 50%; box-sizing: border-box; height: 680px; left: 980px; position: absolute; top: -200px; width: 680px; z-index: 1"
        ></div>
        <div
          data-pencil-name="RightGlow2"
          style="background-image: radial-gradient(ellipse 50% 50% at 50% 50%, #7EA6FF1F 0%, #7EA6FF00 100%); background-repeat: no-repeat; background-size: 100% 100%; border-radius: 50%; box-sizing: border-box; height: 520px; left: 560px; position: absolute; top: 560px; width: 520px; z-index: 2"
        ></div>
        <div
          data-pencil-name="LoginForm"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; gap: 24px; height: fit-content; justify-content: flex-start; left: 839px; position: absolute; top: 140px; width: 400px; z-index: 3"
        >
          <div
            data-pencil-name="FormHead"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 9px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="FormEyebrow"
              style='box-sizing: border-box; color: #2B5BD7; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 11px; font-style: normal; font-weight: 400; letter-spacing: 2.2px; line-height: normal; text-align: left; white-space: nowrap'
            >
              WELCOME BACK
            </div>
            <div
              data-pencil-name="FormTitle"
              style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 30px; font-style: normal; font-weight: 700; letter-spacing: -0.6px; line-height: normal; text-align: left; white-space: nowrap"
            >
              Sign in to SnapVault
            </div>
            <div
              data-pencil-name="FormSub"
              style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Use your work account to continue.
            </div>
          </div>
          <div
            data-pencil-name="SocialRow"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 12px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="SocialBtn"
              style="align-items: center; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 9px; height: 46px; justify-content: center"
            >
              <svg
                data-pencil-name="SocialIcon"
                data-icon-name="globe"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
              >
                <path
                  d="M6.76074 0.58789q-1.8457 0.09912-3.3291 1.09375-1.0083 0.66992-1.70215 1.65772-0.69385 0.98779-0.97412 2.16357-0.16748 0.71436-0.16748 1.49707 0 0.61523 0.0957 1.16895 0.09912 0.55371 0.32471 1.12793 0.4751 1.24414 1.43897 2.21826 0.96729 0.97412 2.21484 1.46289 0.58789 0.22559 1.1416 0.33154 0.55371 0.10254 1.19629 0.10254 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25097-2.43359 0.35205-1.35352 0.11963-2.72412-0.229-1.37402-1.01513-2.52246-0.81006-1.18945-2.05078-1.92432-1.2373-0.73486-2.66602-0.86133-0.48877-0.04102-0.82715-0.02734z m-1.14844 1.3877q-1.09033 1.62354-1.39794 3.52734-0.04102 0.16748-0.07178 0.44092-0.02734 0.27344-0.02735 0.34179l0 0.02735q0 0.07178-0.03418 0.08545-0.03418 0.01367-0.21875 0.02734l-2.08496 0 0.01368-0.09912q0.08545-0.64258 0.34179-1.28516 0.25977-0.646 0.65283-1.16211 1.0083-1.36035 2.64551-1.89013l0.19824-0.05811q0.01367 0-0.01709 0.04444z m3.25049 0.12304q1.03564 0.37939 1.84571 1.19287 0.81348 0.81006 1.20654 1.84571 0.22217 0.60156 0.29394 1.18945l0.01368 0.09912-2.08838 0q-0.18115-0.01367-0.21533-0.02734-0.03418-0.01367-0.03418-0.08545l0-0.02735q0-0.06836-0.03077-0.34179-0.02734-0.27344-0.06836-0.45459-0.30762-1.89014-1.38427-3.51367l-0.04444-0.04444 0.15381 0.04444q0.14014 0.04102 0.35205 0.12304z m-1.72265 0.14014q0.64258 0.82715 1.04931 1.85596 0.40674 1.02881 0.50586 2.02343l0.02735 0.30762-3.45899 0 0.04102-0.29394q0.08545-0.90918 0.42041-1.83204 0.33838-0.92627 0.88183-1.70898 0.11279-0.16748 0.2461-0.34863 0.1333-0.18457 0.14697-0.17774 0.01367 0.00684 0.14014 0.17432z m-3.03858 5.36279q0.01367 0.02734 0.01367 0.10596 0 0.0752 0.02735 0.34863 0.03076 0.27344 0.07178 0.44092 0.30762 1.90381 1.38427 3.52734l0.04444 0.04444-0.15381-0.04444q-1.66797-0.50244-2.70362-1.90381-0.39307-0.51611-0.65283-1.15869-0.25635-0.646-0.34179-1.28857l-0.01368-0.09912 2.1294 0.01367q0.18115 0 0.19482 0.01367z m4.6211 0.02735q-0.01367 0.05811-0.02735 0.23925-0.07178 0.75537-0.33154 1.55518-0.25635 0.79639-0.64941 1.4834-0.15381 0.2666-0.42041 0.64599-0.2666 0.37598-0.29395 0.37598-0.02734 0-0.29395-0.37598-0.2666-0.37939-0.42041-0.64599-0.39307-0.68701-0.65283-1.4834-0.25635-0.7998-0.32812-1.55518l-0.04102-0.29394 3.45899 0 0 0.05469z m3.48632 0.04443q-0.16748 1.32959-0.98779 2.44385-0.82031 1.11084-2.05078 1.67138-0.23926 0.09912-0.52637 0.19825-0.28711 0.0957-0.27343 0.06836l0.07177-0.09913q0.42041-0.64258 0.76221-1.45605 0.3418-0.81348 0.5127-1.62354 0.06836-0.28027 0.11621-0.64941 0.05127-0.37256 0.05127-0.51269l0-0.02735q0-0.07178 0.03418-0.08545 0.03418-0.01367 0.21533-0.02734l2.08838 0-0.01368 0.09912z"
                  fill="#16181D"
                ></path>
              </svg>
              <div
                data-pencil-name="SocialLabel"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Google
              </div>
            </div>
            <div
              data-pencil-name="SocialBtn"
              style="align-items: center; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex: 1 1 0; gap: 9px; height: 46px; justify-content: center"
            >
              <svg
                data-pencil-name="SocialIcon"
                data-icon-name="building-2"
                data-icon-set="lucide"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
              >
                <path
                  d="M4.35449 1.20313q-0.43408 0.07178-0.77929 0.35205-0.3418 0.28027-0.50928 0.66992l-0.02735 0.04443q-0.05811 0.15381-0.07177 0.22217-0.02734 0.11279-0.02735 0.36572l-0.01367 2.39258-0.34863 0q-0.33838 0-0.47852 0.01367-0.4751 0.07178-0.85449 0.37256-0.37598 0.30078-0.55713 0.76221l-0.01367 0.02734q-0.04443 0.14014-0.05811 0.23926-0.01367 0.15381-0.02734 0.57422l0 1.67822q-0.01367 2.17041 0.01367 2.33789 0.02734 0.30762 0.16748 0.60156 0.15381 0.32471 0.44092 0.56397 0.28711 0.23584 0.65283 0.34863l0.15381 0.05469 9.9668 0 0.15381-0.05469q0.36572-0.11279 0.65283-0.34863 0.28711-0.23926 0.44092-0.56397 0.14014-0.28027 0.18115-0.60156 0.01367-0.16748 0-3.20605l0-2.37891q0-0.54688-0.02734-0.72803-0.01367-0.12646-0.05811-0.25293l-0.02734-0.04101q-0.14014-0.37939-0.44092-0.66651-0.30078-0.28711-0.67676-0.39648-0.15723-0.05811-0.31787-0.07178-0.16065-0.01367-0.44092-0.01367l-0.34863 0 0-0.44775q0-0.29395-0.01367-0.38965-0.01367-0.09912-0.02735-0.18457-0.23926-0.81348-0.96728-1.14844-0.15381-0.06836-0.29395-0.11279l-0.14013-0.04102-2.57715 0q-2.5874 0-2.7002 0.02734z m5.20899 1.17578q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 8.89014-1.17578 0 0-0.67334q0-0.55713-0.02051-0.74512-0.02051-0.19141-0.10595-0.3999-0.18115-0.43408-0.54004-0.72119-0.35547-0.28711-0.8169-0.35889-0.2666-0.04102-0.5332 0-0.46143 0.07178-0.82031 0.35889-0.35547 0.28711-0.53663 0.72119-0.08545 0.2085-0.10595 0.3999-0.02051 0.18799-0.02051 0.74512l0 0.67334-1.17578 0 0.01367-8.89014 0.04102-0.09912q0.07178-0.14014 0.18798-0.229 0.11963-0.09229 0.25977-0.11963 0.08545 0 2.47803 0l2.40967 0 0.09912 0.04102z m-3.83838 1.72265q-0.18115 0.02734-0.32129 0.18115-0.14014 0.15381-0.15381 0.35206 0 0.14014 0.06152 0.28027 0.06494 0.14014 0.19141 0.22217l0.01367 0.01367q0.06836 0.05811 0.15039 0.07178 0.08545 0.01367 0.35205 0.02734l1.96192 0q0.2666-0.01367 0.34863-0.02734 0.08545-0.01367 0.15381-0.07178l0.01367-0.01367q0.21191-0.14014 0.24609-0.36914 0.03418-0.23242-0.09912-0.43409-0.1333-0.20508-0.38281-0.23242-0.11279-0.02734-1.2749-0.02734-1.16211 0-1.26123 0.02734z m6.1455 0.60156q0.21192 0.08545 0.32471 0.29395l0.04102 0.09912 0 6.13184-0.04102 0.09912q-0.04443 0.08203-0.11621 0.16064-0.06836 0.0752-0.13672 0.11963-0.14014 0.06836-0.57422 0.06836l-0.29394 0 0-7 0.34863 0q0.23926 0 0.30762 0.00684 0.07178 0.00684 0.14013 0.0205z m-8.94482 4.34083l0 2.63183-0.29394 0q-0.43408 0-0.57422-0.06836-0.06836-0.04443-0.14014-0.11963-0.06836-0.07861-0.11279-0.16064l-0.04102-0.09912 0-4.38184 0.04102-0.09912q0.04443-0.08203 0.1333-0.16406 0.09229-0.08545 0.1914-0.12989 0.05469-0.01367 0.12989-0.0205 0.07861-0.00684 0.3042-0.00684l0.3623 0 0 2.61817z m2.70361-2.59083q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14014 0 0.15381 0.04102 0.25293 0.11279 0.2085 0.3247 0.29394 0.06836 0.02734 0.24952 0.02735l1.12109 0 1.12109 0q0.18115 0 0.24952-0.02735 0.21191-0.08545 0.3247-0.29394 0.04102-0.09912 0.04102-0.25293 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.26319-0.0376l-1.12109 0-1.12109 0q-0.19482 0.01367-0.24952 0.02734z m1.62354 3.52735q0.18115 0.08545 0.2666 0.2666l0.05469 0.08545 0 1.34326-1.14844 0 0-1.34326 0.05469-0.08545q0.11279-0.22217 0.36572-0.30762 0.04102-0.01367 0.18115-0.00683 0.14014 0.00684 0.22559 0.04785z"
                  fill="#16181D"
                ></path>
              </svg>
              <div
                data-pencil-name="SocialLabel"
                style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                SSO
              </div>
            </div>
          </div>
          <div
            data-pencil-name="DividerRow"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 12px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="DividerL"
              style="background-color: #E3E5EA; box-sizing: border-box; flex: 1 1 0; height: 1px"
            ></div>
            <div
              data-pencil-name="DividerText"
              style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              or sign in with email
            </div>
            <div
              data-pencil-name="DividerR"
              style="background-color: #E3E5EA; box-sizing: border-box; flex: 1 1 0; height: 1px"
            ></div>
          </div>
          <div
            data-pencil-name="Fields"
            style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 16px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="FieldGroup"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; width: 100%"
            >
              <div
                data-pencil-name="FieldLabel"
                style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
              >
                Email
              </div>
              <div
                data-pencil-name="Input"
                style="align-items: center; background-color: #FFFFFF; border-radius: 12px; border: 2px solid #2B5BD7; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 11px; height: 50px; justify-content: flex-start; padding: 0px 14px; width: 100%"
              >
                <svg
                  data-pencil-name="InputIcon"
                  data-icon-name="mail"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 17px; width: 17px"
                >
                  <path
                    d="M2.05762 1.77734q-0.28027 0.04102-0.53321 0.16748-0.34863 0.19824-0.58789 0.50586-0.23584 0.30762-0.32129 0.70069-0.01367 0.10938-0.02734 0.66992l0 3.17871 0 3.17871q0.01367 0.56055 0.02734 0.66992 0.11279 0.5332 0.50245 0.90577 0.39307 0.36914 0.92627 0.46826 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.92286-0.46826 0.39307-0.37256 0.50586-0.90577 0.01367-0.10938 0.02734-0.66992l0-3.17871 0-3.17871q-0.01367-0.56055-0.02734-0.66992-0.12647-0.54688-0.53321-0.92285-0.40674-0.37939-0.95019-0.46485-0.1709-0.01367-4.93897-0.01367-4.76465 0-4.90478 0.02734z m9.81298 1.17579q0.09912 0.04443 0.18116 0.12304 0.08545 0.0752 0.12646 0.16065 0.04443 0.08203 0.05127 0.12988 0.00684 0.04785 0.00684 0.18799l0 0.21191-2.46436 1.58252q-2.46436 1.56543-2.53613 1.60303-0.06836 0.03418-0.16748 0.03418l-0.02734 0.01367q-0.0957 0.01367-0.2085-0.04102-0.15381-0.07178-0.65967-0.37939l-4.40918-2.81299 0-0.21191q0-0.14014 0.00684-0.18799 0.00684-0.04785 0.04101-0.12305 0.0376-0.07861 0.12647-0.16064 0.09229-0.08545 0.16748-0.1128 0.07861-0.03076 0.70752-0.04443l4.18701 0 4.18701 0q0.61523 0 0.68359 0.02735z m-5.63964 5.02783q0.22217 0.10938 0.46142 0.15381 0.09912 0.02734 0.30762 0.02734 0.2085 0 0.30762-0.02734 0.30762-0.05811 0.54687-0.19825 0.14014-0.08203 2.26612-1.42529l2.12939-1.36035-0.01367 5.50293-0.04102 0.09912q-0.11279 0.2085-0.3247 0.29395l-0.09571 0.02734-9.5498 0-0.09571-0.02734q-0.21191-0.08545-0.3247-0.29395l-0.04102-0.09912-0.01367-5.50293 2.17041 1.37402q2.17041 1.38428 2.31055 1.45606z"
                    fill="#8A909C"
                  ></path>
                </svg>
                <div
                  data-pencil-name="InputText"
                  style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  you@studio.com
                </div>
                <svg
                  data-pencil-name="InputCheck"
                  data-icon-name="circle-check"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
                >
                  <path
                    d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                    fill="#2B5BD7"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              data-pencil-name="FieldGroup"
              style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 7px; height: fit-content; justify-content: flex-start; width: 100%"
            >
              <div
                data-pencil-name="LabelRow"
                style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: space-between; width: 100%"
              >
                <div
                  data-pencil-name="FieldLabel"
                  style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Password
                </div>
                <div
                  data-pencil-name="ForgotLink"
                  style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
                >
                  Forgot?
                </div>
              </div>
              <div
                data-pencil-name="Input"
                style="align-items: center; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 11px; height: 50px; justify-content: flex-start; padding: 0px 14px; width: 100%"
              >
                <svg
                  data-pencil-name="InputIcon"
                  data-icon-name="lock"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 17px; width: 17px"
                >
                  <path
                    d="M6.77441 0.60156q-0.72803 0.02734-1.38769 0.3794-0.65625 0.34863-1.12451 0.92285-0.46826 0.57422-0.64942 1.28857l0 0.01367q-0.07178 0.29395-0.08545 0.48536-0.01367 0.18799-0.02734 1.02539l0 1.10742-0.2666 0q-0.40674 0-0.63916 0.04443-0.229 0.04102-0.45117 0.15039-0.32471 0.16748-0.56397 0.44776-0.23584 0.28027-0.34863 0.64599l-0.05469 0.15381 0 4.7168 0.05469 0.15381q0.15723 0.51953 0.56055 0.86132 0.40674 0.3418 0.93994 0.39991 0.14014 0.02734 4.26904 0.02734 4.12891 0 4.26904-0.02734 0.30762-0.02734 0.58789-0.16748 0.32471-0.15381 0.56055-0.44092 0.23926-0.28711 0.35205-0.65283l0.05469-0.15381 0-4.7168-0.05469-0.15381q-0.11279-0.36572-0.35205-0.64599-0.23584-0.28027-0.56055-0.44776-0.22217-0.10938-0.45459-0.15039-0.229-0.04443-0.63574-0.04443l-0.2666 0 0-1.13477q-0.01367-0.81006-0.02734-0.99804-0.01367-0.19141-0.08545-0.47168l0-0.02735q-0.18115-0.71436-0.66651-1.30224-0.48193-0.58789-1.15185-0.93653-0.82715-0.40674-1.79444-0.35205z m0.70069 1.20313q0.75537 0.15381 1.2749 0.7417 0.3623 0.40674 0.50244 0.92627 0.05811 0.19482 0.06494 0.41357 0.00684 0.21533 0.00684 0.9707l0 0.96729-4.64844 0 0-1.06299q0-0.82715 0.01367-1.0083 0.01367-0.18457 0.09912-0.40674 0.22217-0.64258 0.74854-1.06982 0.52637-0.42725 1.19629-0.5127 0.14014-0.01367 0.3623 0 0.22559 0.01367 0.3794 0.04102z m3.85205 5.25q0.08203 0.04443 0.15723 0.12304 0.07861 0.0752 0.11279 0.15381 0.0376 0.0752 0.0581 0.19483 0.02051 0.11621 0.00684 2.19092l0 1.6372q0 0.3623-0.02734 0.48877-0.01367 0.08545-0.07178 0.14014l-0.01367 0.02734q-0.11279 0.12646-0.26661 0.19824l-0.0957 0.04102-8.37402 0-0.0957-0.04102q-0.15381-0.0581-0.26661-0.19824l-0.01367-0.02734q-0.05811-0.06836-0.07178-0.14014-0.02734-0.12646-0.02734-0.48877l0-1.65088q-0.01367-2.08838 0.01367-2.20117 0.01367-0.18115 0.1333-0.31445 0.11963-0.1333 0.28711-0.17432 0.06836-0.01367 4.25537-0.01367l4.20069 0.01367 0.09912 0.04102z"
                    fill="#8A909C"
                  ></path>
                </svg>
                <div
                  data-pencil-name="InputText"
                  style='box-sizing: border-box; color: #16181D; flex: 1 1 0; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 16px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left'
                >
                  ••••••••••
                </div>
                <svg
                  data-pencil-name="InputEye"
                  data-icon-name="eye"
                  data-icon-set="lucide"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  style="box-sizing: border-box; flex-shrink: 0; height: 17px; width: 17px"
                >
                  <path
                    d="M6.67871 2.35156q-1.23389 0.04102-2.38916 0.54004-1.15186 0.49561-2.05078 1.37744-0.9502 0.92627-1.46973 2.05762-0.10938 0.25293-0.14697 0.37939-0.03418 0.12646-0.03418 0.29395 0 0.16748 0.03418 0.28711 0.0376 0.11963 0.1333 0.35547 0.37939 0.82715 0.97412 1.5415 0.59473 0.71436 1.33643 1.24756 1.45605 1.00488 3.2915 1.20313 0.2085 0.02734 0.64258 0.02734 0.43408 0 0.62891-0.02734 1.20654-0.12647 2.24902-0.60157 1.04248-0.47851 1.8833-1.28857 0.96387-0.93994 1.4834-2.10205 0.0957-0.23584 0.12988-0.35547 0.0376-0.11963 0.0376-0.28711 0-0.16748-0.0376-0.28711-0.03418-0.11963-0.12988-0.35547-0.36572-0.78613-0.93311-1.4834-0.56396-0.70068-1.27832-1.22021-0.84082-0.61523-1.82861-0.9502-0.98779-0.33838-2.02344-0.36572-0.2085 0-0.50244 0.01367z m0.99463 1.18946q1.46973 0.16748 2.67285 1.05273 1.20313 0.88184 1.81836 2.2251l0.08545 0.18115-0.08545 0.19482q-0.62891 1.34668-1.83203 2.22168-1.20313 0.875-2.73096 1.05616-0.18115 0.01367-0.60156 0.01367-0.42041 0-0.60156-0.01367-1.10742-0.12647-2.0542-0.62207-0.94336-0.49902-1.65772-1.32618-0.51611-0.61523-0.85107-1.34326l-0.08545-0.18115 0.08545-0.18115q0.43408-0.95361 1.18945-1.69531 0.75537-0.7417 1.75-1.16211 0.90918-0.39307 1.94483-0.44776 0.14014-0.01367 0.46142 0 0.32129 0.01367 0.49219 0.02735z m-1.03564 1.1621q-0.89893 0.15381-1.44239 0.82715-0.18457 0.22217-0.29052 0.44776-0.10254 0.22559-0.18799 0.51953-0.02734 0.10938-0.03418 0.19482-0.00684 0.08203-0.00684 0.30762 0 0.28027 0.02735 0.43408 0.02734 0.15381 0.11279 0.3794 0.16748 0.4751 0.52978 0.84082 0.36572 0.3623 0.84082 0.52978 0.22559 0.08545 0.3794 0.11279 0.15381 0.02734 0.43408 0.02735 0.28027 0 0.43408-0.02735 0.15381-0.02734 0.3794-0.11279 0.4751-0.16748 0.8374-0.52978 0.36572-0.36572 0.5332-0.84082 0.08545-0.22559 0.1128-0.3794 0.02734-0.15381 0.02734-0.43408 0-0.28027-0.02734-0.43408-0.02734-0.15381-0.1128-0.3794-0.2085-0.55713-0.6665-0.95019-0.45459-0.39307-1.04248-0.51953-0.14014-0.02734-0.42725-0.03418-0.28711-0.00684-0.41015 0.02051z m0.65625 1.16211q0.28027 0.07178 0.52294 0.31788 0.24609 0.24268 0.31788 0.52294 0.02734 0.12646 0.02734 0.29395 0 0.16748-0.02734 0.28027-0.07178 0.29395-0.3042 0.53321-0.229 0.23584-0.53662 0.32129-0.11279 0.02734-0.29395 0.02734-0.18115 0-0.29395-0.02734-0.30762-0.08545-0.54003-0.32129-0.229-0.23926-0.30079-0.53321-0.02734-0.11279-0.02734-0.28027 0-0.16748 0.02734-0.29395 0.05811-0.22559 0.22559-0.43408 0.16748-0.2085 0.40674-0.32129 0.34863-0.18115 0.79639-0.08545z"
                    fill="#8A909C"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            data-pencil-name="RememberRow"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 10px; height: fit-content; justify-content: flex-start; width: 100%"
          >
            <div
              data-pencil-name="Checkbox"
              style="align-items: center; background-color: #2B5BD7; border-radius: 6px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: 19px; justify-content: center; width: 19px"
            >
              <svg
                data-pencil-name="CheckboxIcon"
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
              data-pencil-name="RememberText"
              style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Keep me signed in on this device
            </div>
          </div>
          <div
            data-pencil-name="SignInButton" data-clickable @click="signIn"
            style="align-items: center; background-color: #2B5BD7; border-radius: 12px; box-shadow: 0px 10px 24px #2B5BD73D; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: 50px; justify-content: center; width: 100%"
          >
            <div
              data-pencil-name="SignInText"
              style='box-sizing: border-box; color: #FFFFFF; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 15px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Sign in
            </div>
            <svg
              data-pencil-name="SignInIcon"
              data-icon-name="arrow-right"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
            >
              <path
                d="M6.90088 2.35156q-0.18115 0.02734-0.32129 0.16748-0.11279 0.11279-0.14697 0.28028-0.03418 0.16748 0.02051 0.32129 0.02734 0.08545 0.25976 0.3247 0.23242 0.23584 1.36377 1.37061 1.58252 1.58252 1.58252 1.59619 0 0.01367-3.45557 0.01367l-3.44531 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.53321 0.03418l3.01123 0q3.42822 0 3.42822 0.01367 0 0.01367-1.58252 1.59619-1.13135 1.13477-1.36377 1.37402-0.23242 0.23584-0.25976 0.3213-0.05469 0.15381-0.02051 0.32128 0.03418 0.16748 0.14697 0.28028 0.18115 0.18115 0.42041 0.18115l0.04102 0q0.11279 0 0.19824-0.05469 0.14014-0.09912 0.51611-0.46484l1.68164-1.67822q2.1123-2.10205 2.15332-2.18409 0.07178-0.12646 0.07178-0.28027 0-0.15381-0.07178-0.28027-0.04102-0.08203-2.1499-2.18067-2.10547-2.10205-2.17725-2.13623-0.06836-0.0376-0.23584-0.06494-0.04102 0-0.12646 0.01367z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
          <div
            data-pencil-name="PasskeyButton"
            style="align-items: center; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E3E5EA; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 9px; height: 48px; justify-content: center; width: 100%"
          >
            <svg
              data-pencil-name="PasskeyIcon"
              data-icon-name="key-round"
              data-icon-set="lucide"
              viewBox="0 0 13.99993896484375 14"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              style="box-sizing: border-box; flex-shrink: 0; height: 16px; width: 16px"
            >
              <path
                d="M8.68164 0.57422q-0.60498 0.05469-1.13476 0.25293-0.32129 0.12646-0.67334 0.32812-0.34863 0.20166-0.62891 0.44092-0.40674 0.34863-0.72803 0.79639-0.32129 0.44775-0.51953 0.93994-0.15381 0.39307-0.22559 0.72803-0.06836 0.33496-0.08203 0.75537-0.01367 0.51953 0.09912 1.02197l0.04102 0.18115-1.89014 1.89014q-1.89014 1.87646-2.00293 2.0166-0.19482 0.2666-0.29394 0.58789-0.04102 0.16748-0.05469 0.39307-0.01367 0.22217 0 0.81006l0 0.61865q0.01367 0.15381 0.02734 0.22217 0.09912 0.29394 0.31446 0.51953 0.21875 0.22217 0.52636 0.30762 0.06836 0.01367 0.25293 0.02734l0.90918 0 0.92286 0q0.18457-0.01367 0.25293-0.02734 0.23926-0.07178 0.44091-0.23243 0.20166-0.16064 0.31446-0.38281 0.07178-0.15723 0.09228-0.27344 0.02051-0.11963 0.02051-0.42724l0.01367-0.39307 0.39307-0.01367q0.30762 0 0.42383-0.02051 0.11963-0.02051 0.27685-0.09228 0.22217-0.11279 0.38281-0.30762 0.16064-0.19482 0.23243-0.43408 0.02734-0.11279 0.02734-0.48877l0.01367-0.39307 0.21192-0.01367q0.3623-0.04102 0.64941-0.18115 0.28711-0.14014 0.55371-0.42041l0.14014-0.14014 0.19482 0.04102q0.50586 0.11279 1.06983 0.09228 0.56738-0.02051 1.07324-0.17432 0.90918-0.28027 1.62353-0.91259 0.75537-0.65625 1.14844-1.56543 0.34863-0.84082 0.3418-1.74317-0.00684-0.90576-0.36914-1.75683-0.28027-0.63232-0.7793-1.16895-0.49561-0.54004-1.1416-0.89209-0.2085-0.10937-0.51612-0.229-0.30762-0.11963-0.56054-0.17432-0.30762-0.07178-0.70752-0.10596-0.3999-0.03418-0.67676-0.00683z m0.79639 1.18945q0.79639 0.09912 1.43896 0.56055 0.646 0.46143 1.01172 1.16211 0.15381 0.33496 0.23584 0.6289 0.05811 0.23926 0.07861 0.39307 0.02051 0.15381 0.02051 0.44775-0.01367 0.25293-0.02051 0.35206-0.00684 0.0957-0.03418 0.24951-0.11279 0.5332-0.36572 0.96728-0.42041 0.75537-1.16894 1.18262-0.74853 0.42725-1.60303 0.42725-0.28027 0-0.48535-0.02735-0.20166-0.03076-0.47852-0.11279-0.32471-0.09912-0.51953-0.01367-0.08545 0.04102-0.39307 0.34179-0.30762 0.30078-0.41357 0.35889-0.10254 0.05469-0.35547 0.06836-0.19482 0.01367-0.30762 0.04102-0.11279 0.02734-0.24609 0.09228-0.1333 0.06152-0.28711 0.21533-0.15381 0.15381-0.2085 0.28028-0.08545 0.16748-0.09912 0.27343-0.01367 0.10596-0.02734 0.44092l0 0.40674-0.40674 0q-0.33496 0.01367-0.44775 0.03418-0.11279 0.02051-0.28028 0.10596-0.12646 0.05469-0.28027 0.20849-0.15381 0.15381-0.2085 0.28028-0.08545 0.16748-0.09912 0.27343-0.01367 0.10596-0.02734 0.44092l0 0.40674-1.75 0 0-0.70068q0.01367-0.52978 0.01367-0.62891 0-0.09912 0.03418-0.16748 0.0376-0.07178 0.38623-0.43408 0.34863-0.36572 1.73633-1.75 1.42871-1.44238 1.75684-1.77735 0.32813-0.33838 0.34179-0.39306 0.04443-0.11279 0.04444-0.18799 0-0.07861-0.03077-0.20508l-0.08203-0.29394q-0.08545-0.3623-0.08545-0.77588 0-0.41357 0.09913-0.79297 0.2085-0.86816 0.85107-1.49707 0.646-0.62891 1.52783-0.82715 0.54688-0.13672 1.13477-0.05469z m-0.08545 1.76367q-0.22217 0.05811-0.38965 0.23243-0.16748 0.17432-0.22559 0.3999-0.08203 0.32129 0.07178 0.6289 0.04102 0.08203 0.16065 0.20166 0.11963 0.11963 0.20166 0.16065 0.19824 0.09912 0.41357 0.09912 0.21533 0 0.41357-0.09912 0.08203-0.04102 0.20166-0.16065 0.11963-0.11963 0.16065-0.20166 0.12646-0.25293 0.09228-0.52636-0.03418-0.27344-0.23242-0.46826-0.26318-0.29395-0.64258-0.29395-0.09912 0-0.22558 0.02734z"
                fill="#16181D"
              ></path>
            </svg>
            <div
              data-pencil-name="PasskeyText"
              style='box-sizing: border-box; color: #16181D; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 500; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Use a passkey instead
            </div>
          </div>
          <div
            data-pencil-name="FormFooter"
            style="align-items: center; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 6px; height: fit-content; justify-content: center; width: 100%"
          >
            <div
              data-pencil-name="FooterText"
              style='box-sizing: border-box; color: #59606E; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              New to SnapVault?
            </div>
            <div
              data-pencil-name="FooterLink"
              style='box-sizing: border-box; color: #2B5BD7; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 13.5px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Create an account
            </div>
          </div>
        </div>
        <div
          data-pencil-name="Legal"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 15px; justify-content: center; left: 560px; position: absolute; top: 836px; width: 880px; z-index: 4"
        ></div>
        <div
          data-pencil-name="LegalText"
          style='box-sizing: border-box; color: #8A909C; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; left: 884px; letter-spacing: 0px; line-height: normal; position: absolute; text-align: center; top: 821px; white-space: nowrap; z-index: 5'
        >
          By continuing, you agree to the Terms and Privacy Policy.
        </div>
      </div>
      <div
        data-pencil-name="MiniDoc"
        style="background-color: #FFFFFF; border-radius: 14px; box-shadow: 0px 18px 40px #05091466; box-sizing: border-box; height: 241px; left: 7537.701px; overflow: hidden; position: absolute; top: 607px; transform-origin: top left; transform: rotate(9deg); width: 196px"
      >
        <div
          data-pencil-name="MiniCover"
          style="align-items: center; background-color: #c2d7ffff; box-sizing: border-box; display: flex; flex-direction: row; gap: 0px; height: 104px; justify-content: center; left: 0px; position: absolute; top: 0px; width: 196px; z-index: 0"
        >
          <div
            data-pencil-name="MiniPage"
            style="align-items: flex-start; background-color: #FFFFFF; border-radius: 3px; border: 1px solid #00000014; box-sizing: border-box; display: flex; flex-direction: column; flex-shrink: 0; gap: 3px; height: 60px; justify-content: flex-start; padding: 9px 7px; width: 44px"
          >
            <div
              data-pencil-name="MiniHead"
              style="background-color: #B7C0CE; border-radius: 1.25px; box-sizing: border-box; flex-shrink: 0; height: 2.5px; width: 20px"
            ></div>
            <div
              data-pencil-name="MiniLine"
              style="background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 30px"
            ></div>
            <div
              data-pencil-name="MiniLine"
              style="background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 30px"
            ></div>
            <div
              data-pencil-name="MiniLine"
              style="background-color: #DCE1E8; border-radius: 1px; box-sizing: border-box; flex-shrink: 0; height: 2px; width: 14px"
            ></div>
          </div>
        </div>
        <div
          data-pencil-name="MiniBody"
          style="align-items: flex-start; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; height: 132px; justify-content: flex-start; left: 0px; padding: 16px; position: absolute; top: 104px; width: 196px; z-index: 1"
        >
          <div
            data-pencil-name="MiniTitle"
            style="box-sizing: border-box; color: #16181D; font-family: Manrope, system-ui, sans-serif; font-size: 14px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: 18px; text-align: left; width: 100%"
          >
            Introduction to Homography
          </div>
          <div
            data-pencil-name="MiniMeta"
            style='box-sizing: border-box; color: #8A909C; font-family: "Fragment Mono", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
          >
            18 pages · PDF
          </div>
          <div
            data-pencil-name="MiniPill"
            style="align-items: center; background-color: #E4F2EA; border-radius: 9999px; box-sizing: border-box; display: flex; flex-direction: row; flex-shrink: 0; gap: 0px; height: fit-content; justify-content: flex-start; padding: 3px 8px; width: fit-content"
          >
            <div
              data-pencil-name="MiniPillText"
              style='box-sizing: border-box; color: #177245; font-family: "Instrument Sans", system-ui, sans-serif; font-size: 10px; font-style: normal; font-weight: 600; letter-spacing: 0px; line-height: normal; text-align: left; white-space: nowrap'
            >
              Ready
            </div>
          </div>
        </div>
      </div>
</template>
