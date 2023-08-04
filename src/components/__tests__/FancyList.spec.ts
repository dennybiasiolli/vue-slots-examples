import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FancyList from '../FancyList.vue'

describe('FancyList', () => {
  it('with default content', async () => {
    const wrapper = mount(FancyList, { props: { apiUrl: 'foo/bar/' } })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('with item slot', async () => {
    const wrapper = mount(FancyList, {
      props: { apiUrl: 'foo/bar/' },
      slots: {
        item: `Custom render: {{ params.body }}`
      }
    })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
