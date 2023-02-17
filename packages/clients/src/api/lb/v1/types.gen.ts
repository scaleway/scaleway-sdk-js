// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region, Zone } from '../../../bridge'

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

/**
 * The PROXY protocol informs the other end about the incoming connection, so
 * that it can know the client's address or the public address it accessed to,
 * whatever the upper layer protocol.
 *
 * `proxy_protocol_none` Disable proxy protocol. `proxy_protocol_v1` Version one
 * (text format). `proxy_protocol_v2` Version two (binary format).
 * `proxy_protocol_v2_ssl` Version two with SSL connection.
 * `proxy_protocol_v2_ssl_cn` Version two with SSL connection and common name
 * information.
 */
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

/**
 * The use of Access Control Lists (ACL) provide a flexible solution to perform
 * a action generally consist in blocking or allow a request based on ip (and
 * URL on HTTP)
 */
export interface Acl {
  /** ID of your ACL ressource */
  id: string
  /** Name of you ACL ressource */
  name: string
  /**
   * The ACL match rule. At least `ip_subnet` or `http_filter` and
   * `http_filter_value` are required
   */
  match?: AclMatch
  /** Action to undertake when an ACL filter matches */
  action?: AclAction
  /** See the Frontend object description */
  frontend?: Frontend
  /** Order between your Acls (ascending order, 0 is first acl executed) */
  index: number
  /** Date at which the ACL was created */
  createdAt?: Date
  /** Date at which the ACL was last updated */
  updatedAt?: Date
  /** Description of your ACL ressource */
  description: string
}

/** Acl action */
export interface AclAction {
  /** The action type */
  type: AclActionType
  /** Redirect parameters when using an ACL with `redirect` action */
  redirect?: AclActionRedirect
}

/** Acl action redirect */
export interface AclActionRedirect {
  /** Redirect type */
  type: AclActionRedirectRedirectType
  /**
   * An URL can be used in case of a location redirect (e.g.
   * `https://scaleway.com` will redirect to this same URL). A scheme name (e.g.
   * `https`, `http`, `ftp`, `git`) will replace the request's original scheme.
   * This can be useful to implement HTTP to HTTPS redirects. Placeholders can
   * be used when using a `location` redirect in order to insert original
   * request's parts, these are:
   *
   * - `{{ host }}` for the current request's Host header
   * - `{{ query }}` for the current request's query string
   * - `{{ path }}` for the current request's URL path
   * - `{{ scheme }}` for the current request's scheme
   */
  target: string
  /**
   * HTTP redirect code to use. Valid values are 301, 302, 303, 307 and 308.
   * Default value is 302
   */
  code?: number
}

/** Acl match */
export interface AclMatch {
  /** A list of IPs or CIDR v4/v6 addresses of the client of the session to match */
  ipSubnet: string[]
  /**
   * The HTTP filter to match. This filter is supported only if your backend
   * supports HTTP forwarding. It extracts the request's URL path, which starts
   * at the first slash and ends before the question mark (without the host
   * part).
   */
  httpFilter: AclHttpFilter
  /** A list of possible values to match for the given HTTP filter */
  httpFilterValue: string[]
  /**
   * A exra parameter. You can use this field with http_header_match acl type to
   * set the header name to filter
   */
  httpFilterOption?: string
  /** If set to `true`, the ACL matching condition will be of type "UNLESS" */
  invert: boolean
}

/** Acl spec */
export interface AclSpec {
  /** Name of your ACL resource */
  name: string
  /** Action to undertake when an ACL filter matches */
  action: AclAction
  /**
   * The ACL match rule. At least `ip_subnet` or `http_filter` and
   * `http_filter_value` are required
   */
  match?: AclMatch
  /** Order between your Acls (ascending order, 0 is first acl executed) */
  index: number
  /** Description of your ACL ressource */
  description: string
}

/** Backend */
export interface Backend {
  /** Load balancer Backend ID */
  id: string
  /** Load balancer Backend name */
  name: string
  /** Type of backend protocol */
  forwardProtocol: Protocol
  /** User sessions will be forwarded to this port of backend servers */
  forwardPort: number
  /** Load balancer algorithm used to select the backend server */
  forwardPortAlgorithm: ForwardPortAlgorithm
  /** Enables cookie-based session persistence */
  stickySessions: StickySessionsType
  /** Cookie name for sticky sessions */
  stickySessionsCookieName: string
  /** Health Check used to verify backend servers status */
  healthCheck?: HealthCheck
  /** Servers IP addresses attached to the backend */
  pool: string[]
  /** Load balancer the backend is attached to */
  lb?: Lb
  /** @deprecated Deprecated in favor of proxy_protocol field */
  sendProxyV2?: boolean
  /**
   * Maximum server connection inactivity time (allowed time the server has to
   * process the request)
   */
  timeoutServer?: string
  /** Maximum initial server connection establishment time */
  timeoutConnect?: string
  /**
   * Maximum tunnel inactivity time after Websocket is established (take
   * precedence over client and server timeout)
   */
  timeoutTunnel?: string
  /** Defines what occurs when a backend server is marked down */
  onMarkedDownAction: OnMarkedDownAction
  /**
   * PROXY protocol, forward client's address (must be supported by backend
   * servers software)
   */
  proxyProtocol: ProxyProtocol
  /** Date at which the backend was created */
  createdAt?: Date
  /** Date at which the backend was updated */
  updatedAt?: Date
  /**
   * Scaleway S3 bucket website to be served in case all backend servers are
   * down
   */
  failoverHost?: string
  /** Enable SSL between load balancer and backend servers */
  sslBridging?: boolean
  /** Whether or not the server certificate should be verified */
  ignoreSslServerVerify?: boolean
}

/**
 * State and statistics of your backend server like last health check status,
 * server uptime, result state of your backend server
 */
export interface BackendServerStats {
  /** ID of your Load balancer cluster server */
  instanceId: string
  /** ID of your Backend */
  backendId: string
  /** IPv4 or IPv6 address of the server backend */
  ip: string
  /** Server operational state (stopped/starting/running/stopping) */
  serverState: BackendServerStatsServerState
  /** Time since last operational change */
  serverStateChangedAt?: Date
  /** Last health check status (unknown/neutral/failed/passed/condpass) */
  lastHealthCheckStatus: BackendServerStatsHealthCheckStatus
}

