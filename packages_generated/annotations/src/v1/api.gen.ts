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
import {
  unmarshalBinding,
  marshalCreateBindingRequest,
  marshalCreateKeyRequest,
  marshalCreateValueRequest,
  unmarshalDeleteAllBindingsMatchingSRNResponse,
  unmarshalDeleteAllBindingsMatchingValueResponse,
  unmarshalDeleteAllValuesMatchingKeyResponse,
  unmarshalKey,
  unmarshalListAllKeysAndValuesResponse,
  unmarshalListBindingsResponse,
  unmarshalListKeysResponse,
  unmarshalListValuesResponse,
  marshalUpdateKeyRequest,
  marshalUpdateValueRequest,
  unmarshalValue,
} from './marshalling.gen.js'
import type {
  Binding,
  CreateBindingRequest,
  CreateKeyRequest,
  CreateValueRequest,
  DeleteAllBindingsMatchingSRNRequest,
  DeleteAllBindingsMatchingSRNResponse,
  DeleteAllBindingsMatchingValueRequest,
  DeleteAllBindingsMatchingValueResponse,
  DeleteAllValuesMatchingKeyRequest,
  DeleteAllValuesMatchingKeyResponse,
  DeleteBindingRequest,
  DeleteKeyRequest,
  DeleteValueRequest,
  GetKeyRequest,
  GetValueRequest,
  Key,
  ListAllKeysAndValuesRequest,
  ListAllKeysAndValuesResponse,
  ListBindingsRequest,
  ListBindingsResponse,
  ListKeysRequest,
  ListKeysResponse,
  ListValuesRequest,
  ListValuesResponse,
  UpdateKeyRequest,
  UpdateValueRequest,
  Value,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Annotations API.
 */
export class API extends ParentAPI {
  /**
   * Create an annotation key.. Create an annotation key.
   *
   * @param request - The request {@link CreateKeyRequest}
   * @returns A Promise of Key
   */
  createKey = (request: Readonly<CreateKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<Key>(
      {
        body: JSON.stringify(
          marshalCreateKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/annotations/v1/keys`,
        signal: options?.signal,
      },
      unmarshalKey,
    )

  
  protected pageOfListKeys = (request: Readonly<ListKeysRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListKeysResponse>(
      {
        method: 'GET',
        path: `/annotations/v1/keys`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListKeysResponse,
    )
  
  /**
   * List all keys, sorted alphabetically by name.. List all keys, sorted alphabetically by name.
   *
   * @param request - The request {@link ListKeysRequest}
   * @returns A Promise of ListKeysResponse
   */
  listKeys = (request: Readonly<ListKeysRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('keys', this.pageOfListKeys, request, options)

  
  /**
   * Retrieve a specific key.. Retrieve a specific key.
   *
   * @param request - The request {@link GetKeyRequest}
   * @returns A Promise of Key
   */
  getKey = (request: Readonly<GetKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<Key>(
      {
        method: 'GET',
        path: `/annotations/v1/keys/${validatePathParam('keyId', request.keyId)}`,
        signal: options?.signal,
      },
      unmarshalKey,
    )

  
  /**
   * Update name or description. All associated resources will immediately display the new name.. Update name or description. All associated resources will immediately display the new name.
   *
   * @param request - The request {@link UpdateKeyRequest}
   * @returns A Promise of Key
   */
  updateKey = (request: Readonly<UpdateKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<Key>(
      {
        body: JSON.stringify(
          marshalUpdateKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/annotations/v1/keys/${validatePathParam('keyId', request.keyId)}`,
        signal: options?.signal,
      },
      unmarshalKey,
    )

  
  /**
   * Delete a key definition. Fails if the key has any associated values.. Delete a key definition. Fails if the key has any associated values.
   *
   * @param request - The request {@link DeleteKeyRequest}
   */
  deleteKey = (request: Readonly<DeleteKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/annotations/v1/keys/${validatePathParam('keyId', request.keyId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Add a value definition to a key.. Add a value definition to a key.
   *
   * @param request - The request {@link CreateValueRequest}
   * @returns A Promise of Value
   */
  createValue = (request: Readonly<CreateValueRequest>, options?: RequestOptions) =>
    this.client.fetch<Value>(
      {
        body: JSON.stringify(
          marshalCreateValueRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/annotations/v1/values`,
        signal: options?.signal,
      },
      unmarshalValue,
    )

  
  protected pageOfListValues = (request: Readonly<ListValuesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListValuesResponse>(
      {
        method: 'GET',
        path: `/annotations/v1/values`,
        urlParams: urlParams(
          ['key_id', request.keyId],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListValuesResponse,
    )
  
  /**
   * List all values, sorted alphabetically by name.. List all values, sorted alphabetically by name.
   *
   * @param request - The request {@link ListValuesRequest}
   * @returns A Promise of ListValuesResponse
   */
  listValues = (request: Readonly<ListValuesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('values', this.pageOfListValues, request, options)

  
  /**
   * Retrieve a specific value.. Retrieve a specific value.
   *
   * @param request - The request {@link GetValueRequest}
   * @returns A Promise of Value
   */
  getValue = (request: Readonly<GetValueRequest>, options?: RequestOptions) =>
    this.client.fetch<Value>(
      {
        method: 'GET',
        path: `/annotations/v1/values/${validatePathParam('valueId', request.valueId)}`,
        signal: options?.signal,
      },
      unmarshalValue,
    )

  
  /**
   * Update name or description.. Update name or description.
   *
   * @param request - The request {@link UpdateValueRequest}
   * @returns A Promise of Value
   */
  updateValue = (request: Readonly<UpdateValueRequest>, options?: RequestOptions) =>
    this.client.fetch<Value>(
      {
        body: JSON.stringify(
          marshalUpdateValueRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/annotations/v1/values/${validatePathParam('valueId', request.valueId)}`,
        signal: options?.signal,
      },
      unmarshalValue,
    )

  
  /**
   * Delete a value definition. Fails if the value is currently bound to any resource.. Delete a value definition. Fails if the value is currently bound to any resource.
   *
   * @param request - The request {@link DeleteValueRequest}
   */
  deleteValue = (request: Readonly<DeleteValueRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/annotations/v1/values/${validatePathParam('valueId', request.valueId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Delete ALL values associated with a key. Fails if any of these values are currently bound to any resource.. Delete ALL values associated with a key. Fails if any of these values are currently bound to any resource.
   *
   * @param request - The request {@link DeleteAllValuesMatchingKeyRequest}
   * @returns A Promise of DeleteAllValuesMatchingKeyResponse
   */
  deleteAllValuesMatchingKey = (request: Readonly<DeleteAllValuesMatchingKeyRequest>, options?: RequestOptions) =>
    this.client.fetch<DeleteAllValuesMatchingKeyResponse>(
      {
        method: 'DELETE',
        path: `/annotations/v1/values/delete-all-matching-key`,
        urlParams: urlParams(
          ['key_id', request.keyId],
        ),
        signal: options?.signal,
      },
      unmarshalDeleteAllValuesMatchingKeyResponse,
    )

  
  /**
   * List all keys and values for an organization, sorted alphabetically by key name and value name.. List all keys and values for an organization, sorted alphabetically by key name and value name.
   *
   * @param request - The request {@link ListAllKeysAndValuesRequest}
   * @returns A Promise of ListAllKeysAndValuesResponse
   */
  listAllKeysAndValues = (request: Readonly<ListAllKeysAndValuesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListAllKeysAndValuesResponse>(
      {
        method: 'GET',
        path: `/annotations/v1/all-keys-and-values`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
        ),
        signal: options?.signal,
      },
      unmarshalListAllKeysAndValuesResponse,
    )

  
  /**
   * Attach a value to a resource. Fails if the resource already has a value for this key.. Attach a value to a resource. Fails if the resource already has a value for this key.
   *
   * @param request - The request {@link CreateBindingRequest}
   * @returns A Promise of Binding
   */
  createBinding = (request: Readonly<CreateBindingRequest>, options?: RequestOptions) =>
    this.client.fetch<Binding>(
      {
        body: JSON.stringify(
          marshalCreateBindingRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/annotations/v1/bindings`,
        signal: options?.signal,
      },
      unmarshalBinding,
    )

  
  protected pageOfListBindings = (request: Readonly<ListBindingsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListBindingsResponse>(
      {
        method: 'GET',
        path: `/annotations/v1/bindings`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['target_srn', request.targetSrn],
          ['value_id', request.valueId],
        ),
        signal: options?.signal,
      },
      unmarshalListBindingsResponse,
    )
  
  /**
   * List all bindings, or filter by Scaleway Resource Name or value ID. Response order by ID.. List all bindings, or filter by Scaleway Resource Name or value ID. Response order by ID.
   *
   * @param request - The request {@link ListBindingsRequest}
   * @returns A Promise of ListBindingsResponse
   */
  listBindings = (request: Readonly<ListBindingsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('bindings', this.pageOfListBindings, request, options)

  
  /**
   * Detach an annotation from a resource.. Detach an annotation from a resource.
   *
   * @param request - The request {@link DeleteBindingRequest}
   */
  deleteBinding = (request: Readonly<DeleteBindingRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/annotations/v1/bindings/${validatePathParam('bindingId', request.bindingId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Delete ALL bindings associated with a value.. Delete ALL bindings associated with a value.
   *
   * @param request - The request {@link DeleteAllBindingsMatchingValueRequest}
   * @returns A Promise of DeleteAllBindingsMatchingValueResponse
   */
  deleteAllBindingsMatchingValue = (request: Readonly<DeleteAllBindingsMatchingValueRequest>, options?: RequestOptions) =>
    this.client.fetch<DeleteAllBindingsMatchingValueResponse>(
      {
        method: 'DELETE',
        path: `/annotations/v1/bindings/delete-all-matching-value`,
        urlParams: urlParams(
          ['value_id', request.valueId],
        ),
        signal: options?.signal,
      },
      unmarshalDeleteAllBindingsMatchingValueResponse,
    )

  
  /**
   * Delete ALL bindings associated with a Scaleway Resource Name.. Delete ALL bindings associated with a Scaleway Resource Name.
   *
   * @param request - The request {@link DeleteAllBindingsMatchingSRNRequest}
   * @returns A Promise of DeleteAllBindingsMatchingSRNResponse
   */
  deleteAllBindingsMatchingSRN = (request: Readonly<DeleteAllBindingsMatchingSRNRequest>, options?: RequestOptions) =>
    this.client.fetch<DeleteAllBindingsMatchingSRNResponse>(
      {
        method: 'DELETE',
        path: `/annotations/v1/bindings/delete-all-matching-srn`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['target_srn', request.targetSrn],
        ),
        signal: options?.signal,
      },
      unmarshalDeleteAllBindingsMatchingSRNResponse,
    )

  
}

