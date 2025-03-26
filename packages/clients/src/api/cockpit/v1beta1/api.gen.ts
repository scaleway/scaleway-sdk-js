// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import type { WaitForOptions } from '@scaleway/sdk-client'
import { COCKPIT_TRANSIENT_STATUSES } from './content.gen'
import {
  marshalActivateCockpitRequest,
  marshalCreateContactPointRequest,
  marshalCreateDatasourceRequest,
  marshalCreateGrafanaUserRequest,
  marshalCreateTokenRequest,
  marshalDeactivateCockpitRequest,
  marshalDeleteContactPointRequest,
  marshalDeleteGrafanaUserRequest,
  marshalDisableManagedAlertsRequest,
  marshalEnableManagedAlertsRequest,
  marshalResetGrafanaUserPasswordRequest,
  marshalSelectPlanRequest,
  marshalTriggerTestAlertRequest,
  unmarshalCockpit,
  unmarshalCockpitMetrics,
  unmarshalContactPoint,
  unmarshalDatasource,
  unmarshalGrafanaProductDashboard,
  unmarshalGrafanaUser,
  unmarshalListContactPointsResponse,
  unmarshalListDatasourcesResponse,
  unmarshalListGrafanaProductDashboardsResponse,
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
  CreateDatasourceRequest,
  CreateGrafanaUserRequest,
  CreateTokenRequest,
  Datasource,
  DeactivateCockpitRequest,
  DeleteContactPointRequest,
  DeleteDatasourceRequest,
  DeleteGrafanaUserRequest,
  DeleteTokenRequest,
  DisableManagedAlertsRequest,
  EnableManagedAlertsRequest,
  GetCockpitMetricsRequest,
  GetCockpitRequest,
  GetGrafanaProductDashboardRequest,
  GetTokenRequest,
  GrafanaProductDashboard,
  GrafanaUser,
  ListContactPointsRequest,
  ListContactPointsResponse,
  ListDatasourcesRequest,
  ListDatasourcesResponse,
  ListGrafanaProductDashboardsRequest,
  ListGrafanaProductDashboardsResponse,
  ListGrafanaUsersRequest,
  ListGrafanaUsersResponse,
  ListPlansRequest,
  ListPlansResponse,
  ListTokensRequest,
  ListTokensResponse,
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
 * This API allows you to manage your Scaleway Cockpit, for storing and
 * visualizing metrics and logs.
 */
export class API extends ParentAPI {
  /**
   * Activate the Cockpit of a given Project specified by the Project ID.
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
   * Retrieve the Cockpit of a given Project specified by the Project ID.
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
   * Retrieve metrics from your Cockpit specified by the ID of the Project the
   * Cockpit belongs to.
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
   * Deactivate the Cockpit of a given Project specified by the Project ID.
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
   * Create a data source for a given Project specified by the Project ID and
   * the data source type.
   *
   * @param request - The request {@link CreateDatasourceRequest}
   * @returns A Promise of Datasource
   */
  createDatasource = (request: Readonly<CreateDatasourceRequest>) =>
    this.client.fetch<Datasource>(
      {
        body: JSON.stringify(
          marshalCreateDatasourceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1beta1/datasources`,
      },
      unmarshalDatasource,
    )

  /**
   * Delete a given data source specified by the data source ID.
   *
   * @param request - The request {@link DeleteDatasourceRequest}
   */
  deleteDatasource = (request: Readonly<DeleteDatasourceRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/cockpit/v1beta1/datasources/${validatePathParam('datasourceId', request.datasourceId)}`,
    })

  protected pageOfListDatasources = (
    request: Readonly<ListDatasourcesRequest> = {},
  ) =>
    this.client.fetch<ListDatasourcesResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/datasources`,
        urlParams: urlParams(
          ['is_managed_by_scaleway', request.isManagedByScaleway],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['types', request.types],
        ),
      },
      unmarshalListDatasourcesResponse,
    )

  /**
   * Get a list of data sources for the specified Project ID.
   *
   * @param request - The request {@link ListDatasourcesRequest}
   * @returns A Promise of ListDatasourcesResponse
   */
  listDatasources = (request: Readonly<ListDatasourcesRequest> = {}) =>
    enrichForPagination('datasources', this.pageOfListDatasources, request)

  /**
   * Create a token in a given Project specified by the Project ID.
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
          ['order_by', request.orderBy],
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
   * Get a list of tokens in a given Project specified by the Project ID.
   *
   * @param request - The request {@link ListTokensRequest}
   * @returns A Promise of ListTokensResponse
   */
  listTokens = (request: Readonly<ListTokensRequest> = {}) =>
    enrichForPagination('tokens', this.pageOfListTokens, request)

  /**
   * Retrieve a given token specified by the token ID.
   *
   * @param request - The request {@link GetTokenRequest}
   * @returns A Promise of Token
   */
  getToken = (request: Readonly<GetTokenRequest>) =>
    this.client.fetch<Token>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/tokens/${validatePathParam('tokenId', request.tokenId)}`,
      },
      unmarshalToken,
    )

  /**
   * Delete a given token specified by the token ID.
   *
   * @param request - The request {@link DeleteTokenRequest}
   */
  deleteToken = (request: Readonly<DeleteTokenRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/cockpit/v1beta1/tokens/${validatePathParam('tokenId', request.tokenId)}`,
    })

  /**
   * Create a contact point associated with the default receiver, to receive
   * alerts.
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
   * Get a list of contact points created for a given Cockpit, specified by the
   * ID of the Project the Cockpit belongs to.
   *
   * @param request - The request {@link ListContactPointsRequest}
   * @returns A Promise of ListContactPointsResponse
   */
  listContactPoints = (request: Readonly<ListContactPointsRequest> = {}) =>
    enrichForPagination('contactPoints', this.pageOfListContactPoints, request)

  /**
   * Delete a contact point associated with the default receiver.
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
   * Enable the sending of managed alerts for a given Cockpit, specified by the
   * ID of the Project the Cockpit belongs to.
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
   * Disable the sending of managed alerts for a given Cockpit, specified by the
   * ID of the Project the Cockpit belongs to.
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
   * Send a test alert to make sure your contact points get notified when an
   * actual alert is triggered.
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
   * Create a Grafana user for your Cockpit's Grafana. Make sure you save the
   * automatically-generated password and the Grafana user ID.
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
          ['order_by', request.orderBy],
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
   * Get a list of all Grafana users created in your Cockpit's Grafana.
   *
   * @param request - The request {@link ListGrafanaUsersRequest}
   * @returns A Promise of ListGrafanaUsersResponse
   */
  listGrafanaUsers = (request: Readonly<ListGrafanaUsersRequest> = {}) =>
    enrichForPagination('grafanaUsers', this.pageOfListGrafanaUsers, request)

  /**
   * Delete a Grafana user from your Cockpit's Grafana, specified by the ID of
   * the Project the Cockpit belongs to, and the ID of the Grafana user.
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
      path: `/cockpit/v1beta1/grafana-users/${validatePathParam('grafanaUserId', request.grafanaUserId)}/delete`,
    })

  /**
   * Reset the password of a Grafana user, specified by the ID of the Project
   * the Cockpit belongs to, and the ID of the Grafana user.
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
        path: `/cockpit/v1beta1/grafana-users/${validatePathParam('grafanaUserId', request.grafanaUserId)}/reset-password`,
      },
      unmarshalGrafanaUser,
    )

  protected pageOfListPlans = (request: Readonly<ListPlansRequest> = {}) =>
    this.client.fetch<ListPlansResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/plans`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
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
   * Get a list of all pricing plans available.
   *
   * @param request - The request {@link ListPlansRequest}
   * @returns A Promise of ListPlansResponse
   */
  listPlans = (request: Readonly<ListPlansRequest> = {}) =>
    enrichForPagination('plans', this.pageOfListPlans, request)

  /**
   * Select your chosen pricing plan for your Cockpit, specifying the Cockpit's
   * Project ID and the pricing plan's ID in the request.
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

  protected pageOfListGrafanaProductDashboards = (
    request: Readonly<ListGrafanaProductDashboardsRequest> = {},
  ) =>
    this.client.fetch<ListGrafanaProductDashboardsResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/grafana-product-dashboards`,
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
          ['tags', request.tags],
        ),
      },
      unmarshalListGrafanaProductDashboardsResponse,
    )

  /**
   * List product dashboards. Get a list of available product dashboards.
   *
   * @param request - The request {@link ListGrafanaProductDashboardsRequest}
   * @returns A Promise of ListGrafanaProductDashboardsResponse
   */
  listGrafanaProductDashboards = (
    request: Readonly<ListGrafanaProductDashboardsRequest> = {},
  ) =>
    enrichForPagination(
      'dashboards',
      this.pageOfListGrafanaProductDashboards,
      request,
    )

  /**
   * Get a product dashboard. Get a product dashboard specified by the dashboard
   * ID.
   *
   * @param request - The request {@link GetGrafanaProductDashboardRequest}
   * @returns A Promise of GrafanaProductDashboard
   */
  getGrafanaProductDashboard = (
    request: Readonly<GetGrafanaProductDashboardRequest>,
  ) =>
    this.client.fetch<GrafanaProductDashboard>(
      {
        method: 'GET',
        path: `/cockpit/v1beta1/grafana-product-dashboards/${validatePathParam('dashboardName', request.dashboardName)}`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalGrafanaProductDashboard,
    )
}
