// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  resolveOneOf,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { WaitForOptions, ApiLocality,} from '@scaleway/sdk-client'
import {GROUP_GROUP_TRANSIENT_STATUSES as GROUP_GROUP_TRANSIENT_STATUSES_AUTOSCALING,} from './content.gen.js'
import {
  marshalCreateGroupRequest,
  unmarshalGroup,
  unmarshalListAlertsResponse,
  unmarshalListGroupsResponse,
  unmarshalListLogsResponse,
  unmarshalListServersResponse,
  marshalUpdateGroupRequest,
} from './marshalling.gen.js'
import type {
  CreateGroupRequest,
  DeleteGroupRequest,
  GetGroupRequest,
  Group,
  ListAlertsRequest,
  ListAlertsResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListLogsRequest,
  ListLogsResponse,
  ListServersRequest,
  ListServersResponse,
  UpdateGroupRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Autoscaling Groups API.

Instances Autoscaling Groups management API.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      zones: [
        'fr-par-1',
      ],
    })
  
  /**
   * List autoscaling groups. List all autoscaling groups in a project.
   *
   * @param request - The request {@link ListGroupsRequest}
   * @returns A Promise of ListGroupsResponse
   */
  listGroups = (request: Readonly<ListGroupsRequest> = {}) =>
    this.client.fetch<ListGroupsResponse>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/groups`,
        urlParams: urlParams(
          ['load_balancer_id', request.loadBalancerId],
          ['order_by', request.orderBy],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['template_id', request.templateId],
        ),
      },
      unmarshalListGroupsResponse,
    )

  
  /**
   * Get an autoscaling group. Get details of a specified autoscaling group including its configuration, current size, and status.
   *
   * @param request - The request {@link GetGroupRequest}
   * @returns A Promise of Group
   */
  getGroup = (request: Readonly<GetGroupRequest>) =>
    this.client.fetch<Group>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/groups/${validatePathParam('groupId', request.groupId)}`,
      },
      unmarshalGroup,
    )
  
  /**
   * Waits for {@link Group} to be in a final state.
   *
   * @param request - The request {@link GetGroupRequest}
   * @param options - The waiting options
   * @returns A Promise of Group
   */
  waitForGroup = (
    request: Readonly<GetGroupRequest>,
    options?: Readonly<WaitForOptions<Group>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!GROUP_GROUP_TRANSIENT_STATUSES_AUTOSCALING.includes(res.status))),
      this.getGroup,
      request,
      options,
    )

  
  /**
   * Create an autoscaling group. Create a new autoscaling group with the specified configuration including template, scaling policy, and optional load balancer settings.
   *
   * @param request - The request {@link CreateGroupRequest}
   * @returns A Promise of Group
   */
  createGroup = (request: Readonly<CreateGroupRequest>) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalCreateGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/autoscaling/v1alpha2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/groups`,
      },
      unmarshalGroup,
    )

  
  /**
   * Update an autoscaling group. Update the configuration of a specified autoscaling group including name, tags, template, scaling policy, and load balancer settings.
   *
   * @param request - The request {@link UpdateGroupRequest}
   * @returns A Promise of Group
   */
  updateGroup = (request: Readonly<UpdateGroupRequest>) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalUpdateGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/autoscaling/v1alpha2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/groups/${validatePathParam('groupId', request.groupId)}`,
      },
      unmarshalGroup,
    )

  
  /**
   * Delete an autoscaling group. Delete a specified autoscaling group and all its associated resources.
   *
   * @param request - The request {@link DeleteGroupRequest}
   * @returns A Promise of Group
   */
  deleteGroup = (request: Readonly<DeleteGroupRequest>) =>
    this.client.fetch<Group>(
      {
        method: 'DELETE',
        path: `/autoscaling/v1alpha2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/groups/${validatePathParam('groupId', request.groupId)}`,
      },
      unmarshalGroup,
    )

  
  /**
   * List group logs. List logs for a specified autoscaling group to view scaling events and activities.
   *
   * @param request - The request {@link ListLogsRequest}
   * @returns A Promise of ListLogsResponse
   */
  listLogs = (request: Readonly<ListLogsRequest>) =>
    this.client.fetch<ListLogsResponse>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/logs`,
        urlParams: urlParams(
          ['end_time', request.endTime],
          ['group_id', request.groupId],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['start_time', request.startTime],
        ),
      },
      unmarshalListLogsResponse,
    )

  
  /**
   * List group servers. List all Instances belonging to a specified autoscaling group.
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest>) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        urlParams: urlParams(
          ['group_id', request.groupId],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
      },
      unmarshalListServersResponse,
    )

  
  /**
   * List group alerts. List active and historical alerts for a specified autoscaling group.
   *
   * @param request - The request {@link ListAlertsRequest}
   * @returns A Promise of ListAlertsResponse
   */
  listAlerts = (request: Readonly<ListAlertsRequest> = {}) =>
    this.client.fetch<ListAlertsResponse>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/alerts`,
        urlParams: urlParams(
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],  
          ...Object.entries(resolveOneOf([
            {param: 'group_id',
              value: request.groupId,
            },
            {default: this.client.settings.defaultProjectId,param: 'project_id',
              value: request.projectId,
            },
          ])),
        ),
      },
      unmarshalListAlertsResponse,
    )

  
}

