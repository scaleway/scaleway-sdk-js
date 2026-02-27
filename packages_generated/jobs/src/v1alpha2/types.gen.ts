// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, } from '@scaleway/sdk-client'


export type JobRunReason =
  | 'unknown_reason'
  | 'invalid_request'
  | 'timeout'
  | 'cancellation'
  | 'technical_error'
  | 'image_not_found'
  | 'invalid_image'
  | 'memory_usage_exceeded'
  | 'storage_usage_exceeded'
  | 'exited_with_error'
  | 'secret_disabled'
  | 'secret_not_found'
  | 'quota_exceeded'

export type JobRunState =
  | 'unknown_state'
  | 'initialized'
  | 'validated'
  | 'queued'
  | 'running'
  | 'succeeded'
  | 'failed'
  | 'interrupting'
  | 'interrupted'
  | 'retrying'

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


export interface RetryPolicy {
  /**
   * Maximum number of retries upon a job failure.
   */
  maxRetries: number
}


export interface CreateJobDefinitionRequestCronScheduleConfig {
  schedule: string
  timezone: string
}


export interface CreateSecretsRequestSecretConfig {
  secretManagerId: string
  secretManagerVersion: string
  /**
   *
   * One-of ('pathOrEnvVar'): at most one of 'path', 'envVarName' could be set.
   */
  path?: string
  /**
   *
   * One-of ('pathOrEnvVar'): at most one of 'path', 'envVarName' could be set.
   */
  envVarName?: string
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
   * UUID of the job definition.
   */
  jobDefinitionId: string
  /**
   * File secret mounted inside the job.
   *
   * One-of ('secretConfig'): at most one of 'file', 'envVar' could be set.
   */
  file?: SecretFile
  /**
   * Environment variable used to expose the secret.
   *
   * One-of ('secretConfig'): at most one of 'file', 'envVar' could be set.
   */
  envVar?: SecretEnvVar
}


export interface JobDefinition {
  /**
   * UUID of the job definition.
   */
  id: string
  /**
   * Name of the job definition.
   */
  name: string
  /**
   * UUID of the Scaleway Project containing the job.
   */
  projectId: string
  /**
   * Creation date of the job definition.
   */
  createdAt?: Date
  /**
   * Last update date of the job definition.
   */
  updatedAt?: Date
  /**
   * CPU limit of the job (in mvCPU).
   */
  cpuLimit: number
  /**
   * Memory limit of the job (in MiB).
   */
  memoryLimit: number
  /**
   * Local storage capacity of the job (in MiB).
   */
  localStorageCapacity: number
  /**
   * Image to use for the job.
   */
  imageUri: string
  /**
   * @deprecated Deprecated, please use startup_command instead.
   */
  command: string
  /**
   * Environment variables of the job.
   */
  environmentVariables: Record<string, string>
  /**
   * Timeout of the job in seconds.
   */
  jobTimeout?: string
  /**
   * Description of the job.
   */
  description: string
  /**
   * Configure a cron for the job.
   */
  cronSchedule?: CronSchedule
  /**
   * Job startup command.
   */
  startupCommand: string[]
  /**
   * Job arguments passed to the startup command at runtime.
   */
  args: string[]
  /**
   * Retry behaviour in case of job failure.
   */
  retryPolicy?: RetryPolicy
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region: ScwRegion
}


export interface Resource {
  computeLimitMvcpu: number
  memoryLimitBytes: number
}


export interface JobRun {
  /**
   * UUID of the job run.
   */
  id: string
  /**
   * UUID of the job definition.
   */
  jobDefinitionId: string
  /**
   * Creation date of the job run.
   */
  createdAt?: Date
  /**
   * Last update date of the job run.
   */
  updatedAt?: Date
  /**
   * Start date of the job run.
   */
  startedAt?: Date
  /**
   * Termination date of the job run.
   */
  terminatedAt?: Date
  /**
   * Duration of the job run.
   */
  runDuration?: string
  /**
   * State of the job run.
   */
  state: JobRunState
  /**
   * Reason for failure if the job failed.
   */
  reason?: JobRunReason
  /**
   * Exit code of the job.
   */
  exitCode?: number
  /**
   * Error message if the job failed.
   */
  errorMessage?: string
  /**
   * CPU limit of the job (in mvCPU).
   */
  cpuLimit: number
  /**
   * Memory limit of the job (in MiB).
   */
  memoryLimit: number
  /**
   * Local storage capacity of the job (in MiB).
   */
  localStorageCapacity: number
  /**
   * @deprecated Deprecated, please use startup_command instead.
   */
  command: string
  /**
   * Environment variables of the job run.
   */
  environmentVariables: Record<string, string>
  /**
   * Job startup command.
   */
  startupCommand: string[]
  /**
   * Job arguments passed to the startup command at runtime.
   */
  args: string[]
  /**
   * Number of retry attempts.
   */
  attempts?: number
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region: ScwRegion
}


export interface UpdateJobDefinitionRequestCronScheduleConfig {
  schedule?: string
  timezone?: string
}


