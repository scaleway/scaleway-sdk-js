import { type DefaultValues } from '../../../bridge'
import type {
  Bootscript,
  ServerSummary,
  SetImageRequest,
  Volume,
  VolumeSummary,
} from './types.gen'

const marshalVolumeSummary = (
  request: VolumeSummary,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
  size: request.size,
  volume_type: request.volumeType,
})

const marshalServerSummary = (
  request: ServerSummary,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
})

const marshalBootscript = (
  request: Bootscript,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  architecture: request.architecture,
  bootcmdargs: request.bootcmdargs,
  default: request.default,
  dtb: request.dtb,
  id: request.id,
  initrd: request.initrd,
  kernel: request.kernel,
  organization: request.organization,
  project: request.project,
  public: request.public,
  title: request.title,
  zone: request.zone,
})

const marshalVolume = (
  request: Volume,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  creation_date: request.creationDate,
  export_uri: request.exportUri,
  id: request.id,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization,
  project: request.project,
  server: request.server
    ? marshalServerSummary(request.server, defaults)
    : undefined,
  size: request.size,
  state: request.state,
  tags: request.tags,
  volume_type: request.volumeType,
  zone: request.zone,
})

export const marshalSetImageRequestWithID = (
  request: SetImageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  arch: request.arch,
  creation_date: request.creationDate,
  default_bootscript: request.defaultBootscript
    ? marshalBootscript(request.defaultBootscript, defaults)
    : undefined,
  extra_volumes: request.extraVolumes
    ? Object.entries(request.extraVolumes).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: marshalVolume(value, defaults),
        }),
        {},
      )
    : undefined,
  from_server: request.fromServer,
  modification_date: request.modificationDate,
  id: request.id,
  name: request.name,
  organization: request.organization,
  project: request.project,
  public: request.public,
  root_volume: request.rootVolume
    ? marshalVolumeSummary(request.rootVolume, defaults)
    : undefined,
  state: request.state,
  tags: request.tags,
})