/** SSL certificate */
export interface Certificate {
  /** Type of certificate (Let's encrypt or custom) */
  type: CertificateType
  /** Certificate ID */
  id: string
  /** Main domain name of certificate */
  commonName: string
  /** Alternative domain names */
  subjectAlternativeName: string[]
  /** Identifier (SHA-1) of the certificate */
  fingerprint: string
  /** Validity bounds */
  notValidBefore?: Date
  /** Validity bounds */
  notValidAfter?: Date
  /** Status of certificate */
  status: CertificateStatus
  /** Load balancer object */
  lb?: Lb
  /** Certificate name */
  name: string
  /** Date at which the certificate was created */
  createdAt?: Date
  /** Date at which the certificate was last updated */
  updatedAt?: Date
  /**
   * Additional information on the status (e.g. in case of certificate
   * generation failure)
   */
  statusDetails?: string
}

/** Import a custom SSL certificate */
export interface CreateCertificateRequestCustomCertificate {
  /**
   * The full PEM-formatted include an entire certificate chain including public
   * key, private key, and optionally certificate authorities.
   */
  certificateChain: string
}

/** Generate a new SSL certificate using Let's Encrypt. */
export interface CreateCertificateRequestLetsencryptConfig {
  /**
   * Main domain name of certificate (make sure this domain exists and resolves
   * to your load balancer HA IP)
   */
  commonName: string
  /**
   * Alternative domain names (make sure all domain names exists and resolves to
   * your load balancer HA IP)
   */
  subjectAlternativeName: string[]
}

/** Frontend */
export interface Frontend {
  /** Load balancer Frontend ID */
  id: string
  /** Load balancer Frontend name */
  name: string
  /** TCP port to listen on the front side */
  inboundPort: number
  /** Backend resource the Frontend is attached to */
  backend?: Backend
  /** Load balancer the frontend is attached to */
  lb?: Lb
  /** Maximum inactivity time on the client side */
  timeoutClient?: string
  /** @deprecated Certificate, deprecated in favor of certificate_ids array */
  certificate?: Certificate
  /** List of certificate IDs to bind on the frontend */
  certificateIds: string[]
  /** Date at which the frontend was created */
  createdAt?: Date
  /** Date at which the frontend was updated */
  updatedAt?: Date
  /** Whether or not HTTP3 protocol is enabled */
  enableHttp3: boolean
}

/** Health check */
export interface HealthCheck {
  /**
   * The check requires MySQL >=3.22, for older versions, use TCP check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'tcpConfig', 'pgsqlConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  mysqlConfig?: HealthCheckMysqlConfig
  /**
   * The response is analyzed to find an LDAPv3 response message.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'tcpConfig', 'pgsqlConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  ldapConfig?: HealthCheckLdapConfig
  /**
   * The response is analyzed to find the +PONG response message.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'tcpConfig', 'pgsqlConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  redisConfig?: HealthCheckRedisConfig
  /**
   * Number of consecutive unsuccessful health checks, after which the server
   * will be considered dead
   */
  checkMaxRetries: number
  /**
   * Basic TCP health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'tcpConfig', 'pgsqlConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  tcpConfig?: HealthCheckTcpConfig
  /**
   * PostgreSQL health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'tcpConfig', 'pgsqlConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  pgsqlConfig?: HealthCheckPgsqlConfig
  /**
   * HTTP health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'tcpConfig', 'pgsqlConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  httpConfig?: HealthCheckHttpConfig
  /**
   * HTTPS health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'tcpConfig', 'pgsqlConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  httpsConfig?: HealthCheckHttpsConfig
  /** TCP port to use for the backend server health check */
  port: number
  /** Maximum time a backend server has to reply to the health check */
  checkTimeout?: string
  /** Time between two consecutive health checks */
  checkDelay?: string
  /**
   * It defines whether the health check should be done considering the proxy
   * protocol
   */
  checkSendProxy: boolean
}

/** Health check. http config */
export interface HealthCheckHttpConfig {
  /** HTTP uri used for Healthcheck to the backend servers */
  uri: string
  /** HTTP method used for Healthcheck to the backend servers */
  method: string
  /**
   * A health check response will be considered as valid if the response's
   * status code match
   */
  code?: number
  /** HTTP host header used with the request */
  hostHeader: string
}

/** Health check. https config */
export interface HealthCheckHttpsConfig {
  /** HTTP uri used for Healthcheck to the backend servers */
  uri: string
  /** HTTP method used for Healthcheck to the backend servers */
  method: string
  /**
   * A health check response will be considered as valid if the response's
   * status code match
   */
  code?: number
  /** HTTP host header used with the request */
  hostHeader: string
  /** Specifies the SNI to use to do health checks over SSL */
  sni: string
}

export interface HealthCheckLdapConfig {}

export interface HealthCheckMysqlConfig {
  user: string
}

export interface HealthCheckPgsqlConfig {
  user: string
}

export interface HealthCheckRedisConfig {}

export interface HealthCheckTcpConfig {}

/** Instance */
export interface Instance {
  /** Underlying Instance ID */
  id: string
  /** Instance status */
  status: InstanceStatus
  /** Instance IP address */
  ipAddress: string
  /** Date at which the Instance was created */
  createdAt?: Date
  /** Date at which the Instance was updated */
  updatedAt?: Date
  /** @deprecated The region the instance is in */
  region?: Region
  /** The zone the instance is in */
  zone: Zone
}

/** Ip */
export interface Ip {
  /** Flexible IP ID */
  id: string
  /** IP address */
  ipAddress: string
  /** Organization ID */
  organizationId: string
  /** Project ID */
  projectId: string
  /** Load balancer ID */
  lbId?: string
  /** Reverse FQDN */
  reverse: string
  /** @deprecated The region the Flexible IP is in */
  region?: Region
  /** The zone the Flexible IP is in */
  zone: Zone
}

/** Lb */
export interface Lb {
  /** Underlying Instance ID */
  id: string
  /** Load balancer name */
  name: string
  /** Load balancer description */
  description: string
  /** Load balancer status */
  status: LbStatus
  /** List of underlying instances */
  instances: Instance[]
  /** Organization ID */
  organizationId: string
  /** Project ID */
  projectId: string
  /** List of IPs attached to the Load balancer */
  ip: Ip[]
  /** Load balancer tags */
  tags: string[]
  /** Number of frontends the Load balancer has */
  frontendCount: number
  /** Number of backends the Load balancer has */
  backendCount: number
  /** Load balancer offer type */
  type: string
  /** Subscriber information */
  subscriber?: Subscriber
  /**
   * Determines the minimal SSL version which needs to be supported on client
   * side
   */
  sslCompatibilityLevel: SSLCompatibilityLevel
  /** Date at which the Load balancer was created */
  createdAt?: Date
  /** Date at which the Load balancer was updated */
  updatedAt?: Date
  /** Number of private networks attached to the Load balancer */
  privateNetworkCount: number
  /** Number of routes the Load balancer has */
  routeCount: number
  /** @deprecated The region the Load balancer is in */
  region?: Region
  /** The zone the Load balancer is in */
  zone: Zone
}

