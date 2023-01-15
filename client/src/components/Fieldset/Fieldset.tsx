import { tw } from "@/shared"

import { useReduxState } from "@/redux"

import { FieldsetProps } from "./model"


export const Fieldset = ({
  className,
  label,
  isRequired,
  isOptional,
  children
}: FieldsetProps): JSX.Element | null => {
  const say = useReduxState(state => state.languages.say)
  return (
    <div className={tw`fieldset flex flex-col mb-8 shrink-0 ${className}`}>
      <div className="leading-tight shrink-0 mb-1 sm:mb-2.5 font-normal text-secondary-800">
        {`${label} ${isRequired ? "*" : ""} ${isOptional ? `(${say.optional})` : ""}`}
      </div>
      <div className="row-middle min-h-[50px] flex-1 children:w-full not-last-children:mr-2.5">
        {children}
      </div>
    </div>
  )
}
