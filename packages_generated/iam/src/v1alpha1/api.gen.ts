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
import {
  unmarshalAPIKey,
  marshalAddGroupMemberRequest,
  marshalAddGroupMembersRequest,
  marshalAddSamlCertificateRequest,
  unmarshalApplication,
  marshalCreateAPIKeyRequest,
  marshalCreateApplicationRequest,
  marshalCreateGroupRequest,
  marshalCreateJWTRequest,
  marshalCreatePolicyRequest,
  marshalCreateSSHKeyRequest,
  unmarshalCreateScimTokenResponse,
  marshalCreateUserRequest,
  unmarshalEncodedJWT,
  marshalFinishUserWebAuthnRegistrationRequest,
  unmarshalFinishUserWebAuthnRegistrationResponse,
  unmarshalGetUserConnectionsResponse,
  unmarshalGroup,
  unmarshalInitiateUserConnectionResponse,
  unmarshalJWT,
  marshalJoinUserConnectionRequest,
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
  unmarshalListSSHKeysResponse,
  unmarshalListSamlCertificatesResponse,
  unmarshalListScimTokensResponse,
  unmarshalListUserWebAuthnAuthenticatorsResponse,
  unmarshalListUsersResponse,
  unmarshalLog,
  unmarshalMFAOTP,
  unmarshalOrganization,
  unmarshalOrganizationSecuritySettings,
  marshalParseSamlMetadataRequest,
  unmarshalParseSamlMetadataResponse,
  unmarshalPolicy,
  unmarshalQuotum,
  marshalRemoveGroupMemberRequest,
  marshalRemoveUserConnectionRequest,
  unmarshalSSHKey,
  unmarshalSaml,
  unmarshalSamlCertificate,
  unmarshalScim,
  unmarshalScimToken,
  marshalSetGroupMembersRequest,
  marshalSetOrganizationAliasRequest,
  marshalSetRulesRequest,
  unmarshalSetRulesResponse,
  unmarshalStartUserWebAuthnRegistrationResponse,
  marshalUpdateAPIKeyRequest,
  marshalUpdateApplicationRequest,
  marshalUpdateGroupRequest,
  marshalUpdateOrganizationLoginMethodsRequest,
  marshalUpdateOrganizationSecuritySettingsRequest,
  marshalUpdatePolicyRequest,
  marshalUpdateSSHKeyRequest,
  marshalUpdateSamlRequest,
  marshalUpdateUserPasswordRequest,
  marshalUpdateUserRequest,
  marshalUpdateUserUsernameRequest,
  marshalUpdateWebAuthnAuthenticatorRequest,
  unmarshalUser,
  marshalValidateUserMFAOTPRequest,
  unmarshalValidateUserMFAOTPResponse,
  unmarshalWebAuthnAuthenticator,
} from './marshalling.gen.js'
import type {
  APIKey,
  AddGroupMemberRequest,
  AddGroupMembersRequest,
  AddSamlCertificateRequest,
  Application,
  ClonePolicyRequest,
  CreateAPIKeyRequest,
  CreateApplicationRequest,
  CreateGroupRequest,
  CreateJWTRequest,
  CreatePolicyRequest,
  CreateSSHKeyRequest,
  CreateScimTokenRequest,
  CreateScimTokenResponse,
  CreateUserMFAOTPRequest,
  CreateUserRequest,
  DeleteAPIKeyRequest,
  DeleteApplicationRequest,
  DeleteGroupRequest,
  DeleteJWTRequest,
  DeletePolicyRequest,
  DeleteSSHKeyRequest,
  DeleteSamlCertificateRequest,
  DeleteSamlRequest,
  DeleteScimRequest,
  DeleteScimTokenRequest,
  DeleteUserMFAOTPRequest,
  DeleteUserRequest,
  DeleteWebAuthnAuthenticatorRequest,
  EnableOrganizationSamlRequest,
  EnableOrganizationScimRequest,
  EncodedJWT,
  FinishUserWebAuthnRegistrationRequest,
  FinishUserWebAuthnRegistrationResponse,
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
  GetSamlCertificateRequest,
  GetScimTokenRequest,
  GetUserConnectionsRequest,
  GetUserConnectionsResponse,
  GetUserRequest,
  Group,
  InitiateUserConnectionRequest,
  InitiateUserConnectionResponse,
  JWT,
  JoinUserConnectionRequest,
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
  ListSSHKeysRequest,
  ListSSHKeysResponse,
  ListSamlCertificatesRequest,
  ListSamlCertificatesResponse,
  ListScimTokensRequest,
  ListScimTokensResponse,
  ListUserWebAuthnAuthenticatorsRequest,
  ListUserWebAuthnAuthenticatorsResponse,
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
  SSHKey,
  Saml,
  SamlCertificate,
  Scim,
  ScimToken,
  SetGroupMembersRequest,
  SetOrganizationAliasRequest,
  SetRulesRequest,
  SetRulesResponse,
  StartUserWebAuthnRegistrationRequest,
  StartUserWebAuthnRegistrationResponse,
  UnlockUserRequest,
  UpdateAPIKeyRequest,
  UpdateApplicationRequest,
  UpdateGroupRequest,
  UpdateOrganizationLoginMethodsRequest,
  UpdateOrganizationSecuritySettingsRequest,
  UpdatePolicyRequest,
  UpdateSSHKeyRequest,
  UpdateSamlRequest,
  UpdateUserPasswordRequest,
  UpdateUserRequest,
  UpdateUserUsernameRequest,
  UpdateWebAuthnAuthenticatorRequest,
  User,
  ValidateUserMFAOTPRequest,
  ValidateUserMFAOTPResponse,
  WebAuthnAuthenticator,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * IAM API.

This API allows you to manage Identity and Access Management (IAM) across your Scaleway Organizations, Projects and resources.
 */
export class API extends ParentAPI {
  protected pageOfListSSHKeys = (request: Readonly<ListSSHKeysRequest> = {}, options?: RequestOptions) =>
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
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListSSHKeysResponse,
    )
  
  /**
   * List SSH keys. List SSH keys. By default, the SSH keys listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You can define additional parameters for your query such as `organization_id`, `name`, `project_id` and `disabled`.
   *
   * @param request - The request {@link ListSSHKeysRequest}
   * @returns A Promise of ListSSHKeysResponse
   */
  listSSHKeys = (request: Readonly<ListSSHKeysRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('sshKeys', this.pageOfListSSHKeys, request, options)

  
  /**
   * Create an SSH key. Add a new SSH key to a Scaleway Project. You must specify the `name`, `public_key` and `project_id`.
   *
   * @param request - The request {@link CreateSSHKeyRequest}
   * @returns A Promise of SSHKey
   */
  createSSHKey = (request: Readonly<CreateSSHKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<SSHKey>(
      {
        body: JSON.stringify(
          marshalCreateSSHKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/ssh-keys`,
        signal: options?.signal,
      },
      unmarshalSSHKey,
    )

  
  /**
   * Get an SSH key. Retrieve information about a given SSH key, specified by the `ssh_key_id` parameter. The SSH key's full details, including `id`, `name`, `public_key`, and `project_id` are returned in the response.
   *
   * @param request - The request {@link GetSSHKeyRequest}
   * @returns A Promise of SSHKey
   */
  getSSHKey = (request: Readonly<GetSSHKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<SSHKey>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/ssh-keys/${validatePathParam('sshKeyId', request.sshKeyId)}`,
        signal: options?.signal,
      },
      unmarshalSSHKey,
    )

  
  /**
   * Update an SSH key. Update the parameters of an SSH key, including `name` and `disable`.
   *
   * @param request - The request {@link UpdateSSHKeyRequest}
   * @returns A Promise of SSHKey
   */
  updateSSHKey = (request: Readonly<UpdateSSHKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<SSHKey>(
      {
        body: JSON.stringify(
          marshalUpdateSSHKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/ssh-keys/${validatePathParam('sshKeyId', request.sshKeyId)}`,
        signal: options?.signal,
      },
      unmarshalSSHKey,
    )

  
  /**
   * Delete an SSH key. Delete a given SSH key, specified by the `ssh_key_id`. Deleting an SSH is permanent, and cannot be undone. Note that you might need to update any configurations that used the SSH key.
   *
   * @param request - The request {@link DeleteSSHKeyRequest}
   */
  deleteSSHKey = (request: Readonly<DeleteSSHKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/ssh-keys/${validatePathParam('sshKeyId', request.sshKeyId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListUsers = (request: Readonly<ListUsersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListUsersResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/users`,
        urlParams: urlParams(
          ['mfa', request.mfa],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['tag', request.tag],
          ['type', request.type],
          ['user_ids', request.userIds],
        ),
        signal: options?.signal,
      },
      unmarshalListUsersResponse,
    )
  
  /**
   * List users of an Organization. List the users of an Organization. By default, the users listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You must define the `organization_id` in the query path of your request. You can also define additional parameters for your query such as `user_ids`.
   *
   * @param request - The request {@link ListUsersRequest}
   * @returns A Promise of ListUsersResponse
   */
  listUsers = (request: Readonly<ListUsersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('users', this.pageOfListUsers, request, options)

  
  /**
   * Get a given user. Retrieve information about a user, specified by the `user_id` parameter. The user's full details, including `id`, `email`, `organization_id`, `status` and `mfa` are returned in the response.
   *
   * @param request - The request {@link GetUserRequest}
   * @returns A Promise of User
   */
  getUser = (request: Readonly<GetUserRequest>, options?: RequestOptions) =>
    this.client.fetch<User>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * Update a user. Update the parameters of a user, including `tags`.
   *
   * @param request - The request {@link UpdateUserRequest}
   * @returns A Promise of User
   */
  updateUser = (request: Readonly<UpdateUserRequest>, options?: RequestOptions) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalUpdateUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * Delete a guest user from an Organization. Remove a user from an Organization in which they are a guest. You must define the `user_id` in your request. Note that removing a user from an Organization automatically deletes their API keys, and any policies directly attached to them become orphaned.
   *
   * @param request - The request {@link DeleteUserRequest}
   */
  deleteUser = (request: Readonly<DeleteUserRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Create a new user. Create a new user. You must define the `organization_id` in your request. If you are adding a member, enter the member's details. If you are adding a guest, you must define the `email` and not add the member attribute.
   *
   * @param request - The request {@link CreateUserRequest}
   * @returns A Promise of User
   */
  createUser = (request: Readonly<CreateUserRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalCreateUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * Update an user's username.. Update an user's username.
   *
   * @param request - The request {@link UpdateUserUsernameRequest}
   * @returns A Promise of User
   */
  updateUserUsername = (request: Readonly<UpdateUserUsernameRequest>, options?: RequestOptions) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalUpdateUserUsernameRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/update-username`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * Update an user's password.. Update an user's password.
   *
   * @param request - The request {@link UpdateUserPasswordRequest}
   * @returns A Promise of User
   */
  updateUserPassword = (request: Readonly<UpdateUserPasswordRequest>, options?: RequestOptions) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalUpdateUserPasswordRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/update-password`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * Create a MFA OTP.. Create a MFA OTP.
   *
   * @param request - The request {@link CreateUserMFAOTPRequest}
   * @returns A Promise of MFAOTP
   */
  createUserMFAOTP = (request: Readonly<CreateUserMFAOTPRequest>, options?: RequestOptions) =>
    this.client.fetch<MFAOTP>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/mfa-otp`,
        signal: options?.signal,
      },
      unmarshalMFAOTP,
    )

  
  /**
   * Validate a MFA OTP.. Validate a MFA OTP.
   *
   * @param request - The request {@link ValidateUserMFAOTPRequest}
   * @returns A Promise of ValidateUserMFAOTPResponse
   */
  validateUserMFAOTP = (request: Readonly<ValidateUserMFAOTPRequest>, options?: RequestOptions) =>
    this.client.fetch<ValidateUserMFAOTPResponse>(
      {
        body: JSON.stringify(
          marshalValidateUserMFAOTPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/validate-mfa-otp`,
        signal: options?.signal,
      },
      unmarshalValidateUserMFAOTPResponse,
    )

  
  /**
   * Delete a MFA OTP.. Delete a MFA OTP.
   *
   * @param request - The request {@link DeleteUserMFAOTPRequest}
   */
  deleteUserMFAOTP = (request: Readonly<DeleteUserMFAOTPRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/mfa-otp`,
        signal: options?.signal,
      },
    )

  
  /**
   * Lock a member. Lock a member. A locked member cannot log in or use API keys until the locked status is removed.
   *
   * @param request - The request {@link LockUserRequest}
   * @returns A Promise of User
   */
  lockUser = (request: Readonly<LockUserRequest>, options?: RequestOptions) =>
    this.client.fetch<User>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/lock`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * Unlock a member.
   *
   * @param request - The request {@link UnlockUserRequest}
   * @returns A Promise of User
   */
  unlockUser = (request: Readonly<UnlockUserRequest>, options?: RequestOptions) =>
    this.client.fetch<User>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/unlock`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * List grace periods of a member. List the grace periods of a member.
   *
   * @param request - The request {@link ListGracePeriodsRequest}
   * @returns A Promise of ListGracePeriodsResponse
   */
  listGracePeriods = (request: Readonly<ListGracePeriodsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListGracePeriodsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/grace-periods`,
        urlParams: urlParams(
          ['user_id', request.userId],
        ),
        signal: options?.signal,
      },
      unmarshalListGracePeriodsResponse,
    )

  
  getUserConnections = (request: Readonly<GetUserConnectionsRequest>, options?: RequestOptions) =>
    this.client.fetch<GetUserConnectionsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/connections`,
        signal: options?.signal,
      },
      unmarshalGetUserConnectionsResponse,
    )

  
  initiateUserConnection = (request: Readonly<InitiateUserConnectionRequest>, options?: RequestOptions) =>
    this.client.fetch<InitiateUserConnectionResponse>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/initiate-connection`,
        signal: options?.signal,
      },
      unmarshalInitiateUserConnectionResponse,
    )

  
  joinUserConnection = (request: Readonly<JoinUserConnectionRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalJoinUserConnectionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/join-connection`,
        signal: options?.signal,
      },
    )

  
  removeUserConnection = (request: Readonly<RemoveUserConnectionRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalRemoveUserConnectionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/remove-connection`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListApplications = (request: Readonly<ListApplicationsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListApplicationsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/applications`,
        urlParams: urlParams(
          ['application_ids', request.applicationIds],
          ['editable', request.editable],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['tag', request.tag],
        ),
        signal: options?.signal,
      },
      unmarshalListApplicationsResponse,
    )
  
  /**
   * List applications of an Organization. List the applications of an Organization. By default, the applications listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You must define the `organization_id` in the query path of your request. You can also define additional parameters for your query such as `application_ids`.
   *
   * @param request - The request {@link ListApplicationsRequest}
   * @returns A Promise of ListApplicationsResponse
   */
  listApplications = (request: Readonly<ListApplicationsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('applications', this.pageOfListApplications, request, options)

  
  /**
   * Create a new application. Create a new application. You must define the `name` parameter in the request.
   *
   * @param request - The request {@link CreateApplicationRequest}
   * @returns A Promise of Application
   */
  createApplication = (request: Readonly<CreateApplicationRequest>, options?: RequestOptions) =>
    this.client.fetch<Application>(
      {
        body: JSON.stringify(
          marshalCreateApplicationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/applications`,
        signal: options?.signal,
      },
      unmarshalApplication,
    )

  
  /**
   * Get a given application. Retrieve information about an application, specified by the `application_id` parameter. The application's full details, including `id`, `email`, `organization_id`, `status` and `two_factor_enabled` are returned in the response.
   *
   * @param request - The request {@link GetApplicationRequest}
   * @returns A Promise of Application
   */
  getApplication = (request: Readonly<GetApplicationRequest>, options?: RequestOptions) =>
    this.client.fetch<Application>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/applications/${validatePathParam('applicationId', request.applicationId)}`,
        signal: options?.signal,
      },
      unmarshalApplication,
    )

  
  /**
   * Update an application. Update the parameters of an application, including `name` and `description`.
   *
   * @param request - The request {@link UpdateApplicationRequest}
   * @returns A Promise of Application
   */
  updateApplication = (request: Readonly<UpdateApplicationRequest>, options?: RequestOptions) =>
    this.client.fetch<Application>(
      {
        body: JSON.stringify(
          marshalUpdateApplicationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/applications/${validatePathParam('applicationId', request.applicationId)}`,
        signal: options?.signal,
      },
      unmarshalApplication,
    )

  
  /**
   * Delete an application. Delete an application. Note that this action is irreversible and will automatically delete the application's API keys. Policies attached to users and applications via this group will no longer apply.
   *
   * @param request - The request {@link DeleteApplicationRequest}
   */
  deleteApplication = (request: Readonly<DeleteApplicationRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/applications/${validatePathParam('applicationId', request.applicationId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListGroups = (request: Readonly<ListGroupsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListGroupsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/groups`,
        urlParams: urlParams(
          ['application_ids', request.applicationIds],
          ['group_ids', request.groupIds],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['tag', request.tag],
          ['user_ids', request.userIds],
        ),
        signal: options?.signal,
      },
      unmarshalListGroupsResponse,
    )
  
  /**
   * List groups. List groups. By default, the groups listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You can define additional parameters to filter your query. Use `user_ids` or `application_ids` to list all groups certain users or applications belong to.
   *
   * @param request - The request {@link ListGroupsRequest}
   * @returns A Promise of ListGroupsResponse
   */
  listGroups = (request: Readonly<ListGroupsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('groups', this.pageOfListGroups, request, options)

  
  /**
   * Create a group. Create a new group. You must define the `name` and `organization_id` parameters in the request.
   *
   * @param request - The request {@link CreateGroupRequest}
   * @returns A Promise of Group
   */
  createGroup = (request: Readonly<CreateGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalCreateGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/groups`,
        signal: options?.signal,
      },
      unmarshalGroup,
    )

  
  /**
   * Get a group. Retrieve information about a given group, specified by the `group_id` parameter. The group's full details, including `user_ids` and `application_ids` are returned in the response.
   *
   * @param request - The request {@link GetGroupRequest}
   * @returns A Promise of Group
   */
  getGroup = (request: Readonly<GetGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<Group>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}`,
        signal: options?.signal,
      },
      unmarshalGroup,
    )

  
  /**
   * Update a group. Update the parameters of group, including `name` and `description`.
   *
   * @param request - The request {@link UpdateGroupRequest}
   * @returns A Promise of Group
   */
  updateGroup = (request: Readonly<UpdateGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalUpdateGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}`,
        signal: options?.signal,
      },
      unmarshalGroup,
    )

  
  /**
   * Overwrite users and applications of a group. Overwrite users and applications configuration in a group. Any information that you add using this command will overwrite the previous configuration.
   *
   * @param request - The request {@link SetGroupMembersRequest}
   * @returns A Promise of Group
   */
  setGroupMembers = (request: Readonly<SetGroupMembersRequest>, options?: RequestOptions) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalSetGroupMembersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}/members`,
        signal: options?.signal,
      },
      unmarshalGroup,
    )

  
  /**
   * Add a user or an application to a group. Add a user or an application to a group. You can specify a `user_id` and `application_id` in the body of your request. Note that you can only add one of each per request.
   *
   * @param request - The request {@link AddGroupMemberRequest}
   * @returns A Promise of Group
   */
  addGroupMember = (request: Readonly<AddGroupMemberRequest>, options?: RequestOptions) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalAddGroupMemberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}/add-member`,
        signal: options?.signal,
      },
      unmarshalGroup,
    )

  
  /**
   * Add multiple users and applications to a group. Add multiple users and applications to a group in a single call. You can specify an array of `user_id`s and `application_id`s. Note that any existing users and applications in the group will remain. To add new users/applications and delete pre-existing ones, use the [Overwrite users and applications of a group](#path-groups-overwrite-users-and-applications-of-a-group) method.
   *
   * @param request - The request {@link AddGroupMembersRequest}
   * @returns A Promise of Group
   */
  addGroupMembers = (request: Readonly<AddGroupMembersRequest>, options?: RequestOptions) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalAddGroupMembersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}/add-members`,
        signal: options?.signal,
      },
      unmarshalGroup,
    )

  
  /**
   * Remove a user or an application from a group. Remove a user or an application from a group. You can specify a `user_id` and `application_id` in the body of your request. Note that you can only remove one of each per request. Removing a user from a group means that any permissions given to them via the group (i.e. from an attached policy) will no longer apply. Be sure you want to remove these permissions from the user before proceeding.
   *
   * @param request - The request {@link RemoveGroupMemberRequest}
   * @returns A Promise of Group
   */
  removeGroupMember = (request: Readonly<RemoveGroupMemberRequest>, options?: RequestOptions) =>
    this.client.fetch<Group>(
      {
        body: JSON.stringify(
          marshalRemoveGroupMemberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}/remove-member`,
        signal: options?.signal,
      },
      unmarshalGroup,
    )

  
  /**
   * Delete a group. Delete a group. Note that this action is irreversible and could delete permissions for group members. Policies attached to users and applications via this group will no longer apply.
   *
   * @param request - The request {@link DeleteGroupRequest}
   */
  deleteGroup = (request: Readonly<DeleteGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/groups/${validatePathParam('groupId', request.groupId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListPolicies = (request: Readonly<ListPoliciesRequest> = {}, options?: RequestOptions) =>
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
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['policy_ids', request.policyIds],
          ['policy_name', request.policyName],
          ['tag', request.tag],
          ['user_ids', request.userIds],
        ),
        signal: options?.signal,
      },
      unmarshalListPoliciesResponse,
    )
  
  /**
   * List policies of an Organization. List the policies of an Organization. By default, the policies listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You must define the `organization_id` in the query path of your request. You can also define additional parameters to filter your query, such as `user_ids`, `groups_ids`, `application_ids`, and `policy_name`.
   *
   * @param request - The request {@link ListPoliciesRequest}
   * @returns A Promise of ListPoliciesResponse
   */
  listPolicies = (request: Readonly<ListPoliciesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('policies', this.pageOfListPolicies, request, options)

  
  /**
   * Create a new policy. Create a new application. You must define the `name` parameter in the request. You can specify parameters such as `user_id`, `groups_id`, `application_id`, `no_principal`, `rules` and its child attributes.
   *
   * @param request - The request {@link CreatePolicyRequest}
   * @returns A Promise of Policy
   */
  createPolicy = (request: Readonly<CreatePolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<Policy>(
      {
        body: JSON.stringify(
          marshalCreatePolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/policies`,
        signal: options?.signal,
      },
      unmarshalPolicy,
    )

  
  /**
   * Get an existing policy. Retrieve information about a policy, specified by the `policy_id` parameter. The policy's full details, including `id`, `name`, `organization_id`, `nb_rules` and `nb_scopes`, `nb_permission_sets` are returned in the response.
   *
   * @param request - The request {@link GetPolicyRequest}
   * @returns A Promise of Policy
   */
  getPolicy = (request: Readonly<GetPolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<Policy>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/policies/${validatePathParam('policyId', request.policyId)}`,
        signal: options?.signal,
      },
      unmarshalPolicy,
    )

  
  /**
   * Update an existing policy. Update the parameters of a policy, including `name`, `description`, `user_id`, `group_id`, `application_id` and `no_principal`.
   *
   * @param request - The request {@link UpdatePolicyRequest}
   * @returns A Promise of Policy
   */
  updatePolicy = (request: Readonly<UpdatePolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<Policy>(
      {
        body: JSON.stringify(
          marshalUpdatePolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/policies/${validatePathParam('policyId', request.policyId)}`,
        signal: options?.signal,
      },
      unmarshalPolicy,
    )

  
  /**
   * Delete a policy. Delete a policy. You must define specify the `policy_id` parameter in your request. Note that when deleting a policy, all permissions it gives to its principal (user, group or application) will be revoked.
   *
   * @param request - The request {@link DeletePolicyRequest}
   */
  deletePolicy = (request: Readonly<DeletePolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/policies/${validatePathParam('policyId', request.policyId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Clone a policy. Clone a policy. You must define specify the `policy_id` parameter in your request.
   *
   * @param request - The request {@link ClonePolicyRequest}
   * @returns A Promise of Policy
   */
  clonePolicy = (request: Readonly<ClonePolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<Policy>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/policies/${validatePathParam('policyId', request.policyId)}/clone`,
        signal: options?.signal,
      },
      unmarshalPolicy,
    )

  
  /**
   * Set rules of a given policy. Overwrite the rules of a given policy. Any information that you add using this command will overwrite the previous configuration. If you include some of the rules you already had in your previous configuration in your new one, but you change their order, the new order of display will apply. While policy rules are ordered, they have no impact on the access logic of IAM because rules are allow-only.
   *
   * @param request - The request {@link SetRulesRequest}
   * @returns A Promise of SetRulesResponse
   */
  setRules = (request: Readonly<SetRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<SetRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/iam/v1alpha1/rules`,
        signal: options?.signal,
      },
      unmarshalSetRulesResponse,
    )

  
  protected pageOfListRules = (request: Readonly<ListRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListRulesResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/rules`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['policy_id', request.policyId],
        ),
        signal: options?.signal,
      },
      unmarshalListRulesResponse,
    )
  
  /**
   * List rules of a given policy. List the rules of a given policy. By default, the rules listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You must define the `policy_id` in the query path of your request.
   *
   * @param request - The request {@link ListRulesRequest}
   * @returns A Promise of ListRulesResponse
   */
  listRules = (request: Readonly<ListRulesRequest>, options?: RequestOptions) =>
    enrichForPagination('rules', this.pageOfListRules, request, options)

  
  protected pageOfListPermissionSets = (request: Readonly<ListPermissionSetsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListPermissionSetsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/permission-sets`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListPermissionSetsResponse,
    )
  
  /**
   * List permission sets. List permission sets available for given Organization. You must define the `organization_id` in the query path of your request.
   *
   * @param request - The request {@link ListPermissionSetsRequest}
   * @returns A Promise of ListPermissionSetsResponse
   */
  listPermissionSets = (request: Readonly<ListPermissionSetsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('permissionSets', this.pageOfListPermissionSets, request, options)

  
  protected pageOfListAPIKeys = (request: Readonly<ListAPIKeysRequest> = {}, options?: RequestOptions) =>
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
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],  
          ...Object.entries(resolveOneOf([
            {param: 'application_id',
              value: request.applicationId,
            },
            {param: 'user_id',
              value: request.userId,
            },
          ])),
        ),
        signal: options?.signal,
      },
      unmarshalListAPIKeysResponse,
    )
  
  /**
   * List API keys. List API keys. By default, the API keys listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You can define additional parameters for your query such as `editable`, `expired`, `access_key` and `bearer_id`.
   *
   * @param request - The request {@link ListAPIKeysRequest}
   * @returns A Promise of ListAPIKeysResponse
   */
  listAPIKeys = (request: Readonly<ListAPIKeysRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('apiKeys', this.pageOfListAPIKeys, request, options)

  
  /**
   * Create an API key. Create an API key. You must specify the `application_id` or the `user_id` and the description. You can also specify the `default_project_id`, which is the Project ID of your preferred Project, to use with Object Storage. The `access_key` and `secret_key` values are returned in the response. Note that the secret key is only shown once. Make sure that you copy and store both keys somewhere safe.
   *
   * @param request - The request {@link CreateAPIKeyRequest}
   * @returns A Promise of APIKey
   */
  createAPIKey = (request: Readonly<CreateAPIKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<APIKey>(
      {
        body: JSON.stringify(
          marshalCreateAPIKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/api-keys`,
        signal: options?.signal,
      },
      unmarshalAPIKey,
    )

  
  /**
   * Get an API key. Retrieve information about an API key, specified by the `access_key` parameter. The API key's details, including either the `user_id` or `application_id` of its bearer are returned in the response. Note that the string value for the `secret_key` is nullable, and therefore is not displayed in the response. The `secret_key` value is only displayed upon API key creation.
   *
   * @param request - The request {@link GetAPIKeyRequest}
   * @returns A Promise of APIKey
   */
  getAPIKey = (request: Readonly<GetAPIKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<APIKey>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/api-keys/${validatePathParam('accessKey', request.accessKey)}`,
        signal: options?.signal,
      },
      unmarshalAPIKey,
    )

  
  /**
   * Update an API key. Update the parameters of an API key, including `default_project_id` and `description`.
   *
   * @param request - The request {@link UpdateAPIKeyRequest}
   * @returns A Promise of APIKey
   */
  updateAPIKey = (request: Readonly<UpdateAPIKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<APIKey>(
      {
        body: JSON.stringify(
          marshalUpdateAPIKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/api-keys/${validatePathParam('accessKey', request.accessKey)}`,
        signal: options?.signal,
      },
      unmarshalAPIKey,
    )

  
  /**
   * Delete an API key. Delete an API key. Note that this action is irreversible and cannot be undone. Make sure you update any configurations using the API keys you delete.
   *
   * @param request - The request {@link DeleteAPIKeyRequest}
   */
  deleteAPIKey = (request: Readonly<DeleteAPIKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/api-keys/${validatePathParam('accessKey', request.accessKey)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListQuota = (request: Readonly<ListQuotaRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListQuotaResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/quota`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['quotum_names', request.quotumNames],
        ),
        signal: options?.signal,
      },
      unmarshalListQuotaResponse,
    )
  
  /**
   * List all quotas in the Organization. List all product and features quota for an Organization, with their associated limits. By default, the quota listed are ordered by creation date in ascending order. This can be modified via the `order_by` field. You must define the `organization_id` in the query path of your request.
   *
   * @param request - The request {@link ListQuotaRequest}
   * @returns A Promise of ListQuotaResponse
   */
  listQuota = (request: Readonly<ListQuotaRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('quota', this.pageOfListQuota, request, options)

  
  /**
   * Get a quota in the Organization. Retrieve information about a resource quota, specified by the `quotum_name` parameter. The quota's `limit`, or whether it is unlimited, is returned in the response.
   *
   * @param request - The request {@link GetQuotumRequest}
   * @returns A Promise of Quotum
   */
  getQuotum = (request: Readonly<GetQuotumRequest>, options?: RequestOptions) =>
    this.client.fetch<Quotum>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/quota/${validatePathParam('quotumName', request.quotumName)}`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
        ),
        signal: options?.signal,
      },
      unmarshalQuotum,
    )

  
  protected pageOfListJWTs = (request: Readonly<ListJWTsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListJWTsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/jwts`,
        urlParams: urlParams(
          ['audience_id', request.audienceId],
          ['expired', request.expired],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListJWTsResponse,
    )
  
  /**
   * List JWTs.
   *
   * @param request - The request {@link ListJWTsRequest}
   * @returns A Promise of ListJWTsResponse
   */
  listJWTs = (request: Readonly<ListJWTsRequest>, options?: RequestOptions) =>
    enrichForPagination('jwts', this.pageOfListJWTs, request, options)

  
  /**
   * Create a JWT.
   *
   * @param request - The request {@link CreateJWTRequest}
   * @returns A Promise of EncodedJWT
   */
  createJWT = (request: Readonly<CreateJWTRequest>, options?: RequestOptions) =>
    this.client.fetch<EncodedJWT>(
      {
        body: JSON.stringify(
          marshalCreateJWTRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/jwts`,
        signal: options?.signal,
      },
      unmarshalEncodedJWT,
    )

  
  /**
   * Get a JWT.
   *
   * @param request - The request {@link GetJWTRequest}
   * @returns A Promise of JWT
   */
  getJWT = (request: Readonly<GetJWTRequest>, options?: RequestOptions) =>
    this.client.fetch<JWT>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/jwts/${validatePathParam('jti', request.jti)}`,
        signal: options?.signal,
      },
      unmarshalJWT,
    )

  
  /**
   * Delete a JWT.
   *
   * @param request - The request {@link DeleteJWTRequest}
   */
  deleteJWT = (request: Readonly<DeleteJWTRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/jwts/${validatePathParam('jti', request.jti)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListLogs = (request: Readonly<ListLogsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListLogsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/logs`,
        urlParams: urlParams(
          ['action', request.action],
          ['created_after', request.createdAfter],
          ['created_before', request.createdBefore],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['resource_type', request.resourceType],
          ['search', request.search],
        ),
        signal: options?.signal,
      },
      unmarshalListLogsResponse,
    )
  
  /**
   * List logs. List logs available for given Organization. You must define the `organization_id` in the query path of your request.
   *
   * @param request - The request {@link ListLogsRequest}
   * @returns A Promise of ListLogsResponse
   */
  listLogs = (request: Readonly<ListLogsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('logs', this.pageOfListLogs, request, options)

  
  /**
   * Get a log. Retrieve information about a log, specified by the `log_id` parameter. The log's full details, including `id`, `ip`, `user_agent`, `action`, `bearer_id`, `resource_type` and `resource_id` are returned in the response.
   *
   * @param request - The request {@link GetLogRequest}
   * @returns A Promise of Log
   */
  getLog = (request: Readonly<GetLogRequest>, options?: RequestOptions) =>
    this.client.fetch<Log>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/logs/${validatePathParam('logId', request.logId)}`,
        signal: options?.signal,
      },
      unmarshalLog,
    )

  
  /**
   * Get security settings of an Organization. Retrieve information about the security settings of an Organization, specified by the `organization_id` parameter.
   *
   * @param request - The request {@link GetOrganizationSecuritySettingsRequest}
   * @returns A Promise of OrganizationSecuritySettings
   */
  getOrganizationSecuritySettings = (request: Readonly<GetOrganizationSecuritySettingsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<OrganizationSecuritySettings>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/security-settings`,
        signal: options?.signal,
      },
      unmarshalOrganizationSecuritySettings,
    )

  
  /**
   * Update the security settings of an Organization.
   *
   * @param request - The request {@link UpdateOrganizationSecuritySettingsRequest}
   * @returns A Promise of OrganizationSecuritySettings
   */
  updateOrganizationSecuritySettings = (request: Readonly<UpdateOrganizationSecuritySettingsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<OrganizationSecuritySettings>(
      {
        body: JSON.stringify(
          marshalUpdateOrganizationSecuritySettingsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/security-settings`,
        signal: options?.signal,
      },
      unmarshalOrganizationSecuritySettings,
    )

  
  /**
   * Set your Organization's alias.. This will fail if an alias has already been defined. Please contact support if you need to change your Organization's alias.
   *
   * @param request - The request {@link SetOrganizationAliasRequest}
   * @returns A Promise of Organization
   */
  setOrganizationAlias = (request: Readonly<SetOrganizationAliasRequest>, options?: RequestOptions) =>
    this.client.fetch<Organization>(
      {
        body: JSON.stringify(
          marshalSetOrganizationAliasRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/alias`,
        signal: options?.signal,
      },
      unmarshalOrganization,
    )

  
  /**
   * Get your Organization's IAM information.
   *
   * @param request - The request {@link GetOrganizationRequest}
   * @returns A Promise of Organization
   */
  getOrganization = (request: Readonly<GetOrganizationRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Organization>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}`,
        signal: options?.signal,
      },
      unmarshalOrganization,
    )

  
  /**
   * Set your Organization's allowed login methods.. Set your Organization's allowed login methods.
   *
   * @param request - The request {@link UpdateOrganizationLoginMethodsRequest}
   * @returns A Promise of Organization
   */
  updateOrganizationLoginMethods = (request: Readonly<UpdateOrganizationLoginMethodsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Organization>(
      {
        body: JSON.stringify(
          marshalUpdateOrganizationLoginMethodsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/login-methods`,
        signal: options?.signal,
      },
      unmarshalOrganization,
    )

  
  /**
   * Get SAML Identity Provider configuration of an Organization.
   *
   * @param request - The request {@link GetOrganizationSamlRequest}
   * @returns A Promise of Saml
   */
  getOrganizationSaml = (request: Readonly<GetOrganizationSamlRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Saml>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/saml`,
        signal: options?.signal,
      },
      unmarshalSaml,
    )

  
  /**
   * Enable SAML Identity Provider for an Organization.
   *
   * @param request - The request {@link EnableOrganizationSamlRequest}
   * @returns A Promise of Saml
   */
  enableOrganizationSaml = (request: Readonly<EnableOrganizationSamlRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Saml>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/saml`,
        signal: options?.signal,
      },
      unmarshalSaml,
    )

  
  /**
   * Update SAML Identity Provider configuration.
   *
   * @param request - The request {@link UpdateSamlRequest}
   * @returns A Promise of Saml
   */
  updateSaml = (request: Readonly<UpdateSamlRequest>, options?: RequestOptions) =>
    this.client.fetch<Saml>(
      {
        body: JSON.stringify(
          marshalUpdateSamlRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/saml/${validatePathParam('samlId', request.samlId)}`,
        signal: options?.signal,
      },
      unmarshalSaml,
    )

  
  /**
   * Disable SAML Identity Provider for an Organization.
   *
   * @param request - The request {@link DeleteSamlRequest}
   */
  deleteSaml = (request: Readonly<DeleteSamlRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/saml/${validatePathParam('samlId', request.samlId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Parse SAML xml metadata file.
   *
   * @param request - The request {@link ParseSamlMetadataRequest}
   * @returns A Promise of ParseSamlMetadataResponse
   */
  parseSamlMetadata = async (request: Readonly<ParseSamlMetadataRequest>, options?: RequestOptions) =>
    this.client.fetch<ParseSamlMetadataResponse>(
      {
        body: JSON.stringify(
          await marshalParseSamlMetadataRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/parse-saml-metadata`,
        signal: options?.signal,
      },
      unmarshalParseSamlMetadataResponse,
    )

  
  /**
   * List SAML certificates.
   *
   * @param request - The request {@link ListSamlCertificatesRequest}
   * @returns A Promise of ListSamlCertificatesResponse
   */
  listSamlCertificates = (request: Readonly<ListSamlCertificatesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListSamlCertificatesResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/saml/${validatePathParam('samlId', request.samlId)}/certificates`,
        signal: options?.signal,
      },
      unmarshalListSamlCertificatesResponse,
    )

  
  /**
   * Add a SAML certificate.
   *
   * @param request - The request {@link AddSamlCertificateRequest}
   * @returns A Promise of SamlCertificate
   */
  addSamlCertificate = (request: Readonly<AddSamlCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<SamlCertificate>(
      {
        body: JSON.stringify(
          marshalAddSamlCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/saml/${validatePathParam('samlId', request.samlId)}/certificates`,
        signal: options?.signal,
      },
      unmarshalSamlCertificate,
    )

  
  /**
   * Get a SAML certificate.
   *
   * @param request - The request {@link GetSamlCertificateRequest}
   * @returns A Promise of SamlCertificate
   */
  getSamlCertificate = (request: Readonly<GetSamlCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<SamlCertificate>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/saml-certificates/${validatePathParam('certificateId', request.certificateId)}`,
        signal: options?.signal,
      },
      unmarshalSamlCertificate,
    )

  
  /**
   * Delete a SAML certificate.
   *
   * @param request - The request {@link DeleteSamlCertificateRequest}
   */
  deleteSamlCertificate = (request: Readonly<DeleteSamlCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/saml-certificates/${validatePathParam('certificateId', request.certificateId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get SCIM configuration of an Organization.
   *
   * @param request - The request {@link GetOrganizationScimRequest}
   * @returns A Promise of Scim
   */
  getOrganizationScim = (request: Readonly<GetOrganizationScimRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Scim>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/scim`,
        signal: options?.signal,
      },
      unmarshalScim,
    )

  
  /**
   * Enable SCIM for an Organization.
   *
   * @param request - The request {@link EnableOrganizationScimRequest}
   * @returns A Promise of Scim
   */
  enableOrganizationScim = (request: Readonly<EnableOrganizationScimRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Scim>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/scim`,
        signal: options?.signal,
      },
      unmarshalScim,
    )

  
  /**
   * Disable SCIM for an Organization.
   *
   * @param request - The request {@link DeleteScimRequest}
   */
  deleteScim = (request: Readonly<DeleteScimRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/scim/${validatePathParam('scimId', request.scimId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListScimTokens = (request: Readonly<ListScimTokensRequest>, options?: RequestOptions) =>
    this.client.fetch<ListScimTokensResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/scim/${validatePathParam('scimId', request.scimId)}/tokens`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListScimTokensResponse,
    )
  
  /**
   * List SCIM tokens.
   *
   * @param request - The request {@link ListScimTokensRequest}
   * @returns A Promise of ListScimTokensResponse
   */
  listScimTokens = (request: Readonly<ListScimTokensRequest>, options?: RequestOptions) =>
    enrichForPagination('scimTokens', this.pageOfListScimTokens, request, options)

  
  /**
   * Create a SCIM token.
   *
   * @param request - The request {@link CreateScimTokenRequest}
   * @returns A Promise of CreateScimTokenResponse
   */
  createScimToken = (request: Readonly<CreateScimTokenRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateScimTokenResponse>(
      {
        method: 'POST',
        path: `/iam/v1alpha1/scim/${validatePathParam('scimId', request.scimId)}/tokens`,
        signal: options?.signal,
      },
      unmarshalCreateScimTokenResponse,
    )

  
  /**
   * Delete a SCIM token.
   *
   * @param request - The request {@link DeleteScimTokenRequest}
   */
  deleteScimToken = (request: Readonly<DeleteScimTokenRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iam/v1alpha1/scim-tokens/${validatePathParam('tokenId', request.tokenId)}`,
        signal: options?.signal,
      },
    )

  
  getScimToken = (request: Readonly<GetScimTokenRequest>, options?: RequestOptions) =>
    this.client.fetch<ScimToken>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/scim-tokens/${validatePathParam('scimTokenId', request.scimTokenId)}`,
        signal: options?.signal,
      },
      unmarshalScimToken,
    )

  
  /**
   * Start registering a WebAuthn authenticator.
   *
   * @param request - The request {@link StartUserWebAuthnRegistrationRequest}
   * @returns A Promise of StartUserWebAuthnRegistrationResponse
   */
  startUserWebAuthnRegistration = (request: Readonly<StartUserWebAuthnRegistrationRequest>, options?: RequestOptions) =>
    this.client.fetch<StartUserWebAuthnRegistrationResponse>(
      {
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/start-webauthn-registration`,
        urlParams: urlParams(
          ['origin', request.origin],
        ),
        signal: options?.signal,
      },
      unmarshalStartUserWebAuthnRegistrationResponse,
    )

  
  /**
   * Complete a WebAuthen authenticator registration.
   *
   * @param request - The request {@link FinishUserWebAuthnRegistrationRequest}
   * @returns A Promise of FinishUserWebAuthnRegistrationResponse
   */
  finishUserWebAuthnRegistration = (request: Readonly<FinishUserWebAuthnRegistrationRequest>, options?: RequestOptions) =>
    this.client.fetch<FinishUserWebAuthnRegistrationResponse>(
      {
        body: JSON.stringify(
          marshalFinishUserWebAuthnRegistrationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/finish-webauthn-registration`,
        signal: options?.signal,
      },
      unmarshalFinishUserWebAuthnRegistrationResponse,
    )

  
  protected pageOfListUserWebAuthnAuthenticators = (request: Readonly<ListUserWebAuthnAuthenticatorsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListUserWebAuthnAuthenticatorsResponse>(
      {
        method: 'GET',
        path: `/iam/v1alpha1/users/${validatePathParam('userId', request.userId)}/webauthn-authenticators`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListUserWebAuthnAuthenticatorsResponse,
    )
  
  /**
   * List all of a user's WebAuthn Authenticators.
   *
   * @param request - The request {@link ListUserWebAuthnAuthenticatorsRequest}
   * @returns A Promise of ListUserWebAuthnAuthenticatorsResponse
   */
  listUserWebAuthnAuthenticators = (request: Readonly<ListUserWebAuthnAuthenticatorsRequest>, options?: RequestOptions) =>
    enrichForPagination('authenticators', this.pageOfListUserWebAuthnAuthenticators, request, options)

  
  /**
   * Update a WebAuthn authenticator.
   *
   * @param request - The request {@link UpdateWebAuthnAuthenticatorRequest}
   * @returns A Promise of WebAuthnAuthenticator
   */
  updateWebAuthnAuthenticator = (request: Readonly<UpdateWebAuthnAuthenticatorRequest>, options?: RequestOptions) =>
    this.client.fetch<WebAuthnAuthenticator>(
      {
        body: JSON.stringify(
          marshalUpdateWebAuthnAuthenticatorRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iam/v1alpha1/webauthn-authenticator/${validatePathParam('authenticatorId', request.authenticatorId)}`,
        signal: options?.signal,
      },
      unmarshalWebAuthnAuthenticator,
    )

  
  /**
   * Delete a WebAuthn authenticator.
   *
   * @param request - The request {@link DeleteWebAuthnAuthenticatorRequest}
   */
  deleteWebAuthnAuthenticator = (request: Readonly<DeleteWebAuthnAuthenticatorRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/iam/v1alpha1/webauthn-authenticator/${validatePathParam('authenticatorId', request.authenticatorId)}`,
        signal: options?.signal,
      },
    )

  
}

