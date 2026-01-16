// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality } from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  toApiLocality,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import {
  marshalCreateJobDefinitionRequest,
  marshalCreateSecretsRequest,
  marshalStartJobDefinitionRequest,
  marshalUpdateJobDefinitionRequest,
  marshalUpdateSecretRequest,
  unmarshalCreateSecretsResponse,
  unmarshalJobDefinition,
  unmarshalJobLimits,
  unmarshalJobRun,
  unmarshalListJobDefinitionsResponse,
  unmarshalListJobResourcesResponse,
  unmarshalListJobRunsResponse,
  unmarshalListSecretsResponse,
  unmarshalSecret,
  unmarshalStartJobDefinitionResponse,
} from './marshalling.gen.js'
import type {
  CreateJobDefinitionRequest,
  CreateSecretsRequest,
  CreateSecretsResponse,
  DeleteJobDefinitionRequest,
  DeleteSecretRequest,
  GetJobDefinitionRequest,
  GetJobLimitsRequest,
  GetJobRunRequest,
  GetSecretRequest,
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
  Secret,
  StartJobDefinitionRequest,
  StartJobDefinitionResponse,
  StopJobRunRequest,
  UpdateJobDefinitionRequest,
  UpdateSecretRequest,
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
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  /**
   * Create a new job definition in a specified Project.
   *
   * @param request - The request {@link CreateJobDefinitionRequest}
   * @returns A Promise of JobDefinition
   */
  createJobDefinition = (request: Readonly<CreateJobDefinitionRequest>) =>
    this.client.fetch<JobDefinition>(
      {
        body: JSON.stringify(
          marshalCreateJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions`,
      },
      unmarshalJobDefinition,
    )

  /**
   * Get a job definition by its unique identifier.
   *
   * @param request - The request {@link GetJobDefinitionRequest}
   * @returns A Promise of JobDefinition
   */
  getJobDefinition = (request: Readonly<GetJobDefinitionRequest>) =>
    this.client.fetch<JobDefinition>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
      },
      unmarshalJobDefinition,
    )

  protected pageOfListJobDefinitions = (
    request: Readonly<ListJobDefinitionsRequest> = {},
  ) =>
    this.client.fetch<ListJobDefinitionsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListJobDefinitionsResponse,
    )

  /**
   * List all your job definitions with filters.
   *
   * @param request - The request {@link ListJobDefinitionsRequest}
   * @returns A Promise of ListJobDefinitionsResponse
   */
  listJobDefinitions = (request: Readonly<ListJobDefinitionsRequest> = {}) =>
    enrichForPagination(
      'jobDefinitions',
      this.pageOfListJobDefinitions,
      request,
    )

  /**
   * Update an existing job definition associated with the specified unique identifier.
   *
   * @param request - The request {@link UpdateJobDefinitionRequest}
   * @returns A Promise of JobDefinition
   */
  updateJobDefinition = (request: Readonly<UpdateJobDefinitionRequest>) =>
    this.client.fetch<JobDefinition>(
      {
        body: JSON.stringify(
          marshalUpdateJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
      },
      unmarshalJobDefinition,
    )

  /**
   * Delete an existing job definition by its unique identifier.
   *
   * @param request - The request {@link DeleteJobDefinitionRequest}
   */
  deleteJobDefinition = (request: Readonly<DeleteJobDefinitionRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
    })

  /**
   * Run an existing job definition using its unique identifier and create a new job run.
   *
   * @param request - The request {@link StartJobDefinitionRequest}
   * @returns A Promise of StartJobDefinitionResponse
   */
  startJobDefinition = (request: Readonly<StartJobDefinitionRequest>) =>
    this.client.fetch<StartJobDefinitionResponse>(
      {
        body: JSON.stringify(
          marshalStartJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}/start`,
      },
      unmarshalStartJobDefinitionResponse,
    )

  /**
   * Get a job run by its unique identifier.
   *
   * @param request - The request {@link GetJobRunRequest}
   * @returns A Promise of JobRun
   */
  getJobRun = (request: Readonly<GetJobRunRequest>) =>
    this.client.fetch<JobRun>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs/${validatePathParam('jobRunId', request.jobRunId)}`,
      },
      unmarshalJobRun,
    )

  protected pageOfListJobRuns = (request: Readonly<ListJobRunsRequest> = {}) =>
    this.client.fetch<ListJobRunsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs`,
        urlParams: urlParams(
          ['job_definition_id', request.jobDefinitionId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['reasons', request.reasons],
          ['state', request.state],
          ['states', request.states],
        ),
      },
      unmarshalListJobRunsResponse,
    )

  /**
   * List all job runs with filters.
   *
   * @param request - The request {@link ListJobRunsRequest}
   * @returns A Promise of ListJobRunsResponse
   */
  listJobRuns = (request: Readonly<ListJobRunsRequest> = {}) =>
    enrichForPagination('jobRuns', this.pageOfListJobRuns, request)

  /**
   * Stop a job run using its unique identifier.
   *
   * @param request - The request {@link StopJobRunRequest}
   * @returns A Promise of JobRun
   */
  stopJobRun = (request: Readonly<StopJobRunRequest>) =>
    this.client.fetch<JobRun>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs/${validatePathParam('jobRunId', request.jobRunId)}/stop`,
      },
      unmarshalJobRun,
    )

  /**
   * Create a secret reference within a job definition.
   *
   * @param request - The request {@link CreateSecretsRequest}
   * @returns A Promise of CreateSecretsResponse
   */
  createSecrets = (request: Readonly<CreateSecretsRequest>) =>
    this.client.fetch<CreateSecretsResponse>(
      {
        body: JSON.stringify(
          marshalCreateSecretsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets`,
      },
      unmarshalCreateSecretsResponse,
    )

  /**
   * Get a secret references within a job definition.
   *
   * @param request - The request {@link GetSecretRequest}
   * @returns A Promise of Secret
   */
  getSecret = (request: Readonly<GetSecretRequest>) =>
    this.client.fetch<Secret>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}`,
      },
      unmarshalSecret,
    )

  /**
   * List secrets references within a job definition.
   *
   * @param request - The request {@link ListSecretsRequest}
   * @returns A Promise of ListSecretsResponse
   */
  listSecrets = (request: Readonly<ListSecretsRequest>) =>
    this.client.fetch<ListSecretsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets`,
        urlParams: urlParams(['job_definition_id', request.jobDefinitionId]),
      },
      unmarshalListSecretsResponse,
    )

  /**
   * Update a secret reference within a job definition.
   *
   * @param request - The request {@link UpdateSecretRequest}
   * @returns A Promise of Secret
   */
  updateSecret = (request: Readonly<UpdateSecretRequest>) =>
    this.client.fetch<Secret>(
      {
        body: JSON.stringify(
          marshalUpdateSecretRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}`,
      },
      unmarshalSecret,
    )

  /**
   * Delete a secret reference within a job definition.
   *
   * @param request - The request {@link DeleteSecretRequest}
   */
  deleteSecret = (request: Readonly<DeleteSecretRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}`,
    })

  /**
   * List job resources for the console.
   *
   * @param request - The request {@link ListJobResourcesRequest}
   * @returns A Promise of ListJobResourcesResponse
   */
  listJobResources = (request: Readonly<ListJobResourcesRequest> = {}) =>
    this.client.fetch<ListJobResourcesResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-resources`,
      },
      unmarshalListJobResourcesResponse,
    )

  /**
   * Get job limits for the console.
   *
   * @param request - The request {@link GetJobLimitsRequest}
   * @returns A Promise of JobLimits
   */
  getJobLimits = (request: Readonly<GetJobLimitsRequest> = {}) =>
    this.client.fetch<JobLimits>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-limits`,
      },
      unmarshalJobLimits,
    )
}
