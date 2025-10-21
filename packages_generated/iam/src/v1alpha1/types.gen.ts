// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, Zone as ScwZone } from '@scaleway/sdk-client'

export type BearerType = 'unknown_bearer_type' | 'user' | 'application'

export type GracePeriodType =
  | 'unknown_grace_period_type'
  | 'update_password'
  | 'set_mfa'

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

export type ListLogsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

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
  | 'username_asc'
  | 'username_desc'

export type LocalityType = 'global' | 'region' | 'zone'

export type LogAction = 'unknown_action' | 'created' | 'updated' | 'deleted'

export type LogResourceType =
  | 'unknown_resource_type'
  | 'api_key'
  | 'user'
  | 'application'
  | 'group'
  | 'policy'

export type PermissionSetScopeType =
  | 'unknown_scope_type'
  | 'projects'
  | 'organization'
  | 'account_root_user'

export type SamlCertificateOrigin =
  | 'unknown_certificate_origin'
  | 'scaleway'
  | 'identity_provider'

export type SamlCertificateType =
  | 'unknown_certificate_type'
  | 'signing'
  | 'encryption'

export type SamlStatus =
  | 'unknown_saml_status'
  | 'valid'
  | 'missing_certificate'
  | 'missing_entity_id'
  | 'missing_single_sign_on_url'

export type UserStatus = 'unknown_status' | 'invitation_pending' | 'activated'

export type UserType = 'unknown_type' | 'owner' | 'member'

export interface ConnectionConnectedOrganization {
  id: string
  name: string
  locked: boolean
}

export interface ConnectionConnectedUser {
  id: string
  username: string
  type: UserType
}

export interface QuotumLimit {
  /**
   * Whether or not the limit is applied globally.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone' could be set.
   */
  global?: boolean
  /**
   * The region on which the limit is applied.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone' could be set.
   */
  region?: ScwRegion
  /**
   * The zone on which the limit is applied.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone' could be set.
   */
  zone?: ScwZone
  /**
   * Maximum locality limit.
   *
   * One-of ('value'): at most one of 'limit', 'unlimited' could be set.
   */
  limit?: number
  /**
   * Whether or not the quota per locality is unlimited.
   *
   * One-of ('value'): at most one of 'limit', 'unlimited' could be set.
   */
  unlimited?: boolean
}

export interface JWT {
  /**
   * JWT ID.
   */
  jti: string
  /**
   * ID of the user who issued the JWT.
   */
  issuerId: string
  /**
   * ID of the user targeted by the JWT.
   */
  audienceId: string
  /**
   * Creation date of the JWT.
   */
  createdAt?: Date
  /**
   * Last update date of the JWT.
   */
  updatedAt?: Date
  /**
   * Expiration date of the JWT.
   */
  expiresAt?: Date
  /**
   * IP address used during the creation of the JWT.
   */
  ip: string
  /**
   * User-agent used during the creation of the JWT.
   */
  userAgent: string
}

export interface RuleSpecs {
  /**
   * Names of permission sets bound to the rule.
   */
  permissionSetNames?: string[]
  /**
   * Condition expression to evaluate.
   */
  condition: string
  /**
   * List of Project IDs the rule is scoped to.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId' could be set.
   */
  projectIds?: string[]
  /**
   * ID of Organization the rule is scoped to.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId' could be set.
   */
  organizationId?: string
}

export interface CreateUserRequestMember {
  /**
   * Email of the user to create.
   */
  email: string
  /**
   * Whether or not to send an email containing the member's password.
   */
  sendPasswordEmail: boolean
  /**
   * Whether or not to send a welcome email that includes onboarding information.
   */
  sendWelcomeEmail: boolean
  /**
   * The member's username.
   */
  username: string
  /**
   * The member's password.
   */
  password: string
  /**
   * The member's first name.
   */
  firstName: string
  /**
   * The member's last name.
   */
  lastName: string
  /**
   * The member's phone number.
   */
  phoneNumber: string
  /**
   * The member's locale.
   */
  locale: string
}

export interface Connection {
  /**
   * Information about the connected organization.
   */
  organization?: ConnectionConnectedOrganization
  /**
   * Information about the connected user.
   */
  user?: ConnectionConnectedUser
}

