// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

export type Arch = 'x86_64' | 'arm'

export type BootType = 'local' | 'bootscript' | 'rescue'

export type ImageState = 'available' | 'creating' | 'error'

export type ListServersRequestOrder =
  | 'creation_date_desc'
  | 'creation_date_asc'
  | 'modification_date_desc'
  | 'modification_date_asc'

export type PlacementGroupPolicyMode = 'optional' | 'enforced'

export type PlacementGroupPolicyType = 'max_availability' | 'low_latency'

export type PrivateNICState = 'available' | 'syncing' | 'syncing_error'

export type SecurityGroupPolicy = 'accept' | 'drop'

export type SecurityGroupRuleAction = 'accept' | 'drop'

export type SecurityGroupRuleDirection = 'inbound' | 'outbound'

export type SecurityGroupRuleProtocol = 'TCP' | 'UDP' | 'ICMP' | 'ANY'

export type SecurityGroupState = 'available' | 'syncing' | 'syncing_error'

export type ServerAction =
  | 'poweron'
  | 'backup'
  | 'stop_in_place'
  | 'poweroff'
  | 'terminate'
  | 'reboot'

export type ServerState =
  | 'running'
  | 'stopped'
  | 'stopped in place'
  | 'starting'
  | 'stopping'
  | 'locked'

export type ServerTypesAvailability = 'available' | 'scarce' | 'shortage'

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

export type TaskStatus = 'pending' | 'started' | 'success' | 'failure' | 'retry'

export type VolumeServerState =
  | 'available'
  | 'snapshotting'
  | 'error'
  | 'fetching'
  | 'resizing'
  | 'saving'
  | 'hotsyncing'

export type VolumeServerVolumeType = 'l_ssd' | 'b_ssd'

export type VolumeState =
  | 'available'
  | 'snapshotting'
  | 'error'
  | 'fetching'
  | 'resizing'
  | 'saving'
  | 'hotsyncing'

export type VolumeVolumeType = 'l_ssd' | 'b_ssd' | 'unified'

/** Bootscript */
export interface Bootscript {
  /** The bootscript arguments */
  bootcmdargs: string
  /**
   * Dispmay if the bootscript is the default bootscript if no other boot option
   * is configured
   */
  default: boolean
  /**
   * Provide information regarding a Device Tree Binary (dtb) for use with C1
   * servers
   */
  dtb: string
  /** The bootscript ID */
  id: string
  /** The initrd (initial ramdisk) configuration */
  initrd: string
  /** The server kernel version */
  kernel: string
  /** The bootscript organization ID */
  organization: string
  /** The bootscript project ID */
  project: string
  /** Provide information if the bootscript is public */
  public: boolean
  /** The bootscript title */
  title: string
  /** The bootscript arch */
  arch: Arch
  /** The zone in which is the bootscript */
  zone: Zone
}

export interface CreateImageResponse {
  image?: Image
}

export interface CreateIpResponse {
  ip?: Ip
}

export interface CreatePlacementGroupResponse {
  placementGroup?: PlacementGroup
}

export interface CreatePrivateNICResponse {
  privateNic?: PrivateNIC
}

export interface CreateSecurityGroupResponse {
  securityGroup?: SecurityGroup
}

export interface CreateSecurityGroupRuleResponse {
  rule?: SecurityGroupRule
}

export interface CreateServerResponse {
  server?: Server
}

export interface CreateSnapshotResponse {
  snapshot?: Snapshot
  task?: Task
}

export interface CreateVolumeResponse {
  volume?: Volume
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
  volumesBSsdCount: number
  volumesLSsdTotalSize: number
  volumesBSsdTotalSize: number
  privateNicsCount: number
  placementGroupsCount: number
}

export interface ExportSnapshotResponse {
  task?: Task
}

export interface GetBootscriptResponse {
  bootscript?: Bootscript
}

export interface GetDashboardResponse {
  dashboard?: Dashboard
}

export interface GetImageResponse {
  image?: Image
}

export interface GetIpResponse {
  ip?: Ip
}

export interface GetPlacementGroupResponse {
  placementGroup?: PlacementGroup
}

export interface GetPlacementGroupServersResponse {
  servers: PlacementGroupServer[]
}

export interface GetPrivateNICResponse {
  privateNic?: PrivateNIC
}

export interface GetSecurityGroupResponse {
  securityGroup?: SecurityGroup
}

