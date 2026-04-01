// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'baremetal',
  version: 'v3',
  folderName: 'baremetalv3',
  services: [
    {
      apiClass: 'PrivateNetworkAPI',
      methods: [
        {
          methodName: 'listServerPrivateNetworks',
          protoName: 'ListServerPrivateNetworks',
          paramsType: 'PrivateNetworkApiListServerPrivateNetworksRequest',
          returnType: 'ListServerPrivateNetworksResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'ServerPrivateNetwork',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
