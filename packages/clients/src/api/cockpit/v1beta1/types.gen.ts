// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { TimeSeries } from '../../../bridge'

export type CockpitStatus =
  | 'unknown_status'
  | 'creating'
  | 'ready'
  | 'deleting'
  | 'updating'
  | 'error'

export type DatasourceType =
  | 'unknown_datasource_type'
  | 'metrics'
  | 'logs'
  | 'traces'
  | 'alerts'

export type GrafanaUserRole = 'unknown_role' | 'editor' | 'viewer'

export type ListGrafanaUsersRequestOrderBy = 'login_asc' | 'login_desc'

export type ListPlansRequestOrderBy = 'name_asc' | 'name_desc'

export type ListTokensRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type PlanName = 'unknown_name' | 'free' | 'premium' | 'custom'

export interface ContactPointEmail {
  to: string
}

export interface TokenScopes {
  /** Permission to fetch metrics. */
  queryMetrics: boolean
  /** Permission to write metrics. */
  writeMetrics: boolean
  /** Permission to setup metrics rules. */
  setupMetricsRules: boolean
  /** Permission to fetch logs. */
  queryLogs: boolean
  /** Permission to write logs. */
  writeLogs: boolean
  /** Permission to set up logs rules. */
  setupLogsRules: boolean
  /** Permission to set up alerts. */
  setupAlerts: boolean
  /** Permission to fetch traces. */
  queryTraces: boolean
  /** Permission to write traces. */
  writeTraces: boolean
}

export interface CockpitEndpoints {
  /** URL for metrics. */
  metricsUrl: string
  /** URL for logs. */
  logsUrl: string
  /** URL for the alert manager. */
  alertmanagerUrl: string
  /** URL for the Grafana dashboard. */
  grafanaUrl: string
}

/** Pricing plan. */
export interface Plan {
  /** ID of a given pricing plan. */
  id: string
  /** Name of a given pricing plan. */
  name: PlanName
  /** Retention for metrics. */
  retentionMetricsInterval?: string
  /** Retention for logs. */
  retentionLogsInterval?: string
  /** Ingestion price for 1 million samples in cents. */
  sampleIngestionPrice: number
  /** Ingestion price for 1 GB of logs in cents. */
  logsIngestionPrice: number
  /** Retention price in euros per month. */
  retentionPrice: number
}

/** Contact point. */
export interface ContactPoint {
  /**
   * Contact point configuration. One-of ('configuration'): at most one of
   * 'email' could be set.
   */
  email?: ContactPointEmail
}

/** Grafana user. */
export interface GrafanaUser {
  /** ID of the Grafana user. */
  id: number
  /** Username of the Grafana user. */
  login: string
  /** Role assigned to the Grafana user. */
  role: GrafanaUserRole
  /** The Grafana user's password. */
  password?: string
}

export interface Token {
  /** ID of the token. */
  id: string
  /** ID of the Project. */
  projectId: string
  /** Name of the token. */
  name: string
  /** Date and time of the token's creation. */
  createdAt?: Date
  /** Date and time of the token's last update. */
  updatedAt?: Date
  /** Token's permissions. */
  scopes: TokenScopes
  /** Token's secret key. */
  secretKey?: string
}

export type ActivateCockpitRequest = {
  /** ID of the Project the Cockpit belongs to. */
  projectId?: string
}

/** Cockpit. */
export interface Cockpit {
  /** ID of the Project the Cockpit belongs to. */
  projectId: string
  /** Date and time of the Cockpit's creation. */
  createdAt?: Date
  /** Date and time of the Cockpit's last update. */
  updatedAt?: Date
  /** Endpoints of the Cockpit. */
  endpoints: CockpitEndpoints
  /** Status of the Cockpit. */
  status: CockpitStatus
  /** Specifies whether managed alerts are enabled or disabled. */
  managedAlertsEnabled: boolean
  /** Pricing plan information. */
  plan: Plan
}

/** Metrics for a given Cockpit. */
export interface CockpitMetrics {
  /** Time series array. */
  timeseries: TimeSeries[]
}

/** Request to create a contact point. */
export type CreateContactPointRequest = {
  /** ID of the Project in which to create the contact point. */
  projectId?: string
  /** Contact point to create. */
  contactPoint: ContactPoint
}

/** Request to create a datasource. */
export type CreateDatasourceRequest = {
  /** ID of the Project the Cockpit belongs to. */
  projectId?: string
  /** Datasource name. */
  name: string
  /** Datasource type. */
  type?: DatasourceType
}

/** Request to create a Grafana user. */
export type CreateGrafanaUserRequest = {
  /** ID of the Project. */
  projectId?: string
  /** Username of the Grafana user. */
  login: string
  /** Role assigned to the Grafana user. */
  role?: GrafanaUserRole
}

