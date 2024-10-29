import { u as VitestRunMode, U as UserConfig, F as VitestOptions, o as Vitest, x as ResolvedConfig, W as WorkspaceProject, A as ApiConfig, L as Logger, G as TestSequencer, H as WorkspaceSpec } from './chunks/reporters.C_zwCd4j.js';
export { B as BaseCoverageOptions, E as BenchmarkUserOptions, $ as BrowserBuiltinProvider, a0 as BrowserCommand, a1 as BrowserCommandContext, q as BrowserConfigOptions, a5 as BrowserOrchestrator, Q as BrowserProvider, O as BrowserProviderInitializationOptions, Y as BrowserProviderModule, _ as BrowserProviderOptions, p as BrowserScript, a2 as BrowserServer, a3 as BrowserServerState, a4 as BrowserServerStateContext, r as BuiltinEnvironment, X as CDPSession, t as CSSModuleScopeStrategy, k as CoverageIstanbulOptions, j as CoverageOptions, C as CoverageProvider, a as CoverageProviderModule, h as CoverageReporter, l as CoverageV8Options, m as CustomProviderOptions, D as DepsOptimizationOptions, ag as FileDiagnostic, a8 as HTMLOptions, I as InlineConfig, a7 as JUnitOptions, a6 as JsonOptions, P as Pool, s as PoolOptions, J as ProcessPool, y as ProjectConfig, g as ReportContext, Z as ResolvedBrowserOptions, R as ResolvedCoverageOptions, al as ResolvedProjectConfig, ae as TaskOptions, a9 as TestCase, ad as TestCollection, af as TestDiagnostic, aa as TestFile, ac as TestProject, ah as TestResult, aj as TestResultFailed, ai as TestResultPassed, ak as TestResultSkipped, N as TestSequencerConstructor, ab as TestSuite, v as TransformModePatterns, c as TypeCheckCollectLineNumbers, d as TypeCheckCollectLines, f as TypeCheckContext, T as TypeCheckErrorInfo, b as TypeCheckRawErrorsMap, e as TypeCheckRootAndTarget, w as TypecheckConfig, z as UserWorkspaceConfig, V as VitestEnvironment, M as VitestPackageInstaller, K as getFilePoolName } from './chunks/reporters.C_zwCd4j.js';
import { UserConfig as UserConfig$1, Plugin, ResolvedConfig as ResolvedConfig$1 } from 'vite';
import * as vite from 'vite';
export { vite as Vite };
export { createServer, isFileServingAllowed, parseAst, parseAstAsync } from 'vite';
import { Writable } from 'node:stream';
import { P as ProvidedContext } from './chunks/environment.0M5R1SX_.js';
export { f as EnvironmentOptions, H as HappyDOMOptions, J as JSDOMOptions, O as OnServerRestartHandler } from './chunks/environment.0M5R1SX_.js';
import { R as RuntimeRPC } from './chunks/worker.C5iHKIaJ.js';
import createDebug from 'debug';
export { W as WorkerContext } from './chunks/worker.DKkAC4Qw.js';
export { SequenceHooks, SequenceSetupFiles } from '@vitest/runner';
export { b as RuntimeConfig } from './chunks/config.DCnyCTbs.js';
import '@vitest/pretty-format';
import 'vite-node';
import '@vitest/snapshot';
import 'vite-node/client';
import '@vitest/snapshot/manager';
import 'vite-node/server';
import '@vitest/utils';
import '@vitest/utils/source-map';
import 'node:fs';
import 'chai';
import './chunks/benchmark.puBFxyfE.js';
import '@vitest/runner/utils';
import 'tinybench';
import 'node:worker_threads';
import '@vitest/snapshot/environment';

declare function createVitest(mode: VitestRunMode, options: UserConfig, viteOverrides?: UserConfig$1, vitestOptions?: VitestOptions): Promise<Vitest>;

declare function VitestPlugin(options?: UserConfig, ctx?: Vitest): Promise<Plugin[]>;

interface CliOptions extends UserConfig {
    /**
     * Override the watch mode
     */
    run?: boolean;
    /**
     * Removes colors from the console output
     */
    color?: boolean;
    /**
     * Output collected tests as JSON or to a file
     */
    json?: string | boolean;
}
/**
 * Start Vitest programmatically
 *
 * Returns a Vitest instance if initialized successfully.
 */
declare function startVitest(mode: VitestRunMode, cliFilters?: string[], options?: CliOptions, viteOverrides?: UserConfig$1, vitestOptions?: VitestOptions): Promise<Vitest | undefined>;

interface CLIOptions {
    allowUnknownOptions?: boolean;
}
declare function parseCLI(argv: string | string[], config?: CLIOptions): {
    filter: string[];
    options: CliOptions;
};

declare function registerConsoleShortcuts(ctx: Vitest, stdin: NodeJS.ReadStream | undefined, stdout: NodeJS.WriteStream | Writable): () => void;

interface GlobalSetupContext {
    config: ResolvedConfig;
    provide: <T extends keyof ProvidedContext & string>(key: T, value: ProvidedContext[T]) => void;
}

interface MethodsOptions {
    cacheFs?: boolean;
}
declare function createMethodsRPC(project: WorkspaceProject, options?: MethodsOptions): RuntimeRPC;

declare function createDebugger(namespace: `vitest:${string}`): createDebug.Debugger | undefined;

declare function resolveFsAllow(projectRoot: string, rootConfigFile: string | false | undefined): string[];

declare function resolveApiServerConfig<Options extends ApiConfig & UserConfig>(options: Options, defaultPort: number): ApiConfig | undefined;
declare function resolveConfig(mode: VitestRunMode, options: UserConfig, viteConfig: ResolvedConfig$1, logger: Logger): ResolvedConfig;

declare class FilesNotFoundError extends Error {
    code: string;
    constructor(mode: 'test' | 'benchmark');
}
declare class GitNotFoundError extends Error {
    code: string;
    constructor();
}

declare const rootDir: string;
declare const distDir: string;

declare class BaseSequencer implements TestSequencer {
    protected ctx: Vitest;
    constructor(ctx: Vitest);
    shard(files: WorkspaceSpec[]): Promise<WorkspaceSpec[]>;
    sort(files: WorkspaceSpec[]): Promise<WorkspaceSpec[]>;
}

export { ApiConfig, BaseSequencer, GitNotFoundError, type GlobalSetupContext, ResolvedConfig, TestSequencer, FilesNotFoundError as TestsNotFoundError, UserConfig, Vitest, VitestPlugin, VitestRunMode, WorkspaceProject, WorkspaceSpec, createDebugger, createMethodsRPC, createVitest, distDir, parseCLI, registerConsoleShortcuts, resolveApiServerConfig, resolveConfig, resolveFsAllow, rootDir, startVitest };
