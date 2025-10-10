import { describe, expect, it } from 'vitest'
import {
  isAccessKey,
  isEmail,
  isOrganizationId,
  isProjectId,
  isRegion,
  isSecretKey,
  isURL,
  isUUID,
  isZone,
} from '../string-validation.js'

const validUUIDs = [
  '00000000-0000-0000-0000-000000000000',
  '123e4567-e89b-12d3-a456-426614174000',
]

const invalidUUIDs = ['', '1', '23e4567-e89b-12d3-a456-426614174000']

const validators = [
  {
    invalids: invalidUUIDs,
    name: 'UUID',
    validator: isUUID,
    valids: validUUIDs,
  },
  {
    invalids: ['', 'SCW012345678', 'WCS01234567890123456'],
    name: 'AccessKey',
    validator: isAccessKey,
    valids: ['SCW01234567890123456'],
  },
  {
    invalids: invalidUUIDs,
    name: 'SecretKey',
    validator: isSecretKey,
    valids: validUUIDs,
  },
  {
    invalids: invalidUUIDs,
    name: 'Organization',
    validator: isOrganizationId,
    valids: validUUIDs,
  },
  {
    invalids: invalidUUIDs,
    name: 'Project',
    validator: isProjectId,
    valids: validUUIDs,
  },
  {
    invalids: ['', 'f-par', 'fr', '-par', 'fr-pa'],
    name: 'Region',
    validator: isRegion,
    valids: ['fr-par', 'nl-ams', 'pl-waw'],
  },
  {
    invalids: ['', 'fr-par', 'fr'],
    name: 'Zone',
    validator: isZone,
    valids: ['fr-par-1', 'fr-par-2', 'nl-ams-1', 'pl-waw-1', 'pl-waw-9'],
  },
  {
    invalids: ['', 'api.scaleway.com'],
    name: 'URL',
    validator: isURL,
    valids: ['https://api.scaleway.com'],
  },
  {
    invalids: ['', '@example.com'],
    name: 'Email',
    validator: isEmail,
    valids: ['john@example.com'],
  },
]

for (const component of validators) {
  describe(component.validator.name, () => {
    it(`validates correct ${component.name} format`, () => {
      component.valids.forEach(str =>
        expect(component.validator(str)).toStrictEqual(true),
      )
    })
    it(`doesn't validate incorrect ${component.name} format`, () => {
      component.invalids.forEach(str =>
        expect(component.validator(str)).toStrictEqual(false),
      )
    })
  })
}
