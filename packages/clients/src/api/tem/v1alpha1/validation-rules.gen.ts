// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

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
