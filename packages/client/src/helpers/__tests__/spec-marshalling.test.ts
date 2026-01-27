import { describe, expect, it } from 'vitest'
import type { DefaultValues } from '../../scw/client-settings.js'
import type { TypeSpec } from '../spec-marshalling.js'
import {
  marshal,
  marshalWithSpec,
  SpecRegistry,
  unmarshal,
  unmarshalWithSpec,
} from '../spec-marshalling.js'

// Mock default values for testing
const mockDefaults: DefaultValues = {
  defaultOrganizationId: 'org-123',
  defaultPageSize: 20,
  defaultProjectId: 'proj-456',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
}

describe('unmarshalWithSpec', () => {
  describe('basic types', () => {
    it('unmarshals string fields', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          name: { source: 'name', type: 'string' },
        },
      }

      const result = unmarshalWithSpec({ name: 'John' }, spec)
      expect(result).toEqual({ name: 'John' })
    })

    it('unmarshals number fields', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          age: { source: 'age', type: 'number' },
        },
      }

      const result = unmarshalWithSpec({ age: 30 }, spec)
      expect(result).toEqual({ age: 30 })
    })

    it('unmarshals boolean fields', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          isActive: { source: 'is_active', type: 'boolean' },
        },
      }

      const result = unmarshalWithSpec({ is_active: true }, spec)
      expect(result).toEqual({ isActive: true })
    })

    it('unmarshals date fields', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          createdAt: { source: 'created_at', type: 'date' },
        },
      }

      const result = unmarshalWithSpec(
        { created_at: '2025-10-31T10:00:00Z' },
        spec,
      )
      expect(result).toEqual({
        createdAt: new Date('2025-10-31T10:00:00Z'),
      })
    })
  })

  describe('snake_case to camelCase conversion', () => {
    it('converts field names from snake_case to camelCase', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          firstName: { source: 'first_name', type: 'string' },
          lastName: { source: 'last_name', type: 'string' },
          birthDate: { source: 'birth_date', type: 'date' },
        },
      }

      const result = unmarshalWithSpec(
        {
          first_name: 'John',
          last_name: 'Doe',
          birth_date: '1990-01-01T00:00:00Z',
        },
        spec,
      )

      expect(result).toEqual({
        firstName: 'John',
        lastName: 'Doe',
        birthDate: new Date('1990-01-01T00:00:00Z'),
      })
    })
  })

  describe('complex types', () => {
    it('unmarshals array of primitives', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          tags: {
            source: 'tags',
            type: 'array',
            arraySpec: { source: '', type: 'string' },
          },
        },
      }

      const result = unmarshalWithSpec(
        { tags: ['tag1', 'tag2', 'tag3'] },
        spec,
      )
      expect(result).toEqual({ tags: ['tag1', 'tag2', 'tag3'] })
    })

    it('unmarshals map of primitives', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          labels: {
            source: 'labels',
            type: 'map',
            mapValueSpec: { source: '', type: 'string' },
          },
        },
      }

      const result = unmarshalWithSpec(
        { labels: { env: 'prod', app: 'web' } },
        spec,
      )
      expect(result).toEqual({ labels: { env: 'prod', app: 'web' } })
    })

    it('returns empty array for invalid array data when optional', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          tags: {
            source: 'tags',
            type: 'array',
            arraySpec: { source: '', type: 'string' },
            optional: true,
          },
        },
      }

      const result = unmarshalWithSpec({ tags: null }, spec)
      expect(result).toEqual({ tags: [] })
    })

    it('returns empty map for invalid map data when optional', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          labels: {
            source: 'labels',
            type: 'map',
            mapValueSpec: { source: '', type: 'string' },
            optional: true,
          },
        },
      }

      const result = unmarshalWithSpec({ labels: null }, spec)
      expect(result).toEqual({ labels: {} })
    })
  })

  describe('nested objects with references', () => {
    it('unmarshals nested objects using references', () => {
      const registry = new SpecRegistry()

      const addressSpec: TypeSpec = {
        type: 'object',
        fields: {
          street: { source: 'street', type: 'string' },
          city: { source: 'city', type: 'string' },
        },
      }

      const personSpec: TypeSpec = {
        type: 'object',
        fields: {
          name: { source: 'name', type: 'string' },
          address: { source: 'address', type: 'reference', specName: 'Address' },
        },
      }

      registry.register('Address', addressSpec)
      registry.register('Person', personSpec)

      const result = unmarshalWithSpec(
        {
          name: 'John',
          address: {
            street: '123 Main St',
            city: 'Paris',
          },
        },
        personSpec,
        registry,
      )

      expect(result).toEqual({
        name: 'John',
        address: {
          street: '123 Main St',
          city: 'Paris',
        },
      })
    })

    it('unmarshals array of nested objects', () => {
      const registry = new SpecRegistry()

      const addressSpec: TypeSpec = {
        type: 'object',
        fields: {
          street: { source: 'street', type: 'string' },
        },
      }

      const personSpec: TypeSpec = {
        type: 'object',
        fields: {
          name: { source: 'name', type: 'string' },
          addresses: {
            source: 'addresses',
            type: 'array',
            arraySpec: { source: '', type: 'reference', specName: 'Address' },
          },
        },
      }

      registry.register('Address', addressSpec)

      const result = unmarshalWithSpec(
        {
          name: 'John',
          addresses: [{ street: '123 Main St' }, { street: '456 Oak Ave' }],
        },
        personSpec,
        registry,
      )

      expect(result).toEqual({
        name: 'John',
        addresses: [{ street: '123 Main St' }, { street: '456 Oak Ave' }],
      })
    })
  })

  describe('error handling', () => {
    it('throws error for non-object data', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          name: { source: 'name', type: 'string' },
        },
      }

      expect(() => unmarshalWithSpec('not an object', spec)).toThrow(
        'Unmarshalling failed: data is not a valid JSON object',
      )
    })

    it('throws error for missing referenced spec', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          address: {
            source: 'address',
            type: 'reference',
            specName: 'NonExistentSpec',
          },
        },
      }

      expect(() =>
        unmarshalWithSpec({ address: {} }, spec, new SpecRegistry()),
      ).toThrow('Spec not found: NonExistentSpec')
    })
  })
})

