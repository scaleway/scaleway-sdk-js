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
  sourcePorts?: SecurityGroupRulePortRange
  /**
   * Destination port range for the rule.
   */
  destinationPorts?: SecurityGroupRulePortRange
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
  ipamIpId?: string
  /**
   * Configuration for a new IP to book.
   *
   * One-of ('serverIp'): at most one of 'ipamIpId', 'newIp' could be set.
   */
  newIp?: CreateServerRequestBookIP
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
  size?: number
  /**
   * ID of the base snapshot for the volume.
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  baseSnapshotId?: string
  /**
   * Label of the image to use for the volume.
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  imageLabel?: string
  /**
   * Performance IOPS for the volume.
   */
  perfIops?: number
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


export interface ServerIP {
  id: string
  dynamic: boolean
  status: ServerIPStatus
  default: boolean
}


export interface CreateTemplateRequestPrivateNetworkTemplate {
  /**
   * ID of the private network.
   */
  privateNetworkId: string
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
  size?: number
  /**
   * ID of the base snapshot for the volume.
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  baseSnapshotId?: string
  /**
   * Label of the image used as base for the volume.
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  imageLabel?: string
  /**
   * Performance IOPS for the volume.
   */
  perfIops?: number
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
  sourcePorts?: SecurityGroupRulePortRange
  /**
   * Destination port range for the rule.
   */
  destinationPorts?: SecurityGroupRulePortRange
  /**
   * Position of the rule in the list.
   */
  position: number
}


export interface SecurityGroup {
  /**
   * Unique ID of the security group.
   */
  id: string
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
  createdAt?: Date
  /**
   * Last update timestamp of the security group.
   */
  updatedAt?: Date
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
  securityGroupId?: string
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
  volumeId?: string
  /**
   * Configuration for a new volume to create.
   *
   * One-of ('serverVolume'): at most one of 'volumeId', 'newVolume' could be set.
   */
  newVolume?: CreateServerRequestCreateVolume
}


export interface PlacementGroup {
  /**
   * Placement group unique ID.
   */
  id: string
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
  createdAt?: Date
  /**
   * Placement group modification date.
   */
  updatedAt?: Date
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
  createdAt?: Date
  /**
   * Last update timestamp of the private network interface.
   */
  updatedAt?: Date
}


export interface SecurityGroupSummary {
  /**
   * Unique ID of the security group.
   */
  id: string
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
  createdAt?: Date
  /**
   * Last update timestamp of the security group.
   */
  updatedAt?: Date
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
  limits?: ServerTypeLimits
  /**
   * GPU information for the server type.
   */
  gpuInfo?: ServerTypeGpuInfo
  /**
   * Whether the server type has reached end of service.
   */
  endOfService: boolean
}


export interface ServerSummary {
  /**
   * Unique ID of the server.
   */
  id: string
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
  placementGroupId?: string
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
  createdAt?: Date
  /**
   * Last update timestamp of the server.
   */
  updatedAt?: Date
  /**
   * Whether the server is in rescue mode.
   */
  rescueMode: boolean
}


export interface Snapshot {
  /**
   * Unique ID of the snapshot.
   */
  id: string
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
  baseVolumeId?: string
  /**
   * Type of the volume.
   */
  volumeType: SnapshotVolumeType
  /**
   * Creation date of the snapshot.
   */
  createdAt?: Date
  /**
   * Last update date of the snapshot.
   */
  updatedAt?: Date
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
  securityGroupId?: string
  /**
   * Placement group ID associated with the template.
   */
  placementGroupId?: string
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
  createdAt?: Date
  /**
   * Last update timestamp of the template.
   */
  updatedAt?: Date
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
  baseSnapshotId?: string
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
  createdAt?: Date
  /**
   * Last update date of the volume.
   */
  updatedAt?: Date
  /**
   * ID of the Instance to which the volume is attached.
   */
  serverId?: string
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


export interface ServerVolume {
  id: string
  volumeType: ServerVolumeVolumeType
}


export interface UpdateServerRequestPublicNetworkInterface {
  /**
   * ID of the security group for the interface.
   */
  securityGroupId?: string
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
  zone?: ScwZone
  /**
   * ID of the security group to add rules to.
   */
  securityGroupId: string
  /**
   * List of rules to add.
   */
  securityGroupRules?: SecurityGroupRuleConfig[]
}


export interface AddSecurityGroupRulesResponse {
  /**
   * Updated security group.
   */
  securityGroup?: SecurityGroup
  /**
   * List of rules that were added.
   */
  addedRules: SecurityGroupRule[]
}


export type AttachServerFileSystemRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
  zone?: ScwZone
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
  zone?: ScwZone
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
  zone?: ScwZone
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
  volumeType?: ServerVolumeVolumeType
  /**
   * Whether the volume should be used as the boot volume.
   */
  bootVolume: boolean
}


