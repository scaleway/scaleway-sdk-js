// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'product_catalog',
  version: 'v2alpha1',
  folderName: 'productCatalogv2alpha1',
  services: [
    {
      apiClass: 'PublicCatalogAPI',
      methods: [
        {
          methodName: 'listPublicCatalogProducts',
          protoName: 'ListPublicCatalogProducts',
          paramsType: 'PublicCatalogApiListPublicCatalogProductsRequest',
          returnType: 'ListPublicCatalogProductsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'PublicCatalogProduct',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
