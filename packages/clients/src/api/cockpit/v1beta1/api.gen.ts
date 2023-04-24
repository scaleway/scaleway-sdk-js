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
  marshalSelectPlanRequest,
  marshalTriggerTestAlertRequest,
  unmarshalCockpit,
  unmarshalCockpitMetrics,
  unmarshalContactPoint,
  unmarshalGrafanaUser,
  unmarshalListContactPointsResponse,
  unmarshalListGrafanaUsersResponse,
  unmarshalListPlansResponse,
  unmarshalListTokensResponse,
  unmarshalSelectPlanResponse,
  unmarshalToken,
} from './marshalling.gen'
import type {
  ActivateCockpitRequest,
  Cockpit,
  CockpitMetrics,
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
  GetCockpitMetricsRequest,
  GetCockpitRequest,
  GetTokenRequest,
  GrafanaUser,
  ListContactPointsRequest,
  ListContactPointsResponse,
  ListGrafanaUsersRequest,
  ListGrafanaUsersResponse,
  ListPlansRequest,
  ListPlansResponse,
  ListTokensRequest,
  ListTokensResponse,
  ResetCockpitGrafanaRequest,
  ResetGrafanaUserPasswordRequest,
  SelectPlanRequest,
  SelectPlanResponse,
  Token,
  TriggerTestAlertRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Cockpit API.
 *
 * Cockpit API. Cockpit's API allows you to activate your Cockpit on your
 * Projects. Scaleway's Cockpit stores metrics and logs and provides a dedicated
 * Grafana for dashboarding to visualize them.
 */
export class API extends ParentAPI {
  /**
   * Activate a Cockpit. Activate the Cockpit of the specified Project ID.
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
   * Get a Cockpit. Retrieve the Cockpit of the specified Project ID.
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
   * Get Cockpit metrics. Get metrics from your Cockpit with the specified
   * Project ID.
   *
   * @param request - The request {@link GetCockpitMetricsRequest}
   * @returns A Promise of CockpitMetrics
   */
  getCockpitMetrics = (request: Readonly<GetCockpitMetricsRequest> = {}) =>
    this.client.fetch<CockpitMetrics>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/cockpit/metrics`,
        urlParams: urlParams(
          ['end_date', request.endDate],
          ['metric_name', request.metricName],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['start_date', request.startDate],
        ),
      },
      unmarshalCockpitMetrics,
    )

  /**
   * Deactivate a Cockpit. Deactivate the Cockpit of the specified Project ID.
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
   * Reset a Grafana. Reset your Cockpit's Grafana associated with the specified
   * Project ID.
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
   * Create a token. Create a token associated with the specified Project ID.
   *
   * @param request - The request {@link CreateTokenRequest}
   * @returns A Promise of Token
   */
  createToken = (request: Readonly<CreateTokenRequest> = {}) =>
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
   * List tokens. Get a list of tokens associated with the specified Project ID.
   *
   * @param request - The request {@link ListTokensRequest}
   * @returns A Promise of ListTokensResponse
   */
  listTokens = (request: Readonly<ListTokensRequest> = {}) =>
    enrichForPagination('tokens', this.pageOfListTokens, request)

  /**
   * Get a token. Retrieve the token associated with the specified token ID.
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
   * Delete a token. Delete the token associated with the specified token ID.
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
   * Create a contact point. Create a contact point to receive alerts for the
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
   * List contact points. Get a list of contact points for the Cockpit
   * associated with the specified Project ID.
   *
   * @param request - The request {@link ListContactPointsRequest}
   * @returns A Promise of ListContactPointsResponse
   */
  listContactPoints = (request: Readonly<ListContactPointsRequest> = {}) =>
    enrichForPagination('contactPoints', this.pageOfListContactPoints, request)

  /**
   * Delete an alert contact point. Delete a contact point for the default
   * receiver.
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
   * Enable managed alerts. Enable the sending of managed alerts for the
   * specified Project's Cockpit.
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
   * Disable managed alerts. Disable the sending of managed alerts for the
   * specified Project's Cockpit.
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
   * Trigger a test alert. Trigger a test alert to all of the Cockpit's
   * receivers.
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
   * Create a Grafana user. Create a Grafana user for your Cockpit's Grafana
   * instance. Make sure you save the automatically-generated password and the
   * Grafana user ID.
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
   * List Grafana users. Get a list of Grafana users who are able to connect to
   * the Cockpit's Grafana instance.
   *
   * @param request - The request {@link ListGrafanaUsersRequest}
   * @returns A Promise of ListGrafanaUsersResponse
   */
  listGrafanaUsers = (request: Readonly<ListGrafanaUsersRequest> = {}) =>
    enrichForPagination('grafanaUsers', this.pageOfListGrafanaUsers, request)

  /**
   * Delete a Grafana user. Delete a Grafana user from a Grafana instance,
   * specified by the Cockpit's Project ID and the Grafana user ID.
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
   * Reset a Grafana user's password. Reset a Grafana user's password specified
   * by the Cockpit's Project ID and the Grafana user ID.
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

  protected pageOfListPlans = (request: Readonly<ListPlansRequest> = {}) =>
    this.client.fetch<ListPlansResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/plans`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'name_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListPlansResponse,
    )

  /**
   * List pricing plans. Get a list of all pricing plans available.
   *
   * @param request - The request {@link ListPlansRequest}
   * @returns A Promise of ListPlansResponse
   */
  listPlans = (request: Readonly<ListPlansRequest> = {}) =>
    enrichForPagination('plans', this.pageOfListPlans, request)

  /**
   * Select pricing plan. Select your chosen pricing plan for your Cockpit,
   * specifying the Cockpit's Project ID and the pricing plan's ID in the
   * request.
   *
   * @param request - The request {@link SelectPlanRequest}
   * @returns A Promise of SelectPlanResponse
   */
  selectPlan = (request: Readonly<SelectPlanRequest>) =>
    this.client.fetch<SelectPlanResponse>(
      {
        body: JSON.stringify(
          marshalSelectPlanRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1beta1/select-plan`,
      },
      unmarshalSelectPlanResponse,
    )
}