export interface APIKey {
  /**
   * Access key of the API key.
   */
  accessKey: string
  /**
   * Secret key of the API Key.
   */
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
  /**
   * Description of API key.
   */
  description: string
  /**
   * Date and time of API key creation.
   */
  createdAt?: Date
  /**
   * Date and time of last API key update.
   */
  updatedAt?: Date
  /**
   * Date and time of API key expiration.
   */
  expiresAt?: Date
  /**
   * Default Project ID specified for this API key.
   */
  defaultProjectId: string
  /**
   * Defines whether or not the API key is editable.
   */
  editable: boolean
  /**
   * Defines whether or not the API key is deletable.
   */
  deletable: boolean
  /**
   * Defines whether or not the API key is managed.
   */
  managed: boolean
  /**
   * IP address of the device that created the API key.
   */
  creationIp: string
}

export interface Application {
  /**
   * ID of the application.
   */
  id: string
  /**
   * Name of the application.
   */
  name: string
  /**
   * Description of the application.
   */
  description: string
  /**
   * Date and time application was created.
   */
  createdAt?: Date
  /**
   * Date and time of last application update.
   */
  updatedAt?: Date
  /**
   * ID of the Organization.
   */
  organizationId: string
  /**
   * Defines whether or not the application is editable.
   */
  editable: boolean
  /**
   * Defines whether or not the application is deletable.
   */
  deletable: boolean
  /**
   * Defines whether or not the application is managed.
   */
  managed: boolean
  /**
   * Number of API keys attributed to the application.
   */
  nbApiKeys: number
  /**
   * Tags associated with the user.
   */
  tags: string[]
}

export interface GracePeriod {
  /**
   * Type of grace period.
   */
  type: GracePeriodType
  /**
   * Date and time the grace period was created.
   */
  createdAt?: Date
  /**
   * Date and time the grace period expires.
   */
  expiresAt?: Date
}

export interface Group {
  /**
   * ID of the group.
   */
  id: string
  /**
   * Date and time of group creation.
   */
  createdAt?: Date
  /**
   * Date and time of last group update.
   */
  updatedAt?: Date
  /**
   * ID of Organization linked to the group.
   */
  organizationId: string
  /**
   * Name of the group.
   */
  name: string
  /**
   * Description of the group.
   */
  description: string
  /**
   * IDs of users attached to this group.
   */
  userIds: string[]
  /**
   * IDs of applications attached to this group.
   */
  applicationIds: string[]
  /**
   * Tags associated to the group.
   */
  tags: string[]
  /**
   * Defines whether or not the group is editable.
   */
  editable: boolean
  /**
   * Defines whether or not the group is deletable.
   */
  deletable: boolean
  /**
   * Defines whether or not the group is managed.
   */
  managed: boolean
}

export interface Log {
  /**
   * Log ID.
   */
  id: string
  /**
   * Creation date of the log.
   */
  createdAt?: Date
  /**
   * IP address of the HTTP request linked to the log.
   */
  ip: string
  /**
   * User-Agent of the HTTP request linked to the log.
   */
  userAgent: string
  /**
   * Action linked to the log.
   */
  action: LogAction
  /**
   * ID of the principal at the origin of the log.
   */
  bearerId: string
  /**
   * ID of Organization linked to the log.
   */
  organizationId: string
  /**
   * Type of the resource linked to the log.
   */
  resourceType: LogResourceType
  /**
   * ID of the resource linked  to the log.
   */
  resourceId: string
}

export interface PermissionSet {
  /**
   * Id of the permission set.
   */
  id: string
  /**
   * Name of the permission set.
   */
  name: string
  /**
   * Scope of the permission set.
   */
  scopeType: PermissionSetScopeType
  /**
   * Description of the permission set.
   */
  description: string
  /**
   * Categories of the permission set.
   */
  categories?: string[]
}

export interface Policy {
  /**
   * Id of the policy.
   */
  id: string
  /**
   * Name of the policy.
   */
  name: string
  /**
   * Description of the policy.
   */
  description: string
  /**
   * Organization ID of the policy.
   */
  organizationId: string
  /**
   * Date and time of policy creation.
   */
  createdAt?: Date
  /**
   * Date and time of last policy update.
   */
  updatedAt?: Date
  /**
   * Defines whether or not a policy is editable.
   */
  editable: boolean
  /**
   * Defines whether or not a policy is deletable.
   */
  deletable: boolean
  /**
   * Defines whether or not a policy is managed.
   */
  managed: boolean
  /**
   * Number of rules of the policy.
   */
  nbRules: number
  /**
   * Number of policy scopes.
   */
  nbScopes: number
  /**
   * Number of permission sets of the policy.
   */
  nbPermissionSets: number
  /**
   * Tags associated with the policy.
   */
  tags: string[]
  /**
   * ID of the user attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  userId?: string
  /**
   * ID of the group attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  groupId?: string
  /**
   * ID of the application attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  applicationId?: string
  /**
   * Defines whether or not a policy is attributed to a principal.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  noPrincipal?: boolean
}

export interface Quotum {
  /**
   * Name of the quota.
   */
  name: string
  /**
   * @deprecated Maximum limit of the quota.
   *
   * One-of ('value'): at most one of 'limit', 'unlimited' could be set.
   */
  limit?: number
  /**
   * @deprecated Defines whether or not the quota is unlimited.
   *
   * One-of ('value'): at most one of 'limit', 'unlimited' could be set.
   */
  unlimited?: boolean
  /**
   * A human-readable name for the quota.
   */
  prettyName: string
  /**
   * The unit in which the quota is expressed.
   */
  unit: string
  /**
   * Details about the quota.
   */
  description: string
  /**
   * Whether this quotum is applied on at the zone level, region level, or globally.
   */
  localityType: LocalityType
  /**
   * Limits per locality.
   */
  limits: QuotumLimit[]
}

