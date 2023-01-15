import { Route } from "react-router-dom"

import { RouteProps } from "../model"

export function AnyRoute({ path, isExact, component }: RouteProps): JSX.Element {
  return <Route path={path} exact={isExact} component={component} />
}