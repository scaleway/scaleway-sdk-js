// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, Zone as ScwZone } from '@scaleway/sdk-client'

export type AclActionRedirectRedirectType = 'location' | 'scheme'

export type AclActionType = 'allow' | 'deny' | 'redirect'

export type AclHttpFilter =
  | 'acl_http_filter_none'
  | 'path_begin'
  | 'path_end'
  | 'regex'
  | 'http_header_match'

export type BackendServerStatsHealthCheckStatus =
  | 'unknown'
  | 'neutral'
  | 'failed'
  | 'passed'
  | 'condpass'

export type BackendServerStatsServerState =
  | 'stopped'
  | 'starting'
  | 'running'
  | 'stopping'

export type CertificateStatus = 'pending' | 'ready' | 'error'

export type CertificateType = 'letsencryt' | 'custom'

export type ForwardPortAlgorithm = 'roundrobin' | 'leastconn' | 'first'

export type InstanceStatus =
  | 'unknown'
  | 'ready'
  | 'pending'
  | 'stopped'
  | 'error'
  | 'locked'
  | 'migrating'

export type LbStatus =
  | 'unknown'
  | 'ready'
  | 'pending'
  | 'stopped'
  | 'error'
  | 'locked'
  | 'migrating'
  | 'to_create'
  | 'creating'
  | 'to_delete'
  | 'deleting'

export type LbTypeStock = 'unknown' | 'low_stock' | 'out_of_stock' | 'available'

export type ListAclRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListBackendsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListCertificatesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListFrontendsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListIpsRequestIpType = 'all' | 'ipv4' | 'ipv6'

export type ListLbsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListPrivateNetworksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRoutesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListSubscriberRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type OnMarkedDownAction =
  | 'on_marked_down_action_none'
  | 'shutdown_sessions'

export type PrivateNetworkStatus = 'unknown' | 'ready' | 'pending' | 'error'

export type Protocol = 'tcp' | 'http'

export type ProxyProtocol =
  | 'proxy_protocol_unknown'
  | 'proxy_protocol_none'
  | 'proxy_protocol_v1'
  | 'proxy_protocol_v2'
  | 'proxy_protocol_v2_ssl'
  | 'proxy_protocol_v2_ssl_cn'

export type SSLCompatibilityLevel =
  | 'ssl_compatibility_level_unknown'
  | 'ssl_compatibility_level_intermediate'
  | 'ssl_compatibility_level_modern'
  | 'ssl_compatibility_level_old'

export type StickySessionsType = 'none' | 'cookie' | 'table'

export interface SubscriberEmailConfig {
  /**
   * Email address to send alerts to.
   */
  email: string
}

/**
 * Webhook alert of subscriber.
 */
export interface SubscriberWebhookConfig {
  /**
   * URI to receive POST requests.
   */
  uri: string
}

export interface HealthCheckHttpConfig {
  /**
   * The HTTP path to use when performing a health check on backend servers.
   */
  uri: string
  /**
   * The HTTP method used when performing a health check on backend servers.
   */
  method: string
  /**
   * The HTTP response code that should be returned for a health check to be considered successful.
   */
  code?: number
  /**
   * The HTTP host header used when performing a health check on backend servers.
   */
  hostHeader: string
}

export interface HealthCheckHttpsConfig {
  /**
   * The HTTP path to use when performing a health check on backend servers.
   */
  uri: string
  /**
   * The HTTP method used when performing a health check on backend servers.
   */
  method: string
  /**
   * The HTTP response code that should be returned for a health check to be considered successful.
   */
  code?: number
  /**
   * The HTTP host header used when performing a health check on backend servers.
   */
  hostHeader: string
  /**
   * The SNI value used when performing a health check on backend servers over SSL.
   */
  sni: string
}

export interface HealthCheckLdapConfig {}

export interface HealthCheckMysqlConfig {
  /**
   * MySQL user to use for the health check.
   */
  user: string
}

export interface HealthCheckPgsqlConfig {
  /**
   * PostgreSQL user to use for the health check.
   */
  user: string
}

export interface HealthCheckRedisConfig {}

export interface HealthCheckTcpConfig {}

export interface Instance {
  /**
   * Underlying Instance ID.
   */
  id: string
  /**
   * Instance status.
   */
  status: InstanceStatus
  /**
   * Instance IP address.
   */
  ipAddress: string
  /**
   * Date on which the Instance was created.
   */
  createdAt?: Date
  /**
   * Date on which the Instance was last updated.
   */
  updatedAt?: Date
  /**
   * @deprecated The region the Instance is in.
   */
  region?: ScwRegion
  /**
   * The zone the Instance is in.
   */
  zone: ScwZone
}

export interface Ip {
  /**
   * IP address ID.
   */
  id: string
  /**
   * IP address.
   */
  ipAddress: string
  /**
   * Organization ID of the Scaleway Organization the IP address is in.
   */
  organizationId: string
  /**
   * Project ID of the Scaleway Project the IP address is in.
   */
  projectId: string
  /**
   * Load Balancer ID.
   */
  lbId?: string
  /**
   * Reverse DNS (domain name) of the IP address.
   */
  reverse: string
  /**
   * IP tags.
   */
  tags: string[]
  /**
   * @deprecated The region the IP address is in.
   */
  region?: ScwRegion
  /**
   * The zone the IP address is in.
   */
  zone: ScwZone
}

/**
 * Subscriber.
 */
export interface Subscriber {
  /**
   * Subscriber ID.
   */
  id: string
  /**
   * Subscriber name.
   */
  name: string
  /**
   * Email address of subscriber.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be set.
   */
  emailConfig?: SubscriberEmailConfig
  /**
   * Webhook URI of subscriber.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be set.
   */
  webhookConfig?: SubscriberWebhookConfig
}

export interface HealthCheck {
  /**
   * Port to use for the backend server health check.
   */
  port: number
  /**
   * Time to wait between two consecutive health checks.
   */
  checkDelay?: string
  /**
   * Maximum time a backend server has to reply to the health check.
   */
  checkTimeout?: string
  /**
   * Number of consecutive unsuccessful health checks after which the server will be considered dead.
   */
  checkMaxRetries: number
  /**
   * Object to configure a basic TCP health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  tcpConfig?: HealthCheckTcpConfig
  /**
   * Object to configure a MySQL health check. The check requires MySQL >=3.22 or <9.0. For older or newer versions, use a TCP health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  mysqlConfig?: HealthCheckMysqlConfig
  /**
   * Object to configure a PostgreSQL health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  pgsqlConfig?: HealthCheckPgsqlConfig
  /**
   * Object to configure an LDAP health check. The response is analyzed to find the LDAPv3 response message.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  ldapConfig?: HealthCheckLdapConfig
  /**
   * Object to configure a Redis health check. The response is analyzed to find the +PONG response message.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  redisConfig?: HealthCheckRedisConfig
  /**
   * Object to configure an HTTP health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  httpConfig?: HealthCheckHttpConfig
  /**
   * Object to configure an HTTPS health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  httpsConfig?: HealthCheckHttpsConfig
  /**
   * Defines whether proxy protocol should be activated for the health check.
   */
  checkSendProxy: boolean
  /**
   * Time to wait between two consecutive health checks when a backend server is in a transient state (going UP or DOWN).
   */
  transientCheckDelay?: string
}

export interface Lb {
  /**
   * Underlying Instance ID.
   */
  id: string
  /**
   * Load Balancer name.
   */
  name: string
  /**
   * Load Balancer description.
   */
  description: string
  /**
   * Load Balancer status.
   */
  status: LbStatus
  /**
   * List of underlying Instances.
   */
  instances: Instance[]
  /**
   * Scaleway Organization ID.
   */
  organizationId: string
  /**
   * Scaleway Project ID.
   */
  projectId: string
  /**
   * List of IP addresses attached to the Load Balancer.
   */
  ip: Ip[]
  /**
   * Load Balancer tags.
   */
  tags: string[]
  /**
   * Number of frontends the Load Balancer has.
   */
  frontendCount: number
  /**
   * Number of backends the Load Balancer has.
   */
  backendCount: number
  /**
   * Load Balancer offer type.
   */
  type: string
  /**
   * Subscriber information.
   */
  subscriber?: Subscriber
  /**
   * Determines the minimal SSL version which needs to be supported on client side.
   */
  sslCompatibilityLevel: SSLCompatibilityLevel
  /**
   * Date on which the Load Balancer was created.
   */
  createdAt?: Date
  /**
   * Date on which the Load Balancer was last updated.
   */
  updatedAt?: Date
  /**
   * Number of Private Networks attached to the Load Balancer.
   */
  privateNetworkCount: number
  /**
   * Number of routes configured on the Load Balancer.
   */
  routeCount: number
  /**
   * @deprecated The region the Load Balancer is in.
   */
  region?: ScwRegion
  /**
   * The zone the Load Balancer is in.
   */
  zone: ScwZone
}

