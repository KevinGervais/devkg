import "shared"

import "@/functions"
import "@/schemas"

import { IS_DEV } from "./constants"
import { generateAllEmailTemplates } from "./emails/functions/generateAllEmailTemplates"
import { preventUnhandledErrors, startDatabase, startHandlingAnyRequests, startServer } from "./functions"
async function launch(): Promise<void> {
  preventUnhandledErrors()
  const { app, io } = startServer()
  const db = await startDatabase()
  await startHandlingAnyRequests({ db, app, io })
  if (IS_DEV) {
    await generateAllEmailTemplates()
  }
}
launch().catch(() => null)