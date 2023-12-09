const path = require('node:path')


// unix --> /
// windows --> \
// muestra el tipo de barra que usa el sistema operativo en el que corre la app
console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

const base = path.basename('/tmp/schp_secret/passwd.txt')
console.log(base)

const filename = path.basename('/tmp/schp_secret/passwd.txt', '.txt')
console.log(filename)

const extension = path.extname('my.super.image.png')
console.log(extension)