/** Lb stats */
export interface LbStats {
  /** List stats object of your Load balancer */
  backendServersStats: BackendServerStats[]
}

export interface LbType {
  name: string
  stockStatus: LbTypeStock
  description: string
  /** @deprecated */
  region?: Region
  zone: Zone
}

/** List acl response */
export interface ListAclResponse {
  /** List of Acl object (see Acl object description) */
  acls: Acl[]
  /** The total number of items */
  totalCount: number
}

/** List backend stats response */
export interface ListBackendStatsResponse {
  /** List backend stats object of your Load balancer */
  backendServersStats: BackendServerStats[]
  /** The total number of items */
  totalCount: number
}

/** List backends response */
export interface ListBackendsResponse {
  /** List Backend objects of a load balancer */
  backends: Backend[]
  /** Total count, wihtout pagination */
  totalCount: number
}

/** List certificates response */
export interface ListCertificatesResponse {
  /** List of certificates */
  certificates: Certificate[]
  /** The total number of items */
  totalCount: number
}

/** List frontends response */
export interface ListFrontendsResponse {
  /** List frontends object of your Load balancer */
  frontends: Frontend[]
  /** Total count, wihtout pagination */
  totalCount: number
}

/** List ips response */
export interface ListIpsResponse {
  /** List IP address object */
  ips: Ip[]
  /** Total count, wihtout pagination */
  totalCount: number
}

/** List lb private networks response */
export interface ListLbPrivateNetworksResponse {
  /** Private networks of a given load balancer */
  privateNetwork: PrivateNetwork[]
  /** The total number of items */
  totalCount: number
}

/** List lb types response */
export interface ListLbTypesResponse {
  /** Different types of LB */
  lbTypes: LbType[]
  /** The total number of items */
  totalCount: number
}

/** Get list of Load balancers */
export interface ListLbsResponse {
  /** List of Load balancer */
  lbs: Lb[]
  /** The total number of items */
  totalCount: number
}

/** List routes response */
export interface ListRoutesResponse {
  /** List of Routes object */
  routes: Route[]
  /** The total number of items */
  totalCount: number
}

/** List subscriber response */
export interface ListSubscriberResponse {
  /** List of Subscribers object */
  subscribers: Subscriber[]
  /** The total number of items */
  totalCount: number
}

/** Private network */
export interface PrivateNetwork {
  /** LoadBalancer object */
  lb?: Lb
  /**
   * Local ip address of load balancer instance.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig' could be
   * set.
   */
  staticConfig?: PrivateNetworkStaticConfig
  /**
   * Value set to true if load balancer instance use a DHCP.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig' could be
   * set.
   */
  dhcpConfig?: PrivateNetworkDHCPConfig
  /** Instance private network id */
  privateNetworkId: string
  /** Status (running, to create...) of private network connection */
  status: PrivateNetworkStatus
  /** Date at which the PN was created */
  createdAt?: Date
  /** Date at which the PN was last updated */
  updatedAt?: Date
}

export interface PrivateNetworkDHCPConfig {}

export interface PrivateNetworkIpamConfig {}

export interface PrivateNetworkStaticConfig {
  ipAddress: string[]
}

/** Route */
export interface Route {
  /** Id of match ressource */
  id: string
  /** Id of frontend */
  frontendId: string
  /** Id of backend */
  backendId: string
  /** Value to match a redirection */
  match?: RouteMatch
  /** Date at which the route was created */
  createdAt?: Date
  /** Date at which the route was last updated */
  updatedAt?: Date
}

/** Route. match */
export interface RouteMatch {
  /**
   * Server Name Indication TLS extension (SNI) field from an incoming
   * connection made via an SSL/TLS transport layer.
   *
   * One-of ('matchType'): at most one of 'sni', 'hostHeader' could be set.
   */
  sni?: string
  /**
   * The Host request header specifies the host of the server to which the
   * request is being sent.
   *
   * One-of ('matchType'): at most one of 'sni', 'hostHeader' could be set.
   */
  hostHeader?: string
}

/** Set acls response */
export interface SetAclsResponse {
  /** List of ACLs object (see ACL object description) */
  acls: Acl[]
  /** The total number of items */
  totalCount: number
}

/** Subscriber */
export interface Subscriber {
  /** Subscriber ID */
  id: string
  /** Subscriber name */
  name: string
  /**
   * Email address of subscriber.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be
   * set.
   */
  emailConfig?: SubscriberEmailConfig
  /**
   * WebHook URI of subscriber.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be
   * set.
   */
  webhookConfig?: SubscriberWebhookConfig
}

/** Email alert of subscriber */
export interface SubscriberEmailConfig {
  /** Email who receive alert */
  email: string
}

/** Webhook alert of subscriber */
export interface SubscriberWebhookConfig {
  /** URI who receive POST request */
  uri: string
}

export type ListLbsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Use this to search by name */
  name?: string
  /** Response order */
  orderBy?: ListLbsRequestOrderBy
  /** The number of items to return */
  pageSize?: number
  /** Page number */
  page?: number
  /** Filter LBs by organization ID */
  organizationId?: string
  /** Filter LBs by project ID */
  projectId?: string
}

export type CreateLbRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /**
   * @deprecated Owner of resources.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * Assign the resource to a project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
  /** Resource names */
  name?: string
  /** Resource description */
  description: string
  /**
   * Just like for compute instances, when you destroy a load balancer, you can
   * keep its highly available IP address and reuse it for another load balancer
   * later
   */
  ipId?: string
  /** List of keyword */
  tags?: string[]
  /** Load balancer offer type */
  type: string
  /**
   * Enforces minimal SSL version (in SSL/TLS offloading context).
   *
   * - `intermediate` General-purpose servers with a variety of clients,
   *   recommended for almost all systems (Supports Firefox 27, Android 4.4.2,
   *   Chrome 31, Edge, IE 11 on Windows 7, Java 8u31, OpenSSL 1.0.1, Opera 20,
   *   and Safari 9).
   * - `modern` Services with clients that support TLS 1.3 and don't need backward
   *   compatibility (Firefox 63, Android 10.0, Chrome 70, Edge 75, Java 11,
   *   OpenSSL 1.1.1, Opera 57, and Safari 12.1).
   * - `old` Compatible with a number of very old clients, and should be used only
   *   as a last resort (Firefox 1, Android 2.3, Chrome 1, Edge 12, IE8 on
   *   Windows XP, Java 6, OpenSSL 0.9.8, Opera 5, and Safari 1).
   */
  sslCompatibilityLevel?: SSLCompatibilityLevel
}

