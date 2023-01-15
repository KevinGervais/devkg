import dayjs from "dayjs"

import { Bubble, Button } from "@/components"
import { useStates } from "@/redux"

import { YearPickerProps } from "../model"

export function YearPicker({ onChange, date, isBeforeTodayActive }: YearPickerProps): JSX.Element {
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
        <Button
          isCircle={true}
          size="sm"
          className="ml-8"
          iconName="chevron-left"
          onClick={() => {
            const newMonth = dayjs(year)
              .subtract(12, "years")
            setState({ year: newMonth.toISOString() })
          }} />
        <Button
          isCircle={true}
          className="ml-8"
          size="sm"
          iconName="chevron-right"
          onClick={() => {
            const newMonth = dayjs(year)
              .add(12, "years")
            setState({ year: newMonth.toISOString() })
          }} />
      </div>
      <div className="m-2 w-[240px] flex flex-wrap">
        {Array(12).fill(0).map((_, index) => {
          const YearDayjs = dayjs(year)
            .add({ month: 0, day: 0, minutes: 0, seconds: 0, milliseconds: 0 })
            .add(index, "year")
          const isActive = isBeforeTodayActive || dayjs().isSameOrBefore(YearDayjs, "year")
          return (
            <div
              key={YearDayjs.toISOString()}
              className={`center w-20 h-8 ml-0 rounded-none select-none ${isActive ? "bubble-white-primary" : "text-grey-300"}  ${YearDayjs.isSame(dayjs(), "year") ? "text-primary-500" : ""}`}
              onClick={isActive ? () => {
                onChange(YearDayjs.toISOString())
              } : undefined}>
              {isActive && <Bubble color="primary" shade={50} />}
              {YearDayjs.format("YYYY")}
            </div>
          )
        })}
      </div>
    </div>
  )
}