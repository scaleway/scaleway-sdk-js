// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  marshalBlobToScwFile,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  APIKey,
  AddGroupMemberRequest,
  AddGroupMembersRequest,
  AddSamlCertificateRequest,
  Application,
  Connection,
  ConnectionConnectedOrganization,
  ConnectionConnectedUser,
  CreateAPIKeyRequest,
  CreateApplicationRequest,
  CreateGroupRequest,
  CreateJWTRequest,
  CreatePolicyRequest,
  CreateSSHKeyRequest,
  CreateUserRequest,
  CreateUserRequestMember,
  EncodedJWT,
  GetUserConnectionsResponse,
  GracePeriod,
  Group,
  InitiateUserConnectionResponse,
  JWT,
  JoinUserConnectionRequest,
  ListAPIKeysResponse,
  ListApplicationsResponse,
  ListGracePeriodsResponse,
  ListGroupsResponse,
  ListJWTsResponse,
  ListLogsResponse,
  ListPermissionSetsResponse,
  ListPoliciesResponse,
  ListQuotaResponse,
  ListRulesResponse,
  ListSSHKeysResponse,
  ListSamlCertificatesResponse,
  ListUsersResponse,
  Log,
  MFAOTP,
  Organization,
  OrganizationSecuritySettings,
  ParseSamlMetadataRequest,
  ParseSamlMetadataResponse,
  PermissionSet,
  Policy,
  Quotum,
  QuotumLimit,
  RemoveGroupMemberRequest,
  RemoveUserConnectionRequest,
  Rule,
  RuleSpecs,
  SSHKey,
  Saml,
  SamlCertificate,
  SamlServiceProvider,
  SetGroupMembersRequest,
  SetOrganizationAliasRequest,
  SetRulesRequest,
  SetRulesResponse,
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
  User,
  ValidateUserMFAOTPRequest,
  ValidateUserMFAOTPResponse,
} from './types.gen.js'

export const unmarshalJWT = (data: unknown): JWT => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'JWT' failed as data isn't a dictionary.`,
    )
  }

  return {
    audienceId: data.audience_id,
    createdAt: unmarshalDate(data.created_at),
    expiresAt: unmarshalDate(data.expires_at),
    ip: data.ip,
    issuerId: data.issuer_id,
    jti: data.jti,
    updatedAt: unmarshalDate(data.updated_at),
    userAgent: data.user_agent,
  } as JWT
}

export const unmarshalAPIKey = (data: unknown): APIKey => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'APIKey' failed as data isn't a dictionary.`,
    )
  }

  return {
    accessKey: data.access_key,
    applicationId: data.application_id,
    createdAt: unmarshalDate(data.created_at),
    creationIp: data.creation_ip,
    defaultProjectId: data.default_project_id,
    deletable: data.deletable,
    description: data.description,
    editable: data.editable,
    expiresAt: unmarshalDate(data.expires_at),
    managed: data.managed,
    secretKey: data.secret_key,
    updatedAt: unmarshalDate(data.updated_at),
    userId: data.user_id,
  } as APIKey
}

export const unmarshalApplication = (data: unknown): Application => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Application' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    deletable: data.deletable,
    description: data.description,
    editable: data.editable,
    id: data.id,
    managed: data.managed,
    name: data.name,
    nbApiKeys: data.nb_api_keys,
    organizationId: data.organization_id,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Application
}

export const unmarshalGroup = (data: unknown): Group => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Group' failed as data isn't a dictionary.`,
    )
  }

  return {
    applicationIds: data.application_ids,
    createdAt: unmarshalDate(data.created_at),
    deletable: data.deletable,
    description: data.description,
    editable: data.editable,
    id: data.id,
    managed: data.managed,
    name: data.name,
    organizationId: data.organization_id,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    userIds: data.user_ids,
  } as Group
}

export const unmarshalLog = (data: unknown): Log => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Log' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    bearerId: data.bearer_id,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    ip: data.ip,
    organizationId: data.organization_id,
    resourceId: data.resource_id,
    resourceType: data.resource_type,
    userAgent: data.user_agent,
  } as Log
}

export const unmarshalPolicy = (data: unknown): Policy => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Policy' failed as data isn't a dictionary.`,
    )
  }

  return {
    applicationId: data.application_id,
    createdAt: unmarshalDate(data.created_at),
    deletable: data.deletable,
    description: data.description,
    editable: data.editable,
    groupId: data.group_id,
    id: data.id,
    managed: data.managed,
    name: data.name,
    nbPermissionSets: data.nb_permission_sets,
    nbRules: data.nb_rules,
    nbScopes: data.nb_scopes,
    noPrincipal: data.no_principal,
    organizationId: data.organization_id,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    userId: data.user_id,
  } as Policy
}

