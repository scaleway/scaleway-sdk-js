import { describe, expect, it } from 'vitest'
import {
  authenticateWithSecrets,
  authenticateWithSessionToken,
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

    expect(obfuscateToken('')).toBe(
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    )
  })
})

describe('obfuscateUUID', () => {
  it('hides anything after 8 characters', () => {
    expect(obfuscateUUID('db31db7b-473d-488e-bd2e-1b77ee426910')).toBe(
      'db31db7b-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    )

    expect(obfuscateUUID('')).toBe('-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
  })
})

describe('obfuscateAuthHeadersEntry', () => {
  it('obfuscates an auth token', () => {
    expect(
      obfuscateAuthHeadersEntry([
        'x-auth-token',
        'db31db7b-473d-488e-bd2e-1b77ee426910',
      ]),
    ).toStrictEqual(['x-auth-token', 'db31db7b-xxxx-xxxx-xxxx-xxxxxxxxxxxx'])
  })

  it('obfuscates a session token', () => {
    expect(
      obfuscateAuthHeadersEntry([
        'x-session-token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      ]),
    ).toStrictEqual([
      'x-session-token',
      'eyJhbxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ])
  })

  it(`doesn't obfuscate unknown key`, () => {
    expect(
      obfuscateAuthHeadersEntry(['x-unknown-key', 'random-value']),
    ).toStrictEqual(['x-unknown-key', 'random-value'])
  })
})

describe('authenticateWithSessionToken', () => {
  it('retrieves the token and updates the request header', async () => {
    const dummyToken = 'dummy'
    const sourceReq = new Request('https://api.scaleway.com/my/path')

    const updatedReq = await authenticateWithSessionToken(
      (): Promise<string> => Promise.resolve(dummyToken),
    )({ request: sourceReq })

    const expectedReq = sourceReq.clone()
    expectedReq.headers.append('x-session-token', 'dummy')
    expect(updatedReq).toMatchObject(expectedReq)
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
    expect(() =>
      authenticateWithSecrets(invalidSecrets)({ request: sourceReq }),
    ).toThrow()
  })
})