export interface GetSecurityGroupRuleResponse {
  rule?: SecurityGroupRule
}

export interface GetServerResponse {
  server?: Server
}

export interface GetServerTypesAvailabilityResponse {
  servers: Record<string, GetServerTypesAvailabilityResponseAvailability>
}

export interface GetServerTypesAvailabilityResponseAvailability {
  availability: ServerTypesAvailability
}

export interface GetSnapshotResponse {
  snapshot?: Snapshot
}

export interface GetVolumeResponse {
  volume?: Volume
}

export interface Image {
  id: string
  name: string
  arch: Arch
  creationDate?: Date
  modificationDate?: Date
  /** @deprecated */
  defaultBootscript?: Bootscript
  extraVolumes: Record<string, Volume>
  fromServer: string
  organization: string
  public: boolean
  rootVolume?: VolumeSummary
  state: ImageState
  project: string
  tags: string[]
  zone: Zone
}

export interface Ip {
  id: string
  address: string
  reverse?: string
  server?: ServerSummary
  organization: string
  tags: string[]
  project: string
  zone: Zone
}

/** List bootscripts response */
export interface ListBootscriptsResponse {
  /** Total number of bootscripts */
  totalCount: number
  /** List of bootscripts */
  bootscripts: Bootscript[]
}

/** List images response */
export interface ListImagesResponse {
  /** Total number of images */
  totalCount: number
  /** List of images */
  images: Image[]
}

/** List ips response */
export interface ListIpsResponse {
  /** Total number of ips */
  totalCount: number
  /** List of ips */
  ips: Ip[]
}

/** List placement groups response */
export interface ListPlacementGroupsResponse {
  /** Total number of placement groups */
  totalCount: number
  /** List of placement groups */
  placementGroups: PlacementGroup[]
}

export interface ListPrivateNICsResponse {
  privateNics: PrivateNIC[]
  totalCount: number
}

/** List security group rules response */
export interface ListSecurityGroupRulesResponse {
  /** Total number of security groups */
  totalCount: number
  /** List of security rules */
  rules: SecurityGroupRule[]
}

/** List security groups response */
export interface ListSecurityGroupsResponse {
  /** Total number of security groups */
  totalCount: number
  /** List of security groups */
  securityGroups: SecurityGroup[]
}

export interface ListServerActionsResponse {
  actions: ServerAction[]
}

export interface ListServerUserDataResponse {
  userData: string[]
}

/** List servers response */
export interface ListServersResponse {
  /** Total number of servers */
  totalCount: number
  /** List of servers */
  servers: Server[]
}

/** List servers types response */
export interface ListServersTypesResponse {
  /** Total number of server types */
  totalCount: number
  /** List of server types */
  servers: Record<string, ServerType>
}

/** List snapshots response */
export interface ListSnapshotsResponse {
  /** Total number of snapshots */
  totalCount: number
  /** List of snapshots */
  snapshots: Snapshot[]
}

/** List volumes response */
export interface ListVolumesResponse {
  /** Total number of volumes */
  totalCount: number
  /** List of volumes */
  volumes: Volume[]
}

/** List volumes types response */
export interface ListVolumesTypesResponse {
  /** Total number of volume types */
  totalCount: number
  /** Map of volume types */
  volumes: Record<string, VolumeType>
}

/** Placement group */
export interface PlacementGroup {
  /** The placement group unique ID */
  id: string
  /** The placement group name */
  name: string
  /** The placement group organization ID */
  organization: string
  /** The placement group project ID */
  project: string
  /** The placement group tags */
  tags: string[]
  /**
   * Select the failling mode when the placement cannot be respected, either
   * optional or enforced
   */
  policyMode: PlacementGroupPolicyMode
  /**
   * Select the behavior of the placement group, either low_latency (group) or
   * max_availability (spread)
   */
  policyType: PlacementGroupPolicyType
  /** Returns true if the policy is respected, false otherwise */
  policyRespected: boolean
  /** The zone in which is the placement group */
  zone: Zone
}

export interface PlacementGroupServer {
  id: string
  name: string
  policyRespected: boolean
}

/** Private nic */
export interface PrivateNIC {
  /** The private NIC unique ID */
  id: string
  /** The server the private NIC is attached to */
  serverId: string
  /** The private network where the private NIC is attached */
  privateNetworkId: string
  /** The private NIC MAC address */
  macAddress: string
  /** The private NIC state */
  state: PrivateNICState
  /** The private NIC tags */
  tags: string[]
}