const unmarshalQuotumLimit = (data: unknown): QuotumLimit => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'QuotumLimit' failed as data isn't a dictionary.`,
    )
  }

  return {
    global: data.global,
    limit: data.limit,
    region: data.region,
    unlimited: data.unlimited,
    zone: data.zone,
  } as QuotumLimit
}

export const unmarshalQuotum = (data: unknown): Quotum => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Quotum' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    limit: data.limit,
    limits: unmarshalArrayOfObject(data.limits, unmarshalQuotumLimit),
    localityType: data.locality_type,
    name: data.name,
    prettyName: data.pretty_name,
    unit: data.unit,
    unlimited: data.unlimited,
  } as Quotum
}

export const unmarshalSSHKey = (data: unknown): SSHKey => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SSHKey' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    disabled: data.disabled,
    fingerprint: data.fingerprint,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    publicKey: data.public_key,
    updatedAt: unmarshalDate(data.updated_at),
  } as SSHKey
}

export const unmarshalSamlCertificate = (data: unknown): SamlCertificate => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SamlCertificate' failed as data isn't a dictionary.`,
    )
  }

  return {
    content: data.content,
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    origin: data.origin,
    type: data.type,
  } as SamlCertificate
}

export const unmarshalUser = (data: unknown): User => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'User' failed as data isn't a dictionary.`,
    )
  }

  return {
    accountRootUserId: data.account_root_user_id,
    createdAt: unmarshalDate(data.created_at),
    deletable: data.deletable,
    email: data.email,
    firstName: data.first_name,
    id: data.id,
    lastLoginAt: unmarshalDate(data.last_login_at),
    lastName: data.last_name,
    locale: data.locale,
    locked: data.locked,
    mfa: data.mfa,
    organizationId: data.organization_id,
    phoneNumber: data.phone_number,
    status: data.status ? data.status : undefined,
    tags: data.tags,
    twoFactorEnabled: data.two_factor_enabled,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    username: data.username,
  } as User
}

export const unmarshalEncodedJWT = (data: unknown): EncodedJWT => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EncodedJWT' failed as data isn't a dictionary.`,
    )
  }

  return {
    jwt: data.jwt ? unmarshalJWT(data.jwt) : undefined,
    renewToken: data.renew_token,
    token: data.token,
  } as EncodedJWT
}

const unmarshalConnectionConnectedOrganization = (
  data: unknown,
): ConnectionConnectedOrganization => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ConnectionConnectedOrganization' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    locked: data.locked,
    name: data.name,
  } as ConnectionConnectedOrganization
}

const unmarshalConnectionConnectedUser = (
  data: unknown,
): ConnectionConnectedUser => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ConnectionConnectedUser' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    type: data.type,
    username: data.username,
  } as ConnectionConnectedUser
}

const unmarshalConnection = (data: unknown): Connection => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Connection' failed as data isn't a dictionary.`,
    )
  }

  return {
    organization: data.organization
      ? unmarshalConnectionConnectedOrganization(data.organization)
      : undefined,
    user: data.user ? unmarshalConnectionConnectedUser(data.user) : undefined,
  } as Connection
}

export const unmarshalGetUserConnectionsResponse = (
  data: unknown,
): GetUserConnectionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetUserConnectionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    connections: unmarshalArrayOfObject(data.connections, unmarshalConnection),
  } as GetUserConnectionsResponse
}

export const unmarshalInitiateUserConnectionResponse = (
  data: unknown,
): InitiateUserConnectionResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InitiateUserConnectionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    token: data.token,
  } as InitiateUserConnectionResponse
}

export const unmarshalListAPIKeysResponse = (
  data: unknown,
): ListAPIKeysResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAPIKeysResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    apiKeys: unmarshalArrayOfObject(data.api_keys, unmarshalAPIKey),
    totalCount: data.total_count,
  } as ListAPIKeysResponse
}

