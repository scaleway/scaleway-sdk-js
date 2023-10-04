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
 * Messaging and Queuing API.
 *
 * This API allows you to manage Scaleway Messaging and Queueing brokers.
 */
export class API extends ParentAPI {
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
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListNamespacesResponse,
    )

  /**
   * List namespaces. List all Messaging and Queuing namespaces in the specified
   * region, for a Scaleway Organization or Project. By default, the namespaces
   * returned in the list are ordered by creation date in ascending order,
   * though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListNamespacesRequest}
   * @returns A Promise of ListNamespacesResponse
   */
  listNamespaces = (request: Readonly<ListNamespacesRequest> = {}) =>
    enrichForPagination('namespaces', this.pageOfListNamespaces, request)

  /**
   * Create a namespace. Create a Messaging and Queuing namespace, set to the
   * desired protocol.
   *
   * @param request - The request {@link CreateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  createNamespace = (request: Readonly<CreateNamespaceRequest> = {}) =>
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
   * Update the name of a namespace. Update the name of a Messaging and Queuing
   * namespace, specified by its namespace ID.
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
   * Get a namespace. Retrieve information about an existing Messaging and
   * Queuing namespace, identified by its namespace ID. Its full details,
   * including name, endpoint and protocol, are returned in the response.
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
   * Delete a namespace. Delete a Messaging and Queuing namespace, specified by
   * its namespace ID. Note that deleting a namespace is irreversible, and any
   * URLs, credentials and queued messages belonging to this namespace will also
   * be deleted.
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
   * Create credentials. Create a set of credentials for a Messaging and Queuing
   * namespace, specified by its namespace ID. If creating credentials for a
   * NATS namespace, the `permissions` object must not be included in the
   * request. If creating credentials for an SQS/SNS namespace, the
   * `permissions` object is required, with all three of its child attributes.
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
   * Delete credentials. Delete a set of credentials, specified by their
   * credential ID. Deleting credentials is irreversible and cannot be undone.
   * The credentials can no longer be used to access the namespace.
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
          ['order_by', request.orderBy],
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
   * List credentials. List existing credentials in the specified region. The
   * response contains only the metadata for the credentials, not the
   * credentials themselves (for this, use **Get Credentials**).
   *
   * @param request - The request {@link ListCredentialsRequest}
   * @returns A Promise of ListCredentialsResponse
   */
  listCredentials = (request: Readonly<ListCredentialsRequest> = {}) =>
    enrichForPagination('credentials', this.pageOfListCredentials, request)

  /**
   * Update credentials. Update a set of credentials. You can update the
   * credentials' name, or (in the case of SQS/SNS credentials only) their
   * permissions. To update the name of NATS credentials, do not include the
   * `permissions` object in your request.
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
   * Get credentials. Retrieve an existing set of credentials, identified by the
   * `credential_id`. The credentials themselves, as well as their metadata
   * (protocol, namespace ID etc), are returned in the response.
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
