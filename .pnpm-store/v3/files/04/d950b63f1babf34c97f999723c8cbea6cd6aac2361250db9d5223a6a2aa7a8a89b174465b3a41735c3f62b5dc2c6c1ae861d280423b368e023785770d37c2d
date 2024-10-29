import { createRequire } from 'node:module';
import util from 'node:util';
import timers from 'node:timers';
import { performance } from 'node:perf_hooks';
import { startTests, collectTests } from '@vitest/runner';
import { installSourcemapsSupport } from 'vite-node/source-map';
import { KNOWN_ASSET_TYPES } from 'vite-node/constants';
import { s as setupChaiConfig, r as resolveTestRunner, a as resolveSnapshotEnvironment } from '../chunks/index.R1VjssW9.js';
import { a as startCoverageInsideWorker, s as stopCoverageInsideWorker } from '../chunks/coverage.CqfT4xaf.js';
import { V as VitestIndex } from '../chunks/index.BfeNhc0N.js';
import { g as getWorkerState } from '../chunks/utils.Ck2hJTRs.js';
import { s as setupCommonEnv } from '../chunks/setup-common.CNzatKMx.js';
import { c as closeInspector } from '../chunks/inspector.70d6emsh.js';
import 'chai';
import 'pathe';
import '../path.js';
import 'node:url';
import '../chunks/rpc.B7Mfb-Yf.js';
import '@vitest/utils';
import '../chunks/index.BpSiYbpB.js';
import '../chunks/benchmark.DDmpNjj-.js';
import '@vitest/runner/utils';
import '../chunks/index.DYufA6CZ.js';
import '../chunks/env.BU041cs9.js';
import 'std-env';
import '../chunks/run-once.Sxe67Wng.js';
import '../chunks/vi.fiQ7lMRF.js';
import '../chunks/_commonjsHelpers.BFTU3MAI.js';
import '@vitest/expect';
import '@vitest/snapshot';
import '@vitest/utils/error';
import '../chunks/tasks.BZnCS9aT.js';
import '@vitest/utils/source-map';
import '../chunks/base.DSsbfkDg.js';
import '../chunks/date.W2xKR2qe.js';
import '@vitest/spy';

async function run(method, files, config, executor) {
  const workerState = getWorkerState();
  await setupCommonEnv(config);
  Object.defineProperty(globalThis, "__vitest_index__", {
    value: VitestIndex,
    enumerable: false
  });
  if (workerState.environment.transformMode === "web") {
    const _require = createRequire(import.meta.url);
    _require.extensions[".css"] = resolveCss;
    _require.extensions[".scss"] = resolveCss;
    _require.extensions[".sass"] = resolveCss;
    _require.extensions[".less"] = resolveCss;
    KNOWN_ASSET_TYPES.forEach((type) => {
      _require.extensions[`.${type}`] = resolveAsset;
    });
  }
  globalThis.__vitest_required__ = {
    util,
    timers
  };
  installSourcemapsSupport({
    getSourceMap: (source) => workerState.moduleCache.getSourceMap(source)
  });
  await startCoverageInsideWorker(config.coverage, executor);
  if (config.chaiConfig) {
    setupChaiConfig(config.chaiConfig);
  }
  const [runner, snapshotEnvironment] = await Promise.all([
    resolveTestRunner(config, executor),
    resolveSnapshotEnvironment(config, executor)
  ]);
  config.snapshotOptions.snapshotEnvironment = snapshotEnvironment;
  workerState.onCancel.then((reason) => {
    closeInspector(config);
    runner.onCancel?.(reason);
  });
  workerState.durations.prepare = performance.now() - workerState.durations.prepare;
  const { vi } = VitestIndex;
  for (const file of files) {
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
function resolveCss(mod) {
  mod.exports = "";
}
function resolveAsset(mod, url) {
  mod.exports = url;
}

export { run };