export type GetLbRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
}

export type UpdateLbRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Resource name */
  name: string
  /** Resource description */
  description: string
  /** List of keywords */
  tags?: string[]
  /**
   * Enforces minimal SSL version (in SSL/TLS offloading context).
   *
   * - `intermediate` General-purpose servers with a variety of clients,
   *   recommended for almost all systems (Supports Firefox 27, Android 4.4.2,
   *   Chrome 31, Edge, IE 11 on Windows 7, Java 8u31, OpenSSL 1.0.1, Opera 20,
   *   and Safari 9).
   * - `modern` Services with clients that support TLS 1.3 and don't need backward
   *   compatibility (Firefox 63, Android 10.0, Chrome 70, Edge 75, Java 11,
   *   OpenSSL 1.1.1, Opera 57, and Safari 12.1).
   * - `old` Compatible with a number of very old clients, and should be used only
   *   as a last resort (Firefox 1, Android 2.3, Chrome 1, Edge 12, IE8 on
   *   Windows XP, Java 6, OpenSSL 0.9.8, Opera 5, and Safari 1).
   */
  sslCompatibilityLevel?: SSLCompatibilityLevel
}

export type DeleteLbRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Set true if you don't want to keep this IP address */
  releaseIp: boolean
}

export type MigrateLbRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Load balancer type (check /lb-types to list all type) */
  type: string
}

export type ListIPsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
  /** Use this to search by IP address */
  ipAddress?: string
  /** Filter IPs by organization id */
  organizationId?: string
  /** Filter IPs by project ID */
  projectId?: string
}

export type CreateIpRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /**
   * @deprecated Owner of resources.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * Assign the resource to a project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
  /** Reverse domain name */
  reverse?: string
}

export type GetIpRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** IP address ID */
  ipId: string
}

export type ReleaseIpRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** IP address ID */
  ipId: string
}

export type UpdateIpRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** IP address ID */
  ipId: string
  /** Reverse DNS */
  reverse?: string
}

export type ListBackendsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Use this to search by name */
  name?: string
  /** Response order */
  orderBy?: ListBackendsRequestOrderBy
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
}

export type CreateBackendRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Resource name */
  name?: string
  /** Backend protocol. TCP or HTTP */
  forwardProtocol: Protocol
  /** User sessions will be forwarded to this port of backend servers */
  forwardPort: number
  /** Load balancing algorithm */
  forwardPortAlgorithm: ForwardPortAlgorithm
  /** Enables cookie-based session persistence */
  stickySessions: StickySessionsType
  /** Cookie name for sticky sessions */
  stickySessionsCookieName: string
  /** See the Healthcheck object description */
  healthCheck: HealthCheck
  /** Backend server IP addresses list (IPv4 or IPv6) */
  serverIp: string[]
  /** @deprecated Deprecated in favor of proxy_protocol field ! */
  sendProxyV2?: boolean
  /**
   * Maximum server connection inactivity time (allowed time the server has to
   * process the request)
   */
  timeoutServer?: string
  /** Maximum initial server connection establishment time */
  timeoutConnect?: string
  /**
   * Maximum tunnel inactivity time after Websocket is established (take
   * precedence over client and server timeout)
   */
  timeoutTunnel?: string
  /** Modify what occurs when a backend server is marked down */
  onMarkedDownAction?: OnMarkedDownAction
  /**
   * The PROXY protocol informs the other end about the incoming connection, so
   * that it can know the client's address or the public address it accessed to,
   * whatever the upper layer protocol.
   *
   * `proxy_protocol_none` Disable proxy protocol. `proxy_protocol_v1` Version
   * one (text format). `proxy_protocol_v2` Version two (binary format).
   * `proxy_protocol_v2_ssl` Version two with SSL connection.
   * `proxy_protocol_v2_ssl_cn` Version two with SSL connection and common name
   * information.
   */
  proxyProtocol?: ProxyProtocol
  /**
   * Only the host part of the Scaleway S3 bucket website is expected. E.g.
   * `failover-website.s3-website.fr-par.scw.cloud` if your bucket website URL
   * is `https://failover-website.s3-website.fr-par.scw.cloud/`.
   */
  failoverHost?: string
  /** Enable SSL between load balancer and backend servers */
  sslBridging?: boolean
  /** Set to true to ignore server certificate verification */
  ignoreSslServerVerify?: boolean
}

export type GetBackendRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Backend ID */
  backendId: string
}

export type UpdateBackendRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Backend ID to update */
  backendId: string
  /** Resource name */
  name: string
  /** Backend protocol. TCP or HTTP */
  forwardProtocol: Protocol
  /** User sessions will be forwarded to this port of backend servers */
  forwardPort: number
  /** Load balancing algorithm */
  forwardPortAlgorithm: ForwardPortAlgorithm
  /** Enable cookie-based session persistence */
  stickySessions: StickySessionsType
  /** Cookie name for sticky sessions */
  stickySessionsCookieName: string
  /** @deprecated Deprecated in favor of proxy_protocol field! */
  sendProxyV2?: boolean
  /**
   * Maximum server connection inactivity time (allowed time the server has to
   * process the request)
   */
  timeoutServer?: string
  /** Maximum initial server connection establishment time */
  timeoutConnect?: string
  /**
   * Maximum tunnel inactivity time after Websocket is established (take
   * precedence over client and server timeout)
   */
  timeoutTunnel?: string
  /** Modify what occurs when a backend server is marked down */
  onMarkedDownAction?: OnMarkedDownAction
  /**
   * The PROXY protocol informs the other end about the incoming connection, so
   * that it can know the client's address or the public address it accessed to,
   * whatever the upper layer protocol is.
   *
   * `proxy_protocol_none` Disable proxy protocol. `proxy_protocol_v1` Version
   * one (text format). `proxy_protocol_v2` Version two (binary format).
   * `proxy_protocol_v2_ssl` Version two with SSL connection.
   * `proxy_protocol_v2_ssl_cn` Version two with SSL connection and common name
   * information.
   */
  proxyProtocol?: ProxyProtocol
  /**
   * Only the host part of the Scaleway S3 bucket website is expected. Example:
   * `failover-website.s3-website.fr-par.scw.cloud` if your bucket website URL
   * is `https://failover-website.s3-website.fr-par.scw.cloud/`.
   */
  failoverHost?: string
  /** Enable SSL between load balancer and backend servers */
  sslBridging?: boolean
  /** Set to true to ignore server certificate verification */
  ignoreSslServerVerify?: boolean
}

