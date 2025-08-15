const express = require('express')
const app = express()
const port = 3000

const env = process.env.ENVIRONMENT;

app.get('/', (req, res) => {
  res.send(`Hello ${env}`)
})

app.get('/planet', (req, res) => {
  res.send(`Hello ${process.env[`${env}_PLANET`]}!!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
