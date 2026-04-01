// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'billing',
  version: 'v2beta1',
  folderName: 'billingv2beta1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'listConsumptions',
          protoName: 'ListConsumptions',
          paramsType: 'ListConsumptionsRequest',
          returnType: 'ListConsumptionsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'ListConsumptionsResponseConsumption',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listTaxes',
          protoName: 'ListTaxes',
          paramsType: 'ListTaxesRequest',
          returnType: 'ListTaxesResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'ListTaxesResponseTax',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listInvoices',
          protoName: 'ListInvoices',
          paramsType: 'ListInvoicesRequest',
          returnType: 'ListInvoicesResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Invoice',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getInvoice',
          protoName: 'GetInvoice',
          paramsType: 'GetInvoiceRequest',
          returnType: 'Invoice',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listDiscounts',
          protoName: 'ListDiscounts',
          paramsType: 'ListDiscountsRequest',
          returnType: 'ListDiscountsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Discount',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
