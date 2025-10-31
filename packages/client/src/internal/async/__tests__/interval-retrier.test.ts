import { describe, expect, it } from 'vitest'
import {
  createExponentialBackoffStrategy,
  createFibonacciIntervalStrategy,
  createFixedIntervalStrategy,
  tryAtIntervals,
  waitForResource,
} from '../interval-retrier.js'
import { sleep } from '../sleep.js'

describe('createFixedIntervalStrategy', () => {
  it('always returns the same interval', () => {
    const fixedInterval = 0.5
    const strategy = createFixedIntervalStrategy(fixedInterval)
    for (let i = 0; i < 100; i += 1) {
      expect(strategy.next(0).value).toBe(fixedInterval)
    }
  })
})

describe('createFibonacciIntervalStrategy', () => {
  it('returns a fibonacci sequence with default base and factor', () => {
    const strategy = createFibonacciIntervalStrategy()
    const expectedSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34]
    for (const expectedNumber of expectedSequence) {
      expect(strategy.next(0).value).toBe(expectedNumber)
    }
  })

  it('returns a fibonacci sequence with custom base and factor', () => {
    const strategy = createFibonacciIntervalStrategy(500, 2)
    const expectedSequence = [500, 1000, 2500, 6000, 14500, 35000]
    for (const expectedNumber of expectedSequence) {
      expect(strategy.next(0).value).toBe(expectedNumber)
    }
  })
})

describe('createExponentialBackoffStrategy', () => {
  it('returns a sequence where all numbers are between min and max', () => {
    const strategy = createExponentialBackoffStrategy(1, 5)
    for (let index = 0; index < 10; index += 1) {
      const next = strategy.next(0).value
      expect(next >= 1 && next <= 100).toBe(true)
    }
  })

  it('uses the same number if min and max are the same', () => {
    const strategy = createExponentialBackoffStrategy(5, 5)
    for (let index = 0; index < 10; index += 1) {
      const next = strategy.next(0).value
      expect(next).toBe(5)
    }
  })

  it(`throws if minDelay isn't valid`, () => {
    try {
      createExponentialBackoffStrategy(0, 5).next(0)
    } catch (err) {
      expect((err as Error).message).toBe(
        `Waiter: minDelay must be >= 1 and maxDelay must be >= minDelay`,
      )
    }
  })

  it(`throws if maxDelay isn't valid`, () => {
    try {
      createExponentialBackoffStrategy(1, 0).next(0)
    } catch (err) {
      expect((err as Error).message).toBe(
        `Waiter: minDelay must be >= 1 and maxDelay must be >= minDelay`,
      )
    }

    try {
      createExponentialBackoffStrategy(2, 1).next(0)
    } catch (err) {
      expect((err as Error).message).toBe(
        `Waiter: minDelay must be >= 1 and maxDelay must be >= minDelay`,
      )
    }
  })
})

const mockLogic = (iterations: number, workingTime: number) => {
  let startDate: Date
  let counter = 0

  return async () => {
    if (counter === 0) {
      startDate = new Date()
    }
    counter += 1
    await sleep(workingTime)

    return {
      done: counter >= iterations,
      value: {
        doneIterations: counter,
        totalDuration: Date.now() - startDate.getTime(),
      },
    }
  }
}

describe('tryAtIntervals', () => {
  const zeroIntervalStrat = createFixedIntervalStrategy(0)

  it('does the proper number of iterations', async () => {
    const mLogic = mockLogic(3, 0)
    const result = await tryAtIntervals(mLogic, zeroIntervalStrat, 0.5)
    expect(result.doneIterations).toBe(3)
  })

  it('timeouts after 0s', () =>
    expect(
      tryAtIntervals(mockLogic(3, 5), zeroIntervalStrat, 0),
    ).rejects.toThrow(`Timeout after 0s`))

  it('timeouts after 10ms', () =>
    expect(
      tryAtIntervals(mockLogic(3, 5), zeroIntervalStrat, 0.01),
    ).rejects.toThrow(`Timeout after 0.01s`))

  it('uses default timeout', async () => {
    const mLogic = mockLogic(3, 0)
    const result = await tryAtIntervals(mLogic, zeroIntervalStrat)
    expect(result.doneIterations).toBe(3)
  })
})

describe('waitForResource', () => {
  it('resolves with non-transient status', () => {
    const result = waitForResource(
      res =>
        Promise.resolve(
          !['transient-one', 'transient-two'].includes(res.status),
        ),
      () => Promise.resolve({ message: 'All went fine.', status: 'final' }),
      {
        resourceId: 'random-uuid',
      },
      { maxDelay: 1, minDelay: 1 },
    )

    return expect(result).resolves.toStrictEqual({
      message: 'All went fine.',
      status: 'final',
    })
  })

  it('rejects after timeout as transient status is being returned', () => {
    const result = waitForResource(
      res =>
        Promise.resolve(
          !['transient-one', 'transient-two'].includes(res.status),
        ),
      () =>
        Promise.resolve({
          message: 'Still processing.',
          status: 'transient-two',
        }),
      {
        resourceId: 'random-uuid',
      },
      { timeout: 0.01 },
    )

    return expect(result).rejects.toThrow()
  })
})
