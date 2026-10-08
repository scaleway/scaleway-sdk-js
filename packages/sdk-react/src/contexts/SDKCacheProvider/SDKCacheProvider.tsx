import type { PropsWithChildren } from 'react'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useClient } from '../ClientProvider'
import type { APISdkCache, DefaultTypeBaseAPI, ExtendedAPISdkCache } from '../types'

type SetSDKInstance<TCache extends APISdkCache = APISdkCache> = (key: Partial<TCache>) => void

// oxlint-disable-next-line react/only-export-components
export const SDKCacheContext = createContext<
  | {
      getSdkCache: () => APISdkCache
      setSdkInstance: SetSDKInstance
    }
  | undefined
>(undefined)

// oxlint-disable-next-line react/only-export-components
export const useSDKCache = <TCustomAPIs extends DefaultTypeBaseAPI = DefaultTypeBaseAPI>() => {
  const context = useContext(SDKCacheContext)
  if (!context) {
    throw new Error('useSDKCache must be used in SDKCacheProvider')
  }

  // Cast the context to the extended type for better type safety
  // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- narrowing the generic context to the caller's TCustomAPIs specialization; APISdkCache and ExtendedAPISdkCache<TCustomAPIs> only differ by the custom API keys, so cast through unknown
  return context as unknown as {
    getSdkCache: () => ExtendedAPISdkCache<TCustomAPIs>
    setSdkInstance: SetSDKInstance<ExtendedAPISdkCache<TCustomAPIs>>
  }
}

// oxlint-disable-next-line typescript/no-unsafe-type-assertion -- the cache is progressively populated at runtime; an empty object is the valid starting state before any SDK is cached
const createEmptyCache = (): APISdkCache => ({}) as APISdkCache

export const SDKCacheProvider = ({ children, initialCache }: PropsWithChildren<{ initialCache?: APISdkCache }>) => {
  const { client } = useClient()

  // The cache is a mutable store, not reactive state: the SDK factory returns the
  // instance directly to its caller, so no consumer ever needs to re-render when a
  // new SDK is cached. Using a ref lets us populate it in place without any
  // setState-driven re-render. It is always an object (never null), so setSdkInstance
  // can mutate it unconditionally.
  const sdkCacheRef = useRef<APISdkCache>(initialCache ?? createEmptyCache())

  // Bumped only when the client changes so the context value updates and consumers
  // re-render to recreate their SDK instances against the new client.
  const [cacheVersion, setCacheVersion] = useState(0)

  const getSdkCache = useCallback(() => sdkCacheRef.current, [])

  const setSdkInstance = useCallback((sdkInstance: Partial<APISdkCache>) => {
    // Mutate the existing object in place: same reference, no re-render.
    Object.assign(sdkCacheRef.current, sdkInstance)
  }, [])

  // Reset cache when client changes, but keep the initial cache on first mount.
  const isInitialRender = useRef(true)
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }
    // oxlint-disable-next-line typescript/no-unnecessary-condition -- client is typed as non-null but may be absent at runtime if ClientProvider is missing
    if (client !== undefined) {
      // Replace with a fresh empty cache so the factory recreates SDK instances
      // against the new client on next access.
      sdkCacheRef.current = createEmptyCache()
      // oxlint-disable-next-line react/set-state-in-effect -- intentional: one re-render so the factory sees the reset cache
      setCacheVersion(version => version + 1)
    }
  }, [client])

  const value = useMemo(
    () => ({
      getSdkCache,
      setSdkInstance,
    }),
    // cacheVersion is a trigger-only dependency: it forces a new context value on
    // client switches so consumers re-render and the factory recreates SDK instances.
    // oxlint-disable-next-line react/memo-dependencies, react-hooks/exhaustive-deps -- cacheVersion is an intentional trigger-only dependency
    [getSdkCache, setSdkInstance, cacheVersion],
  )

  return <SDKCacheContext value={value}>{children}</SDKCacheContext>
}
