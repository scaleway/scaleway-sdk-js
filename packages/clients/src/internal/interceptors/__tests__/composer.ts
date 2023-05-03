import { describe, expect, it } from '@jest/globals'
import type { Interceptor } from '../composer'
import {
  composeInterceptors,
  composeResponseErrorInterceptors,
} from '../composer'

type StringArrayInterceptor = Interceptor<string[]>

const addStrInterceptor =
  (str: string): StringArrayInterceptor =>
  (list: Readonly<string[]>): string[] =>
    list.concat(str)

const removeFirstStrInterceptor =
  (): StringArrayInterceptor =>
  (list: Readonly<string[]>): string[] =>
    list.slice(1)

describe('composeInterceptors', () => {
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

describe('composeResponseErrorInterceptors', () => {
  it('passes the error to all interceptors if they all throw', () => {
    class NumberError extends Error {
      counter: number

      constructor(obj: number) {
        super()
        this.counter = obj
        Object.setPrototypeOf(this, NumberError.prototype)
      }
    }

    const interceptors = composeResponseErrorInterceptors([
      (_: Request, error: unknown): Promise<unknown> => {
        throw error instanceof NumberError
          ? new NumberError(error.counter + 1)
          : error
      },
      (_: Request, error: unknown): Promise<unknown> => {
        throw error instanceof NumberError
          ? new NumberError(error.counter + 2)
          : error
      },
    ])(new Request('https://api.scaleway.com'), new NumberError(42))

    return expect(interceptors).rejects.toThrow(new NumberError(45))
  })

  it('stops at the second interceptor (amongst three) if it resolves', () => {
    const interceptors = composeResponseErrorInterceptors([
      (_: Request, error: unknown): Promise<unknown> => {
        throw error
      },
      (): Promise<unknown> => Promise.resolve(42),
      (_: Request, error: unknown): Promise<unknown> => {
        throw error
      },
    ])(new Request('https://api.scaleway.com'), new TypeError(''))

    return expect(interceptors).resolves.toBe(42)
  })
})
