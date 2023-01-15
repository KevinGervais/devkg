import { Canceler } from "axios"
import { ReactNode } from "react"

import { Class } from "./Class"

export interface ClassProps<Props> {
  props?: Props
  willMount?: (that: Class<Props>) => void
  didMount?: (that: Class<Props>) => void
  didUpdate?: (oldProps: Props, that: Class<Props>) => void
  willUnmout?: (that: Class<Props>) => void
  handleInitAxiosRequest?: (that: Class<Props>) => Canceler
  children: ReactNode | ReactNode[]
}