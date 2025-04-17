// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateDatabaseRequest = {
  cpuMax: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 15,
  },
  cpuMin: {
    lessThanOrEqual: 15,
  },
  fromBackupId: {
    ignoreEmpty: true,
  },
  name: {
    maxLength: 63,
    minLength: 1,
  },
}

export const Database = {
  cpuCurrent: {
    lessThanOrEqual: 15,
  },
  cpuMax: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 15,
  },
  cpuMin: {
    lessThanOrEqual: 15,
  },
}

export const ListDatabaseBackupsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListDatabasesRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const UpdateDatabaseRequest = {
  cpuMax: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 15,
  },
  cpuMin: {
    lessThanOrEqual: 15,
  },
}
