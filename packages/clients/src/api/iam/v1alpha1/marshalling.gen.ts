// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
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
  Application,
  CreateAPIKeyRequest,
  CreateApplicationRequest,
  CreateGroupRequest,
  CreatePolicyRequest,
  CreateSSHKeyRequest,
  Group,
  ListAPIKeysResponse,
  ListApplicationsResponse,
  ListGroupsResponse,
  ListPermissionSetsResponse,
  ListPoliciesResponse,
  ListRulesResponse,
  ListSSHKeysResponse,
  ListUsersResponse,
  PermissionSet,
  Policy,
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
  UpdatePolicyRequest,
  UpdateSSHKeyRequest,
  User,
} from './types.gen'

export const unmarshalAPIKey = (data: unknown) => {
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
    description: data.description,
    editable: data.editable,
    expiresAt: unmarshalDate(data.expires_at),
    secretKey: data.secret_key,
    updatedAt: unmarshalDate(data.updated_at),
    userId: data.user_id,
  } as APIKey
}

export const unmarshalApplication = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Application' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    editable: data.editable,
    id: data.id,
    name: data.name,
    nbApiKeys: data.nb_api_keys,
    organizationId: data.organization_id,
    updatedAt: unmarshalDate(data.updated_at),
  } as Application
}

export const unmarshalGroup = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Group' failed as data isn't a dictionary.`,
    )
  }

  return {
    applicationIds: data.application_ids,
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    updatedAt: unmarshalDate(data.updated_at),
    userIds: data.user_ids,
  } as Group
}

const unmarshalPermissionSet = (data: unknown) => {
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

export const unmarshalPolicy = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Policy' failed as data isn't a dictionary.`,
    )
  }

  return {
    applicationId: data.application_id,
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    editable: data.editable,
    groupId: data.group_id,
    id: data.id,
    name: data.name,
    nbPermissionSets: data.nb_permission_sets,
    nbRules: data.nb_rules,
    nbScopes: data.nb_scopes,
    noPrincipal: data.no_principal,
    organizationId: data.organization_id,
    updatedAt: unmarshalDate(data.updated_at),
    userId: data.user_id,
  } as Policy
}

const unmarshalRule = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Rule' failed as data isn't a dictionary.`,
    )
  }

  return {
    accountRootUserId: data.account_root_user_id,
    id: data.id,
    organizationId: data.organization_id,
    permissionSetNames: data.permission_set_names,
    permissionSetsScopeType: data.permission_sets_scope_type,
    projectIds: data.project_ids,
  } as Rule
}

export const unmarshalSSHKey = (data: unknown) => {
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

export const unmarshalUser = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'User' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    deletable: data.deletable,
    email: data.email,
    id: data.id,
    lastLoginAt: unmarshalDate(data.last_login_at),
    organizationId: data.organization_id,
    status: data.status,
    twoFactorEnabled: data.two_factor_enabled,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as User
}

export const unmarshalListAPIKeysResponse = (data: unknown) => {
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

export const unmarshalListApplicationsResponse = (data: unknown) => {
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

export const unmarshalListGroupsResponse = (data: unknown) => {
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

export const unmarshalListPermissionSetsResponse = (data: unknown) => {
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

export const unmarshalListPoliciesResponse = (data: unknown) => {
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

export const unmarshalListRulesResponse = (data: unknown) => {
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

export const unmarshalListSSHKeysResponse = (data: unknown) => {
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

export const unmarshalListUsersResponse = (data: unknown) => {
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

export const unmarshalSetRulesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalRule),
  } as SetRulesResponse
}

const marshalRuleSpecs = (
  request: RuleSpecs,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  permission_set_names: request.permissionSetNames,
  ...resolveOneOf<unknown>([
    {
      param: 'project_ids',
      value: request.projectIds,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
})

export const marshalAddGroupMemberRequest = (
  request: AddGroupMemberRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    {
      param: 'user_id',
      value: request.userId,
    },
    {
      param: 'application_id',
      value: request.applicationId,
    },
  ]),
})

export const marshalCreateAPIKeyRequest = (
  request: CreateAPIKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  default_project_id: request.defaultProjectId,
  description: request.description,
  expires_at: request.expiresAt,
  ...resolveOneOf([
    {
      param: 'application_id',
      value: request.applicationId,
    },
    {
      param: 'user_id',
      value: request.userId,
    },
  ]),
})

export const marshalCreateApplicationRequest = (
  request: CreateApplicationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
})

export const marshalCreateGroupRequest = (
  request: CreateGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
})

export const marshalCreatePolicyRequest = (
  request: CreatePolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
  rules: request.rules
    ? request.rules.map(elt => marshalRuleSpecs(elt, defaults))
    : undefined,
  ...resolveOneOf<unknown>([
    {
      param: 'user_id',
      value: request.userId,
    },
    {
      param: 'group_id',
      value: request.groupId,
    },
    {
      param: 'application_id',
      value: request.applicationId,
    },
    {
      param: 'no_principal',
      value: request.noPrincipal,
    },
  ]),
})

export const marshalCreateSSHKeyRequest = (
  request: CreateSSHKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  public_key: request.publicKey,
})

export const marshalRemoveGroupMemberRequest = (
  request: RemoveGroupMemberRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    {
      param: 'user_id',
      value: request.userId,
    },
    {
      param: 'application_id',
      value: request.applicationId,
    },
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
})

export const marshalUpdateGroupRequest = (
  request: UpdateGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
})

export const marshalUpdatePolicyRequest = (
  request: UpdatePolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  ...resolveOneOf<unknown>([
    {
      param: 'user_id',
      value: request.userId,
    },
    {
      param: 'group_id',
      value: request.groupId,
    },
    {
      param: 'application_id',
      value: request.applicationId,
    },
    {
      param: 'no_principal',
      value: request.noPrincipal,
    },
  ]),
})

export const marshalUpdateSSHKeyRequest = (
  request: UpdateSSHKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  disabled: request.disabled,
  name: request.name,
})
