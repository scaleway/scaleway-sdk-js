import type { WaitForOptions } from '@scaleway/sdk-client'
import {
  createExponentialBackoffStrategy,
  tryAtIntervals,
  validatePathParam,
} from '@scaleway/sdk-client'
import { API } from './api.gen'
import {
  IMAGE_TRANSIENT_STATUSES,
  PRIVATE_NIC_TRANSIENT_STATUSES,
  SERVER_TRANSIENT_STATUSES,
  SNAPSHOT_TRANSIENT_STATUSES,
  VOLUME_TRANSIENT_STATUSES,
} from './content.gen'
import type {
  CreateServerRequest,
  GetImageRequest,
  GetPrivateNICRequest,
  GetServerRequest,
  GetSnapshotRequest,
  GetVolumeRequest,
  Image,
  PrivateNIC,
  Server,
  ServerActionRequest,
  ServerState,
  Snapshot,
  UpdateServerRequest,
  Volume,
  VolumeServerTemplate,
} from './types.gen'
import type {
  AttachVolumeRequest,
  AttachVolumeResponse,
  DetachVolumeRequest,
  DetachVolumeResponse,
  GetServerUserDataRequest,
  SetServerUserDataRequest,
} from './types.utils'

const validateNotUndefined = <T>(obj: T | undefined): T => {
  if (obj === undefined) throw new TypeError(`object was found undefined`)

  return obj
}

export class InstanceV1UtilsAPI extends API {
  /**
   * Waits for {@link Image} to be in a final state.
   *
   * @param request - The request {@link GetImageRequest}
   * @param options - The waiting options
   * @returns A Promise of Image
   */
  waitForImage = (
    request: Readonly<GetImageRequest>,
    options?: Readonly<WaitForOptions<Image>>,
  ) =>
    tryAtIntervals(
      async () => {
        const value = await this.getImage(request).then(
          res => res.image as Image,
        )

        return {
          done: !IMAGE_TRANSIENT_STATUSES.includes(value.state),
          value,
        }
      },
      createExponentialBackoffStrategy(
        options?.minDelay ?? 1,
        options?.maxDelay ?? 30,
      ),
      options?.timeout,
    )

  /**
   * Waits for {@link PrivateNIC} to be in a final state.
   *
   * @param request - The request {@link GetPrivateNICRequest}
   * @param options - The waiting options
   * @returns A Promise of PrivateNIC
   */
  waitForPrivateNIC = (
    request: Readonly<GetPrivateNICRequest>,
    options?: Readonly<WaitForOptions<PrivateNIC>>,
  ) =>
    tryAtIntervals(
      async () => {
        const value = await this.getPrivateNIC(request).then(
          res => res.privateNic as PrivateNIC,
        )

        return {
          done: !PRIVATE_NIC_TRANSIENT_STATUSES.includes(value.state),
          value,
        }
      },
      createExponentialBackoffStrategy(
        options?.minDelay ?? 1,
        options?.maxDelay ?? 30,
      ),
      options?.timeout,
    )

  /**
   * Waits for {@link Server} to be in a final state.
   *
   * @param request - The request {@link GetServerRequest}
   * @param options - The waiting options
   * @returns A Promise of Server
   */
  waitForServer = (
    request: Readonly<GetServerRequest>,
    options?: Readonly<WaitForOptions<Server>>,
  ) =>
    tryAtIntervals(
      async () => {
        const value = await this.getServer(request).then(
          res => res.server as Server,
        )

        return {
          done: !SERVER_TRANSIENT_STATUSES.includes(value.state),
          value,
        }
      },
      createExponentialBackoffStrategy(
        options?.minDelay ?? 1,
        options?.maxDelay ?? 30,
      ),
      options?.timeout,
    )

  /**
   * Waits for {@link Server} to be in a final state.
   *
   * @param request - The request {@link GetServerRequest}
   * @param options - The waiting options
   * @returns A Promise of Server
   */
  waitForSnapshot = (
    request: Readonly<GetSnapshotRequest>,
    options?: Readonly<WaitForOptions<Snapshot>>,
  ) =>
    tryAtIntervals(
      async () => {
        const value = await this.getSnapshot(request).then(
          res => res.snapshot as Snapshot,
        )

        return {
          done: !SNAPSHOT_TRANSIENT_STATUSES.includes(value.state),
          value,
        }
      },
      createExponentialBackoffStrategy(
        options?.minDelay ?? 1,
        options?.maxDelay ?? 30,
      ),
      options?.timeout,
    )

  /**
   * Waits for {@link Volume} to be in a final state.
   *
   * @param request - The request {@link GetVolumeRequest}
   * @param options - The waiting options
   * @returns A Promise of Volume
   */
  waitForVolume = (
    request: Readonly<GetVolumeRequest>,
    options?: Readonly<WaitForOptions<Volume>>,
  ) =>
    tryAtIntervals(
      async () => {
        const value = await this.getVolume(request).then(
          res => res.volume as Volume,
        )

        return {
          done: !VOLUME_TRANSIENT_STATUSES.includes(value.state),
          value,
        }
      },
      createExponentialBackoffStrategy(
        options?.minDelay ?? 1,
        options?.maxDelay ?? 30,
      ),
      options?.timeout,
    )

