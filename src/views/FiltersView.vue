<script setup lang="ts">
import { customFilter } from '@/utils/filtersV4Final'
import { customFilter as customFilterOK } from '@/utils/filtersV5'

const array = [1, '', 'a', null, 'hello', undefined, 42, 0, 10, false, '0', true]
console.log(array)
console.log(JSON.stringify(array))

function getElementString(element: any) {
  return JSON.stringify(element) || 'undefined'
}
</script>

<template>
  <div>
    <h1>Filters page</h1>

    <h2>Original array</h2>
    <h3>
      [
      <span v-for="element in array" :key="getElementString(element)">
        {{ getElementString(element) }},
      </span>
      ]
    </h3>

    <h2>Filter 1: remove `undefined` elements</h2>
    <h3>{{ customFilter(array) }}</h3>

    <h2>Filter 2: optionally remove `null` elements</h2>
    <h3>{{ customFilter(array, true, true) }}</h3>

    <h2>Filter 3: optionally remove `false` elements</h2>
    <h3>{{ customFilter(array, true, true, true) }}</h3>

    <h2>Filter 4: optionally remove `''` elements</h2>
    <h3>{{ customFilter(array, true, true, true, true) }}</h3>

    <h2>Filter 5: optionally remove `0` elements</h2>
    <h3>{{ customFilter(array, true, true, true, true, true) }}</h3>

    <h2>Filter 6: optionally remove `'0'` elements</h2>
    <h3>{{ customFilter(array, true, true, true, true, true, true) }}</h3>

    <h2>Filter 7: custom filtering</h2>
    <h3>{{ customFilterOK(array, (elem) => !!elem && elem !== 'hello') }}</h3>
  </div>
</template>

<style scoped>
h1,
h2,
h3 {
  color: var(--color-heading);
  font-weight: bold;
}

h3 {
  padding-bottom: 1.5rem;
}
</style>
@/utils/filtersV4Final
