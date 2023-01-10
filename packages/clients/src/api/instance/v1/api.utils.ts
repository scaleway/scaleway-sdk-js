import {
  createExponentialBackoffStrategy,
  tryAtIntervals,
} from '../../../internal/async/interval-retrier'
import type { WaitForOptions } from '../../../internal/async/interval-retrier'
import { API } from './api.gen'
import {
  IMAGE_TRANSIENT_STATUSES,
  PRIVATE_NIC_TRANSIENT_STATUSES,
  SERVER_TRANSIENT_STATUSES,
  SNAPSHOT_TRANSIENT_STATUSES,
  VOLUME_TRANSIENT_STATUSES,
} from './content.gen'
import type {
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
  Volume,
  VolumeServerTemplate,
} from './types.gen'
import type { SetSecurityGroupRuleRequest } from './types.private.gen'
import type {
  AttachVolumeRequest,
  AttachVolumeResponse,
  CreateServerRequest,
  DetachVolumeRequest,
  DetachVolumeResponse,
  UpdateSecurityGroupRequest,
  UpdateSecurityGroupResponse,
  UpdateSecurityGroupRuleRequest,
  UpdateSecurityGroupRuleResponse,
  UpdateServerRequest,
  UpdateSnapshotRequest,
  UpdateSnapshotResponse,
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
   * Updates a snapshot.
   *
   * @param request - The request {@link UpdateSnapshotRequest}
   * @returns A Promise of UpdateSnapshotResponse
   */
  updateSnapshot = (
    request: Readonly<UpdateSnapshotRequest>,
  ): Promise<UpdateSnapshotResponse> =>
    this.getSnapshot(request)
      .then(res => validateNotUndefined(res.snapshot))
      .then(snapshot =>
        this._setSnapshot({
          ...snapshot,
          name: request.name ?? snapshot.name,
          snapshotId: snapshot.id,
        }),
      )
      .then(res => ({ snapshot: res.snapshot }))

  /**
   * Updates a security group.
   *
   * @param request - The request {@link UpdateSecurityGroupRequest}
   * @returns A Promise of UpdateSecurityGroupResponse
   */
  updateSecurityGroup = (
    request: UpdateSecurityGroupRequest,
  ): Promise<UpdateSecurityGroupResponse> =>
    this.getSecurityGroup({
      securityGroupId: request.securityGroupId,
      zone: request.zone,
    })
      .then(res => validateNotUndefined(res.securityGroup))
      .then(securityGroup =>
        this._setSecurityGroup({
          creationDate: securityGroup.creationDate,
          description: request.description ?? securityGroup.description,
          enableDefaultSecurity:
            request.enableDefaultSecurity ??
            securityGroup.enableDefaultSecurity,
          id: securityGroup.id,
          inboundDefaultPolicy:
            request.inboundDefaultPolicy ?? securityGroup.inboundDefaultPolicy,
          modificationDate: securityGroup.modificationDate,
          name: request.name ?? securityGroup.name,
          organization: securityGroup.organization,
          organizationDefault:
            request.organizationDefault ?? securityGroup.organizationDefault,
          outboundDefaultPolicy:
            request.outboundDefaultPolicy ??
            securityGroup.outboundDefaultPolicy,
          project: securityGroup.project,
          projectDefault:
            request.projectDefault ?? securityGroup.projectDefault,
          servers: securityGroup.servers,
          stateful: request.stateful ?? securityGroup.stateful,
          zone: request.zone,
        }),
      )
      .then(res => ({ securityGroup: res.securityGroup }))

  /**
   * Updates a security group rule.
   *
   * @param request - The request {@link UpdateSecurityGroupRuleRequest}
   * @returns A Promise of UpdateSecurityGroupRuleResponse
   */
  updateSecurityGroupRule = (
    request: UpdateSecurityGroupRuleRequest,
  ): Promise<UpdateSecurityGroupRuleResponse> =>
    this.getSecurityGroupRule({
      securityGroupId: request.securityGroupId,
      securityGroupRuleId: request.securityGroupRuleId,
      zone: request.zone,
    })
      .then(res => validateNotUndefined(res.rule))
      .then(rule => {
        let sReq: SetSecurityGroupRuleRequest = {
          action: request.action ?? rule.action,
          destPortFrom: rule.destPortFrom,
          destPortTo: rule.destPortTo,
          direction: request.direction ?? rule.direction,
          editable: rule.editable,
          id: request.securityGroupRuleId,
          ipRange: request.ipRange ?? rule.ipRange,
          position: request.position ?? rule.position,
          protocol: request.protocol ?? rule.protocol,
          securityGroupId: request.securityGroupId,
          securityGroupRuleId: request.securityGroupRuleId,
        }
        if (request.destPortFrom) {
          sReq = {
            ...sReq,
            destPortFrom:
              request.destPortFrom > 0 ? request.destPortFrom : undefined,
          }
        }
        if (request.destPortTo) {
          sReq = {
            ...sReq,
            destPortTo: request.destPortTo > 0 ? request.destPortTo : undefined,
          }
        }
        if (
          sReq.destPortFrom &&
          sReq.destPortTo &&
          sReq.destPortFrom === sReq.destPortTo
        ) {
          sReq = {
            ...sReq,
            destPortTo: undefined,
          }
        }
        // When we use ICMP protocol portFrom and portTo should be set to nil
        if (request.protocol === 'ICMP') {
          sReq = {
            ...sReq,
            destPortFrom: undefined,
            destPortTo: undefined,
          }
        }

        return this._setSecurityGroupRule(sReq)
      })
      .then(res => ({ rule: res.rule }))

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

    const newVolumes: Record<string, { id: string; name: string }> = {}
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
    const newVolumes: Record<string, { id: string; name: string }> = {}
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
}