export const unmarshalListApplicationsResponse = (
  data: unknown,
): ListApplicationsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListApplicationsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    applications: unmarshalArrayOfObject(
      data.applications,
      unmarshalApplication,
    ),
    totalCount: data.total_count,
  } as ListApplicationsResponse
}

const unmarshalGracePeriod = (data: unknown): GracePeriod => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GracePeriod' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    expiresAt: unmarshalDate(data.expires_at),
    type: data.type,
  } as GracePeriod
}

export const unmarshalListGracePeriodsResponse = (
  data: unknown,
): ListGracePeriodsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListGracePeriodsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    gracePeriods: unmarshalArrayOfObject(
      data.grace_periods,
      unmarshalGracePeriod,
    ),
  } as ListGracePeriodsResponse
}

export const unmarshalListGroupsResponse = (
  data: unknown,
): ListGroupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListGroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    groups: unmarshalArrayOfObject(data.groups, unmarshalGroup),
    totalCount: data.total_count,
  } as ListGroupsResponse
}

export const unmarshalListJWTsResponse = (data: unknown): ListJWTsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListJWTsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    jwts: unmarshalArrayOfObject(data.jwts, unmarshalJWT),
    totalCount: data.total_count,
  } as ListJWTsResponse
}

export const unmarshalListLogsResponse = (data: unknown): ListLogsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListLogsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    logs: unmarshalArrayOfObject(data.logs, unmarshalLog),
    totalCount: data.total_count,
  } as ListLogsResponse
}

const unmarshalPermissionSet = (data: unknown): PermissionSet => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PermissionSet' failed as data isn't a dictionary.`,
    )
  }

  return {
    categories: data.categories,
    description: data.description,
    id: data.id,
    name: data.name,
    scopeType: data.scope_type,
  } as PermissionSet
}

export const unmarshalListPermissionSetsResponse = (
  data: unknown,
): ListPermissionSetsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPermissionSetsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    permissionSets: unmarshalArrayOfObject(
      data.permission_sets,
      unmarshalPermissionSet,
    ),
    totalCount: data.total_count,
  } as ListPermissionSetsResponse
}

export const unmarshalListPoliciesResponse = (
  data: unknown,
): ListPoliciesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPoliciesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    policies: unmarshalArrayOfObject(data.policies, unmarshalPolicy),
    totalCount: data.total_count,
  } as ListPoliciesResponse
}

export const unmarshalListQuotaResponse = (
  data: unknown,
): ListQuotaResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListQuotaResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    quota: unmarshalArrayOfObject(data.quota, unmarshalQuotum),
    totalCount: data.total_count,
  } as ListQuotaResponse
}

const unmarshalRule = (data: unknown): Rule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Rule' failed as data isn't a dictionary.`,
    )
  }

  return {
    accountRootUserId: data.account_root_user_id,
    condition: data.condition,
    id: data.id,
    organizationId: data.organization_id,
    permissionSetNames: data.permission_set_names,
    permissionSetsScopeType: data.permission_sets_scope_type,
    projectIds: data.project_ids,
  } as Rule
}

export const unmarshalListRulesResponse = (
  data: unknown,
): ListRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalRule),
    totalCount: data.total_count,
  } as ListRulesResponse
}

export const unmarshalListSSHKeysResponse = (
  data: unknown,
): ListSSHKeysResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSSHKeysResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    sshKeys: unmarshalArrayOfObject(data.ssh_keys, unmarshalSSHKey),
    totalCount: data.total_count,
  } as ListSSHKeysResponse
}

export const unmarshalListSamlCertificatesResponse = (
  data: unknown,
): ListSamlCertificatesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSamlCertificatesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    certificates: unmarshalArrayOfObject(
      data.certificates,
      unmarshalSamlCertificate,
    ),
  } as ListSamlCertificatesResponse
}

export const unmarshalListUsersResponse = (
  data: unknown,
): ListUsersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListUsersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    users: unmarshalArrayOfObject(data.users, unmarshalUser),
  } as ListUsersResponse
}

export const unmarshalMFAOTP = (data: unknown): MFAOTP => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'MFAOTP' failed as data isn't a dictionary.`,
    )
  }

  return {
    secret: data.secret,
  } as MFAOTP
}

