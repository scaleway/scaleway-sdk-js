// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type {
  Zone as ScwZone,
  Region as ScwRegion,
  ServiceInfo,
  WaitForOptions,
  ApiLocality,
} from '@scaleway/sdk-client'
import {
  BACKUP_TRANSIENT_STATUSES as BACKUP_TRANSIENT_STATUSES_WEBHOSTING,
  DOMAIN_AVAILABILITY_TRANSIENT_STATUSES as DOMAIN_AVAILABILITY_TRANSIENT_STATUSES_WEBHOSTING,
  DOMAIN_TRANSIENT_STATUSES as DOMAIN_TRANSIENT_STATUSES_WEBHOSTING,
  HOSTING_TRANSIENT_STATUSES as HOSTING_TRANSIENT_STATUSES_WEBHOSTING,
} from './content.gen.js'
import {
  unmarshalBackup,
  marshalBackupApiRestoreBackupItemsRequest,
  unmarshalCheckFreeDomainAvailabilityResponse,
  unmarshalCheckUserOwnsDomainResponse,
  unmarshalDatabase,
  marshalDatabaseApiAssignDatabaseUserRequest,
  marshalDatabaseApiChangeDatabaseUserPasswordRequest,
  marshalDatabaseApiCreateDatabaseRequest,
  marshalDatabaseApiCreateDatabaseUserRequest,
  marshalDatabaseApiUnassignDatabaseUserRequest,
  unmarshalDatabaseUser,
  marshalDnsApiCheckUserOwnsDomainRequest,
  marshalDnsApiSyncDomainDnsRecordsRequest,
  unmarshalDnsRecords,
  unmarshalDomain,
  marshalFreeDomainApiCheckFreeDomainAvailabilityRequest,
  unmarshalFtpAccount,
  marshalFtpAccountApiChangeFtpAccountPasswordRequest,
  marshalFtpAccountApiCreateFtpAccountRequest,
  unmarshalHosting,
  marshalHostingApiAddCustomDomainRequest,
  marshalHostingApiCreateHostingRequest,
  marshalHostingApiRemoveCustomDomainRequest,
  marshalHostingApiUpdateHostingRequest,
  unmarshalHostingSummary,
  unmarshalListBackupItemsResponse,
  unmarshalListBackupsResponse,
  unmarshalListControlPanelsResponse,
  unmarshalListDatabaseUsersResponse,
  unmarshalListDatabasesResponse,
  unmarshalListFreeRootDomainsResponse,
  unmarshalListFtpAccountsResponse,
  unmarshalListHostingsResponse,
  unmarshalListMailAccountsResponse,
  unmarshalListOffersResponse,
  unmarshalListRecentProgressesResponse,
  unmarshalListWebsitesResponse,
  unmarshalMailAccount,
  marshalMailAccountApiChangeMailAccountPasswordRequest,
  marshalMailAccountApiCreateMailAccountRequest,
  marshalMailAccountApiRemoveMailAccountRequest,
  unmarshalProgress,
  unmarshalResetHostingPasswordResponse,
  unmarshalResourceSummary,
  unmarshalRestoreBackupItemsResponse,
  unmarshalRestoreBackupResponse,
  unmarshalSearchDomainsResponse,
  unmarshalSession,
} from './marshalling.gen.js'
import type {
  Backup,
  BackupApiGetBackupRequest,
  BackupApiGetProgressRequest,
  BackupApiListBackupItemsRequest,
  BackupApiListBackupsRequest,
  BackupApiListRecentProgressesRequest,
  BackupApiRestoreBackupItemsRequest,
  BackupApiRestoreBackupRequest,
  CheckFreeDomainAvailabilityResponse,
  CheckUserOwnsDomainResponse,
  ControlPanelApiListControlPanelsRequest,
  Database,
  DatabaseApiAssignDatabaseUserRequest,
  DatabaseApiChangeDatabaseUserPasswordRequest,
  DatabaseApiCreateDatabaseRequest,
  DatabaseApiCreateDatabaseUserRequest,
  DatabaseApiDeleteDatabaseRequest,
  DatabaseApiDeleteDatabaseUserRequest,
  DatabaseApiGetDatabaseRequest,
  DatabaseApiGetDatabaseUserRequest,
  DatabaseApiListDatabaseUsersRequest,
  DatabaseApiListDatabasesRequest,
  DatabaseApiUnassignDatabaseUserRequest,
  DatabaseUser,
  DnsApiCheckUserOwnsDomainRequest,
  DnsApiGetDomainDnsRecordsRequest,
  DnsApiGetDomainRequest,
  DnsApiSearchDomainsRequest,
  DnsApiSyncDomainDnsRecordsRequest,
  DnsRecords,
  Domain,
  FreeDomainApiCheckFreeDomainAvailabilityRequest,
  FreeDomainApiListFreeRootDomainsRequest,
  FtpAccount,
  FtpAccountApiChangeFtpAccountPasswordRequest,
  FtpAccountApiCreateFtpAccountRequest,
  FtpAccountApiListFtpAccountsRequest,
  FtpAccountApiRemoveFtpAccountRequest,
  Hosting,
  HostingApiAddCustomDomainRequest,
  HostingApiCreateHostingRequest,
  HostingApiCreateSessionRequest,
  HostingApiDeleteHostingRequest,
  HostingApiGetHostingRequest,
  HostingApiGetResourceSummaryRequest,
  HostingApiListHostingsRequest,
  HostingApiRemoveCustomDomainRequest,
  HostingApiResetHostingPasswordRequest,
  HostingApiUpdateHostingRequest,
  HostingSummary,
  ListBackupItemsResponse,
  ListBackupsResponse,
  ListControlPanelsResponse,
  ListDatabaseUsersResponse,
  ListDatabasesResponse,
  ListFreeRootDomainsResponse,
  ListFtpAccountsResponse,
  ListHostingsResponse,
  ListMailAccountsResponse,
  ListOffersResponse,
  ListRecentProgressesResponse,
  ListWebsitesResponse,
  MailAccount,
  MailAccountApiChangeMailAccountPasswordRequest,
  MailAccountApiCreateMailAccountRequest,
  MailAccountApiListMailAccountsRequest,
  MailAccountApiRemoveMailAccountRequest,
  OfferApiListOffersRequest,
  Progress,
  ResetHostingPasswordResponse,
  ResourceSummary,
  RestoreBackupItemsResponse,
  RestoreBackupResponse,
  SearchDomainsResponse,
  Session,
  WebsiteApiListWebsitesRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Web Hosting backup API.

This API allows you to list and restore backups for your cPanel and WordPress Web Hosting service.
 */
export class BackupAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  protected pageOfListBackups = (
    request: Readonly<BackupApiListBackupsRequest>,
  ) =>
    this.client.fetch<ListBackupsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/backups`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListBackupsResponse,
    )

  /**
   * List all available backups for a hosting account.. List all available backups for a hosting account.
   *
   * @param request - The request {@link BackupApiListBackupsRequest}
   * @returns A Promise of ListBackupsResponse
   */
  listBackups = (request: Readonly<BackupApiListBackupsRequest>) =>
    enrichForPagination('backups', this.pageOfListBackups, request)

  /**
   * Get info about a backup specified by the backup ID.. Get info about a backup specified by the backup ID.
   *
   * @param request - The request {@link BackupApiGetBackupRequest}
   * @returns A Promise of Backup
   */
  getBackup = (request: Readonly<BackupApiGetBackupRequest>) =>
    this.client.fetch<Backup>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/backups/${validatePathParam('backupId', request.backupId)}`,
      },
      unmarshalBackup,
    )

  /**
   * Waits for {@link Backup} to be in a final state.
   *
   * @param request - The request {@link BackupApiGetBackupRequest}
   * @param options - The waiting options
   * @returns A Promise of Backup
   */
  waitForBackup = (
    request: Readonly<BackupApiGetBackupRequest>,
    options?: Readonly<WaitForOptions<Backup>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !BACKUP_TRANSIENT_STATUSES_WEBHOSTING.includes(res.status),
          )),
      this.getBackup,
      request,
      options,
    )

  /**
   * Restore an entire backup to your hosting environment.. Restore an entire backup to your hosting environment.
   *
   * @param request - The request {@link BackupApiRestoreBackupRequest}
   * @returns A Promise of RestoreBackupResponse
   */
  restoreBackup = (request: Readonly<BackupApiRestoreBackupRequest>) =>
    this.client.fetch<RestoreBackupResponse>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/backups/${validatePathParam('backupId', request.backupId)}/restore`,
      },
      unmarshalRestoreBackupResponse,
    )

  /**
   * List items within a specific backup, grouped by type.. List items within a specific backup, grouped by type.
   *
   * @param request - The request {@link BackupApiListBackupItemsRequest}
   * @returns A Promise of ListBackupItemsResponse
   */
  listBackupItems = (request: Readonly<BackupApiListBackupItemsRequest>) =>
    this.client.fetch<ListBackupItemsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/backup-items`,
        urlParams: urlParams(['backup_id', request.backupId]),
      },
      unmarshalListBackupItemsResponse,
    )

  /**
   * Restore specific items from a backup (e.g., a database or mailbox).. Restore specific items from a backup (e.g., a database or mailbox).
   *
   * @param request - The request {@link BackupApiRestoreBackupItemsRequest}
   * @returns A Promise of RestoreBackupItemsResponse
   */
  restoreBackupItems = (
    request: Readonly<BackupApiRestoreBackupItemsRequest>,
  ) =>
    this.client.fetch<RestoreBackupItemsResponse>(
      {
        body: JSON.stringify(
          marshalBackupApiRestoreBackupItemsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/restore-backup-items`,
      },
      unmarshalRestoreBackupItemsResponse,
    )

  /**
   * Retrieve detailed information about a specific progress by its ID.. Retrieve detailed information about a specific progress by its ID.
   *
   * @param request - The request {@link BackupApiGetProgressRequest}
   * @returns A Promise of Progress
   */
  getProgress = (request: Readonly<BackupApiGetProgressRequest>) =>
    this.client.fetch<Progress>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/progresses/${validatePathParam('progressId', request.progressId)}`,
      },
      unmarshalProgress,
    )

  /**
   * List recent progresses associated with a specific backup, grouped by type.. List recent progresses associated with a specific backup, grouped by type.
   *
   * @param request - The request {@link BackupApiListRecentProgressesRequest}
   * @returns A Promise of ListRecentProgressesResponse
   */
  listRecentProgresses = (
    request: Readonly<BackupApiListRecentProgressesRequest>,
  ) =>
    this.client.fetch<ListRecentProgressesResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/progresses`,
      },
      unmarshalListRecentProgressesResponse,
    )
}

/**
 * Web Hosting Control Panel API.

This API allows you to manage your Web Hosting services.
 */
export class ControlPanelAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  protected pageOfListControlPanels = (
    request: Readonly<ControlPanelApiListControlPanelsRequest> = {},
  ) =>
    this.client.fetch<ListControlPanelsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/control-panels`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListControlPanelsResponse,
    )

  /**
   * "List the control panels type: cpanel or plesk.".
   *
   * @param request - The request {@link ControlPanelApiListControlPanelsRequest}
   * @returns A Promise of ListControlPanelsResponse
   */
  listControlPanels = (
    request: Readonly<ControlPanelApiListControlPanelsRequest> = {},
  ) =>
    enrichForPagination('controlPanels', this.pageOfListControlPanels, request)
}

