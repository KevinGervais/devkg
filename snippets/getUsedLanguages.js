const fs = require('fs');
const tsFileList = []
const en = {
}
const sayKeywordMap = {
  userAlreadyLogged: true,
  userDoesntExists: true,
  wrongPassword: true,
  userAlreadyExists: true,
  accessDenied: true,
  wrongFileSize: true,
  dataDoesntExists: true,
  wrongNewPassword: true,
  invalidValidator: true,
  invalidEmail: true,
  corruptedData: true,
  locationNotSupported: true,
  invalidLocation: true,
  invalidPhone: true,
  invalidDate: true,
  internalServerError: true,
  verifCodeFirst: true,
  wrongToken: true,
  canada: true,
  unitedStates: true,
  alberta: true,
  britishColumbia: true,
  manitoba: true,
  newBrunswick: true,
  newfoundlandAndLabrador: true,
  northwestTerritories: true,
  novaScotia: true,
  nunavut: true,
  ontario: true,
  princeEdwardIsland: true,
  quebec: true,
  saskatchewan: true,
  yukonTerritory: true,
  alabama: true,
  alaska: true,
  arizona: true,
  arkansas: true,
  california: true,
  colorado: true,
  connecticut: true,
  delaware: true,
  districtOfColumbia: true,
  florida: true,
  georgia: true,
  hawaii: true,
  idaho: true,
  illinois: true,
  indiana: true,
  iowa: true,
  kansas: true,
  kentucky: true,
  louisiana: true,
  maine: true,
  maryland: true,
  massachusetts: true,
  michigan: true,
  minnesota: true,
  mississippi: true,
  missouri: true,
  montana: true,
  nebraska: true,
  nevada: true,
  newHampshire: true,
  newJersey: true,
  newMexico: true,
  newYork: true,
  northCarolina: true,
  northDakota: true,
  ohio: true,
  oklahoma: true,
  oregon: true,
  pennsylvania: true,
  rhodeIsland: true,
  southCarolina: true,
  southDakota: true,
  tennessee: true,
  texas: true,
  utah: true,
  vermont: true,
  virginia: true,
  washington: true,
  westVirginia: true,
  wisconsin: true,
  wyoming: true,
}

function getAllFilesRecursive (currentPath) {
  const fileList = fs.readdirSync(`./client/src${currentPath ? currentPath: ""}/`, {withFileTypes: true })
  fileList.forEach(file => {
    if (file.isDirectory()) {
      getAllFilesRecursive(`${currentPath}/${file.name}`)
    } else if (file.name.endsWith(".ts") || file.name.endsWith(".tsx")){
      tsFileList.push(`./client/src${currentPath ? currentPath: ""}/${file.name}`)
    }
  })
}
getAllFilesRecursive("")
tsFileList.forEach(filePath => {
  const fileContent = fs.readFileSync(filePath, {encoding: "utf-8"})
  fileContent.split("say.").slice(1).forEach(val => {
    const key = val.split(/[^a-zA-Z0-9]/)[0]
    sayKeywordMap[key] = true
  })
})

Object.keys(sayKeywordMap).forEach(key => sayKeywordMap[key] = en[key])