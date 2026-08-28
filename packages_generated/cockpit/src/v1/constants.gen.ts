// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  AlertState,
  AlertStatus,
  DataSourceOrigin,
  DataSourceType,
  ExporterStatus,
  GrafanaUserRole,
  ListDataSourcesRequestOrderBy,
  ListExportersRequestOrderBy,
  ListGrafanaUsersRequestOrderBy,
  ListPlansRequestOrderBy,
  ListProductsRequestOrderBy,
  ListTokensRequestOrderBy,
  PlanName,
  TokenScope,
  UsageUnit,
} from './types.gen.js'


/** Lists all values of the enum {@link AlertState}. */
export const ALERT_STATES: AlertState[] = [
  'unknown_state',
  'inactive',
  'pending',
  'firing',
]

/** Lists all values of the enum {@link AlertStatus}. */
export const ALERT_STATUSES: AlertStatus[] = [
  'unknown_status',
  'enabled',
  'disabled',
  'enabling',
  'disabling',
]

/** Lists all values of the enum {@link DataSourceOrigin}. */
export const DATA_SOURCE_ORIGINS: DataSourceOrigin[] = [
  'unknown_origin',
  'scaleway',
  'external',
  'custom',
]

/** Lists all values of the enum {@link DataSourceType}. */
export const DATA_SOURCE_TYPES: DataSourceType[] = [
  'unknown_type',
  'metrics',
  'logs',
  'traces',
]

/** Lists all values of the enum {@link ExporterStatus}. */
export const EXPORTER_STATUSES: ExporterStatus[] = [
  'unknown_status',
  'creating',
  'ready',
  'error',
  'idle',
]

/** Lists all values of the enum {@link GrafanaUserRole}. */
export const GRAFANA_USER_ROLES: GrafanaUserRole[] = [
  'unknown_role',
  'editor',
  'viewer',
]

/** Lists all values of the enum {@link ListDataSourcesRequestOrderBy}. */
export const LIST_DATA_SOURCES_REQUEST_ORDER_BIES: ListDataSourcesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'type_asc',
  'type_desc',
]

/** Lists all values of the enum {@link ListExportersRequestOrderBy}. */
export const LIST_EXPORTERS_REQUEST_ORDER_BIES: ListExportersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListGrafanaUsersRequestOrderBy}. */
export const LIST_GRAFANA_USERS_REQUEST_ORDER_BIES: ListGrafanaUsersRequestOrderBy[] = [
  'login_asc',
  'login_desc',
]

/** Lists all values of the enum {@link ListPlansRequestOrderBy}. */
export const LIST_PLANS_REQUEST_ORDER_BIES: ListPlansRequestOrderBy[] = [
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListProductsRequestOrderBy}. */
export const LIST_PRODUCTS_REQUEST_ORDER_BIES: ListProductsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'display_name_asc',
  'display_name_desc',
  'family_name_asc',
  'family_name_desc',
]

/** Lists all values of the enum {@link ListTokensRequestOrderBy}. */
export const LIST_TOKENS_REQUEST_ORDER_BIES: ListTokensRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link PlanName}. */
export const PLAN_NAMES: PlanName[] = [
  'unknown_name',
  'free',
  'premium',
  'custom',
]

/** Lists all values of the enum {@link TokenScope}. */
export const TOKEN_SCOPES: TokenScope[] = [
  'unknown_scope',
  'read_only_metrics',
  'write_only_metrics',
  'full_access_metrics_rules',
  'read_only_logs',
  'write_only_logs',
  'full_access_logs_rules',
  'full_access_alert_manager',
  'read_only_traces',
  'write_only_traces',
]

/** Lists all values of the enum {@link UsageUnit}. */
export const USAGE_UNITS: UsageUnit[] = [
  'unknown_unit',
  'bytes',
  'samples',
]

