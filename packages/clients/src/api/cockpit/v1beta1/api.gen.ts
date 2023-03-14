// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { WaitForOptions } from '../../../bridge'
import { COCKPIT_TRANSIENT_STATUSES } from './content.gen'
import {
  marshalActivateCockpitRequest,
  marshalCreateContactPointRequest,
  marshalCreateGrafanaUserRequest,
  marshalCreateTokenRequest,
  marshalDeactivateCockpitRequest,
  marshalDeleteContactPointRequest,
  marshalDeleteGrafanaUserRequest,
  marshalDisableManagedAlertsRequest,
  marshalEnableManagedAlertsRequest,
  marshalResetCockpitGrafanaRequest,
  marshalResetGrafanaUserPasswordRequest,
  marshalTriggerTestAlertRequest,
  unmarshalCockpit,
  unmarshalContactPoint,
  unmarshalGrafanaUser,
  unmarshalListContactPointsResponse,
  unmarshalListGrafanaUsersResponse,
  unmarshalListTokensResponse,
  unmarshalToken,
} from './marshalling.gen'
import type {
  ActivateCockpitRequest,
  Cockpit,
  ContactPoint,
  CreateContactPointRequest,
  CreateGrafanaUserRequest,
  CreateTokenRequest,
  DeactivateCockpitRequest,
  DeleteContactPointRequest,
  DeleteGrafanaUserRequest,
  DeleteTokenRequest,
  DisableManagedAlertsRequest,
  EnableManagedAlertsRequest,
  GetCockpitRequest,
  GetTokenRequest,
  GrafanaUser,
  ListContactPointsRequest,
  ListContactPointsResponse,
  ListGrafanaUsersRequest,
  ListGrafanaUsersResponse,
  ListTokensRequest,
  ListTokensResponse,
  ResetCockpitGrafanaRequest,
  ResetGrafanaUserPasswordRequest,
  Token,
  TriggerTestAlertRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Cockpit API.
 *
 * This API allows to manage Cockpits. Cockpit API.
 */
export class API extends ParentAPI {
  /**
   * Activate a cockpit. Activate a cockpit associated with the given project
   * ID.
   *
   * @param request - The request {@link ActivateCockpitRequest}
   * @returns A Promise of Cockpit
   */
  activateCockpit = (request: Readonly<ActivateCockpitRequest> = {}) =>
    this.client.fetch<Cockpit>(
      {
        body: JSON.stringify(
          marshalActivateCockpitRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1beta1/activate`,
      },
      unmarshalCockpit,
    )

  /**
   * Get cockpit. Get the cockpit associated with the given project ID.
   *
   * @param request - The request {@link GetCockpitRequest}
   * @returns A Promise of Cockpit
   */
  getCockpit = (request: Readonly<GetCockpitRequest> = {}) =>
    this.client.fetch<Cockpit>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/cockpit`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalCockpit,
    )

  /**
   * Waits for {@link Cockpit} to be in a final state.
   *
   * @param request - The request {@link GetCockpitRequest}
   * @param options - The waiting options
   * @returns A Promise of Cockpit
   */
  waitForCockpit = (
    request: Readonly<GetCockpitRequest> = {},
    options?: Readonly<WaitForOptions<Cockpit>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!COCKPIT_TRANSIENT_STATUSES.includes(res.status))),
      this.getCockpit,
      request,
      options,
    )

  /**
   * Deactivate a cockpit. Deactivate a cockpit associated with the given
   * project ID.
   *
   * @param request - The request {@link DeactivateCockpitRequest}
   * @returns A Promise of Cockpit
   */
  deactivateCockpit = (request: Readonly<DeactivateCockpitRequest> = {}) =>
    this.client.fetch<Cockpit>(
      {
        body: JSON.stringify(
          marshalDeactivateCockpitRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1beta1/deactivate`,
      },
      unmarshalCockpit,
    )

  /**
   * Reset Grafana. Reset the Grafana of your cockpit associated with the given
   * project ID.
   *
   * @param request - The request {@link ResetCockpitGrafanaRequest}
   * @returns A Promise of Cockpit
   */
  resetCockpitGrafana = (request: Readonly<ResetCockpitGrafanaRequest> = {}) =>
    this.client.fetch<Cockpit>(
      {
        body: JSON.stringify(
          marshalResetCockpitGrafanaRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1beta1/reset-grafana`,
      },
      unmarshalCockpit,
    )

  /**
   * Create a token. Create a token associated with the given project ID.
   *
   * @param request - The request {@link CreateTokenRequest}
   * @returns A Promise of Token
   */
  createToken = (request: Readonly<CreateTokenRequest>) =>
    this.client.fetch<Token>(
      {
        body: JSON.stringify(
          marshalCreateTokenRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1beta1/tokens`,
      },
      unmarshalToken,
    )

  protected pageOfListTokens = (request: Readonly<ListTokensRequest> = {}) =>
    this.client.fetch<ListTokensResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/tokens`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
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
      unmarshalListTokensResponse,
    )

  /**
   * List tokens. List tokens associated with the given project ID.
   *
   * @param request - The request {@link ListTokensRequest}
   * @returns A Promise of ListTokensResponse
   */
  listTokens = (request: Readonly<ListTokensRequest> = {}) =>
    enrichForPagination('tokens', this.pageOfListTokens, request)

  /**
   * Get token. Get the token associated with the given ID.
   *
   * @param request - The request {@link GetTokenRequest}
   * @returns A Promise of Token
   */
  getToken = (request: Readonly<GetTokenRequest>) =>
    this.client.fetch<Token>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/tokens/${validatePathParam(
          'tokenId',
          request.tokenId,
        )}`,
      },
      unmarshalToken,
    )

  /**
   * Delete token. Delete the token associated with the given ID.
   *
   * @param request - The request {@link DeleteTokenRequest}
   */
  deleteToken = (request: Readonly<DeleteTokenRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/cockpit/v1beta1/tokens/${validatePathParam(
        'tokenId',
        request.tokenId,
      )}`,
    })

  /**
   * Create an alert contact point. Create an alert contact point for the
   * default receiver.
   *
   * @param request - The request {@link CreateContactPointRequest}
   * @returns A Promise of ContactPoint
   */
  createContactPoint = (request: Readonly<CreateContactPointRequest> = {}) =>
    this.client.fetch<ContactPoint>(
      {
        body: JSON.stringify(
          marshalCreateContactPointRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1beta1/contact-points`,
      },
      unmarshalContactPoint,
    )

  protected pageOfListContactPoints = (
    request: Readonly<ListContactPointsRequest> = {},
  ) =>
    this.client.fetch<ListContactPointsResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/contact-points`,
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
      unmarshalListContactPointsResponse,
    )

  /**
   * List alert contact points. List alert contact points associated with the
   * given cockpit ID.
   *
   * @param request - The request {@link ListContactPointsRequest}
   * @returns A Promise of ListContactPointsResponse
   */
  listContactPoints = (request: Readonly<ListContactPointsRequest> = {}) =>
    enrichForPagination('contactPoints', this.pageOfListContactPoints, request)

  /**
   * Delete an alert contact point. Delete an alert contact point for the
   * default receiver.
   *
   * @param request - The request {@link DeleteContactPointRequest}
   */
  deleteContactPoint = (request: Readonly<DeleteContactPointRequest> = {}) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalDeleteContactPointRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/cockpit/v1beta1/delete-contact-point`,
    })

  /**
   * Enable managed alerts.
   *
   * @param request - The request {@link EnableManagedAlertsRequest}
   */
  enableManagedAlerts = (request: Readonly<EnableManagedAlertsRequest> = {}) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalEnableManagedAlertsRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/cockpit/v1beta1/enable-managed-alerts`,
    })

  /**
   * Disable managed alerts.
   *
   * @param request - The request {@link DisableManagedAlertsRequest}
   */
  disableManagedAlerts = (
    request: Readonly<DisableManagedAlertsRequest> = {},
  ) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalDisableManagedAlertsRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/cockpit/v1beta1/disable-managed-alerts`,
    })

  /**
   * Trigger a test alert. Trigger a test alert to all receivers.
   *
   * @param request - The request {@link TriggerTestAlertRequest}
   */
  triggerTestAlert = (request: Readonly<TriggerTestAlertRequest> = {}) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalTriggerTestAlertRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/cockpit/v1beta1/trigger-test-alert`,
    })

  /**
   * Create a grafana user. Create a grafana user for your grafana instance.
   *
   * @param request - The request {@link CreateGrafanaUserRequest}
   * @returns A Promise of GrafanaUser
   */
  createGrafanaUser = (request: Readonly<CreateGrafanaUserRequest>) =>
    this.client.fetch<GrafanaUser>(
      {
        body: JSON.stringify(
          marshalCreateGrafanaUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1beta1/grafana-users`,
      },
      unmarshalGrafanaUser,
    )

  protected pageOfListGrafanaUsers = (
    request: Readonly<ListGrafanaUsersRequest> = {},
  ) =>
    this.client.fetch<ListGrafanaUsersResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/grafana-users`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'login_asc'],
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
      unmarshalListGrafanaUsersResponse,
    )

  /**
   * List grafana users. List grafana users who are able to connect to your
   * grafana instance.
   *
   * @param request - The request {@link ListGrafanaUsersRequest}
   * @returns A Promise of ListGrafanaUsersResponse
   */
  listGrafanaUsers = (request: Readonly<ListGrafanaUsersRequest> = {}) =>
    enrichForPagination('grafanaUsers', this.pageOfListGrafanaUsers, request)

  /**
   * Delete a grafana user. Delete a grafana user from your grafana instance.
   *
   * @param request - The request {@link DeleteGrafanaUserRequest}
   */
  deleteGrafanaUser = (request: Readonly<DeleteGrafanaUserRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalDeleteGrafanaUserRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/cockpit/v1beta1/grafana-users/${validatePathParam(
        'grafanaUserId',
        request.grafanaUserId,
      )}/delete`,
    })

  /**
   * Reset Grafana user password. Reset the Grafana user password from your
   * grafana instance.
   *
   * @param request - The request {@link ResetGrafanaUserPasswordRequest}
   * @returns A Promise of GrafanaUser
   */
  resetGrafanaUserPassword = (
    request: Readonly<ResetGrafanaUserPasswordRequest>,
  ) =>
    this.client.fetch<GrafanaUser>(
      {
        body: JSON.stringify(
          marshalResetGrafanaUserPasswordRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1beta1/grafana-users/${validatePathParam(
          'grafanaUserId',
          request.grafanaUserId,
        )}/reset-password`,
      },
      unmarshalGrafanaUser,
    )
}
