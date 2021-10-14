// Décomposition et Shorthand property names
// http://localhost:3000/isolated/final/03.js


import displayText, {init} from './helper/exerciseHelper'
init("Décomposition et Shorthand property names")

// terrain de foot
const longeur = 120
const largeur = 90
const type = 'footbal'

const terrainFoot = {type, longeur, largeur}
const terrainBasket = {type:"basket", longeur:28, largeur:15}

function calculAir({type, longeur, largeur}) {
  displayText(`La surface du terrain de ${type} est de ${longeur*largeur} m²`)
}

calculAir(terrainFoot)
calculAir(terrainBasket)

