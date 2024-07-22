// Nullish coalishing / Optionnel chaining / Ternaire
// http://localhost:3000/isolated/final/05.js

import displayText, {init} from './helper/exerciseHelper'
init('Nullish coalishing / Optionnel chaining / Ternaire')

const pays = null //{nom: "France", countryCode : "FR"}
const ville = {nom: 'Paris', code: 'PAR', countryCode: 'FR'}
const adresse = {rue: 'mike', numero: 17, ville, pays}
const personne = {nom: 'mike', adresse}

const checkCountryCode = personne => {
  if (
    personne?.adresse?.ville?.countryCode ===
    personne?.adresse?.pays?.countryCode
  ) {
    return true
  } else {
    return false
  }
}

displayText(
  checkCountryCode(personne)
    ? 'le countryCode ville et pays sont identiques '
    : 'le countryCode ville et pays sont differents',
)

const getPaysOrDefault = personne => {
  return personne.adresse.pays ?? {nom: 'France', countryCode: 'FR'}
}
displayText(`Le pays est ${getPaysOrDefault(personne).nom}`)
