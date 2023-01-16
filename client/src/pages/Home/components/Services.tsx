
import { useReduxState } from "@/redux"

import { ServiceItem } from "./ServiceItem"
// tslint:disable-next-line:no-var-requires
const Fade = require("react-reveal/Fade")
export function Services(): JSX.Element {
  const { say } = useReduxState(state => ({
    say: state.languages.say
  }))
  return (
    <div className="w-full pt-8 pb-8 shrink-0 h-max center col">
      <Fade top={true}>
        <h2 className="mb-5 font-sans font-normal text-center">{say.ourServices}</h2>
      </Fade>
      <div className="grid max-w-screen-lg grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
        <ServiceItem
          title={say.webApp}
          description={say.webAppText}
          iconName="browser"
        />
        <ServiceItem
          title={say.mobileApp}
          description={say.mobileAppText}
          iconName="mobile"
        />
        <ServiceItem
          title={say.software}
          description={say.softwareText}
          iconName="code"
        />
        <ServiceItem
          title={say.ecommerce}
          description={say.ecommerceText}
          iconName="shopping-cart"
        />
        <ServiceItem
          title={say.showcaseWebsite}
          description={say.showcaseWebsiteText}
          iconName="paint-roller"
        />
        <ServiceItem
          title={say.webDesign}
          description={say.webDesignText}
          iconName="palette"
        />

      </div>
    </div>
  )
}

