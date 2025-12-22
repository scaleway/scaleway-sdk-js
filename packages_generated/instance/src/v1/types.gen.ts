// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type Arch =
  | 'unknown_arch'
  | 'x86_64'
  | 'arm'
  | 'arm64'

export type AttachServerVolumeRequestVolumeType =
  | 'unknown_volume_type'
  | 'l_ssd'
  | 'b_ssd'
  | 'sbs_volume'

export type BootType =
  | 'local'
  | 'bootscript'
  | 'rescue'

export type ImageState =
  | 'available'
  | 'creating'
  | 'error'

export type IpState =
  | 'unknown_state'
  | 'detached'
  | 'attached'
  | 'pending'
  | 'error'

export type IpType =
  | 'unknown_iptype'
  | 'routed_ipv4'
  | 'routed_ipv6'

export type ListServersRequestOrder =
  | 'creation_date_desc'
  | 'creation_date_asc'
  | 'modification_date_desc'
  | 'modification_date_asc'

export type PlacementGroupPolicyMode =
  | 'optional'
  | 'enforced'

export type PlacementGroupPolicyType =
  | 'max_availability'
  | 'low_latency'

export type PrivateNICState =
  | 'available'
  | 'syncing'
  | 'syncing_error'

export type SecurityGroupPolicy =
  | 'unknown_policy'
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

export type SecurityGroupRuleProtocol =
  | 'unknown_protocol'
  | 'TCP'
  | 'UDP'
  | 'ICMP'
  | 'ANY'

export type SecurityGroupState =
  | 'available'
  | 'syncing'
  | 'syncing_error'

export type ServerAction =
  | 'poweron'
  | 'backup'
  | 'stop_in_place'
  | 'poweroff'
  | 'terminate'
  | 'reboot'
  | 'enable_routed_ip'

export type ServerFilesystemState =
  | 'unknown_state'
  | 'attaching'
  | 'available'
  | 'detaching'

export type ServerIpIpFamily =
  | 'inet'
  | 'inet6'

export type ServerIpProvisioningMode =
  | 'manual'
  | 'dhcp'
  | 'slaac'

export type ServerIpState =
  | 'unknown_state'
  | 'detached'
  | 'attached'
  | 'pending'
  | 'error'

export type ServerState =
  | 'running'
  | 'stopped'
  | 'stopped in place'
  | 'starting'
  | 'stopping'
  | 'locked'

export type ServerTypesAvailability =
  | 'available'
  | 'scarce'
  | 'shortage'

export type SnapshotState =
  | 'available'
  | 'snapshotting'
  | 'error'
  | 'invalid_data'
  | 'importing'
  | 'exporting'

export type SnapshotVolumeType =
  | 'unknown_volume_type'
  | 'l_ssd'
  | 'b_ssd'
  | 'unified'

export type TaskStatus =
  | 'pending'
  | 'started'
  | 'success'
  | 'failure'
  | 'retry'

export type VolumeServerState =
  | 'available'
  | 'snapshotting'
  | 'resizing'
  | 'fetching'
  | 'saving'
  | 'hotsyncing'
  | 'attaching'
  | 'error'

export type VolumeServerVolumeType =
  | 'l_ssd'
  | 'b_ssd'
  | 'sbs_volume'
  | 'scratch'

export type VolumeState =
  | 'available'
  | 'snapshotting'
  | 'fetching'
  | 'saving'
  | 'attaching'
  | 'resizing'
  | 'hotsyncing'
  | 'error'

export type VolumeVolumeType =
  | 'l_ssd'
  | 'b_ssd'
  | 'unified'
  | 'scratch'
  | 'sbs_volume'
  | 'sbs_snapshot'

export interface ServerSummary {
  id: string
  name: string
}


export interface Bootscript {
  architecture: Arch
  bootcmdargs: string
  default: boolean
  dtb: string
  id: string
  initrd: string
  kernel: string
  organization: string
  public: boolean
  title: string
  project: string
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone: ScwZone
}


export interface Volume {
  /**
   * Volume unique ID.
   */
  id: string
  /**
   * Volume name.
   */
  name: string
  /**
   * @deprecated Show the volume NBD export URI (deprecated, will always be empty).
   */
  exportUri?: string
  /**
   * Volume disk size.
   */
  size: number
  /**
   * Volume type.
   */
  volumeType: VolumeVolumeType
  /**
   * Volume creation date.
   */
  creationDate?: Date
  /**
   * Volume modification date.
   */
  modificationDate?: Date
  /**
   * Volume Organization ID.
   */
  organization: string
  /**
   * Volume Project ID.
   */
  project: string
  /**
   * Volume tags.
   */
  tags: string[]
  /**
   * Instance attached to the volume.
   */
  server?: ServerSummary
  /**
   * Volume state.
   */
  state: VolumeState
  /**
   * Zone in which the volume is located.
   */
  zone: ScwZone
}


export interface VolumeSummary {
  id: string
  name: string
  size: number
  volumeType: VolumeVolumeType
}


export interface ServerTypeNetworkInterface {
  /**
   * Maximum internal bandwidth in bits per seconds.
   */
  internalBandwidth?: number
  /**
   * Maximum internet bandwidth in bits per seconds.
   */
  internetBandwidth?: number
}


export interface ServerTypeVolumeConstraintSizes {
  /**
   * Minimum volume size in bytes.
   */
  minSize: number
  /**
   * Maximum volume size in bytes.
   */
  maxSize: number
}


export interface Image {
  id: string
  name: string
  arch: Arch
  creationDate?: Date
  modificationDate?: Date
  /**
   * @deprecated 
   */
  defaultBootscript?: Bootscript
  extraVolumes: Record<string, Volume>
  fromServer: string
  organization: string
  public: boolean
  rootVolume?: VolumeSummary
  state: ImageState
  project: string
  tags: string[]
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone: ScwZone
}


export interface PlacementGroup {
  /**
   * Placement group unique ID.
   */
  id: string
  /**
   * Placement group name.
   */
  name: string
  /**
   * Placement group Organization ID.
   */
  organization: string
  /**
   * Placement group Project ID.
   */
  project: string
  /**
   * Placement group tags.
   */
  tags: string[]
  /**
   * Select the failure mode when the placement cannot be respected, either optional or enforced.
   */
  policyMode: PlacementGroupPolicyMode
  /**
   * Select the behavior of the placement group, either low_latency (group) or max_availability (spread).
   */
  policyType: PlacementGroupPolicyType
  /**
   * In the server endpoints the value is always false as it is deprecated.
In the placement group endpoints the value is correct.
   */
  policyRespected: boolean
  /**
   * Zone in which the placement group is located.
   */
  zone: ScwZone
}


