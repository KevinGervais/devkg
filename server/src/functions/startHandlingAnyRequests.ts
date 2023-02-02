import { Express } from "express"
import { Db } from "mongodb"
import path from "path"
import { Server } from "socket.io"

import { Mongodb, HTTPRequestHandler, SocketRequestHandler } from "@/classes"
import { launchAllRoutines } from "@/routines"

import { log } from "./log"
export async function startHandlingAnyRequests({ db, app, io }: { db: Db, app: Express, io: Server }): Promise<void> {
  const mongodb = new Mongodb(db)
  SocketRequestHandler.serverState = {
    db,
    io,
    app,
    mongodb,
    emitGeneric: (emitCollection, emitPath, id, data) => {
      log(`/api/${emitCollection}/${emitPath as string}${id ? `/${id}` : ""}`, "info")
      io.emit(`/api/${emitCollection}/${emitPath as string}${id ? `/${id}` : ""}`, data)
    },
    currentUserBySocketId: {}
  }

  try {
    await db.collection("commerces").dropIndexes()
  } catch (err) {
    //
  }

  await db.collection("commerces").createIndex({
    title: "text",
    category: "text",
  })

  launchAllRoutines(SocketRequestHandler.serverState)
  io.on("connection", socket => new SocketRequestHandler({ socket }))
  HTTPRequestHandler.serverState = SocketRequestHandler.serverState
  // tslint:disable-next-line:no-unused-expression
  new HTTPRequestHandler()
  app.get("*", (req, res, next) => {
    if (!req.url.includes("api") && !req.url.includes("favicon")) {
      log("get/index.html", "info")
      res.sendFile(path.join(__dirname, "/../../appBuild/index.html"))
    } else {
      next()
    }
  })
}