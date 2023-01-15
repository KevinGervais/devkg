const fs = require('fs');
const tsFileList = []
const iconList = []

function getClientFiles(currentPath, base) {
  const fileList = fs.readdirSync(`./${base}/src${currentPath ? currentPath: ""}/`, {
    withFileTypes: true
  })
  fileList.forEach(file => {
    if (currentPath.includes("icons")) {
      return
    }
    if (file.isDirectory()) {
      getClientFiles(`${currentPath}/${file.name}`, base)
    } else if (
      (file.name.endsWith(".ts") || file.name.endsWith(".tsx"))
    ) {
      tsFileList.push(`./${base}/src${currentPath ? currentPath: ""}/${file.name}`)
    }
  })
}

function getIconList() {
  const fileList = fs.readdirSync(`./client/src/icons/`, {
    withFileTypes: true
  })
  fileList.forEach(file => {
    if (file.name.endsWith(".tsx")) {
      const iconName =  file.name
      .replace("fal-", "")
      .replace("fab-", "")
      .replace("far-", "")
      .replace("fas-", "")
      .replace(".tsx", "")
      iconList.push([`./client/src/icons/${file.name}`, iconName])
    }
  })
}

getClientFiles("", "client")
getClientFiles("", "shared")
getClientFiles("", "server")
getIconList()
let concatAllFileContents = ""
tsFileList.forEach(filePath => {
  const fileContent = fs.readFileSync(filePath, {
    encoding: "utf-8"
  })
  concatAllFileContents += `
${fileContent}`
})

iconList.forEach(([path, iconName]) => {
  if (!concatAllFileContents.includes(iconName)) {
    fs.unlinkSync(path)
  }
})
