import dayjs from "dayjs"

import { getReduxState } from "@/redux"
export function formatDate(date: string, type?: string): string {
  const { selectedLanguage, say } = getReduxState().languages
  const mDate: dayjs.Dayjs = dayjs(date, type)
  if (dayjs().format("YYYY/MM/DD") === mDate.format("YYYY/MM/DD")) {
    return say.today
  }

  const languageMap: { [lang: string]: string } = {
    en: "MMMM D, YYYY",
    fr: "D MMMM YYYY"
  }
  return mDate.format(languageMap[selectedLanguage])
}
