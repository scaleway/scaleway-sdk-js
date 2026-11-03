// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DefaultTaskDefaultRunReason,
  ListWorkflowDefinitionsRequestOrderBy,
  ListWorkflowRunsRequestOrderBy,
  RunServerlessContainersTaskAction,
  RunServerlessContainersTaskReason,
  RunServerlessContainersTaskStatus,
  RunStatus,
  S3TaskReason,
  ScheduleOverlapPolicy,
  ServerlessJobsTaskServerlessJobRunReason,
  TriggerType,
  WorkflowRunReason,
} from './types.gen.js'


/** Lists all values of the enum {@link DefaultTaskDefaultRunReason}. */
export const DEFAULT_TASK_DEFAULT_RUN_REASONS: DefaultTaskDefaultRunReason[] = [
  'unknown_default_run_reason',
  'timeout',
  'cancellation',
  'technical_error',
  'functional_error',
]

/** Lists all values of the enum {@link ListWorkflowDefinitionsRequestOrderBy}. */
export const LIST_WORKFLOW_DEFINITIONS_REQUEST_ORDER_BIES: ListWorkflowDefinitionsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListWorkflowRunsRequestOrderBy}. */
export const LIST_WORKFLOW_RUNS_REQUEST_ORDER_BIES: ListWorkflowRunsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'terminated_at_asc',
  'terminated_at_desc',
  'duration_asc',
  'duration_desc',
  'workflow_definition_name_asc',
  'workflow_definition_name_desc',
]

/** Lists all values of the enum {@link RunServerlessContainersTaskAction}. */
export const RUN_SERVERLESS_CONTAINERS_TASK_ACTIONS: RunServerlessContainersTaskAction[] = [
  'unknown_action',
  'deploy',
  'delete',
  'get',
]

/** Lists all values of the enum {@link RunServerlessContainersTaskReason}. */
export const RUN_SERVERLESS_CONTAINERS_TASK_REASONS: RunServerlessContainersTaskReason[] = [
  'unknown_reason',
  'timeout',
  'cancellation',
  'technical_error',
  'functional_error',
]

/** Lists all values of the enum {@link RunServerlessContainersTaskStatus}. */
export const RUN_SERVERLESS_CONTAINERS_TASK_STATUSES: RunServerlessContainersTaskStatus[] = [
  'unknown_status',
  'ready',
  'deleting',
  'error',
  'updating',
  'creating',
  'locked',
  'upgrading',
  'rebalancing',
  'triggering',
]

/** Lists all values of the enum {@link RunStatus}. */
export const RUN_STATUSES: RunStatus[] = [
  'unknown_run_status',
  'initialized',
  'validated',
  'queued',
  'running',
  'succeeded',
  'failed',
  'interrupting',
  'interrupted',
  'pausing',
  'paused',
]

/** Lists all values of the enum {@link S3TaskReason}. */
export const S3_TASK_REASONS: S3TaskReason[] = [
  'unknown_default_run_reason',
  'timeout',
  'cancellation',
  'technical_error',
  'functional_error',
]

/** Lists all values of the enum {@link ScheduleOverlapPolicy}. */
export const SCHEDULE_OVERLAP_POLICIES: ScheduleOverlapPolicy[] = [
  'unknown_schedule_overlap_policy',
  'forbid',
  'buffer_one',
  'buffer_all',
  'allow_all',
]

/** Lists all values of the enum {@link ServerlessJobsTaskServerlessJobRunReason}. */
export const SERVERLESS_JOBS_TASK_SERVERLESS_JOB_RUN_REASONS: ServerlessJobsTaskServerlessJobRunReason[] = [
  'unknown_serverless_job_run_reason',
  'invalid_request',
  'timeout',
  'cancellation',
  'technical_error',
  'image_not_found',
  'invalid_image',
  'memory_usage_exceeded',
  'storage_usage_exceeded',
  'exited_with_error',
  'secret_disabled',
  'secret_not_found',
  'quota_exceeded',
]

/** Lists all values of the enum {@link TriggerType}. */
export const TRIGGER_TYPES: TriggerType[] = [
  'unknown_trigger_type',
  'manual',
  'scheduled',
]

/** Lists all values of the enum {@link WorkflowRunReason}. */
export const WORKFLOW_RUN_REASONS: WorkflowRunReason[] = [
  'unknown_workflow_run_reason',
  'timeout',
  'cancellation',
  'technical_error',
  'functional_error',
  'not_found',
]

