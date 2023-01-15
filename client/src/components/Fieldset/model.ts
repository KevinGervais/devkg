import { ReactNode } from "react"

export interface FieldsetProps {
  children?: ReactNode | ReactNode[]
  className?: string
  isRequired?: boolean
  isOptional?: boolean
  label?: string
}