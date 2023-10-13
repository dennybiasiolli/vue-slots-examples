import { it, expect, describe } from 'vitest'
import { customFilter } from '../filtersV3'

describe('customFilter', () => {
  it('removes `undefined` values', () => {
    expect(customFilter(['foo', undefined, 'bar'])).toEqual(['foo', 'bar'])
  })

  it('removes also `null` values', () => {
    expect(customFilter(['foo', undefined, 'bar', null], true, true)).toEqual(['foo', 'bar'])
  })

  it('removes also empty values', () => {
    expect(customFilter(['foo', undefined, 'bar', null, ''], true, true, true)).toEqual([
      'foo',
      'bar'
    ])
  })
})
