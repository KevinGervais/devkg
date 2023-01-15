import { useState } from "react"

import { Button, Icon, SafeFixed } from "@/components"

import { FullScreenImageGalleryProps } from "./model"

export function FullScreenImageGallery(props: FullScreenImageGalleryProps): JSX.Element {
  const { imageList, index, onClose } = props
  const [imageIndex, setImageIndex] = useState(index)
  const imgCount = imageList.length
  return (
    <SafeFixed>
      <div
        className="center justify-between full-fixed flex z-[100000000] bg-secondary-900/75 backdrop-blur-sm"
        onClick={() => onClose()}
      >
        <span className="absolute w-full text-xl text-center top-4 text-white font-medium tracking-[4px]">
          {imageIndex + 1}/{imgCount}
        </span>
        <Icon
          className={`center h-10 w-10 rounded-full  ml-2 shrink-0 text-primary-500 children-svg:h-5 ${imageIndex === 0 ? "opacity-30 bg-white cursor-default" : "bubble-white-primary"}`}
          name="chevron-left"
          onClick={evt => {
            evt.stopPropagation()
            setImageIndex(imageIndex === 0 ? imageIndex : imageIndex - 1)
          }}
        />
        <img
          className="w-full h-full max-h-[calc(100%-100px)] max-w-[calc(100%-100px)] object-contain"
          alt={`commerce ${imageIndex + 2}`}
          src={imageList[imageIndex]!.data}
        />
        <Icon
          className={`center h-10 w-10 rounded-full mr-2 shrink-0 text-primary-500 children-svg:h-5 ${imageIndex === imgCount - 1 ? "opacity-30 bg-white cursor-default" : "bubble-white-primary"}`}
          name="chevron-right"
          onClick={evt => {
            evt.stopPropagation()
            setImageIndex(imageIndex === imgCount - 1 ? imageIndex : imageIndex + 1)
          }}
        />
        <Button
          isCircle={true}
          variant="text"
          className="!absolute top-2 right-2"
          iconName="times"
          onClick={evt => {
            evt.stopPropagation()
            onClose()
          }}
        />
      </div>
    </SafeFixed>
  )
}