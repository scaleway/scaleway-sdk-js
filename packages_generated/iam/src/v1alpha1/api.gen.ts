// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import {
  enrichForPagination,
  API as ParentAPI,
  resolveOneOf,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import {
  marshalAddGroupMemberRequest,
  marshalAddGroupMembersRequest,
  marshalAddSamlCertificateRequest,
  marshalCreateAPIKeyRequest,
  marshalCreateApplicationRequest,
  marshalCreateGroupRequest,
  marshalCreateJWTRequest,
  marshalCreatePolicyRequest,
  marshalCreateSSHKeyRequest,
  marshalCreateUserRequest,
  marshalJoinUserConnectionRequest,
  marshalParseSamlMetadataRequest,
  marshalRemoveGroupMemberRequest,
  marshalRemoveUserConnectionRequest,
  marshalSetGroupMembersRequest,
  marshalSetOrganizationAliasRequest,
  marshalSetRulesRequest,
  marshalUpdateAPIKeyRequest,
  marshalUpdateApplicationRequest,
  marshalUpdateGroupRequest,
  marshalUpdateOrganizationLoginMethodsRequest,
  marshalUpdateOrganizationSecuritySettingsRequest,
  marshalUpdatePolicyRequest,
  marshalUpdateSamlRequest,
  marshalUpdateSSHKeyRequest,
  marshalUpdateUserPasswordRequest,
  marshalUpdateUserRequest,
  marshalUpdateUserUsernameRequest,
  marshalValidateUserMFAOTPRequest,
  unmarshalAPIKey,
  unmarshalApplication,
  unmarshalCreateScimTokenResponse,
  unmarshalEncodedJWT,
  unmarshalGetUserConnectionsResponse,
  unmarshalGroup,
  unmarshalInitiateUserConnectionResponse,
  unmarshalJWT,
  unmarshalListAPIKeysResponse,
  unmarshalListApplicationsResponse,
  unmarshalListGracePeriodsResponse,
  unmarshalListGroupsResponse,
  unmarshalListJWTsResponse,
  unmarshalListLogsResponse,
  unmarshalListPermissionSetsResponse,
  unmarshalListPoliciesResponse,
  unmarshalListQuotaResponse,
  unmarshalListRulesResponse,
  unmarshalListSamlCertificatesResponse,
  unmarshalListScimTokensResponse,
  unmarshalListSSHKeysResponse,
  unmarshalListUsersResponse,
  unmarshalLog,
  unmarshalMFAOTP,
  unmarshalOrganization,
  unmarshalOrganizationSecuritySettings,
  unmarshalParseSamlMetadataResponse,
  unmarshalPolicy,
  unmarshalQuotum,
  unmarshalSaml,
  unmarshalSamlCertificate,
  unmarshalScim,
  unmarshalSetRulesResponse,
  unmarshalSSHKey,
  unmarshalUser,
  unmarshalValidateUserMFAOTPResponse,
} from './marshalling.gen.js'
import type {
  AddGroupMemberRequest,
  AddGroupMembersRequest,
  AddSamlCertificateRequest,
  APIKey,
  Application,
  ClonePolicyRequest,
  CreateAPIKeyRequest,
  CreateApplicationRequest,
  CreateGroupRequest,
  CreateJWTRequest,
  CreatePolicyRequest,
  CreateScimTokenRequest,
  CreateScimTokenResponse,
  CreateSSHKeyRequest,
  CreateUserMFAOTPRequest,
  CreateUserRequest,
  DeleteAPIKeyRequest,
  DeleteApplicationRequest,
  DeleteGroupRequest,
  DeleteJWTRequest,
  DeletePolicyRequest,
  DeleteSamlCertificateRequest,
  DeleteSamlRequest,
  DeleteScimRequest,
  DeleteScimTokenRequest,
  DeleteSSHKeyRequest,
  DeleteUserMFAOTPRequest,
  DeleteUserRequest,
  EnableOrganizationSamlRequest,
  EnableOrganizationScimRequest,
  EncodedJWT,
  GetAPIKeyRequest,
  GetApplicationRequest,
  GetGroupRequest,
  GetJWTRequest,
  GetLogRequest,
  GetOrganizationRequest,
  GetOrganizationSamlRequest,
  GetOrganizationScimRequest,
  GetOrganizationSecuritySettingsRequest,
  GetPolicyRequest,
  GetQuotumRequest,
  GetSSHKeyRequest,
  GetUserConnectionsRequest,
  GetUserConnectionsResponse,
  GetUserRequest,
  Group,
  InitiateUserConnectionRequest,
  InitiateUserConnectionResponse,
  JoinUserConnectionRequest,
  JWT,
  ListAPIKeysRequest,
  ListAPIKeysResponse,
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListGracePeriodsRequest,
  ListGracePeriodsResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListJWTsRequest,
  ListJWTsResponse,
  ListLogsRequest,
  ListLogsResponse,
  ListPermissionSetsRequest,
  ListPermissionSetsResponse,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListQuotaRequest,
  ListQuotaResponse,
  ListRulesRequest,
  ListRulesResponse,
  ListSamlCertificatesRequest,
  ListSamlCertificatesResponse,
  ListScimTokensRequest,
  ListScimTokensResponse,
  ListSSHKeysRequest,
  ListSSHKeysResponse,
  ListUsersRequest,
  ListUsersResponse,
  LockUserRequest,
  Log,
  MFAOTP,
  Organization,
  OrganizationSecuritySettings,
  ParseSamlMetadataRequest,
  ParseSamlMetadataResponse,
  Policy,
  Quotum,
  RemoveGroupMemberRequest,
  RemoveUserConnectionRequest,
  Saml,
  SamlCertificate,
  Scim,
  SetGroupMembersRequest,
  SetOrganizationAliasRequest,
  SetRulesRequest,
  SetRulesResponse,
  SSHKey,
  UnlockUserRequest,
  UpdateAPIKeyRequest,
  UpdateApplicationRequest,
  UpdateGroupRequest,
  UpdateOrganizationLoginMethodsRequest,
  UpdateOrganizationSecuritySettingsRequest,
  UpdatePolicyRequest,
  UpdateSamlRequest,
  UpdateSSHKeyRequest,
  UpdateUserPasswordRequest,
  UpdateUserRequest,
  UpdateUserUsernameRequest,
  User,
  ValidateUserMFAOTPRequest,
  ValidateUserMFAOTPResponse,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * IAM API.

This API allows you to manage Identity and Access Management (IAM) across your Scaleway Organizations, Projects and resources.
 */
export class API extends ParentAPI {
  protected pageOfListSSHKeys = (request: Readonly<ListSSHKeysRequest> = {}) =>
    this.client.fetch<ListSSHKeysResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/ssh-keys`,
        urlParams: urlParams(
          ['disabled', request.disabled],
          ['name', request.name],
          ['order_by', request.orderBy],
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
   * List SSH keys. List SSH keys. By default, the SSH keys listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You can define additional parameters for your query such as `organization_id`, `name`, `project_id` and `disabled`.
   *
   * @param request - The request {@link ListSSHKeysRequest}
   * @returns A Promise of ListSSHKeysResponse
   */
  listSSHKeys = (request: Readonly<ListSSHKeysRequest> = {}) =>
    enrichForPagination('sshKeys', this.pageOfListSSHKeys, request)

  /**
   * Create an SSH key. Add a new SSH key to a Scaleway Project. You must specify the `name`, `public_key` and `project_id`.
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
   * Get an SSH key. Retrieve information about a given SSH key, specified by the `ssh_key_id` parameter. The SSH key's full details, including `id`, `name`, `public_key`, and `project_id` are returned in the response.
   *
   * @param request - The request {@link GetSSHKeyRequest}
   * @returns A Promise of SSHKey
   */
  getSSHKey = (request: Readonly<GetSSHKeyRequest>) =>
    this.client.fetch<SSHKey>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/ssh-keys/${validatePathParam('sshKeyId', request.sshKeyId)}`,
      },
      unmarshalSSHKey,
    )

  /**
   * Update an SSH key. Update the parameters of an SSH key, including `name` and `disable`.
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
        path: `/iam/v1alpha1/ssh-keys/${validatePathParam('sshKeyId', request.sshKeyId)}`,
      },
      unmarshalSSHKey,
    )

  /**
   * Delete an SSH key. Delete a given SSH key, specified by the `ssh_key_id`. Deleting an SSH is permanent, and cannot be undone. Note that you might need to update any configurations that used the SSH key.
   *
   * @param request - The request {@link DeleteSSHKeyRequest}
   */
  deleteSSHKey = (request: Readonly<DeleteSSHKeyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/ssh-keys/${validatePathParam('sshKeyId', request.sshKeyId)}`,
    })

  protected pageOfListUsers = (request: Readonly<ListUsersRequest> = {}) =>
    this.client.fetch<ListUsersResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/users`,
        urlParams: urlParams(
          ['mfa', request.mfa],
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
          ['tag', request.tag],
          ['type', request.type],
          ['user_ids', request.userIds],
        ),
      },
      unmarshalListUsersResponse,
    )

  /**
   * List users of an Organization. List the users of an Organization. By default, the users listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You must define the `organization_id` in the query path of your request. You can also define additional parameters for your query such as `user_ids`.
   *
   * @param request - The request {@link ListUsersRequest}
   * @returns A Promise of ListUsersResponse
   */
  listUsers = (request: Readonly<ListUsersRequest> = {}) =>
    enrichForPagination('users', this.pageOfListUsers, request)

  /**
   * Get a given user. Retrieve information about a user, specified by the `user_id` parameter. The user's full details, including `id`, `email`, `organization_id`, `status` and `mfa` are returned in the response.
   *
   * @param request - The request {@link GetUserRequest}
   * @returns A Promise of User
   */
  getUser = (request: Readonly<GetUserRequest>) =>
    this.client.fetch<User>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}`,
      },
      unmarshalUser,
    )

  /**
   * Update a user. Update the parameters of a user, including `tags`.
   *
   * @param request - The request {@link UpdateUserRequest}
   * @returns A Promise of User
   */
  updateUser = (request: Readonly<UpdateUserRequest>) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalUpdateUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}`,
      },
      unmarshalUser,
    )

  /**
   * Delete a guest user from an Organization. Remove a user from an Organization in which they are a guest. You must define the `user_id` in your request. Note that removing a user from an Organization automatically deletes their API keys, and any policies directly attached to them become orphaned.
   *
   * @param request - The request {@link DeleteUserRequest}
   */
  deleteUser = (request: Readonly<DeleteUserRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}`,
    })

  /**
   * Create a new user. Create a new user. You must define the `organization_id` in your request. If you are adding a member, enter the member's details. If you are adding a guest, you must define the `email` and not add the member attribute.
   *
   * @param request - The request {@link CreateUserRequest}
   * @returns A Promise of User
   */
  createUser = (request: Readonly<CreateUserRequest> = {}) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalCreateUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users`,
      },
      unmarshalUser,
    )

  /**
   * Update an user's username.. Update an user's username.
   *
   * @param request - The request {@link UpdateUserUsernameRequest}
   * @returns A Promise of User
   */
  updateUserUsername = (request: Readonly<UpdateUserUsernameRequest>) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalUpdateUserUsernameRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/update-username`,
      },
      unmarshalUser,
    )

  /**
   * Update an user's password.. Update an user's password.
   *
   * @param request - The request {@link UpdateUserPasswordRequest}
   * @returns A Promise of User
   */
  updateUserPassword = (request: Readonly<UpdateUserPasswordRequest>) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalUpdateUserPasswordRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/update-password`,
      },
      unmarshalUser,
    )

  /**
   * Create a MFA OTP.. Create a MFA OTP.
   *
   * @param request - The request {@link CreateUserMFAOTPRequest}
   * @returns A Promise of MFAOTP
   */
  createUserMFAOTP = (request: Readonly<CreateUserMFAOTPRequest>) =>
    this.client.fetch<MFAOTP>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/mfa-otp`,
      },
      unmarshalMFAOTP,
    )

  /**
   * Validate a MFA OTP.. Validate a MFA OTP.
   *
   * @param request - The request {@link ValidateUserMFAOTPRequest}
   * @returns A Promise of ValidateUserMFAOTPResponse
   */
  validateUserMFAOTP = (request: Readonly<ValidateUserMFAOTPRequest>) =>
    this.client.fetch<ValidateUserMFAOTPResponse>(
      {
        body: JSON.stringify(
          marshalValidateUserMFAOTPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/validate-mfa-otp`,
      },
      unmarshalValidateUserMFAOTPResponse,
    )

  /**
   * Delete a MFA OTP.. Delete a MFA OTP.
   *
   * @param request - The request {@link DeleteUserMFAOTPRequest}
   */
  deleteUserMFAOTP = (request: Readonly<DeleteUserMFAOTPRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'DELETE',
      path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/mfa-otp`,
    })

  /**
   * Lock a member. Lock a member. A locked member cannot log in or use API keys until the locked status is removed.
   *
   * @param request - The request {@link LockUserRequest}
   * @returns A Promise of User
   */
  lockUser = (request: Readonly<LockUserRequest>) =>
    this.client.fetch<User>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/lock`,
      },
      unmarshalUser,
    )

  /**
   * Unlock a member.
   *
   * @param request - The request {@link UnlockUserRequest}
   * @returns A Promise of User
   */
  unlockUser = (request: Readonly<UnlockUserRequest>) =>
    this.client.fetch<User>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/unlock`,
      },
      unmarshalUser,
    )

  /**
   * List grace periods of a member. List the grace periods of a member.
   *
   * @param request - The request {@link ListGracePeriodsRequest}
   * @returns A Promise of ListGracePeriodsResponse
   */
  listGracePeriods = (request: Readonly<ListGracePeriodsRequest> = {}) =>
    this.client.fetch<ListGracePeriodsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/grace-periods`,
        urlParams: urlParams(['user_id', request.userId]),
      },
      unmarshalListGracePeriodsResponse,
    )

  getUserConnections = (request: Readonly<GetUserConnectionsRequest>) =>
    this.client.fetch<GetUserConnectionsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/connections`,
      },
      unmarshalGetUserConnectionsResponse,
    )

  initiateUserConnection = (request: Readonly<InitiateUserConnectionRequest>) =>
    this.client.fetch<InitiateUserConnectionResponse>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/initiate-connection`,
      },
      unmarshalInitiateUserConnectionResponse,
    )

  joinUserConnection = (request: Readonly<JoinUserConnectionRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalJoinUserConnectionRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/join-connection`,
    })

  removeUserConnection = (request: Readonly<RemoveUserConnectionRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRemoveUserConnectionRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/remove-connection`,
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
          ['tag', request.tag],
        ),
      },
      unmarshalListApplicationsResponse,
    )

  /**
   * List applications of an Organization. List the applications of an Organization. By default, the applications listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You must define the `organization_id` in the query path of your request. You can also define additional parameters for your query such as `application_ids`.
   *
   * @param request - The request {@link ListApplicationsRequest}
   * @returns A Promise of ListApplicationsResponse
   */
  listApplications = (request: Readonly<ListApplicationsRequest> = {}) =>
    enrichForPagination('applications', this.pageOfListApplications, request)

  /**
   * Create a new application. Create a new application. You must define the `name` parameter in the request.
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
   * Get a given application. Retrieve information about an application, specified by the `application_id` parameter. The application's full details, including `id`, `email`, `organization_id`, `status` and `two_factor_enabled` are returned in the response.
   *
   * @param request - The request {@link GetApplicationRequest}
   * @returns A Promise of Application
   */
  getApplication = (request: Readonly<GetApplicationRequest>) =>
    this.client.fetch<Application>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/applications/${validatePathParam('applicationId', request.applicationId)}`,
      },
      unmarshalApplication,
    )

  /**
   * Update an application. Update the parameters of an application, including `name` and `description`.
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
        path: `/iam/v1alpha1/applications/${validatePathParam('applicationId', request.applicationId)}`,
      },
      unmarshalApplication,
    )

  /**
   * Delete an application. Delete an application. Note that this action is irreversible and will automatically delete the application's API keys. Policies attached to users and applications via this group will no longer apply.
   *
   * @param request - The request {@link DeleteApplicationRequest}
   */
  deleteApplication = (request: Readonly<DeleteApplicationRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/applications/${validatePathParam('applicationId', request.applicationId)}`,
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
          ['tag', request.tag],
          ['user_ids', request.userIds],
        ),
      },
      unmarshalListGroupsResponse,
    )

  /**
   * List groups. List groups. By default, the groups listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You can define additional parameters to filter your query. Use `user_ids` or `application_ids` to list all groups certain users or applications belong to.
   *
   * @param request - The request {@link ListGroupsRequest}
   * @returns A Promise of ListGroupsResponse
   */
  listGroups = (request: Readonly<ListGroupsRequest> = {}) =>
    enrichForPagination('groups', this.pageOfListGroups, request)

  /**
   * Create a group. Create a new group. You must define the `name` and `organization_id` parameters in the request.
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
   * Get a group. Retrieve information about a given group, specified by the `group_id` parameter. The group's full details, including `user_ids` and `application_ids` are returned in the response.
   *
   * @param request - The request {@link GetGroupRequest}
   * @returns A Promise of Group
   */
  getGroup = (request: Readonly<GetGroupRequest>) =>
    this.client.fetch<Group>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}`,
      },
      unmarshalGroup,
    )

  /**
   * Update a group. Update the parameters of group, including `name` and `description`.
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
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}`,
      },
      unmarshalGroup,
    )

  /**
   * Overwrite users and applications of a group. Overwrite users and applications configuration in a group. Any information that you add using this command will overwrite the previous configuration.
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
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}/members`,
      },
      unmarshalGroup,
    )

  /**
   * Add a user or an application to a group. Add a user or an application to a group. You can specify a `user_id` and `application_id` in the body of your request. Note that you can only add one of each per request.
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
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}/add-member`,
      },
      unmarshalGroup,
    )

  /**
   * Add multiple users and applications to a group. Add multiple users and applications to a group in a single call. You can specify an array of `user_id`s and `application_id`s. Note that any existing users and applications in the group will remain. To add new users/applications and delete pre-existing ones, use the [Overwrite users and applications of a group](#path-groups-overwrite-users-and-applications-of-a-group) method.
   *
   * @param request - The request {@link AddGroupMembersRequest}
   * @returns A Promise of Group
   */
  addGroupMembers = (request: Readonly<AddGroupMembersRequest>) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalAddGroupMembersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}/add-members`,
      },
      unmarshalGroup,
    )

  /**
   * Remove a user or an application from a group. Remove a user or an application from a group. You can specify a `user_id` and `application_id` in the body of your request. Note that you can only remove one of each per request. Removing a user from a group means that any permissions given to them via the group (i.e. from an attached policy) will no longer apply. Be sure you want to remove these permissions from the user before proceeding.
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
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}/remove-member`,
      },
      unmarshalGroup,
    )

  /**
   * Delete a group. Delete a group. Note that this action is irreversible and could delete permissions for group members. Policies attached to users and applications via this group will no longer apply.
   *
   * @param request - The request {@link DeleteGroupRequest}
   */
  deleteGroup = (request: Readonly<DeleteGroupRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}`,
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
          ['policy_ids', request.policyIds],
          ['policy_name', request.policyName],
          ['tag', request.tag],
          ['user_ids', request.userIds],
        ),
      },
      unmarshalListPoliciesResponse,
    )

  /**
   * List policies of an Organization. List the policies of an Organization. By default, the policies listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You must define the `organization_id` in the query path of your request. You can also define additional parameters to filter your query, such as `user_ids`, `groups_ids`, `application_ids`, and `policy_name`.
   *
   * @param request - The request {@link ListPoliciesRequest}
   * @returns A Promise of ListPoliciesResponse
   */
  listPolicies = (request: Readonly<ListPoliciesRequest> = {}) =>
    enrichForPagination('policies', this.pageOfListPolicies, request)

  /**
   * Create a new policy. Create a new application. You must define the `name` parameter in the request. You can specify parameters such as `user_id`, `groups_id`, `application_id`, `no_principal`, `rules` and its child attributes.
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
   * Get an existing policy. Retrieve information about a policy, specified by the `policy_id` parameter. The policy's full details, including `id`, `name`, `organization_id`, `nb_rules` and `nb_scopes`, `nb_permission_sets` are returned in the response.
   *
   * @param request - The request {@link GetPolicyRequest}
   * @returns A Promise of Policy
   */
  getPolicy = (request: Readonly<GetPolicyRequest>) =>
    this.client.fetch<Policy>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/policies/${validatePathParam('policyId', request.policyId)}`,
      },
      unmarshalPolicy,
    )

  /**
   * Update an existing policy. Update the parameters of a policy, including `name`, `description`, `user_id`, `group_id`, `application_id` and `no_principal`.
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
        path: `/iam/v1alpha1/policies/${validatePathParam('policyId', request.policyId)}`,
      },
      unmarshalPolicy,
    )

  /**
   * Delete a policy. Delete a policy. You must define specify the `policy_id` parameter in your request. Note that when deleting a policy, all permissions it gives to its principal (user, group or application) will be revoked.
   *
   * @param request - The request {@link DeletePolicyRequest}
   */
  deletePolicy = (request: Readonly<DeletePolicyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/policies/${validatePathParam('policyId', request.policyId)}`,
    })

  /**
   * Clone a policy. Clone a policy. You must define specify the `policy_id` parameter in your request.
   *
   * @param request - The request {@link ClonePolicyRequest}
   * @returns A Promise of Policy
   */
  clonePolicy = (request: Readonly<ClonePolicyRequest>) =>
    this.client.fetch<Policy>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/policies/${validatePathParam('policyId', request.policyId)}/clone`,
      },
      unmarshalPolicy,
    )

  /**
   * Set rules of a given policy. Overwrite the rules of a given policy. Any information that you add using this command will overwrite the previous configuration. If you include some of the rules you already had in your previous configuration in your new one, but you change their order, the new order of display will apply. While policy rules are ordered, they have no impact on the access logic of IAM because rules are allow-only.
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
   * List rules of a given policy. List the rules of a given policy. By default, the rules listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You must define the `policy_id` in the query path of your request.
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
      unmarshalListPermissionSetsResponse,
    )

  /**
   * List permission sets. List permission sets available for given Organization. You must define the `organization_id` in the query path of your request.
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
          ['access_keys', request.accessKeys],
          ['bearer_id', request.bearerId],
          ['bearer_type', request.bearerType],
          ['description', request.description],
          ['editable', request.editable],
          ['expired', request.expired],
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
          ...Object.entries(
            resolveOneOf([
              { param: 'application_id', value: request.applicationId },
              { param: 'user_id', value: request.userId },
            ]),
          ),
        ),
      },
      unmarshalListAPIKeysResponse,
    )

  /**
   * List API keys. List API keys. By default, the API keys listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You can define additional parameters for your query such as `editable`, `expired`, `access_key` and `bearer_id`.
   *
   * @param request - The request {@link ListAPIKeysRequest}
   * @returns A Promise of ListAPIKeysResponse
   */
  listAPIKeys = (request: Readonly<ListAPIKeysRequest> = {}) =>
    enrichForPagination('apiKeys', this.pageOfListAPIKeys, request)

  /**
   * Create an API key. Create an API key. You must specify the `application_id` or the `user_id` and the description. You can also specify the `default_project_id`, which is the Project ID of your preferred Project, to use with Object Storage. The `access_key` and `secret_key` values are returned in the response. Note that the secret key is only shown once. Make sure that you copy and store both keys somewhere safe.
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
   * Get an API key. Retrieve information about an API key, specified by the `access_key` parameter. The API key's details, including either the `user_id` or `application_id` of its bearer are returned in the response. Note that the string value for the `secret_key` is nullable, and therefore is not displayed in the response. The `secret_key` value is only displayed upon API key creation.
   *
   * @param request - The request {@link GetAPIKeyRequest}
   * @returns A Promise of APIKey
   */
  getAPIKey = (request: Readonly<GetAPIKeyRequest>) =>
    this.client.fetch<APIKey>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/api-keys/${validatePathParam('accessKey', request.accessKey)}`,
      },
      unmarshalAPIKey,
    )

  /**
   * Update an API key. Update the parameters of an API key, including `default_project_id` and `description`.
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
        path: `/iam/v1alpha1/api-keys/${validatePathParam('accessKey', request.accessKey)}`,
      },
      unmarshalAPIKey,
    )

  /**
   * Delete an API key. Delete an API key. Note that this action is irreversible and cannot be undone. Make sure you update any configurations using the API keys you delete.
   *
   * @param request - The request {@link DeleteAPIKeyRequest}
   */
  deleteAPIKey = (request: Readonly<DeleteAPIKeyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/api-keys/${validatePathParam('accessKey', request.accessKey)}`,
    })

  protected pageOfListQuota = (request: Readonly<ListQuotaRequest> = {}) =>
    this.client.fetch<ListQuotaResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/quota`,
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
          ['quotum_names', request.quotumNames],
        ),
      },
      unmarshalListQuotaResponse,
    )

  /**
   * List all quotas in the Organization. List all product and features quota for an Organization, with their associated limits. By default, the quota listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You must define the `organization_id` in the query path of your request.
   *
   * @param request - The request {@link ListQuotaRequest}
   * @returns A Promise of ListQuotaResponse
   */
  listQuota = (request: Readonly<ListQuotaRequest> = {}) =>
    enrichForPagination('quota', this.pageOfListQuota, request)

  /**
   * Get a quota in the Organization. Retrieve information about a resource quota, specified by the `quotum_name` parameter. The quota's `limit`, or whether it is unlimited, is returned in the response.
   *
   * @param request - The request {@link GetQuotumRequest}
   * @returns A Promise of Quotum
   */
  getQuotum = (request: Readonly<GetQuotumRequest>) =>
    this.client.fetch<Quotum>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/quota/${validatePathParam('quotumName', request.quotumName)}`,
        urlParams: urlParams([
          'organization_id',
          request.organizationId ?? this.client.settings.defaultOrganizationId,
        ]),
      },
      unmarshalQuotum,
    )

  protected pageOfListJWTs = (request: Readonly<ListJWTsRequest>) =>
    this.client.fetch<ListJWTsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/jwts`,
        urlParams: urlParams(
          ['audience_id', request.audienceId],
          ['expired', request.expired],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListJWTsResponse,
    )

  /**
   * List JWTs.
   *
   * @param request - The request {@link ListJWTsRequest}
   * @returns A Promise of ListJWTsResponse
   */
  listJWTs = (request: Readonly<ListJWTsRequest>) =>
    enrichForPagination('jwts', this.pageOfListJWTs, request)

  /**
   * Create a JWT.
   *
   * @param request - The request {@link CreateJWTRequest}
   * @returns A Promise of EncodedJWT
   */
  createJWT = (request: Readonly<CreateJWTRequest>) =>
    this.client.fetch<EncodedJWT>(
      {
        body: JSON.stringify(
          marshalCreateJWTRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/jwts`,
      },
      unmarshalEncodedJWT,
    )

  /**
   * Get a JWT.
   *
   * @param request - The request {@link GetJWTRequest}
   * @returns A Promise of JWT
   */
  getJWT = (request: Readonly<GetJWTRequest>) =>
    this.client.fetch<JWT>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/jwts/${validatePathParam('jti', request.jti)}`,
      },
      unmarshalJWT,
    )

  /**
   * Delete a JWT.
   *
   * @param request - The request {@link DeleteJWTRequest}
   */
  deleteJWT = (request: Readonly<DeleteJWTRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/jwts/${validatePathParam('jti', request.jti)}`,
    })

  protected pageOfListLogs = (request: Readonly<ListLogsRequest> = {}) =>
    this.client.fetch<ListLogsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/logs`,
        urlParams: urlParams(
          ['action', request.action],
          ['created_after', request.createdAfter],
          ['created_before', request.createdBefore],
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
          ['resource_type', request.resourceType],
          ['search', request.search],
        ),
      },
      unmarshalListLogsResponse,
    )

  /**
   * List logs. List logs available for given Organization. You must define the `organization_id` in the query path of your request.
   *
   * @param request - The request {@link ListLogsRequest}
   * @returns A Promise of ListLogsResponse
   */
  listLogs = (request: Readonly<ListLogsRequest> = {}) =>
    enrichForPagination('logs', this.pageOfListLogs, request)

  /**
   * Get a log. Retrieve information about a log, specified by the `log_id` parameter. The log's full details, including `id`, `ip`, `user_agent`, `action`, `bearer_id`, `resource_type` and `resource_id` are returned in the response.
   *
   * @param request - The request {@link GetLogRequest}
   * @returns A Promise of Log
   */
  getLog = (request: Readonly<GetLogRequest>) =>
    this.client.fetch<Log>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/logs/${validatePathParam('logId', request.logId)}`,
      },
      unmarshalLog,
    )

  /**
   * Get security settings of an Organization. Retrieve information about the security settings of an Organization, specified by the `organization_id` parameter.
   *
   * @param request - The request {@link GetOrganizationSecuritySettingsRequest}
   * @returns A Promise of OrganizationSecuritySettings
   */
  getOrganizationSecuritySettings = (
    request: Readonly<GetOrganizationSecuritySettingsRequest> = {},
  ) =>
    this.client.fetch<OrganizationSecuritySettings>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/security-settings`,
      },
      unmarshalOrganizationSecuritySettings,
    )

  /**
   * Update the security settings of an Organization.
   *
   * @param request - The request {@link UpdateOrganizationSecuritySettingsRequest}
   * @returns A Promise of OrganizationSecuritySettings
   */
  updateOrganizationSecuritySettings = (
    request: Readonly<UpdateOrganizationSecuritySettingsRequest> = {},
  ) =>
    this.client.fetch<OrganizationSecuritySettings>(
      {
        body: JSON.stringify(
          marshalUpdateOrganizationSecuritySettingsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/security-settings`,
      },
      unmarshalOrganizationSecuritySettings,
    )

  /**
   * Set your Organization's alias.. This will fail if an alias has already been defined. Please contact support if you need to change your Organization's alias.
   *
   * @param request - The request {@link SetOrganizationAliasRequest}
   * @returns A Promise of Organization
   */
  setOrganizationAlias = (request: Readonly<SetOrganizationAliasRequest>) =>
    this.client.fetch<Organization>(
      {
        body: JSON.stringify(
          marshalSetOrganizationAliasRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/alias`,
      },
      unmarshalOrganization,
    )

  /**
   * Get your Organization's IAM information.
   *
   * @param request - The request {@link GetOrganizationRequest}
   * @returns A Promise of Organization
   */
  getOrganization = (request: Readonly<GetOrganizationRequest> = {}) =>
    this.client.fetch<Organization>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}`,
      },
      unmarshalOrganization,
    )

  /**
   * Set your Organization's allowed login methods.. Set your Organization's allowed login methods.
   *
   * @param request - The request {@link UpdateOrganizationLoginMethodsRequest}
   * @returns A Promise of Organization
   */
  updateOrganizationLoginMethods = (
    request: Readonly<UpdateOrganizationLoginMethodsRequest> = {},
  ) =>
    this.client.fetch<Organization>(
      {
        body: JSON.stringify(
          marshalUpdateOrganizationLoginMethodsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/login-methods`,
      },
      unmarshalOrganization,
    )

  /**
   * Get SAML Identity Provider configuration of an Organization.
   *
   * @param request - The request {@link GetOrganizationSamlRequest}
   * @returns A Promise of Saml
   */
  getOrganizationSaml = (request: Readonly<GetOrganizationSamlRequest> = {}) =>
    this.client.fetch<Saml>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/saml`,
      },
      unmarshalSaml,
    )

  /**
   * Enable SAML Identity Provider for an Organization.
   *
   * @param request - The request {@link EnableOrganizationSamlRequest}
   * @returns A Promise of Saml
   */
  enableOrganizationSaml = (
    request: Readonly<EnableOrganizationSamlRequest> = {},
  ) =>
    this.client.fetch<Saml>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/saml`,
      },
      unmarshalSaml,
    )

  /**
   * Update SAML Identity Provider configuration.
   *
   * @param request - The request {@link UpdateSamlRequest}
   * @returns A Promise of Saml
   */
  updateSaml = (request: Readonly<UpdateSamlRequest>) =>
    this.client.fetch<Saml>(
      {
        body: JSON.stringify(
          marshalUpdateSamlRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/saml/${validatePathParam('samlId', request.samlId)}`,
      },
      unmarshalSaml,
    )

  /**
   * Disable SAML Identity Provider for an Organization.
   *
   * @param request - The request {@link DeleteSamlRequest}
   */
  deleteSaml = (request: Readonly<DeleteSamlRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/saml/${validatePathParam('samlId', request.samlId)}`,
    })

  /**
   * Parse SAML xml metadata file.
   *
   * @param request - The request {@link ParseSamlMetadataRequest}
   * @returns A Promise of ParseSamlMetadataResponse
   */
  parseSamlMetadata = async (request: Readonly<ParseSamlMetadataRequest>) =>
    this.client.fetch<ParseSamlMetadataResponse>(
      {
        body: JSON.stringify(
          await marshalParseSamlMetadataRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/parse-saml-metadata`,
      },
      unmarshalParseSamlMetadataResponse,
    )

  /**
   * List SAML certificates.
   *
   * @param request - The request {@link ListSamlCertificatesRequest}
   * @returns A Promise of ListSamlCertificatesResponse
   */
  listSamlCertificates = (request: Readonly<ListSamlCertificatesRequest>) =>
    this.client.fetch<ListSamlCertificatesResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/saml/${validatePathParam('samlId', request.samlId)}/certificates`,
      },
      unmarshalListSamlCertificatesResponse,
    )

  /**
   * Add a SAML certificate.
   *
   * @param request - The request {@link AddSamlCertificateRequest}
   * @returns A Promise of SamlCertificate
   */
  addSamlCertificate = (request: Readonly<AddSamlCertificateRequest>) =>
    this.client.fetch<SamlCertificate>(
      {
        body: JSON.stringify(
          marshalAddSamlCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/saml/${validatePathParam('samlId', request.samlId)}/certificates`,
      },
      unmarshalSamlCertificate,
    )

  /**
   * Delete a SAML certificate.
   *
   * @param request - The request {@link DeleteSamlCertificateRequest}
   */
  deleteSamlCertificate = (request: Readonly<DeleteSamlCertificateRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/saml-certificates/${validatePathParam('certificateId', request.certificateId)}`,
    })

  /**
   * Get SCIM configuration of an Organization.
   *
   * @param request - The request {@link GetOrganizationScimRequest}
   * @returns A Promise of Scim
   */
  getOrganizationScim = (request: Readonly<GetOrganizationScimRequest> = {}) =>
    this.client.fetch<Scim>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/scim`,
      },
      unmarshalScim,
    )

  /**
   * Enable SCIM for an Organization.
   *
   * @param request - The request {@link EnableOrganizationScimRequest}
   * @returns A Promise of Scim
   */
  enableOrganizationScim = (
    request: Readonly<EnableOrganizationScimRequest> = {},
  ) =>
    this.client.fetch<Scim>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/scim`,
      },
      unmarshalScim,
    )

  /**
   * Disable SCIM for an Organization.
   *
   * @param request - The request {@link DeleteScimRequest}
   */
  deleteScim = (request: Readonly<DeleteScimRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/scim/${validatePathParam('scimId', request.scimId)}`,
    })

  protected pageOfListScimTokens = (request: Readonly<ListScimTokensRequest>) =>
    this.client.fetch<ListScimTokensResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/scim/${validatePathParam('scimId', request.scimId)}/tokens`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListScimTokensResponse,
    )

  /**
   * List SCIM tokens.
   *
   * @param request - The request {@link ListScimTokensRequest}
   * @returns A Promise of ListScimTokensResponse
   */
  listScimTokens = (request: Readonly<ListScimTokensRequest>) =>
    enrichForPagination('scimTokens', this.pageOfListScimTokens, request)

  /**
   * Create a SCIM token.
   *
   * @param request - The request {@link CreateScimTokenRequest}
   * @returns A Promise of CreateScimTokenResponse
   */
  createScimToken = (request: Readonly<CreateScimTokenRequest>) =>
    this.client.fetch<CreateScimTokenResponse>(
      {
        method: 'POST',
        path: `/iam/v1alpha1/scim/${validatePathParam('scimId', request.scimId)}/tokens`,
      },
      unmarshalCreateScimTokenResponse,
    )

  /**
   * Delete a SCIM token.
   *
   * @param request - The request {@link DeleteScimTokenRequest}
   */
  deleteScimToken = (request: Readonly<DeleteScimTokenRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iam/v1alpha1/scim-tokens/${validatePathParam('tokenId', request.tokenId)}`,
    })
}
