<script setup lang="ts">
import { computed, ref } from 'vue'
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

const pizzaName = ref('Custom pizza')
const crustStyleVal = ref(CrustStyle.PAN)
const crustStyleObj = computed(() => crustStyleMap[crustStyleVal.value])
const crustCompositionVal = ref(CrustComposition.WHITE)
const crustCompositionObj = computed(() => crustCompositionMap[crustCompositionVal.value])
const sauceVal = ref(Sauce.TOMATO)
const sauceObj = computed(() => sauceMap[sauceVal.value])
const toppingsVal = ref([Topping.MOZZARELLA, Topping.BASIL])
const toppingObjs = computed(() => toppingsVal.value.map((topping) => toppingMap[topping]))
const displayComponentVal = ref(0)
</script>

<template>
  <div>
    <h1>Customize your pizza</h1>

    <h2>Crust style</h2>
    <span v-for="(crustStyle, key) of crustStyleMap" :key="key" class="pizza-element">
      <input type="radio" v-model="crustStyleVal" :value="key" />
      {{ crustStyle.name }}
    </span>

    <h2>Crust composition</h2>
    <span v-for="(crustComposition, key) of crustCompositionMap" :key="key" class="pizza-element">
      <input type="radio" v-model="crustCompositionVal" :value="key" />
      {{ crustComposition.name }}
    </span>

    <h2>Sauce</h2>
    <span v-for="(sauce, key) of sauceMap" :key="key" class="pizza-element">
      <input type="radio" v-model="sauceVal" :value="key" />
      {{ sauce.name }}
    </span>

    <h2>Toppings</h2>
    <span v-for="(topping, key) of toppingMap" :key="key" class="pizza-element">
      <input type="checkbox" v-model="toppingsVal" :value="key" />
      {{ topping.name }}
    </span>

    <h2>Display</h2>
    <ul>
      <li><input type="radio" v-model="displayComponentVal" :value="0" /> Default template</li>
      <li>
        <input type="radio" v-model="displayComponentVal" :value="1" /> Customizing crust, sauce and
        single topping
      </li>
      <li>
        <input type="radio" v-model="displayComponentVal" :value="2" /> Customizing crust, sauce and
        topping list and topping
      </li>
      <li>
        <input type="radio" v-model="displayComponentVal" :value="3" /> Customizing the entire pizza
      </li>
    </ul>

    <br>

    <PizzaSlots
      v-if="displayComponentVal === 0"
      :name="pizzaName"
      :crustStyle="crustStyleObj"
      :crustComposition="crustCompositionObj"
      :sauce="sauceObj"
      :toppings="toppingObjs"
    >
    </PizzaSlots>

    <PizzaSlots
      v-if="displayComponentVal === 1"
      :name="pizzaName"
      :crustStyle="crustStyleObj"
      :crustComposition="crustCompositionObj"
      :sauce="sauceObj"
      :toppings="toppingObjs"
    >
      <template #crust>
        <div
          :style="{
            border: `${crustStyleObj.size} solid ${crustCompositionObj.color}`,
            backgroundColor: crustCompositionObj.color,
            color: 'black'
          }"
        >
          {{ crustStyleObj.name }}, made with {{ crustCompositionObj.name.toLowerCase() }}
        </div>
      </template>

      <template #sauce>
        <div
          :style="{
            backgroundColor: sauceObj.color,
            color: 'black',
            padding: '0 5px'
          }"
        >
          {{ sauceObj.name }}
        </div>
      </template>

      <template #topping="{ topping }">
        <span
          :style="{
            backgroundColor: 'lightgrey',
            color: 'black',
            padding: '2px 5px'
          }"
        >
          {{ topping.name }}
        </span>
      </template>
    </PizzaSlots>

    <PizzaSlots
      v-if="displayComponentVal === 2"
      :name="pizzaName"
      :crustStyle="crustStyleObj"
      :crustComposition="crustCompositionObj"
      :sauce="sauceObj"
      :toppings="toppingObjs"
    >
      <template #crust>
        <div
          :style="{
            border: `${crustStyleObj.size} solid ${crustCompositionObj.color}`,
            backgroundColor: crustCompositionObj.color,
            color: 'black'
          }"
        >
          {{ crustStyleObj.name }}, made with {{ crustCompositionObj.name.toLowerCase() }}
        </div>
      </template>

      <template #sauce>
        <div
          :style="{
            backgroundColor: sauceObj.color,
            color: 'black',
            padding: '0 5px'
          }"
        >
          {{ sauceObj.name }}
        </div>
      </template>

      <template #toppings>
        <span
          v-for="topping in toppingObjs"
          :key="topping.key"
          :style="{
            backgroundColor: 'lightgrey',
            color: 'black',
            marginRight: '2px',
            padding: '2px 5px'
          }"
        >
          {{ topping.name }}
        </span>
      </template>
    </PizzaSlots>

    <PizzaSlots
      v-if="displayComponentVal === 3"
      :name="pizzaName"
      :crustStyle="crustStyleObj"
      :crustComposition="crustCompositionObj"
      :sauce="sauceObj"
      :toppings="toppingObjs"
    >
      <template #pizza>
        <PizzaStyle
          :crustStyle="crustStyleObj"
          :crustComposition="crustCompositionObj"
          :sauce="sauceObj"
          :toppings="toppingObjs"
        />
      </template>
    </PizzaSlots>

    <br><br><br><br>
  </div>
</template>

<style scoped>
.pizza-element {
  margin: 0 5px;
  white-space: nowrap;
}
</style>
