import { isBrowser } from '../../helpers/is-browser'
import {
  composeInterceptors,
  composeResponseErrorInterceptors,
} from '../../internal/interceptors/composer'
import type {
  RequestInterceptor,
  ResponseErrorInterceptor,
  ResponseInterceptor,
} from '../../internals'
import { obfuscateAuthHeadersEntry } from '../auth'
import type { Settings } from '../client-settings'
import {
  logRequest,
  logResponse,
  obfuscateInterceptor,
} from './http-interceptors'
import { responseParser } from './response-parser'
import type { ResponseUnmarshaller, ScwRequest } from './types'

/**
 * Builds Request from {@link ScwRequest} & {@link Settings}.
 *
 * @param request - A scaleway request
 * @param settings - The settings
 * @returns A fetch Request
 *
 * @internal
 */
export const buildRequest = (
  request: Readonly<ScwRequest>,
  settings: Readonly<Settings>,
): Request => {
  let { path } = request
  if (request.urlParams instanceof URLSearchParams) {
    path = path.concat(`?${request.urlParams.toString()}`)
  }

  return new Request(`${settings.apiURL}${path}`, {
    body: request.body,
    headers: {
      Accept: 'application/json',
      .../* istanbul ignore next */ (!isBrowser()
        ? { 'User-Agent': settings.userAgent }
        : {}),
      ...request.headers,
    },
    method: request.method,
  })
}

const asIs = <T>(response: unknown) => response as T

export type Fetcher = <T>(
  request: Readonly<ScwRequest>,
  unwrapper?: ResponseUnmarshaller<T>,
) => Promise<T>

/**
 * Builds a resource fetcher.
 *
 * @param settings - The {@link Settings} object
 * @param httpClient - The HTTP client that should be used to call the API
 * @returns The fetcher
 *
 * @internal
 */
export const buildFetcher = (settings: Settings, httpClient: typeof fetch) => {
  let requestNumber = 0
  const prepareRequest = (requestId: string) =>
    composeInterceptors([
      ...(settings.interceptors
        .map(obj => obj.request)
        .filter(obj => obj) as RequestInterceptor[]),
      logRequest(requestId, obfuscateInterceptor(obfuscateAuthHeadersEntry)),
    ])
  const prepareResponse = (requestId: string) =>
    composeInterceptors([
      ...(settings.interceptors
        .map(obj => obj.response)
        .filter(obj => obj) as ResponseInterceptor[]),
      logResponse(requestId),
    ])
  // const prepareRequestErrors = () =>
  //   composeRequestErrorInterceptors(
  //     settings.interceptors
  //     .map(obj => obj.requestError)
  //     .filter(obj => obj) as RequestErrorInterceptor[]
  //   )
  const prepareResponseErrors = () =>
    composeResponseErrorInterceptors(
      settings.interceptors
        .map(obj => obj.responseError)
        .filter(obj => obj) as ResponseErrorInterceptor[],
    )

  return async <T>(
    request: Readonly<ScwRequest>,
    unwrapper: ResponseUnmarshaller<T> = asIs,
  ): Promise<T> => {
    const requestId = `${(requestNumber += 1)}`
    const finalRequest = buildRequest(request, settings)
    const reqInterceptors = prepareRequest(requestId)
    const resInterceptors = responseParser<T>(
      unwrapper,
      request.responseType ?? 'json',
    )
    const resErrorInterceptors = prepareResponseErrors()

    const output = Promise.resolve(finalRequest)
      .then(reqInterceptors)
      .then(httpClient)
      .then(prepareResponse(requestId))
      .then(resInterceptors)
      .catch(obj => resErrorInterceptors(finalRequest, obj) as T)

    return output
  }
}
