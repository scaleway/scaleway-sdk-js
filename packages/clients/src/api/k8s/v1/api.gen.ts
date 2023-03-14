// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { Region, WaitForOptions } from '../../../bridge'
import {
  CLUSTER_TRANSIENT_STATUSES,
  NODE_TRANSIENT_STATUSES,
  POOL_TRANSIENT_STATUSES,
} from './content.gen'
import {
  marshalCreateClusterRequest,
  marshalCreatePoolRequest,
  marshalUpdateClusterRequest,
  marshalUpdatePoolRequest,
  marshalUpgradeClusterRequest,
  marshalUpgradePoolRequest,
  unmarshalCluster,
  unmarshalExternalNode,
  unmarshalListClusterAvailableVersionsResponse,
  unmarshalListClustersResponse,
  unmarshalListNodesResponse,
  unmarshalListPoolsResponse,
  unmarshalListVersionsResponse,
  unmarshalNode,
  unmarshalPool,
  unmarshalVersion,
} from './marshalling.gen'
import type {
  Cluster,
  CreateClusterRequest,
  CreateExternalNodeRequest,
  CreatePoolRequest,
  DeleteClusterRequest,
  DeleteNodeRequest,
  DeletePoolRequest,
  ExternalNode,
  GetClusterRequest,
  GetNodeRequest,
  GetPoolRequest,
  GetVersionRequest,
  ListClusterAvailableVersionsRequest,
  ListClusterAvailableVersionsResponse,
  ListClustersRequest,
  ListClustersResponse,
  ListNodesRequest,
  ListNodesResponse,
  ListPoolsRequest,
  ListPoolsResponse,
  ListVersionsRequest,
  ListVersionsResponse,
  Node,
  Pool,
  RebootNodeRequest,
  ReplaceNodeRequest,
  ResetClusterAdminTokenRequest,
  UpdateClusterRequest,
  UpdatePoolRequest,
  UpgradeClusterRequest,
  UpgradePoolRequest,
  Version,
} from './types.gen'
import type { GetClusterKubeConfigRequest } from './types.private.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** Kapsule API. */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  protected pageOfListClusters = (
    request: Readonly<ListClustersRequest> = {},
  ) =>
    this.client.fetch<ListClustersResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
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
          ['status', request.status ?? 'unknown'],
          ['type', request.type],
        ),
      },
      unmarshalListClustersResponse,
    )

  /**
   * List all the existing Kubernetes clusters in a specific Region.
   *
   * @param request - The request {@link ListClustersRequest}
   * @returns A Promise of ListClustersResponse
   */
  listClusters = (request: Readonly<ListClustersRequest> = {}) =>
    enrichForPagination('clusters', this.pageOfListClusters, request)

  /**
   * Create a new Kubernetes cluster on a Scaleway account.
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
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/clusters`,
      },
      unmarshalCluster,
    )

  /**
   * Get details about a specific Kubernetes cluster.
   *
   * @param request - The request {@link GetClusterRequest}
   * @returns A Promise of Cluster
   */
  getCluster = (request: Readonly<GetClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
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

  /**
   * Update a specific Kubernetes cluster. Note that this method is designed to
   * update details such as name, description, tags and configuration. However,
   * you cannot upgrade a cluster with this method. To do so, use the dedicated
   * endpoint.
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
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Delete a specific cluster and all its associated pools and nodes. Note that
   * this method will not delete any Load Balancers or Block Volumes that are
   * associated with the cluster.
   *
   * @param request - The request {@link DeleteClusterRequest}
   * @returns A Promise of Cluster
   */
  deleteCluster = (request: Readonly<DeleteClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
        urlParams: urlParams([
          'with_additional_resources',
          request.withAdditionalResources,
        ]),
      },
      unmarshalCluster,
    )

  /**
   * Upgrade a specific Kubernetes cluster and/or its associated pools to a
   * specific and supported Kubernetes version.
   *
   * @param request - The request {@link UpgradeClusterRequest}
   * @returns A Promise of Cluster
   */
  upgradeCluster = (request: Readonly<UpgradeClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalUpgradeClusterRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/clusters/${validatePathParam(
          'clusterId',
          request.clusterId,
        )}/upgrade`,
      },
      unmarshalCluster,
    )

  /**
   * List the versions that a specific Kubernetes cluster is allowed to upgrade
   * to. Results will comprise every patch version greater than the current
   * patch, as well as one minor version ahead of the current version. Any
   * upgrade skipping a minor version will not work.
   *
   * @param request - The request {@link ListClusterAvailableVersionsRequest}
   * @returns A Promise of ListClusterAvailableVersionsResponse
   */
  listClusterAvailableVersions = (
    request: Readonly<ListClusterAvailableVersionsRequest>,
  ) =>
    this.client.fetch<ListClusterAvailableVersionsResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/clusters/${validatePathParam(
          'clusterId',
          request.clusterId,
        )}/available-versions`,
      },
      unmarshalListClusterAvailableVersionsResponse,
    )

  protected _getClusterKubeConfig = (
    request: Readonly<GetClusterKubeConfigRequest>,
  ) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/k8s/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/clusters/${validatePathParam(
        'clusterId',
        request.clusterId,
      )}/kubeconfig`,
      urlParams: urlParams(['dl', 1]),
      responseType: 'blob',
    })

  /**
   * Reset the admin token for a specific Kubernetes cluster. This will
   * invalidate the old admin token (which will not be usable afterwards) and
   * create a new one. Note that you will need to redownload kubeconfig in order
   * to keep interacting with the cluster.
   *
   * @param request - The request {@link ResetClusterAdminTokenRequest}
   */
  resetClusterAdminToken = (request: Readonly<ResetClusterAdminTokenRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/k8s/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/clusters/${validatePathParam(
        'clusterId',
        request.clusterId,
      )}/reset-admin-token`,
    })

  protected pageOfListPools = (request: Readonly<ListPoolsRequest>) =>
    this.client.fetch<ListPoolsResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/clusters/${validatePathParam('clusterId', request.clusterId)}/pools`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['status', request.status ?? 'unknown'],
        ),
      },
      unmarshalListPoolsResponse,
    )

  /**
   * List all the existing pools for a specific Kubernetes cluster.
   *
   * @param request - The request {@link ListPoolsRequest}
   * @returns A Promise of ListPoolsResponse
   */
  listPools = (request: Readonly<ListPoolsRequest>) =>
    enrichForPagination('pools', this.pageOfListPools, request)

  /**
   * Create a new pool in a specific Kubernetes cluster.
   *
   * @param request - The request {@link CreatePoolRequest}
   * @returns A Promise of Pool
   */
  createPool = (request: Readonly<CreatePoolRequest>) =>
    this.client.fetch<Pool>(
      {
        body: JSON.stringify(
          marshalCreatePoolRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/clusters/${validatePathParam('clusterId', request.clusterId)}/pools`,
      },
      unmarshalPool,
    )

  /**
   * Get details about a specific pool in a Kubernetes cluster.
   *
   * @param request - The request {@link GetPoolRequest}
   * @returns A Promise of Pool
   */
  getPool = (request: Readonly<GetPoolRequest>) =>
    this.client.fetch<Pool>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pools/${validatePathParam('poolId', request.poolId)}`,
      },
      unmarshalPool,
    )

  /**
   * Waits for {@link Pool} to be in a final state.
   *
   * @param request - The request {@link GetPoolRequest}
   * @param options - The waiting options
   * @returns A Promise of Pool
   */
  waitForPool = (
    request: Readonly<GetPoolRequest>,
    options?: Readonly<WaitForOptions<Pool>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res => Promise.resolve(!POOL_TRANSIENT_STATUSES.includes(res.status))),
      this.getPool,
      request,
      options,
    )

  /**
   * Upgrade the Kubernetes version of a specific pool. Note that this will work
   * when the targeted version is the same than the version of the cluster.
   *
   * @param request - The request {@link UpgradePoolRequest}
   * @returns A Promise of Pool
   */
  upgradePool = (request: Readonly<UpgradePoolRequest>) =>
    this.client.fetch<Pool>(
      {
        body: JSON.stringify(
          marshalUpgradePoolRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pools/${validatePathParam('poolId', request.poolId)}/upgrade`,
      },
      unmarshalPool,
    )

  /**
   * Update attributes of a specific pool, such as size, autoscaling settings,
   * and tags.
   *
   * @param request - The request {@link UpdatePoolRequest}
   * @returns A Promise of Pool
   */
  updatePool = (request: Readonly<UpdatePoolRequest>) =>
    this.client.fetch<Pool>(
      {
        body: JSON.stringify(
          marshalUpdatePoolRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pools/${validatePathParam('poolId', request.poolId)}`,
      },
      unmarshalPool,
    )

  /**
   * Delete a specific pool from a cluster. All of the pool's nodes will also be
   * deleted.
   *
   * @param request - The request {@link DeletePoolRequest}
   * @returns A Promise of Pool
   */
  deletePool = (request: Readonly<DeletePoolRequest>) =>
    this.client.fetch<Pool>(
      {
        method: 'DELETE',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pools/${validatePathParam('poolId', request.poolId)}`,
      },
      unmarshalPool,
    )

  /**
   * Get metadata about a Kosmos node. This method is not intended to be
   * directly called by end users, only by the kapsule-node-agent.
   *
   * @param request - The request {@link CreateExternalNodeRequest}
   * @returns A Promise of ExternalNode
   */
  createExternalNode = (request: Readonly<CreateExternalNodeRequest>) =>
    this.client.fetch<ExternalNode>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pools/${validatePathParam('poolId', request.poolId)}/external-nodes`,
      },
      unmarshalExternalNode,
    )

  protected pageOfListNodes = (request: Readonly<ListNodesRequest>) =>
    this.client.fetch<ListNodesResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/clusters/${validatePathParam('clusterId', request.clusterId)}/nodes`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['pool_id', request.poolId],
          ['status', request.status ?? 'unknown'],
        ),
      },
      unmarshalListNodesResponse,
    )

  /**
   * List all the existing nodes for a specific Kubernetes cluster.
   *
   * @param request - The request {@link ListNodesRequest}
   * @returns A Promise of ListNodesResponse
   */
  listNodes = (request: Readonly<ListNodesRequest>) =>
    enrichForPagination('nodes', this.pageOfListNodes, request)

  /**
   * Get details about a specific Kubernetes node.
   *
   * @param request - The request {@link GetNodeRequest}
   * @returns A Promise of Node
   */
  getNode = (request: Readonly<GetNodeRequest>) =>
    this.client.fetch<Node>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/nodes/${validatePathParam('nodeId', request.nodeId)}`,
      },
      unmarshalNode,
    )

  /**
   * Waits for {@link Node} to be in a final state.
   *
   * @param request - The request {@link GetNodeRequest}
   * @param options - The waiting options
   * @returns A Promise of Node
   */
  waitForNode = (
    request: Readonly<GetNodeRequest>,
    options?: Readonly<WaitForOptions<Node>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res => Promise.resolve(!NODE_TRANSIENT_STATUSES.includes(res.status))),
      this.getNode,
      request,
      options,
    )

  /**
   * Replace a specific node. The node will be set cordoned, meaning that
   * scheduling will be disabled. Then the existing pods on the node will be
   * drained and reschedule onto another schedulable node. Then the node will be
   * deleted, and a new one will be created after the deletion. Note that when
   * there is not enough space to reschedule all the pods (in a one node cluster
   * for instance), you may experience some disruption of your applications.
   *
   * @deprecated
   * @param request - The request {@link ReplaceNodeRequest}
   * @returns A Promise of Node
   */
  replaceNode = (request: Readonly<ReplaceNodeRequest>) =>
    this.client.fetch<Node>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/nodes/${validatePathParam('nodeId', request.nodeId)}/replace`,
      },
      unmarshalNode,
    )

  /**
   * Reboot a specific node. This node will first be cordoned, meaning that
   * scheduling will be disabled. Then the existing pods on the node will be
   * drained and rescheduled onto another schedulable node. Note that when there
   * is not enough space to reschedule all the pods (in a one-node cluster, for
   * instance), you may experience some disruption of your applications.
   *
   * @param request - The request {@link RebootNodeRequest}
   * @returns A Promise of Node
   */
  rebootNode = (request: Readonly<RebootNodeRequest>) =>
    this.client.fetch<Node>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/nodes/${validatePathParam('nodeId', request.nodeId)}/reboot`,
      },
      unmarshalNode,
    )

  /**
   * Delete a specific node. Note that when there is not enough space to
   * reschedule all the pods (in a one-node cluster for instance), you may
   * experience some disruption of your applications.
   *
   * @param request - The request {@link DeleteNodeRequest}
   * @returns A Promise of Node
   */
  deleteNode = (request: Readonly<DeleteNodeRequest>) =>
    this.client.fetch<Node>(
      {
        method: 'DELETE',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/nodes/${validatePathParam('nodeId', request.nodeId)}`,
        urlParams: urlParams(
          ['replace', request.replace],
          ['skip_drain', request.skipDrain],
        ),
      },
      unmarshalNode,
    )

  /**
   * List all available versions for the creation of a new Kubernetes cluster.
   *
   * @param request - The request {@link ListVersionsRequest}
   * @returns A Promise of ListVersionsResponse
   */
  listVersions = (request: Readonly<ListVersionsRequest> = {}) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/versions`,
      },
      unmarshalListVersionsResponse,
    )

  /**
   * Get a specific Kubernetes version and the details about the version.
   *
   * @param request - The request {@link GetVersionRequest}
   * @returns A Promise of Version
   */
  getVersion = (request: Readonly<GetVersionRequest>) =>
    this.client.fetch<Version>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/versions/${validatePathParam('versionName', request.versionName)}`,
      },
      unmarshalVersion,
    )
}
