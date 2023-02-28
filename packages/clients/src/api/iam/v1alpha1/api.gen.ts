// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import {
  marshalAddGroupMemberRequest,
  marshalCreateAPIKeyRequest,
  marshalCreateApplicationRequest,
  marshalCreateGroupRequest,
  marshalCreatePolicyRequest,
  marshalCreateSSHKeyRequest,
  marshalRemoveGroupMemberRequest,
  marshalSetGroupMembersRequest,
  marshalSetRulesRequest,
  marshalUpdateAPIKeyRequest,
  marshalUpdateApplicationRequest,
  marshalUpdateGroupRequest,
  marshalUpdatePolicyRequest,
  marshalUpdateSSHKeyRequest,
  unmarshalAPIKey,
  unmarshalApplication,
  unmarshalGroup,
  unmarshalListAPIKeysResponse,
  unmarshalListApplicationsResponse,
  unmarshalListGroupsResponse,
  unmarshalListPermissionSetsResponse,
  unmarshalListPoliciesResponse,
  unmarshalListQuotaResponse,
  unmarshalListRulesResponse,
  unmarshalListSSHKeysResponse,
  unmarshalListUsersResponse,
  unmarshalPolicy,
  unmarshalQuotum,
  unmarshalSSHKey,
  unmarshalSetRulesResponse,
  unmarshalUser,
} from './marshalling.gen'
import type {
  APIKey,
  AddGroupMemberRequest,
  Application,
  ClonePolicyRequest,
  CreateAPIKeyRequest,
  CreateApplicationRequest,
  CreateGroupRequest,
  CreatePolicyRequest,
  CreateSSHKeyRequest,
  DeleteAPIKeyRequest,
  DeleteApplicationRequest,
  DeleteGroupRequest,
  DeletePolicyRequest,
  DeleteSSHKeyRequest,
  DeleteUserRequest,
  GetAPIKeyRequest,
  GetApplicationRequest,
  GetGroupRequest,
  GetPolicyRequest,
  GetQuotumRequest,
  GetSSHKeyRequest,
  GetUserRequest,
  Group,
  ListAPIKeysRequest,
  ListAPIKeysResponse,
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListPermissionSetsRequest,
  ListPermissionSetsResponse,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListQuotaRequest,
  ListQuotaResponse,
  ListRulesRequest,
  ListRulesResponse,
  ListSSHKeysRequest,
  ListSSHKeysResponse,
  ListUsersRequest,
  ListUsersResponse,
  Policy,
  Quotum,
  RemoveGroupMemberRequest,
  SSHKey,
  SetGroupMembersRequest,
  SetRulesRequest,
  SetRulesResponse,
  UpdateAPIKeyRequest,
  UpdateApplicationRequest,
  UpdateGroupRequest,
  UpdatePolicyRequest,
  UpdateSSHKeyRequest,
  User,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** IAM API. */
export class API extends ParentAPI {
  protected pageOfListSSHKeys = (request: Readonly<ListSSHKeysRequest> = {}) =>
    this.client.fetch<ListSSHKeysResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/ssh-keys`,
        urlParams: urlParams(
          ['disabled', request.disabled],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListSSHKeysResponse,
    )

  /**
   * List SSH keys
   *
   * @param request - The request {@link ListSSHKeysRequest}
   * @returns A Promise of ListSSHKeysResponse
   */
  listSSHKeys = (request: Readonly<ListSSHKeysRequest> = {}) =>
    enrichForPagination('sshKeys', this.pageOfListSSHKeys, request)

  /**
   * Create an SSH key
   *
   * @param request - The request {@link CreateSSHKeyRequest}
   * @returns A Promise of SSHKey
   */
  createSSHKey = (request: Readonly<CreateSSHKeyRequest>) =>
    this.client.fetch<SSHKey>(
      {
        body: JSON.stringify(
          marshalCreateSSHKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/ssh-keys`,
      },
      unmarshalSSHKey,
    )

  /**
   * Get an SSH key
   *
   * @param request - The request {@link GetSSHKeyRequest}
   * @returns A Promise of SSHKey
   */
  getSSHKey = (request: Readonly<GetSSHKeyRequest>) =>
    this.client.fetch<SSHKey>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/ssh-keys/${validatePathParam(
          'sshKeyId',
          request.sshKeyId,
        )}`,
      },
      unmarshalSSHKey,
    )

  /**
   * Update an SSH key
   *
   * @param request - The request {@link UpdateSSHKeyRequest}
   * @returns A Promise of SSHKey
   */
  updateSSHKey = (request: Readonly<UpdateSSHKeyRequest>) =>
    this.client.fetch<SSHKey>(
      {
        body: JSON.stringify(
          marshalUpdateSSHKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/ssh-keys/${validatePathParam(
          'sshKeyId',
          request.sshKeyId,
        )}`,
      },
      unmarshalSSHKey,
    )

  /**
   * Delete an SSH key
   *
   * @param request - The request {@link DeleteSSHKeyRequest}
   */
  deleteSSHKey = (request: Readonly<DeleteSSHKeyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/ssh-keys/${validatePathParam(
        'sshKeyId',
        request.sshKeyId,
      )}`,
    })

  protected pageOfListUsers = (request: Readonly<ListUsersRequest> = {}) =>
    this.client.fetch<ListUsersResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/users`,
        urlParams: urlParams(
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
          ['user_ids', request.userIds],
        ),
      },
      unmarshalListUsersResponse,
    )

  /**
   * List users of an organization
   *
   * @param request - The request {@link ListUsersRequest}
   * @returns A Promise of ListUsersResponse
   */
  listUsers = (request: Readonly<ListUsersRequest> = {}) =>
    enrichForPagination('users', this.pageOfListUsers, request)

  /**
   * Retrieve a user from its ID
   *
   * @param request - The request {@link GetUserRequest}
   * @returns A Promise of User
   */
  getUser = (request: Readonly<GetUserRequest>) =>
    this.client.fetch<User>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/users/${validatePathParam(
          'userId',
          request.userId,
        )}`,
      },
      unmarshalUser,
    )

  /**
   * Delete a guest user from an organization
   *
   * @param request - The request {@link DeleteUserRequest}
   */
  deleteUser = (request: Readonly<DeleteUserRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/users/${validatePathParam(
        'userId',
        request.userId,
      )}`,
    })

  protected pageOfListApplications = (
    request: Readonly<ListApplicationsRequest> = {},
  ) =>
    this.client.fetch<ListApplicationsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/applications`,
        urlParams: urlParams(
          ['application_ids', request.applicationIds],
          ['editable', request.editable],
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
        ),
      },
      unmarshalListApplicationsResponse,
    )

  /**
   * List applications of an organization
   *
   * @param request - The request {@link ListApplicationsRequest}
   * @returns A Promise of ListApplicationsResponse
   */
  listApplications = (request: Readonly<ListApplicationsRequest> = {}) =>
    enrichForPagination('applications', this.pageOfListApplications, request)

  /**
   * Create a new application
   *
   * @param request - The request {@link CreateApplicationRequest}
   * @returns A Promise of Application
   */
  createApplication = (request: Readonly<CreateApplicationRequest>) =>
    this.client.fetch<Application>(
      {
        body: JSON.stringify(
          marshalCreateApplicationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/applications`,
      },
      unmarshalApplication,
    )

  /**
   * Get an existing application
   *
   * @param request - The request {@link GetApplicationRequest}
   * @returns A Promise of Application
   */
  getApplication = (request: Readonly<GetApplicationRequest>) =>
    this.client.fetch<Application>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/applications/${validatePathParam(
          'applicationId',
          request.applicationId,
        )}`,
      },
      unmarshalApplication,
    )

  /**
   * Update an existing application
   *
   * @param request - The request {@link UpdateApplicationRequest}
   * @returns A Promise of Application
   */
  updateApplication = (request: Readonly<UpdateApplicationRequest>) =>
    this.client.fetch<Application>(
      {
        body: JSON.stringify(
          marshalUpdateApplicationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/applications/${validatePathParam(
          'applicationId',
          request.applicationId,
        )}`,
      },
      unmarshalApplication,
    )

  /**
   * Delete an application
   *
   * @param request - The request {@link DeleteApplicationRequest}
   */
  deleteApplication = (request: Readonly<DeleteApplicationRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/applications/${validatePathParam(
        'applicationId',
        request.applicationId,
      )}`,
    })

  protected pageOfListGroups = (request: Readonly<ListGroupsRequest> = {}) =>
    this.client.fetch<ListGroupsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/groups`,
        urlParams: urlParams(
          ['application_ids', request.applicationIds],
          ['group_ids', request.groupIds],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['user_ids', request.userIds],
        ),
      },
      unmarshalListGroupsResponse,
    )

  /**
   * List groups
   *
   * @param request - The request {@link ListGroupsRequest}
   * @returns A Promise of ListGroupsResponse
   */
  listGroups = (request: Readonly<ListGroupsRequest> = {}) =>
    enrichForPagination('groups', this.pageOfListGroups, request)

  /**
   * Create a new group
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
        path: `/iam/v1alpha1/groups`,
      },
      unmarshalGroup,
    )

  /**
   * Get a group
   *
   * @param request - The request {@link GetGroupRequest}
   * @returns A Promise of Group
   */
  getGroup = (request: Readonly<GetGroupRequest>) =>
    this.client.fetch<Group>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/groups/${validatePathParam(
          'groupId',
          request.groupId,
        )}`,
      },
      unmarshalGroup,
    )

  /**
   * Update a group
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
        path: `/iam/v1alpha1/groups/${validatePathParam(
          'groupId',
          request.groupId,
        )}`,
      },
      unmarshalGroup,
    )

  /**
   * Overwrite users and applications of a group
   *
   * @param request - The request {@link SetGroupMembersRequest}
   * @returns A Promise of Group
   */
  setGroupMembers = (request: Readonly<SetGroupMembersRequest>) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalSetGroupMembersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/iam/v1alpha1/groups/${validatePathParam(
          'groupId',
          request.groupId,
        )}/members`,
      },
      unmarshalGroup,
    )

  /**
   * Add a user of an application to a group
   *
   * @param request - The request {@link AddGroupMemberRequest}
   * @returns A Promise of Group
   */
  addGroupMember = (request: Readonly<AddGroupMemberRequest>) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalAddGroupMemberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/groups/${validatePathParam(
          'groupId',
          request.groupId,
        )}/add-member`,
      },
      unmarshalGroup,
    )

  /**
   * Remove a user or an application from a group
   *
   * @param request - The request {@link RemoveGroupMemberRequest}
   * @returns A Promise of Group
   */
  removeGroupMember = (request: Readonly<RemoveGroupMemberRequest>) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalRemoveGroupMemberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/groups/${validatePathParam(
          'groupId',
          request.groupId,
        )}/remove-member`,
      },
      unmarshalGroup,
    )

  /**
   * Delete a group
   *
   * @param request - The request {@link DeleteGroupRequest}
   */
  deleteGroup = (request: Readonly<DeleteGroupRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/groups/${validatePathParam(
        'groupId',
        request.groupId,
      )}`,
    })

  protected pageOfListPolicies = (
    request: Readonly<ListPoliciesRequest> = {},
  ) =>
    this.client.fetch<ListPoliciesResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/policies`,
        urlParams: urlParams(
          ['application_ids', request.applicationIds],
          ['editable', request.editable],
          ['group_ids', request.groupIds],
          ['no_principal', request.noPrincipal],
          ['order_by', request.orderBy ?? 'policy_name_asc'],
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
          ['policy_name', request.policyName],
          ['user_ids', request.userIds],
        ),
      },
      unmarshalListPoliciesResponse,
    )

  /**
   * List policies of an organization
   *
   * @param request - The request {@link ListPoliciesRequest}
   * @returns A Promise of ListPoliciesResponse
   */
  listPolicies = (request: Readonly<ListPoliciesRequest> = {}) =>
    enrichForPagination('policies', this.pageOfListPolicies, request)

  /**
   * Create a new policy
   *
   * @param request - The request {@link CreatePolicyRequest}
   * @returns A Promise of Policy
   */
  createPolicy = (request: Readonly<CreatePolicyRequest>) =>
    this.client.fetch<Policy>(
      {
        body: JSON.stringify(
          marshalCreatePolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/policies`,
      },
      unmarshalPolicy,
    )

  /**
   * Get an existing policy
   *
   * @param request - The request {@link GetPolicyRequest}
   * @returns A Promise of Policy
   */
  getPolicy = (request: Readonly<GetPolicyRequest>) =>
    this.client.fetch<Policy>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/policies/${validatePathParam(
          'policyId',
          request.policyId,
        )}`,
      },
      unmarshalPolicy,
    )

  /**
   * Update an existing policy
   *
   * @param request - The request {@link UpdatePolicyRequest}
   * @returns A Promise of Policy
   */
  updatePolicy = (request: Readonly<UpdatePolicyRequest>) =>
    this.client.fetch<Policy>(
      {
        body: JSON.stringify(
          marshalUpdatePolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/policies/${validatePathParam(
          'policyId',
          request.policyId,
        )}`,
      },
      unmarshalPolicy,
    )

  /**
   * Delete a policy
   *
   * @param request - The request {@link DeletePolicyRequest}
   */
  deletePolicy = (request: Readonly<DeletePolicyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/policies/${validatePathParam(
        'policyId',
        request.policyId,
      )}`,
    })

  clonePolicy = (request: Readonly<ClonePolicyRequest>) =>
    this.client.fetch<Policy>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/policies/${validatePathParam(
          'policyId',
          request.policyId,
        )}/clone`,
      },
      unmarshalPolicy,
    )

  /**
   * Set rules of an existing policy
   *
   * @param request - The request {@link SetRulesRequest}
   * @returns A Promise of SetRulesResponse
   */
  setRules = (request: Readonly<SetRulesRequest>) =>
    this.client.fetch<SetRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/iam/v1alpha1/rules`,
      },
      unmarshalSetRulesResponse,
    )

  protected pageOfListRules = (request: Readonly<ListRulesRequest>) =>
    this.client.fetch<ListRulesResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/rules`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['policy_id', request.policyId],
        ),
      },
      unmarshalListRulesResponse,
    )

  /**
   * List rules of an existing policy
   *
   * @param request - The request {@link ListRulesRequest}
   * @returns A Promise of ListRulesResponse
   */
  listRules = (request: Readonly<ListRulesRequest>) =>
    enrichForPagination('rules', this.pageOfListRules, request)

  protected pageOfListPermissionSets = (
    request: Readonly<ListPermissionSetsRequest> = {},
  ) =>
    this.client.fetch<ListPermissionSetsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/permission-sets`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'name_asc'],
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
      unmarshalListPermissionSetsResponse,
    )

  /**
   * List permission sets
   *
   * @param request - The request {@link ListPermissionSetsRequest}
   * @returns A Promise of ListPermissionSetsResponse
   */
  listPermissionSets = (request: Readonly<ListPermissionSetsRequest> = {}) =>
    enrichForPagination(
      'permissionSets',
      this.pageOfListPermissionSets,
      request,
    )

  protected pageOfListAPIKeys = (request: Readonly<ListAPIKeysRequest> = {}) =>
    this.client.fetch<ListAPIKeysResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/api-keys`,
        urlParams: urlParams(
          ['access_key', request.accessKey],
          ['bearer_id', request.bearerId],
          ['bearer_type', request.bearerType ?? 'unknown_bearer_type'],
          ['description', request.description],
          ['editable', request.editable],
          ['expired', request.expired],
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
          ...Object.entries(
            resolveOneOf([
              {
                param: 'application_id',
                value: request.applicationId,
              },
              {
                param: 'user_id',
                value: request.userId,
              },
            ]),
          ),
        ),
      },
      unmarshalListAPIKeysResponse,
    )

  /**
   * List API keys
   *
   * @param request - The request {@link ListAPIKeysRequest}
   * @returns A Promise of ListAPIKeysResponse
   */
  listAPIKeys = (request: Readonly<ListAPIKeysRequest> = {}) =>
    enrichForPagination('apiKeys', this.pageOfListAPIKeys, request)

  /**
   * Create an API key
   *
   * @param request - The request {@link CreateAPIKeyRequest}
   * @returns A Promise of APIKey
   */
  createAPIKey = (request: Readonly<CreateAPIKeyRequest>) =>
    this.client.fetch<APIKey>(
      {
        body: JSON.stringify(
          marshalCreateAPIKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/api-keys`,
      },
      unmarshalAPIKey,
    )

  /**
   * Get an API key
   *
   * @param request - The request {@link GetAPIKeyRequest}
   * @returns A Promise of APIKey
   */
  getAPIKey = (request: Readonly<GetAPIKeyRequest>) =>
    this.client.fetch<APIKey>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/api-keys/${validatePathParam(
          'accessKey',
          request.accessKey,
        )}`,
      },
      unmarshalAPIKey,
    )

  /**
   * Update an API key
   *
   * @param request - The request {@link UpdateAPIKeyRequest}
   * @returns A Promise of APIKey
   */
  updateAPIKey = (request: Readonly<UpdateAPIKeyRequest>) =>
    this.client.fetch<APIKey>(
      {
        body: JSON.stringify(
          marshalUpdateAPIKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/api-keys/${validatePathParam(
          'accessKey',
          request.accessKey,
        )}`,
      },
      unmarshalAPIKey,
    )

  /**
   * Delete an API key
   *
   * @param request - The request {@link DeleteAPIKeyRequest}
   */
  deleteAPIKey = (request: Readonly<DeleteAPIKeyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/api-keys/${validatePathParam(
        'accessKey',
        request.accessKey,
      )}`,
    })

  protected pageOfListQuota = (request: Readonly<ListQuotaRequest> = {}) =>
    this.client.fetch<ListQuotaResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/quota`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'name_asc'],
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
      unmarshalListQuotaResponse,
    )

  listQuota = (request: Readonly<ListQuotaRequest> = {}) =>
    enrichForPagination('quota', this.pageOfListQuota, request)

  getQuotum = (request: Readonly<GetQuotumRequest>) =>
    this.client.fetch<Quotum>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/quota/${validatePathParam(
          'quotumName',
          request.quotumName,
        )}`,
        urlParams: urlParams([
          'organization_id',
          request.organizationId ?? this.client.settings.defaultOrganizationId,
        ]),
      },
      unmarshalQuotum,
    )
}
