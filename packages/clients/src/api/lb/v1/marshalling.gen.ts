// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  Acl,
  AclAction,
  AclMatch,
  AclSpec,
  AddBackendServersRequest,
  AttachPrivateNetworkRequest,
  Backend,
  BackendServerStats,
  Certificate,
  CreateAclRequest,
  CreateBackendRequest,
  CreateCertificateRequest,
  CreateCertificateRequestCustomCertificate,
  CreateCertificateRequestLetsencryptConfig,
  CreateFrontendRequest,
  CreateIpRequest,
  CreateLbRequest,
  CreateRouteRequest,
  CreateSubscriberRequest,
  Frontend,
  HealthCheck,
  HealthCheckHttpConfig,
  HealthCheckHttpsConfig,
  HealthCheckLdapConfig,
  HealthCheckMysqlConfig,
  HealthCheckPgsqlConfig,
  HealthCheckRedisConfig,
  HealthCheckTcpConfig,
  Instance,
  Ip,
  Lb,
  LbStats,
  LbType,
  ListAclResponse,
  ListBackendStatsResponse,
  ListBackendsResponse,
  ListCertificatesResponse,
  ListFrontendsResponse,
  ListIpsResponse,
  ListLbPrivateNetworksResponse,
  ListLbTypesResponse,
  ListLbsResponse,
  ListRoutesResponse,
  ListSubscriberResponse,
  MigrateLbRequest,
  PrivateNetwork,
  PrivateNetworkDHCPConfig,
  PrivateNetworkStaticConfig,
  RemoveBackendServersRequest,
  Route,
  RouteMatch,
  SetAclsResponse,
  SetBackendServersRequest,
  SubscribeToLbRequest,
  Subscriber,
  SubscriberEmailConfig,
  SubscriberWebhookConfig,
  UpdateAclRequest,
  UpdateBackendRequest,
  UpdateCertificateRequest,
  UpdateFrontendRequest,
  UpdateHealthCheckRequest,
  UpdateIpRequest,
  UpdateLbRequest,
  UpdateRouteRequest,
  UpdateSubscriberRequest,
  ZonedApiAddBackendServersRequest,
  ZonedApiAttachPrivateNetworkRequest,
  ZonedApiCreateAclRequest,
  ZonedApiCreateBackendRequest,
  ZonedApiCreateCertificateRequest,
  ZonedApiCreateFrontendRequest,
  ZonedApiCreateIpRequest,
  ZonedApiCreateLbRequest,
  ZonedApiCreateRouteRequest,
  ZonedApiCreateSubscriberRequest,
  ZonedApiMigrateLbRequest,
  ZonedApiRemoveBackendServersRequest,
  ZonedApiSetAclsRequest,
  ZonedApiSetBackendServersRequest,
  ZonedApiSubscribeToLbRequest,
  ZonedApiUpdateAclRequest,
  ZonedApiUpdateBackendRequest,
  ZonedApiUpdateCertificateRequest,
  ZonedApiUpdateFrontendRequest,
  ZonedApiUpdateHealthCheckRequest,
  ZonedApiUpdateIpRequest,
  ZonedApiUpdateLbRequest,
  ZonedApiUpdateRouteRequest,
  ZonedApiUpdateSubscriberRequest,
} from './types.gen'

const unmarshalSubscriberEmailConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SubscriberEmailConfig' failed as data isn't a dictionary.`,
    )
  }

  return { email: data.email } as SubscriberEmailConfig
}

const unmarshalSubscriberWebhookConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SubscriberWebhookConfig' failed as data isn't a dictionary.`,
    )
  }

  return { uri: data.uri } as SubscriberWebhookConfig
}

const unmarshalHealthCheckHttpConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HealthCheckHttpConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    code: data.code,
    method: data.method,
    uri: data.uri,
  } as HealthCheckHttpConfig
}

const unmarshalHealthCheckHttpsConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HealthCheckHttpsConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    code: data.code,
    method: data.method,
    uri: data.uri,
  } as HealthCheckHttpsConfig
}

const unmarshalHealthCheckLdapConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HealthCheckLdapConfig' failed as data isn't a dictionary.`,
    )
  }

  return {} as HealthCheckLdapConfig
}

const unmarshalHealthCheckMysqlConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HealthCheckMysqlConfig' failed as data isn't a dictionary.`,
    )
  }

  return { user: data.user } as HealthCheckMysqlConfig
}

const unmarshalHealthCheckPgsqlConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HealthCheckPgsqlConfig' failed as data isn't a dictionary.`,
    )
  }

  return { user: data.user } as HealthCheckPgsqlConfig
}

const unmarshalHealthCheckRedisConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HealthCheckRedisConfig' failed as data isn't a dictionary.`,
    )
  }

  return {} as HealthCheckRedisConfig
}

const unmarshalHealthCheckTcpConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HealthCheckTcpConfig' failed as data isn't a dictionary.`,
    )
  }

  return {} as HealthCheckTcpConfig
}

const unmarshalInstance = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Instance' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    ipAddress: data.ip_address,
    region: data.region,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as Instance
}

export const unmarshalIp = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Ip' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    ipAddress: data.ip_address,
    lbId: data.lb_id,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    reverse: data.reverse,
    zone: data.zone,
  } as Ip
}

export const unmarshalSubscriber = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Subscriber' failed as data isn't a dictionary.`,
    )
  }

  return {
    emailConfig: data.email_config
      ? unmarshalSubscriberEmailConfig(data.email_config)
      : undefined,
    id: data.id,
    name: data.name,
    webhookConfig: data.webhook_config
      ? unmarshalSubscriberWebhookConfig(data.webhook_config)
      : undefined,
  } as Subscriber
}

export const unmarshalHealthCheck = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HealthCheck' failed as data isn't a dictionary.`,
    )
  }

  return {
    checkDelay: data.check_delay,
    checkMaxRetries: data.check_max_retries,
    checkSendProxy: data.check_send_proxy,
    checkTimeout: data.check_timeout,
    httpConfig: data.http_config
      ? unmarshalHealthCheckHttpConfig(data.http_config)
      : undefined,
    httpsConfig: data.https_config
      ? unmarshalHealthCheckHttpsConfig(data.https_config)
      : undefined,
    ldapConfig: data.ldap_config
      ? unmarshalHealthCheckLdapConfig(data.ldap_config)
      : undefined,
    mysqlConfig: data.mysql_config
      ? unmarshalHealthCheckMysqlConfig(data.mysql_config)
      : undefined,
    pgsqlConfig: data.pgsql_config
      ? unmarshalHealthCheckPgsqlConfig(data.pgsql_config)
      : undefined,
    port: data.port,
    redisConfig: data.redis_config
      ? unmarshalHealthCheckRedisConfig(data.redis_config)
      : undefined,
    tcpConfig: data.tcp_config
      ? unmarshalHealthCheckTcpConfig(data.tcp_config)
      : undefined,
  } as HealthCheck
}

export const unmarshalLb = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Lb' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendCount: data.backend_count,
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    frontendCount: data.frontend_count,
    id: data.id,
    instances: unmarshalArrayOfObject(data.instances, unmarshalInstance),
    ip: unmarshalArrayOfObject(data.ip, unmarshalIp),
    name: data.name,
    organizationId: data.organization_id,
    privateNetworkCount: data.private_network_count,
    projectId: data.project_id,
    region: data.region,
    routeCount: data.route_count,
    sslCompatibilityLevel: data.ssl_compatibility_level,
    status: data.status,
    subscriber: data.subscriber
      ? unmarshalSubscriber(data.subscriber)
      : undefined,
    tags: data.tags,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as Lb
}

export const unmarshalBackend = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Backend' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    failoverHost: data.failover_host,
    forwardPort: data.forward_port,
    forwardPortAlgorithm: data.forward_port_algorithm,
    forwardProtocol: data.forward_protocol,
    healthCheck: data.health_check
      ? unmarshalHealthCheck(data.health_check)
      : undefined,
    id: data.id,
    lb: data.lb ? unmarshalLb(data.lb) : undefined,
    name: data.name,
    onMarkedDownAction: data.on_marked_down_action,
    pool: data.pool,
    proxyProtocol: data.proxy_protocol,
    sendProxyV2: data.send_proxy_v2,
    stickySessions: data.sticky_sessions,
    stickySessionsCookieName: data.sticky_sessions_cookie_name,
    timeoutConnect: data.timeout_connect,
    timeoutServer: data.timeout_server,
    timeoutTunnel: data.timeout_tunnel,
    updatedAt: unmarshalDate(data.updated_at),
  } as Backend
}

export const unmarshalCertificate = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Certificate' failed as data isn't a dictionary.`,
    )
  }

  return {
    commonName: data.common_name,
    createdAt: unmarshalDate(data.created_at),
    fingerprint: data.fingerprint,
    id: data.id,
    lb: data.lb ? unmarshalLb(data.lb) : undefined,
    name: data.name,
    notValidAfter: unmarshalDate(data.not_valid_after),
    notValidBefore: unmarshalDate(data.not_valid_before),
    status: data.status,
    statusDetails: data.status_details,
    subjectAlternativeName: data.subject_alternative_name,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as Certificate
}

