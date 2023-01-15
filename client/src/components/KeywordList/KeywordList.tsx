
import { tw } from "@/shared"

import { IS_DESKTOP } from "@/constants"
import { getReduxState, setReduxState } from "@/redux"

import { KeywordItem } from "./KeywordItem"
import { KeywordListProps } from "./model"

export function KeywordList<Value>({ onChange, outputMap, optionList, imageMap, className }: KeywordListProps<Value>): JSX.Element {
  return (
    <div
      className={tw`${className} flex flex-wrap w-full select-none keyword-list`}
      onMouseEnter={() => IS_DESKTOP && !getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: true })}
      onMouseLeave={() => IS_DESKTOP && getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: false })}
      onTouchStart={() => !getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: true })}
      onTouchEnd={() => getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: false })}
    >
      {optionList.map((keyword, index) => (
        <KeywordItem
          key={index}
          onChange={onChange}
          index={index}
          optionList={optionList}
          option={keyword}
          output={outputMap(keyword)}
          image={imageMap && imageMap(keyword)}
        />
      ))}
    </div>
  )
}