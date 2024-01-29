import { describe, expect, it } from 'vitest'
import { parseScalewayError } from '../../error-parser'
import {
  InvalidArgumentsError,
  QuotasExceededError,
  ResourceNotFoundError,
  ScalewayError,
} from '../../standard'

describe('InvalidRequestError', () => {
  it(`transforms to InvalidArgumentsError when there are fields`, () => {
    const error = parseScalewayError(400, {
      fields: {
        'volumes.5.id': ['92 is not a valid UUID.'],
        'volumes.5.name': ['required key not provided'],
      },
      message: 'Validation Error',
      type: 'invalid_request_error',
    }) as InvalidArgumentsError
    expect(error).toBeInstanceOf(InvalidArgumentsError)
    expect(error.details).toEqual([
      {
        argumentName: 'volumes.5.id',
        helpMessage: '92 is not a valid UUID.',
        reason: 'constraint',
      },
      {
        argumentName: 'volumes.5.name',
        helpMessage: 'required key not provided',
        reason: 'constraint',
      },
    ])
    expect(error.message).toBe(
      'invalid argument(s): volumes.5.id does not respect constraint, 92 is not a valid UUID.; volumes.5.name does not respect constraint, required key not provided',
    )
  })

  it(`transforms to QuotasExceededError when message includes a specific text`, () => {
    const error = parseScalewayError(400, {
      message: 'Quota exceeded for this resource.',
      resource: 'compute_snapshots_type_b_ssd_available',
      type: 'invalid_request_error',
    }) as QuotasExceededError
    expect(error).toBeInstanceOf(QuotasExceededError)
    expect(error.list).toEqual([
      {
        current: 0,
        quota: 0,
        resource: 'compute_snapshots_type_b_ssd_available',
      },
    ])
    expect(error.message).toBe(
      'quota(s) exceeded: compute_snapshots_type_b_ssd_available has reached its quota (0/0)',
    )
  })

  it(`transforms to QuotasExceededError when message includes a specific text, no resource case`, () => {
    const error = parseScalewayError(400, {
      message: 'Quota exceeded for this resource.',
      type: 'invalid_request_error',
    }) as QuotasExceededError
    expect(error).toBeInstanceOf(QuotasExceededError)
    expect(error.list).toEqual([
      {
        current: 0,
        quota: 0,
        resource: '',
      },
    ])
  })

  it(`fallbacks to ScalewayError when there is only a message`, () => {
    const error = parseScalewayError(400, {
      message: 'server should be running',
      type: 'invalid_request_error',
    })
    expect(error).toBeInstanceOf(ScalewayError)
    expect(error.message).toBe('http error 400: server should be running')
  })

  it(`fallbacks on ScalewayError without a message`, () => {
    const error = parseScalewayError(400, {
      type: 'invalid_request_error',
    })
    expect(error).toBeInstanceOf(ScalewayError)
    expect(error.message).toBe('http error 400')
  })
})

describe('UnknownResourceError', () => {
  it(`transforms to ResourceNotFoundError with only the resource ID`, () => {
    const error = parseScalewayError(404, {
      message: `"11111111-1111-4111-8111-111111111142" not found`,
      type: 'unknown_resource',
    }) as ResourceNotFoundError
    expect(error).toBeInstanceOf(ResourceNotFoundError)
    expect(error.message).toBe(
      'resource  with ID 11111111-1111-4111-8111-111111111142 is not found',
    )
    expect(error.resource).toBe('')
    expect(error.resourceId).toBe('11111111-1111-4111-8111-111111111142')
  })

  it(`transforms to ResourceNotFoundError with the resource Name and ID`, () => {
    const error = parseScalewayError(404, {
      message: `Security group "11111111-1111-4111-8111-111111111112" not found`,
      type: 'unknown_resource',
    }) as ResourceNotFoundError
    expect(error).toBeInstanceOf(ResourceNotFoundError)
    expect(error.message).toBe(
      'resource security_group with ID 11111111-1111-4111-8111-111111111112 is not found',
    )
    expect(error.resource).toBe('security_group')
    expect(error.resourceId).toBe('11111111-1111-4111-8111-111111111112')
  })

  it('transforms to ResourceNotFoundError with the not found resource / single quote', () => {
    const error = parseScalewayError(404, {
      message: `Volume '11111111-1111-4111-8111-111111111111' not found`,
      type: 'unknown_resource',
    }) as ResourceNotFoundError
    expect(error).toBeInstanceOf(ResourceNotFoundError)
    expect(error.message).toBe(
      'resource volume with ID 11111111-1111-4111-8111-111111111111 is not found',
    )
    expect(error.resource).toBe('volume')
    expect(error.resourceId).toBe('11111111-1111-4111-8111-111111111111')
  })

  it(`transforms to ScalewayError when the message can't be analyzed`, () => {
    const error = parseScalewayError(404, {
      message: 'uncommon message',
      type: 'unknown_resource',
    })
    expect(error).toBeInstanceOf(ScalewayError)
    expect(error.message).toBe('http error 404: uncommon message')
  })

  it('do not transform to ResourceNotFoundError for invalid resource ID', () => {
    const error = parseScalewayError(404, {
      message: `Volume 'not-an-uuid' not found`,
      type: 'unknown_resource',
    })
    expect(error).not.toBeInstanceOf(ResourceNotFoundError)
    expect(error.message).toBe(`http error 404: Volume 'not-an-uuid' not found`)
  })

  it('fallbacks to ScalewayError without a message', () => {
    const error = parseScalewayError(404, {
      type: 'unknown_resource',
    })
    expect(error).toBeInstanceOf(ScalewayError)
    expect(error.message).toBe('http error 404')
  })
})
