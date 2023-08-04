import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SubmitButton from '../SubmitButton.vue'

describe('SubmitButton', () => {
  it('with default text if no slot specified', () => {
    const wrapper = mount(SubmitButton)
    expect(wrapper.find('button').text()).toBe('Submit')
  })
  it('with slot text', () => {
    const wrapper = mount(SubmitButton, {
      slots: {
        default: 'Save'
      }
    })
    expect(wrapper.find('button').text()).toBe('Save')
  })
})