export interface Rule {
  /**
   * Id of rule.
   */
  id: string
  /**
   * Names of permission sets bound to the rule.
   */
  permissionSetNames?: string[]
  /**
   * Permission_set_names have the same scope_type.
   */
  permissionSetsScopeType: PermissionSetScopeType
  /**
   * Condition expression to evaluate.
   */
  condition: string
  /**
   * List of Project IDs the rule is scoped to.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId', 'accountRootUserId' could be set.
   */
  projectIds?: string[]
  /**
   * ID of Organization the rule is scoped to.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId', 'accountRootUserId' could be set.
   */
  organizationId?: string
  /**
   * ID of account root user the rule is scoped to.
   *
   * One-of ('scope'): at most one of 'projectIds', 'organizationId', 'accountRootUserId' could be set.
   */
  accountRootUserId?: string
}

export interface SSHKey {
  /**
   * ID of SSH key.
   */
  id: string
  /**
   * Name of SSH key.
   */
  name: string
  /**
   * Public key of SSH key.
   */
  publicKey: string
  /**
   * Fingerprint of the SSH key.
   */
  fingerprint: string
  /**
   * Creation date of SSH key.
   */
  createdAt?: Date
  /**
   * Last update date of SSH key.
   */
  updatedAt?: Date
  /**
   * ID of Organization linked to the SSH key.
   */
  organizationId: string
  /**
   * ID of Project linked to the SSH key.
   */
  projectId: string
  /**
   * SSH key status.
   */
  disabled: boolean
}

export interface SamlCertificate {
  /**
   * ID of the SAML certificate.
   */
  id: string
  /**
   * Type of the SAML certificate.
   */
  type: SamlCertificateType
  /**
   * Origin of the SAML certificate.
   */
  origin: SamlCertificateOrigin
  /**
   * Content of the SAML certificate.
   */
  content: string
  /**
   * Date and time of the SAML certificate expiration.
   */
  expiresAt?: Date
}

export interface User {
  /**
   * ID of user.
   */
  id: string
  /**
   * Email of user.
   */
  email: string
  /**
   * User identifier unique to the Organization.
   */
  username: string
  /**
   * First name of the user.
   */
  firstName: string
  /**
   * Last name of the user.
   */
  lastName: string
  /**
   * Phone number of the user.
   */
  phoneNumber: string
  /**
   * Locale of the user.
   */
  locale: string
  /**
   * Date user was created.
   */
  createdAt?: Date
  /**
   * Date of last user update.
   */
  updatedAt?: Date
  /**
   * ID of the Organization.
   */
  organizationId: string
  /**
   * Deletion status of user. Owners cannot be deleted.
   */
  deletable: boolean
  /**
   * Date of the last login.
   */
  lastLoginAt?: Date
  /**
   * Type of user.
   */
  type: UserType
  /**
   * @deprecated Deprecated, use "mfa" instead.
   */
  twoFactorEnabled?: boolean
  /**
   * @deprecated Status of user invitation.
   */
  status?: UserStatus
  /**
   * Defines whether MFA is enabled.
   */
  mfa: boolean
  /**
   * ID of the account root user associated with the user.
   */
  accountRootUserId: string
  /**
   * Tags associated with the user.
   */
  tags: string[]
  /**
   * Defines whether the user is locked.
   */
  locked: boolean
}

export interface SamlServiceProvider {
  entityId: string
  assertionConsumerServiceUrl: string
}

export type AddGroupMemberRequest = {
  /**
   * ID of the group.
   */
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
  /**
   * ID of the group.
   */
  groupId: string
  /**
   * IDs of the users to add.
   */
  userIds?: string[]
  /**
   * IDs of the applications to add.
   */
  applicationIds?: string[]
}

