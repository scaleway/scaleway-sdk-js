// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  AclActionRedirectRedirectType,
  AclActionType,
  AclHttpFilter,
  BackendServerStatsHealthCheckStatus,
  BackendServerStatsServerState,
  CertificateStatus,
  CertificateType,
  ForwardPortAlgorithm,
  InstanceStatus,
  LbStatus,
  LbTypeStock,
  ListAclRequestOrderBy,
  ListBackendsRequestOrderBy,
  ListCertificatesRequestOrderBy,
  ListFrontendsRequestOrderBy,
  ListIpsRequestIpType,
  ListLbsRequestOrderBy,
  ListPrivateNetworksRequestOrderBy,
  ListRoutesRequestOrderBy,
  ListSubscriberRequestOrderBy,
  OnMarkedDownAction,
  PrivateNetworkStatus,
  Protocol,
  ProxyProtocol,
  SSLCompatibilityLevel,
  StickySessionsType,
} from './types.gen.js'


/** Lists all values of the enum {@link AclActionRedirectRedirectType}. */
export const ACL_ACTION_REDIRECT_REDIRECT_TYPES: AclActionRedirectRedirectType[] = [
  'location',
  'scheme',
]

/** Lists all values of the enum {@link AclActionType}. */
export const ACL_ACTION_TYPES: AclActionType[] = [
  'allow',
  'deny',
  'redirect',
]

/** Lists all values of the enum {@link AclHttpFilter}. */
export const ACL_HTTP_FILTERS: AclHttpFilter[] = [
  'acl_http_filter_none',
  'path_begin',
  'path_end',
  'regex',
  'http_header_match',
]

/** Lists all values of the enum {@link BackendServerStatsHealthCheckStatus}. */
export const BACKEND_SERVER_STATS_HEALTH_CHECK_STATUSES: BackendServerStatsHealthCheckStatus[] = [
  'unknown',
  'neutral',
  'failed',
  'passed',
  'condpass',
]

/** Lists all values of the enum {@link BackendServerStatsServerState}. */
export const BACKEND_SERVER_STATS_SERVER_STATES: BackendServerStatsServerState[] = [
  'stopped',
  'starting',
  'running',
  'stopping',
]

/** Lists all values of the enum {@link CertificateStatus}. */
export const CERTIFICATE_STATUSES: CertificateStatus[] = [
  'pending',
  'ready',
  'error',
]

/** Lists all values of the enum {@link CertificateType}. */
export const CERTIFICATE_TYPES: CertificateType[] = [
  'letsencryt',
  'custom',
  'letsencrypt',
]

/** Lists all values of the enum {@link ForwardPortAlgorithm}. */
export const FORWARD_PORT_ALGORITHMS: ForwardPortAlgorithm[] = [
  'roundrobin',
  'leastconn',
  'first',
]

/** Lists all values of the enum {@link InstanceStatus}. */
export const INSTANCE_STATUSES: InstanceStatus[] = [
  'unknown',
  'ready',
  'pending',
  'stopped',
  'error',
  'locked',
  'migrating',
]

/** Lists all values of the enum {@link LbStatus}. */
export const LB_STATUSES: LbStatus[] = [
  'unknown',
  'ready',
  'pending',
  'stopped',
  'error',
  'locked',
  'migrating',
  'to_create',
  'creating',
  'to_delete',
  'deleting',
]

/** Lists all values of the enum {@link LbTypeStock}. */
export const LB_TYPE_STOCKS: LbTypeStock[] = [
  'unknown',
  'low_stock',
  'out_of_stock',
  'available',
]

/** Lists all values of the enum {@link ListAclRequestOrderBy}. */
export const LIST_ACL_REQUEST_ORDER_BIES: ListAclRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListBackendsRequestOrderBy}. */
export const LIST_BACKENDS_REQUEST_ORDER_BIES: ListBackendsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListCertificatesRequestOrderBy}. */
export const LIST_CERTIFICATES_REQUEST_ORDER_BIES: ListCertificatesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListFrontendsRequestOrderBy}. */
export const LIST_FRONTENDS_REQUEST_ORDER_BIES: ListFrontendsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListIpsRequestIpType}. */
export const LIST_IPS_REQUEST_IP_TYPES: ListIpsRequestIpType[] = [
  'all',
  'ipv4',
  'ipv6',
]

/** Lists all values of the enum {@link ListLbsRequestOrderBy}. */
export const LIST_LBS_REQUEST_ORDER_BIES: ListLbsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListPrivateNetworksRequestOrderBy}. */
export const LIST_PRIVATE_NETWORKS_REQUEST_ORDER_BIES: ListPrivateNetworksRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRoutesRequestOrderBy}. */
export const LIST_ROUTES_REQUEST_ORDER_BIES: ListRoutesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListSubscriberRequestOrderBy}. */
export const LIST_SUBSCRIBER_REQUEST_ORDER_BIES: ListSubscriberRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link OnMarkedDownAction}. */
export const ON_MARKED_DOWN_ACTIONS: OnMarkedDownAction[] = [
  'on_marked_down_action_none',
  'shutdown_sessions',
]

/** Lists all values of the enum {@link PrivateNetworkStatus}. */
export const PRIVATE_NETWORK_STATUSES: PrivateNetworkStatus[] = [
  'unknown',
  'ready',
  'pending',
  'error',
]

/** Lists all values of the enum {@link Protocol}. */
export const PROTOCOLS: Protocol[] = [
  'tcp',
  'http',
]

/** Lists all values of the enum {@link ProxyProtocol}. */
export const PROXY_PROTOCOLS: ProxyProtocol[] = [
  'proxy_protocol_unknown',
  'proxy_protocol_none',
  'proxy_protocol_v1',
  'proxy_protocol_v2',
  'proxy_protocol_v2_ssl',
  'proxy_protocol_v2_ssl_cn',
]

/** Lists all values of the enum {@link SSLCompatibilityLevel}. */
export const SSL_COMPATIBILITY_LEVELS: SSLCompatibilityLevel[] = [
  'ssl_compatibility_level_unknown',
  'ssl_compatibility_level_intermediate',
  'ssl_compatibility_level_modern',
  'ssl_compatibility_level_old',
]

/** Lists all values of the enum {@link StickySessionsType}. */
export const STICKY_SESSIONS_TYPES: StickySessionsType[] = [
  'none',
  'cookie',
  'table',
]

