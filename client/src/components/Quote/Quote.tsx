import { tw } from "@/shared"

import { Icon } from ".."
import { QuoteProps } from "./model"
export function Quote({ children, severity: color }: QuoteProps): JSX.Element {
  const iconMap: { [color in typeof color]: string } = {
    success: "check-circle",
    warning: "exclamation-triangle",
    error: "do-not-enter",
    info: "info-circle"
  }
  return (
    <div className={tw`
    quote
    row-middle
    w-full
    p-2
    border
    border-solid
    text-sm
    my-5
    rounded-lg
    ${color === "success" ? tw`bg-success-50 border-success-300 text-success-700` : ""}
    ${color === "warning" ? tw`bg-warning-50 border-warning-300 text-warning-700` : ""}
    ${color === "error" ? tw`bg-error-50 border-error-300 text-error-700` : ""}
    ${color === "info" ? tw`bg-info-50 border-info-300 text-info-700` : ""}
    `}
    >
      <Icon className={tw`
      h-4
      mr-3
      ${color === "success" && "text-success-700"}
      ${color === "warning" && "text-warning-700"}
      ${color === "error" && "text-error-700"}
      ${color === "info" && "text-info-700"}
      `} name={iconMap[color]} />
      {children}
    </div>
  )
}