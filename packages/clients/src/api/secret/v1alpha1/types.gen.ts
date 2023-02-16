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

/** Access secret version response */
export interface AccessSecretVersionResponse {
  /** ID of the Secret */
  secretId: string
  /** Revision of the SecretVersion */
  revision: number
  /** The base64-encoded secret payload of the SecretVersion */
  data: string
}

/** List secret versions response */
export interface ListSecretVersionsResponse {
  /** Count of all SecretVersions */
  totalCount: number
  /** Single page of SecretVersions */
  versions: SecretVersion[]
}

/** List secrets response */
export interface ListSecretsResponse {
  /** Count of all Secrets matching the requested criteria */
  totalCount: number
  /** Single page of Secrets matching the requested criteria */
  secrets: Secret[]
}

/** Secret */
export interface Secret {
  /** ID of the Secret */
  id: string
  /** ID of the project containing the Secret */
  projectId: string
  /** Name of the Secret */
  name: string
  /** - `ready`: the Secret is ready. `locked`: the Secret is locked. */
  status: SecretStatus
  /** The time at which the Secret was created */
  createdAt?: Date
  /** The time at which the Secret was updated */
  updatedAt?: Date
  /** List of tags associated to this Secret */
  tags: string[]
  /** Region of the Secret */
  region: Region
  /** The number of versions for this Secret */
  versionCount: number
  /** Description of the Secret */
  description?: string
}

/** Secret version */
export interface SecretVersion {
  /** ID of the Secret */
  secretId: string
  /** Revision of the SecretVersion */
  revision: number
  /**
   * - `unknown`: the SecretVersion is in an invalid state. `enabled`: the
   *   SecretVersion is accessible. `disabled`: the SecretVersion is not
   *   accessible but can be enabled. `destroyed`: the SecretVersion is
   *   permanently destroyed.
   */
  status: SecretVersionStatus
  /** The time at which the SecretVersion was created */
  createdAt?: Date
  /** The time at which the SecretVersion was updated */
  updatedAt?: Date
  /** Description of the SecretVersion */
  description?: string
}

export type CreateSecretRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the project containing the Secret */
  projectId?: string
  /** Name of the Secret */
  name: string
  /** List of tags associated to this Secret */
  tags?: string[]
  /** Description of the Secret */
  description?: string
}

export type GetSecretRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId?: string
  /**
   * Name of the Secret (alternative to secret_id).
   *
   * One-of ('secretRef'): at most one of 'secretName' could be set.
   */
  secretName?: string
}

export type UpdateSecretRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId: string
  /** New name of the Secret (optional) */
  name?: string
  /** New list of tags associated to this Secret (optional) */
  tags?: string[]
  /** Description of the Secret */
  description?: string
}

export type ListSecretsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of an organization to filter on (optional) */
  organizationId?: string
  /** ID of a project to filter on (optional) */
  projectId?: string
  /** List of tags to filter on (optional) */
  tags?: string[]
  /** Name of the secrets (optional) */
  name?: string
  orderBy?: ListSecretsRequestOrderBy
  page?: number
  pageSize?: number
}

export type DeleteSecretRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId: string
}

export type CreateSecretVersionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId: string
  /** The base64-encoded secret payload of the SecretVersion */
  data: string
  /** Description of the SecretVersion */
  description?: string
}

export type GetSecretVersionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId?: string
  /** Revision of the SecretVersion (may be a number or "latest") */
  revision: string
  /**
   * Name of the Secret (alternative to secret_id).
   *
   * One-of ('secretRef'): at most one of 'secretName' could be set.
   */
  secretName?: string
}

export type UpdateSecretVersionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId: string
  /** Revision of the SecretVersion (may be a number or "latest") */
  revision: string
  /** Description of the SecretVersion */
  description?: string
}

export type ListSecretVersionsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId?: string
  /**
   * Name of the Secret (alternative to secret_id).
   *
   * One-of ('secretRef'): at most one of 'secretName' could be set.
   */
  secretName?: string
  page?: number
  pageSize?: number
  /** Filter results by status */
  status?: SecretVersionStatus[]
}

export type DestroySecretVersionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId: string
  /** Revision of the SecretVersion (may be a number or "latest") */
  revision: string
}

export type EnableSecretVersionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId: string
  /** Revision of the SecretVersion (may be a number or "latest") */
  revision: string
}

export type DisableSecretVersionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId: string
  /** Revision of the SecretVersion (may be a number or "latest") */
  revision: string
}

export type AccessSecretVersionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Secret */
  secretId?: string
  /**
   * Revision of the SecretVersion (may be a number, "latest" or
   * "latest_enabled")
   */
  revision: string
  /**
   * Name of the Secret (alternative to secret_id).
   *
   * One-of ('secretRef'): at most one of 'secretName' could be set.
   */
  secretName?: string
}
