import {
  COUNTRY_CODE_LIST,
  FILE_DATA_TYPE_LIST,
  GET_REQUEST_PATH_LIST,
  MONTH_LIST,
  OS_TYPE_LIST,
  POST_REQUEST_PATH_LIST,
  REQUEST_PATH_LIST,
  STATE_BY_STATE_CODE
} from "."
import { KeysOfUnion, ValuesOfOfUnion } from ".."


export type AllMonths = typeof MONTH_LIST[number]
export type AllRequestPaths = typeof REQUEST_PATH_LIST[number]
export type AllStateCodes = KeysOfUnion<typeof STATE_BY_STATE_CODE[keyof typeof STATE_BY_STATE_CODE]>
export type AllCanadianStateCodes = KeysOfUnion<typeof STATE_BY_STATE_CODE["canada"]>
export type AllUnitedStatesStateCodes = KeysOfUnion<typeof STATE_BY_STATE_CODE["unitedStates"]>
export type AllStates = ValuesOfOfUnion<typeof STATE_BY_STATE_CODE[keyof typeof STATE_BY_STATE_CODE]>
export type AllPostRequestPaths = typeof POST_REQUEST_PATH_LIST[number]
export type AllGetRequestPaths = typeof GET_REQUEST_PATH_LIST[number]
export type AllFileDataTypes = typeof FILE_DATA_TYPE_LIST[number]
export type AllOSTypes = typeof OS_TYPE_LIST[number]
export type AllCountryCodes = typeof COUNTRY_CODE_LIST[number]