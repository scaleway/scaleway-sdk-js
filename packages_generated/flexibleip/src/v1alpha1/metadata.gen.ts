// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'flexibleip',
  version: 'v1alpha1',
  folderName: 'flexibleipv1alpha1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'getFlexibleIP',
          protoName: 'GetFlexibleIP',
          paramsType: 'GetFlexibleIPRequest',
          returnType: 'FlexibleIP',
          returnTypeNamespace: '@scaleway-internal/sdk-flexibleip/v1alpha1',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listFlexibleIPs',
          protoName: 'ListFlexibleIPs',
          paramsType: 'ListFlexibleIPsRequest',
          returnType: 'ListFlexibleIPsResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-flexibleip/v1alpha1',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'FlexibleIP',
          listItemTypeNamespace: '@scaleway-internal/sdk-flexibleip/v1alpha1',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
