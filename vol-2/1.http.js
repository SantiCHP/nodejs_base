const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

// De este modo si lanzamos por ejemplo PORT=6666 node 9.http.js usará el valor que hemos asignado en la variable de entorno. De lo contrario usará el puerto por defecto 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/contact') {
    res.end('<h1>Contacto</h1>')
  } else if (req.url === '/thisisfine.jpg') {
    fs.readFile('./thisisfine.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404 // Not found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
