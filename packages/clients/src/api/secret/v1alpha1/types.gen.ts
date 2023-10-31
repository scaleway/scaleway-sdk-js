// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ListFoldersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListSecretsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type Product = 'unknown'

export type SecretEphemeralAction =
  | 'unknown_ephemeral_action'
  | 'delete_secret'
  | 'disable_secret'

export type SecretStatus = 'ready' | 'locked'

export type SecretType =
  | 'unknown_secret_type'
  | 'opaque'
  | 'certificate'
  | 'key_value'

export type SecretVersionStatus =
  | 'unknown'
  | 'enabled'
  | 'disabled'
  | 'destroyed'

/** Access secret version response. */
export interface AccessSecretVersionResponse {
  /** ID of the secret. */
  secretId: string
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1.
   */
  revision: number
  /** The base64-encoded secret payload of the version. */
  data: string
  /**
   * The CRC32 checksum of the data as a base-10 integer. This field is only
   * available if a CRC32 was supplied during the creation of the version.
   */
  dataCrc32?: number
}

/** Folder. */
export interface Folder {
  /** ID of the folder. */
  id: string
  /** ID of the Project containing the folder. */
  projectId: string
  /** Name of the folder. */
  name: string
  /** Path of the folder. Location of the folder in the directory structure. */
  path: string
  /** Date and time of the folder's creation. */
  createdAt?: Date
  /** Region of the folder. */
  region: Region
}

/** List folders response. */
export interface ListFoldersResponse {
  /** List of folders. */
  folders: Folder[]
  /** Count of all folders matching the requested criteria. */
  totalCount: number
}

/** List secret versions response. */
export interface ListSecretVersionsResponse {
  /** Single page of versions. */
  versions: SecretVersion[]
  /** Number of versions. */
  totalCount: number
}

/** List secrets response. */
export interface ListSecretsResponse {
  /** Single page of secrets matching the requested criteria. */
  secrets: Secret[]
  /** Count of all secrets matching the requested criteria. */
  totalCount: number
}

/** List tags response. */
export interface ListTagsResponse {
  /** List of tags. */
  tags: string[]
  /** Count of all tags matching the requested criteria. */
  totalCount: number
}

/** Password generation params. */
export interface PasswordGenerationParams {
  /** Length of the password to generate (between 1 and 1024). */
  length: number
  /** Do not include lower case letters by default in the alphabet. */
  noLowercaseLetters: boolean
  /** Do not include upper case letters by default in the alphabet. */
  noUppercaseLetters: boolean
  /** Do not include digits by default in the alphabet. */
  noDigits: boolean
  /** Additional ascii characters to be included in the alphabet. */
  additionalChars: string
}

/** Secret. */
export interface Secret {
  /** ID of the secret. */
  id: string
  /** ID of the Project containing the secret. */
  projectId: string
  /** Name of the secret. */
  name: string
  /**
   * Current status of the secret. `ready`: the secret can be read, modified and
   * deleted. `locked`: no action can be performed on the secret. This status
   * can only be applied and removed by Scaleway.
   */
  status: SecretStatus
  /** Date and time of the secret's creation. */
  createdAt?: Date
  /** Last update of the secret. */
  updatedAt?: Date
  /** List of the secret's tags. */
  tags: string[]
  /** Number of versions for this secret. */
  versionCount: number
  /** Updated description of the secret. */
  description?: string
  /** Returns `true` for secrets that are managed by another product. */
  isManaged: boolean
  /** Returns `true` for protected secrets that cannot be deleted. */
  isProtected: boolean
  /** Type of the secret. See `Secret.Type` enum for description of values. */
  type: SecretType
  /** Path of the secret. Location of the secret in the directory structure. */
  path: string
  /**
   * Expiration date of the secret. (Optional.) Date on which the secret will be
   * deleted or deactivated.
   */
  expiresAt?: Date
  /**
   * Action to be taken when the secret expires. See `Secret.EphemeralAction`
   * enum for description of values.
   */
  ephemeralAction: SecretEphemeralAction
  /** Region of the secret. */
  region: Region
}

