// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  CreateJobDefinitionRequest,
  CreateJobDefinitionRequestCronScheduleConfig,
  CreateSecretsRequest,
  CreateSecretsRequestSecretConfig,
  CreateSecretsResponse,
  CronSchedule,
  JobDefinition,
  JobLimits,
  JobRun,
  ListJobDefinitionsResponse,
  ListJobResourcesResponse,
  ListJobRunsResponse,
  ListSecretsResponse,
  Resource,
  Secret,
  SecretEnvVar,
  SecretFile,
  StartJobDefinitionRequest,
  StartJobDefinitionResponse,
  UpdateJobDefinitionRequest,
  UpdateJobDefinitionRequestCronScheduleConfig,
  UpdateSecretRequest,
} from './types.gen.js'

const unmarshalSecretEnvVar = (data: unknown): SecretEnvVar => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretEnvVar' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
  } as SecretEnvVar
}

const unmarshalSecretFile = (data: unknown): SecretFile => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretFile' failed as data isn't a dictionary.`,
    )
  }

  return {
    path: data.path,
  } as SecretFile
}

export const unmarshalSecret = (data: unknown): Secret => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Secret' failed as data isn't a dictionary.`,
    )
  }

  return {
    envVar: data.env_var ? unmarshalSecretEnvVar(data.env_var) : undefined,
    file: data.file ? unmarshalSecretFile(data.file) : undefined,
    jobDefinitionId: data.job_definition_id,
    secretId: data.secret_id,
    secretManagerId: data.secret_manager_id,
    secretManagerVersion: data.secret_manager_version,
  } as Secret
}

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
    args: data.args,
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
    localStorageCapacity: data.local_storage_capacity,
    memoryLimit: data.memory_limit,
    name: data.name,
    projectId: data.project_id,
    region: data.region,
    startupCommand: data.startup_command,
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
    args: data.args,
    command: data.command,
    cpuLimit: data.cpu_limit,
    createdAt: unmarshalDate(data.created_at),
    environmentVariables: data.environment_variables,
    errorMessage: data.error_message,
    exitCode: data.exit_code,
    id: data.id,
    jobDefinitionId: data.job_definition_id,
    localStorageCapacity: data.local_storage_capacity,
    memoryLimit: data.memory_limit,
    reason: data.reason ? data.reason : undefined,
    region: data.region,
    runDuration: data.run_duration,
    startedAt: unmarshalDate(data.started_at),
    startupCommand: data.startup_command,
    state: data.state,
    terminatedAt: unmarshalDate(data.terminated_at),
    updatedAt: unmarshalDate(data.updated_at),
  } as JobRun
}

export const unmarshalCreateSecretsResponse = (
  data: unknown,
): CreateSecretsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateSecretsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    secrets: unmarshalArrayOfObject(data.secrets, unmarshalSecret),
  } as CreateSecretsResponse
}

export const unmarshalJobLimits = (data: unknown): JobLimits => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'JobLimits' failed as data isn't a dictionary.`,
    )
  }

  return {
    secretsPerJobDefinition: data.secrets_per_job_definition,
  } as JobLimits
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

const unmarshalResource = (data: unknown): Resource => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Resource' failed as data isn't a dictionary.`,
    )
  }

  return {
    computeLimitMvcpu: data.compute_limit_mvcpu,
    memoryLimitBytes: data.memory_limit_bytes,
  } as Resource
}

export const unmarshalListJobResourcesResponse = (
  data: unknown,
): ListJobResourcesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListJobResourcesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    resources: unmarshalArrayOfObject(data.resources, unmarshalResource),
  } as ListJobResourcesResponse
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

export const unmarshalListSecretsResponse = (
  data: unknown,
): ListSecretsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSecretsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    secrets: unmarshalArrayOfObject(data.secrets, unmarshalSecret),
    totalCount: data.total_count,
  } as ListSecretsResponse
}

export const unmarshalStartJobDefinitionResponse = (
  data: unknown,
): StartJobDefinitionResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'StartJobDefinitionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    jobRuns: unmarshalArrayOfObject(data.job_runs, unmarshalJobRun),
  } as StartJobDefinitionResponse
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
  args: request.args,
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
  local_storage_capacity: request.localStorageCapacity,
  memory_limit: request.memoryLimit,
  name: request.name || randomName('job'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  startup_command: request.startupCommand,
})

const marshalCreateSecretsRequestSecretConfig = (
  request: CreateSecretsRequestSecretConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  secret_manager_id: request.secretManagerId,
  secret_manager_version: request.secretManagerVersion,
  ...resolveOneOf([
    { param: 'path', value: request.path },
    { param: 'env_var_name', value: request.envVarName },
  ]),
})

export const marshalCreateSecretsRequest = (
  request: CreateSecretsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  job_definition_id: request.jobDefinitionId,
  secrets: request.secrets.map(elt =>
    marshalCreateSecretsRequestSecretConfig(elt, defaults),
  ),
})

export const marshalStartJobDefinitionRequest = (
  request: StartJobDefinitionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  args: request.args,
  command: request.command,
  environment_variables: request.environmentVariables,
  replicas: request.replicas,
  startup_command: request.startupCommand,
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
  args: request.args,
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
  local_storage_capacity: request.localStorageCapacity,
  memory_limit: request.memoryLimit,
  name: request.name,
  startup_command: request.startupCommand,
})

export const marshalUpdateSecretRequest = (
  request: UpdateSecretRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  secret_manager_version: request.secretManagerVersion,
  ...resolveOneOf([
    { param: 'path', value: request.path },
    { param: 'env_var_name', value: request.envVarName },
  ]),
})
