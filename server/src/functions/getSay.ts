import { AllLanguages, Say, allLanguages } from "shared"

export function getSay(language?: AllLanguages): Say {
  return allLanguages[language!] || allLanguages.en
}