export interface PrivateNIC {
  /**
   * Private NIC unique ID.
   */
  id: string
  /**
   * Instance to which the private NIC is attached.
   */
  serverId: string
  /**
   * Private Network the private NIC is attached to.
   */
  privateNetworkId: string
  /**
   * Private NIC MAC address.
   */
  macAddress: string
  /**
   * Private NIC state.
   */
  state: PrivateNICState
  /**
   * Private NIC tags.
   */
  tags: string[]
  /**
   * Private NIC creation date.
   */
  creationDate?: Date
  /**
   * The zone in which the Private NIC is located.
   */
  zone: ScwZone
}


export interface SecurityGroupSummary {
  id: string
  name: string
}


export interface ServerFilesystem {
  filesystemId: string
  state: ServerFilesystemState
}


export interface ServerIp {
  /**
   * Unique ID of the IP address.
   */
  id: string
  /**
   * Instance's public IP-Address.
   */
  address: string
  /**
   * Gateway's IP address.
   */
  gateway: string
  /**
   * CIDR netmask.
   */
  netmask: string
  /**
   * IP address family (inet or inet6).
   */
  family: ServerIpIpFamily
  /**
   * True if the IP address is dynamic.
   */
  dynamic: boolean
  /**
   * Information about this address provisioning mode.
   */
  provisioningMode: ServerIpProvisioningMode
  /**
   * Tags associated with the IP.
   */
  tags: string[]
  /**
   * The ip_id of an IPAM ip if the ip is created from IPAM, null if not.
   */
  ipamId: string
  /**
   * IP address state.
   */
  state: ServerIpState
}


export interface ServerIpv6 {
  /**
   * Instance IPv6 IP-Address.
   */
  address: string
  /**
   * IPv6 IP-addresses gateway.
   */
  gateway: string
  /**
   * IPv6 IP-addresses CIDR netmask.
   */
  netmask: string
}


export interface ServerLocation {
  clusterId: string
  hypervisorId: string
  nodeId: string
  platformId: string
  zoneId: string
}


export interface ServerMaintenance {
  reason: string
  startDate?: Date
}


export interface VolumeServer {
  id: string
  name?: string
  /**
   * @deprecated 
   */
  exportUri?: string
  organization?: string
  server?: ServerSummary
  size?: number
  volumeType: VolumeServerVolumeType
  creationDate?: Date
  modificationDate?: Date
  state?: VolumeServerState
  project?: string
  boot: boolean
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone: ScwZone
}


export interface SnapshotBaseVolume {
  /**
   * Volume ID on which the snapshot is based.
   */
  id: string
  /**
   * Volume name on which the snapshot is based on.
   */
  name: string
}


export interface ServerTypeCapabilities {
  /**
   * Defines whether the Instance supports block storage.
   */
  blockStorage?: boolean
  /**
   * List of supported boot types.
   */
  bootTypes: BootType[]
  /**
   * Max number of SFS (Scaleway File Systems) that can be attached to the Instance.
   */
  maxFileSystems: number
}


export interface ServerTypeGPUInfo {
  /**
   * GPU manufacturer.
   */
  gpuManufacturer: string
  /**
   * GPU model name.
   */
  gpuName: string
  /**
   * RAM of a single GPU, in bytes.
   */
  gpuMemory: number
}


export interface ServerTypeNetwork {
  /**
   * List of available network interfaces.
   */
  interfaces: ServerTypeNetworkInterface[]
  /**
   * Total maximum internal bandwidth in bits per seconds.
   */
  sumInternalBandwidth?: number
  /**
   * Total maximum internet bandwidth in bits per seconds.
   */
  sumInternetBandwidth?: number
  /**
   * True if IPv6 is enabled.
   */
  ipv6Support: boolean
}


export interface ServerTypeVolumeConstraintsByType {
  /**
   * Local SSD volumes.
   */
  lSsd?: ServerTypeVolumeConstraintSizes
}


export interface VolumeTypeCapabilities {
  snapshot: boolean
}


export interface VolumeTypeConstraints {
  min: number
  max: number
}


export interface Server {
  /**
   * Instance unique ID.
   */
  id: string
  /**
   * Instance name.
   */
  name: string
  /**
   * Instance Organization ID.
   */
  organization: string
  /**
   * Instance Project ID.
   */
  project: string
  /**
   * List of allowed actions on the Instance.
   */
  allowedActions: ServerAction[]
  /**
   * Tags associated with the Instance.
   */
  tags: string[]
  /**
   * Instance commercial type (eg. GP1-M).
   */
  commercialType: string
  /**
   * Instance creation date.
   */
  creationDate?: Date
  /**
   * True if a dynamic IPv4 is required.
   */
  dynamicIpRequired: boolean
  /**
   * @deprecated True to configure the instance so it uses the routed IP mode. Use of `routed_ip_enabled` as `False` is deprecated.
   */
  routedIpEnabled?: boolean
  /**
   * @deprecated True if IPv6 is enabled (deprecated and always `False` when `routed_ip_enabled` is `True`).
   */
  enableIpv6?: boolean
  /**
   * Instance host name.
   */
  hostname: string
  /**
   * Information about the Instance image.
   */
  image?: Image
  /**
   * Defines whether the Instance protection option is activated.
   */
  protected: boolean
  /**
   * Private IP address of the Instance (deprecated and always `null` when `routed_ip_enabled` is `True`).
   */
  privateIp?: string
  /**
   * @deprecated Information about the public IP (deprecated in favor of `public_ips`).
   */
  publicIp?: ServerIp
  /**
   * Information about all the public IPs attached to the server.
   */
  publicIps: ServerIp[]
  /**
   * The server's MAC address.
   */
  macAddress: string
  /**
   * Instance modification date.
   */
  modificationDate?: Date
  /**
   * Instance state.
   */
  state: ServerState
  /**
   * Instance location.
   */
  location?: ServerLocation
  /**
   * @deprecated Instance IPv6 address (deprecated when `routed_ip_enabled` is `True`).
   */
  ipv6?: ServerIpv6
  /**
   * Instance boot type.
   */
  bootType: BootType
  /**
   * Instance volumes.
   */
  volumes: Record<string, VolumeServer>
  /**
   * Instance security group.
   */
  securityGroup?: SecurityGroupSummary
  /**
   * Instance planned maintenance.
   */
  maintenances: ServerMaintenance[]
  /**
   * Detailed information about the Instance state.
   */
  stateDetail: string
  /**
   * Instance architecture.
   */
  arch: Arch
  /**
   * Instance placement group.
   */
  placementGroup?: PlacementGroup
  /**
   * Instance private NICs.
   */
  privateNics: PrivateNIC[]
  /**
   * Zone in which the Instance is located.
   */
  zone: ScwZone
  /**
   * The public_key value of this key is used to encrypt the admin password. When set to an empty string, reset this value and admin_password_encrypted_value to an empty string so a new password may be generated.
   */
  adminPasswordEncryptionSshKeyId?: string
  /**
   * This value is reset when admin_password_encryption_ssh_key_id is set to an empty string.
   */
  adminPasswordEncryptedValue?: string
  /**
   * List of attached filesystems.
   */
  filesystems: ServerFilesystem[]
  /**
   * True if the Instance type has reached end of service.
   */
  endOfService: boolean
  /**
   * Public DNS of the server.
   */
  dns?: string
}


