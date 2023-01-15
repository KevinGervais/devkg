import { useRef, useState } from "react"

import { tw } from "@/shared"

import { eventHandler } from "@/classes"

import { Bubble } from "../Bubble"
import { Class } from "../Class"
import { SafeFixed } from "../SafeFixed"
import { getNewStyles } from "./getNewStyles"
import { getScrollParents } from "./getScrollParents"
import { DropdownProps, DropdownState } from "./model"

export function Dropdown<Value>({
  className,
  optionList,
  outputMap,
  onChange,
  isRightPosition,
  isFullWidth,
  selectedValue,
  id,
  sort,
  overrideClassName,
}: DropdownProps<Value>): JSX.Element {
  const [{ left, top, ...state }, setState] = useState<DropdownState>({})
  const childRef = useRef<HTMLDivElement>(null)
  const finalOptionList = sort ? [...optionList].sort(sort) : optionList
  const eventIdListRef = useRef<string[]>([])
  const parentRef = useRef<HTMLDivElement>(null)
  return (
    <SafeFixed parentRef={parentRef}>
      <Class
        props={{ listLength: optionList.length }}
        didMount={() => {
          const setStyles = () => {
            setState(getNewStyles({
              listLength: optionList.length,
              isRightPosition,
              isFullWidth,
              parentRef: parentRef.current,
              childRef: childRef.current!,
              state: { ...state, left, top }
            }))
          }
          const resizeId = eventHandler.create(window.visualViewport || window, "resize", setStyles)
          eventIdListRef.current.push(resizeId)

          getScrollParents([], parentRef.current).forEach((node: Element) => {
            const scrollId = eventHandler.create(node, "scroll", setStyles)
            eventIdListRef.current.push(scrollId)
          })
          setStyles()
          window.setTimeout(setStyles, 30)
        }}
        didUpdate={oldProps => {
          if (oldProps.listLength !== optionList.length) {
            const setStyles = () => {
              setState(getNewStyles({
                listLength: optionList.length,
                isRightPosition,
                isFullWidth,
                parentRef: parentRef.current,
                childRef: childRef.current!,
                state: { ...state, left, top }
              }))
            }
            eventIdListRef.current.forEach(evtId => eventHandler.update(evtId, setStyles))
            setStyles()
          }
        }}
        willUnmout={() => {
          eventIdListRef.current.forEach(evtId => eventHandler.delete(evtId))
        }}
      >
        <div
          id={id}
          ref={childRef}
          onClick={evt => evt.stopPropagation()}
          className={
            `${className || ""}
            dropdown
            no-scrollbar
            col
            absolute
            left-0
            top-0
            mt-2
            z-[1000000000]
            overflow-auto
            ${overrideClassName || `rounded-2xl bg-white shadow-1`}
          `}
          style={{ ...state, transform: left ? `translate(${left}px, ${top}px)` : undefined }}
        >
          {finalOptionList.map((value: any, index: number) => (
            <div
              className={tw`
                clickable
                center
                px-3
                h-11
                shrink-0
                w-full
                text-grey-600
                children:text-grey-600
                in-.fa-icon:!mr-3
                not-last:border-b
                border-solid
                border-grey-200
                bubble-white-primary
                touch:min-h-[50px]
                  ${value === selectedValue && `!bg-secondary-50 !text-secondary-800`}
              `}

              key={index}
              onClick={evt => {
                onChange(value, index, evt)
              }}
            >
              <Bubble color="primary" shade={0} />
              {outputMap(value, index)}
            </div>
          ))}
        </div>
      </Class>
    </SafeFixed>
  )
}