export type CheckTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Unique ID of the template to check.
   */
  templateId: string
}


export type CreatePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Project ID of the placement group.
   */
  projectId?: string
  /**
   * Name of the placement group.
   */
  name: string
  /**
   * Policy type of the placement group.
   */
  policyType?: PlacementGroupPolicyType
  /**
   * Tags of the placement group.
   */
  tags?: string[]
}


export type CreatePrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the Private Network to attach to.
   */
  privateNetworkId: string
  /**
   * Project ID for the private network interface.
   */
  projectId?: string
  /**
   * ID of the Instance to attach the interface to.
   */
  serverId?: string
  /**
   * List of IP IDs to attach to the interface.
   */
  ipIds?: string[]
  /**
   * Tags to assign to the private network interface.
   */
  tags?: string[]
}


export type CreateSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
  projectId?: string
  /**
   * Tags for the security group.
   */
  tags?: string[]
  /**
   * Whether this should be the default security group for the project.
   */
  projectDefault: boolean
  /**
   * Default action for inbound rules.
   */
  inboundDefaultAction?: SecurityGroupAction
  /**
   * Default action for outbound rules.
   */
  outboundDefaultAction?: SecurityGroupAction
  /**
   * Whether the security group should be stateless.
   */
  stateless: boolean
}


export type CreateServerFromTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
  zone?: ScwZone
  /**
   * Project ID for the server.
   */
  projectId?: string
  /**
   * Name of the server.
   */
  name: string
  /**
   * Tags to associate with the server.
   */
  tags?: string[]
  /**
   * Type of the server.
   */
  serverType: string
  /**
   * ID of the placement group the server belongs to.
   */
  placementGroupId?: string
  /**
   * Volumes to attach to the server.
   */
  volumes?: CreateServerRequestServerVolume[]
  /**
   * IAM ID of the SSH key used to encrypt the Windows `Administrator` password for RDP use.
   */
  windowsRdpSshKeyId?: string
  /**
   * Public network interface configuration.
   */
  publicNetworkInterface?: CreateServerRequestPublicNetworkInterface
}


export type CreateTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Project ID for the template.
   */
  projectId?: string
  /**
   * Name of the template.
   */
  name: string
  /**
   * Tags to associate with the template.
   */
  tags?: string[]
  /**
   * Tags to associate with servers created from the template.
   */
  serverTags?: string[]
  /**
   * Commercial type of the server defined by the template.
   */
  serverType: string
  /**
   * Security group ID for the template.
   */
  securityGroupId?: string
  /**
   * Placement group ID for the template.
   */
  placementGroupId?: string
  /**
   * List of volume templates to define volumes for servers.
   */
  volumes?: CreateTemplateRequestVolumeTemplate[]
  /**
   * List of private networks to associate with the template.
   */
  privateNetworks?: CreateTemplateRequestPrivateNetworkTemplate[]
  /**
   * List of filesystem IDs to associate with the template.
   */
  filesystemIds?: string[]
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
  windowsRdpSshKeyId?: string
}


export type DeletePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the placement group you want to delete.
   */
  placementGroupId: string
}


export type DeletePrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the private network interface to delete.
   */
  privateNetworkInterfaceId: string
}


export type DeleteSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the security group to delete.
   */
  securityGroupId: string
}


export type DeleteSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * List of rule IDs to delete.
   */
  securityGroupRuleIds?: string[]
}


