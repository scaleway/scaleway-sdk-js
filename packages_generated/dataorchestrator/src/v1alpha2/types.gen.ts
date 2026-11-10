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
  reason?: DefaultTaskDefaultRunReason | null
  /**
   * Error message of the task run.
   */
  errorMessage?: string | null
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
  reason?: RunServerlessContainersTaskReason | null
  /**
   * Error message of the task run.
   */
  errorMessage?: string | null
}


export interface S3Task {
  action: string
  reason?: S3TaskReason | null
  errorMessage?: string | null
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
  reason?: ServerlessJobsTaskServerlessJobRunReason | null
  /**
   * Exit code of the serverless-job run.
   */
  exitCode?: number | null
  /**
   * Error message of the serverless-job run.
   */
  errorMessage?: string | null
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
  reason?: WorkflowRunReason | null
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
  createdAt?: Date | null
  /**
   * Last modification date of the workflow version.
   */
  updatedAt?: Date | null
  /**
   * Deleted date of the workflow version.
   */
  deletedAt?: Date | null
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
  createdAt?: Date | null
  /**
   * Last modification date of the task run.
   */
  updatedAt?: Date | null
  /**
   * Terminated date of the task run.
   */
  terminatedAt?: Date | null
  /**
   * Run duration of the task run.
   */
  duration?: string | null
  /**
   * Status of the task run.
   */
  status: RunStatus
  /**
   * Output of the task run.
   */
  output?: string | null
  /**
   * Task run details for a serverless-job task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  serverlessJobTaskRunDetails?: ServerlessJobsTask | null
  /**
   * Task run details for a raise task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  raiseTaskRunDetails?: DefaultTask | null
  /**
   * Task run details for a set task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  setTaskRunDetails?: DefaultTask | null
  /**
   * Task run details for a call http task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  callHttpTaskRunDetails?: DefaultTask | null
  /**
   * Task run details for a wait task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  waitTaskRunDetails?: DefaultTask | null
  /**
   * Task run details for a serverless-function task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  serverlessFunctionTaskRunDetails?: DefaultTask | null
  /**
   * Task run details for a run-serverless-container task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  runServerlessContainerTaskRunDetails?: RunServerlessContainersTask | null
  /**
   * Task run details for a call-serverless-container task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  callServerlessContainerTaskRunDetails?: DefaultTask | null
  /**
   * Task run details for a S3 task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  s3TaskRunDetails?: S3Task | null
  /**
   * Task run details for a generative-api task.
   *
   * One-of ('taskRunDetails'): at most one of 'serverlessJobTaskRunDetails', 'raiseTaskRunDetails', 'setTaskRunDetails', 'callHttpTaskRunDetails', 'waitTaskRunDetails', 'serverlessFunctionTaskRunDetails', 'runServerlessContainerTaskRunDetails', 'callServerlessContainerTaskRunDetails', 's3TaskRunDetails', 'generativeApiTaskRunDetails' could be set.
   */
  generativeApiTaskRunDetails?: DefaultTask | null
  /**
   * Run iteration of the task (in loop or retry).
   */
  runIteration?: number | null
}


export interface CreateWorkflowDefinitionRequestCronScheduleConfig {
  schedule: string
  timezoneIdentifier: string
  overlap?: ScheduleOverlapPolicy | null
}


export interface CreateWorkflowDefinitionRequestWorkflowVersionConfig {
  name: string
  description: string
  workflowDsl?: string | null
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
  createdAt?: Date | null
  /**
   * Last modification date of the workflow definition.
   */
  updatedAt?: Date | null
  /**
   * Versions of workflow.
   */
  versions: WorkflowVersion[]
  /**
   * Configure a cron for the workflow.
   */
  cronSchedule?: CronSchedule | null
  /**
   * Environment variables of the workflow.
   */
  environmentVariables: Record<string, string>
  /**
   * Timeout of the workflow in seconds.
   */
  workflowTimeout?: string | null
  /**
   * Last workflow run information.
   */
  lastRun?: WorkflowRunInfo | null
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
  createdAt?: Date | null
  /**
   * Last modification date of the workflow run.
   */
  updatedAt?: Date | null
  /**
   * Terminated date of the workflow run.
   */
  terminatedAt?: Date | null
  /**
   * Run duration of the workflow run.
   */
  duration?: string | null
  /**
   * Current status of the workflow run.
   */
  status: RunStatus
  /**
   * Current reason of the workflow run.
   */
  reason?: WorkflowRunReason | null
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
  output?: string | null
  /**
   * Error message of the workflow run.
   */
  errorMessage?: string | null
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
  schedule?: string | null
  timezoneIdentifier?: string | null
  overlap?: ScheduleOverlapPolicy | null
}


