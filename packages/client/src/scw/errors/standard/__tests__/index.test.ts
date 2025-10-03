import { describe, expect, it } from 'vitest'
import type { JSONObject } from '../../../../helpers/json.js'
import { parseScalewayError } from '../../error-parser.js'
import { AlreadyExistsError } from '../already-exists-error.js'
import { DeniedAuthenticationError } from '../denied-authentication-error.js'
import { InvalidArgumentsError } from '../invalid-arguments-error.js'
import { OutOfStockError } from '../out-of-stock-error.js'
import { PermissionsDeniedError } from '../permissions-denied-error.js'
import { PreconditionFailedError } from '../precondition-failed-error.js'
import { QuotasExceededError } from '../quotas-exceeded-error.js'
import { ResourceExpiredError } from '../resource-expired-error.js'
import { ResourceLockedError } from '../resource-locked-error.js'
import { ResourceNotFoundError } from '../resource-not-found-error.js'
import { TooManyRequestsError } from '../too-many-requests-error.js'
import { TransientStateError } from '../transient-state-error.js'

describe('Empty input', () => {
  it(`uses the http status`, () => {
    expect(parseScalewayError(404, {}).message).toBe('http error 404')
  })
})

describe('Unrecognied error', () => {
  it(`parses message`, () => {
    expect(
      parseScalewayError(409, {
        message: 'Group is in use. You cannot delete it.',
        type: 'conflict',
      }).message,
    ).toBe('http error 409: Group is in use. You cannot delete it.')
  })
})

describe('InvalidArgumentsError', () => {
  const body: JSONObject = {
    details: [
      {
        argument_name: 'size',
        help_message: 'must be lower than 50GB',
        reason: 'constraint',
      },
      { argument_name: 'id', reason: 'required' },
      { argument_name: 'name', reason: 'unknown' },
      { argument_name: 'size', reason: 'format' },
      { argument_name: 42, reason: 'format' },
    ],
    type: 'invalid_arguments',
  }

  it(`parses a valid input`, () => {
    expect(parseScalewayError(400, body).toString()).toBe(
      'InvalidArgumentsError: invalid argument(s): size does not respect constraint, must be lower than 50GB; id is required; name is invalid for unexpected reason; size is wrongly formatted',
    )
  })

  it(`doesn't parse invalid details object`, () => {
    expect(
      InvalidArgumentsError.fromJSON(400, {
        ...body,
        details: {},
      }),
    ).toBeNull()
  })
})

describe('QuotasExceededError', () => {
  const body: JSONObject = {
    details: [
      {
        current: 10,
        project_id: 'b7a1cf21-1e90-464c-a9f6-375c4d1f4b64',
        quota: 10,
        resource: 'instance_volume',
      },
      {
        current: 80,
        organization_id: '72dd6741-d748-42e7-ba65-acd07447d3e9',
        quota: 100,
        resource: 'instance_volumes_l_ssd_total_gb',
      },
      {
        current: 70,
        quota: 100,
        resource: 'instance_volumes_l_ssd_total_gb',
      },
      {
        current: '70',
        quota: '100',
        resource: 'invalid_input',
      },
    ],
    type: 'quotas_exceeded',
  }

  expect(parseScalewayError(403, body).toString()).toContain(
    "quota(s) exceeded: Quotas reached: You have reached the maximum number of instance_volume authorized by your Organization. Access the quotas page from your Organization dashboard to manage quotas. for project 'b7a1cf21-1e90-464c-a9f6-375c4d1f4b64'; Quotas reached: You have reached the maximum number of instance_volumes_l_ssd_total_gb authorized by your Organization. Access the quotas page from your Organization dashboard to manage quotas. for organization '72dd6741-d748-42e7-ba65-acd07447d3e9'; Quotas reached: You have reached the maximum number of instance_volumes_l_ssd_total_gb authorized by your Organization. Access the quotas page from your Organization dashboard to manage quotas.",
  )

  it(`doesn't parse invalid details object`, () => {
    expect(
      QuotasExceededError.fromJSON(403, {
        ...body,
        details: {},
      }),
    ).toBeNull()
  })
})

describe('ResourceNotFoundError', () => {
  const body = {
    resource: 'instance_server',
    resource_id: 'f974feac-abae-4365-b988-8ec7d1cec10d',
    type: 'not_found',
  }

  it(`parses a valid input`, () => {
    expect(parseScalewayError(404, body).toString()).toBe(
      'ResourceNotFoundError: resource instance_server with ID f974feac-abae-4365-b988-8ec7d1cec10d is not found',
    )
  })

  it(`doesn't parse invalid input`, () => {
    expect(
      ResourceNotFoundError.fromJSON(404, {
        ...body,
        resource_id: 0,
      }),
    ).toBeNull()
  })
})

