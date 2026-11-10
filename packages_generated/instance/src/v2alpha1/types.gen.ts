// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type CreateServerRequestBookIPIPType =
  | 'unknown_ip_type'
  | 'zonal_ipv4'
  | 'zonal_ipv6'

export type CreateServerRequestServerVolumeVolumeType =
  | 'unknown_volume_type'
  | 'l_ssd'
  | 'sbs'
  | 'scratch'

export type CreateVolumeRequestVolumeType =
  | 'unknown_volume_type'
  | 'l_ssd'
  | 'scratch'

export type ListDedicatedPoolsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListPlacementGroupsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListPrivateNetworkInterfacesRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListSecurityGroupsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListServersRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListSnapshotsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListTemplatesRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListVolumesRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type PlacementGroupPolicyType =
  | 'unknown_policy_type'
  | 'low_latency'
  | 'max_availability'

export type PrivateNetworkInterfaceStatus =
  | 'unknown_status'
  | 'available'
  | 'attaching'
  | 'detaching'
  | 'syncing'
  | 'deleting'
  | 'detach_error'
  | 'delete_error'

export type SecurityGroupAction =
  | 'unknown_action'
  | 'accept'
  | 'drop'

export type SecurityGroupRuleAction =
  | 'unknown_action'
  | 'accept'
  | 'drop'

export type SecurityGroupRuleDirection =
  | 'unknown_direction'
  | 'inbound'
  | 'outbound'
  | 'both'

export type SecurityGroupRuleProtocol =
  | 'unknown_protocol'
  | 'tcp'
  | 'udp'
  | 'icmp'
  | 'any'

export type ServerArchitecture =
  | 'unknown_architecture'
  | 'x86_64'
  | 'aarch64'

export type ServerFilesystemStatus =
  | 'unknown_status'
  | 'attaching'
  | 'available'
  | 'detaching'

export type ServerIPStatus =
  | 'unknown_status'
  | 'detached'
  | 'attached'
  | 'pending'
  | 'error'

export type ServerPrivateNetworkInterfaceStatus =
  | 'unknown_status'
  | 'available'
  | 'attaching'
  | 'detaching'
  | 'syncing'
  | 'deleting'
  | 'detach_error'
  | 'delete_error'

export type ServerPublicNetworkInterfaceStatus =
  | 'unknown_status'
  | 'available'
  | 'syncing'

export type ServerStatus =
  | 'unknown_status'
  | 'started'
  | 'stopped'
  | 'paused'
  | 'starting'
  | 'stopping'
  | 'pausing'
  | 'locked'
  | 'rebooting'

export type ServerTypeArchitecture =
  | 'unknown_architecture'
  | 'x86_64'
  | 'aarch64'

export type ServerTypeAvailability =
  | 'unknown_availability'
  | 'available'
  | 'low_stock'
  | 'out_of_stock'
  | 'unavailable'

export type ServerVolumeVolumeType =
  | 'unknown_volume_type'
  | 'l_ssd'
  | 'sbs'
  | 'scratch'

export type SnapshotStatus =
  | 'unknown_status'
  | 'available'
  | 'creating'
  | 'error'
  | 'invalid_data'
  | 'exporting'

export type SnapshotVolumeType =
  | 'unknown_volume_type'
  | 'l_ssd'

export type VolumeStatus =
  | 'unknown_status'
  | 'available'
  | 'snapshotting'
  | 'attaching'
  | 'detaching'
  | 'creating'
  | 'migrating'
  | 'error'

export type VolumeVolumeType =
  | 'unknown_volume_type'
  | 'l_ssd'
  | 'scratch'

export interface SecurityGroupRulePortRange {
  /**
   * Start of the port range.
   */
  start: number
  /**
   * End of the port range.
   */
  end: number
}


export interface CreateServerRequestBookIP {
  /**
   * Type of IP to book.
   */
  type: CreateServerRequestBookIPIPType
  /**
   * Tags to associate with the IP.
   */
  tags: string[]
}


export interface SecurityGroupRule {
  /**
   * Unique ID of the rule.
   */
  id: string
  /**
   * Protocol this rule applies to.
   */
  protocol: SecurityGroupRuleProtocol
  /**
   * Direction of traffic this rule applies to.
   */
  direction: SecurityGroupRuleDirection
  /**
   * Action to take when the rule matches.
   */
  action: SecurityGroupRuleAction
  /**
   * Source IP range for the rule.
   */
  sourceIpRange: string
  /**
   * Destination IP range for the rule.
   */
  destinationIpRange: string
  /**
   * Source port range for the rule.
   */
  sourcePorts?: SecurityGroupRulePortRange | null
  /**
   * Destination port range for the rule.
   */
  destinationPorts?: SecurityGroupRulePortRange | null
  /**
   * Position of the rule in the list.
   */
  position: number
}


export interface CreateServerRequestServerIP {
  /**
   * ID of the IPAM IP to attach.
   *
   * One-of ('serverIp'): at most one of 'ipamIpId', 'newIp' could be set.
   */
  ipamIpId?: string | null
  /**
   * Configuration for a new IP to book.
   *
   * One-of ('serverIp'): at most one of 'ipamIpId', 'newIp' could be set.
   */
  newIp?: CreateServerRequestBookIP | null
}


export interface CreateServerRequestCreateVolume {
  /**
   * Name of the volume.
   */
  name: string
  /**
   * Tags to associate with the volume.
   */
  tags: string[]
  /**
   * Size of the volume.
   */
  size?: number | null
  /**
   * ID of the base snapshot for the volume.
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  baseSnapshotId?: string | null
  /**
   * Label of the image to use for the volume.
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  imageLabel?: string | null
  /**
   * Performance IOPS for the volume.
   */
  perfIops?: number | null
}


export interface ServerTypeGpuInfo {
  /**
   * Manufacturer of the GPU.
   */
  manufacturer: string
  /**
   * Name of the GPU.
   */
  name: string
  /**
   * Memory of the GPU.
   */
  memory: number
}


export interface ServerTypeLimits {
  /**
   * Maximum number of Private Networks.
   */
  privateNetworkCount: number
  /**
   * Maximum number of filesystems.
   */
  fileSystemCount: number
  /**
   * Maximum Private Network bandwidth.
   */
  privateNetworkBandwidth: number
  /**
   * Maximum block storage bandwidth.
   */
  blockBandwidth: number
  /**
   * Maximum internet bandwidth.
   */
  internetBandwidth: number
  /**
   * Maximum size of local SSD.
   */
  lSsdSize: number
  /**
   * Maximum size of scratch storage.
   */
  scratchSize: number
  /**
   * Maximum number of scratch volumes.
   */
  scratchVolumesCount: number
  /**
   * Maximum number of IPs.
   */
  ipCount: number
  /**
   * Maximum number of volumes.
   */
  volumeCount: number
}


export interface ServerTypeSpotInfo {
  availability: ServerTypeAvailability
}


