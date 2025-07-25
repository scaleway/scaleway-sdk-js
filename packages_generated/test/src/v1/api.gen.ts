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
import { HUMAN_TRANSIENT_STATUSES as HUMAN_TRANSIENT_STATUSES_TEST } from './content.gen'
import {
  marshalCreateHumanRequest,
  marshalRegisterRequest,
  marshalUpdateHumanRequest,
  unmarshalHuman,
  unmarshalListHumansResponse,
  unmarshalRegisterResponse,
} from './marshalling.gen'
import type {
  CreateHumanRequest,
  DeleteHumanRequest,
  GetHumanRequest,
  Human,
  ListHumansRequest,
  ListHumansResponse,
  RegisterRequest,
  RegisterResponse,
  RunHumanRequest,
  SmokeHumanRequest,
  UpdateHumanRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Fake API.

No Auth Service for end-to-end testing.
 */
export class API extends ParentAPI {
  /**
   * Register a user. Register a human and return a access-key and a secret-key that must be used in all other commands.

Hint: you can use other test commands by setting the SCW_SECRET_KEY env variable.
   *
   * @param request - The request {@link RegisterRequest}
   * @returns A Promise of RegisterResponse
   */
  register = (request: Readonly<RegisterRequest>) =>
    this.client.fetch<RegisterResponse>(
      {
        body: JSON.stringify(
          marshalRegisterRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/test/v1/register`,
      },
      unmarshalRegisterResponse,
    )

  protected pageOfListHumans = (request: Readonly<ListHumansRequest> = {}) =>
    this.client.fetch<ListHumansResponse>(
      {
        method: 'GET',
        path: `/test/v1/humans`,
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
      unmarshalListHumansResponse,
    )

  /**
   * List all your humans.
   *
   * @param request - The request {@link ListHumansRequest}
   * @returns A Promise of ListHumansResponse
   */
  listHumans = (request: Readonly<ListHumansRequest> = {}) =>
    enrichForPagination('humans', this.pageOfListHumans, request)

  /**
   * Get human details. Get the human details associated with the given id.
   *
   * @param request - The request {@link GetHumanRequest}
   * @returns A Promise of Human
   */
  getHuman = (request: Readonly<GetHumanRequest>) =>
    this.client.fetch<Human>(
      {
        method: 'GET',
        path: `/test/v1/humans/${validatePathParam('humanId', request.humanId)}`,
      },
      unmarshalHuman,
    )

  /**
   * Waits for {@link Human} to be in a final state.
   *
   * @param request - The request {@link GetHumanRequest}
   * @param options - The waiting options
   * @returns A Promise of Human
   */
  waitForHuman = (
    request: Readonly<GetHumanRequest>,
    options?: Readonly<WaitForOptions<Human>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!HUMAN_TRANSIENT_STATUSES_TEST.includes(res.status))),
      this.getHuman,
      request,
      options,
    )

  /**
   * Create a new human.
   *
   * @param request - The request {@link CreateHumanRequest}
   * @returns A Promise of Human
   */
  createHuman = (request: Readonly<CreateHumanRequest>) =>
    this.client.fetch<Human>(
      {
        body: JSON.stringify(
          marshalCreateHumanRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/test/v1/humans`,
      },
      unmarshalHuman,
    )

  /**
   * Update an existing human. Update the human associated with the given id.
   *
   * @param request - The request {@link UpdateHumanRequest}
   * @returns A Promise of Human
   */
  updateHuman = (request: Readonly<UpdateHumanRequest>) =>
    this.client.fetch<Human>(
      {
        body: JSON.stringify(
          marshalUpdateHumanRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/test/v1/humans/${validatePathParam('humanId', request.humanId)}`,
      },
      unmarshalHuman,
    )

  /**
   * Delete an existing human. Delete the human associated with the given id.
   *
   * @param request - The request {@link DeleteHumanRequest}
   * @returns A Promise of Human
   */
  deleteHuman = (request: Readonly<DeleteHumanRequest>) =>
    this.client.fetch<Human>(
      {
        method: 'DELETE',
        path: `/test/v1/humans/${validatePathParam('humanId', request.humanId)}`,
      },
      unmarshalHuman,
    )

  /**
   * Start a 1h running for the given human. Start a one hour running for the given human.
   *
   * @param request - The request {@link RunHumanRequest}
   * @returns A Promise of Human
   */
  runHuman = (request: Readonly<RunHumanRequest>) =>
    this.client.fetch<Human>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/test/v1/humans/${validatePathParam('humanId', request.humanId)}/run`,
      },
      unmarshalHuman,
    )

  /**
   * Make a human smoke.
   *
   * @deprecated
   * @param request - The request {@link SmokeHumanRequest}
   * @returns A Promise of Human
   */
  smokeHuman = (request: Readonly<SmokeHumanRequest>) =>
    this.client.fetch<Human>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/test/v1/humans/${validatePathParam('humanId', request.humanId)}/smoke`,
      },
      unmarshalHuman,
    )
}
