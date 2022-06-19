<script setup lang="ts">
import { io } from 'socket.io-client'

interface Message {
  id: number
  message: string
}

const socket = io('ws://localhost:3000')
const messages = ref<Message[]>([])

socket.on('test', (arg: Message) => {
  messages.value.push(arg)
})
</script>

<template>
  <div v-for="item in messages" :key="item.id">
    <div>
      <h1>{{ item.id }}</h1>
      <p>{{ item.message }}</p>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
