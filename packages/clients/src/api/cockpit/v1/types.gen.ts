// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type DataSourceOrigin = 'unknown_origin' | 'scaleway' | 'external'

export type DataSourceType = 'unknown_type' | 'metrics' | 'logs' | 'traces'

export type GrafanaUserRole = 'unknown_role' | 'editor' | 'viewer'

export type ListDataSourcesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'type_asc'
  | 'type_desc'

export type ListGrafanaUsersRequestOrderBy = 'login_asc' | 'login_desc'

export type ListManagedAlertsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'type_asc'
  | 'type_desc'

export type ListPlansRequestOrderBy = 'name_asc' | 'name_desc'

export type ListTokensRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type PlanName = 'unknown_name' | 'free' | 'premium' | 'custom'

export type TokenScope =
  | 'unknown_scope'
  | 'read_only_metrics'
  | 'write_only_metrics'
  | 'full_access_metrics_rules'
  | 'read_only_logs'
  | 'write_only_logs'
  | 'full_access_logs_rules'
  | 'full_access_alert_manager'
  | 'read_only_traces'
  | 'write_only_traces'

export type UsageUnit = 'unknown_unit' | 'bytes' | 'samples'

export interface ContactPointEmail {
  to: string
}

export interface GetConfigResponseRetention {
  minDays: number
  maxDays: number
  defaultDays: number
}

/** Contact point. */
export interface ContactPoint {
  /**
   * Email address to send alerts to.
   *
   * One-of ('configuration'): at most one of 'email' could be set.
   */
  email?: ContactPointEmail
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region: Region
}

/** Data source. */
export interface DataSource {
  /** ID of the data source. */
  id: string
  /** ID of the Project the data source belongs to. */
  projectId: string
  /** Data source name. */
  name: string
  /** Data source URL. */
  url: string
  /** Data source type. */
  type: DataSourceType
  /** Data source origin. */
  origin: DataSourceOrigin
  /** Date the data source was created. */
  createdAt?: Date
  /** Date the data source was last updated. */
  updatedAt?: Date
  /** Indicates whether the data source is synchronized with Grafana. */
  synchronizedWithGrafana: boolean
  /** BETA - Duration for which the data will be retained in the data source. */
  retentionDays: number
  /** Region of the data source. */
  region: Region
}

/** Grafana dashboard. */
export interface GrafanaProductDashboard {
  /** Dashboard name. */
  name: string
  /** Dashboard title. */
  title: string
  /** Dashboard URL. */
  url: string
  /** Dashboard tags. */
  tags: string[]
  /** Dashboard variables. */
  variables: string[]
}

/** Grafana user. */
export interface GrafanaUser {
  /** ID of the Grafana user. */
  id: number
  /** Username of the Grafana user. */
  login: string
  /** Role assigned to the Grafana user. */
  role: GrafanaUserRole
  /** Grafana user's password. */
  password?: string
}

export interface Alert {
  productFamily: string
  product: string
  name: string
  rule: string
  description: string
}

/** Type of pricing plan. */
export interface Plan {
  /** Name of a given pricing plan. */
  name: PlanName
  /** Interval of time during which Scaleway's Cockpit keeps your metrics. */
  retentionMetricsInterval?: string
  /** Interval of time during which Scaleway's Cockpit keeps your logs. */
  retentionLogsInterval?: string
  /** Interval of time during which Scaleway's Cockpit keeps your traces. */
  retentionTracesInterval?: string
  /** Ingestion price in cents for 1 million samples. */
  sampleIngestionPrice: number
  /** Ingestion price in cents for 1 GB of logs. */
  logsIngestionPrice: number
  /** Ingestion price in cents for 1 GB of traces. */
  tracesIngestionPrice: number
  /** Retention price in euros per month. */
  monthlyPrice: number
}

/** Token. */
export interface Token {
  /** ID of the token. */
  id: string
  /** ID of the Project the token belongs to. */
  projectId: string
  /** Name of the token. */
  name: string
  /** Token creation date. */
  createdAt?: Date
  /** Token last modification date. */
  updatedAt?: Date
  /** Token permission scopes. */
  scopes: TokenScope[]
  /** Token secret key. */
  secretKey?: string
  /** Regions where the token is located. */
  region: Region
}

/** Data source usage. */
export interface Usage {
  /** ID of the data source. */
  dataSourceId?: string
  /** ID of the Project the data source belongs to. */
  projectId: string
  /** Origin of the data source. */
  dataSourceOrigin: DataSourceOrigin
  /** Type of the data source. */
  dataSourceType: DataSourceType
  /** Unit of the data source usage. */
  unit: UsageUnit
  /** Interval for the data source usage. */
  interval?: string
  /** Data source usage for the given interval. */
  quantityOverInterval: number
  /** Region of the data source usage. */
  region: Region
}

