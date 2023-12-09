// Esto solo en los modulos nativos que no tienen promesas nativas
const fs = require('node:fs')
const { promisify } = require('node:util')

const readFilePromise = promisify( fs.readFile)

console.log('Reading the first file... ')

const text = readFilePromise('./file.txt', 'utf-8')
.then( text => {
    console.log('Frist text: ', text)
})

console.log('-----> Do something meanwhile reading first text')

console.log('Reading the second file... ')

const secondText = readFilePromise('./file2.txt', 'utf-8')
.then(text => {
    console.log('Second text: ', text)
})