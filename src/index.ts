/* eslint-disable no-console */
import http from 'http'
import express from 'express'
const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})