/** Alert manager information. */
export interface AlertManager {
  /** Alert manager URL. */
  alertManagerUrl?: string
  /** The Alert manager is enabled. */
  alertManagerEnabled: boolean
  /** Managed alerts are enabled. */
  managedAlertsEnabled: boolean
  /** Regions where the Alert manager is enabled. */
  region: Region
}

/** Cockpit configuration. */
export interface GetConfigResponse {
  /** Custom metrics retention configuration. */
  customMetricsRetention?: GetConfigResponseRetention
  /** Custom logs retention configuration. */
  customLogsRetention?: GetConfigResponseRetention
  /** Custom traces retention configuration. */
  customTracesRetention?: GetConfigResponseRetention
  /** Scaleway metrics retention configuration. */
  productMetricsRetention?: GetConfigResponseRetention
  /** Scaleway logs retention configuration. */
  productLogsRetention?: GetConfigResponseRetention
}

/** Create a Grafana user. */
export type GlobalApiCreateGrafanaUserRequest = {
  /** ID of the Project in which to create the Grafana user. */
  projectId?: string
  /**
   * Username of the Grafana user. Note that the `admin` username is not
   * available for creation.
   */
  login: string
  /** Role assigned to the Grafana user. */
  role?: GrafanaUserRole
}

/** Delete a Grafana user. */
export type GlobalApiDeleteGrafanaUserRequest = {
  /** ID of the Grafana user. */
  grafanaUserId: number
  /** ID of the Project to target. */
  projectId?: string
}

/** Retrieve a pricing plan for the given Project. */
export type GlobalApiGetCurrentPlanRequest = {
  /** ID of the Project. */
  projectId?: string
}

/** Retrieve a specific dashboard. */
export type GlobalApiGetGrafanaProductDashboardRequest = {
  /** Name of the dashboard. */
  dashboardName: string
  /** ID of the Project the dashboard belongs to. */
  projectId?: string
}

/** Request a Grafana. */
export type GlobalApiGetGrafanaRequest = {
  /** ID of the Project. */
  projectId?: string
}

/** Retrieve a list of available product dashboards. */
export type GlobalApiListGrafanaProductDashboardsRequest = {
  /** ID of the Project to target. */
  projectId?: string
  /** Page number. */
  page?: number
  /** Page size. */
  pageSize?: number
  /** Tags to filter for. */
  tags?: string[]
}

/** List all Grafana users. */
export type GlobalApiListGrafanaUsersRequest = {
  /** Page number. */
  page?: number
  /** Page size. */
  pageSize?: number
  /** Order of the Grafana users. */
  orderBy?: ListGrafanaUsersRequestOrderBy
  /** ID of the Project to target. */
  projectId?: string
}

/** Retrieve a list of available pricing plans. */
export type GlobalApiListPlansRequest = {
  /** Page number. */
  page?: number
  /** Page size. */
  pageSize?: number
  orderBy?: ListPlansRequestOrderBy
}

/** Reset a Grafana user's password. */
export type GlobalApiResetGrafanaUserPasswordRequest = {
  /** ID of the Grafana user. */
  grafanaUserId: number
  /** ID of the Project to target. */
  projectId?: string
}

/** Select a specific pricing plan. */
export type GlobalApiSelectPlanRequest = {
  /** ID of the Project. */
  projectId?: string
  /** Name of the pricing plan. */
  planName?: PlanName
}

/**
 * Trigger the synchronization of all data sources created in the relevant
 * regions.
 */
export type GlobalApiSyncGrafanaDataSourcesRequest = {
  /** ID of the Project to target. */
  projectId?: string
}

/** Grafana user. */
export interface Grafana {
  /** URL to access your Cockpit's Grafana. */
  grafanaUrl: string
}

/** Response returned when listing contact points. */
export interface ListContactPointsResponse {
  /** Total count of contact points associated with the default receiver. */
  totalCount: number
  /** List of contact points associated with the default receiver. */
  contactPoints: ContactPoint[]
  /**
   * Indicates whether the Alert manager has other receivers than the default
   * one.
   */
  hasAdditionalReceivers: boolean
  /**
   * Indicates whether there are unmanaged contact points on the default
   * receiver.
   */
  hasAdditionalContactPoints: boolean
}

/** Response returned when listing data sources. */
export interface ListDataSourcesResponse {
  /** Total count of data sources matching the request. */
  totalCount: number
  /** Data sources matching the request within the pagination. */
  dataSources: DataSource[]
}

/** Output returned when listing dashboards. */
export interface ListGrafanaProductDashboardsResponse {
  /** Total count of Grafana dashboards. */
  totalCount: number
  /** Grafana dashboards information. */
  dashboards: GrafanaProductDashboard[]
}

/** Ouptut returned when listing Grafana users. */
export interface ListGrafanaUsersResponse {
  /** Total count of Grafana users. */
  totalCount: number
  /** Grafana users information. */
  grafanaUsers: GrafanaUser[]
}

/** Response returned when listing data sources. */
export interface ListManagedAlertsResponse {
  /** Total count of data sources matching the request. */
  totalCount: number
  /** Alerts matching the request within the pagination. */
  alerts: Alert[]
}

