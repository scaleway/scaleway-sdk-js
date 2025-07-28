// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateInstanceRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
  nodeAmount: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 3,
  },
  nodeType: {
    maxLength: 128,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
  password: {
    maxLength: 128,
    minLength: 8,
  },
  userName: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-zA-Z0-9_\-]*$/,
  },
  version: {
    pattern: /^[0-9]+\.[0-9]+$/,
  },
}

export const CreateSnapshotRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
}

export const CreateUserRequest = {
  name: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-zA-Z0-9_\-]*$/,
  },
  password: {
    maxLength: 128,
    minLength: 8,
  },
}

export const DeleteUserRequest = {
  name: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-zA-Z0-9_\-]*$/,
  },
}

export const ListDatabasesRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListInstancesRequest = {
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

export const ListSnapshotsRequest = {
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
    pattern: /^[0-9]+\.[0-9]+$/,
  },
}

export const RestoreSnapshotRequest = {
  instanceName: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
  nodeAmount: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 3,
  },
}

export const SetUserRoleRequest = {
  userName: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-zA-Z0-9_\-]*$/,
  },
}

export const UpdateInstanceRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
  snapshotScheduleFrequencyHours: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 24,
  },
  snapshotScheduleRetentionDays: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 365,
  },
}

export const UpdateSnapshotRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9\-_]+$/,
  },
}

export const UpdateUserRequest = {
  name: {
    maxLength: 63,
    minLength: 1,
    pattern: /^[a-zA-Z0-9_\-]*$/,
  },
  password: {
    maxLength: 128,
    minLength: 8,
  },
}

export const Volume = {
  sizeBytes: {
    greaterThanOrEqual: 1000000000,
  },
}
