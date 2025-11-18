import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { sleep } from '../sleep.js'

beforeAll(() => {
  vi.useFakeTimers()
  vi.spyOn(global, 'setTimeout')
})

afterAll(() => {
  vi.useRealTimers()
})

describe('sleep', () => {
  it('delays the proper amount of time', () => {
    const delay = 50 // 0.05s
    sleep(delay).catch(() => {
      /* noop */
    })
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), delay)
  })
})
