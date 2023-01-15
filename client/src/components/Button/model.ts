import React, { ReactNode } from "react"

import { IconType } from "../Icon/model"

export type ButtonShade = 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type ButtonColor = "grey" | "primary" | "secondary" | "tertiary" | "error" | "success" | "warning" | "info"

export interface ButtonProps {
  className?: string
  color?: ButtonColor
  shade?: ButtonShade
  variant?: "contained" | "outlined" | "text"
  size?: "xm" | "sm" | "md" | "lg" | "xl"
  children?: ReactNode | ReactNode[]
  iconName?: string
  iconType?: IconType
  iconPosition?: "left" | "right"
  isCircle?: boolean
  isDisabled?: boolean
  isReadonly?: boolean
  isTransparent?: boolean
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void
}