/** Security group */
export interface SecurityGroup {
  /** The security groups' unique ID */
  id: string
  /** The security groups name */
  name: string
  /** The security groups description */
  description: string
  /** True if SMTP is blocked on IPv4 and IPv6 */
  enableDefaultSecurity: boolean
  /** The default inbound policy */
  inboundDefaultPolicy: SecurityGroupPolicy
  /** The default outbound policy */
  outboundDefaultPolicy: SecurityGroupPolicy
  /** The security groups organization ID */
  organization: string
  /** The security group project ID */
  project: string
  /** The security group tags */
  tags: string[]
  /**
   * @deprecated True if it is your default security group for this organization
   *   ID
   */
  organizationDefault?: boolean
  /** True if it is your default security group for this project ID */
  projectDefault: boolean
  /** The security group creation date */
  creationDate?: Date
  /** The security group modification date */
  modificationDate?: Date
  /** List of servers attached to this security group */
  servers: ServerSummary[]
  /** True if the security group is stateful */
  stateful: boolean
  /** Security group state */
  state: SecurityGroupState
  /** The zone in which is the security group */
  zone: Zone
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
  zone: Zone
}

export interface SecurityGroupSummary {
  id: string
  name: string
}

export interface SecurityGroupTemplate {
  id: string
  name: string
}

/** Server */
export interface Server {
  /** The server unique ID */
  id: string
  /** The server name */
  name: string
  /** The server organization ID */
  organization: string
  /** The server project ID */
  project: string
  /** Provide as list of allowed actions on the server */
  allowedActions: ServerAction[]
  /** The server associated tags */
  tags: string[]
  /** The server commercial type (eg. GP1-M) */
  commercialType: string
  /** The server creation date */
  creationDate?: Date
  /** True if a dynamic IP is required */
  dynamicIpRequired: boolean
  /** True if IPv6 is enabled */
  enableIpv6: boolean
  /** The server host name */
  hostname: string
  /** Provide information on the server image */
  image?: Image
  /** The server protection option is activated */
  protected: boolean
  /** The server private IP address */
  privateIp?: string
  /** Information about the public IP */
  publicIp?: ServerIp
  /** The server modification date */
  modificationDate?: Date
  /** The server state */
  state: ServerState
  /** The server location */
  location?: ServerLocation
  /** The server IPv6 address */
  ipv6?: ServerIpv6
  /** @deprecated The server bootscript */
  bootscript?: Bootscript
  /** The server boot type */
  bootType: BootType
  /** The server volumes */
  volumes: Record<string, VolumeServer>
  /** The server security group */
  securityGroup?: SecurityGroupSummary
  /** The server planned maintenances */
  maintenances: ServerMaintenance[]
  /** The server state_detail */
  stateDetail: string
  /** The server arch */
  arch: Arch
  /** The server placement group */
  placementGroup?: PlacementGroup
  /** The server private NICs */
  privateNics: PrivateNIC[]
  /** The zone in which is the server */
  zone: Zone
}

/** Server action request. volume backup template */
export interface ServerActionRequestVolumeBackupTemplate {
  /**
   * Overrides the volume_type of the snapshot for this volume. If omitted, the
   * volume type of the original volume will be used.
   */
  volumeType: SnapshotVolumeType
}

export interface ServerActionResponse {
  task?: Task
}

/** Server. ip */
export interface ServerIp {
  /** The unique ID of the IP address */
  id: string
  /** The server public IPv4 IP-Address */
  address: string
  /** True if the IP address is dynamic */
  dynamic: boolean
}

/** Server. ipv6 */
export interface ServerIpv6 {
  /** The server IPv6 IP-Address */
  address: string
  /** The IPv6 IP-addresses gateway */
  gateway: string
  /** The IPv6 IP-addresses CIDR netmask */
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
}

export interface ServerSummary {
  id: string
  name: string
}

