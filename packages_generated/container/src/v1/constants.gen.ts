// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ContainerPrivacy,
  ContainerProtocol,
  ContainerSandbox,
  ContainerStatus,
  CreateTriggerRequestDestinationConfigHttpMethod,
  DomainStatus,
  ListContainersRequestOrderBy,
  ListDomainsRequestOrderBy,
  ListNamespacesRequestOrderBy,
  ListTriggersRequestOrderBy,
  NamespaceStatus,
  TriggerDestinationConfigHttpMethod,
  TriggerSourceType,
  TriggerStatus,
  UpdateTriggerRequestDestinationConfigHttpMethod,
} from './types.gen.js'


/** Lists all values of the enum {@link ContainerPrivacy}. */
export const CONTAINER_PRIVACIES: ContainerPrivacy[] = [
  'unknown_privacy',
  'public',
  'private',
]

/** Lists all values of the enum {@link ContainerProtocol}. */
export const CONTAINER_PROTOCOLS: ContainerProtocol[] = [
  'unknown_protocol',
  'http1',
  'h2c',
]

/** Lists all values of the enum {@link ContainerSandbox}. */
export const CONTAINER_SANDBOXES: ContainerSandbox[] = [
  'unknown_sandbox',
  'v1',
  'v2',
]

/** Lists all values of the enum {@link ContainerStatus}. */
export const CONTAINER_STATUSES: ContainerStatus[] = [
  'unknown_status',
  'updating',
  'deleting',
  'locking',
  'ready',
  'error',
  'locked',
  'creating',
  'upgrading',
]

/** Lists all values of the enum {@link CreateTriggerRequestDestinationConfigHttpMethod}. */
export const CREATE_TRIGGER_REQUEST_DESTINATION_CONFIG_HTTP_METHODS: CreateTriggerRequestDestinationConfigHttpMethod[] = [
  'unknown_http_method',
  'get',
  'post',
  'put',
  'patch',
  'delete',
]

/** Lists all values of the enum {@link DomainStatus}. */
export const DOMAIN_STATUSES: DomainStatus[] = [
  'unknown_status',
  'creating',
  'updating',
  'deleting',
  'ready',
  'error',
  'locked',
  'locking',
  'upgrading',
]

/** Lists all values of the enum {@link ListContainersRequestOrderBy}. */
export const LIST_CONTAINERS_REQUEST_ORDER_BIES: ListContainersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListDomainsRequestOrderBy}. */
export const LIST_DOMAINS_REQUEST_ORDER_BIES: ListDomainsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'hostname_asc',
  'hostname_desc',
]

/** Lists all values of the enum {@link ListNamespacesRequestOrderBy}. */
export const LIST_NAMESPACES_REQUEST_ORDER_BIES: ListNamespacesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListTriggersRequestOrderBy}. */
export const LIST_TRIGGERS_REQUEST_ORDER_BIES: ListTriggersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link NamespaceStatus}. */
export const NAMESPACE_STATUSES: NamespaceStatus[] = [
  'unknown_status',
  'updating',
  'deleting',
  'locking',
  'ready',
  'error',
  'locked',
  'creating',
  'upgrading',
]

/** Lists all values of the enum {@link TriggerDestinationConfigHttpMethod}. */
export const TRIGGER_DESTINATION_CONFIG_HTTP_METHODS: TriggerDestinationConfigHttpMethod[] = [
  'unknown_http_method',
  'get',
  'post',
  'put',
  'patch',
  'delete',
]

/** Lists all values of the enum {@link TriggerSourceType}. */
export const TRIGGER_SOURCE_TYPES: TriggerSourceType[] = [
  'unknown_source_type',
  'cron',
  'sqs',
  'nats',
]

/** Lists all values of the enum {@link TriggerStatus}. */
export const TRIGGER_STATUSES: TriggerStatus[] = [
  'unknown_status',
  'ready',
  'deleting',
  'error',
  'updating',
  'creating',
  'locking',
  'locked',
  'upgrading',
]

/** Lists all values of the enum {@link UpdateTriggerRequestDestinationConfigHttpMethod}. */
export const UPDATE_TRIGGER_REQUEST_DESTINATION_CONFIG_HTTP_METHODS: UpdateTriggerRequestDestinationConfigHttpMethod[] = [
  'unknown_http_method',
  'get',
  'post',
  'put',
  'patch',
  'delete',
]

