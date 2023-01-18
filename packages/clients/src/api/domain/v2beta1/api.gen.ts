// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  unmarshalScwFile,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { ScwFile, WaitForOptions } from '../../../bridge'
import {
  DOMAIN_TRANSIENT_STATUSES,
  SSL_CERTIFICATE_TRANSIENT_STATUSES,
} from './content.gen'
import {
  marshalCloneDNSZoneRequest,
  marshalCreateDNSZoneRequest,
  marshalCreateSSLCertificateRequest,
  marshalImportProviderDNSZoneRequest,
  marshalImportRawDNSZoneRequest,
  marshalRefreshDNSZoneRequest,
  marshalRegistrarApiBuyDomainsRequest,
  marshalRegistrarApiCheckContactsCompatibilityRequest,
  marshalRegistrarApiCreateDomainHostRequest,
  marshalRegistrarApiEnableDomainDNSSECRequest,
  marshalRegistrarApiRegisterExternalDomainRequest,
  marshalRegistrarApiRenewDomainsRequest,
  marshalRegistrarApiTradeDomainRequest,
  marshalRegistrarApiTransferInDomainRequest,
  marshalRegistrarApiUpdateContactRequest,
  marshalRegistrarApiUpdateDomainHostRequest,
  marshalRegistrarApiUpdateDomainRequest,
  marshalUpdateDNSZoneNameserversRequest,
  marshalUpdateDNSZoneRecordsRequest,
  marshalUpdateDNSZoneRequest,
  unmarshalCheckContactsCompatibilityResponse,
  unmarshalClearDNSZoneRecordsResponse,
  unmarshalContact,
  unmarshalDNSZone,
  unmarshalDeleteDNSZoneResponse,
  unmarshalDeleteExternalDomainResponse,
  unmarshalDeleteSSLCertificateResponse,
  unmarshalDomain,
  unmarshalGetDNSZoneTsigKeyResponse,
  unmarshalGetDNSZoneVersionDiffResponse,
  unmarshalGetDomainAuthCodeResponse,
  unmarshalHost,
  unmarshalImportProviderDNSZoneResponse,
  unmarshalImportRawDNSZoneResponse,
  unmarshalListContactsResponse,
  unmarshalListDNSZoneNameserversResponse,
  unmarshalListDNSZoneRecordsResponse,
  unmarshalListDNSZoneVersionRecordsResponse,
  unmarshalListDNSZoneVersionsResponse,
  unmarshalListDNSZonesResponse,
  unmarshalListDomainHostsResponse,
  unmarshalListDomainsResponse,
  unmarshalListRenewableDomainsResponse,
  unmarshalListSSLCertificatesResponse,
  unmarshalListTasksResponse,
  unmarshalOrderResponse,
  unmarshalRefreshDNSZoneResponse,
  unmarshalRegisterExternalDomainResponse,
  unmarshalRestoreDNSZoneVersionResponse,
  unmarshalSSLCertificate,
  unmarshalSearchAvailableDomainsResponse,
  unmarshalUpdateDNSZoneNameserversResponse,
  unmarshalUpdateDNSZoneRecordsResponse,
} from './marshalling.gen'
import type {
  CheckContactsCompatibilityResponse,
  ClearDNSZoneRecordsRequest,
  ClearDNSZoneRecordsResponse,
  CloneDNSZoneRequest,
  Contact,
  CreateDNSZoneRequest,
  CreateSSLCertificateRequest,
  DNSZone,
  DeleteDNSZoneRequest,
  DeleteDNSZoneResponse,
  DeleteDNSZoneTsigKeyRequest,
  DeleteExternalDomainResponse,
  DeleteSSLCertificateRequest,
  DeleteSSLCertificateResponse,
  Domain,
  ExportRawDNSZoneRequest,
  GetDNSZoneTsigKeyRequest,
  GetDNSZoneTsigKeyResponse,
  GetDNSZoneVersionDiffRequest,
  GetDNSZoneVersionDiffResponse,
  GetDomainAuthCodeResponse,
  GetSSLCertificateRequest,
  Host,
  ImportProviderDNSZoneRequest,
  ImportProviderDNSZoneResponse,
  ImportRawDNSZoneRequest,
  ImportRawDNSZoneResponse,
  ListContactsResponse,
  ListDNSZoneNameserversRequest,
  ListDNSZoneNameserversResponse,
  ListDNSZoneRecordsRequest,
  ListDNSZoneRecordsResponse,
  ListDNSZoneVersionRecordsRequest,
  ListDNSZoneVersionRecordsResponse,
  ListDNSZoneVersionsRequest,
  ListDNSZoneVersionsResponse,
  ListDNSZonesRequest,
  ListDNSZonesResponse,
  ListDomainHostsResponse,
  ListDomainsResponse,
  ListRenewableDomainsResponse,
  ListSSLCertificatesRequest,
  ListSSLCertificatesResponse,
  ListTasksResponse,
  OrderResponse,
  RefreshDNSZoneRequest,
  RefreshDNSZoneResponse,
  RegisterExternalDomainResponse,
  RegistrarApiBuyDomainsRequest,
  RegistrarApiCheckContactsCompatibilityRequest,
  RegistrarApiCreateDomainHostRequest,
  RegistrarApiDeleteDomainHostRequest,
  RegistrarApiDeleteExternalDomainRequest,
  RegistrarApiDisableDomainAutoRenewRequest,
  RegistrarApiDisableDomainDNSSECRequest,
  RegistrarApiEnableDomainAutoRenewRequest,
  RegistrarApiEnableDomainDNSSECRequest,
  RegistrarApiGetContactRequest,
  RegistrarApiGetDomainAuthCodeRequest,
  RegistrarApiGetDomainRequest,
  RegistrarApiListContactsRequest,
  RegistrarApiListDomainHostsRequest,
  RegistrarApiListDomainsRequest,
  RegistrarApiListRenewableDomainsRequest,
  RegistrarApiListTasksRequest,
  RegistrarApiLockDomainTransferRequest,
  RegistrarApiRegisterExternalDomainRequest,
  RegistrarApiRenewDomainsRequest,
  RegistrarApiSearchAvailableDomainsRequest,
  RegistrarApiTradeDomainRequest,
  RegistrarApiTransferInDomainRequest,
  RegistrarApiUnlockDomainTransferRequest,
  RegistrarApiUpdateContactRequest,
  RegistrarApiUpdateDomainHostRequest,
  RegistrarApiUpdateDomainRequest,
  RestoreDNSZoneVersionRequest,
  RestoreDNSZoneVersionResponse,
  SSLCertificate,
  SearchAvailableDomainsResponse,
  UpdateDNSZoneNameserversRequest,
  UpdateDNSZoneNameserversResponse,
  UpdateDNSZoneRecordsRequest,
  UpdateDNSZoneRecordsResponse,
  UpdateDNSZoneRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * DNS API.
 *
 * Manage your DNS zones and records.
 */
export class API extends ParentAPI {
  protected pageOfListDNSZones = (request: Readonly<ListDNSZonesRequest>) =>
    this.client.fetch<ListDNSZonesResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones`,
        urlParams: urlParams(
          ['dns_zone', request.dnsZone],
          ['domain', request.domain],
          ['order_by', request.orderBy ?? 'domain_asc'],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
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
      unmarshalListDNSZonesResponse,
    )

  /**
   * Returns a list of manageable DNS zones. You can filter the DNS zones by
   * domain name.
   *
   * @param request - The request {@link ListDNSZonesRequest}
   * @returns A Promise of ListDNSZonesResponse
   */
  listDNSZones = (request: Readonly<ListDNSZonesRequest>) =>
    enrichForPagination('dnsZones', this.pageOfListDNSZones, request)

  /**
   * Create a new DNS zone.
   *
   * @param request - The request {@link CreateDNSZoneRequest}
   * @returns A Promise of DNSZone
   */
  createDNSZone = (request: Readonly<CreateDNSZoneRequest>) =>
    this.client.fetch<DNSZone>(
      {
        body: JSON.stringify(
          marshalCreateDNSZoneRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/dns-zones`,
      },
      unmarshalDNSZone,
    )

  /**
   * Update the name and/or the organizations for a DNS zone.
   *
   * @param request - The request {@link UpdateDNSZoneRequest}
   * @returns A Promise of DNSZone
   */
  updateDNSZone = (request: Readonly<UpdateDNSZoneRequest>) =>
    this.client.fetch<DNSZone>(
      {
        body: JSON.stringify(
          marshalUpdateDNSZoneRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}`,
      },
      unmarshalDNSZone,
    )

  /**
   * Clone an existed DNS zone with all its records into a new one.
   *
   * @param request - The request {@link CloneDNSZoneRequest}
   * @returns A Promise of DNSZone
   */
  cloneDNSZone = (request: Readonly<CloneDNSZoneRequest>) =>
    this.client.fetch<DNSZone>(
      {
        body: JSON.stringify(
          marshalCloneDNSZoneRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/clone`,
      },
      unmarshalDNSZone,
    )

  /**
   * Delete a DNS zone and all it's records.
   *
   * @param request - The request {@link DeleteDNSZoneRequest}
   * @returns A Promise of DeleteDNSZoneResponse
   */
  deleteDNSZone = (request: Readonly<DeleteDNSZoneRequest>) =>
    this.client.fetch<DeleteDNSZoneResponse>(
      {
        method: 'DELETE',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalDeleteDNSZoneResponse,
    )

  protected pageOfListDNSZoneRecords = (
    request: Readonly<ListDNSZoneRecordsRequest>,
  ) =>
    this.client.fetch<ListDNSZoneRecordsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/records`,
        urlParams: urlParams(
          ['id', request.id],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'name_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['type', request.type ?? 'unknown'],
        ),
      },
      unmarshalListDNSZoneRecordsResponse,
    )

  /**
   * Returns a list of DNS records of a DNS zone with default NS. You can filter
   * the records by type and name.
   *
   * @param request - The request {@link ListDNSZoneRecordsRequest}
   * @returns A Promise of ListDNSZoneRecordsResponse
   */
  listDNSZoneRecords = (request: Readonly<ListDNSZoneRecordsRequest>) =>
    enrichForPagination('records', this.pageOfListDNSZoneRecords, request)

  /**
   * Only available with default NS.<br/> Send a list of actions and records.
   *
   * Action can be:
   *
   * - Add:
   * - Add new record
   * - Can be more specific and add a new IP to an existing A record for example
   * - Set:
   * - Edit a record
   * - Can be more specific and edit an IP from an existing A record for example
   * - Delete:
   * - Delete a record
   * - Can be more specific and delete an IP from an existing A record for example
   * - Clear:
   * - Delete all records from a DNS zone
   *
   * All edits will be versioned.
   *
   * @param request - The request {@link UpdateDNSZoneRecordsRequest}
   * @returns A Promise of UpdateDNSZoneRecordsResponse
   */
  updateDNSZoneRecords = (request: Readonly<UpdateDNSZoneRecordsRequest>) =>
    this.client.fetch<UpdateDNSZoneRecordsResponse>(
      {
        body: JSON.stringify(
          marshalUpdateDNSZoneRecordsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/records`,
      },
      unmarshalUpdateDNSZoneRecordsResponse,
    )

  /**
   * Returns a list of Nameservers and their optional glue records for a DNS
   * zone.
   *
   * @param request - The request {@link ListDNSZoneNameserversRequest}
   * @returns A Promise of ListDNSZoneNameserversResponse
   */
  listDNSZoneNameservers = (request: Readonly<ListDNSZoneNameserversRequest>) =>
    this.client.fetch<ListDNSZoneNameserversResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/nameservers`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalListDNSZoneNameserversResponse,
    )

  /**
   * Update DNS zone nameservers and set optional glue records.
   *
   * @param request - The request {@link UpdateDNSZoneNameserversRequest}
   * @returns A Promise of UpdateDNSZoneNameserversResponse
   */
  updateDNSZoneNameservers = (
    request: Readonly<UpdateDNSZoneNameserversRequest>,
  ) =>
    this.client.fetch<UpdateDNSZoneNameserversResponse>(
      {
        body: JSON.stringify(
          marshalUpdateDNSZoneNameserversRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/nameservers`,
      },
      unmarshalUpdateDNSZoneNameserversResponse,
    )

  /**
   * Only available with default NS.<br/> Delete all the records from a DNS
   * zone. All edits will be versioned.
   *
   * @param request - The request {@link ClearDNSZoneRecordsRequest}
   * @returns A Promise of ClearDNSZoneRecordsResponse
   */
  clearDNSZoneRecords = (request: Readonly<ClearDNSZoneRecordsRequest>) =>
    this.client.fetch<ClearDNSZoneRecordsResponse>(
      {
        method: 'DELETE',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/records`,
      },
      unmarshalClearDNSZoneRecordsResponse,
    )

  /**
   * Get a DNS zone in a given format with default NS.
   *
   * @param request - The request {@link ExportRawDNSZoneRequest}
   * @returns A Promise of ScwFile
   */
  exportRawDNSZone = (request: Readonly<ExportRawDNSZoneRequest>) =>
    this.client.fetch<ScwFile>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/raw`,
        urlParams: urlParams([
          'format',
          request.format ?? 'unknown_raw_format',
        ]),
      },
      unmarshalScwFile,
    )

  /**
   * Import and replace records from a given provider format with default NS.
   *
   * @param request - The request {@link ImportRawDNSZoneRequest}
   * @returns A Promise of ImportRawDNSZoneResponse
   */
  importRawDNSZone = (request: Readonly<ImportRawDNSZoneRequest>) =>
    this.client.fetch<ImportRawDNSZoneResponse>(
      {
        body: JSON.stringify(
          marshalImportRawDNSZoneRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/raw`,
      },
      unmarshalImportRawDNSZoneResponse,
    )

  /**
   * Import and replace records from a given provider format with default NS.
   *
   * @param request - The request {@link ImportProviderDNSZoneRequest}
   * @returns A Promise of ImportProviderDNSZoneResponse
   */
  importProviderDNSZone = (request: Readonly<ImportProviderDNSZoneRequest>) =>
    this.client.fetch<ImportProviderDNSZoneResponse>(
      {
        body: JSON.stringify(
          marshalImportProviderDNSZoneRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/import-provider`,
      },
      unmarshalImportProviderDNSZoneResponse,
    )

  /**
   * Refresh SOA DNS zone. You can recreate the given DNS zone and its sub DNS
   * zone if needed.
   *
   * @param request - The request {@link RefreshDNSZoneRequest}
   * @returns A Promise of RefreshDNSZoneResponse
   */
  refreshDNSZone = (request: Readonly<RefreshDNSZoneRequest>) =>
    this.client.fetch<RefreshDNSZoneResponse>(
      {
        body: JSON.stringify(
          marshalRefreshDNSZoneRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/refresh`,
      },
      unmarshalRefreshDNSZoneResponse,
    )

  protected pageOfListDNSZoneVersions = (
    request: Readonly<ListDNSZoneVersionsRequest>,
  ) =>
    this.client.fetch<ListDNSZoneVersionsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/versions`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListDNSZoneVersionsResponse,
    )

  /**
   * Get a list of DNS zone versions.<br/> The maximum version count is
   * 100.<br/> If the count reaches this limit, the oldest version will be
   * deleted after each new modification.
   *
   * @param request - The request {@link ListDNSZoneVersionsRequest}
   * @returns A Promise of ListDNSZoneVersionsResponse
   */
  listDNSZoneVersions = (request: Readonly<ListDNSZoneVersionsRequest>) =>
    enrichForPagination('versions', this.pageOfListDNSZoneVersions, request)

  protected pageOfListDNSZoneVersionRecords = (
    request: Readonly<ListDNSZoneVersionRecordsRequest>,
  ) =>
    this.client.fetch<ListDNSZoneVersionRecordsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/version/${validatePathParam(
          'dnsZoneVersionId',
          request.dnsZoneVersionId,
        )}`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListDNSZoneVersionRecordsResponse,
    )

  /**
   * Get a list of records from a previous DNS zone version.
   *
   * @param request - The request {@link ListDNSZoneVersionRecordsRequest}
   * @returns A Promise of ListDNSZoneVersionRecordsResponse
   */
  listDNSZoneVersionRecords = (
    request: Readonly<ListDNSZoneVersionRecordsRequest>,
  ) =>
    enrichForPagination(
      'records',
      this.pageOfListDNSZoneVersionRecords,
      request,
    )

  /**
   * Get all differences from a previous DNS zone version.
   *
   * @param request - The request {@link GetDNSZoneVersionDiffRequest}
   * @returns A Promise of GetDNSZoneVersionDiffResponse
   */
  getDNSZoneVersionDiff = (request: Readonly<GetDNSZoneVersionDiffRequest>) =>
    this.client.fetch<GetDNSZoneVersionDiffResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/version/${validatePathParam(
          'dnsZoneVersionId',
          request.dnsZoneVersionId,
        )}/diff`,
      },
      unmarshalGetDNSZoneVersionDiffResponse,
    )

  /**
   * Restore and activate a previous DNS zone version.
   *
   * @param request - The request {@link RestoreDNSZoneVersionRequest}
   * @returns A Promise of RestoreDNSZoneVersionResponse
   */
  restoreDNSZoneVersion = (request: Readonly<RestoreDNSZoneVersionRequest>) =>
    this.client.fetch<RestoreDNSZoneVersionResponse>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/dns-zones/version/${validatePathParam(
          'dnsZoneVersionId',
          request.dnsZoneVersionId,
        )}/restore`,
      },
      unmarshalRestoreDNSZoneVersionResponse,
    )

  /**
   * Get the zone TLS certificate if it exists
   *
   * @param request - The request {@link GetSSLCertificateRequest}
   * @returns A Promise of SSLCertificate
   */
  getSSLCertificate = (request: Readonly<GetSSLCertificateRequest>) =>
    this.client.fetch<SSLCertificate>(
      {
        method: 'GET',
        path: `/domain/v2beta1/ssl-certificates/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}`,
      },
      unmarshalSSLCertificate,
    )

  /**
   * Waits for {@link SSLCertificate} to be in a final state.
   *
   * @param request - The request {@link GetSSLCertificateRequest}
   * @param options - The waiting options
   * @returns A Promise of SSLCertificate
   */
  waitForSSLCertificate = (
    request: Readonly<GetSSLCertificateRequest>,
    options?: Readonly<WaitForOptions<SSLCertificate>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !SSL_CERTIFICATE_TRANSIENT_STATUSES.includes(res.status),
          )),
      this.getSSLCertificate,
      request,
      options,
    )

  /**
   * Create or return the zone TLS certificate
   *
   * @param request - The request {@link CreateSSLCertificateRequest}
   * @returns A Promise of SSLCertificate
   */
  createSSLCertificate = (request: Readonly<CreateSSLCertificateRequest>) =>
    this.client.fetch<SSLCertificate>(
      {
        body: JSON.stringify(
          marshalCreateSSLCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/ssl-certificates`,
      },
      unmarshalSSLCertificate,
    )

  protected pageOfListSSLCertificates = (
    request: Readonly<ListSSLCertificatesRequest>,
  ) =>
    this.client.fetch<ListSSLCertificatesResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/ssl-certificates`,
        urlParams: urlParams(
          ['dns_zone', request.dnsZone],
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
      unmarshalListSSLCertificatesResponse,
    )

  /**
   * List all user TLS certificates
   *
   * @param request - The request {@link ListSSLCertificatesRequest}
   * @returns A Promise of ListSSLCertificatesResponse
   */
  listSSLCertificates = (request: Readonly<ListSSLCertificatesRequest>) =>
    enrichForPagination('certificates', this.pageOfListSSLCertificates, request)

  /**
   * Delete an TLS certificate
   *
   * @param request - The request {@link DeleteSSLCertificateRequest}
   * @returns A Promise of DeleteSSLCertificateResponse
   */
  deleteSSLCertificate = (request: Readonly<DeleteSSLCertificateRequest>) =>
    this.client.fetch<DeleteSSLCertificateResponse>(
      {
        method: 'DELETE',
        path: `/domain/v2beta1/ssl-certificates/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}`,
      },
      unmarshalDeleteSSLCertificateResponse,
    )

  /**
   * Get the DNS zone TSIG Key to allow AXFR request.
   *
   * @param request - The request {@link GetDNSZoneTsigKeyRequest}
   * @returns A Promise of GetDNSZoneTsigKeyResponse
   */
  getDNSZoneTsigKey = (request: Readonly<GetDNSZoneTsigKeyRequest>) =>
    this.client.fetch<GetDNSZoneTsigKeyResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/${validatePathParam(
          'dnsZone',
          request.dnsZone,
        )}/tsig-key`,
      },
      unmarshalGetDNSZoneTsigKeyResponse,
    )

  /**
   * Delete the DNS zone TSIG Key
   *
   * @param request - The request {@link DeleteDNSZoneTsigKeyRequest}
   */
  deleteDNSZoneTsigKey = (request: Readonly<DeleteDNSZoneTsigKeyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/domain/v2beta1/dns-zones/${validatePathParam(
        'dnsZone',
        request.dnsZone,
      )}/tsig-key`,
    })
}

/**
 * Domains registrar API.
 *
 * Manage your domains and contacts.
 */
export class RegistrarAPI extends ParentAPI {
  protected pageOfListTasks = (
    request: Readonly<RegistrarApiListTasksRequest>,
  ) =>
    this.client.fetch<ListTasksResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/tasks`,
        urlParams: urlParams(
          ['domain', request.domain],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
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
      unmarshalListTasksResponse,
    )

  /**
   * List all account tasks. You can filter the list by domain name.
   *
   * @param request - The request {@link RegistrarApiListTasksRequest}
   * @returns A Promise of ListTasksResponse
   */
  listTasks = (request: Readonly<RegistrarApiListTasksRequest>) =>
    enrichForPagination('tasks', this.pageOfListTasks, request)

  /**
   * Request the registration of domain names. You can provide an already
   * existing domain's contact or a new contact.
   *
   * @param request - The request {@link RegistrarApiBuyDomainsRequest}
   * @returns A Promise of OrderResponse
   */
  buyDomains = (request: Readonly<RegistrarApiBuyDomainsRequest>) =>
    this.client.fetch<OrderResponse>(
      {
        body: JSON.stringify(
          marshalRegistrarApiBuyDomainsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/buy-domains`,
      },
      unmarshalOrderResponse,
    )

  /**
   * Request the renewal of domain names.
   *
   * @param request - The request {@link RegistrarApiRenewDomainsRequest}
   * @returns A Promise of OrderResponse
   */
  renewDomains = (request: Readonly<RegistrarApiRenewDomainsRequest>) =>
    this.client.fetch<OrderResponse>(
      {
        body: JSON.stringify(
          marshalRegistrarApiRenewDomainsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/renew-domains`,
      },
      unmarshalOrderResponse,
    )

  /**
   * Request the transfer from another registrar domain to Scaleway.
   *
   * @param request - The request {@link RegistrarApiTransferInDomainRequest}
   * @returns A Promise of OrderResponse
   */
  transferInDomain = (request: Readonly<RegistrarApiTransferInDomainRequest>) =>
    this.client.fetch<OrderResponse>(
      {
        body: JSON.stringify(
          marshalRegistrarApiTransferInDomainRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/domains/transfer-domains`,
      },
      unmarshalOrderResponse,
    )

  /**
   * Request a trade for the contact owner.<br/> If an `organization_id` is
   * given, the change is from the current Scaleway account to another Scaleway
   * account.<br/> If no contact is given, the first contact of the other
   * Scaleway account is taken.<br/> If the other Scaleway account has no
   * contact. An error occurs.
   *
   * @param request - The request {@link RegistrarApiTradeDomainRequest}
   * @returns A Promise of OrderResponse
   */
  tradeDomain = (request: Readonly<RegistrarApiTradeDomainRequest>) =>
    this.client.fetch<OrderResponse>(
      {
        body: JSON.stringify(
          marshalRegistrarApiTradeDomainRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/trade`,
      },
      unmarshalOrderResponse,
    )

  /**
   * Request the registration of an external domain name.
   *
   * @param request - The request
   *   {@link RegistrarApiRegisterExternalDomainRequest}
   * @returns A Promise of RegisterExternalDomainResponse
   */
  registerExternalDomain = (
    request: Readonly<RegistrarApiRegisterExternalDomainRequest>,
  ) =>
    this.client.fetch<RegisterExternalDomainResponse>(
      {
        body: JSON.stringify(
          marshalRegistrarApiRegisterExternalDomainRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/external-domains`,
      },
      unmarshalRegisterExternalDomainResponse,
    )

  /**
   * Delete an external domain name.
   *
   * @param request - The request {@link RegistrarApiDeleteExternalDomainRequest}
   * @returns A Promise of DeleteExternalDomainResponse
   */
  deleteExternalDomain = (
    request: Readonly<RegistrarApiDeleteExternalDomainRequest>,
  ) =>
    this.client.fetch<DeleteExternalDomainResponse>(
      {
        method: 'DELETE',
        path: `/domain/v2beta1/external-domains/${validatePathParam(
          'domain',
          request.domain,
        )}`,
      },
      unmarshalDeleteExternalDomainResponse,
    )

  /**
   * Check if contacts are compatible against a domain or a tld. If not, it will
   * return the information requiring a correction.
   *
   * @param request - The request
   *   {@link RegistrarApiCheckContactsCompatibilityRequest}
   * @returns A Promise of CheckContactsCompatibilityResponse
   */
  checkContactsCompatibility = (
    request: Readonly<RegistrarApiCheckContactsCompatibilityRequest> = {},
  ) =>
    this.client.fetch<CheckContactsCompatibilityResponse>(
      {
        body: JSON.stringify(
          marshalRegistrarApiCheckContactsCompatibilityRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/check-contacts-compatibility`,
      },
      unmarshalCheckContactsCompatibilityResponse,
    )

  protected pageOfListContacts = (
    request: Readonly<RegistrarApiListContactsRequest> = {},
  ) =>
    this.client.fetch<ListContactsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/contacts`,
        urlParams: urlParams(
          ['domain', request.domain],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
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
      unmarshalListContactsResponse,
    )

  /**
   * Return a list of contacts with their domains and roles. You can filter the
   * list by domain name.
   *
   * @param request - The request {@link RegistrarApiListContactsRequest}
   * @returns A Promise of ListContactsResponse
   */
  listContacts = (request: Readonly<RegistrarApiListContactsRequest> = {}) =>
    enrichForPagination('contacts', this.pageOfListContacts, request)

  /**
   * Return a contact details retrieved from the registrar using a given contact
   * ID.
   *
   * @param request - The request {@link RegistrarApiGetContactRequest}
   * @returns A Promise of Contact
   */
  getContact = (request: Readonly<RegistrarApiGetContactRequest>) =>
    this.client.fetch<Contact>(
      {
        method: 'GET',
        path: `/domain/v2beta1/contacts/${validatePathParam(
          'contactId',
          request.contactId,
        )}`,
      },
      unmarshalContact,
    )

  /**
   * You can edit the contact coordinates.
   *
   * @param request - The request {@link RegistrarApiUpdateContactRequest}
   * @returns A Promise of Contact
   */
  updateContact = (request: Readonly<RegistrarApiUpdateContactRequest>) =>
    this.client.fetch<Contact>(
      {
        body: JSON.stringify(
          marshalRegistrarApiUpdateContactRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/domain/v2beta1/contacts/${validatePathParam(
          'contactId',
          request.contactId,
        )}`,
      },
      unmarshalContact,
    )

  protected pageOfListDomains = (
    request: Readonly<RegistrarApiListDomainsRequest> = {},
  ) =>
    this.client.fetch<ListDomainsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/domains`,
        urlParams: urlParams(
          ['domain', request.domain],
          ['is_external', request.isExternal],
          ['order_by', request.orderBy ?? 'domain_asc'],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['registrar', request.registrar],
          ['status', request.status ?? 'status_unknown'],
        ),
      },
      unmarshalListDomainsResponse,
    )

  /**
   * Returns a list of domains owned by the user.
   *
   * @param request - The request {@link RegistrarApiListDomainsRequest}
   * @returns A Promise of ListDomainsResponse
   */
  listDomains = (request: Readonly<RegistrarApiListDomainsRequest> = {}) =>
    enrichForPagination('domains', this.pageOfListDomains, request)

  protected pageOfListRenewableDomains = (
    request: Readonly<RegistrarApiListRenewableDomainsRequest> = {},
  ) =>
    this.client.fetch<ListRenewableDomainsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/renewable-domains`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'domain_asc'],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
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
      unmarshalListRenewableDomainsResponse,
    )

  /**
   * Returns a list of domains owned by the user with a renew status and if
   * renewable, the maximum renew duration in years.
   *
   * @param request - The request {@link RegistrarApiListRenewableDomainsRequest}
   * @returns A Promise of ListRenewableDomainsResponse
   */
  listRenewableDomains = (
    request: Readonly<RegistrarApiListRenewableDomainsRequest> = {},
  ) => enrichForPagination('domains', this.pageOfListRenewableDomains, request)

  /**
   * Returns a the domain with more informations.
   *
   * @param request - The request {@link RegistrarApiGetDomainRequest}
   * @returns A Promise of Domain
   */
  getDomain = (request: Readonly<RegistrarApiGetDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'GET',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}`,
      },
      unmarshalDomain,
    )

  /**
   * Waits for {@link Domain} to be in a final state.
   *
   * @param request - The request {@link GetDomainRequest}
   * @param options - The waiting options
   * @returns A Promise of Domain
   */
  waitForDomain = (
    request: Readonly<RegistrarApiGetDomainRequest>,
    options?: Readonly<WaitForOptions<Domain>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!DOMAIN_TRANSIENT_STATUSES.includes(res.status))),
      this.getDomain,
      request,
      options,
    )

  /**
   * Update the domain contacts or create a new one.<br/> If you add the same
   * contact for multiple roles. Only one ID will be created and used for all of
   * them.
   *
   * @param request - The request {@link RegistrarApiUpdateDomainRequest}
   * @returns A Promise of Domain
   */
  updateDomain = (request: Readonly<RegistrarApiUpdateDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        body: JSON.stringify(
          marshalRegistrarApiUpdateDomainRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}`,
      },
      unmarshalDomain,
    )

  /**
   * Lock domain transfer. A locked domain transfer can't be transferred and the
   * auth code can't be requested.
   *
   * @param request - The request {@link RegistrarApiLockDomainTransferRequest}
   * @returns A Promise of Domain
   */
  lockDomainTransfer = (
    request: Readonly<RegistrarApiLockDomainTransferRequest>,
  ) =>
    this.client.fetch<Domain>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/lock-transfer`,
      },
      unmarshalDomain,
    )

  /**
   * Unlock domain transfer. An unlocked domain can be transferred and the auth
   * code can be requested for this.
   *
   * @param request - The request {@link RegistrarApiUnlockDomainTransferRequest}
   * @returns A Promise of Domain
   */
  unlockDomainTransfer = (
    request: Readonly<RegistrarApiUnlockDomainTransferRequest>,
  ) =>
    this.client.fetch<Domain>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/unlock-transfer`,
      },
      unmarshalDomain,
    )

  /**
   * Enable domain auto renew
   *
   * @param request - The request
   *   {@link RegistrarApiEnableDomainAutoRenewRequest}
   * @returns A Promise of Domain
   */
  enableDomainAutoRenew = (
    request: Readonly<RegistrarApiEnableDomainAutoRenewRequest>,
  ) =>
    this.client.fetch<Domain>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/enable-auto-renew`,
      },
      unmarshalDomain,
    )

  /**
   * Disable domain auto renew
   *
   * @param request - The request
   *   {@link RegistrarApiDisableDomainAutoRenewRequest}
   * @returns A Promise of Domain
   */
  disableDomainAutoRenew = (
    request: Readonly<RegistrarApiDisableDomainAutoRenewRequest>,
  ) =>
    this.client.fetch<Domain>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/disable-auto-renew`,
      },
      unmarshalDomain,
    )

  /**
   * If possible, return the auth code for an unlocked domain transfer, or an
   * error if the domain is locked. Some TLD may have a different procedure to
   * retrieve the auth code, in that case, the information is given in the
   * message field.
   *
   * @param request - The request {@link RegistrarApiGetDomainAuthCodeRequest}
   * @returns A Promise of GetDomainAuthCodeResponse
   */
  getDomainAuthCode = (
    request: Readonly<RegistrarApiGetDomainAuthCodeRequest>,
  ) =>
    this.client.fetch<GetDomainAuthCodeResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/auth-code`,
      },
      unmarshalGetDomainAuthCodeResponse,
    )

  /**
   * If your domain has the default Scaleway NS and uses another registrar, you
   * have to update the DS record manually. For the algorithm, here are the code
   * numbers for each type:
   *
   * - 1: RSAMD5
   * - 2: DIFFIE_HELLMAN
   * - 3: DSA_SHA1
   * - 5: RSA_SHA1
   * - 6: DSA_NSEC3_SHA1
   * - 7: RSASHA1_NSEC3_SHA1
   * - 8: RSASHA256
   * - 10: RSASHA512
   * - 12: ECC_GOST
   * - 13: ECDSAP256SHA256
   * - 14: ECDSAP384SHA384
   *
   * And for the digest type:
   *
   * - 1: SHA_1
   * - 2: SHA_256
   * - 3: GOST_R_34_11_94
   * - 4: SHA_384
   *
   * @param request - The request {@link RegistrarApiEnableDomainDNSSECRequest}
   * @returns A Promise of Domain
   */
  enableDomainDNSSEC = (
    request: Readonly<RegistrarApiEnableDomainDNSSECRequest>,
  ) =>
    this.client.fetch<Domain>(
      {
        body: JSON.stringify(
          marshalRegistrarApiEnableDomainDNSSECRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/enable-dnssec`,
      },
      unmarshalDomain,
    )

  /**
   * Disable domain DNSSEC
   *
   * @param request - The request {@link RegistrarApiDisableDomainDNSSECRequest}
   * @returns A Promise of Domain
   */
  disableDomainDNSSEC = (
    request: Readonly<RegistrarApiDisableDomainDNSSECRequest>,
  ) =>
    this.client.fetch<Domain>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/disable-dnssec`,
      },
      unmarshalDomain,
    )

  /**
   * Search a domain (or at maximum, 10 domains).
   *
   * If the TLD list is empty or not set the search returns the results from the
   * most popular TLDs.
   *
   * @param request - The request
   *   {@link RegistrarApiSearchAvailableDomainsRequest}
   * @returns A Promise of SearchAvailableDomainsResponse
   */
  searchAvailableDomains = (
    request: Readonly<RegistrarApiSearchAvailableDomainsRequest>,
  ) =>
    this.client.fetch<SearchAvailableDomainsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/search-domains`,
        urlParams: urlParams(
          ['domains', request.domains],
          ['strict_search', request.strictSearch],
          ['tlds', request.tlds],
        ),
      },
      unmarshalSearchAvailableDomainsResponse,
    )

  /**
   * Create domain hostname with glue IPs
   *
   * @param request - The request {@link RegistrarApiCreateDomainHostRequest}
   * @returns A Promise of Host
   */
  createDomainHost = (request: Readonly<RegistrarApiCreateDomainHostRequest>) =>
    this.client.fetch<Host>(
      {
        body: JSON.stringify(
          marshalRegistrarApiCreateDomainHostRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/hosts`,
      },
      unmarshalHost,
    )

  protected pageOfListDomainHosts = (
    request: Readonly<RegistrarApiListDomainHostsRequest>,
  ) =>
    this.client.fetch<ListDomainHostsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/hosts`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListDomainHostsResponse,
    )

  /**
   * List domain hostnames with they glue IPs
   *
   * @param request - The request {@link RegistrarApiListDomainHostsRequest}
   * @returns A Promise of ListDomainHostsResponse
   */
  listDomainHosts = (request: Readonly<RegistrarApiListDomainHostsRequest>) =>
    enrichForPagination('hosts', this.pageOfListDomainHosts, request)

  /**
   * Update domain hostname with glue IPs
   *
   * @param request - The request {@link RegistrarApiUpdateDomainHostRequest}
   * @returns A Promise of Host
   */
  updateDomainHost = (request: Readonly<RegistrarApiUpdateDomainHostRequest>) =>
    this.client.fetch<Host>(
      {
        body: JSON.stringify(
          marshalRegistrarApiUpdateDomainHostRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/hosts/${validatePathParam('name', request.name)}`,
      },
      unmarshalHost,
    )

  /**
   * Delete domain hostname
   *
   * @param request - The request {@link RegistrarApiDeleteDomainHostRequest}
   * @returns A Promise of Host
   */
  deleteDomainHost = (request: Readonly<RegistrarApiDeleteDomainHostRequest>) =>
    this.client.fetch<Host>(
      {
        method: 'DELETE',
        path: `/domain/v2beta1/domains/${validatePathParam(
          'domain',
          request.domain,
        )}/hosts/${validatePathParam('name', request.name)}`,
      },
      unmarshalHost,
    )
}