/** Server type */
export interface ServerType {
  /** @deprecated Estimated monthly price, for a 30 days month, in Euro */
  monthlyPrice?: number
  /** Hourly price in Euro */
  hourlyPrice: number
  /** Alternative instance name if any */
  altNames: string[]
  /** Additional volume constraints */
  perVolumeConstraint?: ServerTypeVolumeConstraintsByType
  /** Initial volume constraints */
  volumesConstraint?: ServerTypeVolumeConstraintSizes
  /** Number of CPU */
  ncpus: number
  /** Number of GPU */
  gpu?: number
  /** Available RAM in bytes */
  ram: number
  /** CPU architecture */
  arch: Arch
  /** True if it is a baremetal instance */
  baremetal: boolean
  /** Network available for the instance */
  network?: ServerTypeNetwork
  /** Capabilities */
  capabilities?: ServerTypeCapabilities
}

/** Server type. capabilities */
export interface ServerTypeCapabilities {
  /** True if server supports block storage */
  blockStorage?: boolean
  /** List of supported boot types */
  bootTypes: BootType[]
}

/** Server type. network */
export interface ServerTypeNetwork {
  /** List of available network interfaces */
  interfaces: ServerTypeNetworkInterface[]
  /** Total maximum internal bandwidth in bits per seconds */
  sumInternalBandwidth?: number
  /** Total maximum internet bandwidth in bits per seconds */
  sumInternetBandwidth?: number
  /** True if IPv6 is enabled */
  ipv6Support: boolean
}

/** Server type. network. interface */
export interface ServerTypeNetworkInterface {
  /** Maximum internal bandwidth in bits per seconds */
  internalBandwidth?: number
  /** Maximum internet bandwidth in bits per seconds */
  internetBandwidth?: number
}

/** Server type. volume constraint sizes */
export interface ServerTypeVolumeConstraintSizes {
  /** Minimum volume size in bytes */
  minSize: number
  /** Maximum volume size in bytes */
  maxSize: number
}

/** Server type. volume constraints by type */
export interface ServerTypeVolumeConstraintsByType {
  /** Local SSD volumes */
  lSsd?: ServerTypeVolumeConstraintSizes
}

export interface SetPlacementGroupResponse {
  placementGroup?: PlacementGroup
}

export interface SetPlacementGroupServersResponse {
  servers: PlacementGroupServer[]
}

/** Set security group rules request. rule */
export interface SetSecurityGroupRulesRequestRule {
  /**
   * UUID of the security rule to update. If no value is provided, a new rule
   * will be created
   */
  id?: string
  /** Action to apply when the rule matches a packet */
  action: SecurityGroupRuleAction
  /** Protocol family this rule applies to */
  protocol: SecurityGroupRuleProtocol
  /** Direction the rule applies to */
  direction: SecurityGroupRuleDirection
  /** The range of IP address this rules applies to */
  ipRange: string
  /**
   * Beginning of the range of ports this rule applies to (inclusive). This
   * value will be set to null if protocol is ICMP or ANY
   */
  destPortFrom?: number
  /**
   * End of the range of ports this rule applies to (inclusive). This value will
   * be set to null if protocol is ICMP or ANY, or if it is equal to
   * dest_port_from
   */
  destPortTo?: number
  /**
   * Position of this rule in the security group rules list. If several rules
   * are passed with the same position, the resulting order is undefined
   */
  position: number
  /**
   * Indicates if this rule is editable. Rules with the value false will be
   * ignored
   */
  editable?: boolean
  /** Zone of the rule. This field is ignored */
  zone: Zone
}

export interface SetSecurityGroupRulesResponse {
  rules: SecurityGroupRule[]
}

/** Snapshot */
export interface Snapshot {
  /** The snapshot ID */
  id: string
  /** The snapshot name */
  name: string
  /** The snapshot organization ID */
  organization: string
  /** The snapshot project ID */
  project: string
  /** The snapshot tags */
  tags: string[]
  /** The snapshot volume type */
  volumeType: VolumeVolumeType
  /** The snapshot size */
  size: number
  /** The snapshot state */
  state: SnapshotState
  /** The volume on which the snapshot is based on */
  baseVolume?: SnapshotBaseVolume
  /** The snapshot creation date */
  creationDate?: Date
  /** The snapshot modification date */
  modificationDate?: Date
  /** The snapshot zone */
  zone: Zone
  /** The reason for the failed snapshot import */
  errorReason?: string
}

/** Snapshot. base volume */
export interface SnapshotBaseVolume {
  /** The volume ID on which the snapshot is based on */
  id: string
  /** The volume name on which the snapshot is based on */
  name: string
}

