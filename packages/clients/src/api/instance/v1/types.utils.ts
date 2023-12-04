import type { Zone } from '../../../scw/locality'
import type { Server } from './types.gen'

export type AttachVolumeRequest = {
  zone?: Zone
  serverId: string
  volumeId: string
}

/** Contains the updated server after attaching a volume. */
export interface AttachVolumeResponse {
  server?: Server
}

export type DetachVolumeRequest = {
  zone?: Zone
  volumeId: string
}

/** Contains the updated server after detaching a volume. */
export interface DetachVolumeResponse {
  server?: Server
}

export type GetServerUserDataRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  serverId: string
  /** The user data key to get */
  key: string
}

export type SetServerUserDataRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  serverId: string
  /** The user data key to set */
  key: string
  /** The data encoded in base64 */
  content: string
}
