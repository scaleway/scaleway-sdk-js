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
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Budget',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getBudget',
          protoName: 'GetBudget',
          paramsType: 'GetBudgetRequest',
          returnType: 'Budget',
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
