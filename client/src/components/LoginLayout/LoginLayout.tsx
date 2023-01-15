import { tw } from "@/shared"

import { IS_CORDOVA } from "@/constants"
import { getBgImageStyle } from "@/ui/functions"

import { Button } from "../Button"
import { LoginLayoutProps } from "./model"
export function LoginLayout({
  title,
  subTitle,
  primaryButton,
  secondarybutton,
  tertiairyButton,
  children
}: LoginLayoutProps): JSX.Element {
  return (
    <div className={tw`
      relative
      col
      w-full
      center
      min-h-screen
      ${!IS_CORDOVA && "-mt-[60px]"}
    `}>
      <div className="flex full-absolute center-bg-img" style={getBgImageStyle("healty.png")} />
      <section className="relative z-10 mt-10 items-center p-6 bg-white col children-button:mt-5 w-[calc(100%-16px)] max-w-[400px] rounded-lg">
        <h3 className="mb-4 text-center">{title}</h3>
        {subTitle && <p className="mb-6 text-center">{subTitle}</p>}
        {children}
        <footer className="justify-between w-full col sm:row">
          {secondarybutton && (
            <Button
              size="lg"
              color="primary"
              variant="outlined"
              className="sm-max:mb-5"
              onClick={() => secondarybutton.onClick()}
            >{secondarybutton.label}</Button>
          )}
          {primaryButton && (
            <Button
              color="primary"
              size="lg"
              onClick={() => primaryButton.onClick()}
            >{primaryButton.label}</Button>
          )}
        </footer>
        {tertiairyButton && (
          <Button
            color="primary"
            size="lg"
            variant="text"
            onClick={() => tertiairyButton.onClick()}
          >{tertiairyButton.label}</Button>
        )}
      </section>
    </div>
  )
}