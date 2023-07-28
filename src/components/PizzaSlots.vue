<script setup lang="ts">
import { CrustComposition, CrustStyle, Sauce, Topping } from '@/types'

export interface Props {
  crustStyle: {
    key: CrustStyle
    name: string
    size: string
  }
  crustComposition: {
    key: CrustComposition
    name: string
    color: string
  }
  sauce: {
    key: Sauce
    name: string
    color: string
  }
  toppings: {
    key: Topping
    name: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <slot
    :crustStyle="crustStyle"
    :crustComposition="crustComposition"
    :sauce="sauce"
    :toppings="toppings"
  >
    <div
      :style="{
        border: `${crustStyle.size} solid ${crustComposition.color}`,
        backgroundColor: crustComposition.color,
        color: 'black',
        margin: '5px',
        padding: '2px'
      }"
    >
      {{ crustStyle.name }}, made with {{ crustComposition.name.toLowerCase() }}
      <div
        :style="{
          backgroundColor: sauce.color,
          color: 'black',
          margin: '5px',
          padding: '2px'
        }"
      >
        {{ sauce.name }}
        <div>
          <span
            v-for="topping in toppings"
            :key="topping.key"
            :style="{
              backgroundColor: 'lightgrey',
              color: 'black',
              margin: '2px',
              padding: '2px'
            }"
          >
            {{ topping.name }}
          </span>
        </div>
      </div>
    </div>
  </slot>
</template>
