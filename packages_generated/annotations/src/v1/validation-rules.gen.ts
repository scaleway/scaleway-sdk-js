// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateKeyRequest = {
  description: {
    maxLength: 1024,
  },
  name: {
    maxLength: 128,
    minLength: 1,
    pattern: /^[_\pL][_\pL0-9]*$/,
  },
}

export const CreateValueRequest = {
  description: {
    maxLength: 1024,
  },
  name: {
    maxLength: 256,
    minLength: 1,
    pattern: /^[_\pL][_\pL0-9]*$/,
  },
}

export const ListBindingsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListKeysRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListValuesRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const UpdateKeyRequest = {
  description: {
    maxLength: 1024,
  },
  name: {
    maxLength: 128,
    minLength: 1,
    pattern: /^[_\pL][_\pL0-9]*$/,
  },
}

export const UpdateValueRequest = {
  description: {
    maxLength: 1024,
  },
  name: {
    maxLength: 256,
    minLength: 1,
    pattern: /^[_\pL][_\pL0-9]*$/,
  },
}
