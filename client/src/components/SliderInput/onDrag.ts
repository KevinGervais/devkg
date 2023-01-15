import { throttle, } from "@/functions"


export function onDrag({
  evt,
  index,
  dragRef,
  optionList,
  onChange
}: {
  evt: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>,
  index: number,
  dragRef: React.RefObject<HTMLDivElement>
  optionList: any[]
  onChange: (value: any, index: number) => void
}): void {
  const mouseEvt = evt as React.MouseEvent<HTMLDivElement, MouseEvent>
  const touchEvt = evt as React.TouchEvent<HTMLDivElement>
  const initPosX = mouseEvt.clientX || ((touchEvt.touches || [])[0] || (touchEvt.changedTouches || [])[0])?.pageX
  const initPosY = mouseEvt.clientY || ((touchEvt.touches || [])[0] || (touchEvt.changedTouches || [])[0])?.pageY
  if (!initPosX || !initPosY) {
    return
  }
  function onGrab(moveEvt: MouseEvent | TouchEvent): void {
    window.document.body.classList.add("grabbing")
    const mouseGrabEvt = moveEvt as MouseEvent
    const touchGrabEvt = moveEvt as TouchEvent
    const posX = mouseGrabEvt.clientX || ((touchGrabEvt.touches || [])[0] || (touchGrabEvt.changedTouches || [])[0])?.pageX
    const rect = dragRef.current?.getBoundingClientRect()
    if (!rect || !posX) {
      return
    }
    let newIndex = Math.round((posX - rect.left) / (rect.right - rect.left) * optionList.length) - 1
    if (newIndex < 0) {
      newIndex = 0
    }
    if (newIndex >= optionList.length) {
      newIndex = optionList.length - 1
    }
    if (newIndex === index) {
      return
    }
    onChange(optionList[newIndex], newIndex)
  }

  const onGrabThrottled = throttle(onGrab, 30)


  function onDrop(dropEvt: MouseEvent | TouchEvent): void {
    window.removeEventListener("mousemove", onGrabThrottled)
    window.removeEventListener("touchmove", onGrabThrottled)
    window.removeEventListener("mouseup", onDrop)
    window.removeEventListener("touchend", onDrop)
    window.document.body.classList.remove("grabbing")
  }
  window.addEventListener("mousemove", onGrabThrottled)
  window.addEventListener("touchmove", onGrabThrottled)
  window.addEventListener("mouseup", onDrop)
  window.addEventListener("touchend", onDrop)
}