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
  exportUri?: string | null
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
  creationDate?: Date | null
  /**
   * Volume modification date.
   */
  modificationDate?: Date | null
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
  server?: ServerSummary | null
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
  internalBandwidth?: number | null
  /**
   * Maximum internet bandwidth in bits per seconds.
   */
  internetBandwidth?: number | null
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
  creationDate?: Date | null
  modificationDate?: Date | null
  /**
   * @deprecated 
   */
  defaultBootscript?: Bootscript | null
  extraVolumes: Record<string, Volume>
  fromServer: string
  organization: string
  public: boolean
  rootVolume?: VolumeSummary | null
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
  creationDate?: Date | null
  /**
   * The zone in which the Private NIC is located.
   */
  zone: ScwZone
  /**
   * The list of IPAM IPs associated with this private NIC.
   */
  ipamIpIds: string[]
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
  startDate?: Date | null
}


export interface VolumeServer {
  id: string
  name?: string | null
  /**
   * @deprecated 
   */
  exportUri?: string | null
  organization?: string | null
  server?: ServerSummary | null
  size?: number | null
  volumeType: VolumeServerVolumeType
  creationDate?: Date | null
  modificationDate?: Date | null
  state?: VolumeServerState | null
  project?: string | null
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
  blockStorage?: boolean | null
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
  sumInternalBandwidth?: number | null
  /**
   * Total maximum internet bandwidth in bits per seconds.
   */
  sumInternetBandwidth?: number | null
  /**
   * True if IPv6 is enabled.
   */
  ipv6Support: boolean
}


export interface ServerTypeVolumeConstraintsByType {
  /**
   * Local SSD volumes.
   */
  lSsd?: ServerTypeVolumeConstraintSizes | null
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
  creationDate?: Date | null
  /**
   * True if a dynamic IPv4 is required.
   */
  dynamicIpRequired: boolean
  /**
   * @deprecated True to configure the instance so it uses the routed IP mode. Use of `routed_ip_enabled` as `False` is deprecated.
   */
  routedIpEnabled?: boolean | null
  /**
   * @deprecated True if IPv6 is enabled (deprecated and always `False` when `routed_ip_enabled` is `True`).
   */
  enableIpv6?: boolean | null
  /**
   * Instance host name.
   */
  hostname: string
  /**
   * Information about the Instance image.
   */
  image?: Image | null
  /**
   * Defines whether the Instance protection option is activated.
   */
  protected: boolean
  /**
   * Private IP address of the Instance (deprecated and always `null` when `routed_ip_enabled` is `True`).
   */
  privateIp?: string | null
  /**
   * @deprecated Information about the public IP (deprecated in favor of `public_ips`).
   */
  publicIp?: ServerIp | null
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
  modificationDate?: Date | null
  /**
   * Instance state.
   */
  state: ServerState
  /**
   * Instance location.
   */
  location?: ServerLocation | null
  /**
   * @deprecated Instance IPv6 address (deprecated when `routed_ip_enabled` is `True`).
   */
  ipv6?: ServerIpv6 | null
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
  securityGroup?: SecurityGroupSummary | null
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
  placementGroup?: PlacementGroup | null
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
  adminPasswordEncryptionSshKeyId?: string | null
  /**
   * This value is reset when admin_password_encryption_ssh_key_id is set to an empty string.
   */
  adminPasswordEncryptedValue?: string | null
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
  dns?: string | null
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
  organization?: string | null
  /**
   * Project ID of the volume.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string | null
}


export interface Ip {
  id: string
  address: string
  reverse?: string | null
  server?: ServerSummary | null
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
  organizationDefault?: boolean | null
  /**
   * True if it is your default security group for this Project ID.
   */
  projectDefault: boolean
  /**
   * Security group creation date.
   */
  creationDate?: Date | null
  /**
   * Security group modification date.
   */
  modificationDate?: Date | null
  /**
   * List of Instances attached to this security group.
   */
  servers: ServerSummary[]
  /**
   * Defines whether the security group is stateful.
   */
  stateful: boolean
  /**
   * Are applied) when the security group is updated (e.g., rules added, modified, or deleted)
or when it is attached to or detached from a server's public network interface.
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
  destPortFrom?: number | null
  destPortTo?: number | null
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
  id?: string | null
  /**
   * Force the Instance to boot on this volume.
   */
  boot?: boolean | null
  /**
   * Name of the volume.
   */
  name?: string | null
  /**
   * Disk size of the volume, must be a multiple of 512.
   */
  size?: number | null
  /**
   * Type of the volume.
   */
  volumeType: VolumeVolumeType
  /**
   * ID of the snapshot on which this volume will be based.
   */
  baseSnapshot?: string | null
  /**
   * Organization ID of the volume.
   */
  organization?: string | null
  /**
   * Project ID of the volume.
   */
  project?: string | null
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
  baseVolume?: SnapshotBaseVolume | null
  /**
   * Snapshot creation date.
   */
  creationDate?: Date | null
  /**
   * Snapshot modification date.
   */
  modificationDate?: Date | null
  /**
   * Snapshot zone.
   */
  zone: ScwZone
  /**
   * Reason for the failed snapshot import.
   */
  errorReason?: string | null
}


