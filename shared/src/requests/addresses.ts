
import { RequestContent, RequestData } from "."
import { AllCountryCodes, AllStateCodes, AllStates, LanguageParams, Remove } from ".."

export interface PostalAddress {
  _id: string
  address: string
  streetNumber?: string
  streetName: string
  streetExt?: string
  city: string
  stateOrRegion: AllStates
  stateCode: AllStateCodes
  postalCode: string
  country: string
  countryCode: AllCountryCodes
  lat: number
  lng: number
}

export type AnyAddress = (Remove<PostalAddress, "streetNumber" | "streetName"> & Partial<Pick<PostalAddress, "streetNumber" | "streetName">>)

export type AddressRequests = RequestContent<{
  getOne: RequestData<
    Pick<PostalAddress, "_id"> & { params?: (keyof PostalAddress)[] },
    Partial<PostalAddress>
  >
  getMany: RequestData<
    { idList: string[], params?: (keyof PostalAddress)[] },
    Partial<PostalAddress>[]
  >
  geocode: RequestData<
    Partial<{ searchField: string } & Pick<PostalAddress, "lat" | "lng">> & LanguageParams,
    AnyAddress[]
  >
}>