export type DeleteBackendRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the backend to delete */
  backendId: string
}

export type AddBackendServersRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Backend ID */
  backendId: string
  /** Set all IPs to add on your backend */
  serverIp: string[]
}

export type RemoveBackendServersRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Backend ID */
  backendId: string
  /** Set all IPs to remove of your backend */
  serverIp: string[]
}

export type SetBackendServersRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Backend ID */
  backendId: string
  /** Set all IPs to add on your backend and remove all other */
  serverIp: string[]
}

export type UpdateHealthCheckRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Backend ID */
  backendId: string
  /** Specify the port used to health check */
  port: number
  /** Time between two consecutive health checks */
  checkDelay: string
  /** Maximum time a backend server has to reply to the health check */
  checkTimeout: string
  /**
   * Number of consecutive unsuccessful health checks, after which the server
   * will be considered dead
   */
  checkMaxRetries: number
  /**
   * The check requires MySQL >=3.22, for older version, please use TCP check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  mysqlConfig?: HealthCheckMysqlConfig
  /**
   * The response is analyzed to find an LDAPv3 response message.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  ldapConfig?: HealthCheckLdapConfig
  /**
   * The response is analyzed to find the +PONG response message.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  redisConfig?: HealthCheckRedisConfig
  /**
   * PostgreSQL health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  pgsqlConfig?: HealthCheckPgsqlConfig
  /**
   * Basic TCP health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  tcpConfig?: HealthCheckTcpConfig
  /**
   * HTTP health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  httpConfig?: HealthCheckHttpConfig
  /**
   * HTTPS health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  httpsConfig?: HealthCheckHttpsConfig
  /**
   * It defines whether the health check should be done considering the proxy
   * protocol
   */
  checkSendProxy: boolean
}

export type ListFrontendsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Use this to search by name */
  name?: string
  /** Response order */
  orderBy?: ListFrontendsRequestOrderBy
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
}

export type CreateFrontendRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Resource name */
  name?: string
  /** TCP port to listen on the front side */
  inboundPort: number
  /** Backend ID */
  backendId: string
  /** Set the maximum inactivity time on the client side */
  timeoutClient?: string
  /** @deprecated Certificate ID, deprecated in favor of certificate_ids array ! */
  certificateId?: string
  /** List of certificate IDs to bind on the frontend */
  certificateIds?: string[]
  /** Activate HTTP 3 protocol (beta) */
  enableHttp3: boolean
}

export type GetFrontendRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Frontend ID */
  frontendId: string
}

export type UpdateFrontendRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Frontend ID */
  frontendId: string
  /** Resource name */
  name: string
  /** TCP port to listen on the front side */
  inboundPort: number
  /** Backend ID */
  backendId: string
  /** Client session maximum inactivity time */
  timeoutClient?: string
  /** @deprecated Certificate ID, deprecated in favor of `certificate_ids` array! */
  certificateId?: string
  /** List of certificate IDs to bind on the frontend */
  certificateIds?: string[]
  /** Activate HTTP 3 protocol (beta) */
  enableHttp3: boolean
}

export type DeleteFrontendRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Frontend ID to delete */
  frontendId: string
}

export type ListRoutesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Response order */
  orderBy?: ListRoutesRequestOrderBy
  /** The number of items to return */
  pageSize?: number
  /** Page number */
  page?: number
  frontendId?: string
}

export type CreateRouteRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Origin of redirection */
  frontendId: string
  /** Destination of destination */
  backendId: string
  /** Value to match a redirection */
  match?: RouteMatch
}

export type GetRouteRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Id of route to get */
  routeId: string
}

export type UpdateRouteRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Route id to update */
  routeId: string
  /** Backend id of redirection */
  backendId: string
  /** Value to match a redirection */
  match?: RouteMatch
}

export type DeleteRouteRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Route id to delete */
  routeId: string
}

export type GetLbStatsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
}

export type ListBackendStatsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
}

export type ListAclsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of your frontend */
  frontendId: string
  /** Response order */
  orderBy?: ListAclRequestOrderBy
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
  /** Filter acl per name */
  name?: string
}

export type CreateAclRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of your frontend */
  frontendId: string
  /** Name of your ACL ressource */
  name?: string
  /** Action to undertake when an ACL filter matches */
  action: AclAction
  /**
   * The ACL match rule. You can have one of those three cases:
   *
   * - `ip_subnet` is defined
   * - `http_filter` and `http_filter_value` are defined
   * - `ip_subnet`, `http_filter` and `http_filter_value` are defined
   */
  match?: AclMatch
  /** Order between your Acls (ascending order, 0 is first acl executed) */
  index: number
  /** Description of your ACL ressource */
  description: string
}

export type GetAclRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of your ACL ressource */
  aclId: string
}

export type UpdateAclRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of your ACL ressource */
  aclId: string
  /** Name of your ACL ressource */
  name: string
  /** Action to undertake when an ACL filter matches */
  action: AclAction
  /**
   * The ACL match rule. At least `ip_subnet` or `http_filter` and
   * `http_filter_value` are required
   */
  match?: AclMatch
  /** Order between your Acls (ascending order, 0 is first acl executed) */
  index: number
  /** Description of your ACL ressource */
  description?: string
}

export type DeleteAclRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of your ACL ressource */
  aclId: string
}

export type CreateCertificateRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Certificate name */
  name?: string
  /**
   * Let's Encrypt type.
   *
   * One-of ('type'): at most one of 'letsencrypt', 'customCertificate' could be
   * set.
   */
  letsencrypt?: CreateCertificateRequestLetsencryptConfig
  /**
   * Custom import certificate.
   *
   * One-of ('type'): at most one of 'letsencrypt', 'customCertificate' could be
   * set.
   */
  customCertificate?: CreateCertificateRequestCustomCertificate
}

export type ListCertificatesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Response order */
  orderBy?: ListCertificatesRequestOrderBy
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
  /** Use this to search by name */
  name?: string
}

export type GetCertificateRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Certificate ID */
  certificateId: string
}

export type UpdateCertificateRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Certificate ID */
  certificateId: string
  /** Certificate name */
  name: string
}

export type DeleteCertificateRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Certificate ID */
  certificateId: string
}

export type ListLbTypesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
}

