export interface SliderInputProps<Value> {
  optionList: Value[]
  value?: Value
  scaleMap: (value: Value, index: number) => boolean
  outputMap: (value: Value, index: number) => any
  onChange: (value: Value) => void
}