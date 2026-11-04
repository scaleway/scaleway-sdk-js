// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality, RequestOptions,} from '@scaleway/sdk-client'
import {RUN_SERVERLESS_CONTAINERS_TASK_TRANSIENT_STATUSES as RUN_SERVERLESS_CONTAINERS_TASK_TRANSIENT_STATUSES_DATAORCHESTRATOR,RUN_TRANSIENT_STATUSES as RUN_TRANSIENT_STATUSES_DATAORCHESTRATOR,} from './content.gen.js'
import {
  marshalCreateWorkflowDefinitionRequest,
  unmarshalListWorkflowDefinitionsResponse,
  unmarshalListWorkflowRunsResponse,
  marshalStartWorkflowDefinitionRequest,
  marshalUpdateWorkflowDefinitionRequest,
  marshalUpdateWorkflowVersionRequest,
  unmarshalWorkflowDefinition,
  unmarshalWorkflowRun,
  unmarshalWorkflowVersion,
} from './marshalling.gen.js'
import type {
  CreateWorkflowDefinitionRequest,
  DeleteWorkflowDefinitionRequest,
  DeleteWorkflowRunRequest,
  GetWorkflowDefinitionRequest,
  GetWorkflowRunRequest,
  ListWorkflowDefinitionsRequest,
  ListWorkflowDefinitionsResponse,
  ListWorkflowRunsRequest,
  ListWorkflowRunsResponse,
  PauseWorkflowRunRequest,
  ResumeWorkflowRunRequest,
  StartWorkflowDefinitionRequest,
  TerminateWorkflowRunRequest,
  UpdateWorkflowDefinitionRequest,
  UpdateWorkflowVersionRequest,
  WorkflowDefinition,
  WorkflowRun,
  WorkflowVersion,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Managed DATA ORCHESTRATOR API.

This API is a boilerplate for products.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      regions: [
        'fr-par',
      ],
    })
  
  /**
   * Create a new workflow definition in a specified Project.
   *
   * @param request - The request {@link CreateWorkflowDefinitionRequest}
   * @returns A Promise of WorkflowDefinition
   */
  createWorkflowDefinition = (request: Readonly<CreateWorkflowDefinitionRequest>, options?: RequestOptions) =>
    this.client.fetch<WorkflowDefinition>(
      {
        body: JSON.stringify(
          marshalCreateWorkflowDefinitionRequest(request, this.client.settings),
        ),
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'POST',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-definitions`,
        signal: options?.signal,
      },
      unmarshalWorkflowDefinition,
    )

  
  /**
   * Get a workflow definition by its unique identifier.
   *
   * @param request - The request {@link GetWorkflowDefinitionRequest}
   * @returns A Promise of WorkflowDefinition
   */
  getWorkflowDefinition = (request: Readonly<GetWorkflowDefinitionRequest>, options?: RequestOptions) =>
    this.client.fetch<WorkflowDefinition>(
      {
        method: 'GET',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-definitions/${validatePathParam('workflowDefinitionId', request.workflowDefinitionId)}`,
        signal: options?.signal,
      },
      unmarshalWorkflowDefinition,
    )

  
  protected pageOfListWorkflowDefinitions = (request: Readonly<ListWorkflowDefinitionsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListWorkflowDefinitionsResponse>(
      {
        method: 'GET',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-definitions`,
        urlParams: urlParams(
          ['created_after', request.createdAfter],
          ['created_before', request.createdBefore],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['statuses', request.statuses],
          ['trigger_types', request.triggerTypes],  
          ...Object.entries(resolveOneOf([
            {default: this.client.settings.defaultProjectId,param: 'project_id',
              value: request.projectId,
            },
            {default: this.client.settings.defaultOrganizationId,param: 'organization_id',
              value: request.organizationId,
            },
          ])),
        ),
        signal: options?.signal,
      },
      unmarshalListWorkflowDefinitionsResponse,
    )
  
  /**
   * List all your workflow definitions with filters.
   *
   * @param request - The request {@link ListWorkflowDefinitionsRequest}
   * @returns A Promise of ListWorkflowDefinitionsResponse
   */
  listWorkflowDefinitions = (request: Readonly<ListWorkflowDefinitionsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('workflowDefinitions', this.pageOfListWorkflowDefinitions, request, options)

  
  /**
   * Update an existing workflow definition by its unique identifier.
   *
   * @param request - The request {@link UpdateWorkflowDefinitionRequest}
   * @returns A Promise of WorkflowDefinition
   */
  updateWorkflowDefinition = (request: Readonly<UpdateWorkflowDefinitionRequest>, options?: RequestOptions) =>
    this.client.fetch<WorkflowDefinition>(
      {
        body: JSON.stringify(
          marshalUpdateWorkflowDefinitionRequest(request, this.client.settings),
        ),
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'PATCH',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-definitions/${validatePathParam('workflowDefinitionId', request.workflowDefinitionId)}`,
        signal: options?.signal,
      },
      unmarshalWorkflowDefinition,
    )

  
  /**
   * Delete an existing workflow definition by its unique identifier.
   *
   * @param request - The request {@link DeleteWorkflowDefinitionRequest}
   */
  deleteWorkflowDefinition = (request: Readonly<DeleteWorkflowDefinitionRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-definitions/${validatePathParam('workflowDefinitionId', request.workflowDefinitionId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Update an existing workflow version by its unique identifier.
   *
   * @param request - The request {@link UpdateWorkflowVersionRequest}
   * @returns A Promise of WorkflowVersion
   */
  updateWorkflowVersion = (request: Readonly<UpdateWorkflowVersionRequest>, options?: RequestOptions) =>
    this.client.fetch<WorkflowVersion>(
      {
        body: JSON.stringify(
          marshalUpdateWorkflowVersionRequest(request, this.client.settings),
        ),
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'PATCH',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-versions/${validatePathParam('workflowVersionId', request.workflowVersionId)}`,
        signal: options?.signal,
      },
      unmarshalWorkflowVersion,
    )

  
  /**
   * Run an existing workflow definition using its unique identifier and create a new workflow run.
   *
   * @param request - The request {@link StartWorkflowDefinitionRequest}
   * @returns A Promise of WorkflowRun
   */
  startWorkflowDefinition = (request: Readonly<StartWorkflowDefinitionRequest>, options?: RequestOptions) =>
    this.client.fetch<WorkflowRun>(
      {
        body: JSON.stringify(
          marshalStartWorkflowDefinitionRequest(request, this.client.settings),
        ),
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'POST',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-definitions/${validatePathParam('workflowDefinitionId', request.workflowDefinitionId)}/start`,
        signal: options?.signal,
      },
      unmarshalWorkflowRun,
    )

  
  /**
   * Get a workflow run by its unique identifier.
   *
   * @param request - The request {@link GetWorkflowRunRequest}
   * @returns A Promise of WorkflowRun
   */
  getWorkflowRun = (request: Readonly<GetWorkflowRunRequest>, options?: RequestOptions) =>
    this.client.fetch<WorkflowRun>(
      {
        method: 'GET',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-runs/${validatePathParam('workflowRunId', request.workflowRunId)}`,
        signal: options?.signal,
      },
      unmarshalWorkflowRun,
    )
  
  /**
   * Waits for {@link WorkflowRun} to be in a final state.
   *
   * @param request - The request {@link GetWorkflowRunRequest}
   * @param options - The waiting options
   * @returns A Promise of WorkflowRun
   */
  waitForWorkflowRun = (
    request: Readonly<GetWorkflowRunRequest>,
    options?: Readonly<WaitForOptions<WorkflowRun>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!RUN_TRANSIENT_STATUSES_DATAORCHESTRATOR.includes(res.status))),
      this.getWorkflowRun,
      request,
      options,
    )

  
  protected pageOfListWorkflowRuns = (request: Readonly<ListWorkflowRunsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListWorkflowRunsResponse>(
      {
        method: 'GET',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-runs`,
        urlParams: urlParams(
          ['created_after', request.createdAfter],
          ['created_before', request.createdBefore],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['statuses', request.statuses],
          ['trigger_types', request.triggerTypes],
          ['workflow_definition_id', request.workflowDefinitionId],
          ['workflow_definition_name', request.workflowDefinitionName],  
          ...Object.entries(resolveOneOf([
            {default: this.client.settings.defaultProjectId,param: 'project_id',
              value: request.projectId,
            },
            {default: this.client.settings.defaultOrganizationId,param: 'organization_id',
              value: request.organizationId,
            },
          ])),
        ),
        signal: options?.signal,
      },
      unmarshalListWorkflowRunsResponse,
    )
  
  /**
   * List all your workflow runs with filters.
   *
   * @param request - The request {@link ListWorkflowRunsRequest}
   * @returns A Promise of ListWorkflowRunsResponse
   */
  listWorkflowRuns = (request: Readonly<ListWorkflowRunsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('workflowRuns', this.pageOfListWorkflowRuns, request, options)

  
  /**
   * Terminate a workflow run using its unique identifier.
   *
   * @param request - The request {@link TerminateWorkflowRunRequest}
   * @returns A Promise of WorkflowRun
   */
  terminateWorkflowRun = (request: Readonly<TerminateWorkflowRunRequest>, options?: RequestOptions) =>
    this.client.fetch<WorkflowRun>(
      {
        body: '{}',
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'POST',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-runs/${validatePathParam('workflowRunId', request.workflowRunId)}/terminate`,
        signal: options?.signal,
      },
      unmarshalWorkflowRun,
    )

  
  /**
   * Pause a workflow run using its unique identifier.
   *
   * @param request - The request {@link PauseWorkflowRunRequest}
   * @returns A Promise of WorkflowRun
   */
  pauseWorkflowRun = (request: Readonly<PauseWorkflowRunRequest>, options?: RequestOptions) =>
    this.client.fetch<WorkflowRun>(
      {
        body: '{}',
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'POST',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-runs/${validatePathParam('workflowRunId', request.workflowRunId)}/pause`,
        signal: options?.signal,
      },
      unmarshalWorkflowRun,
    )

  
  /**
   * Resume a workflow run using its unique identifier.
   *
   * @param request - The request {@link ResumeWorkflowRunRequest}
   * @returns A Promise of WorkflowRun
   */
  resumeWorkflowRun = (request: Readonly<ResumeWorkflowRunRequest>, options?: RequestOptions) =>
    this.client.fetch<WorkflowRun>(
      {
        body: '{}',
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'POST',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-runs/${validatePathParam('workflowRunId', request.workflowRunId)}/resume`,
        signal: options?.signal,
      },
      unmarshalWorkflowRun,
    )

  
  /**
   * Delete an existing workflow run by its unique identifier.
   *
   * @param request - The request {@link DeleteWorkflowRunRequest}
   */
  deleteWorkflowRun = (request: Readonly<DeleteWorkflowRunRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/data-orchestrator/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/workflow-runs/${validatePathParam('workflowRunId', request.workflowRunId)}`,
        signal: options?.signal,
      },
    )

  
}

