// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'key_manager',
  version: 'v1alpha1',
  folderName: 'keyManagerv1alpha1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'getKey',
          protoName: 'GetKey',
          paramsType: 'GetKeyRequest',
          returnType: 'Key',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getPublicKey',
          protoName: 'GetPublicKey',
          paramsType: 'GetPublicKeyRequest',
          returnType: 'PublicKey',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listKeys',
          protoName: 'ListKeys',
          paramsType: 'ListKeysRequest',
          returnType: 'ListKeysResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Key',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listAlgorithms',
          protoName: 'ListAlgorithms',
          paramsType: 'ListAlgorithmsRequest',
          returnType: 'ListAlgorithmsResponse',
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
