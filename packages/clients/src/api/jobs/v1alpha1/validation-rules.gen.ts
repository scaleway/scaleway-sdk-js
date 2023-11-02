// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateJobDefinitionRequest = {
  cpuLimit: {
    greaterThan: 0,
  },
  memoryLimit: {
    greaterThan: 0,
  },
  name: {
    minLength: 3,
  },
}

export const ListJobDefinitionsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListJobRunsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const UpdateJobDefinitionRequest = {
  cpuLimit: {
    greaterThan: 0,
  },
  memoryLimit: {
    greaterThan: 0,
  },
  name: {
    minLength: 3,
  },
}
