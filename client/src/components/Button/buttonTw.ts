
import { tw } from "@/shared"

import { ButtonProps } from "./model"

export const buttonTw = ({
  className,
  colorClass,
  size,
  isCircle,
  variant,
  isAnimation,
  color,
  shade,
  isTransparent
}: ButtonProps & { isAnimation: boolean, colorClass: string }) => tw`
transition-all
ease-in-out
duration-300
center
rounded-full
text-sm
shrink-0

${colorClass}
${size === "xm" ? "h-5" : size === "sm" ? "h-8" : size === "md" ? "h-10" : size === "lg" ? "h-12" : "h-14"}
${isCircle ? size === "xm" ? "w-5" : size === "sm" ? "w-8" : size === "md" ? "w-10" : size === "lg" ? "w-12" : "w-14" : ""}
${isCircle ? "" : size === "xm" ? "px-3" : size === "sm" ? "px-4" : size === "md" ? "px-5" : size === "lg" ? "px-6" : "px-7"}
${variant === "contained" ? `${isAnimation ? "bubble" : "bg"}-${color}-${shade}` : ""}
${variant === "outlined" ? `${isAnimation ? "bubble" : "bg"}-${isTransparent ? "trans" : "white"}-${color}  border border-solid border-${color}-${shade} ` : ""}
${variant === "text" ? `${isAnimation ? "bubble" : "bg"}-${isTransparent ? "trans" : "white"}-${color}` : ""}
${isAnimation ? "touch:active:shadow-2xl mouse:hover:shadow-2xl" : "cursor-default"}
${className}
`