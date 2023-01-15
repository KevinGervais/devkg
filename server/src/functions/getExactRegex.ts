export function getExactRegex(regex: RegExp): RegExp {
  return new RegExp(`^${regex.source}$`, regex.flags)
}