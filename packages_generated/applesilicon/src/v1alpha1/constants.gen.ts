// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  CommitmentType,
  ConnectivityDiagnosticActionType,
  ConnectivityDiagnosticDiagnosticStatus,
  ListServerPrivateNetworksRequestOrderBy,
  ListServersRequestOrderBy,
  RunnerConfigurationProvider,
  RunnerConfigurationV2Provider,
  RunnerStatus,
  ServerPrivateNetworkServerStatus,
  ServerPrivateNetworkStatus,
  ServerStatus,
  ServerTypeStock,
} from './types.gen.js'


/** Lists all values of the enum {@link CommitmentType}. */
export const COMMITMENT_TYPES: CommitmentType[] = [
  'duration_24h',
  'renewed_monthly',
  'none',
]

/** Lists all values of the enum {@link ConnectivityDiagnosticActionType}. */
export const CONNECTIVITY_DIAGNOSTIC_ACTION_TYPES: ConnectivityDiagnosticActionType[] = [
  'reboot_server',
  'reinstall_server',
]

/** Lists all values of the enum {@link ConnectivityDiagnosticDiagnosticStatus}. */
export const CONNECTIVITY_DIAGNOSTIC_DIAGNOSTIC_STATUSES: ConnectivityDiagnosticDiagnosticStatus[] = [
  'unknown_status',
  'processing',
  'error',
  'completed',
]

/** Lists all values of the enum {@link ListServerPrivateNetworksRequestOrderBy}. */
export const LIST_SERVER_PRIVATE_NETWORKS_REQUEST_ORDER_BIES: ListServerPrivateNetworksRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListServersRequestOrderBy}. */
export const LIST_SERVERS_REQUEST_ORDER_BIES: ListServersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link RunnerConfigurationProvider}. */
export const RUNNER_CONFIGURATION_PROVIDERS: RunnerConfigurationProvider[] = [
  'unknown_provider',
  'github',
  'gitlab',
]

/** Lists all values of the enum {@link RunnerConfigurationV2Provider}. */
export const RUNNER_CONFIGURATION_V2_PROVIDERS: RunnerConfigurationV2Provider[] = [
  'unknown_provider',
  'github',
  'gitlab',
]

/** Lists all values of the enum {@link RunnerStatus}. */
export const RUNNER_STATUSES: RunnerStatus[] = [
  'unknown_status',
  'waiting',
  'enabled',
  'disabled',
  'error',
]

/** Lists all values of the enum {@link ServerPrivateNetworkServerStatus}. */
export const SERVER_PRIVATE_NETWORK_SERVER_STATUSES: ServerPrivateNetworkServerStatus[] = [
  'unknown_status',
  'attaching',
  'attached',
  'error',
  'detaching',
  'locked',
]

/** Lists all values of the enum {@link ServerPrivateNetworkStatus}. */
export const SERVER_PRIVATE_NETWORK_STATUSES: ServerPrivateNetworkStatus[] = [
  'vpc_unknown_status',
  'vpc_enabled',
  'vpc_updating',
  'vpc_disabled',
]

/** Lists all values of the enum {@link ServerStatus}. */
export const SERVER_STATUSES: ServerStatus[] = [
  'unknown_status',
  'starting',
  'ready',
  'error',
  'rebooting',
  'updating',
  'locking',
  'locked',
  'unlocking',
  'reinstalling',
  'busy',
]

/** Lists all values of the enum {@link ServerTypeStock}. */
export const SERVER_TYPE_STOCKS: ServerTypeStock[] = [
  'unknown_stock',
  'no_stock',
  'low_stock',
  'high_stock',
]

