// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality, RequestOptions,} from '@scaleway/sdk-client'
import {PROJECT_TRANSIENT_STATUSES as PROJECT_TRANSIENT_STATUSES_ACCOUNT,} from './content.gen.js'
import {
  unmarshalCheckContractSignatureResponse,
  marshalContractApiCheckContractSignatureRequest,
  marshalContractApiCreateContractSignatureRequest,
  unmarshalContractSignature,
  unmarshalListContractSignaturesResponse,
  unmarshalListProjectsResponse,
  unmarshalProject,
  marshalProjectApiCreateProjectRequest,
  marshalProjectApiDeleteProjectWithResourcesRequest,
  marshalProjectApiSetProjectQualificationRequest,
  marshalProjectApiUpdateProjectRequest,
  unmarshalProjectQualification,
} from './marshalling.gen.js'
import type {
  CheckContractSignatureResponse,
  ContractApiCheckContractSignatureRequest,
  ContractApiCreateContractSignatureRequest,
  ContractApiDownloadContractSignatureRequest,
  ContractApiListContractSignaturesRequest,
  ContractApiValidateContractSignatureRequest,
  ContractSignature,
  ListContractSignaturesResponse,
  ListProjectsResponse,
  Project,
  ProjectApiCreateProjectRequest,
  ProjectApiDeleteProjectRequest,
  ProjectApiDeleteProjectWithResourcesRequest,
  ProjectApiGetProjectRequest,
  ProjectApiListProjectsRequest,
  ProjectApiSetProjectQualificationRequest,
  ProjectApiUpdateProjectRequest,
  ProjectQualification,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Contract API.

The Contract API allows you to manage contracts.
 */
export class ContractAPI extends ParentAPI {
  /**
   * Download a contract content.
   *
   * @param request - The request {@link ContractApiDownloadContractSignatureRequest}
   * @returns A Promise of Blob
   */
  downloadContractSignature = (request: Readonly<ContractApiDownloadContractSignatureRequest>, options?: RequestOptions) =>
    this.client.fetch<Blob>(
      {
        method: 'GET',
        path: `/account/v3/contract-signatures/${validatePathParam('contractSignatureId', request.contractSignatureId)}/download`,
        urlParams: urlParams(
          ['dl', 1],
          ['locale', request.locale],
        ),
        responseType: 'blob',
        signal: options?.signal,
      },
    )

  
  /**
   * Create a signature for your Organization for the latest version of the requested contract.
   *
   * @param request - The request {@link ContractApiCreateContractSignatureRequest}
   * @returns A Promise of ContractSignature
   */
  createContractSignature = (request: Readonly<ContractApiCreateContractSignatureRequest>, options?: RequestOptions) =>
    this.client.fetch<ContractSignature>(
      {
        body: JSON.stringify(
          marshalContractApiCreateContractSignatureRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/contract-signatures`,
        signal: options?.signal,
      },
      unmarshalContractSignature,
    )

  
  /**
   * Sign a contract for your Organization.
   *
   * @param request - The request {@link ContractApiValidateContractSignatureRequest}
   * @returns A Promise of ContractSignature
   */
  validateContractSignature = (request: Readonly<ContractApiValidateContractSignatureRequest>, options?: RequestOptions) =>
    this.client.fetch<ContractSignature>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/contract-signatures/${validatePathParam('contractSignatureId', request.contractSignatureId)}/validate`,
        signal: options?.signal,
      },
      unmarshalContractSignature,
    )

  
  /**
   * Check if a contract is signed for your Organization.
   *
   * @param request - The request {@link ContractApiCheckContractSignatureRequest}
   * @returns A Promise of CheckContractSignatureResponse
   */
  checkContractSignature = (request: Readonly<ContractApiCheckContractSignatureRequest>, options?: RequestOptions) =>
    this.client.fetch<CheckContractSignatureResponse>(
      {
        body: JSON.stringify(
          marshalContractApiCheckContractSignatureRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/contract-signatures/check`,
        signal: options?.signal,
      },
      unmarshalCheckContractSignatureResponse,
    )

  
  protected pageOfListContractSignatures = (request: Readonly<ContractApiListContractSignaturesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListContractSignaturesResponse>(
      {
        method: 'GET',
        path: `/account/v3/contract-signatures`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListContractSignaturesResponse,
    )
  
  /**
   * List contract signatures for an Organization.
   *
   * @param request - The request {@link ContractApiListContractSignaturesRequest}
   * @returns A Promise of ListContractSignaturesResponse
   */
  listContractSignatures = (request: Readonly<ContractApiListContractSignaturesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('contractSignatures', this.pageOfListContractSignatures, request, options)

  
}

/**
 * Account API.

This API allows you to manage your Scaleway Projects.
 */
export class ProjectAPI extends ParentAPI {
  /**
   * Create a new Project for an Organization. Generate a new Project for an Organization, specifying its configuration including name and description.
   *
   * @param request - The request {@link ProjectApiCreateProjectRequest}
   * @returns A Promise of Project
   */
  createProject = (request: Readonly<ProjectApiCreateProjectRequest>, options?: RequestOptions) =>
    this.client.fetch<Project>(
      {
        body: JSON.stringify(
          marshalProjectApiCreateProjectRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/projects`,
        signal: options?.signal,
      },
      unmarshalProject,
    )

  
  protected pageOfListProjects = (request: Readonly<ProjectApiListProjectsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListProjectsResponse>(
      {
        method: 'GET',
        path: `/account/v3/projects`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_ids', request.projectIds],
        ),
        signal: options?.signal,
      },
      unmarshalListProjectsResponse,
    )
  
  /**
   * List all Projects of an Organization. List all Projects of an Organization. The response will include the total number of Projects as well as their associated Organizations, names, and IDs. Other information includes the creation and update date of the Project.
   *
   * @param request - The request {@link ProjectApiListProjectsRequest}
   * @returns A Promise of ListProjectsResponse
   */
  listProjects = (request: Readonly<ProjectApiListProjectsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('projects', this.pageOfListProjects, request, options)

  
  /**
   * Get an existing Project. Retrieve information about an existing Project, specified by its Project ID. Its full details, including ID, name and description, are returned in the response object.
   *
   * @param request - The request {@link ProjectApiGetProjectRequest}
   * @returns A Promise of Project
   */
  getProject = (request: Readonly<ProjectApiGetProjectRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Project>(
      {
        method: 'GET',
        path: `/account/v3/projects/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
        signal: options?.signal,
      },
      unmarshalProject,
    )
  
  /**
   * Waits for {@link Project} to be in a final state.
   *
   * @param request - The request {@link ProjectApiGetProjectRequest}
   * @param options - The waiting options
   * @returns A Promise of Project
   */
  waitForProject = (
    request: Readonly<ProjectApiGetProjectRequest> = {},
    options?: Readonly<WaitForOptions<Project>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!PROJECT_TRANSIENT_STATUSES_ACCOUNT.includes(res.status))),
      this.getProject,
      request,
      options,
    )

  
  /**
   * Delete an existing Project. Delete an existing Project, specified by its Project ID. The Project needs to be empty (meaning there are no resources left in it) to be deleted effectively. Note that deleting a Project is permanent, and cannot be undone.
   *
   * @param request - The request {@link ProjectApiDeleteProjectRequest}
   */
  deleteProject = (request: Readonly<ProjectApiDeleteProjectRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/account/v3/projects/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Delete an existing Project with all its resources. Delete an existing Project, specified by its Project ID and Name, along with all the resources it contains. Note that deleting a Project is permanent, and cannot be undone.
   *
   * @param request - The request {@link ProjectApiDeleteProjectWithResourcesRequest}
   * @returns A Promise of Project
   */
  deleteProjectWithResources = (request: Readonly<ProjectApiDeleteProjectWithResourcesRequest>, options?: RequestOptions) =>
    this.client.fetch<Project>(
      {
        body: JSON.stringify(
          marshalProjectApiDeleteProjectWithResourcesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/projects/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}/delete-with-resources`,
        signal: options?.signal,
      },
      unmarshalProject,
    )

  
  /**
   * Update Project. Update the parameters of an existing Project, specified by its Project ID. These parameters include the name and description.
   *
   * @param request - The request {@link ProjectApiUpdateProjectRequest}
   * @returns A Promise of Project
   */
  updateProject = (request: Readonly<ProjectApiUpdateProjectRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Project>(
      {
        body: JSON.stringify(
          marshalProjectApiUpdateProjectRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/account/v3/projects/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
        signal: options?.signal,
      },
      unmarshalProject,
    )

  
  /**
   * Set project use case. Set the project use case for a new or existing Project, specified by its Project ID. You can customize the use case, sub use case, and architecture type you want to use in the Project.
   *
   * @param request - The request {@link ProjectApiSetProjectQualificationRequest}
   * @returns A Promise of ProjectQualification
   */
  setProjectQualification = (request: Readonly<ProjectApiSetProjectQualificationRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ProjectQualification>(
      {
        body: JSON.stringify(
          marshalProjectApiSetProjectQualificationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/projects/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}/project-qualification`,
        signal: options?.signal,
      },
      unmarshalProjectQualification,
    )

  
}

