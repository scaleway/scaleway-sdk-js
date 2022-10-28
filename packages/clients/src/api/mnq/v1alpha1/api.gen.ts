// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import type { Region } from '../../../bridge'
import {
  marshalCreateCredentialRequest,
  marshalCreateNamespaceRequest,
  marshalUpdateCredentialRequest,
  marshalUpdateNamespaceRequest,
  unmarshalCredential,
  unmarshalListCredentialsResponse,
  unmarshalListNamespacesResponse,
  unmarshalNamespace,
} from './marshalling.gen'
import type {
  CreateCredentialRequest,
  CreateNamespaceRequest,
  Credential,
  DeleteCredentialRequest,
  DeleteNamespaceRequest,
  GetCredentialRequest,
  GetNamespaceRequest,
  ListCredentialsRequest,
  ListCredentialsResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  Namespace,
  UpdateCredentialRequest,
  UpdateNamespaceRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * MnQ API (beta).
 *
 * This API allows you to manage Messaging or Queueing brokers.
 */
export class MnqV1Alpha1GenAPI extends API {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par']

  protected pageOfListNamespaces = (
    request: Readonly<ListNamespacesRequest> = {},
  ) =>
    this.client.fetch<ListNamespacesResponse>(
      {
        method: 'GET',
        path: `/mnq/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
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
        ),
      },
      unmarshalListNamespacesResponse,
    )

  /**
   * List namespaces
   *
   * @param request - The request {@link ListNamespacesRequest}
   * @returns A Promise of ListNamespacesResponse
   */
  listNamespaces = (request: Readonly<ListNamespacesRequest> = {}) =>
    enrichForPagination('namespaces', this.pageOfListNamespaces, request)

  /**
   * Create a namespace
   *
   * @param request - The request {@link CreateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  createNamespace = (request: Readonly<CreateNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        body: JSON.stringify(
          marshalCreateNamespaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mnq/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces`,
      },
      unmarshalNamespace,
    )

  /**
   * Update the name of a namespace
   *
   * @param request - The request {@link UpdateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  updateNamespace = (request: Readonly<UpdateNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        body: JSON.stringify(
          marshalUpdateNamespaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/mnq/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces`,
      },
      unmarshalNamespace,
    )

  /**
   * Get a namespace
   *
   * @param request - The request {@link GetNamespaceRequest}
   * @returns A Promise of Namespace
   */
  getNamespace = (request: Readonly<GetNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'GET',
        path: `/mnq/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  /**
   * Delete a namespace
   *
   * @param request - The request {@link DeleteNamespaceRequest}
   */
  deleteNamespace = (request: Readonly<DeleteNamespaceRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/mnq/v1alpha1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
    })

  /**
   * Create a set of credentials for a specific namespace.
   *
   * @param request - The request {@link CreateCredentialRequest}
   * @returns A Promise of Credential
   */
  createCredential = (request: Readonly<CreateCredentialRequest>) =>
    this.client.fetch<Credential>(
      {
        body: JSON.stringify(
          marshalCreateCredentialRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mnq/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/credentials`,
      },
      unmarshalCredential,
    )

  /**
   * Delete credentials
   *
   * @param request - The request {@link DeleteCredentialRequest}
   */
  deleteCredential = (request: Readonly<DeleteCredentialRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/mnq/v1alpha1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/credentials/${validatePathParam(
        'credentialId',
        request.credentialId,
      )}`,
    })

  protected pageOfListCredentials = (
    request: Readonly<ListCredentialsRequest> = {},
  ) =>
    this.client.fetch<ListCredentialsResponse>(
      {
        method: 'GET',
        path: `/mnq/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/credentials`,
        urlParams: urlParams(
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy ?? 'id_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListCredentialsResponse,
    )

  /**
   * List credentials
   *
   * @param request - The request {@link ListCredentialsRequest}
   * @returns A Promise of ListCredentialsResponse
   */
  listCredentials = (request: Readonly<ListCredentialsRequest> = {}) =>
    enrichForPagination('credentials', this.pageOfListCredentials, request)

  /**
   * Update a set of credentials.
   *
   * @param request - The request {@link UpdateCredentialRequest}
   * @returns A Promise of Credential
   */
  updateCredential = (request: Readonly<UpdateCredentialRequest>) =>
    this.client.fetch<Credential>(
      {
        body: JSON.stringify(
          marshalUpdateCredentialRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/mnq/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/credentials/${validatePathParam(
          'credentialId',
          request.credentialId,
        )}`,
      },
      unmarshalCredential,
    )

  /**
   * Get a set of credentials
   *
   * @param request - The request {@link GetCredentialRequest}
   * @returns A Promise of Credential
   */
  getCredential = (request: Readonly<GetCredentialRequest>) =>
    this.client.fetch<Credential>(
      {
        method: 'GET',
        path: `/mnq/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/credentials/${validatePathParam(
          'credentialId',
          request.credentialId,
        )}`,
      },
      unmarshalCredential,
    )
}