/** Task */
export interface Task {
  /** The unique ID of the task */
  id: string
  /** The description of the task */
  description: string
  /** The progress of the task in percent */
  progress: number
  /** The task start date */
  startedAt?: Date
  /** The task end date */
  terminatedAt?: Date
  /** The task status */
  status: TaskStatus
  hrefFrom: string
  hrefResult: string
  /** The zone in which is the task */
  zone: Zone
}

export interface UpdateIpResponse {
  ip?: Ip
}

export interface UpdatePlacementGroupResponse {
  placementGroup?: PlacementGroup
}

export interface UpdatePlacementGroupServersResponse {
  servers: PlacementGroupServer[]
}

export interface UpdateServerResponse {
  server?: Server
}

export interface UpdateVolumeResponse {
  volume?: Volume
}

/** Volume */
export interface Volume {
  /** The volume unique ID */
  id: string
  /** The volume name */
  name: string
  /** @deprecated Show the volume NBD export URI */
  exportUri?: string
  /** The volume disk size */
  size: number
  /** The volume type */
  volumeType: VolumeVolumeType
  /** The volume creation date */
  creationDate?: Date
  /** The volume modification date */
  modificationDate?: Date
  /** The volume organization ID */
  organization: string
  /** The volume project ID */
  project: string
  /** The volume tags */
  tags: string[]
  /** The server attached to the volume */
  server?: ServerSummary
  /** The volume state */
  state: VolumeState
  /** The zone in which is the volume */
  zone: Zone
}

export interface VolumeServer {
  id: string
  name: string
  exportUri: string
  organization: string
  server?: ServerSummary
  size: number
  volumeType: VolumeServerVolumeType
  creationDate?: Date
  modificationDate?: Date
  state: VolumeServerState
  project: string
  boot: boolean
  zone: Zone
}

/** Volume server template */
export interface VolumeServerTemplate {
  /** UUID of the volume */
  id: string
  /** Force the server to boot on this volume */
  boot: boolean
  /** Name of the volume */
  name: string
  /** Disk size of the volume, must be a multiple of 512 */
  size: number
  /** Type of the volume */
  volumeType: VolumeVolumeType
  /** The ID of the snapshot on which this volume will be based */
  baseSnapshot: string
  /** Organization ID of the volume */
  organization: string
  /** Project ID of the volume */
  project: string
}

export interface VolumeSummary {
  id: string
  name: string
  size: number
  volumeType: VolumeVolumeType
}

/** Volume template */
export interface VolumeTemplate {
  /** UUID of the volume */
  id: string
  /** Name of the volume */
  name: string
  /** Disk size of the volume, must be a multiple of 512 */
  size: number
  /** Type of the volume */
  volumeType: VolumeVolumeType
  /**
   * @deprecated Organization ID of the volume.
   *
   *   One-of ('projectIdentifier'): at most one of 'organization', 'project'
   *   could be set.
   */
  organization?: string
  /**
   * Project ID of the volume.
   *
   * One-of ('projectIdentifier'): at most one of 'organization', 'project'
   * could be set.
   */
  project?: string
}

export interface VolumeType {
  displayName: string
  capabilities?: VolumeTypeCapabilities
  constraints?: VolumeTypeConstraints
}

export interface VolumeTypeCapabilities {
  snapshot: boolean
}

export interface VolumeTypeConstraints {
  min: number
  max: number
}

export type GetServerTypesAvailabilityRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  perPage?: number
  page?: number
}

export type ListServersTypesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  perPage?: number
  page?: number
}

export type ListVolumesTypesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  perPage?: number
  page?: number
}

export type ListServersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * return
   */
  perPage?: number
  /** A positive integer to choose the page to return */
  page?: number
  /** List only servers of this organization ID */
  organization?: string
  /** List only servers of this project ID */
  project?: string
  /**
   * Filter servers by name (for eg. "server1" will return "server100" and
   * "server1" but not "foo")
   */
  name?: string
  /** List servers by private_ip */
  privateIp?: string
  /** List servers that are not attached to a public IP */
  withoutIp?: boolean
  /** List servers of this commercial type */
  commercialType?: string
  /** List servers in this state */
  state?: ServerState
  /**
   * List servers with these exact tags (to filter with several tags, use commas
   * to separate them)
   */
  tags?: string[]
  /** List servers in this Private Network */
  privateNetwork?: string
  /** Define the order of the returned servers */
  order?: ListServersRequestOrder
}

