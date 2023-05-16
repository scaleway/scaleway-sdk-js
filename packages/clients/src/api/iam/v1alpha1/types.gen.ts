// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export type BearerType = 'unknown_bearer_type' | 'user' | 'application'

export type ListAPIKeysRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'expires_at_asc'
  | 'expires_at_desc'
  | 'access_key_asc'
  | 'access_key_desc'

export type ListApplicationsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListGroupsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListJWTsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListPermissionSetsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'created_at_asc'
  | 'created_at_desc'

export type ListPoliciesRequestOrderBy =
  | 'policy_name_asc'
  | 'policy_name_desc'
  | 'created_at_asc'
  | 'created_at_desc'

export type ListQuotaRequestOrderBy = 'name_asc' | 'name_desc'

export type ListSSHKeysRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListUsersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'email_asc'
  | 'email_desc'
  | 'last_login_asc'
  | 'last_login_desc'

export type PermissionSetScopeType =
  | 'unknown_scope_type'
  | 'projects'
  | 'organization'
  | 'account_root_user'

export type UserStatus = 'unknown_status' | 'invitation_pending' | 'activated'

export type UserType = 'unknown_type' | 'guest' | 'owner'

/** Api key. */
export interface APIKey {
  /** Access key of the API key. */
  accessKey: string
  /** Secret key of the API Key. */
  secretKey?: string
  /**
   * ID of application that bears the API key.
   *
   * One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  applicationId?: string
  /**
   * ID of user that bears the API key.
   *
   * One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  userId?: string
  /** Description of API key. */
  description: string
  /** Date and time of API key creation. */
  createdAt?: Date
  /** Date and time of last API key update. */
  updatedAt?: Date
  /** Date and time of API key expiration. */
  expiresAt?: Date
  /** Default Project ID specified for this API key. */
  defaultProjectId: string
  /** Defines whether or not the API key is editable. */
  editable: boolean
  /** IP address of the device that created the API key. */
  creationIp: string
}

/** Application. */
export interface Application {
  /** ID of the application. */
  id: string
  /** Name of the application. */
  name: string
  /** Description of the application. */
  description: string
  /** Date and time application was created. */
  createdAt?: Date
  /** Date and time of last application update. */
  updatedAt?: Date
  /** ID of the Organization. */
  organizationId: string
  /** Defines whether or not the application is editable. */
  editable: boolean
  /** Number of API keys attributed to the application. */
  nbApiKeys: number
}

/** Group. */
export interface Group {
  /** ID of the group. */
  id: string
  /** Date and time of group creation. */
  createdAt?: Date
  /** Date and time of last group update. */
  updatedAt?: Date
  /** ID of Organization linked to the group. */
  organizationId: string
  /** Name of the group. */
  name: string
  /** Description of the group. */
  description: string
  /** IDs of users attached to this group. */
  userIds: string[]
  /** IDs of applications attached to this group. */
  applicationIds: string[]
}

/** Jwt. */
export interface JWT {
  /** JWT ID. */
  jti: string
  /** ID of the user who issued the JWT. */
  issuerId: string
  /** ID of the user targeted by the JWT. */
  audienceId: string
  /** Creation date of the JWT. */
  createdAt?: Date
  /** Last update date of the JWT. */
  updatedAt?: Date
  /** Expiration date of the JWT. */
  expiresAt?: Date
  /** IP address used during the creation of the JWT. */
  ip: string
  /** User-agent used during the creation of the JWT. */
  userAgent: string
}

/** List api keys response. */
export interface ListAPIKeysResponse {
  /** List of API keys. */
  apiKeys: APIKey[]
  /** Total count of API Keys. */
  totalCount: number
}

/** List applications response. */
export interface ListApplicationsResponse {
  /** List of applications. */
  applications: Application[]
  /** Total count of applications. */
  totalCount: number
}

/** List groups response. */
export interface ListGroupsResponse {
  /** List of groups. */
  groups: Group[]
  /** Total count of groups. */
  totalCount: number
}

export interface ListJWTsResponse {
  jwts: JWT[]
  totalCount: number
}

