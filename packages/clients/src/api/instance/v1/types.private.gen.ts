// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'
import type {
  Arch,
  BootType,
  Bootscript,
  Image,
  ImageState,
  NullableStringValue,
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
/** Set image response */
export interface SetImageResponse {
  image?: Image
}

/** Set security group response */
export interface SetSecurityGroupResponse {
  securityGroup?: SecurityGroup
}

/** Set security group rule response */
export interface SetSecurityGroupRuleResponse {
  rule?: SecurityGroupRule
}

/** Set server response */
export interface SetServerResponse {
  server?: Server
}

/** Set snapshot response */
export interface SetSnapshotResponse {
  snapshot?: Snapshot
}

export type CreateServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The server name */
  name?: string
  /** Define if a dynamic IP is required for the instance */
  dynamicIpRequired?: boolean
  /** Define the server commercial type (i.e. GP1-S) */
  commercialType: string
  /** The server image ID or label */
  image: string
  /** The volumes attached to the server */
  volumes?: Record<string, VolumeServerTemplate>
  /** True if IPv6 is enabled on the server */
  enableIpv6: boolean
  /** The ID of the reserved IP to attach to the server */
  publicIp?: string
  /** The boot type to use */
  bootType?: BootType
  /** The bootscript ID to use when `boot_type` is set to `bootscript` */
  bootscript?: string
  /**
   * @deprecated The server organization ID.
   *
   *   One-of ('projectIdentifier'): at most one of 'organization', 'project' could be set.
   */
  organization?: string
  /**
   * The server project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organization', 'project' could be set.
   */
  project?: string
  /** The server tags */
  tags?: Array<string>
  /** The security group ID */
  securityGroup?: string
  /** Placement group ID if server must be part of a placement group */
  placementGroup?: string
}

export type SetServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The server unique ID */
  id: string
  /** The server name */
  name: string
  /** The server organization ID */
  organization?: string
  /** The server project ID */
  project?: string
  /** Provide as list of allowed actions on the server */
  allowedActions?: Array<ServerAction>
  /** The server associated tags */
  tags?: Array<string>
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
  /** The server bootscript */
  bootscript?: Bootscript
  /** The server boot type */
  bootType: BootType
  /** The server volumes */
  volumes?: Record<string, Volume>
  /** The server security group */
  securityGroup?: SecurityGroupSummary
  /** The server planned maintenances */
  maintenances?: Array<ServerMaintenance>
  /** The server state_detail */
  stateDetail: string
  /** The server arch */
  arch: Arch
  /** The server placement group */
  placementGroup?: PlacementGroup
  /** The server private NICs */
  privateNics?: Array<PrivateNIC>
}

export type UpdateServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server */
  serverId: string
  /** Name of the server */
  name?: string
  bootType?: BootType
  /** Tags of the server */
  tags?: Array<string>
  volumes?: Record<string, VolumeServerTemplate>
  bootscript?: string
  dynamicIpRequired?: boolean
  enableIpv6?: boolean
  protected?: boolean
  securityGroup?: SecurityGroupTemplate
  /** Placement group ID if server must be part of a placement group */
  placementGroup?: NullableStringValue
  /** The server private NICs */
  privateNics?: Array<PrivateNIC>
}

export type SetImageRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  id: string
  name: string
  arch: Arch
  creationDate?: Date
  modificationDate?: Date
  defaultBootscript?: Bootscript
  extraVolumes?: Record<string, Volume>
  fromServer: string
  organization?: string
  public: boolean
  rootVolume?: VolumeSummary
  state: ImageState
  project?: string
  tags?: Array<string>
}

export type SetSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  snapshotId: string
  id: string
  name: string
  organization?: string
  volumeType: VolumeVolumeType
  size: number
  state: SnapshotState
  baseVolume?: SnapshotBaseVolume
  creationDate?: Date
  modificationDate?: Date
  project?: string
  tags?: Array<string>
}

export type SetSecurityGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The ID of the security group (will be ignored) */
  id: string
  /** The name of the security group */
  name: string
  /** The tags of the security group */
  tags?: Array<string>
  /** The creation date of the security group (will be ignored) */
  creationDate?: Date
  /** The modification date of the security group (will be ignored) */
  modificationDate?: Date
  /** The description of the security group */
  description: string
  /** True to block SMTP on IPv4 and IPv6 */
  enableDefaultSecurity: boolean
  /** The default inbound policy */
  inboundDefaultPolicy: SecurityGroupPolicy
  /** The default outbound policy */
  outboundDefaultPolicy: SecurityGroupPolicy
  /** The security groups organization ID */
  organization?: string
  /** The security group project ID */
  project?: string
  /** @deprecated Please use project_default instead */
  organizationDefault?: boolean
  /** True use this security group for future instances created in this project */
  projectDefault: boolean
  /** The servers attached to this security group */
  servers?: Array<ServerSummary>
  /** True to set the security group as stateful */
  stateful: boolean
}

export type SetSecurityGroupRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  securityGroupId: string
  securityGroupRuleId: string
  id: string
  protocol: SecurityGroupRuleProtocol
  direction: SecurityGroupRuleDirection
  action: SecurityGroupRuleAction
  ipRange: string
  destPortFrom?: number
  destPortTo?: number
  position: number
  editable: boolean
}
