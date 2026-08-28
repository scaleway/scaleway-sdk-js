// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ListOrganizationsRequestOrderBy,
  OrganizationLockedBy,
  OrganizationStatus,
} from './types.gen.js'


/** Lists all values of the enum {@link ListOrganizationsRequestOrderBy}. */
export const LIST_ORGANIZATIONS_REQUEST_ORDER_BIES: ListOrganizationsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link OrganizationLockedBy}. */
export const ORGANIZATION_LOCKED_BIES: OrganizationLockedBy[] = [
  'unknown_locked_by',
  'partner',
  'scaleway',
]

/** Lists all values of the enum {@link OrganizationStatus}. */
export const ORGANIZATION_STATUSES: OrganizationStatus[] = [
  'unknown_status',
  'opened',
  'locked',
  'closed',
]