export type CreateSubscriberRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Subscriber name */
  name: string
  /**
   * Email address configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be
   * set.
   */
  emailConfig?: SubscriberEmailConfig
  /**
   * WebHook URI configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be
   * set.
   */
  webhookConfig?: SubscriberWebhookConfig
  /**
   * @deprecated Owner of resources.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * Assign the resource to a project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
}

export type GetSubscriberRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Subscriber ID */
  subscriberId: string
}

export type ListSubscriberRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Response order */
  orderBy?: ListSubscriberRequestOrderBy
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
  /** Use this to search by name */
  name: string
  /** Filter Subscribers by organization ID */
  organizationId?: string
  /** Filter Subscribers by project ID */
  projectId?: string
}

export type UpdateSubscriberRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Assign the resource to a project IDs */
  subscriberId: string
  /** Subscriber name */
  name: string
  /**
   * Email address configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be
   * set.
   */
  emailConfig?: SubscriberEmailConfig
  /**
   * WebHook URI configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be
   * set.
   */
  webhookConfig?: SubscriberWebhookConfig
}

export type DeleteSubscriberRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Subscriber ID */
  subscriberId: string
}

export type SubscribeToLbRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Subscriber ID */
  subscriberId: string
}

export type UnsubscribeFromLbRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
}

export type ListLbPrivateNetworksRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Response order */
  orderBy?: ListPrivateNetworksRequestOrderBy
  /** The number of items to return */
  pageSize?: number
  /** Page number */
  page?: number
}

export type AttachPrivateNetworkRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Set your instance private network id */
  privateNetworkId: string
  /**
   * Define two local ip address of your choice for each load balancer instance.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig' could be
   * set.
   */
  staticConfig?: PrivateNetworkStaticConfig
  /**
   * Set to true if you want to let DHCP assign IP addresses.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig' could be
   * set.
   */
  dhcpConfig?: PrivateNetworkDHCPConfig
}

export type DetachPrivateNetworkRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Load balancer ID */
  lbId: string
  /** Set your instance private network id */
  privateNetworkId: string
}

export type ZonedApiListLbsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Use this to search by name */
  name?: string
  /** Response order */
  orderBy?: ListLbsRequestOrderBy
  /** The number of items to return */
  pageSize?: number
  /** Page number */
  page?: number
  /** Filter LBs by organization ID */
  organizationId?: string
  /** Filter LBs by project ID */
  projectId?: string
}

export type ZonedApiCreateLbRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /**
   * @deprecated Owner of resources.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * Assign the resource to a project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
  /** Resource names */
  name?: string
  /** Resource description */
  description: string
  /**
   * Just like for compute instances, when you destroy a load balancer, you can
   * keep its highly available IP address and reuse it for another load balancer
   * later
   */
  ipId?: string
  /** List of keyword */
  tags?: string[]
  /** Load balancer offer type */
  type: string
  /**
   * Enforces minimal SSL version (in SSL/TLS offloading context).
   *
   * - `intermediate` General-purpose servers with a variety of clients,
   *   recommended for almost all systems (Supports Firefox 27, Android 4.4.2,
   *   Chrome 31, Edge, IE 11 on Windows 7, Java 8u31, OpenSSL 1.0.1, Opera 20,
   *   and Safari 9).
   * - `modern` Services with clients that support TLS 1.3 and don't need backward
   *   compatibility (Firefox 63, Android 10.0, Chrome 70, Edge 75, Java 11,
   *   OpenSSL 1.1.1, Opera 57, and Safari 12.1).
   * - `old` Compatible with a number of very old clients, and should be used only
   *   as a last resort (Firefox 1, Android 2.3, Chrome 1, Edge 12, IE8 on
   *   Windows XP, Java 6, OpenSSL 0.9.8, Opera 5, and Safari 1).
   */
  sslCompatibilityLevel?: SSLCompatibilityLevel
}

export type ZonedApiGetLbRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
}

export type ZonedApiUpdateLbRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Resource name */
  name: string
  /** Resource description */
  description: string
  /** List of keywords */
  tags?: string[]
  /**
   * Enforces minimal SSL version (in SSL/TLS offloading context).
   *
   * - `intermediate` General-purpose servers with a variety of clients,
   *   recommended for almost all systems (Supports Firefox 27, Android 4.4.2,
   *   Chrome 31, Edge, IE 11 on Windows 7, Java 8u31, OpenSSL 1.0.1, Opera 20,
   *   and Safari 9).
   * - `modern` Services with clients that support TLS 1.3 and don't need backward
   *   compatibility (Firefox 63, Android 10.0, Chrome 70, Edge 75, Java 11,
   *   OpenSSL 1.1.1, Opera 57, and Safari 12.1).
   * - `old` Compatible with a number of very old clients, and should be used only
   *   as a last resort (Firefox 1, Android 2.3, Chrome 1, Edge 12, IE8 on
   *   Windows XP, Java 6, OpenSSL 0.9.8, Opera 5, and Safari 1).
   */
  sslCompatibilityLevel?: SSLCompatibilityLevel
}

export type ZonedApiDeleteLbRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Set true if you don't want to keep this IP address */
  releaseIp: boolean
}

export type ZonedApiMigrateLbRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Load balancer type (check /lb-types to list all type) */
  type: string
}

export type ZonedApiListIPsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
  /** Use this to search by IP address */
  ipAddress?: string
  /** Filter IPs by organization id */
  organizationId?: string
  /** Filter IPs by project ID */
  projectId?: string
}

export type ZonedApiCreateIpRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /**
   * @deprecated Owner of resources.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * Assign the resource to a project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
  /** Reverse domain name */
  reverse?: string
}

export type ZonedApiGetIpRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** IP address ID */
  ipId: string
}

export type ZonedApiReleaseIpRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** IP address ID */
  ipId: string
}

export type ZonedApiUpdateIpRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** IP address ID */
  ipId: string
  /** Reverse DNS */
  reverse?: string
}

export type ZonedApiListBackendsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Use this to search by name */
  name?: string
  /** Response order */
  orderBy?: ListBackendsRequestOrderBy
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
}

export type ZonedApiCreateBackendRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Resource name */
  name?: string
  /** Backend protocol. TCP or HTTP */
  forwardProtocol: Protocol
  /** User sessions will be forwarded to this port of backend servers */
  forwardPort: number
  /** Load balancing algorithm */
  forwardPortAlgorithm: ForwardPortAlgorithm
  /** Enables cookie-based session persistence */
  stickySessions: StickySessionsType
  /** Cookie name for sticky sessions */
  stickySessionsCookieName: string
  /** See the Healthcheck object description */
  healthCheck: HealthCheck
  /** Backend server IP addresses list (IPv4 or IPv6) */
  serverIp: string[]
  /** @deprecated Deprecated in favor of proxy_protocol field ! */
  sendProxyV2?: boolean
  /**
   * Maximum server connection inactivity time (allowed time the server has to
   * process the request)
   */
  timeoutServer?: string
  /** Maximum initial server connection establishment time */
  timeoutConnect?: string
  /**
   * Maximum tunnel inactivity time after Websocket is established (take
   * precedence over client and server timeout)
   */
  timeoutTunnel?: string
  /** Modify what occurs when a backend server is marked down */
  onMarkedDownAction?: OnMarkedDownAction
  /**
   * The PROXY protocol informs the other end about the incoming connection, so
   * that it can know the client's address or the public address it accessed to,
   * whatever the upper layer protocol.
   *
   * `proxy_protocol_none` Disable proxy protocol. `proxy_protocol_v1` Version
   * one (text format). `proxy_protocol_v2` Version two (binary format).
   * `proxy_protocol_v2_ssl` Version two with SSL connection.
   * `proxy_protocol_v2_ssl_cn` Version two with SSL connection and common name
   * information.
   */
  proxyProtocol?: ProxyProtocol
  /**
   * Only the host part of the Scaleway S3 bucket website is expected. E.g.
   * `failover-website.s3-website.fr-par.scw.cloud` if your bucket website URL
   * is `https://failover-website.s3-website.fr-par.scw.cloud/`.
   */
  failoverHost?: string
  /** Enable SSL between load balancer and backend servers */
  sslBridging?: boolean
  /** Set to true to ignore server certificate verification */
  ignoreSslServerVerify?: boolean
}

export type ZonedApiGetBackendRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Backend ID */
  backendId: string
}

export type ZonedApiUpdateBackendRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Backend ID to update */
  backendId: string
  /** Resource name */
  name: string
  /** Backend protocol. TCP or HTTP */
  forwardProtocol: Protocol
  /** User sessions will be forwarded to this port of backend servers */
  forwardPort: number
  /** Load balancing algorithm */
  forwardPortAlgorithm: ForwardPortAlgorithm
  /** Enable cookie-based session persistence */
  stickySessions: StickySessionsType
  /** Cookie name for sticky sessions */
  stickySessionsCookieName: string
  /** @deprecated Deprecated in favor of proxy_protocol field! */
  sendProxyV2?: boolean
  /**
   * Maximum server connection inactivity time (allowed time the server has to
   * process the request)
   */
  timeoutServer?: string
  /** Maximum initial server connection establishment time */
  timeoutConnect?: string
  /**
   * Maximum tunnel inactivity time after Websocket is established (take
   * precedence over client and server timeout)
   */
  timeoutTunnel?: string
  /** Modify what occurs when a backend server is marked down */
  onMarkedDownAction?: OnMarkedDownAction
  /**
   * The PROXY protocol informs the other end about the incoming connection, so
   * that it can know the client's address or the public address it accessed to,
   * whatever the upper layer protocol is.
   *
   * `proxy_protocol_none` Disable proxy protocol. `proxy_protocol_v1` Version
   * one (text format). `proxy_protocol_v2` Version two (binary format).
   * `proxy_protocol_v2_ssl` Version two with SSL connection.
   * `proxy_protocol_v2_ssl_cn` Version two with SSL connection and common name
   * information.
   */
  proxyProtocol?: ProxyProtocol
  /**
   * Only the host part of the Scaleway S3 bucket website is expected. Example:
   * `failover-website.s3-website.fr-par.scw.cloud` if your bucket website URL
   * is `https://failover-website.s3-website.fr-par.scw.cloud/`.
   */
  failoverHost?: string
  /** Enable SSL between load balancer and backend servers */
  sslBridging?: boolean
  /** Set to true to ignore server certificate verification */
  ignoreSslServerVerify?: boolean
}

export type ZonedApiDeleteBackendRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the backend to delete */
  backendId: string
}

export type ZonedApiAddBackendServersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Backend ID */
  backendId: string
  /** Set all IPs to add on your backend */
  serverIp: string[]
}

export type ZonedApiRemoveBackendServersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Backend ID */
  backendId: string
  /** Set all IPs to remove of your backend */
  serverIp: string[]
}

export type ZonedApiSetBackendServersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Backend ID */
  backendId: string
  /** Set all IPs to add on your backend and remove all other */
  serverIp: string[]
}

export type ZonedApiUpdateHealthCheckRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Backend ID */
  backendId: string
  /** Specify the port used to health check */
  port: number
  /** Time between two consecutive health checks */
  checkDelay: string
  /** Maximum time a backend server has to reply to the health check */
  checkTimeout: string
  /**
   * Number of consecutive unsuccessful health checks, after which the server
   * will be considered dead
   */
  checkMaxRetries: number
  /**
   * The check requires MySQL >=3.22, for older version, please use TCP check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  mysqlConfig?: HealthCheckMysqlConfig
  /**
   * The response is analyzed to find an LDAPv3 response message.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  ldapConfig?: HealthCheckLdapConfig
  /**
   * The response is analyzed to find the +PONG response message.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  redisConfig?: HealthCheckRedisConfig
  /**
   * PostgreSQL health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  pgsqlConfig?: HealthCheckPgsqlConfig
  /**
   * Basic TCP health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  tcpConfig?: HealthCheckTcpConfig
  /**
   * HTTP health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  httpConfig?: HealthCheckHttpConfig
  /**
   * HTTPS health check.
   *
   * One-of ('config'): at most one of 'mysqlConfig', 'ldapConfig',
   * 'redisConfig', 'pgsqlConfig', 'tcpConfig', 'httpConfig', 'httpsConfig'
   * could be set.
   */
  httpsConfig?: HealthCheckHttpsConfig
  /**
   * It defines whether the health check should be done considering the proxy
   * protocol
   */
  checkSendProxy: boolean
}

export type ZonedApiListFrontendsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Use this to search by name */
  name?: string
  /** Response order */
  orderBy?: ListFrontendsRequestOrderBy
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
}

export type ZonedApiCreateFrontendRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Resource name */
  name?: string
  /** TCP port to listen on the front side */
  inboundPort: number
  /** Backend ID */
  backendId: string
  /** Set the maximum inactivity time on the client side */
  timeoutClient?: string
  /** @deprecated Certificate ID, deprecated in favor of certificate_ids array ! */
  certificateId?: string
  /** List of certificate IDs to bind on the frontend */
  certificateIds?: string[]
  /** Activate HTTP 3 protocol (beta) */
  enableHttp3: boolean
}

export type ZonedApiGetFrontendRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Frontend ID */
  frontendId: string
}

export type ZonedApiUpdateFrontendRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Frontend ID */
  frontendId: string
  /** Resource name */
  name: string
  /** TCP port to listen on the front side */
  inboundPort: number
  /** Backend ID */
  backendId: string
  /** Client session maximum inactivity time */
  timeoutClient?: string
  /** @deprecated Certificate ID, deprecated in favor of `certificate_ids` array! */
  certificateId?: string
  /** List of certificate IDs to bind on the frontend */
  certificateIds?: string[]
  /** Activate HTTP 3 protocol (beta) */
  enableHttp3: boolean
}

export type ZonedApiDeleteFrontendRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Frontend ID to delete */
  frontendId: string
}

export type ZonedApiListRoutesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Response order */
  orderBy?: ListRoutesRequestOrderBy
  /** The number of items to return */
  pageSize?: number
  /** Page number */
  page?: number
  frontendId?: string
}

export type ZonedApiCreateRouteRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Origin of redirection */
  frontendId: string
  /** Destination of destination */
  backendId: string
  /** Value to match a redirection */
  match?: RouteMatch
}

export type ZonedApiGetRouteRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Id of route to get */
  routeId: string
}

export type ZonedApiUpdateRouteRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Route id to update */
  routeId: string
  /** Backend id of redirection */
  backendId: string
  /** Value to match a redirection */
  match?: RouteMatch
}

export type ZonedApiDeleteRouteRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Route id to delete */
  routeId: string
}

export type ZonedApiGetLbStatsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
}

export type ZonedApiListBackendStatsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
}

export type ZonedApiListAclsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of your frontend */
  frontendId: string
  /** Response order */
  orderBy?: ListAclRequestOrderBy
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
  /** Filter acl per name */
  name?: string
}

export type ZonedApiCreateAclRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of your frontend */
  frontendId: string
  /** Name of your ACL ressource */
  name?: string
  /** Action to undertake when an ACL filter matches */
  action: AclAction
  /**
   * The ACL match rule. You can have one of those three cases:
   *
   * - `ip_subnet` is defined
   * - `http_filter` and `http_filter_value` are defined
   * - `ip_subnet`, `http_filter` and `http_filter_value` are defined
   */
  match?: AclMatch
  /** Order between your Acls (ascending order, 0 is first acl executed) */
  index: number
  /** Description of your ACL ressource */
  description: string
}

export type ZonedApiGetAclRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of your ACL ressource */
  aclId: string
}

export type ZonedApiUpdateAclRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of your ACL ressource */
  aclId: string
  /** Name of your ACL ressource */
  name: string
  /** Action to undertake when an ACL filter matches */
  action: AclAction
  /**
   * The ACL match rule. At least `ip_subnet` or `http_filter` and
   * `http_filter_value` are required
   */
  match?: AclMatch
  /** Order between your Acls (ascending order, 0 is first acl executed) */
  index: number
  /** Description of your ACL ressource */
  description?: string
}

export type ZonedApiDeleteAclRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of your ACL ressource */
  aclId: string
}

export type ZonedApiSetAclsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The Frontend to change ACL to */
  frontendId: string
  /** Array of ACLs to erease the existing ACLs */
  acls: AclSpec[]
}

export type ZonedApiCreateCertificateRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Certificate name */
  name?: string
  /**
   * Let's Encrypt type.
   *
   * One-of ('type'): at most one of 'letsencrypt', 'customCertificate' could be
   * set.
   */
  letsencrypt?: CreateCertificateRequestLetsencryptConfig
  /**
   * Custom import certificate.
   *
   * One-of ('type'): at most one of 'letsencrypt', 'customCertificate' could be
   * set.
   */
  customCertificate?: CreateCertificateRequestCustomCertificate
}

export type ZonedApiListCertificatesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Response order */
  orderBy?: ListCertificatesRequestOrderBy
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
  /** Use this to search by name */
  name?: string
}

export type ZonedApiGetCertificateRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Certificate ID */
  certificateId: string
}

export type ZonedApiUpdateCertificateRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Certificate ID */
  certificateId: string
  /** Certificate name */
  name: string
}

export type ZonedApiDeleteCertificateRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Certificate ID */
  certificateId: string
}

export type ZonedApiListLbTypesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
}

export type ZonedApiCreateSubscriberRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Subscriber name */
  name: string
  /**
   * Email address configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be
   * set.
   */
  emailConfig?: SubscriberEmailConfig
  /**
   * WebHook URI configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be
   * set.
   */
  webhookConfig?: SubscriberWebhookConfig
  /**
   * @deprecated Owner of resources.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * Assign the resource to a project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
}

export type ZonedApiGetSubscriberRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Subscriber ID */
  subscriberId: string
}

export type ZonedApiListSubscriberRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Response order */
  orderBy?: ListSubscriberRequestOrderBy
  /** Page number */
  page?: number
  /** The number of items to return */
  pageSize?: number
  /** Use this to search by name */
  name: string
  /** Filter Subscribers by organization ID */
  organizationId?: string
  /** Filter Subscribers by project ID */
  projectId?: string
}

export type ZonedApiUpdateSubscriberRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Assign the resource to a project IDs */
  subscriberId: string
  /** Subscriber name */
  name: string
  /**
   * Email address configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be
   * set.
   */
  emailConfig?: SubscriberEmailConfig
  /**
   * WebHook URI configuration.
   *
   * One-of ('config'): at most one of 'emailConfig', 'webhookConfig' could be
   * set.
   */
  webhookConfig?: SubscriberWebhookConfig
}

export type ZonedApiDeleteSubscriberRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Subscriber ID */
  subscriberId: string
}

export type ZonedApiSubscribeToLbRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Subscriber ID */
  subscriberId: string
}

export type ZonedApiUnsubscribeFromLbRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
}

export type ZonedApiListLbPrivateNetworksRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Response order */
  orderBy?: ListPrivateNetworksRequestOrderBy
  /** The number of items to return */
  pageSize?: number
  /** Page number */
  page?: number
}

export type ZonedApiAttachPrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Set your instance private network id */
  privateNetworkId: string
  /**
   * Define two local ip address of your choice for each load balancer instance.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig' could be
   * set.
   */
  staticConfig?: PrivateNetworkStaticConfig
  /**
   * Set to true if you want to let DHCP assign IP addresses.
   *
   * One-of ('config'): at most one of 'staticConfig', 'dhcpConfig' could be
   * set.
   */
  dhcpConfig?: PrivateNetworkDHCPConfig
}

export type ZonedApiDetachPrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Load balancer ID */
  lbId: string
  /** Set your instance private network id */
  privateNetworkId: string
}
