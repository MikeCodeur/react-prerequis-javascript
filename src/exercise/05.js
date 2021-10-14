// Nullish coalishing / Optionnel chaining / Ternaire
// http://localhost:3000/alone/exercise/05.js

import displayText, {init} from './helper/exerciseHelper'
init("Nullish coalishing / Optionnel chaining / Ternaire")

const pays = null //{nom: "France", countryCode : "FR"}
const ville = {nom: "Paris", code : "PAR", countryCode : "FR"}
const adresse = {rue : "mike",numero:17, ville, pays}
const personne = {nom : "mike", adresse}

// 🐶 A partir d'ici, rendre la function `checkCountryCode` nullSafe grâce à l'Optionnel chaining
// 📑 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining

const checkCountryCode = (personne) => {
  if (personne.adresse.ville.countryCode === personne.adresse.pays.countryCode) {
    return true
  } else {
    return false
  }
}
// 🐶 Utilise une ternaire en une seul ligne à la place de ce if/else
if (checkCountryCode(personne)) {
  displayText("le countryCode ville et pays sont identiques ")
} else {
  displayText("le countryCode ville et pays sont differents ")
}

// 🐶 getPaysOrDefault retourne un Pays si le pays est renseigné, 
// sinon retourne le pays france par default {nom: "France", countryCode : "FR"}
// utilise le Nullish coalishing
// 🤖 let nameSafe = name ?? "anonyme"
const getPaysOrDefault = (personne) => {
  return personne.adresse.pays

}
displayText(`Le pays est ${getPaysOrDefault(personne).nom}`)
