import type { Zone } from '../../../scw/locality'
import type {
  SecurityGroup,
  SecurityGroupPolicy,
  SecurityGroupRule,
  SecurityGroupRuleAction,
  SecurityGroupRuleDirection,
  SecurityGroupRuleProtocol,
  Server,
  Snapshot,
} from './types.gen'

export type UpdateSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the snapshot you want to update */
  snapshotId: string
  /** Name of the snapshot */
  name?: string
}

export interface UpdateSnapshotResponse {
  snapshot?: Snapshot
}

/** UpdateSecurityGroupRequest contains the parameters to update a security group */
export type UpdateSecurityGroupRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  securityGroupId: string
  name?: string
  description?: string
  inboundDefaultPolicy?: SecurityGroupPolicy
  outboundDefaultPolicy?: SecurityGroupPolicy
  stateful?: boolean
  organizationDefault?: boolean
  projectDefault?: boolean
  enableDefaultSecurity?: boolean
}

export interface UpdateSecurityGroupResponse {
  securityGroup?: SecurityGroup
}

/** UpdateSecurityGroupRuleRequest contains the parameters to update a security group rule */
export type UpdateSecurityGroupRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  securityGroupId: string
  securityGroupRuleId: string
  protocol?: SecurityGroupRuleProtocol
  direction?: SecurityGroupRuleDirection
  action?: SecurityGroupRuleAction
  ipRange?: string
  position?: number
  /**
   * If set to 0, DestPortFrom will be removed.
   * See SecurityGroupRule.DestPortFrom for more information
   */
  destPortFrom?: number
  /**
   * If set to 0, DestPortTo will be removed.
   * See SecurityGroupRule.DestPortTo for more information
   */
  destPortTo?: number
}

export interface UpdateSecurityGroupRuleResponse {
  rule?: SecurityGroupRule
}

export type AttachVolumeRequest = {
  zone?: Zone
  serverId: string
  volumeId: string
}

/** Contains the updated server after attaching a volume. */
export interface AttachVolumeResponse {
  server?: Server
}

export type DetachVolumeRequest = {
  zone?: Zone
  volumeId: string
}

/** Contains the updated server after detaching a volume. */
export interface DetachVolumeResponse {
  server?: Server
}

export type {
  CreateServerRequest,
  UpdateServerRequest,
} from './types.private.gen'
