import { ReactNode } from "react"
import { Modifier } from "react-day-picker"

export interface DatePickerProps {
  placeholder?: string
  className?: string
  id?: string
  iconName?: string
  isError?: boolean
  startDate?: string
  endDate?: string
  date?: string
  disabledDays?: Modifier[]
  isBeforeTodayActive?: boolean
  pickerType?: AllTimePickerTypes
  children?: ReactNode | ReactNode[]
  nextAutoFocusId?: string
  onChange?: (newDate?: string) => void
}
export interface DayPickerProps {
  startDate?: string
  endDate?: string
  date?: string
  disabledDays?: Modifier[]
  isBeforeTodayActive?: boolean
  onChange?: (newDate?: string) => void
}

export type AllTimePickerTypes = "day" | "month" | "year" | "month-day" | "year-month-day"
export interface PickerLayoutParentState {
  left?: number
  top?: number
  right?: number
  bottom?: number
  width?: number
  minWidth?: number
  maxHeight?: number
}

export interface PickerLayoutParentProps {
  children: ReactNode
  parentRef: React.RefObject<HTMLDivElement>
}

export interface MonthPickerProps {
  onChange: (date: string) => void
  isBeforeTodayActive?: boolean
  date?: string
}

export interface YearPickerProps {
  onChange: (date: string) => void
  isBeforeTodayActive?: boolean
  date?: string
}

export interface PickerLayoutProps {
  children: ReactNode
}