// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  Alert,
  AlertManager,
  ContactPoint,
  ContactPointEmail,
  DataSource,
  GetConfigResponse,
  GetConfigResponseRetention,
  GlobalApiCreateGrafanaUserRequest,
  GlobalApiResetGrafanaUserPasswordRequest,
  GlobalApiSelectPlanRequest,
  GlobalApiSyncGrafanaDataSourcesRequest,
  Grafana,
  GrafanaProductDashboard,
  GrafanaUser,
  ListAlertsResponse,
  ListContactPointsResponse,
  ListDataSourcesResponse,
  ListGrafanaProductDashboardsResponse,
  ListGrafanaUsersResponse,
  ListPlansResponse,
  ListTokensResponse,
  Plan,
  RegionalApiCreateContactPointRequest,
  RegionalApiCreateDataSourceRequest,
  RegionalApiCreateTokenRequest,
  RegionalApiDeleteContactPointRequest,
  RegionalApiDisableAlertManagerRequest,
  RegionalApiDisableManagedAlertsRequest,
  RegionalApiEnableAlertManagerRequest,
  RegionalApiEnableManagedAlertsRequest,
  RegionalApiTriggerTestAlertRequest,
  RegionalApiUpdateContactPointRequest,
  RegionalApiUpdateDataSourceRequest,
  Token,
  Usage,
  UsageOverview,
} from './types.gen'

const unmarshalContactPointEmail = (data: unknown): ContactPointEmail => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactPointEmail' failed as data isn't a dictionary.`,
    )
  }

  return {
    to: data.to,
  } as ContactPointEmail
}

export const unmarshalContactPoint = (data: unknown): ContactPoint => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactPoint' failed as data isn't a dictionary.`,
    )
  }

  return {
    email: data.email ? unmarshalContactPointEmail(data.email) : undefined,
    receiveResolvedNotifications: data.receive_resolved_notifications,
    region: data.region,
  } as ContactPoint
}

export const unmarshalDataSource = (data: unknown): DataSource => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DataSource' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    origin: data.origin,
    projectId: data.project_id,
    region: data.region,
    retentionDays: data.retention_days,
    synchronizedWithGrafana: data.synchronized_with_grafana,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    url: data.url,
  } as DataSource
}

export const unmarshalGrafanaProductDashboard = (
  data: unknown,
): GrafanaProductDashboard => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GrafanaProductDashboard' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    tags: data.tags,
    title: data.title,
    url: data.url,
    variables: data.variables,
  } as GrafanaProductDashboard
}

export const unmarshalGrafanaUser = (data: unknown): GrafanaUser => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GrafanaUser' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    login: data.login,
    password: data.password,
    role: data.role,
  } as GrafanaUser
}

export const unmarshalPlan = (data: unknown): Plan => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Plan' failed as data isn't a dictionary.`,
    )
  }

  return {
    logsIngestionPrice: data.logs_ingestion_price,
    monthlyPrice: data.monthly_price,
    name: data.name,
    retentionLogsInterval: data.retention_logs_interval,
    retentionMetricsInterval: data.retention_metrics_interval,
    retentionTracesInterval: data.retention_traces_interval,
    sampleIngestionPrice: data.sample_ingestion_price,
    tracesIngestionPrice: data.traces_ingestion_price,
  } as Plan
}

export const unmarshalToken = (data: unknown): Token => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Token' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    projectId: data.project_id,
    region: data.region,
    scopes: data.scopes,
    secretKey: data.secret_key,
    updatedAt: unmarshalDate(data.updated_at),
  } as Token
}

export const unmarshalAlertManager = (data: unknown): AlertManager => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AlertManager' failed as data isn't a dictionary.`,
    )
  }

  return {
    alertManagerEnabled: data.alert_manager_enabled,
    alertManagerUrl: data.alert_manager_url,
    managedAlertsEnabled: data.managed_alerts_enabled,
    region: data.region,
  } as AlertManager
}

