// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export type ListAPIKeysRequestBearerType =
  | 'unknown_bearer_type'
  | 'user'
  | 'application'

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

/** Api key */
export interface APIKey {
  /** Access key of API key */
  accessKey: string
  /** Secret key of API Key */
  secretKey?: string
  /**
   * ID of application bearer.
   *
   * One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  applicationId?: string
  /**
   * ID of user bearer.
   *
   * One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  userId?: string
  /** Description of API key */
  description: string
  /** Creation date and time of API key */
  createdAt?: Date
  /** Last update date and time of API key */
  updatedAt?: Date
  /** Expiration date and time of API key */
  expiresAt?: Date
  /** The default project ID specified for this API key */
  defaultProjectId: string
  /** Whether or not the API key is editable */
  editable: boolean
  /** IP Address of the device which created the API key */
  creationIp: string
}

/** Application */
export interface Application {
  /** ID of application */
  id: string
  /** Name of application */
  name: string
  /** Description of the application */
  description: string
  /** Creation date of application */
  createdAt?: Date
  /** Last update date of application */
  updatedAt?: Date
  /** ID of organization */
  organizationId: string
  /** Whether or not the application is editable */
  editable: boolean
  /** Number of API keys owned by the application */
  nbApiKeys: number
}

/** Group */
export interface Group {
  /** ID of group */
  id: string
  /** Creation date and time of group */
  createdAt?: Date
  /** Last update date and time of group */
  updatedAt?: Date
  /** ID of organization linked to the group */
  organizationId: string
  /** Name of group */
  name: string
  /** Description of the group */
  description: string
  /** IDs of users attached to this group */
  userIds: string[]
  /** IDs of applications attached to this group */
  applicationIds: string[]
}

/** List api keys response */
export interface ListAPIKeysResponse {
  /** List of API keys */
  apiKeys: APIKey[]
  /** Total count of API Keys */
  totalCount: number
}

/** List applications response */
export interface ListApplicationsResponse {
  /** List of applications */
  applications: Application[]
  /** Total count of applications */
  totalCount: number
}

/** List groups response */
export interface ListGroupsResponse {
  /** List of groups */
  groups: Group[]
  /** Total count of groups */
  totalCount: number
}

/** List permission sets response */
export interface ListPermissionSetsResponse {
  /** List of permission sets */
  permissionSets: PermissionSet[]
  /** Total count of permission sets */
  totalCount: number
}

/** List policies response */
export interface ListPoliciesResponse {
  /** List of policies */
  policies: Policy[]
  /** Total count of policies */
  totalCount: number
}

/** List rules response */
export interface ListRulesResponse {
  /** Rules of the policy */
  rules: Rule[]
  /** Total count of rules */
  totalCount: number
}

/** List ssh keys response */
export interface ListSSHKeysResponse {
  /** List of SSH keys */
  sshKeys: SSHKey[]
  /** Total count of SSH keys */
  totalCount: number
}

/** List users response */
export interface ListUsersResponse {
  /** List of users */
  users: User[]
  /** Total count of users */
  totalCount: number
}

/** Permission set */
export interface PermissionSet {
  /** Id of permission set */
  id: string
  /** Name of permission set */
  name: string
  /** Scope of permission set */
  scopeType: PermissionSetScopeType
  /** Description of permission set */
  description: string
  /** Categories of permission set */
  categories?: string[]
}

