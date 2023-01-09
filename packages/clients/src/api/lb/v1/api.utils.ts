import {
  createExponentialBackoffStrategy,
  tryAtIntervals,
} from '../../../internal/async/interval-retrier'
import type { WaitForOptions } from '../../../internal/async/interval-retrier'
import { API, ZonedAPI } from './api.gen'
import {
  INSTANCE_TRANSIENT_STATUSES,
  LB_TRANSIENT_STATUSES,
  PRIVATE_NETWORK_TRANSIENT_STATUSES,
} from './content.gen'
import type {
  GetLbRequest,
  Lb,
  ListLbPrivateNetworksResponse,
  PrivateNetwork,
} from './types.gen'
import type {
  WaitForLbPrivateNetworksRequest,
  ZonedWaitForLbPrivateNetworksRequest,
} from './types.utils'

export class LbV1UtilsAPI extends API {
  /**
   * Waits for all private networks of a load balancer to be in a final state.
   *
   * @param request - The request {@link WaitForLbPrivateNetworksRequest}
   * @param options - The waiting options
   * @returns A Promise of ListLbPrivateNetworksResponse
   */
  waitForLbPrivateNetworks = (
    request: Readonly<WaitForLbPrivateNetworksRequest>,
    options?: Readonly<WaitForOptions<PrivateNetwork>>,
  ) =>
    tryAtIntervals(
      async () => {
        const value: ListLbPrivateNetworksResponse =
          await this.listLbPrivateNetworks({
            lbId: request.lbId,
            region: request.region,
          })
            .all()
            .then(list => ({
              privateNetwork: list,
              totalCount: list.length,
            }))

        return {
          done:
            value.privateNetwork.find(elt =>
              PRIVATE_NETWORK_TRANSIENT_STATUSES.includes(elt.status),
            ) === undefined,
          value,
        }
      },
      createExponentialBackoffStrategy(
        options?.minDelay ?? 1,
        options?.maxDelay ?? 30,
      ),
      options?.timeout,
    )

  /**
   * Waits for all instances of a load balancer to be in a final state.
   *
   * @param request - The request {@link GetLbRequest}
   * @param options - The waiting options
   * @returns A Promise of Lb
   */
  waitForLbInstances = (
    request: Readonly<GetLbRequest>,
    options?: Readonly<WaitForOptions<Lb>>,
  ) =>
    tryAtIntervals(
      async () => {
        const value = await this.getLb(request)

        return {
          done:
            !LB_TRANSIENT_STATUSES.includes(value.status) &&
            value.instances.find(elt =>
              INSTANCE_TRANSIENT_STATUSES.includes(elt.status),
            ) === undefined,
          value,
        }
      },
      createExponentialBackoffStrategy(
        options?.minDelay ?? 1,
        options?.maxDelay ?? 30,
      ),
      options?.timeout,
    )
}

export class LbZonedV1UtilsAPI extends ZonedAPI {
  /**
   * Waits for all private networks of a (zoned) load balancer to be in a final
   * state.
   *
   * @param request - The request {@link ZonedWaitForLbPrivateNetworksRequest}
   * @param options - The waiting options
   * @returns A Promise of ListLbPrivateNetworksResponse
   */
  waitForLbPrivateNetworks = (
    request: Readonly<ZonedWaitForLbPrivateNetworksRequest>,
    options?: Readonly<WaitForOptions<ListLbPrivateNetworksResponse>>,
  ) =>
    tryAtIntervals(
      async () => {
        const value: ListLbPrivateNetworksResponse =
          await this.listLbPrivateNetworks({
            lbId: request.lbId,
            zone: request.zone,
          })
            .all()
            .then(list => ({
              privateNetwork: list,
              totalCount: list.length,
            }))

        return {
          done:
            value.privateNetwork.find(elt =>
              PRIVATE_NETWORK_TRANSIENT_STATUSES.includes(elt.status),
            ) === undefined,
          value,
        }
      },
      createExponentialBackoffStrategy(
        options?.minDelay ?? 1,
        options?.maxDelay ?? 30,
      ),
      options?.timeout,
    )

  /**
   * Waits for all instances of a (zoned) load balancer to be in a final state.
   *
   * @param request - The request {@link GetLbRequest}
   * @param options - The waiting options
   * @returns A Promise of Lb
   */
  waitForLbInstances = (
    request: Readonly<GetLbRequest>,
    options?: Readonly<WaitForOptions<Lb>>,
  ) =>
    tryAtIntervals(
      async () => {
        const value = await this.getLb(request)

        return {
          done:
            !LB_TRANSIENT_STATUSES.includes(value.status) &&
            value.instances.find(elt =>
              INSTANCE_TRANSIENT_STATUSES.includes(elt.status),
            ) === undefined,
          value,
        }
      },
      createExponentialBackoffStrategy(
        options?.minDelay ?? 1,
        options?.maxDelay ?? 30,
      ),
      options?.timeout,
    )
}
