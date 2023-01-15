import { useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"

import { Icon, SafeFixed } from ".."

// tslint:disable-next-line:no-var-requires
const Fade = require("react-reveal/Fade")

export function Loading(): JSX.Element | null {
  const { isLoading } = useReduxState((state: ReduxState) => ({
    isLoading: state.ui.loadingCount > 0
  }))
  if (!isLoading) {
    return null
  }
  return (
    <SafeFixed>
      <div className="center z-[10000000000000] fixed bottom-6 left-0 w-full touch-none pointer-events-none ">
        <Fade up={true} duration={500}>
          <Icon
            className="w-12 h-12 bg-white rounded-full shadow-2 center children:h-8 animate-spin text-primary-500"
            name="spinner"
          />
        </Fade>
      </div>
    </SafeFixed>
  )
}