export interface VolumeTemplate {
  /**
   * UUID of the volume.
   */
  id: string
  /**
   * Name of the volume.
   */
  name: string
  /**
   * Disk size of the volume, must be a multiple of 512.
   */
  size: number
  /**
   * Type of the volume.
   */
  volumeType: VolumeVolumeType
  /**
   * @deprecated Organization ID of the volume.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string
  /**
   * Project ID of the volume.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string
}


export interface Ip {
  id: string
  address: string
  reverse?: string
  server?: ServerSummary
  organization: string
  tags: string[]
  project: string
  type: IpType
  state: IpState
  prefix: string
  ipamId: string
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone: ScwZone
}


export interface SecurityGroup {
  /**
   * Security group unique ID.
   */
  id: string
  /**
   * Security group name.
   */
  name: string
  /**
   * Security group description.
   */
  description: string
  /**
   * True if SMTP is blocked on IPv4 and IPv6. This feature is read only, please open a support ticket if you need to make it configurable.
   */
  enableDefaultSecurity: boolean
  /**
   * Default inbound policy.
   */
  inboundDefaultPolicy: SecurityGroupPolicy
  /**
   * Default outbound policy.
   */
  outboundDefaultPolicy: SecurityGroupPolicy
  /**
   * Security group Organization ID.
   */
  organization: string
  /**
   * Security group Project ID.
   */
  project: string
  /**
   * Security group tags.
   */
  tags: string[]
  /**
   * @deprecated True if it is your default security group for this Organization ID.
   */
  organizationDefault?: boolean
  /**
   * True if it is your default security group for this Project ID.
   */
  projectDefault: boolean
  /**
   * Security group creation date.
   */
  creationDate?: Date
  /**
   * Security group modification date.
   */
  modificationDate?: Date
  /**
   * List of Instances attached to this security group.
   */
  servers: ServerSummary[]
  /**
   * Defines whether the security group is stateful.
   */
  stateful: boolean
  /**
   * Security group state.
   */
  state: SecurityGroupState
  /**
   * Zone in which the security group is located.
   */
  zone: ScwZone
}


export interface SecurityGroupRule {
  id: string
  protocol: SecurityGroupRuleProtocol
  direction: SecurityGroupRuleDirection
  action: SecurityGroupRuleAction
  ipRange: string
  destPortFrom?: number
  destPortTo?: number
  position: number
  editable: boolean
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone: ScwZone
}


export interface VolumeServerTemplate {
  /**
   * UUID of the volume.
   */
  id?: string
  /**
   * Force the Instance to boot on this volume.
   */
  boot?: boolean
  /**
   * Name of the volume.
   */
  name?: string
  /**
   * Disk size of the volume, must be a multiple of 512.
   */
  size?: number
  /**
   * Type of the volume.
   */
  volumeType: VolumeVolumeType
  /**
   * ID of the snapshot on which this volume will be based.
   */
  baseSnapshot?: string
  /**
   * Organization ID of the volume.
   */
  organization?: string
  /**
   * Project ID of the volume.
   */
  project?: string
}


export interface Snapshot {
  /**
   * Snapshot ID.
   */
  id: string
  /**
   * Snapshot name.
   */
  name: string
  /**
   * Snapshot Organization ID.
   */
  organization: string
  /**
   * Snapshot Project ID.
   */
  project: string
  /**
   * Snapshot tags.
   */
  tags: string[]
  /**
   * Snapshot volume type.
   */
  volumeType: VolumeVolumeType
  /**
   * Snapshot size.
   */
  size: number
  /**
   * Snapshot state.
   */
  state: SnapshotState
  /**
   * Volume on which the snapshot is based on.
   */
  baseVolume?: SnapshotBaseVolume
  /**
   * Snapshot creation date.
   */
  creationDate?: Date
  /**
   * Snapshot modification date.
   */
  modificationDate?: Date
  /**
   * Snapshot zone.
   */
  zone: ScwZone
  /**
   * Reason for the failed snapshot import.
   */
  errorReason?: string
}


export interface Task {
  /**
   * Unique ID of the task.
   */
  id: string
  /**
   * Description of the task.
   */
  description: string
  /**
   * Progress of the task in percent.
   */
  progress: number
  /**
   * Task start date.
   */
  startedAt?: Date
  /**
   * Task end date.
   */
  terminatedAt?: Date
  /**
   * Task status.
   */
  status: TaskStatus
  hrefFrom: string
  hrefResult: string
  /**
   * Zone in which the task is executed.
   */
  zone: ScwZone
}


export interface Dashboard {
  volumesCount: number
  runningServersCount: number
  serversByTypes: Record<string, number>
  imagesCount: number
  snapshotsCount: number
  serversCount: number
  ipsCount: number
  securityGroupsCount: number
  ipsUnused: number
  volumesLSsdCount: number
  /**
   * @deprecated 
   */
  volumesBSsdCount?: number
  volumesLSsdTotalSize: number
  /**
   * @deprecated 
   */
  volumesBSsdTotalSize?: number
  privateNicsCount: number
  placementGroupsCount: number
}


