import { describe, expect, it } from 'vitest'
import { composeRequestInterceptors, composeResponseErrorInterceptors } from '../composer.js'

describe('composeRequestInterceptors', () => {
  it('modifies the request header', async () => {
    const interceptor = composeRequestInterceptors([
      ({ request }): Request => {
        const clone = request.clone()
        clone.headers.set('new-header', '42')

        return clone
      },
    ])

    return expect(
      interceptor(new Request('https://api.scaleway.com')).then(obj => obj.headers.get('new-header')),
    ).resolves.toBe('42')
  })
})

describe('composeResponseErrorInterceptors', () => {
  it('passes the error to all interceptors if they all throw', async () => {
    class NumberError extends Error {
      public counter: number

      public constructor(obj: number) {
        super()
        this.name = 'NumberError'
        this.counter = obj
        Object.setPrototypeOf(this, NumberError.prototype)
      }
    }

    const interceptors = composeResponseErrorInterceptors([
      ({ error }) => {
        throw error instanceof NumberError ? new NumberError(error.counter + 1) : error
      },
      ({ error }) => {
        throw error instanceof NumberError ? new NumberError(error.counter + 2) : error
      },
    ])(new Request('https://api.scaleway.com'), new NumberError(42))

    return expect(interceptors).rejects.toThrow(new NumberError(45))
  })

  it('stops at the second interceptor (amongst three) if it resolves', async () => {
    const interceptors = composeResponseErrorInterceptors([
      ({ error }) => {
        throw error
      },
      (): unknown => 42,
      ({ error }) => {
        throw error
      },
    ])(new Request('https://api.scaleway.com'), new TypeError('test error'))

    return expect(interceptors).resolves.toBe(42)
  })

  it('throws the last processed error', async () => {
    const interceptors = composeResponseErrorInterceptors([
      ({ error }) => {
        throw error
      },
      () => {
        throw new TypeError('second error')
      },
    ])(new Request('https://api.scaleway.com'), new TypeError('first error'))

    return expect(interceptors).rejects.toThrow(new TypeError('second error'))
  })
})
