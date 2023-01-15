import { PublicFile } from "@/shared"

export interface FullScreenImageGalleryProps {
  imageList: PublicFile[]
  index: number
  onClose: () => void
}
