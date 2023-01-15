import dayjs from "dayjs"
import ReactDayPicker, { Modifier } from "react-day-picker"

import { DayPickerProps } from "../model"
import { DayPickerStyled } from "./DayPickerStyled"


export function DayPicker({
  startDate,
  endDate,
  disabledDays,
  isBeforeTodayActive,
  date,
  onChange,
}: DayPickerProps): JSX.Element {
  const finalDisabledDays: Modifier[] = []
  if (!isBeforeTodayActive) {
    finalDisabledDays.push({ before: new Date() })
  }
  if (disabledDays) {
    finalDisabledDays.push(...disabledDays)
  }
  return (
    <DayPickerStyled>
      <ReactDayPicker
        fromMonth={isBeforeTodayActive ? undefined : new Date()}
        showOutsideDays={true}
        modifiers={{
          start: startDate ? new Date(startDate) : undefined,
          end: endDate ? new Date(endDate) : undefined,
          before: isBeforeTodayActive ? undefined : { before: new Date() },
          reserved: disabledDays
        }}
        month={date ? new Date(date) : undefined}
        disabledDays={finalDisabledDays}
        selectedDays={[startDate ? new Date(startDate) : date ? new Date(date) : undefined, {
          from: startDate ? new Date(startDate) : undefined,
          to: endDate ? new Date(endDate) : undefined,
        }]}
        onDayClick={(day, modifiers) => {
          if (modifiers.disabled) {
            return
          }
          if (!isBeforeTodayActive) {
            const newDate: string | undefined = day && day.toISOString()
            if (newDate && dayjs(newDate).isBefore(dayjs(), "days")) {
              return
            }
          }
          if (onChange) {
            const dayjsDate = dayjs(day.toISOString())
              .set({ minutes: 0, seconds: 0, milliseconds: 0 })
            onChange(dayjsDate ? dayjsDate.toISOString() : undefined)
          }
        }}
      />
    </DayPickerStyled>
  )
}