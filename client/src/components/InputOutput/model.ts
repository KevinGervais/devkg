import { ReactNode } from "react"

import { ButtonColor } from "../Button/model"

export interface InputOutputProps {
  label?: string
  value?: ReactNode
  valueList?: ReactNode[]
  htmlValue?: string
  iconName?: string
  onSave?: () => void
  isEditing?: boolean
  onEditStart?: () => void
  className?: string
  isDisabled?: boolean
  isNotif?: boolean
  onNotifClick?: () => void
  buttonList?: { iconName: string, color?: ButtonColor, onClick: () => void }[]
  children?: ReactNode | ReactNode[]
}