export interface ServerIP {
  id: string
  dynamic: boolean
  status: ServerIPStatus
  default: boolean
  provisionedAddress: string
}


export interface CreateTemplateRequestPrivateNetworkTemplate {
  /**
   * ID of the private network.
   */
  privateNetworkId: string
  /**
   * ID of the security group for the private network.
   */
  securityGroupId?: string | null
}


export interface CreateTemplateRequestVolumeTemplate {
  /**
   * Type of the volume.
   */
  volumeType: CreateServerRequestServerVolumeVolumeType
  /**
   * Name of the volume.
   */
  name: string
  /**
   * Tags associated with the volume.
   */
  tags: string[]
  /**
   * Size of the volume in bytes.
   */
  size?: number | null
  /**
   * ID of the base snapshot for the volume.
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  baseSnapshotId?: string | null
  /**
   * Label of the image used as base for the volume.
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  imageLabel?: string | null
  /**
   * Performance IOPS for the volume.
   */
  perfIops?: number | null
}


export interface SecurityGroupRuleConfig {
  /**
   * Protocol for the rule.
   */
  protocol: SecurityGroupRuleProtocol
  /**
   * Direction of traffic for the rule.
   */
  direction: SecurityGroupRuleDirection
  /**
   * Action to take when the rule matches.
   */
  action: SecurityGroupRuleAction
  /**
   * Source IP range for the rule.
   */
  sourceIpRange: string
  /**
   * Destination IP range for the rule.
   */
  destinationIpRange: string
  /**
   * Source port range for the rule.
   */
  sourcePorts?: SecurityGroupRulePortRange | null
  /**
   * Destination port range for the rule.
   */
  destinationPorts?: SecurityGroupRulePortRange | null
  /**
   * Position of this rule in the rule list, starting at 1.
   */
  position: number
}


export interface SecurityGroup {
  /**
   * Unique ID of the security group.
   */
  id: string
  /**
   * The SRN of the security group.
   */
  srn: string
  /**
   * Name of the security group.
   */
  name: string
  /**
   * Description of the security group.
   */
  description: string
  /**
   * Project ID the security group belongs to.
   */
  projectId: string
  /**
   * Tags associated with the security group.
   */
  tags: string[]
  /**
   * True if default rules are disabled.
   */
  disableDefaultRules: boolean
  /**
   * True if this is the default security group for the project.
   */
  projectDefault: boolean
  /**
   * Default action for inbound rules.
   */
  inboundDefaultAction: SecurityGroupAction
  /**
   * Default action for outbound rules.
   */
  outboundDefaultAction: SecurityGroupAction
  /**
   * True if the security group is stateless.
   */
  stateless: boolean
  /**
   * Creation timestamp of the security group.
   */
  createdAt?: Date | null
  /**
   * Last update timestamp of the security group.
   */
  updatedAt?: Date | null
  /**
   * List of default rules applied to the security group.
   */
  defaultRules: SecurityGroupRule[]
  /**
   * List of custom rules applied to the security group.
   */
  rules: SecurityGroupRule[]
  /**
   * Zone in which the security group is located.
   */
  zone: ScwZone
}


export interface CreateServerRequestPublicNetworkInterface {
  /**
   * ID of the security group for the interface.
   */
  securityGroupId?: string | null
  /**
   * List of IPs to attach to the interface.
   */
  ips: CreateServerRequestServerIP[]
}


export interface CreateServerRequestServerVolume {
  /**
   * Type of the volume.
   */
  volumeType: CreateServerRequestServerVolumeVolumeType
  /**
   * ID of the volume to attach.
   *
   * One-of ('serverVolume'): at most one of 'volumeId', 'newVolume' could be set.
   */
  volumeId?: string | null
  /**
   * Configuration for a new volume to create.
   *
   * One-of ('serverVolume'): at most one of 'volumeId', 'newVolume' could be set.
   */
  newVolume?: CreateServerRequestCreateVolume | null
}


export interface DedicatedPoolPhysicalHost {
  /**
   * The unique identifier of this physical host.
   */
  id: string
}


export interface DedicatedPoolServerType {
  /**
   * Name of the server type.
   */
  name: string
  /**
   * Number of vCPUs.
   */
  vcpuCount: number
  /**
   * Number of GPUs.
   */
  gpuCount: number
  /**
   * Amount of memory.
   */
  memory: number
  /**
   * Architecture of the server type.
   */
  architecture: ServerTypeArchitecture
  /**
   * Availability status of the server type.
   */
  availability: ServerTypeAvailability
  /**
   * Limits for the server type.
   */
  limits?: ServerTypeLimits | null
  /**
   * GPU information for the server type.
   */
  gpuInfo?: ServerTypeGpuInfo | null
  /**
   * Whether the server type has reached end of service.
   */
  endOfService: boolean
  /**
   * Number of additional Instances of this type that can currently be started in this Dedicated Pool.
   */
  slotsAvailable: number
  /**
   * The billing SKU for this server type.
   */
  sku: string
}


export interface DedicatedPoolSummary {
  /**
   * Unique ID of the Dedicated Pool.
   */
  id: string
  /**
   * SRN of the Dedicated Pool.
   */
  srn: string
  /**
   * Organization ID the Dedicated Pool belongs to.
   */
  organizationId: string
  /**
   * Name of the Dedicated Pool.
   */
  name: string
  /**
   * Tags associated with the Dedicated Pool.
   */
  tags: string[]
  /**
   * Creation timestamp of the Dedicated Pool.
   */
  createdAt?: Date | null
  /**
   * Last update timestamp of the Dedicated Pool.
   */
  updatedAt?: Date | null
  /**
   * Zone of the Dedicated Pool.
   */
  zone: ScwZone
}


export interface PlacementGroup {
  /**
   * Placement group unique ID.
   */
  id: string
  /**
   * The SRN of the placement group.
   */
  srn: string
  /**
   * Placement group Project ID.
   */
  projectId: string
  /**
   * Placement group name.
   */
  name: string
  /**
   * Select the behavior of the placement group, either low_latency (group) or max_availability (spread).
   */
  policyType: PlacementGroupPolicyType
  /**
   * Placement group tags.
   */
  tags: string[]
  /**
   * Placement group creation date.
   */
  createdAt?: Date | null
  /**
   * Placement group modification date.
   */
  updatedAt?: Date | null
  /**
   * Zone in which the placement group is located.
   */
  zone: ScwZone
}


