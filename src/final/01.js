"use client"
// ESModule Import / Export
// http://localhost:3000/alone/exercise/01.js

import displayText, { App, init } from "../lib/exerciseHelper";
import roomHelper, {TEMP_MAX, calculPerimetre} from './helper/roomHelper';
const exercice = () => {

init()
displayText('Hello World')

let lib = "Air de d'un pièce de 2 par 5 donne " + roomHelper(2,5)
displayText(lib)

lib = "Périmètre de d'un pièce de 2 par 5 donne " + calculPerimetre(2,5)
displayText(lib)

lib = "La température max d'une pièce est " + TEMP_MAX
displayText(lib)
};
export default () => <App exercice={exercice} />;