export interface AclActionRedirect {
  /**
   * Redirect type.
   */
  type: AclActionRedirectRedirectType
  /**
   * Redirect target. For a location redirect, you can use a URL e.g. `https://scaleway.com`. Using a scheme name (e.g. `https`, `http`, `ftp`, `git`) will replace the request's original scheme. This can be useful to implement HTTP to HTTPS redirects. Valid placeholders that can be used in a `location` redirect to preserve parts of the original request in the redirection URL are \{\{host\}\}, \{\{query\}\}, \{\{path\}\} and \{\{scheme\}\}.
   */
  target: string
  /**
   * HTTP redirect code to use. Valid values are 301, 302, 303, 307 and 308. Default value is 302.
   */
  code?: number
}

export interface Backend {
  /**
   * Backend ID.
   */
  id: string
  /**
   * Name of the backend.
   */
  name: string
  /**
   * Protocol used by the backend when forwarding traffic to backend servers.
   */
  forwardProtocol: Protocol
  /**
   * Port used by the backend when forwarding traffic to backend servers.
   */
  forwardPort: number
  /**
   * Load balancing algorithm to use when determining which backend server to forward new traffic to.
   */
  forwardPortAlgorithm: ForwardPortAlgorithm
  /**
   * Defines whether sticky sessions (binding a particular session to a particular backend server) are activated and the method to use if so. None disables sticky sessions. Cookie-based uses an HTTP cookie to stick a session to a backend server. Table-based uses the source (client) IP address to stick a session to a backend server.
   */
  stickySessions: StickySessionsType
  /**
   * Cookie name for cookie-based sticky sessions.
   */
  stickySessionsCookieName: string
  /**
   * Object defining the health check to be carried out by the backend when checking the status and health of backend servers.
   */
  healthCheck?: HealthCheck
  /**
   * List of IP addresses of backend servers attached to this backend.
   */
  pool: string[]
  /**
   * Load Balancer the backend is attached to.
   */
  lb?: Lb
  /**
   * @deprecated Deprecated in favor of proxy_protocol field.
   */
  sendProxyV2?: boolean
  /**
   * Maximum allowed time for a backend server to process a request.
   */
  timeoutServer?: string
  /**
   * Maximum allowed time for establishing a connection to a backend server.
   */
  timeoutConnect?: string
  /**
   * Maximum allowed tunnel inactivity time after Websocket is established (takes precedence over client and server timeout).
   */
  timeoutTunnel?: string
  /**
   * Action to take when a backend server is marked as down.
   */
  onMarkedDownAction: OnMarkedDownAction
  /**
   * Protocol to use between the Load Balancer and backend servers. Allows the backend servers to be informed of the client's real IP address. The PROXY protocol must be supported by the backend servers' software.
   */
  proxyProtocol: ProxyProtocol
  /**
   * Date at which the backend was created.
   */
  createdAt?: Date
  /**
   * Date at which the backend was updated.
   */
  updatedAt?: Date
  /**
   * Scaleway Object Storage bucket website to be served as failover if all backend servers are down, e.g. failover-website.s3-website.fr-par.scw.cloud.
   */
  failoverHost?: string
  /**
   * Defines whether to enable SSL bridging between the Load Balancer and backend servers.
   */
  sslBridging?: boolean
  /**
   * Defines whether the server certificate verification should be ignored.
   */
  ignoreSslServerVerify?: boolean
  /**
   * Whether to use another backend server on each attempt.
   */
  redispatchAttemptCount?: number
  /**
   * Number of retries when a backend server connection failed.
   */
  maxRetries?: number
  /**
   * Maximum number of connections allowed per backend server.
   */
  maxConnections?: number
  /**
   * Maximum time for a request to be left pending in queue when `max_connections` is reached.
   */
  timeoutQueue?: string
}

export interface Certificate {
  /**
   * Certificate type (Let's Encrypt or custom).
   */
  type: CertificateType
  /**
   * Certificate ID.
   */
  id: string
  /**
   * Main domain name of certificate.
   */
  commonName: string
  /**
   * Alternative domain names.
   */
  subjectAlternativeName: string[]
  /**
   * Identifier (SHA-1) of the certificate.
   */
  fingerprint: string
  /**
   * Lower validity bound.
   */
  notValidBefore?: Date
  /**
   * Upper validity bound.
   */
  notValidAfter?: Date
  /**
   * Certificate status.
   */
  status: CertificateStatus
  /**
   * Load Balancer object the certificate is attached to.
   */
  lb?: Lb
  /**
   * Certificate name.
   */
  name: string
  /**
   * Date on which the certificate was created.
   */
  createdAt?: Date
  /**
   * Date on which the certificate was last updated.
   */
  updatedAt?: Date
  /**
   * Additional information about the certificate status (useful in case of certificate generation failure, for example).
   */
  statusDetails?: string
}

export interface AclAction {
  /**
   * Action to take when incoming traffic matches an ACL filter.
   */
  type: AclActionType
  /**
   * Redirection parameters when using an ACL with a `redirect` action.
   */
  redirect?: AclActionRedirect
}

export interface AclMatch {
  /**
   * List of IPs or CIDR v4/v6 addresses to filter for from the client side.
   */
  ipSubnet: string[]
  /**
   * Defines whether Edge Services IPs should be matched.
   */
  ipsEdgeServices: boolean
  /**
   * Type of HTTP filter to match. Extracts the request's URL path, which starts at the first slash and ends before the question mark (without the host part). Defines where to filter for the http_filter_value. Only supported for HTTP backends.
   */
  httpFilter: AclHttpFilter
  /**
   * List of values to filter for.
   */
  httpFilterValue: string[]
  /**
   * Name of the HTTP header to filter on if `http_header_match` was selected in `http_filter`.
   */
  httpFilterOption?: string
  /**
   * Defines whether to invert the match condition. If set to `true`, the ACL carries out its action when the condition DOES NOT match.
   */
  invert: boolean
}

export interface Frontend {
  /**
   * Frontend ID.
   */
  id: string
  /**
   * Name of the frontend.
   */
  name: string
  /**
   * Port the frontend listens on.
   */
  inboundPort: number
  /**
   * Backend object the frontend is attached to.
   */
  backend?: Backend
  /**
   * Load Balancer object the frontend is attached to.
   */
  lb?: Lb
  /**
   * Maximum allowed inactivity time on the client side.
   */
  timeoutClient?: string
  /**
   * @deprecated Certificate, deprecated in favor of certificate_ids array.
   */
  certificate?: Certificate
  /**
   * List of SSL/TLS certificate IDs to bind to the frontend.
   */
  certificateIds: string[]
  /**
   * Date on which the frontend was created.
   */
  createdAt?: Date
  /**
   * Date on which the frontend was last updated.
   */
  updatedAt?: Date
  /**
   * Defines whether to enable HTTP/3 protocol on the frontend.
   */
  enableHttp3: boolean
  /**
   * Rate limit for new connections established on this frontend. Use 0 value to disable, else value is connections per second.
   */
  connectionRateLimit?: number
  /**
   * Defines whether to enable access logs on the frontend.
   */
  enableAccessLogs: boolean
}

export interface PrivateNetworkDHCPConfig {
  /**
   * @deprecated
   */
  ipId?: string
}

export interface PrivateNetworkIpamConfig {}

export interface PrivateNetworkStaticConfig {
  /**
   * @deprecated Array of a local IP address for the Load Balancer on this Private Network.
   */
  ipAddress?: string[]
}

export interface RouteMatch {
  /**
   * Value to match in the Server Name Indication TLS extension (SNI) field from an incoming connection made via an SSL/TLS transport layer. This field should be set for routes on TCP Load Balancers.
   *
   * One-of ('matchType'): at most one of 'sni', 'hostHeader', 'pathBegin' could be set.
   */
  sni?: string
  /**
   * Value to match in the HTTP Host request header from an incoming request. This field should be set for routes on HTTP Load Balancers.
   *
   * One-of ('matchType'): at most one of 'sni', 'hostHeader', 'pathBegin' could be set.
   */
  hostHeader?: string
  /**
   * If true, all subdomains will match.
   */
  matchSubdomains: boolean
  /**
   * Value to match in the URL beginning path from an incoming request.
   *
   * One-of ('matchType'): at most one of 'sni', 'hostHeader', 'pathBegin' could be set.
   */
  pathBegin?: string
}