export type CreateTokenRequest = {
  /** ID of the Project. */
  projectId?: string
  /** Name of the token. */
  name?: string
  /** Token's permissions. */
  scopes: TokenScopes
}

/** Datasource. */
export interface Datasource {
  /** ID of the datasource. */
  id: string
  /** ID of the Project the Cockpit belongs to. */
  projectId: string
  /** Datasource name. */
  name: string
  /** Datasource URL. */
  url: string
  /** Datasource type. */
  type: DatasourceType
}

export type DeactivateCockpitRequest = {
  /** ID of the Project the Cockpit belongs to. */
  projectId?: string
}

/** Request to delete a contact point. */
export type DeleteContactPointRequest = {
  /** ID of the Project. */
  projectId?: string
  /** Contact point to delete. */
  contactPoint: ContactPoint
}

/** Request to delete a Grafana user. */
export type DeleteGrafanaUserRequest = {
  /** ID of the Grafana user. */
  grafanaUserId: number
  /** ID of the Project. */
  projectId?: string
}

export type DeleteTokenRequest = {
  /** ID of the token. */
  tokenId: string
}

/** Request to disable the sending of managed alerts. */
export type DisableManagedAlertsRequest = {
  /** ID of the Project. */
  projectId?: string
}

/** Request to enable the sending of managed alerts. */
export type EnableManagedAlertsRequest = {
  /** ID of the Project. */
  projectId?: string
}

/** Request to get a given Cockpit's metrics. */
export type GetCockpitMetricsRequest = {
  /** ID of the Project the Cockpit belongs to. */
  projectId?: string
  /** Desired time range's start date for the metrics. */
  startDate?: Date
  /** Desired time range's end date for the metrics. */
  endDate?: Date
  /** Name of the metric requested. */
  metricName?: string
}

export type GetCockpitRequest = {
  /** ID of the Project the Cockpit belongs to. */
  projectId?: string
}

export type GetTokenRequest = {
  /** ID of the token. */
  tokenId: string
}

/** Request to list all contact points. */
export type ListContactPointsRequest = {
  /** Page number. */
  page?: number
  /** Page size. */
  pageSize?: number
  /** ID of the Project from which to list the contact points. */
  projectId?: string
}

/** Response returned when listing contact points. */
export interface ListContactPointsResponse {
  /** Count of all contact points created. */
  totalCount: number
  /** Array of contact points. */
  contactPoints: ContactPoint[]
  /**
   * Specifies whether the contact point has other receivers than the default
   * receiver.
   */
  hasAdditionalReceivers: boolean
  /** Specifies whether there are unmanaged contact points. */
  hasAdditionalContactPoints: boolean
}

/** Request to list all Grafana users. */
export type ListGrafanaUsersRequest = {
  /** Page number. */
  page?: number
  /** Page size. */
  pageSize?: number
  orderBy?: ListGrafanaUsersRequestOrderBy
  /** ID of the Project. */
  projectId?: string
}

/** Response returned when listing Grafana users. */
export interface ListGrafanaUsersResponse {
  /** Count of all Grafana users. */
  totalCount: number
  /** Information on all Grafana users. */
  grafanaUsers: GrafanaUser[]
}

/** Request to list all pricing plans. */
export type ListPlansRequest = {
  /** Page number. */
  page?: number
  /** Page size. */
  pageSize?: number
  orderBy?: ListPlansRequestOrderBy
}

/** Response returned when listing all pricing plans. */
export interface ListPlansResponse {
  /** Count of all pricing plans. */
  totalCount: number
  /** Information on plans. */
  plans: Plan[]
}

export type ListTokensRequest = {
  /** Page number. */
  page?: number
  /** Page size. */
  pageSize?: number
  orderBy?: ListTokensRequestOrderBy
  /** ID of the Project. */
  projectId?: string
}

export interface ListTokensResponse {
  /** Count of all tokens created. */
  totalCount: number
  /** List of all tokens created. */
  tokens: Token[]
}

export type ResetCockpitGrafanaRequest = {
  /** ID of the Project the Cockpit belongs to. */
  projectId?: string
}

/** Request to reset a Grafana user's password. */
export type ResetGrafanaUserPasswordRequest = {
  /** ID of the Grafana user. */
  grafanaUserId: number
  /** ID of the Project. */
  projectId?: string
}

/** Request to select a specific pricing plan. */
export type SelectPlanRequest = {
  /** ID of the Project. */
  projectId?: string
  /** ID of the pricing plan. */
  planId: string
}

/** Response returned when selecting a pricing plan. */
export interface SelectPlanResponse {}

export type TriggerTestAlertRequest = {
  projectId?: string
}
