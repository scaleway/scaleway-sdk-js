import type { PropsWithChildren } from 'react'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useClient } from '../ClientProvider'
import type { APISdkCache, DefaultTypeBaseAPI, ExtendedAPISdkCache } from '../types'

type SetSDKInstance<TCache extends APISdkCache = APISdkCache> = (key: Partial<TCache>) => void

// oxlint-disable-next-line react/only-export-components
export const SDKCacheContext = createContext<
  | {
      getSdkCache: () => APISdkCache | null
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
  // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- narrowing the generic context to the caller's TCustomAPIs specialization
  return context as {
    getSdkCache: () => ExtendedAPISdkCache<TCustomAPIs> | null
    setSdkInstance: SetSDKInstance<ExtendedAPISdkCache<TCustomAPIs>>
  }
}

export const SDKCacheProvider = ({
  children,
  initialCache = null,
}: PropsWithChildren<{ initialCache?: APISdkCache | null }>) => {
  const { client } = useClient()

  // The cache is a mutable store, not reactive state: the SDK factory returns the
  // instance directly to its caller, so no consumer ever needs to re-render when a
  // new SDK is cached. Using a ref lets us populate it in place without any
  // setState-driven re-render.
  const sdkCacheRef = useRef<APISdkCache | null>(initialCache)

  // Bumped only when the client changes so the context value updates and consumers
  // re-render to recreate their SDK instances against the new client.
  const [cacheVersion, setCacheVersion] = useState(0)

  const getSdkCache = useCallback(() => sdkCacheRef.current, [])

  const setSdkInstance = useCallback((sdkInstance: Partial<APISdkCache>) => {
    const cache = sdkCacheRef.current
    if (cache) {
      // Mutate the existing object in place: same reference, no re-render.
      Object.assign(cache, sdkInstance)
      return
    }
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- the cache is progressively built from partial updates, not every key is set at once
    sdkCacheRef.current = { ...sdkInstance } as APISdkCache
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
      sdkCacheRef.current = null
      // oxlint-disable-next-line react/set-state-in-effect -- intentional: one re-render so the factory sees the nulled cache
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
