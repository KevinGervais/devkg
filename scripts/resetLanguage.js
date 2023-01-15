const fs = require('fs');
const tsFileList = []
const en = require("../shared/build/languages/en")
const fr = require("../shared/build/languages/fr")
const finalEn = {}
const finalFr = {}
function getClientFiles (currentPath, base) {
  const fileList = fs.readdirSync(`./${base}/src${currentPath ? currentPath: ""}/`, {withFileTypes: true })
  fileList.forEach(file => {
    if (file.isDirectory()) {
      getClientFiles(`${currentPath}/${file.name}`,base)
    } else if (
      (file.name.endsWith(".ts") || file.name.endsWith(".tsx"))
       && file.name !== "en.ts" 
       && file.name !== "fr.ts" 
       ){
         tsFileList.push(`./${base}/src${currentPath ? currentPath: ""}/${file.name}`)
        }
      })
    }
    
    getClientFiles("", "client")
    getClientFiles("", "shared")
    getClientFiles("", "server")
let concatAllFileContents = ""
tsFileList.forEach(filePath => {
  const fileContent = fs.readFileSync(filePath, {encoding: "utf-8"})
  concatAllFileContents += `
${fileContent}`
})

Object.entries(en.en).forEach(([key, value]) =>{
  if (concatAllFileContents.includes(key)) {
    finalEn[key] = value
    finalFr[key] = fr.fr[key]
  }
})

console.log(JSON.stringify(finalEn))
// console.log(JSON.stringify(finalFr))