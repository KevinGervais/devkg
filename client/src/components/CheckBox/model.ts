import { ButtonShade } from "../Button/model"

export interface CheckBoxProps {
  className?: string
  isChecked: boolean
  isDisabled?: boolean
  isReadonly?: boolean
  label: string
  shade?: ButtonShade
  onChange?: (isChecked: boolean) => void
}