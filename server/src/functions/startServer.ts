import bodyParser from "body-parser"
import cors from "cors"
import express, { Express } from "express"
import sslRedirect from "heroku-ssl-redirect"
import http from "http"
import path from "path"
import { Server } from "socket.io"

import { IS_DEV } from "@/constants"

import { log } from "./log"




export function startServer(): { app: Express, io: Server } {
  const port = process.env.PORT || 8080

  const app = express()
  if (!IS_DEV) {
    app.use(sslRedirect())
  }
  const httpServer = http.createServer(app)
  const io = new Server(httpServer, {
    maxHttpBufferSize: 1e8,
    pingTimeout: 600000,
    connectTimeout: 600000,
    cors: {
      origin: "*",

      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    },
  })


  httpServer.listen(port, () => {
    log(`listening on port ${port}`, "success")
  })

  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, "../../appBuild")))
  return { app, io }
}