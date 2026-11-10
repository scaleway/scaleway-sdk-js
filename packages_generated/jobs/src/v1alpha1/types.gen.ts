// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


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

export type ListJobRunsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export interface SecretEnvVar {
  name: string
}


export interface SecretFile {
  path: string
}


export interface CronSchedule {
  /**
   * UNIX cron schedule to run job (e.g., '* * * * *').
   */
  schedule: string
  /**
   * Timezone for the cron schedule, in tz database format (e.g., 'Europe/Paris').
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
  /**
   *
   * One-of ('pathOrEnvVar'): at most one of 'path', 'envVarName' could be set.
   */
  path?: string | null
  /**
   *
   * One-of ('pathOrEnvVar'): at most one of 'path', 'envVarName' could be set.
   */
  envVarName?: string | null
}


export interface Secret {
  /**
   * UUID of the secret reference within the job.
   */
  secretId: string
  /**
   * UUID of the secret in Secret Manager.
   */
  secretManagerId: string
  /**
   * Version of the secret in Secret Manager.
   */
  secretManagerVersion: string
  /**
   * File secret mounted inside the job.
   *
   * One-of ('secretConfig'): at most one of 'file', 'envVar' could be set.
   */
  file?: SecretFile | null
  /**
   * Environment variable used to expose the secret.
   *
   * One-of ('secretConfig'): at most one of 'file', 'envVar' could be set.
   */
  envVar?: SecretEnvVar | null
}


export interface JobDefinition {
  id: string
  name: string
  createdAt?: Date | null
  updatedAt?: Date | null
  cpuLimit: number
  memoryLimit: number
  imageUri: string
  command: string
  projectId: string
  environmentVariables: Record<string, string>
  description: string
  jobTimeout?: string | null
  cronSchedule?: CronSchedule | null
  localStorageCapacity: number
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region: ScwRegion
}


export interface JobRun {
  id: string
  jobDefinitionId: string
  state: JobRunState
  createdAt?: Date | null
  updatedAt?: Date | null
  terminatedAt?: Date | null
  exitCode?: number | null
  runDuration?: string | null
  errorMessage: string
  cpuLimit: number
  memoryLimit: number
  command: string
  environmentVariables: Record<string, string>
  localStorageCapacity: number
  startedAt?: Date | null
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region: ScwRegion
}


export interface Resource {
  cpuLimit: number
  memoryLimit: number
}


export interface UpdateJobDefinitionRequestCronScheduleConfig {
  schedule?: string | null
  timezone?: string | null
}


export type CreateJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Name of the job definition.
   */
  name?: string | null
  /**
   * CPU limit of the job.
   */
  cpuLimit: number
  /**
   * Memory limit of the job (in MiB).
   */
  memoryLimit: number
  /**
   * Local storage capacity of the job (in MiB).
   */
  localStorageCapacity?: number | null
  /**
   * Image to use for the job.
   */
  imageUri: string
  /**
   * Startup command. If empty or not defined, the image's default command is used.
   */
  command: string
  /**
   * UUID of the Scaleway Project containing the job.
   */
  projectId?: string | null
  /**
   * Environment variables of the job.
   */
  environmentVariables?: Record<string, string> | null
  /**
   * Description of the job.
   */
  description: string
  /**
   * Timeout of the job in seconds.
   */
  jobTimeout?: string | null
  /**
   * Configure a cron for the job.
   */
  cronSchedule?: CreateJobDefinitionRequestCronScheduleConfig | null
}


export type CreateJobDefinitionSecretsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job definition.
   */
  jobDefinitionId: string
  /**
   * List of secrets to inject into the job.
   */
  secrets: CreateJobDefinitionSecretsRequestSecretConfig[]
}


export interface CreateJobDefinitionSecretsResponse {
  /**
   * List of secrets created.
   */
  secrets: Secret[]
}


