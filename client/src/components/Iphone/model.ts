export interface IphoneStyledProps {
  width: string
  maxWidth: string
  portraitWidth: string
  clipPosition: number
  isSplited: boolean
}

export interface IphoneProps {
  img: string
  img2?: string
  width: string
  portraitWidth: string
  maxWidth: string
}

export interface IphoneState {
  clipPosition: number
}