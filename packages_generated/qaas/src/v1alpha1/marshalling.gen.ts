// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import { isJSONObject, marshalBlobToScwFile, marshalDecimal, marshalMoney, marshalScwFile, marshalTimeSeries, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalDecimal, unmarshalMapOfObject, unmarshalMoney, unmarshalScwFile, unmarshalServiceInfo, unmarshalTimeSeries, unmarshalTimeSeriesPoint } from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, DefaultValues } from '@scaleway/sdk-client'
import type {
  JobCircuit,
  Application,
  Booking,
  Job,
  Model,
  PlatformBookingRequirement,
  PlatformHardware,
  Platform,
  Process,
  Session,
  ListApplicationsResponse,
  ListBookingsResponse,
  JobResult,
  ListJobResultsResponse,
  ListJobsResponse,
  ListModelsResponse,
  ListPlatformsResponse,
  ProcessResult,
  ListProcessResultsResponse,
  ListProcessesResponse,
  ListSessionACLsResponse,
  ListSessionsResponse,
  CreateJobRequest,
  CreateModelRequest,
  CreateProcessRequest,
  CreateSessionRequestBookingDemand,
  CreateSessionRequest,
  UpdateBookingRequest,
  UpdateJobRequest,
  UpdateProcessRequest,
  UpdateSessionRequest,
} from './types.gen.js'

export const unmarshalJobCircuit = (data: unknown): JobCircuit => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'JobCircuit' failed as data isn't a dictionary.`,
    )
  }

  return {
    percevalCircuit: data.perceval_circuit ?? null,
    qiskitCircuit: data.qiskit_circuit ?? null,
  } as JobCircuit
}

export const unmarshalApplication = (data: unknown): Application => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Application' failed as data isn't a dictionary.`,
    )
  }

  return {
    compatiblePlatformIds: data.compatible_platform_ids,
    id: data.id,
    inputTemplate: data.input_template,
    name: data.name,
    srn: data.srn,
    type: data.type,
  } as Application
}

export const unmarshalBooking = (data: unknown): Booking => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Booking' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at) ?? null,
    description: data.description,
    finishedAt: unmarshalDate(data.finished_at) ?? null,
    id: data.id,
    progressMessage: data.progress_message,
    srn: data.srn,
    startedAt: unmarshalDate(data.started_at) ?? null,
    status: data.status,
    timeZone: data.time_zone ?? null,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
  } as Booking
}

export const unmarshalJob = (data: unknown): Job => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Job' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at) ?? null,
    id: data.id,
    jobDuration: data.job_duration ?? null,
    modelId: data.model_id ?? null,
    name: data.name,
    parameters: data.parameters ?? null,
    progressMessage: data.progress_message ?? null,
    resultDistribution: data.result_distribution ?? null,
    sessionId: data.session_id,
    srn: data.srn,
    startedAt: unmarshalDate(data.started_at) ?? null,
    status: data.status,
    tags: data.tags ?? null,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
  } as Job
}

export const unmarshalModel = (data: unknown): Model => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Model' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at) ?? null,
    id: data.id,
    projectId: data.project_id,
    srn: data.srn,
    url: data.url ?? null,
  } as Model
}

const unmarshalPlatformBookingRequirement = (data: unknown): PlatformBookingRequirement => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PlatformBookingRequirement' failed as data isn't a dictionary.`,
    )
  }

  return {
    maxBookingPerDay: data.max_booking_per_day,
    maxBookingPerWeek: data.max_booking_per_week,
    maxCancellationDuration: data.max_cancellation_duration ?? null,
    maxDuration: data.max_duration ?? null,
    maxPlanificationDuration: data.max_planification_duration ?? null,
    minDuration: data.min_duration ?? null,
    minPlanificationDuration: data.min_planification_duration ?? null,
  } as PlatformBookingRequirement
}

