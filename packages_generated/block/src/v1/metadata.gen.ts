// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'block',
  version: 'v1',
  folderName: 'blockv1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'listVolumeTypes',
          protoName: 'ListVolumeTypes',
          paramsType: 'ListVolumeTypesRequest',
          returnType: 'ListVolumeTypesResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'VolumeType',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listVolumes',
          protoName: 'ListVolumes',
          paramsType: 'ListVolumesRequest',
          returnType: 'ListVolumesResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Volume',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getVolume',
          protoName: 'GetVolume',
          paramsType: 'GetVolumeRequest',
          returnType: 'Volume',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listSnapshots',
          protoName: 'ListSnapshots',
          paramsType: 'ListSnapshotsRequest',
          returnType: 'ListSnapshotsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Snapshot',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getSnapshot',
          protoName: 'GetSnapshot',
          paramsType: 'GetSnapshotRequest',
          returnType: 'Snapshot',
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