export interface CreateCertificateRequestCustomCertificate {
  /**
   * Full PEM-formatted certificate, consisting of the entire certificate chain including public key, private key, and (optionally) Certificate Authorities.
   */
  certificateChain: string
}

export interface CreateCertificateRequestLetsencryptConfig {
  /**
   * Main domain name of certificate (this domain must exist and resolve to your Load Balancer IP address).
   */
  commonName: string
  /**
   * Alternative domain names (all domain names must exist and resolve to your Load Balancer IP address).
   */
  subjectAlternativeName: string[]
}

export interface BackendServerStats {
  /**
   * ID of your Load Balancer's underlying Instance.
   */
  instanceId: string
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * IPv4 or IPv6 address of the backend server.
   */
  ip: string
  /**
   * Server operational state (stopped/starting/running/stopping).
   */
  serverState: BackendServerStatsServerState
  /**
   * Time since last operational change.
   */
  serverStateChangedAt?: Date
  /**
   * Last health check status (unknown/neutral/failed/passed/condpass).
   */
  lastHealthCheckStatus: BackendServerStatsHealthCheckStatus
}

export interface Acl {
  /**
   * ACL ID.
   */
  id: string
  /**
   * ACL name.
   */
  name: string
  /**
   * ACL match filter object. One of `ip_subnet`, `ips_edge_services` or `http_filter` & `http_filter_value` are required.
   */
  match?: AclMatch
  /**
   * Action to take when incoming traffic matches an ACL filter.
   */
  action?: AclAction
  /**
   * ACL is attached to this frontend object.
   */
  frontend?: Frontend
  /**
   * Priority of this ACL (ACLs are applied in ascending order, 0 is the first ACL executed).
   */
  index: number
  /**
   * Date on which the ACL was created.
   */
  createdAt?: Date
  /**
   * Date on which the ACL was last updated.
   */
  updatedAt?: Date
  /**
   * ACL description.
   */
  description: string
}

export interface PrivateNetwork {
  /**
   * Load Balancer object which is attached to the Private Network.
   */
  lb?: Lb
  /**
   * IPAM IDs of the booked IP addresses.
   */
  ipamIds: string[]
  /**
   * @deprecated Object containing an array of a local IP address for the Load Balancer on this Private Network.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig', 'ipamConfig' could be set.
   */
  staticConfig?: PrivateNetworkStaticConfig
  /**
   * @deprecated Object containing DHCP-assigned IP addresses.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig', 'ipamConfig' could be set.
   */
  dhcpConfig?: PrivateNetworkDHCPConfig
  /**
   * @deprecated For internal use only.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig', 'ipamConfig' could be set.
   */
  ipamConfig?: PrivateNetworkIpamConfig
  /**
   * Private Network ID.
   */
  privateNetworkId: string
  /**
   * Status of Private Network connection.
   */
  status: PrivateNetworkStatus
  /**
   * Date on which the Private Network was created.
   */
  createdAt?: Date
  /**
   * Date on which the PN was last updated.
   */
  updatedAt?: Date
}

export interface LbType {
  /**
   * Load Balancer commercial offer type name.
   */
  name: string
  /**
   * Current stock status for a given Load Balancer type.
   */
  stockStatus: LbTypeStock
  /**
   * Load Balancer commercial offer type description.
   */
  description: string
  /**
   * @deprecated The region the Load Balancer stock is in.
   */
  region?: ScwRegion
  /**
   * The zone the Load Balancer stock is in.
   */
  zone: ScwZone
}

export interface Route {
  /**
   * Route ID.
   */
  id: string
  /**
   * ID of the source frontend.
   */
  frontendId: string
  /**
   * ID of the target backend.
   */
  backendId: string
  /**
   * Object defining the match condition for a route to be applied. If an incoming client session matches the specified condition (i.e. it has a matching SNI value or HTTP Host header value), it will be passed to the target backend.
   */
  match?: RouteMatch
  /**
   * Date on which the route was created.
   */
  createdAt?: Date
  /**
   * Date on which the route was last updated.
   */
  updatedAt?: Date
}

export interface AclSpec {
  /**
   * ACL name.
   */
  name: string
  /**
   * Action to take when incoming traffic matches an ACL filter.
   */
  action: AclAction
  /**
   * ACL match filter object. One of `ip_subnet`, `ips_edge_services` or `http_filter` and `http_filter_value` are required.
   */
  match?: AclMatch
  /**
   * Priority of this ACL (ACLs are applied in ascending order, 0 is the first ACL executed).
   */
  index: number
  /**
   * ACL description.
   */
  description: string
}

export type AddBackendServersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * List of IP addresses to add to backend servers.
   */
  serverIp: string[]
}

export type AttachPrivateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Private Network ID.
   */
  privateNetworkId: string
  /**
   * @deprecated Object containing an array of a local IP address for the Load Balancer on this Private Network.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig', 'ipamConfig' could be set.
   */
  staticConfig?: PrivateNetworkStaticConfig
  /**
   * @deprecated Defines whether to let DHCP assign IP addresses.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig', 'ipamConfig' could be set.
   */
  dhcpConfig?: PrivateNetworkDHCPConfig
  /**
   * @deprecated For internal use only.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig', 'ipamConfig' could be set.
   */
  ipamConfig?: PrivateNetworkIpamConfig
  /**
   * IPAM ID of a pre-reserved IP address to assign to the Load Balancer on this Private Network. In the future, it will be possible to specify multiple IPs in this field (IPv4 and IPv6), for now only one ID of an IPv4 address is expected. When null, a new private IP address is created for the Load Balancer on this Private Network.
   */
  ipamIds?: string[]
}

/**
 * Add an ACL to a Load Balancer frontend.
 */
export type CreateAclRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Frontend ID to attach the ACL to.
   */
  frontendId: string
  /**
   * ACL name.
   */
  name?: string
  /**
   * Action to take when incoming traffic matches an ACL filter.
   */
  action: AclAction
  /**
   * ACL match filter object. One of `ip_subnet`, `ips_edge_services` or `http_filter` & `http_filter_value` are required.
   */
  match?: AclMatch
  /**
   * Priority of this ACL (ACLs are applied in ascending order, 0 is the first ACL executed).
   */
  index: number
  /**
   * ACL description.
   */
  description: string
}

export type CreateBackendRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Name for the backend.
   */
  name?: string
  /**
   * Protocol to be used by the backend when forwarding traffic to backend servers.
   */
  forwardProtocol: Protocol
  /**
   * Port to be used by the backend when forwarding traffic to backend servers.
   */
  forwardPort: number
  /**
   * Load balancing algorithm to be used when determining which backend server to forward new traffic to.
   */
  forwardPortAlgorithm: ForwardPortAlgorithm
  /**
   * Defines whether to activate sticky sessions (binding a particular session to a particular backend server) and the method to use if so. None disables sticky sessions. Cookie-based uses an HTTP cookie TO stick a session to a backend server. Table-based uses the source (client) IP address to stick a session to a backend server.
   */
  stickySessions: StickySessionsType
  /**
   * Cookie name for cookie-based sticky sessions.
   */
  stickySessionsCookieName: string
  /**
   * Object defining the health check to be carried out by the backend when checking the status and health of backend servers.
   */
  healthCheck: HealthCheck
  /**
   * List of backend server IP addresses (IPv4 or IPv6) the backend should forward traffic to.
   */
  serverIp: string[]
  /**
   * @deprecated Deprecated in favor of proxy_protocol field.
   */
  sendProxyV2?: boolean
  /**
   * Maximum allowed time for a backend server to process a request.
   */
  timeoutServer?: string
  /**
   * Maximum allowed time for establishing a connection to a backend server.
   */
  timeoutConnect?: string
  /**
   * Maximum allowed tunnel inactivity time after Websocket is established (takes precedence over client and server timeout).
   */
  timeoutTunnel?: string
  /**
   * Action to take when a backend server is marked as down.
   */
  onMarkedDownAction?: OnMarkedDownAction
  /**
   * Protocol to use between the Load Balancer and backend servers. Allows the backend servers to be informed of the client's real IP address. The PROXY protocol must be supported by the backend servers' software.
   */
  proxyProtocol?: ProxyProtocol
  /**
   * Scaleway Object Storage bucket website to be served as failover if all backend servers are down, e.g. failover-website.s3-website.fr-par.scw.cloud.
   */
  failoverHost?: string
  /**
   * Defines whether to enable SSL bridging between the Load Balancer and backend servers.
   */
  sslBridging?: boolean
  /**
   * Defines whether the server certificate verification should be ignored.
   */
  ignoreSslServerVerify?: boolean
  /**
   * Whether to use another backend server on each attempt.
   */
  redispatchAttemptCount?: number
  /**
   * Number of retries when a backend server connection failed.
   */
  maxRetries?: number
  /**
   * Maximum number of connections allowed per backend server.
   */
  maxConnections?: number
  /**
   * Maximum time for a request to be left pending in queue when `max_connections` is reached.
   */
  timeoutQueue?: string
}

