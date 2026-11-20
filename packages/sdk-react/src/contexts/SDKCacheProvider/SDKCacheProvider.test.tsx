// @vitest-environment jsdom
import { createAdvancedClient } from '@scaleway/sdk-client'
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

class CountingAPI extends Instancev1.API {
  public constructor(client: Client) {
    super(client)
    instanceCount += 1
  }
}

const useInstanceAPI = createSDKFactory(CountingAPI, 'instancev1')

/**
 * Probe that reads the cache directly and exposes its keys.
 * A "refresh" button forces a re-render so mutations done via Object.assign
 * (which do not trigger a state update) become observable.
 */
const CacheProbe = (): JSX.Element => {
  const { sdkCache, setSdkInstance } = useSDKCache()
  const [, setRefresh] = useState(0)

  return (
    <div>
      <span data-testid="cache-keys">{Object.keys(sdkCache).join(',')}</span>
      <button
        type="button"
        onClick={() => {
          setSdkInstance({ instancev1: new CountingAPI(buildTestClient()) })
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

const FactoryHarness = (): JSX.Element => {
  useInstanceAPI()
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
  useInstanceAPI()
  const { sdkCache } = useSDKCache()

  return <span data-testid="cache-keys">{Object.keys(sdkCache).join(',')}</span>
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
  })

  it('populates the cache on the first setSdkInstance call (regression: was a no-op when cache started null)', () => {
    render(
      <ClientProvider clientSettings={testSettings}>
        <SDKCacheProvider>
          <CacheProbe />
        </SDKCacheProvider>
      </ClientProvider>,
    )

    expect(screen.getByTestId('cache-keys').textContent).toBe('')

    fireEvent.click(screen.getByRole('button', { name: 'populate' }))
    // Object.assign mutates in place without a re-render, so force one to observe it.
    fireEvent.click(screen.getByRole('button', { name: 'refresh' }))

    expect(screen.getByTestId('cache-keys').textContent).toBe('instancev1')
  })

  it('preserves a pre-seeded initialCache', () => {
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- test fixture sets one keyed entry of the typed cache
    const initialCache = { instancev1: new CountingAPI(buildTestClient()) } as unknown as APISdkCache

    render(
      <ClientProvider clientSettings={testSettings}>
        <SDKCacheProvider initialCache={initialCache}>
          <CacheProbe />
        </SDKCacheProvider>
      </ClientProvider>,
    )

    expect(screen.getByTestId('cache-keys').textContent).toBe('instancev1')
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

  it('resets the cache and recreates SDKs when the client changes', () => {
    const settingsA: Settings = { ...testSettings, userAgent: 'sdk-react-test-a' }
    const settingsB: Settings = { ...testSettings, userAgent: 'sdk-react-test-b' }

    const { rerender } = render(<ClientHarness settings={settingsA} />)
    expect(screen.getByTestId('cache-keys').textContent).toBe('instancev1')
    expect(instanceCount).toBe(1)

    rerender(<ClientHarness settings={settingsB} />)

    // The new client invalidates the cache, so the next factory call recreates the SDK.
    expect(instanceCount).toBe(2)
    expect(screen.getByTestId('cache-keys').textContent).toBe('instancev1')
  })
})
