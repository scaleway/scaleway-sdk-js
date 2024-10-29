import { performance } from 'node:perf_hooks';
import { startTests, collectTests } from '@vitest/runner';
import 'pathe';
import '@vitest/runner/utils';
import { getSafeTimers } from '@vitest/utils';
import { g as getWorkerState } from './utils.Ck2hJTRs.js';
import './env.BU041cs9.js';
import { a as globalExpect, r as resetModules, v as vi } from './vi.fiQ7lMRF.js';
import { a as startCoverageInsideWorker, s as stopCoverageInsideWorker } from './coverage.CqfT4xaf.js';
import { a as resolveSnapshotEnvironment, s as setupChaiConfig, r as resolveTestRunner } from './index.R1VjssW9.js';
import { createRequire } from 'node:module';
import util from 'node:util';
import timers from 'node:timers';
import { installSourcemapsSupport } from 'vite-node/source-map';
import { KNOWN_ASSET_TYPES } from 'vite-node/constants';
import { V as VitestIndex } from './index.BfeNhc0N.js';
import { s as setupCommonEnv } from './setup-common.CNzatKMx.js';
import { c as closeInspector } from './inspector.70d6emsh.js';
import 'std-env';
import 'chai';
import './_commonjsHelpers.BFTU3MAI.js';
import '@vitest/expect';
import '@vitest/snapshot';
import '@vitest/utils/error';
import './tasks.BZnCS9aT.js';
import '@vitest/utils/source-map';
import './base.DSsbfkDg.js';
import './date.W2xKR2qe.js';
import '@vitest/spy';
import '../path.js';
import 'node:url';
import './rpc.B7Mfb-Yf.js';
import './index.BpSiYbpB.js';
import './benchmark.DDmpNjj-.js';
import './index.DYufA6CZ.js';
import './run-once.Sxe67Wng.js';

let globalSetup = false;
async function setupGlobalEnv(config, { environment }, executor) {
  await setupCommonEnv(config);
  Object.defineProperty(globalThis, "__vitest_index__", {
    value: VitestIndex,
    enumerable: false
  });
  const state = getWorkerState();
  if (!state.config.snapshotOptions.snapshotEnvironment) {
    state.config.snapshotOptions.snapshotEnvironment = await resolveSnapshotEnvironment(config, executor);
  }
  if (globalSetup) {
    return;
  }
  globalSetup = true;
  if (environment.transformMode === "web") {
    const _require = createRequire(import.meta.url);
    _require.extensions[".css"] = resolveCss;
    _require.extensions[".scss"] = resolveCss;
    _require.extensions[".sass"] = resolveCss;
    _require.extensions[".less"] = resolveCss;
    KNOWN_ASSET_TYPES.forEach((type) => {
      _require.extensions[`.${type}`] = resolveAsset;
    });
    process.env.SSR = "";
  } else {
    process.env.SSR = "1";
  }
  globalThis.__vitest_required__ = {
    util,
    timers
  };
  installSourcemapsSupport({
    getSourceMap: (source) => state.moduleCache.getSourceMap(source)
  });
  if (!config.disableConsoleIntercept) {
    await setupConsoleLogSpy();
  }
}
function resolveCss(mod) {
  mod.exports = "";
}
function resolveAsset(mod, url) {
  mod.exports = url;
}
async function setupConsoleLogSpy() {
  const { createCustomConsole } = await import('./console.Bgn7_A1x.js');
  globalThis.console = createCustomConsole();
}
async function withEnv({ environment }, options, fn) {
  globalThis.__vitest_environment__ = environment.name;
  globalExpect.setState({
    environment: environment.name
  });
  const env = await environment.setup(globalThis, options);
  try {
    await fn();
  } finally {
    const { setTimeout } = getSafeTimers();
    await new Promise((resolve) => setTimeout(resolve));
    await env.teardown(globalThis);
  }
}

async function run(method, files, config, environment, executor) {
  const workerState = getWorkerState();
  await setupGlobalEnv(config, environment, executor);
  await startCoverageInsideWorker(config.coverage, executor);
  if (config.chaiConfig) {
    setupChaiConfig(config.chaiConfig);
  }
  const runner = await resolveTestRunner(config, executor);
  workerState.onCancel.then((reason) => {
    closeInspector(config);
    runner.onCancel?.(reason);
  });
  workerState.durations.prepare = performance.now() - workerState.durations.prepare;
  workerState.durations.environment = performance.now();
  await withEnv(
    environment,
    environment.options || config.environmentOptions || {},
    async () => {
      workerState.durations.environment = performance.now() - workerState.durations.environment;
      for (const file of files) {
        const isIsolatedThreads = config.pool === "threads" && (config.poolOptions?.threads?.isolate ?? true);
        const isIsolatedForks = config.pool === "forks" && (config.poolOptions?.forks?.isolate ?? true);
        if (isIsolatedThreads || isIsolatedForks) {
          workerState.mockMap.clear();
          resetModules(workerState.moduleCache, true);
        }
        workerState.filepath = file;
        if (method === "run") {
          await startTests([file], runner);
        } else {
          await collectTests([file], runner);
        }
        vi.resetConfig();
        vi.restoreAllMocks();
      }
      await stopCoverageInsideWorker(config.coverage, executor);
    }
  );
  workerState.environmentTeardownRun = true;
}

export { run };
