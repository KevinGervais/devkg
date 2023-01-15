import { IS_DESKTOP } from "@/constants"

export class TabIndexHandler {
  private elemList: HTMLElement[] = []
  public update(ref: HTMLElement): number | undefined {
    if (IS_DESKTOP) {
      return undefined
    }
    if (!this.elemList.includes(ref)) {
      this.elemList.push(ref)
    }
    this.elemList = this.elemList.filter(item => item.isConnected)
    this.elemList.sort((a, b) => {
      const listA = this.getDomPosition(a, [])
      const listB = this.getDomPosition(b, [])
      if (listA.join(".") === listB.join(".")) {
        return 0
      }
      const len = Math.min(listA.length, listB.length)

      for (let i = 0; i < len; i++) {
        if (listA[i]! > listB[i]!) {
          return 1
        }

        if (listA[i]! < listB[i]!) {
          return -1
        }
      }

      if (listA.length > listB.length) {
        return 1
      }

      if (listA.length < listB.length) {
        return -1
      }

      return 0
    })
    this.elemList.forEach((item, i) => item.tabIndex = i + 1)
    return this.elemList.indexOf(ref) + 1
  }
  private getDomPosition(elem: HTMLElement, positionList: number[]): number[] {
    if (elem.parentElement === null) {
      return positionList
    } else {
      return this.getDomPosition(elem.parentElement, [
        [...elem.parentElement.children].indexOf(elem),
        ...positionList,
      ])
    }
  }
}

export const tabIndexHandler = new TabIndexHandler()