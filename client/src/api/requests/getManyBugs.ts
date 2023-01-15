import { Bug } from "@/shared"

import { handleSocketRequest } from "../functions"

export function getManyBugs(callback: (bugList: Bug[]) => void): void {
  handleSocketRequest("bugs", "getMany", { isLoadingHidden: true }, bugList => {
    callback(bugList)
  })

}