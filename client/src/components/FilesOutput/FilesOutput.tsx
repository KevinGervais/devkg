import { saveAs } from "file-saver"
import { useState } from "react"

import { PublicFile, tw } from "@/shared"

import { getOneFile } from "@/api/requests"

import { Button } from "../Button"
import { FilesOutputProps } from "./model"

export function FilesOutput({
  fileList,
  className
}: FilesOutputProps): JSX.Element {
  const [openedFile, setState] = useState<PublicFile | undefined>(undefined)
  return (
    <div className={tw`${className} flex-wrap pt-2 overflow-hidden files-output row rounded-xl`}>
      {fileList.map((file, fileIndex) => (
        <div key={file._id || fileIndex} className="flex-col p-3 mb-2 mr-2 bg-white rounded-md center w-max not-last-children:mb-2">
          <div className="flex-1 text-grey-800">{file.name}</div>
          <div className="text-sm shrink-0 text-grey-800">{file.size.toFixed(2)}Mb/5Mb</div>
          <div className="row not-last-children:mr-2">
            <Button
              className="shrink-0"
              iconName="cloud-download"
              isCircle={true}
              size="sm"
              shade={300}
              color="grey"
              onClick={() => {
                if (file.data) {
                  saveAs(file.data, file.name)
                } else {
                  getOneFile({ _id: file._id!, dataType: "original" }, ({ data, name }) => saveAs(data, name))
                }
              }}
            />
            {(file.type.startsWith("image") || file.type.includes("pdf")) && (
              <Button
                className="shrink-0"
                iconName="expand-alt"
                isCircle={true}
                size="sm"
                shade={300}
                color="grey"
                onClick={() => {
                  if (file.data) {
                    setState({ ...file, data: file.data })
                  } else {
                    getOneFile({ _id: file._id!, dataType: "original" }, newFile => {
                      setState(newFile)
                    })
                  }
                }}
              />
            )}
          </div>
        </div>
      ))}
      {openedFile && (
        <div className="col z-[2000] full-fixed center bg-black/50">
          <div className="flex items-center justify-between w-full h-12 px-5 bg-primary-500">
            <img alt="logo" src="images/logo.png" className="h-12" />
            <Button
              className="shrink-0"
              iconName="times"
              isCircle={true}
              variant="text"
              size="sm"
              shade={500}
              color="primary"
              onClick={() => setState(undefined)}
            />
          </div>
          {openedFile.type?.startsWith("image") && (
            <img
              alt="opened-file"
              src={openedFile.data}
              className="object-contain w-full max-h-[calc(100%-48px)] h-full"
            />
          )}
          {openedFile.type?.includes("pdf") && <iframe title="pdf-view" src={openedFile.data} className="w-full h-full" />}
        </div>
      )}
    </div>
  )
}