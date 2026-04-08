// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const queriesMetadata = {
  namespace: 'mailbox',
  version: 'v1alpha1',
  folderName: 'mailboxv1alpha1',
  services: [
    {
      apiClass: 'API',
      methods: [
        {
          methodName: 'listDomains',
          protoName: 'ListDomains',
          paramsType: 'ListDomainsRequest',
          returnType: 'ListDomainsResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Domain',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getDomain',
          protoName: 'GetDomain',
          paramsType: 'GetDomainRequest',
          returnType: 'Domain',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
          hasWaiter: true,
        },
        {
          methodName: 'getDomainRecords',
          protoName: 'GetDomainRecords',
          paramsType: 'GetDomainRecordsRequest',
          returnType: 'GetDomainRecordsResponse',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'listMailboxes',
          protoName: 'ListMailboxes',
          paramsType: 'ListMailboxesRequest',
          returnType: 'ListMailboxesResponse',
          isList: true,
          paginationType: 'offset',
          pageParamKey: 'page',
          listItemType: 'Mailbox',
          isPrivate: false,
          description: '"',
        },
        {
          methodName: 'getMailbox',
          protoName: 'GetMailbox',
          paramsType: 'GetMailboxRequest',
          returnType: 'Mailbox',
          isList: false,
          paginationType: 'none',
          isPrivate: false,
          description: '"',
          hasWaiter: true,
        },
      ],
    },
  ],
} as const

export type QueriesMetadata = typeof queriesMetadata
