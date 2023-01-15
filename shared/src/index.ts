import dayjs from "dayjs"
import dayOfYear from "dayjs/plugin/dayOfYear"
import duration from "dayjs/plugin/duration"
import isBetween from "dayjs/plugin/isBetween"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isToday from "dayjs/plugin/isToday"
import isTomorrow from "dayjs/plugin/isTomorrow"
import isYesterday from "dayjs/plugin/isYesterday"
import objectSupport from "dayjs/plugin/objectSupport"
import pluralGetSet from "dayjs/plugin/pluralGetSet"
import relativeTime from "dayjs/plugin/relativeTime"
import weekOfYear from "dayjs/plugin/weekOfYear"
import weekday from "dayjs/plugin/weekday"

dayjs.extend(dayOfYear)
dayjs.extend(duration)
dayjs.extend(isBetween)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(isYesterday)
dayjs.extend(objectSupport)
dayjs.extend(pluralGetSet)
dayjs.extend(relativeTime)
dayjs.extend(weekOfYear)
dayjs.extend(weekday)

export * from "./constants"
export * from "./functions"
export * from "./languages"
export * from "./requests"
export * from "./ui"


export type ValueOf<T> = T[keyof T]
export type ValueOfStr<T> = T[keyof T] extends string ? T[keyof T] : never
export type KeysOfUnion<T> = T extends T ? keyof T : never
export type ValuesOfOfUnion<T> = T extends T ? T[keyof T] : never
export type OptionalId<T> = Omit<T, "_id"> & { _id?: string }
export type Optional<T, K extends keyof T> = Remove<T, K> & { [key in K]?: T[key] }
export type SomeRequired<T, K extends keyof T> = Partial<Remove<T, K>> & { [key in K]: T[key] }
export type Args<T> = T extends (...args: infer U) => any ? U : never
export type Remove<T, K extends keyof T> = Omit<T, K>
export type RequiredKeys<T> = { [K in keyof T]-?:
  ({} extends { [P in K]: T[K] } ? never : K)
}[keyof T]

export type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

export type HtmlString = { html: string, plainText: string }
export type AllNotificationTemplates =
  | "updateCommerce"