export type CreateCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Name for the certificate.
   */
  name?: string
  /**
   * Object to define a new Let's Encrypt certificate to be generated.
   *
   * One-of ('type'): at most one of 'letsencrypt', 'customCertificate' could be set.
   */
  letsencrypt?: CreateCertificateRequestLetsencryptConfig
  /**
   * Object to define an existing custom certificate to be imported.
   *
   * One-of ('type'): at most one of 'letsencrypt', 'customCertificate' could be set.
   */
  customCertificate?: CreateCertificateRequestCustomCertificate
}

export type CreateFrontendRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID (ID of the Load Balancer to attach the frontend to).
   */
  lbId: string
  /**
   * Name for the frontend.
   */
  name?: string
  /**
   * Port the frontend should listen on.
   */
  inboundPort: number
  /**
   * Backend ID (ID of the backend the frontend should pass traffic to).
   */
  backendId: string
  /**
   * Maximum allowed inactivity time on the client side.
   */
  timeoutClient?: string
  /**
   * @deprecated Certificate ID, deprecated in favor of certificate_ids array.
   */
  certificateId?: string
  /**
   * List of SSL/TLS certificate IDs to bind to the frontend.
   */
  certificateIds?: string[]
  /**
   * Defines whether to enable HTTP/3 protocol on the frontend.
   */
  enableHttp3: boolean
  /**
   * Rate limit for new connections established on this frontend. Use 0 value to disable, else value is connections per second.
   */
  connectionRateLimit?: number
  /**
   * Defines whether to enable access logs on the frontend.
   */
  enableAccessLogs: boolean
}

export type CreateIpRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * @deprecated Organization ID of the Organization where the IP address should be created.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string
  /**
   * Project ID of the Project where the IP address should be created.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string
  /**
   * Reverse DNS (domain name) for the IP address.
   */
  reverse?: string
  /**
   * If true, creates a Flexible IP with an ipv6 address.
   */
  isIpv6: boolean
  /**
   * List of tags for the IP.
   */
  tags?: string[]
}

export type CreateLbRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * @deprecated Scaleway Organization to create the Load Balancer in.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string
  /**
   * Scaleway Project to create the Load Balancer in.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string
  /**
   * Name for the Load Balancer.
   */
  name?: string
  /**
   * Description for the Load Balancer.
   */
  description: string
  /**
   * @deprecated ID of an existing flexible IP address to attach to the Load Balancer.
   */
  ipId?: string
  /**
   * Defines whether to automatically assign a flexible public IP to the Load Balancer. Default value is `true` (assign).
   */
  assignFlexibleIp?: boolean
  /**
   * Defines whether to automatically assign a flexible public IPv6 to the Load Balancer. Default value is `false` (do not assign).
   */
  assignFlexibleIpv6?: boolean
  /**
   * List of IP IDs to attach to the Load Balancer.
   */
  ipIds?: string[]
  /**
   * List of tags for the Load Balancer.
   */
  tags?: string[]
  /**
   * Load Balancer commercial offer type. Use the Load Balancer types endpoint to retrieve a list of available offer types.
   */
  type: string
  /**
   * Determines the minimal SSL version which needs to be supported on the client side, in an SSL/TLS offloading context. Intermediate is suitable for general-purpose servers with a variety of clients, recommended for almost all systems. Modern is suitable for services with clients that support TLS 1.3 and do not need backward compatibility. Old is compatible with a small number of very old clients and should be used only as a last resort.
   */
  sslCompatibilityLevel?: SSLCompatibilityLevel
}

export type CreateRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the source frontend to create the route on.
   */
  frontendId: string
  /**
   * ID of the target backend for the route.
   */
  backendId: string
  /**
   * Object defining the match condition for a route to be applied. If an incoming client session matches the specified condition (i.e. it has a matching SNI value or HTTP Host header value), it will be passed to the target backend.
   */
  match?: RouteMatch
}

/**
 * Create a new alert subscriber (webhook or email).
 */
export type CreateSubscriberRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Subscriber name.
   */
  name: string
  /**
   * Email address configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be set.
   */
  emailConfig?: SubscriberEmailConfig
  /**
   * WebHook URI configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be set.
   */
  webhookConfig?: SubscriberWebhookConfig
  /**
   * @deprecated Organization ID to create the subscriber in.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string
  /**
   * Project ID to create the subscriber in.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string
}

export type DeleteAclRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ACL ID.
   */
  aclId: string
}

export type DeleteBackendRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the backend to delete.
   */
  backendId: string
}

export type DeleteCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Certificate ID.
   */
  certificateId: string
}

export type DeleteFrontendRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the frontend to delete.
   */
  frontendId: string
}

export type DeleteLbRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Load Balancer to delete.
   */
  lbId: string
  /**
   * Defines whether the Load Balancer's flexible IP should be deleted. Set to true to release the flexible IP, or false to keep it available in your account for future Load Balancers.
   */
  releaseIp: boolean
}

export type DeleteRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route ID.
   */
  routeId: string
}

export type DeleteSubscriberRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Subscriber ID.
   */
  subscriberId: string
}

export type DetachPrivateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load balancer ID.
   */
  lbId: string
  /**
   * Set your instance private network id.
   */
  privateNetworkId: string
}

export type GetAclRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ACL ID.
   */
  aclId: string
}

export type GetBackendRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Backend ID.
   */
  backendId: string
}

export type GetCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Certificate ID.
   */
  certificateId: string
}

export type GetFrontendRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Frontend ID.
   */
  frontendId: string
}

export type GetIpRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * IP address ID.
   */
  ipId: string
}

export type GetLbRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
}

/**
 * Get Load Balancer stats.
 */
export type GetLbStatsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * ID of the backend.
   */
  backendId?: string
}

export type GetRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route ID.
   */
  routeId: string
}

export type GetSubscriberRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Subscriber ID.
   */
  subscriberId: string
}

export interface LbStats {
  /**
   * List of objects containing Load Balancer statistics.
   */
  backendServersStats: BackendServerStats[]
}

export interface ListAclResponse {
  /**
   * List of ACL objects.
   */
  acls: Acl[]
  /**
   * The total number of objects.
   */
  totalCount: number
}

export type ListAclsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Frontend ID (ACLs attached to this frontend will be returned in the response).
   */
  frontendId: string
  /**
   * Sort order of ACLs in the response.
   */
  orderBy?: ListAclRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * The number of ACLs to return.
   */
  pageSize?: number
  /**
   * ACL name to filter for.
   */
  name?: string
}

export type ListBackendStatsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of items to return.
   */
  pageSize?: number
  /**
   * ID of the backend.
   */
  backendId?: string
}

export interface ListBackendStatsResponse {
  /**
   * List of objects containing backend server statistics.
   */
  backendServersStats: BackendServerStats[]
  /**
   * The total number of objects.
   */
  totalCount: number
}

export type ListBackendsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Name of the backend to filter for.
   */
  name?: string
  /**
   * Sort order of backends in the response.
   */
  orderBy?: ListBackendsRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of backends to return.
   */
  pageSize?: number
}

export interface ListBackendsResponse {
  /**
   * List of backend objects of a given Load Balancer.
   */
  backends: Backend[]
  /**
   * Total count of backend objects, without pagination.
   */
  totalCount: number
}

export type ListCertificatesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Sort order of certificates in the response.
   */
  orderBy?: ListCertificatesRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of certificates to return.
   */
  pageSize?: number
  /**
   * Certificate name to filter for, only certificates of this name will be returned.
   */
  name?: string
}

export interface ListCertificatesResponse {
  /**
   * List of certificate objects.
   */
  certificates: Certificate[]
  /**
   * The total number of objects.
   */
  totalCount: number
}

export type ListFrontendsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Name of the frontend to filter for.
   */
  name?: string
  /**
   * Sort order of frontends in the response.
   */
  orderBy?: ListFrontendsRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of frontends to return.
   */
  pageSize?: number
}

export interface ListFrontendsResponse {
  /**
   * List of frontend objects of a given Load Balancer.
   */
  frontends: Frontend[]
  /**
   * Total count of frontend objects, without pagination.
   */
  totalCount: number
}

