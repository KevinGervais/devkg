import deepl from "deepl"
import { AllLanguages, LANGUAGE_LIST } from "shared"

export async function getAllTranslations(text: string, language: AllLanguages): Promise<{ [lang in AllLanguages]: string }> {
  const output: { [lang in AllLanguages]: string } = {
    en: "",
    fr: ""
  }
  try {
    const targetLang: AllLanguages = language === "fr" ? "en" : "fr"
    const response = await deepl({
      free_api: true,
      auth_key: "",
      target_lang: targetLang.toUpperCase() as `${Uppercase<AllLanguages>}`,
      text,
    })
    if (response.data.translations[0]) {
      const { detected_source_language: source, text: targetText } = response.data.translations[0]!
      const sourceLang = source.slice(0, 2).toLowerCase()
      const isValidSource = LANGUAGE_LIST.includes(sourceLang as AllLanguages)

      if (isValidSource) {
        output[sourceLang as AllLanguages] = text
      }
      if (targetLang !== sourceLang) {
        output[targetLang] = targetText
      }

      if (!isValidSource || targetLang === sourceLang) {
        const altTargetLang: AllLanguages = targetLang === "en" ? "fr" : "en"
        const altResponse = await deepl({
          free_api: true,
          auth_key: "",
          target_lang: altTargetLang.toUpperCase() as `${Uppercase<AllLanguages>}`,
          text,
        })
        if (altResponse.data.translations[0]) {
          const { text: altTargetText } = response.data.translations[0]!
          output[altTargetLang] = altTargetText
        }
      }
    }
  } catch (err) {
    //
  }
  if (!output.en) {
    output.en = text
  }
  if (!output.fr) {
    output.fr = text
  }
  return output
}