const unmarshalAclAction = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AclAction' failed as data isn't a dictionary.`,
    )
  }

  return { type: data.type } as AclAction
}

const unmarshalAclMatch = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AclMatch' failed as data isn't a dictionary.`,
    )
  }

  return {
    httpFilter: data.http_filter,
    httpFilterOption: data.http_filter_option,
    httpFilterValue: data.http_filter_value,
    invert: data.invert,
    ipSubnet: data.ip_subnet,
  } as AclMatch
}

export const unmarshalFrontend = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Frontend' failed as data isn't a dictionary.`,
    )
  }

  return {
    backend: data.backend ? unmarshalBackend(data.backend) : undefined,
    certificate: data.certificate
      ? unmarshalCertificate(data.certificate)
      : undefined,
    certificateIds: data.certificate_ids,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    inboundPort: data.inbound_port,
    lb: data.lb ? unmarshalLb(data.lb) : undefined,
    name: data.name,
    timeoutClient: data.timeout_client,
    updatedAt: unmarshalDate(data.updated_at),
  } as Frontend
}

const unmarshalPrivateNetworkDHCPConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNetworkDHCPConfig' failed as data isn't a dictionary.`,
    )
  }

  return {} as PrivateNetworkDHCPConfig
}

const unmarshalPrivateNetworkStaticConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNetworkStaticConfig' failed as data isn't a dictionary.`,
    )
  }

  return { ipAddress: data.ip_address } as PrivateNetworkStaticConfig
}

const unmarshalRouteMatch = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RouteMatch' failed as data isn't a dictionary.`,
    )
  }

  return { sni: data.sni } as RouteMatch
}

export const unmarshalAcl = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Acl' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action ? unmarshalAclAction(data.action) : undefined,
    createdAt: unmarshalDate(data.created_at),
    frontend: data.frontend ? unmarshalFrontend(data.frontend) : undefined,
    id: data.id,
    index: data.index,
    match: data.match ? unmarshalAclMatch(data.match) : undefined,
    name: data.name,
    updatedAt: unmarshalDate(data.updated_at),
  } as Acl
}

const unmarshalBackendServerStats = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BackendServerStats' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendId: data.backend_id,
    instanceId: data.instance_id,
    ip: data.ip,
    lastHealthCheckStatus: data.last_health_check_status,
    serverState: data.server_state,
    serverStateChangedAt: unmarshalDate(data.server_state_changed_at),
  } as BackendServerStats
}

const unmarshalLbType = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LbType' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    name: data.name,
    region: data.region,
    stockStatus: data.stock_status,
    zone: data.zone,
  } as LbType
}

export const unmarshalPrivateNetwork = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    dhcpConfig: data.dhcp_config
      ? unmarshalPrivateNetworkDHCPConfig(data.dhcp_config)
      : undefined,
    lb: data.lb ? unmarshalLb(data.lb) : undefined,
    privateNetworkId: data.private_network_id,
    staticConfig: data.static_config
      ? unmarshalPrivateNetworkStaticConfig(data.static_config)
      : undefined,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as PrivateNetwork
}

export const unmarshalRoute = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Route' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendId: data.backend_id,
    createdAt: unmarshalDate(data.created_at),
    frontendId: data.frontend_id,
    id: data.id,
    match: data.match ? unmarshalRouteMatch(data.match) : undefined,
    updatedAt: unmarshalDate(data.updated_at),
  } as Route
}

export const unmarshalLbStats = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LbStats' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendServersStats: unmarshalArrayOfObject(
      data.backend_servers_stats,
      unmarshalBackendServerStats,
    ),
  } as LbStats
}

export const unmarshalListAclResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAclResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    acls: unmarshalArrayOfObject(data.acls, unmarshalAcl),
    totalCount: data.total_count,
  } as ListAclResponse
}

export const unmarshalListBackendStatsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListBackendStatsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendServersStats: unmarshalArrayOfObject(
      data.backend_servers_stats,
      unmarshalBackendServerStats,
    ),
    totalCount: data.total_count,
  } as ListBackendStatsResponse
}

export const unmarshalListBackendsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListBackendsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    backends: unmarshalArrayOfObject(data.backends, unmarshalBackend),
    totalCount: data.total_count,
  } as ListBackendsResponse
}

