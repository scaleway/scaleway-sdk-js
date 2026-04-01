// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'datalab',
  version: 'v1beta1',
  folderName: 'datalabv1beta1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'getDatalab',
          protoName: 'GetDatalab',
          paramsType: 'GetDatalabRequest',
          returnType: 'Datalab',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
          hasWaiter: true,
        },
        {
          methodName: 'listDatalabs',
          protoName: 'ListDatalabs',
          paramsType: 'ListDatalabsRequest',
          returnType: 'ListDatalabsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Datalab',
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
        {
          methodName: 'listNotebookVersions',
          protoName: 'ListNotebookVersions',
          paramsType: 'ListNotebookVersionsRequest',
          returnType: 'ListNotebookVersionsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Notebook',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listClusterVersions',
          protoName: 'ListClusterVersions',
          paramsType: 'ListClusterVersionsRequest',
          returnType: 'ListClusterVersionsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Cluster',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
