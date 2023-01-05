// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateClusterRequest = {
  name: {
    minLength: 1,
  },
}

export const CreateClusterRequestAutoscalerConfig = {
  scaleDownUtilizationThreshold: {
    greaterThan: 0,
    lessThan: 1,
  },
}

export const CreateClusterRequestOpenIDConnectConfig = {
  clientId: {
    minLength: 1,
  },
  groupsPrefix: {
    minLength: 1,
  },
  usernameClaim: {
    minLength: 1,
  },
  usernamePrefix: {
    minLength: 1,
  },
}

export const CreateClusterRequestPoolConfig = {
  name: {
    minLength: 1,
  },
}

export const CreatePoolRequest = {
  name: {
    minLength: 1,
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

export const UpdateClusterRequest = {
  name: {
    minLength: 1,
  },
}

export const UpdateClusterRequestAutoscalerConfig = {
  scaleDownUtilizationThreshold: {
    greaterThan: 0,
    lessThan: 1,
  },
}
