import { JSONSchemaType } from "ajv"
import { Express } from "express"
import { Db } from "mongodb"
import { AllCollections, AllRequests, RequestData, RequiredKeys, TypeByCollectionName, UnionToIntersection } from "shared"
import { User } from "shared"
import { Server, Socket } from "socket.io"

import { DbQueries } from "./classes"

export type SchemaDefinition<
  CollectionKey extends AllCollections,
> =
  AllRequests[CollectionKey][keyof AllRequests[CollectionKey]] extends RequestData<any, any, any>
  ? JSONSchemaType<
    Required<UnionToIntersection<Required<AllRequests[CollectionKey][keyof AllRequests[CollectionKey]]["params"]>>>
  >["properties"]
  : never

export type SchemaRequests<
  CollectionKey extends AllCollections
> = {
    [path in keyof AllRequests[CollectionKey]]: (
      AllRequests[CollectionKey][path] extends RequestData<any, any, any>
      ? { [key in RequiredKeys<AllRequests[CollectionKey][path]["params"]>]: true }
      : never
    )
  }

export type CurrentUserBySocketId = { [socketId: string]: User | undefined }
export interface SocketState {
  socket: Socket
  currentUser?: User
  publicKey: string
  sharedKey: string
  socketId: string
  refreshCurrentUser: () => Promise<void>
}
export interface ServerState {
  io: Server
  db: Db
  app: Express
  dbQueries: DbQueries
  currentUserBySocketId: CurrentUserBySocketId
  emitGeneric: EmitGeneric
}

export type EmitGeneric = <
  EmitCollection extends AllCollections,
  EmitPath extends keyof AllRequests[EmitCollection]
>(
  collection: EmitCollection,
  path: EmitPath,
  id: string | undefined,
  data: AllRequests[EmitCollection][EmitPath] extends RequestData<any, any, any> ? AllRequests[EmitCollection][EmitPath]["emit"] : never,

) => void

export type SchemaItem<CollectionKey extends AllCollections> = {
  definition: SchemaDefinition<CollectionKey>
  requiredParamsPerRequest: SchemaRequests<CollectionKey>
}

export interface $Lookup<From extends AllCollections, To extends AllCollections> {
  $lookup: {
    from: From,
    localField: keyof TypeByCollectionName[To],
    foreignField: keyof TypeByCollectionName[From],
    as: string,
  }
}

export type $Project<Collection extends AllCollections> = {
  [key in (keyof TypeByCollectionName[Collection] | string)]: 1 | 0
}

