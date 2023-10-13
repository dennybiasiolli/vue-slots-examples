import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PizzaSlots from '../PizzaSlots.vue'
import {
  CrustComposition,
  CrustStyle,
  Sauce,
  Topping,
  crustCompositionMap,
  crustStyleMap,
  sauceMap,
  toppingMap
} from '@/types'

describe('PizzaSlots', () => {
  it('with default content', () => {
    const wrapper = mount(PizzaSlots, {
      props: {
        name: 'Custom pizza',
        crustStyle: crustStyleMap[CrustStyle.PAN],
        crustComposition: crustCompositionMap[CrustComposition.WHOLE],
        sauce: sauceMap[Sauce.TOMATO],
        toppings: [toppingMap[Topping.MOZZARELLA], toppingMap[Topping.BASIL]]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('h1.pizza-title').text()).toBe('Custom pizza')
  })

  it('with custom pizza slot', () => {
    const wrapper = mount(PizzaSlots, {
      props: {
        name: 'Custom pizza',
        crustStyle: crustStyleMap[CrustStyle.PAN],
        crustComposition: crustCompositionMap[CrustComposition.WHOLE],
        sauce: sauceMap[Sauce.TOMATO],
        toppings: [toppingMap[Topping.MOZZARELLA], toppingMap[Topping.BASIL]]
      },
      slots: {
        pizza: "<h2>foobar</h2>",
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('h1.pizza-title').text()).toBe('Custom pizza')
    expect(wrapper.find('h2').text()).toBe('foobar')
  })

  it('with custom topping scoped slot', () => {
    const wrapper = mount(PizzaSlots, {
      props: {
        name: 'Custom pizza',
        crustStyle: crustStyleMap[CrustStyle.PAN],
        crustComposition: crustCompositionMap[CrustComposition.WHOLE],
        sauce: sauceMap[Sauce.TOMATO],
        toppings: [toppingMap[Topping.MOZZARELLA], toppingMap[Topping.BASIL]]
      },
      slots: {
        topping: `<template #topping="{ topping }">abc-{{ topping.key }}</template>`,
        // also usable as
        // topping: 'abc-{{ params.topping.key }}',
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('h1.pizza-title').text()).toBe('Custom pizza')
    expect(wrapper.findAll('li')[0].text()).toBe('abc-mozzarella')
    expect(wrapper.findAll('li')[1].text()).toBe('abc-basil')
  })
})
