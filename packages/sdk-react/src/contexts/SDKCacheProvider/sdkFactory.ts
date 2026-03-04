import type { Client } from '@scaleway/sdk-client'
import { useClient } from '../ClientProvider'
import type { APISdkCache } from '../types'
import { useSDKCache } from './SDKCacheProvider'

export const createSDKFactory =
  <K extends keyof APISdkCache>(
    SDKNamespace: { new (client: Client): APISdkCache[K] },
    cacheKey: K,
  ) =>
  () => {
    const { client } = useClient()
    const { sdkCache, setSdkInstance } = useSDKCache()

    // Check if we already have this SDK instance cached
    if (sdkCache?.[cacheKey]) {
      return { [cacheKey]: sdkCache[cacheKey] } as { [P in K]: APISdkCache[P] }
    }

    // Create new instance using the provided factory function
    const instance = new SDKNamespace(client)

    // Cache the instance
    setSdkInstance({ [cacheKey]: instance })

    return { [cacheKey]: instance } as { [P in K]: APISdkCache[P] }
  }
