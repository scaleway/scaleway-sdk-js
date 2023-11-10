// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { Region, WaitForOptions } from '../../../bridge'
import { NAME_TRANSIENT_STATUSES, PIN_TRANSIENT_STATUSES } from './content.gen'
import {
  marshalCreatePinByCIDRequest,
  marshalCreatePinByURLRequest,
  marshalCreateVolumeRequest,
  marshalIpnsApiCreateNameRequest,
  marshalIpnsApiImportKeyNameRequest,
  marshalIpnsApiUpdateNameRequest,
  marshalReplacePinRequest,
  marshalUpdateVolumeRequest,
  unmarshalExportKeyNameResponse,
  unmarshalListNamesResponse,
  unmarshalListPinsResponse,
  unmarshalListVolumesResponse,
  unmarshalName,
  unmarshalPin,
  unmarshalReplacePinResponse,
  unmarshalVolume,
} from './marshalling.gen'
import type {
  CreatePinByCIDRequest,
  CreatePinByURLRequest,
  CreateVolumeRequest,
  DeletePinRequest,
  DeleteVolumeRequest,
  ExportKeyNameResponse,
  GetPinRequest,
  GetVolumeRequest,
  IpnsApiCreateNameRequest,
  IpnsApiDeleteNameRequest,
  IpnsApiExportKeyNameRequest,
  IpnsApiGetNameRequest,
  IpnsApiImportKeyNameRequest,
  IpnsApiListNamesRequest,
  IpnsApiUpdateNameRequest,
  ListNamesResponse,
  ListPinsRequest,
  ListPinsResponse,
  ListVolumesRequest,
  ListVolumesResponse,
  Name,
  Pin,
  ReplacePinRequest,
  ReplacePinResponse,
  UpdateVolumeRequest,
  Volume,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** IPFS Pinning service API. */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  /**
   * Create a new volume. Create a new volume from a Project ID. Volume is
   * identified by an ID and used to host pin references. Volume is personal (at
   * least to your organization) even if IPFS blocks and CID are available to
   * anyone. Should be the first command you made because every pin must be
   * attached to a volume.
   *
   * @param request - The request {@link CreateVolumeRequest}
   * @returns A Promise of Volume
   */
  createVolume = (request: Readonly<CreateVolumeRequest>) =>
    this.client.fetch<Volume>(
      {
        body: JSON.stringify(
          marshalCreateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/volumes`,
      },
      unmarshalVolume,
    )

  /**
   * Get information about a volume. Retrieve information about a specific
   * volume.
   *
   * @param request - The request {@link GetVolumeRequest}
   * @returns A Promise of Volume
   */
  getVolume = (request: Readonly<GetVolumeRequest>) =>
    this.client.fetch<Volume>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
      },
      unmarshalVolume,
    )

  protected pageOfListVolumes = (request: Readonly<ListVolumesRequest> = {}) =>
    this.client.fetch<ListVolumesResponse>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/volumes`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalListVolumesResponse,
    )

  /**
   * List all volumes by a Project ID. Retrieve information about all volumes
   * from a Project ID.
   *
   * @param request - The request {@link ListVolumesRequest}
   * @returns A Promise of ListVolumesResponse
   */
  listVolumes = (request: Readonly<ListVolumesRequest> = {}) =>
    enrichForPagination('volumes', this.pageOfListVolumes, request)

  /**
   * Update volume information. Update volume information (tag, name...).
   *
   * @param request - The request {@link UpdateVolumeRequest}
   * @returns A Promise of Volume
   */
  updateVolume = (request: Readonly<UpdateVolumeRequest>) =>
    this.client.fetch<Volume>(
      {
        body: JSON.stringify(
          marshalUpdateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
      },
      unmarshalVolume,
    )

  /**
   * Delete an existing volume. Delete a volume by its ID and every pin attached
   * to this volume. This process can take a while to conclude, depending on the
   * size of your pinned content.
   *
   * @param request - The request {@link DeleteVolumeRequest}
   */
  deleteVolume = (request: Readonly<DeleteVolumeRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/ipfs/v1alpha1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
    })

  /**
   * Create a pin by URL. Will fetch and store the content pointed by the
   * provided URL. The content must be available on the public IPFS network. The
   * content (IPFS blocks) will be host by the pinning service until pin
   * deletion. From that point, any other IPFS peer can fetch and host your
   * content: Make sure to pin public or encrypted content. Many pin requests
   * (from different users) can target the same CID. A pin is defined by its ID
   * (UUID), its status (queued, pinning, pinned or failed) and target CID.
   *
   * @param request - The request {@link CreatePinByURLRequest}
   * @returns A Promise of Pin
   */
  createPinByURL = (request: Readonly<CreatePinByURLRequest>) =>
    this.client.fetch<Pin>(
      {
        body: JSON.stringify(
          marshalCreatePinByURLRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pins/create-by-url`,
      },
      unmarshalPin,
    )

  /**
   * Create a pin by CID. Will fetch and store the content pointed by the
   * provided CID. The content must be available on the public IPFS network. The
   * content (IPFS blocks) will be host by the pinning service until pin
   * deletion. From that point, any other IPFS peer can fetch and host your
   * content: Make sure to pin public or encrypted content. Many pin requests
   * (from different users) can target the same CID. A pin is defined by its ID
   * (UUID), its status (queued, pinning, pinned or failed) and target CID.
   *
   * @param request - The request {@link CreatePinByCIDRequest}
   * @returns A Promise of Pin
   */
  createPinByCID = (request: Readonly<CreatePinByCIDRequest>) =>
    this.client.fetch<Pin>(
      {
        body: JSON.stringify(
          marshalCreatePinByCIDRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pins/create-by-cid`,
      },
      unmarshalPin,
    )

  /**
   * Replace pin by CID. Deletes the given resource ID and pins the new CID in
   * its place. Will fetch and store the content pointed by the provided CID.
   * The content must be available on the public IPFS network. The content (IPFS
   * blocks) is hosted by the pinning service until the pin is deleted. While
   * the content is available any other IPFS peer can fetch and host your
   * content. For this reason, we recommend that you pin either public or
   * encrypted content. Several different pin requests can target the same CID.
   * A pin is defined by its ID (UUID), its status (queued, pinning, pinned or
   * failed) and target CID.
   *
   * @param request - The request {@link ReplacePinRequest}
   * @returns A Promise of ReplacePinResponse
   */
  replacePin = (request: Readonly<ReplacePinRequest>) =>
    this.client.fetch<ReplacePinResponse>(
      {
        body: JSON.stringify(
          marshalReplacePinRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pins/${validatePathParam('pinId', request.pinId)}/replace`,
      },
      unmarshalReplacePinResponse,
    )

  /**
   * Get pin information. Retrieve information about the provided **pin ID**,
   * such as status, last modification, and CID.
   *
   * @param request - The request {@link GetPinRequest}
   * @returns A Promise of Pin
   */
  getPin = (request: Readonly<GetPinRequest>) =>
    this.client.fetch<Pin>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pins/${validatePathParam('pinId', request.pinId)}`,
        urlParams: urlParams(['volume_id', request.volumeId]),
      },
      unmarshalPin,
    )

  /**
   * Waits for {@link Pin} to be in a final state.
   *
   * @param request - The request {@link GetPinRequest}
   * @param options - The waiting options
   * @returns A Promise of Pin
   */
  waitForPin = (
    request: Readonly<GetPinRequest>,
    options?: Readonly<WaitForOptions<Pin>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res => Promise.resolve(!PIN_TRANSIENT_STATUSES.includes(res.status))),
      this.getPin,
      request,
      options,
    )

  protected pageOfListPins = (request: Readonly<ListPinsRequest>) =>
    this.client.fetch<ListPinsResponse>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pins`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['status', request.status],
          ['volume_id', request.volumeId],
        ),
      },
      unmarshalListPinsResponse,
    )

  /**
   * List all pins within a volume. Retrieve information about all pins within a
   * volume.
   *
   * @param request - The request {@link ListPinsRequest}
   * @returns A Promise of ListPinsResponse
   */
  listPins = (request: Readonly<ListPinsRequest>) =>
    enrichForPagination('pins', this.pageOfListPins, request)

  /**
   * Create an unpin request. An unpin request means that you no longer own the
   * content. This content can therefore be removed and no longer provided on
   * the IPFS network.
   *
   * @param request - The request {@link DeletePinRequest}
   */
  deletePin = (request: Readonly<DeletePinRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/ipfs/v1alpha1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/pins/${validatePathParam('pinId', request.pinId)}`,
      urlParams: urlParams(['volume_id', request.volumeId]),
    })
}

/** IPFS Naming service API. */
export class IpnsAPI extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  /**
   * Create a new name. You can use the `ipns key` command to list and generate
   * more names and their respective keys.
   *
   * @param request - The request {@link IpnsApiCreateNameRequest}
   * @returns A Promise of Name
   */
  createName = (request: Readonly<IpnsApiCreateNameRequest>) =>
    this.client.fetch<Name>(
      {
        body: JSON.stringify(
          marshalIpnsApiCreateNameRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/names`,
      },
      unmarshalName,
    )

  /**
   * Get information about a name. Retrieve information about a specific name.
   *
   * @param request - The request {@link IpnsApiGetNameRequest}
   * @returns A Promise of Name
   */
  getName = (request: Readonly<IpnsApiGetNameRequest>) =>
    this.client.fetch<Name>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/names/${validatePathParam('nameId', request.nameId)}`,
      },
      unmarshalName,
    )

  /**
   * Waits for {@link Name} to be in a final state.
   *
   * @param request - The request {@link IpnsApiGetNameRequest}
   * @param options - The waiting options
   * @returns A Promise of Name
   */
  waitForName = (
    request: Readonly<IpnsApiGetNameRequest>,
    options?: Readonly<WaitForOptions<Name>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res => Promise.resolve(!NAME_TRANSIENT_STATUSES.includes(res.status))),
      this.getName,
      request,
      options,
    )

  /**
   * Delete an existing name. Delete a name by its ID.
   *
   * @param request - The request {@link IpnsApiDeleteNameRequest}
   */
  deleteName = (request: Readonly<IpnsApiDeleteNameRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/ipfs/v1alpha1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/names/${validatePathParam('nameId', request.nameId)}`,
    })

  protected pageOfListNames = (
    request: Readonly<IpnsApiListNamesRequest> = {},
  ) =>
    this.client.fetch<ListNamesResponse>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/names`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListNamesResponse,
    )

  /**
   * List all names by a Project ID. Retrieve information about all names from a
   * Project ID.
   *
   * @param request - The request {@link IpnsApiListNamesRequest}
   * @returns A Promise of ListNamesResponse
   */
  listNames = (request: Readonly<IpnsApiListNamesRequest> = {}) =>
    enrichForPagination('names', this.pageOfListNames, request)

  /**
   * Update name information. Update name information (CID, tag, name...).
   *
   * @param request - The request {@link IpnsApiUpdateNameRequest}
   * @returns A Promise of Name
   */
  updateName = (request: Readonly<IpnsApiUpdateNameRequest>) =>
    this.client.fetch<Name>(
      {
        body: JSON.stringify(
          marshalIpnsApiUpdateNameRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/names/${validatePathParam('nameId', request.nameId)}`,
      },
      unmarshalName,
    )

  /**
   * Export your private key. Export a private key by its ID.
   *
   * @param request - The request {@link IpnsApiExportKeyNameRequest}
   * @returns A Promise of ExportKeyNameResponse
   */
  exportKeyName = (request: Readonly<IpnsApiExportKeyNameRequest>) =>
    this.client.fetch<ExportKeyNameResponse>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/names/${validatePathParam('nameId', request.nameId)}/export-key`,
      },
      unmarshalExportKeyNameResponse,
    )

  /**
   * Import your private key. Import a private key.
   *
   * @param request - The request {@link IpnsApiImportKeyNameRequest}
   * @returns A Promise of Name
   */
  importKeyName = (request: Readonly<IpnsApiImportKeyNameRequest>) =>
    this.client.fetch<Name>(
      {
        body: JSON.stringify(
          marshalIpnsApiImportKeyNameRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/names/import-key`,
      },
      unmarshalName,
    )
}
