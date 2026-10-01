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
import {JOB_RUN_TRANSIENT_STATUSES as JOB_RUN_TRANSIENT_STATUSES_JOBS,} from './content.gen.js'
import {
  marshalCreateJobDefinitionRequest,
  marshalCreateSecretsRequest,
  unmarshalCreateSecretsResponse,
  marshalCreateTriggerRequest,
  unmarshalJobDefinition,
  unmarshalJobLimits,
  unmarshalJobRun,
  unmarshalListJobDefinitionsResponse,
  unmarshalListJobResourcesResponse,
  unmarshalListJobRunsResponse,
  unmarshalListSecretsResponse,
  unmarshalListTriggersResponse,
  unmarshalSecret,
  marshalStartJobDefinitionRequest,
  unmarshalStartJobDefinitionResponse,
  unmarshalTrigger,
  marshalUpdateJobDefinitionRequest,
  marshalUpdateSecretRequest,
  marshalUpdateTriggerRequest,
} from './marshalling.gen.js'
import type {
  CreateJobDefinitionRequest,
  CreateSecretsRequest,
  CreateSecretsResponse,
  CreateTriggerRequest,
  DeleteJobDefinitionRequest,
  DeleteSecretRequest,
  DeleteTriggerRequest,
  GetJobDefinitionRequest,
  GetJobLimitsRequest,
  GetJobRunRequest,
  GetSecretRequest,
  GetTriggerRequest,
  JobDefinition,
  JobLimits,
  JobRun,
  ListJobDefinitionsRequest,
  ListJobDefinitionsResponse,
  ListJobResourcesRequest,
  ListJobResourcesResponse,
  ListJobRunsRequest,
  ListJobRunsResponse,
  ListSecretsRequest,
  ListSecretsResponse,
  ListTriggersRequest,
  ListTriggersResponse,
  Secret,
  StartJobDefinitionRequest,
  StartJobDefinitionResponse,
  StopJobRunRequest,
  Trigger,
  UpdateJobDefinitionRequest,
  UpdateSecretRequest,
  UpdateTriggerRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Serverless Jobs API.

This API allows you to manage your Serverless Jobs.
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
        'nl-ams',
        'pl-waw',
      ],
    })
  
  /**
   * Create a new job definition in a specified Project.
   *
   * @param request - The request {@link CreateJobDefinitionRequest}
   * @returns A Promise of JobDefinition
   */
  createJobDefinition = (request: Readonly<CreateJobDefinitionRequest>, options?: RequestOptions) =>
    this.client.fetch<JobDefinition>(
      {
        body: JSON.stringify(
          marshalCreateJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions`,
        signal: options?.signal,
      },
      unmarshalJobDefinition,
    )

  
  /**
   * Get a job definition by its unique identifier.
   *
   * @param request - The request {@link GetJobDefinitionRequest}
   * @returns A Promise of JobDefinition
   */
  getJobDefinition = (request: Readonly<GetJobDefinitionRequest>, options?: RequestOptions) =>
    this.client.fetch<JobDefinition>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
        signal: options?.signal,
      },
      unmarshalJobDefinition,
    )

  
  protected pageOfListJobDefinitions = (request: Readonly<ListJobDefinitionsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListJobDefinitionsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListJobDefinitionsResponse,
    )
  
  /**
   * List all your job definitions with filters.
   *
   * @param request - The request {@link ListJobDefinitionsRequest}
   * @returns A Promise of ListJobDefinitionsResponse
   */
  listJobDefinitions = (request: Readonly<ListJobDefinitionsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('jobDefinitions', this.pageOfListJobDefinitions, request, options)

  
  /**
   * Update an existing job definition associated with the specified unique identifier.
   *
   * @param request - The request {@link UpdateJobDefinitionRequest}
   * @returns A Promise of JobDefinition
   */
  updateJobDefinition = (request: Readonly<UpdateJobDefinitionRequest>, options?: RequestOptions) =>
    this.client.fetch<JobDefinition>(
      {
        body: JSON.stringify(
          marshalUpdateJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
        signal: options?.signal,
      },
      unmarshalJobDefinition,
    )

  
  /**
   * Delete an existing job definition by its unique identifier.
   *
   * @param request - The request {@link DeleteJobDefinitionRequest}
   */
  deleteJobDefinition = (request: Readonly<DeleteJobDefinitionRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Run an existing job definition using its unique identifier and create a new job run.
   *
   * @param request - The request {@link StartJobDefinitionRequest}
   * @returns A Promise of StartJobDefinitionResponse
   */
  startJobDefinition = (request: Readonly<StartJobDefinitionRequest>, options?: RequestOptions) =>
    this.client.fetch<StartJobDefinitionResponse>(
      {
        body: JSON.stringify(
          marshalStartJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}/start`,
        signal: options?.signal,
      },
      unmarshalStartJobDefinitionResponse,
    )

  
  /**
   * Get a job run by its unique identifier.
   *
   * @param request - The request {@link GetJobRunRequest}
   * @returns A Promise of JobRun
   */
  getJobRun = (request: Readonly<GetJobRunRequest>, options?: RequestOptions) =>
    this.client.fetch<JobRun>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs/${validatePathParam('jobRunId', request.jobRunId)}`,
        signal: options?.signal,
      },
      unmarshalJobRun,
    )

  
  protected pageOfListJobRuns = (request: Readonly<ListJobRunsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListJobRunsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs`,
        urlParams: urlParams(
          ['job_definition_id', request.jobDefinitionId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['reasons', request.reasons],
          ['state', request.state],
          ['states', request.states],
        ),
        signal: options?.signal,
      },
      unmarshalListJobRunsResponse,
    )
  
  /**
   * List all job runs with filters.
   *
   * @param request - The request {@link ListJobRunsRequest}
   * @returns A Promise of ListJobRunsResponse
   */
  listJobRuns = (request: Readonly<ListJobRunsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('jobRuns', this.pageOfListJobRuns, request, options)

  
  /**
   * Stop a job run using its unique identifier.
   *
   * @param request - The request {@link StopJobRunRequest}
   * @returns A Promise of JobRun
   */
  stopJobRun = (request: Readonly<StopJobRunRequest>, options?: RequestOptions) =>
    this.client.fetch<JobRun>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs/${validatePathParam('jobRunId', request.jobRunId)}/stop`,
        signal: options?.signal,
      },
      unmarshalJobRun,
    )

  
  /**
   * Create a secret reference within a job definition.
   *
   * @param request - The request {@link CreateSecretsRequest}
   * @returns A Promise of CreateSecretsResponse
   */
  createSecrets = (request: Readonly<CreateSecretsRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateSecretsResponse>(
      {
        body: JSON.stringify(
          marshalCreateSecretsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets`,
        signal: options?.signal,
      },
      unmarshalCreateSecretsResponse,
    )

  
  /**
   * Get a secret references within a job definition.
   *
   * @param request - The request {@link GetSecretRequest}
   * @returns A Promise of Secret
   */
  getSecret = (request: Readonly<GetSecretRequest>, options?: RequestOptions) =>
    this.client.fetch<Secret>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}`,
        signal: options?.signal,
      },
      unmarshalSecret,
    )

  
  /**
   * List secrets references within a job definition.
   *
   * @param request - The request {@link ListSecretsRequest}
   * @returns A Promise of ListSecretsResponse
   */
  listSecrets = (request: Readonly<ListSecretsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListSecretsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets`,
        urlParams: urlParams(
          ['job_definition_id', request.jobDefinitionId],
        ),
        signal: options?.signal,
      },
      unmarshalListSecretsResponse,
    )

  
  /**
   * Update a secret reference within a job definition.
   *
   * @param request - The request {@link UpdateSecretRequest}
   * @returns A Promise of Secret
   */
  updateSecret = (request: Readonly<UpdateSecretRequest>, options?: RequestOptions) =>
    this.client.fetch<Secret>(
      {
        body: JSON.stringify(
          marshalUpdateSecretRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}`,
        signal: options?.signal,
      },
      unmarshalSecret,
    )

  
  /**
   * Delete a secret reference within a job definition.
   *
   * @param request - The request {@link DeleteSecretRequest}
   */
  deleteSecret = (request: Readonly<DeleteSecretRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Create a trigger.
   *
   * @param request - The request {@link CreateTriggerRequest}
   * @returns A Promise of Trigger
   */
  createTrigger = (request: Readonly<CreateTriggerRequest>, options?: RequestOptions) =>
    this.client.fetch<Trigger>(
      {
        body: JSON.stringify(
          marshalCreateTriggerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers`,
        signal: options?.signal,
      },
      unmarshalTrigger,
    )

  
  /**
   * Get a trigger.
   *
   * @param request - The request {@link GetTriggerRequest}
   * @returns A Promise of Trigger
   */
  getTrigger = (request: Readonly<GetTriggerRequest>, options?: RequestOptions) =>
    this.client.fetch<Trigger>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
        signal: options?.signal,
      },
      unmarshalTrigger,
    )

  
  protected pageOfListTriggers = (request: Readonly<ListTriggersRequest>, options?: RequestOptions) =>
    this.client.fetch<ListTriggersResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers`,
        urlParams: urlParams(
          ['job_definition_id', request.jobDefinitionId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListTriggersResponse,
    )
  
  /**
   * List triggers of a job definition.
   *
   * @param request - The request {@link ListTriggersRequest}
   * @returns A Promise of ListTriggersResponse
   */
  listTriggers = (request: Readonly<ListTriggersRequest>, options?: RequestOptions) =>
    enrichForPagination('triggers', this.pageOfListTriggers, request, options)

  
  /**
   * Update a trigger.
   *
   * @param request - The request {@link UpdateTriggerRequest}
   * @returns A Promise of Trigger
   */
  updateTrigger = (request: Readonly<UpdateTriggerRequest>, options?: RequestOptions) =>
    this.client.fetch<Trigger>(
      {
        body: JSON.stringify(
          marshalUpdateTriggerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
        signal: options?.signal,
      },
      unmarshalTrigger,
    )

  
  /**
   * Delete a trigger.
   *
   * @param request - The request {@link DeleteTriggerRequest}
   */
  deleteTrigger = (request: Readonly<DeleteTriggerRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * List job resources for the console.
   *
   * @param request - The request {@link ListJobResourcesRequest}
   * @returns A Promise of ListJobResourcesResponse
   */
  listJobResources = (request: Readonly<ListJobResourcesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListJobResourcesResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-resources`,
        signal: options?.signal,
      },
      unmarshalListJobResourcesResponse,
    )

  
  /**
   * Get job limits for the console.
   *
   * @param request - The request {@link GetJobLimitsRequest}
   * @returns A Promise of JobLimits
   */
  getJobLimits = (request: Readonly<GetJobLimitsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<JobLimits>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-limits`,
        signal: options?.signal,
      },
      unmarshalJobLimits,
    )

  
}

