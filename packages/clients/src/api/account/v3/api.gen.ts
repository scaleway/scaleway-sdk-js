// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import {
  marshalProjectApiCreateProjectRequest,
  marshalProjectApiUpdateProjectRequest,
  unmarshalListProjectsResponse,
  unmarshalProject,
} from './marshalling.gen'
import type {
  ListProjectsResponse,
  Project,
  ProjectApiCreateProjectRequest,
  ProjectApiDeleteProjectRequest,
  ProjectApiGetProjectRequest,
  ProjectApiListProjectsRequest,
  ProjectApiUpdateProjectRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Account API.
 *
 * This API allows you to manage projects.
 */
export class ProjectAPI extends ParentAPI {
  /**
   * Create a new Project for an Organization. Generate a new Project for an
   * Organization, specifying its configuration including name and description.
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
   * associated Organizations, names, and IDs. Other information includes the
   * creation and update date of the Project.
   *
   * @param request - The request {@link ProjectApiListProjectsRequest}
   * @returns A Promise of ListProjectsResponse
   */
  listProjects = (request: Readonly<ProjectApiListProjectsRequest> = {}) =>
    enrichForPagination('projects', this.pageOfListProjects, request)

  /**
   * Get an existing Project. Retrieve information about an existing Project,
   * specified by its Project ID. Its full details, including ID, name and
   * description, are returned in the response object.
   *
   * @param request - The request {@link ProjectApiGetProjectRequest}
   * @returns A Promise of Project
   */
  getProject = (request: Readonly<ProjectApiGetProjectRequest> = {}) =>
    this.client.fetch<Project>(
      {
        method: 'GET',
        path: `/account/v3/projects/${validatePathParam(
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
   * @param request - The request {@link ProjectApiDeleteProjectRequest}
   */
  deleteProject = (request: Readonly<ProjectApiDeleteProjectRequest> = {}) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/account/v3/projects/${validatePathParam(
        'projectId',
        request.projectId ?? this.client.settings.defaultProjectId,
      )}`,
    })

  /**
   * Update Project. Update the parameters of an existing Project, specified by
   * its Project ID. These parameters include the name and description.
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
        path: `/account/v3/projects/${validatePathParam(
          'projectId',
          request.projectId ?? this.client.settings.defaultProjectId,
        )}`,
      },
      unmarshalProject,
    )
}
