// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'file',
  version: 'v1alpha1',
  folderName: 'filev1alpha1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'listFileSystemTypes',
          protoName: 'ListFileSystemTypes',
          paramsType: 'ListFileSystemTypesRequest',
          returnType: 'ListFileSystemTypesResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-file/v1alpha1',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'FileSystemType',
          listItemTypeNamespace: '@scaleway-internal/sdk-file/v1alpha1',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getFileSystem',
          protoName: 'GetFileSystem',
          paramsType: 'GetFileSystemRequest',
          returnType: 'FileSystem',
          returnTypeNamespace: '@scaleway-internal/sdk-file/v1alpha1',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
          hasWaiter: true,
        },
        {
          methodName: 'listFileSystems',
          protoName: 'ListFileSystems',
          paramsType: 'ListFileSystemsRequest',
          returnType: 'ListFileSystemsResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-file/v1alpha1',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'FileSystem',
          listItemTypeNamespace: '@scaleway-internal/sdk-file/v1alpha1',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listAttachments',
          protoName: 'ListAttachments',
          paramsType: 'ListAttachmentsRequest',
          returnType: 'ListAttachmentsResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-file/v1alpha1',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Attachment',
          listItemTypeNamespace: '@scaleway-internal/sdk-file/v1alpha1',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