export interface PrivateNetworkInterfaceSummary {
  /**
   * Unique ID of the private network interface.
   */
  id: string
  /**
   * The SRN of the private network interface.
   */
  srn: string
  /**
   * ID of the Private Network this interface is attached to.
   */
  privateNetworkId: string
  /**
   * Project ID the private network interface belongs to.
   */
  projectId: string
  /**
   * ID of the Instance this interface is attached to.
   */
  serverId: string
  /**
   * ID of the security group associated with this interface.
   */
  securityGroupId: string
  /**
   * MAC address of the private network interface.
   */
  macAddress: string
  /**
   * Current status of the private network interface.
   */
  status: PrivateNetworkInterfaceStatus
  /**
   * List of IP IDs attached to this interface.
   */
  ipIds: string[]
  /**
   * Tags associated with the private network interface.
   */
  tags: string[]
  /**
   * Creation timestamp of the private network interface.
   */
  createdAt?: Date | null
  /**
   * Last update timestamp of the private network interface.
   */
  updatedAt?: Date | null
  /**
   * Zone in which the network interface is located.
   */
  zone: ScwZone
}


export interface SecurityGroupSummary {
  /**
   * Unique ID of the security group.
   */
  id: string
  /**
   * The SRN of the security group.
   */
  srn: string
  /**
   * Name of the security group.
   */
  name: string
  /**
   * Description of the security group.
   */
  description: string
  /**
   * Project ID the security group belongs to.
   */
  projectId: string
  /**
   * Tags associated with the security group.
   */
  tags: string[]
  /**
   * True if default rules are disabled.
   */
  disableDefaultRules: boolean
  /**
   * True if this is the default security group for the project.
   */
  projectDefault: boolean
  /**
   * Default action for inbound rules.
   */
  inboundDefaultAction: SecurityGroupAction
  /**
   * Default action for outbound rules.
   */
  outboundDefaultAction: SecurityGroupAction
  /**
   * True if the security group is stateless.
   */
  stateless: boolean
  /**
   * Creation timestamp of the security group.
   */
  createdAt?: Date | null
  /**
   * Last update timestamp of the security group.
   */
  updatedAt?: Date | null
  /**
   * Zone in which the security group is located.
   */
  zone: ScwZone
}


export interface ServerType {
  /**
   * Name of the server type.
   */
  name: string
  /**
   * Number of vCPUs.
   */
  vcpuCount: number
  /**
   * Number of GPUs.
   */
  gpuCount: number
  /**
   * Amount of memory.
   */
  memory: number
  /**
   * Architecture of the server type.
   */
  architecture: ServerTypeArchitecture
  /**
   * Availability status of the server type.
   */
  availability: ServerTypeAvailability
  /**
   * Limits for the server type.
   */
  limits?: ServerTypeLimits | null
  /**
   * GPU information for the server type.
   */
  gpuInfo?: ServerTypeGpuInfo | null
  /**
   * Whether the server type has reached end of service.
   */
  endOfService: boolean
  /**
   * Availability status of the server type as a spot instance.
   */
  spotInfo?: ServerTypeSpotInfo | null
  /**
   * The billing SKU for this server type.
   */
  sku: string
}


export interface ServerSummary {
  /**
   * Unique ID of the server.
   */
  id: string
  /**
   * The SRN of the server.
   */
  srn: string
  /**
   * Name of the server.
   */
  name: string
  /**
   * Project ID to which the server belongs.
   */
  projectId: string
  /**
   * Tags associated with the server.
   */
  tags: string[]
  /**
   * Type of the server.
   */
  serverType: string
  /**
   * ID of the placement group the server belongs to.
   */
  placementGroupId?: string | null
  /**
   * Current status of the server.
   */
  status: ServerStatus
  /**
   * Architecture of the server.
   */
  architecture: ServerArchitecture
  /**
   * Creation timestamp of the server.
   */
  createdAt?: Date | null
  /**
   * Last update timestamp of the server.
   */
  updatedAt?: Date | null
  /**
   * Whether the server is in rescue mode.
   */
  rescueMode: boolean
  /**
   * Zone in which the server is located.
   */
  zone: ScwZone
}


export interface Snapshot {
  /**
   * Unique ID of the snapshot.
   */
  id: string
  /**
   * The SRN of the snapshot.
   */
  srn: string
  /**
   * Project ID of the snapshot.
   */
  projectId: string
  /**
   * Name of the snapshot.
   */
  name: string
  /**
   * Tags associated with the snapshot.
   */
  tags: string[]
  /**
   * Size of the snapshot in bytes.
   */
  size: number
  /**
   * Current status of the snapshot.
   */
  status: SnapshotStatus
  /**
   * ID of the base volume.
   */
  baseVolumeId?: string | null
  /**
   * Type of the volume.
   */
  volumeType: SnapshotVolumeType
  /**
   * Creation date of the snapshot.
   */
  createdAt?: Date | null
  /**
   * Last update date of the snapshot.
   */
  updatedAt?: Date | null
  /**
   * Zone in which the snapshot is located.
   */
  zone: ScwZone
  /**
   * Whether the snapshot is public.
   */
  public: boolean
}


export interface TemplateSummary {
  /**
   * Project ID associated with the template.
   */
  projectId: string
  /**
   * Unique ID of the template.
   */
  id: string
  /**
   * The SRN of the template.
   */
  srn: string
  /**
   * Name of the template.
   */
  name: string
  /**
   * Tags associated with the template.
   */
  tags: string[]
  /**
   * Tags associated with servers created from this template.
   */
  serverTags: string[]
  /**
   * Commercial type of the server defined by the template.
   */
  serverType: string
  /**
   * Security group ID associated with the template.
   */
  securityGroupId?: string | null
  /**
   * Placement group ID associated with the template.
   */
  placementGroupId?: string | null
  /**
   * Number of IPv4 public IPs to attach to servers created from this template.
   */
  publicIpV4Count: number
  /**
   * Number of IPv6 public IPs to attach to servers created from this template.
   */
  publicIpV6Count: number
  /**
   * List of Filesystem IDs associated with the template.
   */
  filesystemIds: string[]
  /**
   * Creation timestamp of the template.
   */
  createdAt?: Date | null
  /**
   * Last update timestamp of the template.
   */
  updatedAt?: Date | null
  /**
   * Zone in which the template is located.
   */
  zone: ScwZone
}


export interface VolumeType {
  /**
   * Name of the volume type.
   */
  name: VolumeVolumeType
  /**
   * Minimum size of the volume in bytes.
   */
  minSize: number
  /**
   * Maximum size of the volume in bytes.
   */
  maxSize: number
}


export interface Volume {
  /**
   * Unique ID of the volume.
   */
  id: string
  /**
   * The SRN of the volume.
   */
  srn: string
  /**
   * Project ID to which the volume belongs.
   */
  projectId: string
  /**
   * Volume name.
   */
  name: string
  /**
   * Tags associated with the volume.
   */
  tags: string[]
  /**
   * Volume size in bytes.
   */
  size: number
  /**
   * ID of the base snapshot used for this volume.
   */
  baseSnapshotId?: string | null
  /**
   * Current status of the volume.
   */
  status: VolumeStatus
  /**
   * Type of the volume.
   */
  volumeType: VolumeVolumeType
  /**
   * Creation date of the volume.
   */
  createdAt?: Date | null
  /**
   * Last update date of the volume.
   */
  updatedAt?: Date | null
  /**
   * ID of the Instance to which the volume is attached.
   */
  serverId?: string | null
  /**
   * Zone in which the volume is located.
   */
  zone: ScwZone
}