export type DeleteServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  serverId: string
}

export type GetServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server you want to get */
  serverId: string
}

export type ListServerActionsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  serverId: string
}

export type ServerActionRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server */
  serverId: string
  /** The action to perform on the server */
  action?: ServerAction
  /**
   * The name of the backup you want to create. This field should only be
   * specified when performing a backup action.
   */
  name?: string
  /**
   * For each volume UUID, the snapshot parameters of the volume. This field
   * should only be specified when performing a backup action.
   */
  volumes?: Record<string, ServerActionRequestVolumeBackupTemplate>
}

export type ListServerUserDataRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server */
  serverId: string
}

export type DeleteServerUserDataRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server */
  serverId: string
  /** Key of the user data to delete */
  key: string
}

export type ListImagesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  organization?: string
  perPage?: number
  page?: number
  name?: string
  public?: boolean
  arch?: string
  project?: string
  tags?: string
}

export type GetImageRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the image you want to get */
  imageId: string
}

export type CreateImageRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Name of the image */
  name?: string
  /** UUID of the snapshot */
  rootVolume: string
  /** Architecture of the image */
  arch: Arch
  /** @deprecated Default bootscript of the image */
  defaultBootscript?: string
  /** Additional volumes of the image */
  extraVolumes?: Record<string, VolumeTemplate>
  /**
   * @deprecated Organization ID of the image.
   *
   *   One-of ('projectIdentifier'): at most one of 'organization', 'project'
   *   could be set.
   */
  organization?: string
  /**
   * Project ID of the image.
   *
   * One-of ('projectIdentifier'): at most one of 'organization', 'project'
   * could be set.
   */
  project?: string
  /** The tags of the image */
  tags?: string[]
  /** True to create a public image */
  public?: boolean
}

export type DeleteImageRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the image you want to delete */
  imageId: string
}

export type ListSnapshotsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  organization?: string
  perPage?: number
  page?: number
  name?: string
  project?: string
  tags?: string
}

export type CreateSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Name of the snapshot */
  name?: string
  /** UUID of the volume */
  volumeId?: string
  /** The tags of the snapshot */
  tags?: string[]
  /**
   * @deprecated Organization ID of the snapshot.
   *
   *   One-of ('projectIdentifier'): at most one of 'organization', 'project'
   *   could be set.
   */
  organization?: string
  /**
   * Project ID of the snapshot.
   *
   * One-of ('projectIdentifier'): at most one of 'organization', 'project'
   * could be set.
   */
  project?: string
  /**
   * Overrides the volume_type of the snapshot. If omitted, the volume type of
   * the original volume will be used.
   */
  volumeType?: SnapshotVolumeType
  /** Bucket name for snapshot imports */
  bucket?: string
  /** Object key for snapshot imports */
  key?: string
  /** Imported snapshot size, must be a multiple of 512 */
  size?: number
}

export type GetSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the snapshot you want to get */
  snapshotId: string
}

export type DeleteSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the snapshot you want to delete */
  snapshotId: string
}

export type ExportSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The snapshot ID */
  snapshotId: string
  /** S3 bucket name */
  bucket: string
  /** S3 object key */
  key: string
}

export type ListVolumesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Filter by volume type */
  volumeType?: VolumeVolumeType
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * return
   */
  perPage?: number
  /** A positive integer to choose the page to return */
  page?: number
  /** Filter volume by organization ID */
  organization?: string
  /** Filter volume by project ID */
  project?: string
  /**
   * Filter volumes with these exact tags (to filter with several tags, use
   * commas to separate them)
   */
  tags?: string[]
  /** Filter volume by name (for eg. "vol" will return "myvolume" but not "data") */
  name?: string
}

export type CreateVolumeRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The volume name */
  name?: string
  /**
   * @deprecated The volume organization ID.
   *
   *   One-of ('projectIdentifier'): at most one of 'organization', 'project'
   *   could be set.
   */
  organization?: string
  /**
   * The volume project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organization', 'project'
   * could be set.
   */
  project?: string
  /** The volume tags */
  tags?: string[]
  /** The volume type */
  volumeType?: VolumeVolumeType
  /**
   * The volume disk size, must be a multiple of 512.
   *
   * One-of ('from'): at most one of 'size', 'baseVolume', 'baseSnapshot' could
   * be set.
   */
  size?: number
  /**
   * The ID of the volume on which this volume will be based.
   *
   * One-of ('from'): at most one of 'size', 'baseVolume', 'baseSnapshot' could
   * be set.
   */
  baseVolume?: string
  /**
   * The ID of the snapshot on which this volume will be based.
   *
   * One-of ('from'): at most one of 'size', 'baseVolume', 'baseSnapshot' could
   * be set.
   */
  baseSnapshot?: string
}

