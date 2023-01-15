import { useState } from "react"

import { FullScreenImageGallery, Icon } from "@/components"

import { ImageGalleryProps } from "./model"
export function GridImageGallery(props: ImageGalleryProps): JSX.Element {
  const { imageList, className, imageCount } = props
  const [imageIndex, setImageIndex] = useState(-1)
  return (
    <div className={`full-gallery ${className} flex justify-center mb-5 relative`}>
      <div className="grid justify-center w-full grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
        {imageList.length === 0 && [...Array(imageCount)].map((_, index) => (
          <Icon key={index} name="image" className="w-full h-full aspect-square center bg-secondary-50 text-secondary-100 children:h-12" />
        ))}
        {imageList.map((img, index) => (
          <div key={img._id || index} className="relative aspect-square clickable" onClick={() => setImageIndex(index)}>
            <img className="object-cover object-center w-full h-full aspect-square" src={img.data} alt={img.name} />
            <div className="z-10 full-absolute hover:bg-black/50" />
          </div>
        ))}
      </div>

      {imageIndex !== -1 && (
        <FullScreenImageGallery index={imageIndex} imageList={imageList} onClose={() => setImageIndex(-1)} />
      )}
    </div>
  )
}