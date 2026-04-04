/**
 * Spec-based marshalling system
 * 
 * This module provides a declarative approach to marshalling/unmarshalling
 * by using specifications (specs) instead of generated functions.
 * 
 * Benefits:
 * - Avoids circular dependencies
 * - Enables runtime reflection
 * - Reduces generated code size
 * - Easier to test and maintain
 */

import type { DefaultValues } from '../scw/client-settings.js'
import { unmarshalDate } from './marshalling.js'

/**
 * Supported field types in specs
 */
export type FieldType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'date'
  | 'any'
  | 'money'
  | 'decimal'
  | 'timeseries'
  | 'enum'

/**
 * Specification for a single field
 */
export interface FieldSpec {
  /** Source field name in JSON (e.g., 'created_at') */
  source: string
  
  /** Type of the field */
  type: FieldType | 'reference' | 'array' | 'map'
  
  /** For reference types: name of the referenced spec */
  specName?: string
  
  /** For array types: spec for array elements */
  arraySpec?: FieldSpec
  
  /** For map types: spec for map values (keys are always strings) */
  mapValueSpec?: FieldSpec
  
  /** Whether the field is optional */
  optional?: boolean
  
  /** Default value for marshalling (e.g., defaults.defaultProjectId) */
  defaultValue?: string | number | boolean
  
  /** Default value key (e.g., 'defaultProjectId' to use from defaults) */
  defaultKey?: keyof DefaultValues
  
  /** For enum types: the enum object */
  enumValues?: Record<string, string | number>
}

/**
 * Specification for a complete type
 */
export interface TypeSpec {
  /** Type kind */
  type: 'object'
  
  /** Field specifications */
  fields: Record<string, FieldSpec>
}

/**
 * Registry to store all type specs
 * This allows specs to reference each other by name
 */
export class SpecRegistry {
  private specs = new Map<string, TypeSpec>()
  
  register(name: string, spec: TypeSpec): void {
    this.specs.set(name, spec)
  }
  
  get(name: string): TypeSpec | undefined {
    return this.specs.get(name)
  }
  
  has(name: string): boolean {
    return this.specs.has(name)
  }
}

/**
 * Global spec registry
 */
export const globalRegistry = new SpecRegistry()

/**
 * Checks if data is a JSON object
 */
function isJSONObject(data: unknown): data is Record<string, unknown> {
  return (
    data !== null &&
    typeof data === 'object' &&
    !Array.isArray(data) &&
    data instanceof Object
  )
}

/**
 * Unmarshals a single field value
 */
function unmarshalField(
  sourceValue: unknown,
  fieldSpec: FieldSpec,
  registry: SpecRegistry,
): unknown {
  // Handle undefined/null for optional fields
  // Special case for arrays and maps: return empty [] or {} instead of undefined
  if (sourceValue === undefined || sourceValue === null) {
    if (fieldSpec.optional) {
      if (fieldSpec.type === 'array') return []
      if (fieldSpec.type === 'map') return {}
      return undefined
    }
    return sourceValue
  }
  
  let value = sourceValue
  
  switch (fieldSpec.type) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'any':
      return value
    
    case 'date':
      return unmarshalDate(value)
    
    case 'money':
    case 'decimal':
    case 'timeseries':
      // TODO: Add proper unmarshalling for these types
      return value
    
    case 'enum':
      return value
    
    case 'reference': {
      if (!fieldSpec.specName) {
        throw new TypeError('Reference field must have specName')
      }
      const referencedSpec = registry.get(fieldSpec.specName)
      if (!referencedSpec) {
        throw new TypeError(`Spec not found: ${fieldSpec.specName}`)
      }
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      return unmarshalWithSpec(value, referencedSpec, registry)
    }
    
    case 'array': {
      if (!Array.isArray(value)) {
        // Return empty array for optional fields, undefined otherwise
        if (fieldSpec.optional) {
          return []
        }
        return undefined
      }
      if (!fieldSpec.arraySpec) {
        throw new TypeError('Array field must have arraySpec')
      }
      return value.map(item => unmarshalField(item, fieldSpec.arraySpec!, registry))
    }
    
    case 'map': {
      if (!isJSONObject(value)) {
        // Return empty object for optional fields, undefined otherwise
        if (fieldSpec.optional) {
          return {}
        }
        return undefined
      }
      if (!fieldSpec.mapValueSpec) {
        throw new TypeError('Map field must have mapValueSpec')
      }
      const result: Record<string, unknown> = {}
      for (const [key, val] of Object.entries(value)) {
        result[key] = unmarshalField(val, fieldSpec.mapValueSpec, registry)
      }
      return result
    }
    
    default:
      return value
  }
}

/**
 * Unmarshals data using a type spec
 * 
 * @param data - The raw data to unmarshal (typically from API response)
 * @param spec - The type specification
 * @param registry - The spec registry (defaults to global registry)
 * @returns The unmarshalled object
 * 
 * @example
 * ```typescript
 * const HumanSpec: TypeSpec = {
 *   type: 'object',
 *   fields: {
 *     name: { source: 'name', type: 'string' },
 *     age: { source: 'age', type: 'number' },
 *     createdAt: { source: 'created_at', type: 'date' }
 *   }
 * }
 * 
 * const human = unmarshalWithSpec(jsonData, HumanSpec)
 * ```
 */
