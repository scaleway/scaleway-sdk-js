// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  enrichForPagination,
  API as ParentAPI,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import {
  marshalContractApiCheckContractSignatureRequest,
  marshalContractApiCreateContractSignatureRequest,
  marshalProjectApiCreateProjectRequest,
  marshalProjectApiSetProjectQualificationRequest,
  marshalProjectApiUpdateProjectRequest,
  unmarshalCheckContractSignatureResponse,
  unmarshalContractSignature,
  unmarshalListContractSignaturesResponse,
  unmarshalListProjectsResponse,
  unmarshalProject,
  unmarshalProjectQualification,
} from './marshalling.gen'
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
  ProjectApiGetProjectRequest,
  ProjectApiListProjectsRequest,
  ProjectApiSetProjectQualificationRequest,
  ProjectApiUpdateProjectRequest,
  ProjectQualification,
} from './types.gen'

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
  downloadContractSignature = (
    request: Readonly<ContractApiDownloadContractSignatureRequest>,
  ) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/account/v3/contract-signatures/${validatePathParam('contractSignatureId', request.contractSignatureId)}/download`,
      urlParams: urlParams(['dl', 1], ['locale', request.locale]),
      responseType: 'blob',
    })

  /**
   * Create a signature for your Organization for the latest version of the requested contract.
   *
   * @param request - The request {@link ContractApiCreateContractSignatureRequest}
   * @returns A Promise of ContractSignature
   */
  createContractSignature = (
    request: Readonly<ContractApiCreateContractSignatureRequest>,
  ) =>
    this.client.fetch<ContractSignature>(
      {
        body: JSON.stringify(
          marshalContractApiCreateContractSignatureRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/contract-signatures`,
      },
      unmarshalContractSignature,
    )

  /**
   * Sign a contract for your Organization.
   *
   * @param request - The request {@link ContractApiValidateContractSignatureRequest}
   * @returns A Promise of ContractSignature
   */
  validateContractSignature = (
    request: Readonly<ContractApiValidateContractSignatureRequest>,
  ) =>
    this.client.fetch<ContractSignature>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/contract-signatures/${validatePathParam('contractSignatureId', request.contractSignatureId)}/validate`,
      },
      unmarshalContractSignature,
    )

  /**
   * Check if a contract is signed for your Organization.
   *
   * @param request - The request {@link ContractApiCheckContractSignatureRequest}
   * @returns A Promise of CheckContractSignatureResponse
   */
  checkContractSignature = (
    request: Readonly<ContractApiCheckContractSignatureRequest>,
  ) =>
    this.client.fetch<CheckContractSignatureResponse>(
      {
        body: JSON.stringify(
          marshalContractApiCheckContractSignatureRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/contract-signatures/check`,
      },
      unmarshalCheckContractSignatureResponse,
    )

  protected pageOfListContractSignatures = (
    request: Readonly<ContractApiListContractSignaturesRequest> = {},
  ) =>
    this.client.fetch<ListContractSignaturesResponse>(
      {
        method: 'GET',
        path: `/account/v3/contract-signatures`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListContractSignaturesResponse,
    )

  /**
   * List contract signatures for an Organization.
   *
   * @param request - The request {@link ContractApiListContractSignaturesRequest}
   * @returns A Promise of ListContractSignaturesResponse
   */
  listContractSignatures = (
    request: Readonly<ContractApiListContractSignaturesRequest> = {},
  ) =>
    enrichForPagination(
      'contractSignatures',
      this.pageOfListContractSignatures,
      request,
    )
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
  createProject = (request: Readonly<ProjectApiCreateProjectRequest>) =>
    this.client.fetch<Project>(
      {
        body: JSON.stringify(
          marshalProjectApiCreateProjectRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/projects`,
      },
      unmarshalProject,
    )

  protected pageOfListProjects = (
    request: Readonly<ProjectApiListProjectsRequest> = {},
  ) =>
    this.client.fetch<ListProjectsResponse>(
      {
        method: 'GET',
        path: `/account/v3/projects`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_ids', request.projectIds],
        ),
      },
      unmarshalListProjectsResponse,
    )

  /**
   * List all Projects of an Organization. List all Projects of an Organization. The response will include the total number of Projects as well as their associated Organizations, names, and IDs. Other information includes the creation and update date of the Project.
   *
   * @param request - The request {@link ProjectApiListProjectsRequest}
   * @returns A Promise of ListProjectsResponse
   */
  listProjects = (request: Readonly<ProjectApiListProjectsRequest> = {}) =>
    enrichForPagination('projects', this.pageOfListProjects, request)

  /**
   * Get an existing Project. Retrieve information about an existing Project, specified by its Project ID. Its full details, including ID, name and description, are returned in the response object.
   *
   * @param request - The request {@link ProjectApiGetProjectRequest}
   * @returns A Promise of Project
   */
  getProject = (request: Readonly<ProjectApiGetProjectRequest> = {}) =>
    this.client.fetch<Project>(
      {
        method: 'GET',
        path: `/account/v3/projects/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
      },
      unmarshalProject,
    )

  /**
   * Delete an existing Project. Delete an existing Project, specified by its Project ID. The Project needs to be empty (meaning there are no resources left in it) to be deleted effectively. Note that deleting a Project is permanent, and cannot be undone.
   *
   * @param request - The request {@link ProjectApiDeleteProjectRequest}
   */
  deleteProject = (request: Readonly<ProjectApiDeleteProjectRequest> = {}) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/account/v3/projects/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
    })

  /**
   * Update Project. Update the parameters of an existing Project, specified by its Project ID. These parameters include the name and description.
   *
   * @param request - The request {@link ProjectApiUpdateProjectRequest}
   * @returns A Promise of Project
   */
  updateProject = (request: Readonly<ProjectApiUpdateProjectRequest> = {}) =>
    this.client.fetch<Project>(
      {
        body: JSON.stringify(
          marshalProjectApiUpdateProjectRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/account/v3/projects/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
      },
      unmarshalProject,
    )

  /**
   * Set project use case. Set the project use case for a new or existing Project, specified by its Project ID. You can customize the use case, sub use case, and architecture type you want to use in the Project.
   *
   * @param request - The request {@link ProjectApiSetProjectQualificationRequest}
   * @returns A Promise of ProjectQualification
   */
  setProjectQualification = (
    request: Readonly<ProjectApiSetProjectQualificationRequest> = {},
  ) =>
    this.client.fetch<ProjectQualification>(
      {
        body: JSON.stringify(
          marshalProjectApiSetProjectQualificationRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v3/projects/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}/project-qualification`,
      },
      unmarshalProjectQualification,
    )
}
