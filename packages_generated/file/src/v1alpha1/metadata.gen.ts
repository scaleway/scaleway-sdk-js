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
          methodName: 'getFileSystem',
          protoName: 'GetFileSystem',
          paramsType: 'GetFileSystemRequest',
          returnType: 'FileSystem',
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
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'FileSystem',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listAttachments',
          protoName: 'ListAttachments',
          paramsType: 'ListAttachmentsRequest',
          returnType: 'ListAttachmentsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Attachment',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
