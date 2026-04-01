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
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Database',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getDatabaseBackup',
          protoName: 'GetDatabaseBackup',
          paramsType: 'GetDatabaseBackupRequest',
          returnType: 'DatabaseBackup',
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
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'DatabaseBackup',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
