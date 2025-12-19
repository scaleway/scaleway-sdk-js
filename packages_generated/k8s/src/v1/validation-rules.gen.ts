// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const ACLRuleRequest = {
  description: {
    maxLength: 2000,
  },
}

export const CreateClusterRequest = {
  description: {
    maxLength: 4096,
  },
  name: {
    maxLength: 100,
    minLength: 1,
  },
  type: {
    maxLength: 100,
  },
  version: {
    maxLength: 10,
  },
}

export const CreateClusterRequestAutoscalerConfig = {
  scaleDownDelayAfterAdd: {
    maxLength: 100,
  },
  scaleDownUtilizationThreshold: {
    greaterThan: 0,
    lessThan: 1,
  },
}

export const CreateClusterRequestOpenIDConnectConfig = {
  clientId: {
    maxLength: 255,
  },
  groupsPrefix: {
    maxLength: 100,
  },
  issuerUrl: {
    maxLength: 255,
  },
  usernameClaim: {
    maxLength: 100,
  },
  usernamePrefix: {
    maxLength: 100,
  },
}

export const CreateClusterRequestPoolConfig = {
  name: {
    maxLength: 100,
    minLength: 1,
  },
}

export const CreatePoolRequest = {
  name: {
    maxLength: 100,
    minLength: 1,
  },
}

export const ListClusterTypesRequest = {
  page: {
    greaterThan: 0,
  },
  pageSize: {
    greaterThan: 0,
    lessThanOrEqual: 100,
  },
}

export const ListClustersRequest = {
  name: {
    minLength: 1,
  },
  page: {
    greaterThan: 0,
  },
  pageSize: {
    greaterThan: 0,
    lessThanOrEqual: 100,
  },
}

export const ListNodesRequest = {
  name: {
    minLength: 1,
  },
  page: {
    greaterThan: 0,
  },
  pageSize: {
    greaterThan: 0,
    lessThanOrEqual: 100,
  },
}

export const ListPoolsRequest = {
  name: {
    minLength: 1,
  },
  page: {
    greaterThan: 0,
  },
  pageSize: {
    greaterThan: 0,
    lessThanOrEqual: 100,
  },
}

export const MaintenanceWindow = {
  startHour: {
    lessThanOrEqual: 23,
  },
}

export const SetClusterTypeRequest = {
  type: {
    maxLength: 100,
  },
}

export const UpdateClusterRequest = {
  description: {
    maxLength: 4096,
  },
  name: {
    maxLength: 100,
    minLength: 1,
  },
}

export const UpdateClusterRequestAutoscalerConfig = {
  scaleDownDelayAfterAdd: {
    maxLength: 100,
  },
  scaleDownUtilizationThreshold: {
    greaterThan: 0,
    lessThan: 1,
  },
}

export const UpdateClusterRequestOpenIDConnectConfig = {
  clientId: {
    maxLength: 255,
  },
  groupsPrefix: {
    maxLength: 100,
  },
  issuerUrl: {
    maxLength: 255,
  },
  usernameClaim: {
    maxLength: 100,
  },
  usernamePrefix: {
    maxLength: 100,
  },
}

export const UpgradeClusterRequest = {
  version: {
    maxLength: 10,
  },
}
