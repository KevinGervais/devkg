import dayjs from "dayjs"

import { Bubble, Button } from "@/components"
import { useStates } from "@/redux"

import { MonthPickerProps } from "../model"

export function MonthPicker({ onChange, date, isBeforeTodayActive }: MonthPickerProps): JSX.Element {
  const firstYearDay = dayjs(date || undefined)
  firstYearDay.set("months", 0)
  const [{
    year,
  }, setState] = useStates({
    year: firstYearDay.toISOString(),
  })
  return (
    <div className="py-1 bg-white rounded-lg shadow-2 w-max">
      <div className="flex items-center justify-end m-2">
        <div
          className={`center flex-1 font-normal ${dayjs(year).isSame(dayjs(), "year") ? "text-primary-500" : ""}`}
        >
          {dayjs(year).format("YYYY")}
        </div>
        <Button
          isCircle={true}
          size="sm"
          className="ml-8"
          iconName="chevron-left"
          onClick={() => {
            const newMonth = dayjs(year)
              .subtract(12, "months")
            setState({ year: newMonth.toISOString() })
          }} />
        <Button
          isCircle={true}
          className="ml-8"
          size="sm"
          iconName="chevron-right"
          onClick={() => {
            const newMonth = dayjs(year)
              .add(12, "months")
            setState({ year: newMonth.toISOString() })
          }} />
      </div>
      <div className="m-2 w-[240px] flex flex-wrap">
        {Array(12).fill(0).map((_, index) => {
          const monthDayjs = dayjs(year)
            .set({ day: 0, minutes: 0, seconds: 0, milliseconds: 0 })
            .add(index, "month")
          const isActive = isBeforeTodayActive || dayjs().isSameOrBefore(monthDayjs, "month")
          return (
            <div
              key={monthDayjs.toISOString()}
              className={`center w-20 h-8 ml-0 rounded-none select-none ${isActive ? "bubble-white-primary" : "text-grey-300"}  ${monthDayjs.isSame(dayjs(), "month") ? "text-primary-500" : ""}`}
              onClick={isActive ? () => {
                onChange(monthDayjs.toISOString())
              } : undefined}>
              {isActive && <Bubble color="primary" shade={50} />}
              {monthDayjs.format("MMM")}
            </div>
          )
        })}
      </div>
    </div>
  )
}