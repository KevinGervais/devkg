import { Header } from "./Header"
import { Services } from "./Services"
// tslint:disable-next-line:no-var-requires
const Zoom = require("react-reveal/Zoom")
export function Home(): JSX.Element {
  return (
    <div className="bg-primary-50">
      <Header />
      <Services />
      <div
        data-element_type="widget" data-settings="{&quot;source_json&quot;:{&quot;url&quot;:&quot;https:\/\/montrealenligne.ca\/wp-content\/uploads\/2022\/04\/Astronaut-lottie.json&quot;,&quot;id&quot;:3679,&quot;alt&quot;:&quot;&quot;,&quot;source&quot;:&quot;library&quot;},&quot;loop&quot;:&quot;yes&quot;,&quot;play_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1.1999999999999999555910790149937383830547332763671875,&quot;sizes&quot;:[]},&quot;start_point&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;_position&quot;:&quot;fixed&quot;,&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;source&quot;:&quot;media_file&quot;,&quot;caption_source&quot;:&quot;none&quot;,&quot;link_to&quot;:&quot;none&quot;,&quot;trigger&quot;:&quot;arriving_to_viewport&quot;,&quot;viewport&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:0,&quot;end&quot;:100}},&quot;end_point&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;100&quot;,&quot;sizes&quot;:[]},&quot;renderer&quot;:&quot;svg&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}" data-widget_type="lottie.default"
      >
        <img
          alt="astronaut"
          src="/images/astronaut.svg"
          className="h-[200px] animate-twist fixed bottom-8 right-8 z-[100]"
        />
      </div>
    </div>
  )
}