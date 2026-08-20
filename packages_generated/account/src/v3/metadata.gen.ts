// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'account',
  version: 'v3',
  folderName: 'accountv3',
  services: [
    {
      apiClass: 'ContractAPI',
      methods: [
        {
          methodName: 'listContractSignatures',
          protoName: 'ListContractSignatures',
          paramsType: 'ContractApiListContractSignaturesRequest',
          returnType: 'ListContractSignaturesResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-account/v3',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'ContractSignature',
          listItemTypeNamespace: '@scaleway-internal/sdk-account/v3',
          isPrivate: false,
          description: '"',
        },
      ],
    },
    {
      apiClass: 'ProjectAPI',
      methods: [
        {
          methodName: 'listProjects',
          protoName: 'ListProjects',
          paramsType: 'ProjectApiListProjectsRequest',
          returnType: 'ListProjectsResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-account/v3',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Project',
          listItemTypeNamespace: '@scaleway-internal/sdk-account/v3',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getProject',
          protoName: 'GetProject',
          paramsType: 'ProjectApiGetProjectRequest',
          returnType: 'Project',
          returnTypeNamespace: '@scaleway-internal/sdk-account/v3',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
