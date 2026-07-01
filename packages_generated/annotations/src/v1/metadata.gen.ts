// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'annotations',
  version: 'v1',
  folderName: 'annotationsv1',
  services: [
    {
      apiClass: 'API',
      methods: [
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
          methodName: 'listValues',
          protoName: 'ListValues',
          paramsType: 'ListValuesRequest',
          returnType: 'ListValuesResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Value',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getValue',
          protoName: 'GetValue',
          paramsType: 'GetValueRequest',
          returnType: 'Value',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listAllKeysAndValues',
          protoName: 'ListAllKeysAndValues',
          paramsType: 'ListAllKeysAndValuesRequest',
          returnType: 'ListAllKeysAndValuesResponse',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listBindings',
          protoName: 'ListBindings',
          paramsType: 'ListBindingsRequest',
          returnType: 'ListBindingsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Binding',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
