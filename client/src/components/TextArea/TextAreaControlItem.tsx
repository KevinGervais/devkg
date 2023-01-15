import { tw } from "@/shared"

import { Bubble } from "../Bubble"
import { TextAreaControlItemProps } from "./model"

export function TextAreaControlItem({
  children,
  isActive,
  onClick
}: TextAreaControlItemProps): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={tw`
        center
        clickable
        min-w-[32px]
        h-8
        not-first-children:h-4
        text-base
        ${isActive ? "bubble-primary-100" : "bubble-white-primary"}
      `}
    >
      <Bubble color="primary" shade={isActive ? 100 : 0} />
      {children}
    </div>
  )
}