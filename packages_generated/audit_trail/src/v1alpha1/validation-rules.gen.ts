// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateExportJobRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[a-zA-Z0-9]([-_.a-zA-Z0-9]*[a-zA-Z0-9])?$/,
  },
}

export const ExportJobS3 = {
  bucket: {
    maxLength: 63,
    minLength: 3,
    pattern: /^[a-z0-9][a-z0-9.-]{2,}$/,
  },
  prefix: {
    maxLength: 255,
    pattern: /^[a-zA-Z0-9\._\-]+(?:\/[a-zA-Z0-9\._\-]+)*$/,
  },
  region: {
    pattern: /^[a-z]{2}-[a-z]{3}$/,
  },
}

export const ListAuthenticationEventsRequest = {
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListCombinedEventsRequest = {
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListEventsRequest = {
  methodName: {
    pattern: /^[a-zA-Z][a-zA-Z0-9_]*$/,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
  productName: {
    pattern: /^[a-z0-9]+(-[a-z0-9]+)*$/,
  },
  resourceId: {
    maxLength: 100,
    pattern: /^[a-zA-Z0-9._-]+$/,
  },
  serviceName: {
    pattern: /^scaleway(\.[a-zA-Z0-9_-]*)*$/,
  },
  status: {
    greaterThanOrEqual: 200,
    lessThan: 600,
  },
}