export type DeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server to delete.
   */
  serverId: string
  /**
   * Whether to delete all IPs attached to the server.
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteAllIps?: boolean
  /**
   * List of IP IDs to delete.
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteIpIds?: string[]
  /**
   * Whether to delete all volumes attached to the server.
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteAllVolumes?: boolean
  /**
   * List of volume IDs to delete.
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteVolumeIds?: string[]
  /**
   * Whether to keep all private network interfaces.
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  keepAllPrivateNics?: boolean
  /**
   * List of private network interface IDs to delete.
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  deletePrivateNicIds?: string[]
}


export type DeleteTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Unique ID of the template to delete.
   */
  templateId: string
}


export type DeleteTemplateUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
  zone?: ScwZone
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * The key of the user data to delete.
   */
  key: string
}


export type DetachServerFileSystemRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
  zone?: ScwZone
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
  zone?: ScwZone
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
  zone?: ScwZone
  /**
   * ID of the server to detach the volume from.
   */
  serverId: string
  /**
   * ID of the volume to detach.
   */
  volumeId: string
}


export type GetPlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the placement group you want to get.
   */
  placementGroupId: string
}


export type GetPrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the private network interface to retrieve.
   */
  privateNetworkInterfaceId: string
}


export type GetResourceCountsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Organization ID to filter resource counts.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId' could be set.
   */
  organizationId?: string
  /**
   * Project ID to filter resource counts.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId' could be set.
   */
  projectId?: string
}


export type GetSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the security group to retrieve.
   */
  securityGroupId: string
}


export type GetServerCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * The ID of the server.
   */
  serverId: string
}


export type GetServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server to retrieve.
   */
  serverId: string
}


export type GetTemplateCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Unique ID of the template.
   */
  templateId: string
}


export type GetTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Unique ID of the template to retrieve.
   */
  templateId: string
}


export type GetTemplateUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
  zone?: ScwZone
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * The key of the user data to retrieve.
   */
  key: string
}


export type ListPlacementGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * The initial pagination token to start from.
   */
  pageToken?: string
  /**
   * The maximum number of placement groups to return.
   */
  pageSize?: number
  /**
   * The field by which to order the result list.
   */
  orderBy?: ListPlacementGroupsRequestOrderBy
  /**
   * List only placement groups of this Project ID.
   */
  projectId?: string
  /**
   * List only placement groups with these IDs.
   */
  placementGroupIds?: string[]
  /**
   * Filter placement groups by name.
   */
  name?: string
  /**
   * List placement groups with these exact tags.
   */
  tags?: string[]
}


export interface ListPlacementGroupsResponse {
  /**
   * List of placement groups.
   */
  placementGroups: PlacementGroup[]
  /**
   * The pagination token, use it to get the next page of results.
   */
  nextPageToken?: string
  /**
   * Total number of placement groups.
   */
  totalCount: number
}


export type ListPrivateNetworkInterfacesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Token for pagination.
   */
  pageToken?: string
  /**
   * Number of items to return per page.
   */
  pageSize?: number
  /**
   * Field to order results by.
   */
  orderBy?: ListPrivateNetworkInterfacesRequestOrderBy
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by server IDs.
   */
  serverIds?: string[]
  /**
   * Filter by Private Network IDs.
   */
  privateNetworkIds?: string[]
  /**
   * Filter by tags.
   */
  tags?: string[]
}


export interface ListPrivateNetworkInterfacesResponse {
  /**
   * List of private network interfaces.
   */
  privateNetworkInterfaces: PrivateNetworkInterfaceSummary[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string
  /**
   * Total number of items.
   */
  totalCount: number
}


export type ListSecurityGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Token for pagination.
   */
  pageToken?: string
  /**
   * Number of items to return per page.
   */
  pageSize?: number
  /**
   * Field and direction to sort by.
   */
  orderBy?: ListSecurityGroupsRequestOrderBy
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by name.
   */
  name?: string
  /**
   * Filter by tags.
   */
  tags?: string[]
  /**
   * Filter by specific security group IDs.
   */
  securityGroupIds?: string[]
}


export interface ListSecurityGroupsResponse {
  /**
   * List of security groups.
   */
  securityGroups: SecurityGroupSummary[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string
  /**
   * Total number of items.
   */
  totalCount: number
}


export type ListServerTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Token for pagination.
   */
  pageToken?: string
  /**
   * Number of server types to return per page.
   */
  pageSize?: number
}


