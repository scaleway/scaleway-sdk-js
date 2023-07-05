// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'
import type {
  Arch,
  BootType,
  Bootscript,
  Image,
  ImageState,
  PlacementGroup,
  PrivateNIC,
  SecurityGroup,
  SecurityGroupPolicy,
  SecurityGroupRule,
  SecurityGroupRuleAction,
  SecurityGroupRuleDirection,
  SecurityGroupRuleProtocol,
  SecurityGroupSummary,
  SecurityGroupTemplate,
  Server,
  ServerAction,
  ServerIp,
  ServerIpv6,
  ServerLocation,
  ServerMaintenance,
  ServerState,
  ServerSummary,
  Snapshot,
  SnapshotBaseVolume,
  SnapshotState,
  Volume,
  VolumeServerTemplate,
  VolumeSummary,
  VolumeVolumeType,
} from './types.gen'
/** Set image response. */
export interface SetImageResponse {
  image?: Image
}

/** Set security group response. */
export interface SetSecurityGroupResponse {
  securityGroup?: SecurityGroup
}

/** Set security group rule response. */
export interface SetSecurityGroupRuleResponse {
  rule?: SecurityGroupRule
}

/** Set server response. */
export interface SetServerResponse {
  server?: Server
}

/** Set snapshot response. */
export interface SetSnapshotResponse {
  snapshot?: Snapshot
}

export type CreateServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Instance name. */
  name?: string
  /** Define if a dynamic IPv4 is required for the Instance. */
  dynamicIpRequired?: boolean
  /** If true, configure the Instance so it uses the new routed IP mode. */
  routedIpEnabled?: boolean
  /** Define the Instance commercial type (i.e. GP1-S). */
  commercialType: string
  /** Instance image ID or label. */
  image: string
  /** Volumes attached to the server. */
  volumes?: Record<string, VolumeServerTemplate>
  /** True if IPv6 is enabled on the server. */
  enableIpv6: boolean
  /** ID of the reserved IP to attach to the Instance. */
  publicIp?: string
  /** A list of reserved IP IDs to attach to the Instance. */
  publicIps?: string[]
  /** Boot type to use. */
  bootType?: BootType
  /** @deprecated Bootscript ID to use when `boot_type` is set to `bootscript`. */
  bootscript?: string
  /**
   * @deprecated Instance Organization ID.
   *
   *   One-of ('projectIdentifier'): at most one of 'organization', 'project'
   *   could be set.
   */
  organization?: string
  /**
   * Instance Project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organization', 'project'
   * could be set.
   */
  project?: string
  /** Instance tags. */
  tags?: string[]
  /** Security group ID. */
  securityGroup?: string
  /** Placement group ID if Instance must be part of a placement group. */
  placementGroup?: string
}

export type SetServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Instance unique ID. */
  id: string
  /** Instance name. */
  name: string
  /** Instance Organization ID. */
  organization?: string
  /** Instance Project ID. */
  project?: string
  /** Provide a list of allowed actions on the server. */
  allowedActions?: ServerAction[]
  /** Tags associated with the Instance. */
  tags?: string[]
  /** Instance commercial type (eg. GP1-M). */
  commercialType: string
  /** Instance creation date. */
  creationDate?: Date
  /** True if a dynamic IPv4 is required. */
  dynamicIpRequired: boolean
  /**
   * True to configure the instance so it uses the new routed IP mode (once this
   * is set to True you cannot set it back to False).
   */
  routedIpEnabled?: boolean
  /** True if IPv6 is enabled. */
  enableIpv6: boolean
  /** Instance host name. */
  hostname: string
  /** Provide information on the Instance image. */
  image?: Image
  /** Instance protection option is activated. */
  protected: boolean
  /** Instance private IP address. */
  privateIp?: string
  /** Information about the public IP. */
  publicIp?: ServerIp
  /** Information about all the public IPs attached to the server. */
  publicIps?: ServerIp[]
  /** Instance modification date. */
  modificationDate?: Date
  /** Instance state. */
  state?: ServerState
  /** Instance location. */
  location?: ServerLocation
  /** Instance IPv6 address. */
  ipv6?: ServerIpv6
  /** @deprecated Instance bootscript. */
  bootscript?: Bootscript
  /** Instance boot type. */
  bootType?: BootType
  /** Instance volumes. */
  volumes?: Record<string, Volume>
  /** Instance security group. */
  securityGroup?: SecurityGroupSummary
  /** Instance planned maintenances. */
  maintenances?: ServerMaintenance[]
  /** Instance state_detail. */
  stateDetail: string
  /**
   * Instance architecture (refers to the CPU architecture used for the
   * Instance, e.g. x86_64, arm64).
   */
  arch?: Arch
  /** Instance placement group. */
  placementGroup?: PlacementGroup
  /** Instance private NICs. */
  privateNics?: PrivateNIC[]
}

