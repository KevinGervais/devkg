import { useStates } from "@/redux"

import { focusNextElem } from "../functions/focusNextElem"
import { AllTimePickerTypes, DatePickerProps } from "../model"
import { DayPicker } from "./DayPicker"
import { MonthPicker } from "./MonthPicker"
import { PickerLayout } from "./PickerLayout"
import { YearPicker } from "./YearPicker"

export function OpenedDatePicker(props: DatePickerProps & { pickerType: AllTimePickerTypes }): JSX.Element {
  const {
    pickerType,
    onChange,
    startDate,
    endDate,
    disabledDays,
    isBeforeTodayActive,
    date,
    nextAutoFocusId
  } = props
  const orderedLayoutList = pickerType.split("-") as ("year" | "month" | "day")[]
  const [{
    tempDate,
    step
  }, setState] = useStates({
    tempDate: date,
    step: orderedLayoutList[0]!
  })
  if (step === "year") {
    return (
      <PickerLayout>
        <YearPicker
          isBeforeTodayActive={isBeforeTodayActive}
          date={tempDate}
          onChange={newDate => {
            const newIndex = orderedLayoutList.indexOf("year") + 1
            if (orderedLayoutList[newIndex]) {
              setState({ step: orderedLayoutList[newIndex], tempDate: newDate })
            } else if (onChange) {
              if (nextAutoFocusId) {
                focusNextElem(nextAutoFocusId)
              }
              onChange(newDate)
            }
          }}
        />
      </PickerLayout>
    )
  } else if (step === "month") {
    return (
      <PickerLayout>
        <MonthPicker
          isBeforeTodayActive={isBeforeTodayActive}
          date={tempDate}
          onChange={newDate => {
            const newIndex = orderedLayoutList.indexOf("month") + 1
            if (orderedLayoutList[newIndex]) {
              setState({ step: orderedLayoutList[newIndex], tempDate: newDate })
            } else if (onChange) {
              if (nextAutoFocusId) {
                focusNextElem(nextAutoFocusId)
              }
              onChange(newDate)
            }
          }}
        />
      </PickerLayout>
    )
  } else {
    return (
      <PickerLayout>
        <DayPicker
          startDate={startDate}
          endDate={endDate}
          disabledDays={disabledDays}
          isBeforeTodayActive={isBeforeTodayActive}
          date={tempDate}
          onChange={newDate => {
            if (nextAutoFocusId) {
              focusNextElem(nextAutoFocusId)
            }
            if (onChange) {
              onChange(newDate)
            }
          }}
        />
      </PickerLayout>
    )
  }
}


