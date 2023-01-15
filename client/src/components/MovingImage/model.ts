export interface MovingImageProps {
  from: MovingImagePosition
  to: MovingImagePosition
  isActive: boolean
  src: string
  speed: number
}
export interface MovingImageState {
  isMoving: boolean
  imageAspectRatio?: number
  isImageRerendered: boolean
}


export type MovingImagePosition = `${AllHorizontalPositions} ${AllVerticalPositions}`

export type AllHorizontalPositions = "left" | "center" | "right"
export type AllVerticalPositions = "top" | "center" | "bottom"