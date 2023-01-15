import { ConnectedProps } from "react-redux"
import { SpringConfig, SwipeableViewsProps } from "react-swipeable-views"

import { SliderConnector } from "./Slider"
export interface SliderStyledProps extends SwipeableViewsProps {
  isSwiping: string
}

export interface SliderState {
  isSwiping: boolean
  pressingPosition: [number, number] | undefined
}

export type SliderReduxProps = ConnectedProps<typeof SliderConnector>

export interface SliderProps {
  index: number,
  onChangeIndex: (index: number) => void,
  children: JSX.Element[]
  delay?: number
  springConfig?: SpringConfig
}

export interface PageIndexesStyledProps {
  index: number
}