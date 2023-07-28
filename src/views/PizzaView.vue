<script setup lang="ts">
import { ref } from 'vue'
import PizzaSlots from '@/components/PizzaSlots.vue'
import PizzaStyle from '@/components/PizzaStyle.vue'
import {
  CrustStyle,
  CrustComposition,
  Sauce,
  Topping,
  crustCompositionMap,
  crustStyleMap,
  sauceMap,
  toppingMap
} from '@/types'

const selectedCrustStyle = ref(CrustStyle.PAN)
const selectedCrustComposition = ref(CrustComposition.WHITE)
const selectedSauce = ref(Sauce.TOMATO)
const selectedToppings = ref([Topping.CHEESE, Topping.BASIL])
</script>

<template>
  <div>
    <h1>Customize your pizza</h1>

    <h2>Crust style</h2>
    <span v-for="(crustStyle, key) of crustStyleMap" :key="key" class="pizza-element">
      <input type="radio" v-model="selectedCrustStyle" :value="key" />
      {{ crustStyle.name }}
    </span>

    <h2>Crust composition</h2>
    <span v-for="(crustComposition, key) of crustCompositionMap" :key="key" class="pizza-element">
      <input type="radio" v-model="selectedCrustComposition" :value="key" />
      {{ crustComposition.name }}
    </span>

    <h2>Sauce</h2>
    <span v-for="(sauce, key) of sauceMap" :key="key" class="pizza-element">
      <input type="radio" v-model="selectedSauce" :value="key" />
      {{ sauce.name }}
    </span>

    <h2>Toppings</h2>
    <span v-for="(topping, key) of toppingMap" :key="key" class="pizza-element">
      <input type="checkbox" v-model="selectedToppings" :value="key" />
      {{ topping.name }}
    </span>

    <h1>Selected pizza</h1>

    <PizzaSlots
      :crustStyle="crustStyleMap[selectedCrustStyle]"
      :crustComposition="crustCompositionMap[selectedCrustComposition]"
      :sauce="sauceMap[selectedSauce]"
      :toppings="selectedToppings.map((topping) => toppingMap[topping])"
    >
      <template #default="{ crustStyle, crustComposition, sauce, toppings }">
        <PizzaStyle
          :crustStyle="crustStyle"
          :crustComposition="crustComposition"
          :sauce="sauce"
          :toppings="toppings"
        />
      </template>
    </PizzaSlots>
  </div>
</template>

<style scoped>
.pizza-element {
  margin: 0 5px;
  white-space: nowrap;
}
</style>
