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
  marshalCreateJobDefinitionSecretsRequest,
  unmarshalCreateJobDefinitionSecretsResponse,
  unmarshalJobDefinition,
  unmarshalJobRun,
  unmarshalJobsLimits,
  unmarshalListJobDefinitionSecretsResponse,
  unmarshalListJobDefinitionsResponse,
  unmarshalListJobRunsResponse,
  unmarshalListJobsResourcesResponse,
  unmarshalSecret,
  marshalStartJobDefinitionRequest,
  unmarshalStartJobDefinitionResponse,
  marshalUpdateJobDefinitionRequest,
  marshalUpdateJobDefinitionSecretRequest,
} from './marshalling.gen.js'
import type {
  CreateJobDefinitionRequest,
  CreateJobDefinitionSecretsRequest,
  CreateJobDefinitionSecretsResponse,
  DeleteJobDefinitionRequest,
  DeleteJobDefinitionSecretRequest,
  GetJobDefinitionRequest,
  GetJobDefinitionSecretRequest,
  GetJobRunRequest,
  GetJobsLimitsRequest,
  JobDefinition,
  JobRun,
  JobsLimits,
  ListJobDefinitionSecretsRequest,
  ListJobDefinitionSecretsResponse,
  ListJobDefinitionsRequest,
  ListJobDefinitionsResponse,
  ListJobRunsRequest,
  ListJobRunsResponse,
  ListJobsResourcesRequest,
  ListJobsResourcesResponse,
  Secret,
  StartJobDefinitionRequest,
  StartJobDefinitionResponse,
  StopJobRunRequest,
  UpdateJobDefinitionRequest,
  UpdateJobDefinitionSecretRequest,
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
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions`,
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
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
        signal: options?.signal,
      },
      unmarshalJobDefinition,
    )

  
  protected pageOfListJobDefinitions = (request: Readonly<ListJobDefinitionsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListJobDefinitionsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions`,
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
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
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
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Run an existing job definition by its unique identifier. This will create a new job run.
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
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}/start`,
        signal: options?.signal,
      },
      unmarshalStartJobDefinitionResponse,
    )

  
  /**
   * Create a secret reference within a job definition.
   *
   * @param request - The request {@link CreateJobDefinitionSecretsRequest}
   * @returns A Promise of CreateJobDefinitionSecretsResponse
   */
  createJobDefinitionSecrets = (request: Readonly<CreateJobDefinitionSecretsRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateJobDefinitionSecretsResponse>(
      {
        body: JSON.stringify(
          marshalCreateJobDefinitionSecretsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}/secrets`,
        signal: options?.signal,
      },
      unmarshalCreateJobDefinitionSecretsResponse,
    )

  
  /**
   * Get a secret references within a job definition.
   *
   * @param request - The request {@link GetJobDefinitionSecretRequest}
   * @returns A Promise of Secret
   */
  getJobDefinitionSecret = (request: Readonly<GetJobDefinitionSecretRequest>, options?: RequestOptions) =>
    this.client.fetch<Secret>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}/secrets/${validatePathParam('secretId', request.secretId)}`,
        signal: options?.signal,
      },
      unmarshalSecret,
    )

  
  /**
   * List secrets references within a job definition.
   *
   * @param request - The request {@link ListJobDefinitionSecretsRequest}
   * @returns A Promise of ListJobDefinitionSecretsResponse
   */
  listJobDefinitionSecrets = (request: Readonly<ListJobDefinitionSecretsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListJobDefinitionSecretsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}/secrets`,
        signal: options?.signal,
      },
      unmarshalListJobDefinitionSecretsResponse,
    )

  
  /**
   * Update a secret reference within a job definition.
   *
   * @param request - The request {@link UpdateJobDefinitionSecretRequest}
   * @returns A Promise of Secret
   */
  updateJobDefinitionSecret = (request: Readonly<UpdateJobDefinitionSecretRequest>, options?: RequestOptions) =>
    this.client.fetch<Secret>(
      {
        body: JSON.stringify(
          marshalUpdateJobDefinitionSecretRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}/secrets/${validatePathParam('secretId', request.secretId)}`,
        signal: options?.signal,
      },
      unmarshalSecret,
    )

  
  /**
   * Delete a secret reference within a job definition.
   *
   * @param request - The request {@link DeleteJobDefinitionSecretRequest}
   */
  deleteJobDefinitionSecret = (request: Readonly<DeleteJobDefinitionSecretRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}/secrets/${validatePathParam('secretId', request.secretId)}`,
        signal: options?.signal,
      },
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
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs/${validatePathParam('jobRunId', request.jobRunId)}`,
        signal: options?.signal,
      },
      unmarshalJobRun,
    )

  
  /**
   * Stop a job run by its unique identifier.
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
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs/${validatePathParam('jobRunId', request.jobRunId)}/stop`,
        signal: options?.signal,
      },
      unmarshalJobRun,
    )

  
  protected pageOfListJobRuns = (request: Readonly<ListJobRunsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListJobRunsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs`,
        urlParams: urlParams(
          ['job_definition_id', request.jobDefinitionId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
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
   * List jobs resources for the console.
   *
   * @param request - The request {@link ListJobsResourcesRequest}
   * @returns A Promise of ListJobsResourcesResponse
   */
  listJobsResources = (request: Readonly<ListJobsResourcesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListJobsResourcesResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/jobs-resources`,
        signal: options?.signal,
      },
      unmarshalListJobsResourcesResponse,
    )

  
  /**
   * Get jobs limits for the console.
   *
   * @param request - The request {@link GetJobsLimitsRequest}
   * @returns A Promise of JobsLimits
   */
  getJobsLimits = (request: Readonly<GetJobsLimitsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<JobsLimits>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/jobs-limits`,
        signal: options?.signal,
      },
      unmarshalJobsLimits,
    )

  
}

