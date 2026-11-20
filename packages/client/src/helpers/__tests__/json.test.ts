import { describe, expect, test } from 'vitest'
import { camelize, camelizeKeys, isJSON, isJSONObject } from '../json.js'

describe('isJSON', () => {
  test.each(['str', 200, true, null, [true, 'two', 3], { key: 'value' }])(`accepts %s as a valid JSON value`, obj => {
    expect(isJSON(obj)).toBeTruthy()
  })

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
  test.each([{ key: 'value' }])(`accepts %s as a valid JSONObject value`, obj => {
    expect(isJSONObject(obj)).toBeTruthy()
  })

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

describe('camelize', () => {
  test.each([
    ['', ''],
    ['hello', 'hello'],
    ['hello_world', 'helloWorld'],
    ['hello world', 'helloWorld'],
    ['hello-world', 'helloWorld'],
    ['hello.world', 'helloWorld'],
    ['hello__world', 'helloWorld'],
    ['_hello_world', 'helloWorld'],
    ['HELLO_WORLD', 'hELLOWORLD'],
    ['hello123world', 'hello123world'],
    ['hello_123_world', 'hello123World'],
    ['a_b_c', 'aBC'],
    ['snake_case_value', 'snakeCaseValue'],
  ])('camelizes %j into %j', (input, expected) => {
    expect(camelize(input)).toBe(expected)
  })

  test('lowercases the first character of the result', () => {
    expect(camelize('HelloWorld').charAt(0)).toBe('h')
  })
})

describe('camelizeKeys', () => {
  test('camelizes keys of a flat object', () => {
    expect(camelizeKeys({ snake_case: 1, PascalCase: 2 })).toStrictEqual({
      snakeCase: 1,
      pascalCase: 2,
    })
  })

  test('camelizes keys deeply', () => {
    expect(
      camelizeKeys({
        outer_key: {
          inner_key: 'value',
          nested_array: [{ array_item_key: 42 }],
        },
      }),
    ).toStrictEqual({
      outerKey: {
        innerKey: 'value',
        nestedArray: [{ arrayItemKey: 42 }],
      },
    })
  })

  test('maps over arrays', () => {
    expect(camelizeKeys([{ a_key: 1 }, { b_key: 2 }])).toStrictEqual([{ aKey: 1 }, { bKey: 2 }])
  })

  test('returns primitives and null as-is', () => {
    expect(camelizeKeys(42)).toBe(42)
    expect(camelizeKeys('str')).toBe('str')
    expect(camelizeKeys(null)).toBeNull()
    expect(camelizeKeys(undefined)).toBeUndefined()
  })

  test('does not camelize Date instances and keeps them as-is', () => {
    const date = new Date('2019-08-08T15:00:00.000Z')
    expect(camelizeKeys(date)).toBe(date)
  })

  test('ignores specified keys (keeps original key and value)', () => {
    expect(camelizeKeys({ keep_snake: { nested_key: 1 }, camel_me: 2 }, ['keep_snake'])).toStrictEqual({
      keepSnake: { nested_key: 1 },
      camelMe: 2,
    })
  })

  test('ignores specified keys deeply', () => {
    expect(
      camelizeKeys(
        {
          outer: {
            keep_snake: { nested_key: 1 },
            camel_me: 2,
          },
        },
        ['keep_snake'],
      ),
    ).toStrictEqual({
      outer: {
        keepSnake: { nested_key: 1 },
        camelMe: 2,
      },
    })
  })
})