export interface Task {
  /**
   * @deprecated Unique ID of the task.
   */
  id: string
  /**
   * @deprecated Description of the task.
   */
  description: string
  /**
   * @deprecated Progress of the task in percent.
   */
  progress: number
  /**
   * @deprecated Task start date.
   */
  startedAt?: Date | null
  /**
   * @deprecated Task end date.
   */
  terminatedAt?: Date | null
  /**
   * @deprecated Task status.
   */
  status: TaskStatus
  hrefFrom: string
  /**
   * Location of the resulting resource.
   */
  hrefResult: string
  /**
   * @deprecated Zone in which the task is executed.
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
  volumesLSsdTotalSize: number
  privateNicsCount: number
  placementGroupsCount: number
  volumesScratchCount: number
  /**
   * @deprecated 
   */
  volumesBSsdCount?: number | null
  /**
   * @deprecated 
   */
  volumesBSsdTotalSize?: number | null
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
  monthlyPrice?: number | null
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
  perVolumeConstraint?: ServerTypeVolumeConstraintsByType | null
  /**
   * Initial volume constraints.
   */
  volumesConstraint?: ServerTypeVolumeConstraintSizes | null
  /**
   * Number of CPU.
   */
  ncpus: number
  /**
   * Number of GPU.
   */
  gpu?: number | null
  /**
   * Available RAM in bytes.
   */
  ram: number
  /**
   * GPU information.
   */
  gpuInfo?: ServerTypeGPUInfo | null
  /**
   * CPU architecture.
   */
  arch: Arch
  /**
   * Network available for the Instance.
   */
  network?: ServerTypeNetwork | null
  /**
   * Capabilities.
   */
  capabilities?: ServerTypeCapabilities | null
  /**
   * Maximum available scratch storage.
   */
  scratchStorageMaxSize?: number | null
  /**
   * Maximum supported number of scratch volumes.
   */
  scratchStorageMaxVolumesCount: number
  /**
   * The maximum bandwidth allocated to block storage access (in bytes per second).
   */
  blockBandwidth?: number | null
  /**
   * True if this Instance type has reached end of service.
   */
  endOfService: boolean
  /**
   * The billing SKU for this server type.
   */
  sku: string
}


export interface VolumeType {
  displayName: string
  capabilities?: VolumeTypeCapabilities | null
  constraints?: VolumeTypeConstraints | null
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
  id?: string | null
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
  destPortFrom?: number | null
  /**
   * End of the range of ports this rule applies to (inclusive). This value will be set to null if protocol is ICMP or ANY, or if it is equal to dest_port_from.
   */
  destPortTo?: number | null
  /**
   * Position of this rule in the security group rules list. If several rules are passed with the same position, the resulting order is undefined.
   */
  position: number
  /**
   * Indicates if this rule is editable. Rules with the value false will be ignored.
   */
  editable?: boolean | null
  /**
   * Zone of the rule. This field is ignored.
   */
  zone?: ScwZone | null
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
  zone?: ScwZone | null
  /**
   * The volume to migrate, along with potentially other resources, according to the migration plan generated with a call to the [Get a volume or snapshot's migration plan](#path-volumes-get-a-volume-or-snapshots-migration-plan) endpoint.
   *
   * One-of ('resource'): at most one of 'volumeId', 'snapshotId' could be set.
   */
  volumeId?: string | null
  /**
   * The snapshot to migrate, along with potentially other resources, according to the migration plan generated with a call to the [Get a volume or snapshot's migration plan](#path-volumes-get-a-volume-or-snapshots-migration-plan) endpoint.
   *
   * One-of ('resource'): at most one of 'volumeId', 'snapshotId' could be set.
   */
  snapshotId?: string | null
  /**
   * A value to be retrieved from a call to the [Get a volume or snapshot's migration plan](#path-volumes-get-a-volume-or-snapshots-migration-plan) endpoint, to confirm that the volume and/or snapshots specified in said plan should be migrated.
   */
  validationKey: string
}


