// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateWorkflowDefinitionRequest = {
  description: {
    maxLength: 255,
  },
  name: {
    pattern: /^[A-Za-z0-9-_]{3,50}$/,
  },
}

export const CreateWorkflowDefinitionRequestCronScheduleConfig = {
  schedule: {
    maxLength: 255,
    minLength: 1,
  },
  timezoneIdentifier: {
    maxLength: 255,
    minLength: 1,
  },
}

export const CreateWorkflowDefinitionRequestWorkflowVersionConfig = {
  description: {
    maxLength: 255,
  },
  name: {
    pattern: /^[A-Za-z0-9-_]{3,50}$/,
  },
}

export const CronSchedule = {
  schedule: {
    maxLength: 255,
    minLength: 1,
  },
  timezoneIdentifier: {
    maxLength: 255,
    minLength: 1,
  },
}

export const ListWorkflowDefinitionsRequest = {
  name: {
    maxLength: 255,
    minLength: 1,
    pattern: /^[A-Za-z0-9-_]+$/,
  },
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const ListWorkflowRunsRequest = {
  page: {
    greaterThanOrEqual: 1,
  },
  pageSize: {
    greaterThanOrEqual: 1,
    lessThanOrEqual: 1000,
  },
}

export const UpdateWorkflowDefinitionRequest = {
  description: {
    maxLength: 255,
  },
  name: {
    maxLength: 50,
    minLength: 3,
    pattern: /^[A-Za-z0-9-_]+$/,
  },
}

export const UpdateWorkflowDefinitionRequestCronScheduleConfig = {
  schedule: {
    maxLength: 255,
    minLength: 1,
  },
  timezoneIdentifier: {
    maxLength: 255,
    minLength: 1,
  },
}
