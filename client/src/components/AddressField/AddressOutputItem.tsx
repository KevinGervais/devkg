
import { Icon } from "../Icon"
import { AddressOutputItemProps } from "./model"
export function AddressOutputItem({
  iconName,
  label,
  value,
  isError,
}: AddressOutputItemProps): JSX.Element {
  return (
    <div className="flex items-center">
      <Icon className="h-4 mr-4 text-grey-500" name={iconName} />
      <div className="text-box">
        <div className="p-0 text-base font-normal whitespace-pre-wrap text-secondary-800 bg-trans shrink-0">{label}</div>
        <div className={`text-sm ${isError ? "text-error-300" : "text-grey-700"}`}>{value}</div>
      </div>
    </div>
  )
}