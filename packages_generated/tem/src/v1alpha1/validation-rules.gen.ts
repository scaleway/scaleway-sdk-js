// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const BulkCreateBlocklistsRequest = {
  reason: {
    maxLength: 200,
  },
}

export const CreateDomainRequest = {
  domainName: {
    maxLength: 255,
    minLength: 1,
  },
}

export const CreateEmailRequest = {
  subject: {
    maxLength: 998,
  },
}

export const CreateEmailRequestAddress = {
  email: {
    minLength: 1,
  },
}

export const CreateEmailRequestAttachment = {
  name: {
    minLength: 1,
  },
  type: {
    minLength: 1,
  },
}

export const CreateEmailRequestHeader = {
  key: {
    minLength: 1,
  },
  value: {
    minLength: 1,
  },
}

export const CreateWebhookRequest = {
  name: {
    maxLength: 127,
    minLength: 3,
  },
  snsArn: {
    maxLength: 127,
    minLength: 3,
  },
}

export const ListBlocklistsRequest = {
  page: {
    greaterThan: 0,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListDomainsRequest = {
  page: {
    greaterThan: 0,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListEmailsRequest = {
  page: {
    greaterThan: 0,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
  search: {
    maxLength: 100,
    minLength: 3,
  },
  subject: {
    maxLength: 998,
  },
}

export const ListPoolsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListWebhookEventsRequest = {
  page: {
    greaterThan: 0,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const ListWebhooksRequest = {
  page: {
    greaterThan: 0,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 100,
  },
}

export const UpdateProjectSettingsRequestUpdatePeriodicReport = {
  sendingDay: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 28,
  },
  sendingHour: {
    greaterThanOrEqual: 0,
    lessThanOrEqual: 23,
  },
}

export const UpdateWebhookRequest = {
  name: {
    maxLength: 127,
    minLength: 3,
  },
  snsArn: {
    maxLength: 127,
    minLength: 3,
  },
}