export type AttachServerFileSystemRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  serverId: string
  filesystemId: string
}


export interface AttachServerFileSystemResponse {
  server?: Server | null
}


export type AttachServerVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  serverId: string
  volumeId: string
  volumeType?: AttachServerVolumeRequestVolumeType | null
  boot?: boolean | null
}


export interface AttachServerVolumeResponse {
  server?: Server | null
}


export type CheckBlockMigrationOrganizationQuotasRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  organization?: string | null
}


export type CreateImageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Name of the image.
   */
  name?: string | null
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
  extraVolumes?: Record<string, VolumeTemplate> | null
  /**
   * @deprecated Organization ID of the image.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string | null
  /**
   * Project ID of the image.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string | null
  /**
   * Tags of the image.
   */
  tags?: string[] | null
  /**
   * True to create a public image.
   */
  public?: boolean | null
}


export interface CreateImageResponse {
  image?: Image | null
}


export type CreateIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * @deprecated Organization ID in which the IP is reserved.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string | null
  /**
   * Project ID in which the IP is reserved.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string | null
  /**
   * Tags of the IP.
   */
  tags?: string[] | null
  /**
   * UUID of the Instance you want to attach the IP to.
   */
  server?: string | null
  /**
   * IP type to reserve (either 'routed_ipv4' or 'routed_ipv6').
   */
  type?: IpType | null
}


export interface CreateIpResponse {
  ip?: Ip | null
}


export type CreatePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Name of the placement group.
   */
  name?: string | null
  /**
   * @deprecated Organization ID of the placement group.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string | null
  /**
   * Project ID of the placement group.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string | null
  /**
   * Tags of the placement group.
   */
  tags?: string[] | null
  /**
   * Operating mode of the placement group.
   */
  policyMode?: PlacementGroupPolicyMode | null
  /**
   * Policy type of the placement group.
   */
  policyType?: PlacementGroupPolicyType | null
}


export interface CreatePlacementGroupResponse {
  placementGroup?: PlacementGroup | null
}


export type CreatePrivateNICRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  tags?: string[] | null
  /**
   * @deprecated Ip_ids defined from IPAM.
   */
  ipIds?: string[] | null
  /**
   * UUID of IPAM ips, to be attached to the instance in the requested private network.
   */
  ipamIpIds?: string[] | null
}


export interface CreatePrivateNICResponse {
  privateNic?: PrivateNIC | null
}


export type CreateSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Name of the security group.
   */
  name?: string | null
  /**
   * Description of the security group.
   */
  description: string
  /**
   * @deprecated Organization ID the security group belongs to.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string | null
  /**
   * Project ID the security group belong to.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string | null
  /**
   * Tags of the security group.
   */
  tags?: string[] | null
  /**
   * @deprecated Defines whether this security group becomes the default security group for new Instances.
   *
   * One-of ('defaultIdentifier'): at most one of 'organizationDefault', 'projectDefault' could be set.
   */
  organizationDefault?: boolean | null
  /**
   * Whether this security group becomes the default security group for new Instances.
   *
   * One-of ('defaultIdentifier'): at most one of 'organizationDefault', 'projectDefault' could be set.
   */
  projectDefault?: boolean | null
  /**
   * Whether the security group is stateful or not.
   */
  stateful: boolean
  /**
   * Default policy for inbound rules.
   */
  inboundDefaultPolicy?: SecurityGroupPolicy | null
  /**
   * Default policy for outbound rules.
   */
  outboundDefaultPolicy?: SecurityGroupPolicy | null
  /**
   * True to block SMTP on IPv4 and IPv6. This feature is read only, please open a support ticket if you need to make it configurable.
   */
  enableDefaultSecurity?: boolean | null
}