export interface PlacementGroupServer {
  /**
   * Instance UUID.
   */
  id: string
  /**
   * Instance name.
   */
  name: string
  /**
   * Defines whether the placement group policy is respected (either 1 or 0).
   */
  policyRespected: boolean
}


export interface GetServerTypesAvailabilityResponseAvailability {
  availability: ServerTypesAvailability
}


export interface ServerType {
  /**
   * @deprecated Estimated monthly price, for a 30 days month, in Euro.
   */
  monthlyPrice?: number
  /**
   * Hourly price in Euro.
   */
  hourlyPrice: number
  /**
   * Alternative Instance name, if any.
   */
  altNames: string[]
  /**
   * Additional volume constraints.
   */
  perVolumeConstraint?: ServerTypeVolumeConstraintsByType
  /**
   * Initial volume constraints.
   */
  volumesConstraint?: ServerTypeVolumeConstraintSizes
  /**
   * Number of CPU.
   */
  ncpus: number
  /**
   * Number of GPU.
   */
  gpu?: number
  /**
   * Available RAM in bytes.
   */
  ram: number
  /**
   * GPU information.
   */
  gpuInfo?: ServerTypeGPUInfo
  /**
   * CPU architecture.
   */
  arch: Arch
  /**
   * Network available for the Instance.
   */
  network?: ServerTypeNetwork
  /**
   * Capabilities.
   */
  capabilities?: ServerTypeCapabilities
  /**
   * Maximum available scratch storage.
   */
  scratchStorageMaxSize?: number
  /**
   * The maximum bandwidth allocated to block storage access (in bytes per second).
   */
  blockBandwidth?: number
  /**
   * True if this Instance type has reached end of service.
   */
  endOfService: boolean
}


export interface VolumeType {
  displayName: string
  capabilities?: VolumeTypeCapabilities
  constraints?: VolumeTypeConstraints
}


export interface ServerActionRequestVolumeBackupTemplate {
  /**
   * Overrides the `volume_type` of the snapshot for this volume.
If omitted, the volume type of the original volume will be used.
   */
  volumeType: SnapshotVolumeType
}


export interface SetSecurityGroupRulesRequestRule {
  /**
   * UUID of the security rule to update. If no value is provided, a new rule will be created.
   */
  id?: string
  /**
   * Action to apply when the rule matches a packet.
   */
  action: SecurityGroupRuleAction
  /**
   * Protocol family this rule applies to.
   */
  protocol: SecurityGroupRuleProtocol
  /**
   * Direction the rule applies to.
   */
  direction: SecurityGroupRuleDirection
  /**
   * Range of IP addresses these rules apply to.
   */
  ipRange: string
  /**
   * Beginning of the range of ports this rule applies to (inclusive). This value will be set to null if protocol is ICMP or ANY.
   */
  destPortFrom?: number
  /**
   * End of the range of ports this rule applies to (inclusive). This value will be set to null if protocol is ICMP or ANY, or if it is equal to dest_port_from.
   */
  destPortTo?: number
  /**
   * Position of this rule in the security group rules list. If several rules are passed with the same position, the resulting order is undefined.
   */
  position: number
  /**
   * Indicates if this rule is editable. Rules with the value false will be ignored.
   */
  editable?: boolean
  /**
   * Zone of the rule. This field is ignored.
   */
  zone?: ScwZone
}


export interface VolumeImageUpdateTemplate {
  /**
   * UUID of the snapshot.
   */
  id: string
}


export interface SecurityGroupTemplate {
  id: string
  name: string
}


export type ApplyBlockMigrationRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * The volume to migrate, along with potentially other resources, according to the migration plan generated with a call to the [Get a volume or snapshot's migration plan](#path-volumes-get-a-volume-or-snapshots-migration-plan) endpoint.
   *
   * One-of ('resource'): at most one of 'volumeId', 'snapshotId' could be set.
   */
  volumeId?: string
  /**
   * The snapshot to migrate, along with potentially other resources, according to the migration plan generated with a call to the [Get a volume or snapshot's migration plan](#path-volumes-get-a-volume-or-snapshots-migration-plan) endpoint.
   *
   * One-of ('resource'): at most one of 'volumeId', 'snapshotId' could be set.
   */
  snapshotId?: string
  /**
   * A value to be retrieved from a call to the [Get a volume or snapshot's migration plan](#path-volumes-get-a-volume-or-snapshots-migration-plan) endpoint, to confirm that the volume and/or snapshots specified in said plan should be migrated.
   */
  validationKey: string
}


export type AttachServerFileSystemRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  filesystemId: string
}


export interface AttachServerFileSystemResponse {
  server?: Server
}


export type AttachServerVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  volumeId: string
  volumeType?: AttachServerVolumeRequestVolumeType
  boot?: boolean
}


export interface AttachServerVolumeResponse {
  server?: Server
}


export type CheckBlockMigrationOrganizationQuotasRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  organization?: string
}


export type CreateImageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Name of the image.
   */
  name?: string
  /**
   * UUID of the snapshot.
   */
  rootVolume: string
  /**
   * Architecture of the image.
   */
  arch: Arch
  /**
   * Additional volumes of the image.
   */
  extraVolumes?: Record<string, VolumeTemplate>
  /**
   * @deprecated Organization ID of the image.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string
  /**
   * Project ID of the image.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string
  /**
   * Tags of the image.
   */
  tags?: string[]
  /**
   * True to create a public image.
   */
  public?: boolean
}


export interface CreateImageResponse {
  image?: Image
}


export type CreateIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * @deprecated Organization ID in which the IP is reserved.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string
  /**
   * Project ID in which the IP is reserved.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string
  /**
   * Tags of the IP.
   */
  tags?: string[]
  /**
   * UUID of the Instance you want to attach the IP to.
   */
  server?: string
  /**
   * IP type to reserve (either 'routed_ipv4' or 'routed_ipv6').
   */
  type?: IpType
}


export interface CreateIpResponse {
  ip?: Ip
}


export type CreatePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Name of the placement group.
   */
  name?: string
  /**
   * @deprecated Organization ID of the placement group.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string
  /**
   * Project ID of the placement group.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string
  /**
   * Tags of the placement group.
   */
  tags?: string[]
  /**
   * Operating mode of the placement group.
   */
  policyMode?: PlacementGroupPolicyMode
  /**
   * Policy type of the placement group.
   */
  policyType?: PlacementGroupPolicyType
}


export interface CreatePlacementGroupResponse {
  placementGroup?: PlacementGroup
}


