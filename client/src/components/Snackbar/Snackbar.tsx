import { AllSeverityColors, tw } from "@/shared"

import { IS_ANY_IOS, IS_CORDOVA } from "@/constants"
import { setReduxState, useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"
import { getNotch } from "@/ui/mixins"

import { Icon } from ".."
import { Class } from "../Class"
import { SafeFixed } from "../SafeFixed"

// tslint:disable-next-line:no-var-requires
const Fade = require("react-reveal/Fade")
let timeoutId = -1
export function Snackbar(): JSX.Element | null {
  const { snackbar, say } = useReduxState((state: ReduxState) => ({
    say: state.languages.say,
    snackbar: state.ui.snackbar
  }))
  if (!snackbar) {
    return null
  }
  const { severity, message } = snackbar
  const iconMap: { [color in AllSeverityColors]: string } = {
    success: "check-circle",
    warning: "exclamation-triangle",
    error: "exclamation-circle",
    info: "info-circle"
  }
  const bgMap: { [color in AllSeverityColors]: string } = {
    success: tw`border-success-500 bg-success-50`,
    warning: tw`border-warning-500 bg-warning-50`,
    error: tw`border-error-500 bg-error-50`,
    info: tw`border-info-500 bg-info-50`,
  }
  const iconColorMap: { [color in AllSeverityColors]: string } = {
    success: tw`text-success-500`,
    warning: tw`text-warning-500`,
    error: tw`text-error-500`,
    info: tw`text-info-500`,
  }
  return (
    <Class
      props={{ snackbar }}
      didMount={() => {
        timeoutId = window.setTimeout(() => setReduxState("ui", { snackbar: undefined }), 3000)
      }}
      willUnmout={() => {
        window.clearTimeout(timeoutId)
      }}
      didUpdate={oldProps => {
        if (oldProps.snackbar && snackbar && oldProps.snackbar._id !== snackbar._id) {
          setReduxState("ui", { snackbar: undefined }, () => {
            setReduxState("ui", { snackbar })
          })
        }
      }}
    >
      <SafeFixed>
        <div
          className={tw`
            snackbar
            fixed
            w-full
            flex
            justify-center
            z-[1000000000]
            ${IS_CORDOVA ? "top-5" : "bottom-5"}
        `}
          style={{
            marginTop: IS_CORDOVA && IS_ANY_IOS && IS_CORDOVA ? getNotch("top") : undefined,
          }}
        >
          <Fade duration={200} top={!!IS_CORDOVA} bottom={!IS_CORDOVA} >
            <div className={tw`${bgMap[severity]} p-4 flex rounded-lg shadow-lg border-solid text-grey-750 border font-light max-w-screen`}>
              <Icon name={iconMap[severity]} className={tw`${iconColorMap[severity]} h-5 mr-3 text-parent`} />
              {say[message] || message}
            </div>
          </Fade>
        </div>
      </SafeFixed>
    </Class >
  )
}