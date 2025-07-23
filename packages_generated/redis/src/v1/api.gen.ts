// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality, WaitForOptions } from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  toApiLocality,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import { CLUSTER_TRANSIENT_STATUSES as CLUSTER_TRANSIENT_STATUSES_REDIS } from './content.gen'
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
  unmarshalListClustersResponse,
  unmarshalListClusterVersionsResponse,
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
  ListClustersRequest,
  ListClustersResponse,
  ListClusterVersionsRequest,
  ListClusterVersionsResponse,
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

/**
 * Managed Database for Redis™ API.

This API allows you to manage your Managed Databases for Redis™.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    zones: [
      'fr-par-1',
      'fr-par-2',
      'nl-ams-1',
      'nl-ams-2',
      'pl-waw-1',
      'pl-waw-2',
    ],
  })

  /**
   * Create a Redis™ Database Instance. Create a new Redis™ Database Instance (Redis™ cluster). You must set the `zone`, `project_id`, `version`, `node_type`, `user_name` and `password` parameters. Optionally you can define `acl_rules`, `endpoints`, `tls_enabled` and `cluster_settings`.
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters`,
      },
      unmarshalCluster,
    )

  /**
   * Update a Redis™ Database Instance. Update the parameters of a Redis™ Database Instance (Redis™ cluster), including `name`, `tags`, `user_name` and `password`.
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Get a Redis™ Database Instance. Retrieve information about a Redis™ Database Instance (Redis™ cluster). Specify the `cluster_id` and `region` in your request to get information such as `id`, `status`, `version`, `tls_enabled`, `cluster_settings`, `upgradable_versions` and `endpoints` about your cluster in the response.
   *
   * @param request - The request {@link GetClusterRequest}
   * @returns A Promise of Cluster
   */
  getCluster = (request: Readonly<GetClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
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
          Promise.resolve(
            !CLUSTER_TRANSIENT_STATUSES_REDIS.includes(res.status),
          )),
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
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
   * List Redis™ Database Instances. List all Redis™ Database Instances (Redis™ cluster) in the specified zone. By default, the Database Instances returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field. You can define additional parameters for your query, such as `tags`, `name`, `organization_id` and `version`.
   *
   * @param request - The request {@link ListClustersRequest}
   * @returns A Promise of ListClustersResponse
   */
  listClusters = (request: Readonly<ListClustersRequest> = {}) =>
    enrichForPagination('clusters', this.pageOfListClusters, request)

  /**
   * Scale up a Redis™ Database Instance. Upgrade your Redis™ Database Instance, either by upgrading to a bigger node type (vertical scaling) or by adding more nodes to your Database Instance to increase your number of endpoints and distribute cache (horizontal scaling, available for clusters only). Note that scaling horizontally your Redis™ Database Instance will not renew its TLS certificate. In order to refresh the TLS certificate, you must use the Renew TLS certificate endpoint.
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/migrate`,
      },
      unmarshalCluster,
    )

  /**
   * Delete a Redis™ Database Instance. Delete a Redis™ Database Instance (Redis™ cluster), specified by the `region` and `cluster_id` parameters. Deleting a Database Instance is permanent, and cannot be undone. Note that upon deletion all your data will be lost.
   *
   * @param request - The request {@link DeleteClusterRequest}
   * @returns A Promise of Cluster
   */
  deleteCluster = (request: Readonly<DeleteClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Get metrics of a Redis™ Database Instance. Retrieve the metrics of a Redis™ Database Instance (Redis™ cluster). You can define the period from which to retrieve metrics by specifying the `start_date` and `end_date`.
   *
   * @param request - The request {@link GetClusterMetricsRequest}
   * @returns A Promise of ClusterMetricsResponse
   */
  getClusterMetrics = (request: Readonly<GetClusterMetricsRequest>) =>
    this.client.fetch<ClusterMetricsResponse>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/metrics`,
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/node-types`,
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
   * List available node types. List all available node types. By default, the node types returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/cluster-versions`,
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
   * List available Redis™ versions. List the Redis™ database engine versions available. You can define additional parameters for your query, such as `include_disabled`, `include_beta`, `include_deprecated` and `version`.
   *
   * @param request - The request {@link ListClusterVersionsRequest}
   * @returns A Promise of ListClusterVersionsResponse
   */
  listClusterVersions = (request: Readonly<ListClusterVersionsRequest>) =>
    enrichForPagination('versions', this.pageOfListClusterVersions, request)

  /**
   * Get the TLS certificate of a cluster. Retrieve information about the TLS certificate of a Redis™ Database Instance (Redis™ cluster). Details like name and content are returned in the response.
   *
   * @param request - The request {@link GetClusterCertificateRequest}
   * @returns A Promise of Blob
   */
  getClusterCertificate = (request: Readonly<GetClusterCertificateRequest>) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/certificate`,
      urlParams: urlParams(['dl', 1]),
      responseType: 'blob',
    })

  /**
   * Renew the TLS certificate of a cluster. Renew a TLS certificate for a Redis™ Database Instance (Redis™ cluster). Renewing a certificate means that you will not be able to connect to your Database Instance using the previous certificate. You will also need to download and update the new certificate for all database clients.
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/renew-certificate`,
      },
      unmarshalCluster,
    )

  /**
   * Add advanced settings. Add an advanced setting to a Redis™ Database Instance (Redis™ cluster). You must set the `name` and the `value` of each setting.
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/settings`,
      },
      unmarshalClusterSettingsResponse,
    )

  /**
   * Delete advanced setting. Delete an advanced setting in a Redis™ Database Instance (Redis™ cluster). You must specify the names of the settings you want to delete in the request body.
   *
   * @param request - The request {@link DeleteClusterSettingRequest}
   * @returns A Promise of Cluster
   */
  deleteClusterSetting = (request: Readonly<DeleteClusterSettingRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/settings/${validatePathParam('settingName', request.settingName)}`,
      },
      unmarshalCluster,
    )

  /**
   * Set advanced settings. Update an advanced setting for a Redis™ Database Instance (Redis™ cluster). Settings added upon database engine initialization can only be defined once, and cannot, therefore, be updated.
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/settings`,
      },
      unmarshalClusterSettingsResponse,
    )

  /**
   * Set ACL rules for a cluster. Replace all the ACL rules of a Redis™ Database Instance (Redis™ cluster).
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/acls`,
      },
      unmarshalSetAclRulesResponse,
    )

  /**
   * Add ACL rules for a cluster. Add an additional ACL rule to a Redis™ Database Instance (Redis™ cluster).
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/acls`,
      },
      unmarshalAddAclRulesResponse,
    )

  /**
   * Delete an ACL rule for a cluster. Delete an ACL rule of a Redis™ Database Instance (Redis™ cluster). You must specify the `acl_id` of the rule you want to delete in your request.
   *
   * @param request - The request {@link DeleteAclRuleRequest}
   * @returns A Promise of Cluster
   */
  deleteAclRule = (request: Readonly<DeleteAclRuleRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Get an ACL rule. Retrieve information about an ACL rule of a Redis™ Database Instance (Redis™ cluster). You must specify the `acl_id` of the rule in your request.
   *
   * @param request - The request {@link GetAclRuleRequest}
   * @returns A Promise of ACLRule
   */
  getAclRule = (request: Readonly<GetAclRuleRequest>) =>
    this.client.fetch<ACLRule>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalACLRule,
    )

  /**
   * Set endpoints for a cluster. Update an endpoint for a Redis™ Database Instance (Redis™ cluster). You must specify the `cluster_id` and the `endpoints` parameters in your request.
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/endpoints`,
      },
      unmarshalSetEndpointsResponse,
    )

  /**
   * Add endpoints for a cluster. Add a new endpoint for a Redis™ Database Instance (Redis™ cluster). You can add `private_network` or `public_network` specifications to the body of the request.
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
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/clusters/${validatePathParam('clusterId', request.clusterId)}/endpoints`,
      },
      unmarshalAddEndpointsResponse,
    )

  /**
   * Delete an endpoint for a cluster. Delete the endpoint of a Redis™ Database Instance (Redis™ cluster). You must specify the `region` and `endpoint_id` parameters of the endpoint you want to delete. Note that might need to update any environment configurations that point to the deleted endpoint.
   *
   * @param request - The request {@link DeleteEndpointRequest}
   * @returns A Promise of Cluster
   */
  deleteEndpoint = (request: Readonly<DeleteEndpointRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Get an endpoint. Retrieve information about a Redis™ Database Instance (Redis™ cluster) endpoint. Full details about the endpoint, like `ips`, `port`, `private_network` and `public_network` specifications are returned in the response.
   *
   * @param request - The request {@link GetEndpointRequest}
   * @returns A Promise of Endpoint
   */
  getEndpoint = (request: Readonly<GetEndpointRequest>) =>
    this.client.fetch<Endpoint>(
      {
        method: 'GET',
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
      },
      unmarshalEndpoint,
    )

  /**
   * Update an endpoint. Update information about a Redis™ Database Instance (Redis™ cluster) endpoint. Full details about the endpoint, like `ips`, `port`, `private_network` and `public_network` specifications are returned in the response.
   *
   * @param request - The request {@link UpdateEndpointRequest}
   * @returns A Promise of Endpoint
   */
  updateEndpoint = (request: Readonly<UpdateEndpointRequest>) =>
    this.client.fetch<Endpoint>(
      {
        body: JSON.stringify(
          marshalUpdateEndpointRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/redis/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
      },
      unmarshalEndpoint,
    )
}
