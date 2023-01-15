import { Button } from "../Button"
import { Icon } from "../Icon"
import { CheckBoxProps } from "./model"

export function CheckBox(props: CheckBoxProps): JSX.Element {
  const { isChecked, label, onChange, className, isDisabled, isReadonly, shade } = props
  const isAnimation = !isDisabled && !isReadonly
  return (
    <Button
      className={`checkbox ${className} w-max max-w-full !h-max py-1.5`}
      color="primary"
      size="sm"
      shade={shade || 50}
      isDisabled={isDisabled}
      isReadonly={isReadonly}
      onClick={() => onChange && onChange(!isChecked)}
    >
      <div className={` shrink-0 center w-5 h-5 mr-3 rounded-sm border border-solid ${isAnimation ? "border-primary-500" : isDisabled ? "border-grey-400" : "border-primary-800"}`}>
        {isChecked && <Icon name="check" className={`h-4 ${isAnimation ? "shade-text-primary-800" : isDisabled ? "text-grey-400" : "text-primary-800"}`} />}
      </div>
      {label}
    </Button>
  )
}