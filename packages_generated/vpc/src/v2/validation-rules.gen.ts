// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const AclRule = {
  description: {
    maxLength: 200,
  },
  dstPortHigh: {
    lessThanOrEqual: 65536,
  },
  dstPortLow: {
    lessThanOrEqual: 65536,
  },
  srcPortHigh: {
    lessThanOrEqual: 65536,
  },
  srcPortLow: {
    lessThanOrEqual: 65536,
  },
}

export const ListSubnetOverlapsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 0,
    lessThanOrEqual: 1000,
  },
}

export const Route = {
  description: {
    maxLength: 200,
  },
}