export const unmarshalOrganization = (data: unknown): Organization => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Organization' failed as data isn't a dictionary.`,
    )
  }

  return {
    alias: data.alias,
    id: data.id,
    loginMagicCodeEnabled: data.login_magic_code_enabled,
    loginOauth2Enabled: data.login_oauth2_enabled,
    loginPasswordEnabled: data.login_password_enabled,
    loginSamlEnabled: data.login_saml_enabled,
    name: data.name,
  } as Organization
}

export const unmarshalOrganizationSecuritySettings = (
  data: unknown,
): OrganizationSecuritySettings => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OrganizationSecuritySettings' failed as data isn't a dictionary.`,
    )
  }

  return {
    enforcePasswordRenewal: data.enforce_password_renewal,
    gracePeriodDuration: data.grace_period_duration,
    loginAttemptsBeforeLocked: data.login_attempts_before_locked,
    maxApiKeyExpirationDuration: data.max_api_key_expiration_duration,
    maxLoginSessionDuration: data.max_login_session_duration,
  } as OrganizationSecuritySettings
}

export const unmarshalParseSamlMetadataResponse = (
  data: unknown,
): ParseSamlMetadataResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ParseSamlMetadataResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    entityId: data.entity_id,
    signingCertificates: data.signing_certificates,
    singleSignOnUrl: data.single_sign_on_url,
  } as ParseSamlMetadataResponse
}

const unmarshalSamlServiceProvider = (data: unknown): SamlServiceProvider => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SamlServiceProvider' failed as data isn't a dictionary.`,
    )
  }

  return {
    assertionConsumerServiceUrl: data.assertion_consumer_service_url,
    entityId: data.entity_id,
  } as SamlServiceProvider
}

export const unmarshalSaml = (data: unknown): Saml => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Saml' failed as data isn't a dictionary.`,
    )
  }

  return {
    entityId: data.entity_id,
    id: data.id,
    serviceProvider: data.service_provider
      ? unmarshalSamlServiceProvider(data.service_provider)
      : undefined,
    singleSignOnUrl: data.single_sign_on_url,
    status: data.status,
  } as Saml
}

export const unmarshalSetRulesResponse = (data: unknown): SetRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalRule),
  } as SetRulesResponse
}

export const unmarshalValidateUserMFAOTPResponse = (
  data: unknown,
): ValidateUserMFAOTPResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ValidateUserMFAOTPResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    recoveryCodes: data.recovery_codes,
  } as ValidateUserMFAOTPResponse
}

export const marshalAddGroupMemberRequest = (
  request: AddGroupMemberRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    { param: 'user_id', value: request.userId },
    { param: 'application_id', value: request.applicationId },
  ]),
})

export const marshalAddGroupMembersRequest = (
  request: AddGroupMembersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  application_ids: request.applicationIds,
  user_ids: request.userIds,
})

export const marshalAddSamlCertificateRequest = (
  request: AddSamlCertificateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  content: request.content,
  type: request.type,
})

export const marshalCreateAPIKeyRequest = (
  request: CreateAPIKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  default_project_id: request.defaultProjectId,
  description: request.description,
  expires_at: request.expiresAt,
  ...resolveOneOf([
    { param: 'application_id', value: request.applicationId },
    { param: 'user_id', value: request.userId },
  ]),
})

export const marshalCreateApplicationRequest = (
  request: CreateApplicationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name || randomName('app'),
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
  tags: request.tags,
})

export const marshalCreateGroupRequest = (
  request: CreateGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name || randomName('grp'),
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
  tags: request.tags,
})

export const marshalCreateJWTRequest = (
  request: CreateJWTRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  referrer: request.referrer,
  user_id: request.userId,
})

const marshalRuleSpecs = (
  request: RuleSpecs,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  condition: request.condition,
  permission_set_names: request.permissionSetNames,
  ...resolveOneOf<unknown[] | string>([
    { param: 'project_ids', value: request.projectIds },
    { param: 'organization_id', value: request.organizationId },
  ]),
})

export const marshalCreatePolicyRequest = (
  request: CreatePolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name || randomName('pol'),
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
  rules:
    request.rules !== undefined
      ? request.rules.map(elt => marshalRuleSpecs(elt, defaults))
      : undefined,
  tags: request.tags,
  ...resolveOneOf<string | boolean>([
    { param: 'user_id', value: request.userId },
    { param: 'group_id', value: request.groupId },
    { param: 'application_id', value: request.applicationId },
    { param: 'no_principal', value: request.noPrincipal },
  ]),
})

