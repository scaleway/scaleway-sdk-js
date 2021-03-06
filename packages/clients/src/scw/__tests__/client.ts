import { describe, expect, it } from '@jest/globals'
import { createAdvancedClient, createClient } from '../client'
import { ClientConfig, withProfile } from '../client-ini-factory'
import type { Settings } from '../client-settings'

const withApiURL =
  (apiURL: string): ClientConfig =>
  (obj: Settings): Settings => ({ ...obj, apiURL })

describe('createAdvancedClient', () => {
  it('initializes without throwing', () => {
    expect(() => {
      createAdvancedClient()
    }).not.toThrow()
  })

  it('contains override from withProfile', () => {
    const client = createAdvancedClient(
      withProfile({ defaultRegion: 'nl-ams' }),
    )
    expect(client.settings.defaultRegion).toBe('nl-ams')
  })

  it('contains override from withProfile with authentication', () => {
    const client = createAdvancedClient(
      withProfile({
        accessKey: 'SCW1234567890ABCDEFG',
        secretKey: '3aef5281-13eb-4705-b858-eb64dd5da24c',
      }),
    )
    expect(client.settings.requestInterceptors.length).toBe(1)
  })

  it('does not mutate default requestInterceptors', () => {
    let client = createAdvancedClient(
      withProfile({
        accessKey: 'SCW1234567890ABCDEFG',
        secretKey: '3aef5281-13eb-4705-b858-eb64dd5da24c',
      }),
    )
    client = createAdvancedClient(
      withProfile({
        accessKey: 'SCW1234567890ABCDEFG',
        secretKey: '3aef5281-13eb-4705-b858-eb64dd5da24c',
      }),
    )
    expect(client.settings.requestInterceptors.length).toBe(1)
  })

  it('contains override from custom option', () => {
    const betaApiRoot = 'https://api-beta.scaleway.com'
    const client = createAdvancedClient(withApiURL(betaApiRoot))
    expect(client.settings.apiURL).toBe(betaApiRoot)
  })
})

describe('createClient', () => {
  it('initializes without throwing', () => {
    expect(() => {
      createClient()
    }).not.toThrow()
  })

  it('contains proper default values', () => {
    const client = createAdvancedClient()
    expect(client.settings.apiURL).toBe('https://api.scaleway.com')
    expect(client.settings.userAgent.startsWith('scaleway-sdk-js/')).toBe(true)
  })
})
