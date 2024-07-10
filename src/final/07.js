// Promise aync await
// http://localhost:3000/isolated/final/07.js

import displayText, { App, init } from "../lib/exerciseHelper";
const exercice = () => {
init("Promise aync await")

function calculNombrePair(nombre = 0) {
  return new Promise((resolve, reject) => {
      if (nombre % 2 === 0) {
        resolve(`OK nombre pair`)
      } else {
        reject(`KO impaire`)
      }
  })
}

calculNombrePair(2).then( e => console.log(e), err => console.error(err))
calculNombrePair(3).then( e => console.log(e), err => console.error(err))

async function calculNombrePairAsync() {
  let result
  try {
    result = await calculNombrePair(2)
    console.log(`success nombre pair, log parent : ${result}`)
    result = await calculNombrePair(3)
    console.log(`failed nombre impair: ${result}`)//ne devrait pas logger
  } catch (error) {
    return `failed nombre impair, log parent ${error}`
  }
}
calculNombrePairAsync().then( e => console.log(e), err => console.error(err))
};
export default () => <App exercice={exercice} />;