export const unmarshalListCertificatesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListCertificatesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    certificates: unmarshalArrayOfObject(
      data.certificates,
      unmarshalCertificate,
    ),
    totalCount: data.total_count,
  } as ListCertificatesResponse
}

export const unmarshalListFrontendsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFrontendsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    frontends: unmarshalArrayOfObject(data.frontends, unmarshalFrontend),
    totalCount: data.total_count,
  } as ListFrontendsResponse
}

export const unmarshalListIpsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListIpsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ips: unmarshalArrayOfObject(data.ips, unmarshalIp),
    totalCount: data.total_count,
  } as ListIpsResponse
}

export const unmarshalListLbPrivateNetworksResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListLbPrivateNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNetwork: unmarshalArrayOfObject(
      data.private_network,
      unmarshalPrivateNetwork,
    ),
    totalCount: data.total_count,
  } as ListLbPrivateNetworksResponse
}

export const unmarshalListLbTypesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListLbTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    lbTypes: unmarshalArrayOfObject(data.lb_types, unmarshalLbType),
    totalCount: data.total_count,
  } as ListLbTypesResponse
}

export const unmarshalListLbsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListLbsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    lbs: unmarshalArrayOfObject(data.lbs, unmarshalLb),
    totalCount: data.total_count,
  } as ListLbsResponse
}

export const unmarshalListRoutesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRoutesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    routes: unmarshalArrayOfObject(data.routes, unmarshalRoute),
    totalCount: data.total_count,
  } as ListRoutesResponse
}

export const unmarshalListSubscriberResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSubscriberResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    subscribers: unmarshalArrayOfObject(data.subscribers, unmarshalSubscriber),
    totalCount: data.total_count,
  } as ListSubscriberResponse
}

export const unmarshalSetAclsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetAclsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    acls: unmarshalArrayOfObject(data.acls, unmarshalAcl),
    totalCount: data.total_count,
  } as SetAclsResponse
}

const marshalAclAction = (
  request: AclAction,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  type: request.type,
})

const marshalAclMatch = (
  request: AclMatch,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  http_filter: request.httpFilter,
  http_filter_option: request.httpFilterOption,
  http_filter_value: request.httpFilterValue,
  invert: request.invert,
  ip_subnet: request.ipSubnet,
})

const marshalHealthCheckHttpConfig = (
  request: HealthCheckHttpConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  code: request.code,
  method: request.method,
  uri: request.uri,
})

const marshalHealthCheckHttpsConfig = (
  request: HealthCheckHttpsConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  code: request.code,
  method: request.method,
  uri: request.uri,
})

const marshalHealthCheckLdapConfig = (
  request: HealthCheckLdapConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalHealthCheckMysqlConfig = (
  request: HealthCheckMysqlConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  user: request.user,
})

const marshalHealthCheckPgsqlConfig = (
  request: HealthCheckPgsqlConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  user: request.user,
})

const marshalHealthCheckRedisConfig = (
  request: HealthCheckRedisConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalHealthCheckTcpConfig = (
  request: HealthCheckTcpConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalAclSpec = (
  request: AclSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: marshalAclAction(request.action, defaults),
  index: request.index,
  match: marshalAclMatch(request.match, defaults),
  name: request.name,
})

const marshalCreateCertificateRequestCustomCertificate = (
  request: CreateCertificateRequestCustomCertificate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  certificate_chain: request.certificateChain,
})

const marshalCreateCertificateRequestLetsencryptConfig = (
  request: CreateCertificateRequestLetsencryptConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  common_name: request.commonName,
  subject_alternative_name: request.subjectAlternativeName,
})

const marshalHealthCheck = (
  request: HealthCheck,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  check_delay: request.checkDelay,
  check_max_retries: request.checkMaxRetries,
  check_send_proxy: request.checkSendProxy,
  check_timeout: request.checkTimeout,
  port: request.port,
  ...resolveOneOf<unknown>([
    {
      param: 'mysql_config',
      value: request.mysqlConfig
        ? marshalHealthCheckMysqlConfig(request.mysqlConfig, defaults)
        : undefined,
    },
    {
      param: 'ldap_config',
      value: request.ldapConfig
        ? marshalHealthCheckLdapConfig(request.ldapConfig, defaults)
        : undefined,
    },
    {
      param: 'redis_config',
      value: request.redisConfig
        ? marshalHealthCheckRedisConfig(request.redisConfig, defaults)
        : undefined,
    },
    {
      param: 'tcp_config',
      value: request.tcpConfig
        ? marshalHealthCheckTcpConfig(request.tcpConfig, defaults)
        : undefined,
    },
    {
      param: 'pgsql_config',
      value: request.pgsqlConfig
        ? marshalHealthCheckPgsqlConfig(request.pgsqlConfig, defaults)
        : undefined,
    },
    {
      param: 'http_config',
      value: request.httpConfig
        ? marshalHealthCheckHttpConfig(request.httpConfig, defaults)
        : undefined,
    },
    {
      param: 'https_config',
      value: request.httpsConfig
        ? marshalHealthCheckHttpsConfig(request.httpsConfig, defaults)
        : undefined,
    },
  ]),
})

