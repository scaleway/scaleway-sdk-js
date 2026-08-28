// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  CronStatus,
  DomainStatus,
  FunctionHttpOption,
  FunctionPrivacy,
  FunctionRuntime,
  FunctionSandbox,
  FunctionStatus,
  ListCronsRequestOrderBy,
  ListDomainsRequestOrderBy,
  ListFunctionsRequestOrderBy,
  ListNamespacesRequestOrderBy,
  ListTokensRequestOrderBy,
  ListTriggersRequestOrderBy,
  NamespaceStatus,
  RuntimeStatus,
  TokenStatus,
  TriggerInputType,
  TriggerStatus,
} from './types.gen.js'


/** Lists all values of the enum {@link CronStatus}. */
export const CRON_STATUSES: CronStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'error',
  'locked',
  'creating',
  'pending',
]

/** Lists all values of the enum {@link DomainStatus}. */
export const DOMAIN_STATUSES: DomainStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'error',
  'creating',
  'pending',
]

/** Lists all values of the enum {@link FunctionHttpOption}. */
export const FUNCTION_HTTP_OPTIONS: FunctionHttpOption[] = [
  'unknown_http_option',
  'enabled',
  'redirected',
]

/** Lists all values of the enum {@link FunctionPrivacy}. */
export const FUNCTION_PRIVACIES: FunctionPrivacy[] = [
  'unknown_privacy',
  'public',
  'private',
]

/** Lists all values of the enum {@link FunctionRuntime}. */
export const FUNCTION_RUNTIMES: FunctionRuntime[] = [
  'unknown_runtime',
  'golang',
  'python',
  'python3',
  'node8',
  'node10',
  'node14',
  'node16',
  'node17',
  'python37',
  'python38',
  'python39',
  'python310',
  'go113',
  'go117',
  'go118',
  'node18',
  'rust165',
  'go119',
  'python311',
  'php82',
  'node19',
  'go120',
  'node20',
  'go121',
  'node22',
  'python312',
  'php83',
  'go122',
  'rust179',
  'go123',
  'go124',
  'python313',
  'rust185',
  'php84',
  'node24',
  'node26',
  'go125',
  'go126',
  'php85',
  'python314',
  'rust196',
]

/** Lists all values of the enum {@link FunctionSandbox}. */
export const FUNCTION_SANDBOXES: FunctionSandbox[] = [
  'unknown_sandbox',
  'v1',
  'v2',
]

/** Lists all values of the enum {@link FunctionStatus}. */
export const FUNCTION_STATUSES: FunctionStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'error',
  'locked',
  'creating',
  'pending',
  'created',
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

/** Lists all values of the enum {@link ListFunctionsRequestOrderBy}. */
export const LIST_FUNCTIONS_REQUEST_ORDER_BIES: ListFunctionsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
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
]

/** Lists all values of the enum {@link RuntimeStatus}. */
export const RUNTIME_STATUSES: RuntimeStatus[] = [
  'unknown_status',
  'beta',
  'available',
  'deprecated',
  'end_of_support',
  'end_of_life',
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
]

