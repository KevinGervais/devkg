
import dayjs from "dayjs"

import { useReduxState } from "@/redux"

import { ProjectItem } from "./ProjectItem"

// tslint:disable-next-line:no-var-requires
const Fade = require("react-reveal/Fade")
export function Projects(): JSX.Element {
  const { say } = useReduxState(state => ({
    say: state.languages.say
  }))
  return (
    <div className="w-full pt-8 pb-8 shrink-0 h-max center col bg-grey-300">
      <Fade top={true}>
        <h2 className="mb-5 font-sans font-normal">{say.previousProjects}</h2>
      </Fade>
      <div className="max-w-screen-sm col not-last-children:mb-3">
        <ProjectItem
          businessName="Soins intermediaires"
          businessDescription={say.healthCare}
          location="Montreal, Canada"
          fromDate={dayjs("feb", "2022").format("MMM AAAA")}
          jobPosition={say.seniorFullstackFreelanceDeveloper}
          fileCount={1178}
          lineOfCodeCount={162555}
          toolList={["Typescript", "React", "Redux", "TailwindCss", "Cordova", "React-router", "NodeJs", "MongoDb", "Express", "Styled Components"]}
          website="https://soinsintermediaires.herokuapp.com"
          imageList={["soins1", "soins2", "soins3", "soins4", "soins5"]}
          bulletList={[]}
        />
        <ProjectItem
          businessName="GoCook"
          businessDescription={say.cateringService}
          location="Montreal, Canada"
          fromDate={dayjs("dec", "2021").format("MMM AAAA")}
          toDate={dayjs("mar", "2022").format("MMM AAAA")}
          jobPosition={say.seniorFullstackFreelanceDeveloper}
          fileCount={1241}
          lineOfCodeCount={52591}
          toolList={["Typescript", "React", "Redux", "TailwindCss", "Cordova", "React-router", "NodeJs", "MongoDb", "Express", "Styled Components", "Stripe", "Paypal"]}
          website="https://gocook.ca"
          imageList={[]}
          bulletList={[]}
        />
        <ProjectItem
          businessName="Avarta Solutions"
          businessDescription={say.carBrokerage}
          location="Montreal, Canada"
          fromDate={dayjs("jan", "2022").format("MMM AAAA")}
          toDate={dayjs("feb", "2022").format("MMM AAAA")}
          jobPosition={say.seniorFullstackFreelanceDeveloper}
          fileCount={685}
          lineOfCodeCount={24461}
          toolList={["Typescript", "React", "Redux", "TailwindCss", "React-router", "NodeJs", "MongoDb", "Express", "Styled Components"]}
          website="https://www.avartasolutions.com"
          imageList={[]}
          bulletList={[]}
        />

        <ProjectItem
          businessName="Clinistat"
          businessDescription={say.healthCareStartup}
          location="Montreal, Canada"
          fromDate={dayjs("feb", "2021").format("MMM AAAA")}
          toDate={dayjs("apr", "2021").format("MMM AAAA")}
          jobPosition={say.fullstackFreelanceDeveloper}
          fileCount={423}
          lineOfCodeCount={21667}
          toolList={["Typescript", "React", "Redux", "TailwindCss", "React-router", "NodeJs", "MongoDb", "Express", "Styled Components"]}
          website="https://www.avartasolutions.com"
          imageList={["clinistat1", "clinistat2", "clinistat3", "clinistat4"]}
          bulletList={[]}
        />

        <ProjectItem
          businessName="GoTool"
          businessDescription={say.toolRental}
          location="Montreal, Canada"
          fromDate={dayjs("may", "2021").format("MMM AAAA")}
          toDate={dayjs("jul", "2022").format("MMM AAAA")}
          jobPosition={say.seniorFullstackFreelanceDeveloper}
          fileCount={1158}
          lineOfCodeCount={48849}
          toolList={["Typescript", "React", "Redux", "TailwindCss", "React-router", "NodeJs", "MongoDb", "Express", "Styled Components", "Stripe", "Paypal"]}
          website="https://gotool.ca"
          imageList={["gorent1", "gorent2", "gorent3", "gorent4", "gorent5",]}
          bulletList={[]}
        />

        <ProjectItem
          businessName="Resolve Me"
          businessDescription={say.multiFunctionCalculator}
          location="Montreal, Canada"
          fromDate={dayjs("may", "2019").format("MMM AAAA")}
          jobPosition={say.businessOwnerAndDeveloper}
          fileCount={1342}
          lineOfCodeCount={113130}
          toolList={["Typescript", "React", "Redux", "React-router", "Electron", "NodeJs", "MongoDb", "Express", "Styled Components", "NightWatch", "Cucumber Tests", "MathJs"]}
          website="https://resolveme.io"
          imageList={["resolveme1", "resolveme2", "resolveme3", "resolveme4", "resolveme5",]}
          bulletList={[]}
        />

      </div>
    </div>
  )
}