/** List permission sets response. */
export interface ListPermissionSetsResponse {
  /** List of permission sets. */
  permissionSets: PermissionSet[]
  /** Total count of permission sets. */
  totalCount: number
}

/** List policies response. */
export interface ListPoliciesResponse {
  /** List of policies. */
  policies: Policy[]
  /** Total count of policies. */
  totalCount: number
}

/** List quota response. */
export interface ListQuotaResponse {
  /** List of quota. */
  quota: Quotum[]
  /** Total count of quota. */
  totalCount: number
}

/** List rules response. */
export interface ListRulesResponse {
  /** Rules of the policy. */
  rules: Rule[]
  /** Total count of rules. */
  totalCount: number
}

/** List ssh keys response. */
export interface ListSSHKeysResponse {
  /** List of SSH keys. */
  sshKeys: SSHKey[]
  /** Total count of SSH keys. */
  totalCount: number
}

/** List users response. */
export interface ListUsersResponse {
  /** List of users. */
  users: User[]
  /** Total count of users. */
  totalCount: number
}

/** Permission set. */
export interface PermissionSet {
  /** Id of the permission set. */
  id: string
  /** Name of the permission set. */
  name: string
  /** Scope of the permission set. */
  scopeType: PermissionSetScopeType
  /** Description of the permission set. */
  description: string
  /** Categories of the permission set. */
  categories?: string[]
}

