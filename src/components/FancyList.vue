<script setup lang="ts">
import { onMounted, ref } from 'vue'

export interface Props {
  apiUrl: string
}

defineProps<Props>()

interface Item {
  id: number
  body: string
  username: string
  likes: number
}

const items = ref<Item[]>([])

function getExternalData(): Promise<Item[]> {
  return new Promise((resolve) =>
    resolve([
      { id: 1, body: "Cyborgs don't feel pain.", username: 'kyle_reese', likes: 3 },
      { id: 2, body: 'Can you stop it?', username: 'sarah_connor', likes: 7 },
      { id: 3, body: 'Who sent you?', username: 'john_connor', likes: 5 }
    ])
  )
}

onMounted(async () => {
  items.value = await getExternalData()
})
</script>

<template>
  <span>Calling {{ apiUrl }}</span>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot name="item" v-bind="item">{{ item.body }}</slot>
    </li>
  </ul>
</template>
