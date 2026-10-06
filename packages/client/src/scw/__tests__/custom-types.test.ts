import { describe, expect, it } from 'vitest'
import { Decimal } from '../custom-types.js'

describe('Decimal', () => {
  it('stores the value as a string', () => {
    expect(new Decimal('0.01').toString()).toBe('0.01')
  })

  it('marshals into a { value } object', () => {
    expect(new Decimal('42.5').marshal()).toStrictEqual({ value: '42.5' })
  })
})
