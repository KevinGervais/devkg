import { tw } from "@/shared"

import { TextArea } from "../TextArea"
import {
  OutputStyled,
} from "./OutputStyled"
import { OutputProps } from "./model"


export function Output({ label, value, isTextArea, isError, className }: OutputProps): JSX.Element {
  return (
    <OutputStyled
      className={tw`
        ${className}
        output
        mb-2
        col
        sm:flex-row
        in-.gallery:mt-5
        in-span:text-grey-800
        in-.textarea-content:h-full
        ${isError ? "border border-solid border-success-300 rounded-xl" : ""}
      `}
    >
      <label
        className={tw`
          center
        bg-white
          min-h-[40px]
          px-4
          shrink-0
          font-light
          rounded-t-xl
          text-grey-700
          border
          border-solid
          ${isError ? "border-trans" : "border-grey-200"}
          sm:w-[200px]
          sm:rounded-t-none
          sm:!rounded-l-xl
        `}
      >{label}</label>
      {!isTextArea && (
        <div className="center w-full min-h-[40px] px-4 rounded-b-xl bg-grey-100 text-grey-800 sm:rounded-l-none sm:rounded-r-xl">
          {value}
        </div>
      )}
      {isTextArea && (
        <TextArea
          className="center w-full min-h-[40px] px-4 rounded-b-xl bg-grey-100 text-grey-800 sm:rounded-l-none sm:rounded-r-xl"
          value={value as string}
          isReadonly={true}
        />
      )}
    </OutputStyled>
  )
}
