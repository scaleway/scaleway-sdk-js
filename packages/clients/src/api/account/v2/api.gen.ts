// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import {
  marshalCreateProjectRequest,
  marshalUpdateProjectRequest,
  unmarshalCaptchaProvider,
  unmarshalListProjectsResponse,
  unmarshalProject,
} from './marshalling.gen'
import type {
  CaptchaProvider,
  CreateProjectRequest,
  DeleteProjectRequest,
  GetProjectRequest,
  ListProjectsRequest,
  ListProjectsResponse,
  Project,
  UpdateProjectRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Account API.
 *
 * User related data. This API allows you to manage projects.
 */
export class API extends ParentAPI {
  /**
   * Create a new Project for an Organization. Generate a new Project for an
   * Organization, specifying its configuration including name and description.
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
   * List all Projects of an Organization. List all Projects of an Organization.
   * The response will include the total number of Projects as well as their
   * associated Organizations, names and IDs. Other information include the
   * creation and update date of the Project.
   *
   * @param request - The request {@link ListProjectsRequest}
   * @returns A Promise of ListProjectsResponse
   */
  listProjects = (request: Readonly<ListProjectsRequest> = {}) =>
    enrichForPagination('projects', this.pageOfListProjects, request)

  /**
   * Get an existing Project. Retrieve information about an existing Project,
   * specified by its Project ID. Its full details, including ID, name and
   * description, are returned in the response object.
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
   * Delete an existing Project. Delete an existing Project, specified by its
   * Project ID. The Project needs to be empty (meaning there are no resources
   * left in it) to be deleted effectively. Note that deleting a Project is
   * permanent, and cannot be undone.
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
   * Update Project. Update the parameters of an existing Project, specified by
   * its Project ID. These parameters include the name and description.
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

  /**
   * Get a Captcha provider.
   *
   * @returns A Promise of CaptchaProvider
   */
  getCaptchaProvider = () =>
    this.client.fetch<CaptchaProvider>(
      {
        method: 'GET',
        path: `/account/v2/captcha-provider`,
      },
      unmarshalCaptchaProvider,
    )
}