/** Secret version. */
export interface SecretVersion {
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1.
   */
  revision: number
  /** ID of the secret. */
  secretId: string
  /**
   * Current status of the version. `unknown`: the version is in an invalid
   * state. `enabled`: the version is accessible. `disabled`: the version is not
   * accessible but can be enabled. `destroyed`: the version is permanently
   * deleted. It is not possible to recover it.
   */
  status: SecretVersionStatus
  /** Date and time of the version's creation. */
  createdAt?: Date
  /** Last update of the version. */
  updatedAt?: Date
  /** Description of the version. */
  description?: string
  /** Returns `true` if the version is the latest. */
  isLatest: boolean
}

export type CreateSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project containing the secret. */
  projectId?: string
  /** Name of the secret. */
  name: string
  /** List of the secret's tags. */
  tags?: string[]
  /** Description of the secret. */
  description?: string
  /**
   * Type of the secret. (Optional.) See `Secret.Type` enum for description of
   * values. If not specified, the type is `Opaque`.
   */
  type?: SecretType
  /**
   * Path of the secret. (Optional.) Location of the secret in the directory
   * structure. If not specified, the path is `/`.
   */
  path?: string
  /**
   * Expiration date of the secret. (Optional.) Date on which the secret will be
   * deleted or deactivated.
   */
  expiresAt?: Date
  /** Action to be taken when the secret expires. */
  ephemeralAction?: SecretEphemeralAction
}

export type CreateFolderRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project containing the folder. */
  projectId?: string
  /** Name of the folder. */
  name: string
  /**
   * Path of the folder. (Optional.) Location of the folder in the directory
   * structure. If not specified, the path is `/`.
   */
  path?: string
}

export type GetSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
}

export type GetSecretByNameRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Name of the secret. */
  secretName: string
  /**
   * ID of the Project to target. (Optional.) If not specified, Secret Manager
   * will look for the secret in all Projects.
   */
  projectId?: string
}

export type UpdateSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /** Secret's updated name (optional). */
  name?: string
  /** Secret's updated list of tags (optional). */
  tags?: string[]
  /** Description of the secret. */
  description?: string
  /**
   * Path of the folder. (Optional.) Location of the folder in the directory
   * structure. If not specified, the path is `/`.
   */
  path?: string
}

export type ListSecretsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Filter by Organization ID (optional). */
  organizationId?: string
  /** Filter by Project ID (optional). */
  projectId?: string
  orderBy?: ListSecretsRequestOrderBy
  page?: number
  pageSize?: number
  /** List of tags to filter on (optional). */
  tags?: string[]
  /** Filter by secret name (optional). */
  name?: string
  /** Filter by managed / not managed (optional). */
  isManaged?: boolean
  /** Filter by path (optional). */
  path?: string
  /** Filter by ephemeral / not ephemeral (optional). */
  isEphemeral?: boolean
}

export type ListFoldersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Filter by Project ID (optional). */
  projectId?: string
  /** Filter by path (optional). */
  path?: string
  page?: number
  pageSize?: number
  orderBy?: ListFoldersRequestOrderBy
}

export type DeleteSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
}

export type DeleteFolderRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the folder. */
  folderId: string
}

export type ProtectSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret to protect. */
  secretId: string
}

export type UnprotectSecretRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret to unprotect. */
  secretId: string
}

export type AddSecretOwnerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /** @deprecated (Deprecated: use `product` field) Name of the product to add. */
  productName?: string
  /** ID of the product to add. See `Product` enum for description of values. */
  product?: Product
}

export type CreateSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /** The base64-encoded secret payload of the version. */
  data: string
  /** Description of the version. */
  description?: string
  /**
   * Disable the previous secret version. (Optional.) If there is no previous
   * version or if the previous version was already disabled, does nothing.
   */
  disablePrevious?: boolean
  /**
   * @deprecated Options to generate a password. (Optional.) If specified, a
   *   random password will be generated. The `data` and `data_crc32` fields
   *   must be empty. By default, the generator will use upper and lower case
   *   letters, and digits. This behavior can be tuned using the generation
   *   parameters.
   *
   *   One-of ('PasswordGeneration'): at most one of 'passwordGeneration' could be
   *   set.
   */
  passwordGeneration?: PasswordGenerationParams
  /**
   * (Optional.) The CRC32 checksum of the data as a base-10 integer. If
   * specified, Secret Manager will verify the integrity of the data received
   * against the given CRC32 checksum. An error is returned if the CRC32 does
   * not match. If, however, the CRC32 matches, it will be stored and returned
   * along with the SecretVersion on future access requests.
   */
  dataCrc32?: number
}

