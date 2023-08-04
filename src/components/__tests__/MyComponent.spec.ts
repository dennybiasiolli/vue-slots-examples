import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MyComponent from '../MyComponent.vue'

describe('MyComponent', () => {
  it('without text if no slot specified', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.text()).toBe('')
  })
  it('with slot and scoped params', () => {
    const wrapper = mount(MyComponent, {
      slots: {
        default: `<template #default="scope">{{ scope.text }} {{ scope.count }}</template>`
      }
    })
    expect(wrapper.text()).toBe('greeting message 1')
  })
})
