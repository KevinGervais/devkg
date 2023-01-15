import { Link as Linkk, LinkProps } from "react-router-dom"

import { Remove } from "@/shared"

import { AllRoutes } from "../model"

export function Link({ page, id, ...props }: {
  page: `/${AllRoutes}`,
  id?: string,
} & Remove<LinkProps, "to">): JSX.Element {
  return (
    <Linkk
      {...props}
      to={`${page}${id ? `/${id}` : ""}`}
    />
  )
}