export interface CreateSecurityGroupResponse {
  securityGroup?: SecurityGroup | null
}


export type CreateSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  destPortFrom?: number | null
  /**
   * End of the range of ports to apply this rule to (inclusive).
   */
  destPortTo?: number | null
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
  rule?: SecurityGroupRule | null
}


export type CreateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Instance name.
   */
  name?: string | null
  /**
   * By default, `dynamic_ip_required` is true, a dynamic ip is attached to the instance (if no flexible ip is already attached).
   */
  dynamicIpRequired?: boolean | null
  /**
   * @deprecated If true, configure the Instance so it uses the new routed IP mode.
   */
  routedIpEnabled?: boolean | null
  /**
   * Define the Instance commercial type (i.e. GP1-S).
   */
  commercialType: string
  /**
   * Instance image ID or label.
   */
  image?: string | null
  /**
   * Volumes attached to the server.
   */
  volumes?: Record<string, VolumeServerTemplate> | null
  /**
   * @deprecated True if IPv6 is enabled on the server (deprecated and always `False` when `routed_ip_enabled` is `True`).
   */
  enableIpv6?: boolean | null
  /**
   * @deprecated ID of the reserved IP to attach to the Instance.
   */
  publicIp?: string | null
  /**
   * A list of reserved IP IDs to attach to the Instance.
   */
  publicIps?: string[] | null
  /**
   * Boot type to use.
   */
  bootType?: BootType | null
  /**
   * @deprecated Instance Organization ID.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string | null
  /**
   * Instance Project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string | null
  /**
   * Instance tags.
   */
  tags?: string[] | null
  /**
   * Security group ID.
   */
  securityGroup?: string | null
  /**
   * Placement group ID if Instance must be part of a placement group.
   */
  placementGroup?: string | null
  /**
   * The public_key value of this key is used to encrypt the admin password.
   */
  adminPasswordEncryptionSshKeyId?: string | null
  /**
   * True to activate server protection option.
   */
  protected: boolean
}


export interface CreateServerResponse {
  server?: Server | null
}


export type CreateSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Name of the snapshot.
   */
  name?: string | null
  /**
   * UUID of the volume.
   */
  volumeId?: string | null
  /**
   * Tags of the snapshot.
   */
  tags?: string[] | null
  /**
   * @deprecated Organization ID of the snapshot.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string | null
  /**
   * Project ID of the snapshot.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string | null
  /**
   * Overrides the volume_type of the snapshot.
If omitted, the volume type of the original volume will be used.
   */
  volumeType?: SnapshotVolumeType | null
  /**
   * Bucket name for snapshot imports.
   */
  bucket?: string | null
  /**
   * Object key for snapshot imports.
   */
  key?: string | null
  /**
   * Imported snapshot size, must be a multiple of 512.
   */
  size?: number | null
}


export interface CreateSnapshotResponse {
  snapshot?: Snapshot | null
  task?: Task | null
}


export type CreateVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Volume name.
   */
  name?: string | null
  /**
   * @deprecated Volume Organization ID.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  organization?: string | null
  /**
   * Volume Project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'project', 'organization' could be set.
   */
  project?: string | null
  /**
   * Volume tags.
   */
  tags?: string[] | null
  /**
   * Volume type.
   */
  volumeType?: VolumeVolumeType | null
  /**
   * Volume disk size, must be a multiple of 512.
   *
   * One-of ('from'): at most one of 'size', 'baseSnapshot' could be set.
   */
  size?: number | null
  /**
   * ID of the snapshot on which this volume will be based.
   *
   * One-of ('from'): at most one of 'size', 'baseSnapshot' could be set.
   */
  baseSnapshot?: string | null
}


export interface CreateVolumeResponse {
  volume?: Volume | null
}


export type DeleteImageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the image you want to delete.
   */
  imageId: string
}


