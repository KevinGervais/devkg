export interface CountInputProps {
  value: number
  suffix?: string
  onChange: (newVal: number) => void
  min?: number
  max?: number
}