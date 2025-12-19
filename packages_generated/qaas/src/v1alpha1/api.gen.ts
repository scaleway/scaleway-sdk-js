// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import type { WaitForOptions, } from '@scaleway/sdk-client'
import {BOOKING_TRANSIENT_STATUSES as BOOKING_TRANSIENT_STATUSES_QAAS,JOB_TRANSIENT_STATUSES as JOB_TRANSIENT_STATUSES_QAAS,PROCESS_TRANSIENT_STATUSES as PROCESS_TRANSIENT_STATUSES_QAAS,SESSION_TRANSIENT_STATUSES as SESSION_TRANSIENT_STATUSES_QAAS,} from './content.gen.js'
import {
  unmarshalApplication,
  unmarshalBooking,
  marshalCreateJobRequest,
  marshalCreateModelRequest,
  marshalCreateProcessRequest,
  marshalCreateSessionRequest,
  unmarshalJob,
  unmarshalJobCircuit,
  unmarshalListApplicationsResponse,
  unmarshalListBookingsResponse,
  unmarshalListJobResultsResponse,
  unmarshalListJobsResponse,
  unmarshalListModelsResponse,
  unmarshalListPlatformsResponse,
  unmarshalListProcessResultsResponse,
  unmarshalListProcessesResponse,
  unmarshalListSessionACLsResponse,
  unmarshalListSessionsResponse,
  unmarshalModel,
  unmarshalPlatform,
  unmarshalProcess,
  unmarshalSession,
  marshalUpdateBookingRequest,
  marshalUpdateJobRequest,
  marshalUpdateProcessRequest,
  marshalUpdateSessionRequest,
} from './marshalling.gen.js'
import type {
  Application,
  Booking,
  CancelJobRequest,
  CancelProcessRequest,
  CreateJobRequest,
  CreateModelRequest,
  CreateProcessRequest,
  CreateSessionRequest,
  DeleteJobRequest,
  DeleteProcessRequest,
  DeleteSessionRequest,
  GetApplicationRequest,
  GetBookingRequest,
  GetJobCircuitRequest,
  GetJobRequest,
  GetModelRequest,
  GetPlatformRequest,
  GetProcessRequest,
  GetSessionRequest,
  Job,
  JobCircuit,
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListBookingsRequest,
  ListBookingsResponse,
  ListJobResultsRequest,
  ListJobResultsResponse,
  ListJobsRequest,
  ListJobsResponse,
  ListModelsRequest,
  ListModelsResponse,
  ListPlatformsRequest,
  ListPlatformsResponse,
  ListProcessResultsRequest,
  ListProcessResultsResponse,
  ListProcessesRequest,
  ListProcessesResponse,
  ListSessionACLsRequest,
  ListSessionACLsResponse,
  ListSessionsRequest,
  ListSessionsResponse,
  Model,
  Platform,
  Process,
  Session,
  TerminateSessionRequest,
  UpdateBookingRequest,
  UpdateJobRequest,
  UpdateProcessRequest,
  UpdateSessionRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Quantum as a Service API.

This API allows you to allocate and program Quantum Processing Units (QPUs) to run quantum algorithms.
 */
export class API extends ParentAPI {
  /**
   * Get job information. Retrieve information about the provided **job ID**, mainly used to get the current status.
   *
   * @param request - The request {@link GetJobRequest}
   * @returns A Promise of Job
   */
  getJob = (request: Readonly<GetJobRequest>) =>
    this.client.fetch<Job>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/jobs/${validatePathParam('jobId', request.jobId)}`,
      },
      unmarshalJob,
    )
  
  /**
   * Waits for {@link Job} to be in a final state.
   *
   * @param request - The request {@link GetJobRequest}
   * @param options - The waiting options
   * @returns A Promise of Job
   */
  waitForJob = (
    request: Readonly<GetJobRequest>,
    options?: Readonly<WaitForOptions<Job>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!JOB_TRANSIENT_STATUSES_QAAS.includes(res.status))),
      this.getJob,
      request,
      options,
    )

  
  protected pageOfListJobs = (request: Readonly<ListJobsRequest> = {}) =>
    this.client.fetch<ListJobsResponse>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/jobs`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['tags', request.tags],  
          ...Object.entries(resolveOneOf([
            {param: 'session_id',
              value: request.sessionId,
            },
            {default: this.client.settings.defaultProjectId,param: 'project_id',
              value: request.projectId,
            },
          ])),
        ),
      },
      unmarshalListJobsResponse,
    )
  
  /**
   * List all jobs within a project or session. Retrieve information about all jobs within a given session.
   *
   * @param request - The request {@link ListJobsRequest}
   * @returns A Promise of ListJobsResponse
   */
  listJobs = (request: Readonly<ListJobsRequest> = {}) =>
    enrichForPagination('jobs', this.pageOfListJobs, request)

  
  protected pageOfListJobResults = (request: Readonly<ListJobResultsRequest>) =>
    this.client.fetch<ListJobResultsResponse>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/jobs/${validatePathParam('jobId', request.jobId)}/results`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListJobResultsResponse,
    )
  
  /**
   * List all results of a job. Retrieve all intermediate and final results of a job.
   *
   * @param request - The request {@link ListJobResultsRequest}
   * @returns A Promise of ListJobResultsResponse
   */
  listJobResults = (request: Readonly<ListJobResultsRequest>) =>
    enrichForPagination('jobResults', this.pageOfListJobResults, request)

  
  /**
   * Create a job. Create a job to be executed inside a QPU session.
   *
   * @param request - The request {@link CreateJobRequest}
   * @returns A Promise of Job
   */
  createJob = (request: Readonly<CreateJobRequest>) =>
    this.client.fetch<Job>(
      {
        body: JSON.stringify(
          marshalCreateJobRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/qaas/v1alpha1/jobs`,
      },
      unmarshalJob,
    )

  
  /**
   * Update job information. Update job information about the provided **job ID**.
   *
   * @param request - The request {@link UpdateJobRequest}
   * @returns A Promise of Job
   */
  updateJob = (request: Readonly<UpdateJobRequest>) =>
    this.client.fetch<Job>(
      {
        body: JSON.stringify(
          marshalUpdateJobRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/qaas/v1alpha1/jobs/${validatePathParam('jobId', request.jobId)}`,
      },
      unmarshalJob,
    )

  
  /**
   * Cancel a job. Cancel the job corresponding to the provided **job ID**.
   *
   * @param request - The request {@link CancelJobRequest}
   * @returns A Promise of Job
   */
  cancelJob = (request: Readonly<CancelJobRequest>) =>
    this.client.fetch<Job>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/qaas/v1alpha1/jobs/${validatePathParam('jobId', request.jobId)}/cancel`,
      },
      unmarshalJob,
    )

  
  /**
   * Delete a job. Delete the job corresponding to the provided **job ID**.
   *
   * @param request - The request {@link DeleteJobRequest}
   */
  deleteJob = (request: Readonly<DeleteJobRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/qaas/v1alpha1/jobs/${validatePathParam('jobId', request.jobId)}`,
      },
    )

  
  /**
   * Get a job circuit. Retrieve the circuit of the provided **job ID**.
   *
   * @param request - The request {@link GetJobCircuitRequest}
   * @returns A Promise of JobCircuit
   */
  getJobCircuit = (request: Readonly<GetJobCircuitRequest>) =>
    this.client.fetch<JobCircuit>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/jobs/${validatePathParam('jobId', request.jobId)}/circuit`,
      },
      unmarshalJobCircuit,
    )

  
  /**
   * Get platform information. Retrieve information about the provided **platform ID**, such as provider name, technology, and type.
   *
   * @param request - The request {@link GetPlatformRequest}
   * @returns A Promise of Platform
   */
  getPlatform = (request: Readonly<GetPlatformRequest>) =>
    this.client.fetch<Platform>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/platforms/${validatePathParam('platformId', request.platformId)}`,
      },
      unmarshalPlatform,
    )

  
  protected pageOfListPlatforms = (request: Readonly<ListPlatformsRequest> = {}) =>
    this.client.fetch<ListPlatformsResponse>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/platforms`,
        urlParams: urlParams(
          ['backend_name', request.backendName],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['platform_technology', request.platformTechnology],
          ['platform_type', request.platformType],
          ['provider_name', request.providerName],
        ),
      },
      unmarshalListPlatformsResponse,
    )
  
  /**
   * List all available platforms. Retrieve information about all platforms.
   *
   * @param request - The request {@link ListPlatformsRequest}
   * @returns A Promise of ListPlatformsResponse
   */
  listPlatforms = (request: Readonly<ListPlatformsRequest> = {}) =>
    enrichForPagination('platforms', this.pageOfListPlatforms, request)

  
  /**
   * Get session information. Retrieve information about the provided **session ID**, such as name and status.
   *
   * @param request - The request {@link GetSessionRequest}
   * @returns A Promise of Session
   */
  getSession = (request: Readonly<GetSessionRequest>) =>
    this.client.fetch<Session>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/sessions/${validatePathParam('sessionId', request.sessionId)}`,
      },
      unmarshalSession,
    )
  
  /**
   * Waits for {@link Session} to be in a final state.
   *
   * @param request - The request {@link GetSessionRequest}
   * @param options - The waiting options
   * @returns A Promise of Session
   */
  waitForSession = (
    request: Readonly<GetSessionRequest>,
    options?: Readonly<WaitForOptions<Session>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!SESSION_TRANSIENT_STATUSES_QAAS.includes(res.status))),
      this.getSession,
      request,
      options,
    )

  
  protected pageOfListSessions = (request: Readonly<ListSessionsRequest> = {}) =>
    this.client.fetch<ListSessionsResponse>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/sessions`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['platform_id', request.platformId],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['tags', request.tags],
        ),
      },
      unmarshalListSessionsResponse,
    )
  
  /**
   * List all sessions. Retrieve information about all QPU sessions.
   *
   * @param request - The request {@link ListSessionsRequest}
   * @returns A Promise of ListSessionsResponse
   */
  listSessions = (request: Readonly<ListSessionsRequest> = {}) =>
    enrichForPagination('sessions', this.pageOfListSessions, request)

  
  /**
   * Create a session. Create a new QPU session for the specified platform. Once ready, jobs can be sent to this session.
   *
   * @param request - The request {@link CreateSessionRequest}
   * @returns A Promise of Session
   */
  createSession = (request: Readonly<CreateSessionRequest>) =>
    this.client.fetch<Session>(
      {
        body: JSON.stringify(
          marshalCreateSessionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/qaas/v1alpha1/sessions`,
      },
      unmarshalSession,
    )

  
  /**
   * Update session information. Update session information of the provided **session ID**.
   *
   * @param request - The request {@link UpdateSessionRequest}
   * @returns A Promise of Session
   */
  updateSession = (request: Readonly<UpdateSessionRequest>) =>
    this.client.fetch<Session>(
      {
        body: JSON.stringify(
          marshalUpdateSessionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/qaas/v1alpha1/sessions/${validatePathParam('sessionId', request.sessionId)}`,
      },
      unmarshalSession,
    )

  
  /**
   * Terminate an existing session. Terminate a session by its unique ID and cancel all its attached jobs and bookings.
   *
   * @param request - The request {@link TerminateSessionRequest}
   * @returns A Promise of Session
   */
  terminateSession = (request: Readonly<TerminateSessionRequest>) =>
    this.client.fetch<Session>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/qaas/v1alpha1/sessions/${validatePathParam('sessionId', request.sessionId)}/terminate`,
      },
      unmarshalSession,
    )

  
  /**
   * Delete an existing session. Delete a session by its unique ID and delete all its attached jobs and bookings.
   *
   * @param request - The request {@link DeleteSessionRequest}
   */
  deleteSession = (request: Readonly<DeleteSessionRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/qaas/v1alpha1/sessions/${validatePathParam('sessionId', request.sessionId)}`,
      },
    )

  
  protected pageOfListSessionACLs = (request: Readonly<ListSessionACLsRequest>) =>
    this.client.fetch<ListSessionACLsResponse>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/sessions/${validatePathParam('sessionId', request.sessionId)}/acls`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListSessionACLsResponse,
    )
  
  listSessionACLs = (request: Readonly<ListSessionACLsRequest>) =>
    enrichForPagination('acls', this.pageOfListSessionACLs, request)

  
  /**
   * Create a process. Create a new process for the specified application on a specified platform.
   *
   * @param request - The request {@link CreateProcessRequest}
   * @returns A Promise of Process
   */
  createProcess = (request: Readonly<CreateProcessRequest>) =>
    this.client.fetch<Process>(
      {
        body: JSON.stringify(
          marshalCreateProcessRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/qaas/v1alpha1/processes`,
      },
      unmarshalProcess,
    )

  
  /**
   * Get process information. Retrieve information about the provided **process ID**, such as name, status and progress.
   *
   * @param request - The request {@link GetProcessRequest}
   * @returns A Promise of Process
   */
  getProcess = (request: Readonly<GetProcessRequest>) =>
    this.client.fetch<Process>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/processes/${validatePathParam('processId', request.processId)}`,
      },
      unmarshalProcess,
    )
  
  /**
   * Waits for {@link Process} to be in a final state.
   *
   * @param request - The request {@link GetProcessRequest}
   * @param options - The waiting options
   * @returns A Promise of Process
   */
  waitForProcess = (
    request: Readonly<GetProcessRequest>,
    options?: Readonly<WaitForOptions<Process>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!PROCESS_TRANSIENT_STATUSES_QAAS.includes(res.status))),
      this.getProcess,
      request,
      options,
    )

  
  protected pageOfListProcesses = (request: Readonly<ListProcessesRequest> = {}) =>
    this.client.fetch<ListProcessesResponse>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/processes`,
        urlParams: urlParams(
          ['application_id', request.applicationId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['tags', request.tags],
        ),
      },
      unmarshalListProcessesResponse,
    )
  
  /**
   * List all processes. Retrieve information about all processes.
   *
   * @param request - The request {@link ListProcessesRequest}
   * @returns A Promise of ListProcessesResponse
   */
  listProcesses = (request: Readonly<ListProcessesRequest> = {}) =>
    enrichForPagination('processes', this.pageOfListProcesses, request)

  
  /**
   * Update process information. Update process information of the provided **process ID**.
   *
   * @param request - The request {@link UpdateProcessRequest}
   * @returns A Promise of Process
   */
  updateProcess = (request: Readonly<UpdateProcessRequest>) =>
    this.client.fetch<Process>(
      {
        body: JSON.stringify(
          marshalUpdateProcessRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/qaas/v1alpha1/processes/${validatePathParam('processId', request.processId)}`,
      },
      unmarshalProcess,
    )

  
  /**
   * Cancel a running process. Cancel a process by its unique ID. Intermediate results are still available.
   *
   * @param request - The request {@link CancelProcessRequest}
   * @returns A Promise of Process
   */
  cancelProcess = (request: Readonly<CancelProcessRequest>) =>
    this.client.fetch<Process>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/qaas/v1alpha1/processes/${validatePathParam('processId', request.processId)}/cancel`,
      },
      unmarshalProcess,
    )

  
  /**
   * Delete an existing process. Delete a process by its unique ID and delete all its data.
   *
   * @param request - The request {@link DeleteProcessRequest}
   */
  deleteProcess = (request: Readonly<DeleteProcessRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/qaas/v1alpha1/processes/${validatePathParam('processId', request.processId)}`,
      },
    )

  
  protected pageOfListProcessResults = (request: Readonly<ListProcessResultsRequest>) =>
    this.client.fetch<ListProcessResultsResponse>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/processes/${validatePathParam('processId', request.processId)}/results`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListProcessResultsResponse,
    )
  
  /**
   * List all results of a process. Retrieve all intermediate and final result of a process.
   *
   * @param request - The request {@link ListProcessResultsRequest}
   * @returns A Promise of ListProcessResultsResponse
   */
  listProcessResults = (request: Readonly<ListProcessResultsRequest>) =>
    enrichForPagination('processResults', this.pageOfListProcessResults, request)

  
  /**
   * Get application information. Retrieve information about the provided **application ID**, such as name, type and compatible platforms.
   *
   * @param request - The request {@link GetApplicationRequest}
   * @returns A Promise of Application
   */
  getApplication = (request: Readonly<GetApplicationRequest>) =>
    this.client.fetch<Application>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/applications/${validatePathParam('applicationId', request.applicationId)}`,
      },
      unmarshalApplication,
    )

  
  protected pageOfListApplications = (request: Readonly<ListApplicationsRequest> = {}) =>
    this.client.fetch<ListApplicationsResponse>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/applications`,
        urlParams: urlParams(
          ['application_type', request.applicationType],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListApplicationsResponse,
    )
  
  /**
   * List all available applications. Retrieve information about all applications.
   *
   * @param request - The request {@link ListApplicationsRequest}
   * @returns A Promise of ListApplicationsResponse
   */
  listApplications = (request: Readonly<ListApplicationsRequest> = {}) =>
    enrichForPagination('applications', this.pageOfListApplications, request)

  
  /**
   * Get booking information. Retrieve information about the provided **booking ID**, such as description, status and progress message.
   *
   * @param request - The request {@link GetBookingRequest}
   * @returns A Promise of Booking
   */
  getBooking = (request: Readonly<GetBookingRequest>) =>
    this.client.fetch<Booking>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/bookings/${validatePathParam('bookingId', request.bookingId)}`,
      },
      unmarshalBooking,
    )
  
  /**
   * Waits for {@link Booking} to be in a final state.
   *
   * @param request - The request {@link GetBookingRequest}
   * @param options - The waiting options
   * @returns A Promise of Booking
   */
  waitForBooking = (
    request: Readonly<GetBookingRequest>,
    options?: Readonly<WaitForOptions<Booking>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!BOOKING_TRANSIENT_STATUSES_QAAS.includes(res.status))),
      this.getBooking,
      request,
      options,
    )

  
  protected pageOfListBookings = (request: Readonly<ListBookingsRequest> = {}) =>
    this.client.fetch<ListBookingsResponse>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/bookings`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['platform_id', request.platformId],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListBookingsResponse,
    )
  
  /**
   * List all bookings according the filter. Retrieve information about all bookings of the provided **project ID** or ** platform ID**.
   *
   * @param request - The request {@link ListBookingsRequest}
   * @returns A Promise of ListBookingsResponse
   */
  listBookings = (request: Readonly<ListBookingsRequest> = {}) =>
    enrichForPagination('bookings', this.pageOfListBookings, request)

  
  /**
   * Update booking information. Update booking information of the provided **booking ID**.
   *
   * @param request - The request {@link UpdateBookingRequest}
   * @returns A Promise of Booking
   */
  updateBooking = (request: Readonly<UpdateBookingRequest>) =>
    this.client.fetch<Booking>(
      {
        body: JSON.stringify(
          marshalUpdateBookingRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/qaas/v1alpha1/bookings/${validatePathParam('bookingId', request.bookingId)}`,
      },
      unmarshalBooking,
    )

  
  /**
   * Create a new model. Create and register a new model that can be executed through next jobs. A model can also be assigned to a Session.
   *
   * @param request - The request {@link CreateModelRequest}
   * @returns A Promise of Model
   */
  createModel = (request: Readonly<CreateModelRequest> = {}) =>
    this.client.fetch<Model>(
      {
        body: JSON.stringify(
          marshalCreateModelRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/qaas/v1alpha1/models`,
      },
      unmarshalModel,
    )

  
  /**
   * Get model information. Retrieve information about of the provided **model ID**.
   *
   * @param request - The request {@link GetModelRequest}
   * @returns A Promise of Model
   */
  getModel = (request: Readonly<GetModelRequest>) =>
    this.client.fetch<Model>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/models/${validatePathParam('modelId', request.modelId)}`,
      },
      unmarshalModel,
    )

  
  protected pageOfListModels = (request: Readonly<ListModelsRequest> = {}) =>
    this.client.fetch<ListModelsResponse>(
      {
        method: 'GET',
        path: `/qaas/v1alpha1/models`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
        ),
      },
      unmarshalListModelsResponse,
    )
  
  /**
   * List all models attached to the **project ID**. Retrieve information about all models of the provided **project ID**.
   *
   * @param request - The request {@link ListModelsRequest}
   * @returns A Promise of ListModelsResponse
   */
  listModels = (request: Readonly<ListModelsRequest> = {}) =>
    enrichForPagination('models', this.pageOfListModels, request)

  
}