export type UpdateServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the Instance. */
  serverId: string
  /** Name of the Instance. */
  name?: string
  bootType?: BootType
  /** Tags of the Instance. */
  tags?: string[]
  volumes?: Record<string, VolumeServerTemplate>
  /** @deprecated */
  bootscript?: string
  dynamicIpRequired?: boolean
  /**
   * True to configure the instance so it uses the new routed IP mode (once this
   * is set to True you cannot set it back to False).
   */
  routedIpEnabled?: boolean
  publicIps?: ServerIp[]
  enableIpv6?: boolean
  protected?: boolean
  securityGroup?: SecurityGroupTemplate
  /** Placement group ID if Instance must be part of a placement group. */
  placementGroup?: string | null
  /** Instance private NICs. */
  privateNics?: PrivateNIC[]
  /**
   * Set the commercial_type for this Instance. Warning: This field has some
   * restrictions:
   *
   * - Cannot be changed if the Instance is not in `stopped` state.
   * - Cannot be changed if the Instance is in a placement group.
   * - Local storage requirements of the target commercial_types must be fulfilled
   *   (i.e. if an Instance has 80GB of local storage, it can be changed into a
   *   GP1-XS, which has a maximum of 150GB, but it cannot be changed into a
   *   DEV1-S, which has only 20GB).
   */
  commercialType?: string
}

export type SetImageRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  id: string
  name: string
  arch?: Arch
  creationDate?: Date
  modificationDate?: Date
  /** @deprecated */
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

export type SetSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  snapshotId: string
  id: string
  name: string
  organization?: string
  volumeType?: VolumeVolumeType
  size: number
  state?: SnapshotState
  baseVolume?: SnapshotBaseVolume
  creationDate?: Date
  modificationDate?: Date
  project?: string
  tags?: string[]
}

export type SetSecurityGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** ID of the security group (will be ignored). */
  id: string
  /** Name of the security group. */
  name: string
  /** Tags of the security group. */
  tags?: string[]
  /** Creation date of the security group (will be ignored). */
  creationDate?: Date
  /** Modification date of the security group (will be ignored). */
  modificationDate?: Date
  /** Description of the security group. */
  description: string
  /**
   * True to block SMTP on IPv4 and IPv6. This feature is read only, please open
   * a support ticket if you need to make it configurable.
   */
  enableDefaultSecurity: boolean
  /** Default inbound policy. */
  inboundDefaultPolicy?: SecurityGroupPolicy
  /** Default outbound policy. */
  outboundDefaultPolicy?: SecurityGroupPolicy
  /** Security groups Organization ID. */
  organization?: string
  /** Security group Project ID. */
  project?: string
  /** @deprecated Please use project_default instead. */
  organizationDefault?: boolean
  /** True use this security group for future Instances created in this project. */
  projectDefault: boolean
  /** Instances attached to this security group. */
  servers?: ServerSummary[]
  /** True to set the security group as stateful. */
  stateful: boolean
}

export type SetSecurityGroupRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  securityGroupId: string
  securityGroupRuleId: string
  id: string
  protocol?: SecurityGroupRuleProtocol
  direction?: SecurityGroupRuleDirection
  action?: SecurityGroupRuleAction
  ipRange: string
  destPortFrom?: number
  destPortTo?: number
  position: number
  editable: boolean
}