  /**
   * Updates a server.
   *
   * @param request - The request {@link UpdateServerRequest}
   * @returns A Promise of UpdateServerResponse
   */
  updateServer = (request: UpdateServerRequest) => this._updateServer(request)

  /**
   * Creates a server.
   *
   * @param request - The request {@link CreateServerRequest}
   * @returns A Promise of CreateServerResponse
   */
  createServer = (request: Readonly<CreateServerRequest>) =>
    this._createServer(request)

  /**
   * Starts an action and wait for the server to be in the correct "terminal
   * state" expected by this action.
   *
   * @param request - The request {@link ServerActionRequest}
   * @returns A Promise of Server
   */
  serverActionAndWait = async (
    request: ServerActionRequest,
    options?: Readonly<WaitForOptions<Server>>,
  ) => {
    const finalServer = await this.serverAction(request).then(() =>
      this.waitForServer(
        {
          serverId: request.serverId,
          zone: request.zone,
        },
        options,
      ),
    )

    // Check the action was properly executed.
    let expectedState: ServerState | undefined
    switch (request.action) {
      case 'poweron':
      case 'reboot':
        expectedState = 'running'
        break
      case 'poweroff':
        expectedState = 'stopped'
        break
      case 'stop_in_place':
        expectedState = 'stopped in place'
        break
      default:
        break
    }

    if (expectedState && finalServer.state !== expectedState) {
      throw new Error(
        `expected state ${expectedState} but found ${finalServer.state}: ${finalServer.stateDetail}`,
      )
    }

    return finalServer
  }

  /**
   * Attaches a volume to a server.
   *
   * @param request - The request {@link AttachVolumeRequest}
   * @returns A Promise of AttachVolumeResponse
   */
  attachVolume = async (request: Readonly<AttachVolumeRequest>) => {
    const volumes = await this.getServer({
      serverId: request.serverId,
      zone: request.zone,
    }).then(res => validateNotUndefined(res.server?.volumes))

    const newVolumes: Record<string, { id: string; name: string | undefined }> =
      {}
    for (const [key, server] of Object.entries(volumes)) {
      newVolumes[key] = { id: server.id, name: server.name }
    }

    // We loop through all the possible volume keys (0 to len(volumes))
    // to find a non existing key and assign it to the requested volume.
    // A key should always be found. However we return an error if no keys were found.
    let found = false
    const volumesLength = Object.keys(volumes).length
    for (let index = 0; index <= volumesLength; index += 1) {
      const key = index.toString()
      if (!(key in newVolumes)) {
        newVolumes[key] = {
          id: request.volumeId,
          name: request.volumeId, // name is ignored on this PATCH
        }
        found = true
        break
      }
    }

    if (!found) {
      throw new Error(`could not find key to attach volume ${request.volumeId}`)
    }

    // Update server
    return this.updateServer({
      serverId: request.serverId,
      volumes: newVolumes as Record<string, VolumeServerTemplate>,
      zone: request.zone,
    } as UpdateServerRequest).then(obj => obj as AttachVolumeResponse)
  }

  /**
   * Detaches a volume from a server.
   *
   * @param request - The request {@link DetachVolumeRequest}
   * @returns A Promise of DetachVolumeResponse
   */
  detachVolume = async (request: DetachVolumeRequest) => {
    // Get server and related volumes.
    const server = await this.getVolume({
      volumeId: request.volumeId,
      zone: request.zone,
    })
      .then(res => validateNotUndefined(res.volume?.server?.id))
      .then(serverId =>
        this.getServer({
          serverId,
          zone: request.zone,
        }),
      )
      .then(res => validateNotUndefined(res.server))

    // Remove volume.
    const newVolumes: Record<string, { id: string; name: string | undefined }> =
      {}
    for (const [key, volume] of Object.entries(server.volumes)) {
      if (volume.id !== request.volumeId) {
        newVolumes[key] = { id: volume.id, name: volume.name }
      }
    }

    // Update server.
    return this.updateServer({
      serverId: server.id,
      volumes: newVolumes as Record<string, VolumeServerTemplate>,
      zone: request.zone,
    } as UpdateServerRequest).then(obj => obj as DetachVolumeResponse)
  }

  /**
   * Get the content of a user data on a server for the given key.
   *
   * @param request - The request {@link GetServerUserDataRequest}
   * @returns The content of the key
   */
  getServerUserData = (request: Readonly<GetServerUserDataRequest>) =>
    this.client.fetch<string>({
      method: 'GET',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/servers/${validatePathParam(
        'serverId',
        request.serverId,
      )}/user_data/${validatePathParam('key', request.key)}`,
    })

  /**
   * Sets the content of a user data on a server for the given key.
   *
   * @param request - The request {@link SetServerUserDataRequest}
   */
  setServerUserData = (request: Readonly<SetServerUserDataRequest>) =>
    this.client.fetch<void>({
      body: request.content,
      headers: { 'Content-Type': 'text/plain' },
      method: 'PATCH',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/servers/${validatePathParam(
        'serverId',
        request.serverId,
      )}/user_data/${validatePathParam('key', request.key)}`,
    })
}
