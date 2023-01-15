import { Optional, PublicFile } from "@/shared"

export interface FilesOutputProps {
  fileList: Optional<PublicFile, "data">[]
  className?: string
}