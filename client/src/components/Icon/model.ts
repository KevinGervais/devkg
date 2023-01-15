import React, { SVGAttributes } from "react"

export type IconType = "brands" | "light" | "regular" | "solid"

export interface IconProps {
  type?: IconType
  name: string
  className?: string
  onClick?: (evt: React.MouseEvent<HTMLDivElement>) => void
  svgProps?: Partial<SVGAttributes<{}>>
  children?: React.ReactNode
}
export type IconFn = (props: SVGAttributes<{}>) => JSX.Element

