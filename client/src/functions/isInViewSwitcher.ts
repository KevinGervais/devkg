export function isInViewSwitcher(node: HTMLElement): boolean {
  if (node == null || node === undefined) {
    return false
  } else if (node.classList && node.classList.contains && node.classList.contains("view-switcher")) {
    return true
  }
  return isInViewSwitcher(node.parentNode as HTMLElement)
}