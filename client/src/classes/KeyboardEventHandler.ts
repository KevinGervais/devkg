import { IS_ANY_IOS } from "@/constants"
import { getScreenDimensions } from "@/ui/functions/getScreenDimensions"


export class KeyboardEventHandler {
  private recentlyFocusedTimeoutDuration: number = 3000
  private currentViewportWidth: number
  private previousViewportWidth: number
  private viewportWidthWithoutKeyboard: number
  private currentViewportHeight: number
  private previousViewportHeight: number
  private viewportHeightWithoutKeyboard: number
  private keyboardVisible: boolean = false
  private recentlyFocused: boolean = false
  private recentlyFocusedTimeout: null | number = null
  private validFocusableElements: string[] = ["INPUT", "TEXTAREA"]
  private showCallback?: (sizes: ReturnType<typeof this.getSizesData>) => void
  private hideCallback?: (sizes: ReturnType<typeof this.getSizesData>) => void
  constructor(options?: { recentlyFocusedTimeoutDuration?: number }) {
    const { width, height } = getScreenDimensions()
    this.currentViewportWidth = width
    this.previousViewportWidth = width
    this.viewportWidthWithoutKeyboard = width
    this.currentViewportHeight = height
    this.previousViewportHeight = height
    this.viewportHeightWithoutKeyboard = height
    if (IS_ANY_IOS) {
      document.onscroll = function ontouchmove(e: Event): void {
        e.preventDefault()
        window.scrollTo(0, 0)
        document.body.scrollTop = 0
      }
    }
    if (typeof options !== "undefined") {
      if (
        typeof options.recentlyFocusedTimeoutDuration !== "undefined") {
        this.recentlyFocusedTimeoutDuration = options.recentlyFocusedTimeoutDuration
      }
    }

    this.documentFocusHandler = this.documentFocusHandler.bind(this)
    this.resizeHandler = this.resizeHandler.bind(this)
    this.expireRecentlyFocused = this.expireRecentlyFocused.bind(this)
    this.resetViewportSizes()
    document.addEventListener("focus", this.documentFocusHandler, true);
    (window.visualViewport || window).addEventListener("resize", this.resizeHandler)
  }

  public onShow(callback: typeof this.showCallback): void {
    this.showCallback = callback
  }

  public onHide(callback: typeof this.hideCallback): void {
    this.hideCallback = callback
  }

  public isKeyboardVisible(): boolean {
    return this.keyboardVisible
  }

  public getKeyboardSize(): boolean | { width: number, height: number } {
    if (!this.keyboardVisible) { return false }

    return {
      width: this.currentViewportWidth,
      height: this.viewportHeightWithoutKeyboard - this.currentViewportHeight
    }
  }

  public getSizesData(): {
    viewportWithoutKeyboard: {
      width: number
      height: number
    }
    currentViewport: {
      width: number
      height: number
    }
    keyboard: {
      width: number
      height: number
    }
  } {
    return {
      viewportWithoutKeyboard: {
        width: this.viewportWidthWithoutKeyboard,
        height: this.viewportHeightWithoutKeyboard
      },
      currentViewport: {
        width: this.currentViewportWidth,
        height: this.currentViewportHeight
      },
      keyboard: {
        width: this.currentViewportWidth,
        height: this.viewportHeightWithoutKeyboard - this.currentViewportHeight
      }
    }
  }

  private keyboardVisibleHandler(): void {

    this.keyboardVisible = true
    this.recentlyFocused = false
    if (this.showCallback) {
      this.showCallback(this.getSizesData())
    }
  }

  private keyboardHiddenHandler(): void {
    this.keyboardVisible = false
    if (this.hideCallback) {
      this.hideCallback(this.getSizesData())
    }
  }

  private resetViewportSizes(): void {
    const { width, height } = getScreenDimensions()
    this.currentViewportWidth = width
    this.previousViewportWidth = width
    this.viewportWidthWithoutKeyboard = width
    this.currentViewportHeight = height
    this.previousViewportHeight = height
    this.viewportHeightWithoutKeyboard = height
  }

  private documentFocusHandler(e: FocusEvent): void {
    const elem = e.target as HTMLElement
    if (
      elem !== undefined
      && elem.nodeName !== undefined
      && (this.validFocusableElements.includes(elem.nodeName) || elem.isContentEditable)
    ) {
      if (IS_ANY_IOS) {
        window.scrollTo(0, 0)
        document.body.scrollTop = 0
      }
      this.elementFocusHandler(e)
    }
  }

  private elementFocusHandler(e: FocusEvent): void {
    if (this.recentlyFocusedTimeout != null) {
      window.clearTimeout(this.recentlyFocusedTimeout)
      this.recentlyFocusedTimeout = null
    }
    this.recentlyFocused = true

    this.recentlyFocusedTimeout = window.setTimeout(this.expireRecentlyFocused, this.recentlyFocusedTimeoutDuration)
  }

  private expireRecentlyFocused(): void {
    this.recentlyFocused = false
  }

  private resizeHandler(): void {
    const { width, height } = getScreenDimensions()
    this.currentViewportWidth = width
    this.currentViewportHeight = height
    if (this.keyboardVisible
      && this.currentViewportWidth === this.previousViewportWidth
      && this.currentViewportHeight >= this.viewportHeightWithoutKeyboard) {
      window.setTimeout(() => {
        if (!this.keyboardVisible && document.activeElement && (document.activeElement as HTMLElement).blur) {
          (document.activeElement as HTMLElement).blur()
        }
      }, 100)

      this.keyboardHiddenHandler()
    }

    if (this.currentViewportWidth !== this.previousViewportWidth) {
      if (document.activeElement) {
        (document.activeElement as HTMLElement).blur()
      }
      this.keyboardHiddenHandler()
      window.setTimeout(() => this.resetViewportSizes(), 200)
    }

    if (!this.keyboardVisible
      && this.recentlyFocused
      && this.currentViewportWidth === this.previousViewportWidth
      && this.currentViewportHeight < this.previousViewportHeight) {
      this.keyboardVisibleHandler()
    }
    this.previousViewportWidth = this.currentViewportWidth
    this.previousViewportHeight = this.currentViewportHeight
  }
}