export type CreatePrivateNICRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Instance the private NIC will be attached to.
   */
  serverId: string
  /**
   * UUID of the private network where the private NIC will be attached.
   */
  privateNetworkId: string
  /**
   * Private NIC tags.
   */
  tags?: string[]
  /**
   * @deprecated Ip_ids defined from IPAM.
   */
  ipIds?: string[]
  /**
   * UUID of IPAM ips, to be attached to the instance in the requested private network.
   */
  ipamIpIds?: string[]
}


export interface CreatePrivateNICResponse {
  privateNic?: PrivateNIC
}


export type CreateSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Name of the security group.
   */
  name?: string
  /**
   * Description of the security group.
   */
  description: string
  /**
   * @deprecated Organization ID the security group belongs to.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string
  /**
   * Project ID the security group belong to.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string
  /**
   * Tags of the security group.
   */
  tags?: string[]
  /**
   * @deprecated Defines whether this security group becomes the default security group for new Instances.
   *
   * One-of ('defaultIdentifier'): at most one of 'organizationDefault', 'projectDefault' could be set.
   */
  organizationDefault?: boolean
  /**
   * Whether this security group becomes the default security group for new Instances.
   *
   * One-of ('defaultIdentifier'): at most one of 'organizationDefault', 'projectDefault' could be set.
   */
  projectDefault?: boolean
  /**
   * Whether the security group is stateful or not.
   */
  stateful: boolean
  /**
   * Default policy for inbound rules.
   */
  inboundDefaultPolicy?: SecurityGroupPolicy
  /**
   * Default policy for outbound rules.
   */
  outboundDefaultPolicy?: SecurityGroupPolicy
  /**
   * True to block SMTP on IPv4 and IPv6. This feature is read only, please open a support ticket if you need to make it configurable.
   */
  enableDefaultSecurity?: boolean
}


export interface CreateSecurityGroupResponse {
  securityGroup?: SecurityGroup
}


export type CreateSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the security group.
   */
  securityGroupId: string
  protocol: SecurityGroupRuleProtocol
  direction: SecurityGroupRuleDirection
  action: SecurityGroupRuleAction
  ipRange: string
  /**
   * Beginning of the range of ports to apply this rule to (inclusive).
   */
  destPortFrom?: number
  /**
   * End of the range of ports to apply this rule to (inclusive).
   */
  destPortTo?: number
  /**
   * Position of this rule in the security group rules list.
   */
  position: number
  /**
   * Indicates if this rule is editable (will be ignored).
   */
  editable: boolean
}


export interface CreateSecurityGroupRuleResponse {
  rule?: SecurityGroupRule
}


export type CreateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Instance name.
   */
  name?: string
  /**
   * By default, `dynamic_ip_required` is true, a dynamic ip is attached to the instance (if no flexible ip is already attached).
   */
  dynamicIpRequired?: boolean
  /**
   * @deprecated If true, configure the Instance so it uses the new routed IP mode.
   */
  routedIpEnabled?: boolean
  /**
   * Define the Instance commercial type (i.e. GP1-S).
   */
  commercialType: string
  /**
   * Instance image ID or label.
   */
  image?: string
  /**
   * Volumes attached to the server.
   */
  volumes?: Record<string, VolumeServerTemplate>
  /**
   * @deprecated True if IPv6 is enabled on the server (deprecated and always `False` when `routed_ip_enabled` is `True`).
   */
  enableIpv6?: boolean
  /**
   * @deprecated ID of the reserved IP to attach to the Instance.
   */
  publicIp?: string
  /**
   * A list of reserved IP IDs to attach to the Instance.
   */
  publicIps?: string[]
  /**
   * Boot type to use.
   */
  bootType?: BootType
  /**
   * @deprecated Instance Organization ID.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string
  /**
   * Instance Project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string
  /**
   * Instance tags.
   */
  tags?: string[]
  /**
   * Security group ID.
   */
  securityGroup?: string
  /**
   * Placement group ID if Instance must be part of a placement group.
   */
  placementGroup?: string
  /**
   * The public_key value of this key is used to encrypt the admin password.
   */
  adminPasswordEncryptionSshKeyId?: string
  /**
   * True to activate server protection option.
   */
  protected: boolean
}


export interface CreateServerResponse {
  server?: Server
}


export type CreateSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Name of the snapshot.
   */
  name?: string
  /**
   * UUID of the volume.
   */
  volumeId?: string
  /**
   * Tags of the snapshot.
   */
  tags?: string[]
  /**
   * @deprecated Organization ID of the snapshot.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string
  /**
   * Project ID of the snapshot.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string
  /**
   * Overrides the volume_type of the snapshot.
If omitted, the volume type of the original volume will be used.
   */
  volumeType?: SnapshotVolumeType
  /**
   * Bucket name for snapshot imports.
   */
  bucket?: string
  /**
   * Object key for snapshot imports.
   */
  key?: string
  /**
   * Imported snapshot size, must be a multiple of 512.
   */
  size?: number
}


export interface CreateSnapshotResponse {
  snapshot?: Snapshot
  task?: Task
}


export type CreateVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Volume name.
   */
  name?: string
  /**
   * @deprecated Volume Organization ID.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string
  /**
   * Volume Project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string
  /**
   * Volume tags.
   */
  tags?: string[]
  /**
   * Volume type.
   */
  volumeType?: VolumeVolumeType
  /**
   * Volume disk size, must be a multiple of 512.
   *
   * One-of ('from'): at most one of 'size', 'baseSnapshot' could be set.
   */
  size?: number
  /**
   * ID of the snapshot on which this volume will be based.
   *
   * One-of ('from'): at most one of 'size', 'baseSnapshot' could be set.
   */
  baseSnapshot?: string
}


export interface CreateVolumeResponse {
  volume?: Volume
}


export type DeleteImageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the image you want to delete.
   */
  imageId: string
}


export type DeleteIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID or address of the IP to delete.
   */
  ip: string
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


export type DeletePrivateNICRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Instance to which the private NIC is attached.
   */
  serverId: string
  /**
   * Private NIC unique ID.
   */
  privateNicId: string
}


export type DeleteSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the security group you want to delete.
   */
  securityGroupId: string
}


export type DeleteSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  securityGroupId: string
  securityGroupRuleId: string
}


export type DeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
}


export type DeleteServerUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Instance.
   */
  serverId: string
  /**
   * Key of the user data to delete.
   */
  key: string
}


