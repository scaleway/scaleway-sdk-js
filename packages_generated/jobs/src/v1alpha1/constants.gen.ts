// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  JobRunState,
  ListJobDefinitionsRequestOrderBy,
  ListJobRunsRequestOrderBy,
} from './types.gen.js'


/** Lists all values of the enum {@link JobRunState}. */
export const JOB_RUN_STATES: JobRunState[] = [
  'unknown_state',
  'queued',
  'scheduled',
  'running',
  'succeeded',
  'failed',
  'canceled',
  'internal_error',
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

