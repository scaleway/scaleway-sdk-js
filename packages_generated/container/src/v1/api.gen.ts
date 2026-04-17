// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality, ServiceInfo, WaitForOptions } from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  toApiLocality,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import {
  CONTAINER_TRANSIENT_STATUSES as CONTAINER_TRANSIENT_STATUSES_CONTAINER,
  DOMAIN_TRANSIENT_STATUSES as DOMAIN_TRANSIENT_STATUSES_CONTAINER,
  NAMESPACE_TRANSIENT_STATUSES as NAMESPACE_TRANSIENT_STATUSES_CONTAINER,
  TRIGGER_TRANSIENT_STATUSES as TRIGGER_TRANSIENT_STATUSES_CONTAINER,
} from './content.gen.js'
import {
  marshalCreateContainerRequest,
  marshalCreateDomainRequest,
  marshalCreateNamespaceRequest,
  marshalCreateTriggerRequest,
  marshalUpdateContainerRequest,
  marshalUpdateDomainRequest,
  marshalUpdateNamespaceRequest,
  marshalUpdateTriggerRequest,
  unmarshalContainer,
  unmarshalDomain,
  unmarshalListContainersResponse,
  unmarshalListDomainsResponse,
  unmarshalListNamespacesResponse,
  unmarshalListTriggersResponse,
  unmarshalNamespace,
  unmarshalTrigger,
} from './marshalling.gen.js'
import type {
  Container,
  CreateContainerRequest,
  CreateDomainRequest,
  CreateNamespaceRequest,
  CreateTriggerRequest,
  DeleteContainerRequest,
  DeleteDomainRequest,
  DeleteNamespaceRequest,
  DeleteTriggerRequest,
  Domain,
  GetContainerRequest,
  GetDomainRequest,
  GetNamespaceRequest,
  GetServiceInfoRequest,
  GetTriggerRequest,
  ListContainersRequest,
  ListContainersResponse,
  ListDomainsRequest,
  ListDomainsResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListTriggersRequest,
  ListTriggersResponse,
  Namespace,
  RedeployContainerRequest,
  Trigger,
  UpdateContainerRequest,
  UpdateDomainRequest,
  UpdateNamespaceRequest,
  UpdateTriggerRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Serverless Containers API.

Easily run containers on the cloud with a single command.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  getServiceInfo = (request: Readonly<GetServiceInfoRequest> = {}) =>
    this.client.fetch<ServiceInfo>(
      {
        method: 'GET',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}`,
      },
      unmarshalServiceInfo,
    )

  /**
   * Create a new namespace.. Namespace name must be unique inside a project.
   *
   * @param request - The request {@link CreateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  createNamespace = (request: Readonly<CreateNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        body: JSON.stringify(marshalCreateNamespaceRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces`,
      },
      unmarshalNamespace,
    )

  /**
   * Get the namespace associated with the specified ID.. Get the namespace associated with the specified ID.
   *
   * @param request - The request {@link GetNamespaceRequest}
   * @returns A Promise of Namespace
   */
  getNamespace = (request: Readonly<GetNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'GET',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  /**
   * Waits for {@link Namespace} to be in a final state.
   *
   * @param request - The request {@link GetNamespaceRequest}
   * @param options - The waiting options
   * @returns A Promise of Namespace
   */
  waitForNamespace = (request: Readonly<GetNamespaceRequest>, options?: Readonly<WaitForOptions<Namespace>>) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!NAMESPACE_TRANSIENT_STATUSES_CONTAINER.includes(res.status))),
      this.getNamespace,
      request,
      options,
    )

  protected pageOfListNamespaces = (request: Readonly<ListNamespacesRequest> = {}) =>
    this.client.fetch<ListNamespacesResponse>(
      {
        method: 'GET',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListNamespacesResponse,
    )

  /**
   * List all namespaces the caller can access (read permission).. By default, the namespaces listed are ordered by creation date in ascending order. This can be modified via the `order_by` field.

Additional parameters can be set in the query to filter, such as `organization_id`, `project_id`, and `name`.
   *
   * @param request - The request {@link ListNamespacesRequest}
   * @returns A Promise of ListNamespacesResponse
   */
  listNamespaces = (request: Readonly<ListNamespacesRequest> = {}) =>
    enrichForPagination('namespaces', this.pageOfListNamespaces, request)

  /**
   * Update the namespace associated with the specified ID.. Only fields present in the request are updated; others are left untouched.
   *
   * @param request - The request {@link UpdateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  updateNamespace = (request: Readonly<UpdateNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        body: JSON.stringify(marshalUpdateNamespaceRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  /**
   * Delete the namespace associated with the specified ID.. It also deletes in cascade any resource inside the namespace.

This action **cannot** be undone.
   *
   * @param request - The request {@link DeleteNamespaceRequest}
   * @returns A Promise of Namespace
   */
  deleteNamespace = (request: Readonly<DeleteNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'DELETE',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  /**
   * Create a new container in a namespace.. Name must be unique inside the given namespace.
   *
   * @param request - The request {@link CreateContainerRequest}
   * @returns A Promise of Container
   */
  createContainer = (request: Readonly<CreateContainerRequest>) =>
    this.client.fetch<Container>(
      {
        body: JSON.stringify(marshalCreateContainerRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers`,
      },
      unmarshalContainer,
    )

  /**
   * Get the container associated with the specified ID.. Get the container associated with the specified ID.
   *
   * @param request - The request {@link GetContainerRequest}
   * @returns A Promise of Container
   */
  getContainer = (request: Readonly<GetContainerRequest>) =>
    this.client.fetch<Container>(
      {
        method: 'GET',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers/${validatePathParam('containerId', request.containerId)}`,
      },
      unmarshalContainer,
    )

  /**
   * Waits for {@link Container} to be in a final state.
   *
   * @param request - The request {@link GetContainerRequest}
   * @param options - The waiting options
   * @returns A Promise of Container
   */
  waitForContainer = (request: Readonly<GetContainerRequest>, options?: Readonly<WaitForOptions<Container>>) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!CONTAINER_TRANSIENT_STATUSES_CONTAINER.includes(res.status))),
      this.getContainer,
      request,
      options,
    )

  protected pageOfListContainers = (request: Readonly<ListContainersRequest> = {}) =>
    this.client.fetch<ListContainersResponse>(
      {
        method: 'GET',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers`,
        urlParams: urlParams(
          ['name', request.name],
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListContainersResponse,
    )

  /**
   * List all containers the caller can access (read permission).. By default, the containers listed are ordered by creation date in ascending order. This can be modified via the `order_by` field.

Additional parameters can be set in the query to filter, such as `organization_id`, `project_id`, and `name`.
   *
   * @param request - The request {@link ListContainersRequest}
   * @returns A Promise of ListContainersResponse
   */
  listContainers = (request: Readonly<ListContainersRequest> = {}) =>
    enrichForPagination('containers', this.pageOfListContainers, request)

  /**
   * Update the container associated with the specified ID.. Only fields present in the request are updated; others are left untouched.
   *
   * @param request - The request {@link UpdateContainerRequest}
   * @returns A Promise of Container
   */
  updateContainer = (request: Readonly<UpdateContainerRequest>) =>
    this.client.fetch<Container>(
      {
        body: JSON.stringify(marshalUpdateContainerRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers/${validatePathParam('containerId', request.containerId)}`,
      },
      unmarshalContainer,
    )

  /**
   * Delete the container associated with the specified ID.. It also deletes in cascade any resource linked to the container (crons, tokens, etc.).

This action **cannot** be undone.
   *
   * @param request - The request {@link DeleteContainerRequest}
   * @returns A Promise of Container
   */
  deleteContainer = (request: Readonly<DeleteContainerRequest>) =>
    this.client.fetch<Container>(
      {
        method: 'DELETE',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers/${validatePathParam('containerId', request.containerId)}`,
      },
      unmarshalContainer,
    )

  /**
   * Create a new custom domain for the container with the specified ID.. Create a new custom domain for the container with the specified ID.
   *
   * @param request - The request {@link CreateDomainRequest}
   * @returns A Promise of Domain
   */
  createDomain = (request: Readonly<CreateDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        body: JSON.stringify(marshalCreateDomainRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains`,
      },
      unmarshalDomain,
    )

  /**
   * Get the custom domain associated with the specified ID.. Get the custom domain associated with the specified ID.
   *
   * @param request - The request {@link GetDomainRequest}
   * @returns A Promise of Domain
   */
  getDomain = (request: Readonly<GetDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'GET',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}`,
      },
      unmarshalDomain,
    )

  /**
   * Waits for {@link Domain} to be in a final state.
   *
   * @param request - The request {@link GetDomainRequest}
   * @param options - The waiting options
   * @returns A Promise of Domain
   */
  waitForDomain = (request: Readonly<GetDomainRequest>, options?: Readonly<WaitForOptions<Domain>>) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!DOMAIN_TRANSIENT_STATUSES_CONTAINER.includes(res.status))),
      this.getDomain,
      request,
      options,
    )

  protected pageOfListDomains = (request: Readonly<ListDomainsRequest> = {}) =>
    this.client.fetch<ListDomainsResponse>(
      {
        method: 'GET',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains`,
        urlParams: urlParams(
          ['container_id', request.containerId],
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListDomainsResponse,
    )

  /**
   * List all custom domains the caller can access (read permission).. By default, the custom domains listed are ordered by creation date in ascending order. This can be modified via the `order_by` field.
    
Additional parameters can be set in the query to filter the output, such as `organization_id`, `project_id`, `namespace_id`, or `container_id`.
   *
   * @param request - The request {@link ListDomainsRequest}
   * @returns A Promise of ListDomainsResponse
   */
  listDomains = (request: Readonly<ListDomainsRequest> = {}) =>
    enrichForPagination('domains', this.pageOfListDomains, request)

  /**
   * Update the domain associated with the specified ID.. Only fields present in the request are updated; others are left untouched.
   *
   * @param request - The request {@link UpdateDomainRequest}
   * @returns A Promise of Domain
   */
  updateDomain = (request: Readonly<UpdateDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        body: JSON.stringify(marshalUpdateDomainRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}`,
      },
      unmarshalDomain,
    )

  /**
   * Delete the custom domain associated with the specified ID.. Delete the custom domain associated with the specified ID.
   *
   * @param request - The request {@link DeleteDomainRequest}
   * @returns A Promise of Domain
   */
  deleteDomain = (request: Readonly<DeleteDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'DELETE',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}`,
      },
      unmarshalDomain,
    )

  /**
   * Redeploy a container. Performs a rollout of the container by creating new instances with the latest image version and terminating the old instances.
When using mutable registry image references (e.g. `my-registry-namespace/image:tag`), this endpoint can be used to force the container to use
the most recent image version available in the registry.
   *
   * @param request - The request {@link RedeployContainerRequest}
   * @returns A Promise of Container
   */
  redeployContainer = (request: Readonly<RedeployContainerRequest>) =>
    this.client.fetch<Container>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers/${validatePathParam('containerId', request.containerId)}/redeploy`,
      },
      unmarshalContainer,
    )

  /**
   * Create a new trigger for the container with the specified ID.. Create a new trigger for the container with the specified ID.
   *
   * @param request - The request {@link CreateTriggerRequest}
   * @returns A Promise of Trigger
   */
  createTrigger = (request: Readonly<CreateTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        body: JSON.stringify(marshalCreateTriggerRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers`,
      },
      unmarshalTrigger,
    )

  /**
   * Get the trigger associated with the specified ID.. Get the trigger associated with the specified ID.
   *
   * @param request - The request {@link GetTriggerRequest}
   * @returns A Promise of Trigger
   */
  getTrigger = (request: Readonly<GetTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        method: 'GET',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
      },
      unmarshalTrigger,
    )

  /**
   * Waits for {@link Trigger} to be in a final state.
   *
   * @param request - The request {@link GetTriggerRequest}
   * @param options - The waiting options
   * @returns A Promise of Trigger
   */
  waitForTrigger = (request: Readonly<GetTriggerRequest>, options?: Readonly<WaitForOptions<Trigger>>) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!TRIGGER_TRANSIENT_STATUSES_CONTAINER.includes(res.status))),
      this.getTrigger,
      request,
      options,
    )

  protected pageOfListTriggers = (request: Readonly<ListTriggersRequest> = {}) =>
    this.client.fetch<ListTriggersResponse>(
      {
        method: 'GET',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers`,
        urlParams: urlParams(
          ['container_id', request.containerId],
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListTriggersResponse,
    )

  /**
   * List all triggers the caller can access (read permission).. By default, the triggers listed are ordered by creation date in ascending order. This can be modified via the `order_by` field.

Additional parameters can be set in the query to filter, such as `organization_id`, `project_id`, `namespace_id`, or `container_id`.
   *
   * @param request - The request {@link ListTriggersRequest}
   * @returns A Promise of ListTriggersResponse
   */
  listTriggers = (request: Readonly<ListTriggersRequest> = {}) =>
    enrichForPagination('triggers', this.pageOfListTriggers, request)

  /**
   * Update the trigger associated with the specified ID.. When updating a trigger, you cannot specify a different source type than the one already set.
Only fields present in the request are updated; others are left untouched.
   *
   * @param request - The request {@link UpdateTriggerRequest}
   * @returns A Promise of Trigger
   */
  updateTrigger = (request: Readonly<UpdateTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        body: JSON.stringify(marshalUpdateTriggerRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
      },
      unmarshalTrigger,
    )

  /**
   * Delete the trigger associated with the specified ID.. This action **cannot** be undone.
   *
   * @param request - The request {@link DeleteTriggerRequest}
   * @returns A Promise of Trigger
   */
  deleteTrigger = (request: Readonly<DeleteTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        method: 'DELETE',
        path: `/containers/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
      },
      unmarshalTrigger,
    )
}