describe('marshalWithSpec', () => {
  describe('basic types', () => {
    it('marshals string fields', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          name: { source: 'name', type: 'string' },
        },
      }

      const result = marshalWithSpec({ name: 'John' }, spec, mockDefaults)
      expect(result).toEqual({ name: 'John' })
    })

    it('marshals number fields', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          age: { source: 'age', type: 'number' },
        },
      }

      const result = marshalWithSpec({ age: 30 }, spec, mockDefaults)
      expect(result).toEqual({ age: 30 })
    })

    it('marshals date fields to ISO string', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          createdAt: { source: 'created_at', type: 'date' },
        },
      }

      const date = new Date('2025-10-31T10:00:00Z')
      const result = marshalWithSpec({ createdAt: date }, spec, mockDefaults)
      expect(result).toEqual({ created_at: '2025-10-31T10:00:00.000Z' })
    })
  })

  describe('camelCase to snake_case conversion', () => {
    it('converts field names from camelCase to snake_case', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          firstName: { source: 'first_name', type: 'string' },
          lastName: { source: 'last_name', type: 'string' },
        },
      }

      const result = marshalWithSpec(
        { firstName: 'John', lastName: 'Doe' },
        spec,
        mockDefaults,
      )
      expect(result).toEqual({ first_name: 'John', last_name: 'Doe' })
    })
  })

  describe('default values', () => {
    it('applies default values from defaults object', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          projectId: {
            source: 'project_id',
            type: 'string',
            defaultKey: 'defaultProjectId',
          },
        },
      }

      const result = marshalWithSpec({}, spec, mockDefaults)
      expect(result).toEqual({ project_id: 'proj-456' })
    })

    it('applies static default values', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          pageSize: {
            source: 'page_size',
            type: 'number',
            defaultValue: 10,
          },
        },
      }

      const result = marshalWithSpec({}, spec, mockDefaults)
      expect(result).toEqual({ page_size: 10 })
    })

    it('prefers provided value over default', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          projectId: {
            source: 'project_id',
            type: 'string',
            defaultKey: 'defaultProjectId',
          },
        },
      }

      const result = marshalWithSpec(
        { projectId: 'custom-proj' },
        spec,
        mockDefaults,
      )
      expect(result).toEqual({ project_id: 'custom-proj' })
    })
  })

  describe('complex types', () => {
    it('marshals array of primitives', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          tags: {
            source: 'tags',
            type: 'array',
            arraySpec: { source: '', type: 'string' },
          },
        },
      }

      const result = marshalWithSpec(
        { tags: ['tag1', 'tag2'] },
        spec,
        mockDefaults,
      )
      expect(result).toEqual({ tags: ['tag1', 'tag2'] })
    })

    it('marshals map of primitives', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          labels: {
            source: 'labels',
            type: 'map',
            mapValueSpec: { source: '', type: 'string' },
          },
        },
      }

      const result = marshalWithSpec(
        { labels: { env: 'prod' } },
        spec,
        mockDefaults,
      )
      expect(result).toEqual({ labels: { env: 'prod' } })
    })
  })

  describe('nested objects with references', () => {
    it('marshals nested objects using references', () => {
      const registry = new SpecRegistry()

      const addressSpec: TypeSpec = {
        type: 'object',
        fields: {
          street: { source: 'street', type: 'string' },
          city: { source: 'city', type: 'string' },
        },
      }

      const personSpec: TypeSpec = {
        type: 'object',
        fields: {
          name: { source: 'name', type: 'string' },
          address: { source: 'address', type: 'reference', specName: 'Address' },
        },
      }

      registry.register('Address', addressSpec)

      const result = marshalWithSpec(
        {
          name: 'John',
          address: { street: '123 Main St', city: 'Paris' },
        },
        personSpec,
        mockDefaults,
        registry,
      )

      expect(result).toEqual({
        name: 'John',
        address: { street: '123 Main St', city: 'Paris' },
      })
    })
  })

  describe('optional fields', () => {
    it('excludes undefined optional fields from result', () => {
      const spec: TypeSpec = {
        type: 'object',
        fields: {
          name: { source: 'name', type: 'string' },
          age: { source: 'age', type: 'number', optional: true },
        },
      }

      const result = marshalWithSpec({ name: 'John' }, spec, mockDefaults)
      expect(result).toEqual({ name: 'John' })
      expect(result).not.toHaveProperty('age')
    })
  })
})