export interface ServerFilesystem {
  id: string
  status: ServerFilesystemStatus
}


export interface ServerPrivateNetworkInterface {
  id: string
  privateNetworkId: string
  macAddress: string
  status: ServerPrivateNetworkInterfaceStatus
  ipIds: string[]
  securityGroupId: string
}


export interface ServerPublicNetworkInterface {
  status: ServerPublicNetworkInterfaceStatus
  macAddress: string
  securityGroupId: string
  ips: ServerIP[]
  dns: string
}


export interface ServerRDPPassword {
  encryptedPassword: string
  rdpSshKeyId: string
}


export interface ServerRuntimeInfo {
  /**
   * True if the Instance is running as Spot.
   */
  spot: boolean
  /**
   * The unique identifier of the physical server hosting this Instance.
   */
  physicalHostId: string
}


export interface ServerVolume {
  id: string
  volumeType: ServerVolumeVolumeType
}


export interface UpdateServerRequestPublicNetworkInterface {
  /**
   * ID of the security group for the interface.
   */
  securityGroupId?: string | null
}


export interface UpdateTemplateRequestUpdatePrivateNetworks {
  /**
   * List of updated private networks.
   */
  privateNetworks: CreateTemplateRequestPrivateNetworkTemplate[]
}


export interface UpdateTemplateRequestUpdateVolumes {
  /**
   * List of updated volume templates.
   */
  volumes: CreateTemplateRequestVolumeTemplate[]
}


export type AddSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the security group to add rules to.
   */
  securityGroupId: string
  /**
   * List of rules to add.
   */
  securityGroupRules?: SecurityGroupRuleConfig[] | null
}


export interface AddSecurityGroupRulesResponse {
  /**
   * Updated security group.
   */
  securityGroup?: SecurityGroup | null
  /**
   * List of rules that were added.
   */
  addedRules: SecurityGroupRule[]
}


export type AttachServerFileSystemRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to attach the filesystem to.
   */
  serverId: string
  /**
   * ID of the filesystem to attach.
   */
  filesystemId: string
}


export type AttachServerIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to attach the IP to.
   */
  serverId: string
  /**
   * ID of the IP to attach.
   */
  ipId: string
  /**
   * Whether the IP should be the default IP.
   */
  default: boolean
  /**
   * Whether moving the IP is allowed.
   */
  moveAllowed: boolean
}


export type AttachServerPrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to attach the private network interface to.
   */
  serverId: string
  /**
   * ID of the private network interface to attach.
   */
  privateNetworkInterfaceId: string
}


export type AttachServerVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to attach the volume to.
   */
  serverId: string
  /**
   * ID of the volume to attach.
   */
  volumeId: string
  /**
   * Type of the volume.
   */
  volumeType?: ServerVolumeVolumeType | null
  /**
   * Whether the volume should be used as the boot volume.
   */
  bootVolume: boolean
}


export type CheckTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template to check.
   */
  templateId: string
}


export type CreatePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Project ID of the placement group.
   */
  projectId?: string | null
  /**
   * Name of the placement group.
   */
  name: string
  /**
   * Policy type of the placement group.
   */
  policyType?: PlacementGroupPolicyType | null
  /**
   * Tags of the placement group.
   */
  tags?: string[] | null
}


export type CreatePrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the Private Network to attach to.
   */
  privateNetworkId: string
  /**
   * Project ID for the private network interface.
   */
  projectId?: string | null
  /**
   * ID of the Instance to attach the interface to.
   */
  serverId?: string | null
  /**
   * ID of the security group to associate with the interface.
   */
  securityGroupId?: string | null
  /**
   * List of IP IDs to attach to the interface.
   */
  ipIds?: string[] | null
  /**
   * Tags to assign to the private network interface.
   */
  tags?: string[] | null
}


export type CreateSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Name of the security group.
   */
  name: string
  /**
   * Description of the security group.
   */
  description: string
  /**
   * Whether to disable default rules.
   */
  disableDefaultRules: boolean
  /**
   * Project ID the security group belongs to.
   */
  projectId?: string | null
  /**
   * Tags for the security group.
   */
  tags?: string[] | null
  /**
   * Whether this should be the default security group for the project.
   */
  projectDefault: boolean
  /**
   * Default action for inbound rules.
   */
  inboundDefaultAction?: SecurityGroupAction | null
  /**
   * Default action for outbound rules.
   */
  outboundDefaultAction?: SecurityGroupAction | null
  /**
   * Whether the security group should be stateless.
   */
  stateless: boolean
}


export type CreateServerFromTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template to use.
   */
  templateId: string
  /**
   * Name of the new server.
   */
  name: string
}


export type CreateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Project ID for the server.
   */
  projectId?: string | null
  /**
   * Name of the server.
   */
  name: string
  /**
   * Tags to associate with the server.
   */
  tags?: string[] | null
  /**
   * Type of the server.
   */
  serverType: string
  /**
   * ID of the placement group the server belongs to.
   */
  placementGroupId?: string | null
  /**
   * ID of the Dedicated Pool this server belongs to.
   */
  dedicatedPoolId?: string | null
  /**
   * Volumes to attach to the server.
   */
  volumes?: CreateServerRequestServerVolume[] | null
  /**
   * IAM ID of the SSH key used to encrypt the Windows `Administrator` password for RDP use.
   */
  windowsRdpSshKeyId?: string | null
  /**
   * Public network interface configuration.
   */
  publicNetworkInterface?: CreateServerRequestPublicNetworkInterface | null
}


export type CreateTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Project ID for the template.
   */
  projectId?: string | null
  /**
   * Name of the template.
   */
  name: string
  /**
   * Tags to associate with the template.
   */
  tags?: string[] | null
  /**
   * Tags to associate with servers created from the template.
   */
  serverTags?: string[] | null
  /**
   * Commercial type of the server defined by the template.
   */
  serverType: string
  /**
   * Security group ID for the template.
   */
  securityGroupId?: string | null
  /**
   * Placement group ID for the template.
   */
  placementGroupId?: string | null
  /**
   * List of volume templates to define volumes for servers.
   */
  volumes?: CreateTemplateRequestVolumeTemplate[] | null
  /**
   * List of private networks to associate with the template.
   */
  privateNetworks?: CreateTemplateRequestPrivateNetworkTemplate[] | null
  /**
   * List of filesystem IDs to associate with the template.
   */
  filesystemIds?: string[] | null
  /**
   * Number of IPv4 public IPs to attach to servers created from this template.
   */
  publicIpV4Count: number
  /**
   * Number of IPv6 public IPs to attach to servers created from this template.
   */
  publicIpV6Count: number
  /**
   * IAM ID of the SSH key used to encrypt the Windows `Administrator` password for RDP use.
   */
  windowsRdpSshKeyId?: string | null
}


