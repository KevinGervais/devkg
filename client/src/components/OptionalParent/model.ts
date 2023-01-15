import { ReactNode } from "react"

export interface OptionalParentProps {
  children: ReactNode | ReactNode[]
  isChildrenOnly: boolean
  parent: (children: ReactNode | ReactNode[]) => JSX.Element
}