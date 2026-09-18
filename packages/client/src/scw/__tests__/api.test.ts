import { describe, expect, it } from 'vitest'
import { API } from '../api.js'
import { createClient } from '../client.js'

class CustomAPI extends API {
  public getBaseURL = (): string => {
    if (this.client.settings.apiURL === undefined) {
      throw new Error('API URL is missing')
    }

    return this.client.settings.apiURL
  }
}

describe('API', () => {
  it('binds methods properly', () => {
    const api = new CustomAPI(createClient())

    const unboundMethod = api.getBaseURL
    expect(() => {
      unboundMethod()
    }).not.toThrow()
  })
})
