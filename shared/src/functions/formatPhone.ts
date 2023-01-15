export function formatPhone(str: string): string | undefined {
  const [phoneNum, ext] = str.split("#").map(val => val.replace(/\D/g, ""))
  if (!phoneNum) {
    return undefined
  }
  const match = phoneNum.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)

  if (match) {
    return `(${match[2]}) ${match[3]}-${match[4]}${ext ? ` #${ext}` : ""}`
  }

  return undefined
}