/** Policy. */
export interface Policy {
  /** Id of the policy. */
  id: string
  /** Name of the policy. */
  name: string
  /** Description of the policy. */
  description: string
  /** Organization ID of the policy. */
  organizationId: string
  /** Date and time of policy creation. */
  createdAt?: Date
  /** Date and time of last policy update. */
  updatedAt?: Date
  /** Defines whether or not a policy is editable. */
  editable: boolean
  /** Number of rules of the policy. */
  nbRules: number
  /** Number of policy scopes. */
  nbScopes: number
  /** Number of permission sets of the policy. */
  nbPermissionSets: number
  /**
   * ID of the user attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  userId?: string
  /**
   * ID of the group attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  groupId?: string
  /**
   * ID of the application attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  applicationId?: string
  /**
   * Defines whether or not a policy is attributed to a principal.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  noPrincipal?: boolean
}

/** Quotum. */
export interface Quotum {
  /** Name of the quota. */
  name: string
  /**
   * Maximum limit of the quota.
   *
   * One-of ('value'): at most one of 'limit', 'unlimited' could be set.
   */
  limit?: number
  /**
   * Defines whether or not the quota is unlimited.
   *
   * One-of ('value'): at most one of 'limit', 'unlimited' could be set.
   */
  unlimited?: boolean
}

/** Rule. */
export interface Rule {
  /** Id of rule. */
  id: string
  /** Names of permission sets bound to the rule. */
  permissionSetNames?: string[]
  /** Permission_set_names have the same scope_type. */
  permissionSetsScopeType: PermissionSetScopeType
  /**
   * List of Project IDs the rule is scoped to.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId',
   * 'accountRootUserId' could be set.
   */
  projectIds?: string[]
  /**
   * ID of Organization the rule is scoped to.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId',
   * 'accountRootUserId' could be set.
   */
  organizationId?: string
  /**
   * ID of account root user the rule is scoped to.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId',
   * 'accountRootUserId' could be set.
   */
  accountRootUserId?: string
}

/** Rule specs. */
export interface RuleSpecs {
  /** Names of permission sets bound to the rule. */
  permissionSetNames?: string[]
  /**
   * List of Project IDs the rule is scoped to.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId' could be
   * set.
   */
  projectIds?: string[]
  /**
   * ID of Organization the rule is scoped to.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId' could be
   * set.
   */
  organizationId?: string
}

/** Ssh key. */
export interface SSHKey {
  /** ID of SSH key. */
  id: string
  /** Name of SSH key. */
  name: string
  /** Public key of SSH key. */
  publicKey: string
  /** Fingerprint of the SSH key. */
  fingerprint: string
  /** Creation date of SSH key. */
  createdAt?: Date
  /** Last update date of SSH key. */
  updatedAt?: Date
  /** ID of Organization linked to the SSH key. */
  organizationId: string
  /** ID of Project linked to the SSH key. */
  projectId: string
  /** SSH key status. */
  disabled: boolean
}

/** Set rules response. */
export interface SetRulesResponse {
  /** Rules of the policy. */
  rules: Rule[]
}

/** User. */
export interface User {
  /** ID of user. */
  id: string
  /** Email of user. */
  email: string
  /** Date user was created. */
  createdAt?: Date
  /** Date of last user update. */
  updatedAt?: Date
  /** ID of the Organization. */
  organizationId: string
  /** Deletion status of user. Owners cannot be deleted. */
  deletable: boolean
  /** Date of the last login. */
  lastLoginAt?: Date
  /** Type of user. */
  type: UserType
  /** @deprecated Deprecated, use "mfa" instead. */
  twoFactorEnabled?: boolean
  /** Status of user invitation. */
  status: UserStatus
  /** Defines whether MFA is enabled. */
  mfa: boolean
  /** ID of the account root user associated with the user. */
  accountRootUserId: string
}

export type ListSSHKeysRequest = {
  /** Sort order of the SSH keys. */
  orderBy?: ListSSHKeysRequestOrderBy
  /** Requested page number. Value must be greater or equal to 1. */
  page?: number
  /** Number of items per page. Value must be between 1 and 100. */
  pageSize?: number
  /** Filter by Organization ID. */
  organizationId?: string
  /** Name of group to find. */
  name?: string
  /** Filter by Project ID. */
  projectId?: string
  /** Defines whether to include disabled SSH keys or not. */
  disabled?: boolean
}

export type CreateSSHKeyRequest = {
  /** Name of the SSH key. Max length is 1000. */
  name?: string
  /**
   * SSH public key. Currently only the ssh-rsa, ssh-dss (DSA), ssh-ed25519 and
   * ecdsa keys with NIST curves are supported. Max length is 65000.
   */
  publicKey: string
  /** Project the resource is attributed to. */
  projectId?: string
}

export type GetSSHKeyRequest = {
  /** ID of the SSH key. */
  sshKeyId: string
}

export type UpdateSSHKeyRequest = {
  sshKeyId: string
  /** Name of the SSH key. Max length is 1000. */
  name?: string
  /** Enable or disable the SSH key. */
  disabled?: boolean
}

export type DeleteSSHKeyRequest = {
  sshKeyId: string
}

export type ListUsersRequest = {
  /** Criteria for sorting results. */
  orderBy?: ListUsersRequestOrderBy
  /** Number of results per page. Value must be between 1 and 100. */
  pageSize?: number
  /** Page number. Value must be greater or equal to 1. */
  page?: number
  /** ID of the Organization to filter. */
  organizationId?: string
  /** Filter by list of IDs. */
  userIds?: string[]
  /** Filter by MFA status. */
  mfa?: boolean
}

export type GetUserRequest = {
  /** ID of the user to find. */
  userId: string
}

export type DeleteUserRequest = {
  /** ID of the user to delete. */
  userId: string
}

export type ListApplicationsRequest = {
  /** Criteria for sorting results. */
  orderBy?: ListApplicationsRequestOrderBy
  /** Number of results per page. Value must be between 1 and 100. */
  pageSize?: number
  /** Page number. Value must be greater than 1. */
  page?: number
  /** Name of the application to filter. */
  name?: string
  /** ID of the Organization to filter. */
  organizationId?: string
  /** Defines whether to filter out editable applications or not. */
  editable?: boolean
  /** Filter by list of IDs. */
  applicationIds?: string[]
}

export type CreateApplicationRequest = {
  /** Name of the application to create (max length is 64 characters). */
  name?: string
  /** ID of the Organization. */
  organizationId?: string
  /** Description of the application (max length is 200 characters). */
  description: string
}

export type GetApplicationRequest = {
  /** ID of the application to find. */
  applicationId: string
}

export type UpdateApplicationRequest = {
  /** ID of the application to update. */
  applicationId: string
  /** New name for the application (max length is 64 chars). */
  name?: string
  /** New description for the application (max length is 200 chars). */
  description?: string
}

export type DeleteApplicationRequest = {
  /** ID of the application to delete. */
  applicationId: string
}

export type ListGroupsRequest = {
  /** Sort order of groups. */
  orderBy?: ListGroupsRequestOrderBy
  /** Requested page number. Value must be greater or equal to 1. */
  page?: number
  /** Number of items per page. Value must be between 1 and 100. */
  pageSize?: number
  /** Filter by Organization ID. */
  organizationId?: string
  /** Name of group to find. */
  name?: string
  /** Filter by a list of application IDs. */
  applicationIds?: string[]
  /** Filter by a list of user IDs. */
  userIds?: string[]
  /** Filter by a list of group IDs. */
  groupIds?: string[]
}

export type CreateGroupRequest = {
  /** ID of Organization linked to the group. */
  organizationId?: string
  /**
   * Name of the group to create (max length is 64 chars). MUST be unique inside
   * an Organization.
   */
  name?: string
  /** Description of the group to create (max length is 200 chars). */
  description: string
}

export type GetGroupRequest = {
  /** ID of the group. */
  groupId: string
}

export type UpdateGroupRequest = {
  /** ID of the group to update. */
  groupId: string
  /**
   * New name for the group (max length is 64 chars). MUST be unique inside an
   * Organization.
   */
  name?: string
  /** New description for the group (max length is 200 chars). */
  description?: string
}

export type SetGroupMembersRequest = {
  groupId: string
  userIds: string[]
  applicationIds: string[]
}

export type AddGroupMemberRequest = {
  /** ID of the group. */
  groupId: string
  /**
   * ID of the user to add.
   *
   * One-of ('member'): at most one of 'userId', 'applicationId' could be set.
   */
  userId?: string
  /**
   * ID of the application to add.
   *
   * One-of ('member'): at most one of 'userId', 'applicationId' could be set.
   */
  applicationId?: string
}

export type AddGroupMembersRequest = {
  /** ID of the group. */
  groupId: string
  /** IDs of the users to add. */
  userIds?: string[]
  /** IDs of the applications to add. */
  applicationIds?: string[]
}

export type RemoveGroupMemberRequest = {
  /** ID of the group. */
  groupId: string
  /**
   * ID of the user to remove.
   *
   * One-of ('member'): at most one of 'userId', 'applicationId' could be set.
   */
  userId?: string
  /**
   * ID of the application to remove.
   *
   * One-of ('member'): at most one of 'userId', 'applicationId' could be set.
   */
  applicationId?: string
}

export type DeleteGroupRequest = {
  /** ID of the group to delete. */
  groupId: string
}

export type ListPoliciesRequest = {
  /** Criteria for sorting results. */
  orderBy?: ListPoliciesRequestOrderBy
  /** Number of results per page. Value must be between 1 and 100. */
  pageSize?: number
  /** Page number. Value must be greater than 1. */
  page?: number
  /** ID of the Organization to filter. */
  organizationId?: string
  /** Defines whether or not filter out editable policies. */
  editable?: boolean
  /** Defines whether or not to filter by list of user IDs. */
  userIds?: string[]
  /** Defines whether or not to filter by list of group IDs. */
  groupIds?: string[]
  /** Filter by a list of application IDs. */
  applicationIds?: string[]
  /** Defines whether or not the policy is attributed to a principal. */
  noPrincipal?: boolean
  /** Name of the policy to fetch. */
  policyName?: string
}

export type CreatePolicyRequest = {
  /** Name of the policy to create (max length is 64 characters). */
  name?: string
  /** Description of the policy to create (max length is 200 characters). */
  description: string
  /** ID of the Organization. */
  organizationId?: string
  /** Rules of the policy to create. */
  rules?: RuleSpecs[]
  /**
   * ID of user attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  userId?: string
  /**
   * ID of group attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  groupId?: string
  /**
   * ID of application attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  applicationId?: string
  /**
   * Defines whether or not a policy is attributed to a principal.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  noPrincipal?: boolean
}

export type GetPolicyRequest = {
  /** Id of policy to search. */
  policyId: string
}

export type UpdatePolicyRequest = {
  /** Id of policy to update. */
  policyId: string
  /** New name for the policy (max length is 64 characters). */
  name?: string
  /** New description of policy (max length is 200 characters). */
  description?: string
  /**
   * New ID of user attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  userId?: string
  /**
   * New ID of group attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  groupId?: string
  /**
   * New ID of application attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  applicationId?: string
  /**
   * Defines whether or not the policy is attributed to a principal.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  noPrincipal?: boolean
}

export type DeletePolicyRequest = {
  /** Id of policy to delete. */
  policyId: string
}

export type ClonePolicyRequest = {
  policyId: string
}

export type SetRulesRequest = {
  /** Id of policy to update. */
  policyId: string
  /** Rules of the policy to set. */
  rules: RuleSpecs[]
}

export type ListRulesRequest = {
  /** Id of policy to search. */
  policyId: string
  /** Number of results per page. Value must be between 1 and 100. */
  pageSize?: number
  /** Page number. Value must be greater than 1. */
  page?: number
}

export type ListPermissionSetsRequest = {
  /** Criteria for sorting results. */
  orderBy?: ListPermissionSetsRequestOrderBy
  /** Number of results per page. Value must be between 1 and 100. */
  pageSize?: number
  /** Page number. Value must be greater than 1. */
  page?: number
  /** Filter by Organization ID. */
  organizationId?: string
}

export type ListAPIKeysRequest = {
  /** Criteria for sorting results. */
  orderBy?: ListAPIKeysRequestOrderBy
  /** Page number. Value must be greater or equal to 1. */
  page?: number
  /** Number of results per page. Value must be between 1 and 100. */
  pageSize?: number
  /** ID of Organization. */
  organizationId?: string
  /**
   * @deprecated ID of application that bears the API key.
   *
   *   One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  applicationId?: string
  /**
   * @deprecated ID of user that bears the API key.
   *
   *   One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  userId?: string
  /** Defines whether to filter out editable API keys or not. */
  editable?: boolean
  /** Defines whether to filter out expired API keys or not. */
  expired?: boolean
  /** Filter by access key. */
  accessKey?: string
  /** Filter by description. */
  description?: string
  /** Filter by bearer ID. */
  bearerId?: string
  /** Filter by type of bearer. */
  bearerType?: BearerType
}

export type CreateAPIKeyRequest = {
  /**
   * ID of the application.
   *
   * One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  applicationId?: string
  /**
   * ID of the user.
   *
   * One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  userId?: string
  /** Expiration date of the API key. */
  expiresAt?: Date
  /** Default Project ID to use with Object Storage. */
  defaultProjectId?: string
  /** Description of the API key (max length is 200 characters). */
  description: string
}

export type GetAPIKeyRequest = {
  /** Access key to search for. */
  accessKey: string
}

export type UpdateAPIKeyRequest = {
  /** Access key to update. */
  accessKey: string
  /** New default Project ID to set. */
  defaultProjectId?: string
  /** New description to update. */
  description?: string
}

export type DeleteAPIKeyRequest = {
  /** Access key to delete. */
  accessKey: string
}

export type ListQuotaRequest = {
  /** Criteria for sorting results. */
  orderBy?: ListQuotaRequestOrderBy
  /** Number of results per page. Value must be between 1 and 100. */
  pageSize?: number
  /** Page number. Value must be greater than 1. */
  page?: number
  /** Filter by Organization ID. */
  organizationId?: string
}

export type GetQuotumRequest = {
  /** Name of the quota to get. */
  quotumName: string
  /** ID of the Organization. */
  organizationId?: string
}

export type ListJWTsRequest = {
  /** Criteria for sorting results. */
  orderBy?: ListJWTsRequestOrderBy
  /** ID of the user to search. */
  audienceId: string
  /** Number of results per page. Value must be between 1 and 100. */
  pageSize?: number
  /** Page number. Value must be greater to 1. */
  page?: number
  /** Filter out expired JWTs or not. */
  expired?: boolean
}

export type GetJWTRequest = {
  /** JWT ID of the JWT to get. */
  jti: string
}

export type DeleteJWTRequest = {
  /** JWT ID of the JWT to delete. */
  jti: string
}
