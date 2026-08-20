// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'billing',
  version: 'v2',
  folderName: 'billingv2',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'listBudgets',
          protoName: 'ListBudgets',
          paramsType: 'ListBudgetsRequest',
          returnType: 'ListBudgetsResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-billing/v2',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Budget',
          listItemTypeNamespace: '@scaleway-internal/sdk-billing/v2',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getBudget',
          protoName: 'GetBudget',
          paramsType: 'GetBudgetRequest',
          returnType: 'Budget',
          returnTypeNamespace: '@scaleway-internal/sdk-billing/v2',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
      ],
    },
    {
      apiClass: 'ElectronicBillingAPI',
      methods: [
        {
          methodName: 'listElectronicAddresses',
          protoName: 'ListElectronicAddresses',
          paramsType: 'ElectronicBillingApiListElectronicAddressesRequest',
          returnType: 'ListElectronicAddressesResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-billing/v2',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'ElectronicAddress',
          listItemTypeNamespace: '@scaleway-internal/sdk-billing/v2',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getElectronicAddress',
          protoName: 'GetElectronicAddress',
          paramsType: 'ElectronicBillingApiGetElectronicAddressRequest',
          returnType: 'ElectronicAddress',
          returnTypeNamespace: '@scaleway-internal/sdk-billing/v2',
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
