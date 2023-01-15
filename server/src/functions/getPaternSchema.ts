export function getPaternSchema(
  list: readonly string[],
): {
  type: "string",
  pattern: `[${string}]`
}
export function getPaternSchema(
  list: readonly string[],
  isNullable: true
): {
  type: "string",
  nullable: true,
  pattern: `[${string}]`
}
export function getPaternSchema(
  list: readonly string[],
  isNullable?: true
): {
  type: "string",
  nullable?: true,
  pattern: `[${string}]`
} {
  if (isNullable) {
    return {
      type: "string",
      nullable: true,
      pattern: `[${list.join("|")}]`
    } as any
  } else {
    return {
      type: "string",
      pattern: `[${list.join("|")}]`
    } as any
  }
}