export interface ListServerTypesResponse {
  /**
   * List of server types.
   */
  serverTypes: ServerType[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string
  /**
   * Total number of server types.
   */
  totalCount: number
}


export type ListServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Token for pagination.
   */
  pageToken?: string
  /**
   * Number of servers to return per page.
   */
  pageSize?: number
  /**
   * Order of the returned servers.
   */
  orderBy?: ListServersRequestOrderBy
  /**
   * Project ID to filter servers.
   */
  projectId?: string
  /**
   * List of server IDs to filter.
   */
  serverIds?: string[]
  /**
   * Name to filter servers.
   */
  name?: string
  /**
   * Server type to filter.
   */
  serverType?: string
  /**
   * Tags to filter servers.
   */
  tags?: string[]
  /**
   * Security group IDs to filter servers.
   */
  securityGroupIds?: string[]
  /**
   * Placement group IDs to filter servers.
   */
  placementGroupIds?: string[]
  /**
   * Private Network IDs to filter servers.
   */
  privateNetworkIds?: string[]
  /**
   * MAC addresses to filter servers.
   */
  macAddresses?: string[]
}


export interface ListServersResponse {
  /**
   * List of servers.
   */
  servers: ServerSummary[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string
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
  nextPageToken?: string
  /**
   * Total number of items.
   */
  totalCount: number
}


export type ListTemplateUserDataKeysRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Unique ID of the template.
   */
  templateId: string
  /**
   * Token for pagination.
   */
  pageToken?: string
  /**
   * Number of items to return per page.
   */
  pageSize?: number
}


export interface ListTemplateUserDataKeysResponse {
  /**
   * List of user data keys associated with the template.
   */
  keys: string[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string
  /**
   * Total number of items.
   */
  totalCount: number
}


export type ListTemplatesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Token for pagination.
   */
  pageToken?: string
  /**
   * Number of items to return per page.
   */
  pageSize?: number
  /**
   * Field to sort results by.
   */
  orderBy?: ListTemplatesRequestOrderBy
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by specific template IDs.
   */
  templateIds?: string[]
  /**
   * Filter by template name.
   */
  name?: string
  /**
   * Filter by tags.
   */
  tags?: string[]
  /**
   * Filter by server tags.
   */
  serverTags?: string[]
  /**
   * Filter by security group IDs.
   */
  securityGroupIds?: string[]
  /**
   * Filter by placement group IDs.
   */
  placementGroupIds?: string[]
}


export interface ListTemplatesResponse {
  /**
   * List of template summaries.
   */
  templates: TemplateSummary[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string
  /**
   * Total number of items.
   */
  totalCount: number
}


export type ListUserDataKeysRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * Page token for pagination.
   */
  pageToken?: string
  /**
   * Number of items to return per page.
   */
  pageSize?: number
}


export interface ListUserDataKeysResponse {
  /**
   * List of user data keys.
   */
  keys: string[]
  /**
   * Token for the next page.
   */
  nextPageToken?: string
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
  nextPageToken?: string
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
  nextPageToken?: string
  /**
   * Total number of items.
   */
  totalCount: number
}


export type PauseServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
  createdAt?: Date
  /**
   * Last update timestamp of the private network interface.
   */
  updatedAt?: Date
}


export type RebootServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
}


export interface Server {
  /**
   * Unique ID of the server.
   */
  id: string
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
  placementGroupId?: string
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
  createdAt?: Date
  /**
   * Last update timestamp of the server.
   */
  updatedAt?: Date
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
  bootVolumeId?: string
  /**
   * Detailed status information of the server.
   */
  statusDetail: string
  /**
   * Encrypted RDP password for Windows servers. The encryption scheme is RSA-PKCS1-v1_5, using the public part of the SSH key supplied in `windows_rdp_ssh_key_id`.
   */
  windowsRdpPassword?: ServerRDPPassword
  /**
   * Public network interface of the server.
   */
  publicNetworkInterface?: ServerPublicNetworkInterface
  /**
   * Zone in which the server is located.
   */
  zone: ScwZone
}


export type SetSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the security group to set rules for.
   */
  securityGroupId: string
  /**
   * List of rules to set.
   */
  securityGroupRules?: SecurityGroupRuleConfig[]
}


export type SetServerCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
  zone?: ScwZone
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
  zone?: ScwZone
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
  zone?: ScwZone
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
  zone?: ScwZone
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
  zone?: ScwZone
  /**
   * ID of the server to start.
   */
  serverId: string
}


