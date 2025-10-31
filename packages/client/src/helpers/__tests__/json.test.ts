import { describe, expect, test } from 'vitest'
import { isJSON, isJSONObject } from '../json.js'

describe('isJSON', () => {
  test.each(['str', 200, true, null, [true, 'two', 3], { key: 'value' }])(
    `accepts %s as a valid JSON value`,
    obj => {
      expect(isJSON(obj)).toBeTruthy()
    },
  )

  test.each([
    undefined,
    () => {
      /* noop */
    },
    Symbol(42),
  ])(`rejects %s as a valid JSON value`, obj => {
    expect(isJSON(obj)).toBeFalsy()
  })
})

describe('isJSONObject', () => {
  test.each([{ key: 'value' }])(
    `accepts %s as a valid JSONObject value`,
    obj => {
      expect(isJSONObject(obj)).toBeTruthy()
    },
  )

  test.each([
    'str',
    200,
    true,
    null,
    [true, 'two', 3],
    undefined,
    () => {
      /* noop */
    },
    Symbol(42),
  ])(`rejects %s as a valid JSONObject value`, obj => {
    expect(isJSONObject(obj)).toBeFalsy()
  })
})
