import { IS_ANY_IOS, IS_CORDOVA } from "@/constants"
import { setReduxState, useReduxState } from "@/redux"
import { getNotch } from "@/ui/mixins"

import { Button } from "../Button"
import { ButtonProps } from "../Button/model"
import { PopupProps } from "./model"

export const LargePopup = ({
  maxWidth,
  children,
  title,
  description,
  primaryButton,
  closeButtonType,
  secondaryButton,
  tertiaryButton
}: PopupProps): JSX.Element => {
  const { vw, vh, say } = useReduxState(state => ({
    vw: IS_CORDOVA ? state.ui.vw : undefined,
    vh: IS_CORDOVA ? state.ui.vh : undefined,
    say: state.languages.say
  }))
  const customStyleMap: { [key in "primary" | "secondary" | "tertiary"]: ButtonProps["variant"] } = {
    primary: "contained",
    secondary: "outlined",
    tertiary: "text"
  }
  return (
    <div
      className="center full-absolute z-[1000000] backdrop-blur-lg bg-black/70"
      style={{
        width: vw ? `${vw}px` : "100%",
        marginTop: IS_CORDOVA && IS_ANY_IOS ? getNotch("top") : undefined,
        height: IS_CORDOVA && IS_ANY_IOS ? `calc(${vh ? `${vh}px` : "100%"} - ${getNotch("top")})` : undefined
      }}
    >
      <div
        style={{
          maxWidth,
        }}
        className="col w-full overflow-hidden sm:max-w-screen-sm max-h-full sm:max-h-[calc(100%-100px)] sm:rounded-xl sm:w-[calc(100%-100px)]"
      >
        {(title || description) && (
          <header
            className={`flex items-center relative h-14 px-5 shrink-0 font-normal text-grey-700 bg-grey-100 children:shrink-0`}
          >
            {title}
            {description && <h4 className="w-full shrink">{description}</h4>}
          </header>
        )}
        <div
          className={`col max-h-[calc(100%-100px)] p-5 w-full bg-white overflow-auto`}
        >
          {children}
        </div>
        <footer className={`flex bg-white items-center relative h-12 px-5 shrink-0 justify-end children:ml-2`}>
          {closeButtonType && (
            <Button
              children={say[closeButtonType]}
              onClick={() => setReduxState("popups", { name: undefined })}
              variant="outlined"
            />
          )}
          {tertiaryButton && (
            <Button
              children={tertiaryButton.label}
              onClick={tertiaryButton.onClick}
              iconName={tertiaryButton.iconName}
              variant={customStyleMap[tertiaryButton.customStyle || "tertiary"]}
            />
          )}
          {secondaryButton && (
            <Button
              children={secondaryButton.label}
              onClick={secondaryButton.onClick}
              iconName={secondaryButton.iconName}
              variant={customStyleMap[secondaryButton.customStyle || "secondary"]}
            />
          )}
          {primaryButton && (
            <Button
              children={primaryButton.label}
              onClick={primaryButton.onClick}
              iconName={primaryButton.iconName}
              variant={customStyleMap[primaryButton.customStyle || "primary"]}
            />
          )}
        </footer>
      </div>
    </div>
  )
}