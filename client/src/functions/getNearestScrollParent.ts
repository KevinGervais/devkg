export function getNearestScrollParent(node: HTMLElement | null): HTMLElement | null {
  if (node == null) {
    return null
  }
  if (node.scrollHeight > node.clientHeight) {
    if (node.nodeName === "HTML") {
      return window.document as unknown as HTMLElement
    } else {
      return node
    }
  }
  return getNearestScrollParent(node.parentNode as HTMLElement)
}