export type GeneratePasswordRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /** Description of the version. */
  description?: string
  /**
   * (Optional.) Disable the previous secret version. This has no effect if
   * there is no previous version or if the previous version was already
   * disabled.
   */
  disablePrevious?: boolean
  /** Length of the password to generate (between 1 and 1024 characters). */
  length: number
  /**
   * (Optional.) Exclude lower case letters by default in the password character
   * set.
   */
  noLowercaseLetters?: boolean
  /**
   * (Optional.) Exclude upper case letters by default in the password character
   * set.
   */
  noUppercaseLetters?: boolean
  /** (Optional.) Exclude digits by default in the password character set. */
  noDigits?: boolean
  /**
   * (Optional.) Additional ASCII characters to be included in the password
   * character set.
   */
  additionalChars?: string
}

export type GetSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1. Value can be either:
   *
   * - A number (the revision number)
   * - "latest" (the latest revision)
   * - "latest_enabled" (the latest enabled revision).
   */
  revision: string
}

export type GetSecretVersionByNameRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Name of the secret. */
  secretName: string
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1. Value can be either:
   *
   * - A number (the revision number)
   * - "latest" (the latest revision)
   * - "latest_enabled" (the latest enabled revision).
   */
  revision: string
  /**
   * ID of the Project to target. (Optional.) If not specified, Secret Manager
   * will look for the secret version in all Projects.
   */
  projectId?: string
}

export type UpdateSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1. Value can be either:
   *
   * - A number (the revision number)
   * - "latest" (the latest revision)
   * - "latest_enabled" (the latest enabled revision).
   */
  revision: string
  /** Description of the version. */
  description?: string
}

export type ListSecretVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  page?: number
  pageSize?: number
  /** Filter results by status. */
  status?: SecretVersionStatus[]
}

export type ListSecretVersionsByNameRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Name of the secret. */
  secretName: string
  page?: number
  pageSize?: number
  /** Filter results by status. */
  status?: SecretVersionStatus[]
  /**
   * ID of the Project to target. (Optional.) If not specified, Secret Manager
   * will look for the secret in all Projects.
   */
  projectId?: string
}

export type EnableSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1. Value can be either:
   *
   * - A number (the revision number)
   * - "latest" (the latest revision)
   * - "latest_enabled" (the latest enabled revision).
   */
  revision: string
}

export type DisableSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1. Value can be either:
   *
   * - A number (the revision number)
   * - "latest" (the latest revision)
   * - "latest_enabled" (the latest enabled revision).
   */
  revision: string
}

export type AccessSecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1. Value can be either:
   *
   * - A number (the revision number)
   * - "latest" (the latest revision)
   * - "latest_enabled" (the latest enabled revision).
   */
  revision: string
}

export type AccessSecretVersionByNameRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Name of the secret. */
  secretName: string
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1. Value can be either:
   *
   * - A number (the revision number)
   * - "latest" (the latest revision)
   * - "latest_enabled" (the latest enabled revision).
   */
  revision: string
  /**
   * ID of the Project to target. (Optional.) If not specified, Secret Manager
   * will look for the secret version in all Projects.
   */
  projectId?: string
}

export type DestroySecretVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1. Value can be either:
   *
   * - A number (the revision number)
   * - "latest" (the latest revision)
   * - "latest_enabled" (the latest enabled revision).
   */
  revision: string
}

export type ListTagsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /**
   * ID of the Project to target. (Optional.) If not specified, Secret Manager
   * will look for tags in all Projects.
   */
  projectId?: string
  page?: number
  pageSize?: number
}