export const marshalCreateSSHKeyRequest = (
  request: CreateSSHKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('key'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  public_key: request.publicKey,
})

const marshalCreateUserRequestMember = (
  request: CreateUserRequestMember,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
  first_name: request.firstName,
  last_name: request.lastName,
  locale: request.locale,
  password: request.password,
  phone_number: request.phoneNumber,
  send_password_email: request.sendPasswordEmail,
  send_welcome_email: request.sendWelcomeEmail,
  username: request.username,
})

export const marshalCreateUserRequest = (
  request: CreateUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
  tags: request.tags,
  ...resolveOneOf<string | Record<string, unknown>>([
    { param: 'email', value: request.email },
    {
      param: 'member',
      value:
        request.member !== undefined
          ? marshalCreateUserRequestMember(request.member, defaults)
          : undefined,
    },
  ]),
})

export const marshalJoinUserConnectionRequest = (
  request: JoinUserConnectionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  token: request.token,
})

export const marshalParseSamlMetadataRequest = async (
  request: ParseSamlMetadataRequest,
  defaults: DefaultValues,
): Promise<Record<string, unknown>> => ({
  file: await marshalBlobToScwFile(request.file),
})

export const marshalRemoveGroupMemberRequest = (
  request: RemoveGroupMemberRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    { param: 'user_id', value: request.userId },
    { param: 'application_id', value: request.applicationId },
  ]),
})

export const marshalRemoveUserConnectionRequest = (
  request: RemoveUserConnectionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  target_user_id: request.targetUserId,
})

export const marshalSetGroupMembersRequest = (
  request: SetGroupMembersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  application_ids: request.applicationIds,
  user_ids: request.userIds,
})

export const marshalSetOrganizationAliasRequest = (
  request: SetOrganizationAliasRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  alias: request.alias,
})

export const marshalSetRulesRequest = (
  request: SetRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  policy_id: request.policyId,
  rules: request.rules.map(elt => marshalRuleSpecs(elt, defaults)),
})

export const marshalUpdateAPIKeyRequest = (
  request: UpdateAPIKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  default_project_id: request.defaultProjectId,
  description: request.description,
  expires_at: request.expiresAt,
})

export const marshalUpdateApplicationRequest = (
  request: UpdateApplicationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateGroupRequest = (
  request: UpdateGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateOrganizationLoginMethodsRequest = (
  request: UpdateOrganizationLoginMethodsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  login_magic_code_enabled: request.loginMagicCodeEnabled,
  login_oauth2_enabled: request.loginOauth2Enabled,
  login_password_enabled: request.loginPasswordEnabled,
  login_saml_enabled: request.loginSamlEnabled,
})

export const marshalUpdateOrganizationSecuritySettingsRequest = (
  request: UpdateOrganizationSecuritySettingsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enforce_password_renewal: request.enforcePasswordRenewal,
  grace_period_duration: request.gracePeriodDuration,
  login_attempts_before_locked: request.loginAttemptsBeforeLocked,
  max_api_key_expiration_duration: request.maxApiKeyExpirationDuration,
  max_login_session_duration: request.maxLoginSessionDuration,
})

export const marshalUpdatePolicyRequest = (
  request: UpdatePolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  tags: request.tags,
  ...resolveOneOf<string | boolean>([
    { param: 'user_id', value: request.userId },
    { param: 'group_id', value: request.groupId },
    { param: 'application_id', value: request.applicationId },
    { param: 'no_principal', value: request.noPrincipal },
  ]),
})

export const marshalUpdateSSHKeyRequest = (
  request: UpdateSSHKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  disabled: request.disabled,
  name: request.name,
})

export const marshalUpdateSamlRequest = (
  request: UpdateSamlRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  entity_id: request.entityId,
  single_sign_on_url: request.singleSignOnUrl,
})

export const marshalUpdateUserPasswordRequest = (
  request: UpdateUserPasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
})

export const marshalUpdateUserRequest = (
  request: UpdateUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
  first_name: request.firstName,
  last_name: request.lastName,
  locale: request.locale,
  phone_number: request.phoneNumber,
  tags: request.tags,
})

export const marshalUpdateUserUsernameRequest = (
  request: UpdateUserUsernameRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  username: request.username,
})

export const marshalValidateUserMFAOTPRequest = (
  request: ValidateUserMFAOTPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  one_time_password: request.oneTimePassword,
})
