import dayjs from "dayjs"
import { useState } from "react"
import "react-day-picker/lib/style.css"

import { tw } from "@/shared"

import { Class, Icon } from "@/components"
import { useReduxState } from "@/redux"

import { formatDay } from "../functions/formatDay"
import { getCaretPosition } from "../functions/getCaretPosition"
import { DatePickerProps } from "../model"

export function DateInput(props: DatePickerProps): JSX.Element {
  const {
    iconName,
    isError,
    className,
    date,
    onChange,
    id,
    isBeforeTodayActive,
    disabledDays,
    placeholder
  } = props
  const { say } = useReduxState(state => ({
    say: state.languages.say,
  }))
  const valueDate = dayjs(date).format("YYYY-MM-DD")

  const [inputField, setState] = useState(date ? formatDay(valueDate) : "")
  const inputDate = dayjs(inputField, "YYYY-MM-D").format("YYYY-MM-DD")
  return (
    <Class
      props={{ valueDate }}
      didUpdate={oldProps => {
        if (date && valueDate !== oldProps.valueDate && inputDate !== valueDate) {
          setState(valueDate)
        }
      }}
    >

      <div
        id={id}
        className={tw`
       input
       day-picker-input
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
       border-grey-200
       cursor-text
       w-full
       px-3
       hover:border-secondary-500
       focus-within:!border-primary-500
       sm:focus-within:flex-2
       ${isError ? "border-error-200" : ""}
       ${className}
   `}
      >
        {iconName && (
          <Icon
            className={`h-4 cursor-text text-grey-500`}
            name={iconName}
          />
        )}
        <input
          value={inputField}
          placeholder={placeholder || say.ymd}
          className={`h-full flex items-center bg-trans pl-5 text-sm w-full placeholder:text-grey-400 text-grey-600 `}
          onChange={evt => setState(
            getCaretPosition(evt.target).start === evt.target.value.length ? formatDay(evt.target.value)
              : evt.target.value.split(/[^0-9-]/).join("")
          )}
          onBlur={() => {
            const newDate = dayjs(inputField)
            if (inputDate === valueDate) {
              return
            }
            if (onChange) {
              if (
                inputField.length
                && newDate.isValid()
                && (isBeforeTodayActive || newDate.isSameOrAfter(dayjs(), "day"))
                && !disabledDays?.find(item => {
                  if (item instanceof Date) {
                    return dayjs(item).isSame("day")
                  } else if (typeof item === "function") {
                    return item(new Date(newDate.toISOString()))
                  } else {
                    return false
                  }
                })
              ) {
                onChange(newDate.toISOString())
              } else {
                onChange("")
                setState("")
              }
            }
          }}
        />
      </div>
    </Class>
  )
}