const marshalPrivateNetworkDHCPConfig = (
  request: PrivateNetworkDHCPConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalPrivateNetworkStaticConfig = (
  request: PrivateNetworkStaticConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_address: request.ipAddress,
})

const marshalRouteMatch = (
  request: RouteMatch,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  sni: request.sni,
})

const marshalSubscriberEmailConfig = (
  request: SubscriberEmailConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
})

const marshalSubscriberWebhookConfig = (
  request: SubscriberWebhookConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  uri: request.uri,
})

export const marshalAddBackendServersRequest = (
  request: AddBackendServersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  server_ip: request.serverIp,
})

export const marshalAttachPrivateNetworkRequest = (
  request: AttachPrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf<unknown>([
    {
      param: 'static_config',
      value: request.staticConfig
        ? marshalPrivateNetworkStaticConfig(request.staticConfig, defaults)
        : undefined,
    },
    {
      param: 'dhcp_config',
      value: request.dhcpConfig
        ? marshalPrivateNetworkDHCPConfig(request.dhcpConfig, defaults)
        : undefined,
    },
  ]),
})

export const marshalCreateAclRequest = (
  request: CreateAclRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: marshalAclAction(request.action, defaults),
  index: request.index,
  match: marshalAclMatch(request.match, defaults),
  name: request.name || randomName('acl'),
})

export const marshalCreateBackendRequest = (
  request: CreateBackendRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  failover_host: request.failoverHost,
  forward_port: request.forwardPort,
  forward_port_algorithm: request.forwardPortAlgorithm,
  forward_protocol: request.forwardProtocol,
  health_check: marshalHealthCheck(request.healthCheck, defaults),
  name: request.name || randomName('lbb'),
  on_marked_down_action: request.onMarkedDownAction,
  proxy_protocol: request.proxyProtocol,
  send_proxy_v2: request.sendProxyV2,
  server_ip: request.serverIp,
  sticky_sessions: request.stickySessions,
  sticky_sessions_cookie_name: request.stickySessionsCookieName,
  timeout_connect: request.timeoutConnect,
  timeout_server: request.timeoutServer,
  timeout_tunnel: request.timeoutTunnel,
})

export const marshalCreateCertificateRequest = (
  request: CreateCertificateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('certiticate'),
  ...resolveOneOf<unknown>(
    [
      {
        param: 'letsencrypt',
        value: request.letsencrypt
          ? marshalCreateCertificateRequestLetsencryptConfig(
              request.letsencrypt,
              defaults,
            )
          : undefined,
      },
      {
        param: 'custom_certificate',
        value: request.customCertificate
          ? marshalCreateCertificateRequestCustomCertificate(
              request.customCertificate,
              defaults,
            )
          : undefined,
      },
    ],
    true,
  ),
})

export const marshalCreateFrontendRequest = (
  request: CreateFrontendRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backend_id: request.backendId,
  certificate_id: request.certificateId,
  certificate_ids: request.certificateIds,
  inbound_port: request.inboundPort,
  name: request.name || randomName('lbf'),
  timeout_client: request.timeoutClient,
})

export const marshalCreateIpRequest = (
  request: CreateIpRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reverse: request.reverse,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
})

export const marshalCreateLbRequest = (
  request: CreateLbRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ip_id: request.ipId,
  name: request.name || randomName('lb'),
  ssl_compatibility_level: request.sslCompatibilityLevel,
  tags: request.tags,
  type: request.type,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
})

export const marshalCreateRouteRequest = (
  request: CreateRouteRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backend_id: request.backendId,
  frontend_id: request.frontendId,
  match: request.match ? marshalRouteMatch(request.match, defaults) : undefined,
})