export type GetVolumeRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the volume you want to get */
  volumeId: string
}

export type UpdateVolumeRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the volume */
  volumeId: string
  /** The volume name */
  name?: string
  /** The tags of the volume */
  tags?: string[]
  /** The volume disk size, must be a multiple of 512 */
  size?: number
}

export type DeleteVolumeRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the volume you want to delete */
  volumeId: string
}

export type ListSecurityGroupsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Name of the security group */
  name?: string
  /** The security group organization ID */
  organization?: string
  /** The security group project ID */
  project?: string
  /**
   * List security groups with these exact tags (to filter with several tags,
   * use commas to separate them)
   */
  tags?: string[]
  /** Filter security groups with this value for project_default */
  projectDefault?: boolean
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * return
   */
  perPage?: number
  /** A positive integer to choose the page to return */
  page?: number
}

export type CreateSecurityGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Name of the security group */
  name?: string
  /** Description of the security group */
  description: string
  /**
   * @deprecated Organization ID the security group belongs to.
   *
   *   One-of ('projectIdentifier'): at most one of 'organization', 'project'
   *   could be set.
   */
  organization?: string
  /**
   * Project ID the security group belong to.
   *
   * One-of ('projectIdentifier'): at most one of 'organization', 'project'
   * could be set.
   */
  project?: string
  /** The tags of the security group */
  tags?: string[]
  /**
   * @deprecated Whether this security group becomes the default security group
   *   for new instances.
   *
   *   One-of ('defaultIdentifier'): at most one of 'organizationDefault',
   *   'projectDefault' could be set.
   */
  organizationDefault?: boolean
  /**
   * Whether this security group becomes the default security group for new
   * instances.
   *
   * One-of ('defaultIdentifier'): at most one of 'organizationDefault',
   * 'projectDefault' could be set.
   */
  projectDefault?: boolean
  /** Whether the security group is stateful or not */
  stateful: boolean
  /** Default policy for inbound rules */
  inboundDefaultPolicy?: SecurityGroupPolicy
  /** Default policy for outbound rules */
  outboundDefaultPolicy?: SecurityGroupPolicy
  /** True to block SMTP on IPv4 and IPv6 */
  enableDefaultSecurity?: boolean
}

export type GetSecurityGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the security group you want to get */
  securityGroupId: string
}

export type DeleteSecurityGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the security group you want to delete */
  securityGroupId: string
}

export type ListDefaultSecurityGroupRulesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
}

export type ListSecurityGroupRulesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the security group */
  securityGroupId: string
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * return
   */
  perPage?: number
  /** A positive integer to choose the page to return */
  page?: number
}

export type CreateSecurityGroupRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the security group */
  securityGroupId: string
  protocol: SecurityGroupRuleProtocol
  direction: SecurityGroupRuleDirection
  action: SecurityGroupRuleAction
  ipRange: string
  /** The beginning of the range of ports to apply this rule to (inclusive) */
  destPortFrom?: number
  /** The end of the range of ports to apply this rule to (inclusive) */
  destPortTo?: number
  /** The position of this rule in the security group rules list */
  position: number
  /** Indicates if this rule is editable (will be ignored) */
  editable: boolean
}

export type SetSecurityGroupRulesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the security group to update the rules on */
  securityGroupId: string
  /** List of rules to update in the security group */
  rules?: SetSecurityGroupRulesRequestRule[]
}

export type DeleteSecurityGroupRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  securityGroupId: string
  securityGroupRuleId: string
}

export type GetSecurityGroupRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  securityGroupId: string
  securityGroupRuleId: string
}

export type ListPlacementGroupsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * return
   */
  perPage?: number
  /** A positive integer to choose the page to return */
  page?: number
  /** List only placement groups of this organization ID */
  organization?: string
  /** List only placement groups of this project ID */
  project?: string
  /**
   * List placement groups with these exact tags (to filter with several tags,
   * use commas to separate them)
   */
  tags?: string[]
  /**
   * Filter placement groups by name (for eg. "cluster1" will return
   * "cluster100" and "cluster1" but not "foo")
   */
  name?: string
}