const unmarshalPlatformHardware = (data: unknown): PlatformHardware => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PlatformHardware' failed as data isn't a dictionary.`,
    )
  }

  return {
    gpus: data.gpus,
    gpusNetwork: data.gpus_network,
    name: data.name,
    ram: data.ram,
    vcpus: data.vcpus,
    vram: data.vram,
  } as PlatformHardware
}

export const unmarshalPlatform = (data: unknown): Platform => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Platform' failed as data isn't a dictionary.`,
    )
  }

  return {
    availability: data.availability,
    backendName: data.backend_name,
    bookingRequirement: data.booking_requirement ? unmarshalPlatformBookingRequirement(data.booking_requirement) : null,
    description: data.description,
    documentationUrl: data.documentation_url,
    hardware: data.hardware ? unmarshalPlatformHardware(data.hardware) : null,
    id: data.id,
    isBookable: data.is_bookable,
    maxCircuitCount: data.max_circuit_count,
    maxQubitCount: data.max_qubit_count,
    maxShotCount: data.max_shot_count,
    metadata: data.metadata,
    name: data.name,
    pricePerCircuit: data.price_per_circuit ? unmarshalMoney(data.price_per_circuit) : null,
    pricePerHour: data.price_per_hour ? unmarshalMoney(data.price_per_hour) : null,
    pricePerShot: data.price_per_shot ? unmarshalMoney(data.price_per_shot) : null,
    providerName: data.provider_name,
    srn: data.srn,
    technology: data.technology,
    type: data.type,
    version: data.version,
  } as Platform
}

export const unmarshalProcess = (data: unknown): Process => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Process' failed as data isn't a dictionary.`,
    )
  }

  return {
    applicationId: data.application_id ?? null,
    attachedSessionIds: data.attached_session_ids,
    createdAt: unmarshalDate(data.created_at) ?? null,
    finishedAt: unmarshalDate(data.finished_at) ?? null,
    id: data.id,
    input: data.input ?? null,
    name: data.name,
    platformId: data.platform_id ?? null,
    progress: data.progress ?? null,
    progressMessage: data.progress_message ?? null,
    projectId: data.project_id,
    srn: data.srn,
    startedAt: unmarshalDate(data.started_at) ?? null,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
  } as Process
}

export const unmarshalSession = (data: unknown): Session => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Session' failed as data isn't a dictionary.`,
    )
  }

  return {
    bookingId: data.booking_id ?? null,
    createdAt: unmarshalDate(data.created_at) ?? null,
    deduplicationId: data.deduplication_id,
    finishedJobCount: data.finished_job_count,
    id: data.id,
    maxDuration: data.max_duration ?? null,
    maxIdleDuration: data.max_idle_duration ?? null,
    modelId: data.model_id ?? null,
    name: data.name,
    originId: data.origin_id ?? null,
    originType: data.origin_type,
    parameters: data.parameters ?? null,
    platformId: data.platform_id,
    progressMessage: data.progress_message ?? null,
    projectId: data.project_id,
    srn: data.srn,
    startedAt: unmarshalDate(data.started_at) ?? null,
    status: data.status,
    tags: data.tags ?? null,
    terminatedAt: unmarshalDate(data.terminated_at) ?? null,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
    waitingJobCount: data.waiting_job_count,
  } as Session
}

export const unmarshalListApplicationsResponse = (data: unknown): ListApplicationsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListApplicationsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    applications: unmarshalArrayOfObject(data.applications, unmarshalApplication),
    totalCount: data.total_count,
  } as ListApplicationsResponse
}

export const unmarshalListBookingsResponse = (data: unknown): ListBookingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListBookingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    bookings: unmarshalArrayOfObject(data.bookings, unmarshalBooking),
    totalCount: data.total_count,
  } as ListBookingsResponse
}

const unmarshalJobResult = (data: unknown): JobResult => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'JobResult' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at) ?? null,
    jobId: data.job_id,
    result: data.result ?? null,
    url: data.url ?? null,
  } as JobResult
}

