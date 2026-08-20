// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'serverless_sqldb',
  version: 'v1alpha1',
  folderName: 'serverlessSqldbv1alpha1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'getDatabase',
          protoName: 'GetDatabase',
          paramsType: 'GetDatabaseRequest',
          returnType: 'Database',
          returnTypeNamespace: '@scaleway-internal/sdk-serverless-sqldb/v1alpha1',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
          hasWaiter: true,
        },
        {
          methodName: 'listDatabases',
          protoName: 'ListDatabases',
          paramsType: 'ListDatabasesRequest',
          returnType: 'ListDatabasesResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-serverless-sqldb/v1alpha1',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Database',
          listItemTypeNamespace: '@scaleway-internal/sdk-serverless-sqldb/v1alpha1',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getDatabaseBackup',
          protoName: 'GetDatabaseBackup',
          paramsType: 'GetDatabaseBackupRequest',
          returnType: 'DatabaseBackup',
          returnTypeNamespace: '@scaleway-internal/sdk-serverless-sqldb/v1alpha1',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listDatabaseBackups',
          protoName: 'ListDatabaseBackups',
          paramsType: 'ListDatabaseBackupsRequest',
          returnType: 'ListDatabaseBackupsResponse',
          returnTypeNamespace: '@scaleway-internal/sdk-serverless-sqldb/v1alpha1',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'DatabaseBackup',
          listItemTypeNamespace: '@scaleway-internal/sdk-serverless-sqldb/v1alpha1',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
