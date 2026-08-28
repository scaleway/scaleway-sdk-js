// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  CreateServerRequestBookIPIPType,
  CreateServerRequestServerVolumeVolumeType,
  CreateVolumeRequestVolumeType,
  ListPlacementGroupsRequestOrderBy,
  ListPrivateNetworkInterfacesRequestOrderBy,
  ListSecurityGroupsRequestOrderBy,
  ListServersRequestOrderBy,
  ListSnapshotsRequestOrderBy,
  ListTemplatesRequestOrderBy,
  ListVolumesRequestOrderBy,
  PlacementGroupPolicyType,
  PrivateNetworkInterfaceStatus,
  SecurityGroupAction,
  SecurityGroupRuleAction,
  SecurityGroupRuleDirection,
  SecurityGroupRuleProtocol,
  ServerArchitecture,
  ServerFilesystemStatus,
  ServerIPStatus,
  ServerPrivateNetworkInterfaceStatus,
  ServerPublicNetworkInterfaceStatus,
  ServerStatus,
  ServerTypeArchitecture,
  ServerTypeAvailability,
  ServerVolumeVolumeType,
  SnapshotStatus,
  SnapshotVolumeType,
  VolumeStatus,
  VolumeVolumeType,
} from './types.gen.js'


/** Lists all values of the enum {@link CreateServerRequestBookIPIPType}. */
export const CREATE_SERVER_REQUEST_BOOK_IPIP_TYPES: CreateServerRequestBookIPIPType[] = [
  'unknown_ip_type',
  'zonal_ipv4',
  'zonal_ipv6',
]

/** Lists all values of the enum {@link CreateServerRequestServerVolumeVolumeType}. */
export const CREATE_SERVER_REQUEST_SERVER_VOLUME_VOLUME_TYPES: CreateServerRequestServerVolumeVolumeType[] = [
  'unknown_volume_type',
  'l_ssd',
  'sbs',
  'scratch',
]

/** Lists all values of the enum {@link CreateVolumeRequestVolumeType}. */
export const CREATE_VOLUME_REQUEST_VOLUME_TYPES: CreateVolumeRequestVolumeType[] = [
  'unknown_volume_type',
  'l_ssd',
  'scratch',
]

/** Lists all values of the enum {@link ListPlacementGroupsRequestOrderBy}. */
export const LIST_PLACEMENT_GROUPS_REQUEST_ORDER_BIES: ListPlacementGroupsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
]

/** Lists all values of the enum {@link ListPrivateNetworkInterfacesRequestOrderBy}. */
export const LIST_PRIVATE_NETWORK_INTERFACES_REQUEST_ORDER_BIES: ListPrivateNetworkInterfacesRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
]

/** Lists all values of the enum {@link ListSecurityGroupsRequestOrderBy}. */
export const LIST_SECURITY_GROUPS_REQUEST_ORDER_BIES: ListSecurityGroupsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
]

/** Lists all values of the enum {@link ListServersRequestOrderBy}. */
export const LIST_SERVERS_REQUEST_ORDER_BIES: ListServersRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
]

/** Lists all values of the enum {@link ListSnapshotsRequestOrderBy}. */
export const LIST_SNAPSHOTS_REQUEST_ORDER_BIES: ListSnapshotsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
]

/** Lists all values of the enum {@link ListTemplatesRequestOrderBy}. */
export const LIST_TEMPLATES_REQUEST_ORDER_BIES: ListTemplatesRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
]

/** Lists all values of the enum {@link ListVolumesRequestOrderBy}. */
export const LIST_VOLUMES_REQUEST_ORDER_BIES: ListVolumesRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
]

/** Lists all values of the enum {@link PlacementGroupPolicyType}. */
export const PLACEMENT_GROUP_POLICY_TYPES: PlacementGroupPolicyType[] = [
  'unknown_policy_type',
  'low_latency',
  'max_availability',
]

/** Lists all values of the enum {@link PrivateNetworkInterfaceStatus}. */
export const PRIVATE_NETWORK_INTERFACE_STATUSES: PrivateNetworkInterfaceStatus[] = [
  'unknown_status',
  'available',
  'attaching',
  'detaching',
  'syncing',
]

