// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  Arch,
  AttachServerVolumeRequestVolumeType,
  BootType,
  ImageState,
  IpState,
  IpType,
  ListServersRequestOrder,
  PlacementGroupPolicyMode,
  PlacementGroupPolicyType,
  PrivateNICState,
  SecurityGroupPolicy,
  SecurityGroupRuleAction,
  SecurityGroupRuleDirection,
  SecurityGroupRuleProtocol,
  SecurityGroupState,
  ServerAction,
  ServerFilesystemState,
  ServerIpIpFamily,
  ServerIpProvisioningMode,
  ServerIpState,
  ServerState,
  ServerTypesAvailability,
  SnapshotState,
  SnapshotVolumeType,
  TaskStatus,
  VolumeServerState,
  VolumeServerVolumeType,
  VolumeState,
  VolumeVolumeType,
} from './types.gen.js'


/** Lists all values of the enum {@link Arch}. */
export const ARCHES: Arch[] = [
  'unknown_arch',
  'x86_64',
  'arm',
  'arm64',
]

/** Lists all values of the enum {@link AttachServerVolumeRequestVolumeType}. */
export const ATTACH_SERVER_VOLUME_REQUEST_VOLUME_TYPES: AttachServerVolumeRequestVolumeType[] = [
  'unknown_volume_type',
  'l_ssd',
  'b_ssd',
  'sbs_volume',
]

/** Lists all values of the enum {@link BootType}. */
export const BOOT_TYPES: BootType[] = [
  'local',
  'bootscript',
  'rescue',
]

/** Lists all values of the enum {@link ImageState}. */
export const IMAGE_STATES: ImageState[] = [
  'available',
  'creating',
  'error',
]

/** Lists all values of the enum {@link IpState}. */
export const IP_STATES: IpState[] = [
  'unknown_state',
  'detached',
  'attached',
  'pending',
  'error',
]

/** Lists all values of the enum {@link IpType}. */
export const IP_TYPES: IpType[] = [
  'unknown_iptype',
  'routed_ipv4',
  'routed_ipv6',
]

/** Lists all values of the enum {@link ListServersRequestOrder}. */
export const LIST_SERVERS_REQUEST_ORDERS: ListServersRequestOrder[] = [
  'creation_date_desc',
  'creation_date_asc',
  'modification_date_desc',
  'modification_date_asc',
]

/** Lists all values of the enum {@link PlacementGroupPolicyMode}. */
export const PLACEMENT_GROUP_POLICY_MODES: PlacementGroupPolicyMode[] = [
  'optional',
  'enforced',
]

/** Lists all values of the enum {@link PlacementGroupPolicyType}. */
export const PLACEMENT_GROUP_POLICY_TYPES: PlacementGroupPolicyType[] = [
  'max_availability',
  'low_latency',
]

/** Lists all values of the enum {@link PrivateNICState}. */
export const PRIVATE_NIC_STATES: PrivateNICState[] = [
  'available',
  'syncing',
  'syncing_error',
]

/** Lists all values of the enum {@link SecurityGroupPolicy}. */
export const SECURITY_GROUP_POLICIES: SecurityGroupPolicy[] = [
  'unknown_policy',
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
]

/** Lists all values of the enum {@link SecurityGroupRuleProtocol}. */
export const SECURITY_GROUP_RULE_PROTOCOLS: SecurityGroupRuleProtocol[] = [
  'unknown_protocol',
  'TCP',
  'UDP',
  'ICMP',
  'ANY',
]

/** Lists all values of the enum {@link SecurityGroupState}. */
export const SECURITY_GROUP_STATES: SecurityGroupState[] = [
  'available',
  'syncing',
  'syncing_error',
]

/** Lists all values of the enum {@link ServerAction}. */
export const SERVER_ACTIONS: ServerAction[] = [
  'poweron',
  'backup',
  'stop_in_place',
  'poweroff',
  'terminate',
  'reboot',
  'enable_routed_ip',
]

/** Lists all values of the enum {@link ServerFilesystemState}. */
export const SERVER_FILESYSTEM_STATES: ServerFilesystemState[] = [
  'unknown_state',
  'attaching',
  'available',
  'detaching',
]

/** Lists all values of the enum {@link ServerIpIpFamily}. */
export const SERVER_IP_IP_FAMILIES: ServerIpIpFamily[] = [
  'inet',
  'inet6',
]

/** Lists all values of the enum {@link ServerIpProvisioningMode}. */
export const SERVER_IP_PROVISIONING_MODES: ServerIpProvisioningMode[] = [
  'manual',
  'dhcp',
  'slaac',
]

/** Lists all values of the enum {@link ServerIpState}. */
export const SERVER_IP_STATES: ServerIpState[] = [
  'unknown_state',
  'detached',
  'attached',
  'pending',
  'error',
]

/** Lists all values of the enum {@link ServerState}. */
export const SERVER_STATES: ServerState[] = [
  'running',
  'stopped',
  'stopped in place',
  'starting',
  'stopping',
  'locked',
]

/** Lists all values of the enum {@link ServerTypesAvailability}. */
export const SERVER_TYPES_AVAILABILITIES: ServerTypesAvailability[] = [
  'available',
  'scarce',
  'shortage',
]

/** Lists all values of the enum {@link SnapshotState}. */
export const SNAPSHOT_STATES: SnapshotState[] = [
  'available',
  'snapshotting',
  'error',
  'invalid_data',
  'importing',
  'exporting',
]

/** Lists all values of the enum {@link SnapshotVolumeType}. */
export const SNAPSHOT_VOLUME_TYPES: SnapshotVolumeType[] = [
  'unknown_volume_type',
  'l_ssd',
  'b_ssd',
  'unified',
]

/** Lists all values of the enum {@link TaskStatus}. */
export const TASK_STATUSES: TaskStatus[] = [
  'pending',
  'started',
  'success',
  'failure',
  'retry',
]

/** Lists all values of the enum {@link VolumeServerState}. */
export const VOLUME_SERVER_STATES: VolumeServerState[] = [
  'available',
  'snapshotting',
  'resizing',
  'fetching',
  'saving',
  'hotsyncing',
  'attaching',
  'error',
]

/** Lists all values of the enum {@link VolumeServerVolumeType}. */
export const VOLUME_SERVER_VOLUME_TYPES: VolumeServerVolumeType[] = [
  'l_ssd',
  'b_ssd',
  'sbs_volume',
  'scratch',
]

/** Lists all values of the enum {@link VolumeState}. */
export const VOLUME_STATES: VolumeState[] = [
  'available',
  'snapshotting',
  'fetching',
  'saving',
  'attaching',
  'resizing',
  'hotsyncing',
  'error',
]

/** Lists all values of the enum {@link VolumeVolumeType}. */
export const VOLUME_VOLUME_TYPES: VolumeVolumeType[] = [
  'l_ssd',
  'b_ssd',
  'unified',
  'scratch',
  'sbs_volume',
  'sbs_snapshot',
]

