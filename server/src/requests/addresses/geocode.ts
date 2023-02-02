import { AllCountryCodes, AllStateCodes, AllStates, AnyAddress, STATE_BY_STATE_CODE, generateId } from "shared"

import { SocketParams } from "@/classes/model"
import { handleHereRequest, throwError } from "@/functions"
import { getSay } from "@/functions/getSay"

export async function geocode({ body, send }: SocketParams<"addresses", "geocode">): Promise<void> {
  const {
    searchField,
    lat,
    lng,
    language
  } = body
  const say = getSay(language)

  if (searchField) {
    const autocompleteJson = await handleHereRequest("autocomplete", { searchField, language })

    const arr: (AnyAddress | undefined)[] = await Promise.all((autocompleteJson.items || []).map(async result => {
      const geocodeJson = await handleHereRequest("geocode", { searchField: result.title, language })
      if (!geocodeJson.items || !geocodeJson.items[0]) {
        return undefined
      }
      const item = geocodeJson.items[0]
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
        stateCode: item.address.stateCode as any,
        postalCode: item.address.postalCode,
        country,
        countryCode,
        lat: item.position.lat,
        lng: item.position.lng,
      }
      return address
    }))
    send(arr.filter(address => address !== undefined) as AnyAddress[])
  } else if (lat && lng) {
    const reverseGeocodeJson = await handleHereRequest("reverseGeocode", { lat, lng, language })

    const item = (reverseGeocodeJson.items || [])[0]
    if (!reverseGeocodeJson.items || !reverseGeocodeJson.items[0] || !item) {
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
      stateCode: item.address.stateCode.toUpperCase() as AllStateCodes,
      postalCode: item.address.postalCode,
      country,
      countryCode,
      lat: item.position.lat,
      lng: item.position.lng,
    }
    send([address])
  } else {
    throwError("accessDenied")
  }
}
