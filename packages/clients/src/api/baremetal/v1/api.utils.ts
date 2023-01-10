import {
  createExponentialBackoffStrategy,
  tryAtIntervals,
} from '../../../internal/async/interval-retrier'
import type { WaitForOptions } from '../../../internal/async/interval-retrier'
import { API } from './api.gen'
import { SERVER_INSTALL_TRANSIENT_STATUSES } from './content.gen'
import type { GetServerRequest, ServerInstall } from './types.gen'

export class BaremetalV1UtilsAPI extends API {
  /**
   * Waits for {@link ServerInstall} to be in a final state.
   *
   * @param request - The request {@link GetServerRequest}
   * @param options - The waiting options
   * @returns A Promise of ServerInstall
   */
  waitForServerInstall = (
    request: Readonly<GetServerRequest>,
    options?: Readonly<WaitForOptions<ServerInstall>>,
  ) =>
    tryAtIntervals(
      async () => {
        const value = await this.getServer(request).then(server => {
          if (!server.install) {
            throw new Error(
              `Server creation has not begun for server ${request.serverId}`,
            )
          }

          return server.install
        })

        if (!value) {
          throw new Error(
            `Server creation has not begun for server ${request.serverId}`,
          )
        }

        return {
          done: !SERVER_INSTALL_TRANSIENT_STATUSES.includes(value.status),
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