describe('ResourceLockedError', () => {
  const body = {
    resource: 'instance_server',
    resource_id: 'f974feac-abae-4365-b988-8ec7d1cec10d',
    type: 'locked',
  }

  it(`parses a valid input`, () => {
    expect(parseScalewayError(423, body).toString()).toBe(
      'ResourceLockedError: resource instance_server with ID f974feac-abae-4365-b988-8ec7d1cec10d is locked',
    )
  })

  it(`doesn't parse invalid input`, () => {
    expect(
      ResourceLockedError.fromJSON(423, { ...body, resource_id: 0 }),
    ).toBeNull()
  })
})

describe('OutOfStockError', () => {
  const body = {
    resource: 'kubernetes_cluster',
    type: 'out_of_stock',
  }

  it(`parses a valid input`, () => {
    expect(parseScalewayError(503, body).toString()).toBe(
      'OutOfStockError: resource kubernetes_cluster is out of stock',
    )
  })

  it(`doesn't parse invalid input`, () => {
    expect(OutOfStockError.fromJSON(503, { ...body, resource: 0 })).toBeNull()
  })
})

describe('ResourceExpiredError', () => {
  const body = {
    expired_since: '2017-01-15T01:30:15.01Z',
    resource: 'account_token',
    resource_id: 'SCWQPD3J3PTKJFJKFQJG',
    type: 'expired',
  }

  it(`parses a valid input`, () => {
    expect(parseScalewayError(410, body).toString()).toBe(
      'ResourceExpiredError: resource account_token with ID SCWQPD3J3PTKJFJKFQJG expired since 2017-01-15T01:30:15.010Z',
    )
  })

  it(`doesn't parse invalid input`, () => {
    expect(
      ResourceExpiredError.fromJSON(410, {
        ...body,
        expired_since: 0,
      }),
    ).toBeNull()
  })
})

describe('PermissionsDeniedError', () => {
  const body: JSONObject = {
    details: [
      { action: 'read', resource: 'instance_volume' },
      { action: 'read', wrong_key: 'instance_volume' },
    ],
    type: 'permissions_denied',
  }

  it(`parses a valid input`, () => {
    expect(parseScalewayError(503, body).toString()).toBe(
      'PermissionsDeniedError: insufficient permissions: read instance_volume',
    )
  })

  it(`doesn't parse invalid details object`, () => {
    expect(
      PermissionsDeniedError.fromJSON(503, {
        ...body,
        details: {},
      }),
    ).toBeNull()
  })
})

describe('DeniedAuthenticationError', () => {
  it(`parses a body for invalid argument `, () => {
    expect(
      parseScalewayError(401, {
        method: 'jwt',
        reason: 'invalid_argument',
        type: 'denied_authentication',
      }).toString(),
    ).toBe(
      'DeniedAuthenticationError: denied authentication: invalid jwt format or empty value',
    )
  })

  it(`parses a body for not found method`, () => {
    expect(
      parseScalewayError(401, {
        method: 'api_key',
        reason: 'not_found',
        type: 'denied_authentication',
      }).toString(),
    ).toBe(
      'DeniedAuthenticationError: denied authentication: api_key does not exist',
    )
  })

  it(`parses a body for expired method`, () => {
    expect(
      parseScalewayError(401, {
        method: 'jwt',
        reason: 'expired',
        type: 'denied_authentication',
      }).toString(),
    ).toBe('DeniedAuthenticationError: denied authentication: jwt is expired')
  })

  it(`parses a body for unknown reason`, () => {
    expect(
      parseScalewayError(401, {
        method: 'unknown_method',
        reason: 'unknown_reason',
        type: 'denied_authentication',
      }).toString(),
    ).toBe(
      'DeniedAuthenticationError: denied authentication: unknown reason for unknown_method',
    )
  })

  it(`doesn't parse invalid input`, () => {
    expect(
      DeniedAuthenticationError.fromJSON(401, { method: 'jwt' }),
    ).toBeNull()
  })
})

