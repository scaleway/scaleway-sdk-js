import type { Client } from './client.js'

/**
 * Abstract class to instantiate API from a {@link Client}.
 *
 * @internal
 */
/* biome-ignore lint/style/useNamingConvention: API is standard class name for SDK base */
export abstract class API {
  constructor(protected client: Client) {}
}
