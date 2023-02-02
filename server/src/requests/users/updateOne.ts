import { User, formatPhone } from "shared"

import { SocketParams } from "@/classes/model"
import { simplifyQuery, throwError, validateAddress, validatePhone, } from "@/functions"

import { updateOneCancelToken } from "./updateOneCancelToken"
import { updateOneEmail } from "./updateOneEmail"
import { updateOneForgotPassword } from "./updateOneForgotPassword"
import { updateOnePassword } from "./updateOnePassword"
import { updateOneToken } from "./updateOneToken"
import { updateOneValidateToken } from "./updateOneValidateToken"



export async function updateOne(params: SocketParams<"users", "updateOne">): Promise<void> {
  const { currentUser, body, send, refreshCurrentUser, mongodb } = params
  const {
    email,
    password,
    oldPassword,
    token,
    isResendingToken,
    isCancelToken,
    forgotPasswordEmail,
    firstName,
    lastName,
    phone,
    language
  } = body

  if (forgotPasswordEmail) {
    return updateOneForgotPassword(params)
  }

  if (!currentUser) {
    throwError("accessDenied")
  }
  if (token !== undefined) {
    return updateOneValidateToken(params)
  }
  if (isCancelToken) {
    return updateOneCancelToken(params)
  }

  if (isResendingToken) {
    return updateOneToken(params)
  }

  if (currentUser.emailToken) {
    throwError("verifCodeFirst")
  }

  if (password && email) {
    throwError("accessDenied")
  }

  if (email) {
    return updateOneEmail(params)

  }
  if (password || oldPassword) {
    return updateOnePassword(params)
  }

  const query: Partial<User> = simplifyQuery({
    firstName,
    lastName,
    phone,
    language
  })

  if (firstName || lastName) {
    query.fullName = `${firstName || currentUser.firstName} ${lastName || currentUser.lastName}`
  }

  if (phone) {
    validatePhone(phone)
    query.phone = formatPhone(phone)
    if (!query.phone) {
      throwError("invalidPhone")
    }
  }


  await mongodb.updateOne("users", { _id: currentUser._id }, { $set: query })
  send(undefined)
  await refreshCurrentUser()
}