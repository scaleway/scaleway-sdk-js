export interface RequestInterceptor {
  ({ request }: { request: Readonly<Request> }): Request | Promise<Request>
}

export interface ResponseInterceptor {
  ({ response }: { response: Readonly<Response> }): Response | Promise<Response>
}

export interface ResponseErrorInterceptor {
  ({ request, error }: { request: Request; error: unknown }):
    | unknown
    | Promise<unknown>
}

export type NetworkInterceptors = {
  request?: RequestInterceptor
  response?: ResponseInterceptor
  responseError?: ResponseErrorInterceptor
}
