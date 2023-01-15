var obfuscator = require('javascript-obfuscator')
var fs = require('fs')
var rimraf = require('rimraf')
var ncp = require('ncp').ncp

const {
  version
} = require('../package.json')

if (process.argv.length > 2 && ["web", "mobile"].includes(process.argv[2])) {
  process.env.platform = process.argv[2]
}

async function ereaseFile(path) {
  console.info(`Erasing folders and files in ${path}`)
  return new Promise((resolve, reject) => {
    rimraf(path, function (err) {
      if (err) reject(err)
      else resolve()
    })
  })
}

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, str) => {
      if (err) reject(err)
      else resolve(str)
    })
  })
}

async function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf-8', (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

async function obfuscate(path) {
  console.info(`obfuscate file ${path}`)
  const fileContent = await readFile(path)
  const obfuscated = obfuscator.obfuscate(fileContent).getObfuscatedCode()
  await writeFile(path, obfuscated)
}

async function replaceFileContent(path, from, to) {
  console.info(`Replace file content from ${from} to ${to}`)
  let cssFileContent = await readFile(path)
  cssFileContent = cssFileContent.split(from).join(to)
  await writeFile(path, cssFileContent)
}

async function copyFiles(from, to) {
  console.info(`Copy files from ${from} to ${to}`)
  return new Promise((resolve, reject) => {
    ncp(from, to, function (err) {
      if (err) reject(err)
      else resolve()
    })
  })
}

async function getFileList(path) {
  console.info(`get files in ${path}`)
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) reject(err)
      else resolve(files)
    })
  })
}

async function postBuild() {
  await ereaseFile('./build-temp')
  await copyFiles('./build', './build-temp')
  const jsFileList = await getFileList('./build-temp/static/js')
  await jsFileList.forEach(async (fileName) => {
    if (fileName.endsWith('.map') || fileName.startsWith('runtime') || fileName.endsWith('.txt')) {
      await ereaseFile(`./build-temp/static/js/${fileName}`)
    }
  })

  const mainJsFile = jsFileList.find((str) => str.startsWith('main'))
  await replaceFileContent(`./build-temp/static/js/${mainJsFile}`, 'appVersion9yr7xnjuwc', version)
  // await obfuscate(`./build-temp/static/js/${mainJsFile}`)

  const cssFileList = await getFileList('./build-temp/static/css')
  await cssFileList.forEach(async (fileName) => {
    if (fileName.endsWith('.map')) {
      await ereaseFile(`./build-temp/static/css/${fileName}`)
    } else if (fileName.startsWith('main')) {
      await replaceFileContent(`./build-temp/static/css/${fileName}`, 'url(/static/media/', 'url(../media/')
    }
  })

  if (process.env.platform === 'web') {
    await replaceFileContent('./build-temp/index.html', '<head>', '<head><base href="/">')
    await ereaseFile('../server/appBuild')
    await copyFiles('./build-temp', '../server/appBuild')
  } else if (process.env.platform === 'mobile') {
    await ereaseFile('../mobile/www')
    await copyFiles('./build-temp', '../mobile/www')
    await replaceFileContent('../mobile/www/index.html', '</body>', '<script src="cordova.js"></script></body>')
  }
  await ereaseFile('./build-temp')
}
postBuild()