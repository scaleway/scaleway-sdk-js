// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateDomainRequest = {
  domainName: {
    maxLength: 255,
    minLength: 1,
  },
}

export const CreateEmailRequest = {
  subject: {
    minLength: 6,
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
    minLength: 6,
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
