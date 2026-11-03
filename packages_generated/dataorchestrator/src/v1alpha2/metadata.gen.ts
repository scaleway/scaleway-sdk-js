// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'dataorchestrator',
  version: 'v1alpha2',
  folderName: 'dataorchestratorv1alpha2',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'getWorkflowDefinition',
          protoName: 'GetWorkflowDefinition',
          paramsType: 'GetWorkflowDefinitionRequest',
          returnType: 'WorkflowDefinition',
          returnTypeNamespace: '@scaleway/sdk-dataorchestrator/v1alpha2',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listWorkflowDefinitions',
          protoName: 'ListWorkflowDefinitions',
          paramsType: 'ListWorkflowDefinitionsRequest',
          returnType: 'ListWorkflowDefinitionsResponse',
          returnTypeNamespace: '@scaleway/sdk-dataorchestrator/v1alpha2',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'WorkflowDefinition',
          listItemTypeNamespace: '@scaleway/sdk-dataorchestrator/v1alpha2',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getWorkflowRun',
          protoName: 'GetWorkflowRun',
          paramsType: 'GetWorkflowRunRequest',
          returnType: 'WorkflowRun',
          returnTypeNamespace: '@scaleway/sdk-dataorchestrator/v1alpha2',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
          hasWaiter: true,
        },
        {
          methodName: 'listWorkflowRuns',
          protoName: 'ListWorkflowRuns',
          paramsType: 'ListWorkflowRunsRequest',
          returnType: 'ListWorkflowRunsResponse',
          returnTypeNamespace: '@scaleway/sdk-dataorchestrator/v1alpha2',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'WorkflowRun',
          listItemTypeNamespace: '@scaleway/sdk-dataorchestrator/v1alpha2',
          isPrivate: false,
          description: '"',
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
