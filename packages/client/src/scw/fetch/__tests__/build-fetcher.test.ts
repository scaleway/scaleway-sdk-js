import { afterAll, describe, expect, it, vi } from 'vitest'
import { isBrowser } from '../../../helpers/is-browser.js'
import { addHeaderInterceptor } from '../../../internal/interceptors/helpers.js'
import type { Settings } from '../../client-settings.js'
import { applyListScopeGuard, buildFetcher, buildRequest } from '../build-fetcher.js'
import type { ScwRequest } from '../types.js'

const DEFAULT_SETTINGS: Settings = {
  apiURL: 'https://api.scaleway.com',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
  httpClient: global.fetch,
  interceptors: [],
  requestInterceptors: [],
  responseInterceptors: [],
  userAgent: 'scaleway-sdk-js/v1.0.0',
}

const SCW_POST_REQUEST: ScwRequest = {
  method: 'POST',
  path: '/undefined',
}

const ORGANIZATION_ID = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
const PROJECT_ID = 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy'

describe('applyListScopeGuard', () => {
  const settingsWithOrg: Settings = {
    ...DEFAULT_SETTINGS,
    defaultOrganizationId: ORGANIZATION_ID,
  }
  const settingsWithProject: Settings = {
    ...DEFAULT_SETTINGS,
    defaultProjectId: PROJECT_ID,
  }
  const settingsWithBoth: Settings = {
    ...DEFAULT_SETTINGS,
    defaultOrganizationId: ORGANIZATION_ID,
    defaultProjectId: PROJECT_ID,
  }

  it('does nothing when listScopeGuard is not set', () => {
    const req: ScwRequest = { method: 'GET', path: '/test' }
    expect(applyListScopeGuard(req, settingsWithOrg)).toBe(req)
  })

  it("('org') injects defaultOrganizationId when no scope is set", () => {
    const req: ScwRequest = {
      method: 'GET',
      path: '/test',
      listScopeGuard: 'org',
      urlParams: new URLSearchParams([['page', '1']]),
    }
    const result = applyListScopeGuard(req, settingsWithOrg)
    expect(result.urlParams?.get('organization_id')).toBe(ORGANIZATION_ID)
    expect(result.urlParams?.get('page')).toBe('1')
  })

  it("('org') injects defaultOrganizationId when urlParams is undefined", () => {
    const req: ScwRequest = { method: 'GET', path: '/test', listScopeGuard: 'org' }
    const result = applyListScopeGuard(req, settingsWithOrg)
    expect(result.urlParams?.get('organization_id')).toBe(ORGANIZATION_ID)
  })

  it("('project') injects defaultProjectId when no scope is set", () => {
    const req: ScwRequest = { method: 'GET', path: '/test', listScopeGuard: 'project' }
    const result = applyListScopeGuard(req, settingsWithProject)
    expect(result.urlParams?.get('project_id')).toBe(PROJECT_ID)
    expect(result.urlParams?.get('organization_id')).toBeNull()
  })

  it("('project') injects defaultProjectId when urlParams is undefined", () => {
    const req: ScwRequest = { method: 'GET', path: '/test', listScopeGuard: 'project' }
    const result = applyListScopeGuard(req, settingsWithProject)
    expect(result.urlParams?.get('project_id')).toBe(PROJECT_ID)
  })

  it("('org') does nothing when defaultOrganizationId is not configured", () => {
    const req: ScwRequest = { method: 'GET', path: '/test', listScopeGuard: 'org' }
    expect(applyListScopeGuard(req, DEFAULT_SETTINGS)).toBe(req)
  })

  it("('project') does nothing when defaultProjectId is not configured", () => {
    const req: ScwRequest = { method: 'GET', path: '/test', listScopeGuard: 'project' }
    expect(applyListScopeGuard(req, DEFAULT_SETTINGS)).toBe(req)
  })

  it('does not inject when organization_id is already set', () => {
    const req: ScwRequest = {
      method: 'GET',
      path: '/test',
      listScopeGuard: 'org',
      urlParams: new URLSearchParams([['organization_id', 'other-org-id']]),
    }
    expect(applyListScopeGuard(req, settingsWithBoth)).toBe(req)
  })

  it('does not inject when project_id is already set', () => {
    const req: ScwRequest = {
      method: 'GET',
      path: '/test',
      listScopeGuard: 'project',
      urlParams: new URLSearchParams([['project_id', PROJECT_ID]]),
    }
    expect(applyListScopeGuard(req, settingsWithProject)).toBe(req)
  })

  it("('project') does not inject when organization_id is already set", () => {
    const req: ScwRequest = {
      method: 'GET',
      path: '/test',
      listScopeGuard: 'project',
      urlParams: new URLSearchParams([['organization_id', ORGANIZATION_ID]]),
    }
    expect(applyListScopeGuard(req, settingsWithBoth)).toBe(req)
  })

  it('does not mutate the original request', () => {
    const originalParams = new URLSearchParams([['page', '1']])
    const req: ScwRequest = {
      method: 'GET',
      path: '/test',
      listScopeGuard: 'org',
      urlParams: originalParams,
    }
    applyListScopeGuard(req, settingsWithOrg)
    expect(originalParams.has('organization_id')).toBe(false)
  })
})

