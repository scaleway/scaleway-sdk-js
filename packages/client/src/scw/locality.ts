/* eslint-disable @typescript-eslint/ban-types */
export type Region = 'fr-par' | 'nl-ams' | 'pl-waw' | (string & {})

export type Zone =
  | 'fr-par-1'
  | 'fr-par-2'
  | 'fr-par-3'
  | 'nl-ams-1'
  | 'nl-ams-2'
  | 'nl-ams-3'
  | 'pl-waw-1'
  | 'pl-waw-2'
  | 'pl-waw-3'
  | (string & {})
/* eslint-enable @typescript-eslint/ban-types */

export type ApiLocality =
  | { type: 'zone'; zones: Zone[] }
  | { type: 'region'; regions: Region[] }
  | { type: 'global' }
  | { type: 'unspecified' }

export function toApiLocality(legacy?: {
  zones?: Zone[]
  regions?: Region[]
}): ApiLocality {
  if (!legacy) {
    return { type: 'unspecified' }
  }
  const { zones, regions } = legacy
  if (zones && zones.length > 0) {
    return { type: 'zone', zones }
  }
  if (regions && regions.length > 0) {
    return { type: 'region', regions }
  }

  return { type: 'global' }
}
