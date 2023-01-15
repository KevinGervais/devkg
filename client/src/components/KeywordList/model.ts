export interface KeywordListProps<Value> {
  outputMap: (value: Value) => string
  imageMap?: (value: Value) => string
  optionList: Value[] | readonly Value[]
  className?: string
  onChange: (newOptionList: Value[]) => void
}

export interface KeywordItemProps {
  option: any
  output: string
  image?: string
  optionList: any[] | readonly any[]
  index: number
  onChange: (newOptionList: any[]) => void
}