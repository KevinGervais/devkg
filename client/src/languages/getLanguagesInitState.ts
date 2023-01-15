
import dayjs from "dayjs"

import { AllLanguages, allLanguages } from "@/shared"

import { getStorageItem } from "@/localStorage"

import { LanguagesState } from "./model"

export function getLanguagesInitState(): LanguagesState {
  let selectedLanguage = (getStorageItem("selectedLanguage") || navigator.language.split("-")[0]!) as AllLanguages
  if (!allLanguages[selectedLanguage as AllLanguages]) {
    selectedLanguage = "en"
  }
  dayjs.locale(selectedLanguage)
  return {
    selectedLanguage,
    say: allLanguages[selectedLanguage],
  }

}
