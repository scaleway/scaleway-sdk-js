// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import { isJSONObject, marshalBlobToScwFile, marshalDecimal, marshalMoney, marshalScwFile, marshalTimeSeries, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalDecimal, unmarshalMapOfObject, unmarshalMoney, unmarshalScwFile, unmarshalServiceInfo, unmarshalTimeSeries, unmarshalTimeSeriesPoint } from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, DefaultValues } from '@scaleway/sdk-client'
import type {
  WorkflowVersion,
  CronSchedule,
  WorkflowRunInfo,
  WorkflowDefinition,
  DefaultTask,
  RunServerlessContainersTask,
  S3Task,
  ServerlessJobsTask,
  TaskRun,
  WorkflowRun,
  ListWorkflowDefinitionsResponse,
  ListWorkflowRunsResponse,
  CreateWorkflowDefinitionRequestCronScheduleConfig,
  CreateWorkflowDefinitionRequestWorkflowVersionConfig,
  CreateWorkflowDefinitionRequest,
  StartWorkflowDefinitionRequest,
  UpdateWorkflowDefinitionRequestCronScheduleConfig,
  UpdateWorkflowDefinitionRequest,
  UpdateWorkflowVersionRequest,
} from './types.gen.js'

export const unmarshalWorkflowVersion = (data: unknown): WorkflowVersion => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'WorkflowVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    deletedAt: unmarshalDate(data.deleted_at),
    description: data.description,
    id: data.id,
    isCurrent: data.is_current,
    name: data.name,
    updatedAt: unmarshalDate(data.updated_at),
    workflowDsl: data.workflow_dsl,
  } as WorkflowVersion
}

const unmarshalCronSchedule = (data: unknown): CronSchedule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CronSchedule' failed as data isn't a dictionary.`,
    )
  }

  return {
    overlap: data.overlap,
    schedule: data.schedule,
    timezoneIdentifier: data.timezone_identifier,
  } as CronSchedule
}

const unmarshalWorkflowRunInfo = (data: unknown): WorkflowRunInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'WorkflowRunInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    reason: data.reason ? data.reason : undefined,
    status: data.status,
    workflowRunId: data.workflow_run_id,
  } as WorkflowRunInfo
}

export const unmarshalWorkflowDefinition = (data: unknown): WorkflowDefinition => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'WorkflowDefinition' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    cronSchedule: data.cron_schedule ? unmarshalCronSchedule(data.cron_schedule) : undefined,
    description: data.description,
    environmentVariables: data.environment_variables,
    id: data.id,
    lastRun: data.last_run ? unmarshalWorkflowRunInfo(data.last_run) : undefined,
    name: data.name,
    projectId: data.project_id,
    region: data.region,
    srn: data.srn,
    updatedAt: unmarshalDate(data.updated_at),
    versions: unmarshalArrayOfObject(data.versions, unmarshalWorkflowVersion),
    workflowTimeout: data.workflow_timeout,
  } as WorkflowDefinition
}

const unmarshalDefaultTask = (data: unknown): DefaultTask => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DefaultTask' failed as data isn't a dictionary.`,
    )
  }

  return {
    errorMessage: data.error_message,
    reason: data.reason ? data.reason : undefined,
  } as DefaultTask
}

const unmarshalRunServerlessContainersTask = (data: unknown): RunServerlessContainersTask => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RunServerlessContainersTask' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    containerId: data.container_id,
    errorMessage: data.error_message,
    imageUrl: data.image_url,
    reason: data.reason ? data.reason : undefined,
    status: data.status,
  } as RunServerlessContainersTask
}

const unmarshalS3Task = (data: unknown): S3Task => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'S3Task' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    errorMessage: data.error_message,
    reason: data.reason ? data.reason : undefined,
  } as S3Task
}

