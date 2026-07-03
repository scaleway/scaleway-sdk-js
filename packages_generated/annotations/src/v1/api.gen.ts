// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
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
  createKey = (request: Readonly<CreateKeyRequest>) =>
    this.client.fetch<Key>(
      {
        body: JSON.stringify(
          marshalCreateKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/annotations/v1/keys`,
      },
      unmarshalKey,
    )

  
  protected pageOfListKeys = (request: Readonly<ListKeysRequest> = {}) =>
    this.client.fetch<ListKeysResponse>(
      {
        method: 'GET',
        path: `/annotations/v1/keys`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListKeysResponse,
    )
  
  /**
   * List of keys.. List of keys.
   *
   * @param request - The request {@link ListKeysRequest}
   * @returns A Promise of ListKeysResponse
   */
  listKeys = (request: Readonly<ListKeysRequest> = {}) =>
    enrichForPagination('keys', this.pageOfListKeys, request)

  
  /**
   * Retrieve a specific key.. Retrieve a specific key.
   *
   * @param request - The request {@link GetKeyRequest}
   * @returns A Promise of Key
   */
  getKey = (request: Readonly<GetKeyRequest>) =>
    this.client.fetch<Key>(
      {
        method: 'GET',
        path: `/annotations/v1/keys/${validatePathParam('keyId', request.keyId)}`,
      },
      unmarshalKey,
    )

  
  /**
   * Update name or description. All associated resources will immediately display the new name.. Update name or description. All associated resources will immediately display the new name.
   *
   * @param request - The request {@link UpdateKeyRequest}
   * @returns A Promise of Key
   */
  updateKey = (request: Readonly<UpdateKeyRequest>) =>
    this.client.fetch<Key>(
      {
        body: JSON.stringify(
          marshalUpdateKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/annotations/v1/keys/${validatePathParam('keyId', request.keyId)}`,
      },
      unmarshalKey,
    )

  
  /**
   * Delete a key definition. Fails if the key has any associated values.. Delete a key definition. Fails if the key has any associated values.
   *
   * @param request - The request {@link DeleteKeyRequest}
   */
  deleteKey = (request: Readonly<DeleteKeyRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/annotations/v1/keys/${validatePathParam('keyId', request.keyId)}`,
      },
    )

  
  /**
   * Add a value definition to a key.. Add a value definition to a key.
   *
   * @param request - The request {@link CreateValueRequest}
   * @returns A Promise of Value
   */
  createValue = (request: Readonly<CreateValueRequest>) =>
    this.client.fetch<Value>(
      {
        body: JSON.stringify(
          marshalCreateValueRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/annotations/v1/values`,
      },
      unmarshalValue,
    )

  
  protected pageOfListValues = (request: Readonly<ListValuesRequest> = {}) =>
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
      },
      unmarshalListValuesResponse,
    )
  
  /**
   * List all values for a key, sorted alphabetically by name.. List all values for a key, sorted alphabetically by name.
   *
   * @param request - The request {@link ListValuesRequest}
   * @returns A Promise of ListValuesResponse
   */
  listValues = (request: Readonly<ListValuesRequest> = {}) =>
    enrichForPagination('values', this.pageOfListValues, request)

  
  /**
   * Retrieve a specific value.. Retrieve a specific value.
   *
   * @param request - The request {@link GetValueRequest}
   * @returns A Promise of Value
   */
  getValue = (request: Readonly<GetValueRequest>) =>
    this.client.fetch<Value>(
      {
        method: 'GET',
        path: `/annotations/v1/values/${validatePathParam('valueId', request.valueId)}`,
      },
      unmarshalValue,
    )

  
  /**
   * Update name or description. Global update.. Update name or description. Global update.
   *
   * @param request - The request {@link UpdateValueRequest}
   * @returns A Promise of Value
   */
  updateValue = (request: Readonly<UpdateValueRequest>) =>
    this.client.fetch<Value>(
      {
        body: JSON.stringify(
          marshalUpdateValueRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/annotations/v1/values/${validatePathParam('valueId', request.valueId)}`,
      },
      unmarshalValue,
    )

  
  /**
   * Delete a value definition. Fails if the value is currently bound to any resource.. Delete a value definition. Fails if the value is currently bound to any resource.
   *
   * @param request - The request {@link DeleteValueRequest}
   */
  deleteValue = (request: Readonly<DeleteValueRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/annotations/v1/values/${validatePathParam('valueId', request.valueId)}`,
      },
    )

  
  /**
   * Delete ALL values associated with a key. Fails if any of these values are currently bound to any resource.. Delete ALL values associated with a key. Fails if any of these values are currently bound to any resource.
   *
   * @param request - The request {@link DeleteAllValuesMatchingKeyRequest}
   * @returns A Promise of DeleteAllValuesMatchingKeyResponse
   */
  deleteAllValuesMatchingKey = (request: Readonly<DeleteAllValuesMatchingKeyRequest>) =>
    this.client.fetch<DeleteAllValuesMatchingKeyResponse>(
      {
        method: 'DELETE',
        path: `/annotations/v1/values/delete-all-matching-key`,
        urlParams: urlParams(
          ['key_id', request.keyId],
        ),
      },
      unmarshalDeleteAllValuesMatchingKeyResponse,
    )

  
  /**
   * List all keys and values for an organization, sorted alphabetically by key name and value name.. List all keys and values for an organization, sorted alphabetically by key name and value name.
   *
   * @param request - The request {@link ListAllKeysAndValuesRequest}
   * @returns A Promise of ListAllKeysAndValuesResponse
   */
  listAllKeysAndValues = (request: Readonly<ListAllKeysAndValuesRequest> = {}) =>
    this.client.fetch<ListAllKeysAndValuesResponse>(
      {
        method: 'GET',
        path: `/annotations/v1/all-keys-and-values`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
        ),
      },
      unmarshalListAllKeysAndValuesResponse,
    )

  
  /**
   * Attach a value to a resource. Fails if the resource already has a value for this key.. Attach a value to a resource. Fails if the resource already has a value for this key.
   *
   * @param request - The request {@link CreateBindingRequest}
   * @returns A Promise of Binding
   */
  createBinding = (request: Readonly<CreateBindingRequest>) =>
    this.client.fetch<Binding>(
      {
        body: JSON.stringify(
          marshalCreateBindingRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/annotations/v1/bindings`,
      },
      unmarshalBinding,
    )

  
  protected pageOfListBindings = (request: Readonly<ListBindingsRequest> = {}) =>
    this.client.fetch<ListBindingsResponse>(
      {
        method: 'GET',
        path: `/annotations/v1/bindings`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['srn', request.srn],
          ['value_id', request.valueId],
        ),
      },
      unmarshalListBindingsResponse,
    )
  
  /**
   * List all bindings, or filter by Scaleway Resource Number or value ID. Response order by ID.. List all bindings, or filter by Scaleway Resource Number or value ID. Response order by ID.
   *
   * @param request - The request {@link ListBindingsRequest}
   * @returns A Promise of ListBindingsResponse
   */
  listBindings = (request: Readonly<ListBindingsRequest> = {}) =>
    enrichForPagination('bindings', this.pageOfListBindings, request)

  
  /**
   * Detach an annotation from a resource.. Detach an annotation from a resource.
   *
   * @param request - The request {@link DeleteBindingRequest}
   */
  deleteBinding = (request: Readonly<DeleteBindingRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/annotations/v1/bindings/${validatePathParam('bindingId', request.bindingId)}`,
      },
    )

  
  /**
   * Delete ALL bindings associated with a value.. Delete ALL bindings associated with a value.
   *
   * @param request - The request {@link DeleteAllBindingsMatchingValueRequest}
   * @returns A Promise of DeleteAllBindingsMatchingValueResponse
   */
  deleteAllBindingsMatchingValue = (request: Readonly<DeleteAllBindingsMatchingValueRequest>) =>
    this.client.fetch<DeleteAllBindingsMatchingValueResponse>(
      {
        method: 'DELETE',
        path: `/annotations/v1/bindings/delete-all-matching-value`,
        urlParams: urlParams(
          ['value_id', request.valueId],
        ),
      },
      unmarshalDeleteAllBindingsMatchingValueResponse,
    )

  
  /**
   * Delete ALL bindings associated with a Scaleway Resource Number.. Delete ALL bindings associated with a Scaleway Resource Number.
   *
   * @param request - The request {@link DeleteAllBindingsMatchingSRNRequest}
   * @returns A Promise of DeleteAllBindingsMatchingSRNResponse
   */
  deleteAllBindingsMatchingSRN = (request: Readonly<DeleteAllBindingsMatchingSRNRequest>) =>
    this.client.fetch<DeleteAllBindingsMatchingSRNResponse>(
      {
        method: 'DELETE',
        path: `/annotations/v1/bindings/delete-all-matching-srn`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['srn', request.srn],
        ),
      },
      unmarshalDeleteAllBindingsMatchingSRNResponse,
    )

  
}

