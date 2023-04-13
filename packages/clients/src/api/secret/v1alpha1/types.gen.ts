// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ListSecretsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type SecretStatus = 'ready' | 'locked'

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
   * The CRC32 checksum of the data as a base-10 integer. This field is present
   * only if a CRC32 was supplied during the creation of the version.
   */
  dataCrc32: number
}

/** List secret versions response. */
export interface ListSecretVersionsResponse {
  /** Number of versions. */
  totalCount: number
  /** Single page of versions. */
  versions: SecretVersion[]
}

/** List secrets response. */
export interface ListSecretsResponse {
  /** Count of all secrets matching the requested criteria. */
  totalCount: number
  /** Single page of secrets matching the requested criteria. */
  secrets: Secret[]
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
   * Current status of the secret. `ready`: the secret is ready. `locked`: the
   * secret is locked.
   */
  status: SecretStatus
  /** Date and time of the secret's creation. */
  createdAt?: Date
  /** Last update of the secret. */
  updatedAt?: Date
  /** List of the secret's tags. */
  tags: string[]
  /** Region of the secret. */
  region: Region
  /** Number of versions for this secret. */
  versionCount: number
  /** Updated description of the secret. */
  description?: string
  /** True for secrets that are managed by another product. */
  isManaged: boolean
}

/** Secret version. */
export interface SecretVersion {
  /** ID of the secret. */
  secretId: string
  /**
   * Version number. The first version of the secret is numbered 1, and all
   * subsequent revisions augment by 1.
   */
  revision: number
  /**
   * Current status of the version. `unknown`: the version is in an invalid
   * state. `enabled`: the version is accessible. `disabled`: the version is not
   * accessible but can be enabled. `destroyed`: the version is permanently
   * deleted. It is not possible to recover it.
   */
  status: SecretVersionStatus
  /** True if the version is the latest one. */
  isLatest: boolean
  /** Date and time of the version's creation. */
  createdAt?: Date
  /** Last update of the version. */
  updatedAt?: Date
  /** Description of the version. */
  description?: string
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
}

export type AddSecretOwnerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the secret. */
  secretId: string
  /** Name of the product to add. */
  productName: string
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
  /** Filter by secret name (optional). */
  name?: string
  /** List of tags to filter on (optional). */
  tags?: string[]
  /** Filter by managed / not managed (optional). */
  isManaged?: boolean
  orderBy?: ListSecretsRequestOrderBy
  page?: number
  pageSize?: number
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
   * Disable the previous secret version. If there is no previous version or if
   * the previous version was already disabled, does nothing.
   */
  disablePrevious: boolean
  /**
   * Options to generate a password. If specified, a random password will be
   * generated. The data field must be empty. By default, the generator will use
   * upper and lower case letters, and digits. This behavior can be tuned using
   * the generation parameters.
   *
   * One-of ('PasswordGeneration'): at most one of 'passwordGeneration' could be
   * set.
   */
  passwordGeneration?: PasswordGenerationParams
  /**
   * The CRC32 checksum of the data as a base-10 integer. This field is optional
   * and can be set to 0. If greater than 0, the Secret Manager will verify the
   * integrity of the data received against the given CRC32. An error is
   * returned if the CRC32 does not match. Otherwise, the CRC32 will be stored
   * and returned along with the SecretVersion on futur accesses.
   */
  dataCrc32: number
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
   * subsequent revisions augment by 1. Value can be a number or "latest".
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
   * subsequent revisions augment by 1. Value can be a number or "latest".
   */
  revision: string
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
   * subsequent revisions augment by 1. Value can be a number or "latest".
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
   * subsequent revisions augment by 1. Value can be a number or "latest".
   */
  revision: string
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
   * subsequent revisions augment by 1. Value can be a number or "latest".
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
   * subsequent revisions augment by 1. Value can be a number or "latest".
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
   * subsequent revisions augment by 1. Value can be a number or "latest".
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
   * subsequent revisions augment by 1. Value can be a number or "latest".
   */
  revision: string
}
