// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const Capacity = {
  maxReplicas: {
    greaterThanOrEqual: 2,
  },
  minReplicas: {
    greaterThanOrEqual: 1,
  },
}

export const CreateInstanceGroupRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const CreateInstancePolicyRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
  value: {
    greaterThanOrEqual: 1,
  },
}

export const CreateInstanceTemplateRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const ListInstanceGroupEventsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListInstanceGroupsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListInstancePoliciesRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListInstanceTemplatesRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const Metric = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
  samplingRangeMin: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 60,
  },
}

export const UpdateInstanceGroupRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const UpdateInstanceGroupRequestCapacity = {
  maxReplicas: {
    greaterThanOrEqual: 2,
  },
  minReplicas: {
    greaterThanOrEqual: 1,
  },
}

export const UpdateInstancePolicyRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
  value: {
    greaterThanOrEqual: 1,
  },
}

export const UpdateInstancePolicyRequestMetric = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
  samplingRangeMin: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 60,
  },
}

export const UpdateInstanceTemplateRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const VolumeInstanceTemplate = {
  name: {
    minLength: 1,
  },
}