export const marshalCreateSubscriberRequest = (
  request: CreateSubscriberRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
  ...resolveOneOf<unknown>([
    {
      param: 'email_config',
      value: request.emailConfig
        ? marshalSubscriberEmailConfig(request.emailConfig, defaults)
        : undefined,
    },
    {
      param: 'webhook_config',
      value: request.webhookConfig
        ? marshalSubscriberWebhookConfig(request.webhookConfig, defaults)
        : undefined,
    },
  ]),
})

export const marshalMigrateLbRequest = (
  request: MigrateLbRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  type: request.type,
})

export const marshalRemoveBackendServersRequest = (
  request: RemoveBackendServersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  server_ip: request.serverIp,
})

export const marshalSetBackendServersRequest = (
  request: SetBackendServersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  server_ip: request.serverIp,
})

export const marshalSubscribeToLbRequest = (
  request: SubscribeToLbRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  subscriber_id: request.subscriberId,
})

export const marshalUpdateAclRequest = (
  request: UpdateAclRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: marshalAclAction(request.action, defaults),
  index: request.index,
  match: marshalAclMatch(request.match, defaults),
  name: request.name,
})

export const marshalUpdateBackendRequest = (
  request: UpdateBackendRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  failover_host: request.failoverHost,
  forward_port: request.forwardPort,
  forward_port_algorithm: request.forwardPortAlgorithm,
  forward_protocol: request.forwardProtocol,
  name: request.name,
  on_marked_down_action: request.onMarkedDownAction,
  proxy_protocol: request.proxyProtocol,
  send_proxy_v2: request.sendProxyV2,
  sticky_sessions: request.stickySessions,
  sticky_sessions_cookie_name: request.stickySessionsCookieName,
  timeout_connect: request.timeoutConnect,
  timeout_server: request.timeoutServer,
  timeout_tunnel: request.timeoutTunnel,
})

export const marshalUpdateCertificateRequest = (
  request: UpdateCertificateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})

export const marshalUpdateFrontendRequest = (
  request: UpdateFrontendRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backend_id: request.backendId,
  certificate_id: request.certificateId,
  certificate_ids: request.certificateIds,
  inbound_port: request.inboundPort,
  name: request.name,
  timeout_client: request.timeoutClient,
})

export const marshalUpdateHealthCheckRequest = (
  request: UpdateHealthCheckRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  check_delay: request.checkDelay,
  check_max_retries: request.checkMaxRetries,
  check_send_proxy: request.checkSendProxy,
  check_timeout: request.checkTimeout,
  port: request.port,
  ...resolveOneOf<unknown>([
    {
      param: 'mysql_config',
      value: request.mysqlConfig
        ? marshalHealthCheckMysqlConfig(request.mysqlConfig, defaults)
        : undefined,
    },
    {
      param: 'ldap_config',
      value: request.ldapConfig
        ? marshalHealthCheckLdapConfig(request.ldapConfig, defaults)
        : undefined,
    },
    {
      param: 'redis_config',
      value: request.redisConfig
        ? marshalHealthCheckRedisConfig(request.redisConfig, defaults)
        : undefined,
    },
    {
      param: 'pgsql_config',
      value: request.pgsqlConfig
        ? marshalHealthCheckPgsqlConfig(request.pgsqlConfig, defaults)
        : undefined,
    },
    {
      param: 'tcp_config',
      value: request.tcpConfig
        ? marshalHealthCheckTcpConfig(request.tcpConfig, defaults)
        : undefined,
    },
    {
      param: 'http_config',
      value: request.httpConfig
        ? marshalHealthCheckHttpConfig(request.httpConfig, defaults)
        : undefined,
    },
    {
      param: 'https_config',
      value: request.httpsConfig
        ? marshalHealthCheckHttpsConfig(request.httpsConfig, defaults)
        : undefined,
    },
  ]),
})

export const marshalUpdateIpRequest = (
  request: UpdateIpRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reverse: request.reverse,
})

export const marshalUpdateLbRequest = (
  request: UpdateLbRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  ssl_compatibility_level: request.sslCompatibilityLevel,
  tags: request.tags,
})

export const marshalUpdateRouteRequest = (
  request: UpdateRouteRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backend_id: request.backendId,
  match: request.match ? marshalRouteMatch(request.match, defaults) : undefined,
})

export const marshalUpdateSubscriberRequest = (
  request: UpdateSubscriberRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  ...resolveOneOf<unknown>([
    {
      param: 'email_config',
      value: request.emailConfig
        ? marshalSubscriberEmailConfig(request.emailConfig, defaults)
        : undefined,
    },
    {
      param: 'webhook_config',
      value: request.webhookConfig
        ? marshalSubscriberWebhookConfig(request.webhookConfig, defaults)
        : undefined,
    },
  ]),
})

