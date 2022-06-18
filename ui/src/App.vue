<script setup lang="ts">
import { io } from 'socket.io-client'

io('ws://localhost:3000')
</script>

<template>
  <router-view class="h-screen w-screen bg-gray-800" />
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
