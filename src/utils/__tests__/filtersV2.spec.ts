import { it, expect, describe } from 'vitest'
import { customFilter } from '../filtersV2'

describe('customFilter', () => {
  it('customFilter removes `undefined` values', () => {
    expect(
      customFilter(['foo', undefined, 'bar'])
    ).toEqual(['foo', 'bar'])
  })
  
  it('customFilter removes also `null` values', () => {
    expect(
      customFilter(
        ['foo', undefined, 'bar', null],
        true,
        true
      )
    ).toEqual(['foo', 'bar'])
  })
})

