import { describe, expect, it } from 'vitest'
import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

describe('ScalewayError', () => {
  it('initializes from JSON', () => {
    expect(ScalewayError.fromJSON(400, {})?.message).toBe('http error 400')
  })

  it('returns proper name, even if class name has changed', () => {
    class AltError extends ScalewayError {}
    expect(new AltError(200, '').name).toBe('ScalewayError')
  })

  it(`returns only the status code for empty body`, () => {
    expect(new ScalewayError(400, {}).message).toBe(`http error 400`)
  })

  it(`handles a string body`, () => {
    expect(new ScalewayError(400, 'unknown error').message).toBe(
      `http error 400: unknown error`,
    )
  })

  it(`handles a non-JSON object`, () => {
    expect(new ScalewayError(400, [] as unknown as JSONObject).message).toBe(
      `http error 400`,
    )
  })

  it(`handles a resource field`, () => {
    expect(new ScalewayError(400, { resource: 'registry' }).message).toBe(
      `http error 400: resource registry`,
    )
  })

  it(`handles a message field`, () => {
    expect(
      new ScalewayError(400, { message: 'plain text message' }).message,
    ).toBe(`http error 400: plain text message`)

    expect(
      new ScalewayError(400, { message: 'plain text message' }).rawMessage,
    ).toBe(`plain text message`)
  })

  it(`handles 1 field with 1 message`, () => {
    expect(
      new ScalewayError(400, {
        fields: { project_id: ['value is required'] },
      }).message,
    ).toBe(`http error 400: project_id (value is required)`)
  })

  it(`handles 1 field with 2 messages`, () => {
    expect(
      new ScalewayError(400, {
        fields: { project_id: ['value is required', 'incorrect value'] },
      }).message,
    ).toBe(`http error 400: project_id (value is required, incorrect value)`)
  })

  it(`handles 2 fields`, () => {
    expect(
      new ScalewayError(400, {
        fields: {
          organization_id: ['project_id is already specified'],
          project_id: ['value is required'],
        },
      }).message,
    ).toBe(
      `http error 400: organization_id (project_id is already specified), project_id (value is required)`,
    )
  })
})
