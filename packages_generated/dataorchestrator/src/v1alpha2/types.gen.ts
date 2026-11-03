// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type DefaultTaskDefaultRunReason =
  | 'unknown_default_run_reason'
  | 'timeout'
  | 'cancellation'
  | 'technical_error'
  | 'functional_error'

export type ListWorkflowDefinitionsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListWorkflowRunsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'terminated_at_asc'
  | 'terminated_at_desc'
  | 'duration_asc'
  | 'duration_desc'
  | 'workflow_definition_name_asc'
  | 'workflow_definition_name_desc'

export type RunServerlessContainersTaskAction =
  | 'unknown_action'
  | 'deploy'
  | 'delete'
  | 'get'

export type RunServerlessContainersTaskReason =
  | 'unknown_reason'
  | 'timeout'
  | 'cancellation'
  | 'technical_error'
  | 'functional_error'

export type RunServerlessContainersTaskStatus =
  | 'unknown_status'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'updating'
  | 'creating'
  | 'locked'
  | 'upgrading'
  | 'rebalancing'
  | 'triggering'

export type RunStatus =
  | 'unknown_run_status'
  | 'initialized'
  | 'validated'
  | 'queued'
  | 'running'
  | 'succeeded'
  | 'failed'
  | 'interrupting'
  | 'interrupted'
  | 'pausing'
  | 'paused'

export type S3TaskReason =
  | 'unknown_default_run_reason'
  | 'timeout'
  | 'cancellation'
  | 'technical_error'
  | 'functional_error'

export type ScheduleOverlapPolicy =
  | 'unknown_schedule_overlap_policy'
  | 'forbid'
  | 'buffer_one'
  | 'buffer_all'
  | 'allow_all'

export type ServerlessJobsTaskServerlessJobRunReason =
  | 'unknown_serverless_job_run_reason'
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

export type TriggerType =
  | 'unknown_trigger_type'
  | 'manual'
  | 'scheduled'

export type WorkflowRunReason =
  | 'unknown_workflow_run_reason'
  | 'timeout'
  | 'cancellation'
  | 'technical_error'
  | 'functional_error'
  | 'not_found'

export interface DefaultTask {
  /**
   * Current reason of the task run.
   */
  reason?: DefaultTaskDefaultRunReason
  /**
   * Error message of the task run.
   */
  errorMessage?: string
}


export interface RunServerlessContainersTask {
  /**
   * Unique identifier of the serverless-container deployment.
   */
  containerId: string
  /**
   * Image deployed with the serverless-container.
   */
  imageUrl: string
  /**
   * Status of the serverless-container deployment.
   */
  status: RunServerlessContainersTaskStatus
  /**
   * Action used on the serverless-container deployment.
   */
  action: RunServerlessContainersTaskAction
  /**
   * Current reason of the task run.
   */
  reason?: RunServerlessContainersTaskReason
  /**
   * Error message of the task run.
   */
  errorMessage?: string
}


export interface S3Task {
  action: string
  reason?: S3TaskReason
  errorMessage?: string
}


export interface ServerlessJobsTask {
  /**
   * Unique identifier of the serverless-job definition.
   */
  jobDefinitionId: string
  /**
   * Unique identifier of the serverless-job run.
   */
  jobRunId: string
  /**
   * Terminated reason of the serverless-job run.
   */
  reason?: ServerlessJobsTaskServerlessJobRunReason
  /**
   * Exit code of the serverless-job run.
   */
  exitCode?: number
  /**
   * Error message of the serverless-job run.
   */
  errorMessage?: string
}


export interface CronSchedule {
  /**
   * UNIX cron schedule to run workflow (e.g., '* * * * *').
   */
  schedule: string
  /**
   * Timezone identifier for the cron schedule, in tz database format (e.g., 'Europe/Paris').
   */
  timezoneIdentifier: string
  /**
   * Controls what happens when an WorkflowDefinition would be started by a Schedule.
   */
  overlap: ScheduleOverlapPolicy
}


export interface WorkflowRunInfo {
  /**
   * Workflow run ID.
   */
  workflowRunId: string
  /**
   * Workflow run status.
   */
  status: RunStatus
  /**
   * Workflow run reason.
   */
  reason?: WorkflowRunReason
}