describe(`buildRequest`, () => {
  it(`has the specified method & url`, () => {
    const fReq = buildRequest(SCW_POST_REQUEST, DEFAULT_SETTINGS)
    expect(fReq.method).toBe(SCW_POST_REQUEST.method)
    expect(fReq.url).toBe(`${DEFAULT_SETTINGS.apiURL}${SCW_POST_REQUEST.path}`)
  })

  it(`has the default header "Accept: 'application/json'"`, () => {
    const fReq = buildRequest(SCW_POST_REQUEST, DEFAULT_SETTINGS)
    expect(fReq.headers.get('accept')).toBe(`application/json`)
  })

  if (!isBrowser()) {
    it(`has the default header "User-Agent: 'scaleway-sdk-js/v1.0.0'"`, () => {
      const fReq = buildRequest(SCW_POST_REQUEST, DEFAULT_SETTINGS)
      expect(fReq.headers.get('User-Agent')).toBe(DEFAULT_SETTINGS.userAgent)
    })
  } else {
    it(`has NOT the default header "User-Agent: 'scaleway-sdk-js/v1.0.0'"`, () => {
      const fReq = buildRequest(SCW_POST_REQUEST, DEFAULT_SETTINGS)
      expect(fReq.headers.get('User-Agent')).toBeNull()
    })
  }

  it(`has the custom headers`, () => {
    const mReq: ScwRequest = {
      ...SCW_POST_REQUEST,
      headers: {
        randomName: 'random-value',
      },
    }
    const fReq = buildRequest(mReq, DEFAULT_SETTINGS)
    expect(fReq.headers.get('randomName')).toBe(mReq.headers?.randomName)
  })

  it('has the url params', () => {
    const mReq: ScwRequest = {
      ...SCW_POST_REQUEST,
      urlParams: new URLSearchParams([
        ['param1', 'value1'],
        ['param2', 'value2'],
      ]),
    }
    const fReq = buildRequest(mReq, DEFAULT_SETTINGS)
    expect(fReq.url).toBe('https://api.scaleway.com/undefined?param1=value1&param2=value2')
  })
})

describe(`buildFetcher (mock)`, () => {
  afterAll(() => {
    vi.restoreAllMocks()
  })

  vi.spyOn(global, 'fetch')
  const mockedFetch = vi.mocked(fetch)
  const fetcher = buildFetcher(DEFAULT_SETTINGS, global.fetch)

  it(`gets a response without error for a simple request with unmarshaller`, async () => {
    mockedFetch.mockResolvedValue(
      new Response(JSON.stringify({}), {
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    return expect(
      fetcher(
        {
          method: 'POST',
          path: '/undefined',
        },
        () => 'dummy-output',
      ),
    ).resolves.toStrictEqual('dummy-output')
  })

  it('gets modified response', () => {
    mockedFetch.mockResolvedValue(
      new Response(JSON.stringify({}), {
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              response: () => new Response(JSON.stringify(42)),
            },
          ],
        },
        global.fetch,
      )({
        method: 'POST',
        path: '/undefined',
      }),
    ).resolves.toStrictEqual('42')
  })

  it(`gets a response without error for a simple request without unmarshaller`, async () => {
    mockedFetch.mockResolvedValue(
      new Response(JSON.stringify({ any_parameter: 'any-value' }), {
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    return expect(
      fetcher({
        method: 'POST',
        path: '/undefined',
      }),
    ).resolves.toMatchObject({ any_parameter: 'any-value' })
  })

  it('gets a response with response error interceptor despite the error', () => {
    mockedFetch.mockRejectedValue(new TypeError(''))

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              responseError: () => Promise.resolve(42),
            },
          ],
        },
        global.fetch,
      )({
        method: 'GET',
        path: '/will-trigger-an-error',
      }),
    ).resolves.toBe(42)
  })

  it('gets the unmarshalled value of what responseError returns', () => {
    mockedFetch.mockRejectedValue(new TypeError(''))

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              responseError: () => Promise.resolve(42),
            },
          ],
        },
        global.fetch,
      )(
        {
          method: 'GET',
          path: '/will-trigger-an-error',
        },
        data => `${typeof data === 'number' ? data : ''}-dummy-output`,
      ),
    ).resolves.toBe('42-dummy-output')
  })

  it('gets modified request in response error', () => {
    mockedFetch.mockRejectedValue(new TypeError(''))

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              request: addHeaderInterceptor('random-header', '42'),
              responseError: ({ request }) => request.headers.get('random-header'),
            },
          ],
        },
        global.fetch,
      )({
        method: 'GET',
        path: '/will-trigger-an-error',
      }),
    ).resolves.toBe('42')
  })
})
