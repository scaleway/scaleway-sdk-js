// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'environmental_footprint',
  version: 'v1alpha1',
  folderName: 'environmentalFootprintv1alpha1',
  services: [
    {
      apiClass: 'UserAPI',
      methods: [
        {
          methodName: 'getImpactReportAvailability',
          protoName: 'GetImpactReportAvailability',
          paramsType: 'UserApiGetImpactReportAvailabilityRequest',
          returnType: 'ImpactReportAvailability',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getImpactData',
          protoName: 'GetImpactData',
          paramsType: 'UserApiGetImpactDataRequest',
          returnType: 'ImpactDataResponse',
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
