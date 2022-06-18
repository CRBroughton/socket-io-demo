<script setup lang="ts">
import { useStore } from '@/store'

interface ResponseData {
  title: string | undefined
  subheading: string
  viteHeading: string
  vueHeading: string
}

const data = reactive<ResponseData>({
  title: undefined ?? 'Fallback title',
  subheading: '',
  viteHeading: '',
  vueHeading: '',
})

onMounted(async () => {
  let response = await fetch('/')
  response = await response.json()

  Object.assign(data, response)
})

const store = useStore()
const { count } = storeToRefs(store)
</script>

<template>
  <h1 class="text-3xl my-5">
    {{ data.title }}
  </h1>

  <p>{{ data.subheading }}</p>

  <p class="mb-5">
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      {{ data.viteHeading }}
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">{{ data.vueHeading }}</a>
  </p>

  <button type="button" @click="store.increment">
    count is: {{ count }}
  </button>
  <p class="mb-5">
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
