import dayjs from "dayjs"
import { useState } from "react"

import { Bug, PublicFile } from "@/shared"

import { deleteOneBug, getManyFiles } from "@/api/requests"
import { Icon, ImageGallery, Output, TextArea } from "@/components"
import { setReduxState, useReduxState, useWillMount } from "@/redux"

export function BugReportItem({
  refreshBugs,
  _id,
  imageIdList,
  operatingSystem,
  isCordova,
  appVersion,
  message,
  creationDate,
}: Bug & { refreshBugs: () => void }): JSX.Element {
  const { say } = useReduxState(state => ({
    say: state.languages.say
  }))
  const [imageFileList, setImageFileList] = useState<PublicFile[]>([])
  useWillMount(() => {
    getManyFiles({ idList: imageIdList, dataType: "original" }, fileList => setImageFileList(fileList))
  })
  return (
    <div className="bug-item in-.fa-icon:shade-bg-primary-500">
      <Output label={say.operatingSystem} value={operatingSystem} />
      <Output label={say.appVersion} value={appVersion} />
      <Output label={say.mobileApp} value={isCordova ? say.yes : say.no} />
      <Output label={say.date} value={dayjs(creationDate).format(say.yearDateShort)} />
      <TextArea
        value={message}
        isReadonly={true}
      />
      {!!imageIdList.length && <ImageGallery imageList={imageFileList} />}
      <Icon
        name="trash-alt"
        onClick={() => setReduxState("popups", {
          name: "SafeAction",
          props: {
            title: say.askDeleteBug,
            action: () => { deleteOneBug(_id, () => refreshBugs()) }
          }
        })}
      />
    </div>
  )
}