export function getScrollParents(
  scrollParents: Element[],
  node: Element | null
): Element[] {
  if (node == null) {
    return scrollParents
  }
  if (node.scrollHeight > node.clientHeight) {
    if (node.nodeName === "HTML") {
      scrollParents.push(window.document as unknown as Element)
    } else {
      scrollParents.push(node)
    }
  }
  return getScrollParents(scrollParents, node.parentNode as Element)
}