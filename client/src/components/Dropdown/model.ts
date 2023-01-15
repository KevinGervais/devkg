import React, { ReactNode } from "react"
import { FlattenSimpleInterpolation } from "styled-components"

export interface DropdownProps<Value> {
  id?: string
  optionList: readonly Value[] | Value[]
  outputMap: (option: Value, index: number) => ReactNode
  italic?: boolean
  sort?: (a: Value, b: Value) => number
  overrideClassName?: string
  isRightPosition?: boolean
  isFullWidth?: boolean
  className?: string
  selectedValue?: Value
  onChange(value: Value, index: number, evt: React.MouseEvent<HTMLDivElement>): void
}

export interface DropdownState {
  left?: number
  top?: number
  width?: number
  minWidth?: number
  maxHeight?: number
}

export interface DropdownItemStyledProps {
  italic?: boolean
  isActive: boolean
  isStylesOverride: boolean
}
export interface DropdownStyledProps {
  overrideStyles?: FlattenSimpleInterpolation
  extraStyles?: FlattenSimpleInterpolation
}