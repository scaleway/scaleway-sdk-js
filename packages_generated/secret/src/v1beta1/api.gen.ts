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
  marshalAddSecretOwnerRequest,
  marshalCreateSecretRequest,
  marshalCreateSecretVersionRequest,
  marshalUpdateSecretRequest,
  marshalUpdateSecretVersionRequest,
  unmarshalAccessSecretVersionResponse,
  unmarshalBrowseSecretsResponse,
  unmarshalListSecretTypesResponse,
  unmarshalListSecretVersionsResponse,
  unmarshalListSecretsResponse,
  unmarshalListTagsResponse,
  unmarshalSecret,
  unmarshalSecretVersion,
} from './marshalling.gen.js'
import type {
  AccessSecretVersionByPathRequest,
  AccessSecretVersionRequest,
  AccessSecretVersionResponse,
  AddSecretOwnerRequest,
  BrowseSecretsRequest,
  BrowseSecretsResponse,
  CreateSecretRequest,
  CreateSecretVersionRequest,
  DeleteSecretRequest,
  DeleteSecretVersionRequest,
  DisableSecretVersionRequest,
  EnableSecretVersionRequest,
  GetSecretRequest,
  GetSecretVersionRequest,
  ListSecretTypesRequest,
  ListSecretTypesResponse,
  ListSecretVersionsRequest,
  ListSecretVersionsResponse,
  ListSecretsRequest,
  ListSecretsResponse,
  ListTagsRequest,
  ListTagsResponse,
  ProtectSecretRequest,
  RestoreSecretRequest,
  RestoreSecretVersionRequest,
  Secret,
  SecretVersion,
  UnprotectSecretRequest,
  UpdateSecretRequest,
  UpdateSecretVersionRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Secret Manager API.

This API allows you to manage your Secret Manager services, for storing, accessing and sharing sensitive data such as passwords, API keys and certificates.
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
   * Create a secret. Create a secret in a given region specified by the `region` parameter.
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
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets`,
      },
      unmarshalSecret,
    )

  /**
   * Get metadata using the secret's ID. Retrieve the metadata of a secret specified by the `region` and `secret_id` parameters.
   *
   * @param request - The request {@link GetSecretRequest}
   * @returns A Promise of Secret
   */
  getSecret = (request: Readonly<GetSecretRequest>) =>
    this.client.fetch<Secret>(
      {
        method: 'GET',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}`,
      },
      unmarshalSecret,
    )

  /**
   * Update metadata of a secret. Edit a secret's metadata such as name, tag(s), description and ephemeral policy. The secret to update is specified by the `secret_id` and `region` parameters.
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
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}`,
      },
      unmarshalSecret,
    )

  /**
   * Delete a secret. Delete a given secret specified by the `region` and `secret_id` parameters.
   *
   * @param request - The request {@link DeleteSecretRequest}
   */
  deleteSecret = (request: Readonly<DeleteSecretRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}`,
    })

  protected pageOfListSecrets = (request: Readonly<ListSecretsRequest>) =>
    this.client.fetch<ListSecretsResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets`,
        urlParams: urlParams(
          ['ephemeral', request.ephemeral],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['path', request.path],
          ['project_id', request.projectId],
          ['scheduled_for_deletion', request.scheduledForDeletion],
          ['tags', request.tags],
          ['type', request.type],
        ),
      },
      unmarshalListSecretsResponse,
    )

  /**
   * List secrets. Retrieve the list of secrets created within an Organization and/or Project. You must specify either the `organization_id` or the `project_id` and the `region`.
   *
   * @param request - The request {@link ListSecretsRequest}
   * @returns A Promise of ListSecretsResponse
   */
  listSecrets = (request: Readonly<ListSecretsRequest>) =>
    enrichForPagination('secrets', this.pageOfListSecrets, request)

  /**
   * Browse secrets. Retrieve the list of secrets and folders for the given prefix. You must specify either the `organization_id` or the `project_id` and the `region`.
   *
   * @param request - The request {@link BrowseSecretsRequest}
   * @returns A Promise of BrowseSecretsResponse
   */
  browseSecrets = (request: Readonly<BrowseSecretsRequest>) =>
    this.client.fetch<BrowseSecretsResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/browse`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['prefix', request.prefix],
          ['project_id', request.projectId],
          ['tags', request.tags],
          ['type', request.type],
        ),
      },
      unmarshalBrowseSecretsResponse,
    )

  /**
   * Enable secret protection. Enable secret protection for a given secret specified by the `secret_id` parameter. Enabling secret protection means that your secret can be read and modified, but it cannot be deleted.
   *
   * @param request - The request {@link ProtectSecretRequest}
   * @returns A Promise of Secret
   */
  protectSecret = (request: Readonly<ProtectSecretRequest>) =>
    this.client.fetch<Secret>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/protect`,
      },
      unmarshalSecret,
    )

  /**
   * Disable secret protection. Disable secret protection for a given secret specified by the `secret_id` parameter. Disabling secret protection means that your secret can be read, modified and deleted.
   *
   * @param request - The request {@link UnprotectSecretRequest}
   * @returns A Promise of Secret
   */
  unprotectSecret = (request: Readonly<UnprotectSecretRequest>) =>
    this.client.fetch<Secret>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/unprotect`,
      },
      unmarshalSecret,
    )

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
      path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/add-owner`,
    })

  /**
   * Create a version. Create a version of a given secret specified by the `region` and `secret_id` parameters.
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
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/versions`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Get metadata of a secret's version using the secret's ID. Retrieve the metadata of a secret's given version specified by the `region`, `secret_id` and `revision` parameters.
   *
   * @param request - The request {@link GetSecretVersionRequest}
   * @returns A Promise of SecretVersion
   */
  getSecretVersion = (request: Readonly<GetSecretVersionRequest>) =>
    this.client.fetch<SecretVersion>(
      {
        method: 'GET',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/versions/${validatePathParam('revision', request.revision)}`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Update metadata of a version. Edit the metadata of a secret's given version, specified by the `region`, `secret_id` and `revision` parameters.
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
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/versions/${validatePathParam('revision', request.revision)}`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Delete a version. Delete a secret's version and the sensitive data contained in it. Deleting a version is permanent and cannot be undone.
   *
   * @param request - The request {@link DeleteSecretVersionRequest}
   */
  deleteSecretVersion = (request: Readonly<DeleteSecretVersionRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/versions/${validatePathParam('revision', request.revision)}`,
    })

  protected pageOfListSecretVersions = (
    request: Readonly<ListSecretVersionsRequest>,
  ) =>
    this.client.fetch<ListSecretVersionsResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/versions`,
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
   * List versions of a secret using the secret's ID. Retrieve the list of a given secret's versions specified by the `secret_id` and `region` parameters.
   *
   * @param request - The request {@link ListSecretVersionsRequest}
   * @returns A Promise of ListSecretVersionsResponse
   */
  listSecretVersions = (request: Readonly<ListSecretVersionsRequest>) =>
    enrichForPagination('versions', this.pageOfListSecretVersions, request)

  /**
   * Access a secret's version using the secret's ID. Access sensitive data in a secret's version specified by the `region`, `secret_id` and `revision` parameters.
   *
   * @param request - The request {@link AccessSecretVersionRequest}
   * @returns A Promise of AccessSecretVersionResponse
   */
  accessSecretVersion = (request: Readonly<AccessSecretVersionRequest>) =>
    this.client.fetch<AccessSecretVersionResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/versions/${validatePathParam('revision', request.revision)}/access`,
      },
      unmarshalAccessSecretVersionResponse,
    )

  /**
   * Access a secret's version using the secret's name and path. Access sensitive data in a secret's version specified by the `region`, `secret_name`, `secret_path` and `revision` parameters.
   *
   * @param request - The request {@link AccessSecretVersionByPathRequest}
   * @returns A Promise of AccessSecretVersionResponse
   */
  accessSecretVersionByPath = (
    request: Readonly<AccessSecretVersionByPathRequest>,
  ) =>
    this.client.fetch<AccessSecretVersionResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets-by-path/versions/${validatePathParam('revision', request.revision)}/access`,
        urlParams: urlParams(
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['secret_name', request.secretName],
          ['secret_path', request.secretPath],
        ),
      },
      unmarshalAccessSecretVersionResponse,
    )

  /**
   * Enable a version. Make a specific version accessible. You must specify the `region`, `secret_id` and `revision` parameters.
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
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/versions/${validatePathParam('revision', request.revision)}/enable`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Disable a version. Make a specific version inaccessible. You must specify the `region`, `secret_id` and `revision` parameters.
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
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/versions/${validatePathParam('revision', request.revision)}/disable`,
      },
      unmarshalSecretVersion,
    )

  protected pageOfListTags = (request: Readonly<ListTagsRequest> = {}) =>
    this.client.fetch<ListTagsResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tags`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalListTagsResponse,
    )

  /**
   * List tags. List all tags associated with secrets within a given Project.
   *
   * @param request - The request {@link ListTagsRequest}
   * @returns A Promise of ListTagsResponse
   */
  listTags = (request: Readonly<ListTagsRequest> = {}) =>
    enrichForPagination('tags', this.pageOfListTags, request)

  protected pageOfListSecretTypes = (
    request: Readonly<ListSecretTypesRequest> = {},
  ) =>
    this.client.fetch<ListSecretTypesResponse>(
      {
        method: 'GET',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secret-types`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalListSecretTypesResponse,
    )

  /**
   * List secret types. List all secret types created within a given Project.
   *
   * @param request - The request {@link ListSecretTypesRequest}
   * @returns A Promise of ListSecretTypesResponse
   */
  listSecretTypes = (request: Readonly<ListSecretTypesRequest> = {}) =>
    enrichForPagination('types', this.pageOfListSecretTypes, request)

  /**
   * Restore a version. Restore a secret's version specified by the `region`, `secret_id` and `revision` parameters.
   *
   * @param request - The request {@link RestoreSecretVersionRequest}
   * @returns A Promise of SecretVersion
   */
  restoreSecretVersion = (request: Readonly<RestoreSecretVersionRequest>) =>
    this.client.fetch<SecretVersion>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/versions/${validatePathParam('revision', request.revision)}/restore`,
      },
      unmarshalSecretVersion,
    )

  /**
   * Restore a secret. Restore a secret and all its versions scheduled for deletion specified by the `region` and `secret_id` parameters.
   *
   * @param request - The request {@link RestoreSecretRequest}
   * @returns A Promise of Secret
   */
  restoreSecret = (request: Readonly<RestoreSecretRequest>) =>
    this.client.fetch<Secret>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/secret-manager/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/secrets/${validatePathParam('secretId', request.secretId)}/restore`,
      },
      unmarshalSecret,
    )
}
