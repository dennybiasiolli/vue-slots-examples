import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseLayout from '../BaseLayout.vue'

describe('BaseLayout', () => {
  it('with default content', () => {
    const wrapper = mount(BaseLayout)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('with all slots', () => {
    const wrapper = mount(BaseLayout, {
      slots: {
        header: 'header content',
        default: 'Foo',
        footer: 'footer content'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
