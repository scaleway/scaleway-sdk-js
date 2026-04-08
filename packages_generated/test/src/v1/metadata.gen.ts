// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'test',
  version: 'v1',
  folderName: 'testv1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'listHumans',
          protoName: 'ListHumans',
          paramsType: 'ListHumansRequest',
          returnType: 'ListHumansResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Human',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getHuman',
          protoName: 'GetHuman',
          paramsType: 'GetHumanRequest',
          returnType: 'Human',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
          hasWaiter: true,
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
