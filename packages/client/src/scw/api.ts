import type { Client } from './client.js'

/**
 * Abstract class to instantiate API from a {@link Client}.
 *
 * @internal
 */
export abstract class API {
  constructor(protected client: Client) {}
}
