import type { PropsWithChildren } from 'react'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useClient } from '../ClientProvider'
import type { APISdkCache, DefaultTypeBaseAPI, ExtendedAPISdkCache } from '../types'

type SetSDKInstance<TCache extends APISdkCache = APISdkCache> = (key: Partial<TCache>) => void

// oxlint-disable-next-line react/only-export-components
export const SDKCacheContext = createContext<
  | {
      sdkCache: Partial<ExtendedAPISdkCache<DefaultTypeBaseAPI>>
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
  return context as unknown as {
    sdkCache: Partial<ExtendedAPISdkCache<TCustomAPIs>>
    setSdkInstance: SetSDKInstance<ExtendedAPISdkCache<TCustomAPIs>>
  }
}

export const SDKCacheProvider = ({
  children,
  initialCache,
}: PropsWithChildren<{ initialCache?: Partial<ExtendedAPISdkCache<DefaultTypeBaseAPI>> }>) => {
  const { client } = useClient()

  const [sdkCache, setSdkCache] = useState(initialCache ?? {})

  const setSdkInstance = useCallback(
    (sdkInstance: Partial<ExtendedAPISdkCache<DefaultTypeBaseAPI>>) => {
      // Avoid recreating the SDK and maintain reference to avoid useless re-render.
      Object.assign(sdkCache, sdkInstance)
    },
    [sdkCache],
  )

  // reset cache when client changes, but keep the initial cache on first mount
  const isInitialRender = useRef(true)
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }
    // oxlint-disable-next-line typescript/no-unnecessary-condition -- client is typed as non-null but may be absent at runtime if ClientProvider is missing
    if (client !== undefined) {
      // oxlint-disable-next-line react/set-state-in-effect -- intentional cache reset on client change
      setSdkCache({})
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
