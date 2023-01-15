export function isDatePickerParent(
  node: HTMLElement | null
): boolean {
  if (node == null) {
    return false
  } else if (node.id === "date-picker-layout") {
    return true
  } else {
    return isDatePickerParent(node.parentElement as HTMLElement)
  }
}