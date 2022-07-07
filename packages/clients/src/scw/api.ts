import type { Client } from './client'

/**
 * Abstract class to instanciate API from a {@link Client}.
 *
 * @internal
 */
export abstract class API {
  constructor(protected client: Client) {}
}
