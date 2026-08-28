// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DeviceMessageFiltersRulePolicy,
  DeviceStatus,
  HubProductPlan,
  HubStatus,
  ListDevicesRequestOrderBy,
  ListHubsRequestOrderBy,
  ListNetworksRequestOrderBy,
  ListRoutesRequestOrderBy,
  NetworkNetworkType,
  RouteDatabaseConfigEngine,
  RouteRestConfigHttpVerb,
  RouteRouteType,
  RouteS3ConfigS3Strategy,
} from './types.gen.js'


/** Lists all values of the enum {@link DeviceMessageFiltersRulePolicy}. */
export const DEVICE_MESSAGE_FILTERS_RULE_POLICIES: DeviceMessageFiltersRulePolicy[] = [
  'unknown',
  'accept',
  'reject',
]

/** Lists all values of the enum {@link DeviceStatus}. */
export const DEVICE_STATUSES: DeviceStatus[] = [
  'unknown',
  'error',
  'enabled',
  'disabled',
]

/** Lists all values of the enum {@link HubProductPlan}. */
export const HUB_PRODUCT_PLANS: HubProductPlan[] = [
  'plan_unknown',
  'plan_shared',
  'plan_dedicated',
  'plan_ha',
]

/** Lists all values of the enum {@link HubStatus}. */
export const HUB_STATUSES: HubStatus[] = [
  'unknown',
  'error',
  'enabling',
  'ready',
  'disabling',
  'disabled',
]

/** Lists all values of the enum {@link ListDevicesRequestOrderBy}. */
export const LIST_DEVICES_REQUEST_ORDER_BIES: ListDevicesRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
  'hub_id_asc',
  'hub_id_desc',
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
  'allow_insecure_asc',
  'allow_insecure_desc',
]

/** Lists all values of the enum {@link ListHubsRequestOrderBy}. */
export const LIST_HUBS_REQUEST_ORDER_BIES: ListHubsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
  'product_plan_asc',
  'product_plan_desc',
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListNetworksRequestOrderBy}. */
export const LIST_NETWORKS_REQUEST_ORDER_BIES: ListNetworksRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'type_asc',
  'type_desc',
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRoutesRequestOrderBy}. */
export const LIST_ROUTES_REQUEST_ORDER_BIES: ListRoutesRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'hub_id_asc',
  'hub_id_desc',
  'type_asc',
  'type_desc',
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link NetworkNetworkType}. */
export const NETWORK_NETWORK_TYPES: NetworkNetworkType[] = [
  'unknown',
  'sigfox',
  'rest',
]

/** Lists all values of the enum {@link RouteDatabaseConfigEngine}. */
export const ROUTE_DATABASE_CONFIG_ENGINES: RouteDatabaseConfigEngine[] = [
  'unknown',
  'postgresql',
  'mysql',
]

/** Lists all values of the enum {@link RouteRestConfigHttpVerb}. */
export const ROUTE_REST_CONFIG_HTTP_VERBS: RouteRestConfigHttpVerb[] = [
  'unknown',
  'get',
  'post',
  'put',
  'patch',
  'delete',
]

/** Lists all values of the enum {@link RouteRouteType}. */
export const ROUTE_ROUTE_TYPES: RouteRouteType[] = [
  'unknown',
  's3',
  'database',
  'rest',
]

/** Lists all values of the enum {@link RouteS3ConfigS3Strategy}. */
export const ROUTE_S3_CONFIG_S3_STRATEGIES: RouteS3ConfigS3Strategy[] = [
  'unknown',
  'per_topic',
  'per_message',
]

