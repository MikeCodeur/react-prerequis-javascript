"use client"
// Fonctions fléchées
// http://localhost:3000/isolated/final/04.js

import displayText, { App, init } from "../lib/exerciseHelper";
const exercice = () => {
init("Fonctions fléchées")

const calculEnergie = (masse, celerite = 300000000) => {
  let energie =  masse * Math.pow(celerite, 2) //E = mc²
  energie = Math.round(energie)
  return energie
}

const m = 0.005
displayText(`L'énergie d'une masse de ${m} kg et de ${calculEnergie(m)} joules`)
};
export default () => <App exercice={exercice} />;




