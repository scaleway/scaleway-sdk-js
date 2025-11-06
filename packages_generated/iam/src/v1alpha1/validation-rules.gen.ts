// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const AddSamlCertificateRequest = {
  content: {
    maxLength: 16384,
    minLength: 1,
  },
}

export const CreateAPIKeyRequest = {
  description: {
    ignoreEmpty: true,
    maxLength: 200,
  },
}

export const CreateApplicationRequest = {
  description: {
    ignoreEmpty: true,
    maxLength: 200,
  },
  name: {
    maxLength: 64,
    minLength: 1,
    pattern: /^[a-zA-Z0-9\(\)\._\- ]+$/,
  },
}

export const CreateGroupRequest = {
  description: {
    ignoreEmpty: true,
    maxLength: 200,
  },
  name: {
    maxLength: 64,
    minLength: 1,
    pattern: /^[a-zA-Z0-9\(\)\._\- ]+$/,
  },
}

export const CreatePolicyRequest = {
  description: {
    ignoreEmpty: true,
    maxLength: 200,
  },
  name: {
    maxLength: 64,
    minLength: 1,
    pattern: /^[a-zA-Z0-9\(\)\._\- ]+$/,
  },
}

export const CreateSSHKeyRequest = {
  name: {
    ignoreEmpty: true,
    maxLength: 1000,
  },
  publicKey: {
    maxLength: 65000,
    minLength: 1,
  },
}

export const CreateUserRequestMember = {
  firstName: {
    maxLength: 64,
  },
  lastName: {
    maxLength: 64,
  },
  password: {
    ignoreEmpty: true,
  },
  username: {
    maxLength: 64,
    minLength: 2,
    pattern: /^[a-zA-Z0-9@._-]+$/,
  },
}

export const GetQuotumRequest = {
  quotumName: {
    minLength: 1,
  },
}

export const JoinUserConnectionRequest = {
  token: {
    minLength: 1,
  },
}

export const ListAPIKeysRequest = {
  description: {
    maxLength: 200,
  },
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListApplicationsRequest = {
  name: {
    maxLength: 64,
    minLength: 1,
    pattern: /^[a-zA-Z0-9\(\)\._\- ]+$/,
  },
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListGroupsRequest = {
  name: {
    minLength: 1,
  },
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListJWTsRequest = {
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListLogsRequest = {
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListPermissionSetsRequest = {
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListPoliciesRequest = {
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
  policyName: {
    minLength: 1,
  },
}

export const ListQuotaRequest = {
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListRulesRequest = {
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListSSHKeysRequest = {
  name: {
    maxLength: 1000,
    minLength: 1,
  },
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListScimTokensRequest = {
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListUsersRequest = {
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const RuleSpecs = {
  condition: {
    maxLength: 2048,
  },
}

export const SetOrganizationAliasRequest = {
  alias: {
    maxLength: 32,
    minLength: 2,
    pattern: /^[a-z0-9]+$/,
  },
}

export const UpdateAPIKeyRequest = {
  description: {
    maxLength: 200,
  },
}

export const UpdateApplicationRequest = {
  description: {
    maxLength: 200,
  },
  name: {
    maxLength: 64,
    minLength: 1,
    pattern: /^[a-zA-Z0-9\(\)\._\- ]+$/,
  },
}

export const UpdateGroupRequest = {
  description: {
    maxLength: 200,
  },
  name: {
    maxLength: 64,
    minLength: 1,
    pattern: /^[a-zA-Z0-9\(\)\._\- ]+$/,
  },
}

export const UpdateOrganizationSecuritySettingsRequest = {
  loginAttemptsBeforeLocked: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 50,
  },
}

export const UpdatePolicyRequest = {
  description: {
    maxLength: 200,
  },
  name: {
    maxLength: 64,
    minLength: 1,
    pattern: /^[a-zA-Z0-9\(\)\._\- ]+$/,
  },
}

export const UpdateSSHKeyRequest = {
  name: {
    maxLength: 1000,
  },
}

export const UpdateSamlRequest = {
  entityId: {
    maxLength: 1024,
    minLength: 1,
  },
}

export const UpdateUserRequest = {
  firstName: {
    maxLength: 64,
  },
  lastName: {
    maxLength: 64,
  },
}

export const UpdateUserUsernameRequest = {
  username: {
    maxLength: 64,
    minLength: 2,
    pattern: /^[a-zA-Z0-9@._-]+$/,
  },
}

export const ValidateUserMFAOTPRequest = {
  oneTimePassword: {
    pattern: /^[0-9]{6}$/,
  },
}
