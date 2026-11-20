import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { AbortError } from '../../../scw/errors/abort-error.js'
import { sleep } from '../sleep.js'

beforeAll(() => {
  vi.useFakeTimers()
  vi.spyOn(globalThis, 'setTimeout')
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
    expect(globalThis.setTimeout).toHaveBeenCalledTimes(1)
    expect(globalThis.setTimeout).toHaveBeenLastCalledWith(expect.any(Function), delay)
  })

  it('rejects immediately when the signal is already aborted', async () => {
    const controller = new AbortController()
    controller.abort()
    await expect(sleep(50, controller.signal)).rejects.toBeInstanceOf(AbortError)
  })

  it('rejects when the signal aborts during the delay', async () => {
    const controller = new AbortController()
    const initialTimerCount = vi.getTimerCount()
    const pending = sleep(5000, controller.signal)
    controller.abort()
    await expect(pending).rejects.toBeInstanceOf(AbortError)
    expect(vi.getTimerCount()).toBe(initialTimerCount)
  })

  it('supports fractional delays with a signal', async () => {
    const controller = new AbortController()
    const pending = sleep(50.5, controller.signal)
    await vi.advanceTimersByTimeAsync(51)
    await expect(pending).resolves.toBeUndefined()
  })
})
