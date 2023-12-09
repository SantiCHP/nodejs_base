const fs = require('node:fs')

console.log('Reading the first file... ')

const text = fs.readFile('./file.txt', 'utf-8', ( err, text) => { // <---- Ejecutas este callback
    console.log('First text: ',text)
})

console.log('-----> Do something meanwhile reading first text')

console.log('Reading the second file... ')

const secondText = fs.readFile('./file2.txt', 'utf-8', ( err, text) => {
    console.log('Second text: ', text)
})