export interface DedicatedPool {
  /**
   * Unique ID of the Dedicated Pool.
   */
  id: string
  /**
   * The SRN of the Dedicated Pool.
   */
  srn: string
  /**
   * Organization ID the Dedicated Pool belongs to.
   */
  organizationId: string
  /**
   * The name of the Dedicated Pool.
   */
  name: string
  /**
   * Tags associated with the Dedicated Pool.
   */
  tags: string[]
  /**
   * Physical hosts associated with the Dedicated Pool.
   */
  physicalHosts: DedicatedPoolPhysicalHost[]
  /**
   * Creation timestamp of the Dedicated Pool.
   */
  createdAt?: Date | null
  /**
   * Last update timestamp of the Dedicated Pool.
   */
  updatedAt?: Date | null
  /**
   * Zone of the Dedicated Pool.
   */
  zone: ScwZone
}


export type DeletePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the placement group you want to delete.
   */
  placementGroupId: string
}


export type DeletePrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the private network interface to delete.
   */
  privateNetworkInterfaceId: string
}


export type DeleteSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the security group to delete.
   */
  securityGroupId: string
}


export type DeleteSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * List of rule IDs to delete.
   */
  securityGroupRuleIds?: string[] | null
}


export type DeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to delete.
   */
  serverId: string
  /**
   * Whether to delete all IPs attached to the server.
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteAllIps?: boolean | null
  /**
   * List of IP IDs to delete.
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteIpIds?: string[] | null
  /**
   * Whether to delete all volumes attached to the server. Deletion of SBS volumes is not supported yet.
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteAllVolumes?: boolean | null
  /**
   * List of volume IDs to delete. Deletion of SBS volumes is not supported yet.
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteVolumeIds?: string[] | null
  /**
   * Whether to keep all private network interfaces.
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  keepAllPrivateNics?: boolean | null
  /**
   * List of private network interface IDs to delete.
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  deletePrivateNicIds?: string[] | null
}


export type DeleteTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template to delete.
   */
  templateId: string
}


export type DeleteTemplateUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template.
   */
  templateId: string
  /**
   * Key of the user data to delete.
   */
  key: string
}


export type DeleteUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * The key of the user data to delete.
   */
  key: string
}


export type DetachAndDeletePrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the private network interface to detach and delete.
   */
  privateNetworkInterfaceId: string
}


export type DetachServerFileSystemRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to detach the filesystem from.
   */
  serverId: string
  /**
   * ID of the filesystem to detach.
   */
  filesystemId: string
}


export type DetachServerIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to detach the IP from.
   */
  serverId: string
  /**
   * ID of the IP to detach.
   */
  ipId: string
}


export type DetachServerPrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to detach the private network interface from.
   */
  serverId: string
  /**
   * ID of the private network interface to detach.
   */
  privateNetworkInterfaceId: string
}


export type DetachServerVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to detach the volume from.
   */
  serverId: string
  /**
   * ID of the volume to detach.
   */
  volumeId: string
}


export type GetDedicatedPoolRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the Dedicated Pool to retrieve.
   */
  dedicatedPoolId: string
}


export type GetPlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the placement group you want to get.
   */
  placementGroupId: string
}


export type GetPrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the private network interface to retrieve.
   */
  privateNetworkInterfaceId: string
}


export type GetResourceCountsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Organization ID to filter resource counts.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId' could be set.
   */
  organizationId?: string | null
  /**
   * Project ID to filter resource counts.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId' could be set.
   */
  projectId?: string | null
}


export type GetSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the security group to retrieve.
   */
  securityGroupId: string
}


export type GetServerCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The ID of the server.
   */
  serverId: string
}


export type GetServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to retrieve.
   */
  serverId: string
}


export type GetTemplateCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template.
   */
  templateId: string
}


export type GetTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template to retrieve.
   */
  templateId: string
}


export type GetTemplateUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template.
   */
  templateId: string
  /**
   * Key of the user data to retrieve.
   */
  key: string
}


export type GetUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * The key of the user data to retrieve.
   */
  key: string
}


export type ListDedicatedPoolServerTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the Dedicated Pool to list Instance types for.
   */
  dedicatedPoolId: string
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of Instance types to return per page.
   */
  pageSize?: number | null
}


export interface ListDedicatedPoolServerTypesResponse {
  /**
   * List of Instance types.
   */
  serverTypes: DedicatedPoolServerType[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of Instance types.
   */
  totalCount: number
}


export type ListDedicatedPoolsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of Dedicated Pools to return per page.
   */
  pageSize?: number | null
  /**
   * Order in which to return Dedicated Pools.
   */
  orderBy?: ListDedicatedPoolsRequestOrderBy | null
  /**
   * Organization ID to filter Dedicated Pools by.
   */
  organizationId?: string | null
}


export interface ListDedicatedPoolsResponse {
  /**
   * List of Dedicated Pools.
   */
  dedicatedPools: DedicatedPoolSummary[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of Dedicated Pools.
   */
  totalCount: number
}


export type ListPlacementGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The initial pagination token to start from.
   */
  pageToken?: string | null
  /**
   * The maximum number of placement groups to return.
   */
  pageSize?: number | null
  /**
   * The field by which to order the result list.
   */
  orderBy?: ListPlacementGroupsRequestOrderBy | null
  /**
   * List only placement groups of this Project ID.
   */
  projectId?: string | null
  /**
   * List only placement groups with these IDs.
   */
  placementGroupIds?: string[] | null
  /**
   * Filter placement groups by name.
   */
  name?: string | null
  /**
   * List placement groups with these exact tags.
   */
  tags?: string[] | null
}


export interface ListPlacementGroupsResponse {
  /**
   * List of placement groups.
   */
  placementGroups: PlacementGroup[]
  /**
   * The pagination token, use it to get the next page of results.
   */
  nextPageToken?: string | null
  /**
   * Total number of placement groups.
   */
  totalCount: number
}


export type ListPrivateNetworkInterfacesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of items to return per page.
   */
  pageSize?: number | null
  /**
   * Field to order results by.
   */
  orderBy?: ListPrivateNetworkInterfacesRequestOrderBy | null
  /**
   * Filter by Project ID.
   */
  projectId?: string | null
  /**
   * Filter by server IDs.
   */
  serverIds?: string[] | null
  /**
   * Filter by security group IDs.
   */
  securityGroupIds?: string[] | null
  /**
   * Filter by Private Network IDs.
   */
  privateNetworkIds?: string[] | null
  /**
   * Filter by tags.
   */
  tags?: string[] | null
}


