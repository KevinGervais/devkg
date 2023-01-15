
import { Tooltip } from "@/components"
import imageMap from "@/images"
import { useReduxState } from "@/redux"

// tslint:disable-next-line:no-var-requires
const Fade = require("react-reveal/Fade")
// tslint:disable-next-line:no-var-requires
const Zoom = require("react-reveal/Zoom")
export function TechUsed(): JSX.Element {
  const { say } = useReduxState(state => ({
    say: state.languages.say
  }))
  return (
    <div className="w-full pt-8 pb-8 bg-white shrink-0 h-max center col">
      <Fade top={true}>
        <h2 className="mb-5 font-sans font-normal">{say.techUsed}</h2>
      </Fade>
      <div className="flex flex-wrap max-w-screen-md center">
        {imageList.map(str => (

          <Zoom bottom={true} key={str}>
            <a
              className="transition-all ease-in-out m-5 relative hover:[transform:rotateX(10deg)_rotateY(-10deg)_rotateZ(5deg)_scale(1.2);]"
              target="_blank"
              rel="noopener noreferrer"
              href={websiteDict[str as keyof typeof websiteDict]}
            >
              <img src={imageMap[str]} alt={str} className="h-10" />
              <Tooltip children={str} delay={0} mobileDelay={0} />
            </a>
          </Zoom>
        ))}
      </div>
    </div>
  )
}
export const websiteDict = {
  "React": "https://reactjs.org/",
  "Redux": "https://redux.js.org",
  "Electron": "https://electronjs.org/",
  "React-router": "https://reacttraining.com/react-router/",
  "React-Bootstrap": "https://react-bootstrap.github.io/",
  "MongoDb": "https://www.mongodb.com/fr",
  "NodeJs": "https://nodejs.org/en/",
  "MeteorJs": "https://www.meteor.com/",
  "Express": "https://expressjs.com/fr/",
  "Socket.io": "https://socket.io/",
  "Sass": "https://sass-lang.com/",
  "Git": "https://git-scm.com/",
  "GitHub": "https://github.com/",
  "NPM": "https://www.npmjs.com/",
  "Visual studio code": "https://code.visualstudio.com/",
  "Atom": "https://atom.io/",
  "Affinity": "https://affinity.serif.com/fr/",
  "JQuery": "https://jquery.com/",
  "Wordpress": "https://wordpress.com"
}

const imageList = [
  "React",
  "NodeJs",
  "Typescript",
  "TailwindCss",
  "Redux",
  "MongoDb",
  "Electron",
  "Stripe",
  "Paypal",
  "Cordova",
  "Socket.io",
  "Styled Components",
  "React-router",
  "React-Bootstrap",
  "Express",
  "Jira",
  "Sass",
  "Git",
  "GitHub",
  "NightWatch",
  "Cucumber Tests",
  "Jest",
  "NPM",
  "MathJs",
  "Visual studio code",
  "Atom",
  "Affinity",

] as const