export const marshalZonedApiAddBackendServersRequest = (
  request: ZonedApiAddBackendServersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  server_ip: request.serverIp,
})

export const marshalZonedApiAttachPrivateNetworkRequest = (
  request: ZonedApiAttachPrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf<unknown>([
    {
      param: 'static_config',
      value: request.staticConfig
        ? marshalPrivateNetworkStaticConfig(request.staticConfig, defaults)
        : undefined,
    },
    {
      param: 'dhcp_config',
      value: request.dhcpConfig
        ? marshalPrivateNetworkDHCPConfig(request.dhcpConfig, defaults)
        : undefined,
    },
  ]),
})

export const marshalZonedApiCreateAclRequest = (
  request: ZonedApiCreateAclRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: marshalAclAction(request.action, defaults),
  index: request.index,
  match: marshalAclMatch(request.match, defaults),
  name: request.name || randomName('acl'),
})

export const marshalZonedApiCreateBackendRequest = (
  request: ZonedApiCreateBackendRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  failover_host: request.failoverHost,
  forward_port: request.forwardPort,
  forward_port_algorithm: request.forwardPortAlgorithm,
  forward_protocol: request.forwardProtocol,
  health_check: marshalHealthCheck(request.healthCheck, defaults),
  name: request.name || randomName('lbb'),
  on_marked_down_action: request.onMarkedDownAction,
  proxy_protocol: request.proxyProtocol,
  send_proxy_v2: request.sendProxyV2,
  server_ip: request.serverIp,
  sticky_sessions: request.stickySessions,
  sticky_sessions_cookie_name: request.stickySessionsCookieName,
  timeout_connect: request.timeoutConnect,
  timeout_server: request.timeoutServer,
  timeout_tunnel: request.timeoutTunnel,
})

export const marshalZonedApiCreateCertificateRequest = (
  request: ZonedApiCreateCertificateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('certiticate'),
  ...resolveOneOf<unknown>(
    [
      {
        param: 'letsencrypt',
        value: request.letsencrypt
          ? marshalCreateCertificateRequestLetsencryptConfig(
              request.letsencrypt,
              defaults,
            )
          : undefined,
      },
      {
        param: 'custom_certificate',
        value: request.customCertificate
          ? marshalCreateCertificateRequestCustomCertificate(
              request.customCertificate,
              defaults,
            )
          : undefined,
      },
    ],
    true,
  ),
})

export const marshalZonedApiCreateFrontendRequest = (
  request: ZonedApiCreateFrontendRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backend_id: request.backendId,
  certificate_id: request.certificateId,
  certificate_ids: request.certificateIds,
  inbound_port: request.inboundPort,
  name: request.name || randomName('lbf'),
  timeout_client: request.timeoutClient,
})

export const marshalZonedApiCreateIpRequest = (
  request: ZonedApiCreateIpRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reverse: request.reverse,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
})

export const marshalZonedApiCreateLbRequest = (
  request: ZonedApiCreateLbRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ip_id: request.ipId,
  name: request.name || randomName('lb'),
  ssl_compatibility_level: request.sslCompatibilityLevel,
  tags: request.tags,
  type: request.type,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
})

export const marshalZonedApiCreateRouteRequest = (
  request: ZonedApiCreateRouteRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backend_id: request.backendId,
  frontend_id: request.frontendId,
  match: request.match ? marshalRouteMatch(request.match, defaults) : undefined,
})

export const marshalZonedApiCreateSubscriberRequest = (
  request: ZonedApiCreateSubscriberRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
  ...resolveOneOf<unknown>([
    {
      param: 'email_config',
      value: request.emailConfig
        ? marshalSubscriberEmailConfig(request.emailConfig, defaults)
        : undefined,
    },
    {
      param: 'webhook_config',
      value: request.webhookConfig
        ? marshalSubscriberWebhookConfig(request.webhookConfig, defaults)
        : undefined,
    },
  ]),
})

export const marshalZonedApiMigrateLbRequest = (
  request: ZonedApiMigrateLbRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  type: request.type,
})

export const marshalZonedApiRemoveBackendServersRequest = (
  request: ZonedApiRemoveBackendServersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  server_ip: request.serverIp,
})

