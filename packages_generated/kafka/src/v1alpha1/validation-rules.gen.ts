// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateClusterRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
  nodeAmount: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 30,
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
    pattern:
      /^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/,
  },
  version: {
    pattern: /^[0-9]+\.[0-9]+\.[0-9]+$/,
  },
}

export const ListClustersRequest = {
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
    pattern:
      /^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/,
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
    pattern: /^[0-9]+\.[0-9]+\.[0-9]+$/,
  },
}

export const UpdateClusterRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
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
    pattern:
      /^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/,
  },
}
