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
  marshalCreateSecretRequest,
  marshalCreateSecretVersionRequest,
  marshalUpdateSecretRequest,
  marshalUpdateSecretVersionRequest,
  unmarshalAccessSecretVersionResponse,
  unmarshalListSecretVersionsResponse,
  unmarshalListSecretsResponse,
  unmarshalSecret,
  unmarshalSecretVersion,
} from './marshalling.gen'
import type {
  AccessSecretVersionRequest,
  AccessSecretVersionResponse,
  CreateSecretRequest,
  CreateSecretVersionRequest,
  DeleteSecretRequest,
  DestroySecretVersionRequest,
  DisableSecretVersionRequest,
  EnableSecretVersionRequest,
  GetSecretRequest,
  GetSecretVersionRequest,
  ListSecretVersionsRequest,
  ListSecretVersionsResponse,
  ListSecretsRequest,
  ListSecretsResponse,
  Secret,
  SecretVersion,
  UpdateSecretRequest,
  UpdateSecretVersionRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Secret API (beta).
 *
 * This API allows you to conveniently store, access and share sensitive data.
 */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par']

  /**
   * Create a Secret containing no versions
   *
   * @param request - The request {@link CreateSecretRequest}
   * @returns A Promise of Secret
   */
  createSecret = (request: Readonly<CreateSecretRequest>) =>
    this.client.fetch<Secret>(
      {
        body: JSON.stringify(
          marshalCreateSecretRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets`,
      },
      unmarshalSecret,
    )

  /**
   * Get metadata of a Secret
   *
   * @param request - The request {@link GetSecretRequest}
   * @returns A Promise of Secret
   */
  getSecret = (request: Readonly<GetSecretRequest>) =>
    this.client.fetch<Secret>(
      {
        method: 'GET',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam('secretId', request.secretId)}`,
      },
      unmarshalSecret,
    )

  /**
   * Update metadata of a Secret
   *
   * @param request - The request {@link UpdateSecretRequest}
   * @returns A Promise of Secret
   */
  updateSecret = (request: Readonly<UpdateSecretRequest>) =>
    this.client.fetch<Secret>(
      {
        body: JSON.stringify(
          marshalUpdateSecretRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam('secretId', request.secretId)}`,
      },
      unmarshalSecret,
    )

  protected pageOfListSecrets = (request: Readonly<ListSecretsRequest> = {}) =>
    this.client.fetch<ListSecretsResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'name_asc'],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['tags', request.tags],
        ),
      },
      unmarshalListSecretsResponse,
    )

  /**
   * List Secrets
   *
   * @param request - The request {@link ListSecretsRequest}
   * @returns A Promise of ListSecretsResponse
   */
  listSecrets = (request: Readonly<ListSecretsRequest> = {}) =>
    enrichForPagination('secrets', this.pageOfListSecrets, request)

  /**
   * Delete a secret
   *
   * @param request - The request {@link DeleteSecretRequest}
   */
  deleteSecret = (request: Readonly<DeleteSecretRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/secret-manager/v1alpha1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/secrets/${validatePathParam('secretId', request.secretId)}`,
    })

  /**
   * Create a SecretVersion
   *
   * @param request - The request {@link CreateSecretVersionRequest}
   * @returns A Promise of SecretVersion
   */
  createSecretVersion = (request: Readonly<CreateSecretVersionRequest>) =>
    this.client.fetch<SecretVersion>(
      {
        body: JSON.stringify(
          marshalCreateSecretVersionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam('secretId', request.secretId)}/versions`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Get metadata of a SecretVersion
   *
   * @param request - The request {@link GetSecretVersionRequest}
   * @returns A Promise of SecretVersion
   */
  getSecretVersion = (request: Readonly<GetSecretVersionRequest>) =>
    this.client.fetch<SecretVersion>(
      {
        method: 'GET',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam(
          'secretId',
          request.secretId,
        )}/versions/${validatePathParam('revision', request.revision)}`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Update metadata of a SecretVersion
   *
   * @param request - The request {@link UpdateSecretVersionRequest}
   * @returns A Promise of SecretVersion
   */
  updateSecretVersion = (request: Readonly<UpdateSecretVersionRequest>) =>
    this.client.fetch<SecretVersion>(
      {
        body: JSON.stringify(
          marshalUpdateSecretVersionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam(
          'secretId',
          request.secretId,
        )}/versions/${validatePathParam('revision', request.revision)}`,
      },
      unmarshalSecretVersion,
    )

  protected pageOfListSecretVersions = (
    request: Readonly<ListSecretVersionsRequest>,
  ) =>
    this.client.fetch<ListSecretVersionsResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam('secretId', request.secretId)}/versions`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListSecretVersionsResponse,
    )

  /**
   * List versions of a secret, not returning any sensitive data
   *
   * @param request - The request {@link ListSecretVersionsRequest}
   * @returns A Promise of ListSecretVersionsResponse
   */
  listSecretVersions = (request: Readonly<ListSecretVersionsRequest>) =>
    enrichForPagination('versions', this.pageOfListSecretVersions, request)

  /**
   * Destroy a SecretVersion, permanently destroying the sensitive data
   *
   * @param request - The request {@link DestroySecretVersionRequest}
   * @returns A Promise of SecretVersion
   */
  destroySecretVersion = (request: Readonly<DestroySecretVersionRequest>) =>
    this.client.fetch<SecretVersion>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam(
          'secretId',
          request.secretId,
        )}/versions/${validatePathParam('revision', request.revision)}/destroy`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Enable a SecretVersion
   *
   * @param request - The request {@link EnableSecretVersionRequest}
   * @returns A Promise of SecretVersion
   */
  enableSecretVersion = (request: Readonly<EnableSecretVersionRequest>) =>
    this.client.fetch<SecretVersion>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam(
          'secretId',
          request.secretId,
        )}/versions/${validatePathParam('revision', request.revision)}/enable`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Disable a SecretVersion
   *
   * @param request - The request {@link DisableSecretVersionRequest}
   * @returns A Promise of SecretVersion
   */
  disableSecretVersion = (request: Readonly<DisableSecretVersionRequest>) =>
    this.client.fetch<SecretVersion>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam(
          'secretId',
          request.secretId,
        )}/versions/${validatePathParam('revision', request.revision)}/disable`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Access a SecretVersion, returning the sensitive data
   *
   * @param request - The request {@link AccessSecretVersionRequest}
   * @returns A Promise of AccessSecretVersionResponse
   */
  accessSecretVersion = (request: Readonly<AccessSecretVersionRequest>) =>
    this.client.fetch<AccessSecretVersionResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam(
          'secretId',
          request.secretId,
        )}/versions/${validatePathParam('revision', request.revision)}/access`,
      },
      unmarshalAccessSecretVersionResponse,
    )
}
