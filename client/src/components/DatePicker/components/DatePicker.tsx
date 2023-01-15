import { useRef, useState } from "react"

import { generateId } from "@/shared"

import { eventHandler } from "@/classes"
import { Class } from "@/components"
import { useReduxState } from "@/redux"

import { isDatePickerParent } from "../functions/isDatePickerParent"
import { DatePickerProps } from "../model"
import { DateInput } from "./DateInput"
import { OpenedDatePicker } from "./OpenedDatePicker"

export function DatePicker({ pickerType = "day", ...props }: DatePickerProps): JSX.Element {
  const { children, onChange } = props
  const { isLandscape } = useReduxState(state => ({
    isLandscape: state.ui.isLandscape,
  }))
  const [isSelecting, setSelection] = useState(false)
  const pickerId = useRef(generateId())
  function closeSelect(evt?: MouseEvent): void {
    if (!evt || !isDatePickerParent((evt.target as HTMLElement))) {
      setSelection(false)
      document.removeEventListener("click", closeSelect)
    }
  }

  eventHandler.create(document, "click", (evt?: MouseEvent) => {
    if (!isDatePickerParent((evt?.target as HTMLElement) || null)) {
      setSelection(false)
      eventHandler.delete(pickerId.current)
    }
  }, false, pickerId.current)
  const openSelect = (): void => {
    window.setTimeout(() => {
      document.addEventListener("click", closeSelect)
      setSelection(true)
    }, 10)
  }
  return (
    <Class
      props={{ isLandscape }}
      didUpdate={oldProps => {
        if (isSelecting && oldProps.isLandscape !== isLandscape) {
          setSelection(false)
        }
      }}
    >
      <div className="relative date-picker" onClick={() => !isSelecting && openSelect()}>
        {children || <DateInput pickerType={pickerType} {...props} />}
        {isSelecting && (
          <OpenedDatePicker
            {...props}
            pickerType={pickerType}
            onChange={newDate => {
              closeSelect()
              if (onChange) {
                onChange(newDate)
              }
            }}
          />
        )}
      </div>
    </Class>
  )
}