import { describe, expect, it } from 'vitest'
import type { ClientConfig } from '../client-ini-factory.js'
import {
  withAdditionalInterceptors,
  withDefaultPageSize,
  withHTTPClient,
  withLegacyInterceptors,
  withProfile,
  withUserAgent,
  withUserAgentSuffix,
} from '../client-ini-factory.js'
import type { Profile } from '../client-ini-profile.js'
import type { Settings } from '../client-settings.js'

const EMPTY_PROFILE: Profile = {}

const FILLED_PROFILE: Required<Profile> = {
  accessKey: 'SCW1234567890ABCDEFG',
  apiURL: 'https://api.example.com',
  defaultOrganizationId: 'a8f9d4ab-dda4-4b9d-ab77-0a8c59a246e9',
  defaultProjectId: 'd67e2125-a1ee-4056-9f7a-ab855be03d07',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-3',
  secretKey: '3aef5281-13eb-4705-b858-eb64dd5da24c',
}

const DEFAULT_SETTINGS: Readonly<Settings> = {
  apiURL: 'https://api.scaleway.com',
  defaultOrganizationId: 'bd61983a-e4b5-4c6b-a841-07bc44037b5a',
  defaultPageSize: 10,
  defaultProjectId: '43f42be7-ea3d-4148-889c-3ad4b53bddcb',
  defaultRegion: 'nl-ams',
  defaultZone: 'fr-par-1',
  httpClient: fetch,
  interceptors: [],
  userAgent: 'scaleway-sdk-js/v1.0.0-beta',
}

describe('withProfile', () => {
  it(`doesn't modify Settings object with empty Profile object`, () => {
    expect(withProfile(EMPTY_PROFILE)(DEFAULT_SETTINGS)).toStrictEqual(
      DEFAULT_SETTINGS,
    )
    expect(
      withProfile({
        WTF: 'malicious content',
      } as unknown as Profile)(DEFAULT_SETTINGS),
    ).toStrictEqual(DEFAULT_SETTINGS)
    expect(
      withProfile({
        apiURL: undefined,
        defaultOrganizationId: undefined,
        defaultPageSize: undefined,
        defaultProjectId: undefined,
        defaultRegion: undefined,
        defaultZone: undefined,
        httpClient: undefined,
        interceptors: undefined,
        requestInterceptors: undefined,
        responseInterceptors: undefined,
        userAgent: undefined,
      } as unknown as Profile)(DEFAULT_SETTINGS),
    ).toStrictEqual(DEFAULT_SETTINGS)
    expect(
      withProfile({
        apiURL: null,
        defaultOrganizationId: null,
        defaultPageSize: null,
        defaultProjectId: null,
        defaultRegion: null,
        defaultZone: null,
        httpClient: null,
        interceptors: null,
        requestInterceptors: null,
        responseInterceptors: null,
        userAgent: null,
      } as unknown as Profile)(DEFAULT_SETTINGS),
    ).toStrictEqual(DEFAULT_SETTINGS)
    expect(
      withProfile({
        apiURL: '',
        defaultOrganizationId: '',
        defaultPageSize: '',
        defaultProjectId: '',
        defaultRegion: '',
        defaultZone: '',
        httpClient: '',
        interceptors: '',
        requestInterceptors: '',
        responseInterceptors: '',
        userAgent: '',
      } as unknown as Profile)(DEFAULT_SETTINGS),
    ).toStrictEqual(DEFAULT_SETTINGS)
    expect(
      withProfile({
        apiURL: 0,
        defaultOrganizationId: 0,
        defaultPageSize: 0,
        defaultProjectId: 0,
        defaultRegion: 0,
        defaultZone: 0,
        httpClient: 0,
        interceptors: 0,
        requestInterceptors: 0,
        responseInterceptors: 0,
        userAgent: 0,
      } as unknown as Profile)(DEFAULT_SETTINGS),
    ).toStrictEqual(DEFAULT_SETTINGS)
  })

  it('only modifies apiURL', () => {
    const expectedSettings: Settings = {
      ...DEFAULT_SETTINGS,
      apiURL: FILLED_PROFILE.apiURL,
    }
    expect(
      withProfile({
        apiURL: FILLED_PROFILE.apiURL,
      })(DEFAULT_SETTINGS),
    ).toStrictEqual(expectedSettings)
  })

  it('only modifies default organization ID', () => {
    const expectedSettings: Settings = {
      ...DEFAULT_SETTINGS,
      defaultOrganizationId: FILLED_PROFILE.defaultOrganizationId,
    }
    expect(
      withProfile({
        defaultOrganizationId: FILLED_PROFILE.defaultOrganizationId,
      })(DEFAULT_SETTINGS),
    ).toStrictEqual(expectedSettings)
  })

  it('only modifies default project ID', () => {
    const expectedSettings: Settings = {
      ...DEFAULT_SETTINGS,
      defaultProjectId: FILLED_PROFILE.defaultProjectId,
    }
    expect(
      withProfile({
        defaultProjectId: FILLED_PROFILE.defaultProjectId,
      })(DEFAULT_SETTINGS),
    ).toStrictEqual(expectedSettings)
  })

  it('only modifies default region', () => {
    const expectedSettings: Settings = {
      ...DEFAULT_SETTINGS,
      defaultRegion: FILLED_PROFILE.defaultRegion,
    }
    expect(
      withProfile({
        defaultRegion: FILLED_PROFILE.defaultRegion,
      })(DEFAULT_SETTINGS),
    ).toStrictEqual(expectedSettings)
  })

  it('only modifies default zone', () => {
    const expectedSettings: Settings = {
      ...DEFAULT_SETTINGS,
      defaultZone: FILLED_PROFILE.defaultZone,
    }
    expect(
      withProfile({
        defaultZone: FILLED_PROFILE.defaultZone,
      })(DEFAULT_SETTINGS),
    ).toStrictEqual(expectedSettings)
  })

  it('modifies authentication', async () => {
    if (!DEFAULT_SETTINGS.apiURL) {
      throw new Error('API URL is missing')
    }
    const request = new Request(DEFAULT_SETTINGS.apiURL)
    const reqInterceptor = withProfile({
      accessKey: FILLED_PROFILE.accessKey,
      secretKey: FILLED_PROFILE.secretKey,
    })(DEFAULT_SETTINGS).interceptors[0].request
    expect(reqInterceptor).toBeDefined()
    if (reqInterceptor) {
      const { headers } = await reqInterceptor({ request })
      expect(headers.get('x-auth-token')).toStrictEqual(
        FILLED_PROFILE.secretKey,
      )
    }
  })
})

