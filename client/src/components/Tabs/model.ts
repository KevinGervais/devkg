export interface TabsProps<Option> {
  value: Option
  isVertical?: boolean
  optionList: Option[]
  isLine?: boolean
  className?: string
  outputMap: (value: Option) => any
  notifIndexList?: number[]
  onChange: (value: Option, index: number) => void
}

export interface TabItemProps {
  value: any
  isVertical?: boolean
  isActive?: boolean
  listLength: number
  isNotif?: boolean
  onChange: () => void
}