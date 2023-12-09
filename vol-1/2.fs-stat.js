const fs = require('node:fs') // A partir de Node 16 se recomienda poner node: antes del módulo

const stats = fs.statSync('./file.txt')

console.log(
  stats.isFile(), // Si es un fichero
  stats.isDirectory(), // Si es un directorio
  stats.isSymbolicLink(), // Si es un enlace simbólico
  stats.size // Tamaño en bytes
)
