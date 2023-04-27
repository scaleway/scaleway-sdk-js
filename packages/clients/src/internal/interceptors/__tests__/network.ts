import { describe, expect, it } from '@jest/globals'
import { addAsyncHeaderInterceptor, addHeaderInterceptor } from '../network'

describe('addHeaderInterceptor', () => {
  it('insertsnothing if value is undefined', async () => {
    const req = new Request('https://api.scaleway.com/my/path')
    const updatedReq = await addHeaderInterceptor('my-key', undefined)(req)
    expect(updatedReq.headers.has('my-key')).toBe(false)
  })

  it('inserts 1 key/value in the request', async () => {
    const req = new Request('https://api.scaleway.com/my/path')
    const updatedReq = await addHeaderInterceptor('my-key', 'my-value')(req)
    expect(updatedReq.headers.get('my-key')).toBe('my-value')
  })

  it(`desn't modify the input request`, async () => {
    const req = new Request('https://api.scaleway.com/my/path')
    const updatedReq = await addHeaderInterceptor('my-key', 'my-value')(req)
    expect(req).not.toStrictEqual(updatedReq)
  })
})

describe('addAsyncHeaderInterceptor', () => {
  it('inserts 1 key/value in the request', async () => {
    const req = new Request('https://api.scaleway.com/my/path')
    const updatedReq = await addAsyncHeaderInterceptor('my-key', async () =>
      Promise.resolve('my-value'),
    )(req)
    expect(updatedReq.headers.get('my-key')).toBe('my-value')
  })
})
