"use client"
// // JavaScript - Template Literals
// http://localhost:3000/isolated/final/02.js

import displayText, { App, init } from "../lib/exerciseHelper";
const exercice = () => {
init("JavaScript - Template Literals")

const five = 5
const ten = 10
const twoHundred = 200

const label = `"Le nombre le plus grand entre ${five} ${ten} ${twoHundred} est ${Math.max(five, ten, twoHundred)} !`

displayText(label)
};
export default () => <App exercice={exercice} />;