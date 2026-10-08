// @vitest-environment jsdom
import { API, createAdvancedClient } from '@scaleway/sdk-client'
import type { Client, Settings } from '@scaleway/sdk-client'
import { Instancev1 } from '@scaleway/sdk-instance'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import type { JSX } from 'react'
import { useState } from 'react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { ClientProvider } from '../ClientProvider'
import type { APISdkCache } from '../types'
import { SDKCacheProvider, useSDKCache } from './SDKCacheProvider'
import { createSDKFactory } from './sdkFactory'

const testSettings: Settings = {
  httpClient: fetch,
  interceptors: [],
  userAgent: 'sdk-react-test',
}

const buildTestClient = (): Client => createAdvancedClient(() => testSettings)

let instanceCount = 0

class CountingAPI extends API {
  public constructor(client: Client) {
    super(client)
    instanceCount += 1
  }
}

const makeInstance = (): CountingAPI => new CountingAPI(buildTestClient())

const useCountingAPI = createSDKFactory(CountingAPI, 'countingApi')

const CacheProbe = ({ cacheKey }: { cacheKey: string }): JSX.Element => {
  const { getSdkCache, setSdkInstance } = useSDKCache()
  const [, setRefresh] = useState(0)
  const sdkCache = getSdkCache()
  const hasEntry = sdkCache?.[cacheKey] !== undefined

  return (
    <div>
      <span data-testid="cache-keys">{sdkCache ? Object.keys(sdkCache).join(',') : 'null'}</span>
      <span data-testid="has-entry">{hasEntry ? 'yes' : 'no'}</span>
      <button
        type="button"
        onClick={() => {
          setSdkInstance({ [cacheKey]: makeInstance() })
        }}
      >
        populate
      </button>
      <button
        type="button"
        onClick={() => {
          setRefresh(count => count + 1)
        }}
      >
        refresh
      </button>
    </div>
  )
}

const MergeProbe = (): JSX.Element => {
  const { getSdkCache, setSdkInstance } = useSDKCache()
  const sdkCache = getSdkCache()
  const [, setRefresh] = useState(0)

  return (
    <div>
      <span data-testid="cache-keys">{sdkCache ? Object.keys(sdkCache).join(',') : 'null'}</span>
      <button
        type="button"
        onClick={() => {
          setSdkInstance({ otherApi: makeInstance() })
        }}
      >
        add-other
      </button>
      <button
        type="button"
        onClick={() => {
          setRefresh(count => count + 1)
        }}
      >
        refresh
      </button>
    </div>
  )
}

const FactoryHarness = (): JSX.Element => {
  useCountingAPI()
  const [, setCount] = useState(0)

  return (
    <button
      type="button"
      onClick={() => {
        setCount(count => count + 1)
      }}
    >
      rerender
    </button>
  )
}

const FactoryAndProbe = (): JSX.Element => {
  useCountingAPI()
  const { getSdkCache } = useSDKCache()
  const sdkCache = getSdkCache()

  return <span data-testid="cache-keys">{sdkCache ? Object.keys(sdkCache).join(',') : 'null'}</span>
}

let realInstanceCount = 0

class CountingRealAPI extends Instancev1.API {
  public constructor(client: Client) {
    super(client)
    realInstanceCount += 1
  }
}

const useRealInstanceAPI = createSDKFactory(CountingRealAPI, 'instancev1')

const RealInstanceHarness = (): JSX.Element => {
  useRealInstanceAPI()
  const [, setCount] = useState(0)

  return (
    <button
      type="button"
      onClick={() => {
        setCount(count => count + 1)
      }}
    >
      rerender
    </button>
  )
}

const ClientHarness = ({ settings }: { settings: Settings }): JSX.Element => (
  <ClientProvider clientSettings={settings}>
    <SDKCacheProvider>
      <FactoryAndProbe />
    </SDKCacheProvider>
  </ClientProvider>
)

