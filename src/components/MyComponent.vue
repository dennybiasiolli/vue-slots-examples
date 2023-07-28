<script setup lang="ts">
const greetingMessage = 'greeting message'
</script>

<template>
  <!-- <MyComponent> template -->
  <div>
    <slot :text="greetingMessage" :count="1"></slot>
  </div>
</template>
