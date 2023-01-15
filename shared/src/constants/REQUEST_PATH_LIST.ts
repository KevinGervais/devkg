export const POST_REQUEST_PATH_LIST = [
  "createOne",
  "createMany",
  "updateOne",
  "updateMany",
  "deleteOne",
  "deleteMany",
] as const

export const GET_REQUEST_PATH_LIST = [
  "getOne",
  "getMany",
  "getCurrent",
  "geocode"
] as const

export const REQUEST_PATH_LIST = [
  ...POST_REQUEST_PATH_LIST,
  ...GET_REQUEST_PATH_LIST,
] as const