/**
 * Web Hosting Database API.

This API allows you to manage your databases and database users for your Web Hosting services.
 */
export class DatabaseAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  /**
   * "Create a new database within your hosting plan".
   *
   * @param request - The request {@link DatabaseApiCreateDatabaseRequest}
   * @returns A Promise of Database
   */
  createDatabase = (request: Readonly<DatabaseApiCreateDatabaseRequest>) =>
    this.client.fetch<Database>(
      {
        body: JSON.stringify(
          marshalDatabaseApiCreateDatabaseRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/databases`,
      },
      unmarshalDatabase,
    )

  protected pageOfListDatabases = (
    request: Readonly<DatabaseApiListDatabasesRequest>,
  ) =>
    this.client.fetch<ListDatabasesResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/databases`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListDatabasesResponse,
    )

  /**
   * "List all databases within your hosting plan".
   *
   * @param request - The request {@link DatabaseApiListDatabasesRequest}
   * @returns A Promise of ListDatabasesResponse
   */
  listDatabases = (request: Readonly<DatabaseApiListDatabasesRequest>) =>
    enrichForPagination('databases', this.pageOfListDatabases, request)

  /**
   * "Get details of a database within your hosting plan".
   *
   * @param request - The request {@link DatabaseApiGetDatabaseRequest}
   * @returns A Promise of Database
   */
  getDatabase = (request: Readonly<DatabaseApiGetDatabaseRequest>) =>
    this.client.fetch<Database>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/databases/${validatePathParam('databaseName', request.databaseName)}`,
      },
      unmarshalDatabase,
    )

  /**
   * "Delete a database within your hosting plan".
   *
   * @param request - The request {@link DatabaseApiDeleteDatabaseRequest}
   * @returns A Promise of Database
   */
  deleteDatabase = (request: Readonly<DatabaseApiDeleteDatabaseRequest>) =>
    this.client.fetch<Database>(
      {
        method: 'DELETE',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/databases/${validatePathParam('databaseName', request.databaseName)}`,
      },
      unmarshalDatabase,
    )

  /**
   * "Create a new database user".
   *
   * @param request - The request {@link DatabaseApiCreateDatabaseUserRequest}
   * @returns A Promise of DatabaseUser
   */
  createDatabaseUser = (
    request: Readonly<DatabaseApiCreateDatabaseUserRequest>,
  ) =>
    this.client.fetch<DatabaseUser>(
      {
        body: JSON.stringify(
          marshalDatabaseApiCreateDatabaseUserRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/databases-users`,
      },
      unmarshalDatabaseUser,
    )

  protected pageOfListDatabaseUsers = (
    request: Readonly<DatabaseApiListDatabaseUsersRequest>,
  ) =>
    this.client.fetch<ListDatabaseUsersResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/database-users`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListDatabaseUsersResponse,
    )

  /**
   * "List all database users".
   *
   * @param request - The request {@link DatabaseApiListDatabaseUsersRequest}
   * @returns A Promise of ListDatabaseUsersResponse
   */
  listDatabaseUsers = (
    request: Readonly<DatabaseApiListDatabaseUsersRequest>,
  ) => enrichForPagination('users', this.pageOfListDatabaseUsers, request)

  /**
   * "Get details of a database user".
   *
   * @param request - The request {@link DatabaseApiGetDatabaseUserRequest}
   * @returns A Promise of DatabaseUser
   */
  getDatabaseUser = (request: Readonly<DatabaseApiGetDatabaseUserRequest>) =>
    this.client.fetch<DatabaseUser>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/databases-users/${validatePathParam('username', request.username)}`,
      },
      unmarshalDatabaseUser,
    )

  /**
   * "Delete a database user".
   *
   * @param request - The request {@link DatabaseApiDeleteDatabaseUserRequest}
   * @returns A Promise of DatabaseUser
   */
  deleteDatabaseUser = (
    request: Readonly<DatabaseApiDeleteDatabaseUserRequest>,
  ) =>
    this.client.fetch<DatabaseUser>(
      {
        method: 'DELETE',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/database-users/${validatePathParam('username', request.username)}`,
      },
      unmarshalDatabaseUser,
    )

  /**
   * "Change the password of a database user".
   *
   * @param request - The request {@link DatabaseApiChangeDatabaseUserPasswordRequest}
   * @returns A Promise of DatabaseUser
   */
  changeDatabaseUserPassword = (
    request: Readonly<DatabaseApiChangeDatabaseUserPasswordRequest>,
  ) =>
    this.client.fetch<DatabaseUser>(
      {
        body: JSON.stringify(
          marshalDatabaseApiChangeDatabaseUserPasswordRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/databases-users/${validatePathParam('username', request.username)}/change-password`,
      },
      unmarshalDatabaseUser,
    )

  /**
   * "Assign a database user to a database".
   *
   * @param request - The request {@link DatabaseApiAssignDatabaseUserRequest}
   * @returns A Promise of DatabaseUser
   */
  assignDatabaseUser = (
    request: Readonly<DatabaseApiAssignDatabaseUserRequest>,
  ) =>
    this.client.fetch<DatabaseUser>(
      {
        body: JSON.stringify(
          marshalDatabaseApiAssignDatabaseUserRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/databases/${validatePathParam('databaseName', request.databaseName)}/assign-user`,
      },
      unmarshalDatabaseUser,
    )

  /**
   * "Unassign a database user from a database".
   *
   * @param request - The request {@link DatabaseApiUnassignDatabaseUserRequest}
   * @returns A Promise of DatabaseUser
   */
  unassignDatabaseUser = (
    request: Readonly<DatabaseApiUnassignDatabaseUserRequest>,
  ) =>
    this.client.fetch<DatabaseUser>(
      {
        body: JSON.stringify(
          marshalDatabaseApiUnassignDatabaseUserRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/databases/${validatePathParam('databaseName', request.databaseName)}/unassign-user`,
      },
      unmarshalDatabaseUser,
    )
}

/**
 * Web Hosting Dns API.

This API allows you to manage your Web Hosting services.
 */
export class DnsAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  /**
   * Get DNS records. Get the set of DNS records of a specified domain associated with a Web Hosting plan's domain.
   *
   * @param request - The request {@link DnsApiGetDomainDnsRecordsRequest}
   * @returns A Promise of DnsRecords
   */
  getDomainDnsRecords = (request: Readonly<DnsApiGetDomainDnsRecordsRequest>) =>
    this.client.fetch<DnsRecords>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domain', request.domain)}/dns-records`,
      },
      unmarshalDnsRecords,
    )

  /**
   * Check whether you own this domain or not.. Check whether you own this domain or not.
   *
   * @deprecated
   * @param request - The request {@link DnsApiCheckUserOwnsDomainRequest}
   * @returns A Promise of CheckUserOwnsDomainResponse
   */
  checkUserOwnsDomain = (request: Readonly<DnsApiCheckUserOwnsDomainRequest>) =>
    this.client.fetch<CheckUserOwnsDomainResponse>(
      {
        body: JSON.stringify(
          marshalDnsApiCheckUserOwnsDomainRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domain', request.domain)}/check-ownership`,
      },
      unmarshalCheckUserOwnsDomainResponse,
    )

  /**
   * Synchronize your DNS records on the Elements Console and on cPanel.. Synchronize your DNS records on the Elements Console and on cPanel.
   *
   * @param request - The request {@link DnsApiSyncDomainDnsRecordsRequest}
   * @returns A Promise of DnsRecords
   */
  syncDomainDnsRecords = (
    request: Readonly<DnsApiSyncDomainDnsRecordsRequest>,
  ) =>
    this.client.fetch<DnsRecords>(
      {
        body: JSON.stringify(
          marshalDnsApiSyncDomainDnsRecordsRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domain', request.domain)}/sync-domain-dns-records`,
      },
      unmarshalDnsRecords,
    )

  /**
   * Search for available domains based on domain name.. Search for available domains based on domain name.
   *
   * @param request - The request {@link DnsApiSearchDomainsRequest}
   * @returns A Promise of SearchDomainsResponse
   */
  searchDomains = (request: Readonly<DnsApiSearchDomainsRequest>) =>
    this.client.fetch<SearchDomainsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/search-domains`,
        urlParams: urlParams(
          ['domain_name', request.domainName],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalSearchDomainsResponse,
    )

  /**
   * Retrieve detailed information about a specific domain, including its status, DNS configuration, and ownership.. Retrieve detailed information about a specific domain, including its status, DNS configuration, and ownership.
   *
   * @param request - The request {@link DnsApiGetDomainRequest}
   * @returns A Promise of Domain
   */
  getDomain = (request: Readonly<DnsApiGetDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainName', request.domainName)}`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalDomain,
    )

  /**
   * Waits for {@link Domain} to be in a final state.
   *
   * @param request - The request {@link DnsApiGetDomainRequest}
   * @param options - The waiting options
   * @returns A Promise of Domain
   */
  waitForDomain = (
    request: Readonly<DnsApiGetDomainRequest>,
    options?: Readonly<WaitForOptions<Domain>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !DOMAIN_TRANSIENT_STATUSES_WEBHOSTING.includes(res.status),
          )),
      this.getDomain,
      request,
      options,
    )
}

