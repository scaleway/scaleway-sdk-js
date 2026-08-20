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
          returnTypeNamespace: '@scaleway-internal/sdk-key-manager/v1alpha1',
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
          returnTypeNamespace: '@scaleway-internal/sdk-key-manager/v1alpha1',
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
          returnTypeNamespace: '@scaleway-internal/sdk-key-manager/v1alpha1',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Key',
          listItemTypeNamespace: '@scaleway-internal/sdk-key-manager/v1alpha1',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listAlgorithms',
          protoName: 'ListAlgorithms',
          paramsType: 'ListAlgorithmsRequest',
          returnType: 'ListAlgorithmsResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-key-manager/v1alpha1',
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
