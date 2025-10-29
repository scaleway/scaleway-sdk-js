// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion } from '@scaleway/sdk-client'

export type BrowseSecretsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type EphemeralPolicyAction = 'unknown_action' | 'delete' | 'disable'

export type ListSecretsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type Product = 'unknown_product' | 'edge_services' | 's2s_vpn'

export type SecretStatus = 'unknown_status' | 'ready' | 'locked'

export type SecretType =
  | 'unknown_type'
  | 'opaque'
  | 'certificate'
  | 'key_value'
  | 'basic_credentials'
  | 'database_credentials'
  | 'ssh_key'

export type SecretVersionStatus =
  | 'unknown_status'
  | 'enabled'
  | 'disabled'
  | 'deleted'
  | 'scheduled_for_deletion'

export interface EphemeralPolicy {
  /**
   * Time frame, from one second and up to one year, during which the secret's versions are valid.
   */
  timeToLive?: string
  /**
   * Returns `true` if the version expires after a single user access.
   */
  expiresOnceAccessed?: boolean
  /**
   * See the `EphemeralPolicy.Action` enum for a description of values.
   */
  action: EphemeralPolicyAction
}

export type BrowseSecretsResponseItemFolderDetails = {}

export interface BrowseSecretsResponseItemSecretDetails {
  id: string
  tags: string[]
  versionCount: number
  protected: boolean
  ephemeralPolicy?: EphemeralPolicy
  type: SecretType
}

export interface EphemeralProperties {
  /**
   * (Optional.) If not specified, the version does not have an expiration date.
   */
  expiresAt?: Date
  /**
   * (Optional.) If not specified, the version can be accessed an unlimited amount of times.
   */
  expiresOnceAccessed?: boolean
  /**
   * See `EphemeralPolicy.Action` enum for a description of values.
   */
  action: EphemeralPolicyAction
}

export interface BrowseSecretsResponseItem {
  name: string
  createdAt?: Date
  updatedAt?: Date
  /**
   *
   * One-of ('details'): at most one of 'secret', 'folder' could be set.
   */
  secret?: BrowseSecretsResponseItemSecretDetails
  /**
   *
   * One-of ('details'): at most one of 'secret', 'folder' could be set.
   */
  folder?: BrowseSecretsResponseItemFolderDetails
}

export interface SecretVersion {
  /**
   * The first version of the secret is numbered 1, and all subsequent revisions augment by 1.
   */
  revision: number
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * * `unknown_status`: the version is in an invalid state.
   * `enabled`: the version is accessible.
   * `disabled`: the version is not accessible but can be enabled.
   * `scheduled_for_deletion`: the version is scheduled for deletion. It will be deleted in 7 days.
   * `deleted`: the version is permanently deleted. It is not possible to recover it.
   */
  status: SecretVersionStatus
  /**
   * Date and time of the version's creation.
   */
  createdAt?: Date
  /**
   * Last update of the version.
   */
  updatedAt?: Date
  /**
   * Date and time of the version's deletion.
   */
  deletedAt?: Date
  /**
   * Description of the version.
   */
  description?: string
  /**
   * Returns `true` if the version is the latest.
   */
  latest: boolean
  /**
   * Returns the version's expiration date, whether it expires after being accessed once, and the action to perform (disable or delete) once the version expires.
   */
  ephemeralProperties?: EphemeralProperties
  /**
   * Returns the time at which deletion was requested.
   */
  deletionRequestedAt?: Date
  /**
   * Region of the version.
   */
  region: ScwRegion
}

export interface Secret {
  /**
   * ID of the secret.
   */
  id: string
  /**
   * ID of the Project containing the secret.
   */
  projectId: string
  /**
   * Name of the secret.
   */
  name: string
  /**
   * * `ready`: the secret can be read, modified and deleted.
   * `locked`: no action can be performed on the secret. This status can only be applied and removed by Scaleway.
   */
  status: SecretStatus
  /**
   * Date and time of the secret's creation.
   */
  createdAt?: Date
  /**
   * Last update of the secret.
   */
  updatedAt?: Date
  /**
   * List of the secret's tags.
   */
  tags: string[]
  /**
   * Number of versions for this secret.
   */
  versionCount: number
  /**
   * Updated description of the secret.
   */
  description?: string
  /**
   * Returns `true` for secrets that are managed by another product.
   */
  managed: boolean
  /**
   * Returns `true` for protected secrets that cannot be deleted.
   */
  protected: boolean
  /**
   * See the `Secret.Type` enum for a description of values.
   */
  type: SecretType
  /**
   * Location of the secret in the directory structure.
   */
  path: string
  /**
   * (Optional.) Policy that defines whether/when a secret's versions expire. By default, the policy is applied to all the secret's versions.
   */
  ephemeralPolicy?: EphemeralPolicy
  /**
   * List of Scaleway resources that can access and manage the secret.
   */
  usedBy: Product[]
  /**
   * Returns the time at which deletion was requested.
   */
  deletionRequestedAt?: Date
  /**
   * (Optional.) The Scaleway Key Manager key ID used to encrypt and decrypt secret versions.
   */
  keyId?: string
  /**
   * Region of the secret.
   */
  region: ScwRegion
}

export type AccessSecretVersionByPathRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The first version of the secret is numbered 1, and all subsequent revisions augment by 1. Value can be either:
- an integer (the revision number)
- "latest" (the latest revision)
- "latest_enabled" (the latest enabled revision).
   */
  revision: string
  /**
   * Secret's path.
   */
  secretPath: string
  /**
   * Secret's name.
   */
  secretName: string
  /**
   * ID of the Project to target.
   */
  projectId?: string
}

export type AccessSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * The first version of the secret is numbered 1, and all subsequent revisions augment by 1. Value can be either:
- a number (the revision number)
- "latest" (the latest revision)
- "latest_enabled" (the latest enabled revision).
   */
  revision: string
}

export interface AccessSecretVersionResponse {
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * The first version of the secret is numbered 1, and all subsequent revisions augment by 1.
   */
  revision: number
  /**
   * The base64-encoded secret payload of the version.
   */
  data: string
  /**
   * This field is only available if a CRC32 was supplied during the creation of the version.
   */
  dataCrc32?: number
  /**
   * See the `Secret.Type` enum for a description of values.
   */
  type: SecretType
}

export type AddSecretOwnerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * See `Product` enum for description of values.
   */
  product?: Product
}

export interface BasicCredentials {
  /**
   * The username or identifier associated with the credentials.
   */
  username: string
  /**
   * The password associated with the credentials.
   */
  password: string
}

export type BrowseSecretsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Filter by Project ID (optional).
   */
  projectId?: string
  orderBy?: BrowseSecretsRequestOrderBy
  /**
   * Filter secrets and folders for a given prefix (default /).
   */
  prefix: string
  page?: number
  pageSize?: number
  /**
   * Filter secrets by tags.
   */
  tags?: string[]
  /**
   * Filter by secret type (optional).
   */
  type?: SecretType
}

export interface BrowseSecretsResponse {
  /**
   * Repeated item of type secret or folder, sorted by the request parameter.
   */
  items: BrowseSecretsResponseItem[]
  /**
   * Current path for the given prefix.
   */
  currentPath: string
  /**
   * Count of all secrets and folders matching the requested criteria.
   */
  totalCount: number
}

export type CreateSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Project containing the secret.
   */
  projectId?: string
  /**
   * Name of the secret.
   */
  name: string
  /**
   * List of the secret's tags.
   */
  tags?: string[]
  /**
   * Description of the secret.
   */
  description?: string
  /**
   * (Optional.) See the `Secret.Type` enum for a description of values. If not specified, the type is `Opaque`.
   */
  type?: SecretType
  /**
   * (Optional.) Location of the secret in the directory structure. If not specified, the path is `/`.
   */
  path?: string
  /**
   * (Optional.) Policy that defines whether/when a secret's versions expire. By default, the policy is applied to all the secret's versions.
   */
  ephemeralPolicy?: EphemeralPolicy
  /**
   * A protected secret cannot be deleted.
   */
  protected: boolean
  /**
   * (Optional.) The Scaleway Key Manager key ID will be used to encrypt and decrypt secret versions. If not specified, Secret Manager will use a Key Manager internal key.
   */
  keyId?: string
}

export type CreateSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * The base64-encoded secret payload of the version.
   */
  data: string
  /**
   * Description of the version.
   */
  description?: string
  /**
   * (Optional.) If there is no previous version or if the previous version was already disabled, does nothing.
   */
  disablePrevious?: boolean
  /**
   * If specified, Secret Manager will verify the integrity of the data received against the given CRC32 checksum. An error is returned if the CRC32 does not match. If, however, the CRC32 matches, it will be stored and returned along with the SecretVersion on future access requests.
   */
  dataCrc32?: number
}

export interface DatabaseCredentials {
  /**
   * Supported database engines are: 'postgres', 'mysql', 'other'.
   */
  engine: string
  /**
   * The username used to authenticate to the database server.
   */
  username: string
  /**
   * The password used to authenticate to the database server.
   */
  password: string
  /**
   * The hostname or resolvable DNS name of the database server.
   */
  host: string
  /**
   * The name of the database to connect to.
   */
  dbname: string
  /**
   * The port must be an integer ranging from 0 to 65535.
   */
  port: string
}

