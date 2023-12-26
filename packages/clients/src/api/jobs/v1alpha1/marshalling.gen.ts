// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreateJobDefinitionRequest,
  CreateJobDefinitionRequestCronScheduleConfig,
  CronSchedule,
  JobDefinition,
  JobRun,
  ListJobDefinitionsResponse,
  ListJobRunsResponse,
  UpdateJobDefinitionRequest,
  UpdateJobDefinitionRequestCronScheduleConfig,
} from './types.gen'

const unmarshalCronSchedule = (data: unknown): CronSchedule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CronSchedule' failed as data isn't a dictionary.`,
    )
  }

  return {
    schedule: data.schedule,
    timezone: data.timezone,
  } as CronSchedule
}

export const unmarshalJobDefinition = (data: unknown): JobDefinition => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'JobDefinition' failed as data isn't a dictionary.`,
    )
  }

  return {
    command: data.command,
    cpuLimit: data.cpu_limit,
    createdAt: unmarshalDate(data.created_at),
    cronSchedule: data.cron_schedule
      ? unmarshalCronSchedule(data.cron_schedule)
      : undefined,
    description: data.description,
    environmentVariables: data.environment_variables,
    id: data.id,
    imageUri: data.image_uri,
    jobTimeout: data.job_timeout,
    memoryLimit: data.memory_limit,
    name: data.name,
    projectId: data.project_id,
    region: data.region,
    updatedAt: unmarshalDate(data.updated_at),
  } as JobDefinition
}

export const unmarshalJobRun = (data: unknown): JobRun => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'JobRun' failed as data isn't a dictionary.`,
    )
  }

  return {
    cpuLimit: data.cpu_limit,
    createdAt: unmarshalDate(data.created_at),
    errorMessage: data.error_message,
    exitCode: data.exit_code,
    id: data.id,
    jobDefinitionId: data.job_definition_id,
    memoryLimit: data.memory_limit,
    region: data.region,
    runDuration: data.run_duration,
    state: data.state,
    terminatedAt: unmarshalDate(data.terminated_at),
    updatedAt: unmarshalDate(data.updated_at),
  } as JobRun
}

export const unmarshalListJobDefinitionsResponse = (
  data: unknown,
): ListJobDefinitionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListJobDefinitionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    jobDefinitions: unmarshalArrayOfObject(
      data.job_definitions,
      unmarshalJobDefinition,
    ),
    totalCount: data.total_count,
  } as ListJobDefinitionsResponse
}

export const unmarshalListJobRunsResponse = (
  data: unknown,
): ListJobRunsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListJobRunsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    jobRuns: unmarshalArrayOfObject(data.job_runs, unmarshalJobRun),
    totalCount: data.total_count,
  } as ListJobRunsResponse
}

const marshalCreateJobDefinitionRequestCronScheduleConfig = (
  request: CreateJobDefinitionRequestCronScheduleConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  schedule: request.schedule,
  timezone: request.timezone,
})

export const marshalCreateJobDefinitionRequest = (
  request: CreateJobDefinitionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  command: request.command,
  cpu_limit: request.cpuLimit,
  cron_schedule:
    request.cronSchedule !== undefined
      ? marshalCreateJobDefinitionRequestCronScheduleConfig(
          request.cronSchedule,
          defaults,
        )
      : undefined,
  description: request.description,
  environment_variables:
    request.environmentVariables !== undefined
      ? request.environmentVariables
      : undefined,
  image_uri: request.imageUri,
  job_timeout: request.jobTimeout,
  memory_limit: request.memoryLimit,
  name: request.name || randomName('job'),
  project_id: request.projectId ?? defaults.defaultProjectId,
})

const marshalUpdateJobDefinitionRequestCronScheduleConfig = (
  request: UpdateJobDefinitionRequestCronScheduleConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  schedule: request.schedule,
  timezone: request.timezone,
})

export const marshalUpdateJobDefinitionRequest = (
  request: UpdateJobDefinitionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  command: request.command,
  cpu_limit: request.cpuLimit,
  cron_schedule:
    request.cronSchedule !== undefined
      ? marshalUpdateJobDefinitionRequestCronScheduleConfig(
          request.cronSchedule,
          defaults,
        )
      : undefined,
  description: request.description,
  environment_variables: request.environmentVariables,
  image_uri: request.imageUri,
  job_timeout: request.jobTimeout,
  memory_limit: request.memoryLimit,
  name: request.name,
})
