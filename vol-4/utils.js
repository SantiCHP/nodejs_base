// Como leer un JSON en ESModule
//import fs from 'node:fs'
//const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// Forma actual de leer un json en ESModule
import { createRequire } from 'node:module'
const require = createRequire( import.meta.url )
export const readJSON = (path) => require(path)
// Se propone para un futuro hacer imports de json de la siguiente manera
// import movies from './movies.json' with { type: 'json' }