export type AddSamlCertificateRequest = {
  /**
   * ID of the SAML configuration.
   */
  samlId: string
  /**
   * Type of the SAML certificate.
   */
  type: SamlCertificateType
  /**
   * Content of the SAML certificate.
   */
  content: string
}

export type ClonePolicyRequest = {
  policyId: string
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
  /**
   * Expiration date of the API key.
   */
  expiresAt?: Date
  /**
   * Default Project ID to use with Object Storage.
   */
  defaultProjectId?: string
  /**
   * Description of the API key (max length is 200 characters).
   */
  description: string
}

export type CreateApplicationRequest = {
  /**
   * Name of the application to create (max length is 64 characters).
   */
  name?: string
  /**
   * ID of the Organization.
   */
  organizationId?: string
  /**
   * Description of the application (max length is 200 characters).
   */
  description: string
  /**
   * Tags associated with the application (maximum of 10 tags).
   */
  tags?: string[]
}

export type CreateGroupRequest = {
  /**
   * ID of Organization linked to the group.
   */
  organizationId?: string
  /**
   * Name of the group to create (max length is 64 chars). MUST be unique inside an Organization.
   */
  name?: string
  /**
   * Description of the group to create (max length is 200 chars).
   */
  description: string
  /**
   * Tags associated with the group (maximum of 10 tags).
   */
  tags?: string[]
}

export type CreateJWTRequest = {
  /**
   * ID of the user the JWT will be created for.
   */
  userId: string
  /**
   * Referrer of the JWT.
   */
  referrer: string
}

export type CreatePolicyRequest = {
  /**
   * Name of the policy to create (max length is 64 characters).
   */
  name?: string
  /**
   * Description of the policy to create (max length is 200 characters).
   */
  description: string
  /**
   * ID of the Organization.
   */
  organizationId?: string
  /**
   * Rules of the policy to create.
   */
  rules?: RuleSpecs[]
  /**
   * Tags associated with the policy (maximum of 10 tags).
   */
  tags?: string[]
  /**
   * ID of user attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  userId?: string
  /**
   * ID of group attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  groupId?: string
  /**
   * ID of application attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  applicationId?: string
  /**
   * Defines whether or not a policy is attributed to a principal.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  noPrincipal?: boolean
}

export type CreateSSHKeyRequest = {
  /**
   * Name of the SSH key. Max length is 1000.
   */
  name?: string
  /**
   * SSH public key. Currently only the ssh-rsa, ssh-dss (DSA), ssh-ed25519 and ecdsa keys with NIST curves are supported. Max length is 65000.
   */
  publicKey: string
  /**
   * Project the resource is attributed to.
   */
  projectId?: string
}

export type CreateUserMFAOTPRequest = {
  /**
   * User ID of the MFA OTP.
   */
  userId: string
}

export type CreateUserRequest = {
  /**
   * ID of the Organization.
   */
  organizationId?: string
  /**
   * Email of the user.
   *
   * One-of ('type'): at most one of 'email', 'member' could be set.
   */
  email?: string
  /**
   * Tags associated with the user.
   */
  tags?: string[]
  /**
   * Details of IAM member.
   *
   * One-of ('type'): at most one of 'email', 'member' could be set.
   */
  member?: CreateUserRequestMember
}

export type DeleteAPIKeyRequest = {
  /**
   * Access key to delete.
   */
  accessKey: string
}

export type DeleteApplicationRequest = {
  /**
   * ID of the application to delete.
   */
  applicationId: string
}

export type DeleteGroupRequest = {
  /**
   * ID of the group to delete.
   */
  groupId: string
}

export type DeleteJWTRequest = {
  /**
   * JWT ID of the JWT to delete.
   */
  jti: string
}

export type DeletePolicyRequest = {
  /**
   * Id of policy to delete.
   */
  policyId: string
}

export type DeleteSSHKeyRequest = {
  sshKeyId: string
}

export type DeleteSamlCertificateRequest = {
  /**
   * ID of the certificate to delete.
   */
  certificateId: string
}

export type DeleteSamlRequest = {
  /**
   * ID of the SAML configuration.
   */
  samlId: string
}

export type DeleteUserMFAOTPRequest = {
  /**
   * User ID of the MFA OTP.
   */
  userId: string
}

export type DeleteUserRequest = {
  /**
   * ID of the user to delete.
   */
  userId: string
}

export type EnableOrganizationSamlRequest = {
  /**
   * ID of the Organization.
   */
  organizationId?: string
}

export interface EncodedJWT {
  /**
   * The renewed JWT.
   */
  jwt?: JWT
  /**
   * The encoded token of the renewed JWT.
   */
  token: string
  /**
   * The encoded renew token. This token is necessary to renew the JWT.
   */
  renewToken: string
}

