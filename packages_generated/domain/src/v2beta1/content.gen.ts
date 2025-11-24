// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DNSZoneStatus,
  DomainFeatureStatus,
  DomainRegistrationStatusTransferStatus,
  DomainStatus,
  HostStatus,
  SSLCertificateStatus,
  TaskStatus,
} from './types.gen.js'


/** Lists transient statutes of the enum {@link DNSZoneStatus}. */
export const DNS_ZONE_TRANSIENT_STATUSES: DNSZoneStatus[] = [
  'pending',
]

/** Lists transient statutes of the enum {@link DomainFeatureStatus}. */
export const DOMAIN_FEATURE_TRANSIENT_STATUSES: DomainFeatureStatus[] = [
  'enabling',
  'disabling',
]

/** Lists transient statutes of the enum {@link DomainRegistrationStatusTransferStatus}. */
export const DOMAIN_REGISTRATION_STATUS_TRANSFER_TRANSIENT_STATUSES: DomainRegistrationStatusTransferStatus[] = [
  'pending',
  'processing',
]

/** Lists transient statutes of the enum {@link DomainStatus}. */
export const DOMAIN_TRANSIENT_STATUSES: DomainStatus[] = [
  'creating',
  'renewing',
  'xfering',
  'expiring',
  'updating',
  'checking',
  'deleting',
]

/** Lists transient statutes of the enum {@link HostStatus}. */
export const HOST_TRANSIENT_STATUSES: HostStatus[] = [
  'updating',
  'deleting',
]

/** Lists transient statutes of the enum {@link SSLCertificateStatus}. */
export const SSL_CERTIFICATE_TRANSIENT_STATUSES: SSLCertificateStatus[] = [
  'pending',
]

/** Lists transient statutes of the enum {@link TaskStatus}. */
export const TASK_TRANSIENT_STATUSES: TaskStatus[] = [
  'pending',
]