export type ListIPsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of IP addresses to return.
   */
  pageSize?: number
  /**
   * IP address to filter for.
   */
  ipAddress?: string
  /**
   * Organization ID to filter for, only Load Balancer IP addresses from this Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for, only Load Balancer IP addresses from this Project will be returned.
   */
  projectId?: string
  /**
   * IP type to filter for.
   */
  ipType?: ListIpsRequestIpType
  /**
   * Tag to filter for, only IPs with one or more matching tags will be returned.
   */
  tags?: string[]
}

export interface ListIpsResponse {
  /**
   * List of IP address objects.
   */
  ips: Ip[]
  /**
   * Total count of IP address objects, without pagination.
   */
  totalCount: number
}

export type ListLbPrivateNetworksRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Sort order of Private Network objects in the response.
   */
  orderBy?: ListPrivateNetworksRequestOrderBy
  /**
   * Number of objects to return.
   */
  pageSize?: number
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
}

export interface ListLbPrivateNetworksResponse {
  /**
   * List of Private Network objects attached to the Load Balancer.
   */
  privateNetwork: PrivateNetwork[]
  /**
   * Total number of objects in the response.
   */
  totalCount: number
}

export type ListLbTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * The number of items to return.
   */
  pageSize?: number
}

export interface ListLbTypesResponse {
  /**
   * List of Load Balancer commercial offer type objects.
   */
  lbTypes: LbType[]
  /**
   * Total number of Load Balancer offer type objects.
   */
  totalCount: number
}

export type ListLbsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer name to filter for.
   */
  name?: string
  /**
   * Sort order of Load Balancers in the response.
   */
  orderBy?: ListLbsRequestOrderBy
  /**
   * Number of Load Balancers to return.
   */
  pageSize?: number
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Organization ID to filter for, only Load Balancers from this Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for, only Load Balancers from this Project will be returned.
   */
  projectId?: string
  /**
   * Filter by tag, only Load Balancers with one or more matching tags will be returned.
   */
  tags?: string[]
}

export interface ListLbsResponse {
  /**
   * List of Load Balancer objects.
   */
  lbs: Lb[]
  /**
   * The total number of Load Balancer objects.
   */
  totalCount: number
}

export type ListRoutesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Sort order of routes in the response.
   */
  orderBy?: ListRoutesRequestOrderBy
  /**
   * The number of route objects to return.
   */
  pageSize?: number
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Frontend ID to filter for, only Routes from this Frontend will be returned.
   */
  frontendId?: string
}

export interface ListRoutesResponse {
  /**
   * List of route objects.
   */
  routes: Route[]
  /**
   * The total number of route objects.
   */
  totalCount: number
}

export type ListSubscriberRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Sort order of subscribers in the response.
   */
  orderBy?: ListSubscriberRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * The number of items to return.
   */
  pageSize?: number
  /**
   * Subscriber name to search for.
   */
  name?: string
  /**
   * Filter subscribers by Organization ID.
   */
  organizationId?: string
  /**
   * Filter subscribers by Project ID.
   */
  projectId?: string
}

export interface ListSubscriberResponse {
  /**
   * List of subscriber objects.
   */
  subscribers: Subscriber[]
  /**
   * The total number of objects.
   */
  totalCount: number
}

export type MigrateLbRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Load Balancer type to migrate to (use the List all Load Balancer offer types endpoint to get a list of available offer types).
   */
  type: string
}

export type ReleaseIpRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * IP address ID.
   */
  ipId: string
}

export type RemoveBackendServersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * List of IP addresses to remove from backend servers.
   */
  serverIp: string[]
}

export interface SetAclsResponse {
  /**
   * List of ACL objects.
   */
  acls: Acl[]
  /**
   * The total number of ACL objects.
   */
  totalCount: number
}

export type SetBackendServersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * List of IP addresses for backend servers. Any other existing backend servers will be removed.
   */
  serverIp: string[]
}

export type SubscribeToLbRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Subscriber ID.
   */
  subscriberId: string
}

export type UnsubscribeFromLbRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
}

export type UpdateAclRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ACL ID.
   */
  aclId: string
  /**
   * ACL name.
   */
  name: string
  /**
   * Action to take when incoming traffic matches an ACL filter.
   */
  action: AclAction
  /**
   * ACL match filter object. One of `ip_subnet`, `ips_edge_services` or `http_filter` & `http_filter_value` are required.
   */
  match?: AclMatch
  /**
   * Priority of this ACL (ACLs are applied in ascending order, 0 is the first ACL executed).
   */
  index: number
  /**
   * ACL description.
   */
  description?: string
}

export type UpdateBackendRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * Backend name.
   */
  name: string
  /**
   * Protocol to be used by the backend when forwarding traffic to backend servers.
   */
  forwardProtocol: Protocol
  /**
   * Port to be used by the backend when forwarding traffic to backend servers.
   */
  forwardPort: number
  /**
   * Load balancing algorithm to be used when determining which backend server to forward new traffic to.
   */
  forwardPortAlgorithm: ForwardPortAlgorithm
  /**
   * Defines whether to activate sticky sessions (binding a particular session to a particular backend server) and the method to use if so. None disables sticky sessions. Cookie-based uses an HTTP cookie to stick a session to a backend server. Table-based uses the source (client) IP address to stick a session to a backend server.
   */
  stickySessions: StickySessionsType
  /**
   * Cookie name for cookie-based sticky sessions.
   */
  stickySessionsCookieName: string
  /**
   * @deprecated Deprecated in favor of proxy_protocol field.
   */
  sendProxyV2?: boolean
  /**
   * Maximum allowed time for a backend server to process a request.
   */
  timeoutServer?: string
  /**
   * Maximum allowed time for establishing a connection to a backend server.
   */
  timeoutConnect?: string
  /**
   * Maximum allowed tunnel inactivity time after Websocket is established (takes precedence over client and server timeout).
   */
  timeoutTunnel?: string
  /**
   * Action to take when a backend server is marked as down.
   */
  onMarkedDownAction?: OnMarkedDownAction
  /**
   * Protocol to use between the Load Balancer and backend servers. Allows the backend servers to be informed of the client's real IP address. The PROXY protocol must be supported by the backend servers' software.
   */
  proxyProtocol?: ProxyProtocol
  /**
   * Scaleway Object Storage bucket website to be served as failover if all backend servers are down, e.g. failover-website.s3-website.fr-par.scw.cloud.
   */
  failoverHost?: string
  /**
   * Defines whether to enable SSL bridging between the Load Balancer and backend servers.
   */
  sslBridging?: boolean
  /**
   * Defines whether the server certificate verification should be ignored.
   */
  ignoreSslServerVerify?: boolean
  /**
   * Whether to use another backend server on each attempt.
   */
  redispatchAttemptCount?: number
  /**
   * Number of retries when a backend server connection failed.
   */
  maxRetries?: number
  /**
   * Maximum number of connections allowed per backend server.
   */
  maxConnections?: number
  /**
   * Maximum time for a request to be left pending in queue when `max_connections` is reached.
   */
  timeoutQueue?: string
}

export type UpdateCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Certificate ID.
   */
  certificateId: string
  /**
   * Certificate name.
   */
  name: string
}

export type UpdateFrontendRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Frontend ID.
   */
  frontendId: string
  /**
   * Frontend name.
   */
  name: string
  /**
   * Port the frontend should listen on.
   */
  inboundPort: number
  /**
   * Backend ID (ID of the backend the frontend should pass traffic to).
   */
  backendId: string
  /**
   * Maximum allowed inactivity time on the client side.
   */
  timeoutClient?: string
  /**
   * @deprecated Certificate ID, deprecated in favor of certificate_ids array.
   */
  certificateId?: string
  /**
   * List of SSL/TLS certificate IDs to bind to the frontend.
   */
  certificateIds?: string[]
  /**
   * Defines whether to enable HTTP/3 protocol on the frontend.
   */
  enableHttp3: boolean
  /**
   * Rate limit for new connections established on this frontend. Use 0 value to disable, else value is connections per second.
   */
  connectionRateLimit?: number
  /**
   * Defines whether to enable access logs on the frontend.
   */
  enableAccessLogs?: boolean
}

