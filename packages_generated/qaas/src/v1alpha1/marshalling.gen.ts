
import {
	isJSONObject,
	resolveOneOf,
	unmarshalArrayOfObject,
	unmarshalDate,
	unmarshalMoney,
} from '@scaleway/sdk-client'
import type {
	DefaultValues,
} from '@scaleway/sdk-client'
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
		percevalCircuit: data.perceval_circuit,
		qiskitCircuit: data.qiskit_circuit,
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
		createdAt: unmarshalDate(data.created_at),
		description: data.description,
		finishedAt: unmarshalDate(data.finished_at),
		id: data.id,
		progressMessage: data.progress_message,
		startedAt: unmarshalDate(data.started_at),
		status: data.status,
		timeZone: data.time_zone,
		updatedAt: unmarshalDate(data.updated_at),
	} as Booking
}

export const unmarshalJob = (data: unknown): Job => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'Job' failed as data isn't a dictionary.`,
		)
	}

	return {
		createdAt: unmarshalDate(data.created_at),
		id: data.id,
		jobDuration: data.job_duration,
		modelId: data.model_id,
		name: data.name,
		parameters: data.parameters,
		progressMessage: data.progress_message,
		resultDistribution: data.result_distribution,
		sessionId: data.session_id,
		startedAt: unmarshalDate(data.started_at),
		status: data.status,
		tags: data.tags,
		updatedAt: unmarshalDate(data.updated_at),
	} as Job
}

export const unmarshalModel = (data: unknown): Model => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'Model' failed as data isn't a dictionary.`,
		)
	}

	return {
		createdAt: unmarshalDate(data.created_at),
		id: data.id,
		projectId: data.project_id,
		url: data.url,
	} as Model
}

const unmarshalPlatformBookingRequirement = (
	data: unknown,
): PlatformBookingRequirement => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'PlatformBookingRequirement' failed as data isn't a dictionary.`,
		)
	}

	return {
		maxBookingPerDay: data.max_booking_per_day,
		maxBookingPerWeek: data.max_booking_per_week,
		maxCancellationDuration: data.max_cancellation_duration,
		maxDuration: data.max_duration,
		maxPlanificationDuration: data.max_planification_duration,
		minDuration: data.min_duration,
		minPlanificationDuration: data.min_planification_duration,
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
		bookingRequirement: data.booking_requirement
			? unmarshalPlatformBookingRequirement(data.booking_requirement)
			: undefined,
		description: data.description,
		documentationUrl: data.documentation_url,
		hardware: data.hardware
			? unmarshalPlatformHardware(data.hardware)
			: undefined,
		id: data.id,
		isBookable: data.is_bookable,
		maxCircuitCount: data.max_circuit_count,
		maxQubitCount: data.max_qubit_count,
		maxShotCount: data.max_shot_count,
		metadata: data.metadata,
		name: data.name,
		pricePerCircuit: data.price_per_circuit
			? unmarshalMoney(data.price_per_circuit)
			: undefined,
		pricePerHour: data.price_per_hour
			? unmarshalMoney(data.price_per_hour)
			: undefined,
		pricePerShot: data.price_per_shot
			? unmarshalMoney(data.price_per_shot)
			: undefined,
		providerName: data.provider_name,
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
		applicationId: data.application_id,
		attachedSessionIds: data.attached_session_ids,
		createdAt: unmarshalDate(data.created_at),
		finishedAt: unmarshalDate(data.finished_at),
		id: data.id,
		input: data.input,
		name: data.name,
		platformId: data.platform_id,
		progress: data.progress,
		progressMessage: data.progress_message,
		projectId: data.project_id,
		startedAt: unmarshalDate(data.started_at),
		status: data.status,
		tags: data.tags,
		updatedAt: unmarshalDate(data.updated_at),
	} as Process
}

export const unmarshalSession = (data: unknown): Session => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'Session' failed as data isn't a dictionary.`,
		)
	}

	return {
		bookingId: data.booking_id,
		createdAt: unmarshalDate(data.created_at),
		deduplicationId: data.deduplication_id,
		finishedJobCount: data.finished_job_count,
		id: data.id,
		maxDuration: data.max_duration,
		maxIdleDuration: data.max_idle_duration,
		modelId: data.model_id,
		name: data.name,
		originId: data.origin_id,
		originType: data.origin_type,
		parameters: data.parameters,
		platformId: data.platform_id,
		progressMessage: data.progress_message,
		projectId: data.project_id,
		startedAt: unmarshalDate(data.started_at),
		status: data.status,
		tags: data.tags,
		terminatedAt: unmarshalDate(data.terminated_at),
		updatedAt: unmarshalDate(data.updated_at),
		waitingJobCount: data.waiting_job_count,
	} as Session
}

export const unmarshalListApplicationsResponse = (
	data: unknown,
): ListApplicationsResponse => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'ListApplicationsResponse' failed as data isn't a dictionary.`,
		)
	}

	return {
		applications: unmarshalArrayOfObject(
			data.applications,
			unmarshalApplication,
		),
		totalCount: data.total_count,
	} as ListApplicationsResponse
}

export const unmarshalListBookingsResponse = (
	data: unknown,
): ListBookingsResponse => {
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
		createdAt: unmarshalDate(data.created_at),
		jobId: data.job_id,
		result: data.result,
		url: data.url,
	} as JobResult
}

export const unmarshalListJobResultsResponse = (
	data: unknown,
): ListJobResultsResponse => {
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

export const unmarshalListModelsResponse = (
	data: unknown,
): ListModelsResponse => {
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

export const unmarshalListPlatformsResponse = (
	data: unknown,
): ListPlatformsResponse => {
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
		createdAt: unmarshalDate(data.created_at),
		processId: data.process_id,
		result: data.result,
	} as ProcessResult
}

export const unmarshalListProcessResultsResponse = (
	data: unknown,
): ListProcessResultsResponse => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'ListProcessResultsResponse' failed as data isn't a dictionary.`,
		)
	}

	return {
		processResults: unmarshalArrayOfObject(
			data.process_results,
			unmarshalProcessResult,
		),
		totalCount: data.total_count,
	} as ListProcessResultsResponse
}

export const unmarshalListProcessesResponse = (
	data: unknown,
): ListProcessesResponse => {
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

export const unmarshalListSessionACLsResponse = (
	data: unknown,
): ListSessionACLsResponse => {
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

export const unmarshalListSessionsResponse = (
	data: unknown,
): ListSessionsResponse => {
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
		{ param: 'perceval_circuit', value: request.percevalCircuit },
		{ param: 'qiskit_circuit', value: request.qiskitCircuit },
	]),
})

export const marshalCreateJobRequest = (
	request: CreateJobRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	circuit: marshalJobCircuit(request.circuit, defaults),
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
	booking_demand:
		request.bookingDemand !== undefined
			? marshalCreateSessionRequestBookingDemand(
					request.bookingDemand,
					defaults,
				)
			: undefined,
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
