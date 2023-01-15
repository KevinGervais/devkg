import { AggregateOptions, Db, Document, Filter, FindOptions, InsertOneOptions, Sort, UpdateFilter, UpdateResult } from "mongodb"
import { AllCollections, OptionalId, TypeByCollectionName, generateId } from "shared"

import { getObjectWithStrictUndefined } from "@/functions"

export class DbQueries {
  private db: Db
  constructor(db: Db) {
    this.db = db
  }

  createOne<
    Collection extends AllCollections
  >(
    collection: Collection,
    query: OptionalId<TypeByCollectionName[Collection]>,
    options?: InsertOneOptions
  ): Promise<string> {
    return new Promise((
      resolve: (_id: string) => void,
      reject: (error: string) => void
    ) => {
      const _id = generateId()
      this.db.collection(collection)
        .insertOne({ _id: _id as any, ...query, }, options || {})
        .then(() => resolve(query._id || _id))
        .catch(error => reject(error.message))
    })
  }

  createMany<Collection extends AllCollections>(
    collection: Collection,
    array: OptionalId<TypeByCollectionName[Collection]>[]
  ): Promise<string[]> {
    return new Promise((
      resolve: (_ids: string[]) => void,
      reject: (error: string) => void
    ) => {
      const finalArray = array.map(arrItem => ({ _id: generateId(), ...arrItem }))
      this.db.collection<TypeByCollectionName[Collection]>(collection)
        .insertMany(finalArray as any)
        .then(() => resolve(finalArray.map(obj => obj._id)))
        .catch(error => reject(error.message))
    })
  }
  deleteOne<Collection extends AllCollections>(
    collection: Collection,
    query: Filter<TypeByCollectionName[Collection]>
  ): Promise<undefined> {
    return new Promise((
      resolve: (data: undefined) => void,
      reject: (error: string) => void
    ) => {
      this.db.collection<TypeByCollectionName[Collection]>(collection).deleteOne(query)
        .then(() => resolve(undefined))
        .catch(error => reject(error.message))
    })
  }

  deleteMany<Collection extends AllCollections>(
    collection: Collection,
    query: Filter<TypeByCollectionName[Collection]>
  ): Promise<undefined> {
    return new Promise((
      resolve: (result: undefined) => void,
      reject: (error: string) => void
    ) => {
      this.db.collection<TypeByCollectionName[Collection]>(collection).deleteMany(query)
        .then(() => resolve(undefined))
        .catch(error => reject(error.message))
    })
  }

  getOne<Collection extends AllCollections>(
    collection: Collection,
    query: Filter<TypeByCollectionName[Collection]>,
    options?: FindOptions<TypeByCollectionName[Collection]>
  ): Promise<(TypeByCollectionName[Collection] | undefined)> {
    return new Promise((
      resolve: (result: TypeByCollectionName[Collection] | undefined) => void,
      reject: (error: string) => void
    ) => {
      this.db.collection<TypeByCollectionName[Collection]>(collection)
        .findOne(query, options as any)
        .then(result => resolve(result ? getObjectWithStrictUndefined(result) : undefined))
        .catch(error => reject(error.message))
    })
  }

  getMany<Collection extends AllCollections>(
    collection: Collection,
    query: Filter<TypeByCollectionName[Collection]>,
    options?: FindOptions<TypeByCollectionName[Collection]>,
    sort?: Sort
  ): Promise<TypeByCollectionName[Collection][]> {
    return new Promise((
      resolve: (result: TypeByCollectionName[Collection][]) => void,
      reject: (error: string) => void
    ) => {
      let found = this.db.collection<TypeByCollectionName[Collection]>(collection).find(query, options)
      if (sort) {
        found = found.sort(sort)
      }
      found.toArray()
        .then(result => resolve(getObjectWithStrictUndefined(result || [])))
        .catch(error => reject(error.message))
    })
  }

  aggregate<Result, Collection extends AllCollections>(
    collection: Collection,
    pipeline: Document[],
    options?: AggregateOptions
  ): Promise<Result[]> {
    return new Promise((
      resolve: (result: Result[]) => void,
      reject: (error: string) => void
    ) => {
      this.db.collection<TypeByCollectionName[Collection]>(collection).aggregate(
        pipeline,
        options
      ).toArray()
        .then(result => resolve(getObjectWithStrictUndefined(result || [])))
        .catch(error => reject(error.message))
    })
  }

  updateOne<Collection extends AllCollections>(
    collection: Collection,
    query: Filter<TypeByCollectionName[Collection]>,
    data: UpdateFilter<TypeByCollectionName[Collection]>
  ): Promise<UpdateResult | Document | undefined> {
    return new Promise((
      resolve: (result: UpdateResult | Document | undefined) => void,
      reject: (error: string) => void
    ) => {
      this.db.collection<TypeByCollectionName[Collection]>(collection).updateOne(query, data)
        .then(result => resolve(result))
        .catch(error => reject(error.message))
    })
  }

  updateMany<Collection extends AllCollections>(
    collection: Collection,
    query: Filter<TypeByCollectionName[Collection]>,
    data: UpdateFilter<TypeByCollectionName[Collection]>
  ): Promise<UpdateResult | Document | undefined> {
    return new Promise((
      resolve: (result: UpdateResult | Document | undefined) => void,
      reject: (error: string) => void
    ) => {
      this.db.collection<TypeByCollectionName[Collection]>(collection).updateMany(query, data)
        .then(result => resolve(result))
        .catch(error => reject(error.message))
    })
  }
}
