import { Editor, EditorState, Modifier, RichUtils, getDefaultKeyBinding } from "draft-js"
import { stateToHTML } from "draft-js-export-html"
import { stateFromHTML } from "draft-js-import-html"
import "draft-js/dist/Draft.css"
import React from "react"

import { tw } from "@/shared"

import { tabIndexHandler } from "@/classes/TabIndexHandler"
import { IS_CORDOVA, IS_DESKTOP, OS } from "@/constants"
import { getNearestScrollParent, isInViewSwitcher, } from "@/functions"
import { getReduxState, setReduxState } from "@/redux"

import { TextAreaControls } from "./TextAreaControls"
import { TextAreaStyled } from "./TextAreaStyled"
import { TextAreaProps, TextAreaState } from "./model"

export class TextArea extends React.Component<TextAreaProps, TextAreaState> {
  editorRef: Editor | null = null
  oldHtml: string
  INITIAL_VALUE: string = "<p><br></p>"
  constructor(props: TextAreaProps) {
    super(props)
    const value = this.props.value || this.INITIAL_VALUE
    this.oldHtml = value
    this.state = {
      editorState: EditorState.createWithContent(stateFromHTML(value)),
      showURLInput: false,
      urlValue: "",
      isCollapsed: true,
      highlightCoords: {},
      isFocus: false,
      isReseted: false,
      title: ""
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.reloadFn = this.reloadFn.bind(this)

    if (props.getReloadFn) {
      props.getReloadFn(this.reloadFn)
    }
  }

  componentDidMount(): void {
    document.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount(): void {
    document.removeEventListener("scroll", this.handleScroll)
  }

  removeSelectedBlocksStyle(editorState: EditorState): EditorState {
    const newContentState = RichUtils.tryToRemoveBlockStyle(editorState)
    if (newContentState) {
      return EditorState.push(editorState, newContentState, "change-block-type")
    }
    return editorState
  }

  getResetEditorState(editorState: EditorState): EditorState {
    const blocks = editorState
      .getCurrentContent()
      .getBlockMap()
      .toList()
    const updatedSelection = editorState.getSelection().merge({
      anchorKey: blocks.first().get("key"),
      anchorOffset: 0,
      focusKey: blocks.last().get("key"),
      focusOffset: blocks.last().getLength(),
    })
    const newContentState = Modifier.removeRange(
      editorState.getCurrentContent(),
      updatedSelection,
      "forward"
    )

    const newState = EditorState.push(editorState, newContentState, "remove-range")
    return this.removeSelectedBlocksStyle(newState)
  }
  onChange = (editorState: EditorState): void => {
    const { onChange } = this.props
    const { isFocus } = this.state
    const isCollapsed = editorState.getSelection().isCollapsed()
    const html = stateToHTML(editorState.getCurrentContent())
    const plainText = editorState.getCurrentContent().getPlainText()
    if (!plainText) {
      this.setState({
        editorState: this.getResetEditorState(editorState),
        isCollapsed: true,
        isReseted: OS === "android"
      })
    } else {
      this.setState({ editorState, isCollapsed }, () => {
        if (!isFocus) {
          this.editorRef?.focus()
        }
        this.setState({ highlightCoords: this.getSelectionCoords() })
      })
    }
    if (onChange) {
      onChange(html, plainText)
    }
  }

  handleScroll = (): void => {
    if (!this.state.isCollapsed) {
      this.setState({ highlightCoords: this.getSelectionCoords() })
    }
  }

  handleKeyCommand = (command: string): "handled" | "not-handled" => {
    const { editorState } = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return "handled"
    }
    return "not-handled"
  }

  getSelectionCoords(): { right?: number, left?: number, top?: number } {
    const win = window
    const doc = win.document as any
    let sel = doc.selection
    let range
    let rects
    let rect
    let x = 0
    let y = 0
    if (sel) {
      if (sel.type !== "Control") {
        range = sel.createRange()
        range.collapse(true)
        x = Number(range.boundingLeft)
        y = Number(range.boundingTop)
      }
    } else if (win.getSelection) {
      sel = win.getSelection()
      if (sel.rangeCount) {
        range = sel.getRangeAt(0).cloneRange()
        if (range.getClientRects) {
          range.collapse(true)
          rects = range.getClientRects()
          if (rects.length > 0) {
            rect = rects[0]
          }
          if (!rect) {
            return {}
          }
          x = Number(rect.left)
          y = Number(rect.top)
        }
        if (x === 0 && y === 0) {
          const span0 = doc.createElement("span")
          const span1 = doc.createElement("span")
          if (span0.getClientRects) {
            span0.appendChild(doc.createTextNode("\u200b"))
            span1.appendChild(doc.createTextNode("\u200b"))
            range.insertNode(span0)
            rect = span0.getClientRects()[0]
            x = rect.left
            y = rect.top
            const spanParent = span0.parentNode
            spanParent.removeChild(span0)

            spanParent.normalize()
          }
        }
      }
    }
    if (x + 400 > (window.visualViewport?.width || window.innerWidth)) {
      return {
        right: 40, top: y - 40
      }
    }
    return {
      left: x, top: y - 40
    }
  }
  componentDidUpdate(oldProps: TextAreaProps, oldState: TextAreaState): void {
    if (oldProps.value !== this.props.value && this.props.isDynamicValue) {
      this.reloadFn(this.props.value)
    }
    if (oldState.isReseted === false && this.state.isReseted === true) {
      this.setState({ isReseted: false })
    }
  }
  reloadFn(newValue?: string): void {
    if (newValue) {
      const state = stateFromHTML(newValue)
      const eState = EditorState.createWithContent(state)
      this.setState({
        editorState: eState,
        showURLInput: false,
        urlValue: "",
        isCollapsed: true
      })

    } else {
      const { editorState } = this.state
      this.setState({
        editorState: this.getResetEditorState(editorState),
        isCollapsed: true,
      })
    }
  }

  render(): JSX.Element | null {
    const { editorState, isFocus, isReseted } = this.state
    if (isReseted) {
      return null
    }
    const { isReadonly, isError, isUtilsDisabled, keywordList, isRichUtilsDisabled, isHighlightDisabled, onEnterKey, className } = this.props
    const hasText = editorState.getCurrentContent().hasText()
    const selection = editorState.getSelection()

    const blockStyle = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType()
    const inlineStyle = editorState.getCurrentInlineStyle().toArray()
    return (
      <TextAreaStyled
        isReadonly={isReadonly}
        className={tw`
        ${className}
        textarea
        col
        bh-white
        rounded-lg

        ${isReadonly && "in-span:text-grey-700"}
        ${!isReadonly && "border border-solid border-grey-200 hover:border-secondary-500 focus-within:!border-primary-500"}
        ${isError ? "border border-solid border-error-500" : ""}`}
      >
        <div
          className={tw`textarea-content overflow-hidden ${!isReadonly && "min-h-[100px] p-3"}`}
          onClick={() => this.editorRef?.focus()}
          onMouseEnter={() => !getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: true })}
          onMouseLeave={() => getReduxState().ui.isDragHover && setReduxState("ui", { isDragHover: false })}
        >
          <Editor
            readOnly={isReadonly}
            ref={ref => {
              this.editorRef = ref
              if (this.editorRef?.editorContainer) {
                const editable = this.editorRef?.editorContainer?.querySelector(".public-DraftEditor-content")
                if (editable) {
                  tabIndexHandler.update(editable as HTMLElement)
                }
              }
            }}
            blockStyleFn={block => block.getType() === "blockquote" ? "RichEditor-blockquote" : ""}
            editorState={editorState}
            placeholder={(isFocus || hasText) ? undefined : this.props.placeholder}
            spellCheck={true}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            onBlur={() => this.setState({ isFocus: false })}
            onFocus={() => {
              this.setState({ isFocus: true })
              if (!IS_DESKTOP) {
                window.setTimeout(() => {
                  const elem: HTMLDivElement = (this.editorRef as any).editor
                  const { y, height } = elem.getBoundingClientRect()
                  if (y < 0 || y + height > (getReduxState().ui.vh || 0)) {
                    if (isInViewSwitcher(elem)) {
                      const scrollElem = getNearestScrollParent(elem)
                      if (scrollElem) {
                        scrollElem.scrollTop = y + height
                      }
                    } else {
                      elem.scrollIntoView({ block: "center", behavior: "smooth" })
                    }
                  }
                }, 200)
              }
            }
            }
            keyBindingFn={evt => {
              if (evt.key === "Enter" && (evt.shiftKey || IS_CORDOVA)) {
                const newState = EditorState.push(
                  editorState,
                  Modifier.insertText(
                    this.state.editorState.getCurrentContent(),
                    this.state.editorState.getSelection(),
                    "\n"
                  ),
                  "insert-fragment"
                )
                this.onChange(newState)
                return null
              } else if (evt.key === "Enter" && !evt.shiftKey && onEnterKey) {
                onEnterKey()
                return null
              } else {
                return getDefaultKeyBinding(evt)
              }
            }}
            customStyleMap={{
              SUPERSCRIPT: {
                verticalAlign: "super"
              },
              SUBSCRIPT: {
                verticalAlign: "sub"
              },
              MARK: {
                backgroundColor: "yellow"
              }
            }}
          />
        </div>
        {!isReadonly && !isUtilsDisabled && (
          <>
            <TextAreaControls
              keywordList={keywordList}
              blockStyle={blockStyle}
              inlineStyle={inlineStyle}
              isRichUtilsDisabled={isRichUtilsDisabled}
              isHighlightDisabled={isHighlightDisabled}
              onBlockChange={newBlockStyle => {
                this.onChange(
                  RichUtils.toggleBlockType(
                    this.state.editorState,
                    newBlockStyle
                  )
                )
              }}
              onInlineChange={newInlineStyle => {
                this.onChange(
                  RichUtils.toggleInlineStyle(
                    this.state.editorState,
                    newInlineStyle
                  )
                )
              }}
              onAddKeyword={keyword => {
                const newState = EditorState.push(
                  editorState,
                  Modifier.insertText(
                    this.state.editorState.getCurrentContent(),
                    this.state.editorState.getSelection(),
                    `\${${keyword}}`
                  ),
                  "insert-fragment"
                )
                this.onChange(newState)
              }}
            />
          </>
        )
        }
      </TextAreaStyled>
    )
  }
}
