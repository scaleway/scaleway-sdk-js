// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  toApiLocality,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import type { ApiLocality } from '@scaleway/sdk-client'
import {
  marshalCreateKeyRequest,
  marshalDecryptRequest,
  marshalEncryptRequest,
  marshalGenerateDataKeyRequest,
  marshalImportKeyMaterialRequest,
  marshalSignRequest,
  marshalUpdateKeyRequest,
  marshalVerifyRequest,
  unmarshalDataKey,
  unmarshalDecryptResponse,
  unmarshalEncryptResponse,
  unmarshalKey,
  unmarshalListAlgorithmsResponse,
  unmarshalListKeysResponse,
  unmarshalPublicKey,
  unmarshalSignResponse,
  unmarshalVerifyResponse,
} from './marshalling.gen.js'
import type {
  CreateKeyRequest,
  DataKey,
  DecryptRequest,
  DecryptResponse,
  DeleteKeyMaterialRequest,
  DeleteKeyRequest,
  DisableKeyRequest,
  EnableKeyRequest,
  EncryptRequest,
  EncryptResponse,
  GenerateDataKeyRequest,
  GetKeyRequest,
  GetPublicKeyRequest,
  ImportKeyMaterialRequest,
  Key,
  ListAlgorithmsRequest,
  ListAlgorithmsResponse,
  ListKeysRequest,
  ListKeysResponse,
  ProtectKeyRequest,
  PublicKey,
  RestoreKeyRequest,
  RotateKeyRequest,
  SignRequest,
  SignResponse,
  UnprotectKeyRequest,
  UpdateKeyRequest,
  VerifyRequest,
  VerifyResponse,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Key Manager API.

This API allows you to create, manage and use cryptographic keys in a centralized and secure service.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  /**
   * Create a key. Create a key in a given region specified by the `region` parameter. You can use keys to encrypt or decrypt arbitrary payloads, to sign and verify messages or to generate data encryption keys. **Data encryption keys are not stored in Key Manager**.
   *
   * @param request - The request {@link CreateKeyRequest}
   * @returns A Promise of Key
   */
  createKey = (request: Readonly<CreateKeyRequest>) =>
    this.client.fetch<Key>(
      {
        body: JSON.stringify(
          marshalCreateKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys`,
      },
      unmarshalKey,
    )

  /**
   * Get key metadata. Retrieve metadata for a specified key using the `region` and `key_id` parameters.
   *
   * @param request - The request {@link GetKeyRequest}
   * @returns A Promise of Key
   */
  getKey = (request: Readonly<GetKeyRequest>) =>
    this.client.fetch<Key>(
      {
        method: 'GET',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}`,
      },
      unmarshalKey,
    )

  /**
   * Get the public key in PEM format.. Retrieves the public portion of an asymmetric cryptographic key in PEM format.
   *
   * @param request - The request {@link GetPublicKeyRequest}
   * @returns A Promise of PublicKey
   */
  getPublicKey = (request: Readonly<GetPublicKeyRequest>) =>
    this.client.fetch<PublicKey>(
      {
        method: 'GET',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/public-key`,
      },
      unmarshalPublicKey,
    )

  /**
   * Update a key. Modify a key's metadata including name, description and tags, specified by the `key_id` and `region` parameters.
   *
   * @param request - The request {@link UpdateKeyRequest}
   * @returns A Promise of Key
   */
  updateKey = (request: Readonly<UpdateKeyRequest>) =>
    this.client.fetch<Key>(
      {
        body: JSON.stringify(
          marshalUpdateKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}`,
      },
      unmarshalKey,
    )

  /**
   * Delete a key. Permanently delete a key specified by the `region` and `key_id` parameters. This action is irreversible. Any data encrypted with this key, including data encryption keys, will no longer be decipherable.
   *
   * @param request - The request {@link DeleteKeyRequest}
   */
  deleteKey = (request: Readonly<DeleteKeyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}`,
    })

  /**
   * Rotate a key. Generate a new version of an existing key with new key material. Previous key versions remain usable to decrypt previously encrypted data, but the key's new version will be used for subsequent encryption operations and data key generation.
   *
   * @param request - The request {@link RotateKeyRequest}
   * @returns A Promise of Key
   */
  rotateKey = (request: Readonly<RotateKeyRequest>) =>
    this.client.fetch<Key>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/rotate`,
      },
      unmarshalKey,
    )

  /**
   * Apply key protection. Apply protection to a given key specified by the `key_id` parameter. Applying key protection means that your key can be used and modified, but it cannot be deleted.
   *
   * @param request - The request {@link ProtectKeyRequest}
   * @returns A Promise of Key
   */
  protectKey = (request: Readonly<ProtectKeyRequest>) =>
    this.client.fetch<Key>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/protect`,
      },
      unmarshalKey,
    )

  /**
   * Remove key protection. Remove key protection from a given key specified by the `key_id` parameter. Removing key protection means that your key can be deleted anytime.
   *
   * @param request - The request {@link UnprotectKeyRequest}
   * @returns A Promise of Key
   */
  unprotectKey = (request: Readonly<UnprotectKeyRequest>) =>
    this.client.fetch<Key>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/unprotect`,
      },
      unmarshalKey,
    )

  /**
   * Enable key. Enable a given key to be used for cryptographic operations. Enabling a key allows you to make a disabled key usable again. You must specify the `region` and `key_id` parameters.
   *
   * @param request - The request {@link EnableKeyRequest}
   * @returns A Promise of Key
   */
  enableKey = (request: Readonly<EnableKeyRequest>) =>
    this.client.fetch<Key>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/enable`,
      },
      unmarshalKey,
    )

  /**
   * Disable key. Disable a given key, preventing it to be used for cryptographic operations. Disabling a key renders it unusable. You must specify the `region` and `key_id` parameters.
   *
   * @param request - The request {@link DisableKeyRequest}
   * @returns A Promise of Key
   */
  disableKey = (request: Readonly<DisableKeyRequest>) =>
    this.client.fetch<Key>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/disable`,
      },
      unmarshalKey,
    )

  protected pageOfListKeys = (request: Readonly<ListKeysRequest>) =>
    this.client.fetch<ListKeysResponse>(
      {
        method: 'GET',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['scheduled_for_deletion', request.scheduledForDeletion],
          ['tags', request.tags],
          ['usage', request.usage],
        ),
      },
      unmarshalListKeysResponse,
    )

  /**
   * List keys. Retrieve a list of keys across all Projects in an Organization or within a specific Project. You must specify the `region`, and either the `organization_id` or the `project_id`.
   *
   * @param request - The request {@link ListKeysRequest}
   * @returns A Promise of ListKeysResponse
   */
  listKeys = (request: Readonly<ListKeysRequest>) =>
    enrichForPagination('keys', this.pageOfListKeys, request)

  /**
   * Create a data encryption key. Create a new data encryption key for cryptographic operations outside of Key Manager. The data encryption key is encrypted and must be decrypted using the key you have created in Key Manager.

The data encryption key is returned in plaintext and ciphertext but it should only be stored in its encrypted form (ciphertext). Key Manager does not store your data encryption key. To retrieve your key's plaintext, use the `Decrypt` method with your key's ID and ciphertext.
   *
   * @param request - The request {@link GenerateDataKeyRequest}
   * @returns A Promise of DataKey
   */
  generateDataKey = (request: Readonly<GenerateDataKeyRequest>) =>
    this.client.fetch<DataKey>(
      {
        body: JSON.stringify(
          marshalGenerateDataKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/generate-data-key`,
      },
      unmarshalDataKey,
    )

  /**
   * Encrypt a payload. Encrypt a payload using an existing key, specified by the `key_id` parameter. The maximum payload size that can be encrypted is 64 KB of plaintext.
   *
   * @param request - The request {@link EncryptRequest}
   * @returns A Promise of EncryptResponse
   */
  encrypt = (request: Readonly<EncryptRequest>) =>
    this.client.fetch<EncryptResponse>(
      {
        body: JSON.stringify(
          marshalEncryptRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/encrypt`,
      },
      unmarshalEncryptResponse,
    )

  /**
   * Decrypt an encrypted payload. Decrypt an encrypted payload using an existing key, specified by the `key_id` parameter. The maximum payload size that can be decrypted is equivalent to the encrypted output of 64 KB of data (around 131 KB).
   *
   * @param request - The request {@link DecryptRequest}
   * @returns A Promise of DecryptResponse
   */
  decrypt = (request: Readonly<DecryptRequest>) =>
    this.client.fetch<DecryptResponse>(
      {
        body: JSON.stringify(
          marshalDecryptRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/decrypt`,
      },
      unmarshalDecryptResponse,
    )

  /**
   * Sign a message digest. Use a given key to sign a message digest. The key must have its usage set to `asymmetric_signing`. The digest must be created using the same digest algorithm that is defined in the key's algorithm configuration.
   *
   * @param request - The request {@link SignRequest}
   * @returns A Promise of SignResponse
   */
  sign = (request: Readonly<SignRequest>) =>
    this.client.fetch<SignResponse>(
      {
        body: JSON.stringify(marshalSignRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/sign`,
      },
      unmarshalSignResponse,
    )

  /**
   * Verify a message signature. Use a given key to verify a message signature against a message digest. The key must have its usage set to `asymmetric_signing`. The message digest must be generated using the same digest algorithm that is defined in the key's algorithm configuration.
   *
   * @param request - The request {@link VerifyRequest}
   * @returns A Promise of VerifyResponse
   */
  verify = (request: Readonly<VerifyRequest>) =>
    this.client.fetch<VerifyResponse>(
      {
        body: JSON.stringify(
          marshalVerifyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/verify`,
      },
      unmarshalVerifyResponse,
    )

  /**
   * Import key material. Import externally generated key material into Key Manager to derive a new cryptographic key. The key's origin must be `external`.
   *
   * @param request - The request {@link ImportKeyMaterialRequest}
   * @returns A Promise of Key
   */
  importKeyMaterial = (request: Readonly<ImportKeyMaterialRequest>) =>
    this.client.fetch<Key>(
      {
        body: JSON.stringify(
          marshalImportKeyMaterialRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/import-key-material`,
      },
      unmarshalKey,
    )

  /**
   * Delete key material. Delete previously imported key material. This renders the associated cryptographic key unusable for any operation. The key's origin must be `external`.
   *
   * @param request - The request {@link DeleteKeyMaterialRequest}
   */
  deleteKeyMaterial = (request: Readonly<DeleteKeyMaterialRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/delete-key-material`,
    })

  /**
   * Restore a key. Restore a key and all its rotations scheduled for deletion specified by the `region` and `key_id` parameters.
   *
   * @param request - The request {@link RestoreKeyRequest}
   * @returns A Promise of Key
   */
  restoreKey = (request: Readonly<RestoreKeyRequest>) =>
    this.client.fetch<Key>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}/restore`,
      },
      unmarshalKey,
    )

  /**
   * List all available algorithms. Lists all cryptographic algorithms supported by the Key Manager service.
   *
   * @param request - The request {@link ListAlgorithmsRequest}
   * @returns A Promise of ListAlgorithmsResponse
   */
  listAlgorithms = (request: Readonly<ListAlgorithmsRequest> = {}) =>
    this.client.fetch<ListAlgorithmsResponse>(
      {
        method: 'GET',
        path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/algorithms`,
        urlParams: urlParams(['usages', request.usages]),
      },
      unmarshalListAlgorithmsResponse,
    )
}
