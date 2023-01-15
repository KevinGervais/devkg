import { useRef } from "react"
import { useState } from "react"
import "react-day-picker/lib/style.css"

import { tw } from "@/shared"

import { tabIndexHandler } from "@/classes/TabIndexHandler"
import { Icon } from "@/components"
import { IS_DESKTOP } from "@/constants"
import { getReduxState, setReduxState } from "@/redux"

import { InputProps } from "./model"

export function Input({
  iconName,
  onIconClick,
  children,
  onEnterKey,
  isError,
  id,
  isRightIcon,
  className,
  label,
  getTabIndex,
  ...inputProps
}: InputProps): JSX.Element {
  const ref = useRef<HTMLInputElement | null>(null)
  const [type, setType] = useState(inputProps.type === "password" ? "password" : undefined)
  const tomorrow = new Date()
  tomorrow.setDate(new Date().getDate() + 1)
  const timeoutId: number = -1
  return (
    <div
      id={id}
      className={tw`
          input
          relative
          flex
          items-center
          h-12
          max-h-full
          rounded-full
          bg-white
          transition
          duration-100
          ease-in-out
          border
          border-solid
          border-grey-300
          cursor-text
          w-full
          hover:border-primary-200
          sm:focus-within:flex-2
          ${isRightIcon ? "flex-row-reverse" : ""}
          ${isError ? "!border-error-200" : "focus-within:!border-primary-500"}
          ${className}
      `}
      onClick={() => {
        ref.current?.focus()
      }}>
      {iconName && (
        <Icon
          className={`h-4 cursor-text text-grey-500 ${isRightIcon ? "mr-4" : "ml-4"}`}
          name={iconName}
          onClick={evt => {
            if (onIconClick) {
              evt.stopPropagation()
              onIconClick()
            }
          }}
        />
      )}
      {type !== undefined && (
        <Icon
          className="absolute h-4 ml-4 cursor-text text-grey-500 clickable right-5"
          name={type === "password" ? "eye-slash" : "eye"}
          onClick={() => setType(type === "password" ? "text" : "password")}
        />
      )}
      <input
        onMouseEnter={() => IS_DESKTOP && !getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: true })}
        onMouseLeave={() => IS_DESKTOP && getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: false })}
        ref={newRef => {
          ref.current = newRef
          if (newRef && !inputProps.tabIndex) {
            const tabIndex = tabIndexHandler.update(newRef)
            if (getTabIndex) {
              getTabIndex(tabIndex)
            }
          }
        }}
        onKeyUp={evt => evt.key === "Enter" && onEnterKey && onEnterKey()}
        {...inputProps}
        className={`h-full bg-trans pl-5 text-sm w-full text-grey-600 placeholder:text-grey-400`}
        onFocus={evt => {
          window.clearTimeout(timeoutId)
          if (inputProps.onFocus) {
            inputProps.onFocus(evt)
          }
        }}
        onBlur={evt => {
          if (inputProps.onBlur) {
            inputProps.onBlur(evt)
          }
        }}
        onChange={evt => {
          if (inputProps.onChange) {
            inputProps.onChange(evt)
          }
        }}
        type={type !== undefined ? type : inputProps.type}
      />
      {label && <label className="absolute h-5 px-3 bg-white top-[-10px] left-[16px] text-grey-800">{label}</label>}
      {children}
    </div>
  )
}
