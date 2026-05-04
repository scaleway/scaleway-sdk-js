export const queriesMetadata = {
  namespace: 'instance',
  version: 'v1',
  folderName: 'instancev1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'getServerUserData',
          protoName: 'GetServerUserData',
          paramsType: 'GetServerUserDataRequest',
          returnType: 'string',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description:
            'Get the content of a user data on a server for the given key.',
        },
      ],
    },
  ],
}
