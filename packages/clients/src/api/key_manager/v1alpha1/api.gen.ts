// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import type { Region } from '../../../bridge'
import {
  marshalCreateKeyRequest,
  marshalDecryptRequest,
  marshalEncryptRequest,
  marshalGenerateDataKeyRequest,
  marshalUpdateKeyRequest,
  unmarshalDataKey,
  unmarshalDecryptResponse,
  unmarshalEncryptResponse,
  unmarshalKey,
  unmarshalListKeysResponse,
} from './marshalling.gen'
import type {
  CreateKeyRequest,
  DataKey,
  DecryptRequest,
  DecryptResponse,
  DeleteKeyRequest,
  DisableKeyRequest,
  EnableKeyRequest,
  EncryptRequest,
  EncryptResponse,
  GenerateDataKeyRequest,
  GetKeyRequest,
  Key,
  ListKeysRequest,
  ListKeysResponse,
  ProtectKeyRequest,
  RotateKeyRequest,
  UnprotectKeyRequest,
  UpdateKeyRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Key Manager API.
 *
 * This API allows you to create, manage and use cryptographic keys in a
 * centralized and secure service.
 */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  /**
   * Create a key. Create a key in a given region specified by the `region`
   * parameter. Keys only support symmetric encryption. You can use keys to
   * encrypt or decrypt arbitrary payloads, or to generate data encryption keys
   * that can be used without being stored in Key Manager.
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
   * Get key metadata. Retrieve the metadata of a key specified by the `region`
   * and `key_id` parameters.
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
   * Update a key. Update a key's metadata (name, description and tags),
   * specified by the `key_id` and `region` parameters.
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
   * Delete a key. Delete an existing key specified by the `region` and `key_id`
   * parameters. Deleting a key is permanent and cannot be undone. All data
   * encrypted using this key, including data encryption keys, will become
   * unusable.
   *
   * @param request - The request {@link DeleteKeyRequest}
   */
  deleteKey = (request: Readonly<DeleteKeyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/key-manager/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/keys/${validatePathParam('keyId', request.keyId)}`,
    })

  /**
   * Rotate a key. Generate a new version of an existing key with randomly
   * generated key material. Rotated keys can still be used to decrypt
   * previously encrypted data. The key's new material will be used for
   * subsequent encryption operations and data key generation.
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
   * Apply key protection. Apply key protection to a given key specified by the
   * `key_id` parameter. Applying key protection means that your key can be used
   * and modified, but it cannot be deleted.
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
   * Remove key protection. Remove key protection from a given key specified by
   * the `key_id` parameter. Removing key protection means that your key can be
   * deleted anytime.
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
   * Enable key. Enable a given key to be used for cryptographic operations.
   * Enabling a key allows you to make a disabled key usable again. You must
   * specify the `region` and `key_id` parameters.
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
   * Disable key. Disable a given key to be used for cryptographic operations.
   * Disabling a key renders it unusable. You must specify the `region` and
   * `key_id` parameters.
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

  protected pageOfListKeys = (request: Readonly<ListKeysRequest> = {}) =>
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
          ['tags', request.tags],
        ),
      },
      unmarshalListKeysResponse,
    )

  /**
   * List keys. Retrieve the list of keys created within all Projects of an
   * Organization or in a given Project. You must specify the `region`, and
   * either the `organization_id` or the `project_id`.
   *
   * @param request - The request {@link ListKeysRequest}
   * @returns A Promise of ListKeysResponse
   */
  listKeys = (request: Readonly<ListKeysRequest> = {}) =>
    enrichForPagination('keys', this.pageOfListKeys, request)

  /**
   * Generate a data encryption key. Generate a new data encryption key to use
   * for cryptographic operations outside of Key Manager. Note that Key Manager
   * does not store your data encryption key. The data encryption key is
   * encrypted and must be decrypted using the key you have created in Key
   * Manager. The data encryption key's plaintext is returned in the response
   * object, for immediate usage.
   *
   * Always store the data encryption key's ciphertext, rather than its
   * plaintext, which must not be stored. To retrieve your key's plaintext, call
   * the Decrypt endpoint with your key's ID and ciphertext.
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
   * Encrypt data. Encrypt data using an existing key, specified by the `key_id`
   * parameter. Only keys with a usage set to **symmetric_encryption** are
   * supported by this method. The maximum payload size that can be encrypted is
   * 64KB of plaintext.
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
   * Decrypt data. Decrypt data using an existing key, specified by the `key_id`
   * parameter. The maximum payload size that can be decrypted is the result of
   * the encryption of 64KB of data (around 131KB).
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
}
