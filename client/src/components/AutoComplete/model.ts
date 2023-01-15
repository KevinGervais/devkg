import { Remove } from "@/shared"

import { DropdownProps } from "../Dropdown/model"
import { InputProps } from "../Input/model"

export interface AutoCompleteProps<Value> {
  mobileFocusLabel: string
  inputProps: InputProps
  dropdownProps: Remove<DropdownProps<Value>, "selectedValue" | "onChange"> & {
    selectedValue: any | undefined
    onChange: (
      value: Value,
    ) => void
  }
  filter?: (value: Value) => boolean
}

