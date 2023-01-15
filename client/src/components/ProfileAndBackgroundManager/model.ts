import { PublicFile } from "@/shared"

export interface ProfileAndBackgroundManagerProps {
  backgroundImage?: string
  profileImage?: string
  onBackgroundChange?: (image: PublicFile) => void
  onProfileChange?: (image: PublicFile) => void
}