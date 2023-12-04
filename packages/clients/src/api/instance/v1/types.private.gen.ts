// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'
import type {
  Arch,
  BootType,
  Bootscript,
  Image,
  PlacementGroup,
  PrivateNIC,
  SecurityGroup,
  SecurityGroupPolicy,
  SecurityGroupRule,
  SecurityGroupRuleAction,
  SecurityGroupRuleDirection,
  SecurityGroupRuleProtocol,
  SecurityGroupSummary,
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
  VolumeVolumeType,
} from './types.gen'

export interface SetImageResponse {
  image?: Image
}

export type SetSecurityGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the security group. */
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

export interface SetSecurityGroupResponse {
  securityGroup?: SecurityGroup
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

export interface SetSecurityGroupRuleResponse {
  rule?: SecurityGroupRule
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

export interface SetServerResponse {
  server?: Server
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

export interface SetSnapshotResponse {
  snapshot?: Snapshot
}
