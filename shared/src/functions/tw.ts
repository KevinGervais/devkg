export function tw(...args: any[]): string {
  const stringList: string[] = args[0]
  const paramList: string[] = args.slice(1)
  const stringWithParams = stringList.map((str, index) => `${str}${paramList[index] || ""}`).join("")
  return stringWithParams.split(/\s+/).join(" ").split("\n").join(" ").split("undefined").join("").trim()
}
