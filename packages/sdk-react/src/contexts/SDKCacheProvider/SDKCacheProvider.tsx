import type { PropsWithChildren } from 'react'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useClient } from '../ClientProvider'
import type { APISdkCache, DefaultTypeBaseAPI, ExtendedAPISdkCache } from '../types'

type SetSDKInstance<TCache extends APISdkCache = APISdkCache> = (key: Partial<TCache>) => void

// oxlint-disable-next-line react/only-export-components
export const SDKCacheContext = createContext<
  | {
      sdkCache: APISdkCache | null
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
  return context as {
    sdkCache: ExtendedAPISdkCache<TCustomAPIs> | null
    setSdkInstance: SetSDKInstance<ExtendedAPISdkCache<TCustomAPIs>>
  }
}

export const SDKCacheProvider = ({ children }: PropsWithChildren) => {
  const { client } = useClient()

  const [sdkCache, setSdkCache] = useState<APISdkCache | null>(null)

  const setSdkInstance = useCallback(
    (sdkInstance: Partial<APISdkCache>) => {
      if (sdkCache) {
        // Avoid recreating the SDK and maintain reference to avoid useless re-render.
        Object.assign(sdkCache, sdkInstance)
      }
    },
    [sdkCache],
  )

  // reset cache
  useEffect(() => {
    if (client) {
      setSdkCache(null)
    }
  }, [client])

  const value = useMemo(
    () => ({
      sdkCache,
      setSdkInstance,
    }),
    [sdkCache, setSdkInstance],
  )

  return <SDKCacheContext value={value}>{children}</SDKCacheContext>
}
