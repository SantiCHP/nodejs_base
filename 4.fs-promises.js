const fs = require('node:fs/promises')

console.log('Reading the first file... ')

const text = fs.readFile('./file.txt', 'utf-8')
.then( text => {
    console.log('Frist text: ', text)
})

console.log('-----> Do something meanwhile reading first text')

console.log('Reading the second file... ')

const secondText = fs.readFile('./file2.txt', 'utf-8')
.then(text => {
    console.log('Second text: ', text)
})