export type DeleteIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID or address of the IP to delete.
   */
  ip: string
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


export type DeletePrivateNICRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  zone?: ScwZone | null
  /**
   * UUID of the security group you want to delete.
   */
  securityGroupId: string
}


export type DeleteSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  securityGroupId: string
  securityGroupRuleId: string
}


export type DeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  serverId: string
}


export type DeleteServerUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  zone?: ScwZone | null
  /**
   * UUID of the snapshot you want to delete.
   */
  snapshotId: string
}


export type DeleteVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the volume you want to delete.
   */
  volumeId: string
}


export type DetachServerFileSystemRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  serverId: string
  filesystemId: string
}


export interface DetachServerFileSystemResponse {
  server?: Server | null
}


export type DetachServerVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  serverId: string
  volumeId: string
}


export interface DetachServerVolumeResponse {
  server?: Server | null
}


export type ExportSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  task?: Task | null
}


export type GetDashboardRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  organization?: string | null
  project?: string | null
}


export interface GetDashboardResponse {
  dashboard?: Dashboard | null
}


export type GetImageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the image you want to get.
   */
  imageId: string
}


export interface GetImageResponse {
  image?: Image | null
}


export type GetIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * IP ID or address to get.
   */
  ip: string
}


export interface GetIpResponse {
  ip?: Ip | null
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


export interface GetPlacementGroupResponse {
  placementGroup?: PlacementGroup | null
}


export type GetPlacementGroupServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  zone?: ScwZone | null
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
  privateNic?: PrivateNIC | null
}


export type GetSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the security group you want to get.
   */
  securityGroupId: string
}


export interface GetSecurityGroupResponse {
  securityGroup?: SecurityGroup | null
}


export type GetSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  securityGroupId: string
  securityGroupRuleId: string
}


export interface GetSecurityGroupRuleResponse {
  rule?: SecurityGroupRule | null
}


export type GetServerCompatibleTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the Instance you want to get.
   */
  serverId: string
}


export type GetServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the Instance you want to get.
   */
  serverId: string
}


export interface GetServerResponse {
  server?: Server | null
}


export type GetServerTypesAvailabilityRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number | null
  /**
   * A positive integer to choose the page to return.
   */
  page?: number | null
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
  zone?: ScwZone | null
  /**
   * UUID of the snapshot you want to get.
   */
  snapshotId: string
}


export interface GetSnapshotResponse {
  snapshot?: Snapshot | null
}


export type GetVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the volume you want to get.
   */
  volumeId: string
}


export interface GetVolumeResponse {
  volume?: Volume | null
}


export type ListDefaultSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
}


export type ListImagesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  organization?: string | null
  perPage?: number | null
  page?: number | null
  name?: string | null
  public?: boolean | null
  arch?: string | null
  project?: string | null
  tags?: string | null
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
  zone?: ScwZone | null
  /**
   * Project ID in which the IPs are reserved.
   */
  project?: string | null
  /**
   * Organization ID in which the IPs are reserved.
   */
  organization?: string | null
  /**
   * Filter IPs with these exact tags (to filter with several tags, use commas to separate them).
   */
  tags?: string[] | null
  /**
   * Filter on the IP address (Works as a LIKE operation on the IP address).
   */
  name?: string | null
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number | null
  /**
   * A positive integer to choose the page to return.
   */
  page?: number | null
  /**
   * Filter on the IP Mobility IP type (whose value should be either 'routed_ipv4' or 'routed_ipv6').
   */
  type?: string | null
  /**
   *
   * One-of ('kind'): at most one of 'server', 'detached' could be set.
   */
  server?: string | null
  /**
   *
   * One-of ('kind'): at most one of 'server', 'detached' could be set.
   */
  detached?: boolean | null
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
  zone?: ScwZone | null
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number | null
  /**
   * A positive integer to choose the page to return.
   */
  page?: number | null
  /**
   * List only placement groups of this Organization ID.
   */
  organization?: string | null
  /**
   * List only placement groups of this Project ID.
   */
  project?: string | null
  /**
   * List placement groups with these exact tags (to filter with several tags, use commas to separate them).
   */
  tags?: string[] | null
  /**
   * Filter placement groups by name (for eg. "cluster1" will return "cluster100" and "cluster1" but not "foo").
   */
  name?: string | null
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
  zone?: ScwZone | null
  /**
   * Instance to which the private NIC is attached.
   */
  serverId: string
  /**
   * Private NIC tags.
   */
  tags?: string[] | null
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number | null
  /**
   * A positive integer to choose the page to return.
   */
  page?: number | null
}


