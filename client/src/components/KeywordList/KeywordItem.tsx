import { Button } from ".."
import { keywordItemTw } from "./keywordItemTw"
import { KeywordItemProps } from "./model"
import { onKeywordDrag } from "./onKeywordDrag"

export function KeywordItem({ onChange, index, optionList, output, image }: KeywordItemProps): JSX.Element {
  return (
    <div
      className={["keyword-item", keywordItemTw].join(" ")}
      data-index={index}
      onMouseDown={evt => {
        onKeywordDrag({
          evt,
          optionList,
          index,
          output,
          onChange
        })
      }}
      onTouchStart={evt => {
        onKeywordDrag({
          evt,
          optionList,
          index,
          output,
          onChange
        })
      }}
      onClick={() => {
        const newOptionList = [...optionList]
        newOptionList.splice(index, 1)
        onChange(newOptionList)
      }}>
      {image && <img className="h-8 mr-2 rounded-lg" src={image} alt={output} />}
      {output}
      <Button
        className="!absolute hidden -top-1 -right-1 z-10"
        color="error"
        size="xm"
        isCircle={true}
        iconName="times"
      />
    </div>
  )
}