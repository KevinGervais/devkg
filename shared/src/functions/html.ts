export function html(...args: any[]): string {
  const stringList: string[] = args[0]
  const paramList: string[] = args.slice(1)
  return stringList.map((str, index) => `${str}${paramList[index] || ""}`).join("")
}
