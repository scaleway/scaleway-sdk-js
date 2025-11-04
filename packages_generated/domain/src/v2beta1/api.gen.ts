// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import type { WaitForOptions } from '@scaleway/sdk-client'
import {
  DOMAIN_TRANSIENT_STATUSES as DOMAIN_TRANSIENT_STATUSES_DOMAIN,
  SSL_CERTIFICATE_TRANSIENT_STATUSES as SSL_CERTIFICATE_TRANSIENT_STATUSES_DOMAIN,
} from './content.gen.js'
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
  marshalRegistrarApiRetryInboundTransferRequest,
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
  unmarshalListInboundTransfersResponse,
  unmarshalListRenewableDomainsResponse,
  unmarshalListSSLCertificatesResponse,
  unmarshalListTasksResponse,
  unmarshalListTldsResponse,
  unmarshalOrderResponse,
  unmarshalRefreshDNSZoneResponse,
  unmarshalRegisterExternalDomainResponse,
  unmarshalRestoreDNSZoneVersionResponse,
  unmarshalRetryInboundTransferResponse,
  unmarshalSSLCertificate,
  unmarshalSearchAvailableDomainsResponse,
  unmarshalUpdateDNSZoneNameserversResponse,
  unmarshalUpdateDNSZoneRecordsResponse,
} from './marshalling.gen.js'
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
  ListInboundTransfersResponse,
  ListRenewableDomainsResponse,
  ListSSLCertificatesRequest,
  ListSSLCertificatesResponse,
  ListTasksResponse,
  ListTldsResponse,
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
  RegistrarApiListInboundTransfersRequest,
  RegistrarApiListRenewableDomainsRequest,
  RegistrarApiListTasksRequest,
  RegistrarApiListTldsRequest,
  RegistrarApiLockDomainTransferRequest,
  RegistrarApiRegisterExternalDomainRequest,
  RegistrarApiRenewDomainsRequest,
  RegistrarApiRetryInboundTransferRequest,
  RegistrarApiSearchAvailableDomainsRequest,
  RegistrarApiTradeDomainRequest,
  RegistrarApiTransferInDomainRequest,
  RegistrarApiUnlockDomainTransferRequest,
  RegistrarApiUpdateContactRequest,
  RegistrarApiUpdateDomainHostRequest,
  RegistrarApiUpdateDomainRequest,
  RestoreDNSZoneVersionRequest,
  RestoreDNSZoneVersionResponse,
  RetryInboundTransferResponse,
  SSLCertificate,
  SearchAvailableDomainsResponse,
  UpdateDNSZoneNameserversRequest,
  UpdateDNSZoneNameserversResponse,
  UpdateDNSZoneRecordsRequest,
  UpdateDNSZoneRecordsResponse,
  UpdateDNSZoneRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Domains and DNS API.

This API allows you to manage your domains, DNS zones and records.
 */
