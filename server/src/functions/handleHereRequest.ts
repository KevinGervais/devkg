import nodeFetch from "node-fetch"
import { AllLanguages } from "shared"

import { HERE_API_KEY } from "@/constants"
import { sendErrorEmailToDev } from "@/emails/functions"

type AllTypes = "geocode" | "autocomplete" | "reverseGeocode"
export async function handleHereRequest<Type extends AllTypes>(
  type: Type,
  query: Type extends "reverseGeocode" ? {
    lat: number,
    lng: number,
    language: AllLanguages
  } : Type extends "geocode" | "autocomplete" ? {
    searchField: string
    language: AllLanguages
  } : never
): Promise<{
  items?:
  {
    title: string,
    id: string,
    language: string,
    politicalView: string,
    resultType: string,
    houseNumberType: string,
    localityType: string,
    administrativeAreaType: string,
    address: {
      label: string,
      countryCode: string,
      countryName: string,
      stateCode: string,
      state: string,
      countyCode: string,
      county: string,
      city: string,
      district: string,
      subdistrict: string,
      street: string,
      block: string,
      subblock: string,
      postalCode: string,
      houseNumber: string,
      building: string
    },
    position: Type extends "geocode" | "reverseGeocode" ? {
      lat: number,
      lng: number
    } : Type extends "autocomplete" ? undefined : undefined,
    distance: number,
    streetInfo: [
      {
        baseName: string,
        streetType: string,
        streetTypePrecedes: true,
        streetTypeAttached: true,
        prefix: string,
        suffix: string,
        direction: string,
        language: string
      }
    ]
  }[]
}> {
  const urlMap: { [type in AllTypes]: string } = {
    geocode: `https://geocode.search.hereapi.com/v1/geocode?apiKey=${HERE_API_KEY}&q=${encodeURIComponent((query as any).searchField)}&lang=${query.language}-CA&in=countryCode:CAN&limit=1`,
    autocomplete: `https://autocomplete.search.hereapi.com/v1/autocomplete?apiKey=${HERE_API_KEY}&q=${encodeURIComponent((query as any).searchField)}&lang=${query.language}-CA&in=countryCode:CAN&limit=4`,
    reverseGeocode: `https://revgeocode.search.hereapi.com/v1/revgeocode?apiKey=${HERE_API_KEY}&at=${(query as any).lat},${(query as any).lng}&lang=${query.language}-CA&limit=1`
  }
  const response = await nodeFetch(urlMap[type]).catch(err => {
    sendErrorEmailToDev(`Here.com ${type} response crash`, err)
    throw new Error(err)
  })
  if (!response.ok) {
    sendErrorEmailToDev(`Here.com ${type} response error`, `${response.status}: ${response.statusText}`)
    throw new Error(`Here.com ${type} response error ${response.status} ${response.statusText}`)
  }
  const json = await response.json().catch(err => {
    sendErrorEmailToDev(`Here.com ${type} json crash`, err)
    throw new Error(`Here.com ${type} json crash`)
  })
  return json
}