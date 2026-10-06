// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality, RequestOptions,} from '@scaleway/sdk-client'
import {CLUSTER_TRANSIENT_STATUSES as CLUSTER_TRANSIENT_STATUSES_K8S,NODE_TRANSIENT_STATUSES as NODE_TRANSIENT_STATUSES_K8S,POOL_TRANSIENT_STATUSES as POOL_TRANSIENT_STATUSES_K8S,} from './content.gen.js'
import {
  marshalAddClusterACLRulesRequest,
  unmarshalAddClusterACLRulesResponse,
  unmarshalCluster,
  marshalCreateClusterRequest,
  marshalCreatePoolRequest,
  unmarshalExternalNodeAuth,
  unmarshalListClusterACLRulesResponse,
  unmarshalListClusterAvailableTypesResponse,
  unmarshalListClusterAvailableVersionsResponse,
  unmarshalListClusterTypesResponse,
  unmarshalListClustersResponse,
  unmarshalListNodesResponse,
  unmarshalListPoolsResponse,
  unmarshalListUserDataResponse,
  unmarshalListVersionsResponse,
  unmarshalNode,
  unmarshalNodeMetadata,
  unmarshalPool,
  marshalSetClusterACLRulesRequest,
  unmarshalSetClusterACLRulesResponse,
  marshalSetClusterTypeRequest,
  marshalSetPoolLabelsRequest,
  marshalSetPoolStartupTaintsRequest,
  marshalSetPoolTaintsRequest,
  marshalUpdateClusterRequest,
  marshalUpdatePoolRequest,
  marshalUpgradeClusterRequest,
  marshalUpgradePoolRequest,
  unmarshalVersion,
} from './marshalling.gen.js'
import type {
  AddClusterACLRulesRequest,
  AddClusterACLRulesResponse,
  AuthExternalNodeRequest,
  Cluster,
  CreateClusterRequest,
  CreatePoolRequest,
  DeleteACLRuleRequest,
  DeleteClusterRequest,
  DeleteNodeRequest,
  DeletePoolRequest,
  ExternalNodeAuth,
  GetClusterKubeConfigRequest,
  GetClusterRequest,
  GetNodeMetadataRequest,
  GetNodeRequest,
  GetPoolRequest,
  GetUserDataRequest,
  GetVersionRequest,
  ListClusterACLRulesRequest,
  ListClusterACLRulesResponse,
  ListClusterAvailableTypesRequest,
  ListClusterAvailableTypesResponse,
  ListClusterAvailableVersionsRequest,
  ListClusterAvailableVersionsResponse,
  ListClusterTypesRequest,
  ListClusterTypesResponse,
  ListClustersRequest,
  ListClustersResponse,
  ListNodesRequest,
  ListNodesResponse,
  ListPoolsRequest,
  ListPoolsResponse,
  ListUserDataRequest,
  ListUserDataResponse,
  ListVersionsRequest,
  ListVersionsResponse,
  Node,
  NodeMetadata,
  Pool,
  RebootNodeRequest,
  ReplaceNodeRequest,
  ResetClusterAdminTokenRequest,
  SetClusterACLRulesRequest,
  SetClusterACLRulesResponse,
  SetClusterTypeRequest,
  SetPoolLabelsRequest,
  SetPoolStartupTaintsRequest,
  SetPoolTaintsRequest,
  UpdateClusterRequest,
  UpdatePoolRequest,
  UpgradeClusterRequest,
  UpgradePoolRequest,
  Version,
} from './types.gen.js'

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
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      regions: [
        'fr-par',
        'nl-ams',
        'pl-waw',
        'it-mil',
      ],
    })
  
  protected pageOfListClusters = (request: Readonly<ListClustersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListClustersResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['private_network_id', request.privateNetworkId],
          ['project_id', request.projectId],
          ['status', request.status],
          ['type', request.type],
          ['version', request.version],
        ),
        signal: options?.signal,
      },
      unmarshalListClustersResponse,
    )
  
  /**
   * List Clusters. List all existing Kubernetes clusters in a specific region.
   *
   * @param request - The request {@link ListClustersRequest}
   * @returns A Promise of ListClustersResponse
   */
  listClusters = (request: Readonly<ListClustersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('clusters', this.pageOfListClusters, request, options)

  
  /**
   * Create a new Cluster. Create a new Kubernetes cluster in a Scaleway region.
   *
   * @param request - The request {@link CreateClusterRequest}
   * @returns A Promise of Cluster
   */
  createCluster = (request: Readonly<CreateClusterRequest>, options?: RequestOptions) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalCreateClusterRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters`,
        signal: options?.signal,
      },
      unmarshalCluster,
    )

  
  /**
   * Get a Cluster. Retrieve information about a specific Kubernetes cluster.
   *
   * @param request - The request {@link GetClusterRequest}
   * @returns A Promise of Cluster
   */
  getCluster = (request: Readonly<GetClusterRequest>, options?: RequestOptions) =>
    this.client.fetch<Cluster>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!CLUSTER_TRANSIENT_STATUSES_K8S.includes(res.status))),
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
  updateCluster = (request: Readonly<UpdateClusterRequest>, options?: RequestOptions) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalUpdateClusterRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
        signal: options?.signal,
      },
      unmarshalCluster,
    )

  
  /**
   * Delete a Cluster. Delete a specific Kubernetes cluster and all its associated pools and nodes, and possibly its associated Load Balancers or Block Volumes.
   *
   * @param request - The request {@link DeleteClusterRequest}
   * @returns A Promise of Cluster
   */
  deleteCluster = (request: Readonly<DeleteClusterRequest>, options?: RequestOptions) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
        urlParams: urlParams(
          ['with_additional_resources', request.withAdditionalResources],
        ),
        signal: options?.signal,
      },
      unmarshalCluster,
    )

  
  /**
   * Upgrade a Cluster. Upgrade a specific Kubernetes cluster and possibly its associated pools to a specific and supported Kubernetes version.
   *
   * @param request - The request {@link UpgradeClusterRequest}
   * @returns A Promise of Cluster
   */
  upgradeCluster = (request: Readonly<UpgradeClusterRequest>, options?: RequestOptions) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalUpgradeClusterRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/upgrade`,
        signal: options?.signal,
      },
      unmarshalCluster,
    )

  
  /**
   * Change the Cluster type. Change the type of a specific Kubernetes cluster. To see the possible values you can enter for the `type` field, [list available cluster types](#list-available-cluster-types-for-a-cluster).
   *
   * @param request - The request {@link SetClusterTypeRequest}
   * @returns A Promise of Cluster
   */
  setClusterType = (request: Readonly<SetClusterTypeRequest>, options?: RequestOptions) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalSetClusterTypeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/set-type`,
        signal: options?.signal,
      },
      unmarshalCluster,
    )

  
  /**
   * List available versions for a Cluster. List the versions that a specific Kubernetes cluster is allowed to upgrade to. Results will include every patch version greater than the current patch, as well as one minor version ahead of the current version. Any upgrade skipping a minor version will not work.
   *
   * @param request - The request {@link ListClusterAvailableVersionsRequest}
   * @returns A Promise of ListClusterAvailableVersionsResponse
   */
  listClusterAvailableVersions = (request: Readonly<ListClusterAvailableVersionsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListClusterAvailableVersionsResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/available-versions`,
        signal: options?.signal,
      },
      unmarshalListClusterAvailableVersionsResponse,
    )

  
  /**
   * List available cluster types for a cluster. List the cluster types that a specific Kubernetes cluster is allowed to switch to.
   *
   * @param request - The request {@link ListClusterAvailableTypesRequest}
   * @returns A Promise of ListClusterAvailableTypesResponse
   */
  listClusterAvailableTypes = (request: Readonly<ListClusterAvailableTypesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListClusterAvailableTypesResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/available-types`,
        signal: options?.signal,
      },
      unmarshalListClusterAvailableTypesResponse,
    )

  
  protected _getClusterKubeConfig = (request: Readonly<GetClusterKubeConfigRequest>, options?: RequestOptions) =>
    this.client.fetch<Blob>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/kubeconfig`,
        urlParams: urlParams(
          ['dl', 1],
          ['endpoint', request.endpoint],
          ['redacted', request.redacted],
        ),
        responseType: 'blob',
        signal: options?.signal,
      },
    )

  
  /**
   * Reset the admin token of a Cluster. Reset the admin token for a specific Kubernetes cluster. This will revoke the old admin token (which will not be usable afterwards) and create a new one. Note that you will need to download the kubeconfig again to keep interacting with the cluster.
   *
   * @param request - The request {@link ResetClusterAdminTokenRequest}
   */
  resetClusterAdminToken = (request: Readonly<ResetClusterAdminTokenRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/reset-admin-token`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListClusterACLRules = (request: Readonly<ListClusterACLRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListClusterACLRulesResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/acls`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListClusterACLRulesResponse,
    )
  
  /**
   * List ACLs. List ACLs for a specific cluster.
   *
   * @param request - The request {@link ListClusterACLRulesRequest}
   * @returns A Promise of ListClusterACLRulesResponse
   */
  listClusterACLRules = (request: Readonly<ListClusterACLRulesRequest>, options?: RequestOptions) =>
    enrichForPagination('rules', this.pageOfListClusterACLRules, request, options)

  
  /**
   * Add new ACLs. Add new ACL rules for a specific cluster.
   *
   * @param request - The request {@link AddClusterACLRulesRequest}
   * @returns A Promise of AddClusterACLRulesResponse
   */
  addClusterACLRules = (request: Readonly<AddClusterACLRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<AddClusterACLRulesResponse>(
      {
        body: JSON.stringify(
          marshalAddClusterACLRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/acls`,
        signal: options?.signal,
      },
      unmarshalAddClusterACLRulesResponse,
    )

  
  /**
   * Set new ACLs. Set new ACL rules for a specific cluster.
   *
   * @param request - The request {@link SetClusterACLRulesRequest}
   * @returns A Promise of SetClusterACLRulesResponse
   */
  setClusterACLRules = (request: Readonly<SetClusterACLRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<SetClusterACLRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetClusterACLRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/acls`,
        signal: options?.signal,
      },
      unmarshalSetClusterACLRulesResponse,
    )

  
  /**
   * Delete an existing ACL.
   *
   * @param request - The request {@link DeleteACLRuleRequest}
   */
  deleteACLRule = (request: Readonly<DeleteACLRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/acls/${validatePathParam('aclId', request.aclId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListPools = (request: Readonly<ListPoolsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListPoolsResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/pools`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['status', request.status],
        ),
        signal: options?.signal,
      },
      unmarshalListPoolsResponse,
    )
  
  /**
   * List Pools in a Cluster. List all the existing pools for a specific Kubernetes cluster.
   *
   * @param request - The request {@link ListPoolsRequest}
   * @returns A Promise of ListPoolsResponse
   */
  listPools = (request: Readonly<ListPoolsRequest>, options?: RequestOptions) =>
    enrichForPagination('pools', this.pageOfListPools, request, options)

  
  /**
   * Create a new Pool in a Cluster. Create a new pool in a specific Kubernetes cluster.
   *
   * @param request - The request {@link CreatePoolRequest}
   * @returns A Promise of Pool
   */
  createPool = (request: Readonly<CreatePoolRequest>, options?: RequestOptions) =>
    this.client.fetch<Pool>(
      {
        body: JSON.stringify(
          marshalCreatePoolRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/pools`,
        signal: options?.signal,
      },
      unmarshalPool,
    )

  
  /**
   * Get a Pool in a Cluster. Retrieve details about a specific pool in a Kubernetes cluster.
   *
   * @param request - The request {@link GetPoolRequest}
   * @returns A Promise of Pool
   */
  getPool = (request: Readonly<GetPoolRequest>, options?: RequestOptions) =>
    this.client.fetch<Pool>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!POOL_TRANSIENT_STATUSES_K8S.includes(res.status))),
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
  upgradePool = (request: Readonly<UpgradePoolRequest>, options?: RequestOptions) =>
    this.client.fetch<Pool>(
      {
        body: JSON.stringify(
          marshalUpgradePoolRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}/upgrade`,
        signal: options?.signal,
      },
      unmarshalPool,
    )

  
  /**
   * Update a Pool in a Cluster. Update the attributes of a specific pool, such as its desired size, autoscaling settings, and tags. To upgrade a pool, you will need to use the dedicated endpoint.
   *
   * @param request - The request {@link UpdatePoolRequest}
   * @returns A Promise of Pool
   */
  updatePool = (request: Readonly<UpdatePoolRequest>, options?: RequestOptions) =>
    this.client.fetch<Pool>(
      {
        body: JSON.stringify(
          marshalUpdatePoolRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}`,
        signal: options?.signal,
      },
      unmarshalPool,
    )

  
  /**
   * Delete a Pool in a Cluster. Delete a specific pool from a cluster. Note that all the pool's nodes will also be deleted.
   *
   * @param request - The request {@link DeletePoolRequest}
   * @returns A Promise of Pool
   */
  deletePool = (request: Readonly<DeletePoolRequest>, options?: RequestOptions) =>
    this.client.fetch<Pool>(
      {
        method: 'DELETE',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}`,
        signal: options?.signal,
      },
      unmarshalPool,
    )

  
  /**
   * Set a list of taints for a specific pool. Apply a list of taints to all nodes of the pool which will be periodically reconciled by scaleway.
   *
   * @param request - The request {@link SetPoolTaintsRequest}
   * @returns A Promise of Pool
   */
  setPoolTaints = (request: Readonly<SetPoolTaintsRequest>, options?: RequestOptions) =>
    this.client.fetch<Pool>(
      {
        body: JSON.stringify(
          marshalSetPoolTaintsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}/set-taints`,
        signal: options?.signal,
      },
      unmarshalPool,
    )

  
  /**
   * Set a list of startup taints for a specific pool. Apply a list of taints to new nodes of the pool which would not be reconciled by scaleway.
   *
   * @param request - The request {@link SetPoolStartupTaintsRequest}
   * @returns A Promise of Pool
   */
  setPoolStartupTaints = (request: Readonly<SetPoolStartupTaintsRequest>, options?: RequestOptions) =>
    this.client.fetch<Pool>(
      {
        body: JSON.stringify(
          marshalSetPoolStartupTaintsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}/set-startup-taints`,
        signal: options?.signal,
      },
      unmarshalPool,
    )

  
  /**
   * Set a list of labels for a specific pool. Apply a list of taints to all nodes of the pool (only apply to labels which was set through scaleway api).
   *
   * @param request - The request {@link SetPoolLabelsRequest}
   * @returns A Promise of Pool
   */
  setPoolLabels = (request: Readonly<SetPoolLabelsRequest>, options?: RequestOptions) =>
    this.client.fetch<Pool>(
      {
        body: JSON.stringify(
          marshalSetPoolLabelsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}/set-labels`,
        signal: options?.signal,
      },
      unmarshalPool,
    )

  
  /**
   * Get a pool related user data. Retrieve specific user data content for a given pool.
Tip: add `?dl=1` at the end of the URL to directly retrieve the base64 decoded content of your user data.
   *
   * @param request - The request {@link GetUserDataRequest}
   * @returns A Promise of Blob
   */
  getUserData = (request: Readonly<GetUserDataRequest>, options?: RequestOptions) =>
    this.client.fetch<Blob>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}/user-data/${validatePathParam('key', request.key)}`,
        urlParams: urlParams(
          ['dl', 1],
        ),
        responseType: 'blob',
        signal: options?.signal,
      },
    )

  
  /**
   * List all user data related to a given pool.. This list only the user data key and not the content.
   *
   * @param request - The request {@link ListUserDataRequest}
   * @returns A Promise of ListUserDataResponse
   */
  listUserData = (request: Readonly<ListUserDataRequest>, options?: RequestOptions) =>
    this.client.fetch<ListUserDataResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}/user-data`,
        signal: options?.signal,
      },
      unmarshalListUserDataResponse,
    )

  
  /**
   * Fetch node metadata. Rerieve metadata to instantiate a Kapsule/Kosmos node. This method is not intended to be called by end users but rather programmatically by the node-installer.
   *
   * @param request - The request {@link GetNodeMetadataRequest}
   * @returns A Promise of NodeMetadata
   */
  getNodeMetadata = (request: Readonly<GetNodeMetadataRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<NodeMetadata>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/node-metadata`,
        signal: options?.signal,
      },
      unmarshalNodeMetadata,
    )

  
  /**
   * Authenticate Kosmos external node. Creates a newer Kosmos node and returns its token. This method is not intended to be called by end users but rather programmatically by the node-installer.
   *
   * @param request - The request {@link AuthExternalNodeRequest}
   * @returns A Promise of ExternalNodeAuth
   */
  authExternalNode = (request: Readonly<AuthExternalNodeRequest>, options?: RequestOptions) =>
    this.client.fetch<ExternalNodeAuth>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools/${validatePathParam('poolId', request.poolId)}/external-nodes/auth`,
        signal: options?.signal,
      },
      unmarshalExternalNodeAuth,
    )

  
  protected pageOfListNodes = (request: Readonly<ListNodesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListNodesResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/nodes`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['pool_id', request.poolId],
          ['status', request.status],
        ),
        signal: options?.signal,
      },
      unmarshalListNodesResponse,
    )
  
  /**
   * List Nodes in a Cluster. List all the existing nodes for a specific Kubernetes cluster.
   *
   * @param request - The request {@link ListNodesRequest}
   * @returns A Promise of ListNodesResponse
   */
  listNodes = (request: Readonly<ListNodesRequest>, options?: RequestOptions) =>
    enrichForPagination('nodes', this.pageOfListNodes, request, options)

  
  /**
   * Get a Node in a Cluster. Retrieve details about a specific Kubernetes Node.
   *
   * @param request - The request {@link GetNodeRequest}
   * @returns A Promise of Node
   */
  getNode = (request: Readonly<GetNodeRequest>, options?: RequestOptions) =>
    this.client.fetch<Node>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nodes/${validatePathParam('nodeId', request.nodeId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!NODE_TRANSIENT_STATUSES_K8S.includes(res.status))),
      this.getNode,
      request,
      options,
    )

  
  /**
   * Replace a Node in a Cluster. Replace a specific Node. The node will first be drained and pods will be rescheduled onto another node. Note that when there is not enough space to reschedule all the pods (such as in a one-node cluster, or with specific constraints), disruption of your applications may occur.
   *
   * @param request - The request {@link ReplaceNodeRequest}
   * @returns A Promise of Node
   */
  replaceNode = (request: Readonly<ReplaceNodeRequest>, options?: RequestOptions) =>
    this.client.fetch<Node>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nodes/${validatePathParam('nodeId', request.nodeId)}/replace`,
        signal: options?.signal,
      },
      unmarshalNode,
    )

  
  /**
   * Reboot a Node in a Cluster. Reboot a specific Node. The node will first be drained and pods will be rescheduled onto another node. Note that when there is not enough space to reschedule all the pods (such as in a one-node cluster, or with specific constraints), disruption of your applications may occur.
   *
   * @param request - The request {@link RebootNodeRequest}
   * @returns A Promise of Node
   */
  rebootNode = (request: Readonly<RebootNodeRequest>, options?: RequestOptions) =>
    this.client.fetch<Node>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nodes/${validatePathParam('nodeId', request.nodeId)}/reboot`,
        signal: options?.signal,
      },
      unmarshalNode,
    )

  
  /**
   * Delete a Node in a Cluster. Delete a specific Node. Pool size is reduced by 1. The node will first be drained and pods will be rescheduled onto another node. Note that when there is not enough space to reschedule all the pods (such as in a one-node cluster, or with specific constraints), disruption of your applications may occur.
   *
   * @param request - The request {@link DeleteNodeRequest}
   * @returns A Promise of Node
   */
  deleteNode = (request: Readonly<DeleteNodeRequest>, options?: RequestOptions) =>
    this.client.fetch<Node>(
      {
        method: 'DELETE',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/nodes/${validatePathParam('nodeId', request.nodeId)}`,
        urlParams: urlParams(
          ['skip_drain', request.skipDrain],
        ),
        signal: options?.signal,
      },
      unmarshalNode,
    )

  
  /**
   * List all available Versions. List all available versions for the creation of a new Kubernetes cluster.
   *
   * @param request - The request {@link ListVersionsRequest}
   * @returns A Promise of ListVersionsResponse
   */
  listVersions = (request: Readonly<ListVersionsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/versions`,
        signal: options?.signal,
      },
      unmarshalListVersionsResponse,
    )

  
  /**
   * Get a Version. Retrieve a specific Kubernetes version and its details.
   *
   * @param request - The request {@link GetVersionRequest}
   * @returns A Promise of Version
   */
  getVersion = (request: Readonly<GetVersionRequest>, options?: RequestOptions) =>
    this.client.fetch<Version>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/versions/${validatePathParam('versionName', request.versionName)}`,
        signal: options?.signal,
      },
      unmarshalVersion,
    )

  
  protected pageOfListClusterTypes = (request: Readonly<ListClusterTypesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListClusterTypesResponse>(
      {
        method: 'GET',
        path: `/k8s/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/cluster-types`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListClusterTypesResponse,
    )
  
  /**
   * List cluster types. List available cluster types and their technical details.
   *
   * @param request - The request {@link ListClusterTypesRequest}
   * @returns A Promise of ListClusterTypesResponse
   */
  listClusterTypes = (request: Readonly<ListClusterTypesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('clusterTypes', this.pageOfListClusterTypes, request, options)

  
}

