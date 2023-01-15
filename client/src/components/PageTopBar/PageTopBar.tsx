import { IS_CORDOVA } from "@/constants"

import { Button } from "../Button"
import { PageTopBarProps } from "./model"

export function PageTopBar({ label, onBack }: PageTopBarProps): JSX.Element {
  return (
    <header className={`relative center shrink-0 h-[60px] w-full px-5  ${IS_CORDOVA ? "border" : ""} border-solid border-grey-200`}>
      {onBack && (
        <Button
          isCircle={true}
          size="sm"
          iconName="chevron-left"
          variant="text"
          className="!absolute mr-4 left-5"
          onClick={evt => onBack(evt)}
        />
      )}
      <h4 className="font-bold text-secondary-800">{label}</h4>
    </header>
  )
}