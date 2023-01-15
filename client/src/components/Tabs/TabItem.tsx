import { tw } from "@/shared"

import { Bubble, NotifCircle } from ".."
import { TabItemProps } from "./model"

export function TabItem({ value, isActive, onChange, listLength, isVertical, isNotif }: TabItemProps): JSX.Element {
  return (
    <button
      className={tw`h-10 px-5 text-center tab center w-max ${isActive ? "bubble-primary-500 text-white" : "bubble-white-primary text-grey-700"}`}
      onClick={() => onChange()}
      style={isVertical ? undefined : { width: `${100 / listLength}%`, }}
    >
      <Bubble color="primary" shade={isActive ? 500 : 0} />
      <div className="relative">
        {value}
        {isNotif && (
          <NotifCircle className="!-top-2 !-right-5" />
        )}</div>

    </button>
  )
}