export interface ListPrivateNetworkInterfacesResponse {
  /**
   * List of private network interfaces.
   */
  privateNetworkInterfaces: PrivateNetworkInterfaceSummary[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of items.
   */
  totalCount: number
}


export type ListSecurityGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of items to return per page.
   */
  pageSize?: number | null
  /**
   * Field and direction to sort by.
   */
  orderBy?: ListSecurityGroupsRequestOrderBy | null
  /**
   * Filter by Project ID.
   */
  projectId?: string | null
  /**
   * Filter by name.
   */
  name?: string | null
  /**
   * Filter by tags.
   */
  tags?: string[] | null
  /**
   * Filter by specific security group IDs.
   */
  securityGroupIds?: string[] | null
}


export interface ListSecurityGroupsResponse {
  /**
   * List of security groups.
   */
  securityGroups: SecurityGroupSummary[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of items.
   */
  totalCount: number
}


export type ListServerCompatibleTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  serverId: string
  pageToken?: string | null
  pageSize?: number | null
}


export interface ListServerCompatibleTypesResponse {
  serverTypes: ServerType[]
  nextPageToken?: string | null
  totalCount: number
}


export type ListServerTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of server types to return per page.
   */
  pageSize?: number | null
}


export interface ListServerTypesResponse {
  /**
   * List of server types.
   */
  serverTypes: ServerType[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of server types.
   */
  totalCount: number
}


export type ListServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of servers to return per page.
   */
  pageSize?: number | null
  /**
   * Order of the returned servers.
   */
  orderBy?: ListServersRequestOrderBy | null
  /**
   * Project ID to filter servers.
   */
  projectId?: string | null
  /**
   * List of server IDs to filter.
   */
  serverIds?: string[] | null
  /**
   * Name to filter servers.
   */
  name?: string | null
  /**
   * Server type to filter.
   */
  serverType?: string | null
  /**
   * Tags to filter servers.
   */
  tags?: string[] | null
  /**
   * Security group IDs to filter servers.
   */
  securityGroupIds?: string[] | null
  /**
   * Placement group IDs to filter servers.
   */
  placementGroupIds?: string[] | null
  /**
   * Filter servers associated with these Dedicated Pools.
   */
  dedicatedPoolIds?: string[] | null
  /**
   * Private Network IDs to filter servers.
   */
  privateNetworkIds?: string[] | null
  /**
   * MAC addresses to filter servers.
   */
  macAddresses?: string[] | null
}


export interface ListServersResponse {
  /**
   * List of servers.
   */
  servers: ServerSummary[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of servers.
   */
  totalCount: number
}


export interface ListSnapshotsResponse {
  /**
   * List of snapshots.
   */
  snapshots: Snapshot[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of items.
   */
  totalCount: number
}


export type ListTemplateUserDataKeysRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template.
   */
  templateId: string
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of items to return per page.
   */
  pageSize?: number | null
}


export interface ListTemplateUserDataKeysResponse {
  /**
   * List of user data keys associated with the template.
   */
  keys: string[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of items.
   */
  totalCount: number
}


export type ListTemplatesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of items to return per page.
   */
  pageSize?: number | null
  /**
   * Field to sort results by.
   */
  orderBy?: ListTemplatesRequestOrderBy | null
  /**
   * Filter by Project ID.
   */
  projectId?: string | null
  /**
   * Filter by specific template IDs.
   */
  templateIds?: string[] | null
  /**
   * Filter by template name.
   */
  name?: string | null
  /**
   * Filter by tags.
   */
  tags?: string[] | null
  /**
   * Filter by server tags.
   */
  serverTags?: string[] | null
  /**
   * Filter by security group IDs.
   */
  securityGroupIds?: string[] | null
  /**
   * Filter by placement group IDs.
   */
  placementGroupIds?: string[] | null
}


export interface ListTemplatesResponse {
  /**
   * List of template summaries.
   */
  templates: TemplateSummary[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of items.
   */
  totalCount: number
}


export type ListUserDataKeysRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * Page token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of items to return per page.
   */
  pageSize?: number | null
}


export interface ListUserDataKeysResponse {
  /**
   * List of user data keys.
   */
  keys: string[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of items.
   */
  totalCount: number
}


export interface ListVolumeTypesResponse {
  /**
   * List of volume types.
   */
  volumeTypes: VolumeType[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of items.
   */
  totalCount: number
}


export interface ListVolumesResponse {
  /**
   * List of volumes.
   */
  volumes: Volume[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string | null
  /**
   * Total number of items.
   */
  totalCount: number
}


export type PauseServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to pause.
   */
  serverId: string
}


export interface PrivateNetworkInterface {
  /**
   * Unique ID of the private network interface.
   */
  id: string
  /**
   * The SRN of the private network interface.
   */
  srn: string
  /**
   * ID of the Private Network this interface is attached to.
   */
  privateNetworkId: string
  /**
   * Project ID the private network interface belongs to.
   */
  projectId: string
  /**
   * ID of the Instance this interface is attached to.
   */
  serverId: string
  /**
   * ID of the security group associated with this interface.
   */
  securityGroupId: string
  /**
   * MAC address of the private network interface.
   */
  macAddress: string
  /**
   * Current status of the private network interface.
   */
  status: PrivateNetworkInterfaceStatus
  /**
   * List of IP IDs attached to this interface.
   */
  ipIds: string[]
  /**
   * Tags associated with the private network interface.
   */
  tags: string[]
  /**
   * Creation timestamp of the private network interface.
   */
  createdAt?: Date | null
  /**
   * Last update timestamp of the private network interface.
   */
  updatedAt?: Date | null
  /**
   * Zone in which the network interface is located.
   */
  zone: ScwZone
}


export type RebootServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to reboot.
   */
  serverId: string
}


export interface ResourceCounts {
  /**
   * Number of servers.
   */
  servers: number
  /**
   * Number of GPU servers.
   */
  gpuServers: number
  /**
   * Map of server types with their counts.
   */
  serversByType: Record<string, number>
  /**
   * Number of security groups.
   */
  securityGroups: number
  /**
   * Number of placement groups.
   */
  placementGroups: number
  /**
   * Number of snapshots.
   */
  snapshots: number
  /**
   * Number of volumes.
   */
  volumes: number
  /**
   * Number of local SSD volumes.
   */
  volumesLSsd: number
  /**
   * Total size of local SSD volumes in bytes.
   */
  volumesLSsdTotalSize: number
  /**
   * Number of scratch volumes.
   */
  volumesScratch: number
  /**
   * Number of private network interfaces.
   */
  privateNetworkInterfaces: number
  /**
   * Number of templates.
   */
  templates: number
  /**
   * Number of flexible IPs.
   */
  flexibleIps: number
  /**
   * Number of flexible IPs not attached to any server.
   */
  unusedFlexibleIps: number
  /**
   * Number of images.
   */
  images: number
}


export interface Server {
  /**
   * Unique ID of the server.
   */
  id: string
  /**
   * The SRN of the server.
   */
  srn: string
  /**
   * Name of the server.
   */
  name: string
  /**
   * Project ID to which the server belongs.
   */
  projectId: string
  /**
   * Tags associated with the server.
   */
  tags: string[]
  /**
   * Type of the server.
   */
  serverType: string
  /**
   * ID of the placement group the server belongs to.
   */
  placementGroupId?: string | null
  /**
   * ID of the Dedicated Pool the server belongs to.
   */
  dedicatedPoolId?: string | null
  /**
   * Current status of the server.
   */
  status: ServerStatus
  /**
   * List of volumes attached to the server.
   */
  volumes: ServerVolume[]
  /**
   * List of filesystems attached to the server.
   */
  filesystems: ServerFilesystem[]
  /**
   * Architecture of the server.
   */
  architecture: ServerArchitecture
  /**
   * Creation timestamp of the server.
   */
  createdAt?: Date | null
  /**
   * Last update timestamp of the server.
   */
  updatedAt?: Date | null
  /**
   * List of private network interfaces attached to the server.
   */
  privateNetworkInterfaces: ServerPrivateNetworkInterface[]
  /**
   * Whether the server is in rescue mode.
   */
  rescueMode: boolean
  /**
   * ID of the boot volume.
   */
  bootVolumeId?: string | null
  /**
   * Detailed status information of the server.
   */
  statusDetail: string
  /**
   * Encrypted RDP password for Windows servers. The encryption scheme is RSA-PKCS1-v1_5, using the public part of the SSH key supplied in `windows_rdp_ssh_key_id`.
   */
  windowsRdpPassword?: ServerRDPPassword | null
  /**
   * Public network interface of the server.
   */
  publicNetworkInterface?: ServerPublicNetworkInterface | null
  /**
   * Zone in which the server is located.
   */
  zone: ScwZone
  /**
   * Runtime information of this server, only available only when it is running.
   */
  runtimeInfo?: ServerRuntimeInfo | null
}


export type SetSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the security group to set rules for.
   */
  securityGroupId: string
  /**
   * List of rules to set.
   */
  securityGroupRules?: SecurityGroupRuleConfig[] | null
}


export type SetServerCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * The cloud-init configuration content.
   */
  content: string
}


