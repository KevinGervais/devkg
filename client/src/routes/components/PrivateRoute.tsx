import { Redirect, Route } from "react-router-dom"

import { getReduxState, setReduxState, useReduxState } from "@/redux"

import { AllRoutes, RouteProps } from "../model"

export const PrivateRoute = (props: RouteProps) => {
  const { component, path, isExact } = props
  const Component: any = component
  const isConnected = useReduxState(state => !!state.users.currentUser)
  const publicPath: `/${AllRoutes}` = "/login"
  return (
    <Route
      exact={isExact}
      path={path}
      render={() => {
        if (isConnected) {
          return <Component />
        } else {
          setReduxState("ui", {
            loginRedirect: {
              pathName: path,
              popup: getReduxState().popups
            }
          })
          return <Redirect to={{ pathname: publicPath }} />
        }
      }}
    />
  )
}

