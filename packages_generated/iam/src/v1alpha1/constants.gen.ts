// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  BearerType,
  GracePeriodType,
  ListAPIKeysRequestOrderBy,
  ListApplicationsRequestOrderBy,
  ListGroupsRequestOrderBy,
  ListJWTsRequestOrderBy,
  ListLogsRequestOrderBy,
  ListPermissionSetsRequestOrderBy,
  ListPoliciesRequestOrderBy,
  ListQuotaRequestOrderBy,
  ListSSHKeysRequestOrderBy,
  ListScimTokensRequestOrderBy,
  ListUserWebAuthnAuthenticatorsRequestOrderBy,
  ListUsersRequestOrderBy,
  LocalityType,
  LogAction,
  LogResourceType,
  PermissionSetScopeType,
  SamlCertificateOrigin,
  SamlCertificateType,
  SamlStatus,
  UserStatus,
  UserType,
} from './types.gen.js'


/** Lists all values of the enum {@link BearerType}. */
export const BEARER_TYPES: BearerType[] = [
  'unknown_bearer_type',
  'user',
  'application',
]

/** Lists all values of the enum {@link GracePeriodType}. */
export const GRACE_PERIOD_TYPES: GracePeriodType[] = [
  'unknown_grace_period_type',
  'update_password',
  'set_mfa',
]

/** Lists all values of the enum {@link ListAPIKeysRequestOrderBy}. */
export const LIST_API_KEYS_REQUEST_ORDER_BIES: ListAPIKeysRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
  'expires_at_asc',
  'expires_at_desc',
  'access_key_asc',
  'access_key_desc',
]

/** Lists all values of the enum {@link ListApplicationsRequestOrderBy}. */
export const LIST_APPLICATIONS_REQUEST_ORDER_BIES: ListApplicationsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListGroupsRequestOrderBy}. */
export const LIST_GROUPS_REQUEST_ORDER_BIES: ListGroupsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListJWTsRequestOrderBy}. */
export const LIST_JW_TS_REQUEST_ORDER_BIES: ListJWTsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListLogsRequestOrderBy}. */
export const LIST_LOGS_REQUEST_ORDER_BIES: ListLogsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListPermissionSetsRequestOrderBy}. */
export const LIST_PERMISSION_SETS_REQUEST_ORDER_BIES: ListPermissionSetsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListPoliciesRequestOrderBy}. */
export const LIST_POLICIES_REQUEST_ORDER_BIES: ListPoliciesRequestOrderBy[] = [
  'policy_name_asc',
  'policy_name_desc',
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListQuotaRequestOrderBy}. */
export const LIST_QUOTA_REQUEST_ORDER_BIES: ListQuotaRequestOrderBy[] = [
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListSSHKeysRequestOrderBy}. */
export const LIST_SSH_KEYS_REQUEST_ORDER_BIES: ListSSHKeysRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListScimTokensRequestOrderBy}. */
export const LIST_SCIM_TOKENS_REQUEST_ORDER_BIES: ListScimTokensRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListUserWebAuthnAuthenticatorsRequestOrderBy}. */
export const LIST_USER_WEB_AUTHN_AUTHENTICATORS_REQUEST_ORDER_BIES: ListUserWebAuthnAuthenticatorsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListUsersRequestOrderBy}. */
export const LIST_USERS_REQUEST_ORDER_BIES: ListUsersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
  'email_asc',
  'email_desc',
  'last_login_asc',
  'last_login_desc',
  'username_asc',
  'username_desc',
]

/** Lists all values of the enum {@link LocalityType}. */
export const LOCALITY_TYPES: LocalityType[] = [
  'global',
  'region',
  'zone',
]

/** Lists all values of the enum {@link LogAction}. */
export const LOG_ACTIONS: LogAction[] = [
  'unknown_action',
  'created',
  'updated',
  'deleted',
]

/** Lists all values of the enum {@link LogResourceType}. */
export const LOG_RESOURCE_TYPES: LogResourceType[] = [
  'unknown_resource_type',
  'api_key',
  'user',
  'application',
  'group',
  'policy',
]

/** Lists all values of the enum {@link PermissionSetScopeType}. */
export const PERMISSION_SET_SCOPE_TYPES: PermissionSetScopeType[] = [
  'unknown_scope_type',
  'projects',
  'organization',
  'account_root_user',
]

/** Lists all values of the enum {@link SamlCertificateOrigin}. */
export const SAML_CERTIFICATE_ORIGINS: SamlCertificateOrigin[] = [
  'unknown_certificate_origin',
  'scaleway',
  'identity_provider',
]

/** Lists all values of the enum {@link SamlCertificateType}. */
export const SAML_CERTIFICATE_TYPES: SamlCertificateType[] = [
  'unknown_certificate_type',
  'signing',
  'encryption',
]

/** Lists all values of the enum {@link SamlStatus}. */
export const SAML_STATUSES: SamlStatus[] = [
  'unknown_saml_status',
  'valid',
  'missing_certificate',
  'missing_entity_id',
  'missing_single_sign_on_url',
]

/** Lists all values of the enum {@link UserStatus}. */
export const USER_STATUSES: UserStatus[] = [
  'unknown_status',
  'invitation_pending',
  'activated',
]

/** Lists all values of the enum {@link UserType}. */
export const USER_TYPES: UserType[] = [
  'unknown_type',
  'owner',
  'member',
]

