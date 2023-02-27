// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { WaitForOptions, Zone } from '../../../bridge'
import { CLUSTER_TRANSIENT_STATUSES } from './content.gen'
import {
  marshalAddAclRulesRequest,
  marshalAddClusterSettingsRequest,
  marshalAddEndpointsRequest,
  marshalCreateClusterRequest,
  marshalMigrateClusterRequest,
  marshalSetAclRulesRequest,
  marshalSetClusterSettingsRequest,
  marshalSetEndpointsRequest,
  marshalUpdateClusterRequest,
  marshalUpdateEndpointRequest,
  unmarshalACLRule,
  unmarshalAddAclRulesResponse,
  unmarshalAddEndpointsResponse,
  unmarshalCluster,
  unmarshalClusterMetricsResponse,
  unmarshalClusterSettingsResponse,
  unmarshalEndpoint,
  unmarshalListClusterVersionsResponse,
  unmarshalListClustersResponse,
  unmarshalListNodeTypesResponse,
  unmarshalSetAclRulesResponse,
  unmarshalSetEndpointsResponse,
} from './marshalling.gen'
import type {
  ACLRule,
  AddAclRulesRequest,
  AddAclRulesResponse,
  AddClusterSettingsRequest,
  AddEndpointsRequest,
  AddEndpointsResponse,
  Cluster,
  ClusterMetricsResponse,
  ClusterSettingsResponse,
  CreateClusterRequest,
  DeleteAclRuleRequest,
  DeleteClusterRequest,
  DeleteClusterSettingRequest,
  DeleteEndpointRequest,
  Endpoint,
  GetAclRuleRequest,
  GetClusterCertificateRequest,
  GetClusterMetricsRequest,
  GetClusterRequest,
  GetEndpointRequest,
  ListClusterVersionsRequest,
  ListClusterVersionsResponse,
  ListClustersRequest,
  ListClustersResponse,
  ListNodeTypesRequest,
  ListNodeTypesResponse,
  MigrateClusterRequest,
  RenewClusterCertificateRequest,
  SetAclRulesRequest,
  SetAclRulesResponse,
  SetClusterSettingsRequest,
  SetEndpointsRequest,
  SetEndpointsResponse,
  UpdateClusterRequest,
  UpdateEndpointRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** Managed Database for Redis™ API. */
export class API extends ParentAPI {
  /** Lists the available zones of the API. */
  public static readonly LOCALITIES: Zone[] = [
    'fr-par-1',
    'fr-par-2',
    'nl-ams-1',
    'nl-ams-2',
    'pl-waw-1',
    'pl-waw-2',
  ]

  /**
   * Create a cluster
   *
   * @param request - The request {@link CreateClusterRequest}
   * @returns A Promise of Cluster
   */
  createCluster = (request: Readonly<CreateClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalCreateClusterRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters`,
      },
      unmarshalCluster,
    )

  /**
   * Update a cluster
   *
   * @param request - The request {@link UpdateClusterRequest}
   * @returns A Promise of Cluster
   */
  updateCluster = (request: Readonly<UpdateClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalUpdateClusterRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Get a cluster
   *
   * @param request - The request {@link GetClusterRequest}
   * @returns A Promise of Cluster
   */
  getCluster = (request: Readonly<GetClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Waits for {@link Cluster} to be in a final state.
   *
   * @param request - The request {@link GetClusterRequest}
   * @param options - The waiting options
   * @returns A Promise of Cluster
   */
  waitForCluster = (
    request: Readonly<GetClusterRequest>,
    options?: Readonly<WaitForOptions<Cluster>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!CLUSTER_TRANSIENT_STATUSES.includes(res.status))),
      this.getCluster,
      request,
      options,
    )

  protected pageOfListClusters = (
    request: Readonly<ListClustersRequest> = {},
  ) =>
    this.client.fetch<ListClustersResponse>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['tags', request.tags],
          ['version', request.version],
        ),
      },
      unmarshalListClustersResponse,
    )

  /**
   * List clusters
   *
   * @param request - The request {@link ListClustersRequest}
   * @returns A Promise of ListClustersResponse
   */
  listClusters = (request: Readonly<ListClustersRequest> = {}) =>
    enrichForPagination('clusters', this.pageOfListClusters, request)

  /**
   * Upgrade your Database for Redis® cluster to a new version or scale it
   * vertically / horizontally. Please note: scaling horizontally your Database
   * for Redis® cluster won't renew its TLS certificate. In order to refresh the
   * SSL certificate, you have to use the dedicated api route.
   *
   * @param request - The request {@link MigrateClusterRequest}
   * @returns A Promise of Cluster
   */
  migrateCluster = (request: Readonly<MigrateClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalMigrateClusterRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam(
          'clusterId',
          request.clusterId,
        )}/migrate`,
      },
      unmarshalCluster,
    )

  /**
   * Delete a cluster
   *
   * @param request - The request {@link DeleteClusterRequest}
   * @returns A Promise of Cluster
   */
  deleteCluster = (request: Readonly<DeleteClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Get metrics of a cluster
   *
   * @param request - The request {@link GetClusterMetricsRequest}
   * @returns A Promise of ClusterMetricsResponse
   */
  getClusterMetrics = (request: Readonly<GetClusterMetricsRequest>) =>
    this.client.fetch<ClusterMetricsResponse>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam(
          'clusterId',
          request.clusterId,
        )}/metrics`,
        urlParams: urlParams(
          ['end_at', request.endAt],
          ['metric_name', request.metricName],
          ['start_at', request.startAt],
        ),
      },
      unmarshalClusterMetricsResponse,
    )

  protected pageOfListNodeTypes = (request: Readonly<ListNodeTypesRequest>) =>
    this.client.fetch<ListNodeTypesResponse>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/node-types`,
        urlParams: urlParams(
          ['include_disabled_types', request.includeDisabledTypes],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListNodeTypesResponse,
    )

  /**
   * List available node types
   *
   * @param request - The request {@link ListNodeTypesRequest}
   * @returns A Promise of ListNodeTypesResponse
   */
  listNodeTypes = (request: Readonly<ListNodeTypesRequest>) =>
    enrichForPagination('nodeTypes', this.pageOfListNodeTypes, request)

  protected pageOfListClusterVersions = (
    request: Readonly<ListClusterVersionsRequest>,
  ) =>
    this.client.fetch<ListClusterVersionsResponse>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/cluster-versions`,
        urlParams: urlParams(
          ['include_beta', request.includeBeta],
          ['include_deprecated', request.includeDeprecated],
          ['include_disabled', request.includeDisabled],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['version', request.version],
        ),
      },
      unmarshalListClusterVersionsResponse,
    )

  /**
   * List available Redis™ versions
   *
   * @param request - The request {@link ListClusterVersionsRequest}
   * @returns A Promise of ListClusterVersionsResponse
   */
  listClusterVersions = (request: Readonly<ListClusterVersionsRequest>) =>
    enrichForPagination('versions', this.pageOfListClusterVersions, request)

  /**
   * Get the TLS certificate of a cluster
   *
   * @param request - The request {@link GetClusterCertificateRequest}
   * @returns A Promise of Blob
   */
  getClusterCertificate = (request: Readonly<GetClusterCertificateRequest>) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/redis/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/clusters/${validatePathParam(
        'clusterId',
        request.clusterId,
      )}/certificate`,
      urlParams: urlParams(['dl', 1]),
      responseType: 'blob',
    })

  /**
   * Renew the TLS certificate of a cluster
   *
   * @param request - The request {@link RenewClusterCertificateRequest}
   * @returns A Promise of Cluster
   */
  renewClusterCertificate = (
    request: Readonly<RenewClusterCertificateRequest>,
  ) =>
    this.client.fetch<Cluster>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam(
          'clusterId',
          request.clusterId,
        )}/renew-certificate`,
      },
      unmarshalCluster,
    )

  /**
   * Add cluster settings
   *
   * @param request - The request {@link AddClusterSettingsRequest}
   * @returns A Promise of ClusterSettingsResponse
   */
  addClusterSettings = (request: Readonly<AddClusterSettingsRequest>) =>
    this.client.fetch<ClusterSettingsResponse>(
      {
        body: JSON.stringify(
          marshalAddClusterSettingsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam(
          'clusterId',
          request.clusterId,
        )}/settings`,
      },
      unmarshalClusterSettingsResponse,
    )

  /**
   * Delete a cluster setting
   *
   * @param request - The request {@link DeleteClusterSettingRequest}
   * @returns A Promise of Cluster
   */
  deleteClusterSetting = (request: Readonly<DeleteClusterSettingRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam(
          'clusterId',
          request.clusterId,
        )}/settings/${validatePathParam('settingName', request.settingName)}`,
      },
      unmarshalCluster,
    )

  /**
   * Set cluster settings
   *
   * @param request - The request {@link SetClusterSettingsRequest}
   * @returns A Promise of ClusterSettingsResponse
   */
  setClusterSettings = (request: Readonly<SetClusterSettingsRequest>) =>
    this.client.fetch<ClusterSettingsResponse>(
      {
        body: JSON.stringify(
          marshalSetClusterSettingsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam(
          'clusterId',
          request.clusterId,
        )}/settings`,
      },
      unmarshalClusterSettingsResponse,
    )

  /**
   * Set ACL rules for a given cluster
   *
   * @param request - The request {@link SetAclRulesRequest}
   * @returns A Promise of SetAclRulesResponse
   */
  setAclRules = (request: Readonly<SetAclRulesRequest>) =>
    this.client.fetch<SetAclRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetAclRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam('clusterId', request.clusterId)}/acls`,
      },
      unmarshalSetAclRulesResponse,
    )

  /**
   * Add ACL rules for a given cluster
   *
   * @param request - The request {@link AddAclRulesRequest}
   * @returns A Promise of AddAclRulesResponse
   */
  addAclRules = (request: Readonly<AddAclRulesRequest>) =>
    this.client.fetch<AddAclRulesResponse>(
      {
        body: JSON.stringify(
          marshalAddAclRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam('clusterId', request.clusterId)}/acls`,
      },
      unmarshalAddAclRulesResponse,
    )

  /**
   * Delete an ACL rule for a given cluster
   *
   * @param request - The request {@link DeleteAclRuleRequest}
   * @returns A Promise of Cluster
   */
  deleteAclRule = (request: Readonly<DeleteAclRuleRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Get an ACL rule
   *
   * @param request - The request {@link GetAclRuleRequest}
   * @returns A Promise of ACLRule
   */
  getAclRule = (request: Readonly<GetAclRuleRequest>) =>
    this.client.fetch<ACLRule>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalACLRule,
    )

  /**
   * Set endpoints for a given cluster
   *
   * @param request - The request {@link SetEndpointsRequest}
   * @returns A Promise of SetEndpointsResponse
   */
  setEndpoints = (request: Readonly<SetEndpointsRequest>) =>
    this.client.fetch<SetEndpointsResponse>(
      {
        body: JSON.stringify(
          marshalSetEndpointsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam(
          'clusterId',
          request.clusterId,
        )}/endpoints`,
      },
      unmarshalSetEndpointsResponse,
    )

  /**
   * Add endpoints for a given cluster
   *
   * @param request - The request {@link AddEndpointsRequest}
   * @returns A Promise of AddEndpointsResponse
   */
  addEndpoints = (request: Readonly<AddEndpointsRequest>) =>
    this.client.fetch<AddEndpointsResponse>(
      {
        body: JSON.stringify(
          marshalAddEndpointsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/clusters/${validatePathParam(
          'clusterId',
          request.clusterId,
        )}/endpoints`,
      },
      unmarshalAddEndpointsResponse,
    )

  /**
   * Delete an endpoint for a given cluster
   *
   * @param request - The request {@link DeleteEndpointRequest}
   * @returns A Promise of Cluster
   */
  deleteEndpoint = (request: Readonly<DeleteEndpointRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Get an endpoint
   *
   * @param request - The request {@link GetEndpointRequest}
   * @returns A Promise of Endpoint
   */
  getEndpoint = (request: Readonly<GetEndpointRequest>) =>
    this.client.fetch<Endpoint>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
      },
      unmarshalEndpoint,
    )

  updateEndpoint = (request: Readonly<UpdateEndpointRequest>) =>
    this.client.fetch<Endpoint>(
      {
        body: JSON.stringify(
          marshalUpdateEndpointRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/redis/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
      },
      unmarshalEndpoint,
    )
}
