// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const ContainerProbe = {
  failureThreshold: {
    greaterThanOrEqual: 3,
    lessThanOrEqual: 50,
  },
}

export const ContainerProbeHTTPProbe = {
  path: {
    maxLength: 100,
    minLength: 1,
  },
}

export const ContainerScalingOption = {}

export const CreateContainerRequest = {
  description: {
    maxLength: 255,
  },
  image: {
    maxLength: 255,
  },
  localStorageLimitBytes: {
    greaterThanOrEqual: 1000000000,
    lessThanOrEqual: 24456000000,
  },
  maxScale: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 50,
  },
  memoryLimitBytes: {
    greaterThanOrEqual: 128000000,
    lessThanOrEqual: 12288000000,
  },
  minScale: {
    lessThanOrEqual: 10,
  },
  mvcpuLimit: {
    greaterThanOrEqual: 70,
    lessThanOrEqual: 6000,
  },
  name: {
    maxLength: 34,
    minLength: 2,
    pattern: /^[a-z0-9]([-a-z0-9]*[a-z0-9])?$/,
  },
  port: {
    lessThanOrEqual: 65535,
  },
  privateNetworkId: {
    ignoreEmpty: true,
  },
}

export const CreateDomainRequest = {
  hostname: {
    maxLength: 63,
    minLength: 3,
  },
}

export const CreateNamespaceRequest = {
  description: {
    maxLength: 255,
  },
  name: {
    maxLength: 50,
    minLength: 1,
    pattern: /^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])$/,
  },
}

export const CreateTriggerRequest = {
  description: {
    maxLength: 255,
  },
  name: {
    maxLength: 50,
    minLength: 1,
  },
}

export const CreateTriggerRequestCronConfig = {
  body: {
    maxLength: 10000,
  },
  schedule: {
    maxLength: 255,
    minLength: 1,
  },
  timezone: {
    maxLength: 255,
    minLength: 1,
  },
}

export const CreateTriggerRequestDestinationConfig = {
  httpPath: {
    maxLength: 255,
    minLength: 1,
    prefix: '/',
  },
}

export const CreateTriggerRequestNATSConfig = {
  credentialsFileContent: {
    minLength: 1,
  },
  subject: {
    maxLength: 100,
    minLength: 1,
    pattern: /^[^\s]+$/,
  },
}

export const CreateTriggerRequestSQSConfig = {
  accessKeyId: {
    minLength: 1,
  },
  region: {
    maxLength: 20,
    minLength: 1,
  },
  secretAccessKey: {
    minLength: 1,
  },
}

export const ListContainersRequest = {
  name: {
    maxLength: 34,
    minLength: 4,
  },
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListDomainsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListNamespacesRequest = {
  name: {
    maxLength: 50,
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

export const ListTriggersRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const UpdateContainerRequest = {
  description: {
    maxLength: 255,
  },
  image: {
    maxLength: 255,
  },
  localStorageLimitBytes: {
    greaterThanOrEqual: 1000000000,
    lessThanOrEqual: 24456000000,
  },
  maxScale: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 50,
  },
  memoryLimitBytes: {
    greaterThanOrEqual: 128000000,
    lessThanOrEqual: 12288000000,
  },
  minScale: {
    lessThanOrEqual: 10,
  },
  mvcpuLimit: {
    greaterThanOrEqual: 70,
    lessThanOrEqual: 6000,
  },
  port: {
    lessThanOrEqual: 65535,
  },
  privateNetworkId: {
    ignoreEmpty: true,
  },
}

export const UpdateContainerRequestProbe = {
  failureThreshold: {
    greaterThanOrEqual: 3,
    lessThanOrEqual: 50,
  },
}

export const UpdateContainerRequestProbeHTTPProbe = {
  path: {
    maxLength: 100,
    minLength: 1,
  },
}

export const UpdateNamespaceRequest = {
  description: {
    maxLength: 255,
  },
}

export const UpdateTriggerRequest = {
  description: {
    maxLength: 255,
  },
  name: {
    maxLength: 50,
    minLength: 1,
  },
}

export const UpdateTriggerRequestCronConfig = {
  body: {
    maxLength: 10000,
  },
  schedule: {
    maxLength: 255,
    minLength: 1,
  },
  timezone: {
    maxLength: 255,
    minLength: 1,
  },
}

export const UpdateTriggerRequestDestinationConfig = {
  httpPath: {
    maxLength: 255,
    minLength: 1,
    prefix: '/',
  },
}

export const UpdateTriggerRequestNATSConfig = {
  credentialsFileContent: {
    minLength: 1,
  },
  subject: {
    maxLength: 100,
    minLength: 1,
    pattern: /^[^\s]+$/,
  },
}

export const UpdateTriggerRequestSQSConfig = {
  accessKeyId: {
    minLength: 1,
  },
  region: {
    maxLength: 20,
    minLength: 1,
  },
  secretAccessKey: {
    minLength: 1,
  },
}