export interface WorkflowVersion {
  /**
   * Unique identifier.
   */
  id: string
  /**
   * Name of the workflow version.
   */
  name: string
  /**
   * Description of the workflow version.
   */
  description: string
  /**
   * Creation date of the workflow version.
   */
  createdAt?: Date
  /**
   * Last modification date of the workflow version.
   */
  updatedAt?: Date
  /**
   * Deleted date of the workflow version.
   */
  deletedAt?: Date
  /**
   * DSL of workflow in YAML format based from https://open-workflow-specification.org/schemas/1.0.3/workflow.yaml.
   */
  workflowDsl: string
  /**
   * Indicate if the version is the current selected by the workflow to run.
   */
  isCurrent: boolean
}


export interface TaskRun {
  /**
   * Unique identifier.
   */
  id: string
  /**
   * Unique identifier of the task.
   */
  taskName: string
  /**
   * Creation date of the task run.
   */
  createdAt?: Date
  /**
   * Last modification date of the task run.
   */
  updatedAt?: Date
  /**
   * Terminated date of the task run.
   */
  terminatedAt?: Date
  /**
   * Run duration of the task run.
   */
  duration?: string
  /**
   * Status of the task run.
   */
  status: RunStatus
  /**
   * Output of the task run.
   */
  output?: string
  /**
   * Task run details for a serverless-job task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  serverlessJobTaskRunDetails?: ServerlessJobsTask
  /**
   * Task run details for a raise task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  raiseTaskRunDetails?: DefaultTask
  /**
   * Task run details for a set task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  setTaskRunDetails?: DefaultTask
  /**
   * Task run details for a call http task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  callHttpTaskRunDetails?: DefaultTask
  /**
   * Task run details for a wait task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  waitTaskRunDetails?: DefaultTask
  /**
   * Task run details for a serverless-function task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  serverlessFunctionTaskRunDetails?: DefaultTask
  /**
   * Task run details for a run-serverless-container task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  runServerlessContainerTaskRunDetails?: RunServerlessContainersTask
  /**
   * Task run details for a call-serverless-container task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  callServerlessContainerTaskRunDetails?: DefaultTask
  /**
   * Task run details for a S3 task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  s3TaskRunDetails?: S3Task
  /**
   * Task run details for a generative-api task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  generativeApiTaskRunDetails?: DefaultTask
  /**
   * Run iteration of the task (in loop or retry).
   */
  runIteration?: number
}


export interface CreateWorkflowDefinitionRequestCronScheduleConfig {
  schedule: string
  timezoneIdentifier: string
  overlap?: ScheduleOverlapPolicy
}


export interface CreateWorkflowDefinitionRequestWorkflowVersionConfig {
  name: string
  description: string
  workflowDsl?: string
}


export interface WorkflowDefinition {
  /**
   * Unique identifier.
   */
  id: string
  /**
   * Name of the workflow definition.
   */
  name: string
  /**
   * Description of the workflow definition.
   */
  description: string
  /**
   * Project ID.
   */
  projectId: string
  /**
   * Creation date of the workflow definition.
   */
  createdAt?: Date
  /**
   * Last modification date of the workflow definition.
   */
  updatedAt?: Date
  /**
   * Versions of workflow.
   */
  versions: WorkflowVersion[]
  /**
   * Configure a cron for the workflow.
   */
  cronSchedule?: CronSchedule
  /**
   * Environment variables of the workflow.
   */
  environmentVariables: Record<string, string>
  /**
   * Timeout of the workflow in seconds.
   */
  workflowTimeout?: string
  /**
   * Last workflow run information.
   */
  lastRun?: WorkflowRunInfo
  /**
   * Region of the workflow.
   */
  region: ScwRegion
  /**
   * The SRN of the workflow definition.
   */
  srn: string
}


export interface WorkflowRun {
  /**
   * Unique identifier.
   */
  id: string
  /**
   * Unique identifier of the workflow definition.
   */
  workflowDefinitionId: string
  /**
   * Name of the workflow definition.
   */
  workflowDefinitionName: string
  /**
   * Unique identifier of the workflow version.
   */
  workflowVersionId: string
  /**
   * Unique identifier of the project.
   */
  projectId: string
  /**
   * Type of trigger that started the workflow run.
   */
  triggerType: TriggerType
  /**
   * Creation date of the workflow run.
   */
  createdAt?: Date
  /**
   * Last modification date of the workflow run.
   */
  updatedAt?: Date
  /**
   * Terminated date of the workflow run.
   */
  terminatedAt?: Date
  /**
   * Run duration of the workflow run.
   */
  duration?: string
  /**
   * Current status of the workflow run.
   */
  status: RunStatus
  /**
   * Current reason of the workflow run.
   */
  reason?: WorkflowRunReason
  /**
   * Task runs of the workflow run.
   */
  taskRuns: TaskRun[]
  /**
   * Environment variables of the workflow run.
   */
  environmentVariables: Record<string, string>
  /**
   * DSL of workflow in YAML format based from https://open-workflow-specification.org/schemas/1.0.3/workflow.yaml.
   */
  workflowDsl: string
  /**
   * Output of the workflow run.
   */
  output?: string
  /**
   * Error message of the workflow run.
   */
  errorMessage?: string
  /**
   * Region of the workflow run.
   */
  region: ScwRegion
  /**
   * The SRN of the workflow run.
   */
  srn: string
}


