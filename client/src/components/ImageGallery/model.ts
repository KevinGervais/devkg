import { PublicFile, Remove } from "@/shared"

export interface ImageGalleryProps {
  className?: string
  imageList: PublicFile[]
  isSmall?: boolean
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