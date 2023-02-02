import { AnyError, Db, MongoClient } from "mongodb"

import { DATABASE } from "@/constants"

import { log } from "./log"


export function startDatabase(): Promise<Db> {
  return new Promise((resolve: (db: Db) => void, reject: (err?: AnyError) => void) => {
    MongoClient.connect(
      DATABASE.url,
      {
        ignoreUndefined: true,
      },
      (err, client) => {
        if (err) {
          log("mongodb not connected..." + err, "error")
          return reject(err)
        }
        log(`Connected to ${DATABASE.name} database`, "success")
        if (client) {
          resolve(client.db(DATABASE.name))
        } else {
          log("mongodb not connected...", "error")
          reject()
        }
      })
  })
}