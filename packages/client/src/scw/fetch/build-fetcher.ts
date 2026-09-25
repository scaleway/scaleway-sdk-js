import { isBrowser } from '../../helpers/is-browser.js'
import type { RequestInterceptor, ResponseErrorInterceptor, ResponseInterceptor } from '../../index.js'
import {
  createRetryBackoffStrategy,
  parseRetryAfterHeader,
  resolveRetryDelayMs,
  resolveRetryOptions,
} from '../../internal/async/http-retry.js'
import { sleep } from '../../internal/async/sleep.js'
import {
  composeRequestInterceptors,
  composeResponseErrorInterceptors,
  composeResponseInterceptors,
} from '../../internal/interceptors/composer.js'
import { obfuscateAuthHeadersEntry } from '../auth.js'
import type { Settings } from '../client-settings.js'
import { logRequest, logResponse, obfuscateInterceptor } from './http-interceptors.js'
import { responseParser } from './response-parser.js'
import type { ResponseUnmarshaller, ScwRequest } from './types.js'

/**
 * Builds Request from {@link ScwRequest} & {@link Settings}.
 *
 * @param request - A scaleway request
 * @param settings - The settings
 * @returns A fetch Request
 *
 * @internal
 */
export const buildRequest = (request: Readonly<ScwRequest>, settings: Readonly<Settings>): Request => {
  let { path } = request
  if (request.urlParams instanceof URLSearchParams) {
    path = `${path}?${request.urlParams.toString()}`
  }

  return new Request(`${settings.apiURL}${path}`, {
    body: request.body,
    headers: {
      Accept: 'application/json',
      .../* istanbul ignore next */ (!isBrowser() ? { 'User-Agent': settings.userAgent } : {}),
      ...request.headers,
    },
    method: request.method,
    signal:
      request.signal ??
      (settings.defaultTimeoutMs !== undefined ? AbortSignal.timeout(settings.defaultTimeoutMs) : undefined),
  })
}

// oxlint-disable-next-line typescript/no-unnecessary-type-parameters, typescript/no-unsafe-type-assertion -- generic passthrough unwrapper; T is caller-controlled and the response shape is unknown at this layer
const asIs = <T>(response: unknown) => response as T

export type Fetcher = <T>(request: Readonly<ScwRequest>, unwrapper?: ResponseUnmarshaller<T>) => Promise<T>

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
    composeRequestInterceptors([
      ...settings.interceptors.map(obj => obj.request).filter((x): x is RequestInterceptor => x !== undefined),
      logRequest(requestId, obfuscateInterceptor(obfuscateAuthHeadersEntry)),
    ])
  const prepareResponse = (requestId: string) =>
    composeResponseInterceptors([
      ...settings.interceptors.map(obj => obj.response).filter((x): x is ResponseInterceptor => x !== undefined),
      logResponse(requestId),
    ])
  const prepareResponseErrors = () =>
    composeResponseErrorInterceptors(
      settings.interceptors.map(obj => obj.responseError).filter((x): x is ResponseErrorInterceptor => x !== undefined),
    )

  const retryOptions = settings.retry !== undefined ? resolveRetryOptions(settings.retry) : undefined

  return async <T>(request: Readonly<ScwRequest>, unwrapper: ResponseUnmarshaller<T> = asIs): Promise<T> => {
    requestNumber += 1
    const requestId = `${requestNumber}`
    const reqInterceptors = prepareRequest(requestId)
    const resInterceptors = prepareResponse(requestId)
    const resUnmarshaller = responseParser<T>(unwrapper, request.responseType ?? 'json')
    const backoff = retryOptions !== undefined ? createRetryBackoffStrategy(retryOptions) : undefined
    const maxAttempts = retryOptions !== undefined ? retryOptions.maxRetries + 1 : 1

    let lastRequest: Request | undefined = undefined
    let lastError: unknown = undefined
    let retryAfterMs: number | undefined = undefined

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      // oxlint-disable-next-line eslint/no-await-in-loop -- sequential retry attempts
      lastRequest = await reqInterceptors(buildRequest(request, settings))
      retryAfterMs = undefined

      try {
        // oxlint-disable-next-line eslint/no-await-in-loop -- sequential retry attempts
        const response = await httpClient(lastRequest)
        // oxlint-disable-next-line eslint/no-await-in-loop -- sequential retry attempts
        const finalResponse = await resInterceptors(response)
        if (!finalResponse.ok) {
          retryAfterMs = parseRetryAfterHeader(finalResponse.headers.get('Retry-After'))
        }
        // oxlint-disable-next-line eslint/no-await-in-loop -- sequential retry attempts
        return await resUnmarshaller(finalResponse)
      } catch (error) {
        lastError = error
        const canRetry =
          retryOptions !== undefined &&
          backoff !== undefined &&
          attempt + 1 < maxAttempts &&
          retryOptions.isRetryable(error)

        if (!canRetry) {
          break
        }

        const delayMs = resolveRetryDelayMs({
          backoffSeconds: backoff.next().value,
          error,
          maxDelaySeconds: retryOptions.maxDelay,
          retryAfterMs,
        })
        // oxlint-disable-next-line eslint/no-await-in-loop -- sequential retry with delay
        await sleep(delayMs)
      }
    }

    const resErrorInterceptors = prepareResponseErrors()
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- error interceptor may transform the error into the response type expected by the unwrapper
    const handledError = (await resErrorInterceptors(lastRequest ?? buildRequest(request, settings), lastError)) as T

    return unwrapper(handledError)
  }
}
