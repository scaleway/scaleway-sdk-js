


export interface ListAllKeysAndValuesResponseValue {
  /**
   * ID of the value.
   */
  id: string
  /**
   * Name of the value.
   */
  name: string
  /**
   * Description of the value.
   */
  description: string
}


export interface BindingKey {
  /**
   * ID of the key.
   */
  id: string
  /**
   * Name of the key.
   */
  name: string
}


export interface BindingValue {
  /**
   * ID of the value.
   */
  id: string
  /**
   * Name of the value.
   */
  name: string
}


export interface ListAllKeysAndValuesResponseKey {
  /**
   * ID of the key.
   */
  id: string
  /**
   * Name of the key.
   */
  name: string
  /**
   * Description of the key.
   */
  description: string
  /**
   * List of values associated with the key, sorted alphabetically by name.
   */
  values: ListAllKeysAndValuesResponseValue[]
}


export interface Binding {
  /**
   * ID of the binding.
   */
  id: string
  /**
   * Scaleway Resource Number associated to the binding.
   */
  srn: string
  /**
   * Key associated to the binding.
   */
  key?: BindingKey
  /**
   * Value associated to the binding.
   */
  value?: BindingValue
}


export interface Key {
  /**
   * ID of the annotation key.
   */
  id: string
  /**
   * Name of the annotation key.
   */
  name: string
  /**
   * Description of the annotation key.
   */
  description: string
}


export interface Value {
  /**
   * ID of the value.
   */
  id: string
  /**
   * ID of the key the value is associated to.
   */
  keyId: string
  /**
   * Name of the value (e.g. "production" for a key "environment").
   */
  name: string
  /**
   * Description of the value.
   */
  description: string
}


export type CreateBindingRequest = {
  /**
   * Scaleway Resource Number to associate.
   */
  srn: string
  /**
   * ID of the value to associate.
   */
  valueId: string
}


export type CreateKeyRequest = {
  /**
   * ID of the organization.
   */
  organizationId?: string
  /**
   * Name of the annotation key.
   */
  name: string
  /**
   * Description of the annotation key.
   */
  description: string
}


export type CreateValueRequest = {
  /**
   * ID of the key the value will be bound to.
   */
  keyId: string
  /**
   * Name of the value.
   */
  name: string
  /**
   * Description of the value.
   */
  description: string
}


export type DeleteAllBindingsMatchingSRNRequest = {
  /**
   * Scaleway Resource Number for which all bindings should be deleted.
   */
  srn: string
  /**
   * ID of the organization.
   */
  organizationId?: string
}


export interface DeleteAllBindingsMatchingSRNResponse {
  /**
   * Total number of bindings deleted.
   */
  totalDeleted: number
}


export type DeleteAllBindingsMatchingValueRequest = {
  /**
   * ID of the value for which all bindings should be deleted.
   */
  valueId: string
}


export interface DeleteAllBindingsMatchingValueResponse {
  /**
   * Total number of bindings deleted.
   */
  totalDeleted: number
}


export type DeleteAllValuesMatchingKeyRequest = {
  /**
   * ID of the key for which to delete all values.
   */
  keyId: string
}


export interface DeleteAllValuesMatchingKeyResponse {
  /**
   * Total number of bindings deleted.
   */
  totalDeleted: number
}


export type DeleteBindingRequest = {
  /**
   * ID of the binding to delete.
   */
  bindingId: string
}


export type DeleteKeyRequest = {
  /**
   * ID of the key to delete.
   */
  keyId: string
}


export type DeleteValueRequest = {
  /**
   * ID of the value to delete.
   */
  valueId: string
}


export type GetKeyRequest = {
  /**
   * ID of the key to retrieve.
   */
  keyId: string
}


export type GetValueRequest = {
  /**
   * ID of the value to retrieve.
   */
  valueId: string
}


export type ListAllKeysAndValuesRequest = {
  /**
   * ID of the organization.
   */
  organizationId?: string
}


export interface ListAllKeysAndValuesResponse {
  /**
   * List of keys with values for an organization, sorted alphabetically by name.
   */
  keys: ListAllKeysAndValuesResponseKey[]
}


export type ListBindingsRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Maximum number of bindings on the page.
   */
  pageSize?: number
  /**
   * ID of the organization.
   */
  organizationId?: string
  /**
   * Scaleway Resource Number for which to list all bindings.
   */
  srn?: string
  /**
   * Value ID for which to list all bindings.
   */
  valueId?: string
}


export interface ListBindingsResponse {
  /**
   * List of bindings for the organization. Response order by ID.
   */
  bindings: Binding[]
  /**
   * Total number of bindings returned.
   */
  totalCount: number
}


export type ListKeysRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Maximum number of keys on the page.
   */
  pageSize?: number
  /**
   * ID of the organization.
   */
  organizationId?: string
}


export interface ListKeysResponse {
  /**
   * List of keys for an organization, sorted alphabetically by name.
   */
  keys: Key[]
  /**
   * Total number of keys returned.
   */
  totalCount: number
}


export type ListValuesRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Maximum number of values on the page.
   */
  pageSize?: number
  /**
   * ID of the organization.
   */
  organizationId?: string
  /**
   * ID of the key to list the values for.
   */
  keyId?: string
}


export interface ListValuesResponse {
  /**
   * List of values for a key, sorted alphabetically by name.
   */
  values: Value[]
  /**
   * Total number of values returned.
   */
  totalCount: number
}


export type UpdateKeyRequest = {
  /**
   * ID of the key to update.
   */
  keyId: string
  /**
   * New name of the key.
   */
  name?: string
  /**
   * New description of the key.
   */
  description?: string
}


export type UpdateValueRequest = {
  /**
   * ID of the value to update.
   */
  valueId: string
  /**
   * New name of the value.
   */
  name?: string
  /**
   * New description of the value.
   */
  description?: string
}