export interface ListPrivateNICsResponse {
  privateNics: PrivateNIC[]
  totalCount: number
}


export type ListSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the security group.
   */
  securityGroupId: string
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number | null
  /**
   * A positive integer to choose the page to return.
   */
  page?: number | null
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
  zone?: ScwZone | null
  /**
   * Name of the security group.
   */
  name?: string | null
  /**
   * Security group Organization ID.
   */
  organization?: string | null
  /**
   * Security group Project ID.
   */
  project?: string | null
  /**
   * List security groups with these exact tags (to filter with several tags, use commas to separate them).
   */
  tags?: string[] | null
  /**
   * Filter security groups with this value for project_default.
   */
  projectDefault?: boolean | null
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number | null
  /**
   * A positive integer to choose the page to return.
   */
  page?: number | null
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
  zone?: ScwZone | null
  serverId: string
}


export interface ListServerActionsResponse {
  actions: ServerAction[]
}


export type ListServerUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  zone?: ScwZone | null
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number | null
  /**
   * A positive integer to choose the page to return.
   */
  page?: number | null
  /**
   * List only Instances of this Organization ID.
   */
  organization?: string | null
  /**
   * List only Instances of this Project ID.
   */
  project?: string | null
  /**
   * Filter Instances by name (eg. "server1" will return "server100" and "server1" but not "foo").
   */
  name?: string | null
  /**
   * @deprecated List Instances by private_ip.
   */
  privateIp?: string | null
  /**
   * List Instances that are not attached to a public IP.
   */
  withoutIp?: boolean | null
  /**
   * List Instances by IP (both private_ip and public_ip are supported).
   */
  withIp?: string | null
  /**
   * List Instances of this commercial type.
   */
  commercialType?: string | null
  /**
   * List Instances in this state.
   */
  state?: ServerState | null
  /**
   * List Instances with these exact tags (to filter with several tags, use commas to separate them).
   */
  tags?: string[] | null
  /**
   * List Instances in this Private Network.
   */
  privateNetwork?: string | null
  /**
   * Define the order of the returned servers.
   */
  order?: ListServersRequestOrder | null
  /**
   * List Instances from the given Private Networks (use commas to separate them).
   */
  privateNetworks?: string[] | null
  /**
   * List Instances associated with the given private NIC MAC address.
   */
  privateNicMacAddress?: string | null
  /**
   * List Instances from these server ids (use commas to separate them).
   */
  servers?: string[] | null
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
  zone?: ScwZone | null
  perPage?: number | null
  page?: number | null
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
  zone?: ScwZone | null
  /**
   * List snapshots only for this Organization ID.
   */
  organization?: string | null
  /**
   * List snapshots only for this Project ID.
   */
  project?: string | null
  /**
   * Number of snapshots returned per page (positive integer lower or equal to 100).
   */
  perPage?: number | null
  /**
   * Page to be returned.
   */
  page?: number | null
  /**
   * List snapshots of the requested name.
   */
  name?: string | null
  /**
   * List snapshots that have the requested tag.
   */
  tags?: string | null
  /**
   * List snapshots originating only from this volume.
   */
  baseVolumeId?: string | null
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
  zone?: ScwZone | null
  /**
   * Filter by volume type.
   */
  volumeType?: VolumeVolumeType | null
  /**
   * A positive integer lower or equal to 100 to select the number of items to return.
   */
  perPage?: number | null
  /**
   * A positive integer to choose the page to return.
   */
  page?: number | null
  /**
   * Filter volume by Organization ID.
   */
  organization?: string | null
  /**
   * Filter volume by Project ID.
   */
  project?: string | null
  /**
   * Filter volumes with these exact tags (to filter with several tags, use commas to separate them).
   */
  tags?: string[] | null
  /**
   * Filter volume by name (for eg. "vol" will return "myvolume" but not "data").
   */
  name?: string | null
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
  zone?: ScwZone | null
  perPage?: number | null
  page?: number | null
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
  volume?: Volume | null
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
  zone?: ScwZone | null
  /**
   * The volume for which the migration plan will be generated.
   *
   * One-of ('resource'): at most one of 'volumeId', 'snapshotId' could be set.
   */
  volumeId?: string | null
  /**
   * The snapshot for which the migration plan will be generated.
   *
   * One-of ('resource'): at most one of 'volumeId', 'snapshotId' could be set.
   */
  snapshotId?: string | null
}


