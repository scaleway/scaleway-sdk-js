import type { API } from '@scaleway/sdk-client'
import type { APISdk } from '../types.generated'

export type DefaultTypeBaseAPI = Record<string, API>
/**
 * Base API SDK Cache type that includes all standard SDKs
 */
export type BaseAPISdkCache = APISdk

export type ExtendedAPISdkCache<TCustomAPIs extends DefaultTypeBaseAPI = Record<string, never>> = BaseAPISdkCache &
  TCustomAPIs

export type APISdkCache = ExtendedAPISdkCache<DefaultTypeBaseAPI>
