export interface RequestInterceptor {
  (request: Readonly<Request>): Request | Promise<Request>
}

// export interface RequestErrorInterceptor {
//   (error: unknown): unknown | Promise<unknown>
// }

export interface ResponseInterceptor {
  (response: Readonly<Response>): Response | Promise<Response>
}

export interface ResponseErrorInterceptor {
  (request: Request, error: unknown): unknown | Promise<unknown>
}

export type NetworkInterceptors = {
  request?: RequestInterceptor
  // requestError?: RequestErrorInterceptor
  response?: ResponseInterceptor
  responseError?: ResponseErrorInterceptor
}