export type UpdateHealthCheckRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * Port to use for the backend server health check.
   */
  port: number
  /**
   * Time to wait between two consecutive health checks.
   */
  checkDelay?: string
  /**
   * Maximum time a backend server has to reply to the health check.
   */
  checkTimeout?: string
  /**
   * Number of consecutive unsuccessful health checks after which the server will be considered dead.
   */
  checkMaxRetries: number
  /**
   * Defines whether proxy protocol should be activated for the health check.
   */
  checkSendProxy: boolean
  /**
   * Object to configure a basic TCP health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  tcpConfig?: HealthCheckTcpConfig
  /**
   * Object to configure a MySQL health check. The check requires MySQL >=3.22 or <9.0. For older or newer versions, use a TCP health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  mysqlConfig?: HealthCheckMysqlConfig
  /**
   * Object to configure a PostgreSQL health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  pgsqlConfig?: HealthCheckPgsqlConfig
  /**
   * Object to configure an LDAP health check. The response is analyzed to find the LDAPv3 response message.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  ldapConfig?: HealthCheckLdapConfig
  /**
   * Object to configure a Redis health check. The response is analyzed to find the +PONG response message.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  redisConfig?: HealthCheckRedisConfig
  /**
   * Object to configure an HTTP health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  httpConfig?: HealthCheckHttpConfig
  /**
   * Object to configure an HTTPS health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  httpsConfig?: HealthCheckHttpsConfig
  /**
   * Time to wait between two consecutive health checks when a backend server is in a transient state (going UP or DOWN).
   */
  transientCheckDelay?: string
}

export type UpdateIpRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * IP address ID.
   */
  ipId: string
  /**
   * Reverse DNS (domain name) for the IP address.
   */
  reverse?: string
  /**
   * ID of the server on which to attach the flexible IP.
   */
  lbId?: string
  /**
   * List of tags for the IP.
   */
  tags?: string[]
}

export type UpdateLbRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Load Balancer name.
   */
  name: string
  /**
   * Load Balancer description.
   */
  description: string
  /**
   * List of tags for the Load Balancer.
   */
  tags?: string[]
  /**
   * Determines the minimal SSL version which needs to be supported on the client side, in an SSL/TLS offloading context. Intermediate is suitable for general-purpose servers with a variety of clients, recommended for almost all systems. Modern is suitable for services with clients that support TLS 1.3 and don't need backward compatibility. Old is compatible with a small number of very old clients and should be used only as a last resort.
   */
  sslCompatibilityLevel?: SSLCompatibilityLevel
}

export type UpdateRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route ID.
   */
  routeId: string
  /**
   * ID of the target backend for the route.
   */
  backendId: string
  /**
   * Object defining the match condition for a route to be applied. If an incoming client session matches the specified condition (i.e. it has a matching SNI value or HTTP Host header value), it will be passed to the target backend.
   */
  match?: RouteMatch
}

export type UpdateSubscriberRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Subscriber ID.
   */
  subscriberId: string
  /**
   * Subscriber name.
   */
  name: string
  /**
   * Email address configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be set.
   */
  emailConfig?: SubscriberEmailConfig
  /**
   * Webhook URI configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be set.
   */
  webhookConfig?: SubscriberWebhookConfig
}

export type ZonedApiAddBackendServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * List of IP addresses to add to backend servers.
   */
  serverIp: string[]
}

export type ZonedApiAttachPrivateNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Private Network ID.
   */
  privateNetworkId: string
  /**
   * @deprecated Object containing an array of a local IP address for the Load Balancer on this Private Network.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig', 'ipamConfig' could be set.
   */
  staticConfig?: PrivateNetworkStaticConfig
  /**
   * @deprecated Defines whether to let DHCP assign IP addresses.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig', 'ipamConfig' could be set.
   */
  dhcpConfig?: PrivateNetworkDHCPConfig
  /**
   * @deprecated For internal use only.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig', 'ipamConfig' could be set.
   */
  ipamConfig?: PrivateNetworkIpamConfig
  /**
   * IPAM ID of a pre-reserved IP address to assign to the Load Balancer on this Private Network. In the future, it will be possible to specify multiple IPs in this field (IPv4 and IPv6), for now only one ID of an IPv4 address is expected. When null, a new private IP address is created for the Load Balancer on this Private Network.
   */
  ipamIds?: string[]
}

/**
 * Add an ACL to a Load Balancer frontend.
 */
export type ZonedApiCreateAclRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Frontend ID to attach the ACL to.
   */
  frontendId: string
  /**
   * ACL name.
   */
  name?: string
  /**
   * Action to take when incoming traffic matches an ACL filter.
   */
  action: AclAction
  /**
   * ACL match filter object. One of `ip_subnet`, `ips_edge_services` or `http_filter` & `http_filter_value` are required.
   */
  match?: AclMatch
  /**
   * Priority of this ACL (ACLs are applied in ascending order, 0 is the first ACL executed).
   */
  index: number
  /**
   * ACL description.
   */
  description: string
}

export type ZonedApiCreateBackendRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Name for the backend.
   */
  name?: string
  /**
   * Protocol to be used by the backend when forwarding traffic to backend servers.
   */
  forwardProtocol: Protocol
  /**
   * Port to be used by the backend when forwarding traffic to backend servers.
   */
  forwardPort: number
  /**
   * Load balancing algorithm to be used when determining which backend server to forward new traffic to.
   */
  forwardPortAlgorithm: ForwardPortAlgorithm
  /**
   * Defines whether to activate sticky sessions (binding a particular session to a particular backend server) and the method to use if so. None disables sticky sessions. Cookie-based uses an HTTP cookie TO stick a session to a backend server. Table-based uses the source (client) IP address to stick a session to a backend server.
   */
  stickySessions: StickySessionsType
  /**
   * Cookie name for cookie-based sticky sessions.
   */
  stickySessionsCookieName: string
  /**
   * Object defining the health check to be carried out by the backend when checking the status and health of backend servers.
   */
  healthCheck: HealthCheck
  /**
   * List of backend server IP addresses (IPv4 or IPv6) the backend should forward traffic to.
   */
  serverIp: string[]
  /**
   * @deprecated Deprecated in favor of proxy_protocol field.
   */
  sendProxyV2?: boolean
  /**
   * Maximum allowed time for a backend server to process a request.
   */
  timeoutServer?: string
  /**
   * Maximum allowed time for establishing a connection to a backend server.
   */
  timeoutConnect?: string
  /**
   * Maximum allowed tunnel inactivity time after Websocket is established (takes precedence over client and server timeout).
   */
  timeoutTunnel?: string
  /**
   * Action to take when a backend server is marked as down.
   */
  onMarkedDownAction?: OnMarkedDownAction
  /**
   * Protocol to use between the Load Balancer and backend servers. Allows the backend servers to be informed of the client's real IP address. The PROXY protocol must be supported by the backend servers' software.
   */
  proxyProtocol?: ProxyProtocol
  /**
   * Scaleway Object Storage bucket website to be served as failover if all backend servers are down, e.g. failover-website.s3-website.fr-par.scw.cloud.
   */
  failoverHost?: string
  /**
   * Defines whether to enable SSL bridging between the Load Balancer and backend servers.
   */
  sslBridging?: boolean
  /**
   * Defines whether the server certificate verification should be ignored.
   */
  ignoreSslServerVerify?: boolean
  /**
   * Whether to use another backend server on each attempt.
   */
  redispatchAttemptCount?: number
  /**
   * Number of retries when a backend server connection failed.
   */
  maxRetries?: number
  /**
   * Maximum number of connections allowed per backend server.
   */
  maxConnections?: number
  /**
   * Maximum time for a request to be left pending in queue when `max_connections` is reached.
   */
  timeoutQueue?: string
}

export type ZonedApiCreateCertificateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Name for the certificate.
   */
  name?: string
  /**
   * Object to define a new Let's Encrypt certificate to be generated.
   *
   * One-of ('type'): at most one of 'letsencrypt', 'customCertificate' could be set.
   */
  letsencrypt?: CreateCertificateRequestLetsencryptConfig
  /**
   * Object to define an existing custom certificate to be imported.
   *
   * One-of ('type'): at most one of 'letsencrypt', 'customCertificate' could be set.
   */
  customCertificate?: CreateCertificateRequestCustomCertificate
}

export type ZonedApiCreateFrontendRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID (ID of the Load Balancer to attach the frontend to).
   */
  lbId: string
  /**
   * Name for the frontend.
   */
  name?: string
  /**
   * Port the frontend should listen on.
   */
  inboundPort: number
  /**
   * Backend ID (ID of the backend the frontend should pass traffic to).
   */
  backendId: string
  /**
   * Maximum allowed inactivity time on the client side.
   */
  timeoutClient?: string
  /**
   * @deprecated Certificate ID, deprecated in favor of certificate_ids array.
   */
  certificateId?: string
  /**
   * List of SSL/TLS certificate IDs to bind to the frontend.
   */
  certificateIds?: string[]
  /**
   * Defines whether to enable HTTP/3 protocol on the frontend.
   */
  enableHttp3: boolean
  /**
   * Rate limit for new connections established on this frontend. Use 0 value to disable, else value is connections per second.
   */
  connectionRateLimit?: number
  /**
   * Defines whether to enable access logs on the frontend.
   */
  enableAccessLogs: boolean
}

