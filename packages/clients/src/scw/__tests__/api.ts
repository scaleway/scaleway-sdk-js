import { describe, expect, it } from '@jest/globals'
import { API } from '../api'
import { createClient } from '../client'

class CustomAPI extends API {
  getBaseURL = (): string => this.client.settings.apiURL
}

describe('API', () => {
  it('binds methods properly', () => {
    const api = new CustomAPI(createClient())
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const unboundMethod = api.getBaseURL
    expect(() => {
      unboundMethod()
    }).not.toThrow()
  })
})
