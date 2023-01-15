import { OS } from "@/constants"

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const



export const getNotch = (postion: "left" | "right" | "top" | "bottom"): string => (
  OS === "android" ? `var(--safe-area-inset-${postion})` : `env(safe-area-inset-${postion})`
)
