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
  marshalAddSecretOwnerRequest,
  marshalCreateSecretRequest,
  marshalCreateSecretVersionRequest,
  marshalGeneratePasswordRequest,
  marshalUpdateSecretRequest,
  marshalUpdateSecretVersionRequest,
  unmarshalAccessSecretVersionResponse,
  unmarshalListSecretVersionsResponse,
  unmarshalListSecretsResponse,
  unmarshalListTagsResponse,
  unmarshalSecret,
  unmarshalSecretVersion,
} from './marshalling.gen'
import type {
  AccessSecretVersionByNameRequest,
  AccessSecretVersionRequest,
  AccessSecretVersionResponse,
  AddSecretOwnerRequest,
  CreateSecretRequest,
  CreateSecretVersionRequest,
  DeleteSecretRequest,
  DestroySecretVersionRequest,
  DisableSecretVersionRequest,
  EnableSecretVersionRequest,
  GeneratePasswordRequest,
  GetSecretByNameRequest,
  GetSecretRequest,
  GetSecretVersionByNameRequest,
  GetSecretVersionRequest,
  ListSecretVersionsByNameRequest,
  ListSecretVersionsRequest,
  ListSecretVersionsResponse,
  ListSecretsRequest,
  ListSecretsResponse,
  ListTagsRequest,
  ListTagsResponse,
  Secret,
  SecretVersion,
  UpdateSecretRequest,
  UpdateSecretVersionRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Secret Manager API.
 *
 * Secret Manager API. This API allows you to conveniently store, access and
 * share sensitive data.
 */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par']

  /**
   * Create a secret. You must sepcify the `region` to create a secret.
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
   * Get metadata using the secret's name. Retrieve the metadata of a secret
   * specified by the `region` and the `secret_name` parameters.
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
   * Get metadata using the secret's ID. Retrieve the metadata of a secret
   * specified by the `region`, `secret_id` and `project_id` parameters.
   *
   * @param request - The request {@link GetSecretByNameRequest}
   * @returns A Promise of Secret
   */
  getSecretByName = (request: Readonly<GetSecretByNameRequest>) =>
    this.client.fetch<Secret>(
      {
        method: 'GET',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets-by-name/${validatePathParam(
          'secretName',
          request.secretName,
        )}`,
        urlParams: urlParams(['project_id', request.projectId]),
      },
      unmarshalSecret,
    )

  /**
   * Update metadata of a secret. Edit a secret's metadata such as name, tag(s)
   * and description. The secret to update is specified by the `secret_id` and
   * `region` parameters.
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
          ['is_managed', request.isManaged],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'name_asc'],
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
      unmarshalListSecretsResponse,
    )

  /**
   * List secrets. Retrieve the list of secrets created within an Organization
   * and/or Project. You must specify either the `organization_id` or the
   * `project_id` and the `region`.
   *
   * @param request - The request {@link ListSecretsRequest}
   * @returns A Promise of ListSecretsResponse
   */
  listSecrets = (request: Readonly<ListSecretsRequest> = {}) =>
    enrichForPagination('secrets', this.pageOfListSecrets, request)

  /**
   * Delete a secret. Delete a given secret specified by the `region` and
   * `secret_id` parameters.
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
   * Allow a product to use the secret.
   *
   * @param request - The request {@link AddSecretOwnerRequest}
   */
  addSecretOwner = (request: Readonly<AddSecretOwnerRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalAddSecretOwnerRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/secret-manager/v1alpha1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/secrets/${validatePathParam('secretId', request.secretId)}/add-owner`,
    })

  /**
   * Create a version. Create a version of a given secret specified by the
   * `region` and `secret_id` parameters.
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
   * Generate a password in a new version. Generate a password for the given
   * secret specified by the `region` and `secret_id` parameters. This will also
   * create a new version of the secret that will store the password.
   *
   * @param request - The request {@link GeneratePasswordRequest}
   * @returns A Promise of SecretVersion
   */
  generatePassword = (request: Readonly<GeneratePasswordRequest>) =>
    this.client.fetch<SecretVersion>(
      {
        body: JSON.stringify(
          marshalGeneratePasswordRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets/${validatePathParam(
          'secretId',
          request.secretId,
        )}/generate-password`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Get metadata of a secret's version using the secret's ID. Retrieve the
   * metadata of a secret's given version specified by the `region`, `secret_id`
   * and `revision` parameters.
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
   * Get metadata of a secret's version using the secret's name. Retrieve the
   * metadata of a secret's given version specified by the `region`,
   * `secret_name`, `revision` and `project_id` parameters.
   *
   * @param request - The request {@link GetSecretVersionByNameRequest}
   * @returns A Promise of SecretVersion
   */
  getSecretVersionByName = (request: Readonly<GetSecretVersionByNameRequest>) =>
    this.client.fetch<SecretVersion>(
      {
        method: 'GET',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets-by-name/${validatePathParam(
          'secretName',
          request.secretName,
        )}/versions/${validatePathParam('revision', request.revision)}`,
        urlParams: urlParams(['project_id', request.projectId]),
      },
      unmarshalSecretVersion,
    )

  /**
   * Update metadata of a version. Edit the metadata of a secret's given
   * version, specified by the `region`, `secret_id` and `revision` parameters.
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
          ['status', request.status],
        ),
      },
      unmarshalListSecretVersionsResponse,
    )

  /**
   * List versions of a secret using the secret's ID. Retrieve the list of a
   * given secret's versions specified by the `secret_id` and `region`
   * parameters.
   *
   * @param request - The request {@link ListSecretVersionsRequest}
   * @returns A Promise of ListSecretVersionsResponse
   */
  listSecretVersions = (request: Readonly<ListSecretVersionsRequest>) =>
    enrichForPagination('versions', this.pageOfListSecretVersions, request)

  protected pageOfListSecretVersionsByName = (
    request: Readonly<ListSecretVersionsByNameRequest>,
  ) =>
    this.client.fetch<ListSecretVersionsResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets-by-name/${validatePathParam(
          'secretName',
          request.secretName,
        )}/versions`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['status', request.status],
        ),
      },
      unmarshalListSecretVersionsResponse,
    )

  /**
   * List versions of a secret using the secret's name. Retrieve the list of a
   * given secret's versions specified by the `secret_name`,`region` and
   * `project_id` parameters.
   *
   * @param request - The request {@link ListSecretVersionsByNameRequest}
   * @returns A Promise of ListSecretVersionsResponse
   */
  listSecretVersionsByName = (
    request: Readonly<ListSecretVersionsByNameRequest>,
  ) =>
    enrichForPagination(
      'versions',
      this.pageOfListSecretVersionsByName,
      request,
    )

  /**
   * Enable a version. Make a specific version accessible. You must specify the
   * `region`, `secret_id` and `revision` parameters.
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
   * Disable a version. Make a specific version inaccessible. You must specify
   * the `region`, `secret_id` and `revision` parameters.
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
   * Access a secret's version using the secret's ID. Access sensitive data in a
   * secret's version specified by the `region`, `secret_id` and `revision`
   * parameters.
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

  /**
   * Access a secret's version using the secret's name. Access sensitive data in
   * a secret's version specified by the `region`, `secret_name`, `revision` and
   * `project_id` parameters.
   *
   * @param request - The request {@link AccessSecretVersionByNameRequest}
   * @returns A Promise of AccessSecretVersionResponse
   */
  accessSecretVersionByName = (
    request: Readonly<AccessSecretVersionByNameRequest>,
  ) =>
    this.client.fetch<AccessSecretVersionResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/secrets-by-name/${validatePathParam(
          'secretName',
          request.secretName,
        )}/versions/${validatePathParam('revision', request.revision)}/access`,
        urlParams: urlParams(['project_id', request.projectId]),
      },
      unmarshalAccessSecretVersionResponse,
    )

  /**
   * Delete a version. Delete a secret's version and the sensitive data
   * contained in it. Deleting a version is permanent and cannot be undone.
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

  protected pageOfListTags = (request: Readonly<ListTagsRequest> = {}) =>
    this.client.fetch<ListTagsResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/tags`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListTagsResponse,
    )

  /**
   * List tags. List all tags associated to secrets in one or several Projects.
   *
   * @param request - The request {@link ListTagsRequest}
   * @returns A Promise of ListTagsResponse
   */
  listTags = (request: Readonly<ListTagsRequest> = {}) =>
    enrichForPagination('tags', this.pageOfListTags, request)
}
