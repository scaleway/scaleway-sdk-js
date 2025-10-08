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
import {
  CLUSTER_TRANSIENT_STATUSES as CLUSTER_TRANSIENT_STATUSES_K8S,
  NODE_TRANSIENT_STATUSES as NODE_TRANSIENT_STATUSES_K8S,
  POOL_TRANSIENT_STATUSES as POOL_TRANSIENT_STATUSES_K8S,
} from './content.gen'
import {
  marshalAddClusterACLRulesRequest,
  marshalCreateClusterRequest,
  marshalCreatePoolRequest,
  marshalMigratePoolsToNewImagesRequest,
  marshalSetClusterACLRulesRequest,
  marshalSetClusterTypeRequest,
  marshalUpdateClusterRequest,
  marshalUpdatePoolRequest,
  marshalUpgradeClusterRequest,
  marshalUpgradePoolRequest,
  unmarshalAddClusterACLRulesResponse,
  unmarshalCluster,
  unmarshalExternalNode,
  unmarshalExternalNodeAuth,
  unmarshalListClusterACLRulesResponse,
  unmarshalListClusterAvailableTypesResponse,
  unmarshalListClusterAvailableVersionsResponse,
  unmarshalListClustersResponse,
  unmarshalListClusterTypesResponse,
  unmarshalListNodesResponse,
  unmarshalListPoolsResponse,
  unmarshalListVersionsResponse,
  unmarshalNode,
  unmarshalNodeMetadata,
  unmarshalPool,
  unmarshalSetClusterACLRulesResponse,
  unmarshalVersion,
} from './marshalling.gen'
import type {
  AddClusterACLRulesRequest,
  AddClusterACLRulesResponse,
  AuthExternalNodeRequest,
  Cluster,
  CreateClusterRequest,
  CreateExternalNodeRequest,
  CreatePoolRequest,
  DeleteACLRuleRequest,
  DeleteClusterRequest,
  DeleteNodeRequest,
  DeletePoolRequest,
  ExternalNode,
  ExternalNodeAuth,
  GetClusterKubeConfigRequest,
  GetClusterRequest,
  GetNodeMetadataRequest,
  GetNodeRequest,
  GetPoolRequest,
  GetVersionRequest,
  ListClusterACLRulesRequest,
  ListClusterACLRulesResponse,
  ListClusterAvailableTypesRequest,
  ListClusterAvailableTypesResponse,
  ListClusterAvailableVersionsRequest,
  ListClusterAvailableVersionsResponse,
  ListClustersRequest,
  ListClustersResponse,
  ListClusterTypesRequest,
  ListClusterTypesResponse,
  ListNodesRequest,
  ListNodesResponse,
  ListPoolsRequest,
  ListPoolsResponse,
  ListVersionsRequest,
  ListVersionsResponse,
  MigratePoolsToNewImagesRequest,
  Node,
  NodeMetadata,
  Pool,
  RebootNodeRequest,
  ReplaceNodeRequest,
  ResetClusterAdminTokenRequest,
  SetClusterACLRulesRequest,
  SetClusterACLRulesResponse,
  SetClusterTypeRequest,
  UpdateClusterRequest,
  UpdatePoolRequest,
  UpgradeClusterRequest,
  UpgradePoolRequest,
  Version,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Kubernetes API.

This API allows you to manage Kubernetes Kapsule and Kosmos clusters.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  protected pageOfListClusters = (
    request: Readonly<ListClustersRequest> = {},
  ) =>
    this.client.fetch<ListClustersResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['private_network_id', request.privateNetworkId],
          ['project_id', request.projectId],
          ['status', request.status],
          ['type', request.type],
        ),
      },
      unmarshalListClustersResponse,
    )

  /**
   * List Clusters. List all existing Kubernetes clusters in a specific region.
   *
   * @param request - The request {@link ListClustersRequest}
   * @returns A Promise of ListClustersResponse
   */
  listClusters = (request: Readonly<ListClustersRequest> = {}) =>
    enrichForPagination('clusters', this.pageOfListClusters, request)

  /**
   * Create a new Cluster. Create a new Kubernetes cluster in a Scaleway region.
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
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters`,
      },
      unmarshalCluster,
    )

  /**
   * Get a Cluster. Retrieve information about a specific Kubernetes cluster.
   *
   * @param request - The request {@link GetClusterRequest}
   * @returns A Promise of Cluster
   */
  getCluster = (request: Readonly<GetClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
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
            !CLUSTER_TRANSIENT_STATUSES_K8S.includes(res.status),
          )),
      this.getCluster,
      request,
      options,
    )

  /**
   * Update a Cluster. Update information on a specific Kubernetes cluster. You can update details such as its name, description, tags and configuration. To upgrade a cluster, you will need to use the dedicated endpoint.
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
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Delete a Cluster. Delete a specific Kubernetes cluster and all its associated pools and nodes, and possibly its associated Load Balancers or Block Volumes.
   *
   * @param request - The request {@link DeleteClusterRequest}
   * @returns A Promise of Cluster
   */
  deleteCluster = (request: Readonly<DeleteClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
        urlParams: urlParams([
          'with_additional_resources',
          request.withAdditionalResources,
        ]),
      },
      unmarshalCluster,
    )

  /**
   * Upgrade a Cluster. Upgrade a specific Kubernetes cluster and possibly its associated pools to a specific and supported Kubernetes version.
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
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/upgrade`,
      },
      unmarshalCluster,
    )

  /**
   * Change the Cluster type. Change the type of a specific Kubernetes cluster. To see the possible values you can enter for the `type` field, [list available cluster types](#list-available-cluster-types-for-a-cluster).
   *
   * @param request - The request {@link SetClusterTypeRequest}
   * @returns A Promise of Cluster
   */
  setClusterType = (request: Readonly<SetClusterTypeRequest>) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalSetClusterTypeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/set-type`,
      },
      unmarshalCluster,
    )

  /**
   * List available versions for a Cluster. List the versions that a specific Kubernetes cluster is allowed to upgrade to. Results will include every patch version greater than the current patch, as well as one minor version ahead of the current version. Any upgrade skipping a minor version will not work.
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
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/available-versions`,
      },
      unmarshalListClusterAvailableVersionsResponse,
    )

  /**
   * List available cluster types for a cluster. List the cluster types that a specific Kubernetes cluster is allowed to switch to.
   *
   * @param request - The request {@link ListClusterAvailableTypesRequest}
   * @returns A Promise of ListClusterAvailableTypesResponse
   */
  listClusterAvailableTypes = (
    request: Readonly<ListClusterAvailableTypesRequest>,
  ) =>
    this.client.fetch<ListClusterAvailableTypesResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/available-types`,
      },
      unmarshalListClusterAvailableTypesResponse,
    )

  protected _getClusterKubeConfig = (
    request: Readonly<GetClusterKubeConfigRequest>,
  ) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/kubeconfig`,
      urlParams: urlParams(['dl', 1], ['redacted', request.redacted]),
      responseType: 'blob',
    })

  /**
   * Reset the admin token of a Cluster. Reset the admin token for a specific Kubernetes cluster. This will revoke the old admin token (which will not be usable afterwards) and create a new one. Note that you will need to download the kubeconfig again to keep interacting with the cluster.
   *
   * @param request - The request {@link ResetClusterAdminTokenRequest}
   */
  resetClusterAdminToken = (request: Readonly<ResetClusterAdminTokenRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/reset-admin-token`,
    })

  protected pageOfListClusterACLRules = (
    request: Readonly<ListClusterACLRulesRequest>,
  ) =>
    this.client.fetch<ListClusterACLRulesResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/acls`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListClusterACLRulesResponse,
    )

  /**
   * List ACLs. List ACLs for a specific cluster.
   *
   * @param request - The request {@link ListClusterACLRulesRequest}
   * @returns A Promise of ListClusterACLRulesResponse
   */
  listClusterACLRules = (request: Readonly<ListClusterACLRulesRequest>) =>
    enrichForPagination('rules', this.pageOfListClusterACLRules, request)

  /**
   * Add new ACLs. Add new ACL rules for a specific cluster.
   *
   * @param request - The request {@link AddClusterACLRulesRequest}
   * @returns A Promise of AddClusterACLRulesResponse
   */
  addClusterACLRules = (request: Readonly<AddClusterACLRulesRequest>) =>
    this.client.fetch<AddClusterACLRulesResponse>(
      {
        body: JSON.stringify(
          marshalAddClusterACLRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/acls`,
      },
      unmarshalAddClusterACLRulesResponse,
    )

  /**
   * Set new ACLs. Set new ACL rules for a specific cluster.
   *
   * @param request - The request {@link SetClusterACLRulesRequest}
   * @returns A Promise of SetClusterACLRulesResponse
   */
  setClusterACLRules = (request: Readonly<SetClusterACLRulesRequest>) =>
    this.client.fetch<SetClusterACLRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetClusterACLRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/acls`,
      },
      unmarshalSetClusterACLRulesResponse,
    )

  /**
   * Delete an existing ACL.
   *
   * @param request - The request {@link DeleteACLRuleRequest}
   */
  deleteACLRule = (request: Readonly<DeleteACLRuleRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/acls/${validatePathParam('aclId', request.aclId)}`,
    })

  protected pageOfListPools = (request: Readonly<ListPoolsRequest>) =>
    this.client.fetch<ListPoolsResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/pools`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['status', request.status],
        ),
      },
      unmarshalListPoolsResponse,
    )

  /**
   * List Pools in a Cluster. List all the existing pools for a specific Kubernetes cluster.
   *
   * @param request - The request {@link ListPoolsRequest}
   * @returns A Promise of ListPoolsResponse
   */
  listPools = (request: Readonly<ListPoolsRequest>) =>
    enrichForPagination('pools', this.pageOfListPools, request)

  /**
   * Create a new Pool in a Cluster. Create a new pool in a specific Kubernetes cluster.
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
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/pools`,
      },
      unmarshalPool,
    )

  /**
   * Get a Pool in a Cluster. Retrieve details about a specific pool in a Kubernetes cluster.
   *
   * @param request - The request {@link GetPoolRequest}
   * @returns A Promise of Pool
   */
  getPool = (request: Readonly<GetPoolRequest>) =>
    this.client.fetch<Pool>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}`,
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
        (res =>
          Promise.resolve(!POOL_TRANSIENT_STATUSES_K8S.includes(res.status))),
      this.getPool,
      request,
      options,
    )

  /**
   * Upgrade a Pool in a Cluster. Upgrade the Kubernetes version of a specific pool. Note that it only works if the targeted version matches the cluster's version.
This will drain and replace the nodes in that pool.
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
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}/upgrade`,
      },
      unmarshalPool,
    )

  /**
   * Update a Pool in a Cluster. Update the attributes of a specific pool, such as its desired size, autoscaling settings, and tags. To upgrade a pool, you will need to use the dedicated endpoint.
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
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}`,
      },
      unmarshalPool,
    )

  /**
   * Delete a Pool in a Cluster. Delete a specific pool from a cluster. Note that all the pool's nodes will also be deleted.
   *
   * @param request - The request {@link DeletePoolRequest}
   * @returns A Promise of Pool
   */
  deletePool = (request: Readonly<DeletePoolRequest>) =>
    this.client.fetch<Pool>(
      {
        method: 'DELETE',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}`,
      },
      unmarshalPool,
    )

  /**
   * Migrate specific pools or all pools of a cluster to new images.. If no pool is specified, all pools of the cluster will be migrated to new images.
   *
   * @param request - The request {@link MigratePoolsToNewImagesRequest}
   */
  migratePoolsToNewImages = (
    request: Readonly<MigratePoolsToNewImagesRequest>,
  ) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalMigratePoolsToNewImagesRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/migrate-pools-to-new-images`,
    })

  /**
   * Fetch node metadata. Rerieve metadata to instantiate a Kapsule/Kosmos node. This method is not intended to be called by end users but rather programmatically by the node-installer.
   *
   * @param request - The request {@link GetNodeMetadataRequest}
   * @returns A Promise of NodeMetadata
   */
  getNodeMetadata = (request: Readonly<GetNodeMetadataRequest> = {}) =>
    this.client.fetch<NodeMetadata>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/node-metadata`,
      },
      unmarshalNodeMetadata,
    )

  /**
   * Authenticate Kosmos external node. Creates a newer Kosmos node and returns its token. This method is not intended to be called by end users but rather programmatically by the node-installer.
   *
   * @param request - The request {@link AuthExternalNodeRequest}
   * @returns A Promise of ExternalNodeAuth
   */
  authExternalNode = (request: Readonly<AuthExternalNodeRequest>) =>
    this.client.fetch<ExternalNodeAuth>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}/external-nodes/auth`,
      },
      unmarshalExternalNodeAuth,
    )

  /**
   * Create a Kosmos node. Retrieve metadata for a Kosmos node. This method is not intended to be called by end users but rather programmatically by the kapsule-node-agent.
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
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}/external-nodes`,
      },
      unmarshalExternalNode,
    )

  protected pageOfListNodes = (request: Readonly<ListNodesRequest>) =>
    this.client.fetch<ListNodesResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/nodes`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['pool_id', request.poolId],
          ['status', request.status],
        ),
      },
      unmarshalListNodesResponse,
    )

  /**
   * List Nodes in a Cluster. List all the existing nodes for a specific Kubernetes cluster.
   *
   * @param request - The request {@link ListNodesRequest}
   * @returns A Promise of ListNodesResponse
   */
  listNodes = (request: Readonly<ListNodesRequest>) =>
    enrichForPagination('nodes', this.pageOfListNodes, request)

  /**
   * Get a Node in a Cluster. Retrieve details about a specific Kubernetes Node.
   *
   * @param request - The request {@link GetNodeRequest}
   * @returns A Promise of Node
   */
  getNode = (request: Readonly<GetNodeRequest>) =>
    this.client.fetch<Node>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nodes/${validatePathParam('nodeId', request.nodeId)}`,
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
        (res =>
          Promise.resolve(!NODE_TRANSIENT_STATUSES_K8S.includes(res.status))),
      this.getNode,
      request,
      options,
    )

  /**
   * Replace a Node in a Cluster. Replace a specific Node. The node will first be drained and pods will be rescheduled onto another node. Note that when there is not enough space to reschedule all the pods (such as in a one-node cluster, or with specific constraints), disruption of your applications may occur.
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
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nodes/${validatePathParam('nodeId', request.nodeId)}/replace`,
      },
      unmarshalNode,
    )

  /**
   * Reboot a Node in a Cluster. Reboot a specific Node. The node will first be drained and pods will be rescheduled onto another node. Note that when there is not enough space to reschedule all the pods (such as in a one-node cluster, or with specific constraints), disruption of your applications may occur.
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
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nodes/${validatePathParam('nodeId', request.nodeId)}/reboot`,
      },
      unmarshalNode,
    )

  /**
   * Delete a Node in a Cluster. Delete a specific Node. The node will first be drained and pods will be rescheduled onto another node. Note that when there is not enough space to reschedule all the pods (such as in a one-node cluster, or with specific constraints), disruption of your applications may occur.
   *
   * @param request - The request {@link DeleteNodeRequest}
   * @returns A Promise of Node
   */
  deleteNode = (request: Readonly<DeleteNodeRequest>) =>
    this.client.fetch<Node>(
      {
        method: 'DELETE',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nodes/${validatePathParam('nodeId', request.nodeId)}`,
        urlParams: urlParams(
          ['replace', request.replace],
          ['skip_drain', request.skipDrain],
        ),
      },
      unmarshalNode,
    )

  /**
   * List all available Versions. List all available versions for the creation of a new Kubernetes cluster.
   *
   * @param request - The request {@link ListVersionsRequest}
   * @returns A Promise of ListVersionsResponse
   */
  listVersions = (request: Readonly<ListVersionsRequest> = {}) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/versions`,
      },
      unmarshalListVersionsResponse,
    )

  /**
   * Get a Version. Retrieve a specific Kubernetes version and its details.
   *
   * @param request - The request {@link GetVersionRequest}
   * @returns A Promise of Version
   */
  getVersion = (request: Readonly<GetVersionRequest>) =>
    this.client.fetch<Version>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/versions/${validatePathParam('versionName', request.versionName)}`,
      },
      unmarshalVersion,
    )

  protected pageOfListClusterTypes = (
    request: Readonly<ListClusterTypesRequest> = {},
  ) =>
    this.client.fetch<ListClusterTypesResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/cluster-types`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListClusterTypesResponse,
    )

  /**
   * List cluster types. List available cluster types and their technical details.
   *
   * @param request - The request {@link ListClusterTypesRequest}
   * @returns A Promise of ListClusterTypesResponse
   */
  listClusterTypes = (request: Readonly<ListClusterTypesRequest> = {}) =>
    enrichForPagination('clusterTypes', this.pageOfListClusterTypes, request)
}
