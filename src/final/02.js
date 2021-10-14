// // JavaScript - Template Literals
// http://localhost:3000/isolated/final/02.js

import displayText, {init} from './helper/exerciseHelper'
init("JavaScript - Template Literals")

const five = 5
const ten = 10
const twoHundred = 200

const label = `"Le nombre le plus grand entre ${five} ${ten} ${twoHundred} est ${Math.max(five, ten, twoHundred)} !`

displayText(label)