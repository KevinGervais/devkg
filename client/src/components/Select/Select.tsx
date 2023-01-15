import { useRef, useState } from "react"

import { tw } from "@/shared"

import { IS_ANY_IOS, IS_CORDOVA, IS_DESKTOP } from "@/constants"
import { useReduxState } from "@/redux"
import { getNotch } from "@/ui/mixins"

import { Bubble } from "../Bubble"
import { Class } from "../Class"
import { Dropdown } from "../Dropdown"
import { Icon } from "../Icon"
import { OptionalParent } from "../OptionalParent"
import { SafeFixed } from "../SafeFixed"
import { SelectProps } from "./model"
import { renderSelectValue } from "./renderSelectValue"
export function Select<Value>({
  className,
  output,
  auto,
  plural,
  placeholder,
  children,
  dropdownProps,
  isStyleDisabled,
  isError,
}: SelectProps<Value>): JSX.Element {
  const { isLandscape } = useReduxState(state => ({
    isLandscape: state.ui.isLandscape
  }))

  const [isSelecting, setState] = useState(false)

  const closeSelectRef = useRef(
    function closeSelect(): void {
      setState(false)
      document.removeEventListener("click", closeSelect)
    }
  )

  const openSelectRef = useRef(
    function openSelect(): void {
      window.setTimeout(() => {
        document.addEventListener("click", closeSelectRef.current)
        setState(true)
      }, 10)
    }
  )
  if (isStyleDisabled && isSelecting && !IS_DESKTOP) {
    isStyleDisabled = false
  }

  return (
    <OptionalParent
      isChildrenOnly={IS_DESKTOP || !isSelecting}
      parent={select => {
        return (
          <SafeFixed>
            <div
              onClick={() => setState(false)}
              className="full-fixed px-5 pt-5 backdrop-blur-md z-[100000000] in-.select:z-[10000000000000000]"
              style={{
                marginTop: IS_CORDOVA && IS_ANY_IOS ? getNotch("top") : undefined,
                height: IS_CORDOVA && IS_ANY_IOS ? `calc(100% - ${getNotch("top")})` : undefined
              }}>
              {select}
            </div>
          </SafeFixed>
        )
      }}
    >

      <Class
        props={{ isLandscape }}
        didUpdate={oldProps => {
          if (isSelecting && oldProps.isLandscape !== isLandscape) {
            setState(false)
          }
        }}
      >
        <div
          className={tw`
            select
            ${className || ""}
            center
            clickable
            ${!isStyleDisabled && `
              text-grey-600
              h-12
              rounded-full
              bubble-white-primary
              transition-all
              duration-100
              ease-in-out
              border
              border-solid
              border-grey-200
              px-5
              hover:border-secondary-500
              ${isError && "border-error-500"}
              ${isSelecting && "border-primary-500"}
            `}
          `}
          onClick={() => !isSelecting && openSelectRef.current()}
        >
          <Bubble color="primary" shade={0} />
          {renderSelectValue(
            output,
            auto,
            plural,
            placeholder,
            children
          )}

          {isSelecting && (
            <Dropdown
              {...dropdownProps}
              onChange={(data, index, evt) => {
                if (dropdownProps.onChange) {
                  dropdownProps.onChange(data, index, evt)
                  closeSelectRef.current()
                }
              }} />
          )}
          {!isStyleDisabled && (
            <Icon className="h-4 ml-1 shrink-0"
              name="chevron-down"
            />
          )}
        </div>
      </Class>
    </OptionalParent>
  )
}
