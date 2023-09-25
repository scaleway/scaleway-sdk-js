export const isBrowser = (): boolean =>
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  typeof window !== 'undefined' && typeof window.document !== 'undefined'