export type SetServerDefaultIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to set the default IP for.
   */
  serverId: string
  /**
   * ID of the IP to set as default.
   */
  ipId: string
}


export type SetTemplateCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template.
   */
  templateId: string
  /**
   * Cloud-init configuration content.
   */
  content: string
}


export type SetTemplateUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template.
   */
  templateId: string
  /**
   * Key of the user data to set.
   */
  key: string
  /**
   * Content of the user data.
   */
  content: string
}


export type SetUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * The key of the user data to set.
   */
  key: string
  /**
   * The content to set for the user data.
   */
  content: string
}


export type StartServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to start.
   */
  serverId: string
}


export type StartSpotServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to start as spot instance.
   */
  serverId: string
}


export type StopAndDeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to stop and delete.
   */
  serverId: string
  /**
   * Whether to delete all IPs attached to the server.
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteAllIps?: boolean | null
  /**
   * List of IP IDs to delete.
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteIpIds?: string[] | null
  /**
   * Whether to delete all volumes attached to the server.
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteAllVolumes?: boolean | null
  /**
   * List of volume IDs to delete.
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteVolumeIds?: string[] | null
  /**
   * Whether to keep all private network interfaces.
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  keepAllPrivateNics?: boolean | null
  /**
   * List of private network interface IDs to delete.
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  deletePrivateNicIds?: string[] | null
}


export type StopServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to stop.
   */
  serverId: string
}


export interface Template {
  /**
   * Project ID associated with the template.
   */
  projectId: string
  /**
   * Unique ID of the template.
   */
  id: string
  /**
   * The SRN of the template.
   */
  srn: string
  /**
   * Name of the template.
   */
  name: string
  /**
   * Tags associated with the template.
   */
  tags: string[]
  /**
   * Tags associated with servers created from this template.
   */
  serverTags: string[]
  /**
   * Commercial type of the server defined by the template.
   */
  serverType: string
  /**
   * Security group ID associated with the template.
   */
  securityGroupId?: string | null
  /**
   * Placement group ID associated with the template.
   */
  placementGroupId?: string | null
  /**
   * Number of IPv4 public IPs to attach to servers created from this template.
   */
  publicIpV4Count: number
  /**
   * Number of IPv6 public IPs to attach to servers created from this template.
   */
  publicIpV6Count: number
  /**
   * List of volume templates used to create volumes for servers.
   */
  volumes: CreateTemplateRequestVolumeTemplate[]
  /**
   * List of private network associated with the template.
   */
  privateNetworks: CreateTemplateRequestPrivateNetworkTemplate[]
  /**
   * List of filesystem IDs associated with the template.
   */
  filesystemIds: string[]
  /**
   * Creation timestamp of the template.
   */
  createdAt?: Date | null
  /**
   * Last update timestamp of the template.
   */
  updatedAt?: Date | null
  /**
   * IAM ID of the SSH key used to encrypt the Windows `Administrator` password for RDP use.
   */
  windowsRdpSshKeyId?: string | null
  /**
   * Zone in which the template is located.
   */
  zone: ScwZone
}


export type UpdateDedicatedPoolRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the Dedicated Pool to update.
   */
  dedicatedPoolId: string
  /**
   * New name for the Dedicated Pool.
   */
  name?: string | null
  /**
   * New tags for the Dedicated Pool.
   */
  tags?: string[] | null
}


export type UpdatePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the placement group.
   */
  placementGroupId: string
  /**
   * Name of the placement group.
   */
  name?: string | null
  /**
   * Policy type of the placement group.
   */
  policyType?: PlacementGroupPolicyType | null
  /**
   * Tags of the placement group.
   */
  tags?: string[] | null
}


export type UpdatePrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the private network interface to update.
   */
  privateNetworkInterfaceId: string
  /**
   * New security group ID to associate with the interface.
   */
  securityGroupId?: string | null
  /**
   * New tags to assign to the private network interface.
   */
  tags?: string[] | null
}


export type UpdateSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the security group to update.
   */
  securityGroupId: string
  /**
   * New name for the security group.
   */
  name?: string | null
  /**
   * New description for the security group.
   */
  description?: string | null
  /**
   * Whether to disable default rules.
   */
  disableDefaultRules?: boolean | null
  /**
   * New tags for the security group.
   */
  tags?: string[] | null
  /**
   * Whether this should be the default security group for the project.
   */
  projectDefault?: boolean | null
  /**
   * New default action for inbound rules.
   */
  inboundDefaultAction?: SecurityGroupAction | null
  /**
   * New default action for outbound rules.
   */
  outboundDefaultAction?: SecurityGroupAction | null
  /**
   * Whether the security group should be stateless.
   */
  stateless?: boolean | null
}