describe('PreconditionFailedError', () => {
  it(`parses a valid input for precondition unknown_precondition`, () => {
    expect(
      parseScalewayError(412, {
        help_message: '',
        precondition: 'unknown_precondition',
        type: 'precondition_failed',
      }).toString(),
    ).toBe('PreconditionFailedError: precondition failed: unknown_precondition')
  })

  it(`parses a valid input for precondition precondition_failed`, () => {
    expect(
      parseScalewayError(412, {
        help_message:
          'All servers must be removed from the private network before deleting it.',
        precondition: 'resource_still_in_use',
        type: 'precondition_failed',
      }).toString(),
    ).toBe(
      'PreconditionFailedError: precondition failed: resource_still_in_use, All servers must be removed from the private network before deleting it.',
    )
  })

  it(`parses a valid input for precondition attribute_must_be_set`, () => {
    expect(
      parseScalewayError(412, {
        help_message: '',
        precondition: 'attribute_must_be_set',
        type: 'precondition_failed',
      }).toString(),
    ).toBe(
      'PreconditionFailedError: precondition failed: attribute_must_be_set',
    )
  })

  it(`parses a valid input for unknown precondition`, () => {
    expect(
      parseScalewayError(412, {
        help_message: '',
        precondition: 'wrong_precondition_key',
        type: 'precondition_failed',
      }).toString(),
    ).toBe(
      'PreconditionFailedError: precondition failed: wrong_precondition_key',
    )
  })

  it(`doesn't parse invalid input`, () => {
    expect(
      PreconditionFailedError.fromJSON(412, {
        precondition: 0,
        type: 'precondition_failed',
      }),
    ).toBeNull()
  })
})

describe('TransientStateError', () => {
  const body = {
    current_state: 'starting',
    resource: 'instance_server',
    resource_id: 'f974feac-abae-4365-b988-8ec7d1cec10d',
    type: 'transient_state',
  }

  it(`parses a valid input`, () => {
    expect(parseScalewayError(409, body).toString()).toBe(
      'TransientStateError: resource instance_server with ID f974feac-abae-4365-b988-8ec7d1cec10d is in a transient state: starting',
    )
  })

  it(`doesn't parse invalid input`, () => {
    expect(
      TransientStateError.fromJSON(409, { ...body, resource_id: 0 }),
    ).toBeNull()
  })
})

describe('AlreadyExistsError', () => {
  const body = {
    help_message: 'The customer level NAME already exists',
    resource: 'NAME',
    resource_id: 'unknown',
    type: 'already_exists',
  }

  it(`parses a valid input`, () => {
    expect(parseScalewayError(409, body).toString()).toBe(
      'AlreadyExistsError: resource NAME with ID unknown already exists: The customer level NAME already exists',
    )
  })

  it(`doesn't parse invalid input`, () => {
    expect(
      AlreadyExistsError.fromJSON(409, { ...body, resource_id: 0 }),
    ).toBeNull()
  })
})

describe('TooManyRequestsError', () => {
  it(`parses a valid input with limit and reset_seconds`, () => {
    expect(
      parseScalewayError(429, {
        help_message:
          'You are limited to 3 requests per hour to reset your password',
        limit: {
          quota: 3,
          window_seconds: 60,
        },
        reset_seconds: 13,
        type: 'too_many_requests',
      }).toString(),
    ).toBe(
      'TooManyRequestsError: too many requests (quota is 3 for 60s, resets in 13s): You are limited to 3 requests per hour to reset your password',
    )
  })

  it(`parses a valid input with limit but no window`, () => {
    expect(
      parseScalewayError(429, {
        help_message: 'You are limited to 5 requests per day',
        limit: {
          quota: 5,
        },
        type: 'too_many_requests',
      }).toString(),
    ).toBe(
      'TooManyRequestsError: too many requests (quota is 5): You are limited to 5 requests per day',
    )
  })

  it(`parses a valid input with empty help message`, () => {
    expect(
      parseScalewayError(429, {
        help_message: '',
        type: 'too_many_requests',
      }).toString(),
    ).toBe('TooManyRequestsError: too many requests')
  })

  it(`parses a valid input with only reset_at`, () => {
    expect(
      parseScalewayError(429, {
        help_message: '',
        reset_at: '2022-05-23T15:00:00.01Z',
        type: 'too_many_requests',
      }).toString(),
    ).toBe(
      'TooManyRequestsError: too many requests (resets at 2022-05-23T15:00:00.010Z)',
    )
  })

  it(`doesn't parse invalid input`, () => {
    expect(
      TooManyRequestsError.fromJSON(429, {
        reset_at: '2022-05-23T15:00:00.01Z',
        type: 'too_many_requests',
      }),
    ).toBeNull()
  })
})