export type StopAndDeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server to stop and delete.
   */
  serverId: string
  /**
   * Whether to delete all IPs attached to the server.
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteAllIps?: boolean
  /**
   * List of IP IDs to delete.
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteIpIds?: string[]
  /**
   * Whether to delete all volumes attached to the server.
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteAllVolumes?: boolean
  /**
   * List of volume IDs to delete.
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteVolumeIds?: string[]
  /**
   * Whether to keep all private network interfaces.
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  keepAllPrivateNics?: boolean
  /**
   * List of private network interface IDs to delete.
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  deletePrivateNicIds?: string[]
}


export type StopServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
  securityGroupId?: string
  /**
   * Placement group ID associated with the template.
   */
  placementGroupId?: string
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
  createdAt?: Date
  /**
   * Last update timestamp of the template.
   */
  updatedAt?: Date
  /**
   * IAM ID of the SSH key used to encrypt the Windows `Administrator` password for RDP use.
   */
  windowsRdpSshKeyId?: string
  /**
   * Zone in which the template is located.
   */
  zone: ScwZone
}


export type UpdatePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the placement group.
   */
  placementGroupId: string
  /**
   * Name of the placement group.
   */
  name?: string
  /**
   * Policy type of the placement group.
   */
  policyType?: PlacementGroupPolicyType
  /**
   * Tags of the placement group.
   */
  tags?: string[]
}


export type UpdatePrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the private network interface to update.
   */
  privateNetworkInterfaceId: string
  /**
   * New tags to assign to the private network interface.
   */
  tags?: string[]
}


export type UpdateSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the security group to update.
   */
  securityGroupId: string
  /**
   * New name for the security group.
   */
  name?: string
  /**
   * New description for the security group.
   */
  description?: string
  /**
   * Whether to disable default rules.
   */
  disableDefaultRules?: boolean
  /**
   * New tags for the security group.
   */
  tags?: string[]
  /**
   * Whether this should be the default security group for the project.
   */
  projectDefault?: boolean
  /**
   * New default action for inbound rules.
   */
  inboundDefaultAction?: SecurityGroupAction
  /**
   * New default action for outbound rules.
   */
  outboundDefaultAction?: SecurityGroupAction
  /**
   * Whether the security group should be stateless.
   */
  stateless?: boolean
}


export type UpdateSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the rule to update.
   */
  securityGroupRuleId: string
  /**
   * New protocol for the rule.
   */
  protocol?: SecurityGroupRuleProtocol
  /**
   * New direction for the rule.
   */
  direction?: SecurityGroupRuleDirection
  /**
   * New action for the rule.
   */
  action?: SecurityGroupRuleAction
  /**
   * New source IP range for the rule.
   */
  sourceIpRange?: string
  /**
   * New destination IP range for the rule.
   */
  destinationIpRange?: string
  /**
   * New source port range for the rule.
   */
  sourcePorts?: SecurityGroupRulePortRange
  /**
   * New destination port range for the rule.
   */
  destinationPorts?: SecurityGroupRulePortRange
  /**
   * New position for the rule.
   */
  position?: number
}


export type UpdateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server to update.
   */
  serverId: string
  /**
   * New name for the server.
   */
  name?: string
  /**
   * New tags for the server.
   */
  tags?: string[]
  /**
   * New server type.
   */
  serverType?: string
  /**
   * New placement group ID.
   */
  placementGroupId?: string
  /**
   * New rescue mode setting.
   */
  rescueMode?: boolean
  /**
   * New boot volume ID.
   */
  bootVolumeId?: string
  /**
   * New IAM ID of the SSH key used to encrypt the Windows `Administrator` password for RDP use.
   */
  windowsRdpSshKeyId?: string
  /**
   * Protection status of the server.
   */
  protected?: boolean
  /**
   * New public network interface configuration.
   */
  publicNetworkInterface?: UpdateServerRequestPublicNetworkInterface
}


