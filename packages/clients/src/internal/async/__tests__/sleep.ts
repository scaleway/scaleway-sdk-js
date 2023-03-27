import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals'
import { sleep } from '../sleep'

beforeAll(() => {
  jest.useFakeTimers()
  jest.spyOn(global, 'setTimeout')
})

afterAll(() => {
  jest.useRealTimers()
})

describe('sleep', () => {
  it('delays the proper amount of time', () => {
    const delay = 50 // 0.05s
    sleep(delay).catch(() => {})
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), delay)
  })
})
