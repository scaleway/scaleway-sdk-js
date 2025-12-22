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
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality,} from '@scaleway/sdk-client'
import {
  marshalCreateInstanceGroupRequest,
  marshalCreateInstancePolicyRequest,
  marshalCreateInstanceTemplateRequest,
  unmarshalInstanceGroup,
  unmarshalInstancePolicy,
  unmarshalInstanceTemplate,
  unmarshalListInstanceGroupEventsResponse,
  unmarshalListInstanceGroupsResponse,
  unmarshalListInstancePoliciesResponse,
  unmarshalListInstanceTemplatesResponse,
  marshalUpdateInstanceGroupRequest,
  marshalUpdateInstancePolicyRequest,
  marshalUpdateInstanceTemplateRequest,
} from './marshalling.gen.js'
import type {
  CreateInstanceGroupRequest,
  CreateInstancePolicyRequest,
  CreateInstanceTemplateRequest,
  DeleteInstanceGroupRequest,
  DeleteInstancePolicyRequest,
  DeleteInstanceTemplateRequest,
  GetInstanceGroupRequest,
  GetInstancePolicyRequest,
  GetInstanceTemplateRequest,
  InstanceGroup,
  InstancePolicy,
  InstanceTemplate,
  ListInstanceGroupEventsRequest,
  ListInstanceGroupEventsResponse,
  ListInstanceGroupsRequest,
  ListInstanceGroupsResponse,
  ListInstancePoliciesRequest,
  ListInstancePoliciesResponse,
  ListInstanceTemplatesRequest,
  ListInstanceTemplatesResponse,
  UpdateInstanceGroupRequest,
  UpdateInstancePolicyRequest,
  UpdateInstanceTemplateRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Instance Scaling Groups API.
 */
export class API extends ParentAPI {
  /**
   * Get Instance group. Retrieve information about an existing Instance group, specified by its `instance_group_id`. Its full details, including errors, are returned in the response object.
   *
   * @param request - The request {@link GetInstanceGroupRequest}
   * @returns A Promise of InstanceGroup
   */
  getInstanceGroup = (request: Readonly<GetInstanceGroupRequest>) =>
    this.client.fetch<InstanceGroup>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-groups/${validatePathParam('instanceGroupId', request.instanceGroupId)}`,
      },
      unmarshalInstanceGroup,
    )

  
  /**
   * Create Instance group. Create a new Instance group. You must specify a `template_id`, capacity and Load Balancer object.
   *
   * @param request - The request {@link CreateInstanceGroupRequest}
   * @returns A Promise of InstanceGroup
   */
  createInstanceGroup = (request: Readonly<CreateInstanceGroupRequest>) =>
    this.client.fetch<InstanceGroup>(
      {
        body: JSON.stringify(
          marshalCreateInstanceGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-groups`,
      },
      unmarshalInstanceGroup,
    )

  
  protected pageOfListInstanceGroups = (request: Readonly<ListInstanceGroupsRequest> = {}) =>
    this.client.fetch<ListInstanceGroupsResponse>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-groups`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListInstanceGroupsResponse,
    )
  
  /**
   * List Instance groups. List all Instance groups, for a Scaleway Organization or Scaleway Project. By default, the Instance groups returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListInstanceGroupsRequest}
   * @returns A Promise of ListInstanceGroupsResponse
   */
  listInstanceGroups = (request: Readonly<ListInstanceGroupsRequest> = {}) =>
    enrichForPagination('instanceGroups', this.pageOfListInstanceGroups, request)

  
  /**
   * Update Instance group. Update the parameters of an existing Instance group, specified by its `instance_group_id`.
   *
   * @param request - The request {@link UpdateInstanceGroupRequest}
   * @returns A Promise of InstanceGroup
   */
  updateInstanceGroup = (request: Readonly<UpdateInstanceGroupRequest>) =>
    this.client.fetch<InstanceGroup>(
      {
        body: JSON.stringify(
          marshalUpdateInstanceGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-groups/${validatePathParam('instanceGroupId', request.instanceGroupId)}`,
      },
      unmarshalInstanceGroup,
    )

  
  /**
   * Delete  Instance group. Delete an existing Instance group, specified by its `instance_group_id`. Deleting an Instance group is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteInstanceGroupRequest}
   */
  deleteInstanceGroup = (request: Readonly<DeleteInstanceGroupRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-groups/${validatePathParam('instanceGroupId', request.instanceGroupId)}`,
      },
    )

  
  /**
   * Create Instance template. Create a new Instance template. This specifies the details of the Instance (commercial type, zone, image, volumes etc.) that will be in the Instance group.
   *
   * @param request - The request {@link CreateInstanceTemplateRequest}
   * @returns A Promise of InstanceTemplate
   */
  createInstanceTemplate = (request: Readonly<CreateInstanceTemplateRequest>) =>
    this.client.fetch<InstanceTemplate>(
      {
        body: JSON.stringify(
          marshalCreateInstanceTemplateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-templates`,
      },
      unmarshalInstanceTemplate,
    )

  
  /**
   * Update Instance template. Update an Instance template, such as its commercial offer type, image or volume template.
   *
   * @param request - The request {@link UpdateInstanceTemplateRequest}
   * @returns A Promise of InstanceTemplate
   */
  updateInstanceTemplate = (request: Readonly<UpdateInstanceTemplateRequest>) =>
    this.client.fetch<InstanceTemplate>(
      {
        body: JSON.stringify(
          marshalUpdateInstanceTemplateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-templates/${validatePathParam('templateId', request.templateId)}`,
      },
      unmarshalInstanceTemplate,
    )

  
  /**
   * Get Instance template. Get an existing Instance template from its `template_id`.
   *
   * @param request - The request {@link GetInstanceTemplateRequest}
   * @returns A Promise of InstanceTemplate
   */
  getInstanceTemplate = (request: Readonly<GetInstanceTemplateRequest>) =>
    this.client.fetch<InstanceTemplate>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-templates/${validatePathParam('templateId', request.templateId)}`,
      },
      unmarshalInstanceTemplate,
    )

  
  /**
   * Delete Instance template. Delete an existing Instance template. This action is permanent and cannot be undone.
   *
   * @param request - The request {@link DeleteInstanceTemplateRequest}
   */
  deleteInstanceTemplate = (request: Readonly<DeleteInstanceTemplateRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-templates/${validatePathParam('templateId', request.templateId)}`,
      },
    )

  
  protected pageOfListInstanceTemplates = (request: Readonly<ListInstanceTemplatesRequest> = {}) =>
    this.client.fetch<ListInstanceTemplatesResponse>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-templates`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListInstanceTemplatesResponse,
    )
  
  /**
   * List Instance templates. List all Instance templates, for a Scaleway Organization or Scaleway Project. By default, the Instance templates returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListInstanceTemplatesRequest}
   * @returns A Promise of ListInstanceTemplatesResponse
   */
  listInstanceTemplates = (request: Readonly<ListInstanceTemplatesRequest> = {}) =>
    enrichForPagination('instanceTemplates', this.pageOfListInstanceTemplates, request)

  
  /**
   * Create scaling policy. Create a new scaling policy. You must specify a `policy_id`, capacity and Load Balancer object.
   *
   * @param request - The request {@link CreateInstancePolicyRequest}
   * @returns A Promise of InstancePolicy
   */
  createInstancePolicy = (request: Readonly<CreateInstancePolicyRequest>) =>
    this.client.fetch<InstancePolicy>(
      {
        body: JSON.stringify(
          marshalCreateInstancePolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-policies`,
      },
      unmarshalInstancePolicy,
    )

  
  /**
   * Update scaling policy. Update the parameters of an existing scaling policy, specified by its `policy_id`.
   *
   * @param request - The request {@link UpdateInstancePolicyRequest}
   * @returns A Promise of InstancePolicy
   */
  updateInstancePolicy = (request: Readonly<UpdateInstancePolicyRequest>) =>
    this.client.fetch<InstancePolicy>(
      {
        body: JSON.stringify(
          marshalUpdateInstancePolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-policies/${validatePathParam('policyId', request.policyId)}`,
      },
      unmarshalInstancePolicy,
    )

  
  protected pageOfListInstancePolicies = (request: Readonly<ListInstancePoliciesRequest>) =>
    this.client.fetch<ListInstancePoliciesResponse>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-policies`,
        urlParams: urlParams(
          ['instance_group_id', request.instanceGroupId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListInstancePoliciesResponse,
    )
  
  /**
   * List scaling policies. List all scaling policies, for a Scaleway Organization or Scaleway Project. By default, the policies returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListInstancePoliciesRequest}
   * @returns A Promise of ListInstancePoliciesResponse
   */
  listInstancePolicies = (request: Readonly<ListInstancePoliciesRequest>) =>
    enrichForPagination('policies', this.pageOfListInstancePolicies, request)

  
  /**
   * Get scaling policy. Retrieve information about an existing scaling policy, specified by its `policy_id`. Its full details are returned in the response object.
   *
   * @param request - The request {@link GetInstancePolicyRequest}
   * @returns A Promise of InstancePolicy
   */
  getInstancePolicy = (request: Readonly<GetInstancePolicyRequest>) =>
    this.client.fetch<InstancePolicy>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-policies/${validatePathParam('policyId', request.policyId)}`,
      },
      unmarshalInstancePolicy,
    )

  
  /**
   * Delete scaling policy. Delete an existing scaling policy, specified by its `policy_id`. Deleting a scaling policy is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteInstancePolicyRequest}
   */
  deleteInstancePolicy = (request: Readonly<DeleteInstancePolicyRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-policies/${validatePathParam('policyId', request.policyId)}`,
      },
    )

  
  protected pageOfListInstanceGroupEvents = (request: Readonly<ListInstanceGroupEventsRequest>) =>
    this.client.fetch<ListInstanceGroupEventsResponse>(
      {
        method: 'GET',
        path: `/autoscaling/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/instance-groups/${validatePathParam('instanceGroupId', request.instanceGroupId)}/events`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListInstanceGroupEventsResponse,
    )
  
  /**
   * List events. List all events for a given Instance group. By default, the events are ordered by creation date in descending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListInstanceGroupEventsRequest}
   * @returns A Promise of ListInstanceGroupEventsResponse
   */
  listInstanceGroupEvents = (request: Readonly<ListInstanceGroupEventsRequest>) =>
    enrichForPagination('instanceEvents', this.pageOfListInstanceGroupEvents, request)

  
}

