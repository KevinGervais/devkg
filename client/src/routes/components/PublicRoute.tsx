import { Redirect, Route } from "react-router-dom"

import { useReduxState } from "@/redux"

import { AllRoutes, RouteProps } from "../model"

export const PublicRoute = (props: RouteProps) => {
  const { component, path, isExact } = props
  const Component: any = component
  const isConnected = useReduxState(state => !!state.users.currentUser)
  const privatePath: `/${AllRoutes}` = "/dashboard"

  return (
    <Route
      exact={isExact}
      path={path}
      render={() => !isConnected ? <Component /> : <Redirect to={{ pathname: privatePath }} />}
    />
  )
}