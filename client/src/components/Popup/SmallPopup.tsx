import { tw } from "@/shared"

import { IS_ANY_IOS, IS_CORDOVA } from "@/constants"
import { setReduxState } from "@/redux"
import { getNotch } from "@/ui/mixins"

import { Button } from "../Button"
import { Icon } from "../Icon"
import { PopupProps } from "./model"

const buttonClassName = (type: "primary" | "secondary" | "tertiary") => tw`
clickable
center
h-10
w-full
border-t
border-solid
border-grey-500
mouse:hover:bg-grey-100/40
mouse:active:bg-grey-100/70
touch:active:bg-grey-100/50
${type === "primary" ? "text-primary-500" : ""}
${type === "secondary" ? "text-grey-600" : ""}
${type === "tertiary" ? "text-grey-600" : ""}
`
const iconClassName = tw`h-5 mr-3 text-primary-300`

export function SmallPopup({
  children,
  title,
  description,
  isCloseIcon,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  isFlexibleWidth
}: PopupProps): JSX.Element {
  return (
    <div
      className="center full-fixed z-[9000] backdrop-blur-lg bg-black/70"
      style={{
        marginTop: IS_CORDOVA && IS_ANY_IOS ? getNotch("top") : undefined,
        height: IS_CORDOVA && IS_ANY_IOS ? `calc(100% - ${getNotch("top")})` : undefined
      }}
    >
      <div className={tw`
      relative
      overflow-hidden
      col
      items-center
      pt-5
      text-center
      rounded-2xl
      bg-white/70
       shadow
       in-.textarea:bg-trans
       in-.textarea-content:px-5
       in-.textarea-content:pb-5
       in-.input:mb-2
       in-.input:h-9
       in-.input:shrink-0
       in-.input:w-[calc(100%-40px)]
      ${isFlexibleWidth ? "max-w-[calc(100%-40px)]" : "w-full max-w-[300px]"}
`}>
        {isCloseIcon && (
          <div
            className="absolute top-0 right-0 p-3"
            onClick={() => setReduxState("popups", { name: undefined })}
          >
            <Button
              isCircle={true}
              size="xm"
              color="grey"
              iconName="times"

            />
          </div>
        )}
        {title && <h3 className="px-5 mb-2 text-base font-semibold text-grey-800">{title}</h3>}
        {description && <h4 className="px-5 mb-2 text-sm font-normal text-grey-800">{description}</h4>}
        {children}
        {primaryButton && (
          <button
            className={buttonClassName(primaryButton?.customStyle || "primary")}
            onClick={primaryButton.onClick}
          >
            {primaryButton.iconName && <Icon name={primaryButton.iconName} type="light" className={iconClassName} />}
            {primaryButton.label}
          </button>
        )}
        {secondaryButton && (
          <button
            className={`button ${buttonClassName(secondaryButton?.customStyle || "secondary")}`}
            onClick={secondaryButton.onClick}
          >
            {secondaryButton.iconName && <Icon name={secondaryButton.iconName} type="light" className={iconClassName} />}
            {secondaryButton.label}
          </button>
        )}
        {tertiaryButton && (
          <button
            className={`button ${buttonClassName(tertiaryButton?.customStyle || "tertiary")}`}
            onClick={tertiaryButton.onClick}
          >
            {tertiaryButton.iconName && <Icon name={tertiaryButton.iconName} type="light" className={iconClassName} />}
            {tertiaryButton.label}
          </button>
        )}
      </div>
    </div>
  )
}