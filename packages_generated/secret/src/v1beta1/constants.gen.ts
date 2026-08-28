// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  BrowseSecretsRequestOrderBy,
  EphemeralPolicyAction,
  ListSecretsRequestOrderBy,
  Product,
  SecretStatus,
  SecretType,
  SecretVersionStatus,
} from './types.gen.js'


/** Lists all values of the enum {@link BrowseSecretsRequestOrderBy}. */
export const BROWSE_SECRETS_REQUEST_ORDER_BIES: BrowseSecretsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link EphemeralPolicyAction}. */
export const EPHEMERAL_POLICY_ACTIONS: EphemeralPolicyAction[] = [
  'unknown_action',
  'delete',
  'disable',
]

/** Lists all values of the enum {@link ListSecretsRequestOrderBy}. */
export const LIST_SECRETS_REQUEST_ORDER_BIES: ListSecretsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link Product}. */
export const PRODUCTS: Product[] = [
  'unknown_product',
  'edge_services',
  's2s_vpn',
]

/** Lists all values of the enum {@link SecretStatus}. */
export const SECRET_STATUSES: SecretStatus[] = [
  'unknown_status',
  'ready',
  'locked',
]

/** Lists all values of the enum {@link SecretType}. */
export const SECRET_TYPES: SecretType[] = [
  'unknown_type',
  'opaque',
  'certificate',
  'key_value',
  'basic_credentials',
  'database_credentials',
  'ssh_key',
]

/** Lists all values of the enum {@link SecretVersionStatus}. */
export const SECRET_VERSION_STATUSES: SecretVersionStatus[] = [
  'unknown_status',
  'enabled',
  'disabled',
  'deleted',
  'scheduled_for_deletion',
]