export type DeleteSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the snapshot you want to delete.
   */
  snapshotId: string
}


export type DeleteVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the volume you want to delete.
   */
  volumeId: string
}


export type DetachServerFileSystemRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  filesystemId: string
}


export interface DetachServerFileSystemResponse {
  server?: Server
}


export type DetachServerVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  volumeId: string
}


export interface DetachServerVolumeResponse {
  server?: Server
}


export type ExportSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Snapshot ID.
   */
  snapshotId: string
  /**
   * Object Storage bucket name.
   */
  bucket: string
  /**
   * Object key.
   */
  key: string
}


export interface ExportSnapshotResponse {
  task?: Task
}


export type GetDashboardRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  organization?: string
  project?: string
}


export interface GetDashboardResponse {
  dashboard?: Dashboard
}


export type GetImageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the image you want to get.
   */
  imageId: string
}


export interface GetImageResponse {
  image?: Image
}


export type GetIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * IP ID or address to get.
   */
  ip: string
}


export interface GetIpResponse {
  ip?: Ip
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


export interface GetPlacementGroupResponse {
  placementGroup?: PlacementGroup
}


export type GetPlacementGroupServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the placement group you want to get.
   */
  placementGroupId: string
}


export interface GetPlacementGroupServersResponse {
  /**
   * Instances attached to the placement group.
   */
  servers: PlacementGroupServer[]
}


export type GetPrivateNICRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Instance to which the private NIC is attached.
   */
  serverId: string
  /**
   * Private NIC unique ID.
   */
  privateNicId: string
}


export interface GetPrivateNICResponse {
  privateNic?: PrivateNIC
}


export type GetSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the security group you want to get.
   */
  securityGroupId: string
}


export interface GetSecurityGroupResponse {
  securityGroup?: SecurityGroup
}


export type GetSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  securityGroupId: string
  securityGroupRuleId: string
}


export interface GetSecurityGroupRuleResponse {
  rule?: SecurityGroupRule
}


export type GetServerCompatibleTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Instance you want to get.
   */
  serverId: string
}


export type GetServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Instance you want to get.
   */
  serverId: string
}


export interface GetServerResponse {
  server?: Server
}


export type GetServerTypesAvailabilityRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number
  /**
   * A positive integer to choose the page to return.
   */
  page?: number
}


export interface GetServerTypesAvailabilityResponse {
  /**
   * Map of server types.
   */
  servers: Record<string, GetServerTypesAvailabilityResponseAvailability>
  totalCount: number
}


export type GetSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the snapshot you want to get.
   */
  snapshotId: string
}


export interface GetSnapshotResponse {
  snapshot?: Snapshot
}


export type GetVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the volume you want to get.
   */
  volumeId: string
}


export interface GetVolumeResponse {
  volume?: Volume
}


export type ListDefaultSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
}


export type ListImagesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  organization?: string
  perPage?: number
  page?: number
  name?: string
  public?: boolean
  arch?: string
  project?: string
  tags?: string
}


export interface ListImagesResponse {
  /**
   * Total number of images.
   */
  totalCount: number
  /**
   * List of images.
   */
  images: Image[]
}


export type ListIpsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Project ID in which the IPs are reserved.
   */
  project?: string
  /**
   * Organization ID in which the IPs are reserved.
   */
  organization?: string
  /**
   * Filter IPs with these exact tags (to filter with several tags, use commas to separate them).
   */
  tags?: string[]
  /**
   * Filter on the IP address (Works as a LIKE operation on the IP address).
   */
  name?: string
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number
  /**
   * A positive integer to choose the page to return.
   */
  page?: number
  /**
   * Filter on the IP Mobility IP type (whose value should be either 'routed_ipv4' or 'routed_ipv6').
   */
  type?: string
}


export interface ListIpsResponse {
  /**
   * Total number of ips.
   */
  totalCount: number
  /**
   * List of ips.
   */
  ips: Ip[]
}


export type ListPlacementGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number
  /**
   * A positive integer to choose the page to return.
   */
  page?: number
  /**
   * List only placement groups of this Organization ID.
   */
  organization?: string
  /**
   * List only placement groups of this Project ID.
   */
  project?: string
  /**
   * List placement groups with these exact tags (to filter with several tags, use commas to separate them).
   */
  tags?: string[]
  /**
   * Filter placement groups by name (for eg. "cluster1" will return "cluster100" and "cluster1" but not "foo").
   */
  name?: string
}


export interface ListPlacementGroupsResponse {
  /**
   * Total number of placement groups.
   */
  totalCount: number
  /**
   * List of placement groups.
   */
  placementGroups: PlacementGroup[]
}


export type ListPrivateNICsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Instance to which the private NIC is attached.
   */
  serverId: string
  /**
   * Private NIC tags.
   */
  tags?: string[]
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number
  /**
   * A positive integer to choose the page to return.
   */
  page?: number
}


export interface ListPrivateNICsResponse {
  privateNics: PrivateNIC[]
  totalCount: number
}


export type ListSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the security group.
   */
  securityGroupId: string
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number
  /**
   * A positive integer to choose the page to return.
   */
  page?: number
}


export interface ListSecurityGroupRulesResponse {
  /**
   * Total number of security groups.
   */
  totalCount: number
  /**
   * List of security rules.
   */
  rules: SecurityGroupRule[]
}


export type ListSecurityGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Name of the security group.
   */
  name?: string
  /**
   * Security group Organization ID.
   */
  organization?: string
  /**
   * Security group Project ID.
   */
  project?: string
  /**
   * List security groups with these exact tags (to filter with several tags, use commas to separate them).
   */
  tags?: string[]
  /**
   * Filter security groups with this value for project_default.
   */
  projectDefault?: boolean
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number
  /**
   * A positive integer to choose the page to return.
   */
  page?: number
}


export interface ListSecurityGroupsResponse {
  /**
   * Total number of security groups.
   */
  totalCount: number
  /**
   * List of security groups.
   */
  securityGroups: SecurityGroup[]
}


export type ListServerActionsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
}


export interface ListServerActionsResponse {
  actions: ServerAction[]
}


export type ListServerUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Instance.
   */
  serverId: string
}


export interface ListServerUserDataResponse {
  userData: string[]
}


