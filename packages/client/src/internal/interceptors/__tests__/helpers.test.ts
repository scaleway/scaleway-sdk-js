import { describe, expect, it } from 'vitest'
import { addAsyncHeaderInterceptor, addHeaderInterceptor } from '../helpers.js'

describe('addHeaderInterceptor', () => {
  it('insertsnothing if value is undefined', async () => {
    const request = new Request('https://api.scaleway.com/my/path')
    const updatedReq = await addHeaderInterceptor(
      'my-key',
      undefined,
    )({ request })
    expect(updatedReq.headers.has('my-key')).toBe(false)
  })

  it('inserts 1 key/value in the request', async () => {
    const request = new Request('https://api.scaleway.com/my/path')
    const updatedReq = await addHeaderInterceptor(
      'my-key',
      'my-value',
    )({ request })
    expect(updatedReq.headers.get('my-key')).toBe('my-value')
  })

  it(`doesn't modify the input request`, async () => {
    const request = new Request('https://api.scaleway.com/my/path')
    const originalHeaders = request.headers
    const updatedReq = await addHeaderInterceptor(
      'my-key',
      'my-value',
    )({ request })
    expect(request.headers).toBe(originalHeaders)
    expect(updatedReq.headers.get('my-key')).toBe('my-value')
  })
})

describe('addAsyncHeaderInterceptor', () => {
  it('inserts 1 key/value in the request', async () => {
    const request = new Request('https://api.scaleway.com/my/path')
    const updatedReq = await addAsyncHeaderInterceptor('my-key', async () =>
      Promise.resolve('my-value'),
    )({ request })
    expect(updatedReq.headers.get('my-key')).toBe('my-value')
  })
})