export type GetAPIKeyRequest = {
  /**
   * Access key to search for.
   */
  accessKey: string
}

export type GetApplicationRequest = {
  /**
   * ID of the application to find.
   */
  applicationId: string
}

export type GetGroupRequest = {
  /**
   * ID of the group.
   */
  groupId: string
}

export type GetJWTRequest = {
  /**
   * JWT ID of the JWT to get.
   */
  jti: string
}

export type GetLogRequest = {
  /**
   * ID of the log.
   */
  logId: string
}

export type GetOrganizationRequest = {
  /**
   * ID of the Organization.
   */
  organizationId?: string
}

export type GetOrganizationSamlRequest = {
  /**
   * ID of the Organization.
   */
  organizationId?: string
}

export type GetOrganizationSecuritySettingsRequest = {
  /**
   * ID of the Organization.
   */
  organizationId?: string
}

export type GetPolicyRequest = {
  /**
   * Id of policy to search.
   */
  policyId: string
}

export type GetQuotumRequest = {
  /**
   * Name of the quota to get.
   */
  quotumName: string
  /**
   * ID of the Organization.
   */
  organizationId?: string
}

export type GetSSHKeyRequest = {
  /**
   * ID of the SSH key.
   */
  sshKeyId: string
}

export type GetUserConnectionsRequest = {
  /**
   * ID of the user to list connections for.
   */
  userId: string
}

export interface GetUserConnectionsResponse {
  /**
   * List of connections.
   */
  connections: Connection[]
}

export type GetUserRequest = {
  /**
   * ID of the user to find.
   */
  userId: string
}

export type InitiateUserConnectionRequest = {
  /**
   * ID of the user that will be added to your connection.
   */
  userId: string
}

export interface InitiateUserConnectionResponse {
  /**
   * Token to be used in JoinUserConnection.
   */
  token: string
}

export type JoinUserConnectionRequest = {
  /**
   * User ID.
   */
  userId: string
  /**
   * A token returned by InitiateUserConnection.
   */
  token: string
}

export type ListAPIKeysRequest = {
  /**
   * Criteria for sorting results.
   */
  orderBy?: ListAPIKeysRequestOrderBy
  /**
   * Page number. Value must be greater or equal to 1.
   */
  page?: number
  /**
   * Number of results per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * ID of Organization.
   */
  organizationId?: string
  /**
   * @deprecated ID of application that bears the API key.
   *
   * One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  applicationId?: string
  /**
   * @deprecated ID of user that bears the API key.
   *
   * One-of ('bearer'): at most one of 'applicationId', 'userId' could be set.
   */
  userId?: string
  /**
   * Defines whether to filter out editable API keys or not.
   */
  editable?: boolean
  /**
   * Defines whether to filter out expired API keys or not.
   */
  expired?: boolean
  /**
   * @deprecated Filter by access key (deprecated in favor of `access_keys`).
   */
  accessKey?: string
  /**
   * Filter by description.
   */
  description?: string
  /**
   * Filter by bearer ID.
   */
  bearerId?: string
  /**
   * Filter by type of bearer.
   */
  bearerType?: BearerType
  /**
   * Filter by a list of access keys.
   */
  accessKeys?: string[]
}

export interface ListAPIKeysResponse {
  /**
   * List of API keys.
   */
  apiKeys: APIKey[]
  /**
   * Total count of API Keys.
   */
  totalCount: number
}

export type ListApplicationsRequest = {
  /**
   * Criteria for sorting results.
   */
  orderBy?: ListApplicationsRequestOrderBy
  /**
   * Number of results per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * Page number. Value must be greater than 1.
   */
  page?: number
  /**
   * Name of the application to filter.
   */
  name?: string
  /**
   * ID of the Organization to filter.
   */
  organizationId?: string
  /**
   * Defines whether to filter out editable applications or not.
   */
  editable?: boolean
  /**
   * Filter by list of IDs.
   */
  applicationIds?: string[]
  /**
   * Filter by tags containing a given string.
   */
  tag?: string
}

export interface ListApplicationsResponse {
  /**
   * List of applications.
   */
  applications: Application[]
  /**
   * Total count of applications.
   */
  totalCount: number
}

export type ListGracePeriodsRequest = {
  /**
   * ID of the user to list grace periods for.
   */
  userId?: string
}

export interface ListGracePeriodsResponse {
  /**
   * List of grace periods.
   */
  gracePeriods: GracePeriod[]
}

