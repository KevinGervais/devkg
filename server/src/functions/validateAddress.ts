import { AllCountryCodes, AllLanguages, PostalAddress, addressToString, generateId } from "shared"

import { Mongodb } from "@/classes"

import { handleHereRequest } from "./handleHereRequest"
import { throwError } from "./throwError"

export async function validateAddress(address: PostalAddress, language: AllLanguages, mongodb: Mongodb): Promise<PostalAddress> | never {
  address.address = addressToString(address)
  const response = await handleHereRequest("geocode", { searchField: address.address, language })
  const item = (response.items || [])[0]
  if (!item || item.resultType !== "houseNumber") {
    console.log(item?.resultType)
    throwError("invalidLocation")
  }
  address.lat = item.position.lat
  address.lng = item.position.lng
  const existingAddress = await mongodb.getOne("addresses", { _id: address._id })
  if (existingAddress && existingAddress.address !== address.address) {
    address._id = generateId()
  }
  const countryCode = (item.address.countryCode as string).toLowerCase() as AllCountryCodes
  if (countryCode === undefined || countryCode !== "can") {
    throwError("invalidLocation")
  }
  return address as PostalAddress
}