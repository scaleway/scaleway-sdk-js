// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const DataSourceLogsLimits = {
  ingestionRateLimitBytesPerSecond: {
    greaterThanOrEqual: 1000000,
    lessThanOrEqual: 64000000,
  },
}

export const DataSourceMetricsLimits = {
  ingestionRateLimitSamplesPerSecond: {
    greaterThanOrEqual: 10000,
    lessThanOrEqual: 1000000,
  },
  maxSeries: {
    greaterThanOrEqual: 100000,
    lessThanOrEqual: 10000000,
  },
}

export const DataSourceTracesLimits = {
  ingestionRateLimitBytesPerSecond: {
    greaterThanOrEqual: 1000000,
    lessThanOrEqual: 64000000,
  },
}

export const RegionalApiCreateDataSourceRequest = {
  name: {
    maxLength: 50,
    minLength: 3,
    pattern: /^[A-Za-z0-9-_. ]+$/,
  },
  retentionDays: {
    greaterThanOrEqual: 1,
    ignoreEmpty: true,
    lessThanOrEqual: 1825,
  },
}

export const RegionalApiCreateExporterRequest = {
  description: {
    maxLength: 200,
  },
  name: {
    maxLength: 60,
    minLength: 1,
  },
}

export const RegionalApiCreateTokenRequest = {
  name: {
    maxLength: 50,
    minLength: 3,
    pattern: /^[A-Za-z0-9-_]+$/,
  },
}

export const RegionalApiListContactPointsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const RegionalApiListDataSourcesRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const RegionalApiListExportersRequest = {
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const RegionalApiListProductsRequest = {
  page: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 10000,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const RegionalApiListTokensRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const RegionalApiUpdateDataSourceRequest = {
  name: {
    ignoreEmpty: true,
    maxLength: 50,
    minLength: 3,
    pattern: /^[A-Za-z0-9-_. ]+$/,
  },
  retentionDays: {
    greaterThanOrEqual: 1,
    ignoreEmpty: true,
    lessThanOrEqual: 1825,
  },
}

export const RegionalApiUpdateExporterRequest = {
  description: {
    maxLength: 200,
  },
  name: {
    maxLength: 60,
    minLength: 1,
  },
}