describe('convenience functions', () => {
  it('unmarshal works with TypeSpec', () => {
    const spec: TypeSpec = {
      type: 'object',
      fields: {
        name: { source: 'name', type: 'string' },
      },
    }

    const result = unmarshal({ name: 'John' }, spec)
    expect(result).toEqual({ name: 'John' })
  })

  it('unmarshal works with spec name from registry', () => {
    const registry = new SpecRegistry()
    const spec: TypeSpec = {
      type: 'object',
      fields: {
        name: { source: 'name', type: 'string' },
      },
    }

    registry.register('Person', spec)

    const result = unmarshal({ name: 'John' }, 'Person', registry)
    expect(result).toEqual({ name: 'John' })
  })

  it('marshal works with TypeSpec', () => {
    const spec: TypeSpec = {
      type: 'object',
      fields: {
        name: { source: 'name', type: 'string' },
      },
    }

    const result = marshal({ name: 'John' }, spec, mockDefaults)
    expect(result).toEqual({ name: 'John' })
  })

  it('marshal works with spec name from registry', () => {
    const registry = new SpecRegistry()
    const spec: TypeSpec = {
      type: 'object',
      fields: {
        name: { source: 'name', type: 'string' },
      },
    }

    registry.register('Person', spec)

    const result = marshal({ name: 'John' }, 'Person', mockDefaults, registry)
    expect(result).toEqual({ name: 'John' })
  })

  it('throws error for non-existent spec name', () => {
    expect(() => unmarshal({}, 'NonExistent')).toThrow(
      'Spec not found: NonExistent',
    )
  })
})

describe('real-world example', () => {
  it('unmarshals a complete Human type from the test API', () => {
    const humanSpec: TypeSpec = {
      type: 'object',
      fields: {
        id: { source: 'id', type: 'string' },
        name: { source: 'name', type: 'string' },
        altitudeInMeter: { source: 'altitude_in_meter', type: 'number' },
        altitudeInMillimeter: {
          source: 'altitude_in_millimeter',
          type: 'number',
        },
        createdAt: { source: 'created_at', type: 'date' },
        updatedAt: { source: 'updated_at', type: 'date' },
        eyesColor: { source: 'eyes_color', type: 'string' },
        fingersCount: { source: 'fingers_count', type: 'number' },
        hairCount: { source: 'hair_count', type: 'number' },
        height: { source: 'height', type: 'number' },
        isHappy: { source: 'is_happy', type: 'boolean' },
        organizationId: { source: 'organization_id', type: 'string' },
        projectId: { source: 'project_id', type: 'string' },
        shoeSize: { source: 'shoe_size', type: 'number' },
        status: { source: 'status', type: 'string' },
      },
    }

    const apiResponse = {
      id: 'human-123',
      name: 'John Doe',
      altitude_in_meter: 1500,
      altitude_in_millimeter: 1500000,
      created_at: '2025-10-31T10:00:00Z',
      updated_at: '2025-10-31T12:00:00Z',
      eyes_color: 'blue',
      fingers_count: 10,
      hair_count: 100000,
      height: 180,
      is_happy: true,
      organization_id: 'org-456',
      project_id: 'proj-789',
      shoe_size: 42,
      status: 'active',
    }

    const result = unmarshalWithSpec(apiResponse, humanSpec)

    expect(result).toEqual({
      id: 'human-123',
      name: 'John Doe',
      altitudeInMeter: 1500,
      altitudeInMillimeter: 1500000,
      createdAt: new Date('2025-10-31T10:00:00Z'),
      updatedAt: new Date('2025-10-31T12:00:00Z'),
      eyesColor: 'blue',
      fingersCount: 10,
      hairCount: 100000,
      height: 180,
      isHappy: true,
      organizationId: 'org-456',
      projectId: 'proj-789',
      shoeSize: 42,
      status: 'active',
    })
  })
})

