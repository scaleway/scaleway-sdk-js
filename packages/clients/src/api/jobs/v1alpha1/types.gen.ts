// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type JobRunState =
  | 'unknown_state'
  | 'queued'
  | 'scheduled'
  | 'running'
  | 'succeeded'
  | 'failed'
  | 'canceled'
  | 'internal_error'

export type ListJobDefinitionsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListJobRunsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export interface SecretEnvVar {
  name: string
}

export interface SecretFile {
  path: string
}

export interface CronSchedule {
  /** UNIX cron schedule to run job (e.g., '* * * * *'). */
  schedule: string
  /**
   * Timezone for the cron schedule, in tz database format (e.g.,
   * 'Europe/Paris').
   */
  timezone: string
}

export interface CreateJobDefinitionRequestCronScheduleConfig {
  schedule: string
  timezone: string
}

export interface CreateJobDefinitionSecretsRequestSecretConfig {
  secretManagerId: string
  secretManagerVersion: string
  /** One-of ('pathOrEnvVar'): at most one of 'path', 'envVarName' could be set. */
  path?: string
  /** One-of ('pathOrEnvVar'): at most one of 'path', 'envVarName' could be set. */
  envVarName?: string
}

export interface Secret {
  secretId: string
  secretManagerId: string
  secretManagerVersion: string
  /** One-of ('secretConfig'): at most one of 'file', 'envVar' could be set. */
  file?: SecretFile
  /** One-of ('secretConfig'): at most one of 'file', 'envVar' could be set. */
  envVar?: SecretEnvVar
}

export interface JobDefinition {
  id: string
  name: string
  createdAt?: Date
  updatedAt?: Date
  cpuLimit: number
  memoryLimit: number
  imageUri: string
  command: string
  projectId: string
  environmentVariables: Record<string, string>
  description: string
  jobTimeout?: string
  cronSchedule?: CronSchedule
  localStorageCapacity: number
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region: Region
}

export interface JobRun {
  id: string
  jobDefinitionId: string
  state: JobRunState
  createdAt?: Date
  updatedAt?: Date
  terminatedAt?: Date
  exitCode?: number
  runDuration?: string
  errorMessage: string
  cpuLimit: number
  memoryLimit: number
  command: string
  environmentVariables: Record<string, string>
  localStorageCapacity: number
  startedAt?: Date
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region: Region
}

export interface Resource {
  cpuLimit: number
  memoryLimit: number
}

export interface UpdateJobDefinitionRequestCronScheduleConfig {
  schedule?: string
  timezone?: string
}

export type CreateJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Name of the job definition. */
  name?: string
  /** CPU limit of the job. */
  cpuLimit: number
  /** Memory limit of the job (in MiB). */
  memoryLimit: number
  /** Local storage capacity of the job (in MiB). */
  localStorageCapacity?: number
  /** Image to use for the job. */
  imageUri: string
  /**
   * Startup command. If empty or not defined, the image's default command is
   * used.
   */
  command: string
  /** UUID of the Scaleway Project containing the job. */
  projectId?: string
  /** Environment variables of the job. */
  environmentVariables?: Record<string, string>
  /** Description of the job. */
  description: string
  /** Timeout of the job in seconds. */
  jobTimeout?: string
  /** Configure a cron for the job. */
  cronSchedule?: CreateJobDefinitionRequestCronScheduleConfig
}

export type CreateJobDefinitionSecretsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the job definition to get. */
  jobDefinitionId: string
  /** Secrets to inject into the job. */
  secrets: CreateJobDefinitionSecretsRequestSecretConfig[]
}

export interface CreateJobDefinitionSecretsResponse {
  secrets: Secret[]
}

export type DeleteJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the job definition to delete. */
  jobDefinitionId: string
}

export type DeleteJobDefinitionSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  jobDefinitionId: string
  secretId: string
}

export type GetJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the job definition to get. */
  jobDefinitionId: string
}

export type GetJobDefinitionSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  jobDefinitionId: string
  secretId: string
}

export type GetJobRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the job run to get. */
  jobRunId: string
}

export type GetJobsLimitsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
}

export interface JobsLimits {
  secretsPerJobDefinition: number
}

export type ListJobDefinitionSecretsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  jobDefinitionId: string
}

export interface ListJobDefinitionSecretsResponse {
  secrets: Secret[]
  totalCount: number
}

export type ListJobDefinitionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListJobDefinitionsRequestOrderBy
  projectId?: string
  organizationId?: string
}

export interface ListJobDefinitionsResponse {
  jobDefinitions: JobDefinition[]
  totalCount: number
}

export type ListJobRunsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListJobRunsRequestOrderBy
  jobDefinitionId?: string
  projectId?: string
  organizationId?: string
}

export interface ListJobRunsResponse {
  jobRuns: JobRun[]
  totalCount: number
}

export type ListJobsResourcesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
}

export interface ListJobsResourcesResponse {
  resources: Resource[]
}

export type StartJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the job definition to start. */
  jobDefinitionId: string
  /** Contextual startup command for this specific job run. */
  command?: string
  /** Contextual environment variables for this specific job run. */
  environmentVariables?: Record<string, string>
  /** Number of jobs to run. */
  replicas?: number
}

export interface StartJobDefinitionResponse {
  jobRuns: JobRun[]
}

export type StopJobRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the job run to stop. */
  jobRunId: string
}

export type UpdateJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the job definition to update. */
  jobDefinitionId: string
  /** Name of the job definition. */
  name?: string
  /** CPU limit of the job. */
  cpuLimit?: number
  /** Memory limit of the job (in MiB). */
  memoryLimit?: number
  /** Local storage capacity of the job (in MiB). */
  localStorageCapacity?: number
  /** Image to use for the job. */
  imageUri?: string
  /** Startup command. */
  command?: string
  /** Environment variables of the job. */
  environmentVariables?: Record<string, string>
  /** Description of the job. */
  description?: string
  /** Timeout of the job in seconds. */
  jobTimeout?: string
  cronSchedule?: UpdateJobDefinitionRequestCronScheduleConfig
}

export type UpdateJobDefinitionSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  jobDefinitionId: string
  secretId: string
  secretManagerVersion?: string
  /** One-of ('secretConfig'): at most one of 'path', 'envVarName' could be set. */
  path?: string
  /** One-of ('secretConfig'): at most one of 'path', 'envVarName' could be set. */
  envVarName?: string
}
