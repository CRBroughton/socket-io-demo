/* eslint-disable no-console */
import http from 'http'
import express from 'express'
import { Server } from 'socket.io'
const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:4000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (_socket) => {
  console.log('a user connected')
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
