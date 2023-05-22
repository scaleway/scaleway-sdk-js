// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ListPrivateNetworksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListVPCsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export interface AddSubnetsResponse {
  subnets: string[]
}

export interface DeleteSubnetsResponse {
  subnets: string[]
}

export interface ListPrivateNetworksResponse {
  privateNetworks: PrivateNetwork[]
  totalCount: number
}

export interface ListVPCsResponse {
  vpcs: VPC[]
  totalCount: number
}

/** Private network. */
export interface PrivateNetwork {
  /** Private Network ID. */
  id: string
  /** Private Network name. */
  name: string
  /** Scaleway Organization the Private Network belongs to. */
  organizationId: string
  /** Scaleway Project the Private Network belongs to. */
  projectId: string
  /** Region in which the Private Network is available. */
  region: Region
  /** Tags of the Private Network. */
  tags: string[]
  /** Date the Private Network was created. */
  createdAt?: Date
  /** Date the Private Network was last modified. */
  updatedAt?: Date
  /** Private Network subnets. */
  subnets: Subnet[]
  /** VPC the Private Network belongs to. */
  vpcId: string
}

export interface SetSubnetsResponse {
  subnets: string[]
}

/** Subnet. */
export interface Subnet {
  /** ID of the subnet. */
  id: string
  /** Subnet creation date. */
  createdAt?: Date
  /** Subnet last modification date. */
  updatedAt?: Date
  /** Subnet CIDR. */
  subnet: string
}

/** Vpc. */
export interface VPC {
  /** VPC ID. */
  id: string
  /** VPC name. */
  name: string
  /** Scaleway Organization the VPC belongs to. */
  organizationId: string
  /** Scaleway Project the VPC belongs to. */
  projectId: string
  /** Region of the VPC. */
  region: Region
  /** Tags for the VPC. */
  tags: string[]
  /** Defines whether the VPC is the default one for its Project. */
  isDefault: boolean
  /** Date the VPC was created. */
  createdAt?: Date
  /** Date the VPC was last modified. */
  updatedAt?: Date
}

export type ListVPCsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Sort order of the returned VPCs. */
  orderBy?: ListVPCsRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Maximum number of VPCs to return per page. */
  pageSize?: number
  /**
   * Name to filter for. Only VPCs with names containing this string will be
   * returned.
   */
  name?: string
  /**
   * Tags to filter for. Only VPCs with one more more matching tags will be
   * returned.
   */
  tags?: string[]
  /**
   * Organization ID to filter for. Only VPCs belonging to this Organization
   * will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for. Only VPCs belonging to this Project will be
   * returned.
   */
  projectId?: string
  /**
   * Defines whether to filter only for VPCs which are the default one for their
   * Project.
   */
  isDefault?: boolean
}

export type CreateVPCRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Name for the VPC. */
  name?: string
  /** Scaleway Project in which to create the VPC. */
  projectId?: string
  /** Tags for the VPC. */
  tags?: string[]
}

export type GetVPCRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** VPC ID. */
  vpcId: string
}

export type UpdateVPCRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** VPC ID. */
  vpcId: string
  /** Name for the VPC. */
  name?: string
  /** Tags for the VPC. */
  tags?: string[]
}

export type DeleteVPCRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** VPC ID. */
  vpcId: string
}

export type ListPrivateNetworksRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Sort order of the returned Private Networks. */
  orderBy?: ListPrivateNetworksRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Maximum number of Private Networks to return per page. */
  pageSize?: number
  /**
   * Name to filter for. Only Private Networks with names containing this string
   * will be returned.
   */
  name?: string
  /**
   * Tags to filter for. Only Private Networks with one or more matching tags
   * will be returned.
   */
  tags?: string[]
  /**
   * Organization ID to filter for. Only Private Networks belonging to this
   * Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for. Only Private Networks belonging to this Project
   * will be returned.
   */
  projectId?: string
  /**
   * Private Network IDs to filter for. Only Private Networks with one of these
   * IDs will be returned.
   */
  privateNetworkIds?: string[]
  /**
   * VPC ID to filter for. Only Private Networks belonging to this VPC will be
   * returned.
   */
  vpcId?: string
}

export type CreatePrivateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Name for the Private Network. */
  name?: string
  /** Scaleway Project in which to create the Private Network. */
  projectId?: string
  /** Tags for the Private Network. */
  tags?: string[]
  /** Private Network subnets CIDR. */
  subnets?: string[]
  /** VPC in which to create the Private Network. */
  vpcId?: string
}

export type GetPrivateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Private Network ID. */
  privateNetworkId: string
}

export type UpdatePrivateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Private Network ID. */
  privateNetworkId: string
  /** Name for the Private Network. */
  name?: string
  /** Tags for the Private Network. */
  tags?: string[]
}

export type DeletePrivateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Private Network ID. */
  privateNetworkId: string
}

export type MigrateZonalPrivateNetworksRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /**
   * Organization ID to target. The specified zoned Private Networks within this
   * Organization will be migrated to regional.
   *
   * One-of ('scope'): at most one of 'organizationId', 'projectId' could be
   * set.
   */
  organizationId?: string
  /**
   * Project to target. The specified zoned Private Networks within this Project
   * will be migrated to regional.
   *
   * One-of ('scope'): at most one of 'organizationId', 'projectId' could be
   * set.
   */
  projectId?: string
  /** IDs of the Private Networks to migrate. */
  privateNetworkIds?: string[]
}

export type SetSubnetsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Private Network ID. */
  privateNetworkId: string
  /** Private Network subnets CIDR. */
  subnets?: string[]
}

export type AddSubnetsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Private Network ID. */
  privateNetworkId: string
  /** Private Network subnets CIDR. */
  subnets?: string[]
}

export type DeleteSubnetsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Private Network ID. */
  privateNetworkId: string
  /** Private Network subnets CIDR. */
  subnets?: string[]
}
