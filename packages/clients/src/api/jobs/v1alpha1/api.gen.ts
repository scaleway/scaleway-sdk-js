// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import type { Region, ServiceInfo } from '../../../bridge'
import {
  marshalCreateJobDefinitionRequest,
  marshalUpdateJobDefinitionRequest,
  unmarshalJobDefinition,
  unmarshalJobRun,
  unmarshalListJobDefinitionsResponse,
  unmarshalListJobRunsResponse,
} from './marshalling.gen'
import type {
  CreateJobDefinitionRequest,
  DeleteJobDefinitionRequest,
  GetJobDefinitionRequest,
  GetJobRunRequest,
  GetServiceInfoRequest,
  JobDefinition,
  JobRun,
  ListJobDefinitionsRequest,
  ListJobDefinitionsResponse,
  ListJobRunsRequest,
  ListJobRunsResponse,
  StartJobDefinitionRequest,
  StopJobRunRequest,
  UpdateJobDefinitionRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** Serverless Jobs API. */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  getServiceInfo = (request: Readonly<GetServiceInfoRequest> = {}) =>
    this.client.fetch<ServiceInfo>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}`,
      },
      unmarshalServiceInfo,
    )

  createJobDefinition = (request: Readonly<CreateJobDefinitionRequest>) =>
    this.client.fetch<JobDefinition>(
      {
        body: JSON.stringify(
          marshalCreateJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/job-definitions`,
      },
      unmarshalJobDefinition,
    )

  getJobDefinition = (request: Readonly<GetJobDefinitionRequest>) =>
    this.client.fetch<JobDefinition>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/job-definitions/${validatePathParam(
          'jobDefinitionId',
          request.jobDefinitionId,
        )}`,
      },
      unmarshalJobDefinition,
    )

  protected pageOfListJobDefinitions = (
    request: Readonly<ListJobDefinitionsRequest> = {},
  ) =>
    this.client.fetch<ListJobDefinitionsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/job-definitions`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
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

  listJobDefinitions = (request: Readonly<ListJobDefinitionsRequest> = {}) =>
    enrichForPagination(
      'jobDefinitions',
      this.pageOfListJobDefinitions,
      request,
    )

  updateJobDefinition = (request: Readonly<UpdateJobDefinitionRequest>) =>
    this.client.fetch<JobDefinition>(
      {
        body: JSON.stringify(
          marshalUpdateJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/job-definitions/${validatePathParam(
          'jobDefinitionId',
          request.jobDefinitionId,
        )}`,
      },
      unmarshalJobDefinition,
    )

  deleteJobDefinition = (request: Readonly<DeleteJobDefinitionRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/serverless-jobs/v1alpha1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/job-definitions/${validatePathParam(
        'jobDefinitionId',
        request.jobDefinitionId,
      )}`,
    })

  startJobDefinition = (request: Readonly<StartJobDefinitionRequest>) =>
    this.client.fetch<JobRun>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/job-definitions/${validatePathParam(
          'jobDefinitionId',
          request.jobDefinitionId,
        )}/start`,
      },
      unmarshalJobRun,
    )

  getJobRun = (request: Readonly<GetJobRunRequest>) =>
    this.client.fetch<JobRun>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/job-runs/${validatePathParam('jobRunId', request.jobRunId)}`,
      },
      unmarshalJobRun,
    )

  stopJobRun = (request: Readonly<StopJobRunRequest>) =>
    this.client.fetch<JobRun>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/job-runs/${validatePathParam('jobRunId', request.jobRunId)}/stop`,
      },
      unmarshalJobRun,
    )

  protected pageOfListJobRuns = (request: Readonly<ListJobRunsRequest> = {}) =>
    this.client.fetch<ListJobRunsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/job-runs`,
        urlParams: urlParams(
          ['job_definition_id', request.jobDefinitionId],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListJobRunsResponse,
    )

  listJobRuns = (request: Readonly<ListJobRunsRequest> = {}) =>
    enrichForPagination('jobRuns', this.pageOfListJobRuns, request)
}
