import { ReactNode } from "react"

export interface SafeActionProps {
  title: string
  description?: string
  isFiveClickDisabled?: boolean
  Component?: () => JSX.Element
  buttonName?: "create" | "edit" | "delete" | "yes"
  action: () => void
}