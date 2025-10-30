// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality, WaitForOptions } from '@scaleway/sdk-client'
import {
  API as ParentAPI,
  enrichForPagination,
  toApiLocality,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import { DEPLOYMENT_TRANSIENT_STATUSES as DEPLOYMENT_TRANSIENT_STATUSES_INFERENCE } from './content.gen.js'
import {
  marshalAddDeploymentACLRulesRequest,
  marshalCreateDeploymentRequest,
  marshalCreateEndpointRequest,
  marshalSetDeploymentACLRulesRequest,
  marshalUpdateDeploymentRequest,
  marshalUpdateEndpointRequest,
  unmarshalAddDeploymentACLRulesResponse,
  unmarshalDeployment,
  unmarshalEndpoint,
  unmarshalEula,
  unmarshalListDeploymentACLRulesResponse,
  unmarshalListDeploymentsResponse,
  unmarshalListModelsResponse,
  unmarshalListNodeTypesResponse,
  unmarshalModel,
  unmarshalSetDeploymentACLRulesResponse,
} from './marshalling.gen.js'
import type {
  AddDeploymentACLRulesRequest,
  AddDeploymentACLRulesResponse,
  CreateDeploymentRequest,
  CreateEndpointRequest,
  DeleteDeploymentACLRuleRequest,
  DeleteDeploymentRequest,
  DeleteEndpointRequest,
  Deployment,
  Endpoint,
  Eula,
  GetDeploymentCertificateRequest,
  GetDeploymentRequest,
  GetModelEulaRequest,
  GetModelRequest,
  ListDeploymentACLRulesRequest,
  ListDeploymentACLRulesResponse,
  ListDeploymentsRequest,
  ListDeploymentsResponse,
  ListModelsRequest,
  ListModelsResponse,
  ListNodeTypesRequest,
  ListNodeTypesResponse,
  Model,
  SetDeploymentACLRulesRequest,
  SetDeploymentACLRulesResponse,
  UpdateDeploymentRequest,
  UpdateEndpointRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Managed Inference API.

This API allows you to manage your Inference services.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par'],
  })

  protected pageOfListDeployments = (
    request: Readonly<ListDeploymentsRequest> = {},
  ) =>
    this.client.fetch<ListDeploymentsResponse>(
      {
        method: 'GET',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments`,
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
        ),
      },
      unmarshalListDeploymentsResponse,
    )

  /**
   * List inference deployments. List all your inference deployments.
   *
   * @param request - The request {@link ListDeploymentsRequest}
   * @returns A Promise of ListDeploymentsResponse
   */
  listDeployments = (request: Readonly<ListDeploymentsRequest> = {}) =>
    enrichForPagination('deployments', this.pageOfListDeployments, request)

  /**
   * Get a deployment. Get the deployment for the given ID.
   *
   * @param request - The request {@link GetDeploymentRequest}
   * @returns A Promise of Deployment
   */
  getDeployment = (request: Readonly<GetDeploymentRequest>) =>
    this.client.fetch<Deployment>(
      {
        method: 'GET',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
      },
      unmarshalDeployment,
    )

  /**
   * Waits for {@link Deployment} to be in a final state.
   *
   * @param request - The request {@link GetDeploymentRequest}
   * @param options - The waiting options
   * @returns A Promise of Deployment
   */
  waitForDeployment = (
    request: Readonly<GetDeploymentRequest>,
    options?: Readonly<WaitForOptions<Deployment>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !DEPLOYMENT_TRANSIENT_STATUSES_INFERENCE.includes(res.status),
          )),
      this.getDeployment,
      request,
      options,
    )

  /**
   * Create a deployment. Create a new inference deployment related to a specific model.
   *
   * @param request - The request {@link CreateDeploymentRequest}
   * @returns A Promise of Deployment
   */
  createDeployment = (request: Readonly<CreateDeploymentRequest>) =>
    this.client.fetch<Deployment>(
      {
        body: JSON.stringify(
          marshalCreateDeploymentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments`,
      },
      unmarshalDeployment,
    )

  /**
   * Update a deployment. Update an existing inference deployment.
   *
   * @param request - The request {@link UpdateDeploymentRequest}
   * @returns A Promise of Deployment
   */
  updateDeployment = (request: Readonly<UpdateDeploymentRequest>) =>
    this.client.fetch<Deployment>(
      {
        body: JSON.stringify(
          marshalUpdateDeploymentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
      },
      unmarshalDeployment,
    )

  /**
   * Delete a deployment. Delete an existing inference deployment.
   *
   * @param request - The request {@link DeleteDeploymentRequest}
   * @returns A Promise of Deployment
   */
  deleteDeployment = (request: Readonly<DeleteDeploymentRequest>) =>
    this.client.fetch<Deployment>(
      {
        method: 'DELETE',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
      },
      unmarshalDeployment,
    )

  /**
   * Get the CA certificate. Get the CA certificate used for the deployment of private endpoints.
The CA certificate will be returned as a PEM file.
   *
   * @param request - The request {@link GetDeploymentCertificateRequest}
   * @returns A Promise of Blob
   */
  getDeploymentCertificate = (
    request: Readonly<GetDeploymentCertificateRequest>,
  ) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/certificate`,
      urlParams: urlParams(['dl', 1]),
      responseType: 'blob',
    })

  /**
   * Create an endpoint. Create a new Endpoint related to a specific deployment.
   *
   * @param request - The request {@link CreateEndpointRequest}
   * @returns A Promise of Endpoint
   */
  createEndpoint = (request: Readonly<CreateEndpointRequest>) =>
    this.client.fetch<Endpoint>(
      {
        body: JSON.stringify(
          marshalCreateEndpointRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints`,
      },
      unmarshalEndpoint,
    )

  /**
   * Update an endpoint. Update an existing Endpoint.
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
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
      },
      unmarshalEndpoint,
    )

  /**
   * Delete an endpoint. Delete an existing Endpoint.
   *
   * @param request - The request {@link DeleteEndpointRequest}
   */
  deleteEndpoint = (request: Readonly<DeleteEndpointRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
    })

  protected pageOfListDeploymentACLRules = (
    request: Readonly<ListDeploymentACLRulesRequest>,
  ) =>
    this.client.fetch<ListDeploymentACLRulesResponse>(
      {
        method: 'GET',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/acls`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListDeploymentACLRulesResponse,
    )

  /**
   * List your ACLs. List ACLs for a specific deployment.
   *
   * @param request - The request {@link ListDeploymentACLRulesRequest}
   * @returns A Promise of ListDeploymentACLRulesResponse
   */
  listDeploymentACLRules = (request: Readonly<ListDeploymentACLRulesRequest>) =>
    enrichForPagination('rules', this.pageOfListDeploymentACLRules, request)

  /**
   * Add new ACLs. Add new ACL rules for a specific deployment.
   *
   * @param request - The request {@link AddDeploymentACLRulesRequest}
   * @returns A Promise of AddDeploymentACLRulesResponse
   */
  addDeploymentACLRules = (request: Readonly<AddDeploymentACLRulesRequest>) =>
    this.client.fetch<AddDeploymentACLRulesResponse>(
      {
        body: JSON.stringify(
          marshalAddDeploymentACLRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/acls`,
      },
      unmarshalAddDeploymentACLRulesResponse,
    )

  /**
   * Set new ACL. Set new ACL rules for a specific deployment.
   *
   * @param request - The request {@link SetDeploymentACLRulesRequest}
   * @returns A Promise of SetDeploymentACLRulesResponse
   */
  setDeploymentACLRules = (request: Readonly<SetDeploymentACLRulesRequest>) =>
    this.client.fetch<SetDeploymentACLRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetDeploymentACLRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/acls`,
      },
      unmarshalSetDeploymentACLRulesResponse,
    )

  /**
   * Delete an existing ACL.
   *
   * @param request - The request {@link DeleteDeploymentACLRuleRequest}
   */
  deleteDeploymentACLRule = (
    request: Readonly<DeleteDeploymentACLRuleRequest>,
  ) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/acls/${validatePathParam('aclId', request.aclId)}`,
    })

  protected pageOfListModels = (request: Readonly<ListModelsRequest> = {}) =>
    this.client.fetch<ListModelsResponse>(
      {
        method: 'GET',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/models`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
      },
      unmarshalListModelsResponse,
    )

  /**
   * List models. List all available models.
   *
   * @param request - The request {@link ListModelsRequest}
   * @returns A Promise of ListModelsResponse
   */
  listModels = (request: Readonly<ListModelsRequest> = {}) =>
    enrichForPagination('models', this.pageOfListModels, request)

  /**
   * Get a model. Get the model for the given ID.
   *
   * @param request - The request {@link GetModelRequest}
   * @returns A Promise of Model
   */
  getModel = (request: Readonly<GetModelRequest>) =>
    this.client.fetch<Model>(
      {
        method: 'GET',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/models/${validatePathParam('modelId', request.modelId)}`,
      },
      unmarshalModel,
    )

  getModelEula = (request: Readonly<GetModelEulaRequest>) =>
    this.client.fetch<Eula>(
      {
        method: 'GET',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/models/${validatePathParam('modelId', request.modelId)}/eula`,
      },
      unmarshalEula,
    )

  protected pageOfListNodeTypes = (request: Readonly<ListNodeTypesRequest>) =>
    this.client.fetch<ListNodeTypesResponse>(
      {
        method: 'GET',
        path: `/inference/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/node-types`,
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
}
