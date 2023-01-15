import { AllRequests, PostalAddress } from "shared"

import { DbQueries } from "@/classes"
import { SocketParams } from "@/classes/model"
import { paramsToProjection, throwError } from "@/functions"
import { SocketState } from "@/model"
import { round } from "@turf/turf"

export async function getOne({ dbQueries, currentUser, body, send }: SocketParams<"addresses", "getOne">): Promise<void> {
  const {
    _id,
    params
  } = body

  let isError = await validateParams(body, dbQueries, currentUser)
  let isPublicCoords: boolean = false
  if (isError) {
    isError = await validateParams({
      ...body,
      params: (params || []).filter(param => !["lng", "lat"].includes(param))
    },
      dbQueries,
      currentUser
    )
    if (isError) {
      throwError("accessDenied")
    } else {
      isPublicCoords = true
    }
  }

  const address = await dbQueries.getOne("addresses", { _id }, paramsToProjection(params))
  if (!address) {
    throwError("dataDoesntExists")
  }

  if (isPublicCoords) {
    address.lat = round(address.lat, 2)
    address.lng = round(address.lng, 2)
  }
  send(address)
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
  body: AllRequests["addresses"]["getOne"]["params"],
  dbQueries: DbQueries,
  currentUser: SocketState["currentUser"]
): Promise<boolean> {
  const { _id, params } = body
  if (!params || params.find(param => !publicParams.includes(param))) {

    if (!currentUser) {
      return false
    }

    if (currentUser.role === "admin"
    ) {
      return true
    }
    return true
  } else {
    return false
  }
}