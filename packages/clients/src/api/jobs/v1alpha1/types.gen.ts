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

export interface CronSchedule {
  schedule: string
  timezone: string
}

export interface CreateJobDefinitionRequestCronScheduleConfig {
  schedule: string
  timezone: string
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
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region: Region
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
  /** Startup command. */
  command: string
  /** UUID of the Scaleway Project containing the job. */
  projectId?: string
  /** Environment variables of the job. */
  environmentVariables?: Record<string, string>
  /** Description of the job. */
  description: string
  /** Timeout of the job in seconds. */
  jobTimeout?: string
  cronSchedule?: CreateJobDefinitionRequestCronScheduleConfig
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

export type GetJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the job definition to get. */
  jobDefinitionId: string
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
}

export interface ListJobRunsResponse {
  jobRuns: JobRun[]
  totalCount: number
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
