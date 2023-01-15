import { tw } from "@/shared"

import { Button } from "@/components"
import { IS_DESKTOP } from "@/constants"

import { ImageProps } from "./model"
import { onImageDrag } from "./onImageDrag"

export function Image(props: ImageProps): JSX.Element {
  const { src, index, imageList, onChange } = props

  return (
    <div
      className="managed-image cursor-grab relative w-24 m-2 h-24 children-div:mouse:hover:!flex children-div:touch:!flex select-none"
      data-index={index}
      onMouseDown={evt => {
        onImageDrag({
          evt,
          imageList,
          index,
          onChange
        })
      }}
      onTouchStart={evt => {
        onImageDrag({
          evt,
          imageList,
          index,
          onChange
        })
      }}
    >
      <div
        className={tw`p-3 hidden !absolute z-10  cursor-pointer ${IS_DESKTOP ? "-right-4 -top-4" : "-right-6 -top-6"}`}
        onClick={() => {
          const newImageList = [...imageList]
          newImageList.splice(index, 1)
          onChange(newImageList)
        }}>
        <Button
          isCircle={true}
          size={IS_DESKTOP ? "xm" : "sm"}
          color="error"
          className="shadow"
          iconName="times"
        />
      </div>
      <img
        className="w-[inherit] h-[inherit] rounded-lg object-cover object-center touch-none pointer-events-none"
        alt={src}
        src={src}

      />
    </div>
  )
}

