// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateConnectionRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const CreateCustomerGatewayRequest = {
  asn: {
    greaterThanOrEqual: 1,
  },
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const CreateRoutingPolicyRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const CreateVpnGatewayRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const CustomerGateway = {
  asn: {
    greaterThanOrEqual: 1,
  },
}

export const ListConnectionsRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListCustomerGatewaysRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListRoutingPoliciesRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListVpnGatewayTypesRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListVpnGatewaysRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const UpdateConnectionRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const UpdateCustomerGatewayRequest = {
  asn: {
    greaterThanOrEqual: 1,
  },
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const UpdateRoutingPolicyRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const UpdateVpnGatewayRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const VpnGateway = {
  asn: {
    greaterThanOrEqual: 1,
  },
}