export type ReleaseIpToIpamRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the IP you want to release from the Instance but retain in IPAM.
   */
  ipId: string
}


export type ServerActionRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the Instance.
   */
  serverId: string
  /**
   * Action to perform on the Instance.
   */
  action?: ServerAction | null
  /**
   * Name of the backup you want to create.
This field should only be specified when performing a backup action.
   */
  name?: string | null
  /**
   * For each volume UUID, the snapshot parameters of the volume.
This field should only be specified when performing a backup action.
   */
  volumes?: Record<string, ServerActionRequestVolumeBackupTemplate> | null
  /**
   * Disable IPv6 on the Instance while performing migration to routed IPs.
This field should only be specified when performing a enable_routed_ip action.
   */
  disableIpv6?: boolean | null
}


export interface ServerActionResponse {
  task?: Task | null
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
  zone?: ScwZone | null
  id: string
  name: string
  arch?: Arch | null
  creationDate?: Date | null
  modificationDate?: Date | null
  /**
   * @deprecated 
   */
  defaultBootscript?: Bootscript | null
  extraVolumes?: Record<string, Volume> | null
  fromServer: string
  organization?: string | null
  public: boolean
  rootVolume?: VolumeSummary | null
  state?: ImageState | null
  project?: string | null
  tags?: string[] | null
}


export type SetPlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  placementGroupId: string
  name: string
  organization?: string | null
  policyMode?: PlacementGroupPolicyMode | null
  policyType?: PlacementGroupPolicyType | null
  project?: string | null
  tags?: string[] | null
}


export interface SetPlacementGroupResponse {
  placementGroup?: PlacementGroup | null
}


export type SetPlacementGroupServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  zone?: ScwZone | null
  /**
   * UUID of the security group to update the rules on.
   */
  securityGroupId: string
  /**
   * List of rules to update in the security group.
   */
  rules?: SetSecurityGroupRulesRequestRule[] | null
}


export interface SetSecurityGroupRulesResponse {
  rules: SecurityGroupRule[]
}


export type UpdateImageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the image.
   */
  imageId: string
  /**
   * Name of the image.
   */
  name?: string | null
  /**
   * Architecture of the image.
   */
  arch?: Arch | null
  /**
   * Additional snapshots of the image, with extra_volumeKey being the position of the snapshot in the image.
   */
  extraVolumes?: Record<string, VolumeImageUpdateTemplate> | null
  /**
   * Tags of the image.
   */
  tags?: string[] | null
  /**
   * True to set the image as public.
   */
  public?: boolean | null
}


export interface UpdateImageResponse {
  image?: Image | null
}


export type UpdateIpRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  type?: IpType | null
  /**
   * An array of keywords you want to tag this IP with.
   */
  tags?: string[] | null
  server?: string | null
}


export interface UpdateIpResponse {
  ip?: Ip | null
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
   * Tags of the placement group.
   */
  tags?: string[] | null
  /**
   * Operating mode of the placement group.
   */
  policyMode?: PlacementGroupPolicyMode | null
  /**
   * Policy type of the placement group.
   */
  policyType?: PlacementGroupPolicyType | null
}


export interface UpdatePlacementGroupResponse {
  placementGroup?: PlacementGroup | null
}


export type UpdatePlacementGroupServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  zone?: ScwZone | null
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
  tags?: string[] | null
}


