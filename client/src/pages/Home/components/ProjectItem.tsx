import dayjs from "dayjs"

import { generateId } from "@/shared"

import { Bubble, Icon, ImageGallery, Tooltip } from "@/components"
import imageMap from "@/images"
import { useReduxState } from "@/redux"

import { AllLogos } from "../model"
import { websiteDict } from "./TechUsed"

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
  imageList,
  enList,
  frList,
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
  enList: string[]
  frList: string[]
}): JSX.Element {
  const { say, selectedLanguage } = useReduxState(state => ({
    say: state.languages.say,
    selectedLanguage: state.languages.selectedLanguage
  }))
  return (
    <Zoom bottom={true}>
      <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="items-center justify-between w-full px-4 py-3 row bg-rating">
          <div>
            <div className="mb-1 col sm:row sm:items-center">
              <div className="px-3 text-xl font-semibold rounded-full h-7 center sm:mr-2 bg-white/50">{businessName}</div>
              <div className="font-medium">({businessDescription})</div>
            </div>
            <div className="font-medium">{jobPosition}</div>
            <div className="text-sm">{location}</div>
          </div>
          <div className="font-medium">
            {`${dayjs(fromDate).format("MMM YYYY")} - ${toDate ? dayjs(fromDate).format("MMM YYYY") : say.now}`}
          </div>
        </div>
        <div className="bg-primary-100 row not-last-children:border-r not-last-children:border-solid not-last-children:border-primary-300">
          <div className="flex flex-1 h-8 center bubble-primary-100 clickable" onClick={() => window.open(website, "_blank")}>
            <Icon name="globe" className="h-5 mr-2" />
            {say.website}
            <Bubble shade={100} color="primary" />
          </div>
          <div className="flex flex-1 h-8 center">
            <Icon name="file" className="h-5 mr-2" />
            {`${fileCount} ${say.files}`}
          </div>
          <div className="flex flex-1 h-8 center">
            <Icon name="code" className="h-5 mr-2" />
            {`${lineOfCodeCount} ${say.linesOfCode}`}
          </div>
        </div>
        <ImageGallery className="all:rounded-none !mb-0" imageList={imageList.map(url => ({
          data: `/images/${url}.jpg`,
          name: "",
          _id: generateId(),
          size: 1000,
          type: "jpg"
        }))} />
        <div className="p-4 bg-white">
          <div className="items-center w-full pb-4 col">
            <div className="col">
              {(selectedLanguage === "en" ? enList : frList).map((val, index) => (
                <div key={index} className="relative flex">
                  <Icon name="check-circle" type="solid" className="absolute h-3 mt-1 mr-2 text-primary-500" />
                  <p className="ml-5 break-words whitespace-pre-wrap">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap center">
            {toolList.map((str, index) => (
              <a
                key={index}
                className="relative transition-all ease-in-out m-2 hover:[transform:rotateX(10deg)_rotateY(-10deg)_rotateZ(5deg)_scale(1.2);]"
                target="_blank"
                rel="noopener noreferrer"
                href={websiteDict[str as keyof typeof websiteDict]}
              >
                <img src={imageMap[str]} alt={str} className="h-5" />
                <Tooltip children={str} delay={0} mobileDelay={0} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Zoom>
  )
}

