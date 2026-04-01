// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'inference',
  version: 'v1',
  folderName: 'inferencev1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'listDeployments',
          protoName: 'ListDeployments',
          paramsType: 'ListDeploymentsRequest',
          returnType: 'ListDeploymentsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Deployment',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getDeployment',
          protoName: 'GetDeployment',
          paramsType: 'GetDeploymentRequest',
          returnType: 'Deployment',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getDeploymentCertificate',
          protoName: 'GetDeploymentCertificate',
          paramsType: 'GetDeploymentCertificateRequest',
          returnType: 'Blob',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listModels',
          protoName: 'ListModels',
          paramsType: 'ListModelsRequest',
          returnType: 'ListModelsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Model',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getModel',
          protoName: 'GetModel',
          paramsType: 'GetModelRequest',
          returnType: 'Model',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listNodeTypes',
          protoName: 'ListNodeTypes',
          paramsType: 'ListNodeTypesRequest',
          returnType: 'ListNodeTypesResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'NodeType',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
