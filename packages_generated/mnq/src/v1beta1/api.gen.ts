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
  marshalNatsApiCreateNatsAccountRequest,
  marshalNatsApiCreateNatsCredentialsRequest,
  marshalNatsApiUpdateNatsAccountRequest,
  marshalSnsApiActivateSnsRequest,
  marshalSnsApiCreateSnsCredentialsRequest,
  marshalSnsApiDeactivateSnsRequest,
  marshalSnsApiUpdateSnsCredentialsRequest,
  marshalSqsApiActivateSqsRequest,
  marshalSqsApiCreateSqsCredentialsRequest,
  marshalSqsApiDeactivateSqsRequest,
  marshalSqsApiUpdateSqsCredentialsRequest,
  unmarshalListNatsAccountsResponse,
  unmarshalListNatsCredentialsResponse,
  unmarshalListSnsCredentialsResponse,
  unmarshalListSqsCredentialsResponse,
  unmarshalNatsAccount,
  unmarshalNatsCredentials,
  unmarshalSnsCredentials,
  unmarshalSnsInfo,
  unmarshalSqsCredentials,
  unmarshalSqsInfo,
} from './marshalling.gen.js'
import type {
  ListNatsAccountsResponse,
  ListNatsCredentialsResponse,
  ListSnsCredentialsResponse,
  ListSqsCredentialsResponse,
  NatsAccount,
  NatsApiCreateNatsAccountRequest,
  NatsApiCreateNatsCredentialsRequest,
  NatsApiDeleteNatsAccountRequest,
  NatsApiDeleteNatsCredentialsRequest,
  NatsApiGetNatsAccountRequest,
  NatsApiGetNatsCredentialsRequest,
  NatsApiListNatsAccountsRequest,
  NatsApiListNatsCredentialsRequest,
  NatsApiUpdateNatsAccountRequest,
  NatsCredentials,
  SnsApiActivateSnsRequest,
  SnsApiCreateSnsCredentialsRequest,
  SnsApiDeactivateSnsRequest,
  SnsApiDeleteSnsCredentialsRequest,
  SnsApiGetSnsCredentialsRequest,
  SnsApiGetSnsInfoRequest,
  SnsApiListSnsCredentialsRequest,
  SnsApiUpdateSnsCredentialsRequest,
  SnsCredentials,
  SnsInfo,
  SqsApiActivateSqsRequest,
  SqsApiCreateSqsCredentialsRequest,
  SqsApiDeactivateSqsRequest,
  SqsApiDeleteSqsCredentialsRequest,
  SqsApiGetSqsCredentialsRequest,
  SqsApiGetSqsInfoRequest,
  SqsApiListSqsCredentialsRequest,
  SqsApiUpdateSqsCredentialsRequest,
  SqsCredentials,
  SqsInfo,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * NATS API.

This API allows you to manage Scaleway NATS accounts.
 */
export class NatsAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams'],
  })

  /**
   * Create a NATS account. Create a NATS account associated with a Project.
   *
   * @param request - The request {@link NatsApiCreateNatsAccountRequest}
   * @returns A Promise of NatsAccount
   */
  createNatsAccount = (
    request: Readonly<NatsApiCreateNatsAccountRequest> = {},
  ) =>
    this.client.fetch<NatsAccount>(
      {
        body: JSON.stringify(
          marshalNatsApiCreateNatsAccountRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nats-accounts`,
      },
      unmarshalNatsAccount,
    )

  /**
   * Delete a NATS account. Delete a NATS account, specified by its NATS account ID. Note that deleting a NATS account is irreversible, and any credentials, streams, consumer and stored messages belonging to this NATS account will also be deleted.
   *
   * @param request - The request {@link NatsApiDeleteNatsAccountRequest}
   */
  deleteNatsAccount = (request: Readonly<NatsApiDeleteNatsAccountRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nats-accounts/${validatePathParam('natsAccountId', request.natsAccountId)}`,
    })

  /**
   * Update the name of a NATS account. Update the name of a NATS account, specified by its NATS account ID.
   *
   * @param request - The request {@link NatsApiUpdateNatsAccountRequest}
   * @returns A Promise of NatsAccount
   */
  updateNatsAccount = (request: Readonly<NatsApiUpdateNatsAccountRequest>) =>
    this.client.fetch<NatsAccount>(
      {
        body: JSON.stringify(
          marshalNatsApiUpdateNatsAccountRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nats-accounts/${validatePathParam('natsAccountId', request.natsAccountId)}`,
      },
      unmarshalNatsAccount,
    )

  /**
   * Get a NATS account. Retrieve information about an existing NATS account identified by its NATS account ID. Its full details, including name and endpoint, are returned in the response.
   *
   * @param request - The request {@link NatsApiGetNatsAccountRequest}
   * @returns A Promise of NatsAccount
   */
  getNatsAccount = (request: Readonly<NatsApiGetNatsAccountRequest>) =>
    this.client.fetch<NatsAccount>(
      {
        method: 'GET',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nats-accounts/${validatePathParam('natsAccountId', request.natsAccountId)}`,
      },
      unmarshalNatsAccount,
    )

  protected pageOfListNatsAccounts = (
    request: Readonly<NatsApiListNatsAccountsRequest> = {},
  ) =>
    this.client.fetch<ListNatsAccountsResponse>(
      {
        method: 'GET',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nats-accounts`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListNatsAccountsResponse,
    )

  /**
   * List NATS accounts. List all NATS accounts in the specified region, for a Scaleway Organization or Project. By default, the NATS accounts returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link NatsApiListNatsAccountsRequest}
   * @returns A Promise of ListNatsAccountsResponse
   */
  listNatsAccounts = (request: Readonly<NatsApiListNatsAccountsRequest> = {}) =>
    enrichForPagination('natsAccounts', this.pageOfListNatsAccounts, request)

  /**
   * Create NATS credentials. Create a set of credentials for a NATS account, specified by its NATS account ID.
   *
   * @param request - The request {@link NatsApiCreateNatsCredentialsRequest}
   * @returns A Promise of NatsCredentials
   */
  createNatsCredentials = (
    request: Readonly<NatsApiCreateNatsCredentialsRequest>,
  ) =>
    this.client.fetch<NatsCredentials>(
      {
        body: JSON.stringify(
          marshalNatsApiCreateNatsCredentialsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nats-credentials`,
      },
      unmarshalNatsCredentials,
    )

  /**
   * Delete NATS credentials. Delete a set of credentials, specified by their credentials ID. Deleting credentials is irreversible and cannot be undone. The credentials can no longer be used to access the NATS account, and active connections using this credentials will be closed.
   *
   * @param request - The request {@link NatsApiDeleteNatsCredentialsRequest}
   */
  deleteNatsCredentials = (
    request: Readonly<NatsApiDeleteNatsCredentialsRequest>,
  ) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nats-credentials/${validatePathParam('natsCredentialsId', request.natsCredentialsId)}`,
    })

  /**
   * Get NATS credentials. Retrieve an existing set of credentials, identified by the `nats_credentials_id`. The credentials themselves are NOT returned, only their metadata (NATS account ID, credentials name, etc), are returned in the response.
   *
   * @param request - The request {@link NatsApiGetNatsCredentialsRequest}
   * @returns A Promise of NatsCredentials
   */
  getNatsCredentials = (request: Readonly<NatsApiGetNatsCredentialsRequest>) =>
    this.client.fetch<NatsCredentials>(
      {
        method: 'GET',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nats-credentials/${validatePathParam('natsCredentialsId', request.natsCredentialsId)}`,
      },
      unmarshalNatsCredentials,
    )

  protected pageOfListNatsCredentials = (
    request: Readonly<NatsApiListNatsCredentialsRequest> = {},
  ) =>
    this.client.fetch<ListNatsCredentialsResponse>(
      {
        method: 'GET',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nats-credentials`,
        urlParams: urlParams(
          ['nats_account_id', request.natsAccountId],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListNatsCredentialsResponse,
    )

  /**
   * List NATS credentials. List existing credentials in the specified NATS account. The response contains only the metadata for the credentials, not the credentials themselves, which are only returned after a **Create Credentials** call.
   *
   * @param request - The request {@link NatsApiListNatsCredentialsRequest}
   * @returns A Promise of ListNatsCredentialsResponse
   */
  listNatsCredentials = (
    request: Readonly<NatsApiListNatsCredentialsRequest> = {},
  ) =>
    enrichForPagination(
      'natsCredentials',
      this.pageOfListNatsCredentials,
      request,
    )
}

/**
 * Topics and Events API.

This API allows you to manage your Scaleway Topics and Events.
 */
export class SnsAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams'],
  })

  /**
   * Activate Topics and Events. Activate Topics and Events for the specified Project ID. Topics and Events must be activated before any usage. Activating Topics and Events does not trigger any billing, and you can deactivate at any time.
   *
   * @param request - The request {@link SnsApiActivateSnsRequest}
   * @returns A Promise of SnsInfo
   */
  activateSns = (request: Readonly<SnsApiActivateSnsRequest> = {}) =>
    this.client.fetch<SnsInfo>(
      {
        body: JSON.stringify(
          marshalSnsApiActivateSnsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/activate-sns`,
      },
      unmarshalSnsInfo,
    )

  /**
   * Get Topics and Events info. Retrieve the Topics and Events information of the specified Project ID. Informations include the activation status and the Topics and Events API endpoint URL.
   *
   * @param request - The request {@link SnsApiGetSnsInfoRequest}
   * @returns A Promise of SnsInfo
   */
  getSnsInfo = (request: Readonly<SnsApiGetSnsInfoRequest> = {}) =>
    this.client.fetch<SnsInfo>(
      {
        method: 'GET',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sns-info`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalSnsInfo,
    )

  /**
   * Deactivate Topics and Events. Deactivate Topics and Events for the specified Project ID. You must delete all topics and credentials before this call or you need to set the force_delete parameter.
   *
   * @param request - The request {@link SnsApiDeactivateSnsRequest}
   * @returns A Promise of SnsInfo
   */
  deactivateSns = (request: Readonly<SnsApiDeactivateSnsRequest> = {}) =>
    this.client.fetch<SnsInfo>(
      {
        body: JSON.stringify(
          marshalSnsApiDeactivateSnsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deactivate-sns`,
      },
      unmarshalSnsInfo,
    )

  /**
   * Create Topics and Events credentials. Create a set of credentials for Topics and Events, specified by a Project ID. Credentials give the bearer access to topics, and the level of permissions can be defined granularly.
   *
   * @param request - The request {@link SnsApiCreateSnsCredentialsRequest}
   * @returns A Promise of SnsCredentials
   */
  createSnsCredentials = (
    request: Readonly<SnsApiCreateSnsCredentialsRequest> = {},
  ) =>
    this.client.fetch<SnsCredentials>(
      {
        body: JSON.stringify(
          marshalSnsApiCreateSnsCredentialsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sns-credentials`,
      },
      unmarshalSnsCredentials,
    )

  /**
   * Delete Topics and Events credentials. Delete a set of Topics and Events credentials, specified by their credentials ID. Deleting credentials is irreversible and cannot be undone. The credentials can then no longer be used to access Topics and Events.
   *
   * @param request - The request {@link SnsApiDeleteSnsCredentialsRequest}
   */
  deleteSnsCredentials = (
    request: Readonly<SnsApiDeleteSnsCredentialsRequest>,
  ) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sns-credentials/${validatePathParam('snsCredentialsId', request.snsCredentialsId)}`,
    })

  /**
   * Update Topics and Events credentials. Update a set of Topics and Events credentials. You can update the credentials' name, or their permissions.
   *
   * @param request - The request {@link SnsApiUpdateSnsCredentialsRequest}
   * @returns A Promise of SnsCredentials
   */
  updateSnsCredentials = (
    request: Readonly<SnsApiUpdateSnsCredentialsRequest>,
  ) =>
    this.client.fetch<SnsCredentials>(
      {
        body: JSON.stringify(
          marshalSnsApiUpdateSnsCredentialsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sns-credentials/${validatePathParam('snsCredentialsId', request.snsCredentialsId)}`,
      },
      unmarshalSnsCredentials,
    )

  /**
   * Get Topics and Events credentials. Retrieve an existing set of credentials, identified by the `credentials_id`. The credentials themselves, as well as their metadata (name, project ID etc), are returned in the response.
   *
   * @param request - The request {@link SnsApiGetSnsCredentialsRequest}
   * @returns A Promise of SnsCredentials
   */
  getSnsCredentials = (request: Readonly<SnsApiGetSnsCredentialsRequest>) =>
    this.client.fetch<SnsCredentials>(
      {
        method: 'GET',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sns-credentials/${validatePathParam('snsCredentialsId', request.snsCredentialsId)}`,
      },
      unmarshalSnsCredentials,
    )

  protected pageOfListSnsCredentials = (
    request: Readonly<SnsApiListSnsCredentialsRequest> = {},
  ) =>
    this.client.fetch<ListSnsCredentialsResponse>(
      {
        method: 'GET',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sns-credentials`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListSnsCredentialsResponse,
    )

  /**
   * List Topics and Events credentials. List existing Topics and Events credentials in the specified region. The response contains only the metadata for the credentials, not the credentials themselves.
   *
   * @param request - The request {@link SnsApiListSnsCredentialsRequest}
   * @returns A Promise of ListSnsCredentialsResponse
   */
  listSnsCredentials = (
    request: Readonly<SnsApiListSnsCredentialsRequest> = {},
  ) =>
    enrichForPagination(
      'snsCredentials',
      this.pageOfListSnsCredentials,
      request,
    )
}

/**
 * Queues API.

This API allows you to manage your Scaleway Queues.
 */
export class SqsAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams'],
  })

  /**
   * Activate Queues. Activate Queues for the specified Project ID. Queues must be activated before any usage such as creating credentials and queues. Activating Queues does not trigger any billing, and you can deactivate at any time.
   *
   * @param request - The request {@link SqsApiActivateSqsRequest}
   * @returns A Promise of SqsInfo
   */
  activateSqs = (request: Readonly<SqsApiActivateSqsRequest> = {}) =>
    this.client.fetch<SqsInfo>(
      {
        body: JSON.stringify(
          marshalSqsApiActivateSqsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/activate-sqs`,
      },
      unmarshalSqsInfo,
    )

  /**
   * Get Queues info. Retrieve the Queues information of the specified Project ID. Informations include the activation status and the Queues API endpoint URL.
   *
   * @param request - The request {@link SqsApiGetSqsInfoRequest}
   * @returns A Promise of SqsInfo
   */
  getSqsInfo = (request: Readonly<SqsApiGetSqsInfoRequest> = {}) =>
    this.client.fetch<SqsInfo>(
      {
        method: 'GET',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sqs-info`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalSqsInfo,
    )

  /**
   * Deactivate Queues. Deactivate Queues for the specified Project ID. You must delete all queues and credentials before this call or you need to set the force_delete parameter.
   *
   * @param request - The request {@link SqsApiDeactivateSqsRequest}
   * @returns A Promise of SqsInfo
   */
  deactivateSqs = (request: Readonly<SqsApiDeactivateSqsRequest> = {}) =>
    this.client.fetch<SqsInfo>(
      {
        body: JSON.stringify(
          marshalSqsApiDeactivateSqsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deactivate-sqs`,
      },
      unmarshalSqsInfo,
    )

  /**
   * Create Queues credentials. Create a set of credentials for Queues, specified by a Project ID. Credentials give the bearer access to queues, and the level of permissions can be defined granularly.
   *
   * @param request - The request {@link SqsApiCreateSqsCredentialsRequest}
   * @returns A Promise of SqsCredentials
   */
  createSqsCredentials = (
    request: Readonly<SqsApiCreateSqsCredentialsRequest> = {},
  ) =>
    this.client.fetch<SqsCredentials>(
      {
        body: JSON.stringify(
          marshalSqsApiCreateSqsCredentialsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sqs-credentials`,
      },
      unmarshalSqsCredentials,
    )

  /**
   * Delete Queues credentials. Delete a set of Queues credentials, specified by their credentials ID. Deleting credentials is irreversible and cannot be undone. The credentials can then no longer be used to access Queues.
   *
   * @param request - The request {@link SqsApiDeleteSqsCredentialsRequest}
   */
  deleteSqsCredentials = (
    request: Readonly<SqsApiDeleteSqsCredentialsRequest>,
  ) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sqs-credentials/${validatePathParam('sqsCredentialsId', request.sqsCredentialsId)}`,
    })

  /**
   * Update Queues credentials. Update a set of Queues credentials. You can update the credentials' name, or their permissions.
   *
   * @param request - The request {@link SqsApiUpdateSqsCredentialsRequest}
   * @returns A Promise of SqsCredentials
   */
  updateSqsCredentials = (
    request: Readonly<SqsApiUpdateSqsCredentialsRequest>,
  ) =>
    this.client.fetch<SqsCredentials>(
      {
        body: JSON.stringify(
          marshalSqsApiUpdateSqsCredentialsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sqs-credentials/${validatePathParam('sqsCredentialsId', request.sqsCredentialsId)}`,
      },
      unmarshalSqsCredentials,
    )

  /**
   * Get Queues credentials. Retrieve an existing set of credentials, identified by the `credentials_id`. The credentials themselves, as well as their metadata (name, project ID etc), are returned in the response.
   *
   * @param request - The request {@link SqsApiGetSqsCredentialsRequest}
   * @returns A Promise of SqsCredentials
   */
  getSqsCredentials = (request: Readonly<SqsApiGetSqsCredentialsRequest>) =>
    this.client.fetch<SqsCredentials>(
      {
        method: 'GET',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sqs-credentials/${validatePathParam('sqsCredentialsId', request.sqsCredentialsId)}`,
      },
      unmarshalSqsCredentials,
    )

  protected pageOfListSqsCredentials = (
    request: Readonly<SqsApiListSqsCredentialsRequest> = {},
  ) =>
    this.client.fetch<ListSqsCredentialsResponse>(
      {
        method: 'GET',
        path: `/mnq/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/sqs-credentials`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListSqsCredentialsResponse,
    )

  /**
   * List Queues credentials. List existing Queues credentials in the specified region. The response contains only the metadata for the credentials, not the credentials themselves.
   *
   * @param request - The request {@link SqsApiListSqsCredentialsRequest}
   * @returns A Promise of ListSqsCredentialsResponse
   */
  listSqsCredentials = (
    request: Readonly<SqsApiListSqsCredentialsRequest> = {},
  ) =>
    enrichForPagination(
      'sqsCredentials',
      this.pageOfListSqsCredentials,
      request,
    )
}
