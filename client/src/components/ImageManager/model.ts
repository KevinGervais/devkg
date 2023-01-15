import { PublicFile } from "@/shared"

export interface ImageManagerProps {
  onChange: (imageList: PublicFile[]) => void
  imageList: PublicFile[]
  loadingCount?: number
  customLabel?: string
}

export interface ImageProps {
  src: string
  index: number
  onChange: (imageList: PublicFile[]) => void
  imageList: PublicFile[]
}