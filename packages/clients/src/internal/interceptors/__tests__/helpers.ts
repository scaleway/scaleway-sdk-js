import { describe, expect, it } from '@jest/globals'
import { addAsyncHeaderInterceptor, addHeaderInterceptor } from '../helpers'

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

  it(`desn't modify the input request`, async () => {
    const request = new Request('https://api.scaleway.com/my/path')
    const updatedReq = await addHeaderInterceptor(
      'my-key',
      'my-value',
    )({ request })
    expect(request).not.toStrictEqual(updatedReq)
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
