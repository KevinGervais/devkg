// tslint:disable:ordered-imports
import { createRoot } from "react-dom/client"
import "react-perfect-scrollbar/dist/css/styles.css"
import { Provider } from "react-redux"
import { Route, Router } from "react-router-dom"

import "@/shared"
import "@/constants"
import "@/classes"
import "@/localStorage"
import "@/functions"
import "@/routes"
import "@/components"
import "@/pages"
import "@/fonts/style.css"
import "@/styles/index.css"
import { getOrSetStore, initStore, useWillMount } from "@/redux"

import { BROWSER_HISTORY } from "./routes"
import { Routes } from "./routes/components/Routes"
import { onAppStart } from "@/functions/onAppStart"

const store = initStore()
getOrSetStore(store)

export function App(): JSX.Element {
  useWillMount(() => {
    onAppStart()
  })
  return (
    <Provider store={store}>
      <Router history={BROWSER_HISTORY}>
        <Route path="/" component={Routes} />
      </Router>
    </Provider>
  )
}
createRoot(document.getElementById("root")!).render(<App />)