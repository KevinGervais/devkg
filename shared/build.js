const { mkdir, existsSync } = require("fs")
const { ncp } = require('ncp')

async function copyFiles(from, to) {
  console.info(`Copy files from ${from} to ${to}`)
  return new Promise((resolve, reject) => {
    ncp(from, to, function (err) {
      if (err) reject(err)
      else resolve()
    })
  })
}

async function mkDir(path) {
  console.info(`Create folder  in ${path}`)
  return new Promise((resolve, reject) => {
    mkdir(path, () => {
      resolve(undefined)
    })
  })
}


async function shareWithClient() {
  if (!existsSync("../client/src/shared")) {
    await mkDir("../client/src/shared")
  }
  await copyFiles("./src/", "../client/src/shared")
}

shareWithClient()