import React, { useRef, useState } from "react"

import { generateId } from "@/shared"

import { eventHandler } from "@/classes"
import { IS_ANY_IOS, IS_CORDOVA, IS_DESKTOP } from "@/constants"
import { getNotch } from "@/ui/mixins"

import { Class, Dropdown, Input, SafeFixed } from ".."
import { OptionalParent } from "../OptionalParent"
import { AutoCompleteProps } from "./model"

export function AutoComplete<Value>({ inputProps, dropdownProps, filter, mobileFocusLabel }: AutoCompleteProps<Value>): JSX.Element {
  const [isFocused, setFocus] = useState(false)
  const optionList = filter ? dropdownProps.optionList.filter(filter) : dropdownProps.optionList
  const idRef = useRef(generateId())
  const tabIndexRef = useRef(0)
  const parentRef = useRef<HTMLDivElement>(null)
  const hasOutsidedClickRef = useRef(false)
  const isFocusedUpRef = useRef(false)
  const outsideClick = () => {
    if (!IS_DESKTOP && hasOutsidedClickRef.current) {
      return
    }
    hasOutsidedClickRef.current = true
    setFocus(false)
    eventHandler.delete(idRef.current)
    if (typeof inputProps.value === "string"
      && inputProps.value.trim() === ""
      && dropdownProps.selectedValue !== undefined
      && dropdownProps.onChange
    ) {
      dropdownProps.onChange(dropdownProps.selectedValue)
    }
  }
  return (
    <OptionalParent
      isChildrenOnly={IS_DESKTOP || !isFocused}
      parent={children => {
        return (
          <SafeFixed>
            <Class
              didMount={() => {
                window.setTimeout(() => {
                  const elem = document.getElementById(idRef.current)?.querySelector("input") as HTMLInputElement
                  elem.focus()
                }, 30)
                hasOutsidedClickRef.current = false
              }}
            >
              <div
                onClick={() => outsideClick()} ref={parentRef}
                className="full-fixed px-5 pt-5 backdrop-blur-md z-[100000000]"
                style={{
                  marginTop: IS_CORDOVA && IS_ANY_IOS ? getNotch("top") : undefined,
                  height: IS_CORDOVA && IS_ANY_IOS ? `calc(100% - ${getNotch("top")})` : undefined
                }} >
                {children}
              </div>
            </Class>
          </SafeFixed>
        )
      }}
    >
      <Input
        {...inputProps}
        id={idRef.current}
        label={!IS_DESKTOP && isFocused ? mobileFocusLabel : undefined}
        getTabIndex={tabIndex => tabIndex ? tabIndexRef.current = tabIndex : undefined}
        tabIndex={isFocused ? tabIndexRef.current : undefined}
        autoComplete="new-password"
        onClick={evt => {
          evt.stopPropagation()
          if (inputProps.onClick) {
            inputProps.onClick(evt)
          }
          if (!isFocusedUpRef.current && IS_DESKTOP) {
            isFocusedUpRef.current = true
            window.setTimeout(() => {
              eventHandler.create(window, "click", outsideClick, true, idRef.current)
            })
          }
        }}
        onFocus={evt => {
          setFocus(true)
          isFocusedUpRef.current = false
          if (inputProps.onChange) {
            const fakeEvent: React.ChangeEvent<HTMLInputElement> = { target: { value: "" } } as any
            inputProps.onChange(fakeEvent)
          }
          if (inputProps.onFocus) {
            inputProps.onFocus(evt)
          }
        }}
        onBlur={() => !IS_DESKTOP && window.setTimeout(() => outsideClick(), 300)}
      >
        {isFocused && (
          <Dropdown
            {...dropdownProps}
            isFullWidth={true}
            optionList={optionList}
            onChange={evt => {
              hasOutsidedClickRef.current = true
              setFocus(false)
              eventHandler.delete(idRef.current)
              dropdownProps.onChange(evt)
            }}

          />
        )}
      </Input>
    </OptionalParent>
  )
}