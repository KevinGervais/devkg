export function formatDay(inputValue: string): string {
  const inputVal = inputValue.split(/[^0-9]/).join("")
  const year = inputVal.slice(0, 4)
  const month = inputVal.slice(4, 6)
  const day = inputVal.slice(6, 8)
  if (day) {
    return `${year}-${month}-${day}`
  } else if (month) {
    return `${year}-${month}`
  } else {
    return year
  }
}