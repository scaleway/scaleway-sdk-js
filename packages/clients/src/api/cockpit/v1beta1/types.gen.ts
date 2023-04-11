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

export type GrafanaUserRole = 'unknown_role' | 'editor' | 'viewer'

export type ListGrafanaUsersRequestOrderBy = 'login_asc' | 'login_desc'

export type ListPlansRequestOrderBy = 'name_asc' | 'name_desc'

export type ListTokensRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type PlanName = 'unknown_name' | 'free' | 'premium' | 'custom'

/** Cockpit. */
export interface Cockpit {
  /** Project ID. */
  projectId: string
  /** Created at. */
  createdAt?: Date
  /** Updated at. */
  updatedAt?: Date
  /** Endpoints. */
  endpoints?: CockpitEndpoints
  /** Status. */
  status: CockpitStatus
  /** Managed alerts enabled. */
  managedAlertsEnabled: boolean
  /** Pricing plan. */
  plan?: Plan
}

/** Cockpit. endpoints. */
export interface CockpitEndpoints {
  metricsUrl: string
  logsUrl: string
  alertmanagerUrl: string
  grafanaUrl: string
}

/** Cockpit metrics. */
export interface CockpitMetrics {
  /** Timeseries array. */
  timeseries: TimeSeries[]
}

/** Alert contact point. Contact point. */
export interface ContactPoint {
  /**
   * Alert contact point configuration.
   *
   * One-of ('configuration'): at most one of 'email' could be set.
   */
  email?: ContactPointEmail
}

export interface ContactPointEmail {
  to: string
}

/** Grafana user. */
export interface GrafanaUser {
  id: number
  login: string
  role: GrafanaUserRole
  password?: string
}

/** List contact points response. */
export interface ListContactPointsResponse {
  /** Total count of contact points. */
  totalCount: number
  /** Contact points array. */
  contactPoints: ContactPoint[]
  /** Has receivers other than default. */
  hasAdditionalReceivers: boolean
  /** Has unmanaged contact points. */
  hasAdditionalContactPoints: boolean
}

/** List grafana users response. */
export interface ListGrafanaUsersResponse {
  totalCount: number
  grafanaUsers: GrafanaUser[]
}

/** List all pricing plans response. List plans response. */
export interface ListPlansResponse {
  totalCount: number
  plans: Plan[]
}

/** List tokens response. */
export interface ListTokensResponse {
  totalCount: number
  tokens: Token[]
}

/** Plan. */
export interface Plan {
  /** Plan id. */
  id: string
  /** Plan name. */
  name: PlanName
  /** Retention for metrics. */
  retentionMetricsInterval?: string
  /** Retention for logs. */
  retentionLogsInterval?: string
  /** Ingestion price for 1million samples in cents. */
  sampleIngestionPrice: number
  /** Ingestion price in cents for 1 Go of logs. */
  logsIngestionPrice: number
  /** Retention price in euros per month. */
  retentionPrice: number
}

/** Select pricing plan response. Select plan response. */
export interface SelectPlanResponse {}

/** Token. */
export interface Token {
  id: string
  projectId: string
  name: string
  createdAt?: Date
  updatedAt?: Date
  scopes?: TokenScopes
  secretKey?: string
}

/** Token scopes. */
export interface TokenScopes {
  queryMetrics: boolean
  writeMetrics: boolean
  setupMetricsRules: boolean
  queryLogs: boolean
  writeLogs: boolean
  setupLogsRules: boolean
  setupAlerts: boolean
}

export type ActivateCockpitRequest = {
  projectId?: string
}

export type GetCockpitRequest = {
  projectId?: string
}

export type GetCockpitMetricsRequest = {
  /** Project ID. */
  projectId?: string
  /**
   * Start date. Start date, if omited, query will be instant query and End Date
   * will be used as query time.
   */
  startDate?: Date
  /** End date. End date, if omited set to now. */
  endDate?: Date
  /** Metric name. */
  metricName?: string
}

export type DeactivateCockpitRequest = {
  projectId?: string
}

export type ResetCockpitGrafanaRequest = {
  projectId?: string
}

export type CreateTokenRequest = {
  projectId?: string
  name?: string
  scopes?: TokenScopes
}

export type ListTokensRequest = {
  page?: number
  pageSize?: number
  orderBy?: ListTokensRequestOrderBy
  projectId?: string
}

export type GetTokenRequest = {
  tokenId: string
}

export type DeleteTokenRequest = {
  tokenId: string
}

export type CreateContactPointRequest = {
  /** Project ID. */
  projectId?: string
  /** Contact point to create. */
  contactPoint?: ContactPoint
}

export type ListContactPointsRequest = {
  /** Page number. */
  page?: number
  /** Page size. */
  pageSize?: number
  /** Project ID. */
  projectId?: string
}

export type DeleteContactPointRequest = {
  projectId?: string
  /** Contact point to delete. */
  contactPoint?: ContactPoint
}

export type EnableManagedAlertsRequest = {
  projectId?: string
}

export type DisableManagedAlertsRequest = {
  projectId?: string
}

export type TriggerTestAlertRequest = {
  projectId?: string
}

export type CreateGrafanaUserRequest = {
  projectId?: string
  login: string
  role?: GrafanaUserRole
}

export type ListGrafanaUsersRequest = {
  page?: number
  pageSize?: number
  orderBy?: ListGrafanaUsersRequestOrderBy
  projectId?: string
}

export type DeleteGrafanaUserRequest = {
  grafanaUserId: number
  projectId?: string
}

export type ResetGrafanaUserPasswordRequest = {
  grafanaUserId: number
  projectId?: string
}

export type ListPlansRequest = {
  page?: number
  pageSize?: number
  orderBy?: ListPlansRequestOrderBy
}

export type SelectPlanRequest = {
  projectId?: string
  planId: string
}