export type ListGroupsRequest = {
  /**
   * Sort order of groups.
   */
  orderBy?: ListGroupsRequestOrderBy
  /**
   * Requested page number. Value must be greater or equal to 1.
   */
  page?: number
  /**
   * Number of items per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * Name of group to find.
   */
  name?: string
  /**
   * Filter by a list of application IDs.
   */
  applicationIds?: string[]
  /**
   * Filter by a list of user IDs.
   */
  userIds?: string[]
  /**
   * Filter by a list of group IDs.
   */
  groupIds?: string[]
  /**
   * Filter by tags containing a given string.
   */
  tag?: string
}

export interface ListGroupsResponse {
  /**
   * List of groups.
   */
  groups: Group[]
  /**
   * Total count of groups.
   */
  totalCount: number
}

export type ListJWTsRequest = {
  /**
   * Criteria for sorting results.
   */
  orderBy?: ListJWTsRequestOrderBy
  /**
   * ID of the user to search.
   */
  audienceId: string
  /**
   * Number of results per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * Page number. Value must be greater to 1.
   */
  page?: number
  /**
   * Filter out expired JWTs or not.
   */
  expired?: boolean
}

export interface ListJWTsResponse {
  jwts: JWT[]
  totalCount: number
}

export type ListLogsRequest = {
  /**
   * Criteria for sorting results.
   */
  orderBy?: ListLogsRequestOrderBy
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * Number of results per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * Page number. Value must be greater to 1.
   */
  page?: number
  /**
   * Defined whether or not to filter out logs created after this timestamp.
   */
  createdAfter?: Date
  /**
   * Defined whether or not to filter out logs created before this timestamp.
   */
  createdBefore?: Date
  /**
   * Defined whether or not to filter out by a specific action.
   */
  action?: LogAction
  /**
   * Defined whether or not to filter out by a specific type of resource.
   */
  resourceType?: LogResourceType
  /**
   * Defined whether or not to filter out log by bearer ID or resource ID.
   */
  search?: string
}

export interface ListLogsResponse {
  /**
   * List of logs.
   */
  logs: Log[]
  /**
   * Total count of logs.
   */
  totalCount: number
}

export type ListPermissionSetsRequest = {
  /**
   * Criteria for sorting results.
   */
  orderBy?: ListPermissionSetsRequestOrderBy
  /**
   * Number of results per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * Page number. Value must be greater than 1.
   */
  page?: number
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
}

export interface ListPermissionSetsResponse {
  /**
   * List of permission sets.
   */
  permissionSets: PermissionSet[]
  /**
   * Total count of permission sets.
   */
  totalCount: number
}

export type ListPoliciesRequest = {
  /**
   * Criteria for sorting results.
   */
  orderBy?: ListPoliciesRequestOrderBy
  /**
   * Number of results per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * Page number. Value must be greater than 1.
   */
  page?: number
  /**
   * ID of the Organization to filter.
   */
  organizationId?: string
  /**
   * Defines whether or not filter out editable policies.
   */
  editable?: boolean
  /**
   * Defines whether or not to filter by list of user IDs.
   */
  userIds?: string[]
  /**
   * Defines whether or not to filter by list of group IDs.
   */
  groupIds?: string[]
  /**
   * Filter by a list of application IDs.
   */
  applicationIds?: string[]
  /**
   * Defines whether or not the policy is attributed to a principal.
   */
  noPrincipal?: boolean
  /**
   * Name of the policy to fetch.
   */
  policyName?: string
  /**
   * Filter by tags containing a given string.
   */
  tag?: string
  /**
   * Filter by a list of IDs.
   */
  policyIds?: string[]
}

export interface ListPoliciesResponse {
  /**
   * List of policies.
   */
  policies: Policy[]
  /**
   * Total count of policies.
   */
  totalCount: number
}

export type ListQuotaRequest = {
  /**
   * Criteria for sorting results.
   */
  orderBy?: ListQuotaRequestOrderBy
  /**
   * Number of results per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * Page number. Value must be greater than 1.
   */
  page?: number
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * List of quotum names to filter from.
   */
  quotumNames?: string[]
}

export interface ListQuotaResponse {
  /**
   * List of quota.
   */
  quota: Quotum[]
  /**
   * Total count of quota.
   */
  totalCount: number
}

export type ListRulesRequest = {
  /**
   * Id of policy to search.
   */
  policyId: string
  /**
   * Number of results per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * Page number. Value must be greater than 1.
   */
  page?: number
}

export interface ListRulesResponse {
  /**
   * Rules of the policy.
   */
  rules: Rule[]
  /**
   * Total count of rules.
   */
  totalCount: number
}