describe('withDefaultPageSize', () => {
  it('only modifies the default page size', () => {
    const newDefaultPageSize = 42
    const expectedSettings: Settings = {
      ...DEFAULT_SETTINGS,
      defaultPageSize: newDefaultPageSize,
    }
    expect(
      JSON.stringify(withDefaultPageSize(newDefaultPageSize)(DEFAULT_SETTINGS)),
    ).toStrictEqual(JSON.stringify(expectedSettings))
  })
})

describe('withHTTPClient', () => {
  it('only modifies the http client', () => {
    const newHTTPClient: typeof fetch = (): Promise<Response> =>
      Promise.resolve(new Response())
    const expectedSettings: Settings = {
      ...DEFAULT_SETTINGS,
      httpClient: newHTTPClient,
    }
    expect(
      JSON.stringify(withHTTPClient(newHTTPClient)(DEFAULT_SETTINGS)),
    ).toStrictEqual(JSON.stringify(expectedSettings))
  })
})

describe('withUserAgent', () => {
  const defaultUserAgent = 'my-source/v0.1.0'
  it('only modifies the user agent', () => {
    const expectedSettings: Settings = {
      ...DEFAULT_SETTINGS,
      userAgent: defaultUserAgent,
    }
    expect(
      JSON.stringify(withUserAgent(defaultUserAgent)(DEFAULT_SETTINGS)),
    ).toStrictEqual(JSON.stringify(expectedSettings))
  })
})

describe('withUserAgentSuffix', () => {
  it('appends to the original user agent', () => {
    const defaultUserAgent = DEFAULT_SETTINGS.userAgent
    const addUserAgent = 'additional-source/v1.0.0'
    const expectedSettings: Settings = {
      ...DEFAULT_SETTINGS,
      userAgent: `${defaultUserAgent} ${addUserAgent}`,
    }
    expect(
      JSON.stringify(withUserAgentSuffix(addUserAgent)(DEFAULT_SETTINGS)),
    ).toStrictEqual(JSON.stringify(expectedSettings))
  })

  it('replaces the default user agent if the original one is empty', () => {
    const newSettings = { ...DEFAULT_SETTINGS, userAgent: '' }
    const addUserAgent = 'additional-source/v1.0.0'
    const expectedSettings: Settings = {
      ...newSettings,
      userAgent: addUserAgent,
    }
    expect(
      JSON.stringify(withUserAgentSuffix(addUserAgent)(newSettings)),
    ).toStrictEqual(JSON.stringify(expectedSettings))
  })
})

describe('withAdditionalInterceptors', () => {
  it('appends interceptors to existing ones', () => {
    const oneInterProfile = withAdditionalInterceptors([
      {
        request: ({ request }) => request,
      },
    ])(DEFAULT_SETTINGS)
    const twoInterProfile = withAdditionalInterceptors([
      {
        response: ({ response }) => response,
        responseError: err => err,
      },
    ])(oneInterProfile)
    expect(twoInterProfile.interceptors.length).toEqual(2)
    expect(twoInterProfile.interceptors[1].response).toBeDefined()
    expect(twoInterProfile.interceptors[1].responseError).toBeDefined()
    expect(twoInterProfile.interceptors[1].request).toBeUndefined()
  })
})

describe('withLegacyInterceptors', () => {
  it('changes nothing if no legacy interceptor', () => {
    expect(
      JSON.stringify(withLegacyInterceptors()(DEFAULT_SETTINGS)),
    ).toStrictEqual(JSON.stringify(DEFAULT_SETTINGS))
  })

  it('appends the legacy request and response interceptors', () => {
    const legacyInterceptors: ClientConfig = (obj: Settings): Settings => ({
      ...obj,
      requestInterceptors: [
        ({ request }): Request => request,
        ({ request }): Request => request,
      ],
      responseInterceptors: [({ response }): Response => response],
    })
    expect(
      withLegacyInterceptors()(legacyInterceptors(DEFAULT_SETTINGS))
        .interceptors.length,
    ).toBe(3)

    const legacyReqInterceptors: ClientConfig = (obj: Settings): Settings => ({
      ...obj,
      requestInterceptors: [
        ({ request }): Request => request,
        ({ request }): Request => request,
      ],
    })
    expect(
      withLegacyInterceptors()(legacyReqInterceptors(DEFAULT_SETTINGS))
        .interceptors.length,
    ).toBe(2)

    const legacyResInterceptors: ClientConfig = (obj: Settings): Settings => ({
      ...obj,
      responseInterceptors: [({ response }): Response => response],
    })
    expect(
      withLegacyInterceptors()(legacyResInterceptors(DEFAULT_SETTINGS))
        .interceptors.length,
    ).toBe(1)
  })
})
