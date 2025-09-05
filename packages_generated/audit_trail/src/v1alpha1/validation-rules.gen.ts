// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const ListEventsRequest = {
  methodName: {
    pattern: /^[a-zA-Z][a-zA-Z0-9_]*$/,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
  productName: {
    pattern: /^[a-z]+(-[a-z]+)*$/,
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
