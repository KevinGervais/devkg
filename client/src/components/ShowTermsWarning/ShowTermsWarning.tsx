import { IS_CORDOVA } from "@/constants"
import { setReduxState, useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"

import { Button } from ".."

export function ShowTermsWarning(): JSX.Element | null {
  const { say, isShowTermsWarning } = useReduxState((state: ReduxState) => ({
    say: state.languages.say,
    isShowTermsWarning: state.ui.isShowTermsWarning,
  }))
  if (!isShowTermsWarning || IS_CORDOVA) {
    return null
  }
  return (
    <div className="show-terms center fixed z-[100000] bottom-0 left-0 w-full p-5 bg-primary-500">
      <h4
        className="font-normal leading-normal text-white underline children:text-primary-100"
        dangerouslySetInnerHTML={{ __html: say.applyPolicies }}
      />
      <Button
        variant="contained"
        className="ml-5"
        onClick={() => setReduxState("ui", { isShowTermsWarning: false })}
      >{say.ok}</Button>
    </div>
  )
}