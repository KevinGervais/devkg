var fs = require('fs')
const parser = require('xml2json');

const {
  version: globalVersion
} = require('../package.json')
const {
  version: clientVersion
} = require('../client/package.json')
const {
  version: serverVersion
} = require('../server/package.json')
const {
  version: mobileVersion
} = require('../mobile/package.json')


const newVersion = process.argv[2]

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, str) => {
      if (err) reject(err)
      else resolve(str)
    })
  })
}
async function xmlToJsom(path) {
  console.log(`fetch xml content from: ${path}`)
  const xmlFile = await readFile(path)
  return JSON.parse(parser.toJson(xmlFile))
}
async function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf-8', (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

async function replaceFileContent(path, from, to) {
  console.info(`Replace file content ${path} from ${from} to ${to}`)
  let fileContent = await readFile(path)
  fileContent = fileContent.split(from).join(to)
  await writeFile(path, fileContent)
}

async function postBuild() {
  console.log("new version:", newVersion)
  if (!newVersion || newVersion.split(".").length !== 3) {
    return console.error("invalid version parameter")
  }
  const xmlJson = await xmlToJsom("./mobile/config.xml")
  const xmlVersion = xmlJson.widget.version
  const xmlBundleVersion = xmlJson.widget["ios-CFBundleVersion"]

  await replaceFileContent("./package.json", `"version": "${globalVersion}"`, `"version": "${newVersion}"`)
  await replaceFileContent("./client/package.json", `"version": "${clientVersion}"`, `"version": "${newVersion}"`)
  await replaceFileContent("./server/package.json", `"version": "${serverVersion}"`, `"version": "${newVersion}"`)
  await replaceFileContent("./mobile/package.json", `"version": "${mobileVersion}"`, `"version": "${newVersion}"`)
  await replaceFileContent("./mobile/config.xml", `version="${xmlVersion}"`, `version="${newVersion}"`)
  await replaceFileContent("./mobile/config.xml", `ios-CFBundleVersion="${xmlBundleVersion}"`, `ios-CFBundleVersion="${Number(xmlBundleVersion) + 1}"`)
}
postBuild()