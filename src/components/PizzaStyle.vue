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
  <div class="pizza-container">
    <div class="pizza">
      <div
        v-for="topping in toppings"
        :key="topping.key"
        class="topping"
        :class="topping.key"
      ></div>
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

.pizza .topping {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
}

.pizza .cheese {
  z-index: 0;
  background-image: radial-gradient(circle at 5px 5px, #ffeb3b 2px, transparent 10px);
  background-size: 15px 15px;
}

.pizza .basil {
  z-index: 16;
  background-image: radial-gradient(
      circle at 10px 0px,
      transparent 6px,
      #4caf50 5px,
      #4caf50 11px,
      transparent 13px
    ),
    radial-gradient(
      circle at 0px 10px,
      transparent 6px,
      #4caf50 5px,
      #4caf50 11px,
      transparent 13px
    );
  background-size:
    80px 90px,
    50px 50px;
  transform: rotate(69deg);
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
</style>