export interface UpdateWorkflowDefinitionRequestCronScheduleConfig {
  schedule?: string
  timezoneIdentifier?: string
  overlap?: ScheduleOverlapPolicy
}


export type CreateWorkflowDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name of the workflow definition.
   */
  name?: string
  /**
   * Description of the workflow.
   */
  description: string
  /**
   * UUID of the Scaleway Project containing the workflow.
   */
  projectId?: string
  /**
   * Environment variables of the workflow.
   */
  environmentVariables?: Record<string, string>
  /**
   * Timeout of the workflow in seconds.
   */
  workflowTimeout?: string
  /**
   * Configure a cron for the workflow.
   */
  cronSchedule?: CreateWorkflowDefinitionRequestCronScheduleConfig
  /**
   * Version of the workflow definition.
   */
  workflowVersion: CreateWorkflowDefinitionRequestWorkflowVersionConfig
}


export type DeleteWorkflowDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the workflow definition to delete.
   */
  workflowDefinitionId: string
}


export type DeleteWorkflowRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the workflow run to delete.
   */
  workflowRunId: string
}


export type GetWorkflowDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the workflow definition to get.
   */
  workflowDefinitionId: string
}


export type GetWorkflowRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the workflow run to get.
   */
  workflowRunId: string
}


export type ListWorkflowDefinitionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  page?: number
  pageSize?: number
  orderBy?: ListWorkflowDefinitionsRequestOrderBy
  name?: string
  /**
   *
   * One-of ('scope'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string
  /**
   *
   * One-of ('scope'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string
  statuses?: RunStatus[]
  createdAfter?: Date
  createdBefore?: Date
  triggerTypes?: TriggerType[]
}


export interface ListWorkflowDefinitionsResponse {
  workflowDefinitions: WorkflowDefinition[]
  totalCount: number
}


export type ListWorkflowRunsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  page?: number
  pageSize?: number
  orderBy?: ListWorkflowRunsRequestOrderBy
  workflowDefinitionId?: string
  /**
   *
   * One-of ('scope'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string
  /**
   *
   * One-of ('scope'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string
  statuses?: RunStatus[]
  createdAfter?: Date
  createdBefore?: Date
  triggerTypes?: TriggerType[]
  workflowDefinitionName?: string
}


export interface ListWorkflowRunsResponse {
  /**
   * List workflow runs.
   */
  workflowRuns: WorkflowRun[]
  /**
   * Total count of workflow runs.
   */
  totalCount: number
}


export type PauseWorkflowRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the workflow run to pause.
   */
  workflowRunId: string
}


export type ResumeWorkflowRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the workflow run to resume.
   */
  workflowRunId: string
}


export type StartWorkflowDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the workflow definition to start.
   */
  workflowDefinitionId: string
  /**
   * Contextual environment variables for this specific workflow run.
   */
  environmentVariables?: Record<string, string>
}


export type TerminateWorkflowRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the workflow run to terminate.
   */
  workflowRunId: string
}


export type UpdateWorkflowDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the workflow definition to update.
   */
  workflowDefinitionId: string
  /**
   * Name of the workflow definition.
   */
  name?: string
  /**
   * Description of the workflow.
   */
  description?: string
  /**
   * Environment variables of the workflow.
   */
  environmentVariables?: Record<string, string>
  /**
   * Timeout of the workflow in seconds.
   */
  workflowTimeout?: string
  /**
   * Configure a cron for the workflow.
   */
  cronSchedule?: UpdateWorkflowDefinitionRequestCronScheduleConfig
}


export type UpdateWorkflowVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the workflow version to update.
   */
  workflowVersionId: string
  /**
   * Name of the workflow version.
   */
  name?: string
  /**
   * Description of the workflow version.
   */
  description?: string
  /**
   * DSL of workflow in YAML format based from https://open-workflow-specification.org/schemas/1.0.3/workflow.yaml.
   */
  workflowDsl?: string
}


