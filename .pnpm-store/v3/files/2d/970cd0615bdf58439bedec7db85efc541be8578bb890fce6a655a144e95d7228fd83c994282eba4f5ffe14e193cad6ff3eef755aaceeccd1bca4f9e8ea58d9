import * as v8 from 'v8';
import { S as SerializedConfig } from './chunks/config.DCnyCTbs.js';
import './chunks/reporters.C_zwCd4j.js';
import { W as WorkerContext } from './chunks/worker.DKkAC4Qw.js';
import { B as BirpcOptions, R as RuntimeRPC, C as ContextRPC, W as WorkerGlobalState } from './chunks/worker.C5iHKIaJ.js';
import { Awaitable } from '@vitest/utils';
import '@vitest/pretty-format';
import '@vitest/runner';
import '@vitest/snapshot';
import '@vitest/snapshot/environment';
import 'vite';
import 'vite-node';
import './chunks/environment.0M5R1SX_.js';
import 'node:stream';
import 'vite-node/client';
import '@vitest/snapshot/manager';
import 'vite-node/server';
import '@vitest/utils/source-map';
import 'node:fs';
import 'chai';
import './chunks/benchmark.puBFxyfE.js';
import '@vitest/runner/utils';
import 'tinybench';
import 'node:worker_threads';

type WorkerRpcOptions = Pick<BirpcOptions<RuntimeRPC>, 'on' | 'post' | 'serialize' | 'deserialize'>;
interface VitestWorker {
    getRpcOptions: (ctx: ContextRPC) => WorkerRpcOptions;
    runTests: (state: WorkerGlobalState) => Awaitable<unknown>;
    collectTests: (state: WorkerGlobalState) => Awaitable<unknown>;
}

declare function createThreadsRpcOptions({ port, }: WorkerContext): WorkerRpcOptions;
declare function createForksRpcOptions(nodeV8: typeof v8): WorkerRpcOptions;
/**
 * Reverts the wrapping done by `utils/config-helpers.ts`'s `wrapSerializableConfig`
 */
declare function unwrapSerializableConfig(config: SerializedConfig): SerializedConfig;

declare function provideWorkerState(context: any, state: WorkerGlobalState): WorkerGlobalState;

declare function run(ctx: ContextRPC): Promise<void>;
declare function collect(ctx: ContextRPC): Promise<void>;

declare function runVmTests(method: 'run' | 'collect', state: WorkerGlobalState): Promise<void>;

declare function runBaseTests(method: 'run' | 'collect', state: WorkerGlobalState): Promise<void>;

export { type VitestWorker, type WorkerRpcOptions, collect as collectVitestWorkerTests, createForksRpcOptions, createThreadsRpcOptions, provideWorkerState, runBaseTests, run as runVitestWorker, runVmTests, unwrapSerializableConfig };