/**
 * Web Hosting Offer API.

This API allows you to manage your offer for your Web Hosting services.
 */
export class OfferAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  protected pageOfListOffers = (
    request: Readonly<OfferApiListOffersRequest> = {},
  ) =>
    this.client.fetch<ListOffersResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/offers`,
        urlParams: urlParams(
          ['control_panels', request.controlPanels],
          ['hosting_id', request.hostingId],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListOffersResponse,
    )

  /**
   * List all available hosting offers along with their specific options.. List all available hosting offers along with their specific options.
   *
   * @param request - The request {@link OfferApiListOffersRequest}
   * @returns A Promise of ListOffersResponse
   */
  listOffers = (request: Readonly<OfferApiListOffersRequest> = {}) =>
    enrichForPagination('offers', this.pageOfListOffers, request)
}

/**
 * Web Hosting API.

This API allows you to manage your Web Hosting services.
 */
export class HostingAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  /**
   * Order a Web Hosting plan. Order a Web Hosting plan, specifying the offer type required via the `offer_id` parameter.
   *
   * @param request - The request {@link HostingApiCreateHostingRequest}
   * @returns A Promise of Hosting
   */
  createHosting = (request: Readonly<HostingApiCreateHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        body: JSON.stringify(
          marshalHostingApiCreateHostingRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings`,
      },
      unmarshalHosting,
    )

  protected pageOfListHostings = (
    request: Readonly<HostingApiListHostingsRequest> = {},
  ) =>
    this.client.fetch<ListHostingsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings`,
        urlParams: urlParams(
          ['control_panels', request.controlPanels],
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
          ['subdomain', request.subdomain],
          ['tags', request.tags],
        ),
      },
      unmarshalListHostingsResponse,
    )

  /**
   * List all Web Hosting plans. List all of your existing Web Hosting plans. Various filters are available to limit the results, including filtering by domain, status, tag and Project ID.
   *
   * @param request - The request {@link HostingApiListHostingsRequest}
   * @returns A Promise of ListHostingsResponse
   */
  listHostings = (request: Readonly<HostingApiListHostingsRequest> = {}) =>
    enrichForPagination('hostings', this.pageOfListHostings, request)

  /**
   * Get a Web Hosting plan. Get the details of one of your existing Web Hosting plans, specified by its `hosting_id`.
   *
   * @param request - The request {@link HostingApiGetHostingRequest}
   * @returns A Promise of Hosting
   */
  getHosting = (request: Readonly<HostingApiGetHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}`,
      },
      unmarshalHosting,
    )

  /**
   * Waits for {@link Hosting} to be in a final state.
   *
   * @param request - The request {@link HostingApiGetHostingRequest}
   * @param options - The waiting options
   * @returns A Promise of Hosting
   */
  waitForHosting = (
    request: Readonly<HostingApiGetHostingRequest>,
    options?: Readonly<WaitForOptions<Hosting>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !HOSTING_TRANSIENT_STATUSES_WEBHOSTING.includes(res.status),
          )),
      this.getHosting,
      request,
      options,
    )

  /**
   * Update a Web Hosting plan. Update the details of one of your existing Web Hosting plans, specified by its `hosting_id`. You can update parameters including the contact email address, tags, options and offer.
   *
   * @param request - The request {@link HostingApiUpdateHostingRequest}
   * @returns A Promise of Hosting
   */
  updateHosting = (request: Readonly<HostingApiUpdateHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        body: JSON.stringify(
          marshalHostingApiUpdateHostingRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}`,
      },
      unmarshalHosting,
    )

  /**
   * Delete a Web Hosting plan. Delete a Web Hosting plan, specified by its `hosting_id`. Note that deletion is not immediate: it will take place at the end of the calendar month, after which time your Web Hosting plan and all its data (files and emails) will be irreversibly lost.
   *
   * @param request - The request {@link HostingApiDeleteHostingRequest}
   * @returns A Promise of Hosting
   */
  deleteHosting = (request: Readonly<HostingApiDeleteHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        method: 'DELETE',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}`,
      },
      unmarshalHosting,
    )

  /**
   * Create a user session.
   *
   * @param request - The request {@link HostingApiCreateSessionRequest}
   * @returns A Promise of Session
   */
  createSession = (request: Readonly<HostingApiCreateSessionRequest>) =>
    this.client.fetch<Session>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/sessions`,
      },
      unmarshalSession,
    )

  /**
   * Reset a Web Hosting plan password.
   *
   * @param request - The request {@link HostingApiResetHostingPasswordRequest}
   * @returns A Promise of ResetHostingPasswordResponse
   */
  resetHostingPassword = (
    request: Readonly<HostingApiResetHostingPasswordRequest>,
  ) =>
    this.client.fetch<ResetHostingPasswordResponse>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/reset-password`,
      },
      unmarshalResetHostingPasswordResponse,
    )

  /**
   * Get the total counts of websites, databases, email accounts, and FTP accounts of a Web Hosting plan.
   *
   * @param request - The request {@link HostingApiGetResourceSummaryRequest}
   * @returns A Promise of ResourceSummary
   */
  getResourceSummary = (
    request: Readonly<HostingApiGetResourceSummaryRequest>,
  ) =>
    this.client.fetch<ResourceSummary>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/resource-summary`,
      },
      unmarshalResourceSummary,
    )

  /**
   * Attach a custom domain to a webhosting.
   *
   * @param request - The request {@link HostingApiAddCustomDomainRequest}
   * @returns A Promise of HostingSummary
   */
  addCustomDomain = (request: Readonly<HostingApiAddCustomDomainRequest>) =>
    this.client.fetch<HostingSummary>(
      {
        body: JSON.stringify(
          marshalHostingApiAddCustomDomainRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/add-custom-domain`,
      },
      unmarshalHostingSummary,
    )

  /**
   * Detach a custom domain from a webhosting.
   *
   * @param request - The request {@link HostingApiRemoveCustomDomainRequest}
   * @returns A Promise of HostingSummary
   */
  removeCustomDomain = (
    request: Readonly<HostingApiRemoveCustomDomainRequest>,
  ) =>
    this.client.fetch<HostingSummary>(
      {
        body: JSON.stringify(
          marshalHostingApiRemoveCustomDomainRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/remove-custom-domain`,
      },
      unmarshalHostingSummary,
    )
}

/**
 * Web Hosting free domain API.

This API allows you to list and check a free domain's validity.
 */
export class FreeDomainAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  /**
   * Check whether a given slug and free domain combination is available.. Check whether a given slug and free domain combination is available.
   *
   * @param request - The request {@link FreeDomainApiCheckFreeDomainAvailabilityRequest}
   * @returns A Promise of CheckFreeDomainAvailabilityResponse
   */
  checkFreeDomainAvailability = (
    request: Readonly<FreeDomainApiCheckFreeDomainAvailabilityRequest>,
  ) =>
    this.client.fetch<CheckFreeDomainAvailabilityResponse>(
      {
        body: JSON.stringify(
          marshalFreeDomainApiCheckFreeDomainAvailabilityRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/free-domains/check-availability`,
      },
      unmarshalCheckFreeDomainAvailabilityResponse,
    )

  protected pageOfListFreeRootDomains = (
    request: Readonly<FreeDomainApiListFreeRootDomainsRequest> = {},
  ) =>
    this.client.fetch<ListFreeRootDomainsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/free-domains/root-domains`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListFreeRootDomainsResponse,
    )

  /**
   * Retrieve the list of free root domains available for a Web Hosting.. Retrieve the list of free root domains available for a Web Hosting.
   *
   * @param request - The request {@link FreeDomainApiListFreeRootDomainsRequest}
   * @returns A Promise of ListFreeRootDomainsResponse
   */
  listFreeRootDomains = (
    request: Readonly<FreeDomainApiListFreeRootDomainsRequest> = {},
  ) =>
    enrichForPagination('rootDomains', this.pageOfListFreeRootDomains, request)
}

/**
 * Web Hosting FTP Account API.

This API allows you to manage your FTP accounts for your Web Hosting services.
 */
export class FtpAccountAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  /**
   * Create a new FTP account within your hosting plan.. Create a new FTP account within your hosting plan.
   *
   * @param request - The request {@link FtpAccountApiCreateFtpAccountRequest}
   * @returns A Promise of FtpAccount
   */
  createFtpAccount = (
    request: Readonly<FtpAccountApiCreateFtpAccountRequest>,
  ) =>
    this.client.fetch<FtpAccount>(
      {
        body: JSON.stringify(
          marshalFtpAccountApiCreateFtpAccountRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/ftp-accounts`,
      },
      unmarshalFtpAccount,
    )

  protected pageOfListFtpAccounts = (
    request: Readonly<FtpAccountApiListFtpAccountsRequest>,
  ) =>
    this.client.fetch<ListFtpAccountsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/ftp-accounts`,
        urlParams: urlParams(
          ['domain', request.domain],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListFtpAccountsResponse,
    )

  /**
   * List all FTP accounts within your hosting plan.. List all FTP accounts within your hosting plan.
   *
   * @param request - The request {@link FtpAccountApiListFtpAccountsRequest}
   * @returns A Promise of ListFtpAccountsResponse
   */
  listFtpAccounts = (request: Readonly<FtpAccountApiListFtpAccountsRequest>) =>
    enrichForPagination('ftpAccounts', this.pageOfListFtpAccounts, request)

  /**
   * Delete a specific FTP account within your hosting plan.. Delete a specific FTP account within your hosting plan.
   *
   * @param request - The request {@link FtpAccountApiRemoveFtpAccountRequest}
   * @returns A Promise of FtpAccount
   */
  removeFtpAccount = (
    request: Readonly<FtpAccountApiRemoveFtpAccountRequest>,
  ) =>
    this.client.fetch<FtpAccount>(
      {
        method: 'DELETE',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/ftp-accounts/${validatePathParam('username', request.username)}`,
      },
      unmarshalFtpAccount,
    )

  changeFtpAccountPassword = (
    request: Readonly<FtpAccountApiChangeFtpAccountPasswordRequest>,
  ) =>
    this.client.fetch<FtpAccount>(
      {
        body: JSON.stringify(
          marshalFtpAccountApiChangeFtpAccountPasswordRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/ftp-accounts/${validatePathParam('username', request.username)}/change-password`,
      },
      unmarshalFtpAccount,
    )
}

/**
 * Web Hosting Mail Account API.

This API allows you to manage your mail accounts for your Web Hosting services.
 */
export class MailAccountAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  /**
   * Create a new mail account within your hosting plan.. Create a new mail account within your hosting plan.
   *
   * @param request - The request {@link MailAccountApiCreateMailAccountRequest}
   * @returns A Promise of MailAccount
   */
  createMailAccount = (
    request: Readonly<MailAccountApiCreateMailAccountRequest>,
  ) =>
    this.client.fetch<MailAccount>(
      {
        body: JSON.stringify(
          marshalMailAccountApiCreateMailAccountRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/mail-accounts`,
      },
      unmarshalMailAccount,
    )

  protected pageOfListMailAccounts = (
    request: Readonly<MailAccountApiListMailAccountsRequest>,
  ) =>
    this.client.fetch<ListMailAccountsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/mail-accounts`,
        urlParams: urlParams(
          ['domain', request.domain],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListMailAccountsResponse,
    )

  /**
   * List all mail accounts within your hosting plan.. List all mail accounts within your hosting plan.
   *
   * @param request - The request {@link MailAccountApiListMailAccountsRequest}
   * @returns A Promise of ListMailAccountsResponse
   */
  listMailAccounts = (
    request: Readonly<MailAccountApiListMailAccountsRequest>,
  ) => enrichForPagination('mailAccounts', this.pageOfListMailAccounts, request)

  /**
   * Delete a mail account within your hosting plan.. Delete a mail account within your hosting plan.
   *
   * @param request - The request {@link MailAccountApiRemoveMailAccountRequest}
   * @returns A Promise of MailAccount
   */
  removeMailAccount = (
    request: Readonly<MailAccountApiRemoveMailAccountRequest>,
  ) =>
    this.client.fetch<MailAccount>(
      {
        body: JSON.stringify(
          marshalMailAccountApiRemoveMailAccountRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/remove-mail-account`,
      },
      unmarshalMailAccount,
    )

  /**
   * Update the password of a mail account within your hosting plan.. Update the password of a mail account within your hosting plan.
   *
   * @param request - The request {@link MailAccountApiChangeMailAccountPasswordRequest}
   * @returns A Promise of MailAccount
   */
  changeMailAccountPassword = (
    request: Readonly<MailAccountApiChangeMailAccountPasswordRequest>,
  ) =>
    this.client.fetch<MailAccount>(
      {
        body: JSON.stringify(
          marshalMailAccountApiChangeMailAccountPasswordRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/change-mail-password`,
      },
      unmarshalMailAccount,
    )
}

/**
 * Web Hosting Website API.

This API allows you to manage your websites for your Web Hosting services.
 */
export class WebsiteAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  protected pageOfListWebsites = (
    request: Readonly<WebsiteApiListWebsitesRequest>,
  ) =>
    this.client.fetch<ListWebsitesResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/websites`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListWebsitesResponse,
    )

  /**
   * List all websites for a specific hosting.. List all websites for a specific hosting.
   *
   * @param request - The request {@link WebsiteApiListWebsitesRequest}
   * @returns A Promise of ListWebsitesResponse
   */
  listWebsites = (request: Readonly<WebsiteApiListWebsitesRequest>) =>
    enrichForPagination('websites', this.pageOfListWebsites, request)
}