export type CreateWorkflowDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Name of the workflow definition.
   */
  name?: string | null
  /**
   * Description of the workflow.
   */
  description: string
  /**
   * UUID of the Scaleway Project containing the workflow.
   */
  projectId?: string | null
  /**
   * Environment variables of the workflow.
   */
  environmentVariables?: Record<string, string> | null
  /**
   * Timeout of the workflow in seconds.
   */
  workflowTimeout?: string | null
  /**
   * Configure a cron for the workflow.
   */
  cronSchedule?: CreateWorkflowDefinitionRequestCronScheduleConfig | null
  /**
   * Version of the workflow definition.
   */
  workflowVersion: CreateWorkflowDefinitionRequestWorkflowVersionConfig
}


export type DeleteWorkflowDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the workflow definition to delete.
   */
  workflowDefinitionId: string
}


export type DeleteWorkflowRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the workflow run to delete.
   */
  workflowRunId: string
}


export type GetWorkflowDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the workflow definition to get.
   */
  workflowDefinitionId: string
}


export type GetWorkflowRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the workflow run to get.
   */
  workflowRunId: string
}


export type ListWorkflowDefinitionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  page?: number | null
  pageSize?: number | null
  orderBy?: ListWorkflowDefinitionsRequestOrderBy | null
  name?: string | null
  /**
   *
   * One-of ('scope'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string | null
  /**
   *
   * One-of ('scope'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string | null
  statuses?: RunStatus[] | null
  createdAfter?: Date | null
  createdBefore?: Date | null
  triggerTypes?: TriggerType[] | null
}


export interface ListWorkflowDefinitionsResponse {
  workflowDefinitions: WorkflowDefinition[]
  totalCount: number
}


export type ListWorkflowRunsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  page?: number | null
  pageSize?: number | null
  orderBy?: ListWorkflowRunsRequestOrderBy | null
  workflowDefinitionId?: string | null
  /**
   *
   * One-of ('scope'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string | null
  /**
   *
   * One-of ('scope'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string | null
  statuses?: RunStatus[] | null
  createdAfter?: Date | null
  createdBefore?: Date | null
  triggerTypes?: TriggerType[] | null
  workflowDefinitionName?: string | null
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
  region?: ScwRegion | null
  /**
   * UUID of the workflow run to pause.
   */
  workflowRunId: string
}


export type ResumeWorkflowRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the workflow run to resume.
   */
  workflowRunId: string
}


export type StartWorkflowDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the workflow definition to start.
   */
  workflowDefinitionId: string
  /**
   * Contextual environment variables for this specific workflow run.
   */
  environmentVariables?: Record<string, string> | null
}


export type TerminateWorkflowRunRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the workflow run to terminate.
   */
  workflowRunId: string
}


export type UpdateWorkflowDefinitionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the workflow definition to update.
   */
  workflowDefinitionId: string
  /**
   * Name of the workflow definition.
   */
  name?: string | null
  /**
   * Description of the workflow.
   */
  description?: string | null
  /**
   * Environment variables of the workflow.
   */
  environmentVariables?: Record<string, string> | null
  /**
   * Timeout of the workflow in seconds.
   */
  workflowTimeout?: string | null
  /**
   * Configure a cron for the workflow.
   */
  cronSchedule?: UpdateWorkflowDefinitionRequestCronScheduleConfig | null
}


export type UpdateWorkflowVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the workflow version to update.
   */
  workflowVersionId: string
  /**
   * Name of the workflow version.
   */
  name?: string | null
  /**
   * Description of the workflow version.
   */
  description?: string | null
  /**
   * DSL of workflow in YAML format based from https://open-workflow-specification.org/schemas/1.0.3/workflow.yaml.
   */
  workflowDsl?: string | null
}


