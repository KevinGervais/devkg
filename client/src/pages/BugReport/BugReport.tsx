import { useState } from "react"

import { Bug } from "@/shared"

import { getManyBugs } from "@/api/requests"
import { PageTopBar, Scrollbar } from "@/components"
import { IS_CORDOVA } from "@/constants"
import { useReduxState, useWillMount } from "@/redux"
import { goToExactPath } from "@/routes"

import { BugReportItem } from "./BugReportItem"
import { BugReportStyled } from "./BugReportStyled"

export function BugReport(): JSX.Element {
  const { isAdmin, vh, say } = useReduxState(state => ({
    isAdmin: state.users.currentUser?.role === "admin",
    vh: IS_CORDOVA ? state.ui.vh : undefined,
    say: state.languages.say

  }))
  const [bugList, setBugList] = useState<Bug[]>([])
  useWillMount(() => {
    if (!isAdmin) {
      goToExactPath("/home")
    }
    getManyBugs(newBugList => setBugList(newBugList))
  })
  const content = bugList.map(bug => (
    <BugReportItem key={bug._id} {...bug} refreshBugs={() =>
      getManyBugs(newBugList => setBugList(newBugList))
    } />
  ))
  return (
    <BugReportStyled vh={vh}>
      <PageTopBar label={say.bugReport} />
      {IS_CORDOVA && (
        <Scrollbar>
          {content}
          <div className="padding" />
        </Scrollbar>
      )}
      {!IS_CORDOVA && (
        <>
          {content}
          <div className="padding" />
        </>
      )}

    </BugReportStyled>
  )
}