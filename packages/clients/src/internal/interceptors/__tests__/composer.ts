import { describe, expect, it } from '@jest/globals'
import type { Interceptor } from '../composer'
import { composeInterceptors } from '../composer'

type StringArrayInterceptor = Interceptor<string[]>

const addStrInterceptor =
  (str: string): StringArrayInterceptor =>
  (list: Readonly<string[]>): string[] =>
    list.concat(str)

const removeFirstStrInterceptor =
  (): StringArrayInterceptor =>
  (list: Readonly<string[]>): string[] =>
    list.slice(1)

describe('applyInterceptors', () => {
  it('calls one interceptor', async () => {
    const interceptor = composeInterceptors([addStrInterceptor('Fusion')])
    expect(await interceptor(['Tree', 'Animal'])).toStrictEqual([
      'Tree',
      'Animal',
      'Fusion',
    ])
  })

  it('compose two interceptors', async () => {
    const interceptor = composeInterceptors([
      addStrInterceptor('Fusion'),
      removeFirstStrInterceptor(),
    ])
    expect(await interceptor(['Tree', 'Animal'])).toStrictEqual([
      'Animal',
      'Fusion',
    ])
  })
})
