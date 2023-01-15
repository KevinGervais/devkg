import { PublicFile, tw } from "@/shared"

import { throttle, } from "@/functions"


export function onImageDrag({
  evt,
  index,
  imageList,
  onChange
}: {
  evt: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>,
  index: number,
  imageList: PublicFile[],
  onChange: (newList: any[]) => void
}): void {
  const rect = (evt.target as HTMLElement).getBoundingClientRect()
  const elem = window.document.createElement("img")
  elem.className = tw`
    fixed
    w-24
    h-24
    opacity-0
    z-[100000000]
    pointer-events-none
    touch-none
    rounded-lg
    object-cover
    object-center
    shadow-1
  `
  elem.src = imageList[index]!.data
  const mouseEvt = evt as React.MouseEvent<HTMLDivElement, MouseEvent>
  const touchEvt = evt as React.TouchEvent<HTMLDivElement>
  const initPosX = mouseEvt.clientX || ((touchEvt.touches || [])[0] || (touchEvt.changedTouches || [])[0])?.pageX
  const initPosY = mouseEvt.clientY || ((touchEvt.touches || [])[0] || (touchEvt.changedTouches || [])[0])?.pageY
  if (!initPosX || !initPosY) {
    return
  }
  elem.style.top = `${initPosY - (initPosY - rect.top)}px`
  elem.style.left = `${initPosX - (initPosX - rect.left)}px`
  window.document.body.append(elem)
  function getImgItem(htmlElem: HTMLElement | null): HTMLElement | null {
    if (htmlElem === null) {
      return null
    } else if (htmlElem.classList.contains("managed-image")) {
      return htmlElem
    } else {
      return getImgItem(htmlElem.parentElement as HTMLElement)
    }
  }
  function onGrab(moveEvt: MouseEvent | TouchEvent): void {
    window.document.body.classList.add("grabbing")
    const mouseGrabEvt = moveEvt as MouseEvent
    const touchGrabEvt = moveEvt as TouchEvent
    const posX = mouseGrabEvt.clientX || ((touchGrabEvt.touches || [])[0] || (touchGrabEvt.changedTouches || [])[0])?.pageX
    const posY = mouseGrabEvt.clientY || ((touchGrabEvt.touches || [])[0] || (touchGrabEvt.changedTouches || [])[0])?.pageY
    if (posX && posY) {
      elem.classList.remove("opacity-0")
      elem.style.top = `${posY - (initPosY! - rect.top)}px`
      elem.style.left = `${posX - (initPosX! - rect.left)}px`
    }
  }

  const onGrabThrottled = throttle(onGrab, 30)


  function onDrop(dropEvt: MouseEvent | TouchEvent): void {
    window.removeEventListener("mousemove", onGrabThrottled)
    window.removeEventListener("touchmove", onGrabThrottled)
    window.removeEventListener("mouseup", onDrop)
    window.removeEventListener("touchend", onDrop)
    window.document.body.classList.remove("grabbing")
    window.document.body.removeChild(elem)
    const touchDropEvt = dropEvt as TouchEvent
    let target: HTMLElement | null
    if (touchDropEvt.touches) {
      const posX = ((touchDropEvt.touches || [])[0] || (touchDropEvt.changedTouches || [])[0])?.pageX
      const posY = ((touchDropEvt.touches || [])[0] || (touchDropEvt.changedTouches || [])[0])?.pageY
      target = getImgItem(document.elementFromPoint(posX!, posY!) as HTMLElement)
    } else {
      target = getImgItem(dropEvt.target as HTMLElement)
    }


    const grabIndex = target === null ? index : Number(target.getAttribute("data-index"))
    const newImageList = [...imageList]
    newImageList.splice(grabIndex < index ? grabIndex : grabIndex + 1, 0, newImageList[index]!)
    newImageList.splice(index < grabIndex ? index : index + 1, 1)
    onChange(newImageList)
  }
  window.addEventListener("mousemove", onGrabThrottled)
  window.addEventListener("touchmove", onGrabThrottled)
  window.addEventListener("mouseup", onDrop)
  window.addEventListener("touchend", onDrop)
}