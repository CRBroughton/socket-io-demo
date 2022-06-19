/* eslint-disable no-console */
import 'dotenv/config'
import http from 'http'
import express from 'express'
import { Server } from 'socket.io'
import { instrument } from '@socket.io/admin-ui'

const app = express()
const server = http.createServer(app)

const delay = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time))
}

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:4000', 'https://admin.socket.io'],
    methods: ['GET', 'POST'],
  },
})

instrument(io, {
  auth: {
    type: 'basic',
    username: process.env.SOCKET_UI_USERNAME!,
    password: process.env.SOCKET_UI_PASSWORD!,
  },
})

const messages = [
  {
    id: 1,
    message: 'hi',
  },
  {
    id: 2,
    message: 'hi',
  },
  {
    id: 3,
    message: 'hi',
  },
]

io.on('connection', async (socket) => {
  console.log('a user connected')
  for (const message of messages) {
    socket.emit('test', message)
    await delay(1000)
  }
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
