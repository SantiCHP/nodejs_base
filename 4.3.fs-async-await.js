// await funciona solo en mjs, en ES module mediante top level await. Permite utilizar el await en el cuerpo de la función.
const { readFile } = require('node:fs/promises')

//IIFE --> Inmediatly Invoked Function Expression
;(
    async () =>{
        console.log('Reading the first file... ')
        const text = await readFile('./file.txt', 'utf-8')
        console.log('First text: ', text)

        console.log('-----> Do something meanwhile reading first text')

        console.log('Reading the second file... ')
        const secondText = await readFile('./file2.txt', 'utf-8')
        console.log('Second text: ', secondText)
    }

)()


