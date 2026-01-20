/**
 * Asynchronous rate limiter with async/await support
 */
export class AsyncRateLimiter {
  private requestTimestamps: number[] = []
  private readonly windowSizeMs: number
  private readonly maxRequestsPerSecond: number

  constructor(maxRequestsPerSecond: number = 50, windowSizeMs: number = 1_000) {
    this.maxRequestsPerSecond = maxRequestsPerSecond
    this.windowSizeMs = windowSizeMs
  }

  /**
   * Async method that waits if needed to respect rate limits
   */
  async waitForPermission(): Promise<void> {
    const now = Date.now()
    this.cleanupExpiredRequests(now)

    console.debug('waitForPermission', {
      requestTimestamps: this.requestTimestamps,
      numberOfrequest: this.requestTimestamps.length,
      maxReqs: this.maxRequestsPerSecond,
    })

    if (this.requestTimestamps.length >= this.maxRequestsPerSecond) {
      const waitTime = this.windowSizeMs - (now - this.requestTimestamps[0])
      if (waitTime > 0) {
        console.debug('Backpressure requests')
        await new Promise(resolve => setTimeout(resolve, waitTime))
      }
    }

    // Record the request
    this.requestTimestamps.push(Date.now())
  }

  private cleanupExpiredRequests(now: number): void {
    const windowStart = now - this.windowSizeMs
    const validRequests = this.requestTimestamps.filter(ts => ts >= windowStart)
    this.requestTimestamps = validRequests
  }
}