export type UpdateSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the rule to update.
   */
  securityGroupRuleId: string
  /**
   * New protocol for the rule.
   */
  protocol?: SecurityGroupRuleProtocol | null
  /**
   * New direction for the rule.
   */
  direction?: SecurityGroupRuleDirection | null
  /**
   * New action for the rule.
   */
  action?: SecurityGroupRuleAction | null
  /**
   * New source IP range for the rule.
   */
  sourceIpRange?: string | null
  /**
   * New destination IP range for the rule.
   */
  destinationIpRange?: string | null
  /**
   * New source port range for the rule.
   */
  sourcePorts?: SecurityGroupRulePortRange | null
  /**
   * New destination port range for the rule.
   */
  destinationPorts?: SecurityGroupRulePortRange | null
  /**
   * New position for the rule.
   */
  position?: number | null
}


export type UpdateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to update.
   */
  serverId: string
  /**
   * New name for the server.
   */
  name?: string | null
  /**
   * New tags for the server.
   */
  tags?: string[] | null
  /**
   * New server type.
   */
  serverType?: string | null
  /**
   * New placement group ID.
   */
  placementGroupId?: string | null
  /**
   * New Dedicated Pool ID.
   */
  dedicatedPoolId?: string | null
  /**
   * New rescue mode setting.
   */
  rescueMode?: boolean | null
  /**
   * New boot volume ID.
   */
  bootVolumeId?: string | null
  /**
   * New IAM ID of the SSH key used to encrypt the Windows `Administrator` password for RDP use.
   */
  windowsRdpSshKeyId?: string | null
  /**
   * Protection status of the server.
   */
  protected?: boolean | null
  /**
   * New public network interface configuration.
   */
  publicNetworkInterface?: UpdateServerRequestPublicNetworkInterface | null
}


export type UpdateTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Unique ID of the template to update.
   */
  templateId: string
  /**
   * New name for the template.
   */
  name?: string | null
  /**
   * New tags for the template.
   */
  tags?: string[] | null
  /**
   * New server tags for the template.
   */
  serverTags?: string[] | null
  /**
   * New server type for the template.
   */
  serverType?: string | null
  /**
   * New security group ID for the template.
   */
  securityGroupId?: string | null
  /**
   * New placement group ID for the template.
   */
  placementGroupId?: string | null
  /**
   * Updated volume templates for the template.
   */
  updateVolumes?: UpdateTemplateRequestUpdateVolumes | null
  /**
   * Updated private networks list for the template.
   */
  updatePrivateNetworks?: UpdateTemplateRequestUpdatePrivateNetworks | null
  /**
   * New list of filesystem IDs for the template.
   */
  filesystemIds?: string[] | null
  /**
   * New number of IPv4 public IPs to attach to servers.
   */
  publicIpV4Count?: number | null
  /**
   * New number of IPv6 public IPs to attach to servers.
   */
  publicIpV6Count?: number | null
  /**
   * New IAM ID of the SSH key used to encrypt the Windows `Administrator` password for RDP use.
   */
  windowsRdpSshKeyId?: string | null
}


export interface UserData {
  /**
   * The key of the user data.
   */
  key: string
  /**
   * The content of the user data.
   */
  content: string
}


export type VolumeApiCreateSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Project ID of the snapshot.
   */
  projectId?: string | null
  /**
   * Name of the snapshot.
   */
  name: string
  /**
   * Tags associated with the snapshot.
   */
  tags?: string[] | null
  /**
   * ID of the base volume.
   */
  baseVolumeId: string
  /**
   * Whether the snapshot should be public.
   */
  public: boolean
}


export type VolumeApiCreateVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Project ID to which the volume belongs.
   */
  projectId?: string | null
  /**
   * Volume name.
   */
  name: string
  /**
   * Tags associated with the volume.
   */
  tags?: string[] | null
  /**
   * Volume size in bytes.
   */
  size?: number | null
  /**
   * ID of the base snapshot used for this volume.
   */
  baseSnapshotId?: string | null
  /**
   * Type of the volume.
   */
  volumeType?: CreateVolumeRequestVolumeType | null
}


export type VolumeApiDeleteSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the snapshot to delete.
   */
  snapshotId: string
}


export type VolumeApiDeleteVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the volume to delete.
   */
  volumeId: string
}


export type VolumeApiExportSnapshotToObjectStorageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the snapshot to export.
   */
  snapshotId: string
  /**
   * Object Storage bucket name.
   */
  bucket: string
  /**
   * Object key.
   */
  objectKey: string
}


export type VolumeApiGetSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the snapshot to retrieve.
   */
  snapshotId: string
}


export type VolumeApiGetVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the volume to retrieve.
   */
  volumeId: string
}


export type VolumeApiImportSnapshotFromObjectStorageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Project ID of the snapshot.
   */
  projectId?: string | null
  /**
   * Name of the snapshot.
   */
  name: string
  /**
   * Tags associated with the snapshot.
   */
  tags?: string[] | null
  /**
   * Object Storage bucket name.
   */
  bucket: string
  /**
   * Object key.
   */
  objectKey: string
  /**
   * Size of the imported snapshot in bytes.
   */
  size?: number | null
  /**
   * Volume type of the snapshot.
   */
  volumeType?: SnapshotVolumeType | null
}


export type VolumeApiListSnapshotsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of snapshots to return per page.
   */
  pageSize?: number | null
  /**
   * Field to sort by.
   */
  orderBy?: ListSnapshotsRequestOrderBy | null
  /**
   * Filter by Project ID.
   */
  projectId?: string | null
  /**
   * Filter by specific snapshot IDs.
   */
  snapshotIds?: string[] | null
  /**
   * Filter by name.
   */
  name?: string | null
  /**
   * Filter by tags.
   */
  tags?: string[] | null
  /**
   * Filter by base volume ID.
   */
  baseVolumeId?: string | null
}


export type VolumeApiListVolumeTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of items to return per page.
   */
  pageSize?: number | null
}


export type VolumeApiListVolumesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Number of items to return per page.
   */
  pageSize?: number | null
  /**
   * Field to order the results by.
   */
  orderBy?: ListVolumesRequestOrderBy | null
  /**
   * Filter by Project ID.
   */
  projectId?: string | null
  /**
   * Filter by specific volume IDs.
   */
  volumeIds?: string[] | null
  /**
   * Filter by volume name.
   */
  name?: string | null
  /**
   * Filter by tags.
   */
  tags?: string[] | null
  /**
   * Filter by volume type.
   */
  volumeType?: VolumeVolumeType | null
}


export type VolumeApiUpdateSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the snapshot to update.
   */
  snapshotId: string
  /**
   * New name for the snapshot.
   */
  name?: string | null
  /**
   * New tags for the snapshot.
   */
  tags?: string[] | null
  /**
   * Whether the snapshot should be public.
   */
  public?: boolean | null
}


export type VolumeApiUpdateVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the volume to update.
   */
  volumeId: string
  /**
   * New name for the volume.
   */
  name?: string | null
  /**
   * New tags for the volume.
   */
  tags?: string[] | null
  /**
   * New size for the volume.
   */
  size?: number | null
}


