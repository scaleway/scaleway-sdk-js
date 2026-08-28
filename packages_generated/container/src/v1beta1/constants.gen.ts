// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ContainerHttpOption,
  ContainerPrivacy,
  ContainerProtocol,
  ContainerSandbox,
  ContainerStatus,
  CronStatus,
  DomainStatus,
  ListContainersRequestOrderBy,
  ListCronsRequestOrderBy,
  ListDomainsRequestOrderBy,
  ListNamespacesRequestOrderBy,
  ListTokensRequestOrderBy,
  ListTriggersRequestOrderBy,
  NamespaceStatus,
  TokenStatus,
  TriggerInputType,
  TriggerStatus,
} from './types.gen.js'


/** Lists all values of the enum {@link ContainerHttpOption}. */
export const CONTAINER_HTTP_OPTIONS: ContainerHttpOption[] = [
  'unknown_http_option',
  'enabled',
  'redirected',
]

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
  'unknown',
  'ready',
  'deleting',
  'error',
  'locked',
  'creating',
  'pending',
  'created',
  'locking',
  'upgrading',
]

/** Lists all values of the enum {@link CronStatus}. */
export const CRON_STATUSES: CronStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'error',
  'locked',
  'creating',
  'pending',
  'locking',
  'upgrading',
  'rebalancing',
]

/** Lists all values of the enum {@link DomainStatus}. */
export const DOMAIN_STATUSES: DomainStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'error',
  'creating',
  'pending',
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

/** Lists all values of the enum {@link ListCronsRequestOrderBy}. */
export const LIST_CRONS_REQUEST_ORDER_BIES: ListCronsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
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

/** Lists all values of the enum {@link ListTokensRequestOrderBy}. */
export const LIST_TOKENS_REQUEST_ORDER_BIES: ListTokensRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListTriggersRequestOrderBy}. */
export const LIST_TRIGGERS_REQUEST_ORDER_BIES: ListTriggersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link NamespaceStatus}. */
export const NAMESPACE_STATUSES: NamespaceStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'error',
  'locked',
  'creating',
  'pending',
  'locking',
  'upgrading',
]

/** Lists all values of the enum {@link TokenStatus}. */
export const TOKEN_STATUSES: TokenStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'error',
  'creating',
]

/** Lists all values of the enum {@link TriggerInputType}. */
export const TRIGGER_INPUT_TYPES: TriggerInputType[] = [
  'unknown_input_type',
  'sqs',
  'scw_sqs',
  'nats',
  'scw_nats',
]

/** Lists all values of the enum {@link TriggerStatus}. */
export const TRIGGER_STATUSES: TriggerStatus[] = [
  'unknown_status',
  'ready',
  'deleting',
  'error',
  'creating',
  'pending',
  'locked',
  'locking',
  'upgrading',
]

