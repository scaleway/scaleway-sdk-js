// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import {
  marshalCreateSSHKeyRequest,
  marshalUpdateSSHKeyRequest,
  unmarshalListSSHKeysResponse,
  unmarshalSSHKey,
} from './marshalling.gen'
import type {
  CreateSSHKeyRequest,
  DeleteSSHKeyRequest,
  GetSSHKeyRequest,
  ListSSHKeysRequest,
  ListSSHKeysResponse,
  SSHKey,
  UpdateSSHKeyRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** Account API. */
export class AccountV2Alpha1GenAPI extends API {
  protected pageOfListSSHKeys = (request: Readonly<ListSSHKeysRequest> = {}) =>
    this.client.fetch<ListSSHKeysResponse>(
      {
        method: 'GET',
        path: `/account/v2alpha1/ssh-keys`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
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
      unmarshalListSSHKeysResponse,
    )

  /**
   * List all SSH keys of your project
   *
   * @param request - The request {@link ListSSHKeysRequest}
   * @returns A Promise of ListSSHKeysResponse
   */
  listSSHKeys = (request: Readonly<ListSSHKeysRequest> = {}) =>
    enrichForPagination('sshKeys', this.pageOfListSSHKeys, request)

  /**
   * Add an SSH key to your project
   *
   * @param request - The request {@link CreateSSHKeyRequest}
   * @returns A Promise of SSHKey
   */
  createSSHKey = (request: Readonly<CreateSSHKeyRequest>) =>
    this.client.fetch<SSHKey>(
      {
        body: JSON.stringify(
          marshalCreateSSHKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/account/v2alpha1/ssh-keys`,
      },
      unmarshalSSHKey,
    )

  /**
   * Get an SSH key from your project
   *
   * @param request - The request {@link GetSSHKeyRequest}
   * @returns A Promise of SSHKey
   */
  getSSHKey = (request: Readonly<GetSSHKeyRequest>) =>
    this.client.fetch<SSHKey>(
      {
        method: 'GET',
        path: `/account/v2alpha1/ssh-key/${validatePathParam(
          'sshKeyId',
          request.sshKeyId,
        )}`,
      },
      unmarshalSSHKey,
    )

  /**
   * Update an SSH key on your project
   *
   * @param request - The request {@link UpdateSSHKeyRequest}
   * @returns A Promise of SSHKey
   */
  updateSSHKey = (request: Readonly<UpdateSSHKeyRequest>) =>
    this.client.fetch<SSHKey>(
      {
        body: JSON.stringify(
          marshalUpdateSSHKeyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/account/v2alpha1/ssh-key/${validatePathParam(
          'sshKeyId',
          request.sshKeyId,
        )}`,
      },
      unmarshalSSHKey,
    )

  /**
   * Remove an SSH key from your project
   *
   * @param request - The request {@link DeleteSSHKeyRequest}
   */
  deleteSSHKey = (request: Readonly<DeleteSSHKeyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/account/v2alpha1/ssh-key/${validatePathParam(
        'sshKeyId',
        request.sshKeyId,
      )}`,
    })
}