export const unmarshalListJobResultsResponse = (data: unknown): ListJobResultsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListJobResultsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    jobResults: unmarshalArrayOfObject(data.job_results, unmarshalJobResult),
    totalCount: data.total_count,
  } as ListJobResultsResponse
}

export const unmarshalListJobsResponse = (data: unknown): ListJobsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListJobsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    jobs: unmarshalArrayOfObject(data.jobs, unmarshalJob),
    totalCount: data.total_count,
  } as ListJobsResponse
}

export const unmarshalListModelsResponse = (data: unknown): ListModelsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListModelsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    models: unmarshalArrayOfObject(data.models, unmarshalModel),
    totalCount: data.total_count,
  } as ListModelsResponse
}

export const unmarshalListPlatformsResponse = (data: unknown): ListPlatformsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPlatformsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    platforms: unmarshalArrayOfObject(data.platforms, unmarshalPlatform),
    totalCount: data.total_count,
  } as ListPlatformsResponse
}

const unmarshalProcessResult = (data: unknown): ProcessResult => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ProcessResult' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at) ?? null,
    processId: data.process_id,
    result: data.result,
  } as ProcessResult
}

export const unmarshalListProcessResultsResponse = (data: unknown): ListProcessResultsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListProcessResultsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    processResults: unmarshalArrayOfObject(data.process_results, unmarshalProcessResult),
    totalCount: data.total_count,
  } as ListProcessResultsResponse
}

export const unmarshalListProcessesResponse = (data: unknown): ListProcessesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListProcessesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    processes: unmarshalArrayOfObject(data.processes, unmarshalProcess),
    totalCount: data.total_count,
  } as ListProcessesResponse
}

export const unmarshalListSessionACLsResponse = (data: unknown): ListSessionACLsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSessionACLsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    acls: data.acls,
    totalCount: data.total_count,
  } as ListSessionACLsResponse
}

export const unmarshalListSessionsResponse = (data: unknown): ListSessionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSessionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    sessions: unmarshalArrayOfObject(data.sessions, unmarshalSession),
    totalCount: data.total_count,
  } as ListSessionsResponse
}

const marshalJobCircuit = (
  request: JobCircuit,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf([
    {param: 'perceval_circuit',
      value: request.percevalCircuit,
    },
    {param: 'qiskit_circuit',
      value: request.qiskitCircuit,
    },
  ]),
})

export const marshalCreateJobRequest = (
  request: CreateJobRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  circuit:  marshalJobCircuit(request.circuit, defaults),
  max_duration: request.maxDuration,
  model_id: request.modelId,
  name: request.name,
  parameters: request.parameters,
  session_id: request.sessionId,
  tags: request.tags,
})

export const marshalCreateModelRequest = (
  request: CreateModelRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  payload: request.payload,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalCreateProcessRequest = (
  request: CreateProcessRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  application_id: request.applicationId,
  input: request.input,
  name: request.name,
  platform_id: request.platformId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

const marshalCreateSessionRequestBookingDemand = (
  request: CreateSessionRequestBookingDemand,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  finished_at: request.finishedAt,
  started_at: request.startedAt,
  time_zone: request.timeZone,
})

export const marshalCreateSessionRequest = (
  request: CreateSessionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  booking_demand: ((request.bookingDemand != null) ?  marshalCreateSessionRequestBookingDemand(request.bookingDemand, defaults): undefined),
  deduplication_id: request.deduplicationId,
  max_duration: request.maxDuration,
  max_idle_duration: request.maxIdleDuration,
  model_id: request.modelId,
  name: request.name,
  parameters: request.parameters,
  platform_id: request.platformId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalUpdateBookingRequest = (
  request: UpdateBookingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
})

export const marshalUpdateJobRequest = (
  request: UpdateJobRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateProcessRequest = (
  request: UpdateProcessRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateSessionRequest = (
  request: UpdateSessionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_duration: request.maxDuration,
  max_idle_duration: request.maxIdleDuration,
  name: request.name,
  tags: request.tags,
})
