export const queriesMetadata = {
  namespace: 'k8s',
  version: 'v1',
  folderName: 'k8Sv1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'getClusterKubeConfig',
          protoName: 'GetClusterKubeConfig',
          paramsType: 'GetClusterKubeConfigRequest',
          returnType: 'Blob',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: 'Get configuration of a kube cluster.',
        },
      ],
    },
  ],
}
