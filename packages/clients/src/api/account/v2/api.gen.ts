// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import {
  marshalCreateMFAOTPRequest,
  marshalCreateProjectRequest,
  marshalUpdateProjectRequest,
  marshalValidateMFAOTPRequest,
  unmarshalListMFAOTPsResponse,
  unmarshalListProjectsResponse,
  unmarshalMFAOTP,
  unmarshalProject,
  unmarshalValidateMFAOTPResponse,
} from './marshalling.gen'
import type {
  CreateMFAOTPRequest,
  CreateProjectRequest,
  DeleteMFAOTPRequest,
  DeleteProjectRequest,
  GetProjectRequest,
  ListMFAOTPsRequest,
  ListMFAOTPsResponse,
  ListProjectsRequest,
  ListProjectsResponse,
  MFAOTP,
  Project,
  UpdateProjectRequest,
  ValidateMFAOTPRequest,
  ValidateMFAOTPResponse,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Account API.
 *
 * This API allows you to manage projects.
 */
export class AccountV2GenAPI extends API {
  /**
   * Create project
   *
   * @param request - The request {@link CreateProjectRequest}
   * @returns A Promise of Project
   */
  createProject = (request: Readonly<CreateProjectRequest>) =>
    this.client.fetch<Project>(
      {
        body: JSON.stringify(
          marshalCreateProjectRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v2/projects`,
      },
      unmarshalProject,
    )

  protected pageOfListProjects = (
    request: Readonly<ListProjectsRequest> = {},
  ) =>
    this.client.fetch<ListProjectsResponse>(
      {
        method: 'GET',
        path: `/account/v2/projects`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
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
   * List projects
   *
   * @param request - The request {@link ListProjectsRequest}
   * @returns A Promise of ListProjectsResponse
   */
  listProjects = (request: Readonly<ListProjectsRequest> = {}) =>
    enrichForPagination('projects', this.pageOfListProjects, request)

  /**
   * Get project
   *
   * @param request - The request {@link GetProjectRequest}
   * @returns A Promise of Project
   */
  getProject = (request: Readonly<GetProjectRequest> = {}) =>
    this.client.fetch<Project>(
      {
        method: 'GET',
        path: `/account/v2/projects/${validatePathParam(
          'projectId',
          request.projectId ?? this.client.settings.defaultProjectId,
        )}`,
      },
      unmarshalProject,
    )

  /**
   * Delete project
   *
   * @param request - The request {@link DeleteProjectRequest}
   */
  deleteProject = (request: Readonly<DeleteProjectRequest> = {}) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/account/v2/projects/${validatePathParam(
        'projectId',
        request.projectId ?? this.client.settings.defaultProjectId,
      )}`,
    })

  /**
   * Update project
   *
   * @param request - The request {@link UpdateProjectRequest}
   * @returns A Promise of Project
   */
  updateProject = (request: Readonly<UpdateProjectRequest> = {}) =>
    this.client.fetch<Project>(
      {
        body: JSON.stringify(
          marshalUpdateProjectRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/account/v2/projects/${validatePathParam(
          'projectId',
          request.projectId ?? this.client.settings.defaultProjectId,
        )}`,
      },
      unmarshalProject,
    )

  protected pageOfListMFAOTPs = (request: Readonly<ListMFAOTPsRequest>) =>
    this.client.fetch<ListMFAOTPsResponse>(
      {
        method: 'GET',
        path: `/account/v2/mfa/otps`,
        urlParams: urlParams(
          ['account_root_user_id', request.accountRootUserId],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListMFAOTPsResponse,
    )

  /**
   * List MFA OTPs
   *
   * @param request - The request {@link ListMFAOTPsRequest}
   * @returns A Promise of ListMFAOTPsResponse
   */
  listMFAOTPs = (request: Readonly<ListMFAOTPsRequest>) =>
    enrichForPagination('mfaOtps', this.pageOfListMFAOTPs, request)

  /**
   * Create MFA OTP
   *
   * @param request - The request {@link CreateMFAOTPRequest}
   * @returns A Promise of MFAOTP
   */
  createMFAOTP = (request: Readonly<CreateMFAOTPRequest>) =>
    this.client.fetch<MFAOTP>(
      {
        body: JSON.stringify(
          marshalCreateMFAOTPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v2/mfa/otps`,
      },
      unmarshalMFAOTP,
    )

  /**
   * Validate MFA OTP
   *
   * @param request - The request {@link ValidateMFAOTPRequest}
   * @returns A Promise of ValidateMFAOTPResponse
   */
  validateMFAOTP = (request: Readonly<ValidateMFAOTPRequest>) =>
    this.client.fetch<ValidateMFAOTPResponse>(
      {
        body: JSON.stringify(
          marshalValidateMFAOTPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v2/mfa/otps/${validatePathParam(
          'mfaOtpId',
          request.mfaOtpId,
        )}/validate`,
      },
      unmarshalValidateMFAOTPResponse,
    )

  /**
   * Delete MFA OTP
   *
   * @param request - The request {@link DeleteMFAOTPRequest}
   */
  deleteMFAOTP = (request: Readonly<DeleteMFAOTPRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/account/v2/mfa/otps/${validatePathParam(
        'mfaOtpId',
        request.mfaOtpId,
      )}`,
    })
}
