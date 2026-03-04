import type { Client, Settings } from '@scaleway/sdk-client'
import { createAdvancedClient } from '@scaleway/sdk-client'
import type { PropsWithChildren } from 'react'
import { createContext, useContext, useMemo } from 'react'

// oxlint-disable-next-line react/only-export-components
export const ClientContext = createContext<
  | {
      client: Client
    }
  | undefined
>(undefined)

type APIProviderProps = PropsWithChildren<{
  clientSettings: Settings
}>

// oxlint-disable-next-line react/only-export-components
export const useClient = () => {
  const context = useContext(ClientContext)
  if (!context) {
    throw new Error('useClient must be used in ClientProvider')
  }

  return context
}

export const ClientProvider = ({
  children,
  clientSettings,
}: APIProviderProps) => {
  const value = useMemo(
    () => ({
      client: createAdvancedClient(() => clientSettings),
    }),
    [clientSettings],
  )

  return <ClientContext value={value}>{children}</ClientContext>
}