const unmarshalGetConfigResponseRetention = (
  data: unknown,
): GetConfigResponseRetention => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetConfigResponseRetention' failed as data isn't a dictionary.`,
    )
  }

  return {
    defaultDays: data.default_days,
    maxDays: data.max_days,
    minDays: data.min_days,
  } as GetConfigResponseRetention
}

export const unmarshalGetConfigResponse = (
  data: unknown,
): GetConfigResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetConfigResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    customLogsRetention: data.custom_logs_retention
      ? unmarshalGetConfigResponseRetention(data.custom_logs_retention)
      : undefined,
    customMetricsRetention: data.custom_metrics_retention
      ? unmarshalGetConfigResponseRetention(data.custom_metrics_retention)
      : undefined,
    customTracesRetention: data.custom_traces_retention
      ? unmarshalGetConfigResponseRetention(data.custom_traces_retention)
      : undefined,
    productLogsRetention: data.product_logs_retention
      ? unmarshalGetConfigResponseRetention(data.product_logs_retention)
      : undefined,
    productMetricsRetention: data.product_metrics_retention
      ? unmarshalGetConfigResponseRetention(data.product_metrics_retention)
      : undefined,
  } as GetConfigResponse
}

export const unmarshalGrafana = (data: unknown): Grafana => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Grafana' failed as data isn't a dictionary.`,
    )
  }

  return {
    grafanaUrl: data.grafana_url,
  } as Grafana
}

const unmarshalAlert = (data: unknown): Alert => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Alert' failed as data isn't a dictionary.`,
    )
  }

  return {
    annotations: data.annotations,
    duration: data.duration,
    enabled: data.enabled,
    name: data.name,
    preconfigured: data.preconfigured,
    region: data.region,
    rule: data.rule,
    state: data.state ? data.state : undefined,
  } as Alert
}

export const unmarshalListAlertsResponse = (
  data: unknown,
): ListAlertsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAlertsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    alerts: unmarshalArrayOfObject(data.alerts, unmarshalAlert),
    totalCount: data.total_count,
  } as ListAlertsResponse
}

export const unmarshalListContactPointsResponse = (
  data: unknown,
): ListContactPointsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListContactPointsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    contactPoints: unmarshalArrayOfObject(
      data.contact_points,
      unmarshalContactPoint,
    ),
    hasAdditionalContactPoints: data.has_additional_contact_points,
    hasAdditionalReceivers: data.has_additional_receivers,
    totalCount: data.total_count,
  } as ListContactPointsResponse
}

export const unmarshalListDataSourcesResponse = (
  data: unknown,
): ListDataSourcesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDataSourcesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dataSources: unmarshalArrayOfObject(data.data_sources, unmarshalDataSource),
    totalCount: data.total_count,
  } as ListDataSourcesResponse
}

export const unmarshalListGrafanaProductDashboardsResponse = (
  data: unknown,
): ListGrafanaProductDashboardsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListGrafanaProductDashboardsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dashboards: unmarshalArrayOfObject(
      data.dashboards,
      unmarshalGrafanaProductDashboard,
    ),
    totalCount: data.total_count,
  } as ListGrafanaProductDashboardsResponse
}

export const unmarshalListGrafanaUsersResponse = (
  data: unknown,
): ListGrafanaUsersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListGrafanaUsersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    grafanaUsers: unmarshalArrayOfObject(
      data.grafana_users,
      unmarshalGrafanaUser,
    ),
    totalCount: data.total_count,
  } as ListGrafanaUsersResponse
}

export const unmarshalListPlansResponse = (
  data: unknown,
): ListPlansResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPlansResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    plans: unmarshalArrayOfObject(data.plans, unmarshalPlan),
    totalCount: data.total_count,
  } as ListPlansResponse
}

export const unmarshalListTokensResponse = (
  data: unknown,
): ListTokensResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTokensResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    tokens: unmarshalArrayOfObject(data.tokens, unmarshalToken),
    totalCount: data.total_count,
  } as ListTokensResponse
}

const unmarshalUsage = (data: unknown): Usage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Usage' failed as data isn't a dictionary.`,
    )
  }

  return {
    dataSourceId: data.data_source_id,
    dataSourceOrigin: data.data_source_origin,
    dataSourceType: data.data_source_type,
    interval: data.interval,
    projectId: data.project_id,
    quantityOverInterval: data.quantity_over_interval,
    region: data.region,
    unit: data.unit,
  } as Usage
}

