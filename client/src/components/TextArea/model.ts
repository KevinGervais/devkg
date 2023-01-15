import { Editor, EditorState } from "draft-js"
import { ReactNode } from "react"

export interface TextAreaControlStyledProps {
  isActive: boolean
  isKeyword?: boolean
}

export interface TextAreaProps {
  value: string
  placeholder?: string
  isReadonly?: boolean
  isDynamicValue?: boolean
  className?: string
  isError?: boolean
  isRichUtilsDisabled?: boolean
  isHighlightDisabled?: boolean
  isUtilsDisabled?: boolean
  keywordList?: string[]
  getReloadFn?: (reloadFn: (newVal?: string) => void) => void
  onEnterKey?: () => void
  onChange?: (newHTML: string, newPlainText: string) => void
}

export interface TextAreaState {
  editorState: EditorState
  showURLInput: boolean
  urlValue: string
  isCollapsed: boolean
  isFocus: boolean
  isReseted: boolean
  highlightCoords: { right?: number, left?: number, top?: number }
  title: string
}

export interface TextAreaControlsProps {
  onBlockChange: (type: string) => void
  onInlineChange: (type: string) => void
  onAddKeyword: (value: string) => void
  isRichUtilsDisabled?: boolean
  isHighlightDisabled?: boolean
  keywordList?: string[]
  blockStyle: string
  inlineStyle: string[]
}


export interface TextAreaControlItemProps {
  children: ReactNode,
  isActive: boolean,
  onClick: () => void
}
export interface TextAreaStyledProps {
  isReadonly?: boolean
}