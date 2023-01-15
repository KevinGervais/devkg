import { Icon } from ".."
import { TextAreaControlItem } from "./TextAreaControlItem"
import { TextAreaControlsProps } from "./model"

export function TextAreaControls(props: TextAreaControlsProps): JSX.Element {
  const {
    blockStyle,
    inlineStyle,
    keywordList,
    isRichUtilsDisabled,
    isHighlightDisabled,
    onBlockChange,
    onInlineChange,
    onAddKeyword
  } = props

  const BLOCK_TYPES = [
    { label: <Icon name="font" />, style: "header-three" },
    { label: <Icon name="list-ol" />, style: "ordered-list-item" },
    { label: <Icon name="list-ul" />, style: "unordered-list-item" }
  ]
  const INLINE_STYLES = [
    { label: <Icon name="bold" />, style: "BOLD" },
    { label: <Icon name="italic" />, style: "ITALIC" },
    { label: <Icon name="underline" />, style: "UNDERLINE" },
  ]
  if (!isHighlightDisabled) {
    INLINE_STYLES.push({ label: <Icon name="highlighter" />, style: "MARK" })
  }

  return (
    <div className="flex flex-wrap justify-end mx-2 bg-white border-t border-solid border-grey-200">
      {!isRichUtilsDisabled && BLOCK_TYPES.map((type, index) => (
        <TextAreaControlItem
          onClick={() => onBlockChange(type.style)}
          key={index}
          isActive={type.style === blockStyle}
        >{type.label}</TextAreaControlItem>
      ))}
      {!isRichUtilsDisabled && INLINE_STYLES.map((type, index) => (
        <TextAreaControlItem
          onClick={() => onInlineChange(type.style)}
          key={index}
          isActive={inlineStyle.includes(type.style)}
        >{type.label}</TextAreaControlItem>
      ))}
      {keywordList && keywordList.map(value => (
        <TextAreaControlItem
          key={value}
          onClick={() => onAddKeyword(value)}
          isActive={false}
        ><div className="px-2 center">{value}</div></TextAreaControlItem>
      ))}

    </div>
  )
}