/** Output returned when listing pricing plans. */
export interface ListPlansResponse {
  /** Total count of available pricing plans. */
  totalCount: number
  /** Plan types information. */
  plans: Plan[]
}

/** Response returned when listing tokens. */
export interface ListTokensResponse {
  /** Total count of tokens matching the request. */
  totalCount: number
  /** Tokens matching the request within the pagination. */
  tokens: Token[]
}

/** Create a contact point. */
export type RegionalApiCreateContactPointRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project to create the contact point in. */
  projectId?: string
  /**
   * Email address of the contact point to create.
   *
   * One-of ('configuration'): at most one of 'email' could be set.
   */
  email?: ContactPointEmail
}

/** Create a data source. */
export type RegionalApiCreateDataSourceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project the data source belongs to. */
  projectId?: string
  /** Data source name. */
  name: string
  /** Data source type. */
  type?: DataSourceType
  /** Default values are 30 days for metrics, 7 days for logs and traces. */
  retentionDays?: number
}

/** Create a token. */
export type RegionalApiCreateTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project the token belongs to. */
  projectId?: string
  /** Name of the token. */
  name: string
  /** Token permission scopes. */
  tokenScopes?: TokenScope[]
}

/** Delete a contact point. */
export type RegionalApiDeleteContactPointRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project containing the contact point to delete. */
  projectId?: string
  /**
   * Email address of the contact point to delete.
   *
   * One-of ('configuration'): at most one of 'email' could be set.
   */
  email?: ContactPointEmail
}

/** Delete a data source. */
export type RegionalApiDeleteDataSourceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the data source to delete. */
  dataSourceId: string
}

/** Delete a token. */
export type RegionalApiDeleteTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the token to delete. */
  tokenId: string
}

/** Disable the Alert manager. */
export type RegionalApiDisableAlertManagerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project to disable the Alert manager in. */
  projectId?: string
}

/** Disable the sending of managed alerts. */
export type RegionalApiDisableManagedAlertsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project. */
  projectId?: string
}

/** Enable the Alert manager. */
export type RegionalApiEnableAlertManagerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project to enable the Alert manager in. */
  projectId?: string
}

/** Enable the sending of managed alerts. */
export type RegionalApiEnableManagedAlertsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project. */
  projectId?: string
}

/** Get the Alert manager. */
export type RegionalApiGetAlertManagerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Project ID of the requested Alert manager. */
  projectId?: string
}

/** Get Cockpit configuration. */
export type RegionalApiGetConfigRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
}

/** Retrieve a data source. */
export type RegionalApiGetDataSourceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the relevant data source. */
  dataSourceId: string
}

/** Get a token. */
export type RegionalApiGetTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Token ID. */
  tokenId: string
}

export type RegionalApiGetUsageOverviewRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  projectId?: string
  interval?: string
}

/** List contact points. */
export type RegionalApiListContactPointsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number to return, from the paginated results. */
  page?: number
  /** Total count of contact points to return per page. */
  pageSize?: number
  /** ID of the Project containing the contact points to list. */
  projectId?: string
}

/** List data sources. */
export type RegionalApiListDataSourcesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of data sources to return per page. */
  pageSize?: number
  /** Sort order for data sources in the response. */
  orderBy?: ListDataSourcesRequestOrderBy
  /**
   * Project ID to filter for, only data sources from this Project will be
   * returned.
   */
  projectId?: string
  /**
   * Origin to filter for, only data sources with matching origin will be
   * returned.
   */
  origin?: DataSourceOrigin
  /**
   * Types to filter for, only data sources with matching types will be
   * returned.
   */
  types?: DataSourceType[]
}

/** Enable the sending of managed alerts. */
export type RegionalApiListManagedAlertsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of data sources to return per page. */
  pageSize?: number
  /** Sort order for data sources in the response. */
  orderBy?: ListManagedAlertsRequestOrderBy
  /**
   * Project ID to filter for, only data sources from this Project will be
   * returned.
   */
  projectId?: string
}

/** List tokens. */
export type RegionalApiListTokensRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of tokens to return per page. */
  pageSize?: number
  /** Order in which to return results. */
  orderBy?: ListTokensRequestOrderBy
  /** ID of the Project the tokens belong to. */
  projectId?: string
  /** Token scopes to filter for. */
  tokenScopes?: TokenScope[]
}

/** Request to trigger a test alert. */
export type RegionalApiTriggerTestAlertRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project. */
  projectId?: string
}

/** Update a data source name. */
export type RegionalApiUpdateDataSourceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the data source to update. */
  dataSourceId: string
  /** Updated name of the data source. */
  name?: string
  /** BETA - Duration for which the data will be retained in the data source. */
  retentionDays?: number
}

export interface UsageOverview {
  scalewayMetricsUsage?: Usage
  scalewayLogsUsage?: Usage
  externalMetricsUsage?: Usage
  externalLogsUsage?: Usage
  externalTracesUsage?: Usage
}
