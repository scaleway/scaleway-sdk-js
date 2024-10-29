import { FetchResult, ViteNodeResolveId, RawSourceMap, ModuleCacheMap } from 'vite-node';
import { File, TaskResultPack, CancelReason, Task } from '@vitest/runner';
import { S as SerializedConfig } from './config.DCnyCTbs.js';
import { SnapshotResult } from '@vitest/snapshot';
import { T as TransformMode, U as UserConsoleLog, A as AfterSuiteRunMeta, E as Environment } from './environment.0M5R1SX_.js';

type MockFactoryWithHelper<M = unknown> = (importOriginal: <T extends M>() => Promise<T>) => any;
type MockFactory = () => any;
type MockMap = Map<string, Record<string, string | null | MockFactory>>;
interface PendingSuiteMock {
    id: string;
    importer: string;
    type: 'mock' | 'unmock';
    throwIfCached: boolean;
    factory?: MockFactory;
}

interface RuntimeRPC {
    fetch: (id: string, transformMode: TransformMode) => Promise<{
        externalize?: string;
        id?: string;
    }>;
    transform: (id: string, transformMode: TransformMode) => Promise<FetchResult>;
    resolveId: (id: string, importer: string | undefined, transformMode: TransformMode) => Promise<ViteNodeResolveId | null>;
    getSourceMap: (id: string, force?: boolean) => Promise<RawSourceMap | undefined>;
    onFinished: (files: File[], errors?: unknown[]) => void;
    onPathsCollected: (paths: string[]) => void;
    onUserConsoleLog: (log: UserConsoleLog) => void;
    onUnhandledError: (err: unknown, type: string) => void;
    onCollected: (files: File[]) => Promise<void>;
    onAfterSuiteRun: (meta: AfterSuiteRunMeta) => void;
    onTaskUpdate: (pack: TaskResultPack[]) => Promise<void>;
    onCancel: (reason: CancelReason) => void;
    getCountOfFailedTests: () => number;
    snapshotSaved: (snapshot: SnapshotResult) => void;
    resolveSnapshotPath: (testPath: string) => string;
}
interface RunnerRPC {
    onCancel: (reason: CancelReason) => void;
}

type ArgumentsType<T> = T extends (...args: infer A) => any ? A : never;
type ReturnType<T> = T extends (...args: any) => infer R ? R : never;
type PromisifyFn<T> = ReturnType<T> extends Promise<any> ? T : (...args: ArgumentsType<T>) => Promise<Awaited<ReturnType<T>>>;
type BirpcResolver = (name: string, resolved: (...args: unknown[]) => unknown) => ((...args: unknown[]) => unknown) | undefined;
interface ChannelOptions {
    /**
     * Function to post raw message
     */
    post: (data: any, ...extras: any[]) => any | Promise<any>;
    /**
     * Listener to receive raw message
     */
    on: (fn: (data: any, ...extras: any[]) => void) => any | Promise<any>;
    /**
     * Custom function to serialize data
     *
     * by default it passes the data as-is
     */
    serialize?: (data: any) => any;
    /**
     * Custom function to deserialize data
     *
     * by default it passes the data as-is
     */
    deserialize?: (data: any) => any;
}
interface EventOptions<Remote> {
    /**
     * Names of remote functions that do not need response.
     */
    eventNames?: (keyof Remote)[];
    /**
     * Maximum timeout for waiting for response, in milliseconds.
     *
     * @default 60_000
     */
    timeout?: number;
    /**
     * Custom resolver to resolve function to be called
     *
     * For advanced use cases only
     */
    resolver?: BirpcResolver;
    /**
     * Custom error handler
     */
    onError?: (error: Error, functionName: string, args: any[]) => boolean | void;
    /**
     * Custom error handler for timeouts
     */
    onTimeoutError?: (functionName: string, args: any[]) => boolean | void;
}
type BirpcOptions<Remote> = EventOptions<Remote> & ChannelOptions;
type BirpcFn<T> = PromisifyFn<T> & {
    /**
     * Send event without asking for response
     */
    asEvent: (...args: ArgumentsType<T>) => void;
};
type BirpcReturn<RemoteFunctions, LocalFunctions = Record<string, never>> = {
    [K in keyof RemoteFunctions]: BirpcFn<RemoteFunctions[K]>;
} & {
    $functions: LocalFunctions;
};

/** @deprecated unused */
type ResolveIdFunction = (id: string, importer?: string) => Promise<ViteNodeResolveId | null>;
type WorkerRPC = BirpcReturn<RuntimeRPC, RunnerRPC>;
interface ContextTestEnvironment {
    name: string;
    transformMode?: TransformMode;
    options: Record<string, any> | null;
}
interface ContextRPC {
    pool: string;
    worker: string;
    workerId: number;
    config: SerializedConfig;
    projectName: string;
    files: string[];
    environment: ContextTestEnvironment;
    providedContext: Record<string, any>;
    invalidates?: string[];
}
interface WorkerGlobalState {
    ctx: ContextRPC;
    config: SerializedConfig;
    rpc: WorkerRPC;
    current?: Task;
    filepath?: string;
    environment: Environment;
    environmentTeardownRun?: boolean;
    onCancel: Promise<CancelReason>;
    moduleCache: ModuleCacheMap;
    mockMap: MockMap;
    providedContext: Record<string, any>;
    durations: {
        environment: number;
        prepare: number;
    };
}

export type { BirpcOptions as B, ContextRPC as C, MockFactoryWithHelper as M, PendingSuiteMock as P, RuntimeRPC as R, WorkerGlobalState as W, BirpcReturn as a, RunnerRPC as b, ResolveIdFunction as c, WorkerRPC as d, ContextTestEnvironment as e, MockFactory as f, MockMap as g };
