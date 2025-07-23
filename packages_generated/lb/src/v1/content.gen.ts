// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  CertificateStatus,
  InstanceStatus,
  LbStatus,
  PrivateNetworkStatus,
} from './types.gen.js'

/** Lists transient statutes of the enum {@link CertificateStatus}. */
export const CERTIFICATE_TRANSIENT_STATUSES: CertificateStatus[] = ['pending']

/** Lists transient statutes of the enum {@link InstanceStatus}. */
export const INSTANCE_TRANSIENT_STATUSES: InstanceStatus[] = [
  'pending',
  'migrating',
]

/** Lists transient statutes of the enum {@link LbStatus}. */
export const LB_TRANSIENT_STATUSES: LbStatus[] = [
  'pending',
  'migrating',
  'to_create',
  'creating',
  'to_delete',
  'deleting',
]

/** Lists transient statutes of the enum {@link PrivateNetworkStatus}. */
export const PRIVATE_NETWORK_TRANSIENT_STATUSES: PrivateNetworkStatus[] = [
  'pending',
]
