import { RouteComponentProps } from "react-router-dom"

import { ROUTE_LIST } from "./constants"

export type AllRoutes = typeof ROUTE_LIST[number]

export interface RoutesState {
  pathName: string
  firstPath: AllRoutes | ""
  lastPath: string
  oldPathName?: string
  oldFirstPath?: AllRoutes | ""
  oldLastPath?: string
}

export interface RouteProps {
  path: `/${AllRoutes}`
  isExact?: boolean
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

export interface RedirectProps {
  from: `/${AllRoutes}` | "/" | "/*"
  to: `/${AllRoutes}`
  isExact?: boolean
}