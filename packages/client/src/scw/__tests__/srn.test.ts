import { SRNParseError } from '@scaleway/srn'
import { describe, expect, it } from 'vitest'
import { buildSrnHeaders } from '../srn.js'

describe('buildSrnHeaders', () => {
  it('derives x-service and x-zone from a zone-scoped SRN', () => {
    expect(buildSrnHeaders('srn://block.scw.eu/zones/it-mil-1/snapshots/22222222')).toStrictEqual({
      'x-service': 'block',
      'x-zone': 'it-mil-1',
    })
  })

  it('derives x-service and x-region from a region-scoped SRN', () => {
    expect(buildSrnHeaders('srn://k8s.scw.eu/regions/fr-par/clusters/cluster-id')).toStrictEqual({
      'x-service': 'k8s',
      'x-region': 'fr-par',
    })
  })

  it('derives only x-service from a global SRN', () => {
    expect(buildSrnHeaders('srn://api.scw.eu/tests/xxx')).toStrictEqual({
      'x-service': 'api',
    })
  })

  it('propagates SRNParseError on invalid SRN', () => {
    expect(() => buildSrnHeaders('not-an-srn')).toThrow(SRNParseError)
  })
})
