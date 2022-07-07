// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export type ListSSHKeysRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'

/** List ssh keys response */
export interface ListSSHKeysResponse {
  sshKeys: Array<SSHKey>
  totalCount: number
}

/** Ssh key */
export interface SSHKey {
  id: string
  name: string
  publicKey: string
  fingerprint: string
  createdAt?: Date
  updatedAt?: Date
  creationInfo?: SSHKeyCreationInfo
  organizationId: string
  projectId: string
}

export interface SSHKeyCreationInfo {
  address: string
  userAgent: string
  countryCode: string
}

export type ListSSHKeysRequest = {
  orderBy?: ListSSHKeysRequestOrderBy
  page?: number
  pageSize?: number
  name?: string
  organizationId?: string
  projectId?: string
}

export type CreateSSHKeyRequest = {
  /** The name of the SSH key */
  name: string
  /**
   * SSH public key. Currently ssh-rsa, ssh-dss (DSA), ssh-ed25519 and ecdsa
   * keys with NIST curves are supported
   */
  publicKey: string
  /**
   * @deprecated Use project_id field instead.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * Project owning the resource.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
}

export type GetSSHKeyRequest = {
  /** The ID of the SSH key */
  sshKeyId: string
}

export type UpdateSSHKeyRequest = {
  sshKeyId: string
  /** Name of the SSH key */
  name?: string
}

export type DeleteSSHKeyRequest = {
  sshKeyId: string
}
