// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateOrganizationRequest = {
  customerId: {
    maxLength: 256,
    minLength: 1,
  },
  organizationName: {
    maxLength: 256,
    minLength: 2,
  },
  ownerFirstname: {
    maxLength: 256,
    minLength: 2,
  },
  ownerLastname: {
    maxLength: 256,
    minLength: 2,
  },
  sirenNumber: {
    pattern: /^[0-9]{9}$/,
  },
}

export const ListOrganizationsRequest = {
  customerId: {
    maxLength: 256,
    minLength: 1,
  },
  page: {
    greaterThan: 0,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const RequestAdminRoleRequest = {
  password: {
    ignoreEmpty: true,
    maxLength: 72,
  },
  username: {
    maxLength: 64,
    minLength: 2,
    pattern: /^[a-zA-Z0-9@._-]+$/,
  },
}

export const UpdateOrganizationRequest = {
  comment: {
    maxLength: 1024,
    minLength: 1,
  },
  customerId: {
    maxLength: 256,
    minLength: 1,
  },
  name: {
    maxLength: 256,
    minLength: 2,
  },
  ownerFirstname: {
    maxLength: 256,
    minLength: 2,
  },
  ownerLastname: {
    maxLength: 256,
    minLength: 2,
  },
}
