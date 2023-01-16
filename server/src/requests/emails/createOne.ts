import { User } from "shared"

import { SocketParams } from "@/classes/model"
import { sendEmail } from "@/emails/functions/sendEmail"
import { throwError } from "@/functions"

export async function createOne({ dbQueries, currentUser, body, send }: SocketParams<"emails", "createOne">): Promise<void> {
  const {
    subject,
    title,
    content,
    emailList,
  } = body

  if ((emailList.length > 1 || emailList[0] !== "info@kevingervais.herokuapp.com") && (!currentUser || currentUser.role !== "admin")) {
    throwError("accessDenied")
  }
  const userList = await dbQueries.getMany("users", {}) as User[]
  const userMap: { [key: string]: User } = userList.reduce((map, user) => ({ ...map, [user.email]: user }), {})
  await Promise.all(emailList.map(async email => {
    const user = userMap[email]
    if (user || email === "info@kevingervais.herokuapp.com") {

      return await sendEmail(
        email,
        "en",
        "custom",
        {
          title,
          subject,
          content,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          phone: user?.phone,
        }
      )
    }
  }))
  send(undefined)
}