import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FancyButton from '../FancyButton.vue'

describe('FancyButton', () => {
  it('without text if no slot specified', () => {
    const wrapper = mount(FancyButton)
    expect(wrapper.find('button').text()).toBe('')
  })
  it('with slot text', () => {
    const wrapper = mount(FancyButton, {
      slots: {
        default: 'my button text'
      }
    })
    expect(wrapper.find('button').text()).toBe('my button text')
  })
})