export function unmarshalWithSpec<T = unknown>(
  data: unknown,
  spec: TypeSpec,
  registry: SpecRegistry = globalRegistry,
): T {
  if (!isJSONObject(data)) {
    throw new TypeError(
      'Unmarshalling failed: data is not a valid JSON object',
    )
  }
  
  const result: Record<string, unknown> = {}
  
  for (const [targetKey, fieldSpec] of Object.entries(spec.fields)) {
    const sourceValue = data[fieldSpec.source]
    result[targetKey] = unmarshalField(sourceValue, fieldSpec, registry)
  }
  
  return result as T
}

/**
 * Marshals a single field value
 */
function marshalField(
  sourceValue: unknown,
  fieldSpec: FieldSpec,
  defaults: DefaultValues,
  registry: SpecRegistry,
): unknown {
  let value = sourceValue
  // Handle default values
  if (value === undefined && fieldSpec.defaultKey) {
    value = defaults[fieldSpec.defaultKey]
  }
  if (value === undefined && fieldSpec.defaultValue !== undefined) {
    value = fieldSpec.defaultValue
  }
  
  // Handle undefined/null
  if (value === undefined || value === null) {
    return fieldSpec.optional ? undefined : value
  }
  
  switch (fieldSpec.type) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'any':
    case 'enum':
      return value
    
    case 'date':
      if (value instanceof Date) {
        return value.toISOString()
      }
      return value
    
    case 'money':
    case 'decimal':
    case 'timeseries':
      // TODO: Add proper marshalling for these types
      return value
    
    case 'reference': {
      if (!fieldSpec.specName) {
        throw new TypeError('Reference field must have specName')
      }
      const referencedSpec = registry.get(fieldSpec.specName)
      if (!referencedSpec) {
        throw new TypeError(`Spec not found: ${fieldSpec.specName}`)
      }
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      return marshalWithSpec(value, referencedSpec, defaults, registry)
    }
    
    case 'array': {
      if (!Array.isArray(value)) {
        return undefined
      }
      if (!fieldSpec.arraySpec) {
        throw new TypeError('Array field must have arraySpec')
      }
      return value.map(item => 
        marshalField(item, fieldSpec.arraySpec!, defaults, registry)
      )
    }
    
    case 'map': {
      if (!isJSONObject(value)) {
        return undefined
      }
      if (!fieldSpec.mapValueSpec) {
        throw new TypeError('Map field must have mapValueSpec')
      }
      const result: Record<string, unknown> = {}
      for (const [key, val] of Object.entries(value)) {
        result[key] = marshalField(val, fieldSpec.mapValueSpec, defaults, registry)
      }
      return result
    }
    
    default:
      return value
  }
}

/**
 * Marshals data using a type spec
 * 
 * @param data - The data to marshal (TypeScript object)
 * @param spec - The type specification
 * @param defaults - Default values (projectId, region, etc.)
 * @param registry - The spec registry (defaults to global registry)
 * @returns The marshalled object (ready for API)
 * 
 * @example
 * ```typescript
 * const human = {
 *   name: 'John',
 *   age: 30,
 *   createdAt: new Date()
 * }
 * 
 * const jsonData = marshalWithSpec(human, HumanSpec, defaults)
 * // { name: 'John', age: 30, created_at: '2025-10-31T...' }
 * ```
 */
export function marshalWithSpec(
  data: unknown,
  spec: TypeSpec,
  defaults: DefaultValues,
  registry: SpecRegistry = globalRegistry,
): Record<string, unknown> {
  if (!isJSONObject(data)) {
    throw new TypeError(
      'Marshalling failed: data is not a valid object',
    )
  }
  
  const result: Record<string, unknown> = {}
  
  for (const [targetKey, fieldSpec] of Object.entries(spec.fields)) {
    const sourceValue = (data as Record<string, unknown>)[targetKey]
    const marshalledValue = marshalField(sourceValue, fieldSpec, defaults, registry)
    
    if (marshalledValue !== undefined) {
      result[fieldSpec.source] = marshalledValue
    }
  }
  
  return result
}

/**
 * Convenience function: unmarshal with automatic spec lookup
 */
export function unmarshal<T = unknown>(
  data: unknown,
  specOrName: TypeSpec | string,
  registry: SpecRegistry = globalRegistry,
): T {
  const spec = typeof specOrName === 'string' 
    ? registry.get(specOrName)
    : specOrName
  
  if (!spec) {
    const specName = typeof specOrName === 'string' ? specOrName : 'unknown'
    throw new TypeError(`Spec not found: ${specName}`)
  }
  
  return unmarshalWithSpec<T>(data, spec, registry)
}

/**
 * Convenience function: marshal with automatic spec lookup
 */
export function marshal(
  data: unknown,
  specOrName: TypeSpec | string,
  defaults: DefaultValues,
  registry: SpecRegistry = globalRegistry,
): Record<string, unknown> {
  const spec = typeof specOrName === 'string'
    ? registry.get(specOrName)
    : specOrName
  
  if (!spec) {
    const specName = typeof specOrName === 'string' ? specOrName : 'unknown'
    throw new TypeError(`Spec not found: ${specName}`)
  }
  
  return marshalWithSpec(data, spec, defaults, registry)
}

