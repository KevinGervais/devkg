import { Socket as SocketType } from "socket.io-client"

import { SocketQuery, fromRSA, getRSAKeys } from "@/shared"

import { IS_DEV } from "@/constants"
import { getReduxState, setReduxState } from "@/redux"

import { getCurrentSocketEvent } from "../events"

const { privateKey, publicKey } = getRSAKeys()
export class SocketIo {
  private static Socket?: SocketType
  private static sharedKey?: string
  private static socketId?: string
  private static callbackArray: (() => void)[] = []

  public static launch(isSnackbarHidden?: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script")
      script.src = IS_DEV ? `http://${window.location.hostname}:${window.location.port}/socket.io/socket.io.js` : "https://kevingervais.ca/socket.io/socket.io.js"

      if (document.querySelector(`script[src="${script.src}"]`)) {
        const { ui: { loadingCount } } = getReduxState()
        if (loadingCount > 0) {
          setReduxState("ui", { loadingCount: 0 })
        }
        return resolve(undefined)
      }

      document.body.appendChild(script)
      script.onerror = () => {
        reject()
      }
      script.onload = () => {
        resolve(undefined)
      }
    }).then(() => {
      if (this.Socket) {
        if (!isSnackbarHidden) {
          setReduxState("ui", { snackbar: { message: "internetRestored", severity: "info" } })
        }
        this.Socket.disconnect()
      }
      if (window.io) {
        const port = IS_DEV ? `ws://${window.location.hostname}:${window.location.port}` : "wss://kevingervais.ca"
        const query: SocketQuery = { publicKey }
        this.Socket = window.io(port, { query: query as unknown as any })
        getCurrentSocketEvent()
        this.Socket.io.on("reconnect", () => this.launch())
      }
    })
  }
  public static getSocket(): SocketType | undefined {
    return this.Socket
  }
  public static getSharedKey(): string | undefined {
    return this.sharedKey
  }
  public static getSocketId(): string | undefined {
    return this.socketId
  }
  public static setSocketId(socketId: string): void {
    this.socketId = socketId
  }
  public static launchCallbackArray(): void {
    this.callbackArray.forEach(callback => callback())
    this.callbackArray = []
  }
  public static pushCallback(callback: () => void): void {
    this.callbackArray.push(callback)
  }
  public static setSharedKey(key: string): void {
    this.sharedKey = fromRSA(key, privateKey)
  }
}

