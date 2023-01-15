import CryptoJS from "crypto-js"
export function fromAES(data: string | undefined, key: string, errorCallback: () => void, isBypassParsing?: boolean): any {
  if (data === undefined) {
    return undefined
  }
  try {
    const decryptedString = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8)
    if (isBypassParsing) {
      return decryptedString
    }
    try {
      return JSON.parse(decryptedString)
    } catch (err) {
      return decryptedString
    }
  } catch (err) {
    errorCallback()
  }
}