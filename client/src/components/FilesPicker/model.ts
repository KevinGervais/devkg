import { FileInfo, PublicFile } from "@/shared"

import { DOCX_AND_PDF_ACCEPT } from "@/constants"

export interface FilesPickerProps<File extends PublicFile | FileInfo> {
  fileList: File[]
  label?: string
  isMultiple?: boolean
  isRequired?: boolean
  isError?: boolean
  isDeleteDisabled?: boolean
  isFieldset?: boolean
  fileType: "image/*" | "application/pdf" | "file" | typeof DOCX_AND_PDF_ACCEPT,
  onDelete?: (_id: string) => void
  onAdd?: (newFileList: PublicFile[]) => void
  onChange?: File extends PublicFile ? (fileList: PublicFile[]) => void : undefined
}