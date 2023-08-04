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
        crustStyle: crustStyleMap[CrustStyle.PAN],
        crustComposition: crustCompositionMap[CrustComposition.WHOLE],
        sauce: sauceMap[Sauce.TOMATO],
        toppings: [toppingMap[Topping.MOZZARELLA], toppingMap[Topping.BASIL]]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('with custom slot', () => {
    const wrapper = mount(PizzaSlots, {
      props: {
        crustStyle: crustStyleMap[CrustStyle.PAN],
        crustComposition: crustCompositionMap[CrustComposition.WHOLE],
        sauce: sauceMap[Sauce.TOMATO],
        toppings: [toppingMap[Topping.MOZZARELLA], toppingMap[Topping.BASIL]]
      },
      slots: {
        default: `<template #default="scope">
          <h1>{{ scope.crustStyle.key }}</h1>
          <h2>{{ scope.crustComposition.key }}</h2>
          <h3>{{ scope.sauce.key }}</h3>
          <h4>{{ scope.toppings.map(t => t.key).join(", ") }}</h4>
        </template>`
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('h1').text()).toBe('pan')
    expect(wrapper.find('h2').text()).toBe('whole')
    expect(wrapper.find('h3').text()).toBe('tomato')
    expect(wrapper.find('h4').text()).toBe('mozzarella, basil')
  })
})