describe('SDKCacheProvider', () => {
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    instanceCount = 0
    realInstanceCount = 0
  })

  it('populates the cache when it starts empty', () => {
    render(
      <ClientProvider clientSettings={testSettings}>
        <SDKCacheProvider>
          <CacheProbe cacheKey="countingApi" />
        </SDKCacheProvider>
      </ClientProvider>,
    )

    expect(screen.getByTestId('cache-keys').textContent).toBe('null')

    fireEvent.click(screen.getByRole('button', { name: 'populate' }))
    // The cache is mutated in place without a re-render, so force one to observe it.
    fireEvent.click(screen.getByRole('button', { name: 'refresh' }))

    expect(screen.getByTestId('has-entry').textContent).toBe('yes')
    expect(screen.getByTestId('cache-keys').textContent).toBe('countingApi')
  })

  it('keeps the initial cache after the first client effect', () => {
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- test fixture only sets one key of the full typed cache
    const initialCache = { countingApi: makeInstance() } as unknown as APISdkCache

    render(
      <ClientProvider clientSettings={testSettings}>
        <SDKCacheProvider initialCache={initialCache}>
          <CacheProbe cacheKey="countingApi" />
        </SDKCacheProvider>
      </ClientProvider>,
    )

    expect(screen.getByTestId('has-entry').textContent).toBe('yes')
    expect(screen.getByTestId('cache-keys').textContent).toBe('countingApi')
  })

  it('merges into the existing cache without re-rendering consumers', () => {
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- test fixture only sets one key of the full typed cache
    const initialCache = { countingApi: makeInstance() } as unknown as APISdkCache

    render(
      <ClientProvider clientSettings={testSettings}>
        <SDKCacheProvider initialCache={initialCache}>
          <MergeProbe />
        </SDKCacheProvider>
      </ClientProvider>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'add-other' }))

    // The merge is done in place: a re-render would render the new key, so it staying
    // unchanged proves consumers keep their reference and are not re-rendered.
    expect(screen.getByTestId('cache-keys').textContent).toBe('countingApi')

    fireEvent.click(screen.getByRole('button', { name: 'refresh' }))

    // The merged key is visible on the next consumer render.
    expect(screen.getByTestId('cache-keys').textContent).toBe('countingApi,otherApi')
  })

  it('creates a single SDK instance cached across re-renders', () => {
    render(
      <ClientProvider clientSettings={testSettings}>
        <SDKCacheProvider>
          <FactoryHarness />
        </SDKCacheProvider>
      </ClientProvider>,
    )

    const rerender = screen.getByRole('button', { name: 'rerender' })
    fireEvent.click(rerender)
    fireEvent.click(rerender)
    fireEvent.click(rerender)

    expect(instanceCount).toBe(1)
  })

  it('reuses a single real generated SDK instance across re-renders', () => {
    render(
      <ClientProvider clientSettings={testSettings}>
        <SDKCacheProvider>
          <RealInstanceHarness />
        </SDKCacheProvider>
      </ClientProvider>,
    )

    const rerender = screen.getByRole('button', { name: 'rerender' })
    fireEvent.click(rerender)
    fireEvent.click(rerender)

    expect(realInstanceCount).toBe(1)
  })

  it('resets the cache and recreates SDKs when the client changes', () => {
    const settingsA: Settings = { ...testSettings, userAgent: 'sdk-react-test-a' }
    const settingsB: Settings = { ...testSettings, userAgent: 'sdk-react-test-b' }

    const { rerender } = render(<ClientHarness settings={settingsA} />)
    expect(screen.getByTestId('cache-keys').textContent).toBe('countingApi')
    expect(instanceCount).toBe(1)

    rerender(<ClientHarness settings={settingsB} />)

    // The new client invalidates the cache, so the next factory call recreates the SDK.
    expect(instanceCount).toBe(2)
    expect(screen.getByTestId('cache-keys').textContent).toBe('countingApi')
  })
})