export const marshalZonedApiSetAclsRequest = (
  request: ZonedApiSetAclsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acls: request.acls.map(elt => marshalAclSpec(elt, defaults)),
})

export const marshalZonedApiSetBackendServersRequest = (
  request: ZonedApiSetBackendServersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  server_ip: request.serverIp,
})

export const marshalZonedApiSubscribeToLbRequest = (
  request: ZonedApiSubscribeToLbRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  subscriber_id: request.subscriberId,
})

export const marshalZonedApiUpdateAclRequest = (
  request: ZonedApiUpdateAclRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: marshalAclAction(request.action, defaults),
  index: request.index,
  match: marshalAclMatch(request.match, defaults),
  name: request.name,
})

export const marshalZonedApiUpdateBackendRequest = (
  request: ZonedApiUpdateBackendRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  failover_host: request.failoverHost,
  forward_port: request.forwardPort,
  forward_port_algorithm: request.forwardPortAlgorithm,
  forward_protocol: request.forwardProtocol,
  name: request.name,
  on_marked_down_action: request.onMarkedDownAction,
  proxy_protocol: request.proxyProtocol,
  send_proxy_v2: request.sendProxyV2,
  sticky_sessions: request.stickySessions,
  sticky_sessions_cookie_name: request.stickySessionsCookieName,
  timeout_connect: request.timeoutConnect,
  timeout_server: request.timeoutServer,
  timeout_tunnel: request.timeoutTunnel,
})

export const marshalZonedApiUpdateCertificateRequest = (
  request: ZonedApiUpdateCertificateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})

export const marshalZonedApiUpdateFrontendRequest = (
  request: ZonedApiUpdateFrontendRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backend_id: request.backendId,
  certificate_id: request.certificateId,
  certificate_ids: request.certificateIds,
  inbound_port: request.inboundPort,
  name: request.name,
  timeout_client: request.timeoutClient,
})

export const marshalZonedApiUpdateHealthCheckRequest = (
  request: ZonedApiUpdateHealthCheckRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  check_delay: request.checkDelay,
  check_max_retries: request.checkMaxRetries,
  check_send_proxy: request.checkSendProxy,
  check_timeout: request.checkTimeout,
  port: request.port,
  ...resolveOneOf<unknown>([
    {
      param: 'mysql_config',
      value: request.mysqlConfig
        ? marshalHealthCheckMysqlConfig(request.mysqlConfig, defaults)
        : undefined,
    },
    {
      param: 'ldap_config',
      value: request.ldapConfig
        ? marshalHealthCheckLdapConfig(request.ldapConfig, defaults)
        : undefined,
    },
    {
      param: 'redis_config',
      value: request.redisConfig
        ? marshalHealthCheckRedisConfig(request.redisConfig, defaults)
        : undefined,
    },
    {
      param: 'pgsql_config',
      value: request.pgsqlConfig
        ? marshalHealthCheckPgsqlConfig(request.pgsqlConfig, defaults)
        : undefined,
    },
    {
      param: 'tcp_config',
      value: request.tcpConfig
        ? marshalHealthCheckTcpConfig(request.tcpConfig, defaults)
        : undefined,
    },
    {
      param: 'http_config',
      value: request.httpConfig
        ? marshalHealthCheckHttpConfig(request.httpConfig, defaults)
        : undefined,
    },
    {
      param: 'https_config',
      value: request.httpsConfig
        ? marshalHealthCheckHttpsConfig(request.httpsConfig, defaults)
        : undefined,
    },
  ]),
})

export const marshalZonedApiUpdateIpRequest = (
  request: ZonedApiUpdateIpRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reverse: request.reverse,
})

export const marshalZonedApiUpdateLbRequest = (
  request: ZonedApiUpdateLbRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  ssl_compatibility_level: request.sslCompatibilityLevel,
  tags: request.tags,
})

export const marshalZonedApiUpdateRouteRequest = (
  request: ZonedApiUpdateRouteRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backend_id: request.backendId,
  match: request.match ? marshalRouteMatch(request.match, defaults) : undefined,
})

export const marshalZonedApiUpdateSubscriberRequest = (
  request: ZonedApiUpdateSubscriberRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  ...resolveOneOf<unknown>([
    {
      param: 'email_config',
      value: request.emailConfig
        ? marshalSubscriberEmailConfig(request.emailConfig, defaults)
        : undefined,
    },
    {
      param: 'webhook_config',
      value: request.webhookConfig
        ? marshalSubscriberWebhookConfig(request.webhookConfig, defaults)
        : undefined,
    },
  ]),
})