export type ListServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number
  /**
   * A positive integer to choose the page to return.
   */
  page?: number
  /**
   * List only Instances of this Organization ID.
   */
  organization?: string
  /**
   * List only Instances of this Project ID.
   */
  project?: string
  /**
   * Filter Instances by name (eg. "server1" will return "server100" and "server1" but not "foo").
   */
  name?: string
  /**
   * @deprecated List Instances by private_ip.
   */
  privateIp?: string
  /**
   * List Instances that are not attached to a public IP.
   */
  withoutIp?: boolean
  /**
   * List Instances by IP (both private_ip and public_ip are supported).
   */
  withIp?: string
  /**
   * List Instances of this commercial type.
   */
  commercialType?: string
  /**
   * List Instances in this state.
   */
  state?: ServerState
  /**
   * List Instances with these exact tags (to filter with several tags, use commas to separate them).
   */
  tags?: string[]
  /**
   * List Instances in this Private Network.
   */
  privateNetwork?: string
  /**
   * Define the order of the returned servers.
   */
  order?: ListServersRequestOrder
  /**
   * List Instances from the given Private Networks (use commas to separate them).
   */
  privateNetworks?: string[]
  /**
   * List Instances associated with the given private NIC MAC address.
   */
  privateNicMacAddress?: string
  /**
   * List Instances from these server ids (use commas to separate them).
   */
  servers?: string[]
}


export interface ListServersResponse {
  /**
   * Total number of Instances.
   */
  totalCount: number
  /**
   * List of Instances.
   */
  servers: Server[]
}


export type ListServersTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  perPage?: number
  page?: number
}


export interface ListServersTypesResponse {
  /**
   * Total number of Instance types.
   */
  totalCount: number
  /**
   * List of Instance types.
   */
  servers: Record<string, ServerType>
}


export type ListSnapshotsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * List snapshots only for this Organization ID.
   */
  organization?: string
  /**
   * List snapshots only for this Project ID.
   */
  project?: string
  /**
   * Number of snapshots returned per page (positive integer lower or equal to 100).
   */
  perPage?: number
  /**
   * Page to be returned.
   */
  page?: number
  /**
   * List snapshots of the requested name.
   */
  name?: string
  /**
   * List snapshots that have the requested tag.
   */
  tags?: string
  /**
   * List snapshots originating only from this volume.
   */
  baseVolumeId?: string
}


export interface ListSnapshotsResponse {
  /**
   * Total number of snapshots.
   */
  totalCount: number
  /**
   * List of snapshots.
   */
  snapshots: Snapshot[]
}


export type ListVolumesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Filter by volume type.
   */
  volumeType?: VolumeVolumeType
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number
  /**
   * A positive integer to choose the page to return.
   */
  page?: number
  /**
   * Filter volume by Organization ID.
   */
  organization?: string
  /**
   * Filter volume by Project ID.
   */
  project?: string
  /**
   * Filter volumes with these exact tags (to filter with several tags, use commas to separate them).
   */
  tags?: string[]
  /**
   * Filter volume by name (for eg. "vol" will return "myvolume" but not "data").
   */
  name?: string
}


export interface ListVolumesResponse {
  /**
   * Total number of volumes.
   */
  totalCount: number
  /**
   * List of volumes.
   */
  volumes: Volume[]
}


export type ListVolumesTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  perPage?: number
  page?: number
}


export interface ListVolumesTypesResponse {
  /**
   * Total number of volume types.
   */
  totalCount: number
  /**
   * Map of volume types.
   */
  volumes: Record<string, VolumeType>
}


export interface MigrationPlan {
  /**
   * A volume which will be migrated to SBS together with the snapshots, if present.
   */
  volume?: Volume
  /**
   * A list of snapshots which will be migrated to SBS together and with the volume, if present.
   */
  snapshots: Snapshot[]
  /**
   * A value to be passed to the call to the [Migrate a volume and/or snapshots to SBS](#path-volumes-migrate-a-volume-andor-snapshots-to-sbs-scaleway-block-storage) endpoint, to confirm that the execution of the plan is being requested.
   */
  validationKey: string
}


export type PlanBlockMigrationRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * The volume for which the migration plan will be generated.
   *
   * One-of ('resource'): at most one of 'volumeId', 'snapshotId' could be set.
   */
  volumeId?: string
  /**
   * The snapshot for which the migration plan will be generated.
   *
   * One-of ('resource'): at most one of 'volumeId', 'snapshotId' could be set.
   */
  snapshotId?: string
}


export type ReleaseIpToIpamRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the IP you want to release from the Instance but retain in IPAM.
   */
  ipId: string
}


export type ServerActionRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Instance.
   */
  serverId: string
  /**
   * Action to perform on the Instance.
   */
  action?: ServerAction
  /**
   * Name of the backup you want to create.
This field should only be specified when performing a backup action.
   */
  name?: string
  /**
   * For each volume UUID, the snapshot parameters of the volume.
This field should only be specified when performing a backup action.
   */
  volumes?: Record<string, ServerActionRequestVolumeBackupTemplate>
  /**
   * Disable IPv6 on the Instance while performing migration to routed IPs.
This field should only be specified when performing a enable_routed_ip action.
   */
  disableIpv6?: boolean
}


export interface ServerActionResponse {
  task?: Task
}


export interface ServerCompatibleTypes {
  /**
   * Instance compatible types.
   */
  compatibleTypes: string[]
}


export type SetImageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  id: string
  name: string
  arch?: Arch
  creationDate?: Date
  modificationDate?: Date
  /**
   * @deprecated 
   */
  defaultBootscript?: Bootscript
  extraVolumes?: Record<string, Volume>
  fromServer: string
  organization?: string
  public: boolean
  rootVolume?: VolumeSummary
  state?: ImageState
  project?: string
  tags?: string[]
}


export type SetPlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  placementGroupId: string
  name: string
  organization?: string
  policyMode?: PlacementGroupPolicyMode
  policyType?: PlacementGroupPolicyType
  project?: string
  tags?: string[]
}


export interface SetPlacementGroupResponse {
  placementGroup?: PlacementGroup
}


export type SetPlacementGroupServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the placement group you want to set.
   */
  placementGroupId: string
  /**
   * An array of the Instances' UUIDs you want to configure.
   */
  servers: string[]
}


export interface SetPlacementGroupServersResponse {
  /**
   * Instances attached to the placement group.
   */
  servers: PlacementGroupServer[]
}


export type SetSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the security group to update the rules on.
   */
  securityGroupId: string
  /**
   * List of rules to update in the security group.
   */
  rules?: SetSecurityGroupRulesRequestRule[]
}


