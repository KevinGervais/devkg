import { generateId } from "@/shared"

type EvtElemType = Element | HTMLElement | Document | Window | VisualViewport
type EvtObj = { elem: EvtElemType, evtName: keyof HTMLElementEventMap, callback: (evt: any) => void, isOnce?: boolean }

class EventHandler {
  evtById: { [id: string]: EvtObj } = {}
  constructor() {
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.get = this.get.bind(this)
  }
  public create<K extends keyof HTMLElementEventMap>(
    elem: EvtElemType,
    evtName: K,
    callback: (evt: HTMLElementEventMap[K]) => any,
    isOnce?: boolean,
    id: string = generateId()
  ): string {
    const deleteFn = this.delete
    function finalCallback(evt: HTMLElementEventMap[K]): void {
      callback(evt as HTMLElementEventMap[K])
      if (isOnce) {
        deleteFn(id)
      }
    }
    this.evtById[id] = { elem, evtName, callback: finalCallback }
    elem.addEventListener(evtName, finalCallback as () => void)
    return id
  }
  public update(id: string, callback: (evt: any) => any): void {
    const evt = this.evtById[id]
    if (evt) {
      const deleteFn = this.delete
      evt.elem.removeEventListener(evt.evtName, evt.callback)
      function finalCallback(subEvt: keyof HTMLElementEventMap): void {
        callback(subEvt)
        if (evt!.isOnce) {
          deleteFn(id)
        }
      }
      evt.elem.addEventListener(evt.evtName, finalCallback as any)
      evt.callback = finalCallback
    }
  }
  public delete(id: string): void {
    const evt = this.evtById[id]
    if (evt) {
      evt.elem.removeEventListener(evt.evtName, evt.callback)
      delete this.evtById[id]
    }
  }
  public get(id: string): EvtObj {
    return this.evtById[id]!
  }
}

export const eventHandler = new EventHandler()