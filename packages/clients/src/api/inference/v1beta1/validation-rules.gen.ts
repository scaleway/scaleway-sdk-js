// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateDeploymentRequest = {
  maxSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 50,
  },
  minSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 50,
  },
  modelName: {
    maxLength: 255,
    minLength: 0,
    pattern: /^[A-Za-z0-9_-]+\/[A-Za-z0-9_.-]+(:\w+)?$/,
  },
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9-_]+$/,
  },
  nodeType: {
    maxLength: 64,
    minLength: 1,
  },
}

export const ListDeploymentsRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const ListModelsRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
  },
}

export const UpdateDeploymentRequest = {
  maxSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 50,
  },
  minSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 50,
  },
  name: {
    maxLength: 255,
    minLength: 1,
  },
}
