import { saveAs } from "file-saver"

import { FileInfo, PublicFile } from "@/shared"

import { getOneFile } from "@/api/requests"
import { uploadFile } from "@/functions"
import { useReduxState } from "@/redux"

import { Button } from "../Button"
import { FilesPickerProps } from "./model"

export function FilesPicker<File>({
  label,
  fileList,
  fileType,
  isFieldset = true,
  isMultiple,
  isRequired,
  isError,
  onChange,
  onDelete,
  isDeleteDisabled,
  onAdd
}: File extends PublicFile | FileInfo ? FilesPickerProps<File> : never): JSX.Element {
  const { say } = useReduxState(state => ({
    say: state.languages.say
  }))
  return (
    <div className={`files-picker mb-5 col ${isError ? "error" : ""}`}>
      {isFieldset && (
        <h5 className="p-0 mb-2 text-base font-normal text-secondary-800 bg-trans shrink-0">
          {`${label}${isRequired ? " *" : ""}`}
        </h5>
      )}
      <Button
        iconName="cloud-upload"
        className="m-[initial] max-w-lg"
        onClick={() => uploadFile(fileType, !!isMultiple, newList => {
          const listStr = newList.map(file => file.data)
          const noDuplicateList = (fileList as PublicFile[]).filter(item => !listStr.includes(item.data))
          if (onChange) {
            onChange([...noDuplicateList, ...newList].filter(item => {
              if (fileType === "image/*" && !item.type.includes("image")) {
                return false
              } else if (fileType === "application/pdf" && !item.type.includes("pdf")) {
                return false
              } else if (
                fileType === "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                && !item.type.includes("pdf")
                && !item.type.includes("word")
              ) {
                return false
              } else {
                return true
              }
            }))
          }
          if (onAdd) {
            onAdd(newList)
          }
        })}
      >{say.download}</Button>
      {!!fileList.length && (
        <div className="mt-5 overflow-hidden bg-white shadow-md rounded-xl">
          {fileList.map((file, fileIndex) => (
            <div key={file._id || fileIndex} className="flex h-12 px-5 border-solid row-middle not-last:border-b border-grey-100">
              <div className="flex-[1] min-w-0">
                <div className="truncate text-grey-800">
                  {file.name}
                </div>
              </div>
              <div className="text-sm shrink-0 text-grey-800">{file.size.toFixed(2)}Mb/5Mb</div>
              {!isDeleteDisabled && (
                <Button
                  className="ml-2 shrink-0"
                  iconName="times"
                  isCircle={true}
                  color="grey"
                  size="sm"
                  shade={300}
                  onClick={() => {
                    const newList = fileList.filter((item, index) => index !== fileIndex)
                    if (onChange) {
                      onChange(newList as PublicFile[])
                    }
                    if (onDelete && file._id) {
                      onDelete(file._id)
                    }
                  }}
                />
              )}
              <Button
                className="ml-2 shrink-0"
                iconName="cloud-download"
                isCircle={true}
                size="sm"
                shade={300}
                color="grey"
                onClick={() => {
                  if ((file as PublicFile).data) {
                    saveAs((file as PublicFile).data, file.name)
                  } else {
                    getOneFile({ _id: file._id!, dataType: "original" }, ({ data, name }) => saveAs(data, name))
                  }
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}