import { describe, expect, it } from '@jest/globals'
import type { Settings } from '../client-settings'
import { assertValidSettings } from '../client-settings'

const VALID_SETTINGS: Settings = {
  apiURL: 'https://api.scaleway.com',
  defaultOrganizationId: '1f1ca70e-a7d4-4061-8495-09e17e69a0dc',
  defaultPageSize: 10,
  defaultProjectId: 'ca69720b-8a3d-4295-8f6d-87257f0474b4',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
  httpClient: fetch,
  interceptors: [],
  requestInterceptors: [],
  responseInterceptors: [],
  userAgent: 'scaleway-sdk-js/v1.0.0-beta',
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
const INVALID_SETTINGS_LIST: Partial<Settings>[] = [
  { apiURL: 'https://api.scaleway.com/' },
  { apiURL: 'ftp://api.scaleway.com' },
  { defaultZone: 'fr-par-0' },
  { defaultZone: 'fr-par' },
  { defaultRegion: 'fr-par-1' },
  // @ts-expect-error Unknown client type
  { httpClient: 'str-client' },
  { defaultOrganizationId: '' },
  { defaultOrganizationId: 'not-a-uuid-v4' },
  { defaultProjectId: '' },
  { defaultProjectId: 'not-a-uuid-v4' },
  { defaultPageSize: 0 },
  { defaultPageSize: -1 },
  // @ts-expect-error Wrong type
  { defaultPageSize: '42' },
  // @ts-expect-error Unknown user agent type
  { userAgent: null },
]
/* eslint-enable @typescript-eslint/ban-ts-comment */

describe('assertValidSettings', () => {
  it('accepts valid Settings object', () => {
    expect(() => {
      assertValidSettings(VALID_SETTINGS)
    }).not.toThrow()
  })

  INVALID_SETTINGS_LIST.forEach(obj => {
    const newProfile = { ...VALID_SETTINGS, ...obj }
    it(`rejects invalid Settings object ${JSON.stringify(obj)}`, () => {
      expect(() => {
        assertValidSettings(newProfile)
      }).toThrow()
    })
  })
})