/** Policy */
export interface Policy {
  /** Id of policy */
  id: string
  /** Name of policy */
  name: string
  /** Description of policy */
  description: string
  /** Organization ID of policy */
  organizationId: string
  /** Creation date and time of policy */
  createdAt?: Date
  /** Last update date and time of policy */
  updatedAt?: Date
  /** Editable status of policy */
  editable: boolean
  /** Number of rules of policy */
  nbRules: number
  /** Number of scopes of policy */
  nbScopes: number
  /** Number of permission sets of policy */
  nbPermissionSets: number
  /**
   * ID of user, owner of the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  userId?: string
  /**
   * ID of group, owner of the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  groupId?: string
  /**
   * ID of application, owner of the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  applicationId?: string
  /**
   * True when the policy do not belong to any principal.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  noPrincipal?: boolean
}

/** Rule */
export interface Rule {
  /** Id of rule */
  id: string
  /** Names of permission sets bound to the rule */
  permissionSetNames?: string[]
  /** Permission_set_names have the same scope_type */
  permissionSetsScopeType: PermissionSetScopeType
  /**
   * List of project IDs scoped to the rule.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId',
   * 'accountRootUserId' could be set.
   */
  projectIds?: string[]
  /**
   * ID of organization scoped to the rule.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId',
   * 'accountRootUserId' could be set.
   */
  organizationId?: string
  /**
   * ID of account root user scoped to the rule.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId',
   * 'accountRootUserId' could be set.
   */
  accountRootUserId?: string
}

/** Rule specs */
export interface RuleSpecs {
  /** Names of permission sets bound to the rule */
  permissionSetNames?: string[]
  /**
   * List of project IDs scoped to the rule.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId' could be
   * set.
   */
  projectIds?: string[]
  /**
   * ID of organization scoped to the rule.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId' could be
   * set.
   */
  organizationId?: string
}

/** Ssh key */
export interface SSHKey {
  /** ID of SSH key */
  id: string
  /** Name of SSH key */
  name: string
  /** Public key of SSH key */
  publicKey: string
  /** Fingerprint of SSH key */
  fingerprint: string
  /** Creation date of SSH key */
  createdAt?: Date
  /** Last update date of SSH key */
  updatedAt?: Date
  /** ID of organization linked to the SSH key */
  organizationId: string
  /** ID of project linked to the SSH key */
  projectId: string
  /** SSH key status */
  disabled: boolean
}

/** Set rules response */
export interface SetRulesResponse {
  /** Rules of policy */
  rules: Rule[]
}

/** User */
export interface User {
  /** ID of user */
  id: string
  /** Email of user */
  email: string
  /** Creation date of user */
  createdAt?: Date
  /** Last update date of user */
  updatedAt?: Date
  /** ID of organization */
  organizationId: string
  /** Deletion status of user. Owner user cannot be deleted */
  deletable: boolean
  /** Last login date */
  lastLoginAt?: Date
  /** Type of the user */
  type: UserType
  /** 2FA enabled */
  twoFactorEnabled: boolean
  /** Status of invitation for the user */
  status: UserStatus
}

export type ListSSHKeysRequest = {
  /** Sort order of SSH keys */
  orderBy?: ListSSHKeysRequestOrderBy
  /** Requested page number. Value must be greater or equals to 1 */
  page?: number
  /** Number of items per page. Value must be between 1 and 100 */
  pageSize?: number
  /** Filter by organization ID */
  organizationId?: string
  /** Name of group to find */
  name?: string
  /** Filter by project ID */
  projectId?: string
  /** Filter out disabled SSH keys or not */
  disabled?: boolean
}

export type CreateSSHKeyRequest = {
  /** The name of the SSH key. Max length is 1000 */
  name?: string
  /**
   * SSH public key. Currently ssh-rsa, ssh-dss (DSA), ssh-ed25519 and ecdsa
   * keys with NIST curves are supported. Max length is 65000
   */
  publicKey: string
  /** Project owning the resource */
  projectId?: string
}

export type GetSSHKeyRequest = {
  /** The ID of the SSH key */
  sshKeyId: string
}

export type UpdateSSHKeyRequest = {
  sshKeyId: string
  /** Name of the SSH key. Max length is 1000 */
  name?: string
  /** Enable or disable the SSH key */
  disabled?: boolean
}

export type DeleteSSHKeyRequest = {
  sshKeyId: string
}

export type ListUsersRequest = {
  /** Criteria for sorting results */
  orderBy?: ListUsersRequestOrderBy
  /** Number of results per page. Value must be between 1 and 100 */
  pageSize?: number
  /** Number of page. Value must be greater or equals to 1 */
  page?: number
  /** ID of organization to filter */
  organizationId?: string
  /** Filter out by a list of ID */
  userIds?: string[]
}

export type GetUserRequest = {
  /** ID of user to find */
  userId: string
}

export type DeleteUserRequest = {
  /** ID of user to delete */
  userId: string
}

export type ListApplicationsRequest = {
  /** Criteria for sorting results */
  orderBy?: ListApplicationsRequestOrderBy
  /** Number of results per page. Value must be between 1 and 100 */
  pageSize?: number
  /** Number of page. Value must be greater to 1 */
  page?: number
  /** Name of application to filter */
  name?: string
  /** ID of organization to filter */
  organizationId?: string
  /** Filter out editable applications or not */
  editable?: boolean
  /** Filter out by a list of ID */
  applicationIds?: string[]
}

export type CreateApplicationRequest = {
  /** Name of application to create (max length is 64 chars) */
  name?: string
  /** ID of organization */
  organizationId?: string
  /** Description of application (max length is 200 chars) */
  description: string
}

export type GetApplicationRequest = {
  /** ID of application to find */
  applicationId: string
}

export type UpdateApplicationRequest = {
  /** ID of application to update */
  applicationId: string
  /** New name of application (max length is 64 chars) */
  name?: string
  /** New description of application (max length is 200 chars) */
  description?: string
}

export type DeleteApplicationRequest = {
  /** ID of application to delete */
  applicationId: string
}

export type ListGroupsRequest = {
  /** Sort order of groups */
  orderBy?: ListGroupsRequestOrderBy
  /** Requested page number. Value must be greater or equals to 1 */
  page?: number
  /** Number of items per page. Value must be between 1 and 100 */
  pageSize?: number
  /** Filter by organization ID */
  organizationId?: string
  /** Name of group to find */
  name?: string
  /** Filter out by a list of application ID */
  applicationIds?: string[]
  /** Filter out by a list of user ID */
  userIds?: string[]
  /** Filter out by a list of group ID */
  groupIds?: string[]
}

export type CreateGroupRequest = {
  /** ID of organization linked to the group */
  organizationId?: string
  /**
   * Name of the group to create (max length is 64 chars). MUST be unique inside
   * an organization
   */
  name?: string
  /** Description of the group to create (max length is 200 chars) */
  description: string
}

export type GetGroupRequest = {
  /** ID of group */
  groupId: string
}

export type UpdateGroupRequest = {
  /** ID of group to update */
  groupId: string
  /**
   * New name for the group (max length is 64 chars). MUST be unique inside an
   * organization
   */
  name?: string
  /** New description for the group (max length is 200 chars) */
  description?: string
}

export type SetGroupMembersRequest = {
  groupId: string
  userIds: string[]
  applicationIds: string[]
}

export type AddGroupMemberRequest = {
  /** ID of group */
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

export type RemoveGroupMemberRequest = {
  /** ID of group */
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
  /** ID of group to delete */
  groupId: string
}

export type ListPoliciesRequest = {
  /** Criteria for sorting results */
  orderBy?: ListPoliciesRequestOrderBy
  /** Number of results per page. Value must be between 1 and 100 */
  pageSize?: number
  /** Number of page. Value must be greater to 1 */
  page?: number
  /** ID of organization to filter */
  organizationId?: string
  /** Filter out editable policies or not */
  editable?: boolean
  /** Filter out by a list of user ID */
  userIds?: string[]
  /** Filter out by a list of group ID */
  groupIds?: string[]
  /** Filter out by a list of application ID */
  applicationIds?: string[]
  /** True when the policy do not belong to any principal */
  noPrincipal?: boolean
  /** Name of policy to fetch */
  policyName?: string
}

export type CreatePolicyRequest = {
  /** Name of policy to create (max length is 64 chars) */
  name?: string
  /** Description of policy to create (max length is 200 chars) */
  description: string
  /** ID of organization */
  organizationId?: string
  /** Rules of the policy to create */
  rules?: RuleSpecs[]
  /**
   * ID of user, owner of the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  userId?: string
  /**
   * ID of group, owner of the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  groupId?: string
  /**
   * ID of application, owner of the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  applicationId?: string
  /**
   * True when the policy do not belong to any principal.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  noPrincipal?: boolean
}

export type GetPolicyRequest = {
  /** Id of policy to search */
  policyId: string
}

export type UpdatePolicyRequest = {
  /** Id of policy to update */
  policyId: string
  /** New name of policy (max length is 64 chars) */
  name?: string
  /** New description of policy (max length is 200 chars) */
  description?: string
  /**
   * New ID of user, owner of the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  userId?: string
  /**
   * New ID of group, owner of the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  groupId?: string
  /**
   * New ID of application, owner of the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  applicationId?: string
  /**
   * True when the policy do not belong to any principal.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId',
   * 'noPrincipal' could be set.
   */
  noPrincipal?: boolean
}

export type DeletePolicyRequest = {
  /** Id of policy to delete */
  policyId: string
}

export type ClonePolicyRequest = {
  policyId: string
}

export type SetRulesRequest = {
  /** Id of policy to update */
  policyId: string
  /** Rules of the policy to set */
  rules: RuleSpecs[]
}

export type ListRulesRequest = {
  /** Id of policy to search */
  policyId: string
  /** Number of results per page. Value must be between 1 and 100 */
  pageSize?: number
  /** Number of page. Value must be greater to 1 */
  page?: number
}

export type ListPermissionSetsRequest = {
  /** Criteria for sorting results */
  orderBy?: ListPermissionSetsRequestOrderBy
  /** Number of results per page. Value must be between 1 and 100 */
  pageSize?: number
  /** Number of page. Value must be greater to 1 */
  page?: number
  /** Filter by organization ID */
  organizationId?: string
}

export type ListAPIKeysRequest = {
  /** Criteria for sorting results */
  orderBy?: ListAPIKeysRequestOrderBy
  /** Number of page. Value must be greater or equals to 1 */
  page?: number
  /** Number of results per page. Value must be between 1 and 100 */
  pageSize?: number
  /** ID of organization */
  organizationId?: string
  /**
   * @deprecated ID of an application bearer.
   *
   *   One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  applicationId?: string
  /**
   * @deprecated ID of a user bearer.
   *
   *   One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  userId?: string
  /** Filter out editable API keys or not */
  editable?: boolean
  /** Filter out expirable API keys or not */
  expirable?: boolean
  /** Filter out by access key */
  accessKey?: string
  /** Filter out by description */
  description?: string
  /** Filter out by bearer ID */
  bearerId?: string
  /** Filter out by type of bearer */
  bearerType?: ListAPIKeysRequestBearerType
}

export type CreateAPIKeyRequest = {
  /**
   * ID of application principal.
   *
   * One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  applicationId?: string
  /**
   * ID of user principal.
   *
   * One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  userId?: string
  /** Expiration date of the API key */
  expiresAt?: Date
  /** The default project ID to use with object storage */
  defaultProjectId?: string
  /** The description of the API key (max length is 200 chars) */
  description: string
}

export type GetAPIKeyRequest = {
  /** Access key to search for */
  accessKey: string
}

export type UpdateAPIKeyRequest = {
  /** Access key to update */
  accessKey: string
  /** The new default project ID to set */
  defaultProjectId?: string
  /** The new description to update */
  description?: string
}

export type DeleteAPIKeyRequest = {
  /** Access key to delete */
  accessKey: string
}