export const unmarshalUsageOverview = (data: unknown): UsageOverview => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UsageOverview' failed as data isn't a dictionary.`,
    )
  }

  return {
    externalLogsUsage: data.external_logs_usage
      ? unmarshalUsage(data.external_logs_usage)
      : undefined,
    externalMetricsUsage: data.external_metrics_usage
      ? unmarshalUsage(data.external_metrics_usage)
      : undefined,
    externalTracesUsage: data.external_traces_usage
      ? unmarshalUsage(data.external_traces_usage)
      : undefined,
    scalewayLogsUsage: data.scaleway_logs_usage
      ? unmarshalUsage(data.scaleway_logs_usage)
      : undefined,
    scalewayMetricsUsage: data.scaleway_metrics_usage
      ? unmarshalUsage(data.scaleway_metrics_usage)
      : undefined,
  } as UsageOverview
}

export const marshalGlobalApiCreateGrafanaUserRequest = (
  request: GlobalApiCreateGrafanaUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  login: request.login,
  project_id: request.projectId ?? defaults.defaultProjectId,
  role: request.role,
})

export const marshalGlobalApiResetGrafanaUserPasswordRequest = (
  request: GlobalApiResetGrafanaUserPasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalGlobalApiSelectPlanRequest = (
  request: GlobalApiSelectPlanRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  plan_name: request.planName,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalGlobalApiSyncGrafanaDataSourcesRequest = (
  request: GlobalApiSyncGrafanaDataSourcesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

const marshalContactPointEmail = (
  request: ContactPointEmail,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  to: request.to,
})

export const marshalRegionalApiCreateContactPointRequest = (
  request: RegionalApiCreateContactPointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
  receive_resolved_notifications: request.receiveResolvedNotifications,
  ...resolveOneOf([
    {
      param: 'email',
      value:
        request.email !== undefined
          ? marshalContactPointEmail(request.email, defaults)
          : undefined,
    },
  ]),
})

export const marshalRegionalApiCreateDataSourceRequest = (
  request: RegionalApiCreateDataSourceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  retention_days: request.retentionDays,
  type: request.type,
})

export const marshalRegionalApiCreateTokenRequest = (
  request: RegionalApiCreateTokenRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  token_scopes:
    request.tokenScopes !== undefined ? request.tokenScopes : undefined,
})

export const marshalRegionalApiDeleteContactPointRequest = (
  request: RegionalApiDeleteContactPointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
  ...resolveOneOf([
    {
      param: 'email',
      value:
        request.email !== undefined
          ? marshalContactPointEmail(request.email, defaults)
          : undefined,
    },
  ]),
})

export const marshalRegionalApiDisableAlertManagerRequest = (
  request: RegionalApiDisableAlertManagerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalRegionalApiDisableManagedAlertsRequest = (
  request: RegionalApiDisableManagedAlertsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalRegionalApiEnableAlertManagerRequest = (
  request: RegionalApiEnableAlertManagerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalRegionalApiEnableManagedAlertsRequest = (
  request: RegionalApiEnableManagedAlertsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalRegionalApiTriggerTestAlertRequest = (
  request: RegionalApiTriggerTestAlertRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalRegionalApiUpdateContactPointRequest = (
  request: RegionalApiUpdateContactPointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
  receive_resolved_notifications: request.receiveResolvedNotifications,
  ...resolveOneOf([
    {
      param: 'email',
      value:
        request.email !== undefined
          ? marshalContactPointEmail(request.email, defaults)
          : undefined,
    },
  ]),
})

export const marshalRegionalApiUpdateDataSourceRequest = (
  request: RegionalApiUpdateDataSourceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  retention_days: request.retentionDays,
})
