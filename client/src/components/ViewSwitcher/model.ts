import { ConnectedProps } from "react-redux"
import { SpringConfig } from "react-swipeable-views"

import { ViewSwitcherConnector } from "./ViewSwitcher"
export interface ViewSwitcherState {
  isSwiping: boolean
  pressingPosition: [number, number] | undefined
}

export type ViewSwitcherReduxProps = ConnectedProps<typeof ViewSwitcherConnector>

export interface ViewSwitcherProps extends ViewSwitcherReduxProps {
  index: number,
  onChangeIndex: (index: number) => void,
  children: React.ReactNode[]
  isHideIndexes?: boolean
  isDisabled?: boolean
  isPointerEventDisabled?: boolean
  springConfig?: SpringConfig
}

export interface PageIndexesStyledProps {
  index: number
}