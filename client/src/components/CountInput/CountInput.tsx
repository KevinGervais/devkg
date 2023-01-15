import { Icon } from ".."
import { Bubble } from "../Bubble"
import { CountInputProps } from "./model"

export function CountInput({ value, onChange, min, max, suffix }: CountInputProps): JSX.Element {
  const allowMin = min === undefined || min < value
  const allowMax = max === undefined || max > value
  return (
    <div className="center count-input">
      <Icon
        className={`center circle-8 children-svg:h-5 text-white ${allowMin ? "bubble-primary-500 " : "bg-primary-100"}`}
        name="minus"
        onClick={allowMin ? () => onChange(value - 1) : undefined}
      >
        {allowMin && <Bubble color="primary" shade={500} />}
      </Icon>
      <div className="mx-4 font-medium">{
        `${value} ${suffix || ""}`
      }</div>
      <Icon
        className={`center circle-8 children-svg:h-5 text-white ${allowMax ? "bubble-primary-500" : "bg-primary-100"}`}
        name="plus"
        onClick={allowMax ? () => onChange(value + 1) : undefined}
      >
        {allowMax && <Bubble color="primary" shade={500} />}
      </Icon>
    </div>
  )
}