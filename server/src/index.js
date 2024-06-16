const express = require('express')
const app = express()
const connection = require('./db/connection')
require('dotenv').config()
app.use(express.json())
connection()
const userRoutes = require('./routes/user')
app.use(userRoutes)
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})