export type ZonedApiCreateIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * @deprecated Organization ID of the Organization where the IP address should be created.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string
  /**
   * Project ID of the Project where the IP address should be created.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string
  /**
   * Reverse DNS (domain name) for the IP address.
   */
  reverse?: string
  /**
   * If true, creates a Flexible IP with an ipv6 address.
   */
  isIpv6: boolean
  /**
   * List of tags for the IP.
   */
  tags?: string[]
}

export type ZonedApiCreateLbRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * @deprecated Scaleway Organization to create the Load Balancer in.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string
  /**
   * Scaleway Project to create the Load Balancer in.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string
  /**
   * Name for the Load Balancer.
   */
  name?: string
  /**
   * Description for the Load Balancer.
   */
  description: string
  /**
   * @deprecated ID of an existing flexible IP address to attach to the Load Balancer.
   */
  ipId?: string
  /**
   * Defines whether to automatically assign a flexible public IP to the Load Balancer. Default value is `true` (assign).
   */
  assignFlexibleIp?: boolean
  /**
   * Defines whether to automatically assign a flexible public IPv6 to the Load Balancer. Default value is `false` (do not assign).
   */
  assignFlexibleIpv6?: boolean
  /**
   * List of IP IDs to attach to the Load Balancer.
   */
  ipIds?: string[]
  /**
   * List of tags for the Load Balancer.
   */
  tags?: string[]
  /**
   * Load Balancer commercial offer type. Use the Load Balancer types endpoint to retrieve a list of available offer types.
   */
  type: string
  /**
   * Determines the minimal SSL version which needs to be supported on the client side, in an SSL/TLS offloading context. Intermediate is suitable for general-purpose servers with a variety of clients, recommended for almost all systems. Modern is suitable for services with clients that support TLS 1.3 and do not need backward compatibility. Old is compatible with a small number of very old clients and should be used only as a last resort.
   */
  sslCompatibilityLevel?: SSLCompatibilityLevel
}

export type ZonedApiCreateRouteRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the source frontend to create the route on.
   */
  frontendId: string
  /**
   * ID of the target backend for the route.
   */
  backendId: string
  /**
   * Object defining the match condition for a route to be applied. If an incoming client session matches the specified condition (i.e. it has a matching SNI value or HTTP Host header value), it will be passed to the target backend.
   */
  match?: RouteMatch
}

/**
 * Create a new alert subscriber (webhook or email).
 */
export type ZonedApiCreateSubscriberRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Subscriber name.
   */
  name: string
  /**
   * Email address configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be set.
   */
  emailConfig?: SubscriberEmailConfig
  /**
   * WebHook URI configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be set.
   */
  webhookConfig?: SubscriberWebhookConfig
  /**
   * @deprecated Organization ID to create the subscriber in.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string
  /**
   * Project ID to create the subscriber in.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string
}

export type ZonedApiDeleteAclRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ACL ID.
   */
  aclId: string
}

export type ZonedApiDeleteBackendRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the backend to delete.
   */
  backendId: string
}

export type ZonedApiDeleteCertificateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Certificate ID.
   */
  certificateId: string
}

export type ZonedApiDeleteFrontendRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the frontend to delete.
   */
  frontendId: string
}

export type ZonedApiDeleteLbRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the Load Balancer to delete.
   */
  lbId: string
  /**
   * Defines whether the Load Balancer's flexible IP should be deleted. Set to true to release the flexible IP, or false to keep it available in your account for future Load Balancers.
   */
  releaseIp: boolean
}

export type ZonedApiDeleteRouteRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Route ID.
   */
  routeId: string
}

export type ZonedApiDeleteSubscriberRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Subscriber ID.
   */
  subscriberId: string
}

export type ZonedApiDetachPrivateNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load balancer ID.
   */
  lbId: string
  /**
   * Set your instance private network id.
   */
  privateNetworkId: string
}

export type ZonedApiGetAclRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ACL ID.
   */
  aclId: string
}

export type ZonedApiGetBackendRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Backend ID.
   */
  backendId: string
}

export type ZonedApiGetCertificateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Certificate ID.
   */
  certificateId: string
}

export type ZonedApiGetFrontendRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Frontend ID.
   */
  frontendId: string
}

export type ZonedApiGetIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * IP address ID.
   */
  ipId: string
}

export type ZonedApiGetLbRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
}

/**
 * Get Load Balancer stats.
 */
export type ZonedApiGetLbStatsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * ID of the backend.
   */
  backendId?: string
}

export type ZonedApiGetRouteRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Route ID.
   */
  routeId: string
}

export type ZonedApiGetSubscriberRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Subscriber ID.
   */
  subscriberId: string
}

export type ZonedApiListAclsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Frontend ID (ACLs attached to this frontend will be returned in the response).
   */
  frontendId: string
  /**
   * Sort order of ACLs in the response.
   */
  orderBy?: ListAclRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * The number of ACLs to return.
   */
  pageSize?: number
  /**
   * ACL name to filter for.
   */
  name?: string
}

export type ZonedApiListBackendStatsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of items to return.
   */
  pageSize?: number
  /**
   * ID of the backend.
   */
  backendId?: string
}

export type ZonedApiListBackendsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Name of the backend to filter for.
   */
  name?: string
  /**
   * Sort order of backends in the response.
   */
  orderBy?: ListBackendsRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of backends to return.
   */
  pageSize?: number
}

export type ZonedApiListCertificatesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Sort order of certificates in the response.
   */
  orderBy?: ListCertificatesRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of certificates to return.
   */
  pageSize?: number
  /**
   * Certificate name to filter for, only certificates of this name will be returned.
   */
  name?: string
}

export type ZonedApiListFrontendsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Name of the frontend to filter for.
   */
  name?: string
  /**
   * Sort order of frontends in the response.
   */
  orderBy?: ListFrontendsRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of frontends to return.
   */
  pageSize?: number
}

export type ZonedApiListIPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of IP addresses to return.
   */
  pageSize?: number
  /**
   * IP address to filter for.
   */
  ipAddress?: string
  /**
   * Organization ID to filter for, only Load Balancer IP addresses from this Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for, only Load Balancer IP addresses from this Project will be returned.
   */
  projectId?: string
  /**
   * IP type to filter for.
   */
  ipType?: ListIpsRequestIpType
  /**
   * Tag to filter for, only IPs with one or more matching tags will be returned.
   */
  tags?: string[]
}

export type ZonedApiListLbPrivateNetworksRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Sort order of Private Network objects in the response.
   */
  orderBy?: ListPrivateNetworksRequestOrderBy
  /**
   * Number of objects to return.
   */
  pageSize?: number
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
}

export type ZonedApiListLbTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * The number of items to return.
   */
  pageSize?: number
}

export type ZonedApiListLbsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer name to filter for.
   */
  name?: string
  /**
   * Sort order of Load Balancers in the response.
   */
  orderBy?: ListLbsRequestOrderBy
  /**
   * Number of Load Balancers to return.
   */
  pageSize?: number
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Organization ID to filter for, only Load Balancers from this Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for, only Load Balancers from this Project will be returned.
   */
  projectId?: string
  /**
   * Filter by tag, only Load Balancers with one or more matching tags will be returned.
   */
  tags?: string[]
}

export type ZonedApiListRoutesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Sort order of routes in the response.
   */
  orderBy?: ListRoutesRequestOrderBy
  /**
   * The number of route objects to return.
   */
  pageSize?: number
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Frontend ID to filter for, only Routes from this Frontend will be returned.
   */
  frontendId?: string
}

export type ZonedApiListSubscriberRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Sort order of subscribers in the response.
   */
  orderBy?: ListSubscriberRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * The number of items to return.
   */
  pageSize?: number
  /**
   * Subscriber name to search for.
   */
  name?: string
  /**
   * Filter subscribers by Organization ID.
   */
  organizationId?: string
  /**
   * Filter subscribers by Project ID.
   */
  projectId?: string
}

export type ZonedApiMigrateLbRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Load Balancer type to migrate to (use the List all Load Balancer offer types endpoint to get a list of available offer types).
   */
  type: string
}

