
import { ReactNode } from "react"

import { DropdownProps } from "../Dropdown/model"

export interface SelectProps<Value> {
  children?: ReactNode
  output?: ReactNode
  auto?: string | number
  plural?: string
  placeholder?: string | number
  className?: string
  dropdownProps: DropdownProps<Value>
  isStyleDisabled?: boolean
  isError?: boolean

}

export interface SelectStyledProps {
  isStyleDisabled: boolean
  isError: boolean
  isSelecting: boolean
}

export interface SelectState {
  isSelecting: boolean
}

export interface DropdownItemStyledProps {
  isActive: boolean
}