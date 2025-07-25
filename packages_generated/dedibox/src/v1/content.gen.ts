// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  BMCAccessStatus,
  IPv6BlockDelegationStatus,
  RpnGroupMemberStatus,
  RpnSanStatus,
  RpnV2GroupStatus,
  RpnV2MemberStatus,
  ServerInstallStatus,
  ServerStatus,
  ServiceProvisioningStatus,
} from './types.gen.js'

/** Lists transient statutes of the enum {@link BMCAccessStatus}. */
export const BMC_ACCESS_TRANSIENT_STATUSES: BMCAccessStatus[] = [
  'creating',
  'deleting',
]

/** Lists transient statutes of the enum {@link IPv6BlockDelegationStatus}. */
export const I_PV6_BLOCK_DELEGATION_TRANSIENT_STATUSES: IPv6BlockDelegationStatus[] =
  ['updating']

/** Lists transient statutes of the enum {@link RpnGroupMemberStatus}. */
export const RPN_GROUP_MEMBER_TRANSIENT_STATUSES: RpnGroupMemberStatus[] = [
  'creating',
  'deleting',
]

/** Lists transient statutes of the enum {@link RpnSanStatus}. */
export const RPN_SAN_TRANSIENT_STATUSES: RpnSanStatus[] = [
  'creating',
  'deleting',
]

/** Lists transient statutes of the enum {@link RpnV2GroupStatus}. */
export const RPN_V2_GROUP_TRANSIENT_STATUSES: RpnV2GroupStatus[] = [
  'creating',
  'updating',
  'deleting',
]

/** Lists transient statutes of the enum {@link RpnV2MemberStatus}. */
export const RPN_V2_MEMBER_TRANSIENT_STATUSES: RpnV2MemberStatus[] = [
  'creating',
  'updating',
  'deleting',
]

/** Lists transient statutes of the enum {@link ServerInstallStatus}. */
export const SERVER_INSTALL_TRANSIENT_STATUSES: ServerInstallStatus[] = [
  'booting',
  'setting_up_raid',
  'partitioning',
  'formatting',
  'installing',
  'configuring',
  'configuring_bootloader',
  'rebooting',
]

/** Lists transient statutes of the enum {@link ServerStatus}. */
export const SERVER_TRANSIENT_STATUSES: ServerStatus[] = [
  'delivering',
  'installing',
]

/** Lists transient statutes of the enum {@link ServiceProvisioningStatus}. */
export const SERVICE_PROVISIONING_TRANSIENT_STATUSES: ServiceProvisioningStatus[] =
  ['delivering', 'expiring']
