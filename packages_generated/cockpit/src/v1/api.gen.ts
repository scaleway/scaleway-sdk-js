// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality } from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  toApiLocality,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import {
  marshalGlobalApiCreateGrafanaUserRequest,
  marshalGlobalApiResetGrafanaUserPasswordRequest,
  marshalGlobalApiSelectPlanRequest,
  marshalGlobalApiSyncGrafanaDataSourcesRequest,
  marshalRegionalApiCreateContactPointRequest,
  marshalRegionalApiCreateDataSourceRequest,
  marshalRegionalApiCreateTokenRequest,
  marshalRegionalApiDeleteContactPointRequest,
  marshalRegionalApiDisableAlertManagerRequest,
  marshalRegionalApiDisableAlertRulesRequest,
  marshalRegionalApiDisableManagedAlertsRequest,
  marshalRegionalApiEnableAlertManagerRequest,
  marshalRegionalApiEnableAlertRulesRequest,
  marshalRegionalApiEnableManagedAlertsRequest,
  marshalRegionalApiTriggerTestAlertRequest,
  marshalRegionalApiUpdateContactPointRequest,
  marshalRegionalApiUpdateDataSourceRequest,
  unmarshalAlertManager,
  unmarshalContactPoint,
  unmarshalDataSource,
  unmarshalDisableAlertRulesResponse,
  unmarshalEnableAlertRulesResponse,
  unmarshalGetConfigResponse,
  unmarshalGetRulesCountResponse,
  unmarshalGrafana,
  unmarshalGrafanaProductDashboard,
  unmarshalGrafanaUser,
  unmarshalListAlertsResponse,
  unmarshalListContactPointsResponse,
  unmarshalListDataSourcesResponse,
  unmarshalListGrafanaProductDashboardsResponse,
  unmarshalListGrafanaUsersResponse,
  unmarshalListPlansResponse,
  unmarshalListTokensResponse,
  unmarshalPlan,
  unmarshalToken,
  unmarshalUsageOverview,
} from './marshalling.gen'
import type {
  AlertManager,
  ContactPoint,
  DataSource,
  DisableAlertRulesResponse,
  EnableAlertRulesResponse,
  GetConfigResponse,
  GetRulesCountResponse,
  GlobalApiCreateGrafanaUserRequest,
  GlobalApiDeleteGrafanaUserRequest,
  GlobalApiGetCurrentPlanRequest,
  GlobalApiGetGrafanaProductDashboardRequest,
  GlobalApiGetGrafanaRequest,
  GlobalApiListGrafanaProductDashboardsRequest,
  GlobalApiListGrafanaUsersRequest,
  GlobalApiListPlansRequest,
  GlobalApiResetGrafanaUserPasswordRequest,
  GlobalApiSelectPlanRequest,
  GlobalApiSyncGrafanaDataSourcesRequest,
  Grafana,
  GrafanaProductDashboard,
  GrafanaUser,
  ListAlertsResponse,
  ListContactPointsResponse,
  ListDataSourcesResponse,
  ListGrafanaProductDashboardsResponse,
  ListGrafanaUsersResponse,
  ListPlansResponse,
  ListTokensResponse,
  Plan,
  RegionalApiCreateContactPointRequest,
  RegionalApiCreateDataSourceRequest,
  RegionalApiCreateTokenRequest,
  RegionalApiDeleteContactPointRequest,
  RegionalApiDeleteDataSourceRequest,
  RegionalApiDeleteTokenRequest,
  RegionalApiDisableAlertManagerRequest,
  RegionalApiDisableAlertRulesRequest,
  RegionalApiDisableManagedAlertsRequest,
  RegionalApiEnableAlertManagerRequest,
  RegionalApiEnableAlertRulesRequest,
  RegionalApiEnableManagedAlertsRequest,
  RegionalApiGetAlertManagerRequest,
  RegionalApiGetConfigRequest,
  RegionalApiGetDataSourceRequest,
  RegionalApiGetRulesCountRequest,
  RegionalApiGetTokenRequest,
  RegionalApiGetUsageOverviewRequest,
  RegionalApiListAlertsRequest,
  RegionalApiListContactPointsRequest,
  RegionalApiListDataSourcesRequest,
  RegionalApiListTokensRequest,
  RegionalApiTriggerTestAlertRequest,
  RegionalApiUpdateContactPointRequest,
  RegionalApiUpdateDataSourceRequest,
  Token,
  UsageOverview,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Cockpit Global API.

The Cockpit Global API allows you to manage your Cockpit's Grafana.
 */
export class GlobalAPI extends ParentAPI {
  /**
   * Get your Cockpit's Grafana. Retrieve information on your Cockpit's Grafana, specified by the ID of the Project the Cockpit belongs to.
The output returned displays the URL to access your Cockpit's Grafana.
   *
   * @param request - The request {@link GlobalApiGetGrafanaRequest}
   * @returns A Promise of Grafana
   */
  getGrafana = (request: Readonly<GlobalApiGetGrafanaRequest> = {}) =>
    this.client.fetch<Grafana>(
      {
        method: 'GET',
        path: `/cockpit/v1/grafana`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalGrafana,
    )

  /**
   * Synchronize Grafana data sources. Trigger the synchronization of all your data sources and the alert manager in the relevant regions. The alert manager will only be synchronized if you have enabled it.
   *
   * @param request - The request {@link GlobalApiSyncGrafanaDataSourcesRequest}
   */
  syncGrafanaDataSources = (
    request: Readonly<GlobalApiSyncGrafanaDataSourcesRequest> = {},
  ) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalGlobalApiSyncGrafanaDataSourcesRequest(
          request,
          this.client.settings,
        ),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/cockpit/v1/grafana/sync-data-sources`,
    })

  /**
   * Create a Grafana user. Create a Grafana user to connect to your Cockpit's Grafana. Upon creation, your user password displays only once, so make sure that you save it.
Each Grafana user is associated with a role: viewer or editor. A viewer can only view dashboards, whereas an editor can create and edit dashboards. Note that the `admin` username is not available for creation.
   *
   * @param request - The request {@link GlobalApiCreateGrafanaUserRequest}
   * @returns A Promise of GrafanaUser
   */
  createGrafanaUser = (request: Readonly<GlobalApiCreateGrafanaUserRequest>) =>
    this.client.fetch<GrafanaUser>(
      {
        body: JSON.stringify(
          marshalGlobalApiCreateGrafanaUserRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/grafana/users`,
      },
      unmarshalGrafanaUser,
    )

  protected pageOfListGrafanaUsers = (
    request: Readonly<GlobalApiListGrafanaUsersRequest> = {},
  ) =>
    this.client.fetch<ListGrafanaUsersResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1/grafana/users`,
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
   * List Grafana users. List all Grafana users created in your Cockpit's Grafana. By default, the Grafana users returned in the list are ordered in ascending order.
   *
   * @param request - The request {@link GlobalApiListGrafanaUsersRequest}
   * @returns A Promise of ListGrafanaUsersResponse
   */
  listGrafanaUsers = (
    request: Readonly<GlobalApiListGrafanaUsersRequest> = {},
  ) => enrichForPagination('grafanaUsers', this.pageOfListGrafanaUsers, request)

  /**
   * Delete a Grafana user. Delete a Grafana user from your Cockpit's Grafana, specified by the ID of the Project the Cockpit belongs to, and the ID of the Grafana user.
   *
   * @param request - The request {@link GlobalApiDeleteGrafanaUserRequest}
   */
  deleteGrafanaUser = (request: Readonly<GlobalApiDeleteGrafanaUserRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/cockpit/v1/grafana/users/${validatePathParam('grafanaUserId', request.grafanaUserId)}`,
      urlParams: urlParams([
        'project_id',
        request.projectId ?? this.client.settings.defaultProjectId,
      ]),
    })

  /**
   * Reset a Grafana user password. Reset the password of a Grafana user, specified by the ID of the Project the Cockpit belongs to, and the ID of the Grafana user.
A new password regenerates and only displays once. Make sure that you save it.
   *
   * @param request - The request {@link GlobalApiResetGrafanaUserPasswordRequest}
   * @returns A Promise of GrafanaUser
   */
  resetGrafanaUserPassword = (
    request: Readonly<GlobalApiResetGrafanaUserPasswordRequest>,
  ) =>
    this.client.fetch<GrafanaUser>(
      {
        body: JSON.stringify(
          marshalGlobalApiResetGrafanaUserPasswordRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/grafana/users/${validatePathParam('grafanaUserId', request.grafanaUserId)}/reset-password`,
      },
      unmarshalGrafanaUser,
    )

  protected pageOfListGrafanaProductDashboards = (
    request: Readonly<GlobalApiListGrafanaProductDashboardsRequest> = {},
  ) =>
    this.client.fetch<ListGrafanaProductDashboardsResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1/grafana/product-dashboards`,
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
   * List Scaleway resources dashboards. Retrieve a list of available dashboards in Grafana, for all Scaleway resources which are integrated with Cockpit.
   *
   * @param request - The request {@link GlobalApiListGrafanaProductDashboardsRequest}
   * @returns A Promise of ListGrafanaProductDashboardsResponse
   */
  listGrafanaProductDashboards = (
    request: Readonly<GlobalApiListGrafanaProductDashboardsRequest> = {},
  ) =>
    enrichForPagination(
      'dashboards',
      this.pageOfListGrafanaProductDashboards,
      request,
    )

  /**
   * Get Scaleway resource dashboard. Retrieve information about the dashboard of a Scaleway resource in Grafana, specified by the ID of the Project the Cockpit belongs to, and the name of the dashboard.
   *
   * @param request - The request {@link GlobalApiGetGrafanaProductDashboardRequest}
   * @returns A Promise of GrafanaProductDashboard
   */
  getGrafanaProductDashboard = (
    request: Readonly<GlobalApiGetGrafanaProductDashboardRequest>,
  ) =>
    this.client.fetch<GrafanaProductDashboard>(
      {
        method: 'GET',
        path: `/cockpit/v1/grafana/product-dashboards/${validatePathParam('dashboardName', request.dashboardName)}`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalGrafanaProductDashboard,
    )

  protected pageOfListPlans = (
    request: Readonly<GlobalApiListPlansRequest> = {},
  ) =>
    this.client.fetch<ListPlansResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1/plans`,
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
   * List plan types. Retrieve a list of available pricing plan types.
Deprecated: retention is now managed at the data source level.
   *
   * @deprecated
   * @param request - The request {@link GlobalApiListPlansRequest}
   * @returns A Promise of ListPlansResponse
   */
  listPlans = (request: Readonly<GlobalApiListPlansRequest> = {}) =>
    enrichForPagination('plans', this.pageOfListPlans, request)

  /**
   * Apply a pricing plan. Apply a pricing plan on a given Project. You must specify the ID of the pricing plan type. Note that you will be billed for the plan you apply.
Deprecated: retention is now managed at the data source level.
   *
   * @deprecated
   * @param request - The request {@link GlobalApiSelectPlanRequest}
   * @returns A Promise of Plan
   */
  selectPlan = (request: Readonly<GlobalApiSelectPlanRequest> = {}) =>
    this.client.fetch<Plan>(
      {
        body: JSON.stringify(
          marshalGlobalApiSelectPlanRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/cockpit/v1/plans`,
      },
      unmarshalPlan,
    )

  /**
   * Get current plan. Retrieve a pricing plan for the given Project, specified by the ID of the Project.
Deprecated: retention is now managed at the data source level.
   *
   * @deprecated
   * @param request - The request {@link GlobalApiGetCurrentPlanRequest}
   * @returns A Promise of Plan
   */
  getCurrentPlan = (request: Readonly<GlobalApiGetCurrentPlanRequest> = {}) =>
    this.client.fetch<Plan>(
      {
        method: 'GET',
        path: `/cockpit/v1/current-plan`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalPlan,
    )
}

/**
 * Cockpit API.

The Cockpit API allows you to create data sources and Cockpit tokens to store and query data types such as metrics, logs, and traces. You can also push your data into Cockpit, and send alerts to your contact points when your resources may require your attention, using the regional Alert manager.
 */
export class RegionalAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  /**
   * Get the Cockpit configuration.
   *
   * @param request - The request {@link RegionalApiGetConfigRequest}
   * @returns A Promise of GetConfigResponse
   */
  getConfig = (request: Readonly<RegionalApiGetConfigRequest> = {}) =>
    this.client.fetch<GetConfigResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/config`,
      },
      unmarshalGetConfigResponse,
    )

  /**
   * Create a data source. You must specify the data source name and type (metrics, logs, traces) upon creation.
The name of the data source will then be used as reference to name the associated Grafana data source.
   *
   * @param request - The request {@link RegionalApiCreateDataSourceRequest}
   * @returns A Promise of DataSource
   */
  createDataSource = (request: Readonly<RegionalApiCreateDataSourceRequest>) =>
    this.client.fetch<DataSource>(
      {
        body: JSON.stringify(
          marshalRegionalApiCreateDataSourceRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/data-sources`,
      },
      unmarshalDataSource,
    )

  /**
   * Get a data source. Retrieve information about a given data source, specified by the data source ID. The data source's information such as its name, type, URL, origin, and retention period, is returned.
   *
   * @param request - The request {@link RegionalApiGetDataSourceRequest}
   * @returns A Promise of DataSource
   */
  getDataSource = (request: Readonly<RegionalApiGetDataSourceRequest>) =>
    this.client.fetch<DataSource>(
      {
        method: 'GET',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/data-sources/${validatePathParam('dataSourceId', request.dataSourceId)}`,
      },
      unmarshalDataSource,
    )

  /**
   * Delete a data source. Delete a given data source. Note that this action will permanently delete this data source and any data associated with it.
   *
   * @param request - The request {@link RegionalApiDeleteDataSourceRequest}
   */
  deleteDataSource = (request: Readonly<RegionalApiDeleteDataSourceRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/data-sources/${validatePathParam('dataSourceId', request.dataSourceId)}`,
    })

  protected pageOfListDataSources = (
    request: Readonly<RegionalApiListDataSourcesRequest> = {},
  ) =>
    this.client.fetch<ListDataSourcesResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/data-sources`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['origin', request.origin],
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
      unmarshalListDataSourcesResponse,
    )

  /**
   * List data sources. Retrieve the list of data sources available in the specified region. By default, the data sources returned in the list are ordered by creation date, in ascending order.
   *
   * @param request - The request {@link RegionalApiListDataSourcesRequest}
   * @returns A Promise of ListDataSourcesResponse
   */
  listDataSources = (
    request: Readonly<RegionalApiListDataSourcesRequest> = {},
  ) => enrichForPagination('dataSources', this.pageOfListDataSources, request)

  /**
   * Update a data source. Update a given data source attributes (name and/or retention_days).
   *
   * @param request - The request {@link RegionalApiUpdateDataSourceRequest}
   * @returns A Promise of DataSource
   */
  updateDataSource = (request: Readonly<RegionalApiUpdateDataSourceRequest>) =>
    this.client.fetch<DataSource>(
      {
        body: JSON.stringify(
          marshalRegionalApiUpdateDataSourceRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/data-sources/${validatePathParam('dataSourceId', request.dataSourceId)}`,
      },
      unmarshalDataSource,
    )

  /**
   * Get data source usage overview. Retrieve the volume of data ingested for each of your data sources in the specified project and region.
   *
   * @param request - The request {@link RegionalApiGetUsageOverviewRequest}
   * @returns A Promise of UsageOverview
   */
  getUsageOverview = (
    request: Readonly<RegionalApiGetUsageOverviewRequest> = {},
  ) =>
    this.client.fetch<UsageOverview>(
      {
        method: 'GET',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/usage-overview`,
        urlParams: urlParams(
          ['interval', request.interval],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalUsageOverview,
    )

  /**
   * Create a token. Give your token the relevant scopes to ensure it has the right permissions to interact with your data sources and the Alert manager. Make sure that you create your token in the same regions as the data sources you want to use it for.
Upon creation, your token's secret key display only once. Make sure that you save it.
   *
   * @param request - The request {@link RegionalApiCreateTokenRequest}
   * @returns A Promise of Token
   */
  createToken = (request: Readonly<RegionalApiCreateTokenRequest>) =>
    this.client.fetch<Token>(
      {
        body: JSON.stringify(
          marshalRegionalApiCreateTokenRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens`,
      },
      unmarshalToken,
    )

  protected pageOfListTokens = (
    request: Readonly<RegionalApiListTokensRequest> = {},
  ) =>
    this.client.fetch<ListTokensResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens`,
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
          ['token_scopes', request.tokenScopes],
        ),
      },
      unmarshalListTokensResponse,
    )

  /**
   * List tokens. Retrieve a list of all tokens in the specified region. By default, tokens returned in the list are ordered by creation date, in ascending order.
You can filter tokens by Project ID and token scopes.
   *
   * @param request - The request {@link RegionalApiListTokensRequest}
   * @returns A Promise of ListTokensResponse
   */
  listTokens = (request: Readonly<RegionalApiListTokensRequest> = {}) =>
    enrichForPagination('tokens', this.pageOfListTokens, request)

  /**
   * Get a token. Retrieve information about a given token, specified by the token ID. The token's information such as its scopes, is returned.
   *
   * @param request - The request {@link RegionalApiGetTokenRequest}
   * @returns A Promise of Token
   */
  getToken = (request: Readonly<RegionalApiGetTokenRequest>) =>
    this.client.fetch<Token>(
      {
        method: 'GET',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens/${validatePathParam('tokenId', request.tokenId)}`,
      },
      unmarshalToken,
    )

  /**
   * Delete a token. Delete a given token, specified by the token ID. Deleting a token is irreversible and cannot be undone.
   *
   * @param request - The request {@link RegionalApiDeleteTokenRequest}
   */
  deleteToken = (request: Readonly<RegionalApiDeleteTokenRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens/${validatePathParam('tokenId', request.tokenId)}`,
    })

  /**
   * Get the Alert manager. Retrieve information about the Alert manager which is unique per Project and region. By default the Alert manager is disabled.
The output returned displays a URL to access the Alert manager, and whether the Alert manager and managed alerts are enabled.
   *
   * @param request - The request {@link RegionalApiGetAlertManagerRequest}
   * @returns A Promise of AlertManager
   */
  getAlertManager = (
    request: Readonly<RegionalApiGetAlertManagerRequest> = {},
  ) =>
    this.client.fetch<AlertManager>(
      {
        method: 'GET',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalAlertManager,
    )

  /**
   * Enable the Alert manager. Enabling the Alert manager allows you to enable managed alerts and create contact points in the specified Project and region, to be notified when your Scaleway resources may require your attention.
   *
   * @param request - The request {@link RegionalApiEnableAlertManagerRequest}
   * @returns A Promise of AlertManager
   */
  enableAlertManager = (
    request: Readonly<RegionalApiEnableAlertManagerRequest> = {},
  ) =>
    this.client.fetch<AlertManager>(
      {
        body: JSON.stringify(
          marshalRegionalApiEnableAlertManagerRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/enable`,
      },
      unmarshalAlertManager,
    )

  /**
   * Disable the Alert manager. Disabling the Alert manager deletes the contact points you have created and disables managed alerts in the specified Project and region.
   *
   * @param request - The request {@link RegionalApiDisableAlertManagerRequest}
   * @returns A Promise of AlertManager
   */
  disableAlertManager = (
    request: Readonly<RegionalApiDisableAlertManagerRequest> = {},
  ) =>
    this.client.fetch<AlertManager>(
      {
        body: JSON.stringify(
          marshalRegionalApiDisableAlertManagerRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/disable`,
      },
      unmarshalAlertManager,
    )

  /**
   * Get a detailed count of enabled rules in the specified Project. Includes preconfigured and custom alerting and recording rules.. Get a detailed count of enabled rules in the specified Project. Includes preconfigured and custom alerting and recording rules.
   *
   * @param request - The request {@link RegionalApiGetRulesCountRequest}
   * @returns A Promise of GetRulesCountResponse
   */
  getRulesCount = (request: Readonly<RegionalApiGetRulesCountRequest> = {}) =>
    this.client.fetch<GetRulesCountResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/rules/count`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalGetRulesCountResponse,
    )

  /**
   * Create a contact point. Contact points are email addresses associated with the default receiver, that the Alert manager sends alerts to.
The source of the alerts are data sources within the same Project and region as the Alert manager.
If you need to receive alerts for other receivers, you can create additional contact points and receivers in Grafana. Make sure that you select the Scaleway Alert manager.
   *
   * @param request - The request {@link RegionalApiCreateContactPointRequest}
   * @returns A Promise of ContactPoint
   */
  createContactPoint = (
    request: Readonly<RegionalApiCreateContactPointRequest> = {},
  ) =>
    this.client.fetch<ContactPoint>(
      {
        body: JSON.stringify(
          marshalRegionalApiCreateContactPointRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/contact-points`,
      },
      unmarshalContactPoint,
    )

  protected pageOfListContactPoints = (
    request: Readonly<RegionalApiListContactPointsRequest> = {},
  ) =>
    this.client.fetch<ListContactPointsResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/contact-points`,
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
   * List contact points. Retrieve a list of contact points for the specified Project. The response lists all contact points and receivers created in Grafana or via the API.
   *
   * @param request - The request {@link RegionalApiListContactPointsRequest}
   * @returns A Promise of ListContactPointsResponse
   */
  listContactPoints = (
    request: Readonly<RegionalApiListContactPointsRequest> = {},
  ) =>
    enrichForPagination('contactPoints', this.pageOfListContactPoints, request)

  updateContactPoint = (
    request: Readonly<RegionalApiUpdateContactPointRequest> = {},
  ) =>
    this.client.fetch<ContactPoint>(
      {
        body: JSON.stringify(
          marshalRegionalApiUpdateContactPointRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/contact-points`,
      },
      unmarshalContactPoint,
    )

  /**
   * Delete a contact point. Delete a contact point associated with the default receiver.
   *
   * @param request - The request {@link RegionalApiDeleteContactPointRequest}
   */
  deleteContactPoint = (
    request: Readonly<RegionalApiDeleteContactPointRequest> = {},
  ) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRegionalApiDeleteContactPointRequest(
          request,
          this.client.settings,
        ),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/contact-points/delete`,
    })

  /**
   * List alerts. List preconfigured and/or custom alerts for the specified Project and data source.
   *
   * @param request - The request {@link RegionalApiListAlertsRequest}
   * @returns A Promise of ListAlertsResponse
   */
  listAlerts = (request: Readonly<RegionalApiListAlertsRequest> = {}) =>
    this.client.fetch<ListAlertsResponse>(
      {
        method: 'GET',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alerts`,
        urlParams: urlParams(
          ['data_source_id', request.dataSourceId],
          ['is_preconfigured', request.isPreconfigured],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['rule_status', request.ruleStatus],
          ['state', request.state],
        ),
      },
      unmarshalListAlertsResponse,
    )

  /**
   * Enable managed alerts. Enable the sending of managed alerts for the specified Project. Managed alerts are predefined alerts that apply to Scaleway recources integrated with Cockpit by default.
   *
   * @param request - The request {@link RegionalApiEnableManagedAlertsRequest}
   * @returns A Promise of AlertManager
   */
  enableManagedAlerts = (
    request: Readonly<RegionalApiEnableManagedAlertsRequest> = {},
  ) =>
    this.client.fetch<AlertManager>(
      {
        body: JSON.stringify(
          marshalRegionalApiEnableManagedAlertsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/managed-alerts/enable`,
      },
      unmarshalAlertManager,
    )

  /**
   * Disable managed alerts. Disable the sending of managed alerts for the specified Project.
   *
   * @param request - The request {@link RegionalApiDisableManagedAlertsRequest}
   * @returns A Promise of AlertManager
   */
  disableManagedAlerts = (
    request: Readonly<RegionalApiDisableManagedAlertsRequest> = {},
  ) =>
    this.client.fetch<AlertManager>(
      {
        body: JSON.stringify(
          marshalRegionalApiDisableManagedAlertsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/managed-alerts/disable`,
      },
      unmarshalAlertManager,
    )

  /**
   * Enable preconfigured alert rules. Enable alert rules from the list of available preconfigured rules.
   *
   * @param request - The request {@link RegionalApiEnableAlertRulesRequest}
   * @returns A Promise of EnableAlertRulesResponse
   */
  enableAlertRules = (
    request: Readonly<RegionalApiEnableAlertRulesRequest> = {},
  ) =>
    this.client.fetch<EnableAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalRegionalApiEnableAlertRulesRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/enable-alert-rules`,
      },
      unmarshalEnableAlertRulesResponse,
    )

  /**
   * Disable preconfigured alert rules. Disable alert rules from the list of available preconfigured rules.
   *
   * @param request - The request {@link RegionalApiDisableAlertRulesRequest}
   * @returns A Promise of DisableAlertRulesResponse
   */
  disableAlertRules = (
    request: Readonly<RegionalApiDisableAlertRulesRequest> = {},
  ) =>
    this.client.fetch<DisableAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalRegionalApiDisableAlertRulesRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/disable-alert-rules`,
      },
      unmarshalDisableAlertRulesResponse,
    )

  /**
   * Trigger a test alert. Send a test alert to the Alert manager to make sure your contact points get notified.
   *
   * @param request - The request {@link RegionalApiTriggerTestAlertRequest}
   */
  triggerTestAlert = (
    request: Readonly<RegionalApiTriggerTestAlertRequest> = {},
  ) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRegionalApiTriggerTestAlertRequest(
          request,
          this.client.settings,
        ),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/cockpit/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-manager/trigger-test-alert`,
    })
}
