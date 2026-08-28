// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  JobRunReason,
  JobRunState,
  ListJobDefinitionsRequestOrderBy,
  ListJobRunsRequestOrderBy,
  ListTriggersRequestOrderBy,
} from './types.gen.js'


/** Lists all values of the enum {@link JobRunReason}. */
export const JOB_RUN_REASONS: JobRunReason[] = [
  'unknown_reason',
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
  'application_not_started',
]

/** Lists all values of the enum {@link JobRunState}. */
export const JOB_RUN_STATES: JobRunState[] = [
  'unknown_state',
  'initialized',
  'validated',
  'queued',
  'running',
  'succeeded',
  'failed',
  'interrupting',
  'interrupted',
  'retrying',
]

/** Lists all values of the enum {@link ListJobDefinitionsRequestOrderBy}. */
export const LIST_JOB_DEFINITIONS_REQUEST_ORDER_BIES: ListJobDefinitionsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListJobRunsRequestOrderBy}. */
export const LIST_JOB_RUNS_REQUEST_ORDER_BIES: ListJobRunsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListTriggersRequestOrderBy}. */
export const LIST_TRIGGERS_REQUEST_ORDER_BIES: ListTriggersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

