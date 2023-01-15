import CryptoJS from "crypto-js"

export function toAES(data: any, key: string): string | undefined {
  if (data === undefined) {
    return undefined
  }
  if (typeof data !== "string") {
    data = JSON.stringify(data)
  }
  return CryptoJS.AES.encrypt(data, key).toString()
}