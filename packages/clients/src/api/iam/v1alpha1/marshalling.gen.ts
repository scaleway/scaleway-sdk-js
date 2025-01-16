// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  APIKey,
  AddGroupMemberRequest,
  AddGroupMembersRequest,
  Application,
  CreateAPIKeyRequest,
  CreateApplicationRequest,
  CreateGroupRequest,
  CreateJWTRequest,
  CreatePolicyRequest,
  CreateSSHKeyRequest,
  CreateUserRequest,
  CreateUserRequestMember,
  EncodedJWT,
  GracePeriod,
  Group,
  JWT,
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
  ListUsersResponse,
  Log,
  MFAOTP,
  OrganizationSecuritySettings,
  PermissionSet,
  Policy,
  Quotum,
  RemoveGroupMemberRequest,
  Rule,
  RuleSpecs,
  SSHKey,
  SetGroupMembersRequest,
  SetRulesRequest,
  SetRulesResponse,
  UpdateAPIKeyRequest,
  UpdateApplicationRequest,
  UpdateGroupRequest,
  UpdateOrganizationSecuritySettingsRequest,
  UpdatePolicyRequest,
  UpdateSSHKeyRequest,
  UpdateUserPasswordRequest,
  UpdateUserRequest,
  UpdateUserUsernameRequest,
  User,
  ValidateUserMFAOTPRequest,
  ValidateUserMFAOTPResponse,
} from './types.gen'

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

export const unmarshalQuotum = (data: unknown): Quotum => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Quotum' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    limit: data.limit,
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
    id: data.id,
    lastLoginAt: unmarshalDate(data.last_login_at),
    locked: data.locked,
    mfa: data.mfa,
    organizationId: data.organization_id,
    status: data.status,
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
  } as OrganizationSecuritySettings
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
  password: request.password,
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

export const marshalRemoveGroupMemberRequest = (
  request: RemoveGroupMemberRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    { param: 'user_id', value: request.userId },
    { param: 'application_id', value: request.applicationId },
  ]),
})

export const marshalSetGroupMembersRequest = (
  request: SetGroupMembersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  application_ids: request.applicationIds,
  user_ids: request.userIds,
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

export const marshalUpdateOrganizationSecuritySettingsRequest = (
  request: UpdateOrganizationSecuritySettingsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enforce_password_renewal: request.enforcePasswordRenewal,
  grace_period_duration: request.gracePeriodDuration,
  login_attempts_before_locked: request.loginAttemptsBeforeLocked,
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
