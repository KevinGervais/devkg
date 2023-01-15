const allJSfilesInFolder = require.context('./', true, /\.(jpg|svg|png|gif)$/)

const exportFiles = allJSfilesInFolder.keys().reduce((list, file) => {
  if (file === './index.js') return list
  list[file.slice(2, -4)] = allJSfilesInFolder(file)
  return list
}, {})
export default exportFiles
