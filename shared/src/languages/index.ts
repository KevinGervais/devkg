import { en } from "./en"
import { fr } from "./fr"
import { AllLanguages, Say } from "./model"

export const LANGUAGE_LIST = ["en", "fr"] as const
export * from "./model"

export const allLanguages: { [key in AllLanguages]: Say } = {
  en,
  fr
}