export type DeleteSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
}

export type DeleteSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * The first version of the secret is numbered 1, and all subsequent revisions augment by 1. Value can be either:
- a number (the revision number)
- "latest" (the latest revision)
- "latest_enabled" (the latest enabled revision).
   */
  revision: string
}

export type DisableSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * The first version of the secret is numbered 1, and all subsequent revisions augment by 1. Value can be either:
- a number (the revision number)
- "latest" (the latest revision)
- "latest_enabled" (the latest enabled revision).
   */
  revision: string
}

export type EnableSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * The first version of the secret is numbered 1, and all subsequent revisions augment by 1. Value can be either:
- a number (the revision number)
- "latest" (the latest revision)
- "latest_enabled" (the latest enabled revision).
   */
  revision: string
}

export type GetSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
}

export type GetSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * The first version of the secret is numbered 1, and all subsequent revisions augment by 1. Value can be either:
- a number (the revision number)
- "latest" (the latest revision)
- "latest_enabled" (the latest enabled revision).
   */
  revision: string
}

export type ListSecretTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Project to target.
   */
  projectId?: string
  page?: number
  pageSize?: number
}

export interface ListSecretTypesResponse {
  /**
   * List of secret types.
   */
  types: SecretType[]
  /**
   * Count of all secret types matching the requested criteria.
   */
  totalCount: number
}

export type ListSecretVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
  page?: number
  pageSize?: number
  /**
   * Filter results by status.
   */
  status?: SecretVersionStatus[]
}

export interface ListSecretVersionsResponse {
  /**
   * Single page of versions.
   */
  versions: SecretVersion[]
  /**
   * Number of versions.
   */
  totalCount: number
}

export type ListSecretsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Filter by Organization ID (optional).
   */
  organizationId?: string
  /**
   * Filter by Project ID (optional).
   */
  projectId?: string
  orderBy?: ListSecretsRequestOrderBy
  page?: number
  pageSize?: number
  /**
   * List of tags to filter on (optional).
   */
  tags?: string[]
  /**
   * Filter by secret name (optional).
   */
  name?: string
  /**
   * Filter by exact path (optional).
   */
  path?: string
  /**
   * Filter by ephemeral / not ephemeral (optional).
   */
  ephemeral?: boolean
  /**
   * Filter by secret type (optional).
   */
  type?: SecretType
  /**
   * Filter by whether the secret was scheduled for deletion / not scheduled for deletion. By default, it will display only not scheduled for deletion secrets.
   */
  scheduledForDeletion: boolean
}

export interface ListSecretsResponse {
  /**
   * Single page of secrets matching the requested criteria.
   */
  secrets: Secret[]
  /**
   * Count of all secrets matching the requested criteria.
   */
  totalCount: number
}

export type ListTagsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Project to target.
   */
  projectId?: string
  page?: number
  pageSize?: number
}

export interface ListTagsResponse {
  /**
   * List of tags.
   */
  tags: string[]
  /**
   * Count of all tags matching the requested criteria.
   */
  totalCount: number
}

export type ProtectSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret to enable secret protection for.
   */
  secretId: string
}

export type RestoreSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  secretId: string
}

export type RestoreSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  secretId: string
  revision: string
}

export interface SSHKey {
  /**
   * The private SSH key.
   */
  sshPrivateKey: string
}

export type UnprotectSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret to disable secret protection for.
   */
  secretId: string
}

export type UpdateSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * Secret's updated name (optional).
   */
  name?: string
  /**
   * Secret's updated list of tags (optional).
   */
  tags?: string[]
  /**
   * Description of the secret.
   */
  description?: string
  /**
   * (Optional.) Location of the folder in the directory structure. If not specified, the path is `/`.
   */
  path?: string
  /**
   * (Optional.) Policy that defines whether/when a secret's versions expire.
   */
  ephemeralPolicy?: EphemeralPolicy
}

export type UpdateSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the secret.
   */
  secretId: string
  /**
   * The first version of the secret is numbered 1, and all subsequent revisions augment by 1. Value can be either:
- a number (the revision number)
- "latest" (the latest revision)
- "latest_enabled" (the latest enabled revision).
   */
  revision: string
  /**
   * Description of the version.
   */
  description?: string
  /**
   * (Optional.) Properties that defines the version's expiration date, whether it expires after being accessed once, and the action to perform (disable or delete) once the version expires.
   */
  ephemeralProperties?: EphemeralProperties
}
