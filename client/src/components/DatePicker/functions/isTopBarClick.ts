export function isDayPickerTopBar(node: Element | null): boolean {
  if (!node) {
    return false
  } else if (node.classList.contains("DayPicker-Caption") || node.classList.contains("DayPicker-NavBar")) {
    return true
  } else {
    return isDayPickerTopBar(node.parentElement)
  }
}