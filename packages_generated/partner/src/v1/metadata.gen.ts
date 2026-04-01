// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'partner',
  version: 'v1',
  folderName: 'partnerv1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'getOrganization',
          protoName: 'GetOrganization',
          paramsType: 'GetOrganizationRequest',
          returnType: 'Organization',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listOrganizations',
          protoName: 'ListOrganizations',
          paramsType: 'ListOrganizationsRequest',
          returnType: 'ListOrganizationsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Organization',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
