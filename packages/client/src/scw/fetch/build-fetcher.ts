import { isBrowser } from '../../helpers/is-browser.js'
import type { RequestInterceptor, ResponseErrorInterceptor, ResponseInterceptor } from '../../index.js'
import {
  createRetryBackoffStrategy,
  isAbortOrTimeoutError,
  parseRetryAfterHeader,
  resolveRetryDelayMs,
  resolveRetryOptions,
} from '../../internal/async/http-retry.js'
import type { ResolvedRetryOptions } from '../../internal/async/http-retry.js'
import { sleep } from '../../internal/async/sleep.js'
import {
  composeRequestInterceptors,
  composeResponseErrorInterceptors,
  composeResponseInterceptors,
} from '../../internal/interceptors/composer.js'
import { obfuscateAuthHeadersEntry } from '../auth.js'
import type { Settings } from '../client-settings.js'
import { ScalewayError } from '../errors/scw-error.js'
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

const isAborted = (signal?: AbortSignal): boolean => signal?.aborted === true

export type Fetcher = <T>(request: Readonly<ScwRequest>, unwrapper?: ResponseUnmarshaller<T>) => Promise<T>

/**
 * Builds a resource fetcher.
 *
 * @param settings - The {@link Settings} object
 * @param httpClient - The HTTP client that should be used to call the API
 * @returns The fetcher
 *
 * @remarks
 * When `settings.retry` is set:
 * - `responseError` interceptors run only after retries are exhausted (not on each failed attempt).
 * - request/response interceptors (including logs) run on every attempt.
 * - A single `AbortSignal` covers the whole retry sequence when using `defaultTimeoutMs`
 *   or a caller-supplied `signal` (total wall-clock is not `timeout × attempts`).
 * - Request bodies must be reusable strings (SDK default). A `ReadableStream` body cannot be rebuilt.
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

  // withRetry already resolves; only resolve again for a partial hand-written `settings.retry`.
  const { retry } = settings
  let retryOptions: ResolvedRetryOptions | undefined = undefined
  if (retry !== undefined) {
    retryOptions =
      typeof retry.maxRetries === 'number' &&
      typeof retry.minDelay === 'number' &&
      typeof retry.maxDelay === 'number' &&
      typeof retry.isRetryable === 'function'
        ? {
            isRetryable: retry.isRetryable,
            maxDelay: retry.maxDelay,
            maxRetries: retry.maxRetries,
            minDelay: retry.minDelay,
          }
        : resolveRetryOptions(retry)
  }

  return async <T>(request: Readonly<ScwRequest>, unwrapper: ResponseUnmarshaller<T> = asIs): Promise<T> => {
    requestNumber += 1
    const requestId = `${requestNumber}`
    const reqInterceptors = prepareRequest(requestId)
    const resUnmarshaller = responseParser<T>(unwrapper, request.responseType ?? 'json')
    const handleError = async (finalRequest: Request, error: unknown): Promise<T> => {
      if (error instanceof ScalewayError) {
        error.setRequestContext({
          url: finalRequest.url,
          method: finalRequest.method,
          requestId,
          requestHeaders: new Headers(Array.from(finalRequest.headers, obfuscateAuthHeadersEntry)),
        })
      }
      // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- error interceptor may transform the error into the response type expected by the unwrapper
      const handledError = (await prepareResponseErrors()(finalRequest, error)) as T

      return unwrapper(handledError)
    }

    // No retry configured: keep the original single-attempt path (zero retry overhead).
    if (retryOptions === undefined) {
      const finalRequest = await reqInterceptors(buildRequest(request, settings))
      try {
        const response = await httpClient(finalRequest)
        const finalResponse = await prepareResponse(requestId)(response)

        return await resUnmarshaller(finalResponse)
      } catch (error) {
        return handleError(finalRequest, error)
      }
    }

    const resInterceptors = prepareResponse(requestId)
    const backoff = createRetryBackoffStrategy(retryOptions)
    const maxAttempts = retryOptions.maxRetries + 1

    // One signal for the whole retry sequence so defaultTimeoutMs is a total deadline,
    // not multiplied by the number of attempts.
    const attemptRequest: ScwRequest = {
      ...request,
      signal:
        request.signal ??
        (settings.defaultTimeoutMs !== undefined ? AbortSignal.timeout(settings.defaultTimeoutMs) : undefined),
    }
    // Avoid buildRequest creating a fresh AbortSignal.timeout per attempt.
    const attemptSettings: Settings =
      attemptRequest.signal !== undefined ? { ...settings, defaultTimeoutMs: undefined } : settings

    let lastRequest: Request | undefined = undefined
    let lastError: unknown = undefined

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      if (isAborted(attemptRequest.signal)) {
        lastError = attemptRequest.signal?.reason ?? new Error('The operation was aborted')
        break
      }

      // oxlint-disable-next-line eslint/no-await-in-loop -- sequential retry attempts
      lastRequest = await reqInterceptors(buildRequest(attemptRequest, attemptSettings))
      let retryAfterMs: number | undefined = undefined
      let fromTransport = true

      try {
        // oxlint-disable-next-line eslint/no-await-in-loop -- sequential retry attempts
        const response = await httpClient(lastRequest)
        fromTransport = false
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
          attempt + 1 < maxAttempts &&
          !isAborted(attemptRequest.signal) &&
          !isAbortOrTimeoutError(error) &&
          retryOptions.isRetryable(error, { method: request.method }, fromTransport)

        if (!canRetry) {
          break
        }

        const delayMs = resolveRetryDelayMs({
          backoffSeconds: backoff.next().value,
          error,
          maxDelaySeconds: retryOptions.maxDelay,
          retryAfterMs,
        })
        try {
          // oxlint-disable-next-line eslint/no-await-in-loop -- sequential retry with delay
          await sleep(delayMs, attemptRequest.signal)
        } catch (sleepError) {
          lastError = sleepError
          break
        }
      }
    }

    if (lastRequest === undefined) {
      throw lastError instanceof Error ? lastError : new Error('request failed')
    }

    return handleError(lastRequest, lastError)
  }
}
