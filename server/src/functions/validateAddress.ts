import { AllCountryCodes, AllLanguages, PostalAddress, addressToString, generateId } from "shared"

import { DbQueries } from "@/classes"
import { HERE_API_KEY } from "@/constants"

import { getSay } from "./getSay"
import { throwError } from "./throwError"

export async function validateAddress(address: PostalAddress, language: AllLanguages, dbQueries: DbQueries): Promise<PostalAddress> | never {
  const nodeFetch = (url: string, init?: RequestInit) => import("node-fetch").then(result => result.default(url, init as any))
  address.address = addressToString(address)
  const query = `https://geocode.search.hereapi.com/v1/geocode?apiKey=${HERE_API_KEY}&q=${encodeURIComponent(address.address)}&lang=${language}-CA&in=countryCode:CAN&limit=1`
  const response = await nodeFetch(query)
  const json: any = await response.json()
  const item = json.items[0]
  if (!item || item.resultType !== "houseNumber") {
    throwError("invalidLocation")
  }
  address.lat = item.position.lat
  address.lng = item.position.lng
  const existingAddress = await dbQueries.getOne("addresses", { _id: address._id })
  if (existingAddress && existingAddress.address !== address.address) {
    address._id = generateId()
  }
  const say = getSay("fr")
  const country = say[(item.address.countryCode as string).toLowerCase() as AllCountryCodes]
  if (country === undefined || country !== "canada") {
    throwError("invalidLocation")
  }
  return address as PostalAddress
}