export type DeleteJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job definition to delete.
   */
  jobDefinitionId: string
}


export type DeleteJobDefinitionSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job definition.
   */
  jobDefinitionId: string
  /**
   * UUID of the secret reference within the job.
   */
  secretId: string
}


export type GetJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job definition to get.
   */
  jobDefinitionId: string
}


export type GetJobDefinitionSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job definition.
   */
  jobDefinitionId: string
  /**
   * UUID of the secret reference within the job.
   */
  secretId: string
}


export type GetJobRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job run to get.
   */
  jobRunId: string
}


export type GetJobsLimitsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
}


export interface JobsLimits {
  secretsPerJobDefinition: number
}


export type ListJobDefinitionSecretsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job definition.
   */
  jobDefinitionId: string
}


export interface ListJobDefinitionSecretsResponse {
  /**
   * List of secret references within a job definition.
   */
  secrets: Secret[]
  /**
   * Total count of secret references within a job definition.
   */
  totalCount: number
}


export type ListJobDefinitionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  page?: number | null
  pageSize?: number | null
  orderBy?: ListJobDefinitionsRequestOrderBy | null
  projectId?: string | null
  organizationId?: string | null
}


export interface ListJobDefinitionsResponse {
  jobDefinitions: JobDefinition[]
  totalCount: number
}


export type ListJobRunsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  page?: number | null
  pageSize?: number | null
  orderBy?: ListJobRunsRequestOrderBy | null
  jobDefinitionId?: string | null
  projectId?: string | null
  organizationId?: string | null
  state?: JobRunState | null
  states?: JobRunState[] | null
}


export interface ListJobRunsResponse {
  jobRuns: JobRun[]
  totalCount: number
}


export type ListJobsResourcesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
}


export interface ListJobsResourcesResponse {
  resources: Resource[]
}


export type StartJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job definition to start.
   */
  jobDefinitionId: string
  /**
   * Contextual startup command for this specific job run.
   */
  command?: string | null
  /**
   * Contextual environment variables for this specific job run.
   */
  environmentVariables?: Record<string, string> | null
  /**
   * Number of jobs to run.
   */
  replicas?: number | null
}


export interface StartJobDefinitionResponse {
  jobRuns: JobRun[]
}


export type StopJobRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job run to stop.
   */
  jobRunId: string
}


export type UpdateJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job definition to update.
   */
  jobDefinitionId: string
  /**
   * Name of the job definition.
   */
  name?: string | null
  /**
   * CPU limit of the job.
   */
  cpuLimit?: number | null
  /**
   * Memory limit of the job (in MiB).
   */
  memoryLimit?: number | null
  /**
   * Local storage capacity of the job (in MiB).
   */
  localStorageCapacity?: number | null
  /**
   * Image to use for the job.
   */
  imageUri?: string | null
  /**
   * Startup command.
   */
  command?: string | null
  /**
   * Environment variables of the job.
   */
  environmentVariables?: Record<string, string> | null
  /**
   * Description of the job.
   */
  description?: string | null
  /**
   * Timeout of the job in seconds.
   */
  jobTimeout?: string | null
  cronSchedule?: UpdateJobDefinitionRequestCronScheduleConfig | null
}


export type UpdateJobDefinitionSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the job definition.
   */
  jobDefinitionId: string
  /**
   * UUID of the secret reference within the job.
   */
  secretId: string
  /**
   * Version of the secret in Secret Manager.
   */
  secretManagerVersion?: string | null
  /**
   * Path of the secret to mount inside the job (either `path` or `env_var_name` must be set).
   *
   * One-of ('secretConfig'): at most one of 'path', 'envVarName' could be set.
   */
  path?: string | null
  /**
   * Environment variable name used to expose the secret inside the job (either `path` or `env_var_name` must be set).
   *
   * One-of ('secretConfig'): at most one of 'path', 'envVarName' could be set.
   */
  envVarName?: string | null
}