export interface SetSecurityGroupRulesResponse {
  rules: SecurityGroupRule[]
}


export type UpdateImageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the image.
   */
  imageId: string
  /**
   * Name of the image.
   */
  name?: string
  /**
   * Architecture of the image.
   */
  arch?: Arch
  /**
   * Additional snapshots of the image, with extra_volumeKey being the position of the snapshot in the image.
   */
  extraVolumes?: Record<string, VolumeImageUpdateTemplate>
  /**
   * Tags of the image.
   */
  tags?: string[]
  /**
   * True to set the image as public.
   */
  public?: boolean
}


export interface UpdateImageResponse {
  image?: Image
}


export type UpdateIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * IP ID or IP address.
   */
  ip: string
  /**
   * Reverse domain name.
   */
  reverse?: string | null
  /**
   * Should have no effect.
   */
  type?: IpType
  /**
   * An array of keywords you want to tag this IP with.
   */
  tags?: string[]
  server?: string | null
}


export interface UpdateIpResponse {
  ip?: Ip
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
   * Tags of the placement group.
   */
  tags?: string[]
  /**
   * Operating mode of the placement group.
   */
  policyMode?: PlacementGroupPolicyMode
  /**
   * Policy type of the placement group.
   */
  policyType?: PlacementGroupPolicyType
}


export interface UpdatePlacementGroupResponse {
  placementGroup?: PlacementGroup
}


export type UpdatePlacementGroupServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the placement group you want to update.
   */
  placementGroupId: string
  /**
   * An array of the Instances' UUIDs you want to configure.
   */
  servers: string[]
}


export interface UpdatePlacementGroupServersResponse {
  /**
   * Instances attached to the placement group.
   */
  servers: PlacementGroupServer[]
}


export type UpdatePrivateNICRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Instance the private NIC will be attached to.
   */
  serverId: string
  /**
   * Private NIC unique ID.
   */
  privateNicId: string
  /**
   * Tags used to select private NIC/s.
   */
  tags?: string[]
}


export type UpdateSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the security group.
   */
  securityGroupId: string
  /**
   * Name of the security group.
   */
  name?: string
  /**
   * Description of the security group.
   */
  description?: string
  /**
   * True to block SMTP on IPv4 and IPv6. This feature is read only, please open a support ticket if you need to make it configurable.
   */
  enableDefaultSecurity?: boolean
  /**
   * Default inbound policy.
   */
  inboundDefaultPolicy?: SecurityGroupPolicy
  /**
   * Tags of the security group.
   */
  tags?: string[]
  /**
   * @deprecated Please use project_default instead.
   */
  organizationDefault?: boolean
  /**
   * True use this security group for future Instances created in this project.
   */
  projectDefault?: boolean
  /**
   * Default outbound policy.
   */
  outboundDefaultPolicy?: SecurityGroupPolicy
  /**
   * True to set the security group as stateful.
   */
  stateful?: boolean
}


export interface UpdateSecurityGroupResponse {
  securityGroup?: SecurityGroup
}


export type UpdateSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the security group.
   */
  securityGroupId: string
  /**
   * UUID of the rule.
   */
  securityGroupRuleId: string
  /**
   * Protocol family this rule applies to.
   */
  protocol?: SecurityGroupRuleProtocol
  /**
   * Direction the rule applies to.
   */
  direction?: SecurityGroupRuleDirection
  /**
   * Action to apply when the rule matches a packet.
   */
  action?: SecurityGroupRuleAction
  /**
   * Range of IP addresses these rules apply to.
   */
  ipRange?: string
  /**
   * Beginning of the range of ports this rule applies to (inclusive). If 0 is provided, unset the parameter.
   */
  destPortFrom?: number
  /**
   * End of the range of ports this rule applies to (inclusive). If 0 is provided, unset the parameter.
   */
  destPortTo?: number
  /**
   * Position of this rule in the security group rules list.
   */
  position?: number
}


export interface UpdateSecurityGroupRuleResponse {
  rule?: SecurityGroupRule
}


export type UpdateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Instance.
   */
  serverId: string
  /**
   * Name of the Instance.
   */
  name?: string
  bootType?: BootType
  /**
   * Tags of the Instance.
   */
  tags?: string[]
  volumes?: Record<string, VolumeServerTemplate>
  dynamicIpRequired?: boolean
  /**
   * @deprecated True to configure the instance so it uses the new routed IP mode (once this is set to True you cannot set it back to False).
   */
  routedIpEnabled?: boolean
  /**
   * A list of reserved IP IDs to attach to the Instance.
   */
  publicIps?: string[]
  /**
   * @deprecated 
   */
  enableIpv6?: boolean
  /**
   * True to activate server protection option.
   */
  protected?: boolean
  securityGroup?: SecurityGroupTemplate
  /**
   * Placement group ID if Instance must be part of a placement group.
   */
  placementGroup?: string | null
  /**
   * Instance private NICs.
   */
  privateNics?: string[]
  /**
   * Warning: This field has some restrictions:
- Cannot be changed if the Instance is not in `stopped` state.
- Cannot be changed if the Instance is in a placement group.
- Cannot be changed from/to a Windows offer to/from a Linux offer.
- Local storage requirements of the target commercial_types must be fulfilled (i.e. if an Instance has 80GB of local storage, it can be changed into a GP1-XS, which has a maximum of 150GB, but it cannot be changed into a DEV1-S, which has only 20GB).
   */
  commercialType?: string
  /**
   * The public_key value of this key is used to encrypt the admin password. When set to an empty string, reset this value and admin_password_encrypted_value to an empty string so a new password may be generated.
   */
  adminPasswordEncryptionSshKeyId?: string
}


export interface UpdateServerResponse {
  server?: Server
}


export type UpdateSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the snapshot.
   */
  snapshotId: string
  /**
   * Name of the snapshot.
   */
  name?: string
  /**
   * Tags of the snapshot.
   */
  tags?: string[]
}


export interface UpdateSnapshotResponse {
  snapshot?: Snapshot
}


export type UpdateVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the volume.
   */
  volumeId: string
  /**
   * Volume name.
   */
  name?: string
  /**
   * Tags of the volume.
   */
  tags?: string[]
  /**
   * Volume disk size, must be a multiple of 512.
   */
  size?: number
}


export interface UpdateVolumeResponse {
  volume?: Volume
}


