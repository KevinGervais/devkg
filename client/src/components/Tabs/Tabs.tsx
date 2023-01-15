import { tw } from "@/shared"

import { TabItem } from "./TabItem"
import { TabsProps } from "./model"
export function Tabs<OptionList>({
  value,
  optionList,
  outputMap,
  onChange,
  className,
  isLine,
  notifIndexList,
  isVertical
}: TabsProps<OptionList>): JSX.Element {
  const currentIndex = optionList.indexOf(value)
  return (
    <div
      className={tw`tabs ${className} ${isVertical ? `items-start col relative` : `flex relative`}`}
    >
      {optionList.map((item, index) => (
        <TabItem
          key={index}
          isActive={index === currentIndex && isLine === false}
          isNotif={notifIndexList && notifIndexList.includes(index)}
          listLength={optionList.length}
          value={outputMap(item)}
          isVertical={isVertical}
          onChange={() => onChange(item, index)}
        />
      ))}
      {(isLine === undefined || isLine) && (
        <div
          className={tw`
          absolute
          left-0
          flex
          bg-primary-500
          duration-300
          transition-all
          ease-in-out
          ${isVertical ? "w-0.5" : ""}
          ${!isVertical ? "bottom-[-1px] h-0.5" : ""}
          `}
          style={isVertical ? {
            height: `${100 / optionList.length}%`,
            transform: `translateY(${currentIndex * 100}%)`
          } : {
            width: `${100 / optionList.length}%`,
            transform: `translateX(${currentIndex * 100}%)`
          }}
        />
      )}
    </div>
  )
}