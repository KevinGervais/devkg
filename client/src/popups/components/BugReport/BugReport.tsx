import dayjs from "dayjs"

import { PublicFile } from "@/shared"

import { createOneBug } from "@/api/requests"
import { Fieldset, ImageManager, Output, Popup, TextArea } from "@/components"
import { APP_VERSION, OS } from "@/constants"
import { useReduxState, useStates } from "@/redux"

export const BugReport = (): JSX.Element => {
  const say = useReduxState(state => state.languages.say)
  const [{
    description,
    imageFileList
  }, setState] = useStates({
    description: "",
    imageFileList: [] as PublicFile[]
  })
  return (
    <Popup
      title={say.sendBugReport}
      closeButtonType="cancel"
      isLarge={true}
      primaryButton={{
        label: say.send,
        onClick: () => createOneBug(description, imageFileList)
      }}
    >
      <Output label={say.operatingSystem} value={OS} />
      <Output label={say.appVersion} value={APP_VERSION} />
      <Output label={say.date} value={dayjs().format(say.yearDateShort)} />
      <Fieldset label={say.problemDescription}>
        <TextArea
          value={description}
          onChange={html => setState({ description: html })}
        />
      </Fieldset>
      <ImageManager imageList={imageFileList} onChange={newImageList => setState({ imageFileList: newImageList })} />
    </Popup>
  )
}
