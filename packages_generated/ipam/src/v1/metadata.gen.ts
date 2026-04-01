// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'ipam',
  version: 'v1',
  folderName: 'ipamv1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'getIP',
          protoName: 'GetIP',
          paramsType: 'GetIPRequest',
          returnType: 'IP',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listIPs',
          protoName: 'ListIPs',
          paramsType: 'ListIPsRequest',
          returnType: 'ListIPsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'IP',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
