import { describe, expect, it, test } from 'vitest'
import {
  assertValidAuthenticationSecrets,
  hasAuthenticationSecrets,
  hasDefaultRegion,
  hasDefaultZone,
} from '../client-ini-profile.js'

describe('hasDefaultRegion', () => {
  it('confirms a valid region', () => {
    expect(hasDefaultRegion({ defaultRegion: 'fr-par' })).toBeTruthy()
    expect(hasDefaultRegion({ defaultRegion: 'nl-ams' })).toBeTruthy()
  })

  it('rejects a missing region', () => {
    expect(hasDefaultRegion({})).toBeFalsy()
    expect(hasDefaultRegion({ defaultRegion: undefined })).toBeFalsy()
  })
})

describe('hasDefaultZone', () => {
  it('confirms a valid zone', () => {
    expect(hasDefaultZone({ defaultZone: 'fr-par-1' })).toBeTruthy()
    expect(hasDefaultZone({ defaultZone: 'nl-ams-2' })).toBeTruthy()
  })

  it('rejects a missing zone', () => {
    expect(hasDefaultZone({})).toBeFalsy()
    expect(hasDefaultZone({ defaultZone: undefined })).toBeFalsy()
  })
})

describe('hasAuthenticationSecrets', () => {
  it('confirms a non-empty payload', () => {
    expect(
      hasAuthenticationSecrets({
        accessKey: 'any-string',
        secretKey: 'any-string',
      }),
    ).toBeTruthy()
  })

  it('rejects payload with empty access or secret', () => {
    expect(hasAuthenticationSecrets({ accessKey: '', secretKey: '' })).toBeFalsy()
    expect(hasAuthenticationSecrets({ accessKey: '', secretKey: 'any-string' })).toBeFalsy()
    expect(hasAuthenticationSecrets({ accessKey: 'any-string', secretKey: '' })).toBeFalsy()
  })
})

describe('assertValidAuthenticationSecrets', () => {
  it(`doesn't throw for valid secrets`, () => {
    expect(() => {
      assertValidAuthenticationSecrets({
        accessKey: 'SCW01234567890123456',
        secretKey: 'e4b83996-4c60-449a-98d2-38f5de7b4e6b',
      })
    }).not.toThrow()
  })

  test.each([
    { accessKey: '', secretKey: '' },
    { accessKey: 'SCW01234567890123456', secretKey: '' },
    { accessKey: '', secretKey: 'e4b83996-4c60-449a-98d2-38f5de7b4e6b' },
  ])('%s throws for empty keys', value => {
    expect(() => {
      assertValidAuthenticationSecrets(value)
    }).toThrow(
      new Error(
        `Invalid secrets, accessKey & secretKey must be defined. See https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-api-keys/`,
      ),
    )
  })

  it(`throws for invalid accessKey`, () => {
    expect(() => {
      assertValidAuthenticationSecrets({
        accessKey: 'SCW0123',
        secretKey: 'e4b83996-4c60-449a-98d2-38f5de7b4e6b',
      })
    }).toThrow(
      new Error(
        `Invalid access key format 'SCW0123', expected SCWXXXXXXXXXXXXXXXXX format. See https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-api-keys/`,
      ),
    )
  })

  it(`throws for invalid secretKey`, () => {
    expect(() => {
      assertValidAuthenticationSecrets({
        accessKey: 'SCW01234567890123456',
        secretKey: 'e4b83996-4c60-449a-98d2',
      })
    }).toThrow(
      new Error(
        `Invalid secret key format 'e4b83996-4c60-449a-98d2', expected a UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx. See https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-api-keys/`,
      ),
    )
  })
})
