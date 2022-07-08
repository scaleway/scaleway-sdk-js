import type { Region, Zone } from '../../../scw/locality'

export type WaitForLbPrivateNetworksRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
}

export type ZonedWaitForLbPrivateNetworksRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
}
