import { ReactNode, ReactNodeArray } from "react"

export interface PopupProps {
  children?: ReactNode | ReactNodeArray
  title?: string
  description?: string
  isLogo?: boolean
  isLarge?: boolean
  isCloseIcon?: boolean
  closeButtonType?: "ok" | "cancel"
  maxWidth?: string
  isFlexibleWidth?: boolean
  primaryButton?: PopupButtonProps
  secondaryButton?: PopupButtonProps
  tertiaryButton?: PopupButtonProps
}

export interface PopupButtonProps {
  onClick: () => void
  label: string
  iconName?: string
  customStyle?: "primary" | "secondary" | "tertiary"
}