export class API extends ParentAPI {
  protected pageOfListDNSZones = (request: Readonly<ListDNSZonesRequest>) =>
    this.client.fetch<ListDNSZonesResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones`,
        urlParams: urlParams(
          ['created_after', request.createdAfter],
          ['created_before', request.createdBefore],
          ['dns_zone', request.dnsZone],
          ['dns_zones', request.dnsZones],
          ['domain', request.domain],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['updated_after', request.updatedAfter],
          ['updated_before', request.updatedBefore],
        ),
      },
      unmarshalListDNSZonesResponse,
    )

  /**
   * List DNS zones. Retrieve the list of DNS zones you can manage and filter DNS zones associated with specific domain names.
   *
   * @param request - The request {@link ListDNSZonesRequest}
   * @returns A Promise of ListDNSZonesResponse
   */
  listDNSZones = (request: Readonly<ListDNSZonesRequest>) =>
    enrichForPagination('dnsZones', this.pageOfListDNSZones, request)

  /**
   * Create a DNS zone. Create a new DNS zone specified by the domain name, the subdomain and the Project ID.
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
   * Update a DNS zone. Update the name and/or the Organizations for a DNS zone.
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
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}`,
      },
      unmarshalDNSZone,
    )

  /**
   * Clone a DNS zone. Clone an existing DNS zone with all its records into a new DNS zone.
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
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/clone`,
      },
      unmarshalDNSZone,
    )

  /**
   * Delete a DNS zone. Delete a DNS zone and all its records.
   *
   * @param request - The request {@link DeleteDNSZoneRequest}
   * @returns A Promise of DeleteDNSZoneResponse
   */
  deleteDNSZone = (request: Readonly<DeleteDNSZoneRequest>) =>
    this.client.fetch<DeleteDNSZoneResponse>(
      {
        method: 'DELETE',
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}`,
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
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/records`,
        urlParams: urlParams(
          ['id', request.id],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['type', request.type],
        ),
      },
      unmarshalListDNSZoneRecordsResponse,
    )

  /**
   * List records within a DNS zone. Retrieve a list of DNS records within a DNS zone that has default name servers.
You can filter records by type and name.
   *
   * @param request - The request {@link ListDNSZoneRecordsRequest}
   * @returns A Promise of ListDNSZoneRecordsResponse
   */
  listDNSZoneRecords = (request: Readonly<ListDNSZoneRecordsRequest>) =>
    enrichForPagination('records', this.pageOfListDNSZoneRecords, request)

  /**
   * Update records within a DNS zone. Update records within a DNS zone that has default name servers and perform several actions on your records.

Actions include:
 - add: allows you to add a new record or add a new IP to an existing A record, for example
 - set: allows you to edit a record or edit an IP from an existing A record, for example
 - delete: allows you to delete a record or delete an IP from an existing A record, for example
 - clear: allows you to delete all records from a DNS zone

All edits will be versioned.
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
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/records`,
      },
      unmarshalUpdateDNSZoneRecordsResponse,
    )

  /**
   * List name servers within a DNS zone. Retrieve a list of name servers within a DNS zone and their optional glue records.
   *
   * @param request - The request {@link ListDNSZoneNameserversRequest}
   * @returns A Promise of ListDNSZoneNameserversResponse
   */
  listDNSZoneNameservers = (request: Readonly<ListDNSZoneNameserversRequest>) =>
    this.client.fetch<ListDNSZoneNameserversResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/nameservers`,
        urlParams: urlParams(['project_id', request.projectId]),
      },
      unmarshalListDNSZoneNameserversResponse,
    )

  /**
   * Update name servers within a DNS zone. Update name servers within a DNS zone and set optional glue records.
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
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/nameservers`,
      },
      unmarshalUpdateDNSZoneNameserversResponse,
    )

  /**
   * Clear records within a DNS zone. Delete all records within a DNS zone that has default name servers.<br/>
All edits will be versioned.
   *
   * @param request - The request {@link ClearDNSZoneRecordsRequest}
   * @returns A Promise of ClearDNSZoneRecordsResponse
   */
  clearDNSZoneRecords = (request: Readonly<ClearDNSZoneRecordsRequest>) =>
    this.client.fetch<ClearDNSZoneRecordsResponse>(
      {
        method: 'DELETE',
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/records`,
      },
      unmarshalClearDNSZoneRecordsResponse,
    )

  /**
   * Export a raw DNS zone. Export a DNS zone with default name servers, in a specific format.
   *
   * @param request - The request {@link ExportRawDNSZoneRequest}
   * @returns A Promise of Blob
   */
  exportRawDNSZone = (request: Readonly<ExportRawDNSZoneRequest>) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/raw`,
      urlParams: urlParams(['dl', 1], ['format', request.format]),
      responseType: 'blob',
    })

  /**
   * Import a raw DNS zone. Import and replace the format of records from a given provider, with default name servers.
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
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/raw`,
      },
      unmarshalImportRawDNSZoneResponse,
    )

  /**
   * Import a DNS zone from another provider. Import and replace the format of records from a given provider, with default name servers.
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
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/import-provider`,
      },
      unmarshalImportProviderDNSZoneResponse,
    )

  /**
   * Refresh a DNS zone. Refresh an SOA DNS zone to reload the records in the DNS zone and update the SOA serial.
You can recreate the given DNS zone and its sub DNS zone if needed.
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
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/refresh`,
      },
      unmarshalRefreshDNSZoneResponse,
    )

  protected pageOfListDNSZoneVersions = (
    request: Readonly<ListDNSZoneVersionsRequest>,
  ) =>
    this.client.fetch<ListDNSZoneVersionsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/versions`,
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
   * List versions of a DNS zone. Retrieve a list of a DNS zone's versions.<br/>
The maximum version count is 100. If the count reaches this limit, the oldest version will be deleted after each new modification.
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
        path: `/domain/v2beta1/dns-zones/version/${validatePathParam('dnsZoneVersionId', request.dnsZoneVersionId)}`,
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
   * List records from a given version of a specific DNS zone. Retrieve a list of records from a specific DNS zone version.
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
   * Access differences from a specific DNS zone version. Access a previous DNS zone version to see the differences from another specific version.
   *
   * @param request - The request {@link GetDNSZoneVersionDiffRequest}
   * @returns A Promise of GetDNSZoneVersionDiffResponse
   */
  getDNSZoneVersionDiff = (request: Readonly<GetDNSZoneVersionDiffRequest>) =>
    this.client.fetch<GetDNSZoneVersionDiffResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/version/${validatePathParam('dnsZoneVersionId', request.dnsZoneVersionId)}/diff`,
      },
      unmarshalGetDNSZoneVersionDiffResponse,
    )

  /**
   * Restore a DNS zone version. Restore and activate a version of a specific DNS zone.
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
        path: `/domain/v2beta1/dns-zones/version/${validatePathParam('dnsZoneVersionId', request.dnsZoneVersionId)}/restore`,
      },
      unmarshalRestoreDNSZoneVersionResponse,
    )

  /**
   * Get a DNS zone's TLS certificate. Get the DNS zone's TLS certificate. If you do not have a certificate, the output returns `no certificate found`.
   *
   * @param request - The request {@link GetSSLCertificateRequest}
   * @returns A Promise of SSLCertificate
   */
  getSSLCertificate = (request: Readonly<GetSSLCertificateRequest>) =>
    this.client.fetch<SSLCertificate>(
      {
        method: 'GET',
        path: `/domain/v2beta1/ssl-certificates/${validatePathParam('dnsZone', request.dnsZone)}`,
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
            !SSL_CERTIFICATE_TRANSIENT_STATUSES_DOMAIN.includes(res.status),
          )),
      this.getSSLCertificate,
      request,
      options,
    )

  /**
   * Create or get the DNS zone's TLS certificate. Create a new TLS certificate or retrieve information about an existing TLS certificate.
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
          ['project_id', request.projectId],
        ),
      },
      unmarshalListSSLCertificatesResponse,
    )

  /**
   * List a user's TLS certificates. List all the TLS certificates a user has created, specified by the user's Project ID and the DNS zone.
   *
   * @param request - The request {@link ListSSLCertificatesRequest}
   * @returns A Promise of ListSSLCertificatesResponse
   */
  listSSLCertificates = (request: Readonly<ListSSLCertificatesRequest>) =>
    enrichForPagination('certificates', this.pageOfListSSLCertificates, request)

  /**
   * Delete a TLS certificate. Delete an existing TLS certificate specified by its DNS zone. Deleting a TLS certificate is permanent and cannot be undone.
   *
   * @param request - The request {@link DeleteSSLCertificateRequest}
   * @returns A Promise of DeleteSSLCertificateResponse
   */
  deleteSSLCertificate = (request: Readonly<DeleteSSLCertificateRequest>) =>
    this.client.fetch<DeleteSSLCertificateResponse>(
      {
        method: 'DELETE',
        path: `/domain/v2beta1/ssl-certificates/${validatePathParam('dnsZone', request.dnsZone)}`,
      },
      unmarshalDeleteSSLCertificateResponse,
    )

  /**
   * Get the DNS zone's TSIG key. Retrieve information about the TSIG key of a given DNS zone to allow AXFR requests.
   *
   * @param request - The request {@link GetDNSZoneTsigKeyRequest}
   * @returns A Promise of GetDNSZoneTsigKeyResponse
   */
  getDNSZoneTsigKey = (request: Readonly<GetDNSZoneTsigKeyRequest>) =>
    this.client.fetch<GetDNSZoneTsigKeyResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/tsig-key`,
      },
      unmarshalGetDNSZoneTsigKeyResponse,
    )

  /**
   * Delete the DNS zone's TSIG key. Delete an existing TSIG key specified by its DNS zone. Deleting a TSIG key is permanent and cannot be undone.
   *
   * @param request - The request {@link DeleteDNSZoneTsigKeyRequest}
   */
  deleteDNSZoneTsigKey = (request: Readonly<DeleteDNSZoneTsigKeyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/domain/v2beta1/dns-zones/${validatePathParam('dnsZone', request.dnsZone)}/tsig-key`,
    })
}

/**
 * Domains and DNS - Registrar API.

Manage your domains and contacts.
 */
export class RegistrarAPI extends ParentAPI {
  protected pageOfListTasks = (
    request: Readonly<RegistrarApiListTasksRequest> = {},
  ) =>
    this.client.fetch<ListTasksResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/tasks`,
        urlParams: urlParams(
          ['domain', request.domain],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['statuses', request.statuses],
          ['types', request.types],
        ),
      },
      unmarshalListTasksResponse,
    )

  /**
   * List tasks. List all operations performed on the account.
You can filter the list of tasks by domain name.
   *
   * @param request - The request {@link RegistrarApiListTasksRequest}
   * @returns A Promise of ListTasksResponse
   */
  listTasks = (request: Readonly<RegistrarApiListTasksRequest> = {}) =>
    enrichForPagination('tasks', this.pageOfListTasks, request)

  protected pageOfListInboundTransfers = (
    request: Readonly<RegistrarApiListInboundTransfersRequest>,
  ) =>
    this.client.fetch<ListInboundTransfersResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/inbound-transfers`,
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
      unmarshalListInboundTransfersResponse,
    )

  listInboundTransfers = (
    request: Readonly<RegistrarApiListInboundTransfersRequest>,
  ) =>
    enrichForPagination(
      'inboundTransfers',
      this.pageOfListInboundTransfers,
      request,
    )

  /**
   * Retry the inbound transfer of a domain. Request a retry for the transfer of a domain from another registrar to Scaleway Domains and DNS.
   *
   * @param request - The request {@link RegistrarApiRetryInboundTransferRequest}
   * @returns A Promise of RetryInboundTransferResponse
   */
  retryInboundTransfer = (
    request: Readonly<RegistrarApiRetryInboundTransferRequest>,
  ) =>
    this.client.fetch<RetryInboundTransferResponse>(
      {
        body: JSON.stringify(
          marshalRegistrarApiRetryInboundTransferRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/domain/v2beta1/retry-inbound-transfer`,
      },
      unmarshalRetryInboundTransferResponse,
    )

  /**
   * Purchase domains. Request the registration of domain names.
You can provide a domain's already existing contact or a new contact.
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
   * Renew domains. Request the renewal of one or more domain names.
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
   * Transfer a domain. Request the transfer of a domain from another registrar to Scaleway Domains and DNS.
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
   * Trade a domain's contact. Request to change a domain's contact owner.<br/>
If you specify the `organization_id` of the domain's new owner, the contact will change from the current owner's Scaleway account to the new owner's Scaleway account.<br/>
If the new owner's current contact information is not available, the first ever contact they have created for previous domains is taken into account to operate the change.<br/>
If the new owner has never created a contact to register domains before, an error message displays.
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/trade`,
      },
      unmarshalOrderResponse,
    )

  /**
   * Register an external domain. Request the registration of an external domain name.
   *
   * @param request - The request {@link RegistrarApiRegisterExternalDomainRequest}
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
   * Delete an external domain. Delete an external domain name.
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
        path: `/domain/v2beta1/external-domains/${validatePathParam('domain', request.domain)}`,
      },
      unmarshalDeleteExternalDomainResponse,
    )

  /**
   * Check if contacts are compatible with a domain or a TLD. Check whether contacts are compatible with a domain or a TLD.
If contacts are not compatible with either the domain or the TLD, the information that needs to be corrected is returned.
   *
   * @param request - The request {@link RegistrarApiCheckContactsCompatibilityRequest}
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
          ['email_status', request.emailStatus],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['role', request.role],
        ),
      },
      unmarshalListContactsResponse,
    )

  /**
   * List contacts. Retrieve the list of contacts and their associated domains and roles.
You can filter the list by domain name.
   *
   * @param request - The request {@link RegistrarApiListContactsRequest}
   * @returns A Promise of ListContactsResponse
   */
  listContacts = (request: Readonly<RegistrarApiListContactsRequest> = {}) =>
    enrichForPagination('contacts', this.pageOfListContacts, request)

  /**
   * Get a contact. Retrieve a contact's details from the registrar using the given contact's ID.
   *
   * @param request - The request {@link RegistrarApiGetContactRequest}
   * @returns A Promise of Contact
   */
  getContact = (request: Readonly<RegistrarApiGetContactRequest>) =>
    this.client.fetch<Contact>(
      {
        method: 'GET',
        path: `/domain/v2beta1/contacts/${validatePathParam('contactId', request.contactId)}`,
      },
      unmarshalContact,
    )

  /**
   * Update contact. Edit the contact's information.
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
        path: `/domain/v2beta1/contacts/${validatePathParam('contactId', request.contactId)}`,
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
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['registrar', request.registrar],
          ['status', request.status],
        ),
      },
      unmarshalListDomainsResponse,
    )

  /**
   * List domains. Retrieve the list of domains you own.
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
      unmarshalListRenewableDomainsResponse,
    )

  /**
   * List domains that can be renewed. Retrieve the list of domains you own that can be renewed. You can also see the maximum renewal duration in years for your domains that are renewable.
   *
   * @param request - The request {@link RegistrarApiListRenewableDomainsRequest}
   * @returns A Promise of ListRenewableDomainsResponse
   */
  listRenewableDomains = (
    request: Readonly<RegistrarApiListRenewableDomainsRequest> = {},
  ) => enrichForPagination('domains', this.pageOfListRenewableDomains, request)

  /**
   * Get domain. Retrieve a specific domain and display the domain's information.
   *
   * @param request - The request {@link RegistrarApiGetDomainRequest}
   * @returns A Promise of Domain
   */
  getDomain = (request: Readonly<RegistrarApiGetDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'GET',
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}`,
      },
      unmarshalDomain,
    )

  /**
   * Waits for {@link Domain} to be in a final state.
   *
   * @param request - The request {@link RegistrarApiGetDomainRequest}
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
          Promise.resolve(
            !DOMAIN_TRANSIENT_STATUSES_DOMAIN.includes(res.status),
          )),
      this.getDomain,
      request,
      options,
    )

  /**
   * Update a domain's contacts. Update contacts for a specific domain or create a new contact.<br/>
If you add the same contact for multiple roles (owner, administrative, technical), only one ID will be created and used for all of the roles.
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}`,
      },
      unmarshalDomain,
    )

  /**
   * Lock the transfer of a domain. Lock the transfer of a domain. This means that the domain cannot be transferred and the authorization code cannot be requested to your current registrar.
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/lock-transfer`,
      },
      unmarshalDomain,
    )

  /**
   * Unlock the transfer of a domain. Unlock the transfer of a domain. This means that the domain can be transferred and the authorization code can be requested to your current registrar.
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/unlock-transfer`,
      },
      unmarshalDomain,
    )

  /**
   * Enable auto renew. Enable the `auto renew` feature for a domain. This means the domain will be automatically renewed before its expiry date.
   *
   * @param request - The request {@link RegistrarApiEnableDomainAutoRenewRequest}
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/enable-auto-renew`,
      },
      unmarshalDomain,
    )

  /**
   * Disable auto renew. Disable the `auto renew` feature for a domain. This means the domain will not be renewed before its expiry date.
   *
   * @param request - The request {@link RegistrarApiDisableDomainAutoRenewRequest}
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/disable-auto-renew`,
      },
      unmarshalDomain,
    )

  /**
   * Get a domain's authorization code. Retrieve the authorization code to transfer an unlocked domain. The output returns an error if the domain is locked.
Some TLDs may have a different procedure to retrieve the authorization code. In that case, the information displays in the message field.
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/auth-code`,
      },
      unmarshalGetDomainAuthCodeResponse,
    )

  /**
   * Update domain DNSSEC. If your domain uses another registrar and has the default Scaleway NS, you have to **update the DS record at your registrar**.
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/enable-dnssec`,
      },
      unmarshalDomain,
    )

  /**
   * Disable a domain's DNSSEC. Disable DNSSEC for a domain.
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/disable-dnssec`,
      },
      unmarshalDomain,
    )

  /**
   * Search available domains. Search a domain or a maximum of 10 domains that are available.

If the TLD list is empty or not set, the search returns the results from the most popular TLDs.
   *
   * @param request - The request {@link RegistrarApiSearchAvailableDomainsRequest}
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

  protected pageOfListTlds = (
    request: Readonly<RegistrarApiListTldsRequest> = {},
  ) =>
    this.client.fetch<ListTldsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/tlds`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['tlds', request.tlds],
        ),
      },
      unmarshalListTldsResponse,
    )

  /**
   * List TLD offers. Retrieve the list of TLDs and offers associated with them.
   *
   * @param request - The request {@link RegistrarApiListTldsRequest}
   * @returns A Promise of ListTldsResponse
   */
  listTlds = (request: Readonly<RegistrarApiListTldsRequest> = {}) =>
    enrichForPagination('tlds', this.pageOfListTlds, request)

  /**
   * Create a hostname for a domain. Create a hostname for a domain with glue IPs.
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/hosts`,
      },
      unmarshalHost,
    )

  protected pageOfListDomainHosts = (
    request: Readonly<RegistrarApiListDomainHostsRequest>,
  ) =>
    this.client.fetch<ListDomainHostsResponse>(
      {
        method: 'GET',
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/hosts`,
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
   * List a domain's hostnames. List a domain's hostnames using their glue IPs.
   *
   * @param request - The request {@link RegistrarApiListDomainHostsRequest}
   * @returns A Promise of ListDomainHostsResponse
   */
  listDomainHosts = (request: Readonly<RegistrarApiListDomainHostsRequest>) =>
    enrichForPagination('hosts', this.pageOfListDomainHosts, request)

  /**
   * Update a domain's hostname. Update a domain's hostname with glue IPs.
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
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/hosts/${validatePathParam('name', request.name)}`,
      },
      unmarshalHost,
    )

  /**
   * Delete a domain's hostname.
   *
   * @param request - The request {@link RegistrarApiDeleteDomainHostRequest}
   * @returns A Promise of Host
   */
  deleteDomainHost = (request: Readonly<RegistrarApiDeleteDomainHostRequest>) =>
    this.client.fetch<Host>(
      {
        method: 'DELETE',
        path: `/domain/v2beta1/domains/${validatePathParam('domain', request.domain)}/hosts/${validatePathParam('name', request.name)}`,
      },
      unmarshalHost,
    )
}
