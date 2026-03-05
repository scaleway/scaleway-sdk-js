// oxlint-disable eslint/max-statements
import type { Settings } from '@scaleway/sdk-client'
import type { PropsWithChildren } from 'react'
import { ClientProvider as BaseClientProvider } from './ClientProvider'
import { SDKCacheProvider } from './SDKCacheProvider/SDKCacheProvider'

type APIProviderProps = PropsWithChildren<{
  clientSettings: Settings
}>

export const APIProvider = ({ children, clientSettings }: APIProviderProps) => (
  <BaseClientProvider clientSettings={clientSettings}>
    <SDKCacheProvider>{children}</SDKCacheProvider>
  </BaseClientProvider>
)
