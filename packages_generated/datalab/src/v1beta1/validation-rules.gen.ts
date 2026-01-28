// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateDatalabRequest = {
  name: {
    maxLength: 100,
    minLength: 3,
    pattern: /^[A-Za-z0-9-_. ]+$/,
  },
}

export const CreateDatalabRequestSparkWorker = {
  nodeCount: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 150,
  },
}

export const ListClusterVersionsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 0,
    lessThanOrEqual: 100,
  },
}

export const ListDatalabsRequest = {
  name: {
    maxLength: 100,
    minLength: 3,
    pattern: /^[A-Za-z0-9-_. ]+$/,
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
    greaterThanOrEqual: 0,
    lessThanOrEqual: 100,
  },
}

export const ListNotebookVersionsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const UpdateDatalabRequest = {
  nodeCount: {
    greaterThanOrEqual: 0,
    lessThanOrEqual: 150,
  },
}
