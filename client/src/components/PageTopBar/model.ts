import React from "react"

export interface PageTopBarProps {
  label: string
  onBack?: (evt: React.MouseEvent<HTMLButtonElement>) => void
}