import type {
  RequestInterceptor,
  ResponseInterceptor,
} from '../../internal/interceptors/types.js'
import { getLogger } from '../../internal/logger'
import {
  LevelResolver,
  shouldLog,
} from '../../internal/logger/level-resolver.js'
import { dumpRequest, dumpResponse } from './http-dumper.js'

/**
 * Mapper d'une entrée d'en-tête.
 *
 * @internal
 */
type HeaderEntryMapper = (entry: [string, string]) => [string, string]

/**
 * HTTP Request with obfuscated secrets.
 *
 * @internal
 */
class ObfuscatedRequest extends Request {
  constructor(
    private request: Request,
    private obfuscate: HeaderEntryMapper,
  ) {
    super(request)
  }

  get headers() {
    return new Headers(Array.from(this.request.headers, this.obfuscate))
  }

  clone(): ObfuscatedRequest {
    return new ObfuscatedRequest(this.request, this.obfuscate)
  }
}

/**
 * Creates an interceptor to obfuscate the requests.
 *
 * @param obfuscate - The Header entries obfuscator mapper
 * @returns The obfuscated Request
 *
 * @internal
 */
export const obfuscateInterceptor =
  (obfuscate: HeaderEntryMapper): RequestInterceptor =>
  ({ request }) =>
    new ObfuscatedRequest(request, obfuscate)

const identity: RequestInterceptor = ({ request }: { request: Request }) =>
  request

/**
 * Creates an interceptor to log the requests.
 *
 * @param identifier - The request identifier
 * @param obfuscate - The obfuscation interceptor
 * @returns The interceptor
 *
 * @internal
 */
export const logRequest =
  (
    identifier: string,
    obfuscate: RequestInterceptor = identity,
  ): RequestInterceptor =>
  async ({ request }) => {
    if (shouldLog(LevelResolver[getLogger().logLevel], 'debug')) {
      getLogger().debug(
        `--------------- Scaleway SDK REQUEST ${identifier} ---------------
${await dumpRequest(await obfuscate({ request }))}
---------------------------------------------------------`,
      )
    }

    return request
  }

/**
 * Creates an interceptor to log the responses.
 *
 * @param identifier - The request identifier
 * @returns The interceptor
 *
 * @internal
 */
export const logResponse =
  (identifier: string): ResponseInterceptor =>
  async ({ response }) => {
    if (shouldLog(LevelResolver[getLogger().logLevel], 'debug')) {
      getLogger().debug(
        `--------------- Scaleway SDK RESPONSE ${identifier} ---------------
${await dumpResponse(response)}
---------------------------------------------------------`,
      )
    }

    return response
  }
