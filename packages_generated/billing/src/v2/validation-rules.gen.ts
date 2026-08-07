// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateBudgetAlertRequest = {
  threshold: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ElectronicBillingApiCreateElectronicAddressRequest = {
  value: {
    maxLength: 115,
    minLength: 1,
  },
}

export const ElectronicBillingApiListElectronicAddressesRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ElectronicBillingApiUpdateElectronicAddressRequest = {
  value: {
    maxLength: 115,
    minLength: 1,
  },
}

export const UpdateBudgetAlertRequest = {
  threshold: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}