export type CreateJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name of the job definition.
   */
  name?: string
  /**
   * CPU limit of the job (in mvCPU).
   */
  cpuLimit: number
  /**
   * Memory limit of the job (in MiB).
   */
  memoryLimit: number
  /**
   * Local storage capacity of the job (in MiB).
   */
  localStorageCapacity: number
  /**
   * Image to use for the job.
   */
  imageUri: string
  /**
   * @deprecated Deprecated: please use startup_command instead.
   */
  command: string
  /**
   * The main executable or entrypoint script to run.
If both command and startup_command are provided, only startup_command will be used.
   */
  startupCommand?: string[]
  /**
   * Passed to the startup command at runtime.
Environment variables and secrets can be included, and will be expanded before the arguments are used.
   */
  args?: string[]
  /**
   * UUID of the Scaleway Project containing the job.
   */
  projectId?: string
  /**
   * Environment variables of the job.
   */
  environmentVariables?: Record<string, string>
  /**
   * Description of the job.
   */
  description: string
  /**
   * Timeout of the job in seconds.
   */
  jobTimeout?: string
  /**
   * Configure a cron for the job.
   */
  cronSchedule?: CreateJobDefinitionRequestCronScheduleConfig
  /**
   * Retry behaviour in case of job failure.
   */
  retryPolicy?: RetryPolicy
}


export type CreateSecretsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the job definition.
   */
  jobDefinitionId: string
  /**
   * List of secrets to inject into the job.
   */
  secrets: CreateSecretsRequestSecretConfig[]
}


export interface CreateSecretsResponse {
  /**
   * List of secrets created.
   */
  secrets: Secret[]
}


export type DeleteJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the job definition to delete.
   */
  jobDefinitionId: string
}


export type DeleteSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the secret reference within the job.
   */
  secretId: string
}


export type GetJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the job definition to get.
   */
  jobDefinitionId: string
}


export type GetJobLimitsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
}


export type GetJobRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the job run to get.
   */
  jobRunId: string
}


export type GetSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the secret reference within the job.
   */
  secretId: string
}


export interface JobLimits {
  secretsPerJobDefinition: number
}


export type ListJobDefinitionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
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


export type ListJobResourcesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
}


export interface ListJobResourcesResponse {
  resources: Resource[]
}


export type ListJobRunsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  page?: number
  pageSize?: number
  orderBy?: ListJobRunsRequestOrderBy
  jobDefinitionId?: string
  projectId?: string
  organizationId?: string
  state?: JobRunState
  states?: JobRunState[]
  reasons?: JobRunReason[]
}


export interface ListJobRunsResponse {
  jobRuns: JobRun[]
  totalCount: number
}


export type ListSecretsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the job definition.
   */
  jobDefinitionId: string
}


export interface ListSecretsResponse {
  /**
   * List of secret references within a job definition.
   */
  secrets: Secret[]
  /**
   * Total count of secret references within a job definition.
   */
  totalCount: number
}


export type StartJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the job definition to start.
   */
  jobDefinitionId: string
  /**
   * @deprecated If empty or not defined, the image's default command is used.
Deprecated: please use startup_command instead.
   */
  command?: string
  /**
   * Overrides the default defined in the job image.
The main executable or entrypoint script to run.
If both command and startup_command are provided, only startup_command will be used.
   */
  startupCommand?: string[]
  /**
   * Overrides the default arguments defined in the job image.
Passed to the contextual startup command at runtime.
Environment variables and secrets can be included, and will be expanded before the arguments are used.
   */
  args?: string[]
  /**
   * Contextual environment variables for this specific job run.
   */
  environmentVariables?: Record<string, string>
  /**
   * Number of jobs to run.
   */
  replicas?: number
}


export interface StartJobDefinitionResponse {
  /**
   * List of started job runs.
   */
  jobRuns: JobRun[]
}


export type StopJobRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the job run to stop.
   */
  jobRunId: string
}


export type UpdateJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the job definition to update.
   */
  jobDefinitionId: string
  /**
   * Name of the job definition.
   */
  name?: string
  /**
   * CPU limit of the job (in mvCPU).
   */
  cpuLimit?: number
  /**
   * Memory limit of the job (in MiB).
   */
  memoryLimit?: number
  /**
   * Local storage capacity of the job (in MiB).
   */
  localStorageCapacity?: number
  /**
   * Image to use for the job.
   */
  imageUri?: string
  /**
   * @deprecated Deprecated: please use startup_command instead.
   */
  command?: string
  /**
   * The main executable or entrypoint script to run.
If both command and startup_command are provided, only startup_command will be used.
   */
  startupCommand?: string[]
  /**
   * Passed to the startup command at runtime.
Environment variables and secrets can be included, and will be expanded before the arguments are used.
   */
  args?: string[]
  /**
   * Environment variables of the job.
   */
  environmentVariables?: Record<string, string>
  /**
   * Description of the job.
   */
  description?: string
  /**
   * Timeout of the job in seconds.
   */
  jobTimeout?: string
  /**
   * Configure a cron for the job.
   */
  cronSchedule?: UpdateJobDefinitionRequestCronScheduleConfig
  /**
   * Retry behaviour in case of job failure.
   */
  retryPolicy?: RetryPolicy
}


export type UpdateSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the secret reference within the job.
   */
  secretId: string
  /**
   * Version of the secret in Secret Manager.
   */
  secretManagerVersion?: string
  /**
   * Path of the secret to mount inside the job (either `path` or `env_var_name` must be set).
   *
   * One-of ('secretConfig'): at most one of 'path', 'envVarName' could be set.
   */
  path?: string
  /**
   * Environment variable name used to expose the secret inside the job (either `path` or `env_var_name` must be set).
   *
   * One-of ('secretConfig'): at most one of 'path', 'envVarName' could be set.
   */
  envVarName?: string
}


