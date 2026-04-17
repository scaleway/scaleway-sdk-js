// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { WaitForOptions } from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import {
  DOMAIN_TRANSIENT_STATUSES as DOMAIN_TRANSIENT_STATUSES_MAILBOX,
  MAILBOX_TRANSIENT_STATUSES as MAILBOX_TRANSIENT_STATUSES_MAILBOX,
} from './content.gen.js'
import {
  marshalBatchCreateMailboxesRequest,
  marshalCreateDomainRequest,
  marshalUpdateMailboxRequest,
  unmarshalBatchCreateMailboxesResponse,
  unmarshalDomain,
  unmarshalGetDomainRecordsResponse,
  unmarshalListDomainsResponse,
  unmarshalListMailboxesResponse,
  unmarshalMailbox,
} from './marshalling.gen.js'
import type {
  BatchCreateMailboxesRequest,
  BatchCreateMailboxesResponse,
  CreateDomainRequest,
  DeleteDomainRequest,
  DeleteMailboxRequest,
  Domain,
  GetDomainRecordsRequest,
  GetDomainRecordsResponse,
  GetDomainRequest,
  GetMailboxRequest,
  ListDomainsRequest,
  ListDomainsResponse,
  ListMailboxesRequest,
  ListMailboxesResponse,
  Mailbox,
  RestoreMailboxRequest,
  UpdateMailboxRequest,
  ValidateDomainRecordsRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Mailbox API.

This API allows you to manage your Mailbox services.
 */
export class API extends ParentAPI {
  /**
   * Register a domain in a project.. You must specify a `project_id` and a `domain_name` to register a domain in a specific Project.
   *
   * @param request - The request {@link CreateDomainRequest}
   * @returns A Promise of Domain
   */
  createDomain = (request: Readonly<CreateDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        body: JSON.stringify(marshalCreateDomainRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mailbox/v1alpha1/domains`,
      },
      unmarshalDomain,
    )

  protected pageOfListDomains = (request: Readonly<ListDomainsRequest> = {}) =>
    this.client.fetch<ListDomainsResponse>(
      {
        method: 'GET',
        path: `/mailbox/v1alpha1/domains`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['search', request.search],
          ['statuses', request.statuses],
        ),
      },
      unmarshalListDomainsResponse,
    )

  /**
   * List domains in an organization.. The return list can be filtered with request parameters.
   *
   * @param request - The request {@link ListDomainsRequest}
   * @returns A Promise of ListDomainsResponse
   */
  listDomains = (request: Readonly<ListDomainsRequest> = {}) =>
    enrichForPagination('domains', this.pageOfListDomains, request)

  /**
   * Get a domain by its ID.. Get a domain by its ID.
   *
   * @param request - The request {@link GetDomainRequest}
   * @returns A Promise of Domain
   */
  getDomain = (request: Readonly<GetDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'GET',
        path: `/mailbox/v1alpha1/domains/${validatePathParam('domainId', request.domainId)}`,
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
  waitForDomain = (request: Readonly<GetDomainRequest>, options?: Readonly<WaitForOptions<Domain>>) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!DOMAIN_TRANSIENT_STATUSES_MAILBOX.includes(res.status))),
      this.getDomain,
      request,
      options,
    )

  /**
   * Delete a domain by its ID.. Delete a domain by its ID.
   *
   * @param request - The request {@link DeleteDomainRequest}
   * @returns A Promise of Domain
   */
  deleteDomain = (request: Readonly<DeleteDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'DELETE',
        path: `/mailbox/v1alpha1/domains/${validatePathParam('domainId', request.domainId)}`,
      },
      unmarshalDomain,
    )

  /**
   * Get domain records by its ID.. Get domain records by its ID.
   *
   * @param request - The request {@link GetDomainRecordsRequest}
   * @returns A Promise of GetDomainRecordsResponse
   */
  getDomainRecords = (request: Readonly<GetDomainRecordsRequest>) =>
    this.client.fetch<GetDomainRecordsResponse>(
      {
        method: 'GET',
        path: `/mailbox/v1alpha1/domains/${validatePathParam('domainId', request.domainId)}/records`,
      },
      unmarshalGetDomainRecordsResponse,
    )

  validateDomainRecords = (request: Readonly<ValidateDomainRecordsRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/mailbox/v1alpha1/domains/${validatePathParam('domainId', request.domainId)}/validate-records`,
    })

  batchCreateMailboxes = (request: Readonly<BatchCreateMailboxesRequest>) =>
    this.client.fetch<BatchCreateMailboxesResponse>(
      {
        body: JSON.stringify(marshalBatchCreateMailboxesRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mailbox/v1alpha1/batch-create-mailboxes`,
      },
      unmarshalBatchCreateMailboxesResponse,
    )

  protected pageOfListMailboxes = (request: Readonly<ListMailboxesRequest> = {}) =>
    this.client.fetch<ListMailboxesResponse>(
      {
        method: 'GET',
        path: `/mailbox/v1alpha1/mailboxes`,
        urlParams: urlParams(
          ['domain_id', request.domainId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['search', request.search],
          ['statuses', request.statuses],
        ),
      },
      unmarshalListMailboxesResponse,
    )

  /**
   * List mailboxes in an organization.. The return list can be filtered with request parameters.
   *
   * @param request - The request {@link ListMailboxesRequest}
   * @returns A Promise of ListMailboxesResponse
   */
  listMailboxes = (request: Readonly<ListMailboxesRequest> = {}) =>
    enrichForPagination('mailboxes', this.pageOfListMailboxes, request)

  /**
   * Get a mailbox by its ID.. Get a mailbox by its ID.
   *
   * @param request - The request {@link GetMailboxRequest}
   * @returns A Promise of Mailbox
   */
  getMailbox = (request: Readonly<GetMailboxRequest>) =>
    this.client.fetch<Mailbox>(
      {
        method: 'GET',
        path: `/mailbox/v1alpha1/mailboxes/${validatePathParam('mailboxId', request.mailboxId)}`,
      },
      unmarshalMailbox,
    )

  /**
   * Waits for {@link Mailbox} to be in a final state.
   *
   * @param request - The request {@link GetMailboxRequest}
   * @param options - The waiting options
   * @returns A Promise of Mailbox
   */
  waitForMailbox = (request: Readonly<GetMailboxRequest>, options?: Readonly<WaitForOptions<Mailbox>>) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!MAILBOX_TRANSIENT_STATUSES_MAILBOX.includes(res.status))),
      this.getMailbox,
      request,
      options,
    )

  /**
   * Update a mailbox subscription period or password with its ID.. Update a mailbox subscription period or password with its ID.
   *
   * @param request - The request {@link UpdateMailboxRequest}
   * @returns A Promise of Mailbox
   */
  updateMailbox = (request: Readonly<UpdateMailboxRequest>) =>
    this.client.fetch<Mailbox>(
      {
        body: JSON.stringify(marshalUpdateMailboxRequest(request, this.client.settings)),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/mailbox/v1alpha1/mailboxes/${validatePathParam('mailboxId', request.mailboxId)}`,
      },
      unmarshalMailbox,
    )

  /**
   * Delete a mailbox by its ID.. Delete a mailbox by its ID.
   *
   * @param request - The request {@link DeleteMailboxRequest}
   * @returns A Promise of Mailbox
   */
  deleteMailbox = (request: Readonly<DeleteMailboxRequest>) =>
    this.client.fetch<Mailbox>(
      {
        method: 'DELETE',
        path: `/mailbox/v1alpha1/mailboxes/${validatePathParam('mailboxId', request.mailboxId)}`,
      },
      unmarshalMailbox,
    )

  /**
   * Restore a mailbox in deletion scheduled status by its ID.. Restore a mailbox in deletion scheduled status by its ID.
   *
   * @param request - The request {@link RestoreMailboxRequest}
   * @returns A Promise of Mailbox
   */
  restoreMailbox = (request: Readonly<RestoreMailboxRequest>) =>
    this.client.fetch<Mailbox>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mailbox/v1alpha1/mailboxes/${validatePathParam('mailboxId', request.mailboxId)}/restore`,
      },
      unmarshalMailbox,
    )
}
