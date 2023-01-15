import { Icon, Popup } from "@/components"
import { setReduxState, useReduxState } from "@/redux"

import { LargeMessageProps } from "./model"

export const LargeMessage = ({ title, description, iconName, children, maxWidth }: LargeMessageProps): JSX.Element => {
  const say = useReduxState(state => state.languages.say)
  return (
    <Popup
      isLarge={true}
      maxWidth={maxWidth}
      primaryButton={{ label: say.ok, onClick: () => setReduxState("popups", { name: undefined }) }}
    >

      <div className="w-full h-full text-center center col">
        {title && <h2 className="mb-5 font-light ">{title}</h2>}
        {description && <h4 className="font-normal">{description}</h4>}
        {iconName && <Icon className="mt-5 h-[150px] text-primary-300" name={iconName} />}
        {children}
      </div>
    </Popup >
  )
}
