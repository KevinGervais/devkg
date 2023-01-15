import { tw } from "@/shared"

import { CheckBox } from "../CheckBox"
import { CheckboxListProps } from "./model"
export function CheckboxList<ValueList>({
  valueList,
  optionList,
  outputMap,
  onChange,
  isMultiple,
  className,
  children,
  shade
}: CheckboxListProps<ValueList>): JSX.Element {
  return (
    <div className={tw`${className} flex flex-wrap mt-2 checkbox-list children:mb-2 children:mr-2`}>
      {optionList.map((key, index) => (
        <CheckBox
          key={index}
          shade={shade}
          isChecked={valueList.includes(key)}
          label={outputMap(key)}
          onChange={() => {
            if (isMultiple === true) {
              let newList = [...valueList]
              if (valueList.includes(key)) {
                newList = newList.filter(item => item !== key)
                onChange(newList)
              } else {
                newList.push(key)
                onChange(newList)
              }
            } else {
              if (valueList.includes(key)) {
                onChange([])
              } else {
                onChange([key])

              }
            }
          }}
        />
      ))}
      {children}
    </div>
  )
}