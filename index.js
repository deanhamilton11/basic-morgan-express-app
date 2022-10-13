const express = require('express')
const morgan = require('morgan')

const PORT = 3000

const app = express()
app.use(morgan('common'))

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.get('/some-route-with-an-error', (req, res) => {
  throw 'Error out here!'
  return res.send('Never gonna happen')
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})