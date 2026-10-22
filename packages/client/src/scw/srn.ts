import { parseSRN } from '@scaleway/srn'

/**
 * Derives the x-service, x-region, and x-zone headers from an SRN.
 *
 * The Resource Product API requires these headers to route the check to the
 * correct product and locality. They are not part of the protobuf spec, so
 * the generator cannot emit them — they must be derived at call time from
 * the SRN carried in the request body.
 *
 * @example
 * const srn = 'srn://block.scw.eu/zones/it-mil-1/snapshots/22222222'
 * await api.checkResource({ srn }, { headers: buildSrnHeaders(srn) })
 */
export const buildSrnHeaders = (srn: string): Record<string, string> => {
  const { product, locality } = parseSRN(srn)
  return {
    'x-service': product,
    ...(locality.type === 'region' && { 'x-region': locality.name }),
    ...(locality.type === 'zone' && { 'x-zone': locality.name }),
  }
}