const unmarshalServerlessJobsTask = (data: unknown): ServerlessJobsTask => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerlessJobsTask' failed as data isn't a dictionary.`,
    )
  }

  return {
    errorMessage: data.error_message,
    exitCode: data.exit_code,
    jobDefinitionId: data.job_definition_id,
    jobRunId: data.job_run_id,
    reason: data.reason ? data.reason : undefined,
  } as ServerlessJobsTask
}

const unmarshalTaskRun = (data: unknown): TaskRun => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TaskRun' failed as data isn't a dictionary.`,
    )
  }

  return {
    callHttpTaskRunDetails: data.call_http_task_run_details ? unmarshalDefaultTask(data.call_http_task_run_details) : undefined,
    callServerlessContainerTaskRunDetails: data.call_serverless_container_task_run_details ? unmarshalDefaultTask(data.call_serverless_container_task_run_details) : undefined,
    createdAt: unmarshalDate(data.created_at),
    duration: data.duration,
    generativeApiTaskRunDetails: data.generative_api_task_run_details ? unmarshalDefaultTask(data.generative_api_task_run_details) : undefined,
    id: data.id,
    output: data.output,
    raiseTaskRunDetails: data.raise_task_run_details ? unmarshalDefaultTask(data.raise_task_run_details) : undefined,
    runIteration: data.run_iteration,
    runServerlessContainerTaskRunDetails: data.run_serverless_container_task_run_details ? unmarshalRunServerlessContainersTask(data.run_serverless_container_task_run_details) : undefined,
    s3TaskRunDetails: data.s3_task_run_details ? unmarshalS3Task(data.s3_task_run_details) : undefined,
    serverlessFunctionTaskRunDetails: data.serverless_function_task_run_details ? unmarshalDefaultTask(data.serverless_function_task_run_details) : undefined,
    serverlessJobTaskRunDetails: data.serverless_job_task_run_details ? unmarshalServerlessJobsTask(data.serverless_job_task_run_details) : undefined,
    setTaskRunDetails: data.set_task_run_details ? unmarshalDefaultTask(data.set_task_run_details) : undefined,
    status: data.status,
    taskName: data.task_name,
    terminatedAt: unmarshalDate(data.terminated_at),
    updatedAt: unmarshalDate(data.updated_at),
    waitTaskRunDetails: data.wait_task_run_details ? unmarshalDefaultTask(data.wait_task_run_details) : undefined,
  } as TaskRun
}

export const unmarshalWorkflowRun = (data: unknown): WorkflowRun => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'WorkflowRun' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    duration: data.duration,
    environmentVariables: data.environment_variables,
    errorMessage: data.error_message,
    id: data.id,
    output: data.output,
    projectId: data.project_id,
    reason: data.reason ? data.reason : undefined,
    region: data.region,
    srn: data.srn,
    status: data.status,
    taskRuns: unmarshalArrayOfObject(data.task_runs, unmarshalTaskRun),
    terminatedAt: unmarshalDate(data.terminated_at),
    triggerType: data.trigger_type,
    updatedAt: unmarshalDate(data.updated_at),
    workflowDefinitionId: data.workflow_definition_id,
    workflowDefinitionName: data.workflow_definition_name,
    workflowDsl: data.workflow_dsl,
    workflowVersionId: data.workflow_version_id,
  } as WorkflowRun
}

export const unmarshalListWorkflowDefinitionsResponse = (data: unknown): ListWorkflowDefinitionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListWorkflowDefinitionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    workflowDefinitions: unmarshalArrayOfObject(data.workflow_definitions, unmarshalWorkflowDefinition),
  } as ListWorkflowDefinitionsResponse
}

export const unmarshalListWorkflowRunsResponse = (data: unknown): ListWorkflowRunsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListWorkflowRunsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    workflowRuns: unmarshalArrayOfObject(data.workflow_runs, unmarshalWorkflowRun),
  } as ListWorkflowRunsResponse
}

const marshalCreateWorkflowDefinitionRequestCronScheduleConfig = (
  request: CreateWorkflowDefinitionRequestCronScheduleConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  overlap: request.overlap,
  schedule: request.schedule,
  timezone_identifier: request.timezoneIdentifier,
})

const marshalCreateWorkflowDefinitionRequestWorkflowVersionConfig = (
  request: CreateWorkflowDefinitionRequestWorkflowVersionConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  workflow_dsl: request.workflowDsl,
})

export const marshalCreateWorkflowDefinitionRequest = (
  request: CreateWorkflowDefinitionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cron_schedule: ((request.cronSchedule !== undefined) ?  marshalCreateWorkflowDefinitionRequestCronScheduleConfig(request.cronSchedule, defaults): undefined),
  description: request.description,
  environment_variables: ((request.environmentVariables !== undefined) ?  request.environmentVariables: undefined),
  name: request.name || randomName('workflow'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  workflow_timeout: request.workflowTimeout,
  workflow_version:  marshalCreateWorkflowDefinitionRequestWorkflowVersionConfig(request.workflowVersion, defaults),
})

export const marshalStartWorkflowDefinitionRequest = (
  request: StartWorkflowDefinitionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  environment_variables: request.environmentVariables,
})

const marshalUpdateWorkflowDefinitionRequestCronScheduleConfig = (
  request: UpdateWorkflowDefinitionRequestCronScheduleConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  overlap: request.overlap,
  schedule: request.schedule,
  timezone_identifier: request.timezoneIdentifier,
})

export const marshalUpdateWorkflowDefinitionRequest = (
  request: UpdateWorkflowDefinitionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cron_schedule: ((request.cronSchedule !== undefined) ?  marshalUpdateWorkflowDefinitionRequestCronScheduleConfig(request.cronSchedule, defaults): undefined),
  description: request.description,
  environment_variables: request.environmentVariables,
  name: request.name,
  workflow_timeout: request.workflowTimeout,
})

export const marshalUpdateWorkflowVersionRequest = (
  request: UpdateWorkflowVersionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  workflow_dsl: request.workflowDsl,
})