export type ListSSHKeysRequest = {
  /**
   * Sort order of the SSH keys.
   */
  orderBy?: ListSSHKeysRequestOrderBy
  /**
   * Requested page number. Value must be greater or equal to 1.
   */
  page?: number
  /**
   * Number of items per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * Name of group to find.
   */
  name?: string
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Defines whether to include disabled SSH keys or not.
   */
  disabled?: boolean
}

export interface ListSSHKeysResponse {
  /**
   * List of SSH keys.
   */
  sshKeys: SSHKey[]
  /**
   * Total count of SSH keys.
   */
  totalCount: number
}

export type ListSamlCertificatesRequest = {
  /**
   * ID of the SAML configuration.
   */
  samlId: string
}

export interface ListSamlCertificatesResponse {
  /**
   * List of SAML certificates.
   */
  certificates: SamlCertificate[]
}

export type ListUsersRequest = {
  /**
   * Criteria for sorting results.
   */
  orderBy?: ListUsersRequestOrderBy
  /**
   * Number of results per page. Value must be between 1 and 100.
   */
  pageSize?: number
  /**
   * Page number. Value must be greater or equal to 1.
   */
  page?: number
  /**
   * ID of the Organization to filter.
   */
  organizationId?: string
  /**
   * Filter by list of IDs.
   */
  userIds?: string[]
  /**
   * Filter by MFA status.
   */
  mfa?: boolean
  /**
   * Filter by tags containing a given string.
   */
  tag?: string
  /**
   * Filter by user type.
   */
  type?: UserType
}

export interface ListUsersResponse {
  /**
   * List of users.
   */
  users: User[]
  /**
   * Total count of users.
   */
  totalCount: number
}

export type LockUserRequest = {
  /**
   * ID of the user to lock.
   */
  userId: string
}

export interface MFAOTP {
  secret: string
}

export interface Organization {
  /**
   * ID of the Organization.
   */
  id: string
  /**
   * Name of the Organization.
   */
  name: string
  /**
   * Alias of the Organization.
   */
  alias: string
  /**
   * Defines whether login with a password is enabled for the Organization.
   */
  loginPasswordEnabled: boolean
  /**
   * Defines whether login with an authentication code is enabled for the Organization.
   */
  loginMagicCodeEnabled: boolean
  /**
   * Defines whether login through OAuth2 is enabled for the Organization.
   */
  loginOauth2Enabled: boolean
  /**
   * Defines whether login through SAML is enabled for the Organization.
   */
  loginSamlEnabled: boolean
}

export interface OrganizationSecuritySettings {
  /**
   * Defines whether password renewal is enforced during first login.
   */
  enforcePasswordRenewal: boolean
  /**
   * Duration of the grace period to renew password or enable MFA.
   */
  gracePeriodDuration?: string
  /**
   * Number of login attempts before the account is locked.
   */
  loginAttemptsBeforeLocked: number
  /**
   * Maximum duration a login session will stay active before needing to relogin.
   */
  maxLoginSessionDuration?: string
}

export type ParseSamlMetadataRequest = {
  file: Blob
}

export interface ParseSamlMetadataResponse {
  singleSignOnUrl: string
  entityId: string
  signingCertificates: string[]
}

