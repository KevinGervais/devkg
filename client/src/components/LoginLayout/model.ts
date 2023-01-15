import { ReactNode } from "react"

export interface LoginLayoutProps {
  title: string
  subTitle?: string
  children: ReactNode | ReactNode[]
  primaryButton?: LoginLayoutButtonProps
  secondarybutton?: LoginLayoutButtonProps
  tertiairyButton?: LoginLayoutButtonProps
}

export interface LoginLayoutButtonProps {
  label: string
  onClick: () => void
}