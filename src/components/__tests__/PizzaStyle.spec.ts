import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PizzaStyle from '../PizzaStyle.vue'
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

describe('PizzaStyle', () => {
  it('without pineapple', () => {
    const wrapper = mount(PizzaStyle, {
      props: {
        crustStyle: crustStyleMap[CrustStyle.PAN],
        crustComposition: crustCompositionMap[CrustComposition.WHOLE],
        sauce: sauceMap[Sauce.TOMATO],
        toppings: [toppingMap[Topping.MOZZARELLA], toppingMap[Topping.BASIL]]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('with pineapple', () => {
    const wrapper = mount(PizzaStyle, {
      props: {
        crustStyle: crustStyleMap[CrustStyle.CRISPY],
        crustComposition: crustCompositionMap[CrustComposition.WHITE],
        sauce: sauceMap[Sauce.OIL],
        toppings: [toppingMap[Topping.PEPPERONI], toppingMap[Topping.PINEAPPLES]]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('img').exists()).toBe(true)
  })
})
