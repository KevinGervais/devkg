import { AllRequests, PostalAddress } from "shared"

import { DbQueries } from "@/classes"
import { SocketParams } from "@/classes/model"
import { paramsToProjection, throwError } from "@/functions"
import { SocketState } from "@/model"
import { round } from "@turf/turf"

export async function getMany({ dbQueries, currentUser, body, send }: SocketParams<"addresses", "getMany">): Promise<void> {
  const {
    idList,
    params
  } = body
  let isError = await validateParams(body, dbQueries, params, currentUser)
  let isPublicCoords: boolean = false
  if (isError) {
    isError = await validateParams(body, dbQueries, (params || []).filter(param => !["lng", "lat"].includes(param)), currentUser)
    if (isError) {
      throwError("accessDenied")
    } else {
      isPublicCoords = true
    }
  }

  let addressList = await dbQueries.getMany("addresses", { _id: { $in: idList } }, paramsToProjection(params))

  if (isPublicCoords && params && params.includes("lat") && params.includes("lng")) {
    addressList = addressList.map(address => {
      address.lat = round(address.lat, 2)
      address.lng = round(address.lng, 2)
      return address
    })
  }
  send(addressList)
}

const publicParams: (keyof PostalAddress)[] = [
  "_id",
  "city",
  "stateOrRegion",
  "stateCode",
  "postalCode",
  "country",
  "countryCode",
]

async function validateParams(
  body: AllRequests["addresses"]["getMany"]["params"],
  dbQueries: DbQueries,
  params: (keyof PostalAddress)[] | undefined,
  currentUser: SocketState["currentUser"]
): Promise<boolean> {
  const { idList } = body
  if (!params || params.find(param => !publicParams.includes(param))) {


    if (!currentUser) {
      return false
    }

    if (
      currentUser.role === "admin"
    ) {
      return true
    }
    return true
  } else {
    return false
  }
}