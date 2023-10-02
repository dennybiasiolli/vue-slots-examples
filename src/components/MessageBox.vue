<script setup lang="ts">
export interface Props {
  title?: string
  message?: string
}

defineProps<Props>()
</script>

<template>
  <div v-if="title || $slots.title" class="message-box-title">
    <slot name="title">
      {{ title }}
    </slot>
  </div>

  <div class="message-box-message">
    <slot>
      {{ message }}
    </slot>
  </div>

  <div v-if="$slots.footer" class="message-box-footer">
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.message-box-title {
  background-color: darkslategray;
  font-size: large;
  padding: 5px;
}

.message-box-message {
  background-color: slategray;
  font-size: large;
  padding: 10px;
}

.message-box-footer {
  background-color: gray;
  font-size: large;
  padding: 5px 10px;
}
</style>