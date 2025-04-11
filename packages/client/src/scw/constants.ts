import pkg from '../../package.json'

export const { version } = pkg
export const userAgent = `scaleway-sdk-js/${version}`

export const SESSION_HEADER_KEY = 'x-session-token'
export const AUTH_HEADER_KEY = 'x-auth-token'
