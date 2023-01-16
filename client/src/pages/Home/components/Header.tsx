import imageMap from "@/images"
import { useReduxState } from "@/redux"
// tslint:disable-next-line:no-var-requires
const Fade = require("react-reveal/Fade")
// tslint:disable-next-line:no-var-requires
const Zoom = require("react-reveal/Zoom")
export function Header(): JSX.Element {
  const { say } = useReduxState(state => ({
    say: state.languages.say
  }))
  return (
    <header className="h-screen">
      <div className="w-full center col h-1/2 bg-primary-700 sm:h-1/2">
        <Fade top={true}>
          <img className="mb-10 max-w-[800px] max-h-[calc(100%-200px)] min-w-[200px] w-[90vw]" src={imageMap.header} alt="html css js" />
        </Fade>
        <Fade top={true}>
          <h1 className="text-center sm:!text-6xl text-white" style={{ fontSize: "max(8vw, 30px)" }}>{say.developer}</h1>
        </Fade>
      </div>
      <h2 className="flex pb-16 text-2xl sm:text-[40px] sm:pb-[90px] text-white center bg-primary-600 h-1/5">
        <div>
          <Zoom>
            Kevin Gervais
          </Zoom>
        </div>
      </h2>
      <div className="w-full h-1 bg-primary-100" />
      <div className="relative flex items-center w-full col h-1/4 bg-primary-50 sm:h-1/3">
        <Zoom>
          <div
            className="sm:mt-[-90px] sm:w-[180px] sm:h-[180px] mt-[-70px] w-[140px] h-[140px] shrink-0 bg-cover bg-center bg-no-repeat rounded-full border-[5px] border-solid border-primary-100"
            style={{ backgroundImage: `url(${imageMap.avatar})` }}
          />
        </Zoom>
        <Fade bottom={true}>
          <a href="mailto:kevin.gervais@tutanota.com" className="mt-5 sm:text-[30px] text-lg text-center text-secondary-500">kevin.gervais@tutanota.com</a>
          <div className="w-[200px] h-0.5 bg-primary-100 mt-3 sm:w-[300px] sm:h-[3px] sm:my-3" />
          <a className="text-lg text-center sm:text-2xl text-secondary-500" href="tel:514-827-8434">+1 514-827-8434</a>
        </Fade>
      </div>
    </header>
  )
}