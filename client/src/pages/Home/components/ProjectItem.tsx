import { AllLogos } from "../model"

// tslint:disable-next-line:no-var-requires
const Zoom = require("react-reveal/Zoom")
export function ProjectItem({
  businessName,
  businessDescription,
  location,
  fromDate,
  toDate,
  jobPosition,
  fileCount,
  lineOfCodeCount,
  toolList,
  website,
  bulletList,
}: {
  businessName: string
  businessDescription: string
  location: string
  fromDate: string
  toDate?: string
  jobPosition: string
  fileCount?: number
  lineOfCodeCount?: number
  toolList: AllLogos[]
  website?: string
  imageList: string[]
  bulletList: string[]
}): JSX.Element {
  return (
    <Zoom bottom={true}>
      <div className=""
      />
    </Zoom>
  )
}

