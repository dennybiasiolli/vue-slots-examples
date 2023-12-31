import { it, expect, describe } from 'vitest'
import { customFilter } from '../filtersV4'

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

  it('removes also `false` values', () => {
    expect(customFilter(['foo', undefined, 'bar', null, false], true, true, true, true)).toEqual([
      'foo',
      'bar'
    ])
  })

  it('removes also `0` values', () => {
    expect(
      customFilter(['foo', undefined, 'bar', null, false, '', 0], true, true, true, true, true)
    ).toEqual(['foo', 'bar'])
  })

  it("removes also `'0'` values", () => {
    expect(
      customFilter(
        ['foo', undefined, 'bar', null, false, '', 0, '0'],
        true,
        true,
        true,
        true,
        true,
        true
      )
    ).toEqual(['foo', 'bar'])
  })
})