export type ZonedApiReleaseIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * IP address ID.
   */
  ipId: string
}

export type ZonedApiRemoveBackendServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * List of IP addresses to remove from backend servers.
   */
  serverIp: string[]
}

export type ZonedApiSetAclsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Frontend ID.
   */
  frontendId: string
  /**
   * List of ACLs for this frontend. Any other existing ACLs on this frontend will be removed.
   */
  acls: AclSpec[]
}

export type ZonedApiSetBackendServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * List of IP addresses for backend servers. Any other existing backend servers will be removed.
   */
  serverIp: string[]
}

export type ZonedApiSubscribeToLbRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Subscriber ID.
   */
  subscriberId: string
}

export type ZonedApiUnsubscribeFromLbRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
}

export type ZonedApiUpdateAclRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ACL ID.
   */
  aclId: string
  /**
   * ACL name.
   */
  name: string
  /**
   * Action to take when incoming traffic matches an ACL filter.
   */
  action: AclAction
  /**
   * ACL match filter object. One of `ip_subnet`, `ips_edge_services` or `http_filter` & `http_filter_value` are required.
   */
  match?: AclMatch
  /**
   * Priority of this ACL (ACLs are applied in ascending order, 0 is the first ACL executed).
   */
  index: number
  /**
   * ACL description.
   */
  description?: string
}

export type ZonedApiUpdateBackendRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * Backend name.
   */
  name: string
  /**
   * Protocol to be used by the backend when forwarding traffic to backend servers.
   */
  forwardProtocol: Protocol
  /**
   * Port to be used by the backend when forwarding traffic to backend servers.
   */
  forwardPort: number
  /**
   * Load balancing algorithm to be used when determining which backend server to forward new traffic to.
   */
  forwardPortAlgorithm: ForwardPortAlgorithm
  /**
   * Defines whether to activate sticky sessions (binding a particular session to a particular backend server) and the method to use if so. None disables sticky sessions. Cookie-based uses an HTTP cookie to stick a session to a backend server. Table-based uses the source (client) IP address to stick a session to a backend server.
   */
  stickySessions: StickySessionsType
  /**
   * Cookie name for cookie-based sticky sessions.
   */
  stickySessionsCookieName: string
  /**
   * @deprecated Deprecated in favor of proxy_protocol field.
   */
  sendProxyV2?: boolean
  /**
   * Maximum allowed time for a backend server to process a request.
   */
  timeoutServer?: string
  /**
   * Maximum allowed time for establishing a connection to a backend server.
   */
  timeoutConnect?: string
  /**
   * Maximum allowed tunnel inactivity time after Websocket is established (takes precedence over client and server timeout).
   */
  timeoutTunnel?: string
  /**
   * Action to take when a backend server is marked as down.
   */
  onMarkedDownAction?: OnMarkedDownAction
  /**
   * Protocol to use between the Load Balancer and backend servers. Allows the backend servers to be informed of the client's real IP address. The PROXY protocol must be supported by the backend servers' software.
   */
  proxyProtocol?: ProxyProtocol
  /**
   * Scaleway Object Storage bucket website to be served as failover if all backend servers are down, e.g. failover-website.s3-website.fr-par.scw.cloud.
   */
  failoverHost?: string
  /**
   * Defines whether to enable SSL bridging between the Load Balancer and backend servers.
   */
  sslBridging?: boolean
  /**
   * Defines whether the server certificate verification should be ignored.
   */
  ignoreSslServerVerify?: boolean
  /**
   * Whether to use another backend server on each attempt.
   */
  redispatchAttemptCount?: number
  /**
   * Number of retries when a backend server connection failed.
   */
  maxRetries?: number
  /**
   * Maximum number of connections allowed per backend server.
   */
  maxConnections?: number
  /**
   * Maximum time for a request to be left pending in queue when `max_connections` is reached.
   */
  timeoutQueue?: string
}

export type ZonedApiUpdateCertificateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Certificate ID.
   */
  certificateId: string
  /**
   * Certificate name.
   */
  name: string
}

export type ZonedApiUpdateFrontendRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Frontend ID.
   */
  frontendId: string
  /**
   * Frontend name.
   */
  name: string
  /**
   * Port the frontend should listen on.
   */
  inboundPort: number
  /**
   * Backend ID (ID of the backend the frontend should pass traffic to).
   */
  backendId: string
  /**
   * Maximum allowed inactivity time on the client side.
   */
  timeoutClient?: string
  /**
   * @deprecated Certificate ID, deprecated in favor of certificate_ids array.
   */
  certificateId?: string
  /**
   * List of SSL/TLS certificate IDs to bind to the frontend.
   */
  certificateIds?: string[]
  /**
   * Defines whether to enable HTTP/3 protocol on the frontend.
   */
  enableHttp3: boolean
  /**
   * Rate limit for new connections established on this frontend. Use 0 value to disable, else value is connections per second.
   */
  connectionRateLimit?: number
  /**
   * Defines whether to enable access logs on the frontend.
   */
  enableAccessLogs?: boolean
}

export type ZonedApiUpdateHealthCheckRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Backend ID.
   */
  backendId: string
  /**
   * Port to use for the backend server health check.
   */
  port: number
  /**
   * Time to wait between two consecutive health checks.
   */
  checkDelay?: string
  /**
   * Maximum time a backend server has to reply to the health check.
   */
  checkTimeout?: string
  /**
   * Number of consecutive unsuccessful health checks after which the server will be considered dead.
   */
  checkMaxRetries: number
  /**
   * Defines whether proxy protocol should be activated for the health check.
   */
  checkSendProxy: boolean
  /**
   * Object to configure a basic TCP health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  tcpConfig?: HealthCheckTcpConfig
  /**
   * Object to configure a MySQL health check. The check requires MySQL >=3.22 or <9.0. For older or newer versions, use a TCP health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  mysqlConfig?: HealthCheckMysqlConfig
  /**
   * Object to configure a PostgreSQL health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  pgsqlConfig?: HealthCheckPgsqlConfig
  /**
   * Object to configure an LDAP health check. The response is analyzed to find the LDAPv3 response message.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  ldapConfig?: HealthCheckLdapConfig
  /**
   * Object to configure a Redis health check. The response is analyzed to find the +PONG response message.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  redisConfig?: HealthCheckRedisConfig
  /**
   * Object to configure an HTTP health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  httpConfig?: HealthCheckHttpConfig
  /**
   * Object to configure an HTTPS health check.
   *
   * One-of ('config'): at most one of 'tcpConfig', 'mysqlConfig', 'pgsqlConfig', 'ldapConfig', 'redisConfig', 'httpConfig', 'httpsConfig' could be set.
   */
  httpsConfig?: HealthCheckHttpsConfig
  /**
   * Time to wait between two consecutive health checks when a backend server is in a transient state (going UP or DOWN).
   */
  transientCheckDelay?: string
}

export type ZonedApiUpdateIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * IP address ID.
   */
  ipId: string
  /**
   * Reverse DNS (domain name) for the IP address.
   */
  reverse?: string
  /**
   * ID of the server on which to attach the flexible IP.
   */
  lbId?: string
  /**
   * List of tags for the IP.
   */
  tags?: string[]
}

export type ZonedApiUpdateLbRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Load Balancer ID.
   */
  lbId: string
  /**
   * Load Balancer name.
   */
  name: string
  /**
   * Load Balancer description.
   */
  description: string
  /**
   * List of tags for the Load Balancer.
   */
  tags?: string[]
  /**
   * Determines the minimal SSL version which needs to be supported on the client side, in an SSL/TLS offloading context. Intermediate is suitable for general-purpose servers with a variety of clients, recommended for almost all systems. Modern is suitable for services with clients that support TLS 1.3 and don't need backward compatibility. Old is compatible with a small number of very old clients and should be used only as a last resort.
   */
  sslCompatibilityLevel?: SSLCompatibilityLevel
}

export type ZonedApiUpdateRouteRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Route ID.
   */
  routeId: string
  /**
   * ID of the target backend for the route.
   */
  backendId: string
  /**
   * Object defining the match condition for a route to be applied. If an incoming client session matches the specified condition (i.e. it has a matching SNI value or HTTP Host header value), it will be passed to the target backend.
   */
  match?: RouteMatch
}

export type ZonedApiUpdateSubscriberRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Subscriber ID.
   */
  subscriberId: string
  /**
   * Subscriber name.
   */
  name: string
  /**
   * Email address configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be set.
   */
  emailConfig?: SubscriberEmailConfig
  /**
   * Webhook URI configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be set.
   */
  webhookConfig?: SubscriberWebhookConfig
}
