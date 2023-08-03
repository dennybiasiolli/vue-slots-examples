<script setup lang="ts">
// credits to https://codepen.io/baumannzone/pen/ZEBYEOm
import { CrustComposition, CrustStyle, Sauce, Topping } from '@/types'
import { computed } from 'vue'

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

const props = defineProps<Props>()

const chorreoColor = computed(() => {
  if (props.toppings.some((topping) => topping.key===Topping.MOZZARELLA)) {
    return "#ebe5b2";
  }
  return props.sauce.color;
})
</script>

<template>
  <div class="pizza-container">
    <div class="pizza">
      <div
        v-for="topping in toppings"
        :key="topping.key"
        class="topping"
        :class="topping.key"
      >
        <div v-if="topping.key === 'basil'" class="leaf"></div>
      </div>
      <div class="slices">
        <div class="slice slice-1"></div>
        <div class="slice slice-2"></div>
        <div class="slice slice-3"></div>
        <div class="slice slice-4"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pizza-container {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.pizza {
  position: relative;
  width: 400px;
  height: 400px;
  background-color: v-bind('sauce.color');
  border-radius: 50%;
  box-shadow: 0 0 0px v-bind('crustStyle.size') v-bind('crustComposition.color');
}

.pizza:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 50px;
  left: 198px;
  background-color: v-bind('chorreoColor');
  border-radius: 0 0 10px 10px;
  box-shadow: 12px -1px v-bind('chorreoColor');
  transform: translateX(3px) translateY(-1px);
  animation: chorreo 4s ease-out infinite;
}

.pizza .topping {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
}

.pizza .mozzarella {
  z-index: 0;
  background-image: radial-gradient(circle at 30px 30px, #ebe5b2 5px, transparent 60px);
  background-size: 60px 60px;
}

.pizza .basil .leaf {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #4caf50;
  z-index: 13;
  border-radius: 100px 0;
  box-shadow: 50px 100px #4caf50, 150px 120px #4caf50, 130px 40px #4caf50, 200px 250px #4caf50, 250px 300px #4caf50, 300px 100px #4caf50, 350px 200px #4caf50, 35px 280px #4caf50, 150px 320px #4caf50, 130px 40px #4caf50, 100px 200px #4caf50, 250px 60px #4caf50, 230px 160px #4caf50;
}

.pizza .pepperoni {
  transform: rotate(15deg);
  z-index: 1;
  background-image: radial-gradient(
    circle at 40px 40px,
    #ea5353 14px,
    #e21c1c 16px,
    transparent 18px
  );
  background-size: 80px 80px;
}

.pizza .onions {
  z-index: 2;
  background-image: radial-gradient(
      circle at 10px 0px,
      transparent 6px,
      #d2d2d2 5px,
      #f5f5f5 11px,
      transparent 13px
    ),
    radial-gradient(
      circle at 0px 10px,
      transparent 6px,
      #d2d2d2 5px,
      #f5f5f5 11px,
      transparent 13px
    );
  background-size:
    80px 90px,
    150px 150px;
}

.pizza .olives {
  z-index: 3;
  transform: rotate(25deg);
  background-image: radial-gradient(
    circle at 70px 70px,
    #455a64 3px,
    #374850 9px,
    transparent 10px
  );
  background-size: 100px 100px;
}

.pizza .egg {
  transform: rotate(15deg);
  z-index: 1;
  background-image: radial-gradient(
    circle at 40px 40px,
    #f57f18 5px,
    #ffefc1 16px,
    transparent 18px
  );
  background-size: 100px 100px;
}

.pizza .zucchini {
  transform: rotate(45deg);
  z-index: 1;
  background-image: radial-gradient(
    circle at 40px 40px,
    #2dba20 14px,
    #0d4d07 16px,
    transparent 18px
  );
  background-size: 60px 60px;
}

.pizza .cherry-tomatoes {
  transform: rotate(70deg);
  z-index: 3;
  background-image: radial-gradient(
    circle at 30px 30px,
    #f52525 14px,
    #f52525 16px,
    transparent 18px
  );
  background-size: 80px 80px;
}

.pizza .slices {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.pizza .slices .slice {
  width: 1px;
  height: 100%;
  background-color: v-bind('crustComposition.color');
}

.pizza .slices .slice-1 {
  transform: rotate(45deg);
}

.pizza .slices .slice-2 {
  transform: rotate(90deg);
}

.pizza .slices .slice-3 {
  transform: rotate(135deg);
}

.pizza .slices .slice-4 {
  transform: rotate(180deg);
}

@-moz-keyframes chorreo {
  50% {
    height: 100px;
  }
}
@-webkit-keyframes chorreo {
  50% {
    height: 100px;
  }
}
@-o-keyframes chorreo {
  50% {
    height: 100px;
  }
}
@keyframes chorreo {
  50% {
    height: 100px;
  }
}
</style>
