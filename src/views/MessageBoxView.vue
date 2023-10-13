<script setup lang="ts">
import MessageBox from '@/components/MessageBox.vue'
</script>

<template>
  <div>
    <h3>Example 1 (message only, as prop)</h3>
    <MessageBox message="My message" />

    <h3>Example 2 (message and title, as props)</h3>
    <MessageBox title="My title" message="My message" />

    <h3>Example 3 (message and title, as slots)</h3>
    <MessageBox>
      <template #title>
        <div
          :style="{
            color: 'black',
            fontSize: 'xx-large',
            fontWeight: 'bold',
            textAlign: 'center'
          }"
        >
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
          Title
        </div>
      </template>
      <div
        :style="{
          color: 'black',
          textAlign: 'center'
        }"
      >
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
        <div>My message 2</div>
      </div>
    </MessageBox>
  </div>
</template>
