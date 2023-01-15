export interface TooltipProps {
  className?: string
  optionList?: any
  outputList?: string
  title?: string
  children?: React.ReactNode
  maxWidth?: number
  delay?: number
  mobileDelay?: number
  mobileHideDelay?: number
  capitalize?: boolean
}

export interface TooltipState {
  isActive: boolean
}