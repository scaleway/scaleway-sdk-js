/// <reference lib="dom.iterable" />
// eslint-disable-next-line import/no-extraneous-dependencies
import nodeFetch, {
  Headers as NodeFetchHeaders,
  Request as NodeFetchRequest,
  Response as NodeFetchResponse,
} from 'cross-fetch'

export declare const fetch: typeof nodeFetch
export declare const Headers: typeof NodeFetchHeaders
export declare const Request: typeof NodeFetchRequest
export declare const Response: typeof NodeFetchResponse
