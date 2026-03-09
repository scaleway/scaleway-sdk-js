// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const BatchCreateMailboxesRequestMailboxParameters = {
  displayName: {
    maxLength: 64,
    minLength: 1,
  },
  localPart: {
    maxLength: 64,
    minLength: 1,
  },
  password: {
    maxLength: 128,
    minLength: 12,
  },
  recoveryEmail: {
    maxLength: 320,
    minLength: 6,
  },
}

export const CreateDomainRequest = {
  name: {
    maxLength: 253,
    minLength: 1,
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

export const ListMailboxesRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const UpdateMailboxRequest = {
  displayName: {
    maxLength: 64,
    minLength: 1,
  },
  newPassword: {
    maxLength: 128,
    minLength: 12,
  },
  recoveryEmail: {
    maxLength: 320,
    minLength: 6,
  },
}