export type RemoveGroupMemberRequest = {
  /**
   * ID of the group.
   */
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

export type RemoveUserConnectionRequest = {
  /**
   * ID of the user you want to manage the connection for.
   */
  userId: string
  /**
   * ID of the user you want to remove from your connection.
   */
  targetUserId: string
}

export interface Saml {
  /**
   * ID of the SAML configuration.
   */
  id: string
  /**
   * Status of the SAML configuration.
   */
  status: SamlStatus
  /**
   * Service Provider information.
   */
  serviceProvider?: SamlServiceProvider
  /**
   * Entity ID of the SAML Identity Provider.
   */
  entityId: string
  /**
   * Single Sign-On URL of the SAML Identity Provider.
   */
  singleSignOnUrl: string
}

export type SetGroupMembersRequest = {
  groupId: string
  userIds: string[]
  applicationIds: string[]
}

export type SetOrganizationAliasRequest = {
  /**
   * ID of the Organization.
   */
  organizationId?: string
  /**
   * Alias of the Organization.
   */
  alias: string
}

export type SetRulesRequest = {
  /**
   * Id of policy to update.
   */
  policyId: string
  /**
   * Rules of the policy to set.
   */
  rules: RuleSpecs[]
}

export interface SetRulesResponse {
  /**
   * Rules of the policy.
   */
  rules: Rule[]
}

export type UnlockUserRequest = {
  /**
   * ID of the user to unlock.
   */
  userId: string
}

export type UpdateAPIKeyRequest = {
  /**
   * Access key to update.
   */
  accessKey: string
  /**
   * New default Project ID to set.
   */
  defaultProjectId?: string
  /**
   * New description to update.
   */
  description?: string
}

export type UpdateApplicationRequest = {
  /**
   * ID of the application to update.
   */
  applicationId: string
  /**
   * New name for the application (max length is 64 chars).
   */
  name?: string
  /**
   * New description for the application (max length is 200 chars).
   */
  description?: string
  /**
   * New tags for the application (maximum of 10 tags).
   */
  tags?: string[]
}

export type UpdateGroupRequest = {
  /**
   * ID of the group to update.
   */
  groupId: string
  /**
   * New name for the group (max length is 64 chars). MUST be unique inside an Organization.
   */
  name?: string
  /**
   * New description for the group (max length is 200 chars).
   */
  description?: string
  /**
   * New tags for the group (maximum of 10 tags).
   */
  tags?: string[]
}

export type UpdateOrganizationLoginMethodsRequest = {
  /**
   * ID of the Organization.
   */
  organizationId?: string
  /**
   * Defines whether login with a password is enabled for the Organization.
   */
  loginPasswordEnabled?: boolean
  /**
   * Defines whether login through OAuth2 is enabled for the Organization.
   */
  loginOauth2Enabled?: boolean
  /**
   * Defines whether login with an authentication code is enabled for the Organization.
   */
  loginMagicCodeEnabled?: boolean
  /**
   * Defines whether login through SAML is enabled for the Organization.
   */
  loginSamlEnabled?: boolean
}

export type UpdateOrganizationSecuritySettingsRequest = {
  /**
   * ID of the Organization.
   */
  organizationId?: string
  /**
   * Defines whether password renewal is enforced during first login.
   */
  enforcePasswordRenewal?: boolean
  /**
   * Duration of the grace period to renew password or enable MFA.
   */
  gracePeriodDuration?: string
  /**
   * Number of login attempts before the account is locked.
   */
  loginAttemptsBeforeLocked?: number
  /**
   * Maximum duration a login session will stay active before needing to relogin.
   */
  maxLoginSessionDuration?: string
}

export type UpdatePolicyRequest = {
  /**
   * Id of policy to update.
   */
  policyId: string
  /**
   * New name for the policy (max length is 64 characters).
   */
  name?: string
  /**
   * New description of policy (max length is 200 characters).
   */
  description?: string
  /**
   * New tags for the policy (maximum of 10 tags).
   */
  tags?: string[]
  /**
   * New ID of user attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  userId?: string
  /**
   * New ID of group attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  groupId?: string
  /**
   * New ID of application attributed to the policy.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  applicationId?: string
  /**
   * Defines whether or not the policy is attributed to a principal.
   *
   * One-of ('principal'): at most one of 'userId', 'groupId', 'applicationId', 'noPrincipal' could be set.
   */
  noPrincipal?: boolean
}

export type UpdateSSHKeyRequest = {
  sshKeyId: string
  /**
   * Name of the SSH key. Max length is 1000.
   */
  name?: string
  /**
   * Enable or disable the SSH key.
   */
  disabled?: boolean
}

export type UpdateSamlRequest = {
  /**
   * ID of the SAML configuration.
   */
  samlId: string
  /**
   * Entity ID of the SAML Identity Provider.
   */
  entityId?: string
  /**
   * Single Sign-On URL of the SAML Identity Provider.
   */
  singleSignOnUrl?: string
}

export type UpdateUserPasswordRequest = {
  /**
   * ID of the user to update.
   */
  userId: string
  /**
   * The new password.
   */
  password: string
}

export type UpdateUserRequest = {
  /**
   * ID of the user to update.
   */
  userId: string
  /**
   * New tags for the user (maximum of 10 tags).
   */
  tags?: string[]
  /**
   * IAM member email.
   */
  email?: string
  /**
   * IAM member first name.
   */
  firstName?: string
  /**
   * IAM member last name.
   */
  lastName?: string
  /**
   * IAM member phone number.
   */
  phoneNumber?: string
  /**
   * IAM member locale.
   */
  locale?: string
}

export type UpdateUserUsernameRequest = {
  /**
   * ID of the user to update.
   */
  userId: string
  /**
   * The new username.
   */
  username: string
}

export type ValidateUserMFAOTPRequest = {
  /**
   * User ID of the MFA OTP.
   */
  userId: string
  /**
   * A password generated using the OTP.
   */
  oneTimePassword: string
}

export interface ValidateUserMFAOTPResponse {
  /**
   * List of recovery codes usable for this OTP method.
   */
  recoveryCodes: string[]
}
