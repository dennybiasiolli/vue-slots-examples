<script setup lang="ts">
import { ref } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'
import FancyButton from '@/components/FancyButton.vue'
import FancyList from '@/components/FancyList.vue'
import MyComponent from '@/components/MyComponent.vue'
import SubmitButton from '@/components/SubmitButton.vue'

const message = ref('Custom text')
</script>

<template>
  <div>
    <h1>Slots</h1>

    <h2>Slot Content and Outlet</h2>
    <div>
      <FancyButton>Click me!</FancyButton>

      <FancyButton>
        <span style="color: red">Click me!</span>
      </FancyButton>
    </div>

    <h2>Render Scope</h2>
    <div>
      Customize your message: <input type="text" v-model="message" />
      <div>
        {{ message }}
        <FancyButton>
          {{ message }}
        </FancyButton>
      </div>
    </div>

    <h2>Fallback Content</h2>
    <div>
      <SubmitButton />
      <SubmitButton>Save</SubmitButton>
    </div>

    <h2>Named Slots</h2>
    <BaseLayout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>

    <h2>Scoped Slots</h2>
    <MyComponent v-slot="slotProps"> {{ slotProps.text }} {{ slotProps.count }} </MyComponent>

    <h2>Fancy List Example</h2>
    <FancyList api-url="foo/bar/">
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p>by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </FancyList>
  </div>
</template>
