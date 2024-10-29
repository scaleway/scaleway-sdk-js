export { collectTests, processError, startTests } from '@vitest/runner';
import { DiffOptions } from '@vitest/expect';
import { VitestExecutor } from './execute.js';
import { S as SerializedConfig, a as SerializedCoverageConfig } from './chunks/config.DCnyCTbs.js';
import { C as CoverageProvider, a as CoverageProviderModule } from './chunks/reporters.C_zwCd4j.js';
import * as spy$1 from '@vitest/spy';
import 'node:vm';
import 'vite-node/client';
import 'vite-node';
import './chunks/worker.C5iHKIaJ.js';
import '@vitest/snapshot';
import './chunks/environment.0M5R1SX_.js';
import '@vitest/pretty-format';
import '@vitest/snapshot/environment';
import 'vite';
import 'node:stream';
import '@vitest/snapshot/manager';
import 'vite-node/server';
import '@vitest/utils';
import '@vitest/utils/source-map';
import 'node:fs';
import 'chai';
import './chunks/benchmark.puBFxyfE.js';
import '@vitest/runner/utils';
import 'tinybench';

function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

var spy = /*#__PURE__*/_mergeNamespaces({
  __proto__: null
}, [spy$1]);

declare function setupCommonEnv(config: SerializedConfig): Promise<void>;
declare function loadDiffConfig(config: SerializedConfig, executor: VitestExecutor): Promise<DiffOptions | undefined>;
declare function loadSnapshotSerializers(config: SerializedConfig, executor: VitestExecutor): Promise<void>;

interface Loader {
    executeId: (id: string) => Promise<{
        default: CoverageProviderModule;
    }>;
}
declare function getCoverageProvider(options: SerializedCoverageConfig | undefined, loader: Loader): Promise<CoverageProvider | null>;
declare function startCoverageInsideWorker(options: SerializedCoverageConfig | undefined, loader: Loader): Promise<unknown>;
declare function takeCoverageInsideWorker(options: SerializedCoverageConfig | undefined, loader: Loader): Promise<unknown>;
declare function stopCoverageInsideWorker(options: SerializedCoverageConfig | undefined, loader: Loader): Promise<unknown>;

export { spy as SpyModule, getCoverageProvider, loadDiffConfig, loadSnapshotSerializers, setupCommonEnv, startCoverageInsideWorker, stopCoverageInsideWorker, takeCoverageInsideWorker };
