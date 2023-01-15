import { PublicFile } from "@/shared"

export interface ImageGalleryProps {
  className?: string
  imageCount: number
  imageList: PublicFile[]
}

export interface ImageGalleryStyledProps {
  imageList: PublicFile[]
  imageCount: number
  isSmall: boolean
}

export interface FullScreenGalleryStyledProps {
  imageCount: number
  imageIndex: number
}