/** Lists all values of the enum {@link SecurityGroupAction}. */
export const SECURITY_GROUP_ACTIONS: SecurityGroupAction[] = [
  'unknown_action',
  'accept',
  'drop',
]

/** Lists all values of the enum {@link SecurityGroupRuleAction}. */
export const SECURITY_GROUP_RULE_ACTIONS: SecurityGroupRuleAction[] = [
  'unknown_action',
  'accept',
  'drop',
]

/** Lists all values of the enum {@link SecurityGroupRuleDirection}. */
export const SECURITY_GROUP_RULE_DIRECTIONS: SecurityGroupRuleDirection[] = [
  'unknown_direction',
  'inbound',
  'outbound',
  'both',
]

/** Lists all values of the enum {@link SecurityGroupRuleProtocol}. */
export const SECURITY_GROUP_RULE_PROTOCOLS: SecurityGroupRuleProtocol[] = [
  'unknown_protocol',
  'tcp',
  'udp',
  'icmp',
  'any',
]

/** Lists all values of the enum {@link ServerArchitecture}. */
export const SERVER_ARCHITECTURES: ServerArchitecture[] = [
  'unknown_architecture',
  'x86_64',
  'aarch64',
]

/** Lists all values of the enum {@link ServerFilesystemStatus}. */
export const SERVER_FILESYSTEM_STATUSES: ServerFilesystemStatus[] = [
  'unknown_status',
  'attaching',
  'available',
  'detaching',
]

/** Lists all values of the enum {@link ServerIPStatus}. */
export const SERVER_IP_STATUSES: ServerIPStatus[] = [
  'unknown_status',
  'detached',
  'attached',
  'pending',
  'error',
]

/** Lists all values of the enum {@link ServerPrivateNetworkInterfaceStatus}. */
export const SERVER_PRIVATE_NETWORK_INTERFACE_STATUSES: ServerPrivateNetworkInterfaceStatus[] = [
  'unknown_status',
  'available',
  'attaching',
  'detaching',
  'syncing',
]

/** Lists all values of the enum {@link ServerPublicNetworkInterfaceStatus}. */
export const SERVER_PUBLIC_NETWORK_INTERFACE_STATUSES: ServerPublicNetworkInterfaceStatus[] = [
  'unknown_status',
  'available',
  'syncing',
]

/** Lists all values of the enum {@link ServerStatus}. */
export const SERVER_STATUSES: ServerStatus[] = [
  'unknown_status',
  'started',
  'stopped',
  'paused',
  'starting',
  'stopping',
  'pausing',
  'locked',
  'rebooting',
]

/** Lists all values of the enum {@link ServerTypeArchitecture}. */
export const SERVER_TYPE_ARCHITECTURES: ServerTypeArchitecture[] = [
  'unknown_architecture',
  'x86_64',
  'aarch64',
]

/** Lists all values of the enum {@link ServerTypeAvailability}. */
export const SERVER_TYPE_AVAILABILITIES: ServerTypeAvailability[] = [
  'unknown_availability',
  'available',
  'low_stock',
  'out_of_stock',
]

/** Lists all values of the enum {@link ServerVolumeVolumeType}. */
export const SERVER_VOLUME_VOLUME_TYPES: ServerVolumeVolumeType[] = [
  'unknown_volume_type',
  'l_ssd',
  'sbs',
  'scratch',
]

/** Lists all values of the enum {@link SnapshotStatus}. */
export const SNAPSHOT_STATUSES: SnapshotStatus[] = [
  'unknown_status',
  'available',
  'creating',
  'error',
  'invalid_data',
  'exporting',
]

/** Lists all values of the enum {@link SnapshotVolumeType}. */
export const SNAPSHOT_VOLUME_TYPES: SnapshotVolumeType[] = [
  'unknown_volume_type',
  'l_ssd',
]

/** Lists all values of the enum {@link VolumeStatus}. */
export const VOLUME_STATUSES: VolumeStatus[] = [
  'unknown_status',
  'available',
  'snapshotting',
  'attaching',
  'detaching',
  'creating',
  'migrating',
  'error',
]

/** Lists all values of the enum {@link VolumeVolumeType}. */
export const VOLUME_VOLUME_TYPES: VolumeVolumeType[] = [
  'unknown_volume_type',
  'l_ssd',
  'scratch',
]

