
import { useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"
import { PageTw } from "@/styles/PageTw"

import en from "./en"
import fr from "./fr"

const languageMap = {
  en,
  fr
}
export function Terms(): JSX.Element {
  const { selectedLanguage } = useReduxState((state: ReduxState) => ({
    selectedLanguage: state.languages.selectedLanguage
  }))
  return (
    <div className={PageTw}>
      <div>{languageMap[selectedLanguage] || en}</div>
    </div>
  )
}
