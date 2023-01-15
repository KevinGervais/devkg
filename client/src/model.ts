import mapboxgl from "mapbox-gl"
import { SVGAttributes } from "react"
import { ManagerOptions, Socket, SocketOptions } from "socket.io-client"

type GetPxFunc = (callback: (px: number) => void) => void

declare global {
  interface Window {
    platform: any
    handleOpenURL?: (url: string) => void
    mapboxgl: typeof mapboxgl
    io?: (uri: string, opts?: Partial<ManagerOptions & SocketOptions>) => Socket
    PushNotification?: PushNotificationStatic
    cordova?: Cordova,
    StatusBar?: {
      overlaysWebView: (isOverlay: boolean) => void
      backgroundColorByHexString: (color: string) => void
      hide: () => void
      show: () => void
      styleDefault: () => void
      styleLightContent: () => void
    }
    AndroidNotch?: {
      getInsetTop: GetPxFunc
      getInsetRight: GetPxFunc
      getInsetBottom: GetPxFunc
      getInsetLeft: GetPxFunc
    }
    device?: {
      available: boolean
      cordova: string
      isVirtual: boolean
      manufacturer: string
      model: string
      platform: string
      serial: string
      uuid: string
      version: string
    }
  }
}

interface Cordova {
  platformId: string
  version: string
  InAppBrowser: InAppBrowser
  plugins: {
    Keyboard?: {
      hideKeyboardAccessoryBar: (isHiding: boolean) => void
      disableScroll: (isDisabled: boolean) => void
    }
    clipboard?: {
      paste: (callback: (text: string) => void) => void
      copy: (text: string) => void
      clear: () => void
    }
    ThemeDetection?: {
      isAvailable: (callback: (response: ThemeDetectionResponse) => void) => void
      isDarkModeEnabled: (callback: (response: ThemeDetectionResponse) => void) => void
    }
  }
  exec(success: (data: any) => any, fail: (err: any) => any, service: string, action: string, args?: any[]): void
  define(moduleName: string, factory: (require: any, exports: any, module: any) => any): void
  require(moduleName: string): any
}
export interface Mapping {
  [key: string]: boolean
}
export interface ErrorObject {
  operatingSystem: "mac" | "windows" | "android" | "ios" | "linux",
  userAgent: string,
  appVersion: string,
  errorLine?: number,
  errorColumn?: number,
  customMessage?: string,
  errorMessage?: string,
  pathName: string,
  date: string,
  _id: string
}

export type AllCustomStorageKeys = "lastAppVersion" | "apparence" | "sessionId" | "secureId" | "deviceId"
export interface IconMap {
  [iconId: string]: (props: SVGAttributes<{}>) => JSX.Element
}

export type NotchPosition = "left" | "right" | "top" | "bottom" | undefined

export interface ThemeDetectionResponse {
  value: boolean
  message: string
}

type PushEventResponse = RegistrationEventResponse | NotificationEventResponse | Error

interface PushNotification {
  on(event: "registration", callback: (response: RegistrationEventResponse) => any): void
  on(event: "notification", callback: (response: NotificationEventResponse) => any): void
  on(event: "error", callback: (response: Error) => any): void
  on(event: string, callback: (response: PushEventResponse) => any): void
  off(event: "registration", callback: (response: RegistrationEventResponse) => any): void
  off(event: "notification", callback: (response: NotificationEventResponse) => any): void
  off(event: "error", callback: (response: Error) => any): void
  off(event: string, callback: (response: PushEventResponse) => any): void
  unregister(successHandler: () => any, errorHandler?: () => any, topics?: string[]): void
  subscribe(topic: string, successHandler: () => any, errorHandler: () => any): void
  unsubscribe(topic: string, successHandler: () => any, errorHandler: () => any): void
  setApplicationIconBadgeNumber(successHandler: () => any, errorHandler: () => any, count: number): void
  getApplicationIconBadgeNumber(successHandler: (count: number) => any, errorHandler: () => any): void
  finish(successHandler?: () => any, errorHandler?: () => any, id?: string): void
  clearAllNotifications(successHandler: () => any, errorHandler: () => any): void
}
interface InitOptions {
  android?: {
    icon?: string
    iconColor?: string
    sound?: boolean
    vibrate?: boolean
    clearBadge?: boolean
    clearNotifications?: boolean
    forceShow?: boolean
    topics?: string[]
    messageKey?: string
    titleKey?: string
  }
  ios?: {
    voip?: boolean | string
    badge?: boolean | string
    sound?: boolean | string
    alert?: boolean | string
    clearBadge?: boolean | string
    categories?: CategoryArray
    fcmSandbox?: boolean
    topics?: string[]
  }
}

interface CategoryArray {
  [name: string]: CategoryAction
}

interface CategoryAction {
  yes?: CategoryActionData
  no?: CategoryActionData
  maybe?: CategoryActionData
}

interface CategoryActionData {
  callback: string
  title: string
  foreground: boolean
  destructive: boolean
}

interface RegistrationEventResponse {
  registrationId: string
}

interface NotificationEventResponse {
  message: string
  title?: string
  count: string
  sound: string
  image: string
  additionalData: NotificationEventAdditionalData
}

interface NotificationEventAdditionalData {
  [name: string]: any
  foreground?: boolean
  coldstart?: boolean
  collapse_key?: string
  from?: string
  notId?: string
}

interface PushNotificationStatic {
  new(options: InitOptions): PushNotification
  init(options: InitOptions): PushNotification
}

type channel = "loadstart" | "loadstop" | "loaderror" | "exit" | "message" | "customscheme"

interface InAppBrowser {
  open(url: string, target?: string, options?: string): InAppBrowser
  onloadstart(type: Event): void
  onloadstop(type: InAppBrowserEvent): void
  onloaderror(type: InAppBrowserEvent): void
  onexit(type: InAppBrowserEvent): void
  addEventListener(type: channel, callback: InAppBrowserEventListenerOrEventListenerObject): void
  removeEventListener(type: channel, callback: InAppBrowserEventListenerOrEventListenerObject): void
  close(): void
  hide(): void
  show(): void
  executeScript(script: { code: string } | { file: string }, callback: (result: any) => void): void
  insertCSS(css: { code: string } | { file: string }, callback: () => void): void
}

type InAppBrowserEventListenerOrEventListenerObject = InAppBrowserEventListener | InAppBrowserEventListenerObject

type InAppBrowserEventListener = (evt: InAppBrowserEvent) => void

interface InAppBrowserEventListenerObject {
  handleEvent(evt: InAppBrowserEvent): void
}

interface InAppBrowserEvent extends Event {
  type: string
  url: string
  code: number
  message: string
}