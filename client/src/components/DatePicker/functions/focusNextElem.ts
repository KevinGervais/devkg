export function focusNextElem(id: string): void {
  window.setTimeout(() => {
    const toInput = document.getElementById(id) as HTMLInputElement | null
    toInput?.click()
  }, 30)
}