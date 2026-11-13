// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export interface ListAllKeysAndValuesResponseValue {
  /**
   * ID of the value.
   */
  id: string
  /**
   * SRN of the value.
   */
  srn: string
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
   * SRN of the key.
   */
  srn: string
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
   * SRN of the value.
   */
  srn: string
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
   * SRN of the key.
   */
  srn: string
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
   * SRN of the binding.
   */
  srn: string
  /**
   * SRN of the resource the binding is attached to.
   */
  targetSrn: string
  /**
   * Key associated to the binding.
   */
  key?: BindingKey | null
  /**
   * Value associated to the binding.
   */
  value?: BindingValue | null
  /**
   * Timestamp of creation of the binding.
   */
  createdAt?: Date | null
  /**
   * Timestamp of the last update of the binding.
   */
  updatedAt?: Date | null
}


export interface Key {
  /**
   * ID of the annotation key.
   */
  id: string
  /**
   * SRN of the annotation key.
   */
  srn: string
  /**
   * Name of the annotation key.
   */
  name: string
  /**
   * Description of the annotation key.
   */
  description: string
  /**
   * Timestamp of creation of the annotation key.
   */
  createdAt?: Date | null
  /**
   * Timestamp of the last update of the annotation key.
   */
  updatedAt?: Date | null
}


export interface Value {
  /**
   * ID of the value.
   */
  id: string
  /**
   * SRN of the annotation value.
   */
  srn: string
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
  /**
   * Timestamp of creation of the value.
   */
  createdAt?: Date | null
  /**
   * Timestamp of the last update of the value.
   */
  updatedAt?: Date | null
}


export type CreateBindingRequest = {
  /**
   * SRN of the resource to attach the value to.
   */
  targetSrn: string
  /**
   * ID of the value to associate.
   */
  valueId: string
}


export type CreateKeyRequest = {
  /**
   * ID of the organization.
   */
  organizationId?: string | null
  /**
   * Name of the annotation key. Never use a secret as a name, as it is shown in the audit trail.
   */
  name: string
  /**
   * Description of the annotation key. Never put a secret in the description, as it is shown in the audit trail.
   */
  description: string
}


export type CreateValueRequest = {
  /**
   * ID of the key the value will be bound to.
   */
  keyId: string
  /**
   * Name of the value. Never use a secret as a name, as it is shown in the audit trail.
   */
  name: string
  /**
   * Description of the value. Never put a secret in the description, as it is shown in the audit trail.
   */
  description: string
}


export type DeleteAllBindingsMatchingSRNRequest = {
  /**
   * SRN of the resource for which all bindings should be deleted.
   */
  targetSrn: string
  /**
   * ID of the organization.
   */
  organizationId?: string | null
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
   * Total number of values deleted.
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
  organizationId?: string | null
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
  page?: number | null
  /**
   * Maximum number of bindings on the page.
   */
  pageSize?: number | null
  /**
   * ID of the organization.
   */
  organizationId?: string | null
  /**
   * SRN of the resource for which to list all bindings.
   */
  targetSrn?: string | null
  /**
   * Value ID for which to list all bindings.
   */
  valueId?: string | null
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
  page?: number | null
  /**
   * Maximum number of keys on the page.
   */
  pageSize?: number | null
  /**
   * ID of the organization.
   */
  organizationId?: string | null
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
  page?: number | null
  /**
   * Maximum number of values on the page.
   */
  pageSize?: number | null
  /**
   * ID of the organization.
   */
  organizationId?: string | null
  /**
   * ID of the key to list the values for.
   */
  keyId?: string | null
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
   * New name of the key. Never use a secret as a name, as it is shown in the audit trail.
   */
  name?: string | null
  /**
   * New description of the key. Never put a secret in the description, as it is shown in the audit trail.
   */
  description?: string | null
}


export type UpdateValueRequest = {
  /**
   * ID of the value to update.
   */
  valueId: string
  /**
   * New name of the value. Never use a secret as a name, as it is shown in the audit trail.
   */
  name?: string | null
  /**
   * New description of the value. Never put a secret in the description, as it is shown in the audit trail.
   */
  description?: string | null
}


