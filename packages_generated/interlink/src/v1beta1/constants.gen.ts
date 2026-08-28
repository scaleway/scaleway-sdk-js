// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  BgpStatus,
  DedicatedConnectionStatus,
  LinkKind,
  LinkStatus,
  ListDedicatedConnectionsRequestOrderBy,
  ListLinksRequestOrderBy,
  ListPartnersRequestOrderBy,
  ListPopsRequestOrderBy,
  ListRoutingPoliciesRequestOrderBy,
} from './types.gen.js'


/** Lists all values of the enum {@link BgpStatus}. */
export const BGP_STATUSES: BgpStatus[] = [
  'unknown_bgp_status',
  'up',
  'down',
  'disabled',
]

/** Lists all values of the enum {@link DedicatedConnectionStatus}. */
export const DEDICATED_CONNECTION_STATUSES: DedicatedConnectionStatus[] = [
  'unknown_status',
  'created',
  'configuring',
  'failed',
  'active',
  'disabled',
  'deleted',
  'locked',
]

/** Lists all values of the enum {@link LinkKind}. */
export const LINK_KINDS: LinkKind[] = [
  'hosted',
  'self_hosted',
  'l2_hosted',
  'l3_hosted',
]

/** Lists all values of the enum {@link LinkStatus}. */
export const LINK_STATUSES: LinkStatus[] = [
  'unknown_link_status',
  'configuring',
  'failed',
  'requested',
  'refused',
  'expired',
  'provisioning',
  'active',
  'limited_connectivity',
  'all_down',
  'deprovisioning',
  'deleted',
  'locked',
  'ready',
]

/** Lists all values of the enum {@link ListDedicatedConnectionsRequestOrderBy}. */
export const LIST_DEDICATED_CONNECTIONS_REQUEST_ORDER_BIES: ListDedicatedConnectionsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
]

/** Lists all values of the enum {@link ListLinksRequestOrderBy}. */
export const LIST_LINKS_REQUEST_ORDER_BIES: ListLinksRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
]

/** Lists all values of the enum {@link ListPartnersRequestOrderBy}. */
export const LIST_PARTNERS_REQUEST_ORDER_BIES: ListPartnersRequestOrderBy[] = [
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListPopsRequestOrderBy}. */
export const LIST_POPS_REQUEST_ORDER_BIES: ListPopsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListRoutingPoliciesRequestOrderBy}. */
export const LIST_ROUTING_POLICIES_REQUEST_ORDER_BIES: ListRoutingPoliciesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

