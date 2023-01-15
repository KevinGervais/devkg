// @ts-ignore
const allJSfilesInFolder = require.context("./", true, /\.(tsx)$/)

export const icons = allJSfilesInFolder.keys().reduce((map: { [key: string]: string }, file: string) => {
  if (file === "./index.ts") {
    return map
  }
  map[file.slice(2, -4)] = allJSfilesInFolder(file).default
  return map
}, {})