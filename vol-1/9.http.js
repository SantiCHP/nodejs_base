const http = require('node:http')
const { findAvailablePorts } = require('./10.free-ports.js')

const desiredPort = process.env.PORT ?? 3000
// De este modo si lanzamos por ejemplo PORT=6666 node 9.http.js usará el valor que hemos asignado en la variable de entorno. De lo contrario usará el puerto por defecto 3000
const server = http.createServer((req, res) => {
  console.log('Request recived')
  res.end('Hello world')
})

findAvailablePorts(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