export type UpdateTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Unique ID of the template to update.
   */
  templateId: string
  /**
   * New name for the template.
   */
  name?: string
  /**
   * New tags for the template.
   */
  tags?: string[]
  /**
   * New server tags for the template.
   */
  serverTags?: string[]
  /**
   * New server type for the template.
   */
  serverType?: string
  /**
   * New security group ID for the template.
   */
  securityGroupId?: string
  /**
   * New placement group ID for the template.
   */
  placementGroupId?: string
  /**
   * Updated volume templates for the template.
   */
  updateVolumes?: UpdateTemplateRequestUpdateVolumes
  /**
   * Updated private networks list for the template.
   */
  updatePrivateNetworks?: UpdateTemplateRequestUpdatePrivateNetworks
  /**
   * New list of filesystem IDs for the template.
   */
  filesystemIds?: string[]
  /**
   * New number of IPv4 public IPs to attach to servers.
   */
  publicIpV4Count?: number
  /**
   * New number of IPv6 public IPs to attach to servers.
   */
  publicIpV6Count?: number
  /**
   * New IAM ID of the SSH key used to encrypt the Windows `Administrator` password for RDP use.
   */
  windowsRdpSshKeyId?: string
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
  zone?: ScwZone
  /**
   * Project ID of the snapshot.
   */
  projectId?: string
  /**
   * Name of the snapshot.
   */
  name: string
  /**
   * Tags associated with the snapshot.
   */
  tags?: string[]
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
  zone?: ScwZone
  /**
   * Project ID to which the volume belongs.
   */
  projectId?: string
  /**
   * Volume name.
   */
  name: string
  /**
   * Tags associated with the volume.
   */
  tags?: string[]
  /**
   * Volume size in bytes.
   */
  size?: number
  /**
   * ID of the base snapshot used for this volume.
   */
  baseSnapshotId?: string
  /**
   * Type of the volume.
   */
  volumeType?: CreateVolumeRequestVolumeType
}


export type VolumeApiDeleteSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the snapshot to delete.
   */
  snapshotId: string
}


export type VolumeApiDeleteVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the volume to delete.
   */
  volumeId: string
}


export type VolumeApiExportSnapshotToObjectStorageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
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
  zone?: ScwZone
  /**
   * ID of the snapshot to retrieve.
   */
  snapshotId: string
}


export type VolumeApiGetVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the volume to retrieve.
   */
  volumeId: string
}


export type VolumeApiImportSnapshotFromObjectStorageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Project ID of the snapshot.
   */
  projectId?: string
  /**
   * Name of the snapshot.
   */
  name: string
  /**
   * Tags associated with the snapshot.
   */
  tags?: string[]
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
  size?: number
  /**
   * Volume type of the snapshot.
   */
  volumeType?: SnapshotVolumeType
}


export type VolumeApiListSnapshotsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Token for pagination.
   */
  pageToken?: string
  /**
   * Number of snapshots to return per page.
   */
  pageSize?: number
  /**
   * Field to sort by.
   */
  orderBy?: ListSnapshotsRequestOrderBy
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by specific snapshot IDs.
   */
  snapshotIds?: string[]
  /**
   * Filter by name.
   */
  name?: string
  /**
   * Filter by tags.
   */
  tags?: string[]
  /**
   * Filter by base volume ID.
   */
  baseVolumeId?: string
}


export type VolumeApiListVolumeTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Token for pagination.
   */
  pageToken?: string
  /**
   * Number of items to return per page.
   */
  pageSize?: number
}


export type VolumeApiListVolumesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Token for pagination.
   */
  pageToken?: string
  /**
   * Number of items to return per page.
   */
  pageSize?: number
  /**
   * Field to order the results by.
   */
  orderBy?: ListVolumesRequestOrderBy
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by specific volume IDs.
   */
  volumeIds?: string[]
  /**
   * Filter by volume name.
   */
  name?: string
  /**
   * Filter by tags.
   */
  tags?: string[]
  /**
   * Filter by volume type.
   */
  volumeType?: VolumeVolumeType
}


export type VolumeApiUpdateSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the snapshot to update.
   */
  snapshotId: string
  /**
   * New name for the snapshot.
   */
  name?: string
  /**
   * New tags for the snapshot.
   */
  tags?: string[]
  /**
   * Whether the snapshot should be public.
   */
  public?: boolean
}


export type VolumeApiUpdateVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the volume to update.
   */
  volumeId: string
  /**
   * New name for the volume.
   */
  name?: string
  /**
   * New tags for the volume.
   */
  tags?: string[]
  /**
   * New size for the volume.
   */
  size?: number
}


