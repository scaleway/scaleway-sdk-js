// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  BookingStatus,
  JobStatus,
  ProcessStatus,
  SessionStatus,
} from './types.gen'

/** Lists transient statutes of the enum {@link BookingStatus}. */
export const BOOKING_TRANSIENT_STATUSES: BookingStatus[] = [
  'waiting',
  'validating',
  'cancelling',
]

/** Lists transient statutes of the enum {@link JobStatus}. */
export const JOB_TRANSIENT_STATUSES: JobStatus[] = [
  'waiting',
  'running',
  'cancelling',
]

/** Lists transient statutes of the enum {@link ProcessStatus}. */
export const PROCESS_TRANSIENT_STATUSES: ProcessStatus[] = [
  'starting',
  'running',
  'cancelling',
]

/** Lists transient statutes of the enum {@link SessionStatus}. */
export const SESSION_TRANSIENT_STATUSES: SessionStatus[] = [
  'starting',
  'stopping',
]
