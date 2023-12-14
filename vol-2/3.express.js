const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 3000

const app = express()
app.disable('x-powered-by')

app.use(express.json())

/* app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()
  // Then here we have request that are POST and headers are content-type: application/json
  let body = ''

  // Listen the event data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // Now mutate the request and add the information in req.body
    req.body = data
    next()
  })
}) */

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // With req.body we should save on db
  res.status(201).json(req.body)
})

// The last path that will give response
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listeningon port: http://localhost:${PORT}`)
})
