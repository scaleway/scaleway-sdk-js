// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ApplicationType,
  BookingStatus,
  JobStatus,
  ListApplicationsRequestOrderBy,
  ListBookingsRequestOrderBy,
  ListJobResultsRequestOrderBy,
  ListJobsRequestOrderBy,
  ListModelsRequestOrderBy,
  ListPlatformsRequestOrderBy,
  ListProcessResultsRequestOrderBy,
  ListProcessesRequestOrderBy,
  ListSessionACLsRequestOrderBy,
  ListSessionsRequestOrderBy,
  PlatformAvailability,
  PlatformTechnology,
  PlatformType,
  ProcessStatus,
  SessionAccess,
  SessionOriginType,
  SessionStatus,
} from './types.gen.js'


/** Lists all values of the enum {@link ApplicationType}. */
export const APPLICATION_TYPES: ApplicationType[] = [
  'unknown_type',
  'vqe',
]

/** Lists all values of the enum {@link BookingStatus}. */
export const BOOKING_STATUSES: BookingStatus[] = [
  'unknown_status',
  'waiting',
  'validating',
  'validated',
  'cancelling',
  'cancelled',
  'error',
]

/** Lists all values of the enum {@link JobStatus}. */
export const JOB_STATUSES: JobStatus[] = [
  'unknown_status',
  'waiting',
  'error',
  'running',
  'completed',
  'cancelling',
  'cancelled',
]

/** Lists all values of the enum {@link ListApplicationsRequestOrderBy}. */
export const LIST_APPLICATIONS_REQUEST_ORDER_BIES: ListApplicationsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'type_asc',
  'type_desc',
]

/** Lists all values of the enum {@link ListBookingsRequestOrderBy}. */
export const LIST_BOOKINGS_REQUEST_ORDER_BIES: ListBookingsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'started_at_desc',
  'started_at_asc',
]

/** Lists all values of the enum {@link ListJobResultsRequestOrderBy}. */
export const LIST_JOB_RESULTS_REQUEST_ORDER_BIES: ListJobResultsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
]

/** Lists all values of the enum {@link ListJobsRequestOrderBy}. */
export const LIST_JOBS_REQUEST_ORDER_BIES: ListJobsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'status_asc',
  'status_desc',
  'platform_name_asc',
  'platform_name_desc',
  'name_asc',
  'name_desc',
  'session_name_asc',
  'session_name_desc',
]

/** Lists all values of the enum {@link ListModelsRequestOrderBy}. */
export const LIST_MODELS_REQUEST_ORDER_BIES: ListModelsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
]

/** Lists all values of the enum {@link ListPlatformsRequestOrderBy}. */
export const LIST_PLATFORMS_REQUEST_ORDER_BIES: ListPlatformsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'provider_name_asc',
  'provider_name_desc',
  'type_asc',
  'type_desc',
  'technology_asc',
  'technology_desc',
  'backend_name_asc',
  'backend_name_desc',
]

/** Lists all values of the enum {@link ListProcessResultsRequestOrderBy}. */
export const LIST_PROCESS_RESULTS_REQUEST_ORDER_BIES: ListProcessResultsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
]

/** Lists all values of the enum {@link ListProcessesRequestOrderBy}. */
export const LIST_PROCESSES_REQUEST_ORDER_BIES: ListProcessesRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'name_asc',
  'name_desc',
  'started_at_asc',
  'started_at_desc',
  'status_asc',
  'status_desc',
]

/** Lists all values of the enum {@link ListSessionACLsRequestOrderBy}. */
export const LIST_SESSION_AC_LS_REQUEST_ORDER_BIES: ListSessionACLsRequestOrderBy[] = [
  'access_asc',
  'access_desc',
]

/** Lists all values of the enum {@link ListSessionsRequestOrderBy}. */
export const LIST_SESSIONS_REQUEST_ORDER_BIES: ListSessionsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'started_at_asc',
  'started_at_desc',
  'status_asc',
  'status_desc',
  'created_at_desc',
  'created_at_asc',
]

/** Lists all values of the enum {@link PlatformAvailability}. */
export const PLATFORM_AVAILABILITIES: PlatformAvailability[] = [
  'unknown_availability',
  'available',
  'shortage',
  'scarce',
  'maintenance',
]

/** Lists all values of the enum {@link PlatformTechnology}. */
export const PLATFORM_TECHNOLOGIES: PlatformTechnology[] = [
  'unknown_technology',
  'photonic',
  'general_purpose',
  'trapped_ion',
  'superconducting',
  'neutral_atom',
]

/** Lists all values of the enum {@link PlatformType}. */
export const PLATFORM_TYPES: PlatformType[] = [
  'unknown_type',
  'simulator',
  'qpu',
]

/** Lists all values of the enum {@link ProcessStatus}. */
export const PROCESS_STATUSES: ProcessStatus[] = [
  'unknown_status',
  'error',
  'starting',
  'running',
  'completed',
  'cancelling',
  'cancelled',
]

/** Lists all values of the enum {@link SessionAccess}. */
export const SESSION_ACCESSES: SessionAccess[] = [
  'unknown_access',
  'full',
  'read_session',
  'read_write_session',
  'read_job_result',
  'read_job_circuit',
  'read_job',
  'read_write_job',
]

/** Lists all values of the enum {@link SessionOriginType}. */
export const SESSION_ORIGIN_TYPES: SessionOriginType[] = [
  'unknown_origin_type',
  'customer',
  'process',
]

/** Lists all values of the enum {@link SessionStatus}. */
export const SESSION_STATUSES: SessionStatus[] = [
  'unknown_status',
  'running',
  'stopped',
  'starting',
  'stopping',
]

