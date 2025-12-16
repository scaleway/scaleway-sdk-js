// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
	RunnerStatus,
	ServerPrivateNetworkServerStatus,
	ServerPrivateNetworkStatus,
	ServerStatus,
} from './types.gen.js'

/** Lists transient statutes of the enum {@link RunnerStatus}. */
export const RUNNER_TRANSIENT_STATUSES: RunnerStatus[] = ['waiting']

/** Lists transient statutes of the enum {@link ServerPrivateNetworkServerStatus}. */
export const SERVER_PRIVATE_NETWORK_SERVER_TRANSIENT_STATUSES: ServerPrivateNetworkServerStatus[] =
	['attaching', 'detaching']

/** Lists transient statutes of the enum {@link ServerPrivateNetworkStatus}. */
export const SERVER_PRIVATE_NETWORK_TRANSIENT_STATUSES: ServerPrivateNetworkStatus[] =
	['vpc_updating']

/** Lists transient statutes of the enum {@link ServerStatus}. */
export const SERVER_TRANSIENT_STATUSES: ServerStatus[] = [
	'starting',
	'rebooting',
	'updating',
	'locking',
	'unlocking',
	'reinstalling',
	'busy',
]
