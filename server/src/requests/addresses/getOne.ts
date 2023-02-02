import { AllRequests, PostalAddress } from "shared"

import { Mongodb } from "@/classes"
import { SocketParams } from "@/classes/model"
import { paramsToProjection, throwError } from "@/functions"
import { SocketState } from "@/model"
import { round } from "@turf/turf"

export async function getOne({ mongodb, currentUser, body, send }: SocketParams<"addresses", "getOne">): Promise<void> {
  const {
    _id,
    params
  } = body

  let isError = await validateParams(body, mongodb, currentUser)
  let isPublicCoords: boolean = false
  if (isError) {
    isError = await validateParams({
      ...body,
      params: (params || []).filter(param => !["lng", "lat"].includes(param))
    },
      mongodb,
      currentUser
    )
    if (isError) {
      throwError("accessDenied")
    } else {
      isPublicCoords = true
    }
  }

  const address = await mongodb.getOne("addresses", { _id }, paramsToProjection(params))
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
  mongodb: Mongodb,
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