export type CreatePlacementGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Name of the placement group */
  name?: string
  /**
   * @deprecated Organization ID of the placement group.
   *
   *   One-of ('projectIdentifier'): at most one of 'organization', 'project'
   *   could be set.
   */
  organization?: string
  /**
   * Project ID of the placement group.
   *
   * One-of ('projectIdentifier'): at most one of 'organization', 'project'
   * could be set.
   */
  project?: string
  /** The tags of the placement group */
  tags?: string[]
  /** The operating mode of the placement group */
  policyMode?: PlacementGroupPolicyMode
  /** The policy type of the placement group */
  policyType?: PlacementGroupPolicyType
}

export type GetPlacementGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the placement group you want to get */
  placementGroupId: string
}

export type SetPlacementGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  placementGroupId: string
  name: string
  organization?: string
  policyMode?: PlacementGroupPolicyMode
  policyType?: PlacementGroupPolicyType
  project?: string
  tags?: string[]
}

export type UpdatePlacementGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the placement group */
  placementGroupId: string
  /** Name of the placement group */
  name?: string
  /** The tags of the placement group */
  tags?: string[]
  /** The operating mode of the placement group */
  policyMode?: PlacementGroupPolicyMode
  /** The policy type of the placement group */
  policyType?: PlacementGroupPolicyType
}

export type DeletePlacementGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the placement group you want to delete */
  placementGroupId: string
}

export type GetPlacementGroupServersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  placementGroupId: string
}

export type SetPlacementGroupServersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  placementGroupId: string
  servers?: string[]
}

export type UpdatePlacementGroupServersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the placement group */
  placementGroupId: string
  servers: string[]
}

export type ListIpsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The project ID the IPs are reserved in */
  project?: string
  /** The organization ID the IPs are reserved in */
  organization?: string
  /**
   * Filter IPs with these exact tags (to filter with several tags, use commas
   * to separate them)
   */
  tags?: string[]
  /** Filter on the IP address (Works as a LIKE operation on the IP address) */
  name?: string
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * return
   */
  perPage?: number
  /** A positive integer to choose the page to return */
  page?: number
}

export type CreateIpRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /**
   * @deprecated The organization ID the IP is reserved in.
   *
   *   One-of ('projectIdentifier'): at most one of 'organization', 'project'
   *   could be set.
   */
  organization?: string
  /**
   * The project ID the IP is reserved in.
   *
   * One-of ('projectIdentifier'): at most one of 'organization', 'project'
   * could be set.
   */
  project?: string
  /** The tags of the IP */
  tags?: string[]
  /** UUID of the server you want to attach the IP to */
  server?: string
}

export type GetIpRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The IP ID or address to get */
  ip: string
}

export type UpdateIpRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** IP ID or IP address */
  ip: string
  /** Reverse domain name */
  reverse?: string | null
  /** An array of keywords you want to tag this IP with */
  tags?: string[]
  server?: string | null
}

export type DeleteIpRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The ID or the address of the IP to delete */
  ip: string
}

export type ListPrivateNICsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The server the private NIC is attached to */
  serverId: string
  /** The private NIC tags */
  tags?: string[]
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * return
   */
  perPage?: number
  /** A positive integer to choose the page to return */
  page?: number
}

export type CreatePrivateNICRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server the private NIC will be attached to */
  serverId: string
  /** UUID of the private network where the private NIC will be attached */
  privateNetworkId: string
  /** The private NIC tags */
  tags?: string[]
}

export type GetPrivateNICRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The server the private NIC is attached to */
  serverId: string
  /** The private NIC unique ID */
  privateNicId: string
}

export type UpdatePrivateNICRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server the private NIC will be attached to */
  serverId: string
  /** The private NIC unique ID */
  privateNicId: string
  /** Tags used to select private NIC/s */
  tags?: string[]
}

export type DeletePrivateNICRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The server the private NIC is attached to */
  serverId: string
  /** The private NIC unique ID */
  privateNicId: string
}

export type ListBootscriptsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  arch?: string
  title?: string
  default?: boolean
  public?: boolean
  perPage?: number
  page?: number
}

export type GetBootscriptRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  bootscriptId: string
}

export type GetDashboardRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  organization?: string
  project?: string
}
