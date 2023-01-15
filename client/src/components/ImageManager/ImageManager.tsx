import { IS_DESKTOP } from "@/constants"
import { uploadFile } from "@/functions"
import { getReduxState, setReduxState, useReduxState } from "@/redux"

import { Button, Icon } from ".."
import { Image } from "./Image"
import { ImageManagerProps } from "./model"

export function ImageManager({
  onChange,
  imageList,
  customLabel,
  loadingCount
}: ImageManagerProps): JSX.Element {
  const { say, isMissingField } = useReduxState(state => ({
    say: state.languages.say,
    isMissingField: state.ui.snackbar?.message === "missingField",
  }))
  return (
    <div className="items-center image-manager col">
      <Button
        className="mb-5"
        color={isMissingField && !imageList.length ? "error" : "secondary"}
        variant="contained"
        onClick={() => uploadFile("image/*", true, newImageList => {
          onChange([...imageList, ...newImageList])
        })}
      >
        {customLabel || say.uploadImages}
      </Button>
      <div
        className="flex flex-wrap justify-center mb-5"
        onMouseEnter={() => IS_DESKTOP && !getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: true })}
        onMouseLeave={() => IS_DESKTOP && getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: false })}
        onTouchStart={() => !getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: true })}
        onTouchEnd={() => getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: false })}
      >
        {imageList.map((file, index) => (
          <Image
            key={index}
            src={file.data}
            index={index}
            imageList={imageList}
            onChange={onChange}
          />
        ))}
        {!imageList.length && loadingCount ? Array(loadingCount).fill(0).map((_, index) => (
          <Icon
            name="image"
            key={index}
            className="w-24 h-24 m-2 rounded-lg center text-secondary-200 bg-secondary-50 children-svg:h-6"
          />
        )) : null}
      </div>
    </div>
  )
}