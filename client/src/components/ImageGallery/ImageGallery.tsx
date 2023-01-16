import { useState } from "react"

import { PublicFile, tw } from "@/shared"

import { FullScreenImageGallery, Icon } from "@/components"

import { ImageGalleryProps } from "./model"

export function ImageGallery(props: ImageGalleryProps): JSX.Element {
  const { imageList, isSmall, className } = props
  const [imageIndex, setImageIndex] = useState(-1)
  const imgCount = imageList.length
  return (
    <div
      className={`gallery ${className} flex justify-center mb-5 relative w-full ${isSmall ? "" : "sm:mb-8"}`}
    >
      <div className={`aspect-[2/1] flex overflow-hidden w-full max-w-screen-lg ${isSmall ? "" : "rounded-2xl"}`}>
        <div className="dummy" />
        <div
          className={`clickable relative w-full h-full overflow-hidden ${imgCount === 1 ? "" : "mr-1"} ${isSmall ? "rounded-2xl" : ""}`}
          onClick={() => imgCount && setImageIndex(0)}
        >
          {!imgCount && (
            <Icon name="image" className={`w-full h-full center bg-grey-100 text-grey-300 children:w-16 children:h-16 ${isSmall ? "rounded-2xl bg-grey-100" : ""}`} />
          )}
          {!!imageList[0] && (
            <>
              <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${imageList[0].data})` }} />
              <div className="full-absolute hover:bg-white/20" />
            </>
          )}
        </div>
        {(imgCount > 1 || imgCount === 0) && (
          <div className={tw`
          grid
          w-full
          h-full
          gap-1
          ${imgCount === 2 ? "grid-cols-1 grid-rows-1" : ""}
          ${imgCount === 3 ? "grid-cols-1 grid-rows-2" : ""}
          ${imgCount === 4 ? " last-children:col-span-2" : ""}
          ${imgCount === 0 || imgCount > 3 ? " grid-cols-2 grid-rows-2" : ""}
          `}>
            {imageList.slice(1, 5).map((file, index) => (
              <div
                key={(file as PublicFile)._id || index}
                className="relative w-full h-full bg-center bg-cover clickable"
                onClick={() => setImageIndex(index + 1)}
              >
                <div
                  className={`w-full h-full rel bg-center bg-cover overflow-hidden ${isSmall ? "rounded-2xl" : ""}`}
                  style={{ backgroundImage: `url(${file.data})` }}
                  key={index}
                />
                <div className="full-absolute hover:bg-white/20" />
                {index === 3 && imgCount > 5 && (
                  <div className=" full-absolute center bg-white/30 text-white text-[30px] font-medium z-10 hover:bg-white/40">
                    +{imgCount - 5}
                  </div>
                )}
              </div>
            )
            )}
            {!imgCount && Array(4).fill(0).map((_, index) => (
              <Icon key={index} name="image" className={`w-full h-full center bg-grey-50 text-grey-300 children:w-16 children:h-16 ${isSmall ? "rounded-2xl bg-grey-100" : ""}`} />
            ))}
          </div>
        )}
      </div>

      {imageIndex !== -1 && (
        <FullScreenImageGallery index={imageIndex} imageList={imageList} onClose={() => setImageIndex(-1)} />
      )}
    </div>
  )
}