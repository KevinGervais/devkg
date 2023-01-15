import { EditorState } from "draft-js"
import { stateFromHTML } from "draft-js-import-html"

export function htmlStringToPlainText(htmlString: string): string {
  return EditorState
    .createWithContent(stateFromHTML(htmlString))
    .getCurrentContent()
    .getPlainText()
}