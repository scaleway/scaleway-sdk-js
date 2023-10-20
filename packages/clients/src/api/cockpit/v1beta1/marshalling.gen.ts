// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalTimeSeries,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  ActivateCockpitRequest,
  Cockpit,
  CockpitEndpoints,
  CockpitMetrics,
  ContactPoint,
  ContactPointEmail,
  CreateContactPointRequest,
  CreateDatasourceRequest,
  CreateGrafanaUserRequest,
  CreateTokenRequest,
  Datasource,
  DeactivateCockpitRequest,
  DeleteContactPointRequest,
  DeleteGrafanaUserRequest,
  DisableManagedAlertsRequest,
  EnableManagedAlertsRequest,
  GrafanaProductDashboard,
  GrafanaUser,
  ListContactPointsResponse,
  ListDatasourcesResponse,
  ListGrafanaProductDashboardsResponse,
  ListGrafanaUsersResponse,
  ListPlansResponse,
  ListTokensResponse,
  Plan,
  ResetCockpitGrafanaRequest,
  ResetGrafanaUserPasswordRequest,
  SelectPlanRequest,
  SelectPlanResponse,
  Token,
  TokenScopes,
  TriggerTestAlertRequest,
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
  } as ContactPoint
}

export const unmarshalDatasource = (data: unknown): Datasource => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Datasource' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
    projectId: data.project_id,
    type: data.type,
    url: data.url,
  } as Datasource
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
    dashboardName: data.dashboard_name,
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

const unmarshalTokenScopes = (data: unknown): TokenScopes => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TokenScopes' failed as data isn't a dictionary.`,
    )
  }

  return {
    queryLogs: data.query_logs,
    queryMetrics: data.query_metrics,
    queryTraces: data.query_traces,
    setupAlerts: data.setup_alerts,
    setupLogsRules: data.setup_logs_rules,
    setupMetricsRules: data.setup_metrics_rules,
    writeLogs: data.write_logs,
    writeMetrics: data.write_metrics,
    writeTraces: data.write_traces,
  } as TokenScopes
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
    scopes: data.scopes ? unmarshalTokenScopes(data.scopes) : undefined,
    secretKey: data.secret_key,
    updatedAt: unmarshalDate(data.updated_at),
  } as Token
}

const unmarshalCockpitEndpoints = (data: unknown): CockpitEndpoints => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CockpitEndpoints' failed as data isn't a dictionary.`,
    )
  }

  return {
    alertmanagerUrl: data.alertmanager_url,
    grafanaUrl: data.grafana_url,
    logsUrl: data.logs_url,
    metricsUrl: data.metrics_url,
    tracesUrl: data.traces_url,
  } as CockpitEndpoints
}

const unmarshalPlan = (data: unknown): Plan => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Plan' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    logsIngestionPrice: data.logs_ingestion_price,
    name: data.name,
    retentionLogsInterval: data.retention_logs_interval,
    retentionMetricsInterval: data.retention_metrics_interval,
    retentionPrice: data.retention_price,
    sampleIngestionPrice: data.sample_ingestion_price,
  } as Plan
}

export const unmarshalCockpit = (data: unknown): Cockpit => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Cockpit' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    endpoints: data.endpoints
      ? unmarshalCockpitEndpoints(data.endpoints)
      : undefined,
    managedAlertsEnabled: data.managed_alerts_enabled,
    plan: data.plan ? unmarshalPlan(data.plan) : undefined,
    projectId: data.project_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as Cockpit
}

export const unmarshalCockpitMetrics = (data: unknown): CockpitMetrics => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CockpitMetrics' failed as data isn't a dictionary.`,
    )
  }

  return {
    timeseries: unmarshalArrayOfObject(data.timeseries, unmarshalTimeSeries),
  } as CockpitMetrics
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

export const unmarshalListDatasourcesResponse = (
  data: unknown,
): ListDatasourcesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatasourcesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    datasources: unmarshalArrayOfObject(data.datasources, unmarshalDatasource),
    totalCount: data.total_count,
  } as ListDatasourcesResponse
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

export const unmarshalSelectPlanResponse = (
  data: unknown,
): SelectPlanResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SelectPlanResponse' failed as data isn't a dictionary.`,
    )
  }

  return {} as SelectPlanResponse
}

export const marshalActivateCockpitRequest = (
  request: ActivateCockpitRequest,
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

const marshalContactPoint = (
  request: ContactPoint,
  defaults: DefaultValues,
): Record<string, unknown> => ({
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

export const marshalCreateContactPointRequest = (
  request: CreateContactPointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  contact_point:
    request.contactPoint !== undefined
      ? marshalContactPoint(request.contactPoint, defaults)
      : undefined,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalCreateDatasourceRequest = (
  request: CreateDatasourceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  type: request.type,
})

export const marshalCreateGrafanaUserRequest = (
  request: CreateGrafanaUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  login: request.login,
  project_id: request.projectId ?? defaults.defaultProjectId,
  role: request.role,
})

const marshalTokenScopes = (
  request: TokenScopes,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  query_logs: request.queryLogs,
  query_metrics: request.queryMetrics,
  query_traces: request.queryTraces,
  setup_alerts: request.setupAlerts,
  setup_logs_rules: request.setupLogsRules,
  setup_metrics_rules: request.setupMetricsRules,
  write_logs: request.writeLogs,
  write_metrics: request.writeMetrics,
  write_traces: request.writeTraces,
})

export const marshalCreateTokenRequest = (
  request: CreateTokenRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('token'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  scopes:
    request.scopes !== undefined
      ? marshalTokenScopes(request.scopes, defaults)
      : undefined,
})

export const marshalDeactivateCockpitRequest = (
  request: DeactivateCockpitRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalDeleteContactPointRequest = (
  request: DeleteContactPointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  contact_point:
    request.contactPoint !== undefined
      ? marshalContactPoint(request.contactPoint, defaults)
      : undefined,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalDeleteGrafanaUserRequest = (
  request: DeleteGrafanaUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalDisableManagedAlertsRequest = (
  request: DisableManagedAlertsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalEnableManagedAlertsRequest = (
  request: EnableManagedAlertsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalResetCockpitGrafanaRequest = (
  request: ResetCockpitGrafanaRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalResetGrafanaUserPasswordRequest = (
  request: ResetGrafanaUserPasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalSelectPlanRequest = (
  request: SelectPlanRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  plan_id: request.planId,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalTriggerTestAlertRequest = (
  request: TriggerTestAlertRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})
