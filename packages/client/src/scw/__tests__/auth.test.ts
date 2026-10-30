import { describe, expect, it } from 'vitest'
import {
  addSessionHeader,
  authenticateWithSecrets,
  authenticateWithSessionToken,
  authenticateWithTokenProvider,
  obfuscateAuthHeadersEntry,
  obfuscateToken,
  obfuscateUUID,
} from '../auth.js'
import type { AuthenticationSecrets } from '../client-ini-profile.js'

describe('obfuscateToken', () => {
  it('hides anything after 5 characters', () => {
    expect(
      obfuscateToken(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      ),
    ).toBe('eyJhbxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

    expect(obfuscateToken('')).toBe('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  })
})

describe('obfuscateUUID', () => {
  it('hides anything after 8 characters', () => {
    expect(obfuscateUUID('db31db7b-473d-488e-bd2e-1b77ee426910')).toBe('db31db7b-xxxx-xxxx-xxxx-xxxxxxxxxxxx')

    expect(obfuscateUUID('')).toBe('-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
  })
})

describe('obfuscateAuthHeadersEntry', () => {
  it('obfuscates an auth token', () => {
    expect(obfuscateAuthHeadersEntry(['x-auth-token', 'db31db7b-473d-488e-bd2e-1b77ee426910'])).toStrictEqual([
      'x-auth-token',
      'db31db7b-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    ])
  })

  it('obfuscates a session token', () => {
    expect(
      obfuscateAuthHeadersEntry([
        'x-session-token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      ]),
    ).toStrictEqual(['x-session-token', 'eyJhbxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'])
  })

  it(`doesn't obfuscate unknown key`, () => {
    expect(obfuscateAuthHeadersEntry(['x-unknown-key', 'random-value'])).toStrictEqual([
      'x-unknown-key',
      'random-value',
    ])
  })
})

describe('authenticateWithSessionToken', () => {
  it('retrieves the token and updates the request header', async () => {
    const dummyToken = 'dummy'
    const sourceReq = new Request('https://api.scaleway.com/my/path')

    // oxlint-disable-next-line typescript/promise-function-async -- test helper
    const updatedReq = await authenticateWithSessionToken((): Promise<string> => Promise.resolve(dummyToken))({
      request: sourceReq,
    })

    const expectedReq = sourceReq.clone()
    expectedReq.headers.append('x-session-token', 'dummy')
    expect(updatedReq).toMatchObject(expectedReq)
  })

  it('resolves the token provider on each call', async () => {
    const sourceReq = new Request('https://api.scaleway.com/my/path')
    let callCount = 0

    // oxlint-disable-next-line typescript/promise-function-async -- test helper
    const getToken = (): Promise<string> => {
      callCount++
      return Promise.resolve(`token-${callCount}`)
    }

    const interceptor = authenticateWithTokenProvider(getToken)
    const updatedReq1 = await interceptor({ request: sourceReq })
    const updatedReq2 = await interceptor({ request: sourceReq })

    expect(updatedReq1.headers.get('x-auth-token')).toBe('token-1')
    expect(updatedReq2.headers.get('x-auth-token')).toBe('token-2')
    expect(callCount).toBe(2)
  })
})

describe('addSessionHeader', () => {
  it('adds the resolved async token to the session header', async () => {
    const sourceReq = new Request('https://api.scaleway.com/my/path')

    const updatedReq = await addSessionHeader({
      request: sourceReq,
      // oxlint-disable-next-line typescript/promise-function-async -- test helper
      getAsyncToken: () => Promise.resolve('jwt-token'),
    })

    const expectedReq = sourceReq.clone()
    expectedReq.headers.append('x-session-token', 'jwt-token')
    expect(updatedReq).toMatchObject(expectedReq)
  })

  it('does not set the header when the token resolves to undefined', async () => {
    const sourceReq = new Request('https://api.scaleway.com/my/path')

    const updatedReq = await addSessionHeader({
      request: sourceReq,
      // oxlint-disable-next-line typescript/promise-function-async -- test helper
      getAsyncToken: () => Promise.resolve(undefined),
    })

    expect(updatedReq.headers.get('x-session-token')).toBeNull()
  })
})

describe('authenticateWithSecrets', () => {
  const sourceReq = new Request('https://api.scaleway.com/my/path')

  it('updates the request header with the valid secrets', async () => {
    const validSecrets: AuthenticationSecrets = {
      accessKey: 'SCW01234567890123456',
      secretKey: 'e4b83996-4c60-449a-98d2-38f5de7b4e6b',
    }
    const updatedReq = await authenticateWithSecrets(validSecrets)({
      request: sourceReq,
    })
    const expectedReq = sourceReq.clone()
    expectedReq.headers.append('x-auth-token', validSecrets.secretKey)
    expect(updatedReq).toMatchObject(expectedReq)
  })

  it('throws an exception for invalid secrets', () => {
    const invalidSecrets: AuthenticationSecrets = {
      accessKey: '',
      secretKey: '',
    }
    // oxlint-disable-next-line typescript/promise-function-async -- must be sync for toThrow to catch the synchronous throw
    expect(() => authenticateWithSecrets(invalidSecrets)({ request: sourceReq })).toThrow()
  })
})
