import { sendEmail } from "."

export async function sendErrorEmailToDev(title: string, error: string | any): Promise<any> {
  return sendEmail("kevin.gervais@tutanota.com", "fr", "custom", {
    subject: "DevKG Inc. fatal error",
    title,
    content: error ? error.toString() : ""
  })
}