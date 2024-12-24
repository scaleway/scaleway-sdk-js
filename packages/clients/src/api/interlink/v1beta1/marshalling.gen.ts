// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  AttachRoutingPolicyRequest,
  AttachVpcRequest,
  CreateLinkRequest,
  CreateRoutingPolicyRequest,
  Link,
  ListLinksResponse,
  ListPartnersResponse,
  ListPopsResponse,
  ListRoutingPoliciesResponse,
  Partner,
  Pop,
  RoutingPolicy,
  UpdateLinkRequest,
  UpdateRoutingPolicyRequest,
} from './types.gen'

export const unmarshalLink = (data: unknown): Link => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Link' failed as data isn't a dictionary.`,
    )
  }

  return {
    bandwidthMbps: data.bandwidth_mbps,
    bgpV4Status: data.bgp_v4_status,
    bgpV6Status: data.bgp_v6_status,
    createdAt: unmarshalDate(data.created_at),
    enableRoutePropagation: data.enable_route_propagation,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    pairingKey: data.pairing_key,
    partnerId: data.partner_id,
    popId: data.pop_id,
    projectId: data.project_id,
    region: data.region,
    routingPolicyId: data.routing_policy_id,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    vpcId: data.vpc_id,
  } as Link
}

export const unmarshalPartner = (data: unknown): Partner => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Partner' failed as data isn't a dictionary.`,
    )
  }

  return {
    contactEmail: data.contact_email,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    logoUrl: data.logo_url,
    name: data.name,
    portalUrl: data.portal_url,
    updatedAt: unmarshalDate(data.updated_at),
  } as Partner
}

export const unmarshalPop = (data: unknown): Pop => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Pop' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    availableLinkBandwidthsMbps: data.available_link_bandwidths_mbps,
    city: data.city,
    hostingProviderName: data.hosting_provider_name,
    id: data.id,
    logoUrl: data.logo_url,
    name: data.name,
    region: data.region,
  } as Pop
}

export const unmarshalRoutingPolicy = (data: unknown): RoutingPolicy => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RoutingPolicy' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    prefixFilterIn: data.prefix_filter_in,
    prefixFilterOut: data.prefix_filter_out,
    projectId: data.project_id,
    region: data.region,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as RoutingPolicy
}

export const unmarshalListLinksResponse = (
  data: unknown,
): ListLinksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListLinksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    links: unmarshalArrayOfObject(data.links, unmarshalLink),
    totalCount: data.total_count,
  } as ListLinksResponse
}

export const unmarshalListPartnersResponse = (
  data: unknown,
): ListPartnersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPartnersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    partners: unmarshalArrayOfObject(data.partners, unmarshalPartner),
    totalCount: data.total_count,
  } as ListPartnersResponse
}

export const unmarshalListPopsResponse = (data: unknown): ListPopsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPopsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    pops: unmarshalArrayOfObject(data.pops, unmarshalPop),
    totalCount: data.total_count,
  } as ListPopsResponse
}

export const unmarshalListRoutingPoliciesResponse = (
  data: unknown,
): ListRoutingPoliciesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRoutingPoliciesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    routingPolicies: unmarshalArrayOfObject(
      data.routing_policies,
      unmarshalRoutingPolicy,
    ),
    totalCount: data.total_count,
  } as ListRoutingPoliciesResponse
}

export const marshalAttachRoutingPolicyRequest = (
  request: AttachRoutingPolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  routing_policy_id: request.routingPolicyId,
})

export const marshalAttachVpcRequest = (
  request: AttachVpcRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  vpc_id: request.vpcId,
})

export const marshalCreateLinkRequest = (
  request: CreateLinkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bandwidth_mbps: request.bandwidthMbps,
  name: request.name,
  pop_id: request.popId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  ...resolveOneOf<boolean | string>([
    { param: 'dedicated', value: request.dedicated },
    { param: 'port_id', value: request.portId },
    { param: 'partner_id', value: request.partnerId },
  ]),
})

export const marshalCreateRoutingPolicyRequest = (
  request: CreateRoutingPolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  prefix_filter_in: request.prefixFilterIn,
  prefix_filter_out: request.prefixFilterOut,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalUpdateLinkRequest = (
  request: UpdateLinkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateRoutingPolicyRequest = (
  request: UpdateRoutingPolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  prefix_filter_in: request.prefixFilterIn,
  prefix_filter_out: request.prefixFilterOut,
  tags: request.tags,
})
