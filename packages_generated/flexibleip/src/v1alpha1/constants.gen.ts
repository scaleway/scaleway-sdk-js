// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  FlexibleIPStatus,
  ListFlexibleIPsRequestOrderBy,
  MACAddressStatus,
  MACAddressType,
} from './types.gen.js'


/** Lists all values of the enum {@link FlexibleIPStatus}. */
export const FLEXIBLE_IP_STATUSES: FlexibleIPStatus[] = [
  'unknown',
  'ready',
  'updating',
  'attached',
  'error',
  'detaching',
  'locked',
]

/** Lists all values of the enum {@link ListFlexibleIPsRequestOrderBy}. */
export const LIST_FLEXIBLE_I_PS_REQUEST_ORDER_BIES: ListFlexibleIPsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link MACAddressStatus}. */
export const MAC_ADDRESS_STATUSES: MACAddressStatus[] = [
  'unknown',
  'ready',
  'updating',
  'used',
  'error',
  'deleting',
]

/** Lists all values of the enum {@link MACAddressType}. */
export const MAC_ADDRESS_TYPES: MACAddressType[] = [
  'unknown_type',
  'vmware',
  'xen',
  'kvm',
]

