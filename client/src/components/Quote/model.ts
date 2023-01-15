import { ReactNode } from "react"

import { AllSeverityColors } from "@/shared"

export interface QuoteProps {
  children: ReactNode
  severity: AllSeverityColors
}

export interface QuoteStyledProps {
  severity: AllSeverityColors
}