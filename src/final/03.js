// Décomposition et Shorthand property names
// http://localhost:3000/isolated/final/03.js

import displayText, { App, init } from "../lib/exerciseHelper";
const exercice = () => {
init('Décomposition et Shorthand property names')

// terrain de foot
const longueur = 120
const largeur = 90
const type = 'footbal'

const terrainFoot = {type, longueur, largeur}
const terrainBasket = {type: 'basket', longueur: 28, largeur: 15}

function calculAir({type, longueur, largeur}) {
  displayText(
    `La surface du terrain de ${type} est de ${longueur * largeur} m²`,
  )
}

calculAir(terrainFoot)
calculAir(terrainBasket)
};
export default () => <App exercice={exercice} />;