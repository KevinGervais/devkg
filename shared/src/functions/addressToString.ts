import { AnyAddress, OptionalId, allLanguages } from ".."

export function addressToString(address: OptionalId<AnyAddress>): string {
  const isStreet = address.streetNumber || address.streetName || address.streetExt
  return `${address.streetNumber ? `${address.streetNumber} ` : ""}${address.streetName ? `${address.streetName} ` : ""}${address.streetExt ? ` ${address.streetExt.trim()}` : ""}${isStreet ? ", " : ""}${address.city}, ${address.stateCode} ${address.postalCode}, ${allLanguages.fr[address.countryCode]}`
}