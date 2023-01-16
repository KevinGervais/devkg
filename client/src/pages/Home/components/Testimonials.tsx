
import { useReduxState } from "@/redux"

import { TestimonialItem } from "./TestimonialItem"
// tslint:disable-next-line:no-var-requires
const Fade = require("react-reveal/Fade")
export function Testimonials(): JSX.Element {
  const { say } = useReduxState(state => ({
    say: state.languages.say
  }))
  return (
    <div className="w-full pt-8 pb-8 shrink-0 h-max center col bg-grey-300">
      <Fade top={true}>
        <h2 className="mb-5 font-sans font-normal text-center">{say.testimonials}</h2>
      </Fade>
      <div className="max-w-screen-sm p-3 col not-last-children:mb-3">
        <TestimonialItem
          name="Omar Halbouni"
          jobType={say.coFounderResolveMe}
          description={say.OmarText}
        />
        <TestimonialItem
          name="Youssof Ibrahim"
          jobType={say.ceoAvartaSolutions}
          description={say.YoussofIbrahimText}
        />
      </div>
    </div>
  )
}

