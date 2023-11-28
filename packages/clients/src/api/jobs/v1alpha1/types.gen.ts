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

export type ListJobDefinitionsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListJobRunsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

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
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region: Region
}

export type CreateJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  name?: string
  cpuLimit: number
  memoryLimit: number
  imageUri: string
  command: string
  projectId?: string
  environmentVariables?: Record<string, string>
  description: string
  jobTimeout?: string
}

export type DeleteJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  jobDefinitionId: string
}

export type GetJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  jobDefinitionId: string
}

export type GetJobRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  jobRunId: string
}

export type GetServiceInfoRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
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
  jobDefinitionId: string
}

export type StopJobRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  jobRunId: string
}

export type UpdateJobDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  jobDefinitionId: string
  name?: string
  cpuLimit?: number
  memoryLimit?: number
  imageUri?: string
  command?: string
  environmentVariables?: Record<string, string>
  description?: string
  jobTimeout?: string
}
