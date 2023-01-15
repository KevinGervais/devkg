import { AllCountryCodes, AllStates, AnyAddress, STATE_BY_STATE_CODE, generateId } from "shared"

import { SocketParams } from "@/classes/model"
import { HERE_API_KEY } from "@/constants"
import { throwError } from "@/functions"
import { getSay } from "@/functions/getSay"

export async function geocode({ body, send }: SocketParams<"addresses", "geocode">): Promise<void> {
  const nodeFetch = (url: string) => import("node-fetch").then(result => result.default(url))
  const {
    searchField,
    lat,
    lng,
    language
  } = body
  const say = getSay("fr")

  if (searchField) {
    const query1 = `https://autocomplete.search.hereapi.com/v1/autocomplete?apiKey=${HERE_API_KEY}&q=${encodeURIComponent(searchField)}&lang=${language}-CA&in=countryCode:CAN&limit=4`
    const response1 = await nodeFetch(query1)
    const json1: any = await response1.json()

    const arr: (AnyAddress | undefined)[] = await Promise.all((json1.items || []).map(async (result: any) => {
      const query2 = `https://geocode.search.hereapi.com/v1/geocode?apiKey=${HERE_API_KEY}&q=${encodeURIComponent(result.title)}&lang=${language}-CA&in=countryCode:CAN&limit=1`
      const response2 = await nodeFetch(query2)
      const json2: any = await response2.json()
      if (!json2.items || !json2.items[0]) {
        return undefined
      }
      const item = json2.items[0]
      const countryCode = (item.address.countryCode as string).toLowerCase() as AllCountryCodes
      const country = say[countryCode]
      if (countryCode === undefined || countryCode !== "can" || !item.address.city) {
        return undefined
      }
      const stateOrRegion = (STATE_BY_STATE_CODE.canada as any)[item.address.stateCode] as AllStates

      if (stateOrRegion === undefined) {
        return undefined
      }
      const address: AnyAddress = {
        _id: generateId(),
        address: item.address.label,
        streetNumber: item.address.houseNumber,
        streetName: item.address.street,
        city: item.address.city,
        stateOrRegion,
        stateCode: item.address.stateCode,
        postalCode: item.address.postalCode,
        country,
        countryCode: item.address.countryCode,
        lat: item.position.lat,
        lng: item.position.lng,
      }
      return address
    }))
    send(arr.filter(address => address !== undefined) as AnyAddress[])
  } else if (lat && lng) {
    const query = `https://revgeocode.search.hereapi.com/v1/revgeocode?apiKey=${HERE_API_KEY}&at=${lat},${lng}&lang=${language}-CA&limit=1`
    const response = await nodeFetch(query)
    const json: any = await response.json()
    const item = json.items[0]
    if (!json.items || !json.items[0]) {
      return undefined
    }
    const countryCode = (item.address.countryCode as string).toLowerCase() as AllCountryCodes
    const country = say[countryCode]
    if (countryCode === undefined || countryCode !== "can" || !item.address.city) {
      throwError("locationNotSupported")
    }
    const stateOrRegion = (STATE_BY_STATE_CODE.canada as any)[item.address.stateCode] as AllStates

    if (stateOrRegion === undefined) {
      throwError("locationNotSupported")
    }
    const address: AnyAddress = {
      _id: generateId(),
      address: item.address.label,
      streetNumber: item.address.houseNumber,
      streetName: item.address.street,
      city: item.address.city,
      stateOrRegion,
      stateCode: item.address.stateCode,
      postalCode: item.address.postalCode,
      country,
      countryCode: item.address.countryCode,
      lat: item.position.lat,
      lng: item.position.lng,
    }
    send([address])
  } else {
    throwError("accessDenied")
  }
}
