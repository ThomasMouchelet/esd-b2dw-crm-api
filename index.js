const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
const customerRouter = require('./src/routers/customer.router')
const connect = require('./config/mongoose.config')

connect()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", customerRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})