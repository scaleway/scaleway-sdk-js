// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
	BackupStatus,
	DomainAvailabilityStatus,
	DomainStatus,
	HostingStatus,
} from './types.gen.js'

/** Lists transient statutes of the enum {@link BackupStatus}. */
export const BACKUP_TRANSIENT_STATUSES: BackupStatus[] = ['restoring']

/** Lists transient statutes of the enum {@link DomainAvailabilityStatus}. */
export const DOMAIN_AVAILABILITY_TRANSIENT_STATUSES: DomainAvailabilityStatus[] =
	['validating']

/** Lists transient statutes of the enum {@link DomainStatus}. */
export const DOMAIN_TRANSIENT_STATUSES: DomainStatus[] = ['validating']

/** Lists transient statutes of the enum {@link HostingStatus}. */
export const HOSTING_TRANSIENT_STATUSES: HostingStatus[] = [
	'delivering',
	'deleting',
	'migrating',
	'updating',
]
