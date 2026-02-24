// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateDatabaseRequest = {
  name: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-z][a-zA-Z0-9_\-]*$/,
  },
}

export const CreateDeploymentRequest = {
  cpuMax: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 15,
  },
  cpuMin: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 15,
  },
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9-_]+$/,
  },
  password: {
    maxLength: 50,
    minLength: 12,
  },
  replicaCount: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 6,
  },
  shardCount: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 6,
  },
  version: {
    maxLength: 10,
    minLength: 1,
    pattern: /^v[0-9]+$/,
  },
}

export const CreateUserRequest = {
  name: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-z][a-zA-Z0-9_\-]*$/,
  },
  password: {
    maxLength: 50,
    minLength: 12,
  },
}

export const DeleteDatabaseRequest = {
  name: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-z][a-zA-Z0-9_\-]*$/,
  },
}

export const DeleteUserRequest = {
  name: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-z][a-zA-Z0-9_\-]*$/,
  },
}

export const Deployment = {
  cpuMax: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 15,
  },
  cpuMin: {
    lessThanOrEqual: 15,
  },
  name: {
    maxLength: 63,
    minLength: 1,
  },
}

export const ListDatabasesRequest = {
  name: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-z][a-zA-Z0-9_\-]*$/,
  },
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListDeploymentsRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9-_]+$/,
  },
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListPresetsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListUsersRequest = {
  name: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-zA-Z0-9_\-]*$/,
  },
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListVersionsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
  version: {
    maxLength: 10,
    minLength: 1,
    pattern: /^v[0-9]+$/,
  },
}

export const UpdateDeploymentRequest = {
  cpuMax: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 15,
  },
  cpuMin: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 15,
  },
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9-_]+$/,
  },
  replicaCount: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 6,
  },
}

export const UpdateUserRequest = {
  name: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-z][a-zA-Z0-9_\-]*$/,
  },
  password: {
    maxLength: 50,
    minLength: 12,
  },
}
