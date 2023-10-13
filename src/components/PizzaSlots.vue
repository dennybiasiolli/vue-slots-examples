<script setup lang="ts">
import { CrustComposition, CrustStyle, Sauce, Topping } from '@/types'

export interface Props {
  name?: string
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
  <div class="pizza-box">
    <h1 class="pizza-title">{{ name }}</h1>
    <slot name="pizza">
      <slot name="crust">
        <div>{{ crustStyle.name }}, made with {{ crustComposition.name.toLowerCase() }}</div>
      </slot>

      <slot name="sauce" :sauce="sauce">
        <div>{{ sauce.name }}</div>
      </slot>

      <slot name="toppings">
        Toppings:
        <ul>
          <li v-for="topping in toppings" :key="topping.key">
            <slot name="topping" :topping="topping">
              {{ topping.name }}
            </slot>
          </li>
        </ul>
      </slot>
    </slot>
  </div>
</template>

<style scoped>
.pizza-box {
  border: 1px solid lightgrey;
  padding: 5px;
  width: 450px;
}
.pizza-title {
  font-weight: bold;
}
</style>
