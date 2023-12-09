const fs = require('node:fs')

console.log('Reading the first file... ')
const text = fs.readFileSync('./file.txt', 'utf-8')
console.log('First text: ', text)

console.log('-----> Do something meanwhile reading first text')

console.log('Reading the second file... ')
const secondText = fs.readFileSync('./file2.txt', 'utf-8')
console.log('Second file: ', secondText)