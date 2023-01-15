import { LANGUAGE_LIST } from "."
import { AllStates } from "../index"
import { en } from "./en"

export type Say = {
  [key in SayKeywords]: typeof en[key] extends string ? string : typeof en[key]
}

// tslint:disable-next-line:ban-types
export type SayKeywordStrings = { [Key in SayKeywords]: Say[Key] extends Function ? never : Key }[SayKeywords]
type ExtendedSay = {
  [key in (
    ErrorMessages
    | AllStates
  )]: string
}
export interface EnSay extends ExtendedSay {
  [key: string]: any
}

export type SayKeywords = keyof typeof en
export interface LanguageParams {
  language: AllLanguages
}


export type AllLanguages = typeof LANGUAGE_LIST[number]

export type ErrorMessages =
  "userAlreadyLogged"
  | "userDoesntExists"
  | "wrongPassword"
  | "userAlreadyExists"
  | "commerceAlreadyExists"
  | "accessDenied"
  | "wrongFileSize"
  | "dataDoesntExists"
  | "wrongNewPassword"
  | "invalidValidator"
  | "invalidEmail"
  | "corruptedData"
  | "locationNotSupported"
  | "invalidLocation"
  | "invalidPhone"
  | "invalidPrice"
  | "invalidDate"
  | "internalServerError"
  | "verifCodeFirst"
  | "wrongToken"
  | "deleteCommerceFirst"
  | "finishPurchaseFirst"
  | "maxDateLimitReached"
  | "tooSoonToInvoice"
  | "paymentProcessFailed"
  | "paypalNotLinkedToUser"
  | "imagesRequired"
  | "tryAgain"