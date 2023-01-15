import { ReactNode } from "react"

export interface OutputProps {
  value?: ReactNode | ReactNode[]
  label?: string
  isTextArea?: boolean,
  isError?: boolean
  className?: string
}