// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion } from '@scaleway/sdk-client'

export type DataKeyAlgorithmSymmetricEncryption =
  | 'unknown_symmetric_encryption'
  | 'aes_256_gcm'

export type KeyAlgorithmSymmetricEncryption =
  | 'unknown_symmetric_encryption'
  | 'aes_256_gcm'

export type KeyOrigin = 'unknown_origin' | 'scaleway_kms' | 'external'

export type KeyState =
  | 'unknown_state'
  | 'enabled'
  | 'disabled'
  | 'pending_key_material'

export type ListKeysRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export interface KeyRotationPolicy {
  /**
   * Time interval between two key rotations. The minimum duration is 24 hours and the maximum duration is 1 year (876000 hours).
   */
  rotationPeriod?: string
  /**
   * Timestamp indicating the next scheduled rotation.
   */
  nextRotationAt?: Date
}

export interface KeyUsage {
  /**
   * See the `Key.Algorithm.SymmetricEncryption` enum for a description of values.
   *
   * One-of ('usage'): at most one of 'symmetricEncryption' could be set.
   */
  symmetricEncryption?: KeyAlgorithmSymmetricEncryption
}

export interface Key {
  /**
   * ID of the key.
   */
  id: string
  /**
   * ID of the Project containing the key.
   */
  projectId: string
  /**
   * Name of the key.
   */
  name: string
  /**
   * Keys with a usage set to `symmetric_encryption` can encrypt and decrypt data using the `AES-256-GCM` key algorithm. Key Manager currently only supports `AES-256-GCM`.
   */
  usage?: KeyUsage
  /**
   * See the `Key.State` enum for a description of possible values.
   */
  state: KeyState
  /**
   * The rotation count tracks the number of times the key has been rotated.
   */
  rotationCount: number
  /**
   * Key creation date.
   */
  createdAt?: Date
  /**
   * Key last modification date.
   */
  updatedAt?: Date
  /**
   * Returns `true` if key protection is applied to the key.
   */
  protected: boolean
  /**
   * Returns `true` if the key is locked.
   */
  locked: boolean
  /**
   * Description of the key.
   */
  description?: string
  /**
   * List of the key's tags.
   */
  tags: string[]
  /**
   * Key last rotation date.
   */
  rotatedAt?: Date
  /**
   * Key rotation policy.
   */
  rotationPolicy?: KeyRotationPolicy
  /**
   * Refer to the `Key.Origin` enum for a description of values.
   */
  origin: KeyOrigin
  /**
   * Region where the key is stored.
   */
  region: ScwRegion
}

export type CreateKeyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Project containing the key.
   */
  projectId?: string
  /**
   * (Optional) Name of the key.
   */
  name?: string
  /**
   * See the `Key.Algorithm.SymmetricEncryption` enum for a description of values.
   */
  usage?: KeyUsage
  /**
   * (Optional) Description of the key.
   */
  description?: string
  /**
   * (Optional) List of the key's tags.
   */
  tags?: string[]
  /**
   * If not specified, no rotation policy will be applied to the key.
   */
  rotationPolicy?: KeyRotationPolicy
  /**
   * Default value is `false`.
   */
  unprotected: boolean
  /**
   * Refer to the `Key.Origin` enum for a description of values.
   */
  origin?: KeyOrigin
}

export interface DataKey {
  /**
   * ID of the data encryption key.
   */
  keyId: string
  /**
   * Symmetric encryption algorithm of the data encryption key (`AES-256-GCM`).
   */
  algorithm: DataKeyAlgorithmSymmetricEncryption
  /**
   * Your data encryption key's ciphertext can be stored safely. It can only be decrypted through the keys you create in Key Manager, using the relevant key ID.
   */
  ciphertext: string
  /**
   * (Optional) Your data encryption key's plaintext allows you to use the key immediately upon creation. It must neither be stored or shared.
   */
  plaintext?: string
  /**
   * Data encryption key creation date.
   */
  createdAt?: Date
}

export type DecryptRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key to decrypt.
   */
  keyId: string
  /**
   * Data size must be between 1 and 131071 bytes.
   */
  ciphertext: string
  /**
   * The additional data must match the value passed in the encryption request.
   */
  associatedData?: string
}

export interface DecryptResponse {
  /**
   * ID of the key used for decryption.
   */
  keyId: string
  /**
   * Key's decrypted data.
   */
  plaintext: string
  /**
   * If the data was already encrypted with the latest key rotation, no output will be returned in the response object.
   */
  ciphertext?: string
}

export type DeleteKeyMaterialRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key of which to delete the key material.
   */
  keyId: string
}

export type DeleteKeyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key to delete.
   */
  keyId: string
}

export type DisableKeyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key to disable.
   */
  keyId: string
}

export type EnableKeyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key to enable.
   */
  keyId: string
}

export type EncryptRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key to encrypt.
   */
  keyId: string
  /**
   * Data size must be between 1 and 65535 bytes.
   */
  plaintext: string
  /**
   * Additional data which will not be encrypted, but authenticated and appended to the encrypted payload.
   */
  associatedData?: string
}

export interface EncryptResponse {
  /**
   * ID of the key used for encryption.
   */
  keyId: string
  /**
   * Key's encrypted data.
   */
  ciphertext: string
}

export type GenerateDataKeyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key.
   */
  keyId: string
  /**
   * See the `DataKey.Algorithm.SymmetricEncryption` enum for a description of values.
   */
  algorithm?: DataKeyAlgorithmSymmetricEncryption
  /**
   * Default value is `false`, meaning that the plaintext is returned.
Set it to `true` if you do not wish the plaintext to be returned in the response object.
   */
  withoutPlaintext: boolean
}

export type GetKeyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key to target.
   */
  keyId: string
}

export type ImportKeyMaterialRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The key's origin must be `external`.
   */
  keyId: string
  /**
   * The key material The key material is a random sequence of bytes used to derive a cryptographic key.
   */
  keyMaterial: string
  /**
   * A salt is random data added to key material to ensure unique derived keys, even if the input is similar. It helps strengthen security when the key material has low randomness (low entropy).
   */
  salt?: string
}

export type ListKeysRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * (Optional) Filter by Organization ID.
   */
  organizationId?: string
  /**
   * (Optional) Filter by Project ID.
   */
  projectId?: string
  orderBy?: ListKeysRequestOrderBy
  page?: number
  pageSize?: number
  /**
   * (Optional) List of tags to filter on.
   */
  tags?: string[]
  /**
   * (Optional) Filter by key name.
   */
  name?: string
}

export interface ListKeysResponse {
  /**
   * Single page of keys matching the requested criteria.
   */
  keys: Key[]
  /**
   * Total count of keys matching the requested criteria.
   */
  totalCount: number
}

export type ProtectKeyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key to apply key protection to.
   */
  keyId: string
}

export type RotateKeyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key to rotate.
   */
  keyId: string
}

export type UnprotectKeyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key to remove key protection from.
   */
  keyId: string
}

export type UpdateKeyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the key to update.
   */
  keyId: string
  /**
   * (Optional) Updated name of the key.
   */
  name?: string
  /**
   * (Optional) Updated description of the key.
   */
  description?: string
  /**
   * (Optional) Updated list of the key's tags.
   */
  tags?: string[]
  /**
   * If not specified, the key's existing rotation policy applies.
   */
  rotationPolicy?: KeyRotationPolicy
}
