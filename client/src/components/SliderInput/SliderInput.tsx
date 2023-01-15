import { useRef } from "react"

import { tw } from "@/shared"


import { Bubble } from "../Bubble"
import { SliderInputProps } from "./model"
import { onDrag } from "./onDrag"
export function SliderInput<Value>({
  optionList,
  value,
  outputMap,
  scaleMap,
  onChange,
}: SliderInputProps<Value>): JSX.Element {
  const dragRef = useRef<HTMLDivElement>(null)
  const valIndex = optionList.indexOf(value!)
  return (
    <div className="relative flex items-center w-full select-none">
      <div className="absolute w-full h-[3px] rounded-full bg-primary-500" />
      <div className="absolute flex items-center w-[calc(100%-16px)] mx-2" ref={dragRef} >
        {valIndex >= 0 && (
          <div
            style={{ left: `calc(${(valIndex / optionList.length) * 100}% - 10px)` }}
            className={tw`absolute z-10 w-5 h-5 p-1 center clickable`}
            onMouseDown={evt => {
              onDrag({
                evt,
                index: valIndex,
                dragRef,
                optionList,
                onChange
              })
            }}
            onTouchStart={evt => {
              onDrag({
                evt,
                index: valIndex,
                dragRef,
                optionList,
                onChange
              })
            }}
          >
            <div
              className={tw`w-4 h-4 rounded-full shrink-0 bubble-tertiary-500`}
            >
              <Bubble color="tertiary" shade={500} />
            </div>
          </div>
        )}
        {optionList.map((val, index) => scaleMap(val, index) && (
          <div
            key={index}
            style={{ left: `${(index / optionList.length) * 100}%` }}
            className={tw`absolute w-[2px]  h-5 rounded-full bg-primary-500`}
          />
        ))}
      </div>
      <div className="absolute bottom-[-12px] w-[calc(100%-16px)] mx-2">
        {optionList.map((val, index) => outputMap(val, index) && (
          <div
            key={index}
            style={{ left: `${(index / optionList.length) * 100}%` }}
            className={tw`absolute -translate-x-1/2 w-max`}
          >{outputMap(val, index)}</div>
        ))}
      </div>
    </div>
  )
}