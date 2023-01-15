import { ButtonShade } from "../Button/model"

export interface CheckboxListProps<Value> {
  valueList: Value[]
  optionList: Value[] | readonly Value[]
  className?: string
  shade?: ButtonShade
  outputMap: (value: Value) => any
  onChange: (valueList: Value[]) => void
  isMultiple?: boolean
  children?: JSX.Element
}