export type UpdateSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the security group.
   */
  securityGroupId: string
  /**
   * Name of the security group.
   */
  name?: string | null
  /**
   * Description of the security group.
   */
  description?: string | null
  /**
   * True to block SMTP on IPv4 and IPv6. This feature is read only, please open a support ticket if you need to make it configurable.
   */
  enableDefaultSecurity?: boolean | null
  /**
   * Default inbound policy.
   */
  inboundDefaultPolicy?: SecurityGroupPolicy | null
  /**
   * Tags of the security group.
   */
  tags?: string[] | null
  /**
   * @deprecated Please use project_default instead.
   */
  organizationDefault?: boolean | null
  /**
   * True use this security group for future Instances created in this project.
   */
  projectDefault?: boolean | null
  /**
   * Default outbound policy.
   */
  outboundDefaultPolicy?: SecurityGroupPolicy | null
  /**
   * True to set the security group as stateful.
   */
  stateful?: boolean | null
}


export interface UpdateSecurityGroupResponse {
  securityGroup?: SecurityGroup | null
}


export type UpdateSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
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
  protocol?: SecurityGroupRuleProtocol | null
  /**
   * Direction the rule applies to.
   */
  direction?: SecurityGroupRuleDirection | null
  /**
   * Action to apply when the rule matches a packet.
   */
  action?: SecurityGroupRuleAction | null
  /**
   * Range of IP addresses these rules apply to.
   */
  ipRange?: string | null
  /**
   * Beginning of the range of ports this rule applies to (inclusive). If 0 is provided, unset the parameter.
   */
  destPortFrom?: number | null
  /**
   * End of the range of ports this rule applies to (inclusive). If 0 is provided, unset the parameter.
   */
  destPortTo?: number | null
  /**
   * Position of this rule in the security group rules list.
   */
  position?: number | null
}


export interface UpdateSecurityGroupRuleResponse {
  rule?: SecurityGroupRule | null
}


export type UpdateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the Instance.
   */
  serverId: string
  /**
   * Name of the Instance.
   */
  name?: string | null
  bootType?: BootType | null
  /**
   * Tags of the Instance.
   */
  tags?: string[] | null
  volumes?: Record<string, VolumeServerTemplate> | null
  dynamicIpRequired?: boolean | null
  /**
   * @deprecated True to configure the instance so it uses the new routed IP mode (once this is set to True you cannot set it back to False).
   */
  routedIpEnabled?: boolean | null
  /**
   * A list of reserved IP IDs to attach to the Instance.
   */
  publicIps?: string[] | null
  /**
   * @deprecated 
   */
  enableIpv6?: boolean | null
  /**
   * True to activate server protection option.
   */
  protected?: boolean | null
  securityGroup?: SecurityGroupTemplate | null
  /**
   * Placement group ID if Instance must be part of a placement group.
   */
  placementGroup?: string | null
  /**
   * Instance private NICs.
   */
  privateNics?: string[] | null
  /**
   * Warning: This field has some restrictions:
- Cannot be changed if the Instance is not in `stopped` state.
- Cannot be changed if the Instance is in a placement group.
- Cannot be changed from/to a Windows offer to/from a Linux offer.
- Local storage requirements of the target commercial_types must be fulfilled (i.e. if an Instance has 80GB of local storage, it can be changed into a GP1-XS, which has a maximum of 150GB, but it cannot be changed into a DEV1-S, which has only 20GB).
   */
  commercialType?: string | null
  /**
   * The public_key value of this key is used to encrypt the admin password. When set to an empty string, reset this value and admin_password_encrypted_value to an empty string so a new password may be generated.
   */
  adminPasswordEncryptionSshKeyId?: string | null
}


export interface UpdateServerResponse {
  server?: Server | null
}


export type UpdateSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the snapshot.
   */
  snapshotId: string
  /**
   * Name of the snapshot.
   */
  name?: string | null
  /**
   * Tags of the snapshot.
   */
  tags?: string[] | null
}


export interface UpdateSnapshotResponse {
  snapshot?: Snapshot | null
}


export type UpdateVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the volume.
   */
  volumeId: string
  /**
   * Volume name.
   */
  name?: string | null
  /**
   * Tags of the volume.
   */
  tags?: string[] | null
  /**
   * Volume disk size, must be a multiple of 512.
   */
  size?: number | null
}


export interface UpdateVolumeResponse {
  volume?: Volume | null
}


