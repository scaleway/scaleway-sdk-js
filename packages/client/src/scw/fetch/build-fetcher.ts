import { isBrowser } from '../../helpers/is-browser.js'
import type { RequestInterceptor, ResponseErrorInterceptor, ResponseInterceptor } from '../../index.js'
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
 * Ensures Modern IAM compliance for listing methods by injecting a default scope
 * (`organization_id` or `project_id`) when none is explicitly provided.
 *
 * - `'org'`: injects `defaultOrganizationId` when neither scope is present.
 * - `'project'`: injects `defaultProjectId` when neither scope is present.
 *
 * @param request - A scaleway request
 * @param settings - The settings
 * @returns A new request with the scope guard applied, or the original if not needed
 *
 * @internal
 */
export const applyListScopeGuard = (
  request: Readonly<ScwRequest>,
  settings: Readonly<Settings>,
): Readonly<ScwRequest> => {
  if (!request.listScopeGuard) return request

  const params = request.urlParams ?? new URLSearchParams()
  if (params.has('organization_id') || params.has('project_id')) return request

  if (request.listScopeGuard === 'org') {
    if (!settings.defaultOrganizationId) return request
    const newParams = new URLSearchParams(params)
    newParams.set('organization_id', settings.defaultOrganizationId)
    return { ...request, urlParams: newParams }
  }

  if (request.listScopeGuard === 'project') {
    if (!settings.defaultProjectId) return request
    const newParams = new URLSearchParams(params)
    newParams.set('project_id', settings.defaultProjectId)
    return { ...request, urlParams: newParams }
  }

  return request
}

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
    path = path.concat(`?${request.urlParams.toString()}`)
  }

  return new Request(`${settings.apiURL}${path}`, {
    body: request.body,
    headers: {
      Accept: 'application/json',
      .../* istanbul ignore next */ (!isBrowser() ? { 'User-Agent': settings.userAgent } : {}),
      ...request.headers,
    },
    method: request.method,
  })
}

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
      ...(settings.interceptors.map(obj => obj.request).filter(obj => obj) as RequestInterceptor[]),
      logRequest(requestId, obfuscateInterceptor(obfuscateAuthHeadersEntry)),
    ])
  const prepareResponse = (requestId: string) =>
    composeResponseInterceptors([
      ...(settings.interceptors.map(obj => obj.response).filter(obj => obj) as ResponseInterceptor[]),
      logResponse(requestId),
    ])
  const prepareResponseErrors = () =>
    composeResponseErrorInterceptors(
      settings.interceptors.map(obj => obj.responseError).filter(obj => obj) as ResponseErrorInterceptor[],
    )

  return async <T>(request: Readonly<ScwRequest>, unwrapper: ResponseUnmarshaller<T> = asIs): Promise<T> => {
    requestNumber += 1
    const requestId = `${requestNumber}`
    const reqInterceptors = prepareRequest(requestId)
    const finalRequest = await reqInterceptors(buildRequest(applyListScopeGuard(request, settings), settings))

    try {
      const response = await httpClient(finalRequest)
      const resInterceptors = prepareResponse(requestId)
      const finalResponse = await resInterceptors(response)
      const resUnmarshaller = responseParser<T>(unwrapper, request.responseType ?? 'json')
      const unmarshaledResponse = await resUnmarshaller(finalResponse)

      return unmarshaledResponse
    } catch (err) {
      const resErrorInterceptors = prepareResponseErrors()
      const handledError = (await resErrorInterceptors(finalRequest, err)) as T

      return unwrapper(handledError)
    }
  }
}
