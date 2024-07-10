// Array : Les Méthodes courantes
// http://localhost:3000/isolated/final/06.js

import displayText, { App, init } from "../lib/exerciseHelper";
const exercice = () => {
init("Array : Les Méthodes courantes")


const computers = [
  {
    id: 'pc-1',
    name: 'MacBook Pro',
    features: [
      'usb-c',
      'screen-15',
      'batterie',
      'keyboard',
      'webcam',
      'ssd-1to',
    ],
  },
  {
    id: 'pc-2',
    name: 'Lenovo',
    features: ['usb-a', 'screen-15', 'batterie', 'keyboard','ssd-500go'],
  },
  {
    id: 'pc-3',
    name: 'MSI',
    features: [
      'usb-a',
      'screen-13',
      'batterie',
      'keyboard',
      'webcam',
      'ssd-500go',
    ],
  },
]

displayText(`Mon ordinateur préferé est le  ${computers.find(computer => computer.name === "MacBook Pro").name}`)

displayText(`Y a t-il au moins un pc avec un ssd-500go ? :  ${computers.some(computer => computer.features.includes('ssd-500go'))}`)

displayText(`Tous les pc ont un ssd-500go ? :  ${computers.every(computer => computer.features.includes('ssd-500go'))}`)

const ids = computers.map(computer => computer.id)
displayText(`Tous les ids  ${ids.toString()}`)


const webCamPc = computers.filter(computer => computer.features.includes('webcam'))
displayText(`Les pc avec webcam :  ${webCamPc.map(computer => computer.name).toString()}`)
};
export default () => <App exercice={exercice} />;