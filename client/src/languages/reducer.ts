import dayjs from "dayjs"

import { allLanguages } from "@/shared"

import { updateOneUser } from "@/api/requests"
import { LanguagesState } from "@/languages/model"
import { setStorageItem } from "@/localStorage"

import { ReduxState, SetAction } from "../redux/model"


export const languages = (currentState: LanguagesState, action: SetAction<"languages">, globalState?: ReduxState) => {
  const data = { ...action.data }
  if (data.selectedLanguage) {
    dayjs.locale(data.selectedLanguage)

    data.say = allLanguages[data.selectedLanguage]
    setStorageItem("selectedLanguage", data.selectedLanguage)
    if (globalState?.users.currentUser) {
      window.setTimeout(() => {
        updateOneUser({
          language: data.selectedLanguage
        })
      })
    }
  }
  return {
    ...currentState,
    ...data,
  }
}