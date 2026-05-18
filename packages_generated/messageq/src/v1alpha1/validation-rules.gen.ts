// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateDeploymentRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
  nodeType: {
    maxLength: 128,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
  password: {
    maxLength: 128,
    minLength: 12,
  },
  userName: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-zA-Z0-9_\-]*$/,
  },
  version: {
    maxLength: 128,
    minLength: 1,
    pattern: /^[0-9]+\.[0-9]+$/,
  },
}

export const CreateUserRequest = {
  password: {
    maxLength: 128,
    minLength: 8,
  },
  username: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-zA-Z0-9_\-]*$/,
  },
}

export const DeleteUserRequest = {
  username: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-zA-Z0-9_\-]*$/,
  },
}

export const ListDeploymentsRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
  version: {
    maxLength: 128,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
}

export const ListNodeTypesRequest = {
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
}

export const UpdateDeploymentRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const UpdateUserRequest = {
  password: {
    maxLength: 128,
    minLength: 8,
  },
  username: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-zA-Z0-9_\-]*$/,
  },
}

export const Volume = {
  sizeBytes: {
    greaterThanOrEqual: 1000000000,
  },
}
