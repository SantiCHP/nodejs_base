const os = require ('node:os')

console.log("Operative Sistem Information:")
console.log("_____________________________")

console.log('OS Name: ', os.platform())
console.log('OS Version: ', os.release())
console.log('OS Architecture: ', os.arch())
console.log('Number of CPUs: ', os.cpus()) // <-- Con esto vamos a porder escalar procesos en Node
console.log('Memory: ', os.totalmem() / 1024 / 1024 )
console.log('Free Memory: ', os.freemem() / 1024 / 1024 )
console.log('Uptime: ', os.uptime() / 60 / 60 )